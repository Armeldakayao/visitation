import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  email: string;
  password: string;
  full_name: string;
  address: string;
  phone: string;
  security_question: string;
  security_answer: string;
  name_funeral_home: string;
};

export const useRegister = createMutation({
  mutationKey: ["/register"],
  mutationFn: (data: Variable) => api.post("/register", data),
});
