// // // "use client";
// // // import { useState } from "react";
// // // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // // import { Button } from "#components/ui/button";

// // // export default function Page({ totalPages = 10 }) {
// // //   const [currentPage, setCurrentPage] = useState(1);

// // //   // Fonction pour changer la page
// // //   const goToNextPage = () => {
// // //     if (currentPage < totalPages) {
// // //       setCurrentPage(currentPage + 1);
// // //     }
// // //   };

// // //   const goToPrevPage = () => {
// // //     if (currentPage > 1) {
// // //       setCurrentPage(currentPage - 1);
// // //     }
// // //   };

// // //   return (
// // //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// // //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// // //         Visitation Books - Page {currentPage}
// // //       </h1>

// // //       <div className="flex justify-end">
// // //         <X />
// // //       </div>

// // //       <div className="relative grid grid-cols-1 justify-center items-center">
// // //         {/* Livre avec effet de défilement */}
// // //         <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// // //           <div
// // //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// // //             style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
// // //           >
// // //             {/* Générer les pages */}
// // //             {Array.from({ length: totalPages }).map((_, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="w-full flex-none p-10 border-r border-r-gray-500 flex justify-center items-center"
// // //               >
// // //                 <p className="text-center">
// // //                   Page {index + 1}: Lorem ipsum dolor sit amet consectetur
// // //                   adipisicing elit. Iure sequi ratione soluta ea, laborum sint
// // //                   hic quas nobis fugiat optio odit doloribus quae beatae
// // //                   molestiae nulla suscipit commodi similique quibusdam.
// // //                 </p>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Bouton Next */}
// // //           <div className="absolute right-2 bottom-2">
// // //             <Button
// // //               onClick={goToNextPage}
// // //               disabled={currentPage === totalPages}
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



// // "use client";
// // import { useState } from "react";
// // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // import { Button } from "#components/ui/button";

// // export default function Page({ totalPages = 10 }) {
// //   const [currentPage, setCurrentPage] = useState(1);

// //   // Fonction pour avancer de deux pages (car deux pages sont affichées en même temps)
// //   const goToNextPage = () => {
// //     if (currentPage < totalPages - 1) {
// //       setCurrentPage(currentPage + 2);
// //     }
// //   };

// //   const goToPrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 2);
// //     }
// //   };

// //   return (
// //     <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
// //       <h1 className="text-[#383838] text-[30px] font-bold pt-20">
// //         Visitation Books - Pages {currentPage} & {currentPage + 1}
// //       </h1>

// //       <div className="flex justify-end">
// //         <X />
// //       </div>

// //       <div className="relative grid grid-cols-1 justify-center items-center">
// //         {/* Livre avec deux pages par ligne */}
// //         <div className="relative bg-[#C6CACA] w-[1000px] h-[500px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //           <div
// //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// //             style={{
// //               transform: `translateX(-${
// //                 Math.floor((currentPage - 1) / 2) * 100
// //               }%)`,
// //             }}
// //           >
// //             {/* Générer les paires de pages */}
// //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// //               (_, index) => (
// //                 <div
// //                   key={index}
// //                   className="w-full flex-none p-10 flex justify-between items-center"
// //                 >
// //                   {/* Page de gauche */}
// //                   <div className="w-1/2 p-10 border-r border-r-gray-500 flex justify-center items-center">
// //                     <p className="text-center">
// //                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
// //                       consectetur adipisicing elit. Iure sequi ratione soluta
// //                       ea, laborum sint hic quas nobis fugiat optio odit
// //                       doloribus quae beatae molestiae nulla suscipit commodi
// //                       similique quibusdam.
// //                     </p>
// //                   </div>

// //                   {/* Page de droite */}
// //                   {totalPages > index * 2 + 1 && (
// //                     <div className="w-1/2 p-10 flex justify-center items-center">
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
// //               Next <ArrowRight className="ml-2" />
// //             </Button>
// //           </div>

// //           {/* Bouton Previous */}
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





// // "use client";
// // import { useState } from "react";
// // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // import { Button } from "#components/ui/button";

// // export default function Page({ totalPages = 10 }) {
// //   const [currentPage, setCurrentPage] = useState(1);

