import { z } from 'zod';
export declare const Profile: z.ZodObject<{
    userId: z.ZodString;
    sex: z.ZodEnum<["male", "female"]>;
    birthYear: z.ZodNumber;
    heightCm: z.ZodNumber;
    activityLevel: z.ZodEnum<["sedentary", "light", "moderate", "high", "athlete"]>;
    strideCm: z.ZodNullable<z.ZodNumber>;
    preferredUnits: z.ZodEnum<["metric", "imperial"]>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    sex: "male" | "female";
    birthYear: number;
    heightCm: number;
    activityLevel: "sedentary" | "light" | "moderate" | "high" | "athlete";
    strideCm: number | null;
    preferredUnits: "metric" | "imperial";
}, {
    userId: string;
    sex: "male" | "female";
    birthYear: number;
    heightCm: number;
    activityLevel: "sedentary" | "light" | "moderate" | "high" | "athlete";
    strideCm: number | null;
    preferredUnits: "metric" | "imperial";
}>;
export type Profile = z.infer<typeof Profile>;
export declare const ProfileCreate: z.ZodObject<Omit<{
    userId: z.ZodString;
    sex: z.ZodEnum<["male", "female"]>;
    birthYear: z.ZodNumber;
    heightCm: z.ZodNumber;
    activityLevel: z.ZodEnum<["sedentary", "light", "moderate", "high", "athlete"]>;
    strideCm: z.ZodNullable<z.ZodNumber>;
    preferredUnits: z.ZodEnum<["metric", "imperial"]>;
}, "userId">, "strip", z.ZodTypeAny, {
    sex: "male" | "female";
    birthYear: number;
    heightCm: number;
    activityLevel: "sedentary" | "light" | "moderate" | "high" | "athlete";
    strideCm: number | null;
    preferredUnits: "metric" | "imperial";
}, {
    sex: "male" | "female";
    birthYear: number;
    heightCm: number;
    activityLevel: "sedentary" | "light" | "moderate" | "high" | "athlete";
    strideCm: number | null;
    preferredUnits: "metric" | "imperial";
}>;
export type ProfileCreate = z.infer<typeof ProfileCreate>;
export declare const ProfileUpdate: z.ZodObject<{
    sex: z.ZodOptional<z.ZodEnum<["male", "female"]>>;
    birthYear: z.ZodOptional<z.ZodNumber>;
    heightCm: z.ZodOptional<z.ZodNumber>;
    activityLevel: z.ZodOptional<z.ZodEnum<["sedentary", "light", "moderate", "high", "athlete"]>>;
    strideCm: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    preferredUnits: z.ZodOptional<z.ZodEnum<["metric", "imperial"]>>;
}, "strip", z.ZodTypeAny, {
    sex?: "male" | "female" | undefined;
    birthYear?: number | undefined;
    heightCm?: number | undefined;
    activityLevel?: "sedentary" | "light" | "moderate" | "high" | "athlete" | undefined;
    strideCm?: number | null | undefined;
    preferredUnits?: "metric" | "imperial" | undefined;
}, {
    sex?: "male" | "female" | undefined;
    birthYear?: number | undefined;
    heightCm?: number | undefined;
    activityLevel?: "sedentary" | "light" | "moderate" | "high" | "athlete" | undefined;
    strideCm?: number | null | undefined;
    preferredUnits?: "metric" | "imperial" | undefined;
}>;
export type ProfileUpdate = z.infer<typeof ProfileUpdate>;
//# sourceMappingURL=profile.d.ts.map