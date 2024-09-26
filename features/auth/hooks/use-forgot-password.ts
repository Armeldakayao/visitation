import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  email: string;
 
};

export const useForgotPassword = createMutation({
  mutationKey: ["/password_reset/"],
  mutationFn: (data: Variable) => api.post("/password_reset/", data),
});
