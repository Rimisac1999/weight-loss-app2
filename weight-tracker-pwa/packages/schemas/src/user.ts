import { z } from 'zod';

export const User = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  createdAt: z.date(),
});

export type User = z.infer<typeof User>;