# ✅ Checklist SEO - Titah

**Liste de vérification complète pour optimiser le SEO**

---

## 📋 **1. Configuration Initiale (30 min)**

### **Fichier `/utils/seo.ts` :**

- [ ] **Ligne 12** - Modifier `SITE_URL` :
  ```typescript
  export const SITE_URL = 'https://titah.fr'; // Votre domaine
  ```

- [ ] **Ligne 16** - Vérifier `name` et `fullName` :
  ```typescript
  name: 'Titah',
  fullName: 'Titah - Agence Digitale',
  ```

- [ ] **Ligne 22** - Ajouter téléphone :
  ```typescript
  phone: '+33 1 23 45 67 89', // Votre numéro
  ```

- [ ] **Lignes 23-27** - Vérifier adresse :
  ```typescript
  address: {
    street: 'Métropole du Grand Paris',
    city: 'Paris',
    country: 'France',
  },
  ```

- [ ] **Lignes 28-32** - Ajouter réseaux sociaux :
  ```typescript
  social: {
    linkedin: 'https://linkedin.com/company/titah',
    twitter: 'https://twitter.com/titah', // Optionnel
    facebook: 'https://facebook.com/titah', // Optionnel
  },
  ```

- [ ] **Ligne 33** - Logo :
  ```typescript
  logo: `${SITE_URL}/logo.png`, // Logo 512x512px
  ```

---

## 🖼️ **2. Images Open Graph (15 min)**

Créer dans `/public/` :

- [ ] **`og-home.jpg`** (1200x630px)
  - Contenu : Logo Titah + "Agence Digitale pour Hébergeurs Touristiques"
  - Format : JPG
  - Taille max : 1 MB

- [ ] **`og-about.jpg`** (1200x630px)
  - Contenu : Photo équipe ou visuel "À propos"
  - Format : JPG

- [ ] **`og-offers.jpg`** (1200x630px)
  - Contenu : Visuel offres ou "Nos Services"
  - Format : JPG

- [ ] **`og-faq.jpg`** (1200x630px)
  - Contenu : Icône FAQ ou "Questions Fréquentes"
  - Format : JPG

- [ ] **`og-contact.jpg`** (1200x630px)
  - Contenu : Formulaire ou "Contactez-nous"
  - Format : JPG

- [ ] **`og-legal.jpg`** (1200x630px)
  - Contenu : Logo Titah simple
  - Format : JPG

- [ ] **`logo.png`** (512x512px minimum)
  - Contenu : Logo Titah carré
  - Format : PNG avec transparence
  - Taille max : 500 KB

