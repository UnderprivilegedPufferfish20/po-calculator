import { z } from 'zod';

export const ConferenceTypeSchema = z.enum(['Big 10', 'ACC', 'Big 12', 'SEC']);

export const CollegeSchema = z.object({
  name: z.string(),
  conference: ConferenceTypeSchema
});

// Infer types from schemas
export type ConferenceType = z.infer<typeof ConferenceTypeSchema>;
export type College = z.infer<typeof CollegeSchema>;