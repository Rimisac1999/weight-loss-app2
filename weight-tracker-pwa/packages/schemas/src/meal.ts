import { z } from 'zod';
import { MealSource } from './common';

export const MealItem = z.object({
  id: z.string().uuid(),
  mealId: z.string().uuid(),
  name: z.string().min(1).max(200),
  grams: z.number().positive().nullable(),
  kcal: z.number().nonnegative(),
  proteinG: z.number().nonnegative(),
  carbsG: z.number().nonnegative(),
  fatG: z.number().nonnegative(),
  confidencePct: z.number().min(0).max(100).nullable(),
});

export type MealItem = z.infer<typeof MealItem>;

export const Meal = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  loggedAt: z.date(),
  source: MealSource,
  totalKcal: z.number().nonnegative(),
  proteinG: z.number().nonnegative(),
  carbsG: z.number().nonnegative(),
  fatG: z.number().nonnegative(),
  aiConfidencePct: z.number().min(0).max(100).nullable(),
  photoUrl: z.string().url().nullable(),
  rawAi: z.record(z.any()).nullable(),
  items: z.array(MealItem).optional(),
});

export type Meal = z.infer<typeof Meal>;

export const MealItemCreate = MealItem.omit({ id: true, mealId: true });
export type MealItemCreate = z.infer<typeof MealItemCreate>;

export const MealCreate = Meal.omit({ id: true, userId: true }).extend({
  items: z.array(MealItemCreate).optional(),
});
export type MealCreate = z.infer<typeof MealCreate>;