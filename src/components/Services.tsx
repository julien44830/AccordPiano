"use client";

import { useEffect, useRef, useState } from "react";
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
    text?: string;
};

const services: ServiceCard[] = [
    {
        id: "reglage",
        title: "Réglage",
        image: "/images/services/reglage.jpg",
        alt: "Mécanique de piano en cours de réglage",
        text: "Une mécanique de piano est faite de leviers successifs comportant du bois, du feutre et du métal. Sur un piano droit ou à queue, environ 30 points de réglage de chaque touche détermineront la qualité du toucher de votre piano : maîtrise des nuances, répétition, poids du clavier, palette sonore, etc. Les réglages concernent le clavier, la mécanique, les étouffoirs et les mouvements de pédales.",
    },
    {
        id: "accord",
        title: "Accord",
        image: "/images/services/accord.jpg",
        alt: "Clavier de piano pendant un accord",
        text: "L'accord consiste à maintenir la tension nécessaire à la stabilité du piano, et répartir harmonieusement ses fréquences. Opération souvent considérée à tort comme la plus basique de l'entretien d'un piano, un « bel accord » ne s’obtient que lorsque le piano est en parfait état de jeu. Le lien entre le toucher et le son est très étroit, et le pianiste l’oublie souvent. Pour un piano joué régulièrement mais pas de manière très intensive (c’est à dire plusieurs heures par jour), l’accord est nécessaire au minimum une fois par an et permet de garder son piano stable et jouable. Une mise au diapason, un réglage complet et une harmonisation peuvent être nécessaires si votre piano n'a pas été entretenu depuis longtemps. Il s’agit alors d’une optimisation, qui redonnera au piano ses qualités d’origine.",
    },
    {
        id: "harmonisation",
        title: "Harmonisation",
        image: "/images/services/harmonisation.jpg",
        alt: "Feutres de marteaux de piano",
        text: "Un piano qui retrouve toutes ses capacités de chant, sa palette sonore, et c'est la possibilité d'expression du pianiste qui s'élargit considérablement. L’harmonisation est une opération très délicate, qui consiste à jouer sur la densité du feutre des marteaux, en piquant et ponçant le feutre à des endroits très précis, en fonction du résultat souhaité. Le feutre étant un matériau fragile et délicat, cette opération peut donner des résultats décevants et irréversibles lorsqu’elle est menée par un(e) technicien(ne) inexpérimenté(e). Le champ lexical est souvent très vaste lorsque le dialogue entre le pianiste et le technicien s’engage sur ce sujet. Force, souplesse, projection, rugosité, longueur de son… c’est au technicien d’être à l’écoute du pianiste et de déchiffrer ses exigences. Cette opération se réalise sur des marteaux récents ou en très bon état.",
    },
    {
        id: "restauration",
        title: "Restauration",
        image: "/images/services/restauration.jpg",
        alt: "Table d'harmonie en restauration",
        text: "Corde cassée, repivotage des axes, mortaises, mécanique grippée... Votre instrument peut avoir besoin d’une réparation, que j’effectue avec soin sur place dans la mesure du possible. Il est parfois indispensable d’emporter la mécanique ou la pièce en question pour bénéficier du matériel de l’atelier. Les réparations font l’objet d’un devis gratuit.",
    },
    {
        id: "expertise",
        title: "Expertise",
        image: "/images/services/expertise.jpg",
        alt: "Table d'harmonie en restauration",
        text: "L’expertise est indiquée si vous souhaitez simplement connaître la valeur et l’état de votre instrument, vendre ou acheter un piano entre particuliers, déterminer sa valeur pour une succession, savoir si une remise en état ou restauration complète est opportune. L’expertise est systématiquement suivie d'un rapport, ainsi que d'un devis le cas échéant.",
    },
    {
        id: "anciens",
        title: "Instruments Anciens",
        image: "/images/services/ancien.jpg",
        alt: "Table d'harmonie en restauration",
        text: "Les pianoforte et clavecins demandent un soin et une expertise propre à leur nature ancienne. Expérimentée également dans les claviers anciens, vous pouvez me confier votre instrument pour l'accord et l'entretien courant.",
    },
];

/* -----------------------------------
   Composant : modale accessible
   ----------------------------------- */
