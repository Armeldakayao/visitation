import * as z from "zod";

// Define schema for cardholder name, card number, CVV, and separate expiration month and year
export const paymentSchema = z.object({
  card_holder: z
    .string()
    .optional(),

  card_number: z
    .string()
    .min(16, { message: "Card number must be 16 digits" }).optional(),
    // .regex(/^\d+$/, { message: "Card number must contain only digits" }),

  card_cvv: z
    .string().optional(),

  //   expiry_month: z
  //     .string()
  //     .regex(/^(0[1-9]|1[0-2])$/, {
  //       message: "Expiry month must be between 01 and 12",
  //     }).optional(),

  //   expiry_year: z
  //     .string()
  //     .regex(/^(20\d{2})$/, {
  //       message: "Expiry year must be a valid 4-digit year (e.g., 2024)",
  //     }).optional(),
  expiry_date: z.string().optional(),
});

// Define the type for TypeScript inference
export type PaymentSchema = z.infer<typeof paymentSchema>;
