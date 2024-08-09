import { z } from "zod";
import {
  CredentialUserSignUpSchema,
  GoogleUserSignUpSchema,
  LoginParametersSchema,
  LoginResponseSchema,
} from ".";

export type LoginParameters = z.infer<typeof LoginParametersSchema>;

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export type GoogleUserSignUp = z.infer<typeof GoogleUserSignUpSchema>;

export type CredentialUserSignUp = z.infer<typeof CredentialUserSignUpSchema>;
