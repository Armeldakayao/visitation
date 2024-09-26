// // // "use client";
// // // import {
// // //   Form,
// // //   FormControl,
// // //   FormField,
// // //   FormItem,
// // //   FormLabel,
// // //   FormMessage,
// // // } from "#/components/ui/form";
// // // import { AppContext } from "#app/provider";
// // // import { CustomModal } from "#components/shared/modal";
// // // import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
// // // import { Button } from "#components/ui/button";
// // // import { Input } from "#components/ui/input";
// // // import PasswordInput from "#components/ui/password-input";
// // // import {
// // //   Select,
// // //   SelectContent,
// // //   SelectGroup,
// // //   SelectItem,
// // //   SelectLabel,
// // //   SelectTrigger,
// // //   SelectValue,
// // // } from "#components/ui/select";
// // // import { useUpdateUser } from "#features/auth/hooks/use-update-user";
// // // import { UpdateUserSchema, updateUserSchema } from "#features/auth/schema/user-update";

// // // import { errorsBind } from "#lib/errors-bind";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { ScrollArea } from "@radix-ui/react-scroll-area";
// // // import { AxiosError } from "axios";
// // // import { Loader2 } from "lucide-react";
// // // import { useContext, useEffect, useState } from "react";
// // // import { useForm } from "react-hook-form";
// // // import toast from "react-hot-toast";

// // // export default function RegisterForm() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [getMeData, setGetMeData] = useState({});
// // //   const { isMe } = useContext(AppContext);

// // //   const openModal = () => setIsModalOpen(true);
// // //   const closeModal = () => setIsModalOpen(false);

// // //   const form = useForm({
// // //     defaultValues: {
// // //       full_name: "",
// // //       email: "",
// // //       security_question: "",
// // //       security_answer: "",
// // //       password: "",
// // //       profile_image:""
// // //     },
// // //     resolver: zodResolver(updateUserSchema),
// // //   });

// // //   useEffect(() => {
// // //     if (isMe) {
// // //       form.reset({
// // //         full_name: isMe.full_name || "",
// // //         email: isMe.email || "",
// // //         security_question: isMe.security_question || "",
// // //         security_answer: isMe.security_answer || "",
// // //         password: "",
// // //         profile_image:isMe.profile_image|| "",
// // //       });
// // //     }
// // //   }, [isMe, form]);

// // //   const { mutate: updateUser, isPending: isPendingUpdate } = useUpdateUser({
// // //     onSuccess: (data) => {
// // //       toast.success("User updated successfully.");
// // //       form.reset({
// // //         full_name: data.full_name,
// // //         email: data.email,
// // //         security_question: data.security_question,
// // //         security_answer: data.security_answer,
// // //         password: "", // Ensure password remains empty after form reset
// // //         profile_image: data?.profile_image || "",
// // //       });
// // //       closeModal();
// // //     },
// // //     onError: (errors: AxiosError) => {
// // //       toast.dismiss();
// // //       errorsBind(errors);
// // //     },
// // //   });

// // //   const onSubmit = (values: UpdateUserSchema) => {
// // //     console.log(form.getValues(),values);
// // //     const loadingToast = toast.loading("Updating User...");
// // //     updateUser(
// // //       { id: isMe?.id, data: values },
// // //       {
// // //         onSuccess: () => toast.dismiss(loadingToast),
// // //         onError: () => toast.dismiss(loadingToast),
// // //       }
// // //     );
// // //   };
// // // console.log(form.getValues())
// // //   return (
// // //     <div>
// // //       <div className="">
// // //         <Form {...form}>
// // //           <ScrollArea className="max-h-[1000px]">
// // //             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
// // //               <div className="bg-[#EAE2E2] p-5 items-center justify-center flex rounded-b-full">
// // //                 {" "}
// // //                 <Avatar>
// // //                   <AvatarImage
// // //                     src={`http://34.27.136.91${isMe?.profile_image}`}
// // //                     alt="PM"

