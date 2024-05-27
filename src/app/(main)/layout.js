import Navbar from "@/components/navbar";
import PageContent from "@/components/pageContent";

export default function MainLayout({ children }) {
    return (
        <main>
            <Navbar />
            <PageContent>
                {children}
            </PageContent>
        </main>
    )
}