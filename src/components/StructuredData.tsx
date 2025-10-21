import { useEffect } from 'react';
import { Route } from '../utils/routes';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../utils/seo';

interface StructuredDataProps {
  route: Route;
}

/**
 * Composant Structured Data (Schema.org)
 * Injecte les données structurées JSON-LD dans le <head>
 */
export function StructuredData({ route }: StructuredDataProps) {
  useEffect(() => {
    // Nettoyer les anciens scripts structured data
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"]');
    oldScripts.forEach((script) => script.remove());

    // Ajouter Organization schema sur toutes les pages
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(ORGANIZATION_SCHEMA);
    document.head.appendChild(orgScript);

    // Ajouter WebSite schema sur la page d'accueil
    if (route === 'home') {
      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.text = JSON.stringify(WEBSITE_SCHEMA);
      document.head.appendChild(websiteScript);
    }

    // Note: Pour la page FAQ, le schema sera ajouté directement dans FAQPage.tsx
    // car il nécessite les données des questions

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((script) => script.remove());
    };
  }, [route]);

  return null;
}
