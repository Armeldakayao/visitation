"use client";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";

import { useCreateBookPurchase } from "#features/auth/hooks/use-create-book-purchase";
import { updateUserSchema } from "#features/auth/schema/user-update";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  CreateBookPurchase,
  createBookPurchase,
} from "#features/auth/schema/create-book-purschase";
import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
import { updateBookPurchaseSchema } from "#features/auth/schema/update-book-purchase";

// Fonction pour tronquer les données en groupes de 4
function chunkArray(array: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function Page() {
  const form = useForm({
    resolver: zodResolver(updateBookPurchaseSchema),
    mode: "onChange",
  });

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
  const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const formData = new FormData();
  const file = acceptedFiles[0];
  form.setValue("custom_cover",file)
  const { mutate,isPending:createPending } = useCreateBookPurchase();
  const onSubmit = (values: CreateBookPurchase) => {

    // Vérifie si des fichiers ont été acceptés
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0]; // Utilise le premier fichier accepté

      if (file instanceof File) {
        const formData = new FormData();
        formData.append("custom_cover", file);

        // Log des fichiers acceptés et des valeurs du formulaire pour débogage
        console.log(file, formData, form.getValues());

        // Appelle la mutation pour créer le livre
        mutate(
          {
            book_id: "3756b6e5-ff80-4516-8b7f-bf9ca307ded3",
          },
          {
            onSuccess: (data) => {
              toast.success("Le livre a été créé avec succès");

              console.log(data);

              // Crée un nouveau FormData pour la mise à jour
              const formData = new FormData();

              // Ajoute le fichier à formData
              formData.append("custom_cover", file);

              // Log pour débogage
              console.log(file, formData, form.getValues());

              updateBookPurchase(
                {
                  // @ts-ignore
                  id: data.data.id,
                  data: formData,
                },
                {
                  onSuccess: (dataValues) => {
                    toast.success("Le livre a été mis à jour avec succès");
                    // Redirection optionnelle après succès
                    router.push(
                      `/admin/visitation-books/fill-book?token=${dataValues?.data.id}&book_token=${"3756b6e5-ff80-4516-8b7f-bf9ca307ded3"}`
                    );
                  },
                  onError: () => {
                    toast.error("La mise à jour du livre a échoué");
                  },
                }
              );
            },
            onError: () => {
              toast.error("La création du livre a échoué");
            },
          }
        );
      } else {
        console.error("custom_cover n'est pas un fichier valide");
      }
    } else {
      console.error("Aucun fichier accepté");
    }
  };


  // const onSubmit = (values: CreateBookPurchase) => {

  //   // Check if any files were accepted
  //   if (acceptedFiles && acceptedFiles.length > 0) {
  //     if (file instanceof File) {
  //       formData.append("custom_cover", file);
  //     } else {
  //       console.error("custom_cover is not a valid file");
  //       return;
  //     }
  //   } else {
  //     console.error("No files accepted");
  //     return;
  //   }

  //   // Log the FormData for debugging
  //   console.log(acceptedFiles[0], formData, form.getValues());

  //   createPurchaseBook(
  //     { book_id: "3756b6e5-ff80-4516-8b7f-bf9ca307ded3", formData },
  //     {
  //       onSuccess: (data) => {
  //         toast.success("Book has been created successfully");
  //         // Optionally redirect
  //         // router.push(
  //         //   `/admin/visitation-books/fill-book?token=${"3756b6e5-ff80-4516-8b7f-bf9ca307ded3"}`
  //         // );
  //         console.log(data)
  //       },
  //       onError: () => {
  //         toast.error("Book update failed");
  //       },
  //     }
  //   );
  // };
  // @ts-ignore
  const { bookLists, isMe } = useContext(AppContext);
  // console.log(form.getValues(), acceptedFiles[0],formData,localStorage.getItem('ACCESS_TOKEN'));
  // Appel de la fonction pour tronquer bookLists en groupes de 4
  const chunkedBookLists = bookLists ? chunkArray(bookLists, 4) : [];
  const chunkedBookListsSm = bookLists ? chunkArray(bookLists, 2) : [];
  const router = useRouter();
  return (
    <div className="bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name || "Guest"} to Visitation Book.com
      </h1>
      <div className="flex pt-16 gap-7 items-center">
        <div className="text-[30px] pb-10 mx-20 font-bold text-[#504F46]">
          Choose a book cover
        </div>
      </div>
      <div className="lg:grid hidden grid-cols-7">
        <div className="col-span-5">
          {chunkedBookLists.map((group: any[], groupIndex: number) => (
            <div key={groupIndex} className="relative top-0 left-0 mt-20">
              <div className="relative left-50 right-50">
                <div className="flex gap-5 justify-center">
                  <img src="/images/GOD.svg" className="ml-10" alt="GOD Icon" />
                  {group.map((book: any, index: number) => (
                    <img
                      key={index}
                      src={book.cover}
                      className="w-full h-auto object-cover cursor-pointer"
                      alt={`Cover of ${book.title}`}
                      onClick={() =>
                        router.push(
                          `/admin/visitation-books/fill-book?token=${book?.id}`
                        )
                      }
                    />
                  ))}
                </div>
              </div>
              <img
                className="image2 absolute"
                src="/images/both.svg"
                alt="Decoration"
              />
            </div>
          ))}
        </div>
        <div className="flex mt-10 mx-20 justify-center items-center col-span-2">
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
                  name="custom_cover"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-lg font-bold">
                        Select File
                      </FormLabel> */}
                      <FormControl>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <p className="bg-[#98A692] text-center  px-4 py-32  rounded-lg">
                              Upload custom Book
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
                  disabled={isPending || createPending}
                >
                  {isPending ||
                    (createPending && (
                      <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    ))}
                  Next
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="grid lg:hidden grid-cols-1">
        <div className="">
          {chunkedBookListsSm.map((group: any[], groupIndex: number) => (
            <div key={groupIndex} className="relative top-0 left-0 mt-20">
              <div className="relative left-50 right-50">
                <div className="flex gap-5 justify-center">
                  {groupIndex % 2 === 0 && (
                    <img
                      src="/images/GOD.svg"
                      className="w-[110px]"
                      alt="GOD Icon"
                    />
                  )}

                  {group.map((book: any, index: number) => (
                    <img
                      key={index}
                      src={book.cover}
                      className="w-[100px] cursor-pointer h-auto object-cover"
                      alt={`Cover of ${book.title}`}
                      onClick={() =>
                        router.push(
                          `/admin/visitation-books/fill-book?token=${book?.id}`
                        )
                      }
                    />
                  ))}
                  {groupIndex % 2 !== 0 && (
                    <img
                      src="/images/GOD.svg"
                      className="w-[110px]"
                      alt="GOD Icon"
                    />
                  )}
                </div>
              </div>
              <img
                className="image2 absolute"
                src="/images/both.svg"
                alt="Decoration"
              />
            </div>
          ))}
        </div>
        <div className="flex mt-10 justify-center items-center col-span-2">
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
                  name="custom_cover"
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
    </div>
  );
}
