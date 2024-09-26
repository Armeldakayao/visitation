// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type UpdateVariable = {
//   id: string;
//   data: any; // Les données que vous souhaitez mettre à jour
// };

// export const useUpdateBookPurchase = createMutation({
//   mutationKey: (data: UpdateVariable) => [`/book-purchases/${data.id}/`], // Utilisez l'id pour générer la clé de mutation
//   mutationFn: ({ id, data }: UpdateVariable) =>
//     api.put(`/book-purchases/${id}/`, data), // Utilisez `put` pour la mise à jour et transmettez les données
// });



// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type UpdateVariable = {
//   id: string;
//   data: any; // Les données que vous souhaitez mettre à jour
// };

// export const useUpdateUser = createMutation({
//   mutationKey: (data: UpdateVariable) => [`/users/update/${data.id}`], // Utilisez l'id pour générer la clé de mutation
//   mutationFn: ({ id, data }: UpdateVariable) => api.put(`/users/update/${id}`, data), // Utilisez `put` pour la mise à jour et transmettez les données
// });


import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type UpdateVariable = {
  id: string;
  data: any; // Les autres données utilisateur (email, mot de passe, etc.)
};

export const useUpdateBookPurchase = createMutation({
  // @ts-ignore
  mutationKey: (data: UpdateVariable) => [`/book-purchases/${data.id}/`],
  mutationFn: async ({ id, data }: UpdateVariable) => {
    // const formData = new FormData();

    // // Ajout des données au FormData
    // for (const key in data) {
    //   if (data[key] !== undefined && data[key] !== null) {
    //     formData.append(key, data[key]); // Ajoute chaque donnée à FormData
    //   }
    // }

    // Envoyer la requête avec formData
    return api.put(`/book-purchases/${id}/`, data, {
      headers: {
        "Content-Type": "multipart/form-data", // Spécifie que l'on envoie un formData
      },
    });
  },
});