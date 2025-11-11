export function LegalPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-[#9b3eff] mb-4">
            Informations légales
          </p>
          <h1 className="text-[40px] sm:text-[56px] font-bold mb-6">
            <span
              className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Mentions légales
            </span>
          </h1>
          <p className="text-[#717182] text-lg">
            Dernière mise à jour&nbsp;: 15 novembre 2025
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 text-[#1B1C1E]">
        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Éditeur du site</h2>
          <p className="text-[#44484F] leading-relaxed">
            Titah — Agence digitale dédiée aux hébergeur·euse·s touristiques<br />
            119-121 avenue du Général Leclerc, 93500 Pantin – France<br />
            Email&nbsp;: <a className="underline" href="mailto:welcome@titah.fr">welcome@titah.fr</a><br />
            Téléphone&nbsp;: communiqué sur demande
          </p>
          <p className="text-sm text-[#717182]">
            Entreprise individuelle immatriculée en France. TVA intracommunautaire&nbsp;:
            FR45998437765.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Directrice de la publication</h2>
          <p className="text-[#44484F] leading-relaxed">
            Sonia K., co-fondatrice de Titah.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Hébergement</h2>
          <p className="text-[#44484F] leading-relaxed">
            Le site est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a className="underline" href="https://vercel.com" target="_blank" rel="noreferrer">
              https://vercel.com
            </a>
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Propriété intellectuelle</h2>
          <p className="text-[#44484F] leading-relaxed">
            Tous les contenus présents sur le site (textes, images, illustrations, maquettes, logos)
            sont la propriété exclusive de Titah ou font l'objet d'autorisations d'utilisation.
            Toute reproduction, représentation ou diffusion sans autorisation écrite est interdite.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Responsabilité</h2>
          <p className="text-[#44484F] leading-relaxed">
            Titah met tout en œuvre pour fournir des informations fiables et à jour. Toutefois, la
            responsabilité de l'éditeur ne saurait être engagée en cas d'erreur ou d'omission.
            Le site peut contenir des liens vers des ressources externes&nbsp;; Titah n'est pas
            responsable du contenu publié sur ces sites tiers.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-[28px] font-semibold">Contact</h2>
          <p className="text-[#44484F] leading-relaxed">
            Pour toute question relative à ces mentions légales ou au site Titah.fr,
            vous pouvez nous écrire à&nbsp;: <a className="underline" href="mailto:welcome@titah.fr">welcome@titah.fr</a>.
          </p>
        </article>
      </section>
    </div>
  );
}
