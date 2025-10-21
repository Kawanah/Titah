# 🔒 AUDIT DE SÉCURITÉ COMPLET - Titah Application

**Date:** 20 Octobre 2025  
**Auditeur:** Révision de sécurité complète  
**Niveau de risque global:** ⚠️ **MOYEN** (OK pour développement, nécessite améliorations pour production)

---

## 🚨 VULNÉRABILITÉS CRITIQUES IDENTIFIÉES

### ❌ 1. ACCÈS ADMIN NON PROTÉGÉ - CRITIQUE

**Fichier:** `/components/AdminPage.tsx`  
**Problème:** N'importe qui peut accéder à l'interface admin  
**Exposition:** TOUTES les données clients (emails, téléphones, messages)

**Code problématique:**
```typescript
// Ligne 54-60 : Aucune authentification !
const contactsResponse = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-2fc91c13/contacts`,
  {
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`, // ⚠️ CLÉ PUBLIQUE = pas de sécurité
    },
  }
);
```

**Impact:**
- ✅ Visible depuis le footer (bullet point •)
- ✅ Aucun mot de passe requis
- ✅ Tous les contacts exposés
- ✅ Données personnelles (RGPD) accessibles à tous

**Solution IMMÉDIATE requise:** Voir section "Corrections"

---

### ❌ 2. ENDPOINTS API PUBLICS - CRITIQUE

**Fichier:** `/supabase/functions/server/index.tsx`  
**Problème:** Routes admin accessibles sans authentification

**Endpoints exposés:**
```typescript
GET /make-server-2fc91c13/contacts        // ⚠️ Liste TOUS les contacts
GET /make-server-2fc91c13/contacts/stats  // ⚠️ Statistiques complètes
```

**Code problématique (ligne 29-54):**
```typescript
app.get("/make-server-2fc91c13/contacts", async (c) => {
  // ⚠️ PAS DE VÉRIFICATION D'AUTHENTIFICATION
  const contacts = await kv.getByPrefix("contact_");
  return c.json({ contacts }); // Retourne TOUT
});
```

**Impact:**
- N'importe qui peut faire: `GET https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts`
- Toutes les données exposées publiquement
- Violation RGPD potentielle

---

### ⚠️ 3. MÉTADONNÉES IP EXPOSÉES

**Fichier:** `/supabase/functions/server/index.tsx` (ligne 160)  
**Problème:** Stockage de l'IP utilisateur

```typescript
metadata: {
  userAgent: c.req.header("user-agent") || "unknown",
  ip: c.req.header("x-forwarded-for") || "unknown", // ⚠️ IP stockée
}
```

**Impact RGPD:**
- IP = donnée personnelle selon RGPD
- Nécessite consentement explicite
- Doit être mentionné dans la politique de confidentialité

---

### ⚠️ 4. PAS DE RATE LIMITING

**Fichier:** `/supabase/functions/server/index.tsx`  
**Problème:** Aucune limite de soumission

**Risques:**
- Spam massif possible
- Attaque par déni de service (DoS)
- Remplissage de la base avec des données inutiles
- Coûts Supabase augmentés

**Test facile:**
```javascript
// Un attaquant peut faire ceci en boucle :
for (let i = 0; i < 10000; i++) {
  fetch('https://...contact', { method: 'POST', body: {...} });
}
```

---

### ⚠️ 5. XSS POTENTIEL DANS L'ADMIN

**Fichier:** `/components/AdminPage.tsx` (ligne 265)  
**Problème:** Affichage direct du message sans sanitization

```typescript
<div className="text-gray-900 bg-gray-50 p-4 rounded-[5px] whitespace-pre-wrap">
  {selectedContact.message}  {/* ⚠️ Pas de sanitization HTML */}
</div>
```

**Impact:**
Si un attaquant soumet:
```
<script>alert('XSS')</script>
<img src=x onerror="alert('XSS')">
```

En React, c'est généralement safe grâce à l'échappement automatique, MAIS :
- `whitespace-pre-wrap` peut préserver certains caractères
- Risque si on utilise `dangerouslySetInnerHTML` plus tard

---

## ✅ POINTS POSITIFS

### ✅ 1. Validation Frontend
- Email regex correcte
- Téléphone validé
- Message limité à 2000 caractères
- Options limitées à 20 items

### ✅ 2. Validation Backend (double)
- Tous les champs vérifiés côté serveur
- Sanitization avec `.trim()` et `.slice()`
- Messages d'erreur génériques (pas de fuite d'infos)

### ✅ 3. Utilisation de publicAnonKey
- Pas d'exposition de `SERVICE_ROLE_KEY` dans le frontend
- Séparation correcte des clés

### ✅ 4. Logs sécurisés
- Erreurs détaillées en console serveur uniquement
- Messages génériques renvoyés au client

---

