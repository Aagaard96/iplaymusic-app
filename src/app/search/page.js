import Link from 'next/link'
import React from 'react'
import { MdAudiotrack } from "react-icons/md";
import { BsDiscFill } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";

export default function Search() {
    return (
        <section className='grid h-screen place-content-center bg-gradient-to-r from-[#FF6A00] to-[#EE0979] '>
            <h3 className='mb-20 text-white font-bold text-2xl'>What do you want to search for?</h3>
            <div className='flex overflow-hidden rounded-md bg-white divide-x-4 divide-[#FF6A00] font-semibold w-fit mx-auto text-xl'>
                <Link href="/search/tracks" className='flex items-center gap-1 px-3 py-1.5 hover:bg-slate-200'><MdAudiotrack />Tracks</Link>
                <Link href="/search/artists" className='flex items-center gap-1 px-3 py-1.5 hover:bg-slate-200'><GiMicrophone />
                    Artists</Link>
                <Link href="/search/albums" className='flex items-center gap-1 px-3 py-1.5 hover:bg-slate-200'><BsDiscFill />Albums</Link>
            </div>
        </section>
    )
}
