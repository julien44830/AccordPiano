import Link from "next/link";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t bg-white"
        >
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-2">
                <div>
                    <h2 className="text-xl font-bold text-brand-primary">
                        Contact
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Loire-Atlantique et départements limitrophes — autres
                        régions sur devis.
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                    <Link
                        href="mailto:pianos.elisabeth@gmail.com"
                        className="hover:text-brand-accent"
                    >
                        pianos.elisabeth@gmail.com
                    </Link>
                    <Link
                        href="tel:+33649841503"
                        className="hover:text-brand-accent"
                    >
                        +33 (0)6 49 84 15 03
                    </Link>
                </div>
            </div>
            <div className="py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} EP Pianos
            </div>
        </footer>
    );
}
