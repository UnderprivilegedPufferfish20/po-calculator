import { AtheleteType, SportType } from "./athlete"
import { SelectedPlatform } from "./social_media"

export type ValueEstimation = { low: number, high: number }
export type MediumEstimation = {image: ValueEstimation, video: ValueEstimation}


export type CalculatorInput = {
  athleteType: AtheleteType,
  selectedColleges: string[],
  selectedPlatforms: SelectedPlatform[],
  sportPlayed: SportType
}

export type CalculatorOutput = {
  name: string, /*Name of College*/
  ncv: ValueEstimation /*NIL Career Value*/
  overall: MediumEstimation /*Value of Image/Video if user goes to the college*/
  platforms: /*Specific social media platforms values*/ {
    name: string,
    values: MediumEstimation
  }[]
}[]