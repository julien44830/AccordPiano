// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // ⚠️ contient @import "tailwindcss";
import "./theme.css"; // ton thème sombre
import { Maitree } from "next/font/google";

const maitree = Maitree({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
    title: "EP Pianos – Accord & réglage",
    description:
        "Technicienne accordeur de pianos et clavecins. Accord, réglage, harmonisation et restauration en Loire-Atlantique et alentours.",
    icons: { icon: [{ url: "/favicon-32x32.png", type: "image/svg+xml" }] },
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
                {children}
            </body>
        </html>
    );
}
