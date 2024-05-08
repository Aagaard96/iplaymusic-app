import LoginListenBtn from "@/components/listen-login-btn";
import PageContent from "@/components/pageContent";
import PlaylistSong from "@/components/playlistsong";
import Image from "next/image";


export default function Playlists() {
    return (
        <PageContent>
            <Image
                className="absolute top-0 w-full left-0 -z-10"
                src="/sound-wave.svg"
                width={375}
                height={273} />
            <div className="w-[155px] h-[155px] relative flex mx-auto ">
                <Image
                    className="absolute rounded-lg"
                    src="/playlist-cover.jpg"
                    fill />
            </div>
            <h3 className="text-center font-black text-[#341931] text-xl my-8">Top 50 <br /> Rock Ballads</h3>
            <PlaylistSong />
            <PlaylistSong />
            <PlaylistSong />
            <PlaylistSong />
            <PlaylistSong />
            <PlaylistSong />
            <PlaylistSong />
            <div className="mx-auto mb-20 mt-8">
                <LoginListenBtn value="Listen All" className="border-[#FF1168] text-[#FF1168] font-black" />
            </div>
        </PageContent>
    )
}