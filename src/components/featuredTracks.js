import Image from "next/image";

export default function FeaturedTracks({ className }) {
    return (
        <article className={`w-[full] h-[425px] relative flex ${className} shadow-lg`}>
            <Image
                priority
                src="/trackcover.jpg"
                alt="Dummy"
                fill
                className="absolute rounded-lg h-full w-full" />
            <div className="z-20 text-white p-5 absolute bottom-10">
                <p className="font-black text-3xl">The Greatest Showman</p>
                <p className="mt-5 font-thin">Soundtrack</p>
            </div>
        </article>
    );
}
