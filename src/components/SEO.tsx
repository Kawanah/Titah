import { useEffect } from 'react';
import { Route } from '../utils/routes';
import { getPageMeta, generateTitle, SITE_URL, SITE_INFO } from '../utils/seo';

interface SEOProps {
  route: Route;
}

/**
 * Composant SEO - Gère les meta tags et structured data
 * Met à jour le <head> dynamiquement pour chaque page
 */
export function SEO({ route }: SEOProps) {
  const meta = getPageMeta(route);

  useEffect(() => {
    // Mettre à jour le titre
    document.title = generateTitle(meta.title);

    // Fonction helper pour créer/mettre à jour une meta tag
    const updateMetaTag = (
      selector: string,
      attribute: string,
      value: string
    ) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (attribute === 'name') {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        } else if (attribute === 'property') {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Mettre à jour description
    updateMetaTag('meta[name="description"]', 'name', meta.description);

    // Mettre à jour keywords
    updateMetaTag('meta[name="keywords"]', 'name', meta.keywords.join(', '));

    // Canonical URL
    const canonical = meta.canonical || `${SITE_URL}/${route === 'home' ? '' : route}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // Robots (noindex si spécifié)
    if (meta.noindex) {
      updateMetaTag('meta[name="robots"]', 'name', 'noindex, nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', meta.title);
    updateMetaTag('meta[property="og:description"]', 'property', meta.description);
    updateMetaTag('meta[property="og:url"]', 'property', canonical);
    updateMetaTag('meta[property="og:type"]', 'property', route === 'home' ? 'website' : 'article');
    updateMetaTag('meta[property="og:site_name"]', 'property', SITE_INFO.fullName);
    updateMetaTag('meta[property="og:locale"]', 'property', 'fr_FR');
    
    if (meta.ogImage) {
      updateMetaTag('meta[property="og:image"]', 'property', meta.ogImage);
      updateMetaTag('meta[property="og:image:width"]', 'property', '1200');
      updateMetaTag('meta[property="og:image:height"]', 'property', '630');
      updateMetaTag('meta[property="og:image:alt"]', 'property', meta.title);
    }

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'name', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', meta.title);
    updateMetaTag('meta[name="twitter:description"]', 'name', meta.description);
    if (meta.ogImage) {
      updateMetaTag('meta[name="twitter:image"]', 'name', meta.ogImage);
    }
    // updateMetaTag('meta[name="twitter:site"]', 'name', '@titah'); // Si compte Twitter

    // Langue
    document.documentElement.lang = 'fr';

  }, [route, meta]);

  return null; // Ce composant ne rend rien visuellement
}