// // //                   />
// // //                   <AvatarFallback className="uppercase font-bold">
// // //                     {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
// // //                   </AvatarFallback>
// // //                 </Avatar>
// // //                 <FormField
// // //                   control={form.control}
// // //                   name="profile_image"
// // //                   render={({ field }) => (
// // //                     <FormItem>
// // //                       <FormLabel className="hidden text-md font-[400]">
// // //                         Profile Image
// // //                       </FormLabel>
// // //                       <FormControl>
// // //                         <Input
// // //                           type="file"
// // //                           className="input h-10 w-10 rounded-full border border-[#9C928F]"
// // //                           onChange={(e) => {
// // //                             const file = e.target.files?.[0];
// // //                             if (file) {
// // //                               field.onChange(file);
// // //                             }
// // //                           }}
// // //                         />
// // //                       </FormControl>
// // //                       <FormMessage />
// // //                     </FormItem>
// // //                   )}
// // //                 />
// // //               </div>
// // //               <div className="mx-[500px] pt-16">
// // //                 <div className="grid grid-cols-1 gap-4 text-black space-y-4">
// // //                   <FormField
// // //                     control={form.control}
// // //                     name="full_name"
// // //                     render={({ field }) => (
// // //                       <FormItem>
// // //                         <FormLabel className="text-md font-[400]">
// // //                           Name
// // //                         </FormLabel>
// // //                         <FormControl>
// // //                           <Input
// // //                             className="input border border-[#9C928F]"
// // //                             {...field}
// // //                           />
// // //                         </FormControl>
// // //                         <FormMessage />
// // //                       </FormItem>
// // //                     )}
// // //                   />
// // //                   <FormField
// // //                     control={form.control}
// // //                     name="email"
// // //                     render={({ field }) => (
// // //                       <FormItem>
// // //                         <FormLabel className="text-md font-[400]">
// // //                           Email Address
// // //                         </FormLabel>
// // //                         <FormControl>
// // //                           <Input
// // //                             className="input border border-[#9C928F]"
// // //                             {...field}
// // //                           />
// // //                         </FormControl>
// // //                         <FormMessage />
// // //                       </FormItem>
// // //                     )}
// // //                   />
// // //                   <FormField
// // //                     control={form.control}
// // //                     name="security_question"
// // //                     render={({ field }) => (
// // //                       <FormItem>
// // //                         <FormLabel className="text-md font-[400]">
// // //                           Security Question
// // //                         </FormLabel>
// // //                         <FormControl>
// // //                           <Select
// // //                             defaultValue={field.value}
// // //                             onValueChange={field.onChange}
// // //                           >
// // //                             <SelectTrigger className="input border border-[#9C928F]">
// // //                               <SelectValue placeholder="Add security question" />
// // //                             </SelectTrigger>
// // //                             <SelectContent>
// // //                               <SelectGroup>
// // //                                 <SelectLabel>Questions</SelectLabel>
// // //                                 <SelectItem value="What is your birthday?">
// // //                                   What is your birthday?
// // //                                 </SelectItem>
// // //                                 <SelectItem value="What is your favourite color?">
// // //                                   What is your favourite color?
// // //                                 </SelectItem>
// // //                                 <SelectItem value="Name of your pet?">
// // //                                   Name of your pet?
// // //                                 </SelectItem>
// // //                               </SelectGroup>
// // //                             </SelectContent>
// // //                           </Select>
// // //                         </FormControl>
// // //                         <FormMessage />
// // //                       </FormItem>
// // //                     )}
// // //                   />
// // //                   <FormField
// // //                     control={form.control}
// // //                     name="security_answer"
// // //                     render={({ field }) => (
// // //                       <FormItem>
// // //                         <FormLabel className="text-md font-[400]">
// // //                           Answer
// // //                         </FormLabel>
// // //                         <FormControl>
// // //                           <Input
// // //                             className="input border border-[#9C928F]"
// // //                             {...field}
// // //                           />
// // //                         </FormControl>
// // //                         <FormMessage />
// // //                       </FormItem>
// // //                     )}
// // //                   />
// // //                   <FormField
// // //                     control={form.control}
// // //                     name="password"
// // //                     render={({ field }) => (
// // //                       <FormItem>
// // //                         <FormLabel className="text-md font-[400]">
// // //                           Password
// // //                         </FormLabel>
// // //                         <FormControl>
// // //                           <PasswordInput
// // //                             className="input border border-[#9C928F]"
// // //                             {...field}
// // //                           />
// // //                         </FormControl>
// // //                         <FormMessage />
// // //                       </FormItem>
// // //                     )}
// // //                   />
// // //                 </div>
// // //                 <div className="flex justify-between items-center gap-4 pt-5">
// // //                   <Button
// // //                     className="bg-[#f00] rounded-full"
// // //                     disabled={isPendingUpdate}
// // //                   >
// // //                     {isPendingUpdate && (
// // //                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// // //                     )}
// // //                     Update Account
// // //                   </Button>
// // //                 </div>
// // //               </div>
// // //             </form>
// // //           </ScrollArea>
// // //         </Form>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "#/components/ui/form";
// // import { AppContext } from "#app/provider";
// // import { Button } from "#components/ui/button";
// // import { Input } from "#components/ui/input";
// // import { useCreateObituary } from "#features/auth/hooks/use-create-obituary";
// // import { useUpdateObituary } from "#features/auth/hooks/use-update-obituary";
// // import { useUpdateUser } from "#features/auth/hooks/use-update-user";
// // import { CreateObituarySchema, createObituarySchema } from "#features/auth/schema/creta-obituary";

