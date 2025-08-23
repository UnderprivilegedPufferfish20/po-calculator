import { z } from 'zod';

export const SocialMediaPlatformSchema = z.object({
  name: z.string()
});

export const SelectedPlatformSchema = z.object({
  name: z.string(),
  followers: z.number()
});

export const PlatformValueSchema = z.enum([
  'instagram', 
  'twitter', 
  'facebook', 
  'tiktok', 
  'youtube', 
  'linkedin', 
  'snapchat', 
  'pinterest', 
  'twitch', 
  'reddit'
]);

// Infer types from schemas
export type SocialMediaPlatform = z.infer<typeof SocialMediaPlatformSchema>;
export type SelectedPlatform = z.infer<typeof SelectedPlatformSchema>;
export type PlatformValue = z.infer<typeof PlatformValueSchema>;