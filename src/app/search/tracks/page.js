"use client";

import { useState } from "react";
import PageContent from "@/components/pageContent";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function SearchTrack() {
    const [searchInput, setSearchInput] = useState("");
    const [tracks, setTracks] = useState([]);

    // Search 
    async function search() {
        console.log("search for " + searchInput); // Søg efter + (input i søgefeltet)

        // Get request to search for tracks
        const searchParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        };

        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track&market=DK&limit=50&offset=0`, searchParameters);
        const data = await response.json();

        // Extract the tracks from the response and update the state
        const tracks = data.tracks.items;
        setTracks(tracks);
        console.log(tracks);
    }

    return (
        <PageContent>
            <form className="relative mb-20 text-xl">
                <input
                    type="text"
                    className="h-[30px] w-max py-5 px-2 border-2 border-[#EE0979] rounded-l-md outline-4 outline-[#EE0979]"
                    placeholder="Search Tracks"
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            search();
                        }
                    }}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button
                    className="absolute top-0 h-full px-3 py-1 bg-[#EE0979] rounded-r-md text-white"
                    onClick={event => {
                        event.preventDefault();
                        search();
                    }}
                >
                    <FaSearch />
                </button>
            </form>

            <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {tracks.map((track, i) => {
                    const album = track.album;
                    return (
                        <div key={i} className="w-full h-fit flex justify-center items-center flex-col rounded-md shadow-md p-5 bg-gradient-to-b from-[#FF6A00] to-[#EE0979]">
                            <Image src={album.images[0].url} width={150} height={150} alt="Album Cover" className="rounded-md" />
                            <h4 className="text-center uppercase text-pretty px-4 py-2 font-bold text-white bg-[#FF6A00] mt-2 rounded-md">{track.name}</h4>
                        </div>
                    );
                })}
            </section>
        </PageContent>
    );
}
