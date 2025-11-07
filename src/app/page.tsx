// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Tarifs from "@/components/Tarifs";
import References from "@/components/References";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/Carousel"), {
    ssr: false, // empêche le rendu serveur
    loading: () => (
        <div className="aspect-video w-full bg-gray-200 animate-pulse rounded-xl" />
    ),
});
import Footer from "@/components/Footer";

// Page unique avec sections + carrousel + galerie
export default function Page() {
    return (
        <main className="bg-black/80 ">
            <Header />
            <Hero />
            <Services />
            <About />
            <References />
            <Carousel />
            <Tarifs />
            <Footer />
        </main>
    );
}
