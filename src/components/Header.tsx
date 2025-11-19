"use client";

import Link from "next/link";
import { useState } from "react";
import Piano from "./Pianos"; // adapte le chemin si besoin

export default function Header() {
    const [open, setOpen] = useState(false); // menu mobile
    const [isPianoOpen, setIsPianoOpen] = useState(false); // modale piano

    // 🔒 fermer le menu mobile
    const closeMenu = () => setOpen(false);

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
                            {/* Remplacer par <Image> si besoin */}
                            <img
                                src="/favicon-72x72.png"
                                alt="Logo EP Pianos"
                                className="h-10 w-10 md:h-12 md:w-12"
                            />
                        </button>
                        <Link
                            href="/"
                            className="leading-tight text-brand-accent hover:cursor-pointer"
                        >
                            <span className="inline-block text-sm md:text-base text-accent font-semibold">
                                ELISABETH{" "}
                            </span>{" "}
                            <span className="inline-block text-sm md:text-base text-brand-primary font-semibold">
                                PANHALEUX{" "}
                            </span>{" "}
                            <span className="inline-block text-sm md:text-base text-brand-primary font-semibold">
                                Pianos
                            </span>
                        </Link>
                    </div>

                    {/* Bouton mobile : toujours au-dessus du menu */}
                    <button
                        aria-label="Menu"
                        aria-expanded={open}
                        className="absolute right-4 top-1/2 z-50 p-2 text-2xl text-brand-primary hover:text-brand-accent md:hidden -translate-y-1/2"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link
                                    href="#services"
                                    className="hover:text-brand-accent"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="hover:text-brand-accent"
                                >
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#references"
                                    className="hover:text-brand-accent"
                                >
                                    Références
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#tarifs"
                                    className="hover:text-brand-accent"
                                >
                                    Tarifs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-white hover:opacity-90"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Navigation Mobile (dropdown plein écran sous le header) */}
                    <nav
                        className={`md:hidden ${
                            open ? "block" : "hidden"
                        } absolute left-0 right-0 top-full`}
                    >
                        <div
                            className="h-screen bg-black/70"
                            role="dialog"
                            aria-modal="true"
                            onMouseDown={(e) => {
                                if (e.target === e.currentTarget) closeMenu();
                            }}
                        >
                            <div className="border-b border-(--accent) bg-black/95 shadow-lg">
                                <ul className="flex flex-col py-3">
                                    <li>
                                        <Link
                                            onClick={closeMenu}
                                            href="#services"
                                            className="block px-4 py-3 hover:text-brand-accent"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={closeMenu}
                                            href="#about"
                                            className="block px-4 py-3 hover:text-brand-accent"
                                        >
                                            À propos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={closeMenu}
                                            href="#references"
                                            className="block px-4 py-3 hover:text-brand-accent"
                                        >
                                            Références
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={closeMenu}
                                            href="#tarifs"
                                            className="block px-4 py-3 hover:text-brand-accent"
                                        >
                                            Tarifs
                                        </Link>
                                    </li>

                                    <li className="px-4 pt-2">
                                        <Link
                                            onClick={closeMenu}
                                            href="#contact"
                                            className="inline-flex w-full items-center rounded-full bg-brand-primary text-white hover:opacity-90"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* 🎹 Modale du piano */}
            {isPianoOpen && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70"
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
