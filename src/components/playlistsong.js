import PlayIcon from "./icons/playIcon";

export default function PlaylistSong() {
    return (
        <div className="grid grid-cols-3 items-center mb-4">
            <div className="flex items-center col-span-2 space-x-4">
                <div className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] h-8 w-8 rounded-full flex justify-center items-center">
                    <PlayIcon />
                </div>
                <div className="flex-grow flex flex-col gap-1 capitalize">
                    <p className="font-black">old town road</p>
                    <p>billy ray cyrus</p>
                </div>
            </div>
            <div className="text-right">
                <p>3:58</p>
            </div>
        </div>
    )
}
