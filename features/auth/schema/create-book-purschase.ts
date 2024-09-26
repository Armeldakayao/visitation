import * as z from "zod";
import { PasswordSchema, EmailSchema } from "#lib/validator";

export const createBookPurchase = z.object({
 
  custom_cover: z
    .any()
    .optional() // L'image de profil est optionnelle
    // .refine((file) => file instanceof File || typeof file === "string", {
    //   message: "Profile image must be a valid file or URL.",
    // }),
});

export type CreateBookPurchase = z.infer<typeof createBookPurchase>;
