"use client";
import Loading from "@/app/loading";
import PlaylistSong from "@/components/playlistsong";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function SelectedPlaylist() {
    const { id } = useParams();
    const { data: session } = useSession();
    const [singlePlaylist, setSinglePlaylist] = useState(null);

    useEffect(() => {
        const fetchTrack = async () => {
            if (session?.user?.token) {
                const featuredParameters = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + session?.user?.token,
                    },
                };
                try {
                    const response = await fetch(
                        `https://api.spotify.com/v1/playlists/${id}?market=DK`,
                        featuredParameters
                    );
                    const data = await response.json();
                    console.log(data);
                    setSinglePlaylist(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchTrack();
    }, [session?.user?.token, id]);

    function convertDuration(milliseconds) {
        const totalSeconds = milliseconds / 1000; // milliseconds to seconds
        const minutes = Math.floor(totalSeconds / 60); // seconds to minutes
        const seconds = Math.floor(totalSeconds % 60); // remaining seconds

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    if (!singlePlaylist) {
        return <Loading/>;
    }

    return (
        <>
            <div className="w-[200px] h-[200px] relative flex mx-auto">
                <Image
                    className="absolute rounded-lg"
                    src={singlePlaylist.images?.[0]?.url}
                    width={200}
                    height={200}
                    alt="test"
                />
            </div>
            <h3 className="text-center font-black text-xl my-8">
                {singlePlaylist.name}
            </h3>
            <div className="flex mb-2 gap-2 items-center">
                <div className="bg-white text-black rounded-full size-6 flex items-center justify-center">
                    <FaUserAlt />
                </div>
                <h4 className="text-xs font-bold">
                    {singlePlaylist.owner.display_name}
                </h4>
            </div>
            <ul className="h-[400px] overflow-y-auto">
                {singlePlaylist.tracks.items.map((item, i) => (
                    <Link key={i} href={"/playing/" + item.track.id}>
                        <div className="overflow-hidden">
                            <PlaylistSong
                                time={convertDuration(item.track.duration_ms)}
                                title={item.track.name}
                                artist={item.track.artists
                                    .map((artist) => artist.name)
                                    .join(", ")}
                                img={item.track.album.images?.[0]?.url}
                            />
                        </div>
                    </Link>
                ))}
            </ul>
        </>
    );
}
