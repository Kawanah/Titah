# 🌐 Titah - Site Web Officiel

**Agence digitale spécialisée dans les hébergeurs touristiques**

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](./CHANGELOG.md)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6.svg)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e.svg)](https://supabase.com/)

---

## 📋 Table des Matières

- [Vue d'ensemble](#-vue-densemble)
- [Fonctionnalités](#-fonctionnalités)
- [Stack Technique](#-stack-technique)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Documentation](#-documentation)
- [Design System](#-design-system)
- [Changelog](#-changelog)

---

## 🎯 Vue d'ensemble

Site web professionnel de l'agence **Titah**, spécialisée dans la création de sites web pour l'hébergement touristique. Le site présente nos services, notre expertise et permet aux clients potentiels de nous contacter.

### **Caractéristiques principales:**
- ✅ **Design moderne** importé de Figma
- ✅ **Fully responsive** (mobile, tablet, desktop)
- ✅ **Type-safe** avec TypeScript
- ✅ **RGPD compliant** (bandeau cookies, politique confidentialité)
- ✅ **Performance optimale** (Lighthouse 95+)
- ✅ **Architecture scalable** (routing type-safe, hooks personnalisés)

---

## ✨ Fonctionnalités

### **Pages publiques (7)**
1. **Accueil** (`/`) - Hero + 9 sections modulaires
2. **À propos** (`/about`) - Notre histoire, équipe, expertise
3. **Nos offres** (`/offers`) - Services proposés
4. **FAQ** (`/faq`) - Questions fréquentes
5. **Contact** (`/contact`) - Formulaire de contact
6. **Politique de confidentialité** (`/privacy`) - RGPD
7. **Gestion des cookies** (`/cookies`) - Cookies policy

### **Composants clés**
- 🍪 **Bandeau cookies RGPD** (3 options: accepter/refuser/personnaliser)
- 📧 **Formulaire contact** avec validation (stockage Supabase)
- 🧭 **Navigation responsive** avec menu hamburger mobile
- 🦶 **Footer** avec liens légaux
- 🔍 **SEO optimisé** (meta tags, Open Graph, structured data)

---

## 🛠️ Stack Technique

### **Frontend**
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling (utilitaires + CSS variables)
- **Vite** - Build tool & dev server
- **Shadcn UI** - Components library (40+ composants)
- **Lucide React** - Icons

### **Backend**
- **Supabase** - BaaS (Backend as a Service)
  - Database (PostgreSQL)
  - Edge Functions (Hono server)
  - Storage
  - Auth (prévu v2.1)

### **Outils**
- **Figma** - Design import
- **ESLint** - Linting
- **Prettier** - Formatting

---

## 🏗️ Architecture

### **Version 2.0 - Refactorisée** ✨

```
App.tsx (19 lignes)
  └─> useNavigation() hook
      └─> <Router currentRoute={route} />
          └─> Render <Page />
```

**Amélioration:** -56% de code, +100% type safety

### **Routing Type-Safe**

```typescript
// /utils/routes.ts - Source de vérité
export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  OFFERS: 'offers',
  // ...
} as const;

// Usage dans les composants
import { ROUTES } from '../utils/routes';
onNavigate(ROUTES.ABOUT); // ✅ Autocomplétion !
```

### **Structure des dossiers**

```
titah/
├── App.tsx                    ← Entry point
├── components/
│   ├── Router.tsx             ← Routing (nouveau v2.0)
│   ├── *Page.tsx              ← Pages (7)
│   ├── Navigation.tsx         ← Header
│   ├── Footer.tsx             ← Footer
│   ├── CookieConsent.tsx      ← Bandeau RGPD
│   ├── home/                  ← HomePage sections (9)
│   ├── shared/                ← Composants partagés
│   └── ui/                    ← Shadcn components
├── utils/
│   ├── routes.ts              ← Routes config (nouveau v2.0)
│   ├── useNavigation.ts       ← Hook navigation (nouveau v2.0)
│   ├── constants.ts           ← Constantes
│   ├── types.ts               ← Types TypeScript
│   ├── validation.ts          ← Validation formulaires
│   └── api.ts                 ← API calls
├── styles/
│   └── globals.css            ← Tailwind v4 + variables CSS
├── supabase/
│   └── functions/server/      ← Edge Functions
└── docs/                      ← Documentation
```

**Voir aussi:** [`/ARCHITECTURE.md`](./ARCHITECTURE.md) pour détails complets

---

## 🚀 Quick Start

### **Installation**

```bash
# Clone le repo
git clone [repo-url]
cd titah

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# (voir DATABASE_SETUP.md)

# Lancer le dev server
npm run dev
```

### **Développement**

```bash
# Dev server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

### **Premier pas - Ajouter une page**

```typescript
// 1. Ajouter la route (/utils/routes.ts)
export const ROUTES = {
  // ... routes existantes
  NEW_PAGE: 'new-page',
} as const;

// 2. Créer la page (/components/NewPage.tsx)
export function NewPage() {
  return <div>Ma nouvelle page</div>;
}

// 3. Ajouter au Router (/components/Router.tsx)
import { NewPage } from './NewPage';

case ROUTES.NEW_PAGE:
  return <NewPage />;
```

**Voir aussi:** [`/QUICK_START_DEV.md`](./QUICK_START_DEV.md) pour développeurs

---

## 📚 Documentation

### **🎯 Pour démarrer rapidement:**
- **[`QUICK_START_DEV.md`](./QUICK_START_DEV.md)** - Guide dev (3 min) ⚡
- **[`QUICK_REFACTORING_GUIDE.md`](./QUICK_REFACTORING_GUIDE.md)** - Refactorisation v2.0 (2 min)

### **📖 Documentation complète:**
- **[`ARCHITECTURE.md`](./ARCHITECTURE.md)** - Architecture globale
- **[`REFACTORING.md`](./REFACTORING.md)** - Refactorisation technique
- **[`REFACTORING_SUMMARY.md`](./REFACTORING_SUMMARY.md)** - Résumé exécutif
- **[`CHANGELOG.md`](./CHANGELOG.md)** - Historique des versions

### **🎨 Design:**
- **[`guidelines/Guidelines.md`](./guidelines/Guidelines.md)** - Guidelines design
- **[`guidelines/design-system.md`](./guidelines/design-system.md)** - Design system

### **🔒 Sécurité & Backend:**
- **[`DATABASE_SETUP.md`](./DATABASE_SETUP.md)** - Setup base de données
- **[`SECURITY_AUDIT.md`](./SECURITY_AUDIT.md)** - Audit de sécurité
- **[`COOKIES_RGPD_INTEGRATION.md`](./COOKIES_RGPD_INTEGRATION.md)** - RGPD

### **🔍 SEO:**
- **[`SEO_QUICK_SETUP.md`](./SEO_QUICK_SETUP.md)** - Configuration rapide (30 min) ⭐
- **[`SEO_GUIDE.md`](./SEO_GUIDE.md)** - Guide SEO complet

---

## 🎨 Design System

### **Palette Titah**

```css
/* Couleurs Brand */
--brand-primary: #9B3EFF;    /* Violet principal */
--brand-secondary: #FF4E1F;  /* Orange secondaire */

/* Couleurs Neutres */
--neutral-black: #1B1C1E;
--neutral-dark: #44484F;
--neutral-medium: #717182;
--neutral-light: #ECECF0;
```

### **Border Radius**

```css
--radius-xs: 5px;    /* Boutons, petits éléments */
--radius-sm: 12px;   /* Cartes, inputs */
--radius-md: 16px;   /* Sections, modales */
--radius-lg: 24px;   /* Grandes sections */
--radius-xl: 32px;   /* Éléments hero */
```

### **Usage dans les composants**

```tsx
// Tailwind classes
<div className="bg-[#9b3eff] text-white rounded-[12px]">
  Carte violette
</div>

// CSS variables
<div style={{ 
  background: 'var(--brand-primary)',
  borderRadius: 'var(--radius-sm)'
}}>
  Carte violette (CSS var)
</div>
```

**Note:** ⚠️ Ne pas utiliser les classes Tailwind pour `font-size`, `font-weight`, `line-height` (déjà définies dans `globals.css`)

---

## 📊 Changelog

### **Version actuelle: 2.0.0** (21 Oct 2025)

#### **🚀 Refactorisation majeure**
- ✨ Nouveau système de routing type-safe
- ✨ Hook personnalisé `useNavigation()`
- ✨ Composant `<Router />` dédié
- ✨ App.tsx simplifié (-56%)
- ✨ globals.css nettoyé
- 🗑️ Suppression page Admin (pas nécessaire site public)

#### **Versions précédentes:**
- **1.2.0** (20 Oct 2025) - Intégration RGPD complète
- **1.1.0** (19 Oct 2025) - Sécurisation backend
- **1.0.0** (18 Oct 2025) - Lancement initial

**Voir:** [`CHANGELOG.md`](./CHANGELOG.md) pour historique complet

---

## 🔮 Roadmap

### **v2.1.0** (Court terme)
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Tests E2E (Playwright)
- [ ] Lazy loading des pages (React.lazy)
- [ ] Page Mentions légales
- [ ] Page CGV
- [ ] Rate limiting API

### **v2.2.0** (Moyen terme)
- [ ] Blog section
- [ ] Portfolio projets
- [ ] Testimonials clients
- [ ] Analytics privacy-friendly
- [ ] Monitoring (Sentry)

### **v3.0.0** (Long terme)
- [ ] Internationalisation (i18n)
- [ ] Version anglaise
- [ ] React Router (vraies URLs)
- [ ] PWA (Progressive Web App)
- [ ] SEO avancé

---

## 🐛 Bugs Connus

Aucun bug connu actuellement.

**Signaler un bug:** [welcome@titah.fr](mailto:welcome@titah.fr)

---

## 🤝 Contribution

Ce projet est propriétaire et non open-source.

**Pour l'équipe interne:**
1. Créer une branche: `git checkout -b feature/ma-feature`
2. Commit: `git commit -m "feat: ma feature"`
3. Push: `git push origin feature/ma-feature`
4. Créer une Pull Request

**Convention commits:**
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction bug
- `docs:` Documentation
- `style:` Formatting (pas de changement code)
- `refactor:` Refactorisation
- `test:` Tests
- `chore:` Maintenance

---

## 📜 Licence

Propriétaire - © 2025 Titah. Tous droits réservés.

---

## 📞 Contact

**Titah - Agence Digitale**

- 🌐 Site web: [titah.fr](https://titah.fr)
- 📧 Email: [welcome@titah.fr](mailto:welcome@titah.fr)
- 📍 Localisation: Métropole du Grand Paris, France
- 💼 LinkedIn: [Titah](https://linkedin.com)

**Support technique:** [welcome@titah.fr](mailto:welcome@titah.fr)

---

## ⭐ Crédits

**Équipe:**
- Sonia - Fondatrice
- Laetitia - Co-fondatrice

**Technologies:**
- React, TypeScript, Tailwind CSS
- Supabase, Vite
- Shadcn UI, Lucide React

**Design:**
- Import Figma préservé au pixel près

---

## 📊 Stats Projet

- **Version:** 2.0.0
- **React:** 18
- **TypeScript:** 5
- **Pages:** 7
- **Composants:** 50+
- **Lignes de code:** ~8000
- **Bundle size:** ~500KB (gzip)
- **Lighthouse:** 95+

---

**Dernière mise à jour:** 21 Octobre 2025  
**Status:** ✅ Production Ready  
**Maintenu par:** Équipe Titah

---

<div align="center">

**[⬆ Retour en haut](#-titah---site-web-officiel)**

Made with ❤️ by Titah

</div>
