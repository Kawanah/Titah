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
export type PageType = 'home' | 'about' | 'offers' | 'faq' | 'contact';
