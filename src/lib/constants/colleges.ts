import { AtheleteType } from "../types";
import { College } from "../types/college";

export const colleges: College[] = [
  // Big 10
  { name: "Ohio State University", conference: "Big 10" },
  { name: "University of Michigan", conference: "Big 10" },
  { name: "Pennsylvania State University", conference: "Big 10" },
  { name: "University of Wisconsin", conference: "Big 10" },
  { name: "University of Iowa", conference: "Big 10" },
  { name: "Michigan State University", conference: "Big 10" },
  { name: "University of Minnesota", conference: "Big 10" },
  { name: "University of Nebraska", conference: "Big 10" },
  { name: "University of Illinois", conference: "Big 10" },
  { name: "Northwestern University", conference: "Big 10" },
  { name: "Purdue University", conference: "Big 10" },
  { name: "Indiana University", conference: "Big 10" },
  { name: "University of Maryland", conference: "Big 10" },
  { name: "Rutgers University", conference: "Big 10" },
  { name: "University of California", conference: "Big 10" },
  { name: "University of Southern California", conference: "Big 10" },
  { name: "University of Oregon", conference: "Big 10" },
  { name: "University of Washington", conference: "Big 10" },
  // ACC
  { name: "Duke University", conference: "ACC" },
  { name: "University of North Carolina", conference: "ACC" },
  { name: "Clemson University", conference: "ACC" },
  { name: "Florida State University", conference: "ACC" },
  { name: "University of Miami", conference: "ACC" },
  { name: "Virginia Tech", conference: "ACC" },
  { name: "University of Virginia", conference: "ACC" },
  { name: "Georgia Tech", conference: "ACC" },
  { name: "Wake Forest University", conference: "ACC" },
  { name: "Boston College", conference: "ACC" },
  { name: "North Carolina State University", conference: "ACC" },
  { name: "University of Pittsburgh", conference: "ACC" },
  { name: "Syracuse University", conference: "ACC" },
  { name: "University of Louisville", conference: "ACC" },

  // Big 12
  { name: "University of Texas", conference: "Big 12" },
  { name: "University of Oklahoma", conference: "Big 12" },
  { name: "Baylor University", conference: "Big 12" },
  { name: "Texas Tech University", conference: "Big 12" },
  { name: "Oklahoma State University", conference: "Big 12" },
  { name: "Kansas State University", conference: "Big 12" },
  { name: "University of Kansas", conference: "Big 12" },
  { name: "Iowa State University", conference: "Big 12" },
  { name: "TCU", conference: "Big 12" },
  { name: "West Virginia University", conference: "Big 12" },

  // SEC
  { name: "University of Alabama", conference: "SEC" },
  { name: "University of Georgia", conference: "SEC" },
  { name: "Louisiana State University", conference: "SEC" },
  { name: "University of Florida", conference: "SEC" },
  { name: "Auburn University", conference: "SEC" },
  { name: "University of Tennessee", conference: "SEC" },
  { name: "University of Kentucky", conference: "SEC" },
  { name: "University of South Carolina", conference: "SEC" },
  { name: "Vanderbilt University", conference: "SEC" },
  { name: "University of Missouri", conference: "SEC" },
  { name: "University of Arkansas", conference: "SEC" },
  { name: "Mississippi State University", conference: "SEC" },
  { name: "University of Mississippi", conference: "SEC" },
  { name: "Texas A&M University", conference: "SEC" }
] as const;

export const conferences = ['SEC', "Big 12", 'ACC', "Big 10"]

export const ATHLETE_MULTIPLIER: Record<AtheleteType, number> = {
  [AtheleteType.YOUTH]: 0.65,
  [AtheleteType.COLLEGE]: 1.0,
  [AtheleteType.PRO]: 2.0,
};