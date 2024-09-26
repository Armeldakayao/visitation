

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
// import { Checkbox } from "#components/ui/checkbox";
// import { useUpdateBookPurchase } from "#features/auth/hooks/use-update-purchase-book";
// import { UpdateBookPurchaseSchema, updateBookPurchaseSchema } from "#features/auth/schema/update-book-purchase";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// export default function Page() {
 

 

//    const { isMe } = useContext(AppContext);
//    isMe && console.log(isMe, "IWWWWWWWWWWWWWWWWWWWWWWWWWWWS");
//    const bookLength = isMe?.book_purchases?.length || 1;
//    const form = useForm({
//      resolver: zodResolver(updateBookPurchaseSchema),
//      mode:"onChange"
//    });
//    const { mutate: updateBookPurchase, isPending } = useUpdateBookPurchase();
//    const router = useRouter();
//    const onSubmit = (values: UpdateBookPurchaseSchema) => {
//      console.log("Form Submitted", values);
//      updateBookPurchase(
//        {
//          id: isMe?.book_purchases[bookLength - 1]?.id,
//          data: values,
//        },
//        {
//          onSuccess: () => {
//            toast.success("Book has update succefuly");
//           //  router.push("/admin/visitation-books/info-guest");
//          },
//          onError: () => {
//            toast.error("Book has not update succefuly"); // Dismiss loading toast on error
//          },
//        }
//      );
//    };


//   console.log(form.getValues(),"NEVER")

//   return (
//     <div className="mx-auto text-[#383838] p-7">
//       <h1 className="text-[#383838] text-center pt-20">
//         Welcome JOHN to Visitation Book.com
//       </h1>
//       <div className="grid grid-cols-2 px-20 mt-7 py-10 mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
//         <div>
//           <p className="font-bold text-[25px] mb-7 text-[#383838]">
//             Select the info you want the guests to add
//           </p>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-5">
//               <FormField
//                 control={form.control}
//                 name="allow_picture"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">
//                       Allow guest to add a picture to their name.
//                     </FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="allow_name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">Name of Guest</FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="allow_address"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">Address</FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="allow_email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">Email</FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="allow_special_notes"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">
//                       Special notes to the family
//                     </FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="custom_field_25"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">
//                       Custom field (video / media link) $25.00
//                     </FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="custom_field_50"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Checkbox
//                         className="input mr-2  bg-white border-gray-400"
                       
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-lg ">
//                       Custom field (video / media link) $50.00
//                     </FormLabel>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className="flex gap-5 mt-14 justify-start">
//                 <Button className="border-[#f00] border rounded-full px-7 text-black">
//                   Back
//                 </Button>
//                 <Button
//                   onClick={() => router.push("/admin/visitation-books/view")}
//                   className="bg-[#f00] rounded-full px-7 text-white"
//                 >
//                   Next
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//         <div
//           className="mx-20 flex justify-center
//         items-center mt-72"
//         >
//           <div className="absolute top-[370px]">
//             <div className="flex gap-7 mx-20">
//               <div>
//                 <img src="/images/cover.svg" width={150} height={150} />
//                 <br />
//                 <p className="text-black text-lg text-center font-bold">
//                   $ 100.00
//                 </p>
//               </div>
//             </div>
//           </div>
//           <img src="/images/both.svg" width={1000} height={1000} />
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
import { Checkbox } from "#components/ui/checkbox";
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
  const bookLength = isMe?.book_purchases?.length || 0;
  const searchPams = useSearchParams();
  const token = searchPams.get("token");
  const form = useForm({
    resolver: zodResolver(updateBookPurchaseSchema),
    mode: "onChange",
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
          toast.success("Book has updated successfully");
          router.push(`/admin/both/create-obituary?book_token=${token}`);
        },
        onError: () => {
          toast.error("Book update failed");
        },
      }
    );
  };
  // @ts-ignore
  const validBook = isMe?.book_purchases?.find((b) => b.id === token);
  useEffect(() => {
    if (isMe?.book_purchases) {
      // Pre-fill the form with values from isMe
      const defaultValues = {
        allow_picture: validBook?.allow_picture || false,
        allow_name: validBook?.allow_name || false,
        allow_address: validBook?.allow_address || false,
        allow_email: validBook?.allow_email || false,
        allow_special_notes: validBook?.allow_special_notes || false,
        custom_field_25: validBook?.custom_field_25 || false,
        custom_field_50: validBook?.custom_field_50 || false,
      };
      form.reset(defaultValues);
    }
  }, [validBook, form]);
  console.log(form.getValues());
  // const { isMe } = useContext(AppContext);
  // const bookLength = isMe?.book_purchases?.length || 0;
  const fileImage = validBook?.deceased_image || null;
  const name = validBook?.deceased_name || null;
  const born = validBook?.date_of_birth || null;
  const rested = validBook?.date_of_death || null;
  return (
    <div className="mx-auto text-[#383838] p-7 bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome JOHN to Visitation Book.com
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-20 mt-7 py-10 lg:mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
        <div>
          <p className="font-bold text-[25px] mb-7 text-[#383838]">
            Select the info you want the guests to add
          </p>
          <Form {...form}>
            <form
              onSubmit={
                // @ts-ignore
                form.handleSubmit(onSubmit)
              }
              className="space-y-5"
            >
              {/* Checkbox Fields */}
              <FormField
                control={form.control}
                name="allow_picture"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange} // Handle checkbox state with react-hook-form
                      />
                    </FormControl>
                    <FormLabel className="text-lg">
                      Allow guest to add a picture to their name.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allow_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">Name of Guest</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allow_address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">Address</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allow_email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allow_special_notes"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">
                      Special notes to the family
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="custom_field_25"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">
                      Custom field (video / media link) $25.00
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="custom_field_50"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="input mr-2 bg-white border-gray-400"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg">
                      Custom field (video / media link) $50.00
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-5 mt-14 justify-start">
                <Button className="border-[#f00] border rounded-full px-7 text-black">
                  Back
                </Button>
                <Button
                  className=" justify-end rounded-full flex bg-[#f00]"
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
        <div className="mx-20 flex justify-center items-center mb-10 mt-10">
          <div className=" ">
            <div className="flex gap-7 lg:mx-20">
              <div>
                <div
                  style={{
                    backgroundImage: `url(http://34.44.9.82${validBook?.book?.cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="] p-7 flex flex-col justify-center items-center"
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
                <p className="text-black text-lg text-center font-bold">
                  ${validBook?.book?.price}
                </p>
              </div>
            </div>
          </div>
          {/* <img src="/images/both.svg" width={1000} height={1000} /> */}
        </div>
      </div>
    </div>
  );
}

