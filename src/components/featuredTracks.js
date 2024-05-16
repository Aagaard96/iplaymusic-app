"use client"
import Image from "next/image"
import useSpotifyAuth from "@/hooks/accesToken"
import { useState, useEffect } from "react"

export default function FeaturedTrack({ className }) {
    const [tracks, setTracks] = useState([])
    const accessToken = useSpotifyAuth()

    useEffect(() => {
        if (accessToken) {
            const featuredParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            }

            fetch("https://api.spotify.com/v1/recommendations?limit=20&market=DK&seed_artists=2MaqdTB8EUuYLUPDJipWG2&seed_genres=pop%2Crock&seed_tracks=55y7G53znAgaB6Hfw2Ph9b", featuredParameters)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setTracks(data.tracks)
                })
        }
    }, [accessToken])

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
            {tracks.map((track, i) => (
                <article key={i} className={`w-[350px] h-[425px] relative flex ${className} shadow-lg`}>
                    <Image
                        priority
                        src={track.album.images[0].url}
                        alt={track.name}
                        fill
                        className="absolute rounded-lg h-full w-full"
                    />
                    <div className="z-20 text-white px-5 py-2.5 absolute bottom-10 bg-[#EE0979]/70 rounded-r-md">
                        <p className="font-black text-3xl">{track.album.name}</p> {/* Assuming album has a name property */}
                        <p className="mt-5 font-normal text-xl">{track.album.artists.map(artist => artist.name).join(', ')}</p> {/* Assuming album has an artists array */}
                    </div>
                </article>
            ))}
        </section>
    )
}
