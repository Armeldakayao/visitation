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
// import { CustomModal } from "#components/shared/modal";
// import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
// import { Button } from "#components/ui/button";
// import { Input } from "#components/ui/input";
// import PasswordInput from "#components/ui/password-input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "#components/ui/select";
// import { useUpdateUser } from "#features/auth/hooks/use-update-user";
// import { UpdateUserSchema, updateUserSchema } from "#features/auth/schema/user-update";

// import { errorsBind } from "#lib/errors-bind";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
// import { AxiosError } from "axios";
// import { Loader2 } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// export default function RegisterForm() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [getMeData, setGetMeData] = useState({});
//   const { isMe } = useContext(AppContext);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const form = useForm({
//     defaultValues: {
//       full_name: "",
//       email: "",
//       security_question: "",
//       security_answer: "",
//       password: "",
//       profile_image:""
//     },
//     resolver: zodResolver(updateUserSchema),
//   });

//   useEffect(() => {
//     if (isMe) {
//       form.reset({
//         full_name: isMe.full_name || "",
//         email: isMe.email || "",
//         security_question: isMe.security_question || "",
//         security_answer: isMe.security_answer || "",
//         password: "",
//         profile_image:isMe.profile_image|| "",
//       });
//     }
//   }, [isMe, form]);

//   const { mutate: updateUser, isPending: isPendingUpdate } = useUpdateUser({
//     onSuccess: (data) => {
//       toast.success("User updated successfully.");
//       form.reset({
//         full_name: data.full_name,
//         email: data.email,
//         security_question: data.security_question,
//         security_answer: data.security_answer,
//         password: "", // Ensure password remains empty after form reset
//         profile_image: data?.profile_image || "",
//       });
//       closeModal();
//     },
//     onError: (errors: AxiosError) => {
//       toast.dismiss();
//       errorsBind(errors);
//     },
//   });

//   const onSubmit = (values: UpdateUserSchema) => {
//     console.log(form.getValues(),values);
//     const loadingToast = toast.loading("Updating User...");
//     updateUser(
//       { id: isMe?.id, data: values },
//       {
//         onSuccess: () => toast.dismiss(loadingToast),
//         onError: () => toast.dismiss(loadingToast),
//       }
//     );
//   };
// console.log(form.getValues())
//   return (
//     <div>
//       <div className="">
//         <Form {...form}>
//           <ScrollArea className="max-h-[1000px]">
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
//               <div className="bg-[#EAE2E2] p-5 items-center justify-center flex rounded-b-full">
//                 {" "}
//                 <Avatar>
//                   <AvatarImage
//                     src={`http://34.27.136.91${isMe?.profile_image}`}
//                     alt="PM"

