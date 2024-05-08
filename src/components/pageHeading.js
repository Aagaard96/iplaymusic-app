"use client"
import { usePathname } from "next/navigation"

export default function PageHeading({ className }) {
    const pathname = usePathname().slice(1)

    return (
        <h2 className={`bg-gradient-to-r from-[#FF6A00] to-[#EE0979] inline-block text-transparent bg-clip-text capitalize text-4xl leading-relaxed font-black mb-8 ${className}`}>
            {pathname}
        </h2>
    )
}