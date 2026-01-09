import Link from "next/link";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t bg-white"
        >
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-2 relative">
                <a
                    className="absolute right-5 top-38 md:top-35"
                    href="https://www.artisanat.fr/metiers/labels-qualifications/qualite-artisan"
                    target="blanc"
                >
                    <img
                        className="w-16 h-auto"
                        src="/artisan-dart.png"
                        alt="logo des artisans d'art"
                    />{" "}
                </a>

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
                    {/* Bloc lien social */}
                    <div className="flex gap-4 mt-2">
                        <Link
                            href="https://www.instagram.com/elisabethpanhaleuxpianos/"
                            className="footer-a"
                            target="_blank"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 12 17a4.505 4.505 0 0 0 4.5-4.5A4.505 4.505 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 12 9.2a2.8 2.8 0 0 1 0 5.6zm4.7-7.9a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.facebook.com/Elisabethpanhaleuxpianos"
                            className="footer-a"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                            </svg>
                        </Link>
                    </div>
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
