import { College, SocialMediaPlatform, SportType } from "./types";

export const socialMediaPlatforms: readonly SocialMediaPlatform[] = [
  { value: 'instagram', label: 'Instagram', icon: '📸' },
  { value: 'twitter', label: 'Twitter/X', icon: '🐦' },
  { value: 'facebook', label: 'Facebook', icon: '👥' },
  { value: 'tiktok', label: 'TikTok', icon: '🎵' },
  { value: 'youtube', label: 'YouTube', icon: '📺' },
  { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { value: 'snapchat', label: 'Snapchat', icon: '👻' },
  { value: 'pinterest', label: 'Pinterest', icon: '📌' },
  { value: 'twitch', label: 'Twitch', icon: '🎮' },
  { value: 'reddit', label: 'Reddit', icon: '🤖' },
] as const;


export const sports: SportType[] = [
  {
    name: "Baseball",
    imgUrl: "https://images.unsplash.com/photo-1624375664562-fff61869fe8f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Pitcher", "Catcher", "First Baseman", "Second Baseman", "Shortstop", "Third Baseman", "Left Fielder", "Center Fielder", "Right Fielder", "Designated Hitter"]
  },
  {
    name: "Basketball",
    imgUrl: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"]
  },
  {
    name: "Bowling",
    imgUrl: "https://images.unsplash.com/photo-1614713568397-b31b779d0498?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cheerleading",
    imgUrl: "https://images.unsplash.com/photo-1589748239338-afe695e833d3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cross Country",
    imgUrl: "https://images.unsplash.com/photo-1559166631-ef208440c75a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Dance Team",
    imgUrl: "https://plus.unsplash.com/premium_photo-1682089706055-d5ef14dc14e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Esports",
    imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Field Hockey",
    imgUrl: "https://images.unsplash.com/photo-1486128105845-91daff43f404?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"]
  },
  {
    name: "Football",
    imgUrl: "https://images.unsplash.com/photo-1575456088032-95fa05477439?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Quarterback", "Running Back", "Wide Receiver", "Tight End", "Offensive Lineman", "Defensive Lineman", "Linebacker", "Cornerback", "Safety", "Kicker", "Punter"]
  },
  {
    name: "Golf",
    imgUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Gymnastics",
    imgUrl: "https://images.unsplash.com/photo-1610410543954-ed0ad75ce68a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lacrosse",
    imgUrl: "https://images.unsplash.com/photo-1623156884380-a080a56ddc93?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Attack", "Midfield", "Defense", "Goalie"]
  },
  {
    name: "Powerlifting",
    imgUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rifle",
    imgUrl: "https://images.unsplash.com/photo-1562461094-e060ef34728e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rowing",
    imgUrl: "https://plus.unsplash.com/premium_photo-1661963789382-e6fc547f967e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm93aW5nfGVufDB8fDB8fHww",
    positions: ["Coxswain", "Stroke", "Bow", "Port", "Starboard"]
  },
  {
    name: "Rugby",
    imgUrl: "https://images.unsplash.com/photo-1529478562208-d4c746edcb79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Prop", "Hooker", "Lock", "Flanker", "Number Eight", "Scrum-half", "Fly-half", "Center", "Winger", "Fullback"]
  },
  {
    name: "Skiing",
    imgUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Soccer",
    imgUrl: "https://plus.unsplash.com/premium_photo-1661868926397-0083f0503c07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"]
  },
  {
    name: "Softball",
    imgUrl: "https://images.unsplash.com/photo-1482632322416-218f4e111f73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Pitcher", "Catcher", "First Baseman", "Second Baseman", "Shortstop", "Third Baseman", "Left Fielder", "Center Fielder", "Right Fielder", "Designated Player"]
  },
  {
    name: "Speech and Debate",
    imgUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Squash",
    imgUrl: "https://plus.unsplash.com/premium_photo-1707152794548-58dd2992f85e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Surfing",
    imgUrl: "https://images.unsplash.com/photo-1535182463927-440364075d9c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Swimming and Diving",
    imgUrl: "https://plus.unsplash.com/premium_photo-1701030722699-6daeea040f89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Tennis",
    imgUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Track and Field",
    imgUrl: "https://plus.unsplash.com/premium_photo-1661868906940-5d8443acf49e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ultimate Frisbee",
    imgUrl: "https://images.unsplash.com/photo-1591337819702-5c21810edd47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Handler", "Cutter", "Deep", "Mid"]
  },
  {
    name: "Volleyball",
    imgUrl: "https://images.unsplash.com/photo-1686753767715-37cb0c34212c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Setter", "Outside Hitter", "Middle Blocker", "Opposite Hitter", "Libero", "Defensive Specialist"]
  },
  {
    name: "Water Polo",
    imgUrl: "https://images.unsplash.com/photo-1675064276064-a6c5f50c4cb7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    positions: ["Goalkeeper", "Center Forward", "Driver", "Point", "Wings"]
  },
  {
    name: "Wrestling",
    imgUrl: "https://images.unsplash.com/photo-1542468019-550cb643a5e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];








const colleges: College[] = [
  // Big 10
  { name: "University of Michigan", conference: "Big 10", imgUrl: "/colleges/michigan.png" },
  { name: "Ohio State University", conference: "Big 10", imgUrl: "/colleges/ohio-state.png" },
  { name: "Penn State University", conference: "Big 10", imgUrl: "/colleges/penn-state.png" },
  { name: "University of Wisconsin", conference: "Big 10", imgUrl: "/colleges/wisconsin.png" },
  { name: "Michigan State University", conference: "Big 10", imgUrl: "/colleges/michigan-state.png" },
  { name: "Northwestern University", conference: "Big 10", imgUrl: "/colleges/northwestern.png" },
  { name: "University of Iowa", conference: "Big 10", imgUrl: "/colleges/iowa.png" },
  { name: "Indiana University", conference: "Big 10", imgUrl: "/colleges/indiana.png" },
  { name: "University of Minnesota", conference: "Big 10", imgUrl: "/colleges/minnesota.png" },
  { name: "Purdue University", conference: "Big 10", imgUrl: "/colleges/purdue.png" },
  { name: "University of Illinois", conference: "Big 10", imgUrl: "/colleges/illinois.png" },
  { name: "University of Nebraska", conference: "Big 10", imgUrl: "/colleges/nebraska.png" },
  { name: "Rutgers University", conference: "Big 10", imgUrl: "/colleges/rutgers.png" },
  { name: "University of Maryland", conference: "Big 10", imgUrl: "/colleges/maryland.png" },
  
  // ACC
  { name: "Duke University", conference: "ACC", imgUrl: "/colleges/duke.png" },
  { name: "University of North Carolina", conference: "ACC", imgUrl: "/colleges/unc.png" },
  { name: "Clemson University", conference: "ACC", imgUrl: "/colleges/clemson.png" },
  { name: "Florida State University", conference: "ACC", imgUrl: "/colleges/fsu.png" },
  { name: "University of Miami", conference: "ACC", imgUrl: "/colleges/miami.png" },
  { name: "Virginia Tech", conference: "ACC", imgUrl: "/colleges/virginia-tech.png" },
  { name: "University of Virginia", conference: "ACC", imgUrl: "/colleges/virginia.png" },
  { name: "Georgia Tech", conference: "ACC", imgUrl: "/colleges/georgia-tech.png" },
  { name: "Wake Forest University", conference: "ACC", imgUrl: "/colleges/wake-forest.png" },
  { name: "Boston College", conference: "ACC", imgUrl: "/colleges/boston-college.png" },
  { name: "NC State University", conference: "ACC", imgUrl: "/colleges/nc-state.png" },
  { name: "University of Pittsburgh", conference: "ACC", imgUrl: "/colleges/pitt.png" },
  { name: "Syracuse University", conference: "ACC", imgUrl: "/colleges/syracuse.png" },
  { name: "University of Louisville", conference: "ACC", imgUrl: "/colleges/louisville.png" },
  
  // Big 12
  { name: "University of Texas", conference: "Big 12", imgUrl: "/colleges/texas.png" },
  { name: "University of Oklahoma", conference: "Big 12", imgUrl: "/colleges/oklahoma.png" },
  { name: "Baylor University", conference: "Big 12", imgUrl: "/colleges/baylor.png" },
  { name: "Texas Tech University", conference: "Big 12", imgUrl: "/colleges/texas-tech.png" },
  { name: "Oklahoma State University", conference: "Big 12", imgUrl: "/colleges/oklahoma-state.png" },
  { name: "Kansas State University", conference: "Big 12", imgUrl: "/colleges/kansas-state.png" },
  { name: "University of Kansas", conference: "Big 12", imgUrl: "/colleges/kansas.png" },
  { name: "Iowa State University", conference: "Big 12", imgUrl: "/colleges/iowa-state.png" },
  { name: "TCU", conference: "Big 12", imgUrl: "/colleges/tcu.png" },
  { name: "West Virginia University", conference: "Big 12", imgUrl: "/colleges/west-virginia.png" },
  
  // SEC
  { name: "University of Alabama", conference: "SEC", imgUrl: "/colleges/alabama.png" },
  { name: "University of Georgia", conference: "SEC", imgUrl: "/colleges/georgia.png" },
  { name: "Louisiana State University", conference: "SEC", imgUrl: "/colleges/lsu.png" },
  { name: "University of Florida", conference: "SEC", imgUrl: "/colleges/florida.png" },
  { name: "Auburn University", conference: "SEC", imgUrl: "/colleges/auburn.png" },
  { name: "University of Tennessee", conference: "SEC", imgUrl: "/colleges/tennessee.png" },
  { name: "University of Kentucky", conference: "SEC", imgUrl: "/colleges/kentucky.png" },
  { name: "University of South Carolina", conference: "SEC", imgUrl: "/colleges/south-carolina.png" },
  { name: "Vanderbilt University", conference: "SEC", imgUrl: "/colleges/vanderbilt.png" },
  { name: "University of Missouri", conference: "SEC", imgUrl: "/colleges/missouri.png" },
  { name: "University of Arkansas", conference: "SEC", imgUrl: "/colleges/arkansas.png" },
  { name: "Mississippi State University", conference: "SEC", imgUrl: "/colleges/mississippi-state.png" },
  { name: "University of Mississippi", conference: "SEC", imgUrl: "/colleges/ole-miss.png" },
  { name: "Texas A&M University", conference: "SEC", imgUrl: "/colleges/texas-am.png" },
] as const;


