import { z } from 'zod';
export declare const MealItem: z.ZodObject<{
    id: z.ZodString;
    mealId: z.ZodString;
    name: z.ZodString;
    grams: z.ZodNullable<z.ZodNumber>;
    kcal: z.ZodNumber;
    proteinG: z.ZodNumber;
    carbsG: z.ZodNumber;
    fatG: z.ZodNumber;
    confidencePct: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    grams: number | null;
    kcal: number;
    mealId: string;
    proteinG: number;
    carbsG: number;
    fatG: number;
    confidencePct: number | null;
}, {
    id: string;
    name: string;
    grams: number | null;
    kcal: number;
    mealId: string;
    proteinG: number;
    carbsG: number;
    fatG: number;
    confidencePct: number | null;
}>;
export type MealItem = z.infer<typeof MealItem>;
export declare const Meal: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    loggedAt: z.ZodDate;
    source: z.ZodEnum<["manual", "photo"]>;
    totalKcal: z.ZodNumber;
    proteinG: z.ZodNumber;
    carbsG: z.ZodNumber;
    fatG: z.ZodNumber;
    aiConfidencePct: z.ZodNullable<z.ZodNumber>;
    photoUrl: z.ZodNullable<z.ZodString>;
    rawAi: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        mealId: z.ZodString;
        name: z.ZodString;
        grams: z.ZodNullable<z.ZodNumber>;
        kcal: z.ZodNumber;
        proteinG: z.ZodNumber;
        carbsG: z.ZodNumber;
        fatG: z.ZodNumber;
        confidencePct: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        grams: number | null;
        kcal: number;
        mealId: string;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }, {
        id: string;
        name: string;
        grams: number | null;
        kcal: number;
        mealId: string;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    proteinG: number;
    carbsG: number;
    fatG: number;
    loggedAt: Date;
    source: "manual" | "photo";
    totalKcal: number;
    aiConfidencePct: number | null;
    photoUrl: string | null;
    rawAi: Record<string, any> | null;
    items?: {
        id: string;
        name: string;
        grams: number | null;
        kcal: number;
        mealId: string;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }[] | undefined;
}, {
    id: string;
    userId: string;
    proteinG: number;
    carbsG: number;
    fatG: number;
    loggedAt: Date;
    source: "manual" | "photo";
    totalKcal: number;
    aiConfidencePct: number | null;
    photoUrl: string | null;
    rawAi: Record<string, any> | null;
    items?: {
        id: string;
        name: string;
        grams: number | null;
        kcal: number;
        mealId: string;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }[] | undefined;
}>;
export type Meal = z.infer<typeof Meal>;
export declare const MealItemCreate: z.ZodObject<Omit<{
    id: z.ZodString;
    mealId: z.ZodString;
    name: z.ZodString;
    grams: z.ZodNullable<z.ZodNumber>;
    kcal: z.ZodNumber;
    proteinG: z.ZodNumber;
    carbsG: z.ZodNumber;
    fatG: z.ZodNumber;
    confidencePct: z.ZodNullable<z.ZodNumber>;
}, "id" | "mealId">, "strip", z.ZodTypeAny, {
    name: string;
    grams: number | null;
    kcal: number;
    proteinG: number;
    carbsG: number;
    fatG: number;
    confidencePct: number | null;
}, {
    name: string;
    grams: number | null;
    kcal: number;
    proteinG: number;
    carbsG: number;
    fatG: number;
    confidencePct: number | null;
}>;
export type MealItemCreate = z.infer<typeof MealItemCreate>;
export declare const MealCreate: z.ZodObject<{
    proteinG: z.ZodNumber;
    carbsG: z.ZodNumber;
    fatG: z.ZodNumber;
    loggedAt: z.ZodDate;
    source: z.ZodEnum<["manual", "photo"]>;
    totalKcal: z.ZodNumber;
    aiConfidencePct: z.ZodNullable<z.ZodNumber>;
    photoUrl: z.ZodNullable<z.ZodString>;
    rawAi: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
} & {
    items: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
        id: z.ZodString;
        mealId: z.ZodString;
        name: z.ZodString;
        grams: z.ZodNullable<z.ZodNumber>;
        kcal: z.ZodNumber;
        proteinG: z.ZodNumber;
        carbsG: z.ZodNumber;
        fatG: z.ZodNumber;
        confidencePct: z.ZodNullable<z.ZodNumber>;
    }, "id" | "mealId">, "strip", z.ZodTypeAny, {
        name: string;
        grams: number | null;
        kcal: number;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }, {
        name: string;
        grams: number | null;
        kcal: number;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    proteinG: number;
    carbsG: number;
    fatG: number;
    loggedAt: Date;
    source: "manual" | "photo";
    totalKcal: number;
    aiConfidencePct: number | null;
    photoUrl: string | null;
    rawAi: Record<string, any> | null;
    items?: {
        name: string;
        grams: number | null;
        kcal: number;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }[] | undefined;
}, {
    proteinG: number;
    carbsG: number;
    fatG: number;
    loggedAt: Date;
    source: "manual" | "photo";
    totalKcal: number;
    aiConfidencePct: number | null;
    photoUrl: string | null;
    rawAi: Record<string, any> | null;
    items?: {
        name: string;
        grams: number | null;
        kcal: number;
        proteinG: number;
        carbsG: number;
        fatG: number;
        confidencePct: number | null;
    }[] | undefined;
}>;
export type MealCreate = z.infer<typeof MealCreate>;
//# sourceMappingURL=meal.d.ts.map