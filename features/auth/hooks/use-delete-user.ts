import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  id: string;
};

export const useDeleteUser = createMutation({
  // @ts-ignore
  mutationKey: (data: Variable) => [`/users/${data.id}`], // Ensure the key is generated using the provided `id`
  mutationFn: ({ id }: Variable) => api.delete(`/users/${id}`), // Use backticks for template literals and pass `id`
});
