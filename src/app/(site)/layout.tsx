import "./globals.css"; // ⚠️ contient @import "tailwindcss";
import "./theme.css"; // ton thème sombre
import "../components/Piano.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
    metadataBase: new URL("https://www.accordpianos-panhaleux.fr/"),
    icons: { icon: [{ url: "/favicon-32x32.png", type: "image/svg+xml" }] },
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
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
