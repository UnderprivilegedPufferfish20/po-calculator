import { SocialMediaPlatform } from "../types/social_media";

export const socialMediaPlatforms: readonly SocialMediaPlatform[] = [
  { value: 'instagram', label: 'Instagram', icon: '📸' },
  { value: 'twitter', label: 'Twitter/X', icon: '🐦' },
  { value: 'facebook', label: 'Facebook', icon: '👥' },
  { value: 'tiktok', label: 'TikTok', icon: '🎵' },
  { value: 'youtube', label: 'YouTube', icon: '📺' },
  { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { value: 'snapchat', label: 'Snapchat', icon: '👻' },
  { value: 'pinterest', label: 'Pinterest', icon: '📌' },
  { value: 'twitch', label: 'Twitch', icon: '🎮' },
  { value: 'reddit', label: 'Reddit', icon: '🤖' },
] as const;