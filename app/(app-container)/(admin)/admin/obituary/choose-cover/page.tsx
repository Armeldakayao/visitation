"use client";
import { AppContext } from "#app/provider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Page() {
  // @ts-ignore
  const { bookLists } = useContext(AppContext);
  bookLists && console.log(bookLists, "bookLists");

  const router = useRouter();

  // Helper function to chunk the book lists into groups of 4
  // @ts-ignore
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedBooks = chunkArray(bookLists, 4);
  const groupedBooksSm = chunkArray(bookLists, 2);

  return (
    <div className="bg-[#F8F5F5]">
      <div className="flex pt-16 gap-7 items-center">
        <div className="text-[20px] mx-20 font-bold text-[#504F46]">
          Choose a book cover
        </div>
      </div>
      <div className="lg:grid hidden grid-cols-7">
        <div className="col-span-5">
          <div className="relative mt-12 mx-12">
            
            {groupedBooks.map((group:any, groupIndex:any) => (
              <div key={groupIndex} className="relative mb-12">
                {/* Background image for each row of books */}
                <img
                  src="/images/both.svg"
                  className="absolute top-44 left-0 w-full h-14  object-cover"
                  alt="Background"
                />
                <div className="relative flex justify-around gap-7 mx-20">
                  {group.map((book:any, index:any) => (
                    <div
                      key={index}
                      className="cursor-pointer text-center"
                      onClick={() =>
                        router.push(
                          `/admin/visitation-books/fill-book?token=${book?.id}`
                        )
                      }
                    >
                      <img
                        src={book?.cover}
                        width={150}
                        height={150}
                        className="w-full h-auto object-cover"
                        alt={`Cover of ${book?.title}`}
                      />
                      <p className="text-black text-lg font-bold mt-6">
                        ${book?.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center col-span-2">
          <img src="/images/cover.svg" width={150} height={150} />
        </div>
      </div>
      <div className="grid lg:hidden grid-cols-7">
        <div className="col-span-7">
          <div className="relative mt-12 mx-12">
            {groupedBooksSm.map((group, groupIndex) => (
              <div key={groupIndex} className="relative mb-12">
                {/* Background image for each row of books */}
                <img
                  src="/images/both.svg"
                  className="absolute top-44 left-0 w-full h-14  object-cover"
                  alt="Background"
                />
                <div className="relative flex justify-around gap-7 mx-20">
                  {group.map((book:any, index:any) => (
                    <div
                      key={index}
                      className="cursor-pointer text-center"
                      onClick={() =>
                        router.push(
                          `/admin/visitation-books/fill-book?token=${book?.id}`
                        )
                      }
                    >
                      <img
                        src={book?.cover}
                        width={150}
                        height={150}
                        className="w-full h-auto object-cover"
                        alt={`Cover of ${book?.title}`}
                        // style={{width:"700px"}}
                      />
                      <p className="text-black text-lg font-bold mt-6">
                        ${book?.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center col-span-7">
          <img src="/images/cover.svg" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
