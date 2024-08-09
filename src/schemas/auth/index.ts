import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/packages/constants/file";
import { z } from "zod";

export const LoginParametersSchema = z.object({
  identity: z.string().trim().min(3).max(8),
  password: z.string(),
});

export const LoginResponseSchema = z.object({
  user: z.object({
    id: z.number(),
    uuid: z.string().uuid({ message: "Invalid UUID" }),
    email: z.string().email({ message: "Invalid email address" }),
    dateOfBirth: z.string().date(),
    avatar: z.string().nullable(),
    accountId: z.string(),
  }),
  accessToken: z.string(),
});

export const GoogleUserSignUpSchema = z.object({
  dateOfBirth: z.object({
    year: z.number().min(1900).max(new Date().getFullYear()),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
  }),
  accountId: z.string().min(3).max(20),
});

const emailSchema = z.string().email("Invalid email address");
const passwordSchema = z.string().min(8).max(20);

export const CredentialUserSignUpSchema = z
  .object({
    email: emailSchema,
    confirmEmail: emailSchema,
    verificationCode: z
      .string()
      .length(4, "verification code must be 4 number"),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    profileImage: z
      .instanceof(File)
      .optional()
      .nullable()
      .refine(
        (file) => !file || file.size <= MAX_FILE_SIZE,
        `ファイルサイズは${MAX_FILE_SIZE / 1000000}MB以下にしてください`,
      )
      .refine(
        (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "JPEGまたはPNG、WEBP形式の画像をアップロードしてください",
      ),
    nickname: z.string().min(3).max(10),
    birthday: z.object({
      year: z.number().min(1900).max(new Date().getFullYear()),
      month: z.number().min(1).max(12),
      day: z.number().min(1).max(31),
    }),
    userId: z
      .string()
      .min(3)
      .max(5)
      .regex(/^\d+$/, { message: "Input must only contain numbers" }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Email does not match",
    path: ["confirmEmail"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });
