// import * as z from "zod";
// import { PasswordSchema, EmailSchema } from "#lib/validator";

// export const updateUserSchema = z.object({
//   email: EmailSchema,
//   password: PasswordSchema,
//   full_name: z
//     .string()
//     .min(5, {
//       message: "Fullname must be at least 5 characters.",
//     })
//     .optional(),
//   //   address: z.string(),
//   //   phone: z.string().optional(),
//   security_question: z.string(),
//   security_answer: z.string(),
//   //   name_funeral_home: z.string().optional(),
//   profile_image: z
//       .any()
//       // .refine((file) => file instanceof File, {
//       //   message: "Profile image must be a file",
//       // })
//       .optional(), // Make it optional if the image is not required
// });

// export type UpdateUserSchema = z.infer<typeof updateUserSchema>;






import * as z from "zod";
import { PasswordSchema, EmailSchema } from "#lib/validator";

export const updateUserSchema = z.object({
  email: EmailSchema,
  password: z.string().optional(),
  full_name: z
    .string()
    .min(5, {
      message: "Fullname must be at least 5 characters.",
    })
    .optional(),
  security_question: z.string(),
  security_answer: z.string(),
  profile_image: z
    .any()
    .optional() // L'image de profil est optionnelle
    .refine((file) => file instanceof File || typeof file === "string", {
      message: "Profile image must be a valid file or URL.",
    }),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;