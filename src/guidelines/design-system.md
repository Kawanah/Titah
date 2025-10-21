# WebTourisme - Design System Guidelines

## Principes de base
- **Toujours travailler en CLEAR** : code propre, lisible et maintenable
- **Utiliser les classes Tailwind configurées** : ne jamais inventer de couleurs ou styles
- **Respecter la palette définie** : cohérence visuelle sur tout le site

---

## Palette de couleurs

### Couleurs principales (Brand)
```
Primary (Violet)  : #9B3EFF
Secondary (Orange): #FF4E1F
```

### Couleurs neutres
```
Noir principal    : #1B1C1E
Gris foncé        : #44484F
Gris moyen        : #717182
Gris clair        : #ECECF0
Blanc             : #FFFFFF
```

### Utilisation Tailwind
```tsx
// Couleurs brand
bg-brand-primary      // #9B3EFF
bg-brand-secondary    // #FF4E1F
text-brand-primary    // #9B3EFF
text-brand-secondary  // #FF4E1F

// Couleurs neutres
bg-neutral-black      // #1B1C1E
text-neutral-dark     // #44484F
text-neutral-medium   // #717182
text-neutral-light    // #ECECF0
```

---

## Dégradés

### Dégradé signature (Violet → Orange)
```tsx
// Pour les fonds
<div className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
  Contenu avec fond dégradé
</div>

// Pour le texte
<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
  Texte avec dégradé
</h1>

// Dégradé à 10% d'opacité (backgrounds subtils)
<div className="bg-gradient-to-r from-[#9b3eff]/10 to-[#ff6b35]/10">
  Background subtil
</div>
```

---

## Border Radius

### Valeurs définies
```
xs  : 5px   → rounded-[5px]
sm  : 12px  → rounded-[12px]
md  : 16px  → rounded-[16px]
lg  : 24px  → rounded-[24px]
xl  : 32px  → rounded-[32px]
```

### Exemples d'utilisation
```tsx
<button className="rounded-[5px]">Petit rayon</button>
<div className="rounded-[12px]">Carte standard</div>
<div className="rounded-[16px]">Carte moyenne</div>
<div className="rounded-[24px]">Carte large</div>
<div className="rounded-[32px]">Hero section</div>
```

---

## Ombres

### Types d'ombres
```tsx
// Ombre carte standard
<div className="shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
  Carte avec ombre douce
</div>

// Ombre au hover
<div className="shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow">
  Carte interactive
</div>

// Ombre bouton (colorée)
<button className="shadow-[0px_4px_20px_rgba(155,62,255,0.3)]">
  Bouton avec ombre violette
</button>
```

### Valeurs définies
```
shadow-card   : shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
shadow-hover  : shadow-[0px_8px_24px_rgba(0,0,0,0.12)]
shadow-button : shadow-[0px_4px_20px_rgba(155,62,255,0.3)]
```

---

## Boutons

### Bouton primaire (dégradé)
```tsx
<button className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-8 py-4 rounded-[12px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-all">
  Bouton principal
</button>
```

### Bouton secondaire (outline)
```tsx
<button className="border-2 border-[#9b3eff] text-[#9b3eff] px-8 py-4 rounded-[12px] hover:bg-[#9b3eff] hover:text-white transition-all">
  Bouton secondaire
</button>
```

---

## Typographie

### Hiérarchie
```tsx
// Headers (utiliser les balises HTML sans classes de taille)
<h1>Titre principal</h1>      // Configuré dans globals.css
<h2>Titre secondaire</h2>      // Configuré dans globals.css
<h3>Titre tertiaire</h3>       // Configuré dans globals.css

// Paragraphes
<p className="text-neutral-dark">Texte standard</p>
<p className="text-neutral-medium">Texte secondaire</p>
```

### Police
```
Primary font: Inter (variable)
Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra Bold), 900 (Black)
```

---

## Espacement

### Padding standard
```
Sections    : py-20 (80px vertical)
Cartes      : p-6 (24px)
Boutons     : px-8 py-4
Containers  : max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8
```

### Gap (Flexbox/Grid)
```
Petit   : gap-4  (16px)
Moyen   : gap-6  (24px)
Large   : gap-8  (32px)
XL      : gap-12 (48px)
```

---

## Composants courants

### Carte standard
```tsx
<div className="bg-white p-6 rounded-[12px] border border-gray-200 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-all">
  <h3>Titre de la carte</h3>
  <p className="text-[#44484f]">Description</p>
</div>
```

### Carte avec dégradé
```tsx
<div className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white p-6 rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
  <h3 className="text-white">Titre</h3>
  <p className="text-white/90">Description</p>
</div>
```

### Section avec background dégradé subtil
```tsx
<section className="relative py-20">
  <div className="absolute inset-0 bg-gradient-to-r from-[#9b3eff]/10 to-[#ff6b35]/10" />
  <div className="relative max-w-[1200px] mx-auto px-4">
    {/* Contenu */}
  </div>
</section>
```

---

## Responsive

### Breakpoints
```
sm  : 640px
md  : 768px
lg  : 1024px
xl  : 1280px
```

### Grid responsive standard
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

---

## États interactifs

### Transitions
```tsx
// Standard
className="transition-all duration-300"

// Hover effects
className="hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
className="hover:scale-105 transition-transform"
className="hover:bg-[#9b3eff] hover:text-white transition-colors"
```

---

## ⚠️ À NE PAS FAIRE

❌ Inventer des couleurs en dur
```tsx
// MAUVAIS
<div className="bg-[#8b2eef]">
```

❌ Utiliser text-2xl, font-bold sur les headers
```tsx
// MAUVAIS - globals.css gère déjà ça
<h1 className="text-4xl font-bold">
```

❌ Créer des dégradés avec des couleurs génériques
```tsx
// MAUVAIS
<div className="bg-gradient-to-r from-purple-500 to-orange-500">
```

✅ Toujours utiliser les couleurs exactes de la marque
```tsx
// BON
<div className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
```

---

## Checklist avant commit

- [ ] Toutes les couleurs utilisent les valeurs exactes (#9B3EFF, #FF4E1F, #1B1C1E, #44484F, etc.)
- [ ] Les dégradés utilisent `bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]`
- [ ] Les border-radius utilisent les valeurs définies (5px, 12px, 16px, 24px, 32px)
- [ ] Les ombres utilisent les valeurs définies avec shadow-[]
- [ ] Les transitions sont fluides (transition-all, transition-shadow, etc.)
- [ ] Le code est CLEAR et maintenable
- [ ] Pas de classes de taille/poids sur h1, h2, h3 (sauf demande explicite)