## 🛠️ CORRECTIONS REQUISES (PAR PRIORITÉ)

### 🔴 PRIORITÉ 1 - CRITIQUE (À faire MAINTENANT)

#### 1.1 Protéger l'accès Admin

**Option A: Authentification simple par mot de passe**

Créer `/components/AdminLogin.tsx`:
```typescript
export function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En production, utiliser une vraie auth
    // Pour le dev, un mot de passe simple suffit
    if (password === 'votre_mot_de_passe_fort') {
      localStorage.setItem('admin_auth', 'true');
      onLogin();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Accès Admin</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full px-4 py-2 border rounded mb-4"
        />
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-[#9b3eff] text-white py-2 rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
}
```

Modifier `/components/AdminPage.tsx`:
```typescript
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  const auth = localStorage.getItem('admin_auth');
  if (auth === 'true') {
    setIsAuthenticated(true);
  }
}, []);

if (!isAuthenticated) {
  return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
}
```

**Option B: Supabase Auth (Recommandé pour production)**

Voir détails en section "Production".

---

#### 1.2 Protéger les endpoints backend

Modifier `/supabase/functions/server/index.tsx`:

```typescript
// Ajouter une fonction de vérification
const verifyAdminAccess = async (authHeader: string | undefined) => {
  // Option simple : vérifier un token secret
  const adminToken = Deno.env.get("ADMIN_SECRET_TOKEN");
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  return token === adminToken;
};

// Protéger les routes
app.get("/make-server-2fc91c13/contacts", async (c) => {
  const isAdmin = await verifyAdminAccess(c.req.header('Authorization'));
  
  if (!isAdmin) {
    return c.json({ error: "Accès non autorisé" }, 401);
  }
  
  // ... reste du code
});

app.get("/make-server-2fc91c13/contacts/stats", async (c) => {
  const isAdmin = await verifyAdminAccess(c.req.header('Authorization'));
  
  if (!isAdmin) {
    return c.json({ error: "Accès non autorisé" }, 401);
  }
  
  // ... reste du code
});
```

**Créer la variable d'environnement:**
```
ADMIN_SECRET_TOKEN=un_token_très_secret_et_long_ici_123456
```

---

### 🟠 PRIORITÉ 2 - IMPORTANT (À faire rapidement)

#### 2.1 Ajouter Rate Limiting

Créer `/supabase/functions/server/rate-limiter.ts`:
```typescript
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (ip: string, maxRequests: number = 5, windowMs: number = 3600000): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};
```

Dans `/supabase/functions/server/index.tsx`:
```typescript
import { checkRateLimit } from './rate-limiter.ts';

app.post("/make-server-2fc91c13/contact", async (c) => {
  const ip = c.req.header("x-forwarded-for") || "unknown";
  
  if (!checkRateLimit(ip, 5, 3600000)) { // 5 requêtes/heure
    return c.json({ 
      error: "Trop de demandes. Veuillez réessayer dans 1 heure." 
    }, 429);
  }
  
  // ... reste du code
});
```

---

#### 2.2 Retirer le stockage de l'IP (RGPD)

**Option 1:** Supprimer complètement
```typescript
// Retirer ces lignes (160-162)
metadata: {
  userAgent: c.req.header("user-agent") || "unknown",
  // ip: c.req.header("x-forwarded-for") || "unknown", // ❌ Retiré
}
```

**Option 2:** Hash de l'IP (anonymisation)
```typescript
import { crypto } from "node:crypto";

const hashIp = (ip: string): string => {
  return crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16);
};

metadata: {
  userAgent: c.req.header("user-agent") || "unknown",
  ipHash: hashIp(c.req.header("x-forwarded-for") || "unknown"), // ✅ Hash anonyme
}
```

---

#### 2.3 Ajouter sanitization HTML dans l'Admin

```typescript
// Fonction utilitaire
const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Dans l'affichage du message
<div className="...">
  {escapeHtml(selectedContact.message)}
</div>
```

OU utiliser une bibliothèque:
```bash
npm install dompurify
```

```typescript
import DOMPurify from 'dompurify';

<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedContact.message) }} />
```

---

### 🟡 PRIORITÉ 3 - RECOMMANDÉ (Pour production)

#### 3.1 Implémenter Supabase Auth

```typescript
// Dans AdminPage.tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(projectId, publicAnonKey);

// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@titah.fr',
  password: 'mot_de_passe_fort'
});

// Vérifier la session
const { data: { session } } = await supabase.auth.getSession();
if (!session) {
  // Rediriger vers login
}
```

Backend:
```typescript
const { data: { user }, error } = await supabase.auth.getUser(accessToken);
if (!user || user.email !== 'admin@titah.fr') {
  return c.json({ error: 'Unauthorized' }, 401);
}
```

---

