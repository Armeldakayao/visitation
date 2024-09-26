import * as z from "zod";
import { PasswordSchema, EmailSchema } from "#lib/validator";

export const loginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
 
});

export type LoginSchema = z.infer<typeof loginSchema>;
