"use client"
import { usePathname } from "next/navigation"

export default function PageHeading({ className }) {
    const pathname = usePathname();
    let modifiedPathname = ""

    if (pathname === "/featured") {
        modifiedPathname = "featured";
    } else if (pathname === "/categories") {
        modifiedPathname = "categories";
    } else if (pathname.startsWith("/playlists")) {
        modifiedPathname = "playlists";
    } else if (pathname.startsWith("/playlist")) {
        modifiedPathname = "playlist";
    } else if (pathname === "/settings") {
        modifiedPathname = "settings";
    } else if (pathname.startsWith("/playing")) {
        modifiedPathname = "playing";
    } else if (pathname.startsWith("/albums")) {
        modifiedPathname = "Albums";
    } else {
        modifiedPathname = pathname.slice(1)
    }

    // Now you can use pathname as needed
    console.log(pathname);

    return (
        <h2 className={`bg-gradient-to-r from-[#FF6A00] to-[#EE0979] inline-block text-transparent bg-clip-text capitalize overflow-hidden text-4xl leading-relaxed font-black mb-8 ${className}`}>
            {modifiedPathname}
        </h2>
    )
}