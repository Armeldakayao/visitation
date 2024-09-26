import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  token: string;
};

export const useCheckToken = createMutation({
  mutationKey: ["/password_reset/validate_token"],
  mutationFn: (data: Variable) =>
    api.post("/password_reset/validate_token", data),
});
