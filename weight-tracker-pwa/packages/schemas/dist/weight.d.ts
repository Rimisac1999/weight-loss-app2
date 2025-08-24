import { z } from 'zod';
export declare const Weight: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    weightKg: z.ZodNumber;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    date: Date;
    weightKg: number;
    note?: string | undefined;
}, {
    id: string;
    userId: string;
    date: Date;
    weightKg: number;
    note?: string | undefined;
}>;
export type Weight = z.infer<typeof Weight>;
export declare const WeightCreate: z.ZodObject<Omit<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    weightKg: z.ZodNumber;
    note: z.ZodOptional<z.ZodString>;
}, "id" | "userId">, "strip", z.ZodTypeAny, {
    date: Date;
    weightKg: number;
    note?: string | undefined;
}, {
    date: Date;
    weightKg: number;
    note?: string | undefined;
}>;
export type WeightCreate = z.infer<typeof WeightCreate>;
export declare const WeightUpdate: z.ZodObject<{
    date: z.ZodOptional<z.ZodDate>;
    weightKg: z.ZodOptional<z.ZodNumber>;
    note: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    weightKg?: number | undefined;
    note?: string | undefined;
}, {
    date?: Date | undefined;
    weightKg?: number | undefined;
    note?: string | undefined;
}>;
export type WeightUpdate = z.infer<typeof WeightUpdate>;
//# sourceMappingURL=weight.d.ts.map