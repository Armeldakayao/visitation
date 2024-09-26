// "use client"
// import { Button } from "#components/ui/button";
// import { ArrowRight, Loader2 } from "lucide-react";
// import React from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "#/components/ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "#features/auth";
// import { Input } from "#components/ui/input";
// import { useDropzone } from 'react-dropzone';

// export default function Page() {
//     function DropFileField({ form }) {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       form.setValue('card_holder', acceptedFiles[0]);
//     },
//   });
//     // const form = useForm({
//     //   resolver: zodResolver(loginSchema),
//     // });
//      const onSubmit = () => {
//        console.log("ok");
//      };
//   return (
//     <div className=" mx-auto text-[#383838]  p-7">
//       <h1 className="text-[#383838] text-center pt-20">
//         Welcome JOHN to Visitation Book.com
//       </h1>
//       <div className="grid grid-cols-2 px-20 mt-7 py-10 mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
//         <div className="">
//           <p className="font-bold text-[25px] mb-7 text-[#383838]">
//             Upload the picture off the decreased
//           </p>
//           <div className="flex mt-72  ">
//             <div className="absolute top-[335px]">
//               <div className="flex gap-7 mx-20 ">
//                 <div>
//                   <img src="/images/cover.svg" width={150} height={150} />
//                   <br />
//                   <p className="text-black text-lg text-center font-bold">
//                     $ 100.00
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <img src="/images/both.svg" width={1000} height={1000} />
//           </div>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//       <div className="grid pt-7 grid-cols-1 gap-7">
//         <FormField
//           control={form.control}
//           name="card_holder"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-lg font-bold">Card holder</FormLabel>
//               <div
//                 {...getRootProps()}
//                 className={`border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors 
//                   ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-400 bg-white'}`}
//               >
//                 <input {...getInputProps()} {...field} />
//                 {isDragActive ? (
//                   <p className="text-center text-blue-500">Drop the files here...</p>
//                 ) : (
//                   <p className="text-center text-gray-500">
//                     Drag 'n' drop a file here, or click to select a file
//                   </p>
//                 )}
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>
//     </form>
//         </Form>
//         <div></div>
//         <div className="flex mt-14 justify-end">
//           <Button className="bg-[#f00] text-white flex-end">
//             Next <ArrowRight className="text-white" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";
// import { Button } from "#components/ui/button";
// import { ArrowRight, Loader2 } from "lucide-react";
// import React, { useContext } from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "#/components/ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "#features/auth";
// import { useDropzone } from "react-dropzone";
// import { useRouter } from "next/navigation";
// import { AppContext } from "#app/provider";
// import { UpdateBookPurchaseSchema, updateBookPurchaseSchema } from "#features/auth/schema/update-book-purchase";
// import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
// import toast from "react-hot-toast";

// export default function Page() {
//   const { isMe } = useContext(AppContext);
//   const bookLength = isMe?.book_purchases?.length || 1;

//   const form = useForm({
//     resolver: zodResolver(updateBookPurchaseSchema),
//     mode: "onChange",
//   });

//   const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();
//   const router = useRouter();

//   const onSubmit = (values: UpdateBookPurchaseSchema) => {
//     console.log("Form Submitted", values);
//     updateBookPurchase(
//       {
//         id: isMe?.book_purchases[bookLength - 1]?.id,
//         data: values,
//       },
//       {
//         onSuccess: () => {
//           toast.success("Book has updated successfully");
//            router.push("/admin/visitation-books/information-upload");
//         },
//         onError: () => {
//           toast.error("Book update failed");
//         },
//       }
//     );
//   };
//   console.log(form.getValues());

//   function DropFileField({ form }: { form: any }) {
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//       onDrop: (acceptedFiles) => {
//         form.setValue("deceased_image", acceptedFiles[0]);
//       },
//     });

//     return (
//       <FormField
//         control={form.control}
//         name="deceased_image"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel className="text-lg font-bold">Select File</FormLabel>
//             <div
//               {...getRootProps()}
//               className={`border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors 
//                 ${
//                   isDragActive
//                     ? "border-blue-500 bg-blue-100"
//                     : "border-gray-400 bg-white"
//                 }`}
//             >
//               <input {...getInputProps()} {...field} />
//               {isDragActive ? (
//                 <p className="text-center text-blue-500">
//                   Drop the files here...
//                 </p>
//               ) : (
//                 <p className="text-center text-gray-500">
//                   Drag and drop or browse
//                 </p>
//               )}
//             </div>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     );
//   }

