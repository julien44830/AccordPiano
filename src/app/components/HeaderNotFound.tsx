"use client";
import { useState } from "react";
import Piano from "./Pianos";

export default function HeaderNotFound() {
    const [open, setOpen] = useState(false); // menu mobile
    const [isPianoOpen, setIsPianoOpen] = useState(false); // modale piano

    // 🔒 fermer le menu mobile

    // 🎹 ouvrir / fermer la modale du piano
    const openPiano = () => setIsPianoOpen(true);
    const closePiano = () => setIsPianoOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
                {/* conteneur positionné pour le menu absolu */}
                <div className="relative mx-auto max-w-6xl px-4 flex h-16 md:h-20 items-center justify-between">
                    {/* Logo + titre -> devient un bouton qui ouvre la modale */}
                    <div className="flex items-center gap-3 focus:outline-none hover:cursor-pointer ">
                        <button
                            type="button"
                            onClick={openPiano}
                            className="flex items-center gap-3 focus:outline-none hover:cursor-pointer "
                            aria-label="Ouvrir le piano"
                        >
                            <img
                                src="/favicon-72x72.png"
                                alt="Logo EP Pianos"
                                className="h-10 w-10 md:h-12 md:w-12"
                            />
                        </button>
                        <a
                            href="/"
                            className="leading-tight text-brand-accent hover:cursor-pointer link text-sm md:text-base text-brand-primary font-semibold"
                        >
                            ELISABETH PANHALEUX Pianos
                        </a>
                    </div>
                </div>
            </header>

            {/* 🎹 Modale du piano */}
            {isPianoOpen && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center bg-black/70"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Piano interactif"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) closePiano();
                    }}
                >
                    {/* contenu de la modale */}
                    <div
                        className="relative w-full max-w-[80vw] md:max-w-xl border border-(--accent) rounded-xl 
                                bg-neutral-900/95 p-4 shadow-2xl"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        {/* bouton fermer */}
                        <button
                            type="button"
                            aria-label="Fermer le piano"
                            onClick={closePiano}
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center 
                                    rounded-full border border-gray-400/40 hover:bg-white/10 text-white"
                        >
                            ✕
                        </button>

                        {/* Titre */}
                        <h2 className="mb-3 pr-8 text-lg font-semibold text-white">
                            Piano virtuel
                        </h2>

                        {/* Ton piano */}
                        <Piano />
                    </div>
                </div>
            )}
        </>
    );
}
