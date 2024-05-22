import Image from "next/image";
import PlayIcon from "./icons/playIcon";

export default function PlaylistSong({ time, artist, title, img }) {
    return (
        <div className="grid grid-cols-8 items-center mb-4">
            <div className="relative flex justify-center items-center">
                <Image src={img} width={200} height={200} alt="Test" className="rounded-md" />
                <PlayIcon className="absolute size-7" />
            </div>
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
