"use client";
import { AppProvider } from "#app/provider";
import getStripe from "#utils/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Elements stripe={getStripe()}>
      <div className="relative h-screen bg-cover   bg-[#F8F5F5]">
        <div className="z-50"> {children}</div>
      </div>
    </Elements>
  );
}