// // import { errorsBind } from "#lib/errors-bind";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { ScrollArea } from "@radix-ui/react-scroll-area";
// // import { AxiosError } from "axios";
// // import { Loader2 } from "lucide-react";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useContext, useEffect, useRef, useState } from "react";
// // import { useForm } from "react-hook-form";
// // import toast from "react-hot-toast";

// // export default function RegisterForm() {
// //   // const [isModalOpen, setIsModalOpen] = useState(false);
// //   // const [getMeData, setGetMeData] = useState({});
// //   const { isMe } = useContext(AppContext);
// //   const searchParams= useSearchParams()
// // const token = searchParams.get("token")
// //  const obituaryDetails = isMe?.obituaries?.find((b) => b.id === token) || {};

// //   // const openModal = () => setIsModalOpen(true);
// //   // const closeModal = () => setIsModalOpen(false);

// //   const form = useForm({
// //     defaultValues: {
// //       book_cover: "",
// //       deceased_name: "",
// //       obituary_pdf: "",
// //       date_of_birth: "",
// //       date_of_death:""
// //     },
// //     resolver: zodResolver(createObituarySchema),
// //   });

// //   useEffect(() => {
// //     if (obituaryDetails) {
// //       form.reset({
// //         book_cover: obituaryDetails?.book_cover,
// //         deceased_name: obituaryDetails?.deceased_name,
// //         obituary_pdf: obituaryDetails?.obituary_pdf,
// //         date_of_birth: obituaryDetails?.date_of_birth,
// //         date_of_death: obituaryDetails?.date_of_death,
// //       });
// //       // Set the initial image URL if available
// //       // setImageUrl(isMe?.profile_image || null);
// //     }
// //   }, [isMe, form]);
// //   // console.log(imageUrl, "imageURL", isMe);
// //   const { mutate: updateUser, isPending: isPendingUpdate } = useCreateObituary({
// //     onSuccess: (data) => {
// //       toast.success("Book saved successfully.");
     
      
// //     },
// //     onError: (errors: AxiosError) => {
// //       toast.dismiss();
// //       errorsBind(errors);
// //     },
// //   });
// //   const { mutate: updateObituary, isPending: isPendingUpdate00 } = useUpdateObituary({
// //     onSuccess: (data) => {
// //       toast.success("Book saved successfully.");
// //     },
// //     onError: (errors: AxiosError) => {
// //       toast.dismiss();
// //       errorsBind(errors);
// //     },
// //   });
// // if token update obituary else create obituary
// //   // const onSubmit = (values: CreateObituarySchema) => {
// //   //   console.log(form.getValues(), values);
// //   //   const loadingToast = toast.loading("Saving Book...");
// //   //   updateUser(
// //   //     { user_id: isMe?.id, data: values },
// //   //     {
// //   //       onSuccess: () => {
// //   //         toast.dismiss(loadingToast);
// //   //         window.location.reload();
// //   //       },
// //   //       onError: () => toast.dismiss(loadingToast),
// //   //     }
// //   //   );
// //   // };
// // // const onSubmit = (values: CreateObituarySchema) => {
// // //   const { book_cover, obituary_pdf, ...rest } = values;

