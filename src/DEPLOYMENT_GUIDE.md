# 🚀 Guide de Déploiement - Titah

**IMPORTANT:** Ce n'est PAS un site HTML/CSS statique ! C'est une application React qui nécessite une étape de build.

---

## ⚠️ À SAVOIR AVANT DE DÉPLOYER

### **Ce que vous DEVEZ faire:**
1. ✅ **Compiler l'application** avec `npm run build`
2. ✅ **Déployer le dossier `/dist`** généré (pas les fichiers sources)
3. ✅ **Configurer les variables d'environnement** Supabase
4. ✅ **Déployer les Edge Functions** Supabase séparément

### **Ce que vous NE DEVEZ PAS faire:**
- ❌ Transférer les fichiers sources (.tsx, .ts) directement
- ❌ Transférer les fichiers de documentation (.md)
- ❌ Transférer le dossier `node_modules/`
- ❌ Oublier de configurer les variables d'environnement

---

## 📊 Comparaison Options de Déploiement

| Option | Difficulté | Coût | Recommandé | Performance |
|--------|------------|------|------------|-------------|
| **Vercel** | ⭐ Très facile | Gratuit | ✅ **OUI** | ⚡⚡⚡ Excellent |
| **Netlify** | ⭐ Très facile | Gratuit | ✅ Oui | ⚡⚡⚡ Excellent |
| **Serveur perso** | ⭐⭐⭐ Difficile | Variable | ⚠️ Si besoin | ⚡⚡ Bon |
| **Hébergement classique** | ⭐⭐⭐⭐ Complexe | Variable | ❌ Non | ⚡ Moyen |

---

## 🎯 OPTION 1 : Vercel (RECOMMANDÉ) ⭐

**Idéal pour React + Supabase - Configuration en 5 minutes**

### **Avantages:**
- ✅ **Gratuit** pour projets personnels/petites agences
- ✅ **Déploiement automatique** depuis Git
- ✅ **HTTPS gratuit** avec certificat SSL
- ✅ **CDN mondial** (ultra-rapide)
- ✅ **Build automatique** (pas besoin de compiler manuellement)
- ✅ **Preview deployments** pour chaque commit
- ✅ **Parfaitement compatible** avec React/Vite

### **Étapes de déploiement:**

#### **1. Préparer le projet**

```bash
# Assurez-vous que tout fonctionne localement
npm install
npm run dev  # Tester
npm run build  # Vérifier que le build fonctionne
```

#### **2. Push sur GitHub**

```bash
# Créer un repo GitHub
git init
git add .
git commit -m "Initial commit - Titah v2.0.0"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/titah.git
git push -u origin main
```

#### **3. Déployer sur Vercel**

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer "New Project"
4. Importer votre repo `titah`
5. **Configurer les variables d'environnement:**
   - `SUPABASE_URL` = votre_url_supabase
   - `SUPABASE_ANON_KEY` = votre_anon_key
   - `SUPABASE_SERVICE_ROLE_KEY` = votre_service_role_key
6. Cliquer "Deploy"

✅ **C'est tout !** Votre site sera en ligne en 2-3 minutes.

#### **4. Déployer les Edge Functions Supabase**

```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter à Supabase
supabase login

# Déployer les Edge Functions
supabase functions deploy make-server-2fc91c13

# Configurer les secrets (si besoin d'API externes)
# supabase secrets set MA_CLE_API=valeur
```

#### **5. Configurer le domaine personnalisé (optionnel)**

1. Dans Vercel → Settings → Domains
2. Ajouter votre domaine `titah.fr`
3. Configurer les DNS selon les instructions Vercel

---

## 🔷 OPTION 2 : Netlify

**Alternative gratuite, très similaire à Vercel**

### **Étapes:**

