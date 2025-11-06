"use client";
import Link from "next/link";
import { useState } from "react";

// En-tête simple avec navigation par ancres
export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link
                    href="#top"
                    className="flex items-center gap-2"
                >
                    <span className="h-8 w-8 rounded-full bg-brand-primary inline-block" />
                    <span className="text-lg font-semibold">EP Pianos</span>
                </Link>
                <button
                    aria-label="Menu"
                    className="md:hidden p-2"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
                <nav className={`${open ? "block" : "hidden"} md:block`}>
                    <ul className="md:flex md:items-center md:gap-6">
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
                                href="#tarifs"
                                className="hover:text-brand-accent"
                            >
                                Tarifs
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
                                href="#contact"
                                className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-white hover:opacity-90"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
