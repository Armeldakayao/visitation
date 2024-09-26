// // // // "use client";
// // // // import { useState } from "react";
// // // // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // // // import { Button } from "#components/ui/button";

// // // // export default function Page({ totalPages = 10 }) {
// // // //   const [currentPage, setCurrentPage] = useState(1);

// // // //   // Fonction pour changer la page
// // // //   const goToNextPage = () => {
// // // //     if (currentPage < totalPages) {
// // // //       setCurrentPage(currentPage + 1);
// // // //     }
// // // //   };

// // // //   const goToPrevPage = () => {
// // // //     if (currentPage > 1) {
// // // //       setCurrentPage(currentPage - 1);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// // // //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// // // //         Visitation Books - Page {currentPage}
// // // //       </h1>

// // // //       <div className="flex justify-end">
// // // //         <X />
// // // //       </div>

// // // //       <div className="relative grid grid-cols-1 justify-center items-center">
// // // //         {/* Livre avec effet de défilement */}
// // // //         <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// // // //           <div
// // // //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// // // //             style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
// // // //           >
// // // //             {/* Générer les pages */}
// // // //             {Array.from({ length: totalPages }).map((_, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className="w-full flex-none p-10 border-r border-r-gray-500 flex justify-center items-center"
// // // //               >
// // // //                 <p className="text-center">
// // // //                   Page {index + 1}: Lorem ipsum dolor sit amet consectetur
// // // //                   adipisicing elit. Iure sequi ratione soluta ea, laborum sint
// // // //                   hic quas nobis fugiat optio odit doloribus quae beatae
// // // //                   molestiae nulla suscipit commodi similique quibusdam.
// // // //                 </p>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Bouton Next */}
// // // //           <div className="absolute right-2 bottom-2">
// // // //             <Button
// // // //               onClick={goToNextPage}
// // // //               disabled={currentPage === totalPages}
// // // //               className="flex items-center"
// // // //             >
// // // //               Next <ArrowRight className="ml-2" />
// // // //             </Button>
// // // //           </div>

// // // //           {/* Bouton Previous */}
// // // //           <div className="absolute left-2 bottom-2">
// // // //             <Button
// // // //               onClick={goToPrevPage}
// // // //               disabled={currentPage === 1}
// // // //               className="flex items-center"
// // // //             >
// // // //               <ArrowLeft className="mr-2" /> Previous
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // "use client";
// // // import { useState } from "react";
// // // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // // import { Button } from "#components/ui/button";

// // // export default function Page({ totalPages = 10 }) {
// // //   const [currentPage, setCurrentPage] = useState(1);

// // //   // Fonction pour avancer de deux pages (car deux pages sont affichées en même temps)
// // //   const goToNextPage = () => {
// // //     if (currentPage < totalPages - 1) {
// // //       setCurrentPage(currentPage + 2);
// // //     }
// // //   };

// // //   const goToPrevPage = () => {
// // //     if (currentPage > 1) {
// // //       setCurrentPage(currentPage - 2);
// // //     }
// // //   };

// // //   return (
// // //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// // //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// // //         Visitation Books - Pages {currentPage} & {currentPage + 1}
// // //       </h1>

// // //       <div className="flex justify-end">
// // //         <X />
// // //       </div>

// // //       <div className="relative grid grid-cols-1 justify-center items-center">
// // //         {/* Livre avec deux pages par ligne */}
// // //         <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// // //           <div
// // //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// // //             style={{
// // //               transform: `translateX(-${
// // //                 Math.floor((currentPage - 1) / 2) * 100
// // //               }%)`,
// // //             }}
// // //           >
// // //             {/* Générer les paires de pages */}
// // //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// // //               (_, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="w-full flex-none p-10 flex justify-between items-center"
// // //                 >
// // //                   {/* Page de gauche */}
// // //                   <div className="w-1/2 p-10 border-r border-r-gray-500 flex justify-center items-center">
// // //                     <p className="text-center">
// // //                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
// // //                       consectetur adipisicing elit. Iure sequi ratione soluta
// // //                       ea, laborum sint hic quas nobis fugiat optio odit
// // //                       doloribus quae beatae molestiae nulla suscipit commodi
// // //                       similique quibusdam.
// // //                     </p>
// // //                   </div>

