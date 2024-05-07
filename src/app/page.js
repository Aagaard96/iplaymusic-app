import * as React from "react"
import { NextUIProvider } from "@nextui-org/react";
import FeaturedTracks from "@/components/featuredTracks";
import MenuHeader from "@/components/menuHeader";
import PageHeading from "@/components/pageHeading";



export default function Home() {
  return (
    <NextUIProvider>
      <main className="mx-6">
        <MenuHeader />
        <PageHeading className="mt-16" />
        <FeaturedTracks className="mt-10" />
      </main>
    </NextUIProvider>
  );
}
