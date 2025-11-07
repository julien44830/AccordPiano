// components/Tarifs.tsx
// ⚠️ Tous les commentaires sont en français

const tarifs = [
    { name: "Accord", price: "100 €" },
    { name: "Mise au diapason", price: "30 €" },
    { name: "Réglage & harmonisation", price: "60 €/h (sur devis)" },
    { name: "Expertise", price: "60 €" },
    { name: "Réparations", price: "Sur devis" },
];

export default function Tarifs() {
    return (
        <section
            id="tarifs"
            className="py-16 bg-black text-brand-light"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    Tarifs
                </h2>

                {/* texte secondaire lisible sur fond noir */}
                <p className="mt-2 text-sm text-zinc-300">
                    Déplacement inclus dans un rayon de 50 km, puis +0,30 €/km
                    (+ péages éventuels).
                </p>

                {/* ✅ carte sombre (plus d’héritage de texte clair sur blanc) */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur">
                    <ul className="divide-y divide-zinc-800">
                        {tarifs.map((t) => (
                            <li
                                key={t.name}
                                className="flex items-center justify-between px-1 sm:px-3 py-4"
                            >
                                <span className="font-medium text-zinc-100">
                                    {t.name}
                                </span>
                                <span className="font-semibold text-brand-primary">
                                    {t.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-4 text-sm text-zinc-400">
                    Concerts, conservatoires, écoles de musique, professeurs :
                    me contacter.
                </p>
            </div>
        </section>
    );
}