// // //                   {/* Page de droite */}
// // //                   {totalPages > index * 2 + 1 && (
// // //                     <div className="w-1/2 p-10 flex justify-center items-center">
// // //                       <p className="text-center">
// // //                         Page {index * 2 + 2}: Lorem ipsum dolor sit amet
// // //                         consectetur, adipisicing elit. Error ab, asperiores eius
// // //                         unde non reprehenderit ex explicabo architecto totam
// // //                         dignissimos, exercitationem, eligendi voluptas hic
// // //                         repudiandae dolorum necessitatibus nesciunt officia
// // //                         libero.
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )
// // //             )}
// // //           </div>

// // //           {/* Bouton Next */}
// // //           <div className="absolute right-2 bottom-2">
// // //             <Button
// // //               onClick={goToNextPage}
// // //               disabled={currentPage >= totalPages - 1}
// // //               className="flex items-center"
// // //             >
// // //               Next <ArrowRight className="ml-2" />
// // //             </Button>
// // //           </div>

// // //           {/* Bouton Previous */}
// // //           <div className="absolute left-2 bottom-2">
// // //             <Button
// // //               onClick={goToPrevPage}
// // //               disabled={currentPage === 1}
// // //               className="flex items-center"
// // //             >
// // //               <ArrowLeft className="mr-2" /> Previous
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // // "use client";
// // // import { useState } from "react";
// // // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // // import { Button } from "#components/ui/button";

// // // export default function Page({ totalPages = 10 }) {
// // //   const [currentPage, setCurrentPage] = useState(1);

// // //   // Fonction pour avancer de deux pages
// // //   const goToNextPage = () => {
// // //     if (currentPage < totalPages - 1) {
// // //       setCurrentPage(currentPage + 2);
// // //     }
// // //   };

// // //   const goToPrevPage = () => {
// // //     if (currentPage > 1) {
// // //       setCurrentPage(currentPage - 2);
// // //     }
// // //   };

// // //   return (
// // //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// // //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// // //         Visitation Books
// // //       </h1>

// // //       <div className="flex justify-end">
// // //         <X />
// // //       </div>

// // //       <div className="relative grid grid-cols-1 justify-center items-center">
// // //         {/* Livre avec deux pages par ligne */}
// // //         <div className="relative bg-[#C6CACA] w-[1000px] h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// // //           <div
// // //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// // //             style={{
// // //               transform: `translateX(-${
// // //                 Math.floor((currentPage - 1) / 2) * 100
// // //               }%)`,
// // //             }}
// // //           >
// // //             {/* Générer les paires de pages */}
// // //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// // //               (_, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="w-full flex-none p-10 flex justify-between items-center"
// // //                 >
// // //                   {/* Page de gauche */}
// // //                   <div className="w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
// // //                     <p className="text-center">
// // //                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
// // //                       consectetur adipisicing elit. Iure sequi ratione soluta
// // //                       ea, laborum sint hic quas nobis fugiat optio odit
// // //                       doloribus quae beatae molestiae nulla suscipit commodi
// // //                       similique quibusdam. Lorem ipsum dolor sit amet
// // //                       consectetur adipisicing elit. Iure sequi ratione soluta
// // //                       ea, laborum sint hic quas nobis fugiat optio odit
// // //                       doloribus quae beatae molestiae nulla suscipit commodi
// // //                       similique quibusdam. Lorem ipsum dolor sit amet
// // //                       consectetur adipisicing elit. Iure sequi ratione soluta
// // //                       ea, laborum sint hic quas nobis fugiat optio odit
// // //                       doloribus quae beatae molestiae nulla suscipit commodi
// // //                       similique quibusdam.
// // //                     </p>
// // //                   </div>

// // //                   {/* Page de droite */}
// // //                   {totalPages > index * 2 + 1 && (
// // //                     <div className="w-1/2 p-10 h-full flex justify-center items-center">
// // //                       <p className="text-center">
// // //                         Page {index * 2 + 2}: Lorem ipsum dolor sit amet
// // //                         consectetur, adipisicing elit. Error ab, asperiores eius
// // //                         unde non reprehenderit ex explicabo architecto totam
// // //                         dignissimos, exercitationem, eligendi voluptas hic
// // //                         repudiandae dolorum necessitatibus nesciunt officia
// // //                         libero.
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )
// // //             )}
// // //           </div>

