import * as React from "react"
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mx-6 grid h-screen grid-rows-5">

        <h2 className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-transparent bg-clip-text text-center text-6xl leading-relaxed font-black flex items-end justify-center row-start-2">
          iPlayMusic
        </h2>
        <Dashboard />
      </main>
    </NextUIProvider>
  );
}
