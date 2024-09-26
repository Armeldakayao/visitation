// import * as z from "zod";

// export const updateBookPurchaseSchema = z.object({
//   deceased_name: z.string().min(2),
//   date_of_birth: z.string().optional(),
//   date_of_death: z.string().optional(),
//   allow_picture: z.boolean().optional(),
//   allow_name: z.boolean().optional(),
//   allow_address: z.boolean().optional(),
//   allow_email: z.boolean().optional(),
//   allow_special_notes: z.boolean().optional(),
//   custom_field_25: z.boolean().optional(),
//   custom_field_50: z.boolean().optional(),
//   deceased_image: z
//     .any()
//     .optional() // L'image de profil est optionnelle
//     // .refine((file) => file instanceof File || typeof file === "string", {
//     //   message: "Profile image must be a valid file or URL.",
//     // }),
// });

// export type UpdateBookPurchaseSchema = z.infer<typeof updateBookPurchaseSchema>;
import * as z from "zod";

export const updateBookPurchaseSchema = z.object({
  deceased_name: z.string().min(1).optional(), // Champ obligatoire
  date_of_death: z.string().min(1).nullable().optional(), // Champ obligatoire
  date_of_birth: z
    .string()
    .optional()
    .nullable(),
  allow_picture: z.boolean().optional(),
  allow_name: z.boolean().optional(),
  allow_address: z.boolean().optional(),
  allow_email: z.boolean().optional(),
  allow_special_notes: z.boolean().optional(),
  custom_field_25: z.boolean().optional(),
  custom_field_50: z.boolean().optional(),
  deceased_image: z.any().optional(), // L'image de profil est optionnelle
});

export type UpdateBookPurchaseSchema = z.infer<typeof updateBookPurchaseSchema>;
