# Maths Première Spé — Site de Révisions

Site statique minimaliste hébergeable sur **GitHub Pages**, sans dépendance externe (hors polices Google Fonts).

---

## Structure du projet

```
/
├── index.html          ← Page unique
├── style.css           ← Styles (Vanilla CSS)
├── app.js              ← Logique (Vanilla JS)
├── README.md
└── pdf/                ← 📂 Tes fichiers PDF à déposer ici
    ├── second-degre-exercices.pdf
    ├── second-degre-corriges.pdf
    ├── derivation-exercices.pdf
    ├── derivation-corriges.pdf
    ├── suites-exercices.pdf
    ├── suites-corriges.pdf
    ├── exponentielle-exercices.pdf
    ├── exponentielle-corriges.pdf
    ├── trigonometrie-exercices.pdf
    ├── trigonometrie-corriges.pdf
    ├── probabilites-exercices.pdf
    ├── probabilites-corriges.pdf
    ├── produit-scalaire-exercices.pdf
    ├── produit-scalaire-corriges.pdf
    ├── geometrie-espace-exercices.pdf
    ├── geometrie-espace-corriges.pdf
    ├── combinatoire-exercices.pdf
    ├── combinatoire-corriges.pdf
    ├── variables-aleatoires-exercices.pdf
    └── variables-aleatoires-corriges.pdf
```

---

## Personnalisation rapide

Tout se passe dans **`app.js`**, en haut du fichier :

### 1. Changer la date du Bac

```js
const EXAM_DATE = new Date(2025, 5, 12, 8, 0, 0);
//                               ↑  ↑   ↑  ↑  ↑
//                            année mois jour h min
// ⚠️ Les mois sont 0-indexés : janvier=0, juin=5
```

### 2. Ajouter / modifier des chapitres

```js
const CHAPTERS = [
  { title: "Second degré",    slug: "second-degre" },
  // Ajoute autant de lignes que nécessaire.
  // Le slug doit correspondre exactement au nom de tes fichiers PDF :
  // pdf/{slug}-exercices.pdf  et  pdf/{slug}-corriges.pdf
];
```

---

## Déploiement sur GitHub Pages

1. Crée un dépôt GitHub public (ex: `maths-premiere`).
2. Pousse tous les fichiers à la racine.
3. Va dans **Settings → Pages → Source** : sélectionne la branche `main`, dossier `/ (root)`.
4. Ton site sera accessible à `https://<ton-pseudo>.github.io/maths-premiere/`.

> Les PDFs peuvent être lourds : pense à activer **Git LFS** si certains fichiers dépassent 50 Mo.

---

## Polices

Le site charge `Space Grotesk` et `Inter` depuis Google Fonts. Pour une version 100 % hors-ligne, télécharge-les via [fontsource](https://fontsource.org/) et adapte le `<link>` dans `index.html`.
