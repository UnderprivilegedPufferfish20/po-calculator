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