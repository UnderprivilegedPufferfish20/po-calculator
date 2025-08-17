export type SportType = {
  name: string,
  positions?: string[]
}

export enum AtheleteType {
  YOUTH = "Youth Athlete",
  PRO = "Pro Athlete",
  COLLEGE = "College Athlete"
}


export enum Stage {
  ATHLETE_SELECT = 'AS',
  SPORT_SELECT = 'SS',
  SOCIAL_MEDIA_SELECT = "SMS",
  COLLEGE_SELECT = "CS",
  END = "E"
}