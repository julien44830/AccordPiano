// components/Carousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Carrousel minimaliste (auto-play, boutons, drag/swipe)
const slides = [
    { src: "/images/steinway.jpg", alt: "Clavier de piano Steinway & Sons" },
    {
        src: "/images/reglage-renner.jpg",
        alt: "Mécanique de piano - réglage Renner",
    },
    {
        src: "/images/cordes-rouge.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano1.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano2.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano3.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano4.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano5.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
    {
        src: "/images/piano6.jpg",
        alt: "Cordes de piano et feutres rouges",
    },
];

export default function Carousel() {
    // index de la diapo affichée
    const [idx, setIdx] = useState(0);

    // auto-lecture toutes les 4s
    useEffect(() => {
        const t = setInterval(
            () => setIdx((i) => (i + 1) % slides.length),
            4000
        );
        return () => clearInterval(t);
    }, []);

    // gestion drag/swipe simple
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
        <section className="py-16 bg-black text-brand-light">
            {" "}
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    En images
                </h2>

                {/* Vue carrousel */}
                <div
                    className="relative mt-6 overflow-hidden rounded-2xl border bg-black/5"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                >
                    {/* Piste translatée */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                    >
                        {slides.map((s) => (
                            <div
                                key={s.src}
                                className="relative aspect-video w-full shrink-0"
                            >
                                <Image
                                    src={s.src}
                                    alt={s.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Contrôles */}
                    <button
                        aria-label="Précédent"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 hover:bg-white"
                        onClick={() =>
                            setIdx(
                                (i) => (i - 1 + slides.length) % slides.length
                            )
                        }
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Suivant"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 hover:bg-white"
                        onClick={() => setIdx((i) => (i + 1) % slides.length)}
                    >
                        ›
                    </button>

                    {/* Puces d’indicateur */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Aller à la diapo ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2 w-2 rounded-full ${
                                    i === idx
                                        ? "bg-accent-primary"
                                        : "bg-accent-light"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
