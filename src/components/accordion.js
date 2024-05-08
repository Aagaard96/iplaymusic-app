"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import MoreIcon from "./icons/moreIcon";
import ArrowForward from "./icons/arrowForward";

const Categories = [
    {
        title: "Alternative",
        bgColor: "#D70060"
    },
    {
        title: "Blues",
        bgColor: "#E54028"
    },
    {
        title: "Classical",
        bgColor: "#F18D05"
    },
    {
        title: "Country",
        bgColor: "#F2BC06"
    },
    {
        title: "Dance",
        bgColor: "#5EB11C"
    },
    {
        title: "Electronic",
        bgColor: "#3A7634"
    },
    {
        title: "Fitness & Workout",
        bgColor: "#0ABEBE"
    },
    {
        title: "Hip-Hop & Rap",
        bgColor: "#00A1CB"
    },
    {
        title: "Industrial",
        bgColor: "#115793"
    }
];

export default function AccordionCategories() {
    return (
        <Accordion
            itemClasses={{
                title: "text-white font-bold pl-5",
                trigger: "pr-5 text-4xl",
            }}>
            {Categories.map((category, index) => (
                <AccordionItem
                    key={index}
                    title={category.title}
                    indicator={<MoreIcon />}
                    className={`bg-[${category.bgColor}] rounded-md mt-5`}
                    classNames={{
                        content: "bg-white px-5 py-5 rounded-b-md"
                    }}
                >
                    <div className="flex items-center justify-between font-semibold text-lg">
                        <p>Test</p>
                        <ArrowForward />
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
