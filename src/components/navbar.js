"use client"
import Link from "next/link"
import Contrast from "./icons/contrast"
import Wifi from "./icons/wifi"
import Settings from "./icons/settings"
import Pulse from "./icons/pulse"
import Microphone from "./icons/microphone"
import { usePathname } from "next/navigation"


export default function Navbar() {
    const pathname = usePathname()

    const categoriesColor = pathname === "/categories" ? "#000" : "url(#myGradient)"
    const featuredColor = pathname === "/featured" ? "#000" : "url(#myGradient)"
    const trendingColor = pathname === "/trending" ? "#000" : "#fff"
    const playlistsColor = pathname === "/playlists" ? "#000" : "url(#myGradient)"
    const settingsColor = pathname === "/settings" ? "#000" : "url(#myGradient)"

    return (
        <nav className="h-16 bottom-0 fixed w-full items-center flex z-50 bg-white shadow-[0px_-4px_18px_3px_#00000024]">
            <ul className="flex w-full h-full items-center justify-around text-2xl">
                <li><Link href="/categories"><Pulse fill={categoriesColor} /></Link></li>
                <li><Link href="/featured"><Microphone fill={featuredColor} /></Link></li>
                <li className=" text-white w-[45px] h-[45px] bg-gradient-to-r from-[#FF6A00] to-[#EE0979] flex items-center justify-center rounded-full"><Link href="/trending"><Wifi fill={trendingColor} /></Link></li>
                <li><Link href="/playlists"><Contrast fill={playlistsColor} /></Link></li>
                <li><Link href="/settings"><Settings fill={settingsColor} /></Link></li>
            </ul>
        </nav>
    )
}
