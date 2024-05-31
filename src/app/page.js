import * as React from "react"
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "@/components/dashboard";
import Script from "next/script";

export default function Home() {
  return (
    <NextUIProvider>
      <Script src="https://sdk.scdn.co/spotify-player.js"></Script>
      <main className="mx-6 h-screen flex flex-col items-center justify-center">

        <h2 className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-transparent bg-clip-text text-center text-6xl leading-relaxed font-black mb-5">
          iPlayMusic
        </h2>
        <Dashboard />
      </main>
    </NextUIProvider>
  );
}
