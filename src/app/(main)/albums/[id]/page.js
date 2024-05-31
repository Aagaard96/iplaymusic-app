"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { BsExplicitFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import ListDivider from "@/components/listdivider";

export default function SearchArtist() {
    const { data: session } = useSession();
    const { id } = useParams();
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const getAlbum = async () => {
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
                        `https://api.spotify.com/v1/albums/${id}`,
                        featuredParameters
                    );
                    const data = await response.json();
                    console.log(data);
                    setAlbum(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        getAlbum();
    }, [session?.user?.token, id]);

    if (!album) {
        return <Loading />;
    }

    function convertDuration(milliseconds) {
        const totalSeconds = milliseconds / 1000; // milliseconds to seconds
        const minutes = Math.floor(totalSeconds / 60); // seconds to minutes
        const seconds = Math.floor(totalSeconds % 60); // remaining seconds

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return (
        <>
            <article className="flex flex-col">
                <Image
                    className="rounded-md mb-2 mx-auto"
                    src={album.images[0].url}
                    width={300}
                    height={300}
                    alt={album.name}
                />
                <div className="capitalize flex flex-col gap-2">
                    <p>{album.album_type}</p>
                    <p className="font-bold text-2xl">{album.name}</p>
                    <div className="flex gap-1 items-center">
                        <p className="font-bold">{album.artists[0].name}</p>
                        <GoDotFill size={12} />
                        <p>{album.release_date.slice(0, 4)}</p>
                        <GoDotFill size={12} />
                        <p>{album.total_tracks} Songs</p>
                    </div>
                </div>
            </article>

            <article className="mt-10 ">
                <ListDivider />
                {album.tracks?.items.map((track, i) => (
                    <Link key={i} href={"/playing/" + track.id}>
                        <div className="grid grid-cols-8 items-center mb-4">
                            <div className="relative flex items-center">
                                {track.track_number}
                            </div>
                            <div className="flex-grow flex flex-col capitalize overflow-hidden col-start-2 col-span-6">
                                <p className="font-extrabold truncate">{track.name}</p>
                                <p className="truncate flex items-center gap-2">
                                    {" "}
                                    {track.explicit === true ? <BsExplicitFill /> : null}{" "}
                                    {track.artists[0].name}
                                </p>
                            </div>
                            <div className="text-right col-start-8">
                                <p>{convertDuration(track.duration_ms)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </article>
        </>
    );
}
