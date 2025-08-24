import { z } from 'zod';

export const Activity = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  date: z.date(),
  z2Minutes: z.number().int().nonnegative().default(0),
  resistanceMinutes: z.number().int().nonnegative().default(0),
  steps: z.number().int().nonnegative().default(0),
  floors: z.number().int().nonnegative().default(0),
  notes: z.string().max(1000).optional(),
});

export type Activity = z.infer<typeof Activity>;

export const ActivityCreate = Activity.omit({ id: true, userId: true });
export type ActivityCreate = z.infer<typeof ActivityCreate>;

export const ActivityUpdate = ActivityCreate.partial();
export type ActivityUpdate = z.infer<typeof ActivityUpdate>;