// Composant générique de modale, contrôle le focus, l'Esc, le clic extérieur et le scroll.
function Modal({
    isOpen,
    title,
    children,
    onClose,
}: {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}) {
    // Réf pour le conteneur de contenu afin de détecter les clics extérieurs
    const contentRef = useRef<HTMLDivElement | null>(null);
    // Réf pour le bouton fermer afin de donner le focus initial
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    // Élément qui avait le focus avant l’ouverture (pour restauration)
    const previouslyFocused = useRef<Element | null>(null);

    // Effet : verrouillage du scroll + gestion de l’Esc + focus management
    useEffect(() => {
        if (!isOpen) return;
        // Sauvegarder l’élément focus
        previouslyFocused.current = document.activeElement;
        // Empêcher le scroll arrière-plan
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Donner le focus au bouton fermer
        const t = requestAnimationFrame(() => {
            closeBtnRef.current?.focus();
        });

        // Gestion touche Esc
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);

        // Cleanup : restaurer l’état initial
        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", onKeyDown);
            cancelAnimationFrame(t);
            // Rendre le focus à l’élément précédent si possible
            if (previouslyFocused.current instanceof HTMLElement) {
                previouslyFocused.current.focus();
            }
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            // Arrière-plan semi-opaque
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 h-screen"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(e) => {
                // Fermer si clic en dehors du contenu (cible = overlay)
                // NB : on teste que la cible directe est ce conteneur (et pas un enfant)
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                ref={contentRef}
                className="relative w-full max-w-2xl rounded-2xl bg-(--bg) p-6 shadow-xl border border-(--accent) radius "
            >
                <h3
                    id="modal-title"
                    className="text-xl font-semibold text-(--accent)"
                >
                    {title}
                </h3>

                {/* Bouton fermer en haut à droite */}
                <button
                    ref={closeBtnRef}
                    type="button"
                    aria-label="Fermer la fenêtre"
                    onClick={onClose}
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--accent) text-(--bg)) hover:bg-- focus:outline-none focus:ring-2 "
                >
                    {/* Icône croix (SVG minimal) */}
                    <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-4 w-4"
                        focusable="false"
                    >
                        <path
                            d="M4.5 4.5l11 11m0-11l-11 11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <div className="mt-4 text-(--fg) leading-relaxed overflow-y-auto max-h-[70vh]">
                    {children}
                </div>

                {/* Bouton fermer en pied (utile mobile / accessibilité) */}
                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg bg-(--accent) px-4 py-2 text-(--bg) hover:bg-neutral-800 hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
}

/* -----------------------------------
   Composant : grille de cartes visuelles
   ----------------------------------- */
export default function ServicesCards() {
    // État : carte sélectionnée pour la modale
    const [selected, setSelected] = useState<ServiceCard | null>(null);

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
                            onOpen={() => setSelected(card)}
                        />
                    ))}
                </div>
            </div>

            {/* Modale : affichage du texte de la carte sélectionnée */}
            <Modal
                isOpen={!!selected}
                title={selected?.title ?? ""}
                onClose={() => setSelected(null)}
            >
                {/* Texte principal (on garde exactement le contenu fourni) */}
                <p>{selected?.text}</p>
            </Modal>
        </section>
    );
}

/* -----------------------------------
   Carte unitaire : image de fond + titre (cliquable)
   ----------------------------------- */
function ServiceCardItem({
    card,
    onOpen,
}: {
    card: ServiceCard;
    onOpen: () => void;
}) {
    return (
        <article
            className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-neutral-900"
            aria-label={card.title}
        >
            {/* Image de fond optimisée (Next/Image) */}
            <button
                // Bouton couvrant pour rendre la carte cliquable et accessible
                type="button"
                onClick={onOpen}
                className="hover:cursor-pointer"
                aria-label={`Ouvrir la description : ${card.title}`}
            >
                <Image
                    src={card.image}
                    alt={card.alt ?? card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Voile dégradé pour lisibilité du titre */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                {/* Titre uniquement */}
                <h3 className="absolute bottom-4 left-4  text-xl font-semibold text-white drop-shadow">
                    {card.title}
                </h3>

                {/* Anneau focus accessible */}
                <span className="absolute inset-0 rounded-2xl ring-0 ring-brand-primary/0 focus-within:ring-2" />
            </button>
        </article>
    );
}
