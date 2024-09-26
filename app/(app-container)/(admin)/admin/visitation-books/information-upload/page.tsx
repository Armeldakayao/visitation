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
import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
import {
  UpdateBookPurchaseSchema,
  updateBookPurchaseSchema,
} from "#features/auth/schema/update-book-purchase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Page() {
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  isMe && console.log(isMe, "IWWWWWWWWWWWWWWWWWWWWWWWWWWWS");
  const searchPams = useSearchParams();
  const token = searchPams.get("token");
  const bookLength = isMe?.book_purchases?.length || 1;
  const form = useForm({
    resolver: zodResolver(updateBookPurchaseSchema),
  });
  const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();
  const router = useRouter();
  const onSubmit = (values: UpdateBookPurchaseSchema) => {
    console.log("Form Submitted", values);
    updateBookPurchase(
      {
        // @ts-ignore
        id: token,
        data: values,
      },
      {
        onSuccess: () => {
          toast.success("Book has update succefuly");
          router.push(`/admin/visitation-books/info-guest?token=${token}`);
        },
        onError: () => {
          toast.error("Book has not update succefuly"); // Dismiss loading toast on error
        },
      }
    );
  };
  // @ts-ignore
  const validBook = isMe?.book_purchases?.find((b) => b.id === token);
  console.log(validBook);
  useEffect(() => {
    if (isMe?.book_purchases) {
      // Pre-fill the form with values from isMe
      const defaultValues = {
        deceased_name: validBook?.deceased_name || "",
        date_of_birth: validBook?.date_of_birth || null,
        date_of_death: validBook?.date_of_death || null,
      };
      form.reset(defaultValues);
    }
  }, [validBook, form]);
  const fileImage = validBook?.deceased_image || "/default-image.jpg"; // Fallback image
  const name = validBook?.deceased_name || "Unknown Name";
  const born = validBook?.date_of_birth || "Unknown Date";
  const rested = validBook?.date_of_death || "Unknown Date";
  return (
    <div className="mx-auto text-[#383838] px-7 py-20 bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>
      <div className="grid xl:grid-cols-2 grid-cols-1 px-10 mt-7 mx-auto py-20 xl:mx-36 lg:border-t rounded-lg lg:shadow-md bg-[#F8F5F5]">
        {/* <div>
          <p className="font-bold text-[25px] mb-7 pb-7 text-[#383838]">
            Upload the picture of the deceased
          </p>
          <div className="flex mt-72 mb-28">
            <div className="absolute top-[345px]">
              <div className="flex  ">
                <div>
                  <img src="/images/bady.svg" style={{ width: "1000px" }} />
                </div>
                <div
                  style={{
                    backgroundImage: `url(http://34.44.9.82${validBook?.book?.cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="max-h-72 mr-[800px] p-7 flex flex-col justify-center items-center"
                >
                  <p className="text-[20px] pb-5 font-bold text-[#575252]">
                    {name}
                  </p>
                  <img
                    src={`http://34.44.9.82${fileImage}`}
                    width={200}
                    height={200}
                    className="rounded-lg"
                    alt={`Image of ${name}`}
                  />
                  <p className="text-[12px] mt-2 font-bold text-[#575252]">
                    Born - {born}
                  </p>
                  <p className="text-[12px] pb-5 font-bold text-[#575252]">
                    Passed - {rested}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="lg:pr-10">
          <p className="font-bold text-[25px] mb-7 text-[#383838]">
            Upload the picture of the deceased
          </p>

          {/* <div className="relative top-0 left-0 ">
            <div className="relative left-50 right-50">
              <div className="flex justify-center ">
                <img src="/images/bady.svg" width={500} />

                <div // @ts-ignore
                  // src={`http://34.44.9.82${validBook?.book?.cover}`}
                  // width={500}
                  // className="relative z-10"
                  style={{
                    backgroundImage: `url(http://34.44.9.82${validBook?.book?.cover})`,
                    backgroundSize: "cover", // Ensures the image covers the entire div
                    backgroundPosition: "center", // Centers the image
                  }}
                  className="relative z-10 w-full h-[350px]"
                >
                  <div className=" z-20 flex justify-center items-center flex-col space-y-9 ">
                    <p className="text-[20px] pt-3 pb-5 font-bold text-[#575252]">
                      {name}
                    </p>
                    <div className="mx-auto">
                      <img
                        src={`http://34.44.9.82${fileImage}`}
                        // width={100}
                        // height={200}
                        className="w-52"
                        alt={`Image of ${name}`}
                      />
                    </div>
                    <p className="text-[12px] mt-2 font-bold text-[#575252]">
                      Born - {born}
                    </p>
                    <p className="text-[12px] pb-5 font-bold text-[#575252]">
                      Passed - {rested}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img className="image2 absolute" src="/images/both.svg" />
          </div> */}
          <div>
           

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
        </div>
        <Form {...form}>
          <form
            // @ts-ignore
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-5 pt-5"
          >
            <FormField
              control={form.control}
              name="deceased_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-bold">
                    Name of the decreased
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input  bg-white border-gray-400"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid pt-7 grid-cols-2 gap-7">
              <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">Born</FormLabel>
                    <FormControl>
                      <Input
                        className="input  bg-white border-gray-400"
                        type="date"
                        {...field}
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
                    <FormLabel className="text-lg font-bold">Rested</FormLabel>
                    <FormControl>
                      <Input
                        className="input  bg-white border-gray-400"
                        type="date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
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
