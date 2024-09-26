// // // "use client";
// // // import { AppContext } from "#app/provider";
// // // import { Button } from "#components/ui/button";
// // // import { useRouter } from "next/navigation";
// // // import React, { useContext } from "react";

// // // export default function Page() {
// // //   const { bookLists, isMe } = useContext(AppContext);
// // //   bookLists && console.log(bookLists, "bookLists");

// // //   const paidBook = isMe?.obituaries
// // //   paidBook && console.log(paidBook, "paidBook");
// // //   // Helper function to chunk the book lists into groups of 4
// // //   const chunkArray = (arr: string | any[], size: number) => {
// // //     const result = [];
// // //     for (let i = 0; i < arr?.length; i += size) {
// // //       result.push(arr?.slice(i, i + size));
// // //     }
// // //     return result;
// // //   };

// // //   const groupedBooks = chunkArray(paidBook, 4);
// // //   const groupedBooksSm = chunkArray(paidBook, 1);
// // //   const router = useRouter();
// // //   return (
// // //     <div className="bg-[#F8F5F5]">
// // //       <div className="flex pt-20 justify-center flex-col gap-7 items-center">
// // //         <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
// // //           <div
// // //             onClick={() => router.push("/admin/visitation-books/home")}
// // //             className=" cursor-pointer text-[20px] font-bold"
// // //           >
// // //             Visitation books
// // //           </div>
// // //           <div className="border-b border-b-[#f00] cursor-pointer text-[20px] font-bold">
// // //             Obituary
// // //           </div>
// // //           <div
// // //             className=" text-[20px] cursor-pointer font-bold"
// // //             onClick={() => router.push("/admin/both/home")}
// // //           >
// // //             Both
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="lg:flex px-14 py-2 lg:px-0  mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
// // //         <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
// // //           Obituary
// // //         </div>
// // //         <Button
// // //           onClick={() => router.push("/admin/obituary/create-book")}
// // //           className="bg-[#f00] text-lg  text-white px-7 py-3"
// // //         >
// // //           Create Obituary
// // //         </Button>
// // //       </div>
// // //       {/* <div className="flex mt-72 mx-20 justify-center items-center">
// // //         <div className="absolute ">
// // //           <div className="flex gap-7 mb-56">
// // //             <img src="/images/cover.svg" width={150} height={150} />
// // //             <img src="/images/cover.svg" width={150} height={150} />
// // //             <img src="/images/cover.svg" width={150} height={150} />
// // //           </div>
// // //         </div>
// // //         <img src="/images/both.svg" width={1000} height={1000} />
// // //       </div> */}

// // //       <div className="lg:grid grid-cols-1 hidden">
// // //         <div className="">
// // //           <div className="relative mt-12 mx-12">
// // //             {groupedBooks.map((group, groupIndex) => (
// // //               <div key={groupIndex} className="relative mb-12">
// // //                 {/* Background image for each row of books */}
// // //                 {/* <img
// // //                   src="/images/both.svg"
// // //                   className="absolute top-80 left-0 w-full h-14  object-cover"
// // //                   alt="Background"
// // //                 /> */}
// // //                 <div className="relative flex justify-around gap-7 mx-20">
// // //                   {group.map((book, index) => (
// // //                     <div
// // //                       key={index}
// // //                       className="cursor-pointer text-center"
// // //                       onClick={() =>
// // //                         router.push(`/admin/obituary/view?token=${book?.id}`)
// // //                       }
// // //                     >
// // //                       <div className="relative">
// // //                         <img
// // //                           src={`http://34.44.9.82${book?.book_cover}`}
// // //                           width={400}
// // //                           height={400}
// // //                           className="w-full h-auto object-cover"
// // //                           alt={`Cover of ${book?.book?.title}`}
// // //                           style={{ width: "250px" }}
// // //                         />