// //   // Fonction pour avancer de deux pages
// //   const goToNextPage = () => {
// //     if (currentPage < totalPages - 1) {
// //       setCurrentPage(currentPage + 2);
// //     }
// //   };

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
// //         {/* Livre avec deux pages par ligne */}
// //         <div className="relative bg-[#C6CACA] w-[1000px] h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
// //           <div
// //             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
// //             style={{
// //               transform: `translateX(-${
// //                 Math.floor((currentPage - 1) / 2) * 100
// //               }%)`,
// //             }}
// //           >
// //             {/* Générer les paires de pages */}
// //             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
// //               (_, index) => (
// //                 <div
// //                   key={index}
// //                   className="w-full flex-none p-10 flex justify-between items-center"
// //                 >
// //                   {/* Page de gauche */}
// //                   <div className="w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
// //                     <p className="text-center">
// //                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
// //                       consectetur adipisicing elit. Iure sequi ratione soluta
// //                       ea, laborum sint hic quas nobis fugiat optio odit
// //                       doloribus quae beatae molestiae nulla suscipit commodi
// //                       similique quibusdam. Lorem ipsum dolor sit amet
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

// //                   {/* Page de droite */}
// //                   {totalPages > index * 2 + 1 && (
// //                     <div className="w-1/2 p-10 h-full flex justify-center items-center">
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
// import { useState } from "react";
// import { ArrowLeft, ArrowRight, X } from "lucide-react";
// import { Button } from "#components/ui/button";

// export default function Page({ totalPages = 10 }) {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Fonction pour avancer de deux pages
//   const goToNextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 2);
//     }
//   };

//   // Fonction pour reculer de deux pages
//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 2);
//     }
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
//         {/* Livre avec deux pages sur grand écran et une page sur petit écran */}
//         <div className="relative bg-[#C6CACA] w-full h-[700px] mx-auto flex justify-between border border-gray-700 overflow-hidden">
//           <div
//             className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
//             style={{
//               transform: `translateX(-${
//                 Math.floor(
//                   (currentPage - 1) / (window.innerWidth < 768 ? 1 : 2)
//                 ) * 100
//               }%)`,
//             }}
//           >
//             {/* Générer les pages (une par colonne sur mobile, deux par ligne sur grand écran) */}
//             {Array.from({ length: Math.ceil(totalPages / 2) }).map(
//               (_, index) => (
//                 <div
//                   key={index}
//                   className="w-full flex-none p-10 flex justify-between items-center"
//                 >
//                   {/* Page gauche ou page seule sur mobile */}
//                   <div className="w-full md:w-1/2 p-10 border-r border-r-gray-500 h-full flex justify-center items-center">
//                     <p className="text-center">
//                       Page {index * 2 + 1}: Lorem ipsum dolor sit amet
//                       consectetur adipisicing elit. Iure sequi ratione soluta
//                       ea, laborum sint hic quas nobis fugiat optio odit
//                       doloribus quae beatae molestiae nulla suscipit commodi
//                       similique quibusdam. Lorem ipsum dolor sit amet
//                       consectetur adipisicing elit. Iure sequi ratione soluta
//                       ea, laborum sint hic quas nobis fugiat optio odit
//                       doloribus quae beatae molestiae nulla suscipit commodi
//                       similique quibusdam.
//                     </p>
//                   </div>

//                   {/* Page droite */}
//                   {totalPages > index * 2 + 1 && (
//                     <div className="hidden md:flex w-1/2 p-10 h-full justify-center items-center">
//                       <p className="text-center">
//                         Page {index * 2 + 2}: Lorem ipsum dolor sit amet
//                         consectetur, adipisicing elit. Error ab, asperiores eius
//                         unde non reprehenderit ex explicabo architecto totam
//                         dignissimos, exercitationem, eligendi voluptas hic
//                         repudiandae dolorum necessitatibus nesciunt officia
//                         libero.
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               )
//             )}
//           </div>

//           {/* Bouton Next */}
//           <div className="absolute right-2 bottom-2">
//             <Button
//               onClick={goToNextPage}
//               disabled={currentPage >= totalPages - 1}
//               className="flex items-center"
//             >
//               <img src="/images/r-r.svg" width={50} height={50} />
//             </Button>
//           </div>

//           {/* Bouton Previous */}
//           <div className="absolute left-2 bottom-2">
//             <Button
//               onClick={goToPrevPage}
//               disabled={currentPage === 1}
//               className="flex items-center"
//             >
//               <img
//                 src="/images/r-r.svg"
//                 width={50}
//                 className="rotate-90"
//                 height={50}
//               />
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
