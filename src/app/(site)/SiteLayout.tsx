// src/app/(site)/layout.tsx
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
}
