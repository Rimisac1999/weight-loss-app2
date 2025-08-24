import { z } from 'zod';

export const Weight = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  date: z.date(),
  weightKg: z.number().positive().max(500),
  note: z.string().max(500).optional(),
});

export type Weight = z.infer<typeof Weight>;

export const WeightCreate = Weight.omit({ id: true, userId: true });
export type WeightCreate = z.infer<typeof WeightCreate>;

export const WeightUpdate = WeightCreate.partial();
export type WeightUpdate = z.infer<typeof WeightUpdate>;