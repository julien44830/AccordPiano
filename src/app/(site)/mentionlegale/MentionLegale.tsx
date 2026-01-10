// Objet de configuration pour toutes les informations susceptibles de changer
const legalInfo = {
    siteUrl: "https://www.accordpianos-panhaleux.fr", // URL complète du site
    domain: "www.accordpianos-panhaleux.fr", // Nom de domaine (sans https)
    companyName: "Elisabeth Panhaleux Pianos", // Nom commercial
    legalForm: "entreprise individuelle", // Forme juridique
    siret: "444 328 967 00021",
    addressLine1: "22 rue de la salmoniere",
    addressLine2: "44450 saint julien de Concelles",
    phone: "+33 (0)6 49 84 15 03",
    email: "pianoselisabeth@gmail.com",
    directorName: "Elisabeth Panhaleux", // Directeur de la publication
    cityCourts: "Nantes", // Ville du tribunal compétent
};

// Informations sur l'hébergeur (moins susceptibles de changer mais centralisées aussi)
const hostInfo = {
    name: "Vercel Inc.",
    addressLine1: "650 California St",
    addressLine2: "San Francisco, CA 94108, US",
    website: "https://vercel.com",
};

export default function MentionLegale() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-16 text-brand-light">
            <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

            {/* Introduction légale */}
            <section className="mb-8">
                <p className="mb-4">
                    Conformément aux dispositions des articles 6-III et 19 de la
                    loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                    l&apos;économie numérique (L.C.E.N.), il est porté à la
                    connaissance des utilisateurs du site {legalInfo.domain} les
                    présentes mentions légales.
                </p>
                <p className="mb-4">
                    La connexion et la navigation sur le site {legalInfo.domain}{" "}
                    valent acceptation pleine et entière des présentes mentions
                    légales.
                </p>
            </section>

            {/* Éditeur du site */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
                <p className="mb-4">
                    Le site {legalInfo.domain} est édité par :
                </p>
                <p className="mb-4">
                    <strong>{legalInfo.companyName}</strong> (
                    {legalInfo.legalForm})
                    <br />
                    SIRET : {legalInfo.siret}
                    <br />
                    Adresse : {legalInfo.addressLine1}
                    <br />
                    {legalInfo.addressLine2}
                    <br />
                    Téléphone : {legalInfo.phone}
                    <br />
                    Email :{" "}
                    <a
                        href={`mailto:${legalInfo.email}`}
                        className="text-brand-accent hover:underline"
                    >
                        {legalInfo.email}
                    </a>
                </p>
                <p className="mb-4">
                    Directeur de la publication :{" "}
                    <strong>{legalInfo.directorName}</strong>
                </p>
                <p className="mb-4">
                    Le cas échéant : TVA non applicable, article 293 B du CGI.
                </p>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
                <p className="mb-4">Le site est hébergé par :</p>
                <p className="mb-4">
                    {hostInfo.name}
                    <br />
                    {hostInfo.addressLine1}
                    <br />
                    {hostInfo.addressLine2}
                    <br />
                    Site web :{" "}
                    <a
                        href={hostInfo.website}
                        target="_blank"
                        className="text-brand-accent hover:underline"
                    >
                        {hostInfo.website}
                    </a>
                </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Propriété intellectuelle
                </h2>
                <p className="mb-4">
                    L&apos;ensemble du contenu du site {legalInfo.domain},
                    incluant de manière non limitative les textes, images,
                    photographies, graphismes, logos, icônes, vidéos, sons,
                    ainsi que la mise en page, est la propriété exclusive de{" "}
                    {legalInfo.companyName}, sauf mention contraire.
                </p>
                <p className="mb-4">
                    Toute reproduction, représentation, modification,
                    publication, adaptation de tout ou partie des éléments du
                    site, quel que soit le moyen ou le procédé utilisé, est
                    interdite sans l&apos;autorisation écrite préalable de{" "}
                    {legalInfo.companyName}.
                </p>
                <p className="mb-4">
                    Toute exploitation non autorisée du site ou de l&apos;un
                    quelconque des éléments qu&apos;il contient sera considérée
                    comme constitutive d&apos;une contrefaçon et poursuivie
                    conformément aux dispositions des articles L.335-2 et
                    suivants du Code de la propriété intellectuelle.
                </p>
            </section>

            {/* Données personnelles + politique de confidentialité */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Données personnelles et politique de confidentialité
                </h2>

                <p className="mb-4">
                    Le site {legalInfo.domain} est un site vitrine destiné à
                    présenter l&apos;activité de {legalInfo.companyName}. Le
                    site ne propose pas de création de compte, ne comprend aucun
                    formulaire de contact et ne collecte aucune donnée
                    personnelle via des outils interactifs.
                </p>

                <p className="mb-4">
                    Aucune donnée personnelle n&apos;est enregistrée, stockée ou
                    exploitée lors de votre navigation sur le site. Les seules
                    informations susceptibles d&apos;être transmises sont celles
                    que vous choisissez de communiquer volontairement lors
                    d&apos;un contact par email ou par téléphone. Ces
                    informations ne sont utilisées que pour répondre à votre
                    demande et ne sont en aucun cas transmises à des tiers.
                </p>

                <p className="mb-4">
                    Conformément au Règlement Général sur la Protection des
                    Données (RGPD) et à la loi Informatique et Libertés, vous
                    disposez d&apos;un droit d&apos;accès, de rectification,
                    d&apos;effacement et d&apos;opposition concernant les
                    éventuelles données vous concernant. Vous pouvez exercer ces
                    droits en contactant :
                </p>

                <p className="mb-4">
                    {legalInfo.companyName} <br />
                    {legalInfo.addressLine1} <br />
                    {legalInfo.addressLine2} <br />
                    Email :{" "}
                    <a
                        href={`mailto:${legalInfo.email}`}
                        className="text-brand-accent hover:underline"
                    >
                        {legalInfo.email}
                    </a>
                </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p className="mb-4">
                    Le site {legalInfo.domain} n&apos;utilise pas de cookies de
                    suivi ou de publicité et ne recourt pas à des outils de
                    mesure d&apos;audience intrusifs (type Google Analytics) ni
                    à des traceurs tiers à des fins commerciales.
                </p>
                <p className="mb-4">
                    Des cookies strictement nécessaires au fonctionnement du
                    site peuvent être utilisés (par exemple, liés à
                    l&apos;hébergement ou à la sécurité). Ces cookies ne
                    permettent pas de vous identifier personnellement et ne sont
                    pas utilisés pour le suivi de votre navigation à des fins
                    marketing.
                </p>
                <p className="mb-4">
                    Vous pouvez configurer votre navigateur pour refuser tout ou
                    partie des cookies. Toutefois, le blocage de certains
                    cookies techniques pourrait altérer le bon fonctionnement du
                    site.
                </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
                <p className="mb-4">
                    {legalInfo.companyName} s&apos;efforce de fournir sur le
                    site {legalInfo.domain} des informations aussi précises que
                    possible. Toutefois, elle ne pourra être tenue responsable
                    des omissions, inexactitudes ou carences dans la mise à
                    jour, qu&apos;elles soient de son fait ou du fait des tiers
                    partenaires qui lui fournissent ces informations.
                </p>
                <p className="mb-4">
                    Les photos et visuels présentés sur le site sont non
                    contractuels.
                </p>
            </section>

            {/* Droit applicable */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Droit applicable et litiges
                </h2>
                <p className="mb-4">
                    Les présentes mentions légales sont régies par le droit
                    français. En cas de litige et à défaut de résolution
                    amiable, le différend sera porté devant les tribunaux
                    compétents du ressort de {legalInfo.cityCourts}.
                </p>
            </section>
        </main>
    );
}
