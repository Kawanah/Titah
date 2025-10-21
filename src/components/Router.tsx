import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { OffersPage } from './OffersPage';
import { FAQPage } from './FAQPage';
import { ContactPage } from './ContactPage';
import { PrivacyPage } from './PrivacyPage';
import { CookiesPage } from './CookiesPage';
import { ROUTES, Route, getDefaultRoute } from '../utils/routes';

interface RouterProps {
  currentRoute: Route;
  onNavigate: (page: string) => void;
}

/**
 * Composant Router - Gère le rendu des pages selon la route active
 */
export function Router({ currentRoute, onNavigate }: RouterProps) {
  switch (currentRoute) {
    case ROUTES.HOME:
      return <HomePage onNavigate={onNavigate} />;
    
    case ROUTES.ABOUT:
      return <AboutPage onNavigate={onNavigate} />;
    
    case ROUTES.OFFERS:
      return <OffersPage onNavigate={onNavigate} />;
    
    case ROUTES.FAQ:
      return <FAQPage onNavigate={onNavigate} />;
    
    case ROUTES.CONTACT:
      return <ContactPage />;
    
    case ROUTES.PRIVACY:
      return <PrivacyPage />;
    
    case ROUTES.COOKIES:
      return <CookiesPage />;
    
    default:
      // Fallback sur la page d'accueil si la route n'existe pas
      return <HomePage onNavigate={onNavigate} />;
  }
}
