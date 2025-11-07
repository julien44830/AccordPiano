"use client";
import Image from "next/image";

/* ------------------------------
   Données : structure extensible
   ------------------------------ */
// Chaque carte garde seulement : titre + image (alt optionnel)
type ServiceCard = {
    id: string;
    title: string;
    image: string; // chemin public ou URL
    alt?: string;
};

const services: ServiceCard[] = [
    {
        id: "reglage",
        title: "Réglage",
        image: "/images/services/reglage.jpg",
        alt: "Mécanique de piano en cours de réglage",
    },
    {
        id: "accord",
        title: "Accord",
        image: "/images/services/accord.jpg",
        alt: "Clavier de piano pendant un accord",
    },
    {
        id: "harmonisation",
        title: "Harmonisation",
        image: "/images/services/harmonisation.jpg",
        alt: "Feutres de marteaux de piano",
    },
    {
        id: "restauration",
        title: "Restauration",
        image: "/images/services/restauration.jpg",
        alt: "Table d'harmonie en restauration",
    },
    {
        id: "expertise",
        title: "Expertise",
        image: "/images/services/expertise.jpg",
        alt: "Table d'harmonie en restauration",
    },
    {
        id: "anciens",
        title: "Instruments Anciens",
        image: "/images/services/ancien.jpg",
        alt: "Table d'harmonie en restauration",
    },
];

/* -----------------------------------
   Composant : grille de cartes visuelles
   ----------------------------------- */
export default function ServicesCards() {
    return (
        <section
            id="services"
            className="py-16"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    Prestations
                </h2>

                {/* Grille responsive */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((card) => (
                        <ServiceCardItem
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -----------------------------------
   Carte unitaire : image de fond + titre
   ----------------------------------- */
function ServiceCardItem({ card }: { card: ServiceCard }) {
    return (
        <article
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900"
            aria-label={card.title}
        >
            {/* Image de fond optimisée (Next/Image) */}
            <Image
                src={card.image}
                alt={card.alt ?? card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />

            {/* Voile dégradé pour lisibilité du titre */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Titre uniquement */}
            <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white drop-shadow">
                {card.title}
            </h3>

            {/* Anneau focus accessible (si on rend la carte cliquable plus tard) */}
            <span className="absolute inset-0 rounded-2xl ring-0 ring-brand-primary/0 focus-within:ring-2" />
        </article>
    );
}
