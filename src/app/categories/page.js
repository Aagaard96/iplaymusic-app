import Accordion from "@/components/accordion";
import MenuHeader from "@/components/menuHeader";
import PageHeading from "@/components/pageHeading";

export default function Categories() {
    return (
        <section className="mx-6">
            <MenuHeader />
            <PageHeading />
            <Accordion/>
        </section>
    )
}