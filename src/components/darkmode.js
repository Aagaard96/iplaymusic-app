"use client"
import { useTheme } from "next-themes";
import { GoMoon } from "react-icons/go";
import { GoSun } from "react-icons/go";

export default function Darkmode() {
    const { resolvedTheme, theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => { setTheme(resolvedTheme === 'light' ? 'dark' : 'light') }}
            className="rounded-md py-2 px-4 border-[#FF6A00] border bg-main text-black transition duration-700 ease-in-out"
        >
            {theme === 'light' ? <GoMoon /> : <GoSun />}
        </button>
    );
}
