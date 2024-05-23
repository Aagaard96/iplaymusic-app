"use client";
import { FaUserAlt } from "react-icons/fa";
import PageContent from "@/components/pageContent";
import PlaylistSong from "@/components/playlistsong";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SearchPage() {
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
                    const response = await fetch("https://api.spotify.com/v1/playlists/4nXreCk8XJ1p6vLGSPEPUM?market=DK&limit=25&offset=0", playlistParameters);
                    const data = await response.json();
                    console.log(data);
                    setPlaylist(data);
                } catch (error) {
                    console.error("Failed to fetch playlist", error);
                }
            }
        };

        fetchPlaylist();
    }, [session?.user?.token]);

    function convertDuration(milliseconds) {
        const totalSeconds = milliseconds / 1000; // milliseconds to seconds
        const minutes = Math.floor(totalSeconds / 60); // seconds to minutes
        const seconds = Math.floor(totalSeconds % 60); // remaining seconds

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Pad seconds with leading zero
    }

    if (!playlist) {
        return null; // or a loading spinner
    }

    return (
        <PageContent>
            <Image
                className="absolute top-0 w-full left-0 -z-10"
                src="/sound-wave.svg"
                width={375}
                height={273}
                alt="Test"
            />
            <div className="w-[155px] h-[155px] relative flex mx-auto ">
                <Image
                    className="absolute rounded-lg"
                    src={playlist.images?.[0]?.url}
                    width={155}
                    height={155}
                    alt="test"
                />
            </div>
            <h3 className="text-center font-black text-[#341931] text-xl my-8">{playlist.name}</h3>
            <div className="flex mb-5 gap-2 items-center">
                <div className="bg-white rounded-full size-6 flex items-center justify-center"><FaUserAlt /></div>
                <h4 className="text-xs font-bold">{playlist.owner.display_name}</h4>
            </div>
            <ul>
                {playlist.tracks.items.map((item, i) => (
                    <PlaylistSong
                        key={i}
                        time={convertDuration(item.track.duration_ms)}
                        title={item.track.name}
                        artist={item.track.artists.map(artist => artist.name).join(', ')}
                        img={item.track.album.images?.[0]?.url}
                    />
                ))}
            </ul>
        </PageContent>
    );
}
