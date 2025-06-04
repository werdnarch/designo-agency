import Header from "@/src/components/ui/Header";
import Footer from "@/src/components/ui/Footer";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full flex flex-col  lg:pt-12">
      <Header />
      <section className="flex-1 max-w-5xl mx-auto w-full">{children}</section>
      <Footer />
    </main>
  );
}
