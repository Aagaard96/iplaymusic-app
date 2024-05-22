"use client"
import LoginListenBtn from "@/components/listen-login-btn"
import PageContent from "@/components/pageContent"
import PlaylistSong from "@/components/playlistsong"
import useSpotifyAuth from "@/hooks/accesToken"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function SearchPage() {
    const [playlist, setPlaylist] = useState([])
    const accessToken = useSpotifyAuth()

    useEffect(() => {
        if (accessToken) {
            const playlistParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            }

            fetch("https://api.spotify.com/v1/playlists/4nXreCk8XJ1p6vLGSPEPUM/tracks?market=DK&limit=25&offset=0", playlistParameters)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setPlaylist(data.items)
                })
        }
    }, [accessToken])

    function convertDuration(milliseconds) {
        const totalSeconds = milliseconds / 1000 // millisekunder til sekunder
        const minutes = Math.floor(totalSeconds / 60) // Sekunder til minutter
        const seconds = Math.floor(totalSeconds % 60) // resterende sekunder

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` // Sæt 2 decimaler på sekunder
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
                    src="/playlist-cover.jpg"
                    fill />
            </div>
            <h3 className="text-center font-black text-[#341931] text-xl my-8">Top 50 <br /> Rock Ballads</h3>
            <ul>
                {playlist.map((item, i) => (
                    <PlaylistSong key={i} time={convertDuration(item.track.duration_ms)} title={item.track.name} artist={item.track.artists.map(artist => artist.name).join(', ')} img={item.track.album.images[0].url} />
                ))}
            </ul>
            <div className="mx-auto mt-8">
                <LoginListenBtn value="Listen All" className="border-[#FF1168] text-[#FF1168] font-black" />
            </div>
        </PageContent>
    )
}