"use client";
/* Composant client qui charge le carrousel en différé (sans SSR) */

import dynamic from "next/dynamic";

// ⚠️ Ici on peut utiliser ssr:false car ce fichier est un Client Component
const LazyCarousel = dynamic(() => import("./Carousel"), {
    ssr: false,
    // Composant de secours léger pendant le chargement
    loading: () => (
        <div className="mx-auto max-w-6xl px-4 py-12 text-brand-light">
            Chargement…
        </div>
    ),
});

export default function CarouselLazy() {
    // rend simplement le carrousel différé
    return <LazyCarousel />;
}
