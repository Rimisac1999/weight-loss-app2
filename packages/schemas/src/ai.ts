import { z } from 'zod';

export const AIFoodItem = z.object({
  name: z.string(),
  grams: z.number(),
  kcal: z.number(),
  protein_g: z.number(),
  carbs_g: z.number(),
  fat_g: z.number(),
  confidence_pct: z.number().min(0).max(1),
});

export const AIFoodEstimate = z.object({
  items: z.array(AIFoodItem),
  total: z.object({
    kcal: z.number(),
    protein_g: z.number(),
    carbs_g: z.number(),
    fat_g: z.number(),
  }),
  global_confidence_pct: z.number().min(0).max(1),
  assumptions: z.array(z.string()),
});

export type AIFoodItem = z.infer<typeof AIFoodItem>;
export type AIFoodEstimate = z.infer<typeof AIFoodEstimate>;