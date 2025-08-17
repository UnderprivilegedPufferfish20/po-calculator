export interface College {
  name: string;
  conference: ConferenceType
}

export type ConferenceType = 'Big 10' | 'ACC' | 'Big 12' | 'SEC';