// // //           {/* Bouton Next */}
// // //           <div className="absolute right-2 bottom-2">
// // //             <Button
// // //               onClick={goToNextPage}
// // //               disabled={currentPage >= totalPages - 1}
// // //               className="flex items-center"
// // //             >
// // //               <img src="/images/r-r.svg" width={50} height={50} />
// // //             </Button>
// // //           </div>

// // //           {/* Bouton Previous */}
// // //           <div className="absolute left-2 bottom-2">
// // //             <Button
// // //               onClick={goToPrevPage}
// // //               disabled={currentPage === 1}
// // //               className="flex items-center"
// // //             >
// // //               <img
// // //                 src="/images/r-r.svg"
// // //                 width={50}
// // //                 className="rotate-90"
// // //                 height={50}
// // //               />
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";
// // import { useContext, useState } from "react";
// // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // import { Button } from "#components/ui/button";
// // import { AppContext } from "#app/provider";
// // import { useSearchParams } from "next/navigation";

// // export default function Page({ totalPages = 10 }) {
// //   const [currentPage, setCurrentPage] = useState(1);
// //    const { isMe } = useContext(AppContext);
// //    const searchParams = useSearchParams();
// //    const selectId = searchParams?.get("token");

// //    // Use mutable structures and handle edge cases
// //    const bookDetails =
// //      isMe?.book_purchases?.find((b) => b.id === selectId) || {};
// //    const bookLength = isMe?.book_purchases?.length || 0;


// //   // Fonction pour avancer de deux pages
// //   const goToNextPage = () => {
// //     if (currentPage < totalPages - 1) {
// //       setCurrentPage(currentPage + 2);
// //     }
// //   };

// //   // Fonction pour reculer de deux pages
// //   const goToPrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 2);
// //     }
// //   };
// // const contenu = bookDetails.guests
// //   return (
// //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// //         Visitation Books
// //       </h1>

// //       <div className="flex justify-end">
// //         <X />
// //       </div>

// //       <div className="relative grid grid-cols-1 justify-center items-center">
// //         {/* Livre avec deux pages sur grand écran et une page sur petit écran */}
// //         <div className="relative bg-[#C6CACA] w-full h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //           <div
// //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// //             style={{
// //               transform: `translateX(-${
// //                 Math.floor(
// //                   (currentPage - 1) / (window.innerWidth < 768 ? 1 : 2)
// //                 ) * 100
// //               }%)`,
// //             }}
// //           >
// //             {/* Générer les pages (une par colonne sur mobile, deux par ligne sur grand écran) */}
// //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// //               (_, index) => (
// //                 <div
// //                   key={index}
// //                   className="w-full flex-none p-10 flex justify-between items-center"
// //                 >
// //                   {/* Page gauche ou page seule sur mobile */}
// //                   <div className="w-full md:w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
// //                     <p className="text-center">
// //                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
// //                       consectetur adipisicing elit. Iure sequi ratione soluta
// //                       ea, laborum sint hic quas nobis fugiat optio odit
// //                       doloribus quae beatae molestiae nulla suscipit commodi
// //                       similique quibusdam. Lorem ipsum dolor sit amet
// //                       consectetur adipisicing elit. Iure sequi ratione soluta
// //                       ea, laborum sint hic quas nobis fugiat optio odit
// //                       doloribus quae beatae molestiae nulla suscipit commodi
// //                       similique quibusdam.
// //                     </p>
// //                   </div>

// //                   {/* Page droite */}
// //                   {totalPages > index * 2 + 1 && (
// //                     <div className="hidden md:flex w-1/2 p-10 h-full justify-center items-center">
// //                       <p className="text-center">
// //                         Page {index * 2 + 2}: Lorem ipsum dolor sit amet
// //                         consectetur, adipisicing elit. Error ab, asperiores eius
// //                         unde non reprehenderit ex explicabo architecto totam
// //                         dignissimos, exercitationem, eligendi voluptas hic
// //                         repudiandae dolorum necessitatibus nesciunt officia
// //                         libero.
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               )
// //             )}
// //           </div>

