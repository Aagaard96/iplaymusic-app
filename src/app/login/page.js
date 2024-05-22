// app/login/page.js
import { getProviders, signIn } from "next-auth/react"
import Image from "next/image";

async function getProvidersData() {
    const providers = await getProviders();
    return providers;
}

export default async function LoginPage() {
    const providers = await getProvidersData();

    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <Image src="/trackcover.jpg" width={200} height={200} alt="spotify logo" className="mb-5 rounded-full" />
            {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                    <button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="bg-[#18D860] p-5 rounded-full text-white font-bold">
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}
