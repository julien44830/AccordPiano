import "./globals.css"; // ⚠️ contient @import "tailwindcss";
import "./theme.css"; // ton thème sombre
import "../components/Piano.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
