# ✅ Checklist Pré-Déploiement - Titah

**Avant de déployer, vérifiez tous ces points**

---

## 📋 **1. Tests Locaux**

### **Installation & Build**
- [ ] `npm install` fonctionne sans erreur
- [ ] `npm run dev` lance le serveur local (http://localhost:5173)
- [ ] `npm run build` compile sans erreur
- [ ] `npm run preview` affiche le build (test du site compilé)

### **Pages & Navigation**
- [ ] Page **Accueil** s'affiche correctement
- [ ] Page **À propos** s'affiche correctement
- [ ] Page **Nos offres** s'affiche correctement
- [ ] Page **FAQ** s'affiche correctement
- [ ] Page **Contact** s'affiche correctement
- [ ] Page **Politique de confidentialité** s'affiche
- [ ] Page **Gestion des cookies** s'affiche
- [ ] Navigation entre pages fonctionne (clic header)
- [ ] Logo Titah ramène à l'accueil
- [ ] Liens footer fonctionnent
- [ ] Scroll automatique en haut lors navigation

### **Fonctionnalités**
- [ ] Formulaire contact accepte les données
- [ ] Validation formulaire fonctionne (champs requis)
- [ ] Envoi formulaire enregistre dans Supabase
- [ ] Message succès s'affiche après envoi
- [ ] Bandeau cookies s'affiche au premier chargement
- [ ] Bouton "Tout accepter" cache le bandeau
- [ ] Bouton "Nécessaires uniquement" fonctionne
- [ ] Bouton "Refuser tout" fonctionne
- [ ] Préférences cookies sauvegardées (localStorage)

### **Responsive**
- [ ] **Mobile** (< 768px) : menu hamburger fonctionne
- [ ] **Tablet** (768-1024px) : layout adapté
- [ ] **Desktop** (> 1024px) : affichage optimal
- [ ] Images s'adaptent à la taille écran
- [ ] Pas de débordement horizontal (scroll)

### **Performance**
- [ ] Pas d'erreurs dans la console (F12)
- [ ] Pas d'avertissements TypeScript
- [ ] Images se chargent rapidement
- [ ] Animations fluides
- [ ] Transitions smooth

---

## 🔐 **2. Configuration Supabase**

### **Vérifier les clés**
- [ ] Projet Supabase créé sur [supabase.com](https://supabase.com)
- [ ] **SUPABASE_URL** récupéré (Settings → API)
- [ ] **SUPABASE_ANON_KEY** récupéré
- [ ] **SUPABASE_SERVICE_ROLE_KEY** récupéré
- [ ] Clés copiées dans un fichier sécurisé

### **Base de données**
- [ ] Table `kv_store_2fc91c13` existe
- [ ] Table a les bonnes colonnes (key, value, created_at)
- [ ] Test insertion manuelle fonctionne

### **Edge Functions**
- [ ] Edge Function `make-server-2fc91c13` créée
- [ ] Fichier `/supabase/functions/server/index.tsx` présent
- [ ] Route `/make-server-2fc91c13/contact` fonctionne
- [ ] CORS configuré correctement (permet frontend)

---

## 📦 **3. Préparation Code**

### **Fichiers sources**
- [ ] Pas de `console.log()` oubliés en production
- [ ] Pas de TODO/FIXME critiques
- [ ] Pas de clés API hardcodées (sauf si nécessaire)
- [ ] Pas de données sensibles dans le code

### **Variables d'environnement**
- [ ] Fichier `.env` créé localement (pour dev)
- [ ] Variables Supabase définies dans `.env`
- [ ] `.env` ajouté au `.gitignore` (NE PAS commit)

### **Git**
- [ ] Repository Git initialisé (`git init`)
- [ ] `.gitignore` contient :
  ```
  node_modules/
  dist/
  .env
  .env.local
  *.log
  ```
- [ ] Tous les fichiers ajoutés (`git add .`)
- [ ] Commit initial créé (`git commit -m "Initial commit"`)

---

## 🌐 **4. Choix Plateforme de Déploiement**

### **Option A : Vercel (Recommandé)**
- [ ] Compte créé sur [vercel.com](https://vercel.com)
- [ ] GitHub connecté à Vercel
- [ ] Variables d'environnement prêtes à ajouter

### **Option B : Netlify**
- [ ] Compte créé sur [netlify.com](https://netlify.com)
- [ ] GitHub connecté à Netlify
- [ ] Variables d'environnement prêtes

### **Option C : Serveur Personnel**
- [ ] Serveur accessible via SSH
- [ ] Node.js 18+ installé sur serveur
- [ ] Nginx/Apache installé et configuré
- [ ] Certificat SSL prêt (Let's Encrypt)
- [ ] Domaine configuré (DNS pointant vers serveur)

---

## 🚀 **5. Déploiement**

### **Si Vercel/Netlify:**
- [ ] Code pushé sur GitHub
- [ ] Projet importé sur Vercel/Netlify
- [ ] Variables d'environnement ajoutées:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_ANON_KEY`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Déploiement lancé
- [ ] Build réussi (vérifier logs)
- [ ] URL de déploiement fonctionnelle

### **Si Serveur Personnel:**
- [ ] `npm run build` exécuté localement
- [ ] Dossier `/dist` transféré sur serveur (SCP/FTP)
- [ ] Nginx/Apache configuré (SPA routing)
- [ ] Certificat SSL activé
- [ ] Site accessible via HTTPS

### **Edge Functions Supabase:**
- [ ] Supabase CLI installé (`npm install -g supabase`)
- [ ] Connecté à Supabase (`supabase login`)
- [ ] Edge Functions déployées:
  ```bash
  supabase functions deploy make-server-2fc91c13
  ```
- [ ] Secrets configurés (si nécessaire)

---

## ✅ **6. Tests Post-Déploiement**

### **Accessibilité**
- [ ] Site accessible via URL de production
- [ ] HTTPS activé (cadenas vert dans navigateur)
- [ ] Pas d'erreurs certificat SSL
- [ ] Redirection HTTP → HTTPS fonctionne

### **Pages**
- [ ] Toutes les pages se chargent
- [ ] Navigation fonctionne en production
- [ ] Images s'affichent correctement
- [ ] Styles CSS appliqués
- [ ] Fonts chargées

### **Fonctionnalités**
- [ ] Formulaire contact envoie données
- [ ] Données arrivent dans Supabase
- [ ] Bandeau cookies fonctionne
- [ ] Préférences sauvegardées

### **Performance**
- [ ] Lighthouse Score > 90 (tester sur PageSpeed Insights)
- [ ] Temps de chargement < 2s
- [ ] Pas d'erreurs console (F12)
- [ ] Pas d'avertissements réseau

### **Mobile**
- [ ] Tester sur iPhone/Android réel
- [ ] Menu hamburger fonctionne
- [ ] Scroll fluide
- [ ] Formulaire utilisable sur mobile
- [ ] Pas de zoom involontaire

### **Navigateurs**
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Edge ✅

---

## 🎯 **7. Configuration Domaine (Optionnel)**

### **Si domaine personnalisé (titah.fr):**
- [ ] Domaine acheté chez registrar (OVH, Gandi, etc.)
- [ ] DNS configurés:
  - [ ] A record pointant vers IP serveur (si serveur perso)
  - [ ] CNAME pointant vers Vercel (si Vercel)
- [ ] Domaine ajouté dans Vercel/Netlify settings
- [ ] Propagation DNS terminée (24-48h max)
- [ ] HTTPS activé sur domaine custom

---

## 📊 **8. Monitoring & Analytics**

### **Optionnel mais recommandé:**
- [ ] Google Analytics configuré (privacy-friendly)
- [ ] Sentry configuré (monitoring erreurs)
- [ ] Uptime monitoring (UptimeRobot, etc.)
- [ ] Notifications email si site down

---

## 🔒 **9. Sécurité**

### **Vérifications finales:**
- [ ] Pas de clés API exposées dans le code frontend
- [ ] Variables d'environnement utilisées (pas hardcodées)
- [ ] HTTPS forcé (redirection auto)
- [ ] Headers sécurité (X-Frame-Options, etc.)
- [ ] CORS configuré correctement (pas `*` en production)
- [ ] Rate limiting considéré (anti-spam formulaire)

---

## 📝 **10. Documentation**

### **Pour l'équipe:**
- [ ] URL de production documentée
- [ ] Credentials Supabase sauvegardés (1Password, etc.)
- [ ] Procédure déploiement documentée
- [ ] Guide mise à jour site créé

---

## 🎉 **11. Go Live !**

### **Avant l'annonce publique:**
- [ ] ✅ Tous les points ci-dessus validés
- [ ] Test final complet (vous + 2 autres personnes)
- [ ] Screenshot site pour archives
- [ ] Backup base de données Supabase

### **Annonce:**
- [ ] Annoncer sur réseaux sociaux
- [ ] Envoyer newsletter (si applicable)
- [ ] Mettre à jour signature email avec URL
- [ ] Soumettre à Google Search Console

---

## 📞 **Support**

**Problème pendant le déploiement ?**
- Voir `/DEPLOYMENT_GUIDE.md` pour guide détaillé
- Voir `/DEPLOYMENT_SIMPLE.md` pour guide rapide
- Email : welcome@titah.fr

---

## ✅ **Résumé**

Total des checks : **~100 points**

**Minimum requis pour déployer :**
- Section 1 (Tests Locaux) : ✅ 100%
- Section 2 (Supabase) : ✅ 100%
- Section 3 (Préparation) : ✅ 100%
- Section 5 (Déploiement) : ✅ 100%
- Section 6 (Tests Post-Deploy) : ✅ 100%

**Recommandé :**
- Section 7 (Domaine) : 80%+
- Section 8 (Monitoring) : 50%+
- Section 9 (Sécurité) : 100%

---

**Temps estimé total : 2-4 heures** (première fois)  
**Déploiements suivants : 10-15 minutes** (automatiques)

---

**Créé le :** 21 Octobre 2025  
**Dernière mise à jour :** 21 Octobre 2025