// // //                         {/* Deceased image and price positioned on top of the book cover */}
// // //                         <div className="absolute inset-0 flex flex-col items-center justify-center">
// // //                           <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
// // //                             {book?.deceased_name}
// // //                           </p>
// // //                           {/* <img
// // //                             src={`http://34.27.136.91${book?.deceased_image}`}
// // //                             width={100}
// // //                             height={100}
// // //                             className="object-cover"
// // //                             alt={`Cover of ${book?.book?.title}`}
// // //                           /> */}
// // //                           <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
// // //                             Born - {book?.date_of_birth}
// // //                           </p>
// // //                           <p className="text-[12px] pb-5 font-bold text-[#575252]">
// // //                             Passed - {book?.date_of_birth}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="grid grid-cols-1 lg:hidden">
// // //         <div className="">
// // //           <div className="relative mt-12 mx-12">
// // //             {groupedBooksSm.map((group, groupIndex) => (
// // //               <div key={groupIndex} className="relative mb-12">
// // //                 {/* Background image for each row of books */}
// // //                 <img
// // //                   src="/images/both.svg"
// // //                   className="absolute top-80 left-0 w-full h-14  object-cover"
// // //                   alt="Background"
// // //                 />
// // //                 <div className="relative flex justify-around gap-7 mx-20">
// // //                   {group.map((book, index) => (
// // //                     <div
// // //                       key={index}
// // //                       className="cursor-pointer text-center"
// // //                       onClick={() =>
// // //                         router.push(
// // //                           `/admin/obituary/fill-book?token=${book?.id}`
// // //                         )
// // //                       }
// // //                     >
// // //                       <div className="relative">
// // //                         <img
// // //                           src={`http://34.27.136.91${book?.book?.cover}`}
// // //                           width={400}
// // //                           height={400}
// // //                           className="w-full h-auto object-cover"
// // //                           alt={`Cover of ${book?.book?.title}`}
// // //                           style={{ width: "400px" }}
// // //                         />

// // //                         {/* Deceased image and price positioned on top of the book cover */}
// // //                         <div className="absolute inset-0 flex flex-col items-center justify-center">
// // //                           <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
// // //                             {book?.deceased_name}
// // //                           </p>
// // //                           <img
// // //                             src={`http://34.27.136.91${book?.deceased_image}`}
// // //                             width={100}
// // //                             height={100}
// // //                             className="object-cover"
// // //                             alt={`Cover of ${book?.book?.title}`}
// // //                           />
// // //                           <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
// // //                             Born - {book?.date_of_birth}
// // //                           </p>
// // //                           <p className="text-[12px] pb-5 font-bold text-[#575252]">
// // //                             Passed - {book?.date_of_birth}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// "use client";
// import { AppContext } from "#app/provider";
// import { Button } from "#components/ui/button";
// import { useRouter } from "next/navigation";
// import React, { useContext } from "react";
//  // @ts-ignore
// import Slider from "react-slick"; // Import Slider from react-slick
// import "slick-carousel/slick/slick.css"; // Import Slick styles
// import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles

// export default function Page() {
//   // @ts-ignore
//   const { bookLists, isMe } = useContext(AppContext);
//   const paidBook = isMe?.obituaries;
// paidBook && console.log(paidBook)
//   const router = useRouter();

