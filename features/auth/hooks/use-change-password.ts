import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  old_password: string;
  new_password:string
};

export const useChangePassword = createMutation({
  mutationKey: ["/change_password"],
  mutationFn: (data: Variable) =>
    api.put("/change_password", data),
});
