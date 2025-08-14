import { SportType } from "../types";

export const sports: SportType[] = [
  {
    name: "Baseball",
    positions: ["Pitcher", "Catcher", "First Baseman", "Second Baseman", "Shortstop", "Third Baseman", "Left Fielder", "Center Fielder", "Right Fielder", "Designated Hitter"]
  },
  {
    name: "Basketball",
    positions: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"]
  },
  {
    name: "Bowling"
  },
  {
    name: "Cheerleading"
  },
  {
    name: "Cross Country"
  },
  {
    name: "Dance Team"
  },
  {
    name: "Esports"
  },
  {
    name: "Field Hockey",
    positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"]
  },
  {
    name: "Football",
    positions: ["Quarterback", "Running Back", "Wide Receiver", "Tight End", "Offensive Lineman", "Defensive Lineman", "Linebacker", "Cornerback", "Safety", "Kicker", "Punter"]
  },
  {
    name: "Golf"
  },
  {
    name: "Gymnastics"
  },
  {
    name: "Lacrosse",
    positions: ["Attack", "Midfield", "Defense", "Goalie"]
  },
  {
    name: "Powerlifting"
  },
  {
    name: "Rifle"
  },
  {
    name: "Rowing",
    positions: ["Coxswain", "Stroke", "Bow", "Port", "Starboard"]
  },
  {
    name: "Rugby",
    positions: ["Prop", "Hooker", "Lock", "Flanker", "Number Eight", "Scrum-half", "Fly-half", "Center", "Winger", "Fullback"]
  },
  {
    name: "Skiing"
  },
  {
    name: "Soccer",
    positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"]
  },
  {
    name: "Softball",
    positions: ["Pitcher", "Catcher", "First Baseman", "Second Baseman", "Shortstop", "Third Baseman", "Left Fielder", "Center Fielder", "Right Fielder", "Designated Player"]
  },
  {
    name: "Squash"
  },
  {
    name: "Surfing"
  },
  {
    name: "Swimming and Diving"
  },
  {
    name: "Tennis"
  },
  {
    name: "Track and Field"
  },
  {
    name: "Volleyball",
    positions: ["Setter", "Outside Hitter", "Middle Blocker", "Opposite Hitter", "Libero", "Defensive Specialist"]
  },
  {
    name: "Water Polo",
    positions: ["Goalkeeper", "Center Forward", "Driver", "Point", "Wings"]
  },
  {
    name: "Wrestling"
  }
];



export const SPORT_MULTIPLIER: Record<string, number> = {
  football: 1.25,
  "american football": 1.25,
  basketball: 1.2,
  baseball: 1.0,
  softball: 0.95,
  soccer: 1.1,
  volleyball: 1.0,
  gymnastics: 1.0,
  wrestling: 0.95,
  track: 0.9,
  "track & field": 0.9,
  tennis: 0.95,
  golf: 0.9,
  swimming: 0.9,
  lacrosse: 0.9,
  hockey: 1.0,
};


export const POSITION_MULTIPLIER: Record<string, number> = {
  quarterback: 1.25,
  qb: 1.25,
  "wide receiver": 1.15,
  wr: 1.15,
  runningback: 1.1,
  rb: 1.1,
  center: 0.95,
  "offensive line": 0.9,
  "defensive line": 0.95,
  forward: 1.05,
  guard: 1.0,
  "point guard": 1.1,
  pg: 1.1,
  "shooting guard": 1.05,
  sg: 1.05,
  "small forward": 1.05,
  sf: 1.05,
  "power forward": 1.05,
  pf: 1.05,
  goalie: 1.05,
  striker: 1.1,
};