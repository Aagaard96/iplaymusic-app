"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
    const { data: session } = useSession()
    const token = session?.user.token
    console.log(token);
    return (
        <>
            {session ? (
                <section className="flex items-center flex-col gap-10">
                    <div className="flex items-center gap-5">
                        <Image
                            className="rounded-full"
                            src={session.user.image}
                            width={75}
                            height={75}
                            alt="User avatar" />
                        <h1 className="text-lg text-center">Welcome back<br /><span className="font-bold text-xl">{session.user.name}</span></h1>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="px-5 py-3 bg-red-500 font-bold text-white rounded-full">
                        Sign Out
                    </button>
                    <Link 
                    href="/featured"
                    className="px-5 py-3 bg-blue-400 font-bold text-white rounded-full"
                    >Explore App</Link>
                </section>
            ) : (
                <article className="flex items-center flex-col gap-10">
                    <h1 className="mt-5 text-xl text-cente font-bold">You are not logged in</h1>
                    <button
                        onClick={() => signIn('spotify')}
                        className="px-5 py-3 bg-[#18D860] font-bold text-white rounded-full">
                        Sign in with Spotify
                    </button>
                </article>
            )}
        </>
    );
}
