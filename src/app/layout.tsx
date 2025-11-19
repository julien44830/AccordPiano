// app/layout.tsx
import "./globals.css"; // ⚠️ contient @import "tailwindcss";
import "./theme.css"; // ton thème sombre
import "../components/Piano.css";
import { Maitree } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const maitree = Maitree({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const metadata = {
    metadataBase: new URL("https://www.accordpianos-panhaleux.fr/"),
    title: "EP Pianos – Accord, réglage & harmonisation",
    icons: { icon: [{ url: "/favicon-32x32.png", type: "image/svg+xml" }] },
    description:
        "Technicienne accordeur diplômée. Accord, réglage, harmonisation et expertise de pianos en Loire-Atlantique et régions voisines.",
    openGraph: {
        title: "EP Pianos – Accord, réglage & harmonisation",
        description:
            "Technicienne accordeur diplômée. Accord, réglage, harmonisation et expertise de pianos.",
        url: "https://www.accordpianos-panhaleux.fr/",
        siteName: "EP Pianos",
        images: [
            {
                url: "/images/hero-keyboard.jpg",
                width: 1200,
                height: 630,
                alt: "Piano à queue – EP Pianos",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    alternates: {
        canonical: "https://www.accordpianos-panhaleux.fr/",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="fr"
            className={maitree.className}
        >
            <body className="bg-brand-dark text-brand-light antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