//                   />
//                   <AvatarFallback className="uppercase font-bold">
//                     {isMe?.full_name ? isMe.full_name.slice(0, 2) : ""}
//                   </AvatarFallback>
//                 </Avatar>
//                 <FormField
//                   control={form.control}
//                   name="profile_image"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="hidden text-md font-[400]">
//                         Profile Image
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           type="file"
//                           className="input h-10 w-10 rounded-full border border-[#9C928F]"
//                           onChange={(e) => {
//                             const file = e.target.files?.[0];
//                             if (file) {
//                               field.onChange(file);
//                             }
//                           }}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="mx-[500px] pt-16">
//                 <div className="grid grid-cols-1 gap-4 text-black space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="full_name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Email Address
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="security_question"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Security Question
//                         </FormLabel>
//                         <FormControl>
//                           <Select
//                             defaultValue={field.value}
//                             onValueChange={field.onChange}
//                           >
//                             <SelectTrigger className="input border border-[#9C928F]">
//                               <SelectValue placeholder="Add security question" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectGroup>
//                                 <SelectLabel>Questions</SelectLabel>
//                                 <SelectItem value="What is your birthday?">
//                                   What is your birthday?
//                                 </SelectItem>
//                                 <SelectItem value="What is your favourite color?">
//                                   What is your favourite color?
//                                 </SelectItem>
//                                 <SelectItem value="Name of your pet?">
//                                   Name of your pet?
//                                 </SelectItem>
//                               </SelectGroup>
//                             </SelectContent>
//                           </Select>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="security_answer"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Answer
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input border border-[#9C928F]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-md font-[400]">
//                           Password
//                         </FormLabel>
//                         <FormControl>
//                           <PasswordInput
//                             className="input border border-[#9C928F]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center gap-4 pt-5">
//                   <Button
//                     className="bg-[#f00] rounded-full"
//                     disabled={isPendingUpdate}
//                   >
//                     {isPendingUpdate && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Update Account
//                   </Button>
//                 </div>
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
import { CustomModal } from "#components/shared/modal";
import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import PasswordInput from "#components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select";
import { useUpdateUser } from "#features/auth/hooks/use-update-user";
import {
  UpdateUserSchema,
  updateUserSchema,
} from "#features/auth/schema/user-update";

import { errorsBind } from "#lib/errors-bind";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AxiosError } from "axios";
import { Loader2, Camera } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getMeData, setGetMeData] = useState({});
  // @ts-ignore
  const { isMe } = useContext(AppContext);

  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const form = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      security_question: "",
      security_answer: "",
      password: "",
      profile_image: "",
    },
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    if (isMe) {
      form.reset({
        full_name: isMe.full_name || "",
        email: isMe.email || "",
        security_question: isMe.security_question || "",
        security_answer: isMe.security_answer || "",
        password: "",
        profile_image: isMe.profile_image || "",
      });
      // Set the initial image URL if available
      setImageUrl(isMe?.profile_image || null);
    }
  }, [isMe, form]);
  console.log(imageUrl, "imageURL", isMe);
  const { mutate: updateUser, isPending: isPendingUpdate } = useUpdateUser({
    onSuccess: (data) => {
      toast.success("User updated successfully.");
      form.reset({
        // @ts-ignore
        full_name: data.full_name,
        // @ts-ignore
        email: data.email,
        // @ts-ignore
        security_question: data.security_question,
        // @ts-ignore
        security_answer: data.security_answer,
        password: "", // Ensure password remains empty after form reset
        // @ts-ignore
        profile_image: data.profile_image || "",
      });
      // @ts-ignore
      setImageUrl(data.profile_image || null); // Update the image URL
      closeModal();
    },
    // @ts-ignore
    onError: (errors: AxiosError) => {
      toast.dismiss();
      errorsBind(errors);
    },
  });

  const onSubmit = (values: UpdateUserSchema) => {
    console.log(form.getValues(), values);
    const loadingToast = toast.loading("Updating User...");
    updateUser(
      { id: isMe?.id, data: values },
      {
        onSuccess: () => {
          toast.dismiss(loadingToast);
          window.location.reload();
        },
        onError: () => toast.dismiss(loadingToast),
      }
    );
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };
  const [imgUpload, setImgUpload] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Set the image URL
        // @ts-ignore
        form.setValue("profile_image", file); // Set the file value in the form
        setImgUpload(true);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(form.watch("profile_image"), "form.watch");
  return (
    <div>
      <div className="">
        <Form {...form}>
          <ScrollArea className="max-h-[1000px]">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="bg-[#EAE2E2] p-5 items-center justify-center flex rounded-b-full">
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />

                {/* Custom button/icon */}
                <button
                  type="button"
                  onClick={handleIconClick}
                  className="flex items-center justify-center absolute top-24 ml-20 h-7 w-7 rounded-full border border-[#9C928F] bg-gray-200"
                >
                  <Camera className="h-3 w-3 text-gray-600" />
                </button>

                {/* Display uploaded image */}
                {imgUpload ? (
                  <div className="mt-4 relative">
                    <img
                      className="w-20 h-20 rounded-full border border-[#9C928F]"
                      src={imageUrl as string}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="mt-4 relative">
                    <img
                      className="w-20 h-20 rounded-full border border-[#9C928F]"
                      src={`http://34.27.136.91${isMe?.profile_image}`}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="xl:mx-[500px] mx-10 pt-16">
                <div className="grid grid-cols-1 gap-4 text-black space-y-4">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="security_question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Security Question
                        </FormLabel>
                        <FormControl>
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="input border border-[#9C928F]">
                              <SelectValue placeholder="Add security question" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Questions</SelectLabel>
                                <SelectItem value="What is your birthday?">
                                  What is your birthday?
                                </SelectItem>
                                <SelectItem value="What is your favourite color?">
                                  What is your favourite color?
                                </SelectItem>
                                <SelectItem value="Name of your pet?">
                                  Name of your pet?
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="security_answer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Answer
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="input border border-[#9C928F]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md font-[400]">
                          Password
                        </FormLabel>
                        <FormControl>
                          <PasswordInput
                            className="input border border-[#9C928F]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-8 bg-red-500"
                  disabled={isPendingUpdate}
                >
                  {isPendingUpdate && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save Changes
                </Button>
              </div>
            </form>
          </ScrollArea>
        </Form>
      </div>
    </div>
  );
}
