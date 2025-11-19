import Link from "next/link";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t bg-white"
        >
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-2">
                {/* Bloc Contact */}
                <div>
                    <h2 className="text-xl font-bold text-(--accent)">
                        Contact
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Loire-Atlantique et départements limitrophes — autres
                        régions sur devis.
                    </p>
                </div>

                {/* Bloc coordonnées */}
                <div className="flex flex-col gap-2 md:items-end text-[#694736] ">
                    <Link
                        href="mailto:pianos.elisabeth@gmail.com"
                        className="footer-a"
                    >
                        pianos.elisabeth@gmail.com
                    </Link>
                    <Link
                        href="tel:+33649841503"
                        className="footer-a"
                    >
                        +33 (0)6 49 84 15 03
                    </Link>
                </div>
            </div>

            {/* Bas de page */}
            <div className="py-4 text-center text-xs text-gray-500">
                <Link
                    href="/mentionlegale"
                    className="hover:underline mr-1"
                >
                    Mentions légales
                </Link>
                © {new Date().getFullYear()} Elisabeth Panhaleux Pianos. Tous
                droits réservés.
                <br />
                <span className="text-gray-400">
                    Site conçu et développé par Julien — Développeur Web
                </span>{" "}
            </div>
        </footer>
    );
}
