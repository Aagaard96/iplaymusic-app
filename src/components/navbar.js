"use client"
import Link from "next/link"
import Wifi from "./icons/wifi"
import { usePathname } from "next/navigation"
import { User } from "./icons/user"
import { PlaylistIcon } from "./icons/playlistIcon"
import { FeaturedIcon } from "./icons/featuredIcon"
import { CategoryIcon } from "./icons/category"


export default function Navbar() {
    const pathname = usePathname()

    const categoriesColor = pathname === "/categories" ? "#341931" : "url(#myGradient)"
    const featuredColor = pathname === "/featured" ? "#341931" : "url(#myGradient)"
    const trendingColor = pathname === "/trending" ? "#341931" : "#fff"
    const playlistsColor = pathname === "/playlists" ? "#341931" : "url(#myGradient)"
    const profileColor = pathname === "/profile" ? "#341931" : "url(#myGradient)" 

    return (
        <nav className="h-16 bottom-0 fixed w-full items-center flex z-50 bg-nav shadow-[0px_-4px_18px_3px_#00000024]">
            <ul className="flex w-full h-full items-center justify-around text-2xl">
                <li><Link href="/categories"><CategoryIcon fill={categoriesColor} /></Link></li>
                <li><Link href="/featured"><FeaturedIcon fill={featuredColor} /></Link></li>
                <li className=" text-white w-[45px] h-[45px] bg-gradient-to-r from-[#FF6A00] to-[#EE0979] flex items-center justify-center rounded-full"><Link href="/trending"><Wifi fill={trendingColor} /></Link></li>
                <li><Link href="/playlists"><PlaylistIcon fill={playlistsColor} /></Link></li>
                <li><Link href="/profile"><User fill={profileColor} /></Link></li>
            </ul>
        </nav>
    )
}
