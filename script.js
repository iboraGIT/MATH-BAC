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
    topics: ["Discriminant Δ", "Forme canonique", "Factorisation", "Signe de ax²+bx+c", "Inéquations"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Tu expliques les corrigés de manière claire, structurée et pédagogique.
Utilise des étapes numérotées. Mets en évidence les formules importantes.
Pour le chapitre "Second degré" : discriminant Δ = b²-4ac, racines x₁/x₂ = (-b ± √Δ)/2a, forme canonique a(x-α)²+β, signe de f(x) selon Δ.`
  },
  {
    id: 2,
    tag: "Suites",
    tagClass: "tag-suites",
    title: "Suites numériques",
    desc: "Suites arithmétiques et géométriques, sens de variation, convergence, raisonnement par récurrence.",
    topics: ["Suite arithmétique", "Suite géométrique", "Récurrence", "Sens de variation", "Limite"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Tu expliques les corrigés de manière claire, structurée et pédagogique.
Pour le chapitre "Suites numériques" : suite arithmétique uₙ = u₀ + nr, suite géométrique uₙ = u₀ × qⁿ, sommes S = n(u₀+uₙ)/2 et S = u₀(1-qⁿ)/(1-q), raisonnement par récurrence.`
  },
  {
    id: 3,
    tag: "Dérivation",
    tagClass: "tag-derivation",
    title: "Dérivation",
    desc: "Règles de dérivation, tableau de variations, extremums, tangentes à une courbe.",
    topics: ["Règles de dérivation", "Variations", "Extremums", "Tangente", "Dérivée de composée"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Dérivation" : dérivées usuelles (xⁿ, sin, cos, eˣ, √x), règle (uv)' = u'v+uv', (u/v)' = (u'v-uv')/v², (u∘v)' = u'(v)×v'. Signe de f' → variations de f. Tangente en a : y = f'(a)(x-a)+f(a).`
  },
  {
    id: 4,
    tag: "Trigonométrie",
    tagClass: "tag-trigo",
    title: "Trigonométrie",
    desc: "Cercle trigonométrique, angles orientés, formules d'addition, équations trigonométriques.",
    topics: ["Cercle trigo", "Angles orientés", "Formules addition", "Équations sin/cos", "Valeurs remarquables"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Trigonométrie" : cercle unité, radians, sin²x + cos²x = 1, cos(a+b) = cosacosb-sinasinb, sin(a+b) = sinacosb+cosasinb, valeurs en 0, π/6, π/4, π/3, π/2.`
  },
  {
    id: 5,
    tag: "Scalaire",
    tagClass: "tag-scalaire",
    title: "Produit scalaire",
    desc: "Définition et propriétés du produit scalaire dans le plan, orthogonalité, applications géométriques.",
    topics: ["Définition AA⃗·BB⃗", "Formule cos", "Bilinéarité", "Orthogonalité", "Applications"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Produit scalaire" : u⃗·v⃗ = xx' + yy' (coordonnées), u⃗·v⃗ = |u||v|cosθ (angle), u⃗·v⃗ = ½(|u+v|²-|u|²-|v|²). Orthogonalité ⟺ u⃗·v⃗ = 0. Applications : médiatrice, hauteur.`
  },
  {
    id: 6,
    tag: "Probabilités",
    tagClass: "tag-proba",
    title: "Probabilités",
    desc: "Probabilités conditionnelles, indépendance, formule des probabilités totales, arbres pondérés.",
    topics: ["P(A|B)", "Indépendance", "Prob. totales", "Arbre pondéré", "Bayes"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Probabilités" : P(A∩B) = P(A)×P(B|A), indépendance P(A∩B)=P(A)P(B), formule prob. totales P(B) = P(A)P(B|A)+P(Ā)P(B|Ā), formule de Bayes P(A|B) = P(A)P(B|A)/P(B).`
  },
  {
    id: 7,
    tag: "Variables",
    tagClass: "tag-variable",
    title: "Variables aléatoires",
    desc: "Loi de probabilité, espérance, variance, écart-type, loi binomiale.",
    topics: ["Loi de X", "Espérance E(X)", "Variance V(X)", "Loi binomiale", "Écart-type"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Variables aléatoires" : E(X) = Σ xᵢpᵢ, V(X) = E(X²)-[E(X)]², σ(X) = √V(X). Loi binomiale B(n,p) : P(X=k) = C(n,k)pᵏ(1-p)ⁿ⁻ᵏ, E(X)=np, V(X)=np(1-p).`
  },
  {
    id: 8,
    tag: "Géométrie 3D",
    tagClass: "tag-geo3d",
    title: "Géométrie dans l'espace",
    desc: "Droites et plans dans l'espace, parallélisme, orthogonalité, représentations et coplanéité.",
    topics: ["Positions relatives", "Parallélisme", "Orthogonalité", "Repère 3D", "Théorèmes"],
    system: `Tu es un professeur de mathématiques expert préparant des lycéens de Première Générale au Bac.
Pour le chapitre "Géométrie dans l'espace" : positions relatives droites/plans, droite ⊥ plan si droite ⊥ 2 sécantes du plan, plans parallèles si 2 droites sécantes d'un plan // 2 droites du second plan. Repère (O, i⃗, j⃗, k⃗).`
  }
];

// ===== COUNTDOWN =====
function updateCountdown() {
  // Date du Bac Maths Première 2025 (environ mi-juin)
  const bacDate = new Date('2025-06-18T08:00:00');
  const now = new Date();
  const diff = bacDate - now;

  const el = document.getElementById('countdown-text');
  if (!el) return;

  if (diff <= 0) {
    el.textContent = '📌 Le bac s\'est passé — Bonne chance pour les résultats !';
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);

  const parts = [];
  if (days > 0)  parts.push(`${days} jour${days > 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours}h`);
  parts.push(`${mins}min`);

  el.textContent = `⏱ Bac Maths dans ${parts.join(' ')} — Chaque exercice compte !`;
}
updateCountdown();
setInterval(updateCountdown, 30000);

// ===== BUILD CHAPTER CARDS =====
function buildChapters() {
  const grid = document.getElementById('chapters-grid');
  CHAPTERS.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.dataset.num = ch.id;
    card.dataset.id  = ch.id;

    const topicPills = ch.topics.map(t => `<span class="topic-pill">${t}</span>`).join('');

    card.innerHTML = `
      <span class="chapter-tag ${ch.tagClass}">${ch.tag}</span>
      <h3>${ch.id}. ${ch.title}</h3>
      <p>${ch.desc}</p>
      <div class="chapter-topics">${topicPills}</div>
      <div class="chapter-actions">
        <button class="btn-primary btn-sm open-chapter">Ouvrir →</button>
      </div>
    `;

    card.addEventListener('click', () => openChapterModal(ch));
    grid.appendChild(card);
  });
}
buildChapters();

// ===== MODAL STATE =====
let currentChapter = null;
let chatHistory    = [];

function openChapterModal(ch) {
  currentChapter = ch;
  chatHistory    = [];

  document.getElementById('modal-num').textContent     = `0${ch.id}`;
  document.getElementById('modal-title').textContent   = ch.title;
  document.getElementById('modal-subtitle').textContent = ch.tag + ' — Programme Première Générale';

  // Reset UI
  document.getElementById('exercise-input').value = '';
  document.getElementById('ai-response-area').style.display = 'none';
  document.getElementById('ai-loading').style.display       = 'none';
  document.getElementById('ai-chat').style.display          = 'none';
  switchTab('exercices');

  // Check PDF
  const pdfPath = `chapters/chapitre-${ch.id}.pdf`;
  const iframe  = document.getElementById('pdf-iframe');
  const zone    = document.getElementById('pdf-zone');
  const link    = document.getElementById('pdf-direct-link');

  link.href = pdfPath;

  // Try to detect PDF (always show placeholder with link; if PDF exists it opens)
  // Show placeholder with the direct link always
  iframe.style.display = 'none';
  zone.querySelector('.pdf-placeholder').style.display = 'block';

  // Update AI key hint
  const key = getApiKey();
  const hint = document.getElementById('ai-key-hint');
  hint.textContent = key ? '✅ IA activée' : '⚠ Clé API non configurée';
  hint.style.color = key ? 'var(--green)' : 'var(--amber)';

  openModal('chapter-modal');
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.getElementById(id).setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.getElementById(id).setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', () => closeModal('chapter-modal'));
document.getElementById('config-close').addEventListener('click', () => closeModal('config-modal'));
document.getElementById('btn-config').addEventListener('click', (e) => {
  e.preventDefault();
  const key = getApiKey();
  if (key) document.getElementById('api-key-input').value = key;
  openModal('config-modal');
});

// Close on overlay click
['chapter-modal', 'config-modal'].forEach(id => {
  document.getElementById(id).addEventListener('click', (e) => {
    if (e.target.id === id) closeModal(id);
  });
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('chapter-modal');
    closeModal('config-modal');
  }
});

// ===== TABS =====
function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === name);
  });
  document.getElementById('tab-exercices').classList.toggle('hidden', name !== 'exercices');
  document.getElementById('tab-correction').classList.toggle('hidden', name !== 'correction');
}
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ===== API KEY =====
function getApiKey() { return localStorage.getItem('anthropic_api_key') || ''; }
function setApiKey(k) { localStorage.setItem('anthropic_api_key', k); }

