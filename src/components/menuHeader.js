"use client"
import Link from "next/link";
import ArrowBack from "./icons/arrowBack";
import Search from "./icons/search";
import { usePathname } from "next/navigation";

export default function MenuHeader() {
    const pathname = usePathname().slice(1)
    return (
        <section className="flex justify-between items-center text-2xl mt-5">
            <Link href="/"><ArrowBack /></Link>
            <h2 className="uppercase text-xl">{pathname}</h2>
            <Search />
        </section>
    )
}