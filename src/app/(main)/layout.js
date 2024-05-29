import Navbar from "@/components/navbar";
import PageContent from "@/components/pageContent";
import PageHeading from "@/components/pageHeading";
import { ThemeProvider } from "next-themes";

export default function MainLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <main className="bg-main text-text">
                <Navbar />
                <PageContent>
                    <PageHeading />
                    {children}
                </PageContent>
            </main>
        </ThemeProvider>
    )
}