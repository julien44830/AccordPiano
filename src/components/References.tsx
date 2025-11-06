const refs = [
    // Liste condensée pour lisibilité ; compléter si nécessaire
    "Alexandre Tharaud",
    "Anne Queffelec",
    "François-Frédéric Guy",
    "Jean-Efflam Bavouzet",
    "Radio France",
    "Opéras de Paris",
    "Opéra & Château de Versailles",
];

export default function References() {
    return (
        <section
            id="references"
            className="py-16"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                    Références
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700">
                    {refs.map((r) => (
                        <li
                            key={r}
                            className="rounded-full border px-3 py-1 bg-white"
                        >
                            {r}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
