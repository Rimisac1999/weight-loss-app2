import { z } from 'zod';
import { AlcoholType } from './common';

export const AlcoholLog = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  date: z.date(),
  type: AlcoholType,
  volumeMl: z.number().int().positive(),
  abvPct: z.number().positive().max(100),
  kcalEst: z.number().nonnegative(),
});

export type AlcoholLog = z.infer<typeof AlcoholLog>;

export const AlcoholLogCreate = AlcoholLog.omit({ id: true, userId: true });
export type AlcoholLogCreate = z.infer<typeof AlcoholLogCreate>;