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


export interface College {
  name: string;
  conference: ConferenceType;
}


export interface CollegeCardProps {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
  onSelect: (name: string) => void;
  isSelected: boolean;
}