// // //   // Create a new FormData instance
// // //   const formData = new FormData();

// // //   // Append other fields to FormData
// // //   Object.entries(rest).forEach(([key, value]) => {
// // //     formData.append(key, value as string);
// // //   });

// // //   // Append files to FormData
// // //   if (book_cover instanceof File) {
// // //     formData.append("book_cover", book_cover);
// // //   }

// // //   if (obituary_pdf instanceof File) {
// // //     formData.append("obituary_pdf", obituary_pdf);
// // //   }

// // //   const loadingToast = toast.loading("Saving Book...");

// // //   updateUser(
// // //     { user_id: isMe?.id, data: formData },
// // //     {
// // //       onSuccess: () => {
// // //         toast.dismiss(loadingToast);
// // //         window.location.reload();
// // //       },
// // //       onError: () => toast.dismiss(loadingToast),
// // //     }
// // //   );
// // // };

// // const router = useRouter()
// // const onSubmit = (values: CreateObituarySchema) => {
// //   const formData = new FormData();

// //   // Append non-file fields (deceased_name, date_of_birth, etc.)
// //   formData.append("deceased_name", values.deceased_name);
// //   formData.append("date_of_birth", values.date_of_birth);
// //   formData.append("date_of_death", values.date_of_death);

// //   // Append files if they exist
// //   if (values.book_cover instanceof File) {
// //     formData.append("book_cover", values.book_cover);
// //   }

// //   if (values.obituary_pdf instanceof File) {
// //     formData.append("obituary_pdf", values.obituary_pdf);
// //   }

// //   const loadingToast = toast.loading("Saving Book...");

// //   // If token exists, update the obituary, otherwise create a new one
// //   if (token) {
// //     updateObituary(
// //       { data: formData, id: token }, // Use `token` for updating
// //       {
// //         onSuccess: (data) => {
// //           toast.dismiss(loadingToast);
// //           router.push(`/admin/obituary/view?token=${data.data.id}`);
// //         },
// //         onError: () => toast.dismiss(loadingToast),
// //       }
// //     );
// //   } else {
// //     updateUser(
// //       { id: isMe?.id, data: formData }, // Create new obituary
// //       {
// //         onSuccess: (data) => {
// //           toast.dismiss(loadingToast);
// //           router.push(`/admin/obituary/view?token=${data.data.id}`);
// //         },
// //         onError: () => toast.dismiss(loadingToast),
// //       }
// //     );
// //   }
// // };

// // // const onSubmit = (values: CreateObituarySchema) => {
// // //   const formData = new FormData();

// // //   // Append non-file fields (deceased_name, date_of_birth, etc.)
// // //   formData.append("deceased_name", values.deceased_name);
// // //   formData.append("date_of_birth", values.date_of_birth);
// // //   formData.append("date_of_death", values.date_of_death);

