
import * as z from "zod";

export const createObituarySchema = z.object({
 
  date_of_birth: z.string().optional(),
  date_of_death: z.string().optional(),
  deceased_name: z.string().optional(), // L'image de profil est optionnelle
  // .refine((file) => file instanceof File || typeof file === "string", {
  //   message: "Profile image must be a valid file or URL.",
  // }),
  obituary_pdf: z.any().optional(), // L'image de profil est optionnelle,
  // .refine((file) => file instanceof File || typeof file === "string", {
  //   message: "Profile image must be a valid file or URL.",
  // }),
  book_cover: z.any().optional(), // L'image de profil est optionnelle
  // .refine((file) => file instanceof File || typeof file === "string", {
  //   message: "Profile image must be a valid file or URL.",
  // }),
});

export type CreateObituarySchema = z.infer<typeof createObituarySchema>;