//   // Configuration du carrousel
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Par défaut, affiche 3 slides
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768, // Pour les écrans de moins de 768px (tablettes et mobiles)
//         settings: {
//           slidesToShow: 1, // Affiche 1 slide
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className="relative min-h-screen bg-cover"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(235, 214, 214, 1), rgba(0, 0, 0, 0.5)), url(/images/hero-image.jpeg)`,
//       }}
//     >
//       <div className="flex pt-20 justify-center flex-col gap-7 items-center">
//         <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
//           <div
//             onClick={() => router.push("/admin/visitation-books/home")}
//             className=" cursor-pointer text-[20px] font-bold"
//           >
//             Visitation books
//           </div>
//           <div className="border-b-2 border-b-[#f00] cursor-pointer text-[20px] font-bold">
//             Obituary
//           </div>
//           <div
//             className=" text-[20px] cursor-pointer font-bold"
//             onClick={() => router.push("/admin/both/home")}
//           >
//             Both
//           </div>
//         </div>
//       </div>
//       <div className="lg:flex px-14 py-2 lg:px-0 mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
//         <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
//           Obituary
//         </div>
//         <Button
//           onClick={() => router.push("/admin/obituary/create-book")}
//           className="bg-[#f00] text-lg text-white px-7 py-3"
//         >
//           Create Obituary
//         </Button>
//       </div>

//       <div className="mt-12 xl:mx-72 mx-20 gap-10">
//         {paidBook?.length > 0 && (
//           <div className="grid grid-cols-7 ">
//             <div className="md:col-span-2 col-span-3">
//               <img
//                 className="hidden md:flex"
//                 src="/images/GOD.svg"
//                 width={1000}
//                 height={1000}
//               />
//               <img
//                 className="md:hidden"
//                 src="/images/GOD.svg"
//                 // width={1000}
//                 // height={1000}
//                 style={{ width: "5000px" }}
//               />
//             </div>
//             <div className="md:col-span-5 col-span-4">
//               <Slider {...settings}>
//                 {paidBook?.map(
//                   (
//                     book: {
//                       id: any;
//                       book: { cover: any; title: any };
//                       deceased_name:
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | Iterable<React.ReactNode>
//                         | React.ReactPortal
//                         | Promise<React.AwaitedReactNode>
//                         | null
//                         | undefined;
//                       deceased_image: any;
//                       date_of_birth:
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | Iterable<React.ReactNode>
//                         | Promise<React.AwaitedReactNode>
//                         | null
//                         | undefined;
//                     },
//                     index: React.Key | null | undefined
//                   ) => (
//                     <div
//                       key={index}
//                       className="cursor-pointer bg-transparent text-center"
//                     >
//                       <div
//                         onClick={() =>
//                           router.push(`/admin/obituary/view?token=${book.id}`)
//                         }
//                         className="relative bg-transparent"
//                       >
//                         <img
//                           // @ts-ignore
//                           src={`http://34.44.9.82${book?.book_cover}`}
//                           className="w-[400px] h-[300px]"
//                           alt={`Cover of `}
//                         />
//                         <div className="absolute inset-0 flex flex-col items-center justify-center">
//                           <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
//                             {book.deceased_name}
//                           </p>
//                           <img
//                            // @ts-ignore
//                             src={`http://34.44.9.82${book.deceased_image}`}
//                             width={100}
//                             height={100}
//                             className="object-cover"
//                             alt={`Deceased ${book.deceased_name}`}
//                           />
//                           <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
//                             Born - {book.date_of_birth}
//                           </p>
//                           <p className="text-[12px] pb-5 font-bold text-[#575252]">
//                             Passed - {book.date_of_birth}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </Slider>
//             </div>
//           </div>
//         )}
//         <img src="/images/both.svg" width={1000} height={1000} />
//         {paidBook?.length === 0 && (
//           <div className="bg-[#EBD6D6] p-7 text-center rounded-lg text-black">
//             No obituary found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // /* eslint-disable react/jsx-no-comment-textnodes */
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // /* eslint-disable @typescript-eslint/ban-ts-comment */
// // "use client";
// // import { AppContext } from "#app/provider";
// // import { Button } from "#components/ui/button";
// // import { useRouter } from "next/navigation";
// // import React, { useContext } from "react";

// // export default function Page() {
// //   // @ts-ignore
// //   const { bookLists, isMe } = useContext(AppContext);
// //   bookLists && console.log(bookLists, "bookLists");

// //   const paidBook = isMe?.book_purchases?.filter(
// //     (f: { payment_status: boolean; }) => f.payment_status === true
// //   );
// //   paidBook && console.log(paidBook, "paidBook");
// //   // Helper function to chunk the book lists into groups of 4
// //   // @ts-ignore
// //   const chunkArray = (arr: any, size: any) => {
// //     const result = [];
// //     for (let i = 0; i < arr?.length; i += size) {
// //       result.push(arr?.slice(i, i + size));
// //     }
// //     return result;
// //   };

