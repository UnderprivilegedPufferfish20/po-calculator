import { z } from 'zod';
import { AthleteTypeSchema, SportTypeSchema } from './athlete';
import { SelectedPlatformSchema } from './social_media';

export const ValueEstimationSchema = z.object({
  low: z.number(),
  high: z.number()
});

export const MediumEstimationSchema = z.object({
  image: ValueEstimationSchema,
  video: ValueEstimationSchema
});

export const CalculatorInputSchema = z.object({
  athleteType: AthleteTypeSchema,
  selectedColleges: z.array(z.string()),
  selectedPlatforms: z.array(SelectedPlatformSchema),
  sportPlayed: SportTypeSchema
});

export const CalculatorOutputSchema = z.array(z.object({
  name: z.string(), // Name of College
  ncv: ValueEstimationSchema, // NIL Career Value
  overall: MediumEstimationSchema, // Value of Image/Video if user goes to the college
  platforms: z.array(z.object({
    name: z.string(),
    values: MediumEstimationSchema
  })) // Specific social media platforms values
}));

// Infer types from schemas
export type ValueEstimation = z.infer<typeof ValueEstimationSchema>;
export type MediumEstimation = z.infer<typeof MediumEstimationSchema>;
export type CalculatorInput = z.infer<typeof CalculatorInputSchema>;
export type CalculatorOutput = z.infer<typeof CalculatorOutputSchema>;