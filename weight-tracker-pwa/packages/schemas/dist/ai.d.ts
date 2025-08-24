import { z } from 'zod';
export declare const AIFoodItem: z.ZodObject<{
    name: z.ZodString;
    grams: z.ZodNumber;
    kcal: z.ZodNumber;
    protein_g: z.ZodNumber;
    carbs_g: z.ZodNumber;
    fat_g: z.ZodNumber;
    confidence_pct: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    grams: number;
    kcal: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
    confidence_pct: number;
}, {
    name: string;
    grams: number;
    kcal: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
    confidence_pct: number;
}>;
export declare const AIFoodEstimate: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        grams: z.ZodNumber;
        kcal: z.ZodNumber;
        protein_g: z.ZodNumber;
        carbs_g: z.ZodNumber;
        fat_g: z.ZodNumber;
        confidence_pct: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        grams: number;
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
        confidence_pct: number;
    }, {
        name: string;
        grams: number;
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
        confidence_pct: number;
    }>, "many">;
    total: z.ZodObject<{
        kcal: z.ZodNumber;
        protein_g: z.ZodNumber;
        carbs_g: z.ZodNumber;
        fat_g: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
    }, {
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
    }>;
    global_confidence_pct: z.ZodNumber;
    assumptions: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        name: string;
        grams: number;
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
        confidence_pct: number;
    }[];
    total: {
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
    };
    global_confidence_pct: number;
    assumptions: string[];
}, {
    items: {
        name: string;
        grams: number;
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
        confidence_pct: number;
    }[];
    total: {
        kcal: number;
        protein_g: number;
        carbs_g: number;
        fat_g: number;
    };
    global_confidence_pct: number;
    assumptions: string[];
}>;
export type AIFoodItem = z.infer<typeof AIFoodItem>;
export type AIFoodEstimate = z.infer<typeof AIFoodEstimate>;
//# sourceMappingURL=ai.d.ts.map