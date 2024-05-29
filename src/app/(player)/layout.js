import MenuHeader from "@/components/menuHeader";
import { ThemeProvider } from "next-themes";

export default function PlayerLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <body className="bg-main h-screen text-text px-10">
                <main>
                    <MenuHeader/>
                    {children}
                </main>
            </body>
        </ThemeProvider>
    )
}