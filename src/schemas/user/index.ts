import { z } from "zod";

export const UserResponseSchema = z.object({
  email: z.string().email(),
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
});
// export const UserResponseSchema = z.object({
//   id: z.string(),
//   email: z.string().email(),
//   userId: z.string().trim().min(3).max(8),
//   dateOfBirth: z.string(),
//   profileImage: z.string(),
//   nickname: z.string(),
// });
