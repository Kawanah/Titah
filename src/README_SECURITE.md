# 🔒 Sécurité - Guide Rapide

## ✅ Ce qui est sécurisé
- Configuration Supabase chargée via `VITE_SUPABASE_*` (plus de clés hardcodées).
- Endpoints admin (`/contacts`, `/contacts/stats`) protégés par un jeton `ADMIN_SECRET_TOKEN`.
- CORS restreint aux origines autorisées (`ALLOWED_ORIGINS`).
- Rate limiting en place (5 requêtes/heure/IP) et suppression de l'adresse IP dans les métadonnées.

## ⚠️ Ce qu'il reste à sécuriser pour la production
- Remplacer le jeton statique par Supabase Auth + RLS et un back-office serveur.
- Mettre en place CAPTCHA, monitoring, backups et audit RGPD complet.
- Planifier un test de pénétration avant mise en ligne.

---

## 🎯 Pour le développement

**✅ C'EST OK** - Vous pouvez :
- Tester le site localement
- Présenter une démo client
- Travailler en équipe avec un jeton admin partagé

**⚠️ À SURVEILLER :**
- Ne partager `ADMIN_SECRET_TOKEN` qu'au sein de l'équipe technique
- Régénérer le jeton si vous suspectez une fuite

---

## 🚀 Pour la production

**❌ NON PRÊT** tant que les points suivants ne sont pas livrés :
1. Supabase Auth + RLS et un back-office sécurisé côté serveur.
2. CAPTCHA actif sur le formulaire public et rate limiting ajusté.
3. Conformité RGPD (politique, DPA, droit à l'oubli) validée.
4. Monitoring (Sentry/logs), alertes et backups automatisés testés.
5. Tests de pénétration / revue sécurité finale.

---

## 📚 Documentation Complète

| Document | Description |
|----------|-------------|
| **`/README_SECURITE.md`** | Ce guide (résumé rapide) |
| **`/SECURITY_REVIEW.md`** | Audit complet avec tests |
| **`/SECURITY_FIXES_APPLIED.md`** | Corrections + prochaines étapes |
| **`/SECURITY_AUDIT.md`** | Audit initial |

---

## 🔧 Actions Rapides

### 1. Configurer l'environnement local
```bash
cp .env.example .env.local
# puis renseigner VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
```

### 2. Définir les secrets Supabase
```bash
export ADMIN_SECRET_TOKEN=$(openssl rand -hex 48)
export SUPABASE_URL=https://<project-id>.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
export ALLOWED_ORIGINS=http://localhost:5173,https://titah.fr
./scripts/set_supabase_secrets.sh
supabase functions deploy make-server-2fc91c13
```

### 3. Vérifier les protections
```bash
# Sans jeton → doit répondre 401
curl -i https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts

# Avec jeton → doit répondre 200
curl https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts \
  -H "Authorization: Bearer $ADMIN_SECRET_TOKEN"
```

---

## 🆘 Aide Rapide

### 401 Unauthorized sur l'endpoint admin
- Vérifier que `ADMIN_SECRET_TOKEN` est bien défini côté Supabase.
- Vérifier l'en-tête `Authorization: Bearer <token>` côté client interne.

### CORS 403 en local
- Ajouter l'origine (`http://127.0.0.1:5176` par exemple) dans `ALLOWED_ORIGINS`, rerun `set_supabase_secrets.sh`, redeployer la fonction.

### Code 429 trop fréquent
- Le rate limiting est réglé à 5 requêtes/heure par IP. Ajuster `checkRateLimit` si besoin.

---

## ⏱️ Timeline Recommandée

| Quand | Quoi |
|-------|------|
| **Maintenant** | Configurer `.env.local` + secrets Supabase, vérifier 401/429 |
| **Cette semaine** | Documenter l'usage du `ADMIN_SECRET_TOKEN` (rotation, CLI interne) |
| **Sprint suivant** | Implémenter Supabase Auth + back-office serveur |
| **Avant mise en prod** | Ajouter CAPTCHA, monitoring, backups, audit RGPD |
| **Go-live** | Effectuer un test de pénétration et revue finale |

---

