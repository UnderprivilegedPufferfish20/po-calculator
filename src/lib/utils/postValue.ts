import { AtheleteType } from "../types/athlete";
import { CalculatorInput, CalculatorOutput, MediumEstimation, ValueEstimation } from "../types/nil";
import logCalculation from "../actions/calculations";

// Hardcoded multipliers based on research data
// College multipliers derived from NIL collective spending (spending in $M / 10)
const collegeMultipliers: Record<string, number> = {
  'Ohio State': 2.05,
  'Texas': 1.84,
  'Georgia': 1.81,
  'Texas A&M': 1.73,
  'LSU': 1.66,
  'Michigan': 1.62,
  'Alabama': 1.59,
  'Florida': 1.58,
  'Clemson': 1.52,
  'Oklahoma': 1.48,
  // Add more as needed; default will be 1.0 for unknown colleges
};

// Sport multipliers: Football and Basketball dominate NIL earnings
const sportMultipliers: Record<string, number> = {
  'Football': 3.0,
  'Basketball': 2.0,
  'Baseball': 1.2,
  'Volleyball': 1.0,
  'Swimming': 0.5,
  // Default for other sports
};

// Athlete type multipliers: Youth lower, College standard, Pro higher
const athleteMultipliers: Record<AtheleteType, number> = {
  [AtheleteType.YOUTH]: 0.5,
  [AtheleteType.COLLEGE]: 1.0,
  [AtheleteType.PRO]: 1.5,
};

// Platform multipliers: Based on influence for NIL (e.g., TikTok viral, Instagram strong for sponsorships)
const platformMultipliers: Record<string, number> = {
  'Instagram': 1.5,
  'TikTok': 2.0,
  'X': 1.0, // Formerly Twitter
  'YouTube': 1.8,
  'Facebook': 0.8,
  // Default for others
};

export async function calculateNILValue(input: CalculatorInput): Promise<{
  calculationResults: CalculatorOutput;
  databaseResults: Awaited<ReturnType<typeof logCalculation>>;
}> {
  const { athleteType, selectedColleges, selectedPlatforms, sportPlayed } = input;

  const athleteMult = athleteMultipliers[athleteType];
  const sportMult = sportMultipliers[sportPlayed.name] || 1.0; // Default to 1.0 if sport not in map

  const results: CalculatorOutput = [];

  for (const college of selectedColleges) {
    const collegeMult = collegeMultipliers[college] || 1.0; // Default to 1.0 if college not in map

    // Compute projected platform values (earnings per image/video post, adjusted by multipliers)
    const platformValues = selectedPlatforms.map((plat: any) => {
      const platMult = platformMultipliers[plat.name] || 1.0;
      const followers = plat.followers;

      // Base earnings per post (approximate influencer rates: $0.001 to $0.005 per follower for image, higher for video)
      const baseImageLow = followers * 0.001;
      const baseImageHigh = followers * 0.005;
      const baseVideoLow = followers * 0.002;
      const baseVideoHigh = followers * 0.01;

      // Adjust by multipliers (athlete type, sport, college, platform)
      const imageLow = baseImageLow * athleteMult * sportMult * collegeMult * platMult;
      const imageHigh = baseImageHigh * athleteMult * sportMult * collegeMult * platMult;
      const videoLow = baseVideoLow * athleteMult * sportMult * collegeMult * platMult;
      const videoHigh = baseVideoHigh * athleteMult * sportMult * collegeMult * platMult;

      return {
        name: plat.name,
        values: {
          image: { low: Math.round(imageLow), high: Math.round(imageHigh) },
          video: { low: Math.round(videoLow), high: Math.round(videoHigh) },
        },
      };
    });

    // Compute overall (sum of all platforms' projected values)
    let overallImageLow = 0;
    let overallImageHigh = 0;
    let overallVideoLow = 0;
    let overallVideoHigh = 0;

    platformValues.forEach((pv) => {
      overallImageLow += pv.values.image.low;
      overallImageHigh += pv.values.image.high;
      overallVideoLow += pv.values.video.low;
      overallVideoHigh += pv.values.video.high;
    });

    const overall: MediumEstimation = {
      image: { low: overallImageLow, high: overallImageHigh },
      video: { low: overallVideoLow, high: overallVideoHigh },
    };

    // Compute NIL Career Value (NCV): Projected career earnings
    // Assume career length factor (Youth: 2 years, College: 4 years, Pro: 10 years)
    // Base on average annual earnings from media (avg of image/video ranges) * years
    const careerLength = athleteType === AtheleteType.YOUTH ? 2 : athleteType === AtheleteType.COLLEGE ? 4 : 10;
    const avgAnnualLow = (overallImageLow + overallVideoLow) / 2;
    const avgAnnualHigh = (overallImageHigh + overallVideoHigh) / 2;
    const ncvLow = Math.round(avgAnnualLow * careerLength * 10); // Scaled up for realism (NIL averages ~$21k/year for college)
    const ncvHigh = Math.round(avgAnnualHigh * careerLength * 10); // Adjust scale to match average NIL data (~$21k avg, but ranges vary)

    const ncv: ValueEstimation = { low: ncvLow, high: ncvHigh };

    results.push({
      name: college,
      ncv,
      overall,
      platforms: platformValues,
    });
  }

  // Log the calculation to the database
  const databaseResults = await logCalculation(input, results);

  return {
    calculationResults: results,
    databaseResults,
  };
}