import { MoneyRange } from ".";
import { PlatformBlock, PostValueByMedium } from "./social_media";

export interface College {
  name: string;
  conference: ConferenceType
}

export type ConferenceType = 'Big 10' | 'ACC' | 'Big 12' | 'SEC';


export interface CollegeCardProps {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
  onSelect: (name: string) => void;
  isSelected: boolean;
}

export type CollegeEstimate = {
  college: string;
  overall: PostValueByMedium;           // sum across platforms
  nilCareerValue: MoneyRange;           // multi-year projection
  platformSpecific: PlatformBlock[];    // per-platform image/video ranges
};