import { z } from 'zod';

export const Scenario = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  name: z.string().min(1).max(100),
  deltaKcalPerDay: z.number().int(),
  z2MinPerDay: z.number().int().nonnegative(),
  resistanceMinPerDay: z.number().int().nonnegative(),
  stepsPerDay: z.number().int().nonnegative(),
  floorsPerDay: z.number().int().nonnegative(),
  startDate: z.date(),
  horizonWeeks: z.number().int().positive().max(52),
});

export type Scenario = z.infer<typeof Scenario>;

export const ScenarioCreate = Scenario.omit({ id: true, userId: true });
export type ScenarioCreate = z.infer<typeof ScenarioCreate>;