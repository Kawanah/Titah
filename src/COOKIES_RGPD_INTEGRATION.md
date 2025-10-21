# 🍪 Intégration RGPD & Cookies - Documentation

**Date:** 20 Octobre 2025  
**Status:** ✅ **Intégré et fonctionnel**

---

## ✅ Ce qui a été fait

### 1. **Intégration du bandeau de consentement cookies**

Le composant `CookieConsent` a été intégré dans `/App.tsx` et s'affiche automatiquement :

#### Fonctionnalités:
- ✅ **Apparition automatique** après 1 seconde (si pas de consentement précédent)
- ✅ **3 options de consentement:**
  - "Tout accepter" (cookies nécessaires + analytiques)
  - "Nécessaires uniquement" (cookies essentiels seulement)
  - "Tout refuser" (cookies nécessaires uniquement)
- ✅ **Section détails** collapsible expliquant chaque type de cookie
- ✅ **Liens vers les pages légales** (Confidentialité, Cookies, Mentions légales)
- ✅ **Mémorisation du choix** dans localStorage (valide 13 mois)
- ✅ **Design professionnel** aux couleurs Titah (violet #9b3eff + orange #ff6b35)

#### Stockage:
```javascript
// localStorage: 'cookie_consent'
{
  necessary: true,      // Toujours true
  analytics: true/false, // Selon le choix
  timestamp: 1729458123456
}
```

---

### 2. **Nouvelle page: Politique de confidentialité**

**Route:** `/App.tsx` → `privacy`  
**Composant:** `/components/PrivacyPage.tsx`

#### Sections incluses:
1. ✅ Introduction
2. ✅ Données collectées (formulaire + automatiques)
3. ✅ Utilisation des données
4. ✅ Base légale RGPD
5. ✅ Partage des données (Supabase)
6. ✅ Sécurité des données
7. ✅ Durée de conservation
8. ✅ Vos droits (accès, rectification, effacement, etc.)
9. ✅ Cookies (renvoi vers politique cookies)
10. ✅ Modifications de la politique
11. ✅ Contact (welcome@titah.fr)
12. ✅ Droit de réclamation CNIL

#### Points importants:
- 📝 **Note sur l'IP:** Clairement indiqué que l'IP n'est PAS collectée
- 📧 **Contact RGPD:** welcome@titah.fr
- 🏢 **Responsable:** Titah SARL
- ⏱️ **Conservation:** 3 ans max pour les contacts

---

### 3. **Nouvelle page: Politique de cookies**

**Route:** `/App.tsx` → `cookies`  
**Composant:** `/components/CookiesPage.tsx`

#### Sections incluses:
1. ✅ Qu'est-ce qu'un cookie ?
2. ✅ Types de cookies utilisés:
   - **Nécessaires:** `cookie_consent` (13 mois)
   - **Analytiques:** Optionnels, avec consentement
3. ✅ Ce que nous N'utilisons PAS:
   - ❌ Cookies publicitaires
   - ❌ Réseaux sociaux tiers
   - ❌ Tracking cross-site
   - ❌ Collecte IP pour tracking
4. ✅ **Bouton "Modifier mes préférences"** qui réaffiche le bandeau
5. ✅ Guides navigateurs (Chrome, Firefox, Safari, Edge)
6. ✅ Durée de conservation (13 mois)
7. ✅ Liens CNIL & RGPD
8. ✅ Contact

#### Fonctionnalité clé:
```javascript
// Bouton pour réafficher le bandeau
const handleResetConsent = () => {
  localStorage.removeItem('cookie_consent');
  window.location.reload();
};
```

---

### 4. **Mise à jour du Footer**

**Fichier:** `/components/Footer.tsx`

#### Liens ajoutés:
- ✅ **Politique de confidentialité** → Route `privacy`
- ✅ **Gestion des cookies** → Route `cookies`
- ✅ Mentions légales (lien vide pour l'instant)
- ✅ CGV (lien vide pour l'instant)

---

## 🎯 Comment ça fonctionne

### **Flux utilisateur:**

```
1. Utilisateur arrive sur le site
   ↓
2. Après 1 seconde → Bandeau cookies apparaît (si pas de consentement)
   ↓
3. L'utilisateur choisit:
   - "Tout accepter" → cookies nécessaires + analytiques ✅
   - "Nécessaires uniquement" → cookies nécessaires ✅
   - "Tout refuser" → cookies nécessaires ✅
   ↓
4. Choix enregistré dans localStorage
   ↓
5. Bandeau disparaît
   ↓
6. L'utilisateur peut modifier son choix:
   - Via le footer → "Gestion des cookies"
   - Ou via le lien dans le bandeau (avant de choisir)
```

---

## 📍 Accès aux pages

### **Politique de confidentialité:**
- Footer → "Politique de confidentialité"
- Bandeau cookies → "Politique de confidentialité" (en bas)
- URL: Cliquer dans le footer

### **Politique de cookies:**
- Footer → "Gestion des cookies"
- Bandeau cookies → "Politique de cookies" (en bas)
- URL: Cliquer dans le footer

### **Modifier les préférences cookies:**
- Page "Gestion des cookies" → Bouton "Modifier mes préférences cookies"
- Supprime le consentement et recharge la page
- Le bandeau réapparaît

---

## 🧪 Tests à effectuer

### **Test 1: Premier affichage du bandeau**
```
1. Ouvrir le site en navigation privée
2. Attendre 1 seconde
3. ✅ Le bandeau doit apparaître en bas
```

### **Test 2: "Tout accepter"**
```
1. Cliquer sur "Tout accepter"
2. ✅ Le bandeau disparaît
3. Vérifier localStorage:
   console.log(JSON.parse(localStorage.getItem('cookie_consent')))
   // Devrait afficher: { necessary: true, analytics: true, timestamp: ... }
4. Recharger la page
5. ✅ Le bandeau ne réapparaît PAS
```

### **Test 3: "Nécessaires uniquement"**
```
1. Vider le localStorage: localStorage.clear()
2. Recharger
3. Attendre 1 seconde → bandeau apparaît
4. Cliquer sur "Nécessaires uniquement"
5. ✅ Le bandeau disparaît
6. Vérifier localStorage:
   // Devrait afficher: { necessary: true, analytics: false, timestamp: ... }
```

### **Test 4: Détails des cookies**
```
1. Vider localStorage et recharger
2. Sur le bandeau, cliquer "Voir les détails"
3. ✅ Section avec cookies nécessaires et analytiques s'affiche
4. Cliquer "Masquer les détails"
5. ✅ Section se cache
```

### **Test 5: Navigation vers Politique de confidentialité**
```
1. Footer → Cliquer "Politique de confidentialité"
2. ✅ Page complète s'affiche
3. Vérifier toutes les sections (11 sections)
4. ✅ Liens cliquables (mailto, CNIL, etc.)
```

### **Test 6: Navigation vers Politique de cookies**
```
1. Footer → Cliquer "Gestion des cookies"
2. ✅ Page complète s'affiche
3. Cliquer "Modifier mes préférences cookies"
4. ✅ Page recharge et bandeau réapparaît
```

### **Test 7: Liens dans le bandeau cookies**
```
1. Vider localStorage et recharger
2. Dans le bandeau, cliquer:
   - "Politique de confidentialité" → ✅ Va vers PrivacyPage
   - "Politique de cookies" → ✅ Va vers CookiesPage
   - "Mentions légales" → ⚠️ Pas de page (à créer)
```

---

## 📊 Structure des fichiers

```
/App.tsx
  ├── Import CookieConsent
  ├── Import PrivacyPage
  ├── Import CookiesPage
  ├── Routes ajoutées: 'privacy', 'cookies'
  └── <CookieConsent /> en bas (après Footer)

/components/CookieConsent.tsx
  ├── useState: showBanner, showDetails
  ├── useEffect: Vérifier localStorage
  ├── Fonctions: handleAcceptAll, handleAcceptNecessary, handleRejectAll
  ├── UI: Bandeau avec gradient, détails, 3 boutons, liens légaux
  └── onNavigate: Navigation vers privacy/cookies/legal

/components/PrivacyPage.tsx
  ├── Header avec gradient
  ├── 11 sections RGPD complètes
  ├── Informations contact: welcome@titah.fr
  ├── Note IP: "Nous ne collectons PAS votre IP"
  └── Design cohérent Titah

/components/CookiesPage.tsx
  ├── Header avec gradient
  ├── Explication cookies nécessaires/analytiques
  ├── Tableau des cookies
  ├── Bouton "Modifier mes préférences" (resetConsent)
  ├── Guides navigateurs (4 liens externes)
  └── Liens CNIL

/components/Footer.tsx
  ├── Navigation ajoutée: privacy, cookies
  └── "Gestion des cookies" au lieu de juste "Cookies"
```

---

## 🎨 Design & Branding

Tous les composants respectent la charte graphique Titah:

### **Couleurs:**
- Violet primaire: `#9b3eff`
- Orange secondaire: `#ff6b35` (aussi `#ff4e1f`)
- Noir neutre: `#1B1C1E`
- Gris foncé: `#44484F`
- Gris moyen: `#717182`
- Gris clair: `#ECECF0`

### **Border-radius:**
- Petits éléments: `5px`
- Cartes/sections: `12px`
- Grandes sections: `16px`

### **Gradients:**
```css
/* Headers */
background: linear-gradient(to right, #9b3eff, #ff6b35);
-webkit-text-fill-color: transparent;

/* Boutons CTA */
background: linear-gradient(to right, #9b3eff, #ff6b35);

/* Accents subtils */
background: linear-gradient(to right, rgba(155, 62, 255, 0.1), rgba(255, 107, 53, 0.1));
```

---

## 📝 Conformité RGPD

### **Points conformes:**
✅ Consentement explicite avant cookies non-nécessaires  
✅ Possibilité de refuser (3 options)  
✅ Modification du consentement facile (page dédiée + bouton)  
✅ Durée de conservation claire (13 mois)  
✅ Information transparente sur les données collectées  
✅ Droits RGPD expliqués (accès, rectification, effacement, etc.)  
✅ Contact pour exercer les droits (welcome@titah.fr)  
✅ Pas de collecte d'IP (mentionné explicitement)  
✅ Base légale du traitement expliquée  
✅ Partage avec Supabase mentionné  

### **À finaliser pour production:**
⚠️ Page Mentions légales (lien vide actuellement)  
⚠️ Page CGV (lien vide actuellement)  
⚠️ Implémenter vraiment les cookies analytiques (si souhaité)  
⚠️ Vérifier avec un juriste (recommandé)  

---

## 🔧 Personnalisation future

### **Ajouter de vrais cookies analytiques:**

Actuellement, le consentement est stocké mais aucun cookie analytique n'est réellement déposé.

Pour ajouter Google Analytics (exemple):
```javascript
// Dans App.tsx ou un fichier analytics.ts
useEffect(() => {
  const consent = localStorage.getItem('cookie_consent');
  if (consent) {
    const { analytics } = JSON.parse(consent);
    
    if (analytics) {
      // Charger Google Analytics
      window.gtag('config', 'GA_MEASUREMENT_ID');
    }
  }
}, []);
```

### **Modifier la durée de conservation:**

Actuellement: 13 mois (conforme RGPD)

Pour changer:
```javascript
// Dans CookieConsent.tsx
const CONSENT_DURATION = 13 * 30 * 24 * 60 * 60 * 1000; // 13 mois

// Vérifier l'expiration:
const now = Date.now();
const consentData = JSON.parse(localStorage.getItem('cookie_consent'));

if (now - consentData.timestamp > CONSENT_DURATION) {
  // Redemander le consentement
  setShowBanner(true);
}
```

### **Ajouter un bouton "Cookies" dans la navigation:**

```javascript
// Dans Navigation.tsx
<button onClick={() => onNavigate('cookies')}>
  🍪 Cookies
</button>
```

---

## 📞 Contact & Support

**Email:** welcome@titah.fr  
**Responsable RGPD:** Titah SARL  

**Ressources:**
- CNIL: https://www.cnil.fr/
- RGPD: https://www.cnil.fr/fr/reglement-europeen-protection-donnees

---

## ✅ Résumé

### **Ce qui fonctionne:**
- ✅ Bandeau cookies avec 3 options
- ✅ Stockage du consentement (localStorage, 13 mois)
- ✅ Page Politique de confidentialité complète
- ✅ Page Politique de cookies complète
- ✅ Liens dans le footer
- ✅ Bouton "Modifier mes préférences"
- ✅ Design Titah cohérent
- ✅ Conformité RGPD de base

### **Ce qui reste à faire (optionnel):**
- ⚠️ Page Mentions légales
- ⚠️ Page CGV
- ⚠️ Implémenter vrais cookies analytiques
- ⚠️ Vérification juridique

### **Prêt pour:**
- ✅ Développement
- ✅ Staging
- ⚠️ Production (après ajout mentions légales + vérif juridique)

---

**Date:** 20 Octobre 2025  
**Version:** 1.0  
**Statut:** ✅ Intégré et fonctionnel
