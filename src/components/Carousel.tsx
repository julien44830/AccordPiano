// components/Carousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";

// --- Données ---
const slides = [
    {
        src: "/images/accord-EPanhaleux.jpg",
        alt: "accordage de piano droit",
        text: "Accord piano droit",
    },
    {
        src: "/images/accord-Pleyel-EPanhaleux.jpg",
        alt: "accordage de piano droit",
        text: "Accord piano droit",
    },
    {
        src: "/images/concert-versailles-EPanhaleux.jpg",
        alt: "piano a queue dans une salle de concert",
        text: "Service concert",
    },
    {
        src: "/images/expertise-EPanhaleuxx.jpg",
        alt: "expertise de piano ancien",
        text: "Expertise",
    },
    {
        src: "/images/harmonisation-EPanhaleux.jpg",
        alt: "harmonisation de piano",
        text: "Harmonisation",
    },
    {
        src: "/images/harpsichord-EPanhaleux.jpg",
        alt: "harpsichord restauration",
        text: "Clavecin",
    },
    {
        src: "/images/EPanhaleux-1.jpg",
        alt: "Elisabeth Panhaleux accordeuse de piano",
        text: "Elisabeth Panhaleux technicienne pianos",
    },
    {
        src: "/images/EPanhaleux-2.jpg",
        alt: "Elisabeth Panhaleux restauration de piano",
        text: "Elisabeth Panhaleux technicienne pianos",
    },
    {
        src: "/images/EPanhaleux-5.jpg",
        alt: "Elisabeth Panhaleux expertise de piano",
        text: "Elisabeth Panhaleux technicienne pianos",
    },
    {
        src: "/images/opera-bastille-EPanhaleux.jpg",
        alt: "piano a queue sur la scene de l'opera bastille",
        text: "Opéra Bastille, salle de répétition",
    },
    {
        src: "/images/pianofote-EPanhaleux.jpg",
        alt: "pianoforte accordage",
        text: "Accord pianoforte",
    },
    {
        src: "/images/prepa-concert-chine-EPanhaleux.jpg",
        alt: "preparation de concert en chine",
        text: "Préparation piano de concert",
    },
    {
        src: "/images/reparation-cadre-piano-EPanhaleux.jpg",
        alt: "reparation cadre de piano",
        text: "Cadre piano droit",
    },
    {
        src: "/images/sous-les-cordes-EPanhaleux.jpg",
        alt: "sous les cordes de piano",
        text: "Sous les cordes, pianos à queue",
    },
    {
        src: "/images/Systeme-etouffoirs-EPanhaleux.jpg",
        alt: "etouffoirs de piano",
        text: "Système d'étouffoirs pianos à queue",
    },
];

export default function Carousel() {
    // --- index de la diapo ---
    const [idx, setIdx] = useState(0);

    // --- auto-lecture toutes les 4s ---
    // État pour gérer la transition
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((i) => {
                if (i === slides.length - 1) {
                    // désactive temporairement la transition
                    setTransitionEnabled(false);
                    setTimeout(() => setTransitionEnabled(true), 50);
                    return 0; // retour à la première image
                }
                return i + 1;
            });
        }, 4000);
        return () => clearInterval(t);
    }, []);

    // --- drag / swipe ---
    const startX = useRef<number | null>(null);
    const onPointerDown = (e: React.PointerEvent) =>
        (startX.current = e.clientX);
    const onPointerUp = (e: React.PointerEvent) => {
        if (startX.current === null) return;
        const delta = e.clientX - startX.current;
        if (Math.abs(delta) > 40) {
            setIdx((i) =>
                delta > 0
                    ? (i - 1 + slides.length) % slides.length
                    : (i + 1) % slides.length
            );
        }
        startX.current = null;
    };

    return (
        <section className=" bg-black text-brand-light">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    En images
                </h2>

                {/* 
          Conteneur du carrousel :
          - max-w-5xl : limite la largeur
          - h-[48vh] md:h-[52vh] lg:h-[56vh] : limite la hauteur en fonction de l'écran
          - max-h-[62vh] : ne dépasse jamais ~60% de la hauteur d'écran (15")
        */}
                <div
                    className="relative mx-auto mt-6 overflow-hidden rounded-2xl border bg-black/5 sm:h-[70vh] max-w-[90vw] aspect-video"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    aria-roledescription="carousel"
                >
                    {/* Piste translatée */}
                    <div
                        className="flex h-full transition-transform duration-500"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                    >
                        {slides.map((s, i) => (
                            <div
                                key={`${s.src}-${i}`}
                                className="relative h-full w-full shrink-0"
                            >
                                {" "}
                                <p className="text-(--accent) z-5000 absolute text-center w-full  bg-black/80 py-1 text-sm md:text-base lg:text-lg font-semibold">
                                    {s.text}
                                </p>
                                {/* 
                  Image :
                  - fill + object-cover : couvre sans déformer
                  - sizes : optimisation responsive
                */}
                                <Image
                                    src={s.src}
                                    alt={s.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 635px) 100vw, (max-width: 1131px) 80vw, 900px"
                                    priority
                                />
                            </div>
                        ))}
                    </div>

                    {/* Flèche précédente (taille réduite) */}
                    <button
                        aria-label="Précédent"
                        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11  rounded-full bg-black/40 text-white text-3xl hover:bg-black/60  hover:text-(--accent) hover:cursor-pointer hover:scale-105 transition"
                        onClick={() =>
                            setIdx(
                                (i) => (i - 1 + slides.length) % slides.length
                            )
                        }
                    >
                        ‹
                    </button>

                    {/* Flèche suivante (taille réduite) */}
                    <button
                        aria-label="Suivant"
                        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 hover:text-(--accent) hover:cursor-pointer rounded-full bg-black/40 text-white text-3xl hover:bg-black/60  hover:scale-105 transition"
                        onClick={() => setIdx((i) => (i + 1) % slides.length)}
                    >
                        ›
                    </button>

                    {/* Puces (plus petites, espacées) */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Aller à la diapo ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2.5 w-2.5 rounded-full transition  hover:cursor-pointer hover:scale-120  ${
                                    i === idx
                                        ? "bg-(--accent) transform scale-125"
                                        : "bg-white/50 hover:bg-white/80"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
