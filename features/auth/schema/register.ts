import * as z from "zod";
import { PasswordSchema, EmailSchema } from "#lib/validator";


export const registerSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  full_name: z.string().min(5, {
    message: "Fullname must be at least 5 characters.",
  }),
  address: z.string(),
  phone: z.string().optional(),
  security_question: z.string(),
  security_answer: z.string(),
  name_funeral_home: z.string().optional(),
});

export type  RegisterSchema = z.infer<typeof registerSchema>






// import * as z from "zod";
// import { PasswordSchema, EmailSchema } from "#lib/validator";

// export const registerSchema = z.object({
//   email: EmailSchema,
//   password: PasswordSchema,
//   full_name: z.string().min(5, {
//     message: "Fullname must be at least 5 characters.",
//   }),
//   address: z.string(),
//   phone: z.string().optional(),
//   security_question: z.string(),
//   security_answer: z.string(),
//   name_funeral_home: z.string().optional(),
//   profile_image: z
//     .any()
//     // .refine((file) => file instanceof File, {
//     //   message: "Profile image must be a file",
//     // })
//     .optional(), // Make it optional if the image is not required
// });

// export type RegisterSchema = z.infer<typeof registerSchema>;