// //           {/* Bouton Next */}
// //           <div className="absolute right-2 bottom-2">
// //             <Button
// //               onClick={goToNextPage}
// //               disabled={currentPage >= totalPages - 1}
// //               className="flex items-center"
// //             >
// //               <img src="/images/r-r.svg" width={50} height={50} />
// //             </Button>
// //           </div>

// //           {/* Bouton Previous */}
// //           <div className="absolute left-2 bottom-2">
// //             <Button
// //               onClick={goToPrevPage}
// //               disabled={currentPage === 1}
// //               className="flex items-center"
// //             >
// //               <img
// //                 src="/images/r-r.svg"
// //                 width={50}
// //                 className="rotate-90"
// //                 height={50}
// //               />
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import { useContext, useState } from "react";
// import { ArrowLeft, ArrowRight, X } from "lucide-react";
// import { Button } from "#components/ui/button";
// import { AppContext } from "#app/provider";
// import { useSearchParams } from "next/navigation";
// import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
// // import { Avatar } from "@radix-ui/react-avatar";

// // Assuming this is your guest data
// const guests = [
//   {
//     id: "4af1d95e-35e4-47e7-898f-da629b0cfbe4",
//     guest_picture: null,
//     guest_name: "Jacques Bruno",
//     guest_address: "Togoudo",
//     guest_email: "jacquesbruno@gmail.com",
//     special_notes: "Mes sincères condoléances à la famille du défunt",
//     custom_field_video_25: null,
//     custom_field_video_50: null,
//   },
//   {
//     id: "b7981647-bdf1-432d-a308-3b12d11fc18a",
//     guest_picture: null,
//     guest_name: "Romuald Allognon",
//     guest_address: "France",
//     guest_email: "allognon@gmail.com",
//     special_notes: "Rest In Peace Goat",
//     custom_field_video_25: null,
//     custom_field_video_50: null,
//   },
//   // Add more guests here as needed
// ];

// // export default function Page() {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const guestsPerPage = 4; // 4 guests per page
// //      const { isMe } = useContext(AppContext);
// //      const searchParams = useSearchParams();
// //      const selectId = searchParams?.get("token");

// //      // Use mutable structures and handle edge cases
// //      const bookDetails =
// //        isMe?.book_purchases?.find((b) => b.id === selectId) || {};
// //     //  const bookLength = isMe?.book_purchases?.length || 0;
// // bookDetails && console.log(bookDetails?.guests)
// //   // Paginate guests data
// //   // const guests= bookDetails ?  bookDetails?.guests:[]
// //   const startIndex = (currentPage - 1) * guestsPerPage;
// //   const endIndex = startIndex + guestsPerPage;
// //   const currentGuests =
// //     bookDetails?.guests && bookDetails?.guests?.slice(startIndex, endIndex);
// //   const totalPages = Math.ceil(guests?.length / guestsPerPage);

// //   const goToNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const goToPrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// //         Visitation Books - Page {currentPage}
// //       </h1>

// //       <div className="flex justify-end">
// //         <X />
// //       </div>

// //       <div className="relative grid grid-cols-1 justify-center items-center">
// //         {/* Display the guest data */}
// //         <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //           <div className="w-full h-full flex flex-col transition-transform duration-500 ease-in-out">
// //             {currentGuests.map((guest, index) => (
// //               <div
// //                 key={guest.id}
// //                 className={`w-full p-10 ${
// //                   index % 2 === 0 ? "border-r" : ""
// //                 } border-gray-500 flex justify-center items-center`}
// //               >
// //                 <p className="text-center">
// //                   <strong>Name:</strong> {guest.guest_name} <br />
// //                   <strong>Address:</strong> {guest.guest_address} <br />
// //                   <strong>Email:</strong> {guest.guest_email} <br />
// //                   <strong>Special Notes:</strong> {guest.special_notes} <br />
// //                 </p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Button Next */}
// //           <div className="absolute right-2 bottom-2">
// //             <Button
// //               onClick={goToNextPage}
// //               disabled={currentPage >= totalPages}
// //               className="flex items-center"
// //             >
// //               Next <ArrowRight className="ml-2" />
// //             </Button>
// //           </div>

