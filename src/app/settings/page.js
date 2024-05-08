import PageContent from "@/components/pageContent";
import { Switch } from "@nextui-org/react";

export default function Settings() {
    return (
        <PageContent>
            <section className=" py-5 bg-[#FF1168] rounded-lg font-bold text-white">
                <div className="flex justify-between px-5">
                    <p>Darkmode</p>
                    <Switch classNames={{
                        wrapper: "mr-0"
                    }} />
                </div>
            </section>
        </PageContent>
    )
}