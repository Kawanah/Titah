# ⚡ Quick Start - Développeurs

**TL;DR** - Tout ce qu'il faut savoir en 3 minutes

---

## 🎯 Architecture en 30 secondes

```typescript
App.tsx (19 lignes)
  └─> useNavigation() hook
      └─> <Router currentRoute={...} />
          └─> Render <Page />
```

**Type-safe routing** avec constantes dans `/utils/routes.ts`

---

## 🚀 Navigation

```typescript
// ✅ Utiliser les constantes
import { ROUTES } from '../utils/routes';

<button onClick={() => onNavigate(ROUTES.CONTACT)}>
  Contact
</button>

// ❌ Éviter les strings
<button onClick={() => onNavigate('contact')}>
```

---

## ➕ Ajouter une page

**3 étapes:**

```typescript
// 1️⃣ /utils/routes.ts
export const ROUTES = {
  // ... existing
  NEW_PAGE: 'new-page',
} as const;

// 2️⃣ /components/NewPage.tsx
export function NewPage() {
  return <div>...</div>;
}

// 3️⃣ /components/Router.tsx
import { NewPage } from './NewPage';

case ROUTES.NEW_PAGE:
  return <NewPage />;
```

**Done!** ✅

---

## 🎨 Design System

### Couleurs:
```tsx
#9b3eff  // Violet
#ff4e1f  // Orange
#1b1c1e  // Noir
#717182  // Gris
```

### Border Radius:
```tsx
5px   // Boutons
12px  // Cartes
16px  // Sections
24px  // Grandes sections
32px  // Hero
```

### Usage:
```tsx
<div className="bg-[#9b3eff] rounded-[12px]">
  ...
</div>
```

---

## 📁 Structure

```
/App.tsx              ← Entry (19 lignes)
/components/
  ├── Router.tsx      ← Routing 🆕
  ├── *Page.tsx       ← Pages (7)
  ├── home/           ← HomePage sections
  ├── shared/         ← Composants partagés
  └── ui/             ← Shadcn components
/utils/
  ├── routes.ts       ← Routes config 🆕
  ├── useNavigation.ts ← Hook 🆕
  ├── constants.ts
  ├── types.ts
  └── validation.ts
/styles/
  └── globals.css     ← Tailwind v4 (nettoyé ✨)
```

---

## 🔧 Backend

```typescript
// Frontend → API
import { submitContact } from '../utils/api';

await submitContact(formData);
```

**Supabase:**
- Table: `kv_store_2fc91c13`
- Edge Function: `/supabase/functions/server/`
- Endpoints: `/make-server-2fc91c13/*`

---

## 📚 Documentation

| Fichier | Contenu |
|---------|---------|
| `/QUICK_REFACTORING_GUIDE.md` | Guide rapide (2 min) |
| `/REFACTORING.md` | Doc complète technique |
| `/ARCHITECTURE.md` | Vue d'ensemble |
| `/CHANGELOG.md` | Historique versions |

---

## ✅ Checklist Dev

Avant de coder:
- [ ] Lire `/QUICK_REFACTORING_GUIDE.md` (2 min)
- [ ] Regarder `/utils/routes.ts` (constantes)
- [ ] Regarder `/components/Router.tsx` (routing)
- [ ] Utiliser **TOUJOURS** `ROUTES.X` (jamais strings)

---

## 🎯 Best Practices

```typescript
// ✅ Good
import { ROUTES } from '../utils/routes';
onNavigate(ROUTES.ABOUT);

// ❌ Bad
onNavigate('about');
```

```typescript
// ✅ Good
<div className="bg-[#9b3eff] rounded-[12px]">

// ❌ Bad (classes Tailwind font/text interdites)
<div className="text-2xl font-bold">
```

```typescript
// ✅ Good
import { NavigationProps } from '../utils/types';

export function MyPage({ onNavigate }: NavigationProps) {
  // ...
}
```

---

## 🐛 Debug

```typescript
// Route invalide ?
console.log('Current route:', currentRoute);

// Check validation
import { isValidRoute } from '../utils/routes';
console.log(isValidRoute('test')); // false
```

---

## 🚀 Commandes

```bash
# Dev
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📞 Help

**Questions ?**
- Lire `/QUICK_REFACTORING_GUIDE.md`
- Regarder exemples dans le code (commentaires JSDoc)
- Consulter `/REFACTORING.md` pour détails

**Email:** welcome@titah.fr

---

**Version:** 2.0  
**Date:** 21 Octobre 2025  
**Status:** ✅ Production Ready

**Temps de lecture:** 3 minutes ⚡
