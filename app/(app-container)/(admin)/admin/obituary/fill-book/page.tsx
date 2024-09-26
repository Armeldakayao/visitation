// // "use client"
// // import { Button } from "#components/ui/button";
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
// // import { Input } from "#components/ui/input";
// // import { Loader2 } from "lucide-react";
// // import { loginSchema } from "#features/auth";
// // import { useRouter } from "next/navigation";

// // export default function page() {
// //     const form = useForm({
// //       resolver: zodResolver(loginSchema),
// //     });
// //     const router = useRouter()
// //     const onSubmit=()=>{
// //         console.log('ok')
// //           router.push("/admin/visitation-books/upload-picture")
// //     }
// //   return (
// //     <div className=" bg-[#F8F5F5]">
// //       <div className="flex pt-16 justify-center gap-7 items-center mx-80 ">
// //         <div className="text-[20px] text-center font-bold text-[#504F46]">
// //           Welcome JOHN to Visitation Book.com
// //         </div>
// //       </div>
// //       <div className="shadow-md flex-col rounded-lg m-20 p-10 border">
// //         <div className="text-[30px] text-center font-bold text-[#504F46]">
// //           You have selected the Linen White book
// //         </div>
// //         <div className="flex  flex-col  p-10 mt-72 mx-20 justify-center items-center">
// //           <div className="absolute ">
// //             <div className="flex gap-7 mb-40">
// //               <div>
// //                 <img src="/images/cover.svg" width={150} height={150} />
// //                 <br />
// //                 <p className="text-black text-lg text-center font-bold">
// //                   Please pay the fee of $15.00 + 3% service fee.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <img src="/images/both.svg" width={1000} height={1000} />
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-10 gap-16 text-[#504F46] p-20">
// //         <div className="col-span-2">
// //           <div className="bg-white rounded-md shadow-md p-4">
// //             <p className="font-bold text-black text-[18px]">Receipt Summary</p>
// //             <div className="flex pt-3 justify-between">
// //               <p>Visitation Book :</p>
// //               <p>$ 400</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Subtotal:</p>
// //               <p>$ 400</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Taxes :</p>
// //               <p>$ 400</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Discount :</p>
// //               <p>$ 400</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Total :</p>
// //               <p>$ 400</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-span-8">
// //           <div className="bg-white rounded-md shadow-md p-9">
// //             <p className="font-bold text-center text-black text-[35px]">
// //               Payment information
// //             </p>
// //             <Form {...form}>
// //               <form
// //                 onSubmit={form.handleSubmit(onSubmit)}
// //                 className=" space-y-5"
// //               >
// //                 <div className="grid pt-7 grid-cols-2 gap-7">
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card holder
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">CVV</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card Number
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="number"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Expiry Date
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="date"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>
// //                 <div className="flex justify-end">
// //                   <Button
// //                     onClick={() =>
// //                       router.push("/admin/visitation-books/upload-picture")
// //                     }
// //                     className="mt-5 justify-end rounded-full flex bg-[#f00]"
// //                     disabled={false}
// //                   >
// //                     {false && (
// //                       <Loader2
// //                         className="mr-2 h-4 w-4 animate-spin"
// //                         aria-hidden="true"
// //                       />
// //                     )}
// //                     Complete Payment
// //                     <span className="sr-only"> Complete Payment</span>
// //                   </Button>
// //                 </div>
// //               </form>
// //             </Form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// // "use client";
// // import { Button } from "#components/ui/button";
// // import React, { useContext } from "react";
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
// // import { Input } from "#components/ui/input";
// // import { Loader2 } from "lucide-react";
// // import { loginSchema } from "#features/auth";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { AppContext } from "#app/provider";

// // export default function Page() {
// //   const form = useForm({
// //     resolver: zodResolver(loginSchema),
// //   });
// //   const router = useRouter();
// //  const { bookLists } = useContext(AppContext);
// //  bookLists && console.log(bookLists, "bookLists");
// //   const onSubmit = () => {
// //     console.log("ok");
// //     router.push("/admin/visitation-books/upload-picture");
// //   };
// // const searchParams = useSearchParams();
// // const token = searchParams.get("token"); // Get the 'token' from the search parameters

// // const selectedBook = bookLists?.find((book) => book.id === token);

// // console.log(selectedBook);

// //   return (
// //     <div className="bg-[#F8F5F5]">
// //       <div className="flex pt-16 justify-center gap-7 items-center mx-80">
// //         <div className="text-[20px] text-center font-bold text-[#504F46]">
// //           Welcome JOHN to Visitation Book.com
// //         </div>
// //       </div>
// //       <div className="shadow-md flex-col rounded-lg m-20 p-10 border relative">
// //         <div className="text-[30px] text-center font-bold text-[#504F46]">
// //           You have selected the {selectedBook?.title}
// //         </div>
// //         <div className="relative flex flex-col p-10 mt-12 mx-20 justify-center items-center">
// //           <img
// //             src="/images/both.svg"
// //             className="absolute top-56 left-0 w-full h-14  object-cover"
// //             alt="Background"
// //           />
// //           <div className="relative z-10">
// //             <div className="flex gap-7 mb-40">
// //               <div>
// //                 <img src={selectedBook?.cover} width={150} height={150} />
// //                 <br />
// //                 <p className="text-black text-lg text-center font-bold">
// //                   Please pay the fee of ${selectedBook?.price} + 3% service fee.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-10 gap-16 text-[#504F46] p-20">
// //         <div className="col-span-2">
// //           <div className="bg-white rounded-md shadow-md p-4">
// //             <p className="font-bold text-black text-[18px]">Receipt Summary</p>
// //             <div className="flex pt-3 justify-between">
// //               <p>Visitation Book :</p>
// //               <p>$ {selectedBook?.price}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Subtotal:</p>
// //               <p>$ {selectedBook?.price}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Taxes :</p>
// //               <p>$ 400</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Discount :</p>
// //               <p>$ 0</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Total :</p>
// //               <p>$ 400</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-span-8">
// //           <div className="bg-white rounded-md shadow-md p-9">
// //             <p className="font-bold text-center text-black text-[35px]">
// //               Payment information
// //             </p>
// //             <Form {...form}>
// //               <form
// //                 onSubmit={form.handleSubmit(onSubmit)}
// //                 className="space-y-5"
// //               >
// //                 <div className="grid pt-7 grid-cols-2 gap-7">
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card holder
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="cvv"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">CVV</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_number"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card Number
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="expiry_date"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Expiry Date
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="date"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>
// //                 <div className="flex justify-end">
// //                   <Button
// //                     onClick={() =>
// //                       router.push("/admin/visitation-books/upload-picture")
// //                     }
// //                     className="mt-5 justify-end rounded-full flex bg-[#f00]"
// //                     disabled={false}
// //                   >
// //                     {false && (
// //                       <Loader2
// //                         className="mr-2 h-4 w-4 animate-spin"
// //                         aria-hidden="true"
// //                       />
// //                     )}
// //                     Complete Payment
// //                     <span className="sr-only"> Complete Payment</span>
// //                   </Button>
// //                 </div>
// //               </form>
// //             </Form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// "use client";
// import { Button } from "#components/ui/button";
// import React, { useContext, useState } from "react";
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
// import { Input } from "#components/ui/input";
// import { Loader2 } from "lucide-react";
// import { loginSchema } from "#features/auth";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AppContext } from "#app/provider";
// import { PaymentSchema, paymentSchema } from "#features/auth/schema/payment";
// import { useCompletePayment } from "#features/auth/hooks/use-complete-payment";
// import { loadStripe } from "@stripe/stripe-js";

// // export default function Page() {
// //   const form = useForm({
// //     resolver: zodResolver(loginSchema),
// //   });
// //   const router = useRouter();
// //   const { bookLists } = useContext(AppContext);
// //   const searchParams = useSearchParams();
// //   const token = searchParams.get("token"); // Get the 'token' from the search parameters

// //   const selectedBook = bookLists?.find((book) => book.id === token);

// //   // Calculate tax and total
// //   const taxRate = 3;
// //   const price = selectedBook?.price || 0;
// //   const taxAmount = price * (taxRate / 100);
// //   const totalAmount = price + taxAmount;

// //   const onSubmit = () => {
// //     console.log("ok");
// //     router.push("/admin/visitation-books/upload-picture");
// //   };

// //   return (
// //     <div className="bg-[#F8F5F5]">
// //       <div className="flex pt-16 justify-center gap-7 items-center mx-80">
// //         <div className="text-[20px] text-center font-bold text-[#504F46]">
// //           Welcome JOHN to Visitation Book.com
// //         </div>
// //       </div>
// //       <div className="shadow-md flex-col rounded-lg m-20 p-10 border relative">
// //         <div className="text-[30px] text-center font-bold text-[#504F46]">
// //           You have selected the {selectedBook?.title}
// //         </div>
// //         <div className="relative flex flex-col p-10 mt-12 mx-20 justify-center items-center">
// //           <img
// //             src="/images/both.svg"
// //             className="absolute top-56 left-0 w-full h-14  object-cover"
// //             alt="Background"
// //           />
// //           <div className="relative z-10">
// //             <div className="flex gap-7 mb-40">
// //               <div>
// //                 <img src={selectedBook?.cover} width={150} height={150} />
// //                 <br />
// //                 <p className="text-black text-lg text-center font-bold">
// //                   Please pay the fee of ${price} + {taxRate}% service fee.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-10 gap-16 text-[#504F46] p-20">
// //         <div className="col-span-2">
// //           <div className="bg-white rounded-md shadow-md p-4">
// //             <p className="font-bold text-black text-[18px]">Receipt Summary</p>
// //             <div className="flex pt-3 justify-between">
// //               <p>Visitation Book :</p>
// //               <p>$ {price?.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Subtotal:</p>
// //               <p>$ {price?.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Taxes :</p>
// //               <p>$ {taxAmount?.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Discount :</p>
// //               <p>$ 0.00</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Total :</p>
// //               <p>$ {totalAmount?.toFixed(2)}</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-span-8">
// //           <div className="bg-white rounded-md shadow-md p-9">
// //             <p className="font-bold text-center text-black text-[35px]">
// //               Payment information
// //             </p>
// //             <Form {...form}>
// //               <form
// //                 onSubmit={form.handleSubmit(onSubmit)}
// //                 className="space-y-5"
// //               >
// //                 <div className="grid pt-7 grid-cols-2 gap-7">
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card holder
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="cvv"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">CVV</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_number"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card Number
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="expiry_date"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Expiry Date
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="date"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </div>
// //                 <div className="flex justify-end">
// //                   <Button
// //                     onClick={() =>
// //                       router.push("/admin/visitation-books/upload-picture")
// //                     }
// //                     className="mt-5 justify-end rounded-full flex bg-[#f00]"
// //                     disabled={false}
// //                   >
// //                     {false && (
// //                       <Loader2
// //                         className="mr-2 h-4 w-4 animate-spin"
// //                         aria-hidden="true"
// //                       />
// //                     )}
// //                     Complete Payment
// //                     <span className="sr-only"> Complete Payment</span>
// //                   </Button>
// //                 </div>
// //               </form>
// //             </Form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // export default function Page() {
// //   const { mutate: completePayment, isPending } = useCompletePayment();
// //   const form = useForm<PaymentSchema>({
// //     resolver: zodResolver(paymentSchema),
// //   });

// //   const [expiryMonth, setExpiryMonth] = useState<string>("");
// //   const [expiryYear, setExpiryYear] = useState<string>("");

// //   const router = useRouter();
// //   const { bookLists, isMe } = useContext(AppContext);
// //   const searchParams = useSearchParams();
// //   const token = searchParams.get("token");

// //   const selectedBook = bookLists?.find((book) => book.id === token);

// //   // Calculate tax and total
// //   const taxRate = 3;
// //   const price = Number(selectedBook?.price) || 0;
// //   const taxAmount = price * (taxRate / 100);
// //   const totalAmount = price + taxAmount;

// //   const handleExpiryDateChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const dateValue = event.target.value; // Format: YYYY-MM
// //     const [year, month] = dateValue.split("-");
// //     setExpiryMonth(month);
// //     setExpiryYear(year);
// //   };

// //   const onSubmit = async (data: PaymentSchema) => {
// //      const stripe = await loadStripe(
// //        "hgdshgdhgshg"
// //      );
// //      if (!stripe) {
// //        return;
// //      }
// //      console.log(stripe,"stripe")
// //     const completeData = {
// //       ...data,
// //       expiry_month: Number(expiryMonth), // Convert to number
// //       expiry_year: Number(expiryYear), // Convert to number
// //       user_id: isMe?.id,
// //       token: isMe?.id,
// //     };

// //     completePayment(completeData, {
// //       onSuccess: (response) => {
// //         console.log("Payment successful:", response);
// //       },
// //       onError: (error) => {
// //         console.error("Payment failed:", error);
// //       },
// //     });
// //   };

// //   // Card number formatting logic
// //   const handleCardNumberChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const inputValue = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
// //     const formattedValue = inputValue.replace(/(.{4})/g, "$1-").slice(0, 19); // Add hyphen after every 4 digits, max length 19
// //     form.setValue("card_number", formattedValue); // Update form state
// //   };

// //   console.log(form.getValues());
// //   return (
// //     <div className="bg-[#F8F5F5]">
// //       <div className="flex pt-16 justify-center gap-7 items-center mx-80">
// //         <div className="text-[20px] text-center font-bold text-[#504F46]">
// //           Welcome {isMe?.full_name} to Visitation Book.com
// //         </div>
// //       </div>
// //       <div className="shadow-md flex-col rounded-lg m-20 p-10 border relative">
// //         <div className="text-[30px] text-center font-bold text-[#504F46]">
// //           You have selected the {selectedBook?.title}
// //         </div>
// //         <div className="relative flex flex-col p-10 mt-12 mx-20 justify-center items-center">
// //           <img
// //             src="/images/both.svg"
// //             className="absolute top-56 left-0 w-full h-14  object-cover"
// //             alt="Background"
// //           />
// //           <div className="relative z-10">
// //             <div className="flex gap-7 mb-40">
// //               <div>
// //                 <img src={selectedBook?.cover} width={150} height={150} />
// //                 <br />
// //                 <p className="text-black text-lg text-center font-bold">
// //                   Please pay the fee of ${price} + {taxRate}% service fee.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-10 gap-16 text-[#504F46] p-20">
// //         <div className="col-span-2">
// //           <div className="bg-white rounded-md shadow-md p-4">
// //             <p className="font-bold text-black text-[18px]">Receipt Summary</p>
// //             <div className="flex pt-3 justify-between">
// //               <p>Visitation Book :</p>
// //               <p>$ {price.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Subtotal:</p>
// //               <p>$ {price.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Taxes :</p>
// //               <p>$ {taxAmount.toFixed(2)}</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Discount :</p>
// //               <p>$ 0.00</p>
// //             </div>
// //             <div className="flex pt-3 justify-between">
// //               <p>Total :</p>
// //               <p>$ {totalAmount.toFixed(2)}</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-span-8">
// //           <div className="bg-white rounded-md shadow-md p-9">
// //             <p className="font-bold text-center text-black text-[35px]">
// //               Payment information
// //             </p>
// //             <Form {...form}>
// //               <form
// //                 onSubmit={form.handleSubmit(onSubmit)}
// //                 className="space-y-5"
// //               >
// //                 <div className="grid pt-7 grid-cols-2 gap-7">
// //                   <FormField
// //                     control={form.control}
// //                     name="card_holder"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card holder
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_cvv"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">CVV</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="card_number"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Card Number
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="text"
// //                             {...field}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="expiry_date"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel className="text-lg font-bold">
// //                           Expiry Date
// //                         </FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             className="input rounded-full bg-white border-gray-400"
// //                             type="date" // Ensure correct format
// //                             {...field}
// //                             onChange={(e) => {
// //                               field.onChange(e);
// //                               handleExpiryDateChange(e);
// //                             }}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   {/* Hidden fields for expiry month and year */}
// //                   <input
// //                     type="hidden"
// //                     value={expiryMonth}
// //                     {...form.register("expiry_month")}
// //                   />
// //                   <input
// //                     type="hidden"
// //                     value={expiryYear}
// //                     {...form.register("expiry_year")}
// //                   />
// //                 </div>
// //                 <div className="flex justify-end">
// //                   <Button className="mt-5 justify-end rounded-full flex bg-[#f00]">
// //                     Complete Payment
// //                   </Button>
// //                 </div>
// //               </form>
// //             </Form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// export default function Page() {
//   const { mutate: completePayment, isPending } = useCompletePayment();
//   const form = useForm<PaymentSchema>({
//     resolver: zodResolver(paymentSchema),
//   });

//   const [expiryMonth, setExpiryMonth] = useState<string>("");
//   const [expiryYear, setExpiryYear] = useState<string>("");

//   const router = useRouter();
//   const { bookLists, isMe } = useContext(AppContext);
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const selectedBook = bookLists?.find((book) => book.id === token);

//   // Calculate tax and total
//   const taxRate = 3;
//   const price = Number(selectedBook?.price) || 0;
//   const taxAmount = price * (taxRate / 100);
//   const totalAmount = price + taxAmount;

//   const handleExpiryDateChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const dateValue = event.target.value; // Format: YYYY-MM
//     const [year, month] = dateValue.split("-");
//     setExpiryMonth(month);
//     setExpiryYear(year);
//   };

//   const onSubmit = async (data: PaymentSchema) => {
//     const stripe = await loadStripe(
//       "pk_test_51Q0vdYRZozRKGddD58H7hXRT2cEEIHHWVQaN2phqHnctMoTONkHXuVCzUyYAHqBdecM4atpASXA5t0sNlchrNo4200ElWas88G"
//     );
//     if (!stripe) {
//       console.error("Stripe.js failed to load.");
//       return;
//     }

//     // Create a payment method
//     const { paymentMethod, error } = await stripe.createPaymentMethod({
//       type: "card",
//       card: {
//         number: data.card_number.replace(/-/g, ""), // Remove hyphens for the API
//         exp_month: Number(expiryMonth),
//         exp_year: Number(expiryYear),
//         cvc: data.card_cvv,
//       },
//       billing_details: {
//         name: data.card_holder,
//       },
//     });

//     if (error) {
//       console.error("Payment method creation failed:", error);
//       // Handle error (e.g., display a message to the user)
//       return;
//     }

//     const completeData = {
//       ...data,
//       payment_method_id: paymentMethod.id, // Include the payment method ID
//       user_id: isMe?.id,
//       token: paymentMethod.id,
//     };

//     completePayment(completeData, {
//       onSuccess: (response) => {
//         console.log("Payment successful:", response);
//         // Optionally redirect or show a success message
//       },
//       onError: (error) => {
//         console.error("Payment failed:", error);
//         // Show error message to the user
//       },
//     });
//   };

//   // Card number formatting logic
//   const handleCardNumberChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const inputValue = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
//     const formattedValue = inputValue.replace(/(.{4})/g, "$1-").slice(0, 19); // Add hyphen after every 4 digits, max length 19
//     form.setValue("card_number", formattedValue); // Update form state
//   };

//   console.log(form.getValues());
//   return (
//     <div className="bg-[#F8F5F5]">
//       <div className="flex pt-16 justify-center gap-7 items-center mx-80">
//         <div className="text-[20px] text-center font-bold text-[#504F46]">
//           Welcome {isMe?.full_name} to Visitation Book.com
//         </div>
//       </div>
//       <div className="shadow-md flex-col rounded-lg m-20 p-10 border relative">
//         <div className="text-[30px] text-center font-bold text-[#504F46]">
//           You have selected the {selectedBook?.title}
//         </div>
//         <div className="relative flex flex-col p-10 mt-12 mx-20 justify-center items-center">
//           <img
//             src="/images/both.svg"
//             className="absolute top-56 left-0 w-full h-14 object-cover"
//             alt="Background"
//           />
//           <div className="relative z-10">
//             <div className="flex gap-7 mb-40">
//               <div>
//                 <img src={selectedBook?.cover} width={150} height={150} />
//                 <br />
//                 <p className="text-black text-lg text-center font-bold">
//                   Please pay the fee of ${price} + {taxRate}% service fee.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-10 gap-16 text-[#504F46] p-20">
//         <div className="col-span-2">
//           <div className="bg-white rounded-md shadow-md p-4">
//             <p className="font-bold text-black text-[18px]">Receipt Summary</p>
//             <div className="flex pt-3 justify-between">
//               <p>Visitation Book :</p>
//               <p>$ {price.toFixed(2)}</p>
//             </div>
//             <div className="flex pt-3 justify-between">
//               <p>Subtotal:</p>
//               <p>$ {price.toFixed(2)}</p>
//             </div>
//             <div className="flex pt-3 justify-between">
//               <p>Taxes :</p>
//               <p>$ {taxAmount.toFixed(2)}</p>
//             </div>
//             <div className="flex pt-3 justify-between">
//               <p>Discount :</p>
//               <p>$ 0.00</p>
//             </div>
//             <div className="flex pt-3 justify-between">
//               <p>Total :</p>
//               <p>$ {totalAmount.toFixed(2)}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-8">
//           <div className="bg-white rounded-md shadow-md p-9">
//             <p className="font-bold text-center text-black text-[35px]">
//               Payment information
//             </p>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-5"
//               >
//                 <div className="grid pt-7 grid-cols-2 gap-7">
//                   <FormField
//                     control={form.control}
//                     name="card_holder"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-lg font-bold">
//                           Card holder
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input rounded-full bg-white border-gray-400"
//                             type="text"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="card_cvv"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-lg font-bold">CVV</FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input rounded-full bg-white border-gray-400"
//                             type="text"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="card_number"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-lg font-bold">
//                           Card Number
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input rounded-full bg-white border-gray-400"
//                             type="text"
//                             {...field}
//                             onChange={handleCardNumberChange}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="expiry_date"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-lg font-bold">
//                           Expiry Date
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="input rounded-full bg-white border-gray-400"
//                             type="date" // Ensure correct format
//                             {...field}
//                             onChange={(e) => {
//                               field.onChange(e);
//                               handleExpiryDateChange(e);
//                             }}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {/* Hidden fields for expiry month and year */}
//                   <input
//                     type="hidden"
//                     value={expiryMonth}
//                     {...form.register("expiry_month")}
//                   />
//                   <input
//                     type="hidden"
//                     value={expiryYear}
//                     {...form.register("expiry_year")}
//                   />
//                 </div>
//                 <div className="flex justify-end">
//                   <Button className="mt-5 justify-end rounded-full flex bg-[#f00]">
//                     Complete Payment
//                   </Button>
//                 </div>
//               </form>
//             </Form>
//           </div>
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
import { useCompletePayment } from "#features/auth/hooks/use-complete-payment";
import { useCreateBookPurchase } from "#features/auth/hooks/use-create-book-purchase";
import { useCreateProcessPayment } from "#features/auth/hooks/use-proccess-payment";
import { paymentSchema, PaymentSchema } from "#features/auth/schema/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";


// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51Q0vdYRZozRKGddD58H7hXRT2cEEIHHWVQaN2phqHnctMoTONkHXuVCzUyYAHqBdecM4atpASXA5t0sNlchrNo4200ElWas88G"
);
 // @ts-ignore
