import React from 'react'

export default function AlbumSongList({ index, time, artist, title }) {
    return (
        <div className="grid grid-cols-8 items-center mb-4">
            <p>{index}</p>
            <div className="flex-grow flex flex-col capitalize overflow-hidden col-start-2 col-span-6 ml-3">
                <p className="font-extrabold truncate">{title}</p>
                <p className="truncate">{artist}</p>
            </div>
            <div className="text-right col-start-8">
                <p>{time}</p>
            </div>
        </div>
    )
}
