"use client"
import PageContent from '@/components/pageContent';
import PlaylistSong from '@/components/playlistsong';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Search() {
    const { data: session } = useSession();
    const [search, setSearch] = useState({});
    const [searchInput, setSearchInput] = useState("");

    const searchAfter = async () => {
        if (session?.user?.token && searchInput) {
            const featuredParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + session?.user?.token,
                },
            };
            try {
                const response = await fetch(
                    "https://api.spotify.com/v1/search?q=" + searchInput + "&type=album,track,artist&market=DK&limit=15&offset=0",
                    featuredParameters
                );
                const data = await response.json();
                console.log(data);
                setSearch(data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (searchInput) {
            searchAfter();
        }
    }, [session?.user?.token]);

    function convertDuration(milliseconds) {
        const totalSeconds = milliseconds / 1000; // milliseconds to seconds
        const minutes = Math.floor(totalSeconds / 60); // seconds to minutes
        const seconds = Math.floor(totalSeconds % 60); // remaining seconds

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return (
        <section>
            <form className="relative mb-10 text-xl w-full">
                <input
                    type="text"
                    className="h-[30px] w-full py-5 px-2 border-2 border-[#EE0979] rounded-l-md outline-4 outline-[#EE0979]"
                    placeholder="Tracks, albums, artist.."
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            searchAfter();
                        }
                    }}
                    onChange={event =>
                        setSearchInput(event.target.value)}
                />
                <button
                    className="absolute top-0 h-full px-3 py-1 bg-[#EE0979] rounded-r-md text-white"
                    onClick={event => {
                        event.preventDefault();
                        searchAfter();
                    }}
                >
                    <FaSearch />
                </button>
            </form>

            <section className="flex flex-col gap-10">
                <article>
                    <h3 className='text-2xl uppercase mb-5'>Albums</h3>
                    <div className='grid grid-cols-3 justify-items-center align-items-center gap-5'>
                        {search.albums?.items.map((album, i) => (
                            <Link key={i} href={"/albums/" + album.id}>
                                <article key={i} className={`w-[100px] h-[100px] relative flex shadow-lg rounded-md`}>
                                    <Image
                                        priority
                                        src={album.images[0]?.url}
                                        alt={album.name}
                                        fill
                                        className="absolute rounded-md h-full w-full border border-[#EE0979]"
                                    />
                                </article>
                            </Link>
                        ))}
                    </div>
                </article>
                <article>
                    <h3 className='text-2xl uppercase mb-5'>Songs</h3>
                    <div>
                        {search.tracks?.items.map((track, i) => (
                            <Link key={i} href={"/playing/" + track.id}>
                                <div className="overflow-hidden">
                                    <PlaylistSong
                                        title={track.name}
                                        artist={track.artists.map(artist => artist.name).join(', ')}
                                        img={track.album.images[0]?.url}
                                        time={convertDuration(track.duration_ms)}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </article>
                <article>
                    <h3 className='text-2xl uppercase mb-5'>Artists</h3>
                    <div className="grid grid-cols-2 gap-y-5">
                        {search.artists?.items.map((artist, i) => (
                            <Link key={i} href={"/search/" + artist.id}>
                                <div className="w-full flex justify-center items-center flex-col gap-2">
                                    <Image src={artist.images[0]?.url} width={150} height={150} alt={artist.name} className="rounded-full w-[150px] h-[150px] border-2 border-[#EE0979]" />
                                    <h4 className="text-xl font-extrabold text-center">{artist.name}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </article>
            </section>
        </section>
    )
}
