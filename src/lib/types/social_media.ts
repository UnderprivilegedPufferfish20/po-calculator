export interface SocialMediaPlatform {
  name: string
}

export interface SelectedPlatform extends SocialMediaPlatform {
  followers: number;
}

export type PlatformValue = 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'snapchat' | 'pinterest' | 'twitch' | 'reddit';