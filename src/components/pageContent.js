import MenuHeader from "./menuHeader";
import PageHeading from "./pageHeading";

export default function PageContent({ children }) {
    return (
        <section className="mx-6 flex flex-col mb-20">
            <MenuHeader />
            <PageHeading />
            {children}
        </section>
    )
}