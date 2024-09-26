import { Button } from '#components/ui/button';
import React from 'react'

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover  bg-[url('/images/hero-image.jpeg')]">
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#1810054D] to-[#21243C4D]"></div>
      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <p className="lg:text-[120px] text-[50px] font-extrabold text-white">
            Visitation Book
          </p>
          <p className="mt-2 lg:text-[50px] text-[20px] font-bold">
            Create a{" "}
            <span className="text-[#f00]">
              Digital Visitation and <br /> Obituary Book
            </span>{" "}
            for Your Loved One’s <br />
            Funeral
          </p>
          <Button className="bg-[#f00] mt-4   text-white rounded-full">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
