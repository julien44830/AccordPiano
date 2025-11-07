"use client";
import { useEffect, useRef } from "react";

const references = {
    "Concertistes piano": [
        "Jean-Efflam Bavouzet",
        "Abdel Rahman El Bacha",
        "France Clidat",
        "Monty Alexander",
        "Brad Mehldau",
        "Jacky Terrasson",
        "David Kikoski",
        "Muse",
        "Arthur H",
        "Racha Arodaky",
        "Cédric Thiberghien",
        "Barbara Hendricks",
        "Cyril Huvé",
        "Anne Queffelec",
        "François-René Duchable",
        "François-Frédéric Guy",
        "Claire Désert",
        "Jean-Claude Pennetier",
        "Michel Legrand",
        "Alberto Neuman",
        "Franck Avitabile",
        "Brigitte Engerer",
        "Yaron Herman",
        "Francesco Tristano",
        "Francis Lockwood",
        "Avishaï Cohen",
        "Emmanuel Strosser",
        "Alexandre Tharaud",
        "David Kadouche",
        "Bojan Z",
        "Dana Ciocarlie",
        "Marie-Joseph Jude",
        "Pascal Amoyel",
        "Yves Henri",
    ],

    Institutions: [
        "Orchestre National d’Île-de-France",
        "Radio France",
        "Maîtrise de Radio France",
        "Opéras de Paris",
        "École de Danse de l’Opéra National de Paris",
        "Opéra & Château de Versailles",
        "Théâtre du Châtelet",
        "Théâtre de la Ville",
        "Orchestre Poitou-Charentes",
        "Orchestre des Champs-Élysées",
    ],

    "Conservatoires et écoles de musique": [
        "La Rochelle",
        "Angoulême",
        "Montigny-le-Bretonneux",
        "Plaisir",
        "Saint-Germain-en-Laye",
        "Versailles",
        "Vélizy-Villacoublay",
        "Monfort-l’Amaury",
        "Antony",
        "Châtenay-Malabry",
        "Clamart",
        "Meudon",
        "Ville-d’Avray",
    ],

    Enregistrements: [
        "Cyril Huvé – Mendelssohn (Victoires de la Musique Classique 2010)",
        "Travail en équipe avec Gérard Fauvin & Bruno Naudin – Domaine Musical de Pétignac",
    ],

    "Accords et réglages sur pianos anciens": [
        "Pleyel 1843 ½ queue",
        "Steinway & Sons 227 cm 1883",
        "Grotrian Steinweg grand concert 1872",
        "Stein 1832",
        "Schanz 1883",
        "Carlo de Meglio 1843",
    ],

    "Compétences techniques": [
        "Accords, réglages, harmonisations et réparations de pianos",
        "Expertises et diagnostics",
        "Service concert & clientèle (Opéras, conservatoires, Radio France…)",
        "Pose de systèmes silencieux (sourdines numériques)",
        "Réglages mécaniques de pianos droits et à queue",
        "Harmonisation fine",
        "Service concert (Steinway D274, B211, pianofortes)",
    ],
};

export default function References() {
    return (
        <section
            id="references"
            className="py-16 "
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-8">
                    Références
                </h2>

                <div className="space-y-5">
                    {Object.entries(references).map(([category, items]) => (
                        <AutoScrollRow
                            key={category}
                            category={category}
                            items={items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --- Sous-composant pour une ligne défilante --- */
function AutoScrollRow({
    category,
    items,
}: {
    category: string;
    items: string[];
}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const speed = 0.15; // vitesse du défilement (ajuste si besoin)
        const scroll = () => {
            scrollAmount += speed;
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0; // boucle infinie
            }
            container.scrollLeft = scrollAmount;
            requestAnimationFrame(scroll);
        };
        scroll();
    }, []);

    return (
        <div>
            <h3 className="text-lg font-semibold text-brand-primary mb-1">
                {category}
            </h3>

            <div
                ref={scrollRef}
                className="flex overflow-hidden whitespace-nowrap select-none"
            >
                <div className="flex animate-scroll gap-2  border-b border-[var(--accent)] py-2">
                    {items.concat(items).map((item, i) => (
                        <span
                            key={`${item}-${i}`}
                            className="  px-3 py-1 text-sm text-brand-primary shadow-sm mx-1"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
