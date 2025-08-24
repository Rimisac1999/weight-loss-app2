import { z } from 'zod';

export const Sex = z.enum(['male', 'female']);
export type Sex = z.infer<typeof Sex>;

export const ActivityLevel = z.enum(['sedentary', 'light', 'moderate', 'high', 'athlete']);
export type ActivityLevel = z.infer<typeof ActivityLevel>;

export const Units = z.enum(['metric', 'imperial']);
export type Units = z.infer<typeof Units>;

export const MealSource = z.enum(['manual', 'photo']);
export type MealSource = z.infer<typeof MealSource>;

export const AlcoholType = z.enum(['beer_pint', 'wine_bottle', 'custom']);
export type AlcoholType = z.infer<typeof AlcoholType>;

export const AIMode = z.enum(['hosted', 'byok']);
export type AIMode = z.infer<typeof AIMode>;