// //           {/* Button Previous */}
// //           <div className="absolute left-2 bottom-2">
// //             <Button
// //               onClick={goToPrevPage}
// //               disabled={currentPage === 1}
// //               className="flex items-center"
// //             >
// //               <ArrowLeft className="mr-2" /> Previous
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Page() {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const guestsPerPage = 4; // 4 guests per page
// //   const { isMe } = useContext(AppContext);
// //   const searchParams = useSearchParams();
// //   const selectId = searchParams?.get("token");

// //   // Use mutable structures and handle edge cases
// //   const bookDetails =
// //     isMe?.book_purchases?.find((b) => b.id === selectId) || {};

// //   // Vérification que bookDetails.guests existe et n'est pas vide
// //   const guests = bookDetails?.guests || [];

// //   // Pagination
// //   const startIndex = (currentPage - 1) * guestsPerPage;
// //   const endIndex = startIndex + guestsPerPage;
// //   const currentGuests = guests.slice(startIndex, endIndex);
// //   const totalPages = Math.ceil(guests.length / guestsPerPage);

// //   const goToNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const goToPrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// //         Visitation Books - Page {currentPage}
// //       </h1>

// //       <div className="flex justify-end">
// //         <X />
// //       </div>

// //       <div className="relative grid grid-cols-1 justify-center items-center">
// //         {/* Si guests est vide, afficher un message */}
// //         {guests.length === 0 ? (
// //           <p className="text-center text-gray-500">No guests available.</p>
// //         ) : (
// //           <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //             <div className="w-full h-full flex flex-col transition-transform duration-500 ease-in-out">
// //               {currentGuests.map((guest, index) => (
// //                 <div
// //                   key={guest.id}
// //                   className={`w-full p-10 ${
// //                     index % 2 === 0 ? "border-r" : ""
// //                   } border-gray-500 flex justify-center items-center`}
// //                 >
// //                   <p className="text-center">
// //                     <strong>Name:</strong> {guest.guest_name} <br />
// //                     <strong>Address:</strong> {guest.guest_address} <br />
// //                     <strong>Email:</strong> {guest.guest_email} <br />
// //                     <strong>Special Notes:</strong> {guest.special_notes} <br />
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Button Next */}
// //             <div className="absolute right-2 bottom-2">
// //               <Button
// //                 onClick={goToNextPage}
// //                 disabled={currentPage >= totalPages}
// //                 className="flex items-center"
// //               >
// //                 Next <ArrowRight className="ml-2" />
// //               </Button>
// //             </div>

// //             {/* Button Previous */}
// //             <div className="absolute left-2 bottom-2">
// //               <Button
// //                 onClick={goToPrevPage}
// //                 disabled={currentPage === 1}
// //                 className="flex items-center"
// //               >
// //                 <ArrowLeft className="mr-2" /> Previous
// //               </Button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useContext, useState } from "react";
// // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // import { Button } from "#components/ui/button";
// // import { AppContext } from "#app/provider";
// // import { useSearchParams } from "next/navigation";

// // export default function Page({ totalPages = 10 }) {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const { isMe } = useContext(AppContext);
// //   const searchParams = useSearchParams();
// //   const selectId = searchParams?.get("token");

// //   // Use mutable structures and handle edge cases
// //   const bookDetails =
// //     isMe?.book_purchases?.find((b) => b.id === selectId) || {};
// //   const guests = bookDetails.guests || []; // Récupération des invités
// // console.log(guests)
// //   // Fonction pour avancer de deux pages
// //   const goToNextPage = () => {
// //     if (currentPage < totalPages - 1) {
// //       setCurrentPage(currentPage + 2);
// //     }
// //   };

// //   // Fonction pour reculer de deux pages
// //   const goToPrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 2);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// //         Visitation Books
// //       </h1>

// //       <div className="flex justify-end">
// //         <X />
// //       </div>

