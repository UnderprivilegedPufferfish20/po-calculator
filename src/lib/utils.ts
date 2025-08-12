import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { colleges } from "./constants/colleges";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const glassCard =
  "bg-gray-900/60 backdrop-blur border border-gray-700/60 rounded-xl";

export function getCollegeImg(name: string) {
  let ending = '.png'

  let pth = "/colleges" + '/' + colleges.find(c => c.name == name)?.conference.toLowerCase().replaceAll(" ", "")

  let schoolName = name.replace("University", '').replace('of', '').replace('College', '').trim().toLowerCase().replaceAll(' ', '_')

  if (
    schoolName === 'arkansas' ||
    schoolName === 'auburn' ||
    schoolName === 'vanderbilt' ||
    schoolName === 'texas_a&m' ||
    schoolName === 'arkansas' ||
    schoolName === 'kansas' ||
    schoolName === 'oklahoma' ||
    schoolName === 'wake_forest' ||
    schoolName === 'boston' ||
    schoolName === 'florida_state'
  ) {
    ending = '.jpg'
  }

  return pth + '/' + schoolName + ending
}
