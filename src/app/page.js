import * as React from "react"
import { NextUIProvider } from "@nextui-org/react";
import LoginListenBtn from "@/components/listen-login-btn";
import TouchIcon from "@/components/icons/touchLogin";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mx-6 grid h-screen grid-rows-5">

        <h2 className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-transparent bg-clip-text text-center text-6xl leading-relaxed font-black flex items-end justify-center row-start-2">
          iPlayMusic
        </h2>

        <div className=" place-self-center row-start-3">
          <LoginListenBtn value="LOG IN" className="border-black font-black" />
        </div>

        <div className="row-start-4 items-center flex flex-col justify-end gap-3">
          <div className="h-[75px] w-[75px] bg-[#FF1168]  rounded-full flex items-center justify-center">
            <TouchIcon />
          </div>
          <p>One Touch Login</p>
        </div>
      </main>
    </NextUIProvider>
  );
}
