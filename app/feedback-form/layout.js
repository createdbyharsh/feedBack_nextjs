"use client";
import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutClient({ children }) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main className="max-w-7xl mx-auto p-8 flex flex-col items-center min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}
