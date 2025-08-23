import { AthleteType } from "../types/athlete";

export const collegeMultipliers: Record<string, number> = {
'Ohio State': 2.05,
'Texas': 1.84,
'Georgia': 1.81,
'Texas A&M': 1.73,
'LSU': 1.66,
'Michigan': 1.62,
'Alabama': 1.59,
'Florida': 1.58,
'Clemson': 1.52,
'Oklahoma': 1.48,

};


export const sportMultipliers: Record<string, number> = {
'Football': 3.0,
'Basketball': 2.0,
'Baseball': 1.2,
'Volleyball': 1.0,
'Swimming': 0.5,
// Default for other sports
};


export const athleteMultipliers: Record<AthleteType, number> = {
"Youth": 0.5,
"College": 1.0,
"Pro": 1.5,
};


export const platformMultipliers: Record<string, number> = {
'Instagram': 1.5,
'TikTok': 2.0,
'X': 1.0, 
'YouTube': 1.8,
'Facebook': 0.8,
};