// //       <div className="relative grid grid-cols-1 justify-center items-center">
// //         {/* Livre avec deux pages sur grand écran et une page sur petit écran */}
// //         <div className="relative bg-[#C6CACA] w-full h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //           <div
// //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// //             style={{
// //               transform: `translateX(-${
// //                 Math.floor(
// //                   (currentPage - 1) / (window.innerWidth < 768 ? 1 : 2)
// //                 ) * 100
// //               }%)`,
// //             }}
// //           >
// //             {/* Générer les pages (une par colonne sur mobile, deux par ligne sur grand écran) */}
// //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// //               (_, index) => (
// //                 <div
// //                   key={index}
// //                   className="w-full flex-none p-10 flex justify-between items-center"
// //                 >
// //                   {/* Page gauche ou page seule sur mobile */}
// //                   <div className="w-full md:w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
// //                     {/* Page {index * 2 + 1}:{" "} */}
// //                     <div className="flex flex-col gap-4">
// //                       <div className="bg-gray-100 p-4 mr-8 flex gap-4  rounded-lg">
// //                         <div>
// //                           <Avatar>
// //                             <AvatarImage
// //                               src={guests[index * 2]?.guest_name}
// //                               alt="@shadcn"
// //                             />
// //                             <AvatarFallback className="bg-slate-400">
// //                               {guests[index * 2]?.guest_name.slice(0, 2)}
// //                             </AvatarFallback>
// //                           </Avatar>
// //                         </div>
// //                         <div>
// //                           <h5 className="font-bold">
// //                             {guests[index * 2]?.guest_name}
// //                           </h5>
// //                           <p>{guests[index * 2]?.special_notes}</p>
// //                         </div>
// //                       </div>
// //                       <div className="bg-gray-100 ml-8 p-4 flex gap-4  rounded-lg">
// //                         <div>
// //                           <Avatar>
// //                             <AvatarImage
// //                               src={guests[index * 2 + 1]?.guest_name}
// //                               alt="@shadcn"
// //                             />
// //                             <AvatarFallback className="bg-slate-400">
// //                               {guests[index * 2 + 1]?.guest_name.slice(0, 2)}
// //                             </AvatarFallback>
// //                           </Avatar>
// //                         </div>
// //                         <div>
// //                           <h5 className="font-bold">
// //                             {guests[index * 2 + 1]?.guest_name}
// //                           </h5>
// //                           <p>{guests[index * 2 + 1]?.special_notes}</p>
// //                         </div>
// //                       </div>
// //                       <div className="bg-gray-100 p-4 mr-8 flex gap-4  rounded-lg">
// //                         <div>
// //                           <Avatar>
// //                             <AvatarImage
// //                               src={guests[index * 2 + 2]?.guest_name}
// //                               alt="@shadcn"
// //                             />
// //                             <AvatarFallback className="bg-slate-400">
// //                               {guests[index * 2 + 2]?.guest_name.slice(0, 2)}
// //                             </AvatarFallback>
// //                           </Avatar>
// //                         </div>
// //                         <div>
// //                           <h5 className="font-bold">
// //                             {guests[index * 2 + 2]?.guest_name}
// //                           </h5>
// //                           <p>{guests[index * 2 + 2]?.special_notes}</p>
// //                         </div>
// //                       </div>
// //                       <div className="bg-gray-100 ml-8 p-4 flex gap-4  rounded-lg">
// //                         <div>
// //                           <Avatar>
// //                             <AvatarImage
// //                               src={guests[index * 2 + 3]?.guest_name}
// //                               alt="@shadcn"
// //                             />
// //                             <AvatarFallback className="bg-slate-400">
// //                               {guests[index * 2 + 3]?.guest_name.slice(0, 2)}
// //                             </AvatarFallback>
// //                           </Avatar>
// //                         </div>
// //                         <div>
// //                           <h5 className="font-bold">
// //                             {guests[index * 2 + 3]?.guest_name}
// //                           </h5>
// //                           <p>{guests[index * 2 + 3]?.special_notes}</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     {/* Afficher le nom de l'invité */}
// //                   </div>