1. Push sur GitHub (voir Option 1)
2. Aller sur [netlify.com](https://netlify.com)
3. "New site from Git"
4. Sélectionner votre repo
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Variables d'environnement:**
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
7. Deploy

---

## 🖥️ OPTION 3 : Serveur Personnel (VPS, OVH, etc.)

**Pour les utilisateurs avancés ayant leur propre serveur**

### **Prérequis:**
- Serveur Linux (Ubuntu/Debian recommandé)
- Accès SSH
- Node.js 18+ installé
- Nginx installé
- Nom de domaine pointant vers le serveur

### **Étapes:**

#### **1. Build local**

```bash
# Sur votre machine
npm install
npm run build
# → Génère le dossier /dist
```

#### **2. Transférer les fichiers**

```bash
# Transférer UNIQUEMENT le dossier dist/
scp -r dist/* user@votre-serveur.com:/var/www/titah/

# OU avec SFTP/FTP
# Transférer le contenu de /dist vers /var/www/titah/
```

#### **3. Configurer Nginx**

Créer `/etc/nginx/sites-available/titah` :

```nginx
server {
    listen 80;
    server_name titah.fr www.titah.fr;
    root /var/www/titah;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### **4. Activer le site**

```bash
sudo ln -s /etc/nginx/sites-available/titah /etc/nginx/sites-enabled/
sudo nginx -t  # Tester la config
sudo systemctl reload nginx
```

#### **5. Configurer HTTPS (Let's Encrypt)**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d titah.fr -d www.titah.fr
```

#### **6. Variables d'environnement**

Le frontend lit désormais les identifiants Supabase depuis les variables `VITE_*`. Aucun fichier source ne doit être modifié pour injecter vos clés.

```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
# Optionnel : changer le chemin de la fonction edge
VITE_SUPABASE_FUNCTION_PATH=/functions/v1/make-server-2fc91c13
```

Pour l'edge function Supabase, configurez également les secrets via la CLI :

```bash
supabase secrets set ADMIN_SECRET_TOKEN=votre_token_admin_ultra_secret
supabase secrets set ALLOWED_ORIGINS=https://titah.fr,https://app.titah.fr
supabase secrets set SUPABASE_URL=https://xxxxx.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

> En développement local, utilisez un fichier `.env.local` avec les variables `VITE_*`, puis déployez les secrets Supabase sur chaque environnement.

💡 Vous pouvez automatiser cette étape via `scripts/set_supabase_secrets.sh` après avoir exporté les variables nécessaires (`ADMIN_SECRET_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ALLOWED_ORIGINS`).

---

## 📦 OPTION 4 : Hébergement Statique Simple

**Pour hébergement classique (OVH, 1&1, etc.) SANS backend**

⚠️ **Limitations:**
- Formulaire de contact **NE FONCTIONNERA PAS** (nécessite Supabase)
- Uniquement pour affichage du site (pas d'interactivité backend)

### **Étapes:**

1. **Build local:**
```bash
npm install
npm run build
```

2. **Transférer via FTP:**
- Contenu de `/dist` → Racine web du serveur
- Fichiers : `index.html`, `assets/`, etc.

3. **Configurer .htaccess (Apache):**

Créer `.htaccess` dans la racine :
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📁 Fichiers à Transférer

### **✅ À TRANSFÉRER (après build):**

Uniquement le contenu de `/dist/` :
```
dist/
├── index.html          ✅
├── assets/             ✅ (JS, CSS compilés)
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── ...
└── images/             ✅ (si générées)
```

### **❌ À NE PAS TRANSFÉRER:**

```
❌ *.md (tous les fichiers Markdown)
❌ /guidelines/
❌ /components/ (sources .tsx)
❌ /utils/ (sources .ts)
❌ /styles/globals.css (source)
❌ /supabase/functions/ (déployer séparément)
❌ node_modules/
❌ package.json
❌ tsconfig.json
❌ vite.config.ts
❌ .git/
```

**Exception:** Si vous avez un serveur Node.js, vous transférez les sources + `package.json`.

---

## 🔐 Variables d'Environnement

### **Récupérer vos clés Supabase:**

1. Aller sur [supabase.com](https://supabase.com)
2. Ouvrir votre projet
3. Settings → API

Vous trouverez :
- **Project URL** → `SUPABASE_URL`
- **anon public** → `SUPABASE_ANON_KEY`
- **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

### **Configurer selon la plateforme:**

#### **Vercel / Netlify:**
Dashboard → Settings → Environment Variables

#### **Serveur personnel:**
Exporter les variables d'environnement avant `npm run build` ou via votre outil CI/CD.

#### **Vite (développement local):**
Copier `.env.example` en `.env.local` à la racine puis renseigner :
```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
# Optionnel : personnaliser le chemin de la fonction edge
VITE_SUPABASE_FUNCTION_PATH=/functions/v1/make-server-2fc91c13
```

---

## ✅ Checklist Pré-Déploiement

### **1. Tests locaux:**
- [ ] `npm install` fonctionne
- [ ] `npm run dev` fonctionne
- [ ] Toutes les pages s'affichent
- [ ] Navigation fonctionne
- [ ] Formulaire contact fonctionne
- [ ] Bandeau cookies fonctionne
- [ ] Mobile responsive OK

### **2. Build:**
- [ ] `npm run build` réussit sans erreur
- [ ] Tester build local : `npm run preview`
- [ ] Vérifier taille bundle (< 1MB idéal)

### **3. Configuration:**
- [ ] Variables Supabase configurées
- [ ] Domaine configuré (si applicable)
- [ ] HTTPS activé
- [ ] DNS configurés

### **4. Supabase:**
- [ ] Edge Functions déployées
- [ ] Table `kv_store_2fc91c13` créée
- [ ] RLS (Row Level Security) configuré (optionnel)
- [ ] CORS configuré sur Edge Functions

### **5. Post-déploiement:**
- [ ] Site accessible via URL
- [ ] Toutes les pages chargent
- [ ] Formulaire envoie données (vérifier Supabase)
- [ ] Images s'affichent
- [ ] Pas d'erreurs console

---

## 🐛 Problèmes Courants

### **1. "404 Not Found" sur les pages**
**Cause:** Serveur ne redirige pas vers `index.html`  
**Solution:** Configurer Nginx/Apache (voir config ci-dessus)

### **2. "Supabase is not defined"**
**Cause:** Variables d'environnement non configurées  
**Solution:** Vérifier configuration variables

### **3. "Failed to fetch"**
**Cause:** CORS Edge Functions  
**Solution:** Vérifier CORS dans `/supabase/functions/server/index.tsx`

### **4. "Images ne s'affichent pas"**
**Cause:** Chemins images incorrects après build  
**Solution:** Utiliser `import` pour les images (déjà fait)

### **5. "Build échoue"**
**Cause:** Erreurs TypeScript  
**Solution:** Corriger les erreurs avec `npm run build`

---

## 📊 Tableau Récapitulatif

| Étape | Vercel/Netlify | Serveur Perso | Hébergement Classique |
|-------|----------------|---------------|----------------------|
| **1. Build** | Auto | `npm run build` | `npm run build` |
| **2. Transfert** | Git push | SCP/SFTP `/dist` | FTP `/dist` |
| **3. Variables env** | Dashboard | Fichier ou hardcode | Hardcode uniquement |
| **4. HTTPS** | Auto gratuit | Let's Encrypt | Selon hébergeur |
| **5. Edge Functions** | Supabase CLI | Supabase CLI | Supabase CLI |
| **Difficulté** | ⭐ Facile | ⭐⭐⭐ Moyen | ⭐⭐⭐⭐ Difficile |
| **Coût** | Gratuit | 5-20€/mois | 3-15€/mois |
| **Performance** | ⚡⚡⚡ | ⚡⚡ | ⚡ |

---

## 🎯 Recommandation Finale

### **Pour Titah (agence digitale):**

**Option recommandée : Vercel** ✅

**Pourquoi ?**
1. ✅ **Gratuit** - Pas de coût mensuel
2. ✅ **Professionnel** - Image de qualité pour une agence
3. ✅ **Rapide** - CDN mondial, chargement ultra-rapide
4. ✅ **Simple** - Déploiement en 5 minutes
5. ✅ **Maintenance** - Mises à jour automatiques
6. ✅ **Analytics** - Statistiques intégrées
7. ✅ **Domaine custom** - `titah.fr` facile à configurer

**Alternative :** Netlify (similaire à Vercel)

**À éviter :** Hébergement classique (trop complexe pour peu d'avantages)

---

## 🚀 Action Plan (Déploiement Vercel)

### **Timeline : 30 minutes**

**Étape 1 (5 min) - Préparer le code:**
```bash
git init
git add .
git commit -m "Ready for deployment"
```

**Étape 2 (5 min) - Push sur GitHub:**
- Créer repo sur GitHub
- Push le code

**Étape 3 (10 min) - Déployer sur Vercel:**
- Connecter GitHub à Vercel
- Importer repo
- Configurer variables d'environnement
- Deploy

**Étape 4 (5 min) - Déployer Edge Functions:**
```bash
supabase functions deploy make-server-2fc91c13
```

**Étape 5 (5 min) - Tester:**
- Visiter l'URL Vercel
- Tester formulaire contact
- Vérifier toutes les pages

**✅ TERMINÉ !**

---

## 📞 Support

**Besoin d'aide pour le déploiement ?**
- **Email:** welcome@titah.fr
- **Documentation Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Documentation Supabase:** [supabase.com/docs](https://supabase.com/docs)

---

**Créé le:** 21 Octobre 2025  
**Dernière mise à jour:** 21 Octobre 2025  
**Version:** 2.0.0
