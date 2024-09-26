import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type PaymentVariables = {
  card_holder: string;
  card_number: string;
  card_cvv: string;
  //   expiry_year: string;
  //   expiry_month: string;
  expiry_date: string;
  //   expiry_month: string;
  //   amount: number; // Add this if you want to send the total amount for the payment
};

export const useCompletePayment = createMutation({
  mutationKey: ["/payment-methods/"],
  mutationFn: (data: PaymentVariables) => api.post("/payment-methods/", data),
});
