import * as z from "zod";

// Define schema for cardholder name, card number, CVV, and separate expiration month and year
export const bookPurchaseSchema = z.object({
  book_id:z.string().optional()
});

// Define the type for TypeScript inference
export type BookPurchaseSchema = z.infer<typeof bookPurchaseSchema>;
