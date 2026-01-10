import HeaderNotFound from "./components/HeaderNotFound";
import FooterNotFound from "./components/footerNotFound";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page introuvable — Elisabeth Panhalleux Pianos",
    description:
        "La page demandée est introuvable. Retournez à l’accueil ou consultez les mentions légales.",
    robots: {
        index: false,
        follow: true,
    },
};
// Page 404 (App Router)
// Fichier : src/app/not-found.tsx
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderNotFound />
            <main className="flex-1 flex items-center justify-center">
                {" "}
                <div className="mx-auto max-w-6xl px-4 py-8 ">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm font-semibold text-white/70">
                            Erreur 404
                        </p>

                        <h1 className="mt-3 text-3xl font-bold text-(--accent) md:text-4xl text-center">
                            Page introuvable
                        </h1>

                        <p className="mt-4 text-white text-center ">
                            Désolé, la page que vous cherchez n&apos;existe pas
                            ou a été déplacée.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 justify-center ">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center rounded-md bg-(--accent) px-4 py-2 text-sm font-semibold text-white hover:text-(--accent) hover:bg-white border border-(--accent) hover:scale-105 transition"
                            >
                                Retour à l&apos;accueil
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <FooterNotFound />
        </div>
    );
}
