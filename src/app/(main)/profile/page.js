"use client"
import Loading from '@/app/loading';
import Darkmode from '@/components/darkmode';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function UserInfo() {

    const { data: session } = useSession();
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            if (session?.user?.token) {
                const featuredParameters = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + session?.user?.token,
                    },
                };
                try {
                    const response = await fetch(`https://api.spotify.com/v1/me/`, featuredParameters);
                    const data = await response.json();
                    console.log(data);
                    setUser(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        getUser();
    }, [session?.user?.token, id]);




    if (!user) {
        return <Loading />;
    }
    return (
        <section className='mx-auto text-center'>
            <div className=' flex justify-center flex-col items-center'>
                <Image
                    className='rounded-full mb-2 bg-black border border-[#EE0979]'
                    src={user.images[1].url}
                    width={150}
                    height={150}
                    alt={user.display_name}
                />
                <p className='text-lg font-bold'>{user.display_name}</p>
                <p className='text-default-500 text-sm'>{user.email}</p>
            </div>

            <Darkmode />
        </section>
    )
}
