"use client";
import { FaUserAlt } from "react-icons/fa";
import PageContent from "@/components/pageContent";
import PlaylistSong from "@/components/playlistsong";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/loading";

export default function SearchPage({ className }) {
    const [playlist, setPlaylist] = useState(null);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchPlaylist = async () => {
            if (session?.user?.token) {
                const playlistParameters = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${session.user.token}`
                    }
                };
                try {
                    const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists?locale=da_dk", playlistParameters);
                    const data = await response.json();
                    console.log(data);
                    setPlaylist(data.playlists);
                } catch (error) {
                    console.error("Failed to fetch playlists", error);
                }
            }
        };

        fetchPlaylist();
    }, [session?.user?.token]);


    if (!playlist) {
        return <Loading />;
    }

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
                {playlist.items.map((playlistItem, i) => (
                    <Link key={i} href={"/playlist/" + playlistItem.id}>
                        <article key={i} className={`w-[350px] h-[350px] relative flex ${className} shadow-lg rounded-md`}>
                            <Image
                                priority
                                src={playlistItem.images[0]?.url}
                                alt={playlistItem.name}
                                fill
                                className="absolute rounded-md h-full w-full"
                            />
                        </article>
                    </Link>
                ))}
            </section>
        </>
    );
}
