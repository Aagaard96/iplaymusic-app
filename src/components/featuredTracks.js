"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function FeaturedTrack({ className }) {
    const [tracks, setTracks] = useState([])
    const { data: session } = useSession()


    useEffect(() => {
        const fetchTracks = async () => {
            if (session?.user?.token) {
                const featuredParameters = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + session?.user?.token
                    }
                }
                try {
                    fetch("https://api.spotify.com/v1/recommendations?limit=20&market=DK&seed_artists=2MaqdTB8EUuYLUPDJipWG2&seed_genres=pop%2Crock&seed_tracks=55y7G53znAgaB6Hfw2Ph9b", featuredParameters)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            setTracks(data.tracks)
                        })
                } catch (error) {
                    console.log(error);
                }

            }
        }
        fetchTracks()
    }, [session?.user?.token])

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
            {tracks.map((track, i) => (
                <Link key={i} href={"/playing/" + track.id}>
                    <article className={`w-[350px] h-[350px] relative flex ${className} shadow-lg rounded-md`}>
                        <Image
                            priority
                            src={track.album.images[0].url}
                            alt={track.name}
                            fill
                            className="absolute rounded-md h-full w-full"
                        />
                        <div className="z-20 text-slate-800 px-5 py-2.5 absolute bottom-8 bg-gradient-to-r from-white to-gray-500/70 rounded-r-md">
                            <p className="font-black text-xl">{track.album.name}</p>
                            <p className="mt-1 font-normal text-lg">{track.album.artists.map(artist => artist.name).join(', ')}</p> {/* Map over artist array og join med et (,) komma */}
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    )
}
