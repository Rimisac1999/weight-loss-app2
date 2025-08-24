import { z } from 'zod';
export declare const User: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    createdAt: Date;
}, {
    id: string;
    email: string;
    createdAt: Date;
}>;
export type User = z.infer<typeof User>;
//# sourceMappingURL=user.d.ts.map