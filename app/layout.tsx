"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DM_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { useState, Suspense } from "react"; // Importer Suspense
import { Toaster } from "react-hot-toast";
import MainNav from "#components/shared/main-nav";
import { AppProvider } from "./provider";

const fontSans = FontSans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient()); // Instantiate QueryClient

  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <MainNav>Main</MainNav>

            {/* Ajout de Suspense pour gérer les composants asynchrones */}
            <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
          </AppProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
