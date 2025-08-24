import { z } from 'zod';
import { Sex, ActivityLevel, Units } from './common';

export const Profile = z.object({
  userId: z.string().uuid(),
  sex: Sex,
  birthYear: z.number().int().min(1900).max(new Date().getFullYear()),
  heightCm: z.number().int().min(100).max(250),
  activityLevel: ActivityLevel,
  strideCm: z.number().int().min(50).max(150).nullable(),
  preferredUnits: Units,
});

export type Profile = z.infer<typeof Profile>;

export const ProfileCreate = Profile.omit({ userId: true });
export type ProfileCreate = z.infer<typeof ProfileCreate>;

export const ProfileUpdate = ProfileCreate.partial();
export type ProfileUpdate = z.infer<typeof ProfileUpdate>;