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
  const paidBook = isMe?.book_purchases?.filter(
    (f: { payment_status: boolean }) => f.payment_status === true
  );
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
          <div className="border-b-2 border-b-[#f00] text-[20px] font-bold">
            Visitation books
          </div>
          <div
            className="text-[20px] cursor-pointer font-bold"
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
          Visitation books
        </div>
        <Button
          onClick={() => router.push("/admin/visitation-books/create-book")}
          className="bg-[#f00] text-lg text-white px-7 py-3"
        >
          Create Visitation Book
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
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div // @ts-ignore
                              // src={`http://34.44.9.82${validBook?.book?.cover}`}
                              // width={500}
                              // className="relative z-10"
                              style={{
                                //@ts-ignore
                                backgroundImage: `url(http://34.44.9.82${book?.book?.cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className="relative z-10  h-[340px]"
                            >
                              <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                {book?.deceased_name && (
                                  <p className="text-[20px] pt-5 pb-5 font-bold text-[#575252]">
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
                                      alt={`Image of ${"ok"}`}
                                    />
                                  </div>
                                )}
                                {book?.date_of_birth && (
                                  <p className="text-[12px] mt-2 font-bold text-[#575252]">
                                    Born -{" "}
                                    {
                                      //@ts-ignore
                                      book?.date_of_birth
                                    }
                                  </p>
                                )}
                                {book?.date_of_death && (
                                  <p className="text-[12px] pb-5 font-bold text-[#575252]">
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
                      <img
                        src="/images/bady.svg"
                        className=" relative top-16"
                        alt="GOD Icon"
                      />
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
                          <CarouselItem className="md:basis-full lg:basis-1/3 basis-1/1">
                            <div // @ts-ignore
                              // src={`http://34.44.9.82${validBook?.book?.cover}`}
                              // width={500}
                              // className="relative z-10"
                              style={{
                                //@ts-ignore
                                backgroundImage: `url(http://34.44.9.82${book?.book?.cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className="relative z-10  h-[340px]"
                            >
                             <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                {book?.deceased_name && (
                                  <p className="text-[20px] pt-5 pb-5 font-bold text-[#575252]">
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
                                      alt={`Image of ${"ok"}`}
                                    />
                                  </div>
                                )}
                                {book?.date_of_birth && (
                                  <p className="text-[12px] mt-2 font-bold text-[#575252]">
                                    Born -{" "}
                                    {
                                      //@ts-ignore
                                      book?.date_of_birth
                                    }
                                  </p>
                                )}
                                {book?.date_of_death && (
                                  <p className="text-[12px] pb-5 font-bold text-[#575252]">
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
                      <img
                        src="/images/bady.svg"
                        className=" relative top-16"
                        alt="GOD Icon"
                      />
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
                className="xl:w-[1200px] lg:w-[1000px] md:w-[850px] w-[500px] "
              >
                <div className="relative top-0 left-0 mt-20">
                  <div className="relative left-50 right-50">
                    <img
                      src="/images/GOD.svg"
                      className=" absolute right-96 bottom-0 "
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
                                backgroundImage: `url(http://34.44.9.82${book?.book?.cover})`,
                                backgroundSize: "cover", // Ensures the image covers the entire div
                                backgroundPosition: "center", // Centers the image
                              }}
                              className="relative z-10  ml-20 h-[340px]"
                            >
                             <div className=" z-20 flex justify-center items-center flex-col space-y-7 ">
                                {book?.deceased_name && (
                                  <p className="text-[20px] pt-5 pb-5 font-bold text-[#575252]">
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
                                      alt={`Image of ${"ok"}`}
                                    />
                                  </div>
                                )}
                                {book?.date_of_birth && (
                                  <p className="text-[12px] mt-2 font-bold text-[#575252]">
                                    Born -{" "}
                                    {
                                      //@ts-ignore
                                      book?.date_of_birth
                                    }
                                  </p>
                                )}
                                {book?.date_of_death && (
                                  <p className="text-[12px] pb-5 font-bold text-[#575252]">
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
                      {/* <CarouselPrevious />
                  <CarouselNext /> */}
                      <img
                        src="/images/bady.svg"
                        className=" relative right-[20px] top-16 w-52"
                        alt="GOD Icon"
                      />
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
            No visitation books found
          </div>
        </div>
      )}
    </div>
  );
}
