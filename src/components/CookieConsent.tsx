import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onNavigate: (page: string) => void;
}

export function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Délai de 1 seconde pour ne pas être trop intrusif au chargement
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      necessary: true,
      analytics: true,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl">
        <div className="bg-white rounded-[16px] shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header avec dégradé */}
          <div className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] h-1"></div>
          
          <div className="p-6 sm:p-8">
            {/* Titre */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#9b3eff]/10 to-[#ff6b35]/10 rounded-[12px] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9b3eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">
                  <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
                    Respect de votre vie privée
                  </span>
                </h3>
                <p className="text-[#717182] text-sm leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                  Ces cookies nous permettent de comprendre comment vous utilisez notre site et d'améliorer nos services.
                </p>
              </div>
            </div>

            {/* Détails des cookies (collapsible) */}
            {showDetails && (
              <div className="mb-6 space-y-4 bg-gray-50 rounded-[12px] p-4">
                <div className="space-y-3">
                  {/* Cookies nécessaires */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-[#44484F] mb-1">Cookies nécessaires</h4>
                      <p className="text-xs text-[#717182]">
                        Essentiels au fonctionnement du site (consentement cookies, session). 
                        <span className="font-medium text-[#44484F]"> Toujours actifs.</span>
                      </p>
                    </div>
                  </div>

                  {/* Cookies analytiques */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-[#44484F] mb-1">Cookies analytiques (optionnels)</h4>
                      <p className="text-xs text-[#717182]">
                        Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                        Aucune donnée personnelle identifiable n'est collectée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bouton pour afficher/masquer les détails */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-[#9b3eff] hover:underline mb-6 flex items-center gap-1"
            >
              {showDetails ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Masquer les détails
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Voir les détails
                </>
              )}
            </button>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white rounded-[5px] hover:shadow-lg transition-all"
              >
                Tout accepter
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 px-6 py-3 bg-white border-2 border-[#9b3eff] text-[#9b3eff] rounded-[5px] hover:bg-[#9b3eff] hover:text-white transition-all"
              >
                Nécessaires uniquement
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 sm:flex-initial px-6 py-3 bg-transparent text-[#717182] rounded-[5px] hover:bg-gray-100 transition-all"
              >
                Tout refuser
              </button>
            </div>

            {/* Liens légaux */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-4 justify-center text-xs text-[#717182]">
              <button
                onClick={() => {
                  onNavigate('privacy');
                  setShowBanner(false);
                }}
                className="hover:text-[#9b3eff] transition-colors"
              >
                Politique de confidentialité
              </button>
              <span className="text-gray-300">•</span>
              <button
                onClick={() => {
                  onNavigate('cookies');
                  setShowBanner(false);
                }}
                className="hover:text-[#9b3eff] transition-colors"
              >
                Politique de cookies
              </button>
              <span className="text-gray-300">•</span>
              <button
                onClick={() => {
                  onNavigate('legal');
                  setShowBanner(false);
                }}
                className="hover:text-[#9b3eff] transition-colors"
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