// // //   // Append files if they exist
// // //   if (values.book_cover instanceof File) {
// // //     formData.append("book_cover", values.book_cover);
// // //   }

// // //   if (values.obituary_pdf instanceof File) {
// // //     formData.append("obituary_pdf", values.obituary_pdf);
// // //   }

// // //   const loadingToast = toast.loading("Saving Book...");
// // //   updateUser(
// // //     { user_id: isMe?.id, data: formData },
// // //     {
// // //       onSuccess: (data) => {
// // //         toast.dismiss(loadingToast);
// // //         // window.location.reload();
// // //         console.log(data,'sooooooooo')
// // //         router.push(`/admin/obituary/view?token=${data.data.id}`);
// // //       },
// // //       onError: () => toast.dismiss(loadingToast),
// // //     }
// // //   );
// // // };


// //   // console.log(form.watch("profile_image"), "form.watch");
// //   return (
// //     <div>
// //       <div className="">
// //         <Form {...form}>
// //           <ScrollArea className="max-h-[1000px]">
// //             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
// //               <div className="xl:mx-[500px] mx-10 pt-16">
// //                 <div className="grid grid-cols-1 gap-4 text-black space-y-4">
// //                   <FormField
// //                     control={form.control}
// //                     name="deceased_name"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400]">
// //                           Deceased Name
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             {...field}
// //                             type="text"
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />

// //                   {/* <FormField
// //                     control={form.control}
// //                     name="obituary_pdf"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400]">
// //                           PDF
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             {...field}
// //                             type="file"
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="book_cover"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400]">
// //                           Book cover
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             {...field}
// //                             type="file"
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   /> */}
// //                   <FormField
// //                     control={form.control}
// //                     name="book_cover"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400]">
// //                           Book cover
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             type="file"
// //                             onChange={(e) =>
// //                               field.onChange(e.target.files?.[0])
// //                             } // Handle file
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />

// //                   <FormField
// //                     control={form.control}
// //                     name="obituary_pdf"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400]">
// //                           PDF
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             type="file"
// //                             onChange={(e) =>
// //                               field.onChange(e.target.files?.[0])
// //                             } // Handle file
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />

