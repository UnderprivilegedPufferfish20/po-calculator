import { MoneyRange } from ".";

export type smFollowers = {platform: string, cnt: number}[]

export interface SocialMediaPlatform {
  name: string
}

export interface SelectedPlatform extends SocialMediaPlatform {
  followers: number;
}

export type PlatformValue = 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'snapchat' | 'pinterest' | 'twitch' | 'reddit';

export interface SocialMediaData {
  platforms: SelectedPlatform[];
  totalReach: number;
}

export type PostValueByMedium = {
  image: MoneyRange;
  video: MoneyRange;
};

export type PlatformBlock = {
  name: string;       // platform value (e.g., "instagram")
  values: PostValueByMedium;
};