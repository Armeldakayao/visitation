import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type PaymentVariables = {
  book_id:string
};

export const useCreateBookPurchase = createMutation({
  mutationKey: ["/book-purchases/"],
  mutationFn: (data: PaymentVariables) => api.post("/book-purchases/", data),
});
