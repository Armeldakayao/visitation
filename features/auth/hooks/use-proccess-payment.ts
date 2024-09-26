import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type PaymentVariables = {
  book_id: string;
  payment_method_id: string;
};

export const useCreateProcessPayment = createMutation({
  // @ts-ignore
  mutationKey: ({ book_id }: PaymentVariables) => [
    // @ts-ignore
    `/book-purchases/${book_id}/process_payment/`,
  ],
  mutationFn: ({ book_id, payment_method_id }: PaymentVariables) =>
    api.post(`/book-purchases/${book_id}/process_payment/`, {
      payment_method_id, // Pass the payment_method_id in the request body
    }),
});
