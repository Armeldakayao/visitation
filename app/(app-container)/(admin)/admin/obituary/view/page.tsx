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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { loginSchema } from "#features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Send, Share } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
 // @ts-ignore
import QRCode from "qrcode";
export default function Page() {
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const searchPams = useSearchParams();
  const token = searchPams.get("token");
  // @ts-ignore
  const validBook = isMe?.obituaries?.find((b) => b.id === token);
  const bookLength = isMe?.book_purchases?.length || 0;
  const fileImage = validBook?.deceased_image || null;
  const name = validBook?.deceased_name || null;
  const born = validBook?.date_of_birth || null;
  const rested = validBook?.date_of_death || null;
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
  };
  const [qrCodeSrc, setQrCodeSrc] = useState(null);
  const qrLink = `http://localhost:3000/admin/obituary/scan-book?token=${token}`;

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
  function DropFileField({ form }: { form: any }) {
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
    <div className="mx-auto text-[#383838] overflow-x-hidden p-7 bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>

      <div className="grid grid-cols-2 lg:px-20 mt-7 py-10 lg:mx-36 lg:border-t rounded-lg xl:shadow-md bg-[#F8F5F5]">
        <div className=" col-span-2  flex   justify-between items-center">
          <Button
            className="  text-black "
            onClick={() => router.push("/admin/obituary/home")}
          >
            <div className="bg-slate-200 flex cursor-pointer justify-center items-center rounded-full h-10 w-10">
              <ChevronLeft className="w-4 h-4" />
            </div>
          </Button>
          <div className=" flex  ">
            <Button
              onClick={() =>
                router.push(`/admin/obituary/show-view?token=${token}`)
              }
              className="bg-[#f00] mr-2   px-7 text-white"
            >
              View obituary
            </Button>
            {/* <Button className="bg-[#7030A0] border gap-2 px-7 text-white">
              Share a copy
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button> */}
          </div>
        </div>

        <div className="justify-center items-center flex col-span-2 mt-7">
          <div className="relative mt-12 mx-12">
            <div className="relative mb-12">
              {/* Background image for each row of books */}
              {/* <img
                src="/images/both.svg"
                className="absolute md:top-[430px] top-[440px] left-0 md:w-full w-[600px] ml-28 md:ml-0 h-14  object-cover"
                alt="Background"
              /> */}
              <div className="relative flex justify-around gap-7 mx-20">
                <div
                  className="cursor-pointer text-center"
                  onClick={() =>
                    // router.push(`/admin/visitation-books/fill-book?token=`)
                    console.log("ok")
                  }
                >
                  <div className="flex  flex-col  p-16  mx-20 justify-center items-center">
                    <div className=" flex justify-center items-center">
                      <div className="flex gap-7  ">
                        <img
                          src="/images/GOD.svg"
                          className="rounded-lg md:w-[300px] md:h-[380px]  w-[300px]"
                        />

                        <div className="px-7 md:px-20 py-2 rounded-lg lg:mr-28 pr-52  flex flex-col justify-center items-center ">
                          <div
                            style={{
                              // @ts-ignore
                              backgroundImage: `url(http://34.44.9.82${validBook?.book_cover})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="] p-7 flex flex-col justify-center items-center"
                          >
                            <p className="text-[20px] pb-5 font-bold text-[#575252]">
                              {name}
                            </p>
                            {/* <img
                              src={`http://34.27.136.91${validBook?.book_cover}`}
                              width={200}
                              height={200}
                              className="rounded-lg"
                              alt={`Image of ${name}`}
                            /> */}
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
                  {/* <img
                    src={fileImage}
                    width={150}
                    height={150}
                    className="w-full h-auto object-cover"
                    alt={`Cover of ok`}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className="md:flex hidden bg-white rounded-lg col-span-2 gap-5 p-10 justify-between ">
          <div>
            <p>Name</p>
            <p>{name}</p>
          </div>
          <div className="gap-5">
            <p>Actions</p>
            <div className="flex gap-4">
              <img src="/images/a.svg" />
              <img src="/images/b.svg" />
              <img
                src="/images/c.svg"
                onClick={() =>
                  router.push(`/admin/obituary/create-obituary?token=${token}`)
                }
                className="cursor-pointer"
              />
              <img src="/images/d.svg" />
            </div>
          </div>
          <div>
            <p>Qr Code</p>
            {qrCodeSrc ? (
              <img src={qrCodeSrc} alt="Scan QR Code" width={50} height={50} />
            ) : (
              <p>Generating QR Code...</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:hidden col-span-2 gap-5 pt-7 justify-between ">
          <div className="gap-5 flex">
            <Button className="border-[#f00] w-full mr-2 border  px-7 text-black">
              Print Book
            </Button>
            <Button
              onClick={() =>
                router.push(`/admin/visitation-books/show-view?token=${token}`)
              }
              className="bg-[#f00] w-full border  px-7 text-white"
            >
              View
            </Button>
          </div>
          <Button className="border-[#f00] border w-full   px-7 text-[#464647]">
            Send Thank you for attending note
          </Button>
        </div>
      </div>
    </div>
  );
}
