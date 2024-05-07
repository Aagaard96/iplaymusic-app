"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import More from "./icons/moreDots";

const genres = [
    {
        genre: "Alternative",
    }
]


export default function AccordionCategories() {
    return (
        <Accordion >
            <AccordionItem
                title="Alternative"
                indicator={<More />}
                className="bg-[#D70060] rounded-md px-5 text-white"

            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Blues"
                indicator={<More />}
                className="bg-[#E54028] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Classical"
                indicator={<More />}
                className="bg-[#F18D05] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Country"
                indicator={<More />}
                className="bg-[#F2BC06] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Dance"
                indicator={<More />}
                className="bg-[#5EB11C] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Electronic"
                indicator={<More />}
                className="bg-[#3A7634] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Fitness & Workout"
                indicator={<More />}
                className="bg-[#0ABEBE] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Hip-Hop & Rap"
                indicator={<More />}
                className="bg-[#00A1CB] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>
            <AccordionItem
                title="Industrial"
                indicator={<More />}
                className="bg-[#115793] rounded-md px-5 text-white mt-5"
            >
                <p>Test</p>
            </AccordionItem>

        </Accordion>
    )
}
