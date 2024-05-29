import MenuHeader from "./menuHeader";
import PageHeading from "./pageHeading";


export default function PageContent({ children }) {
    return (
        <section className="mx-10 flex flex-col mb-16">
            <MenuHeader/>
            
            {children}
        </section>
    )
}