document.getElementById('btn-save-key').addEventListener('click', () => {
  const val = document.getElementById('api-key-input').value.trim();
  if (!val) { alert('Merci d\'entrer une clé API valide.'); return; }
  setApiKey(val);
  alert('✅ Clé API sauvegardée avec succès !');
  closeModal('config-modal');
});

// ===== CLAUDE API =====
async function callClaude(messages, systemPrompt) {
  const key = getApiKey();
  if (!key) {
    throw new Error('NO_KEY');
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      system: systemPrompt,
      messages
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Erreur ${res.status}`);
  }

  const data = await res.json();
  return data.content.map(b => b.text || '').join('');
}

function formatAiResponse(text) {
  // Bold **text**
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Steps "Étape N" or "**Étape N**"
  text = text.replace(/(Étape\s+\d+[^:]*:)/gi, '<br><strong>$1</strong>');
  // Math-ish: wrap lines starting with ➤ or →
  text = text.replace(/^(➤|→|•|-)\s/gm, '<br>$1 ');
  return text;
}

async function getCorrection() {
  const input = document.getElementById('exercise-input').value.trim();
  if (!input) {
    alert('Décris d\'abord l\'exercice ou colle son énoncé !');
    return;
  }

  const ch = currentChapter;
  chatHistory = [{ role: 'user', content: `Voici l'exercice du chapitre "${ch.title}" : \n\n${input}\n\nDonne-moi un corrigé complet, détaillé, avec toutes les étapes numérotées, en expliquant le raisonnement à chaque fois.` }];

  showLoading(true);

  try {
    const response = await callClaude(chatHistory, ch.system);
    chatHistory.push({ role: 'assistant', content: response });

    showLoading(false);
    showResponse(response);
    document.getElementById('ai-chat').style.display = 'block';
  } catch (err) {
    showLoading(false);
    handleAiError(err);
  }
}

async function generateExercises() {
  const ch = currentChapter;

  showLoading(true);

  const prompt = `Génère 3 exercices typiques du Bac pour le chapitre "${ch.title}" en Première Générale.
Pour chaque exercice : donne l'énoncé complet, puis la correction détaillée étape par étape.
Varie les difficultés : 1 exercice facile, 1 moyen, 1 difficile.`;

  try {
    const messages = [{ role: 'user', content: prompt }];
    const response = await callClaude(messages, ch.system);
    chatHistory = messages.concat([{ role: 'assistant', content: response }]);

    showLoading(false);
    showResponse(response);
    document.getElementById('ai-chat').style.display = 'block';
  } catch (err) {
    showLoading(false);
    handleAiError(err);
  }
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const question = input.value.trim();
  if (!question) return;

  input.value = '';
  chatHistory.push({ role: 'user', content: question });

  showLoading(true);

  try {
    const response = await callClaude(chatHistory, currentChapter.system);
    chatHistory.push({ role: 'assistant', content: response });

    showLoading(false);
    // Append to existing response
    const content = document.getElementById('ai-response-content');
    content.innerHTML += `<hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
      <p><strong>Ta question :</strong> ${question}</p>
      <br>${formatAiResponse(response)}`;
    document.getElementById('ai-response-area').style.display = 'block';
  } catch (err) {
    showLoading(false);
    handleAiError(err);
  }
}

function showLoading(show) {
  document.getElementById('ai-loading').style.display = show ? 'flex' : 'none';
  if (show) document.getElementById('ai-response-area').style.display = 'none';
}

function showResponse(text) {
  const area    = document.getElementById('ai-response-area');
  const content = document.getElementById('ai-response-content');
  content.innerHTML = formatAiResponse(text);
  area.style.display = 'block';
}

function handleAiError(err) {
  if (err.message === 'NO_KEY') {
    const go = confirm('⚠ Aucune clé API configurée.\n\nVeux-tu configurer ta clé API Anthropic maintenant ?\n(Sinon, les exercices PDF restent accessibles.)');
    if (go) {
      closeModal('chapter-modal');
      openModal('config-modal');
    }
  } else {
    alert(`Erreur de l'API : ${err.message}\n\nVérifie ta clé API dans ⚙ Configuration.`);
  }
}

document.getElementById('btn-get-correction').addEventListener('click', getCorrection);
document.getElementById('btn-generate-exercises').addEventListener('click', generateExercises);
document.getElementById('btn-new-question').addEventListener('click', () => {
  document.getElementById('ai-response-area').style.display = 'none';
  document.getElementById('ai-chat').style.display          = 'none';
  document.getElementById('exercise-input').value           = '';
  chatHistory = [];
});
document.getElementById('btn-chat-send').addEventListener('click', sendChat);
document.getElementById('chat-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendChat();
});

// ===== KEYBOARD ENTER on textarea =====
document.getElementById('exercise-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) getCorrection();
});
