import { SocialMediaData } from "./social_media"

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

export enum AtheleteType {
  YOUTH = "Youth Athlete",
  PRO = "Pro Athlete",
  COLLEGE = "College Athlete"
}




export interface SavedUserData {
  athleteType: AtheleteType | null;
  sportPlayed: SelectedSportType | null;
  socialMediaData: SocialMediaData | null;
  selectedColleges: string[];
}






