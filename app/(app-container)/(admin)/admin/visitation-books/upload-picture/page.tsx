"use client";
import { Button } from "#components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useCallback, useContext, useState } from "react";
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
import { Input } from "#components/ui/input";

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
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const onSubmit = (values: UpdateBookPurchaseSchema) => {
    const formData = new FormData();

    // Check if any files were accepted
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file instanceof File) {
        formData.append("deceased_image", file);
      } else {
        console.error("deceased_image is not a valid file");
        return;
      }
    } else {
      console.error("No files accepted");
      return;
    }

    // Log the FormData for debugging
    console.log(acceptedFiles[0], formData, form.getValues());

    updateBookPurchase(
      {
        // @ts-ignore
        id: token,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("Book has been updated successfully");
          // Optionally redirect
          router.push(`/admin/visitation-books/information-upload?token=${token}`);
        },
        onError: () => {
          toast.error("Book update failed");
        },
      }
    );
  };

  // const onSubmit = (values: UpdateBookPurchaseSchema) => {
  //   // const formData = new FormData();

  //   // if (
  //   //   values.deceased_image instanceof File ||
  //   //   values.deceased_image instanceof Blob
  //   // ) {
  //   //   formData.append("deceased_image", values.deceased_image);
  //   // } else {
  //   //   console.error("deceased_image is not a valid file");
  //   //   return;
  //   // }

  //   if (typeof acceptedFiles[0] === "undefined") console.log("nulllll");
  //   const formData = new FormData();
  //   form.setValue("deceased_image", acceptedFiles[0]);
  //   formData.append("deceased_image", form.watch("deceased_image"));
  //   console.log(acceptedFiles[0], formData, form.getValues());

  //   updateBookPurchase(
  //     {
  //       // @ts-ignore
  //       id: token,
  //       data: formData
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("Book has been updated successfully");
  //         // router.push(
  //         //   `/admin/visitation-books/information-upload?token=${token}`
  //         // );
  //       },
  //       onError: () => {
  //         toast.error("Book update failed");
  //       },
  //     }
  //   );
  // };
  // @ts-ignore
  const validBook = isMe?.book_purchases?.find((b) => b.id === token);
  // console.log(validBook);

  // function DropFileField({ form }: { form: any }) {
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop: (acceptedFiles) => {
  //       form.setValue("deceased_image", acceptedFiles[0], {
  //         shouldValidate: true,
  //       });
  //     },
  //     accept: {
  //       "image/*": [],
  //     },
  //   });

  //   const handleRemoveImage = () => {
  //     form.setValue("deceased_image", null, { shouldValidate: true });
  //   };

  //   return (
  //     <FormField
  //       control={form.control}
  //       name="deceased_image"

  //       render={({ field }) => (
  //         <FormItem>
  //           <FormLabel className="text-lg font-bold">Select File</FormLabel>
  //           {!field.value ? (
  //             <div
  //               {...getRootProps()}
  //               className={`border-2 border-dashed rounded-lg p-10 cursor-pointer transition-colors
  //               ${
  //                 isDragActive
  //                   ? "border-blue-500 bg-blue-100"
  //                   : "border-gray-400 bg-white"
  //               }`}
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
  //           ) : (
  //             <div className="mt-2 flex flex-col items-start gap-3 text-gray-600">
  //               <Image
  //                 alt="Uploaded file"
  //                 src={URL.createObjectURL(field.value)}
  //                 width={150}
  //                 height={150}
  //                 className="rounded"
  //               />
  //               <div className="flex items-center gap-3">
  //                 <span>{field.value.name}</span>
  //                 <Button
  //                   type="button"
  //                   className="text-red-500"
  //                   onClick={handleRemoveImage}
  //                 >
  //                   Remove
  //                 </Button>
  //               </div>
  //             </div>
  //           )}
  //           <FormMessage />
  //         </FormItem>
  //       )}
  //     />
  //   );
  // }

  return (
    <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 mt-7 py-28 lg:mx-36 border-t rounded-lg lg:shadow-md bg-[#F8F5F5]">
        <div>
          <p className="font-bold text-[25px] mb-7 text-[#383838]">
            Upload the picture of the deceased
          </p>

          <div className="relative top-0 left-0 ">
            <div className="relative left-50 right-50">
              <div className="flex justify-center ">
                <img src="/images/bady.svg" />

                <img // @ts-ignore
                  src={`http://34.44.9.82${validBook?.book?.cover}`}
                />
              </div>
            </div>
            <img className="image2 absolute" src="/images/both.svg" />
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={
              // @ts-ignore
              form.handleSubmit(onSubmit)
            }
            className=" mx-auto md:m-0 space-y-5"
          >
            <div className="grid pt-7 grid-cols-1 gap-7">
              <FormField
                control={form.control}
                name="deceased_image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">
                      Select File
                    </FormLabel>
                    <FormControl>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>Drop the files here ...</p>
                        ) : (
                          <p className="border-dashed border-2 p-6 border-gray-400 rounded-lg">
                            Drag 'n' drop some files here, or click to select
                            files
                          </p>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {preview && (
                <p className="mb-5">
                  <img src={preview as string} alt="Upload preview" />
                </p>
              )}
            </div>
            <div className="flex mt-14 justify-end">
              <Button
                className="mt-5 justify-end px-7 rounded-full flex bg-[#f00]"
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