**Outils recommandés :**
- [Canva](https://canva.com) - Templates "Social Media Post"
- [Figma](https://figma.com) - Design personnalisé
- [Photopea](https://photopea.com) - Éditeur en ligne gratuit

**Alternative rapide :**
Utiliser la même image pour toutes les pages (logo Titah 1200x630).

---

## 📄 **3. Sitemap.xml (5 min)**

Ouvrir `/public/sitemap.xml` :

- [ ] **Remplacer domaine** :
  ```xml
  <!-- Avant -->
  <loc>https://titah.fr/</loc>
  
  <!-- Après -->
  <loc>https://votre-domaine.com/</loc>
  ```

- [ ] **Mettre à jour dates** :
  ```xml
  <lastmod>2025-10-21</lastmod> <!-- Date du jour -->
  ```

- [ ] **Vérifier priorités** :
  ```xml
  <url>
    <loc>https://titah.fr/</loc>
    <priority>1.0</priority> <!-- Accueil max -->
  </url>
  <url>
    <loc>https://titah.fr/nos-offres</loc>
    <priority>0.9</priority> <!-- Offres important -->
  </url>
  ```

---

## 🤖 **4. Robots.txt (2 min)**

Ouvrir `/public/robots.txt` :

- [ ] **Modifier sitemap URL** :
  ```txt
  # Avant
  Sitemap: https://titah.fr/sitemap.xml
  
  # Après
  Sitemap: https://votre-domaine.com/sitemap.xml
  ```

- [ ] **Vérifier Disallow** (optionnel) :
  ```txt
  Disallow: /admin/
  Disallow: /api/
  Disallow: /politique-confidentialite
  Disallow: /gestion-cookies
  ```

---

## 🧪 **5. Tests Locaux (5 min)**

### **Tester en développement :**

```bash
npm run dev
```

- [ ] Ouvrir navigateur : `http://localhost:5173`
- [ ] **F12** → Onglet **Elements**
- [ ] Vérifier dans `<head>` :

  ```html
  ✅ <title>Titah - Agence Digitale...</title>
  ✅ <meta name="description" content="...">
  ✅ <meta name="keywords" content="...">
  ✅ <meta property="og:title" content="...">
  ✅ <meta property="og:image" content="...">
  ✅ <link rel="canonical" href="...">
  ✅ <script type="application/ld+json">{...}</script>
  ```

- [ ] Naviguer vers page "À propos"
- [ ] Vérifier que le `<title>` change
- [ ] Vérifier que meta tags changent

### **Tester build de production :**

```bash
npm run build
npm run preview
```

- [ ] Vérifier que tout fonctionne comme en dev
- [ ] Pas d'erreurs console

---

## 🚀 **6. Après Déploiement**

### **A. Google Search Console (15 min)**

- [ ] Aller sur [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Se connecter avec compte Google
- [ ] Cliquer "Ajouter une propriété"
- [ ] Choisir "Préfixe d'URL" : `https://titah.fr`
- [ ] **Vérifier propriété** (choisir méthode) :
  - [ ] HTML file upload (recommandé)
  - [ ] OU Meta tag dans `<head>`
  - [ ] OU DNS record
- [ ] Une fois vérifié :
  - [ ] Aller dans "Sitemaps"
  - [ ] Ajouter sitemap : `https://titah.fr/sitemap.xml`
  - [ ] Cliquer "Envoyer"
- [ ] Aller dans "Inspection de l'URL"
  - [ ] Entrer `https://titah.fr`
  - [ ] Cliquer "Demander l'indexation"
  - [ ] Répéter pour chaque page principale

### **B. Bing Webmaster Tools (10 min)**

- [ ] Aller sur [bing.com/webmasters](https://www.bing.com/webmasters)
- [ ] Se connecter
- [ ] Ajouter site
- [ ] Soumettre sitemap
- [ ] Demander indexation

### **C. Google Business Profile (20 min)**

- [ ] Aller sur [business.google.com](https://business.google.com)
- [ ] Créer fiche
- [ ] Ajouter :
  - [ ] Nom : Titah
  - [ ] Catégorie : Agence de marketing digital
  - [ ] Adresse (si bureau physique)
  - [ ] Téléphone
  - [ ] Site web
  - [ ] Horaires
  - [ ] Photos (bureau, équipe, logo)
  - [ ] Description

---

## 🧪 **7. Tests SEO (15 min)**

### **Google Rich Results Test :**

- [ ] Aller sur [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Entrer URL : `https://titah.fr`
- [ ] Cliquer "Test URL"
- [ ] **Vérifier détecté** :
  - [ ] ✅ Organization
  - [ ] ✅ WebSite
  - [ ] Pas d'erreurs

### **Facebook Sharing Debugger :**

- [ ] Aller sur [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
- [ ] Entrer URL : `https://titah.fr`
- [ ] Cliquer "Debug"
- [ ] **Vérifier affichage** :
  - [ ] ✅ Titre correct
  - [ ] ✅ Description correcte
  - [ ] ✅ Image Open Graph s'affiche (og-home.jpg)
  - [ ] Dimensions : 1200x630
- [ ] Tester chaque page :
  - [ ] `/` (home)
  - [ ] `/a-propos` (about)
  - [ ] `/nos-offres` (offers)
  - [ ] `/contact` (contact)

### **Twitter Card Validator :**

- [ ] Aller sur [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- [ ] Entrer URL : `https://titah.fr`
- [ ] **Vérifier preview** :
  - [ ] ✅ Summary Large Image
  - [ ] ✅ Titre
  - [ ] ✅ Description
  - [ ] ✅ Image

### **PageSpeed Insights :**

- [ ] Aller sur [pagespeed.web.dev](https://pagespeed.web.dev/)
- [ ] Entrer URL : `https://titah.fr`
- [ ] Cliquer "Analyser"
- [ ] **Objectifs** :
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90

---

## 📊 **8. Suivi & Analytics (15 min)**

### **Google Analytics 4 (optionnel):**

- [ ] Aller sur [analytics.google.com](https://analytics.google.com)
- [ ] Créer propriété GA4
- [ ] Copier Measurement ID (G-XXXXXXXXXX)
- [ ] Installer script dans site (voir doc GA4)
- [ ] Vérifier réception données (temps réel)

### **Objectifs à tracker :**

- [ ] Pages vues
- [ ] Sources de trafic
- [ ] Durée session
- [ ] Taux de rebond
- [ ] Conversions (formulaire contact)

---

## 📈 **9. Optimisations Futures**

### **Contenu (priorité haute) :**

- [ ] **Page d'accueil** : Minimum 500 mots
- [ ] **Page À propos** : Détailler histoire, équipe, valeurs
- [ ] **Page Offres** : Descriptions détaillées (300+ mots/offre)
- [ ] **FAQ** : Ajouter 15-20 questions
- [ ] Utiliser mots-clés naturellement (densité 1-2%)

### **Images :**

- [ ] Vérifier **alt tags** sur toutes les images
- [ ] Alt descriptifs (ex: "Site web moderne pour gîte rural")
- [ ] Compresser images (< 200KB)
- [ ] Utiliser WebP si possible

### **Performance :**

- [ ] Lighthouse Score > 90
- [ ] Lazy loading images
- [ ] Code splitting (React.lazy)
- [ ] Minification automatique (Vite)

### **Backlinks :**

- [ ] Inscrire dans annuaires (Pages Jaunes, etc.)
- [ ] Profil LinkedIn agence
- [ ] Guest posts blogs tourisme
- [ ] Partenariats hébergeurs clients

### **Blog (recommandé) :**

- [ ] Créer section blog
- [ ] Publier 1-2 articles/mois
- [ ] Cibler mots-clés longue traîne
- [ ] Exemples :
  - "10 astuces pour augmenter réservations directes"
  - "Pourquoi votre gîte a besoin d'un site web"
  - "No-code : révolution pour hébergeurs"

---

## ✅ **Résumé Checklist**

### **Avant déploiement :**
- [ ] Configuration `/utils/seo.ts` (5 min)
- [ ] Créer 7 images (15 min)
- [ ] Mettre à jour `sitemap.xml` (5 min)
- [ ] Mettre à jour `robots.txt` (2 min)
- [ ] Tests locaux (5 min)

**Total : 32 minutes**

### **Après déploiement :**
- [ ] Google Search Console (15 min)
- [ ] Bing Webmaster (10 min)
- [ ] Google Business Profile (20 min)
- [ ] Tests SEO (15 min)
- [ ] Google Analytics (15 min)

**Total : 75 minutes**

### **TOTAL GÉNÉRAL : ~2 heures**

---

## 🎯 **Objectifs SEO**

### **3 mois :**
- [ ] 5-7 pages indexées
- [ ] 500+ impressions/mois
- [ ] 20+ clics/mois
- [ ] Position < 30

### **6 mois :**
- [ ] 10+ pages indexées
- [ ] 2000+ impressions/mois
- [ ] 100+ clics/mois
- [ ] Position < 15
- [ ] 20+ backlinks

---

## 📞 **Support**

**Besoin d'aide ?**
- [`SEO_QUICK_SETUP.md`](./SEO_QUICK_SETUP.md) - Configuration
- [`SEO_GUIDE.md`](./SEO_GUIDE.md) - Guide complet
- Email : welcome@titah.fr

---

**Version :** 2.1.0  
**Créé le :** 21 Octobre 2025  
**Dernière mise à jour :** 21 Octobre 2025

**✅ Suivez cette checklist point par point pour un SEO optimal ! 🚀**
