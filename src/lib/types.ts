export type AthleteType = 'Youth Athelete' | 'College Athelete' | 'Pro Athelete' | null
export type smFollowers = {platform: string, cnt: number}[]
export type SelectedSportType = {
  name: string,
  imgUrl: string
  position?: string
}
export type SportType = {
  name: string,
  imgUrl: string
  positions?: string[]
}


export interface SocialMediaPlatform {
  value: string;
  label: string;
  icon: string;
}

export interface SelectedPlatform extends SocialMediaPlatform {
  followers: number;
}

export type PlatformValue = 'instagram' | 'twitter' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'snapchat' | 'pinterest' | 'twitch' | 'reddit';



export interface College {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
}

export type ConferenceType = 'Big 10' | 'ACC' | 'Big 12' | 'SEC';

export interface SocialMediaData {
  platforms: SelectedPlatform[];
  totalReach: number;
}

export interface SavedUserData {
  athleteType: AthleteType | null;
  sportPlayed: SelectedSportType | null;
  socialMediaData: SocialMediaData | null;
  selectedColleges: string[];
}

export interface CollegeCardProps {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
  onSelect: (name: string) => void;
  isSelected: boolean;
}