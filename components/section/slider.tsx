// import * as React from "react";

// import { Card, CardContent } from "#/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "#/components/ui/carousel";

// export function Slider() {
//   return (
//    <div>
//      <p className="text-center text-[54px] mt-10 text-[#161010] font-bold">Visitation Book Sample</p>
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-[900px] mx-auto"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card className="border-none outline-none">
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <img src="/images/h-b2.svg" width={500} height={500} />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//    </div>
//   );
// }



"use client"

import * as React from "react";

import { Card, CardContent } from "#/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";

export function Slider() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const totalItems = 5; // The number of items in the carousel

  // Function to determine if the item is the middle one
  const isMiddleItem = (index: number) => {
    return index === activeIndex;
  };

  return (
    <div>
      <p className="text-center text-[54px] mt-10 text-[#161010] font-bold">
        Visitation Book Sample
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[900px] mx-auto"
        // @ts-ignore
        onChange={(index) => setActiveIndex(index)}
      >
        <CarouselContent>
          {Array.from({ length: totalItems }).map((_, index) => (
            <CarouselItem
              key={index}
              className={`md:basis-1/2 lg:basis-1/3 transform transition-transform duration-300 ${
                isMiddleItem(index) ? "scale-125" : "scale-100"
              }`}
            >
              <div className="p-1">
                <Card className="border-none outline-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src="/images/h-b2.svg" width={500} height={500} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
