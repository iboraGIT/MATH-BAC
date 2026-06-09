
const EXAM_DATE = new Date(2026, 5, 12, 8, 0, 0);

const CHAPTERS = [
  { title: "Second degré",                slug: "second-degre" },
  { title: "Dérivation",                  slug: "derivation" },
  { title: "Suites numériques",           slug: "suites" },
  { title: "Fonction exponentielle",      slug: "exponentielle" },
  { title: "Trigonométrie",               slug: "trigonometrie" },
  { title: "Probabilités conditionnelles",slug: "probabilites" },
  { title: "Produit scalaire",            slug: "produit-scalaire" },
  { title: "Géométrie dans l'espace",     slug: "geometrie-espace" },
  { title: "Combinatoire & dénombrement", slug: "combinatoire" },
  { title: "Variables aléatoires",        slug: "variables-aleatoires" },
];

const PDF_DIR = "pdf/";

function pad(n) { return String(n).padStart(2, "0"); }

function updateCountdown() {
  const now  = Date.now();
  const diff = EXAM_DATE.getTime() - now;

  const secEl  = document.getElementById("cd-sec");
  const minEl  = document.getElementById("cd-min");
  const hrEl   = document.getElementById("cd-hours");
  const dayEl  = document.getElementById("cd-days");

  if (diff <= 0) {
    dayEl.textContent = hrEl.textContent = minEl.textContent = secEl.textContent = "00";
    document.getElementById("exam-date-label").textContent = "C'est le jour J — Bonne chance ! 🎉";
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const s = totalSec % 60;
  const m = Math.floor(totalSec / 60) % 60;
  const h = Math.floor(totalSec / 3600) % 24;
  const d = Math.floor(totalSec / 86400);

  dayEl.textContent = pad(d);
  hrEl.textContent  = pad(h);
  minEl.textContent = pad(m);
  secEl.textContent = pad(s);

  secEl.classList.add("tick");
  setTimeout(() => secEl.classList.remove("tick"), 150);
}

const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
document.getElementById("exam-date-label").textContent =
  "Épreuve prévue le " + EXAM_DATE.toLocaleDateString("fr-FR", opts);

updateCountdown();
setInterval(updateCountdown, 1000);

const ICON_DOWNLOAD = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
  <path d="M7.5 1v9m0 0L4 7m3.5 3L11 7M2 13h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ICON_CHEVRON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const grid = document.getElementById("chapters-grid");

CHAPTERS.forEach((ch, i) => {
  const card = document.createElement("div");
  card.className = "chapter-card";
  card.setAttribute("data-index", i);

  card.innerHTML = `
    <button class="chapter-toggle" aria-expanded="false" aria-controls="panel-${i}">
      <span class="chapter-meta">
        <span class="chapter-num">Chapitre ${String(i + 1).padStart(2, "0")}</span>
        <span class="chapter-name">${ch.title}</span>
      </span>
      <span class="chapter-arrow">${ICON_CHEVRON}</span>
    </button>
    <div class="chapter-panel" id="panel-${i}" role="region">
      <div class="chapter-panel-inner">
        <div class="panel-divider"></div>
        <div class="btn-row">
          <a class="btn btn-exercises"
             href="${PDF_DIR}${ch.slug}-exercices.pdf"
             download
             aria-label="Télécharger les exercices de ${ch.title}">
            ${ICON_DOWNLOAD} Exercices (PDF)
          </a>
          <a class="btn btn-solutions"
             href="${PDF_DIR}${ch.slug}-corriges.pdf"
             download
             aria-label="Télécharger le corrigé de ${ch.title}">
            ${ICON_DOWNLOAD} Corrigé (PDF)
          </a>
        </div>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

grid.addEventListener("click", (e) => {
  const toggle = e.target.closest(".chapter-toggle");
  if (!toggle) return;

  const card   = toggle.closest(".chapter-card");
  const isOpen = card.classList.contains("open");

  document.querySelectorAll(".chapter-card.open").forEach(c => {
    c.classList.remove("open");
    c.querySelector(".chapter-toggle").setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    card.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    if (window.innerWidth <= 600) {
      setTimeout(() => card.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
    }
  }
});
