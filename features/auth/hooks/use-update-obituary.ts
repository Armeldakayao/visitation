import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type UpdateVariable = {
  id: string; // The ID of the obituary to be updated
  data: any; // The obituary data (name, dates, etc.)
};

// Mutation for updating an obituary
export const useUpdateObituary = createMutation({
  mutationKey: ["update-obituary"],
  mutationFn: async ({ id, data }: UpdateVariable) => {
    const formData = new FormData();

    // Add data to the FormData
    for (const key in data) {
      if (data[key] !== undefined && data[key] !== null) {
        formData.append(key, data[key]);
      }
    }

    // Send the update request with formData and the obituary ID in the URL
    return api.put(`/obituaries/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set multipart for FormData
      },
    });
  },
});
