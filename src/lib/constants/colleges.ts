import { College } from "../types/college";

export const colleges: College[] = [
  // Big 10
  { name: "Ohio State University", conference: "Big 10", state: "Ohio" },
  { name: "University of Michigan", conference: "Big 10", state: "Michigan" },
  { name: "Pennsylvania State University", conference: "Big 10", state: "Pennsylvania" },
  { name: "University of Wisconsin", conference: "Big 10", state: "Wisconsin" },
  { name: "University of Iowa", conference: "Big 10", state: "Iowa" },
  { name: "Michigan State University", conference: "Big 10", state: "Michigan" },
  { name: "University of Minnesota", conference: "Big 10", state: "Minnesota" },
  { name: "University of Nebraska", conference: "Big 10", state: "Nebraska" },
  { name: "University of Illinois", conference: "Big 10", state: "Illinois" },
  { name: "Northwestern University", conference: "Big 10", state: "Illinois" },
  { name: "Purdue University", conference: "Big 10", state: "Indiana" },
  { name: "Indiana University", conference: "Big 10", state: "Indiana" },
  { name: "University of Maryland", conference: "Big 10", state: "Maryland" },
  { name: "Rutgers University", conference: "Big 10", state: "New Jersey" },
  { name: "University of California", conference: "Big 10", state: "California" },
  { name: "University of Southern California", conference: "Big 10", state: "California" },
  { name: "University of Oregon", conference: "Big 10", state: "Oregon" },
  { name: "University of Washington", conference: "Big 10", state: "Washington" },
  
  // ACC
  { name: "Duke University", conference: "ACC", state: "North Carolina" },
  { name: "University of North Carolina", conference: "ACC", state: "North Carolina" },
  { name: "Clemson University", conference: "ACC", state: "South Carolina" },
  { name: "Florida State University", conference: "ACC", state: "Florida" },
  { name: "University of Miami", conference: "ACC", state: "Florida" },
  { name: "Virginia Tech", conference: "ACC", state: "Virginia" },
  { name: "University of Virginia", conference: "ACC", state: "Virginia" },
  { name: "Georgia Tech", conference: "ACC", state: "Georgia" },
  { name: "Wake Forest University", conference: "ACC", state: "North Carolina" },
  { name: "Boston College", conference: "ACC", state: "Massachusetts" },
  { name: "North Carolina State University", conference: "ACC", state: "North Carolina" },
  { name: "University of Pittsburgh", conference: "ACC", state: "Pennsylvania" },
  { name: "Syracuse University", conference: "ACC", state: "New York" },
  { name: "University of Louisville", conference: "ACC", state: "Kentucky" },

  // Big 12
  { name: "University of Texas", conference: "Big 12", state: "Texas" },
  { name: "University of Oklahoma", conference: "Big 12", state: "Oklahoma" },
  { name: "Baylor University", conference: "Big 12", state: "Texas" },
  { name: "Texas Tech University", conference: "Big 12", state: "Texas" },
  { name: "Oklahoma State University", conference: "Big 12", state: "Oklahoma" },
  { name: "Kansas State University", conference: "Big 12", state: "Kansas" },
  { name: "University of Kansas", conference: "Big 12", state: "Kansas" },
  { name: "Iowa State University", conference: "Big 12", state: "Iowa" },
  { name: "TCU", conference: "Big 12", state: "Texas" },
  { name: "West Virginia University", conference: "Big 12", state: "West Virginia" },

  // SEC
  { name: "University of Alabama", conference: "SEC", state: "Alabama" },
  { name: "University of Georgia", conference: "SEC", state: "Georgia" },
  { name: "Louisiana State University", conference: "SEC", state: "Louisiana" },
  { name: "University of Florida", conference: "SEC", state: "Florida" },
  { name: "Auburn University", conference: "SEC", state: "Alabama" },
  { name: "University of Tennessee", conference: "SEC", state: "Tennessee" },
  { name: "University of Kentucky", conference: "SEC", state: "Kentucky" },
  { name: "University of South Carolina", conference: "SEC", state: "South Carolina" },
  { name: "Vanderbilt University", conference: "SEC", state: "Tennessee" },
  { name: "University of Missouri", conference: "SEC", state: "Missouri" },
  { name: "University of Arkansas", conference: "SEC", state: "Arkansas" },
  { name: "Mississippi State University", conference: "SEC", state: "Mississippi" },
  { name: "University of Mississippi", conference: "SEC", state: "Mississippi" },
  { name: "Texas A&M University", conference: "SEC", state: "Texas" }
] as const;

export const conferences = ['SEC', "Big 12", 'ACC', "Big 10"];