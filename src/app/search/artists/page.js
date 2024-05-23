"use client"

import { useState } from "react";
import PageContent from "@/components/pageContent";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function SearchArtist() {
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);


    // Search 
    async function search() {
        console.log("search for " + searchInput); // Søg efter + (input i søgefeltet)

        // get request via Search for at få Artist ID
        const searchParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        }
        const artistID = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id }) // Returnere artistID 

        console.log(artistID);
        // get request med Artist ID for at få alle albums fra den artist
        const returnedAlbums = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?include_groups=album&market=DK&limit=50", searchParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.items)
            })
        // Print alle albums
        console.log(albums);
    }

    return (
        <PageContent >
            <form className="relative mb-20 text-xl">
                <input
                    type="text"
                    className="h-[30px] w-max py-5 px-2 border-2 border-[#EE0979] rounded-l-md outline-4 outline-[#EE0979]"
                    placeholder="Search Artist Albums"
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            search();
                        }
                    }}
                    onChange={event =>
                        setSearchInput(event.target.value)}
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
                {albums.map((album, i) => {
                    console.log(album);
                    return (
                        <div key={i} className="w-full h-fit flex justify-center items-center flex-col rounded-md shadow-md p-5 bg-gradient-to-b from-[#FF6A00] to-[#EE0979]">
                            <Image src={album.images[0].url} width={150} height={150} alt="Test" className="rounded-md" />
                            <h4 className="text-center uppercase text-pretty px-4 py-2 font-bold text-white bg-[#FF6A00] mt-2 rounded-md">{album.name}</h4>
                        </div>
                    )
                })}
            </section>
        </PageContent>
    );
}
