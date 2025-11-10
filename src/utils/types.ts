/**
 * Shared TypeScript interfaces and types
 */

/**
 * Navigation prop for page components
 */
export interface NavigationProps {
  onNavigate: (page: string) => void;
}

/**
 * Page type for routing
 */
export type PageType = 'home' | 'about' | 'models' | 'offers' | 'faq' | 'contact';
