import { z } from 'zod';
export declare const Sex: z.ZodEnum<["male", "female"]>;
export type Sex = z.infer<typeof Sex>;
export declare const ActivityLevel: z.ZodEnum<["sedentary", "light", "moderate", "high", "athlete"]>;
export type ActivityLevel = z.infer<typeof ActivityLevel>;
export declare const Units: z.ZodEnum<["metric", "imperial"]>;
export type Units = z.infer<typeof Units>;
export declare const MealSource: z.ZodEnum<["manual", "photo"]>;
export type MealSource = z.infer<typeof MealSource>;
export declare const AlcoholType: z.ZodEnum<["beer_pint", "wine_bottle", "custom"]>;
export type AlcoholType = z.infer<typeof AlcoholType>;
export declare const AIMode: z.ZodEnum<["hosted", "byok"]>;
export type AIMode = z.infer<typeof AIMode>;
//# sourceMappingURL=common.d.ts.map