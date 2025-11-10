// components/Carousel.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// --- Données ---
// (garder le contenu tel quel)
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
    // --- index de la diapo courante ---
    const [idx, setIdx] = useState(0);

    // --- références pour la pause auto (visibilité/viewport) ---
    const sectionRef = useRef<HTMLElement | null>(null);
    const isVisibleRef = useRef(true);
    const isUserHoveringRef = useRef(false);

    // --- auto-lecture toutes les 4s (seulement si visible) ---
    useEffect(() => {
        // commentaire : fonction d’avance d’une diapo
        const tick = () => setIdx((i) => (i + 1) % slides.length);

        let intervalId: number | null = null;
        const start = () => {
            // commentaire : évite de jouer si l’utilisateur survole (desktop)
            if (intervalId == null && !isUserHoveringRef.current) {
                intervalId = window.setInterval(tick, 4000);
            }
        };
        const stop = () => {
            if (intervalId != null) {
                clearInterval(intervalId);
                intervalId = null;
            }
        };

        // commentaire : pause si onglet inactif
        const onVis = () => {
            if (document.hidden) stop();
            else if (isVisibleRef.current) start();
        };
        document.addEventListener("visibilitychange", onVis);

        // commentaire : pause si hors écran (20% visibles mini)
        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                isVisibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting && !document.hidden) start();
                else stop();
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) io.observe(sectionRef.current);

        // démarrage initial
        if (!document.hidden) start();

        return () => {
            stop();
            document.removeEventListener("visibilitychange", onVis);
            io.disconnect();
        };
    }, []);

    // --- navigation manuelle (mémoïsée) ---
    const prev = useCallback(
        () => setIdx((i) => (i - 1 + slides.length) % slides.length),
        []
    );
    const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);

    // --- drag / swipe (simple mais efficace) ---
    const startX = useRef<number | null>(null);
    const onPointerDown = useCallback((e: React.PointerEvent) => {
        startX.current = e.clientX;
    }, []);
    const onPointerUp = useCallback(
        (e: React.PointerEvent) => {
            if (startX.current === null) return;
            const delta = e.clientX - startX.current;
            if (Math.abs(delta) > 40) delta > 0 ? prev() : next();
            startX.current = null;
        },
        [next, prev]
    );

    // --- virtualisation : on rend seulement -1 / 0 / +1 ---
    const visibleIdx = useMemo(() => {
        const left = (idx - 1 + slides.length) % slides.length;
        const right = (idx + 1) % slides.length;
        return new Set([left, idx, right]);
    }, [idx]);

    return (
        <section
            ref={sectionRef}
            className="bg-black text-brand-light"
            onMouseEnter={() => (isUserHoveringRef.current = true)}
            onMouseLeave={() => (isUserHoveringRef.current = false)}
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    En images
                </h2>

                {/* 
          Conteneur du carrousel :
          - style conservé
          - virtualisation des slides
        */}
                <div
                    className="relative mx-auto mt-6 overflow-hidden rounded-2xl border border-(--accent) bg-black/5 sm:h-[70vh] max-w-[90vw] aspect-video"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    aria-roledescription="carousel"
                >
                    {/* Piste translatée */}
                    <div
                        className="flex h-full transition-transform duration-500 will-change-transform"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                    >
                        {slides.map((s, i) => {
                            const isVisible = visibleIdx.has(i);
                            return (
                                <div
                                    key={`${s.src}-${i}`}
                                    className="relative h-full w-full shrink-0"
                                >
                                    {/* Bandeau texte (conservé) */}
                                    <p className="z-10 absolute w-full text-center bg-black/80 py-1 text-sm md:text-base lg:text-lg font-semibold text-(--accent)">
                                        {s.text}
                                    </p>

                                    {/* 
                    Image :
                    - rendue seulement pour les 3 slides visibles
                    - sizes: 100vw (mobile friendly)
                    - quality: 75 (bon compromis)
                    - priority uniquement sur la toute première du carrousel
                  */}
                                    {isVisible ? (
                                        <Image
                                            src={s.src}
                                            alt={s.alt}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                            quality={75}
                                            priority={i === 0}
                                        />
                                    ) : (
                                        // commentaire : slot vide pour conserver la largeur sans coût image
                                        <div
                                            className="absolute inset-0"
                                            aria-hidden
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Flèche précédente (style conservé) */}
                    <button
                        aria-label="Précédent"
                        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 rounded-full bg-black/40 text-white text-3xl hover:bg-black/60 hover:text-(--accent) hover:cursor-pointer hover:scale-105 transition"
                        onClick={prev}
                    >
                        ‹
                    </button>

                    {/* Flèche suivante (style conservé) */}
                    <button
                        aria-label="Suivant"
                        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 rounded-full bg-black/40 text-white text-3xl hover:bg-black/60 hover:cursor-pointer hover:scale-105 transition hover:text-(--accent)"
                        onClick={next}
                    >
                        ›
                    </button>

                    {/* Puces (style conservé) */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Aller à la diapo ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2.5 w-2.5 rounded-full transition ${
                                    i === idx
                                        ? "bg-(--accent) scale-125"
                                        : "bg-white/50 hover:bg-white/80 hover:scale-125"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
