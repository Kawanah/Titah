# ⚡ SEO - Configuration Rapide

**5 étapes pour activer le SEO (30 minutes)**

---

## ✅ **Déjà fait automatiquement**

- ✅ Meta tags dynamiques par page
- ✅ Open Graph (réseaux sociaux)
- ✅ Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

**Votre site est SEO-ready !** Mais il faut compléter la configuration.

---

## 🔧 **Configuration Requise (30 min)**

### **ÉTAPE 1 : Modifier `/utils/seo.ts` (5 min)**

Ouvrir `/utils/seo.ts` et modifier :

#### **Ligne 12 - URL du site :**
```typescript
// Avant
export const SITE_URL = 'https://titah.fr';

// Après (si domaine différent)
export const SITE_URL = 'https://votre-domaine.com';
```

#### **Ligne 22 - Téléphone :**
```typescript
// Avant
phone: '+33 X XX XX XX XX',

// Après
phone: '+33 1 23 45 67 89', // Votre vrai numéro
```

#### **Lignes 28-32 - Réseaux sociaux :**
```typescript
social: {
  linkedin: 'https://linkedin.com/company/titah', // ← Votre lien LinkedIn
  // twitter: 'https://twitter.com/titah', // Optionnel
  // facebook: 'https://facebook.com/titah', // Optionnel
},
```

**✅ Sauvegarder le fichier**

---

### **ÉTAPE 2 : Créer images Open Graph (15 min)**

Créer 6 images (1200x630px) dans `/public/` :

| Fichier | Page | Contenu suggéré |
|---------|------|-----------------|
| `og-home.jpg` | Accueil | Logo Titah + slogan |
| `og-about.jpg` | À propos | Photo équipe |
| `og-offers.jpg` | Offres | Visuel offres |
| `og-faq.jpg` | FAQ | Icône FAQ |
| `og-contact.jpg` | Contact | Formulaire/carte |
| `og-legal.jpg` | Légal | Logo simple |

**Outil recommandé :** [Canva](https://canva.com)
- Template : "Social Media Post"
- Dimensions : 1200 x 630 px
- Export : JPG

**Alternative rapide :** Utiliser une même image pour toutes les pages (logo Titah 1200x630).

---

### **ÉTAPE 3 : Créer logo.png (2 min)**

Logo carré dans `/public/logo.png` :
- Dimensions : 512x512px minimum
- Format : PNG avec transparence
- Contenu : Logo Titah

---

### **ÉTAPE 4 : Mettre à jour sitemap.xml (3 min)**

Ouvrir `/public/sitemap.xml` et modifier :

#### **Remplacer domaine :**
```xml
<!-- Avant -->
<loc>https://titah.fr/</loc>

<!-- Après -->
<loc>https://votre-domaine.com/</loc>
```

#### **Mettre à jour dates :**
```xml
<!-- Changer la date -->
<lastmod>2025-10-21</lastmod>

<!-- Vers date du jour -->
<lastmod>2025-10-22</lastmod>
```

---

### **ÉTAPE 5 : Mettre à jour robots.txt (2 min)**

Ouvrir `/public/robots.txt` et modifier :

```txt
# Avant
Sitemap: https://titah.fr/sitemap.xml

# Après
Sitemap: https://votre-domaine.com/sitemap.xml
```

---

## ✅ **TERMINÉ !**

Votre SEO est maintenant configuré. 

**Tester localement :**
```bash
npm run dev
# Ouvrir http://localhost:5173
# F12 → Elements → <head>
# Vérifier les meta tags
```

---

## 🚀 **Après Déploiement**

### **Google Search Console (10 min)**

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter votre site
3. Vérifier propriété (méthode DNS ou HTML file)
4. Soumettre sitemap : `https://votre-domaine.com/sitemap.xml`
5. Demander indexation pages principales

### **Tester Open Graph (2 min)**

1. Aller sur [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Entrer URL : `https://votre-domaine.com`
3. Cliquer "Debug"
4. Vérifier image et texte

### **Tester Structured Data (2 min)**

1. Aller sur [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Entrer URL : `https://votre-domaine.com`
3. Cliquer "Test URL"
4. Vérifier "Organization" détecté

---

## 📊 **Vérification Rapide**

Ouvrir votre site et faire :
- **F12** (DevTools)
- **Elements** tab
- Regarder `<head>` :

Vous devriez voir :
```html
✅ <title>Titah - Agence Digitale...</title>
✅ <meta name="description" content="...">
✅ <meta name="keywords" content="...">
✅ <meta property="og:title" content="...">
✅ <meta property="og:image" content="...">
✅ <link rel="canonical" href="...">
✅ <script type="application/ld+json">{...}</script>
```

---

## ❓ **Problèmes Courants**

### **Images Open Graph ne s'affichent pas**
- Vérifier chemin : `/public/og-home.jpg`
- Vérifier dimensions : 1200x630px
- Vider cache Facebook Debugger

### **Meta tags ne changent pas entre pages**
- Vérifier que `<SEO route={currentRoute} />` est dans App.tsx
- F5 pour recharger

### **Google ne trouve pas sitemap**
- Vérifier URL : `https://votre-domaine.com/sitemap.xml`
- Attendre 24-48h après soumission

---

## 📚 **Documentation Complète**

Pour plus de détails : [`/SEO_GUIDE.md`](./SEO_GUIDE.md)

---

**Temps total : 30 minutes** ⚡  
**Difficulté : Facile** ⭐  
**Impact SEO : +++ Très important** 🚀

---

**Créé le :** 21 Octobre 2025  
**Prochaine étape :** Compléter `/utils/seo.ts` maintenant !
