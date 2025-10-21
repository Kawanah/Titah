import { useState, useCallback } from 'react';
import { Route, isValidRoute, getDefaultRoute } from './routes';

/**
 * Hook personnalisé pour gérer la navigation
 * Fournit une interface propre pour naviguer entre les pages
 */
export function useNavigation() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getDefaultRoute());

  /**
   * Navigate vers une nouvelle page
   * - Valide la route
   * - Scroll automatique en haut
   * - Log d'erreur si route invalide
   */
  const navigate = useCallback((page: string) => {
    if (isValidRoute(page)) {
      setCurrentRoute(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.warn(`Route invalide: ${page}. Redirection vers la page d'accueil.`);
      setCurrentRoute(getDefaultRoute());
    }
  }, []);

  /**
   * Vérifie si une route est la route active
   */
  const isActive = useCallback((route: string): boolean => {
    return currentRoute === route;
  }, [currentRoute]);

  return {
    currentRoute,
    navigate,
    isActive,
  };
}