// //                   <FormField
// //                     control={form.control}
// //                     name="date_of_birth"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400] capitalize">
// //                           date_of_birth
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             {...field}
// //                             type="date"
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="date_of_death"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-md font-[400] capitalize">
// //                           date_of_death
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input border border-[#9C928F]"
// //                             {...field}
// //                             type="date"
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>
// //                 <Button
// //                   type="submit"
// //                   className="mt-8 bg-red-500"
// //                   disabled={isPendingUpdate}
// //                 >
// //                   {isPendingUpdate && (
// //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// //                   )}
// //                   Save Changes
// //                 </Button>
// //               </div>
// //             </form>
// //           </ScrollArea>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }




// "use client";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "#/components/ui/form";
// import { AppContext } from "#app/provider";
// import { Button } from "#components/ui/button";
// import { Input } from "#components/ui/input";
// import { useCreateObituary } from "#features/auth/hooks/use-create-obituary";
// import { useUpdateObituary } from "#features/auth/hooks/use-update-obituary";
// import {
//   CreateObituarySchema,
//   createObituarySchema,
// } from "#features/auth/schema/creta-obituary";

// import { errorsBind } from "#lib/errors-bind";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
// import { AxiosError } from "axios";
// import { Loader2 } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useContext, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// export default function RegisterForm() {
//   const { isMe } = useContext(AppContext);
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");
//   const obituaryDetails = isMe?.obituaries?.find((b) => b.id === token) || {};

//   const form = useForm({
//     defaultValues: {
//       book_cover: "",
//       deceased_name: "",
//       obituary_pdf: "",
//       date_of_birth: "",
//       date_of_death: "",
//     },
//     resolver: zodResolver(createObituarySchema),
//   });

//   useEffect(() => {
//     if (obituaryDetails) {
//       form.reset({
//         book_cover: obituaryDetails?.book_cover,
//         deceased_name: obituaryDetails?.deceased_name,
//         obituary_pdf: obituaryDetails?.obituary_pdf,
//         date_of_birth: obituaryDetails?.date_of_birth,
//         date_of_death: obituaryDetails?.date_of_death,
//       });
//     }
//   }, [isMe, form]);

//   const { mutate: createObituary, isPending: isPendingCreate } =
//     useCreateObituary({
//       onSuccess: (data) => {
//         toast.success("Obituary created successfully.");
//         router.push(`/admin/obituary/view?token=${data.data.id}`);
//       },
//       onError: (errors: AxiosError) => {
//         toast.dismiss();
//         errorsBind(errors);
//       },
//     });

//   const { mutate: updateObituary, isPending: isPendingUpdate } =
//     useUpdateObituary({
//       onSuccess: () => {
//         toast.success("Obituary updated successfully.");
//       },
//       onError: (errors: AxiosError) => {
//         toast.dismiss();
//         errorsBind(errors);
//       },
//     });

//   const router = useRouter();

//   const onSubmit = (values: CreateObituarySchema) => {
//     const formData = new FormData();

//     formData.append("deceased_name", values.deceased_name);
//     formData.append("date_of_birth", values.date_of_birth);
//     formData.append("date_of_death", values.date_of_death);

//     if (values.book_cover instanceof File) {
//       formData.append("book_cover", values.book_cover);
//     }

//     if (values.obituary_pdf instanceof File) {
//       formData.append("obituary_pdf", values.obituary_pdf);
//     }

//     const loadingToast = toast.loading("Saving obituary...");

//     if (token) {
//       updateObituary(
//         { id: token, data: formData },
//         {
//           onSuccess: (data) => {
//             toast.dismiss(loadingToast);
//             router.push(`/admin/obituary/view?token=${token}`);
//           },
//           onError: () => toast.dismiss(loadingToast),
//         }
//       );
//     } else {
//       createObituary(
//         { user_id: isMe?.id, data: formData },
//         {
//           onSuccess: (data) => {
//             toast.dismiss(loadingToast);
//             router.push(`/admin/obituary/view?token=${data.data.id}`);
//           },
//           onError: () => toast.dismiss(loadingToast),
//         }
//       );
//     }
//   };

//   return (
//     <div>
//       <div>
//         <Form {...form}>
//           <ScrollArea className="max-h-[1000px]">
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
//               <div className="xl:mx-[500px] mx-10 pt-16">
//                 <div className="grid grid-cols-1 gap-4 text-black space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="deceased_name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Deceased Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                             type="text"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="book_cover"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Book Cover
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             type="file"
//                             onChange={(e) =>
//                               field.onChange(e.target.files?.[0])
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="obituary_pdf"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           PDF
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             type="file"
//                             onChange={(e) =>
//                               field.onChange(e.target.files?.[0])
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="date_of_birth"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Date of Birth
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                             type="date"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="date_of_death"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Date of Death
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                             type="date"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="mt-8 bg-red-500"
//                   disabled={isPendingCreate || isPendingUpdate}
//                 >
//                   {(isPendingCreate || isPendingUpdate) && (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   )}
//                   Save Changes
//                 </Button>
//               </div>
//             </form>
//           </ScrollArea>
//         </Form>
//       </div>
//     </div>
//   );
// }





"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { useCreateObituary } from "#features/auth/hooks/use-create-obituary";
import { useUpdateObituary } from "#features/auth/hooks/use-update-obituary";
import {
  CreateObituarySchema,
  createObituarySchema,
} from "#features/auth/schema/creta-obituary";

import { errorsBind } from "#lib/errors-bind";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  // @ts-ignore
  const obituaryDetails = isMe?.obituaries?.find((b) => b.id === token) || {};

  const form = useForm({
    defaultValues: {
      book_cover: "",
      deceased_name: "",
      obituary_pdf: "",
      date_of_birth: "",
      date_of_death: "",
    },
    resolver: zodResolver(createObituarySchema),
  });

  useEffect(() => {
    if (obituaryDetails) {
      form.reset({
        book_cover: obituaryDetails?.book_cover || "",
        deceased_name: obituaryDetails?.deceased_name || "",
        obituary_pdf: obituaryDetails?.obituary_pdf || "",
        date_of_birth: obituaryDetails?.date_of_birth || "",
        date_of_death: obituaryDetails?.date_of_death || "",
      });
    }
  }, [isMe, form]);

  const { mutate: createObituary, isPending: isPendingCreate } =
    useCreateObituary({
      onSuccess: (data) => {
        toast.success("Obituary created successfully.");
        router.push(`/admin/obituary/view?token=${data.data.id}`);
      },
      // @ts-ignore
      onError: (errors: AxiosError) => {
        toast.dismiss();
        errorsBind(errors);
      },
    });

  const { mutate: updateObituary, isPending: isPendingUpdate } =
    useUpdateObituary({
      onSuccess: () => {
        toast.success("Obituary updated successfully.");
      },
      // @ts-ignore
      onError: (errors: AxiosError) => {
        toast.dismiss();
        errorsBind(errors);
      },
    });

  const router = useRouter();

  const onSubmit = (values: CreateObituarySchema) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append("deceased_name", values.deceased_name);
    // @ts-ignore
    formData.append("date_of_birth", values.date_of_birth);
    // @ts-ignore
    formData.append("date_of_death", values.date_of_death);

    // Vérifiez et loggez les fichiers
    if (values.book_cover instanceof File) {
      formData.append("book_cover", values.book_cover);
    } else if (!token) {
      console.log("Book cover is required during creation.");
    }

    if (values.obituary_pdf instanceof File) {
      formData.append("obituary_pdf", values.obituary_pdf);
    } else if (!token) {
      console.log("Obituary PDF is required during creation.");
    }

    // Log des données pour déboguer
    console.log("Form Data:", values);

    const loadingToast = toast.loading("Saving obituary...");

    if (token) {
      updateObituary(
        { id: token, data: formData },
        {
          onSuccess: (data) => {
            toast.dismiss(loadingToast);
            router.push(`/admin/obituary/view?token=${token}`);
          },
          onError: () => toast.dismiss(loadingToast),
        }
      );
    } else {
      createObituary(
        // @ts-ignore
        { user_id: isMe?.id, data: formData },
        {
          onSuccess: (data) => {
            toast.dismiss(loadingToast);
            router.push(`/admin/obituary/view?token=${data.data.id}`);
          },
          onError: () => toast.dismiss(loadingToast),
        }
      );
    }
  };

  return (
    <div>
      <div className="">
        <Form {...form}>
          <ScrollArea className="max-h-[1000px]">
            <h1 className="text-[#383838] text-center pt-5">
              Welcome {isMe?.full_name} to Visitation Book.com
            </h1>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 py-5"
            >
              <div className="xl:mx-[450px] mx-10  pt-16 bg-white p-7 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 gap-4 text-black space-y-4 ">
                  <FormField
                    control={form.control}
                    name="deceased_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Deceased Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="book_cover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Book Cover
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            type="file"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="obituary_pdf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          PDF
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            type="file"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Date of Birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                            type="date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date_of_death"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Date of Death
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                            type="date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-8 bg-red-500 w-full"
                  disabled={isPendingCreate || isPendingUpdate}
                >
                  {(isPendingCreate || isPendingUpdate) && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </div>
            </form>
          </ScrollArea>
        </Form>
      </div>
    </div>
  );
}
