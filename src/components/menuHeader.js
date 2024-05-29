"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

export default function MenuHeader() {
    const pathname = usePathname();
    let modifiedPathname = ""

    if (pathname === "/featured") {
        modifiedPathname = "featured";
    } else if (pathname === "/categories") {
        modifiedPathname = "categories";
    } else if (pathname.startsWith("/playlists")) {
        modifiedPathname = "playlists";
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
        <section className="flex justify-between items-center text-2xl pt-5 mb-10">
            <Link href="/featured"><GoChevronLeft /></Link>
            <h2 className="uppercase text-xl">{modifiedPathname}</h2>
            <Link href="/search"><GoSearch /></Link>
        </section>
    )
}