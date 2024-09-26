import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#111827] text-white">
      <div className="grid lg:grid-cols-3 grid-cols-1 px-20 gap-10 py-7">
        <div className="flex flex-col space-y-7">
          <img src="/images/footer.svg" width={100} height={100} />
          <p className="text-white font-[22px]">
            In everything we do, we believe in transforming the way people do
            theatre in the world. So venue’s can rent their space. Playwrights
            can get their plays produced. Actors and Production team members can
            find work. Theatre companies can focus on producing a quality play
            and theatregoers have the tools to make an informed decision when
            going to see a play. We just happen to do all of this for you, in an
            app called MyUpstage
          </p>
        </div>
        <div className="text-white mt-2">
          <p className="font-bold text-lg">Products</p>
          <div className="flex flex-col mt-5 gap-5 mx-auto">
            <Link href="">About us</Link>
            <Link href="">How it works</Link>
            <Link href="">visitation book history</Link>
            <Link href="">Contact us</Link>
          </div>
        </div>
        <div className="text-white mt-2">
          <p className="font-bold text-lg">Company</p>
          <div className="flex flex-col mt-5 gap-5 mx-auto">
            <Link href="">Privacy</Link>
            <Link href="">History</Link>
            <Link href="">Support</Link>
            <Link href="">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
