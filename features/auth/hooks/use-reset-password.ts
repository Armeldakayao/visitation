import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  password:string;
  token:string
};

export const useResetPassword = createMutation({
  mutationKey: ["/password_reset/confirm/"],
  mutationFn: (data: Variable) => api.post("/password_reset/confirm/", data),
});
