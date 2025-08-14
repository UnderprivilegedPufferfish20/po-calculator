import { SocialMediaPlatform } from "../types/social_media";

export const socialMediaPlatforms: readonly SocialMediaPlatform[] = [
  { name: 'instagram' },
  { name: 'x' },
  { name: 'facebook' },
  { name: 'tiktok' },
  { name: 'youtube'},
  { name: 'snapchat' },
  { name: 'twitch' },
  { name: 'reddit' },
] as const;


export const PLATFORM_WEIGHTS: Record<string, number> = {
  instagram: 1.0,
  tiktok: 1.15,
  youtube: 1.45,
  x: 0.75,
  twitter: 0.75, // alias
  snapchat: 0.7,
  pinterest: 0.6,
  facebook: 0.8,
  threads: 0.8,
  linkedin: 0.7,
};
