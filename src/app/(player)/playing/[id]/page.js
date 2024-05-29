"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";
import { IoIosFastforward } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";
import Loading from "@/app/loading";

export default function NowPlaying() {
  const { data: session } = useSession();
  const { id } = useParams();
  const [singleTrack, setSingleTrack] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      if (session?.user?.token) {
        const featuredParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + session?.user?.token,
          },
        };
        try {
          const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, featuredParameters);
          const data = await response.json();
          console.log(data);
          setSingleTrack(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTrack();
  }, [session?.user?.token, id]);

  if (!singleTrack) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col justify-center w-full items-center translate-y-[20%]">
      <Image
        src={singleTrack.album.images[0].url}
        width={100}
        height={100}
        alt="wave"
        className="w-[300px] rounded-md mb-20"
      />

      <div className="capitalize w-full">
        <div className="capitalize text-center flex flex-col gap-2 mb-6">
          <p className="font-bold text-lg">{singleTrack.artists[0].name}</p>
          <p>{singleTrack.name}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#FF1168] w-full h-1 relative flex items-center">
            <span className="w-6 h-6 bg-[#FF1168]/30 absolute rounded-full flex items-center ml-20">
              <GoDotFill className="size-12 text-[#FF1168]" />
            </span>
          </div>
          <div className="flex justify-between">
            <p>0:00</p>
            <p>{Math.floor(singleTrack.duration_ms / 60000)}:{((singleTrack.duration_ms % 60000) / 1000).toFixed(0).padStart(2, "0")}</p>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <p>
            <IoIosSkipBackward className="size-8 text-[#FF6A00]" />
          </p>
          <p>
            <IoIosRewind className="size-8" />
          </p>
          <div className="text-white w-[70px] h-[70px] bg-gradient-to-r from-[#FF6A00] to-[#EE0979] flex items-center justify-center rounded-full">
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
    </section>
  );
}
