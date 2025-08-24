import { z } from 'zod';
export declare const Scenario: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    name: z.ZodString;
    deltaKcalPerDay: z.ZodNumber;
    z2MinPerDay: z.ZodNumber;
    resistanceMinPerDay: z.ZodNumber;
    stepsPerDay: z.ZodNumber;
    floorsPerDay: z.ZodNumber;
    startDate: z.ZodDate;
    horizonWeeks: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    name: string;
    deltaKcalPerDay: number;
    z2MinPerDay: number;
    resistanceMinPerDay: number;
    stepsPerDay: number;
    floorsPerDay: number;
    startDate: Date;
    horizonWeeks: number;
}, {
    id: string;
    userId: string;
    name: string;
    deltaKcalPerDay: number;
    z2MinPerDay: number;
    resistanceMinPerDay: number;
    stepsPerDay: number;
    floorsPerDay: number;
    startDate: Date;
    horizonWeeks: number;
}>;
export type Scenario = z.infer<typeof Scenario>;
export declare const ScenarioCreate: z.ZodObject<Omit<{
    id: z.ZodString;
    userId: z.ZodString;
    name: z.ZodString;
    deltaKcalPerDay: z.ZodNumber;
    z2MinPerDay: z.ZodNumber;
    resistanceMinPerDay: z.ZodNumber;
    stepsPerDay: z.ZodNumber;
    floorsPerDay: z.ZodNumber;
    startDate: z.ZodDate;
    horizonWeeks: z.ZodNumber;
}, "id" | "userId">, "strip", z.ZodTypeAny, {
    name: string;
    deltaKcalPerDay: number;
    z2MinPerDay: number;
    resistanceMinPerDay: number;
    stepsPerDay: number;
    floorsPerDay: number;
    startDate: Date;
    horizonWeeks: number;
}, {
    name: string;
    deltaKcalPerDay: number;
    z2MinPerDay: number;
    resistanceMinPerDay: number;
    stepsPerDay: number;
    floorsPerDay: number;
    startDate: Date;
    horizonWeeks: number;
}>;
export type ScenarioCreate = z.infer<typeof ScenarioCreate>;
//# sourceMappingURL=scenario.d.ts.map