// //   const groupedBooks = chunkArray(paidBook, 400);
// //   const groupedBooksSm = chunkArray(paidBook, 1);
// //   const router = useRouter();
// //   return (
// //     <div
// //       className="relative min-h-screen bg-cover"
// //       style={{
// //         backgroundImage: `linear-gradient(to bottom, rgba(235, 214, 214, 1), rgba(0, 0, 0, 0.5)), url(/images/hero-image.jpeg)`,
// //         // backgroundColor: "#F8F0F0",
// //       }}
// //     >
// //       <div className="flex pt-20 justify-center flex-col gap-7 items-center">
// //         <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
// //           <div className="border-b border-b-[#f00] text-[20px] font-bold">
// //             Visitation books
// //           </div>
// //           <div
// //             className=" text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/obituary/home")}
// //           >
// //             Obituary
// //           </div>
// //           <div
// //             className=" text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/both/home")}
// //           >
// //             Both
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:flex px-14 py-2 lg:px-0  mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
// //         <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
// //           Visitation books
// //         </div>
// //         <Button
// //           onClick={() => router.push("/admin/visitation-books/create-book")}
// //           className="bg-[#f00] text-lg  text-white px-7 py-3"
// //         >
// //           Create Visitation Book
// //         </Button>
// //       </div>
// //       {/* <div className="flex mt-72 mx-20 justify-center items-center">
// //         <div className="absolute ">
// //           <div className="flex gap-7 mb-56">
// //             <img src="/images/cover.svg" width={150} height={150} />
// //             <img src="/images/cover.svg" width={150} height={150} />
// //             <img src="/images/cover.svg" width={150} height={150} />
// //           </div>
// //         </div>
// //         <img src="/images/both.svg" width={1000} height={1000} />
// //       </div> */}

// //       <div className="lg:grid grid-cols-1 hidden">
// //         <div className="">
// //           <div className="relative mt-12 mx-12">
// //             {groupedBooks.map((group, groupIndex) => (
// //               <div key={groupIndex} className="relative mb-12">

// //                 <img
// //                   src="/images/both.svg"
// //                   className="absolute top-72 left-0 w-full h-14  object-cover"
// //                   alt="Background"
// //                 />
// //                 <div className="relative flex justify-around gap-7 mx-20">
// //                   {group.map(
// //                     (
// //                       book: {
// //                         id: any;
// //                         book: { cover: any; title: any };
// //                         deceased_name:
// //                           | string
// //                           | number
// //                           | bigint
// //                           | boolean
// //                           | React.ReactElement<
// //                               any,
// //                               string | React.JSXElementConstructor<any>
// //                             >
// //                           | Iterable<React.ReactNode>
// //                           | React.ReactPortal
// //                           | Promise<React.AwaitedReactNode>
// //                           | null
// //                           | undefined;
// //                         deceased_image: any;
// //                         date_of_birth:
// //                           | string
// //                           | number
// //                           | bigint
// //                           | boolean
// //                           | React.ReactElement<
// //                               any,
// //                               string | React.JSXElementConstructor<any>
// //                             >
// //                           | Iterable<React.ReactNode>
// //                           | Promise<React.AwaitedReactNode>
// //                           | null
// //                           | undefined;
// //                       },
// //                       index: React.Key | null | undefined
// //                     ) => (
// //                       <div
// //                         key={index}
// //                         className="cursor-pointer text-center"
// //                         onClick={() =>
// //                           router.push(
// //                             `/admin/visitation-books/view?token=${book?.id}`
// //                           )
// //                         }
// //                       >
// //                         <div className="relative ">
// //                           <div className="">
// //                             <img
// //                               src={`http://34.44.9.82${book?.book?.cover}`}
// //                               width={400}
// //                               height={200}
// //                               className="w-full h-[300px] "
// //                               alt={`Cover of ${book?.book?.title}`}
// //                               style={{ width: "250px" }}
// //                             />
// //                           </div>

// //                           <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                             <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
// //                               {book?.deceased_name}
// //                             </p>
// //                             <img
// //                               src={`http://34.44.9.82${book?.deceased_image}`}
// //                               width={100}
// //                               height={100}
// //                               className="object-cover"
// //                               alt={`Cover of ${book?.book?.title}`}
// //                             />
// //                             <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
// //                               Born - {book?.date_of_birth}
// //                             </p>
// //                             <p className="text-[12px] pb-5 font-bold text-[#575252]">
// //                               Passed - {book?.date_of_birth}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //             {groupedBooks?.length < 0 ||
// //               (groupedBooks?.length === 0 && (
// //                 <div className="bg-[#EBD6D6] p-7 text-center rounded-lg text-black">
// //                   No visitation books found
// //                 </div>
// //               ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* eslint-disable react/jsx-no-comment-textnodes */
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // /* eslint-disable @typescript-eslint/ban-ts-comment */
// // "use client";
// // import { AppContext } from "#app/provider";
// // import { Button } from "#components/ui/button";
// // import { useRouter } from "next/navigation";
// // import React, { useContext } from "react";
// // import { Swiper, SwiperSlide } from "#swiper/react";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Navigation, Pagination } from "swiper";

