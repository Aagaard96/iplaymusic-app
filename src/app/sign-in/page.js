import LoginListenBtn from "@/components/listen-login-btn";
import PageHeading from "@/components/pageHeading";

export default function SignIn() {
    return (
        <>
            <PageHeading />
            <h2 className={`bg-gradient-to-r from-[#FF6A00] to-[#EE0979] inline-block text-transparent bg-clip-text capitalize text-4xl leading-relaxed font-black mb-8 ${className}`}>
                Log In
            </h2>
            <LoginListenBtn value="LOG IN" />
        </>
    )
}