export function CookiesPage() {
  const handleResetConsent = () => {
    localStorage.removeItem('cookie_consent');
    window.location.reload();
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-[40px] sm:text-[56px] mb-6">
            <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
              Politique de cookies
            </span>
          </h1>
          <p className="text-[#717182] text-lg">
            Dernière mise à jour : 20 octobre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-[32px] mb-6">
              <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
                Qu'est-ce qu'un cookie ?
              </span>
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) 
              lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et 
              préférences sur une période donnée.
            </p>
            <p className="text-[#44484F] leading-relaxed">
              Sur notre site, nous utilisons les cookies de manière responsable et transparente, 
              en conformité avec le RGPD et la directive ePrivacy.
            </p>
          </section>

          {/* Types de cookies */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              Types de cookies utilisés
            </h2>

            {/* Cookie nécessaire */}
            <div className="bg-green-50 border border-green-200 rounded-[12px] p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-[12px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] mb-2 text-[#1B1C1E]">
                    1. Cookies strictement nécessaires
                  </h3>
                  <p className="text-[#44484F] mb-3">
                    Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                  
                  <div className="bg-white rounded-[8px] p-4 mb-3">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-2 text-[#1B1C1E]">Nom</th>
                          <th className="text-left py-2 text-[#1B1C1E]">Durée</th>
                          <th className="text-left py-2 text-[#1B1C1E]">Finalité</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#44484F]">
                        <tr className="border-b border-green-100">
                          <td className="py-3 font-mono text-xs">cookie_consent</td>
                          <td className="py-3">13 mois</td>
                          <td className="py-3">Mémoriser vos préférences cookies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Toujours actifs - Aucun consentement requis (cookies techniques)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies analytiques */}
            <div className="bg-blue-50 border border-blue-200 rounded-[12px] p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-[12px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] mb-2 text-[#1B1C1E]">
                    2. Cookies analytiques (optionnels)
                  </h3>
                  <p className="text-[#44484F] mb-3">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer. 
                    Ils collectent des informations de manière anonyme.
                  </p>
                  
                  <div className="bg-white rounded-[8px] p-4 mb-3">
                    <p className="text-sm text-[#44484F] mb-2">
                      <strong>Données collectées (si vous acceptez) :</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm text-[#44484F] space-y-1">
                      <li>Pages visitées et temps passé</li>
                      <li>Parcours de navigation</li>
                      <li>Type d'appareil et navigateur</li>
                      <li>Résolution d'écran</li>
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-blue-800">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Nécessite votre consentement explicite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ce que nous n'utilisons PAS */}
            <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] mb-2 text-[#1B1C1E]">
                    Ce que nous N'utilisons PAS
                  </h3>
                  <p className="text-[#44484F] mb-3">
                    Pour respecter votre vie privée, nous n'utilisons pas :
                  </p>
                  <ul className="list-disc pl-5 text-sm text-[#44484F] space-y-1">
                    <li>❌ Cookies publicitaires ou de ciblage</li>
                    <li>❌ Cookies de réseaux sociaux tiers</li>
                    <li>❌ Tracking cross-site (suivi entre sites)</li>
                    <li>❌ Collecte d'adresses IP à des fins de tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Gérer vos préférences */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              Gérer vos préférences cookies
            </h2>
            
            <p className="text-[#44484F] leading-relaxed mb-6">
              Vous avez un contrôle total sur les cookies utilisés sur notre site.
            </p>

            <div className="bg-gradient-to-r from-[#9b3eff]/10 to-[#ff6b35]/10 rounded-[12px] p-6 mb-6">
              <h3 className="text-[20px] mb-4 text-[#1B1C1E]">
                Modifier vos préférences
              </h3>
              <p className="text-[#44484F] mb-4">
                Cliquez sur le bouton ci-dessous pour afficher à nouveau le bandeau de consentement 
                et modifier vos choix :
              </p>
              <button
                onClick={handleResetConsent}
                className="px-6 py-3 bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white rounded-[5px] hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Modifier mes préférences cookies
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-[20px] mb-4 text-[#1B1C1E]">
                Depuis votre navigateur
              </h3>
              <p className="text-[#44484F] mb-4">
                Vous pouvez également gérer les cookies directement depuis les paramètres de votre navigateur :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/fr/kb/activer-desactiver-cookies' },
                  { name: 'Safari', url: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                ].map((browser) => (
                  <a
                    key={browser.name}
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-[8px] hover:border-[#9b3eff] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-[8px] flex items-center justify-center group-hover:bg-[#9b3eff]/10 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-[#9b3eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#1B1C1E] mb-1">{browser.name}</p>
                      <p className="text-xs text-[#717182]">Aide en ligne</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#9b3eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              Durée de conservation
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Conformément à la réglementation :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li><strong>Cookies nécessaires :</strong> 13 mois maximum</li>
              <li><strong>Consentement cookies :</strong> 13 mois (puis redemandé)</li>
              <li><strong>Cookies analytiques :</strong> 13 mois maximum (si acceptés)</li>
            </ul>
          </section>

          {/* Plus d'informations */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              Pour en savoir plus
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Pour plus d'informations sur les cookies et vos droits :
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9b3eff] hover:underline flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  CNIL - Cookies et autres traceurs
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9b3eff] hover:underline flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  RGPD - Vos droits
                </a>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              Questions ?
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Pour toute question concernant notre utilisation des cookies :
            </p>
            <div className="bg-white border border-gray-200 rounded-[12px] p-6">
              <p className="text-[#44484F]">
                <strong>Email :</strong>{' '}
                <a href="mailto:welcome@titah.fr" className="text-[#9b3eff] hover:underline">
                  welcome@titah.fr
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
