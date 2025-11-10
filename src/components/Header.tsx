"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    // Fermer le menu mobile quand on clique sur un lien
    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
            {/* conteneur positionné pour le menu absolu */}
            <div className="relative mx-auto max-w-6xl px-4 flex h-16 md:h-20 items-center justify-between">
                {/* Logo + titre */}
                <Link
                    href="#top"
                    className="flex items-center gap-3"
                >
                    {/* Remplacer par <Image> si besoin */}
                    <img
                        src="/favicon-72x72.png"
                        alt="Logo EP Pianos"
                        className="h-10 w-10 md:h-12 md:w-12"
                    />
                    <div className="leading-tight ">
                        <span className="inline-block text-sm md:text-base text-brand-primary font-semibold">
                            ELISABETH{" "}
                        </span>{" "}
                        <span className="inline-block text-sm md:text-base text-brand-primary font-semibold">
                            PANHALEUX{" "}
                        </span>{" "}
                        <span className="inline-block text-sm md:text-base text-brand-primary font-semibold">
                            Pianos
                        </span>
                    </div>
                </Link>

                {/* Bouton mobile : toujours au-dessus du menu */}
                <button
                    aria-label="Menu"
                    aria-expanded={open}
                    className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-2xl text-brand-primary hover:text-brand-accent"
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
                        </li>{" "}
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
                        // Arrière-plan semi-opaque
                        className=" z-100  inset-0 bg-black/70  h-screen"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        onMouseDown={(e) => {
                            // Fermer si clic en dehors du contenu (cible = overlay)
                            // NB : on teste que la cible directe est ce conteneur (et pas un enfant)
                            if (e.target === e.currentTarget) closeMenu();
                        }}
                    >
                        <div className="bg-black/95 shadow-lg border-b border-(--accent)">
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
                                        className="inline-flex w-full items-center  rounded-full bg-brand-primary  text-white hover:opacity-90"
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
    );
}
