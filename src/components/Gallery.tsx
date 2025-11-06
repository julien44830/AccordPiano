// components/Gallery.tsx
import Image from "next/image";

// Petite galerie statique en bas de page
export default function Gallery() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-6 md:grid-cols-2">
                    <figure className="relative overflow-hidden rounded-2xl border">
                        <Image
                            src="/images/reparations-upright.jpg"
                            alt="Mécanique de piano droit ouverte pour réparations"
                            width={1600}
                            height={1000}
                            className="h-auto w-full object-cover"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-sm text-white">
                            Réparations — mécanique de piano droit
                        </figcaption>
                    </figure>

                    <figure className="relative overflow-hidden rounded-2xl border">
                        <Image
                            src="/images/steinway.jpg"
                            alt="Clavier Steinway préparé pour concert"
                            width={1600}
                            height={1000}
                            className="h-auto w-full object-cover"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-sm text-white">
                            Préparation concert — Steinway &amp; Sons
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
