import { z } from 'zod';
export declare const Activity: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    z2Minutes: z.ZodDefault<z.ZodNumber>;
    resistanceMinutes: z.ZodDefault<z.ZodNumber>;
    steps: z.ZodDefault<z.ZodNumber>;
    floors: z.ZodDefault<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    date: Date;
    z2Minutes: number;
    resistanceMinutes: number;
    steps: number;
    floors: number;
    notes?: string | undefined;
}, {
    id: string;
    userId: string;
    date: Date;
    z2Minutes?: number | undefined;
    resistanceMinutes?: number | undefined;
    steps?: number | undefined;
    floors?: number | undefined;
    notes?: string | undefined;
}>;
export type Activity = z.infer<typeof Activity>;
export declare const ActivityCreate: z.ZodObject<Omit<{
    id: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    z2Minutes: z.ZodDefault<z.ZodNumber>;
    resistanceMinutes: z.ZodDefault<z.ZodNumber>;
    steps: z.ZodDefault<z.ZodNumber>;
    floors: z.ZodDefault<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
}, "id" | "userId">, "strip", z.ZodTypeAny, {
    date: Date;
    z2Minutes: number;
    resistanceMinutes: number;
    steps: number;
    floors: number;
    notes?: string | undefined;
}, {
    date: Date;
    z2Minutes?: number | undefined;
    resistanceMinutes?: number | undefined;
    steps?: number | undefined;
    floors?: number | undefined;
    notes?: string | undefined;
}>;
export type ActivityCreate = z.infer<typeof ActivityCreate>;
export declare const ActivityUpdate: z.ZodObject<{
    date: z.ZodOptional<z.ZodDate>;
    z2Minutes: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    resistanceMinutes: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    steps: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    floors: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    z2Minutes?: number | undefined;
    resistanceMinutes?: number | undefined;
    steps?: number | undefined;
    floors?: number | undefined;
    notes?: string | undefined;
}, {
    date?: Date | undefined;
    z2Minutes?: number | undefined;
    resistanceMinutes?: number | undefined;
    steps?: number | undefined;
    floors?: number | undefined;
    notes?: string | undefined;
}>;
export type ActivityUpdate = z.infer<typeof ActivityUpdate>;
//# sourceMappingURL=activity.d.ts.map