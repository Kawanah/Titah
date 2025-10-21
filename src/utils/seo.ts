/**
 * Configuration SEO - Titah
 * Meta tags, Open Graph, Twitter Cards et Structured Data
 */

import { Route } from './routes';

/**
 * Métadonnées SEO par page
 */
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Base URL du site (à modifier selon environnement)
 */
export const SITE_URL = 'https://titah.fr'; // Modifier avec votre vrai domaine

/**
 * Informations globales de l'agence
 */
export const SITE_INFO = {
  name: 'Titah',
  fullName: 'Titah - Agence Digitale',
  tagline: 'Agence digitale spécialisée dans les hébergeurs touristiques',
  description: 'Titah crée des sites web performants pour l\'hébergement touristique. Expertise en design, no-code, IA et automatisation. Sites rapides, évolutifs et générateurs de réservations directes.',
  email: 'welcome@titah.fr',
  phone: '+33 X XX XX XX XX', // À compléter
  address: {
    street: 'Métropole du Grand Paris',
    city: 'Paris',
    country: 'France',
  },
  social: {
    linkedin: 'https://linkedin.com/company/titah', // À compléter
    twitter: 'https://twitter.com/titah', // À compléter (optionnel)
    facebook: 'https://facebook.com/titah', // À compléter (optionnel)
  },
  logo: `${SITE_URL}/logo.png`, // À créer
  founded: '2022',
};

/**
 * Métadonnées SEO pour chaque page
 */
export const PAGE_META: Record<Route, PageMeta> = {
  home: {
    title: 'Titah - Agence Digitale pour Hébergeurs Touristiques',
    description: 'Créez votre site web d\'hébergement touristique avec Titah. Expertise en design, no-code et IA. Sites performants qui génèrent plus de réservations directes.',
    keywords: [
      'agence digitale tourisme',
      'site web hébergement touristique',
      'création site gîte',
      'site internet chambre d\'hôtes',
      'agence web tourisme',
      'no-code tourisme',
      'site web réservation directe',
      'design web hébergement',
      'Titah',
    ],
    ogImage: `${SITE_URL}/og-home.jpg`,
    canonical: `${SITE_URL}/`,
  },
  
  about: {
    title: 'À propos de Titah - Notre Expertise Digitale Tourisme',
    description: 'Découvrez Titah, agence digitale fondée en 2022 par Sonia et Laetitia. Plus de 15 ans d\'expérience en design, no-code, IA et automatisation pour l\'hébergement touristique.',
    keywords: [
      'agence digitale Paris',
      'expertise tourisme digital',
      'Sonia Laetitia Titah',
      'design UX UI tourisme',
      'no-code tourisme',
      'automatisation hébergement',
    ],
    ogImage: `${SITE_URL}/og-about.jpg`,
    canonical: `${SITE_URL}/a-propos`,
  },
  
  offers: {
    title: 'Nos Offres - Sites Web pour Hébergeurs Touristiques | Titah',
    description: 'Découvrez nos offres de création de sites web pour gîtes, chambres d\'hôtes et hébergements touristiques. Design moderne, SEO optimisé, réservation en ligne intégrée.',
    keywords: [
      'offre site web gîte',
      'pack création site chambre d\'hôtes',
      'tarif site hébergement touristique',
      'création site réservation en ligne',
      'site web responsive tourisme',
      'SEO tourisme',
    ],
    ogImage: `${SITE_URL}/og-offers.jpg`,
    canonical: `${SITE_URL}/nos-offres`,
  },
  
  faq: {
    title: 'FAQ - Questions Fréquentes | Titah',
    description: 'Toutes les réponses à vos questions sur la création de votre site web d\'hébergement touristique : prix, délais, fonctionnalités, maintenance et support.',
    keywords: [
      'FAQ site web tourisme',
      'prix site hébergement',
      'délai création site gîte',
      'maintenance site web',
      'questions site touristique',
    ],
    ogImage: `${SITE_URL}/og-faq.jpg`,
    canonical: `${SITE_URL}/faq`,
  },
  
  contact: {
    title: 'Contact - Démarrez Votre Projet Web Tourisme | Titah',
    description: 'Contactez Titah pour créer votre site web d\'hébergement touristique. Devis gratuit, réponse sous 24h. Experts en design web et réservation en ligne pour le tourisme.',
    keywords: [
      'contact agence web tourisme',
      'devis site hébergement',
      'créer site gîte',
      'agence Paris tourisme',
      'contact Titah',
    ],
    ogImage: `${SITE_URL}/og-contact.jpg`,
    canonical: `${SITE_URL}/contact`,
  },
  
  privacy: {
    title: 'Politique de Confidentialité | Titah',
    description: 'Politique de confidentialité et protection des données personnelles de Titah. Conformité RGPD, utilisation des cookies et gestion de vos données.',
    keywords: [
      'politique confidentialité Titah',
      'RGPD Titah',
      'protection données',
      'cookies Titah',
    ],
    ogImage: `${SITE_URL}/og-legal.jpg`,
    canonical: `${SITE_URL}/politique-confidentialite`,
    noindex: true, // Pages légales généralement non indexées
  },
  
  cookies: {
    title: 'Gestion des Cookies | Titah',
    description: 'Gestion des cookies et préférences de confidentialité sur le site Titah. Contrôlez vos données et personnalisez votre expérience.',
    keywords: [
      'cookies Titah',
      'gestion cookies',
      'préférences confidentialité',
    ],
    ogImage: `${SITE_URL}/og-legal.jpg`,
    canonical: `${SITE_URL}/gestion-cookies`,
    noindex: true,
  },
};

/**
 * Récupère les métadonnées pour une route donnée
 */
export function getPageMeta(route: Route): PageMeta {
  return PAGE_META[route] || PAGE_META.home;
}

/**
 * Génère le title complet (avec suffixe)
 */
export function generateTitle(pageTitle: string, includeSuffix = true): string {
  if (includeSuffix && !pageTitle.includes('Titah')) {
    return `${pageTitle} | Titah`;
  }
  return pageTitle;
}

/**
 * Structured Data (Schema.org) pour l'organisation
 */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_INFO.fullName,
  alternateName: SITE_INFO.name,
  description: SITE_INFO.description,
  url: SITE_URL,
  logo: SITE_INFO.logo,
  email: SITE_INFO.email,
  telephone: SITE_INFO.phone,
  foundingDate: SITE_INFO.founded,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_INFO.address.city,
    addressCountry: SITE_INFO.address.country,
  },
  sameAs: [
    SITE_INFO.social.linkedin,
    // SITE_INFO.social.twitter,
    // SITE_INFO.social.facebook,
  ].filter(Boolean),
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  serviceType: [
    'Création de sites web',
    'Design web',
    'Développement no-code',
    'Automatisation digitale',
    'Conseil IA',
  ],
  industry: 'Tourisme et Hébergement',
};

/**
 * Structured Data pour la page d'accueil (WebSite)
 */
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_INFO.fullName,
  url: SITE_URL,
  description: SITE_INFO.description,
  publisher: {
    '@type': 'Organization',
    name: SITE_INFO.fullName,
    logo: {
      '@type': 'ImageObject',
      url: SITE_INFO.logo,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/recherche?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Structured Data pour les FAQ
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
