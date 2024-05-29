"use client"
import { useTheme } from "next-themes";
import { GoMoon } from "react-icons/go";
import { GoSun } from "react-icons/go";

export default function Darkmode() {
    const { resolvedTheme, theme, setTheme } = useTheme()

    return (
        <div className="flex justify-between px-5 items-center">
            <p>Darkmode</p>

            <button
                onClick={() => { setTheme(resolvedTheme === 'light' ? 'dark' : 'light') }}
                className="rounded-md py-2 px-4 shadow-inner shadow-black bg-white text-black transition duration-700 ease-in-out"
            >
                {theme === 'light' ? <GoMoon /> : <GoSun />}
            </button>
            {/* <Switch
                // Set switch state based on current theme
                classNames={{
                    wrapper: "mr-0"
                }}
            /> */}
        </div>
    );
}
