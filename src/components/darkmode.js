import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Darkmode() {
    // State for current theme
    const [darkmode, setDarkMode] = useState(() => {
        // Check if user has set any theme preference
        // If not, check system preference
        return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });

    // Apply theme effect
    useEffect(() => {
        document.body.classList.add(darkmode);
        localStorage.setItem("theme", darkmode);
    }, [darkmode]);

    // Function to toggle theme
    const toggleDarkMode = () => {
        // Switch between light and dark modes
        const newTheme = darkmode === "light" ? "dark" : "light";
        setDarkMode(newTheme);
        // Update body class and localStorage
        document.body.classList.remove(darkmode);
        document.body.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Render
    return (
        <div className="flex justify-between px-5">
            <p>Darkmode</p>
            <Switch
                // Set switch state based on current theme
                checked={darkmode === "dark"}
                // Call toggleDarkMode on switch change
                onChange={toggleDarkMode}
                classNames={{
                    wrapper: "mr-0"
                }}
            />
        </div>
    );
}
