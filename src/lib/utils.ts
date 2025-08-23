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

export const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)


export function parseFollowers(input: string): number {
  if (!input) return 0;
  
  // Remove commas and trim whitespace
  const cleaned = input.replace(/,/g, '').trim().toLowerCase();
  
  // Match number and optional suffix (k or m)
  const match = cleaned.match(/^([\d.]+)([km]?)$/);
  if (!match) return NaN;
  
  const num = parseFloat(match[1]);
  if (isNaN(num)) return NaN;
  
  const suffix = match[2];
  if (suffix === 'k') return num * 1000;
  if (suffix === 'm') return num * 1000000;
  return num; // No suffix, return as-is
}


export function getCollegeTitle(name: string) {
  const finish: string[] = []

  for (let p of getCollegeImg(name).split('/')[3].split('_')) {
    finish.push(p[0].toUpperCase() + p.slice(1))
  }

  return finish.join(' ').split('.')[0]
}