// //                   {/* Page droite */}
// //                   {totalPages > index * 2 + 1 && (
// //                     <div className="hidden md:flex w-1/2 p-10 h-full justify-center items-center">
// //                       <div className="flex flex-col gap-4">
// //                         <div className="bg-gray-100 p-4 mr-8 flex gap-4  rounded-lg">
// //                           <div>
// //                             <Avatar>
// //                               <AvatarImage
// //                                 src={guests[index * 2]?.guest_name}
// //                                 alt="@shadcn"
// //                               />
// //                               <AvatarFallback className="bg-slate-400">
// //                                 {guests[index * 2]?.guest_name.slice(0, 2)}
// //                               </AvatarFallback>
// //                             </Avatar>
// //                           </div>
// //                           <div>
// //                             <h5 className="font-bold">
// //                               {guests[index * 2]?.guest_name}
// //                             </h5>
// //                             <p>{guests[index * 2]?.special_notes}</p>
// //                           </div>
// //                         </div>
// //                         <div className="bg-gray-100 ml-8 p-4 flex gap-4  rounded-lg">
// //                           <div>
// //                             <Avatar>
// //                               <AvatarImage
// //                                 src={guests[index * 2 + 4]?.guest_name}
// //                                 alt="@shadcn"
// //                               />
// //                               <AvatarFallback className="bg-slate-400">
// //                                 {guests[index * 2 + 4]?.guest_name.slice(0, 2)}
// //                               </AvatarFallback>
// //                             </Avatar>
// //                           </div>
// //                           <div>
// //                             <h5 className="font-bold">
// //                               {guests[index * 2 + 4]?.guest_name}
// //                             </h5>
// //                             <p>{guests[index * 2 + 4]?.special_notes}</p>
// //                           </div>
// //                         </div>
// //                         <div className="bg-gray-100 p-4 mr-8 flex gap-4  rounded-lg">
// //                           <div>
// //                             <Avatar>
// //                               <AvatarImage
// //                                 src={guests[index * 2 + 5]?.guest_name}
// //                                 alt="@shadcn"
// //                               />
// //                               <AvatarFallback className="bg-slate-400">
// //                                 {guests[index * 2 + 5]?.guest_name.slice(0, 2)}
// //                               </AvatarFallback>
// //                             </Avatar>
// //                           </div>
// //                           <div>
// //                             <h5 className="font-bold">
// //                               {guests[index * 2 + 6]?.guest_name}
// //                             </h5>
// //                             <p>{guests[index * 2 + 6]?.special_notes}</p>
// //                           </div>
// //                         </div>
// //                         <div className="bg-gray-100 ml-8 p-4 flex gap-4  rounded-lg">
// //                           <div>
// //                             <Avatar>
// //                               <AvatarImage
// //                                 src={guests[index * 2 + 7]?.guest_name}
// //                                 alt="@shadcn"
// //                               />
// //                               <AvatarFallback className="bg-slate-400">
// //                                 {guests[index * 2 + 7]?.guest_name.slice(0, 2)}
// //                               </AvatarFallback>
// //                             </Avatar>
// //                           </div>
// //                           <div>
// //                             <h5 className="font-bold">
// //                               {guests[index * 2 + 7]?.guest_name}
// //                             </h5>
// //                             <p>{guests[index * 2 + 7]?.special_notes}</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               )
// //             )}
// //           </div>

// //           {/* Bouton Next */}
// //           <div className="absolute right-2 bottom-2">
// //             <Button
// //               onClick={goToNextPage}
// //               disabled={currentPage >= totalPages - 1}
// //               className="flex items-center"
// //             >
// //               <ArrowRight className="w-6 h-6" />
// //             </Button>
// //           </div>

// //           {/* Bouton Previous */}
// //           <div className="absolute left-2 bottom-2">
// //             <Button
// //               onClick={goToPrevPage}
// //               disabled={currentPage === 1}
// //               className="flex items-center"
// //             >
// //               <ArrowLeft className="w-6 h-6 rotate-90" />
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// export default function Page({ totalPages = 10 }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { isMe } = useContext(AppContext);
//   const searchParams = useSearchParams();
//   const selectId = searchParams?.get("token");

//   const bookDetails =
//     isMe?.book_purchases?.find((b) => b.id === selectId) || {};
//   const guests = bookDetails.guests || []; // Get guests

//   const goToNextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 2);
//     }
//   };

