// components/Services.tsx
// ⚠️ Tous les commentaires sont en français
const services = [
    {
        title: "Accord",
        description:
            "Accorder le piano pour obtenir une justesse harmonieuse adaptée au style de jeu.",
    },
    {
        title: "Mise au diapason",
        description:
            "Réajuster la hauteur du La à 440 Hz (ou selon demande) pour l’uniformiser.",
    },
    {
        title: "Réglage",
        description:
            "Optimiser la mécanique (25 points par touche sur un quart-de-queue) pour un toucher réactif et confortable.",
    },
    {
        title: "Harmonisation",
        description:
            "Travailler les têtes de marteaux pour équilibrer timbre et puissance sonore.",
    },
    {
        title: "Restauration & Réparations",
        description:
            "Remplacement de pièces, réglage fin, nettoyage, reprise de table, mécanique et clavier.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="py-16 bg-black text-brand-light"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    Services
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 text-zinc-100 shadow-md backdrop-blur transition hover:bg-zinc-800/90 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-brand-primary mb-2">
                                {s.title}
                            </h3>
                            <p className="text-zinc-300 leading-relaxed">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
