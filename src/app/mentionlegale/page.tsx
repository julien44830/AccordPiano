// src/app/mentionlegale/page.tsx
import MentionLegale from "./MentionLegale";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales – EP Pianos",
    description:
        "Mentions légales du site EP Pianos – informations légales et coordonnées.",
    alternates: {
        // Sera résolu en https://www.accordpianos-panhaleux.fr/mentionlegale
        canonical: "/mentionlegale",
    },
};

// composant page pour la route /mentionlegale
export default function MentionLegalePage() {
    return <MentionLegale />;
}
