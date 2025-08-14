import { ATHLETE_MULTIPLIER } from "../constants/colleges";
import { PLATFORM_WEIGHTS } from "../constants/social_media";
import { POSITION_MULTIPLIER, SPORT_MULTIPLIER } from "../constants/sports";
import { AtheleteType, SportType, MoneyRange, PlayerValueResult } from "../types";
import { CollegeEstimate } from "../types/college";
import { SelectedPlatform, PostValueByMedium, PlatformBlock } from "../types/social_media";

function engagementRate(followers: number): number {
  if (followers <= 0) return 0.0;
  if (followers < 10_000) return 0.05;      // 5%
  if (followers < 100_000) return 0.035;    // 3.5%
  if (followers < 1_000_000) return 0.02;   // 2.0%
  return 0.012;                              // 1.2%
}

// CPM grows with log10 followers, capped to a sensible range.
function baseCPM(followers: number): number {
  const log = Math.log10(Math.max(1, followers));
  const cpm = 8 + 6 * log;   // 1k ~ $14, 10k ~ $20, 100k ~ $26, 1M ~ $32
  return Math.min(36, Math.max(8, cpm));
}

// Monthly sponsored post capacity by size (per platform).
function monthlySlots(followers: number): number {
  if (followers < 10_000) return 2;
  if (followers < 100_000) return 3;
  if (followers < 1_000_000) return 4;
  return 5;
}

// Projection horizon by athlete type (years).
function horizonYears(type: AtheleteType | null): number {
  if (!type) return 3;
  switch (type) {
    case AtheleteType.YOUTH: return 2;
    case AtheleteType.COLLEGE: return 4;
    case AtheleteType.PRO: return 6;
  }
}

// Round to nearest $10 for cleaner UI.
function round10(n: number): number {
  return Math.round(n / 10) * 10;
}

function clampNonNeg(n: number): number {
  return Math.max(0, n);
}

function lookupPlatformWeight(p: string): number {
  const key = p.toLowerCase();
  return PLATFORM_WEIGHTS[key] ?? 0.8;
}

function lookupSportMultiplier(sport: SportType | null): number {
  if (!sport || !sport.name) return 1.0;
  return SPORT_MULTIPLIER[sport.name.toLowerCase()] ?? 1.0;
}

function lookupPositionMultiplier(sport: SportType | null): number {
  if (!sport?.positions?.length) return 1.0;
  // Take the max nudge among provided positions.
  let m = 1.0;
  for (const pos of sport.positions) {
    const v = POSITION_MULTIPLIER[pos.toLowerCase()] ?? 1.0;
    if (v > m) m = v;
  }
  return m;
}

function computePostValueUSD(
  followers: number,
  platformValue: string,
  type: AtheleteType | null,
  sport: SportType | null
): { image: number; video: number } {
  if (followers <= 0) return { image: 0, video: 0 };

  const er = engagementRate(followers);
  const cpm = baseCPM(followers);
  const platformW = lookupPlatformWeight(platformValue);
  const athleteW = type ? ATHLETE_MULTIPLIER[type] : 1.0;
  const sportW = lookupSportMultiplier(sport);
  const positionW = lookupPositionMultiplier(sport);

  const base = followers * er * cpm / 1000; // USD
  const core = base * platformW * athleteW * sportW * positionW;

  const image = core;            // image as baseline
  const video = core * 1.25;     // video premium (richer format)

  return { image, video };
}

function toRange(estimate: number): MoneyRange {
  const low = round10(clampNonNeg(estimate * 0.8));
  const high = round10(clampNonNeg(estimate * 1.8));
  return { low, high };
}



export function calculatePlayerValue(
  athleteType: AtheleteType | null,
  selectedColleges: string[],
  selectedPlatforms: SelectedPlatform[],
  sportPlayed: SportType | null
): PlayerValueResult {
  // Precompute per-platform post values + monthly slot counts.
  const perPlatform = selectedPlatforms.map((p) => {
    const est = computePostValueUSD(p.followers, p.name, athleteType, sportPlayed);
    const rngImage = toRange(est.image);
    const rngVideo = toRange(est.video);
    return {
      name: p.name,
      followers: p.followers,
      values: { image: rngImage, video: rngVideo },
      // For NIL projection:
      pointEstimateImage: est.image,
      pointEstimateVideo: est.video,
      slotsPerMonth: monthlySlots(p.followers),
    };
  });

  // Overall (sum across platforms).
  const overallPointImage = perPlatform.reduce((s, x) => s + x.pointEstimateImage, 0);
  const overallPointVideo = perPlatform.reduce((s, x) => s + x.pointEstimateVideo, 0);
  const overallRange: PostValueByMedium = {
    image: toRange(overallPointImage),
    video: toRange(overallPointVideo),
  };

  // NIL Career Value (multi-year projection; low/high mirror post-value ranges).
  // Blend image/video 50/50 and multiply by monthly slots across platforms.
  const blendedPointPerPost =
    (overallPointImage + overallPointVideo) / 2;

  const totalMonthlySlots = perPlatform.reduce((s, x) => s + x.slotsPerMonth, 0);
  const years = horizonYears(athleteType);

  const annualPoint = blendedPointPerPost * totalMonthlySlots * 12;
  const ncv: MoneyRange = {
    low: round10(clampNonNeg(annualPoint * years * 0.8)),
    high: round10(clampNonNeg(annualPoint * years * 1.8)),
  };

  // Build per-college blocks (same estimates but repeated per chosen college).
  const colleges: CollegeEstimate[] = selectedColleges.map((college) => {
    const platformSpecific: PlatformBlock[] = perPlatform.map((x) => ({
      name: x.name,
      values: x.values,
    }));
    return {
      college,
      overall: overallRange,
      nilCareerValue: ncv,
      platformSpecific,
    };
  });

  return {
    athleteType,
    sport: sportPlayed,
    colleges,
  };
}