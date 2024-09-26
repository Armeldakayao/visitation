// // "use client"
// // import { Button } from "#components/ui/button";
// // import { ArrowRight, Loader2 } from "lucide-react";
// // import React from "react";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "#/components/ui/form";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { loginSchema } from "#features/auth";
// // import { Input } from "#components/ui/input";
// // import { useDropzone } from 'react-dropzone';

// // export default function Page() {
// //     function DropFileField({ form }) {
// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
// //     onDrop: (acceptedFiles) => {
// //       form.setValue('card_holder', acceptedFiles[0]);
// //     },
// //   });
// //     // const form = useForm({
// //     //   resolver: zodResolver(loginSchema),
// //     // });
// //      const onSubmit = () => {
// //        console.log("ok");
// //      };
// //   return (
// //     <div className=" mx-auto text-[#383838]  p-7">
// //       <h1 className="text-[#383838] text-center pt-20">
// //         Welcome JOHN to Visitation Book.com
// //       </h1>
// //       <div className="grid grid-cols-2 px-20 mt-7 py-10 mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
// //         <div className="">
// //           <p className="font-bold text-[25px] mb-7 text-[#383838]">
// //             Upload the picture off the decreased
// //           </p>
// //           <div className="flex mt-72  ">
// //             <div className="absolute top-[335px]">
// //               <div className="flex gap-7 mx-20 ">
// //                 <div>
// //                   <img src="/images/cover.svg" width={150} height={150} />
// //                   <br />
// //                   <p className="text-black text-lg text-center font-bold">
// //                     $ 100.00
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //             <img src="/images/both.svg" width={1000} height={1000} />
// //           </div>
// //         </div>
// //         <Form {...form}>
// //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
// //       <div className="grid pt-7 grid-cols-1 gap-7">
// //         <FormField
// //           control={form.control}
// //           name="card_holder"
// //           render={({ field }) => (
// //             <FormItem>
// //               <FormLabel className="text-lg font-bold">Card holder</FormLabel>
// //               <div
// //                 {...getRootProps()}
// //                 className={`border-2 border-dashed rounded-lg p-5 cursor-pointer transition-colors
// //                   ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-400 bg-white'}`}
// //               >
// //                 <input {...getInputProps()} {...field} />
// //                 {isDragActive ? (
// //                   <p className="text-center text-blue-500">Drop the files here...</p>
// //                 ) : (
// //                   <p className="text-center text-gray-500">
// //                     Drag 'n' drop a file here, or click to select a file
// //                   </p>
// //                 )}
// //               </div>
// //               <FormMessage />
// //             </FormItem>
// //           )}
// //         />
// //       </div>
// //     </form>
// //         </Form>
// //         <div></div>
// //         <div className="flex mt-14 justify-end">
// //           <Button className="bg-[#f00] text-white flex-end">
// //             Next <ArrowRight className="text-white" />
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { Button } from "#components/ui/button";
// import { ArrowRight, Loader2, X } from "lucide-react";
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
// import { Input } from "#components/ui/input";
// import { Checkbox } from "#components/ui/checkbox";
// import { AppContext } from "#app/provider";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function Page() {
//   const form = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data: any) => {
//     console.log("Form Submitted", data);
//   };
//   const { isMe } = useContext(AppContext);
//   const bookLength = isMe?.book_purchases?.length || 0;
//   const searchPams = useSearchParams()
//   const validToken = searchPams.get('token')

//   const id = bookLength > 0 ? isMe.book_purchases[bookLength - 1]?.id : null;
//   const router = useRouter();

//   function DropFileField({ form }: { form: any }) {
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//       onDrop: (acceptedFiles) => {
//         form.setValue("card_holder", acceptedFiles[0]);
//       },
//     });

//     return (
//       <FormField
//         control={form.control}
//         name="card_holder"
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
//         <div></div>
//         <div className="  flex  justify-end">
//           <Button className="  text-black">
//             <X />
//           </Button>
//         </div>
//         <div>
//           <img src="/images/cover.svg" width={300} height={300} />??je veux afficher limage de scan ici avec le parametres en prqmetres pour que quand onn sacnne on puis avoir le lien
//         </div>
//         <div className=" gap-5  justify-end">
//           <div className="flex gap-5 ">
//             <Button className="border-[#f00] border  px-7 text-black">
//               Print
//             </Button>
//             <Button className="border-[#f00] border  px-7 text-black">
//               View on Screen
//             </Button>

