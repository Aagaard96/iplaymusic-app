import PageContent from "@/components/pageContent";

export default function PlayerLayout({ children }) {
    return (
        <main>
            <PageContent>
            {children}
            </PageContent>
        </main>
    )
}