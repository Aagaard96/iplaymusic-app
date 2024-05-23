import PageContent from "@/components/pageContent";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";
import { IoIosFastforward } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";

export default function NowPLaying() {
  return (
    <PageContent>
      <section className="flex flex-col place-content-center w-full items-center justify-center mb-20">
        <div className="relative w-full grid place-items-center">
          <Image
            src="/nowplayingwave.png"
            width={100}
            height={100}
            alt="wave"
            className="w-full absolute"
          />
          <Image
            src="/nowplayingvinyl.png"
            width={100}
            height={100}
            alt="wave"
            className="w-full"
          />
        </div>
      </section>

      <div className="capitalize">
        <div className="capitalize text-center flex flex-col gap-3 mb-5">
          <p className="font-bold text-lg">dont call me up</p>
          <p>Mabel</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#FF1168] w-full h-1 relative flex items-center">
            <span className="w-6 h-6 bg-[#FF1168]/30 absolute rounded-full flex items-center ml-20">
              <GoDotFill className="size-12 text-[#FF1168]" />
            </span>
          </div>
          <div className="flex justify-between">
            <p>0:00</p>
            <p>3:40</p>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <p>
            <IoIosSkipBackward className="size-8 text-[#FF6A00]" />
          </p>
          <p>
            <IoIosRewind className="size-8" />
          </p>
          <div className=" text-white w-[70px] h-[70px] bg-gradient-to-r from-[#FF6A00] to-[#EE0979] flex items-center justify-center rounded-full">
            <IoIosPlay size={50} />
          </div>
          <p>
            <IoIosFastforward className="size-8" />
          </p>
          <p>
            <IoIosSkipForward className="size-8 text-[#EE0979]" />
          </p>
        </div>
      </div>
    </PageContent>
  );
}