// // export default function Page() {
// //   // @ts-ignore
// //   const { bookLists, isMe } = useContext(AppContext);
// //   bookLists && console.log(bookLists, "bookLists");

// //   const paidBook = isMe?.book_purchases?.filter(
// //     (f: { payment_status: boolean }) => f.payment_status === true
// //   );
// //   paidBook && console.log(paidBook, "paidBook");

// //   const router = useRouter();

// //   return (
// //     <div
// //       className="relative min-h-screen bg-cover"
// //       style={{
// //         backgroundImage: `linear-gradient(to bottom, rgba(235, 214, 214, 1), rgba(0, 0, 0, 0.5)), url(/images/hero-image.jpeg)`,
// //       }}
// //     >
// //       <div className="flex pt-20 justify-center flex-col gap-7 items-center">
// //         <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
// //           <div className="border-b border-b-[#f00] text-[20px] font-bold">
// //             Visitation books
// //           </div>
// //           <div
// //             className="text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/obituary/home")}
// //           >
// //             Obituary
// //           </div>
// //           <div
// //             className="text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/both/home")}
// //           >
// //             Both
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:flex px-14 py-2 lg:px-0 mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
// //         <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
// //           Visitation books
// //         </div>
// //         <Button
// //           onClick={() => router.push("/admin/visitation-books/create-book")}
// //           className="bg-[#f00] text-lg text-white px-7 py-3"
// //         >
// //           Create Visitation Book
// //         </Button>
// //       </div>

// //       <div className="mt-12 px-12">
// //         <Swiper
// //           modules={[Navigation, Pagination]}
// //           spaceBetween={20}
// //           slidesPerView={3}
// //           navigation
// //           pagination={{ clickable: true }}
// //         >
// //           {paidBook?.map(
// //             (
// //               book: {
// //                 id: any;
// //                 book: { cover: any; title: any };
// //                 deceased_name: string;
// //                 deceased_image: any;
// //                 date_of_birth: string;
// //               },
// //               index: React.Key | null | undefined
// //             ) => (
// //               <SwiperSlide key={index} className="cursor-pointer text-center">
// //                 <div
// //                   className="relative"
// //                   onClick={() =>
// //                     router.push(`/admin/visitation-books/view?token=${book?.id}`)
// //                   }
// //                 >
// //                   <img
// //                     src={`http://34.44.9.82${book?.book?.cover}`}
// //                     width={250}
// //                     height={300}
// //                     className="w-full h-[300px] object-cover"
// //                     alt={`Cover of ${book?.book?.title}`}
// //                   />
// //                   <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                     <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
// //                       {book?.deceased_name}
// //                     </p>
// //                     <img
// //                       src={`http://34.44.9.82${book?.deceased_image}`}
// //                       width={100}
// //                       height={100}
// //                       className="object-cover"
// //                       alt={`Image of ${book?.deceased_name}`}
// //                     />
// //                     <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
// //                       Born - {book?.date_of_birth}
// //                     </p>
// //                     <p className="text-[12px] pb-5 font-bold text-[#575252]">
// //                       Passed - {book?.date_of_birth}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </SwiperSlide>
// //             )
// //           )}
// //         </Swiper>
// //         {paidBook?.length === 0 && (
// //           <div className="bg-[#EBD6D6] p-7 text-center rounded-lg text-black">
// //             No visitation books found
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import { AppContext } from "#app/provider";
// // import { Button } from "#components/ui/button";
// // import { useRouter } from "next/navigation";
// // import React, { useContext } from "react";
// //  // @ts-ignore
// // import Slider from "react-slick"; // Import Slider from react-slick
// // import "slick-carousel/slick/slick.css"; // Import Slick styles
// // import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles

// // export default function Page() {
// //   // @ts-ignore
// //   const { bookLists, isMe } = useContext(AppContext);
// //   const paidBook = isMe?.obituaries?.filter(
// //    Boolean
// //   );
// // console.log(paidBook)
// //   const router = useRouter();

