import { createMutation } from "react-query-kit";
import api from "#lib/axios-config";

type Variable = {
  email: string,
  password: string,
  full_name: string,
  address: string,
  phone: string,
  security_question: string,
  security_answer: string,
  name_funeral_home: string,
};

export const useRegister = createMutation({
  mutationKey: ["/register/"],
  mutationFn: (data: Variable) => api.post("/register/", data),
});


// import { createMutation } from "react-query-kit";
// import api from "#lib/axios-config";

// type Variable = {
//   email: string;
//   password: string;
//   full_name: string;
//   address: string;
//   phone: string;
//   security_question: string;
//   security_answer: string;
//   name_funeral_home: string;
//   profile_image: File; // Adding the profile image as a File type
// };

// export const useRegister = createMutation({
//   mutationKey: ["/register/"],
//   mutationFn: (data: Variable) => {
//     const formData = new FormData();

//     // Append all fields to the FormData object
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("full_name", data.full_name);
//     formData.append("address", data.address);
//     formData.append("phone", data.phone);
//     formData.append("security_question", data.security_question);
//     formData.append("security_answer", data.security_answer);
//     formData.append("name_funeral_home", data.name_funeral_home);

//     // Append the profile image as a file
//     formData.append("profile_image", data.profile_image);

//     // Send the form data via the API
//     return api.post("/register/", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   },
// });
