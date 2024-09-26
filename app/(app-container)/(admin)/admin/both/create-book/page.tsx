"use client";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { isMe } = useContext(AppContext);
  const router = useRouter();
  return (
    <div className=" mx-auto text-[#383838] text-center p-7 bg-[#F8F5F5]">
      <h1 className="text-[#383838] text-center pt-20">
        Welcome {isMe?.full_name} to Visitation Book.com
      </h1>
      <div className="xl:px-20 mt-7 py-10 xl:mx-36 border-t rounded-lg shadow-md bg-[#F8F5F5]">
        <p className="font-bold text-[30px] mb-7 text-[#383838]">
          We are sorry to hear of your loss. Please follow the steps below:
        </p>
        <ul className="text-justify space-y-7 text-[20px] px-14">
          <li> 1. Please select the book cover you want to use</li>
          <li>
            2. Add Picture of the recently deceased you would like to use.
          </li>
          <li>
            3. Select which items you would like the guest to fill out in the
            book.
          </li>
          <li>
            4. Print out book Cover with QR code to scan or display on the
            screen.
          </li>
          <li>5. Please upload the pdf of the obituary</li>
          <li>
            6. Add Picture of the recently deceased you would like to use.
          </li>
          <li>
            7. Print out book Cover with QR code to scan or display on the
            screen..
          </li>
        </ul>
        <div className="flex mt-14 justify-end">
          <Button
            onClick={() => router.push("/admin/both/choose-cover")}
            className="bg-[#f00] text-white flex-end"
          >
            Next <ArrowRight className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