//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 2);
//     }
//   };

//   const getGuestsForPage = (page) => {
//     const startIndex = (page - 1) * 4; // 4 guests per page
//     return guests.slice(startIndex, startIndex + 4);
//   };

//   return (
//     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
//       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
//         Visitation Books
//       </h1>
//       <div className="flex justify-end">
//         <X />
//       </div>
//       <div className="relative grid grid-cols-1 justify-center items-center">
//         <div className="relative bg-[#C6CACA] w-full h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
//           <div
//             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
//             style={{
//               transform: `translateX(-${
//                 Math.floor((currentPage - 1) / 1) * 100
//               }%)`,
//             }}
//           >
//             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
//               (_, index) => (
//                 <div
//                   key={index}
//                   className="w-full flex-none p-10 flex justify-between items-center"
//                 >
//                   {/* Left Page */}
//                   <div className="w-full md:w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
//                     <div className="flex flex-col gap-4">
//                       {getGuestsForPage(index + 1).map(
//                         (guest, guestIndex) =>
//                           guest && (
//                             <div
//                               key={guestIndex}
//                               className={`bg-gray-100 ${
//                                 guestIndex % 2 === 0 ? "" : ""
//                               } p-4 flex gap-4 rounded-lg`}
//                             >
//                               <div>
//                                 <Avatar>
//                                   <AvatarImage
//                                     src={guest.guest_name}
//                                     alt={guest.guest_name}
//                                   />
//                                   <AvatarFallback className="bg-slate-400">
//                                     {guest.guest_name.slice(0, 2)}
//                                   </AvatarFallback>
//                                 </Avatar>
//                               </div>
//                               <div>
//                                 <h5 className="font-bold">
//                                   {guest.guest_name}
//                                 </h5>
//                                 <p>{guest.special_notes}</p>
//                               </div>
//                             </div>
//                           )
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Page (if applicable) */}
//                   {totalPages > index * 2 + 1 && (
//                     <div className="hidden md:flex w-1/2 p-10 h-full justify-center items-center">
//                       <div className="flex justify-between flex-col gap-4">
//                         {getGuestsForPage(index + 2).map(
//                           (guest, guestIndex) =>
//                             guest && (
//                               <div
//                                 key={guestIndex}
//                                 className={`bg-gray-100 ${
//                                   guestIndex % 2 === 0 ? "" : ""
//                                 } p-4 flex gap-4 rounded-lg`}
//                               >
//                                 {guestIndex % 2 === 0 && (
//                                   <div>
//                                     <Avatar>
//                                       <AvatarImage
//                                         src={guest.guest_name}
//                                         alt={guest.guest_name}
//                                       />
//                                       <AvatarFallback className="bg-slate-400">
//                                         {guest.guest_name.slice(0, 2)}
//                                       </AvatarFallback>
//                                     </Avatar>
//                                   </div>
//                                 )}

//                                 <div>
//                                   <h5 className="font-bold">
//                                     {guest.guest_name}
//                                   </h5>
//                                   <p>{guest.special_notes}</p>
//                                 </div>
//                                 {guestIndex % 2 !== 0 && (
//                                   <div>
//                                     <Avatar>
//                                       <AvatarImage
//                                         src={guest.guest_name}
//                                         alt={guest.guest_name}
//                                       />
//                                       <AvatarFallback className="bg-slate-400">
//                                         {guest.guest_name.slice(0, 2)}
//                                       </AvatarFallback>
//                                     </Avatar>
//                                   </div>
//                                 )}
//                               </div>
//                             )
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )
//             )}
//           </div>

//           {/* Next Button */}
//           <div className="absolute right-2 bottom-2">
//             <Button
//               onClick={goToNextPage}
//               disabled={currentPage >= totalPages - 1}
//               className="flex items-center"
//             >
//               <ArrowRight className="w-6 h-6" />
//             </Button>
//           </div>

//           {/* Previous Button */}
//           <div className="absolute left-2 bottom-2">
//             <Button
//               onClick={goToPrevPage}
//               disabled={currentPage === 1}
//               className="flex items-center"
//             >
//               <ArrowLeft className="w-6 h-6 rotate-90" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
