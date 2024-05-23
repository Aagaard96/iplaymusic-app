"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
    const { data: session } = useSession()
    const token = session?.user.token
    console.log(token);
    return (
        <>
            {session ? (
                <>
                    <h1>Welcome back</h1>
                </>
            ) : (
                <>
                    <h1 className="text-3xl text-red-500">You are not logged in</h1>
                    <button
                        onClick={() => signIn('spotify')}
                        className="px-1.5 py-1.5 bg-[#18D860] font-bold text-white rounded-full">
                        Sign in with Spotify
                    </button>
                </>
            )}
        </>
    );
}