//             <Button className="bg-[#f00]  px-7 text-white">Close</Button>
//           </div>
//           <div className="bg-[#4A33330D] p-7  mt-7 flex justify-center items-center rounded-lg shadow-lg ">
//             <div>
//               <p className="mb-4">
//                 Scan to sign the guest book using any device
//               </p>
//               <img src="/images/scan.svg" width={300} height={300} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { loginSchema } from "#features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
// @ts-ignore
import QRCode from "qrcode";
import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

export default function Page() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const bookLength = isMe?.book_purchases?.length || 0;
  const searchPams = useSearchParams();
  const validToken = searchPams.get("token");

  const id = validToken || null;
  const router = useRouter();
  // @ts-ignore
  const validBook = isMe?.book_purchases?.find((b) => b.id === validToken);

  const fileImage = validBook?.deceased_image || null;
  const name = validBook?.deceased_name || null;
  const born = validBook?.date_of_birth || null;
  const rested = validBook?.date_of_death || null;

  const [qrCodeSrc, setQrCodeSrc] = useState(null);
  const qrLink = `http://localhost:3000/admin/visitation-books/scan-book?token=${
    id || id
  }`;

  useEffect(() => {
    if (qrLink) {
      // Generate the QR code with the link
      QRCode.toDataURL(qrLink)
        // @ts-ignore
        .then((url) => setQrCodeSrc(url))
        // @ts-ignore
        .catch((err) => console.error(err));
    }
  }, [qrLink]);
  // @ts-ignore
  function DropFileField({ form }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (acceptedFiles) => {
        form.setValue("card_holder", acceptedFiles[0]);
      },
    });

    return (
      <FormField
        control={form.control}
        name="card_holder"
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
              <input {...getInputProps()} {...field} />
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
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className="mx-auto text-[#383838] p-7 bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 mt-7 py-10 lg:mx-36 lg:border-t rounded-lg lg:shadow-md bg-[#EBD6D6]">
        <div></div>
        <div className="flex justify-end">
          <Button className="text-black">
            <X onClick={() => router.push(`/admin/visitation-books/home`)} />
          </Button>
        </div>

        {/* Display the generated QR Code */}
        <div className="relative top-0 left-0 ">
          <div className="relative left-50 right-50">
            <div className="flex justify-center pt-16 ">
              <div // @ts-ignore
                // src={`http://34.44.9.82${validBook?.book?.cover}`}
                // width={500}
                // className="relative z-10"
                style={{
                  backgroundImage: `url(http://34.44.9.82${validBook?.book?.cover})`,
                  backgroundSize: "cover", // Ensures the image covers the entire div
                  backgroundPosition: "center", // Centers the image
                }}
                className="relative z-10 w-72 h-[400px] "
              >
                <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                  <p className="text-[20px] pt-5 pb-5 font-bold text-[#575252]">
                    {name}
                  </p>
                  <div className="mx-auto">
                    <img
                      src={`http://34.44.9.82${fileImage}`}
                      // width={100}
                      // height={200}
                      className="w-52 "
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
        </div>
        <div className="gap-5 mx-auto justify-between pt-5">
          <div className="flex gap-5">
            <div className="flex gap-3">
              <Button className="border-[#f00] border px-7 text-black">
                Print
              </Button>
              <Button className="border-[#f00] border px-7 text-black">
                View on Screen
              </Button>
            </div>
            <Button className="bg-[#f00] px-7 text-white">Close</Button>
          </div>
          <div className=" mx-auto lg:p-7 mt-7 flex justify-center items-center rounded-lg  ">
            <div className="mx-auto text-center">
              <p className="mb-4 pt-2">
                Scan to sign the guest book using <br /> any device
              </p>
              {qrCodeSrc ? (
                <img
                  src={qrCodeSrc}
                  alt="Scan QR Code"
                  width={300}
                  height={100}
                />
              ) : (
                <p>Generating QR Code...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