function PaymentForm({ selectedBook, price, taxRate, totalAmount }) {
  const stripe = useStripe();
  const elements = useElements();
  const { mutate: completePayment, isPending } = useCompletePayment();
  const { mutate: bookPurchase, isPending: bookPend } = useCreateBookPurchase();
  const { mutate: proccessPayment, isPending: proccessPend } =
    useCreateProcessPayment();
  const form = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  // @ts-ignore
  const { isMe } = useContext(AppContext);

  const onSubmit = async (data: PaymentSchema) => {
    if (!stripe || !elements) {
      console.error("Stripe has not been loaded yet.");
      return;
    }

    // Get card element
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card Element not found.");
      return;
    }

    // Create payment method with card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: data.card_holder,
      },
    });

    if (error) {
      console.error("Payment method creation failed:", error);
      return;
    }
    console.log(paymentMethod, "methide");
    const completeData = {
      ...data,
      payment_method_id: paymentMethod.id,
      user_id: isMe?.id,
      stripe_payment_method_id: paymentMethod.id,
      expiry_month: paymentMethod?.card?.exp_month,
      expiry_year: paymentMethod?.card?.exp_year,
      last4: paymentMethod?.card?.last4,
      card_brand: paymentMethod?.card?.brand,
      is_default: "true",
    };
    // @ts-ignore
    completePayment(completeData, {
      onSuccess: (response) => {
        console.log("Payment successful:", response);
        bookPurchase(
          // @ts-ignore
          { book_id: token },
          {
            onSuccess: (data) => {
              console.log("book successful:", data);
              //  proccessPayment(
              //    { book_id: data.data.id, payment_method_id: paymentMethod.id }, // Replace with the actual book ID
              //    {
              //      onSuccess: (data) => {
              //        console.log("Payment successful:", data);
              //      },
              //      onError: (error) => {
              //        console.error("Payment failed:", error);
              //      },
              //    }
              //  );
              proccessPayment(
                { book_id: data.data.id, payment_method_id: response.data.id }, // Pass both book_id and payment_method_id
                {
                  onSuccess: (dataResponse) => {
                    console.log("Payment successful:", dataResponse);
                    router.push(
                      `/admin/visitation-books/upload-picture?token=${data.data.id}`
                    );
                  },
                  onError: (error) => {
                    console.error("Payment failed:", error);
                  },
                }
              );
            },
            // @ts-ignore
            onError: (error) => {
              console.error("book failed:", error);
            },
          }
        );
      },
      onError: (error) => {
        console.error("Payment failed:", error);
      },
    });
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        backgroundColor: "#f9fafb",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
    hidePostalCode: true, // Optionnel : pour masquer le champ du code postal si non nécessaire
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 lg:mx-20 mb-4"
      >
        <div className="grid pt-7 grid-cols-1 gap-7">
          <FormField
            control={form.control}
            name="card_holder"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold label">
                  Card Holder
                </FormLabel>
                <FormControl>
                  <Input
                    className="input rounded-full bg-white border-gray-400"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2">
          <FormItem>
            <FormLabel className="text-lg label font-bold">
              Card Details
            </FormLabel>
            <FormControl>
              <div className="input border rounded-full bg-white border-gray-400 p-3">
                <CardElement options={cardElementOptions} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <div className="flex justify-end">
          <Button
            className="mt-5 justify-end rounded-full flex bg-[#f00]"
            disabled={isPending || proccessPend || bookPend}
          >
            {isPending && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Complete Payment
            <span className="sr-only"> Complete Payment</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default function Page() {
  // @ts-ignore
  const { bookLists, isMe } = useContext(AppContext);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  // @ts-ignore
  const selectedBook = bookLists?.find((book) => book.id === token);
  const taxRate = 3;
  const price = Number(selectedBook?.price) || 0;
  const taxAmount = price * (taxRate / 100);
  const totalAmount = price + taxAmount;

  return (
    <div className="bg-[#F8F5F5]">
      <div className="flex pt-16 justify-center gap-7 items-center lg:mx-80">
        <div className="text-[20px] text-center font-bold text-[#504F46]">
          Welcome {isMe?.full_name} to Visitation Book.com
        </div>
      </div>
      <div className="lg:shadow-md flex-col rounded-lg lg:m-20 p-10 border relative">
        <div className="text-[30px] text-center font-bold text-[#504F46]">
          You have selected the {selectedBook?.title}
        </div>
        <div className="relative flex flex-col p-10 mt-12 mx-20 justify-center items-center">
          <img
            src="/images/both.svg"
            className="absolute top-56 left-0 w-full h-14 object-cover"
            alt="Background"
          />
          <div className="relative z-10">
            <div className="flex gap-7 mb-40">
              <div>
                <img src={selectedBook?.cover} width={150} height={150} />
                <br />
                <p className="text-black text-lg text-center font-bold">
                  Please pay the fee of ${price} + {taxRate}% service fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <PaymentForm
          selectedBook={selectedBook}
          price={price}
          taxRate={taxRate}
          totalAmount={totalAmount}
        />
      </Elements>
    </div>
  );
}