// //   // Configuration du carrousel
// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3, // Par défaut, affiche 3 slides
// //     slidesToScroll: 1,
// //     arrows: true,
// //     responsive: [
// //       {
// //         breakpoint: 768, // Pour les écrans de moins de 768px (tablettes et mobiles)
// //         settings: {
// //           slidesToShow: 1, // Affiche 1 slide
// //           slidesToScroll: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <div
// //       className="relative min-h-screen bg-cover"
// //       style={{
// //         backgroundImage: `linear-gradient(to bottom, rgba(235, 214, 214, 1), rgba(0, 0, 0, 0.5)), url(/images/hero-image.jpeg)`,
// //       }}
// //     >
// //       <div className="flex pt-20 justify-center flex-col gap-7 items-center">
// //         <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
// //           <div className="border-b-2 border-b-[#f00] text-[20px] font-bold">
// //             Visitation books
// //           </div>
// //           <div
// //             className="text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/obituary/home")}
// //           >
// //             Obituary
// //           </div>
// //           <div
// //             className="text-[20px] cursor-pointer font-bold"
// //             onClick={() => router.push("/admin/both/home")}
// //           >
// //             Both
// //           </div>
// //         </div>
// //       </div>
// //       <div className="lg:flex px-14 py-2 lg:px-0 mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
// //         <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
// //           Visitation books
// //         </div>
// //         <Button
// //           onClick={() => router.push("/admin/visitation-books/create-book")}
// //           className="bg-[#f00] text-lg text-white px-7 py-3"
// //         >
// //           Create Visitation Book
// //         </Button>
// //       </div>

// //       <div className="mt-12 xl:mx-72 mx-20 gap-10">
// //         <div className="grid grid-cols-7 ">
// //           <div className="md:col-span-2 col-span-3">
// //             <img
// //               className="hidden md:flex"
// //               src="/images/GOD.svg"
// //               width={1000}
// //               height={1000}
// //             />
// //             <img
// //               className="md:hidden"
// //               src="/images/GOD.svg"
// //               // width={1000}
// //               // height={1000}
// //               style={{ width: "5000px" }}
// //             />
// //           </div>
// //           <div className="md:col-span-5 col-span-4">
// //             <Slider {...settings}>
// //               {paidBook?.map(
// //                 (
// //                   book: {
// //                     id: any;
// //                     book: { cover: any; title: any };
// //                     deceased_name:
// //                       | string
// //                       | number
// //                       | bigint
// //                       | boolean
// //                       | React.ReactElement<
// //                           any,
// //                           string | React.JSXElementConstructor<any>
// //                         >
// //                       | Iterable<React.ReactNode>
// //                       | React.ReactPortal
// //                       | Promise<React.AwaitedReactNode>
// //                       | null
// //                       | undefined;
// //                     deceased_image: any;
// //                     date_of_birth:
// //                       | string
// //                       | number
// //                       | bigint
// //                       | boolean
// //                       | React.ReactElement<
// //                           any,
// //                           string | React.JSXElementConstructor<any>
// //                         >
// //                       | Iterable<React.ReactNode>
// //                       | Promise<React.AwaitedReactNode>
// //                       | null
// //                       | undefined;
// //                   },
// //                   index: React.Key | null | undefined
// //                 ) => (
// //                   <div
// //                     key={index}
// //                     className="cursor-pointer bg-transparent text-center"
// //                   >
// //                     <div
// //                       onClick={() =>
// //                         router.push(
// //                           `/admin/visitation-books/view?token=${book.id}`
// //                         )
// //                       }
// //                       className="relative bg-transparent"
// //                     >
// //                       <img
// //                         src={`http://34.44.9.82${book?.book_cover}`}
// //                         className="w-[400px] h-[300px]"
// //                         alt={`Cover of ${book.book?.title}`}
// //                       />
// //                       <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                         <p className="text-[20px] pb-2 mt-2 font-bold text-[#575252]">
// //                           {book.deceased_name}
// //                         </p>
// //                         <img
// //                           src={`http://34.44.9.82${book?.deceased_image}`}
// //                           width={100}
// //                           height={100}
// //                           className="object-cover"
// //                           alt={`Deceased ${book.deceased_name}`}
// //                         />
// //                         <p className="text-[12px] mt-2 pt-5 font-bold text-[#575252]">
// //                           Born - {book.date_of_birth}
// //                         </p>
// //                         <p className="text-[12px] pb-5 font-bold text-[#575252]">
// //                           Passed - {book.date_of_birth}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )
// //               )}
// //             </Slider>
// //           </div>
// //         </div>
// //         <img src="/images/both.svg" width={1000} height={1000} />
// //         {paidBook?.length === 0 && (
// //           <div className="bg-[#EBD6D6] p-7 text-center rounded-lg text-black">
// //             No visitation books found
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

