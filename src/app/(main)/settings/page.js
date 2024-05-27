"use client"
import Darkmode from "@/components/darkmode";
import { Switch } from "@nextui-org/react";

export default function Settings() {
    return (
            <section className=" py-5 bg-[#FF1168] rounded-lg font-bold text-white">
                <Darkmode/>
            </section>
    )
}