# 🚨 IMPORTANT - À LIRE EN PREMIER

## ❌ **NON, vous ne pouvez PAS simplement transférer les fichiers !**

Votre site est une **application React**, pas du HTML/CSS statique.

---

## ✅ **Ce qu'il faut faire (2 options simples)**

### **OPTION 1 : Vercel (RECOMMANDÉ - Gratuit & 5 minutes)** ⭐

```bash
# 1. Push sur GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Aller sur vercel.com
# 3. "New Project" → Importer votre repo GitHub
# 4. Ajouter 3 variables d'environnement:
#    - SUPABASE_URL
#    - SUPABASE_ANON_KEY
#    - SUPABASE_SERVICE_ROLE_KEY
# 5. Cliquer "Deploy"

# ✅ C'EST TOUT ! Site en ligne en 2 minutes
```

**Avantages Vercel:**
- ✅ **Gratuit** pour toujours
- ✅ **HTTPS automatique**
- ✅ **CDN mondial** (ultra-rapide)
- ✅ **Build automatique** (pas besoin de compiler)
- ✅ **Domaine custom** facile (`titah.fr`)

---

### **OPTION 2 : Serveur Classique (Compliqué)**

```bash
# 1. Builder l'application
npm install
npm run build

# 2. Transférer UNIQUEMENT le dossier /dist
# (via FTP/SFTP vers votre serveur)

# 3. Configurer Nginx/Apache pour SPA
# (rediriger toutes les routes vers index.html)

# ⚠️ ATTENTION: Variables d'environnement Supabase
# ne fonctionnent PAS avec build statique !
# Vous devrez hardcoder les valeurs (risque sécurité)
```

**Problèmes avec cette option:**
- ⚠️ Nécessite configuration serveur complexe
- ⚠️ Variables d'environnement difficiles
- ⚠️ Pas de HTTPS gratuit automatique
- ⚠️ Pas de CDN (site plus lent)

---

## 🎯 **Recommandation**

**Utilisez Vercel !** C'est:
- Plus rapide à configurer (5 min vs 2h)
- Gratuit
- Plus performant
- Plus professionnel
- Plus sécurisé

---

## 📁 **Fichiers à NE PAS transférer**

Si vous utilisez Vercel/Netlify : **tout est géré automatiquement** ✅

Si serveur classique, NE PAS transférer :
```
❌ Tous les fichiers .md (documentation)
❌ /guidelines/
❌ /components/ (sources React)
❌ /utils/ (sources TypeScript)
❌ node_modules/
❌ package.json
❌ Les fichiers de config (.tsx, .ts, .json)

✅ Transférer UNIQUEMENT : /dist/
```

---

## 🚀 **Action Immédiate**

**Pour déployer maintenant (5 minutes) :**

1. **Créer compte GitHub** (si pas déjà fait)
2. **Push votre code** sur GitHub
3. **Aller sur [vercel.com](https://vercel.com)**
4. **Se connecter avec GitHub**
5. **Cliquer "New Project"**
6. **Importer votre repo**
7. **Ajouter 3 variables d'environnement** (voir ci-dessus)
8. **Cliquer "Deploy"**

✅ **TERMINÉ !** Votre site sera en ligne avec une URL type : `titah-xyz.vercel.app`

---

## ❓ **Questions Fréquentes**

### **Q: C'est vraiment gratuit ?**
**R:** Oui, 100% gratuit pour toujours avec Vercel (sauf si trafic énorme).

### **Q: Je peux utiliser mon domaine titah.fr ?**
**R:** Oui ! Facile à configurer dans Vercel Settings → Domains.

### **Q: Et le formulaire de contact ?**
**R:** Il fonctionne automatiquement (Supabase est déjà configuré).

### **Q: Dois-je payer pour Supabase ?**
**R:** Non, gratuit jusqu'à 500MB base de données + 2GB transfert/mois.

### **Q: Je veux vraiment utiliser mon serveur OVH...**
**R:** Voir le fichier `/DEPLOYMENT_GUIDE.md` pour guide détaillé.

---

## 📚 **Documentation Complète**

**Pour plus de détails :** Lire [`/DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md)

---

**TL;DR : Utilisez Vercel, c'est gratuit et ça prend 5 minutes ! 🚀**
