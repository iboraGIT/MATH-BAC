/* ===================================
   BAC MATHS — Script principal
=================================== */

// ===== DONNÉES DES CHAPITRES =====
const CHAPTERS = [
  {
    id: 1,
    tag: "Algèbre",
    tagClass: "tag-algebra",
    title: "Second degré",
    desc: "Équations et inéquations du second degré, discriminant, forme canonique, factorisation.",
    topics: ["Discriminant Δ", "Forme canonique", "Factorisation"]
  },
  {
    id: 2,
    tag: "Suites",
    tagClass: "tag-suites",
    title: "Suites numériques",
    desc: "Suites arithmétiques et géométriques.",
    topics: ["Suite arithmétique", "Suite géométrique", "Récurrence"]
  },
  {
    id: 3,
    tag: "Dérivation",
    tagClass: "tag-derivation",
    title: "Dérivation",
    desc: "Règles de dérivation, variations et tangentes.",
    topics: ["Dérivation", "Variations", "Tangentes"]
  },
  {
    id: 4,
    tag: "Trigonométrie",
    tagClass: "tag-trigo",
    title: "Trigonométrie",
    desc: "Cercle trigonométrique et formules usuelles.",
    topics: ["Cercle trigo", "Angles", "Formules"]
  },
  {
    id: 5,
    tag: "Scalaire",
    tagClass: "tag-scalaire",
    title: "Produit scalaire",
    desc: "Orthogonalité et géométrie.",
    topics: ["Produit scalaire", "Orthogonalité"]
  },
  {
    id: 6,
    tag: "Probabilités",
    tagClass: "tag-proba",
    title: "Probabilités",
    desc: "Conditionnelles, indépendance et Bayes.",
    topics: ["Conditionnelles", "Bayes"]
  },
  {
    id: 7,
    tag: "Variables",
    tagClass: "tag-variable",
    title: "Variables aléatoires",
    desc: "Espérance, variance et loi binomiale.",
    topics: ["Espérance", "Variance", "Binomiale"]
  },
  {
    id: 8,
    tag: "Géométrie 3D",
    tagClass: "tag-geo3d",
    title: "Géométrie dans l'espace",
    desc: "Droites, plans et repères.",
    topics: ["Plans", "Droites", "Repère"]
  }
];

// ===== COUNTDOWN =====
function updateCountdown() {
  const bacDate = new Date("2027-06-15T08:00:00");
  const now = new Date();
  const diff = bacDate - now;

  const el = document.getElementById("countdown-text");
  if (!el) return;

  if (diff <= 0) {
    el.textContent = "📌 Bonne chance pour le bac !";
    return;
  }

  const days = Math.floor(diff / 86400000);

  el.textContent =
    `⏱ ${days} jours avant le Bac de Maths`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

// ===== CHAPTER CARDS =====
function buildChapters() {
  const grid = document.getElementById("chapters-grid");

  CHAPTERS.forEach(ch => {
    const card = document.createElement("div");
    card.className = "chapter-card";

    const topics = ch.topics
      .map(t => `<span class="topic-pill">${t}</span>`)
      .join("");

    card.innerHTML = `
      <span class="chapter-tag ${ch.tagClass}">
        ${ch.tag}
      </span>

      <h3>${ch.id}. ${ch.title}</h3>

      <p>${ch.desc}</p>

      <div class="chapter-topics">
        ${topics}
      </div>

      <div class="chapter-actions">
        <button class="btn-primary">
          Ouvrir →
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      openChapterModal(ch);
    });

    grid.appendChild(card);
  });
}

buildChapters();

// ===== MODAL =====
function openChapterModal(ch) {

  document.getElementById("modal-num").textContent =
    `0${ch.id}`;

  document.getElementById("modal-title").textContent =
    ch.title;

  document.getElementById("modal-subtitle").textContent =
    `${ch.tag} — Programme Première Générale`;

  document.getElementById("pdf-direct-link").href =
    `chapters/chapitre-${ch.id}.pdf`;

  document.getElementById("corrige-direct-link").href =
    `corriges/corrige-${ch.id}.pdf`;

  document
    .getElementById("chapter-modal")
    .classList.add("active");
}

function closeChapterModal() {
  document
    .getElementById("chapter-modal")
    .classList.remove("active");
}

document
  .getElementById("modal-close")
  .addEventListener("click", closeChapterModal);

// fermeture en cliquant à côté
document
  .getElementById("chapter-modal")
  .addEventListener("click", (e) => {
    if (e.target.id === "chapter-modal") {
      closeChapterModal();
    }
  });

// touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeChapterModal();
  }
});
