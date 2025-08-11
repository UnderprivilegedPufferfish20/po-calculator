export type smFollowers = {platform: string, cnt: number}[]

export interface SocialMediaPlatform {
  value: string;
  label: string;
  icon: string;
}

export interface SelectedPlatform extends SocialMediaPlatform {
  followers: number;
}

export type PlatformValue = 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'snapchat' | 'pinterest' | 'twitch' | 'reddit';

export interface SocialMediaData {
  platforms: SelectedPlatform[];
  totalReach: number;
}

export interface SocialMediaData {
  platforms: SelectedPlatform[];
  totalReach: number;
}