"use client";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
// @ts-ignore

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";

export default function Page() {
  // @ts-ignore
  const { bookLists, isMe } = useContext(AppContext);
  const paidBook = isMe?.obituaries
  function chunkArray(array: any[], chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const router = useRouter();
  // Appel de la fonction pour tronquer bookLists en groupes de 4
  const chunkedBookLists = paidBook ? chunkArray(paidBook, 3) : [];
  const chunkedBookListsSm = bookLists ? chunkArray(bookLists, 2) : [];
  // Configuration du carrousel

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(235, 214, 214, 1), rgba(0, 0, 0, 0.5)), url(/images/hero-image.jpeg)`,
      }}
    >
      <div className="flex pt-20 justify-center flex-col gap-7 items-center">
        <div className="flex justify-between gap-7 items-center text-[#5A5A5A]">
          <div
            className="text-[20px] cursor-pointer font-bold"
            onClick={() => router.push("/admin/visitation-books/home")}
          >
            Visitation books
          </div>
          <div
            className="border-b-2 border-b-[#f00] text-[20px] font-bold"
            onClick={() => router.push("/admin/obituary/home")}
          >
            Obituary
          </div>
          <div
            className="text-[20px] cursor-pointer font-bold"
            onClick={() => router.push("/admin/both/home")}
          >
            Both
          </div>
        </div>
      </div>
      <div className="lg:flex px-14 py-2 lg:px-0 mt-16 justify-between gap-7 items-center lg:mx-80 lg:border-b">
        <div className="lg:text-[40px] lg:border-none text-[30px] font-bold text-[#504F46]">
          Obituary
        </div>
        <Button
          onClick={() => router.push("/admin/obituary/create-book")}
          className="bg-[#f00] text-lg text-white px-7 py-3"
        >
          Create Obituary
        </Button>
      </div>

      {paidBook?.length > 0 ? (
        <>
          <div className="lg:grid hidden grid-cols-7">
            <div className="col-span-7 mx-auto">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="xl:w-[1200px] lg:w-[1000px] w-full"
              >
                <div className="relative top-0 left-0 mt-20">
                  <div className="relative left-50 right-50">
                    <div className="flex gap-5 justify-center">
                      <img
                        src="/images/GOD.svg"
                        className=" relative top-8"
                        alt="GOD Icon"
                      />
                      <CarouselContent>
                        {paidBook?.map((book: any, index: number) => (
                          <CarouselItem className="md:basis-1/2  lg:basis-1/3">
                            <div // @ts-ignore
                              // src={`http://34.44.9.82${validBook?.book?.cover}`}
                              // width={500}
                              // className="relative z-10"
                              style={{
                                //@ts-ignore
                                backgroundImage: `url(http://34.44.9.82${book?.book_cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className={`relative z-10 ${
                                paidBook?.length < 3 ? "w-[250px] mx-20" : ""
                              }  h-[340px]`}
                            >
                              <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                <p className="text-[30px] pt-7 pb-5 font-bold text-black">
                                  {
                                    //@ts-ignore
                                    book?.deceased_name
                                  }
                                </p>
                                <div className="">
                                  <img
                                    //@ts-ignore
                                    src={`http://34.44.9.82${book?.deceased_image}`}
                                    // width={100}
                                    // height={200}
                                    className="w-52 px-4"
                                    alt=""
                                  />
                                </div>
                                <p className="text-[16px] mt-2 font-bold text-[#000]">
                                  Born -{" "}
                                  {
                                    //@ts-ignore
                                    book?.date_of_birth
                                  }
                                </p>
                                <p className="text-[16px] pb-5 font-bold text-[#000]">
                                  Passed -{" "}
                                  {
                                    //@ts-ignore
                                    book?.date_of_death
                                  }
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </div>
                  <img
                    className="image2 absolute"
                    src="/images/both.svg"
                    alt="Decoration"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="md:grid hidden lg:hidden grid-cols-7">
            <div className="col-span-7 mx-auto">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="xl:w-[1200px] lg:w-[1000px] md:w-[700px] "
              >
                <div className="relative top-0 left-0 mt-20">
                  <div className="relative left-50 right-50">
                    <div className="flex gap-5 justify-center">
                      <img
                        src="/images/GOD.svg"
                        className=" relative top-8"
                        alt="GOD Icon"
                      />
                      <CarouselContent>
                        {paidBook?.map((book: any, index: number) => (
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1/1">
                            <div // @ts-ignore
                              // src={`http://34.44.9.82${validBook?.book?.cover}`}
                              // width={500}
                              // className="relative z-10"
                              style={{
                                //@ts-ignore
                                backgroundImage: `url(http://34.44.9.82${book?.book_cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className="relative z-10  h-[340px]"
                            >
                              <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                {book?.deceased_name && (
                                  <p className="text-[30px] pt-7 pb-5 font-bold text-black">
                                    {
                                      //@ts-ignore
                                      book?.deceased_name
                                    }
                                  </p>
                                )}
                                {book?.deceased_image && (
                                  <div className="">
                                    <img
                                      //@ts-ignore
                                      src={`http://34.44.9.82${book?.deceased_image}`}
                                      // width={100}
                                      // height={200}
                                      className="w-52 px-4"
                                      alt=""
                                    />
                                  </div>
                                )}
                                {book?.date_of_birth && (
                                  <p className="text-[16px] mt-2 font-bold text-[#000]">
                                    Born -{" "}
                                    {
                                      //@ts-ignore
                                      book?.date_of_birth
                                    }
                                  </p>
                                )}
                                {book?.date_of_death && (
                                  <p className="text-[16px] pb-5 font-bold text-[#000]">
                                    Passed -{" "}
                                    {
                                      //@ts-ignore
                                      book?.date_of_death
                                    }
                                  </p>
                                )}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </div>
                  <img
                    className="image2 absolute"
                    src="/images/both.svg"
                    alt="Decoration"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="grid md:hidden  lg:hidden xl:hidden grid-cols-7">
            <div className="col-span-7 mx-auto">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="xl:w-[1200px] lg:w-[1000px] md:w-[850px] w-[350px] "
              >
                <div className="relative top-0 left-0 mt-20">
                  <div className="relative left-50 right-50">
                    <img
                      src="/images/GOD.svg"
                      className=" absolute right-[200px] bottom-0 "
                      alt="GOD Icon"
                    />
                    <div className="flex gap-5 justify-center">
                      <CarouselContent>
                        {paidBook?.map((book: any, index: number) => (
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
                            <div // @ts-ignore
                              // src={`http://34.44.9.82${validBook?.book?.cover}`}
                              // width={500}
                              // className="relative z-10"
                              style={{
                                //@ts-ignore
                                backgroundImage: `url(http://34.44.9.82${book?.book_cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className="relative z-10  ml-20 h-[340px]"
                            >
                              <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                <p className="text-[30px] pt-5 pb-5 font-bold text-[#000]">
                                  {
                                    //@ts-ignore
                                    book?.deceased_name
                                  }
                                </p>
                                <div className="">
                                  <img
                                    //@ts-ignore
                                    src={`http://34.44.9.82${book?.deceased_image}`}
                                    // width={100}
                                    // height={200}
                                    className="w-52 px-4"
                                    alt=""
                                  />
                                </div>
                                <p className="text-[16px] mt-2 font-bold text-[#000]">
                                  Born -{" "}
                                  {
                                    //@ts-ignore
                                    book?.date_of_birth
                                  }
                                </p>
                                <p className="text-[16px] pb-5 font-bold text-[#000]">
                                  Passed -{" "}
                                  {
                                    //@ts-ignore
                                    book?.date_of_death
                                  }
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* <CarouselPrevious />
                  <CarouselNext /> */}
                    </div>
                  </div>
                  <img
                    className="image2 absolute"
                    src="/images/both.svg"
                    alt="Decoration"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-[#EBD6D6] p-12 lg:mx-10 my-10 text-center rounded-lg text-black">
            No obituary found
          </div>
        </div>
      )}
    </div>
  );
}
