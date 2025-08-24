import { z } from 'zod';
export declare const AlcoholLog: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    type: z.ZodEnum<["beer_pint", "wine_bottle", "custom"]>;
    volumeMl: z.ZodNumber;
    abvPct: z.ZodNumber;
    kcalEst: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    date: Date;
    type: "custom" | "beer_pint" | "wine_bottle";
    volumeMl: number;
    abvPct: number;
    kcalEst: number;
}, {
    id: string;
    userId: string;
    date: Date;
    type: "custom" | "beer_pint" | "wine_bottle";
    volumeMl: number;
    abvPct: number;
    kcalEst: number;
}>;
export type AlcoholLog = z.infer<typeof AlcoholLog>;
export declare const AlcoholLogCreate: z.ZodObject<Omit<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    type: z.ZodEnum<["beer_pint", "wine_bottle", "custom"]>;
    volumeMl: z.ZodNumber;
    abvPct: z.ZodNumber;
    kcalEst: z.ZodNumber;
}, "id" | "userId">, "strip", z.ZodTypeAny, {
    date: Date;
    type: "custom" | "beer_pint" | "wine_bottle";
    volumeMl: number;
    abvPct: number;
    kcalEst: number;
}, {
    date: Date;
    type: "custom" | "beer_pint" | "wine_bottle";
    volumeMl: number;
    abvPct: number;
    kcalEst: number;
}>;
export type AlcoholLogCreate = z.infer<typeof AlcoholLogCreate>;
//# sourceMappingURL=alcohol.d.ts.map