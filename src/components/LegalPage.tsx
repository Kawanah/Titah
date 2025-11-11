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
          <p className="text-[#717182] text-lg mt-2">
            Dernière mise à jour&nbsp;: 15 novembre 2025
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 text-[#1B1C1E]">
        <article className="space-y-4">
          <h2 className="text-[28px] font-bold">Éditeur</h2>
          <p className="text-[#44484F] leading-relaxed">
            <strong>www.titah.fr</strong> est le site officiel de l’agence Titah.<br />
            SAS au capital de 1&nbsp;000&nbsp;€<br />
            Siège social&nbsp;: 22 rue Auguste Péron – 93100 Montreuil<br />
            N° SIREN&nbsp;: 920&nbsp;288&nbsp;677<br />
            N° TVA intracommunautaire&nbsp;: FR51&nbsp;920&nbsp;288&nbsp;677<br />
            Mail&nbsp;: <a className="underline" href="mailto:welcome@titah.fr">welcome@titah.fr</a>
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Directrice de la publication</h2>
          <p className="text-[#44484F] leading-relaxed">
            Sonia Ben Messaoud-Chahed, fondatrice et directrice de l’agence.
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Conception et réalisation</h2>
          <p className="text-[#44484F] leading-relaxed">
            Rédaction&nbsp;: Titah<br />
            Conception et développement&nbsp;: Titah<br />
            Charte graphique&nbsp;: Laetitia Martin – <a className="underline" href="mailto:laetmartin@gmail.com">laetmartin@gmail.com</a>
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Crédits</h2>
          <p className="text-[#44484F] leading-relaxed">
            Images&nbsp;: AdobeStock, sauf mention contraire.<br />
            Illustrations portraits équipe&nbsp;: Laetitia Martin.
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Hébergeur</h2>
          <p className="text-[#44484F] leading-relaxed">
            o2switch<br />
            Chemin des Pardiaux – 63000 Clermont-Ferrand<br />
            Tél.&nbsp;: 04&nbsp;44&nbsp;44&nbsp;60&nbsp;40
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Propriété intellectuelle</h2>
          <p className="text-[#44484F] leading-relaxed">
            Tous les éléments du site www.titah.fr sont protégés par le droit d’auteur,
            la marque déposée et autres droits de propriété intellectuelle. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication, même partielle,
            est strictement interdite sans accord écrit de l’agence Titah.
          </p>
          <p className="text-[#44484F] leading-relaxed">
            Le droit de reproduction et/ou de représentation des données du site est exclusivement
            destiné à l’usage privé et aux seules fins de consultation personnelle et privée des
            utilisateurs. Le droit applicable est le droit français.
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Données personnelles</h2>
          <p className="text-[#44484F] leading-relaxed">
            Nous respectons la vie privée de nos utilisateurs et protégeons les données collectées
            (nom, e-mail, adresse IP). Elles servent uniquement à fournir les services demandés et
            améliorer l’expérience utilisateur. Elles ne sont ni vendues ni utilisées à des fins
            publicitaires.
          </p>
          <p className="text-[#44484F] leading-relaxed">
            Pour exercer vos droits d’accès, de modification ou de suppression, contactez-nous à&nbsp;
            <a className="underline" href="mailto:welcome@titah.fr">welcome@titah.fr</a>. Nous répondrons
            dans les meilleurs délais. En utilisant notre site, vous acceptez notre politique de confidentialité.
          </p>
        </article>

        <article className="space-y-4 pt-4">
          <h2 className="text-[28px] font-bold">Cookies et liens hypertextes</h2>
          <p className="text-[#44484F] leading-relaxed">
            Le site www.titah.fr contient des liens vers d’autres sites. Titah n’exerce aucun contrôle sur ces
            ressources externes et décline toute responsabilité quant à leur contenu.
          </p>
          <p className="text-[#44484F] leading-relaxed">
            Nous utilisons des cookies de session et persistants pour faciliter la navigation et améliorer le site.
            Vous pouvez les désactiver via les paramètres de votre navigateur, mais certaines fonctionnalités
            pourraient alors être limitées. En continuant à utiliser le site, vous acceptez l’usage de cookies
            conformément à notre politique dédiée.
          </p>
        </article>
      </section>
    </div>
  );
}
