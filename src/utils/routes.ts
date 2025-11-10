/**
 * Routes Configuration
 * Centralise toutes les routes de l'application
 */

export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  MODELS: 'models',
  OFFERS: 'offers',
  FAQ: 'faq',
  CONTACT: 'contact',
  PRIVACY: 'privacy',
  COOKIES: 'cookies',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];

/**
 * Vérifie si une route existe
 */
export function isValidRoute(route: string): route is Route {
  return Object.values(ROUTES).includes(route as Route);
}

/**
 * Retourne la route par défaut
 */
export function getDefaultRoute(): Route {
  return ROUTES.HOME;
}