#### 3.2 Ajouter CAPTCHA (anti-spam)

```bash
npm install @hcaptcha/react-hcaptcha
```

```typescript
import HCaptcha from '@hcaptcha/react-hcaptcha';

<HCaptcha
  sitekey="votre_site_key"
  onVerify={(token) => setCaptchaToken(token)}
/>
```

---

#### 3.3 Logging & Monitoring

```typescript
// Sentry pour tracking d'erreurs
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "votre_dsn_sentry",
  environment: "production"
});
```

---

## 📋 CHECKLIST AVANT PRODUCTION

### Sécurité
- [ ] ✅ Authentification admin implémentée
- [ ] ✅ Endpoints admin protégés
- [ ] ✅ Rate limiting activé (5 req/heure)
- [ ] ✅ IP anonymisée ou retirée
- [ ] ✅ CAPTCHA ajouté au formulaire
- [ ] ✅ Sanitization HTML renforcée
- [ ] ✅ HTTPS uniquement (force SSL)
- [ ] ✅ Content Security Policy (CSP) configurée

### RGPD & Conformité
- [ ] ✅ Politique de confidentialité mise à jour
- [ ] ✅ Mentions légales complètes
- [ ] ✅ Consentement cookies
- [ ] ✅ Droit à l'oubli implémenté
- [ ] ✅ Export des données possible

### Performance
- [ ] ✅ Images optimisées
- [ ] ✅ JS/CSS minifiés
- [ ] ✅ CDN configuré
- [ ] ✅ Cache headers configurés

### Monitoring
- [ ] ✅ Sentry ou équivalent configuré
- [ ] ✅ Logs d'accès admin
- [ ] ✅ Alertes email nouveaux contacts
- [ ] ✅ Backup automatique DB

---

## 🎯 RECOMMANDATIONS PAR ENVIRONNEMENT

### 🧪 DÉVELOPPEMENT (Actuel)
**Status:** ⚠️ Acceptable SEULEMENT pour dev/test

**À faire minimum:**
1. Ajouter mot de passe simple sur admin
2. Documenter que c'est temporaire

---

### 🚀 STAGING/PRE-PROD
**Status:** ❌ Non déployable en l'état

**Requis:**
1. ✅ Auth admin (Option A minimum)
2. ✅ Endpoints protégés
3. ✅ Rate limiting basique
4. ✅ Retrait IP ou hash

---

### 🏭 PRODUCTION
**Status:** ❌ NON CONFORME - Corrections critiques requises

**Requis:**
1. ✅ Supabase Auth complète
2. ✅ Tous les endpoints protégés
3. ✅ Rate limiting + CAPTCHA
4. ✅ Conformité RGPD complète
5. ✅ Monitoring complet
6. ✅ Backup automatique
7. ✅ Tests de sécurité (penetration testing)

---

## 🔍 TESTS DE SÉCURITÉ RECOMMANDÉS

### Test 1: Accès Admin non autorisé
```bash
# Ouvrir en navigation privée
# Aller sur le site
# Cliquer sur "•" dans le footer
# Si vous voyez les contacts = ❌ ÉCHEC
```

### Test 2: API publique
```bash
curl https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts \
  -H "Authorization: Bearer eyJhbGci..."

# Si ça retourne des données = ❌ ÉCHEC
```

### Test 3: Rate limiting
```javascript
// Envoyer 10 formulaires rapidement
for (let i = 0; i < 10; i++) {
  submitForm();
}
// Si tous passent = ❌ ÉCHEC
```

### Test 4: XSS
```
Message: <script>alert('XSS')</script>
// Soumettre et voir dans admin
// Si une alerte s'affiche = ❌ ÉCHEC
```

---

## 📞 RESSOURCES

- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **RGPD:** https://www.cnil.fr/
- **Supabase Security:** https://supabase.com/docs/guides/auth
- **Rate Limiting:** https://www.npmjs.com/package/express-rate-limit

---

## ✍️ CONCLUSION

### État actuel
L'application est **fonctionnelle** mais **NON SÉCURISÉE** pour une mise en production.

### Risques principaux
1. **Fuite de données clients** (emails, téléphones, messages)
2. **Spam possible** (pas de rate limiting)
3. **Non-conformité RGPD** (IP stockée sans consentement)

### Actions immédiates
1. ✅ Protéger l'admin avec mot de passe (30 min)
2. ✅ Protéger les endpoints API (30 min)
3. ✅ Ajouter rate limiting (1h)

### Timeline recommandée
- **Cette semaine:** Priorité 1 (Critiques)
- **Dans 2 semaines:** Priorité 2 (Importantes)
- **Avant production:** Priorité 3 + Checklist complète

---

**Auditeur:** Assistant IA - Figma Make  
**Date:** 20 Octobre 2025  
**Prochaine revue:** Après implémentation des corrections P1
