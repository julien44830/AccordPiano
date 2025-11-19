// app/page.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Tarifs from "@/components/Tarifs";
import References from "@/components/References";
import CarouselLazy from "@/components/Carousel.lazy";

// Page unique avec sections + carrousel + galerie
export default function Page() {
    return (
        <main className="bg-black/80 ">
            <Hero />
            <Services />
            <About />
            <References />
            <CarouselLazy />
            <Tarifs />
        </main>
    );
}