//   return (
//     <div className="mx-auto text-[#383838] p-7">
//       <h1 className="text-[#383838] text-center pt-20">
//         Welcome JOHN to Visitation Book.com
//       </h1>
//       <div className="grid grid-cols-2 px-20 mt-7 py-10 mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
//         <div>
//           <p className="font-bold text-[25px] mb-7 text-[#383838]">
//             Upload the picture of the deceased
//           </p>
//           <div className="flex mt-72">
//             <div className="absolute top-[335px]">
//               <div className="flex gap-7 mx-20">
//                 <div>
//                   <img src="/images/cover.svg" width={150} height={150} />
//                   <br />
//                   <p className="text-black text-lg text-center font-bold">
//                     $ 100.00
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <img src="/images/both.svg" width={1000} height={1000} />
//           </div>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//             <div className="grid pt-7 grid-cols-1 gap-7">
//               <DropFileField form={form} />
//             </div>
//             <div className="flex mt-14 justify-end">
//               <Button
//                 className="mt-5 justify-end rounded-full flex bg-[#f00]"
//                 disabled={isPending}
//               >
//                 {isPending && (
//                   <Loader2
//                     className="mr-2 h-4 w-4 animate-spin"
//                     aria-hidden="true"
//                   />
//                 )}
//                 Next
//                 <span className="sr-only">Next</span>
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { Button } from "#components/ui/button";
// import { ArrowRight, Loader2 } from "lucide-react";
// import React, { useContext } from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "#/components/ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useDropzone } from "react-dropzone";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AppContext } from "#app/provider";
// import {
//   UpdateBookPurchaseSchema,
//   updateBookPurchaseSchema,
// } from "#features/auth/schema/update-book-purchase";
// import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
// import toast from "react-hot-toast";
// import Image from "next/image";

// export default function Page() {
//   const { isMe } = useContext(AppContext);
//   const bookLength = isMe?.book_purchases?.length || 1;
// const searchPams = useSearchParams()
// const token= searchPams.get("token")
//   const form = useForm({
//     resolver: zodResolver(updateBookPurchaseSchema),
//     mode: "onChange",
//   });

//   const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();
//   const router = useRouter();
// const onSubmit = (values: UpdateBookPurchaseSchema) => {
//   const formData = new FormData();

//   // Assurez-vous que deceased_image est bien un fichier
//   if (values.deceased_image instanceof File) {
//     formData.append("deceased_image", values.deceased_image);
//   } else {
//     console.error("deceased_image is not a valid file");
//     return;
//   }

//   // Envoyer le formulaire
//   updateBookPurchase(
//     {
//       id: token,
//       data: formData,
//     },
//     {
//       onSuccess: () => {
//         toast.success("Book has updated successfully");
//         router.push(
//           `/admin/visitation-books/information-upload?token=${token}`
//         );
//       },
//       onError: () => {
//         toast.error("Book update failed");
//       },
//     }
//   );
// };

//   // const onSubmit = (values: UpdateBookPurchaseSchema) => {
//   //   const formData = new FormData();
//   //   formData.append("deceased_image", values.deceased_image);
//   //   // Ajouter d'autres champs au besoin

//   //   updateBookPurchase(
//   //     {
//   //       id: token,
//   //       data: formData,
//   //     },
//   //     {
//   //       onSuccess: () => {
//   //         toast.success("Book has updated successfully");
//   //         router.push(
//   //           `/admin/visitation-books/information-upload?token=${token}`
//   //         );
//   //       },
//   //       onError: () => {
//   //         toast.error("Book update failed");
//   //       },
//   //     }
//   //   );
//   // };
//  const validBook = isMe?.book_purchases?.find((b) => b.id === token);
//  console.log(validBook)
//   function DropFileField({ form }: { form: any }) {
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//       onDrop: (acceptedFiles) => {
//         form.setValue("deceased_image", acceptedFiles[0], {
//           shouldValidate: true,
//         });
//       },
//     });

//     return (
//       <FormField
//         control={form.control}
//         name="deceased_image"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel className="text-lg font-bold">Select File</FormLabel>
//             <div
//               {...getRootProps()}
//               className={`border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors 
//                 ${
//                   isDragActive
//                     ? "border-blue-500 bg-blue-100"
//                     : "border-gray-400 bg-white"
//                 }`}
//             >
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p className="text-center text-blue-500">
//                   Drop the files here...
//                 </p>
//               ) : (
//                 <p className="text-center text-gray-500">
//                   Drag and drop or browse
//                 </p>
//               )}
//             </div>
//             {field.value && (
//               <div className="mt-2 flex border gap-3 text-gray-600">
               
//                 <img alt='' src={field.value.name} width={50} height={50} />
//                 {field.value.name}
//               </div>
//             )}
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     );
//   }

//   return (
//     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
//       <h1 className="text-[#383838] text-center pt-20">
//         Welcome {isMe?.full_name} to Visitation Book.com
//       </h1>
//       <div className="grid lg:grid-cols-2 grid-cols-1 px-20 mt-7 py-16 lg:mx-36 border-t rounded-lg lg:shadow-md bg-[#F8F5F5]">
//         <div>
//           <p className="font-bold text-[25px] mb-7 text-[#383838]">
//             Upload the picture of the deceased
//           </p>
//           <div className="flex mt-72">
//             <div className="absolute top-[335px]">
//               <div className="flex gap-7 mx-20">
//                 <div>
//                   <img
//                     src={`http://34.44.9.82${validBook?.book?.cover}`}
//                     width={150}
//                     height={150}
//                   />
//                   <br />
//                   <p className="text-black text-lg pb-20 text-center font-bold">
//                     $ {validBook?.book?.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <img src="/images/both.svg" width={1000} height={1000} />
//           </div>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//             <div className="grid pt-7 grid-cols-1 gap-7">
//               <DropFileField form={form} />
//             </div>
//             <div className="flex mt-14 justify-end">
//               <Button
//                 className="mt-5 justify-end rounded-full flex bg-[#f00]"
//                 disabled={isPending}
//               >
//                 {isPending && (
//                   <Loader2
//                     className="mr-2 h-4 w-4 animate-spin"
//                     aria-hidden="true"
//                   />
//                 )}
//                 Next
//                 <span className="sr-only">Next</span>
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }







"use client";
import { Button } from "#components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useContext } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "#app/provider";
import {
  UpdateBookPurchaseSchema,
  updateBookPurchaseSchema,
} from "#features/auth/schema/update-book-purchase";
import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Page() {
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const bookLength = isMe?.book_purchases?.length || 1;
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm({
    resolver: zodResolver(updateBookPurchaseSchema),
    mode: "onChange",
  });

  const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();
  const router = useRouter();

  const onSubmit = (values: UpdateBookPurchaseSchema) => {
    const formData = new FormData();

    // Vérifiez que deceased_image est un fichier
    if (values.deceased_image instanceof File) {
      formData.append("deceased_image", values.deceased_image);
    } else {
      console.error(
        "Aucun fichier image n'a été sélectionné ou le fichier est invalide."
      );
      toast.error("Veuillez sélectionner un fichier image valide.");
      return;
    }

    // Assurez-vous que les autres champs sont bien ajoutés au formData (si nécessaire)
    updateBookPurchase(
      {
        // @ts-ignore
        id: token,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("L'image du livre a été mise à jour avec succès.");
          router.push(`/admin/both/information-upload?token=${token}`);
        },
        onError: (error) => {
          console.error("Erreur de mise à jour : ", error);
          toast.error("La mise à jour de l'image a échoué.");
        },
      }
    );
  };

  // const onSubmit = (values: UpdateBookPurchaseSchema) => {
  //   const formData = new FormData();

  //   // Assurez-vous que deceased_image est bien un fichier ou un blob
  //   if (
  //     values.deceased_image instanceof File ||
  //     values.deceased_image instanceof Blob
  //   ) {
  //     formData.append("deceased_image", values.deceased_image);
  //   } else {
  //     console.error("deceased_image is not a valid file");
  //     return;
  //   }

  //   updateBookPurchase(
  //     {
  //       id: token,
  //       data: formData,
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("Book has been updated successfully");
  //         router.push(
  //           `/admin/visitation-books/information-upload?token=${token}`
  //         );
  //       },
  //       onError: () => {
  //         toast.error("Book update failed");
  //       },
  //     }
  //   );
  // };
  // @ts-ignore
  const validBook = isMe?.book_purchases?.find((b) => b.id === token);
  console.log(validBook);

  function DropFileField({ form }: { form: any }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (acceptedFiles) => {
        form.setValue("deceased_image", acceptedFiles[0], {
          shouldValidate: true,
        });
      },
      accept: {
        "image/*": [], // N'accepte que les fichiers image
      },
    });

    return (
      <FormField
        control={form.control}
        name="deceased_image"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-bold">Select File</FormLabel>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors 
                ${
                  isDragActive
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-400 bg-white"
                }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-center text-blue-500">
                  Drop the files here...
                </p>
              ) : (
                <p className="text-center text-gray-500">
                  Drag and drop or browse
                </p>
              )}
            </div>
            {field.value && (
              <div className="mt-2 flex border gap-3 text-gray-600">
                <Image
                  alt=""
                  src={URL.createObjectURL(field.value)}
                  width={50}
                  height={50}
                />
                {field.value.name}
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-20 mt-7 py-16 lg:mx-36 border-t rounded-lg lg:shadow-md bg-[#F8F5F5]">
        <div>
          <p className="font-bold text-[25px] mb-7 text-[#383838]">
            Upload the picture of the deceased
          </p>
          <div className="flex mt-72">
            <div className="absolute top-[335px]">
              <div className="flex gap-7 mx-20">
                <div>
                  <img
                    src={`http://34.44.9.82${validBook?.book?.cover}`}
                    width={150}
                    height={150}
                  />
                  <br />
                  <p className="text-black text-lg pb-20 text-center font-bold">
                    $ {validBook?.book?.price}
                  </p>
                </div>
              </div>
            </div>
            <img src="/images/both.svg" width={1000} height={1000} />
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={
              // @ts-ignore
              form.handleSubmit(onSubmit)
            }
            className="space-y-5"
          >
            <div className="grid pt-7 grid-cols-1 gap-7">
              <DropFileField form={form} />
            </div>
            <div className="flex mt-14 justify-end">
              <Button
                className="mt-5 justify-end rounded-full flex bg-[#f00]"
                disabled={isPending}
              >
                {isPending && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Next
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
