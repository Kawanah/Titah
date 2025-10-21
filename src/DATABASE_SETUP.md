# 🗄️ Configuration Base de Données - Titah

## Vue d'ensemble

L'application Titah utilise une base de données **Supabase** sécurisée pour stocker tous les contacts provenant du formulaire.

---

## 📊 Architecture

```
Frontend (ContactPage.tsx)
    ↓
API Layer (/utils/api.ts)
    ↓
Backend Server (/supabase/functions/server/index.tsx)
    ↓
KV Store (/supabase/functions/server/kv_store.tsx)
    ↓
Supabase PostgreSQL Database (table: kv_store_2fc91c13)
```

---

## 🔑 Structure des Données

### Format de clé
```
contact_<timestamp>_<random_id>
```

**Exemple:** `contact_1729458123456_a7b3c9d`

### Format de valeur (JSON)

```json
{
  "id": "contact_1729458123456_a7b3c9d",
  "submittedAt": "2025-10-20T14:32:15.123Z",
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@example.com",
  "phone": "+33 6 12 34 56 78",
  "establishmentType": "hotel",
  "service": "site-vitrine-complet",
  "options": [
    "pages-additionnelles",
    "version-multilingue",
    "pack-seo"
  ],
  "message": "Je souhaite créer un site pour mon hôtel...",
  "status": "new",
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "ip": "192.168.1.1"
  }
}
```

---

## 🛣️ Routes API

### 1. Créer un contact

**Endpoint:** `POST /make-server-2fc91c13/contact`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {publicAnonKey}
```

**Body:**
```json
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@example.com",
  "phone": "+33 6 12 34 56 78",
  "establishmentType": "hotel",
  "service": "site-vitrine-complet",
  "options": ["pages-additionnelles"],
  "message": "Votre message...",
  "consent": true
}
```

**Validation:**
- ✅ Email format valide
- ✅ Téléphone format valide (optionnel)
- ✅ Message max 2000 caractères
- ✅ Options max 20 items
- ✅ Tous les champs requis présents
- ✅ Consent = true

**Réponse succès (200):**
```json
{
  "success": true,
  "message": "Votre demande a été envoyée avec succès"
}
```

**Réponse erreur (400/500):**
```json
{
  "error": "Message d'erreur générique"
}
```

---

### 2. Liste des contacts

**Endpoint:** `GET /make-server-2fc91c13/contacts`

**Headers:**
```
Authorization: Bearer {publicAnonKey}
```

**Réponse (200):**
```json
{
  "success": true,
  "count": 42,
  "contacts": [
    {
      "id": "contact_...",
      "submittedAt": "2025-10-20T14:32:15.123Z",
      "firstName": "Jean",
      "lastName": "Dupont",
      // ... autres champs
    }
  ]
}
```

**Tri:** Par date décroissante (plus récents en premier)

---

### 3. Statistiques

**Endpoint:** `GET /make-server-2fc91c13/contacts/stats`

**Headers:**
```
Authorization: Bearer {publicAnonKey}
```

**Réponse (200):**
```json
{
  "success": true,
  "stats": {
    "total": 42,
    "byStatus": {
      "new": 15,
      "read": 10,
      "contacted": 12,
      "closed": 5
    },
    "byService": {
      "landing-page-express": 10,
      "site-vitrine-complet": 25,
      "refonte-modernisation": 7
    },
    "byEstablishmentType": {
      "hotel": 20,
      "camping": 10,
      "gite": 8,
      "chambre-hote": 4
    },
    "last24h": 3,
    "last7days": 18,
    "last30days": 42
  }
}
```

---

## 🎨 Interface Admin

### Accès
- **URL:** Cliquer sur le bullet point (•) dans le footer
- **Page:** Automatiquement sur `/admin`

### Fonctionnalités

#### 📊 Dashboard
- **4 cartes de statistiques:**
  - Total de contacts
  - Dernières 24h
  - 7 derniers jours
  - Nouveaux contacts

#### 🔍 Filtres
- Tous
- New (nouveaux)
- Read (lus)
- Contacted (contactés)
- Closed (fermés)

#### 📋 Tableau des contacts
Colonnes affichées:
- Date de soumission
- Contact (nom, email, téléphone)
- Type d'établissement
- Service demandé
- Statut
- Actions

#### 👁️ Vue détaillée
Modal avec:
- Toutes les informations du contact
- Options sélectionnées (badges)
- Message complet
- Métadonnées (ID, User-Agent, IP)
- Bouton "Répondre par email" (mailto:)

---

## 🔒 Sécurité

### Mesures en place

1. **Validation stricte**
   - Frontend: Validation avant envoi
   - Backend: Double validation avec sanitization

2. **Sanitization automatique**
   - `.trim()` sur tous les strings
   - `.slice(0, 500)` pour limiter la longueur
   - Validation regex pour email/téléphone

3. **Messages d'erreur génériques**
   - Pas d'exposition des détails internes
   - Logs détaillés uniquement côté serveur

4. **Rate limiting** (à implémenter)
   - Actuellement: Pas de limite
   - Production: Max 5 soumissions/heure/IP recommandé

### ⚠️ À faire pour la production

1. **Authentification Admin**
   ```typescript
   // Implémenter Supabase Auth
   const { data: { user } } = await supabase.auth.getUser(accessToken);
   if (!user || user.role !== 'admin') {
     return c.json({ error: 'Unauthorized' }, 401);
   }
   ```

2. **Row Level Security (RLS)**
   ```sql
   -- À configurer dans Supabase Dashboard
   ALTER TABLE kv_store_2fc91c13 ENABLE ROW LEVEL SECURITY;
   
   CREATE POLICY "Admin only can read contacts"
   ON kv_store_2fc91c13
   FOR SELECT
   USING (auth.role() = 'admin');
   ```

3. **Rate Limiting**
   - Utiliser Supabase Edge Functions rate limiting
   - Ou implémenter un système custom avec Redis

4. **Monitoring**
   - Implémenter Sentry pour tracking d'erreurs
   - Analytics sur taux de conversion
   - Alertes email pour nouveaux contacts

---

## 🚀 Utilisation

### Pour les développeurs

**Tester la soumission:**
```bash
curl -X POST https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contact \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "",
    "establishmentType": "hotel",
    "service": "landing-page-express",
    "options": [],
    "message": "Test message",
    "consent": true
  }'
