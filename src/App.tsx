import { Navigation } from './components/Navigation';
import { Router } from './components/Router';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';
import { useNavigation } from './utils/useNavigation';

/**
 * Application Principale - Titah
 * Site web de l'agence spécialisée dans les hébergeurs touristiques
 */
export default function App() {
  const { currentRoute, navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      {/* SEO - Meta tags dynamiques par page */}
      <SEO route={currentRoute} />
      
      {/* Structured Data - Schema.org JSON-LD */}
      <StructuredData route={currentRoute} />
      
      {/* Navigation principale */}
      <Navigation currentPage={currentRoute} onNavigate={navigate} />
      
      {/* Contenu de la page */}
      <main>
        <Router currentRoute={currentRoute} onNavigate={navigate} />
      </main>
      
      {/* Footer */}
      <Footer onNavigate={navigate} />
      
      {/* Bandeau cookies RGPD */}
      <CookieConsent onNavigate={navigate} />
    </div>
  );
}
