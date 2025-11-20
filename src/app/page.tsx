// app/page.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Tarifs from "@/components/Tarifs";
import References from "@/components/References";
import CarouselLazy from "@/components/Carousel.lazy";

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