```

**Récupérer les contacts:**
```bash
curl https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Voir les stats:**
```bash
curl https://<project-id>.supabase.co/functions/v1/make-server-2fc91c13/contacts/stats \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

### Pour les utilisateurs

1. **Soumettre une demande:**
   - Aller sur la page Contact
   - Remplir le formulaire
   - Cliquer sur "Envoyer ma demande"
   - Confirmation visuelle (message vert)

2. **Consulter les demandes (Admin):**
   - Cliquer sur le "•" dans le footer
   - Voir le dashboard avec stats
   - Filtrer par statut si besoin
   - Cliquer sur "Voir détails" pour plus d'infos
   - Cliquer sur "Répondre par email" pour contacter

---

## 📈 Évolutions futures

### Court terme
- [ ] Authentification admin avec Supabase Auth
- [ ] Modification du statut depuis l'interface
- [ ] Export CSV des contacts
- [ ] Recherche/filtrage avancé

### Moyen terme
- [ ] Système de tags personnalisés
- [ ] Notes internes sur les contacts
- [ ] Historique des interactions
- [ ] Notification email automatique

### Long terme
- [ ] CRM intégré
- [ ] Automatisation email (follow-up)
- [ ] Analytics avancés
- [ ] Intégration calendrier (RDV)

---

## 🆘 Troubleshooting

### Erreur: "Service temporairement indisponible"
**Cause:** Variables d'environnement Supabase manquantes  
**Solution:** Vérifier que SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont configurés

### Erreur: "Format d'email invalide"
**Cause:** Email ne correspond pas au regex  
**Solution:** Vérifier le format (doit contenir @ et .)

### Erreur: "Le message est trop long"
**Cause:** Message > 2000 caractères  
**Solution:** Raccourcir le message

### Les contacts ne s'affichent pas dans l'admin
**Cause:** Problème de connexion à la base  
**Solution:** 
1. Vérifier la console pour les erreurs
2. Tester l'endpoint /health
3. Vérifier les credentials Supabase

---

## 📞 Support

Pour toute question sur la configuration de la base de données:
- **Email:** welcome@titah.fr
- **Documentation Supabase:** https://supabase.com/docs

---

**Dernière mise à jour:** 20 octobre 2025  
**Version:** 1.0.0  
**Mainteneur:** Équipe Titah
