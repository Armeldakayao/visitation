// "use client";
// import { AppContext } from "#app/provider";
// import { Button } from "#components/ui/button";
// import { ArrowRight, X } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useContext } from "react";

// export default function Page() {
//   const { isMe } = useContext(AppContext);
//   const searchParams = useSearchParams();
//   const selectId = searchParams?.get("token")
//   const bookDetails = isMe?.book_purchases?.find((b) => b.id === selectId);
//   const bookLength = isMe?.book_purchases?.length || 0;
//   const fileImage =
//    bookDetails?.deceased_image || null;
//   const name =
//     bookDetails?.deceased_name || null;
//   const born =
//    bookDetails?.date_of_birth || null;
//   const rested =
//    bookDetails?.date_of_death || null;
//   const router = useRouter();
//   return (
//     <div className=" mx-auto text-[#383838] bg-[#F8F5F5]  p-7">
//       <h1 className="text-[#383838] text-[30px] font-bold  pt-20">
//         Visitation Books
//       </h1>

//       <div className="flex justify-end">
//         <X />
//       </div>
//       <div className="grid grid-cols-7 gap-5 bg-[#F8F5F5]">
//         <div className="grid-cols-2">
//           <div className="bg-[#C6CACA] p-7  flex flex-col justify-center items-center ">
//             <p className="text-[20px] pb-5 font-bold text-[#575252]">{name}</p>
//             <img
//               src={`http://34.27.136.91${fileImage}`}
//               width={200}
//               height={200}
//               className="rounded-lg "
//             />
//             <p className="text-[12px] mt-2 font-bold text-[#575252]">
//               Born - {born}
//             </p>
//             <p className="text-[12px] pb-5 font-bold text-[#575252]">
//               Passed - {rested}
//             </p>
//           </div>
//         </div>
//         <div className="grid-cols-5 mx-auto">
//           <div className="bg-url(bookDetails.book.cover) relative flex flex-col justify-center items-center w-[1200px] h-[1000px]">
//             <p className="text-[40px] pb-5 font-bold text-[#575252]">{name}</p>
//             <img
//               src={`http://34.27.136.91${fileImage}`}
//               width={500}
//               height={500}
//               className="rounded-lg"
//             />
//             <p className="text-[30px]  font-bold text-[#575252]">
//               Born - {born}
//             </p>
//             <p className="text-[30px] pb-5 font-bold text-[#575252]">
//               Passed - {rested}
//             </p>
//             <div
//               className="absolute bottom-0 right-0"
//               onClick={() => router.push("/admin/visitation-books/listen-book")}
//             >
//               <img src="/images/r-r.svg" width={50} height={50} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext } from "react";

export default function Page() {
  // const { isMe } = useContext(AppContext);
  // const searchParams = useSearchParams();
  // const selectId = searchParams?.get("token");
  // const bookDetails = isMe?.book_purchases?.find((b) => b.id === selectId);
  // const bookLength = isMe?.book_purchases?.length || 0;
  // const fileImage = bookDetails?.deceased_image || null;
  // const name = bookDetails?.deceased_name || null;
  // const born = bookDetails?.date_of_birth || null;
  // const rested = bookDetails?.date_of_death || null;
  const router = useRouter();
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const searchParams = useSearchParams();
  const selectId = searchParams?.get("token");

  // Use mutable structures and handle edge cases
  // @ts-ignore
  const bookDetails = isMe?.obituaries?.find((b) => b.id === selectId) || {};
  const bookLength = isMe?.book_purchases?.length || 0;

  const fileImage = bookDetails.deceased_image || "/default-image.jpg"; // Fallback image
  const name = bookDetails.deceased_name || "Unknown Name";
  const born = bookDetails.date_of_birth || "Unknown Date";
  const rested = bookDetails.date_of_death || "Unknown Date";

  if (!bookDetails) {
    return <div>No book details available.</div>;
  }

  return (
    <div className="mx-auto text-[#383838] bg-[#F8F5F5] p-7">
      <h1 className="text-[#383838] text-[30px] font-bold pt-20">Obituary</h1>

      <div className="flex justify-end">
        <X onClick={() => router.back()} className="cursor-pointer" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-7 gap-5 bg-[#F8F5F5]">
        <div className="grid-cols-2">
          <div
            style={{
              backgroundImage: `url(http://34.44.9.82${bookDetails?.book_cover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="] p-7 flex flex-col justify-center items-center"
          >
            <p className="text-[20px] pb-5 font-bold text-[#575252]">{name}</p>
            {/* <img
              src={`http://34.27.136.91${fileImage}`}
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

        <div className="grid-cols-5 mx-auto">
          <div
            style={{
              backgroundImage: `url(http://34.44.9.82${bookDetails?.book_cover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative flex flex-col justify-center items-center w-[1200px] h-[1000px]"
          >
            <p className="text-[40px] pb-5 font-bold text-[#575252]">{name}</p>
            {/* <img
              src={`http://34.44.9.82${fileImage}`}
              width={500}
              height={500}
              className="rounded-lg"
              alt={`Image of ${name}`}
            /> */}
            <p className="text-[30px] font-bold text-[#575252]">
              Born - {born}
            </p>
            <p className="text-[30px] pb-5 font-bold text-[#575252]">
              Passed - {rested}
            </p>

            <div
              className="absolute bottom-0 right-10 cursor-pointer"
              onClick={() =>
                router.push(
                  `/admin/visitation-books/listen-book?token=${bookDetails?.id}`
                )
              }
            >
              <img src="/images/r-r.svg" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
