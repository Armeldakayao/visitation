// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type UpdateVariable = {
//   id: string;
//   data: any; // Les données que vous souhaitez mettre à jour
// };

// export const useCreateObituary = createMutation({
//   mutationKey: (data: UpdateVariable) => [`/users/update/${data.id}`], // Utilisez l'id pour générer la clé de mutation
//   mutationFn: ({ id, data }: UpdateVariable) => api.put(`/users/update/${id}`, data), // Utilisez `put` pour la mise à jour et transmettez les données
// });

// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type UpdateVariable = {
//   id: string;
//   data: any; // Les autres données utilisateur (email, mot de passe, etc.)
// };

// export const useCreateObituary = createMutation({
//   mutationKey: (data: UpdateVariable) => [`/obituaries/${data.id}/`],
//   mutationFn: async ({ id, data }: UpdateVariable) => {
//     const formData = new FormData();

//     // Ajout des données au FormData
//     for (const key in data) {
//       if (data[key] !== undefined && data[key] !== null) {
//         formData.append(key, data[key]); // Ajoute chaque donnée à FormData
//       }
//     }

//     // Envoyer la requête avec formData
//     return api.post(`/obituaries/${id}/`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Spécifie que l'on envoie un formData
//       },
//     });
//   },
// });



// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type UpdateVariable = {
//   id: string;
//   data: any; // Les autres données utilisateur (email, mot de passe, etc.)
// };

// export const useCreateObituary = createMutation({
//   mutationKey: (data: UpdateVariable) => [`/obituaries/${data.id}/`],
//   mutationFn: async ({ id, data }: UpdateVariable) => {
//     const formData = new FormData();

//     // Ajout des données au FormData
//     for (const key in data) {
//       if (data[key] !== undefined && data[key] !== null) {
//         formData.append(key, data[key]); // Ajoute chaque donnée à FormData
//       }
//     }

//     // Envoyer la requête avec formData
//     return api.post(`/obituaries/${id}/`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Spécifie que l'on envoie un formData
//       },
//     });
//   },
// });




import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type CreateVariable = {
  data: any; // The obituary data (name, dates, etc.)
};

// export const useCreateObituary = createMutation({
//   mutationKey: ["create-obituary"],
//   mutationFn: async ({ data }: CreateVariable) => {
//     const formData = new FormData();

//     // Add data to the FormData
//     for (const key in data) {
//       if (data[key] !== undefined && data[key] !== null) {
//         formData.append(key, data[key]); // Add each data to FormData
//       }
//     }

//     // Send the create request with formData
//     return api.post(`/obituaries/`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Specifies that we are sending formData
//       },
//     });
//   },
// });




export const useCreateObituary = createMutation({
  mutationKey: ["create-obituary"],
  mutationFn: async ({ data }: CreateVariable) => {
    return api.post(`/obituaries/`, data, {
      headers: {
        "Content-Type": "multipart/form-data", // Set multipart for FormData
      },
    });
  },
});
