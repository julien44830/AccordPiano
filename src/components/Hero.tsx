// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-[70vh] h-[90vh] w-full"
        >
            <Image
                src="/images/hero-keyboard.jpg"
                alt="Clavier ancien John Broadwood & Sons"
                fill
                priority
                className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-light leading-tight">
                        Technicienne pianos – Accord, réglage, harmonisation &
                        expertise
                    </h1>
                    <p className="mt-4 text-lg text-brand-light/80">
                        Loire-Atlantique et départements limitrophes. Autres
                        régions sur devis.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="mailto:pianos.elisabeth@gmail.com"
                            className="rounded-full bg-brand-primary px-5 py-3 text-white hover:opacity-90"
                        >
                            pianos.elisabeth@gmail.com
                        </Link>
                        <Link
                            href="tel:+33649841503"
                            className="rounded-full border border-brand-primary px-5 py-3 text-brand-primary hover:bg-brand-primary hover:text-white"
                        >
                            +33 (0)6 49 84 15 03
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
