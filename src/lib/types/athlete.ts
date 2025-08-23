import { z } from 'zod';

export const SportTypeSchema = z.object({
  name: z.string(),
  positions: z.array(z.string()).optional()
});

export const AthleteTypeSchema = z.enum(['Youth', 'Pro', 'College']);

export const StageSchema = z.enum(['AS', 'SS', 'SMS', 'CS', 'E']);


export type SportType = z.infer<typeof SportTypeSchema>;
export type AthleteType = z.infer<typeof AthleteTypeSchema>;
export type Stage = z.infer<typeof StageSchema>;