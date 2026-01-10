// app/page.tsx
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Tarifs from "@/app/components/Tarifs";
import References from "@/app/components/References";
import CarouselLazy from "@/app/components/Carousel.lazy";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EP Pianos – Accord, réglage & harmonisation",
    description:
        "Technicienne accordeur diplômée. Accord, réglage, harmonisation et expertise de pianos en Loire-Atlantique et régions voisines.",
    alternates: {
        // ⚠️ grâce à metadataBase dans le layout,
        // Next va résoudre en https://www.accordpianos-panhaleux.fr/
        canonical: "/",
    },
};

// Page unique avec sections + carrousel + galerie
export default function Page() {
    return (
        <main className="bg-black/80 ">
            <Hero />
            <Services />
            <About />
            <References />
            <CarouselLazy />
            <Tarifs />
        </main>
    );
}
