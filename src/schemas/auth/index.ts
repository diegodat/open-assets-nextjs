import { z } from "zod";

export const LoginSchema = z.object({
  userId: z.string().trim().min(3).max(8),
  password: z.string().min(8),
});
