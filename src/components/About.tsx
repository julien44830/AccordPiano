export default function About() {
    return (
        <section
            id="about"
            className="py-16 bg-white"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-(--accent)">
                    À propos
                </h2>
                {/* Remplace le <p> actuel par ce bloc (Next.js + Tailwind) */}
                <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
                    {/* Parcours & diplômes */}
                    <p>
                        Diplômée du{" "}
                        <strong>Certificat d’Aptitude Professionnelle</strong>{" "}
                        en 2006, puis du{" "}
                        <strong>Brevet des Métiers d’Art</strong> en 2008, j’ai
                        débuté mon métier au{" "}
                        <strong>Domaine Musical de Pétignac</strong>, réputé
                        pour ses <strong>restaurations</strong> de pianos
                        anciens, son auditorium <strong>Steinway & Sons</strong>
                        , pour sa fête de la Musique et du Silence, pour tous
                        les apprentis qu’il forme. J’y ai aussi entretenu les{" "}
                        <strong> pianos, pianofortes et clavecins</strong> des
                        petits et grands. Ce fut le coup de foudre pour ce
                        métier qui se nourrit de rencontres et de travail de
                        précision et de rigueur.{" "}
                    </p>
                    <p>
                        J’ai ensuite rejoint <strong>Pianos Hanlet</strong> en
                        région parisienne, grande Maison connue pour avoir été
                        pendant 90 ans l’importateur français de{" "}
                        <strong>Steinway & Sons</strong>, et pour la qualité de
                        son <strong>service concert</strong>. J’ai pu confirmer
                        mon goût pour la relation et le dialogue avec le
                        pianiste en prenant part au service concert ou en
                        effectuant l’entretien des pianos des{" "}
                        <strong>Opéras de Paris</strong> et de nombreux{" "}
                        <strong>conservatoires</strong> et{" "}
                        <strong>écoles de musique</strong>.
                    </p>
                    <p>
                        En 2016 eu la chance de rejoindre la nouvelle équipe des{" "}
                        <strong>pianos Pleyel</strong>, qui a lancé une
                        véritable aventure de renouveau de cette marque,
                        emblématique et représentative du{" "}
                        <strong>Savoir-Faire</strong> à la française.
                    </p>
                    <p>
                        C’est grâce à ces <strong>expériences</strong> que j’ai
                        pu réunir les <strong>compétences</strong> et{" "}
                        <strong>l’expertise</strong> nécessaires aux{" "}
                        <strong>prestations</strong> que je propose aujourd’hui.
                    </p>
                </div>
            </div>
        </section>
    );
}
