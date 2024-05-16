import PlayIcon from "./icons/playIcon";

export default function PlaylistSong({ time, artist, title }) {
    return (
        <div className="grid grid-cols-4 items-center mb-4">
            <div className="flex items-center col-span-3 space-x-4">
                <div className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] h-8 w-8 rounded-full flex justify-center items-center">
                    <PlayIcon />
                </div>
                <div className="flex-grow flex flex-col capitalize overflow-hidden">
                    <p className="font-black truncate">{title}</p>
                    <p className="truncate">{artist}</p>
                </div>
            </div>
            <div className="text-right">
                <p>{time}</p>
            </div>
        </div>
    )
}
