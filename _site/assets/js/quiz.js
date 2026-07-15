// PassMate UK - Quiz Logic
// Requires: questions.js, storage.js, analytics.js

const CATEGORIES = [
  { slug: 'alertness', label: 'Alertness', icon: '👁️' },
  { slug: 'attitude', label: 'Attitude', icon: '🤝' },
  { slug: 'safety-margins', label: 'Safety Margins', icon: '📏' },
  { slug: 'hazard-awareness', label: 'Hazard Awareness', icon: '⚠️' },
  { slug: 'vulnerable-road-users', label: 'Vulnerable Road Users', icon: '🚲' },
  { slug: 'other-types-of-vehicle', label: 'Other Vehicles', icon: '🚌' },
  { slug: 'vehicle-safety', label: 'Vehicle Safety', icon: '🔧' },
  { slug: 'safety-first', label: 'Safety First', icon: '🛡️' },
  { slug: 'rules-of-the-road', label: 'Rules of the Road', icon: '📋' },
  { slug: 'road-signs', label: 'Road Signs', icon: '🚦' },
  { slug: 'documents', label: 'Documents', icon: '📄' },
  { slug: 'accidents', label: 'Accidents', icon: '🚑' },
  { slug: 'vehicle-loading', label: 'Vehicle Loading', icon: '📦' },
  { slug: 'motorway-rules', label: 'Motorway Rules', icon: '🛣️' },
  { slug: 'environmental-issues', label: 'Environmental Issues', icon: '🌱' }
];

const MOCK_TEST_SIZE = 50;
const PASS_THRESHOLD = 0.86; // 43/50 = 86%
const MOCK_TIME_LIMIT_SECONDS = 57 * 60; // 57 minutes
const HAZARD_SCENARIOS = [
  { id: 'hazard-parked-van', title: 'Parked van near crossing', scene: '🚐  🚸  🚗', danger: 'A pedestrian may step out from behind the van.', bestWindow: [2, 5], hint: 'Scan hidden pavements and crossings early.' },
  { id: 'hazard-school-bus', title: 'School bus at the kerb', scene: '🚌  🧒  🚙', danger: 'Children may cross from in front of the bus.', bestWindow: [1, 4], hint: 'Slow down and be ready to stop.' },
  { id: 'hazard-cyclist-door', title: 'Cyclist beside parked cars', scene: '🚲  🚗🚗  🚘', danger: 'A car door may open into the cyclist path.', bestWindow: [2, 6], hint: 'Leave clearance before the hazard develops.' }
];

function getHazardScenarios() {
  return shuffle(HAZARD_SCENARIOS);
}

// ── Fisher-Yates Shuffle ────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Question Filtering ──────────────────────────────────────────
function getByCategory(category, questionBank) {
  return questionBank.filter(q => q.category === category);
}

function getMockTestQuestions(questionBank) {
  // 50 random questions spread proportionally across all categories
  const perCategory = Math.floor(MOCK_TEST_SIZE / CATEGORIES.length);
  let selected = [];

  CATEGORIES.forEach(({ slug }) => {
    const catQuestions = getByCategory(slug, questionBank);
    const shuffled = shuffle(catQuestions);
    selected.push(...shuffled.slice(0, perCategory));
  });

  // Top up to exactly 50 if needed
  const remaining = shuffle(questionBank.filter(q => !selected.includes(q)));
  while (selected.length < MOCK_TEST_SIZE && remaining.length) {
    selected.push(remaining.pop());
  }

  return shuffle(selected).slice(0, MOCK_TEST_SIZE);
}

function getWeakAreaQuestions(questionBank) {
  const weakCats = Storage.getWeakCategories(70);
  if (!weakCats.length) return shuffle(questionBank).slice(0, 20);
  return shuffle(questionBank.filter(q => weakCats.includes(q.category))).slice(0, 30);
}

function getBookmarkedQuestions(questionBank) {
  const bookmarks = Storage.getBookmarks();
  return questionBank.filter(q => bookmarks.includes(q.id));
}

// ── Session State ───────────────────────────────────────────────
class QuizSession {
  constructor(questions, mode = 'category') {
    this.questions = questions;
    this.mode = mode;
    this.currentIndex = 0;
    this.score = 0;
    this.answers = []; // [{ questionId, chosen, correct, timeSpent }]
    this.startTime = Date.now();
    this.questionStartTime = Date.now();
    this.timerInterval = null;
    this.timeRemaining = MOCK_TIME_LIMIT_SECONDS;
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  get isComplete() {
    return this.currentIndex >= this.questions.length;
  }

  get progress() {
    return {
      current: this.currentIndex + 1,
      total: this.questions.length,
      pct: Math.round(((this.currentIndex) / this.questions.length) * 100)
    };
  }

  get elapsed() {
    return Math.floor((Date.now() - this.startTime) / 1000);
  }

  recordAnswer(chosenLetter) {
    const q = this.currentQuestion;
    const isCorrect = chosenLetter === q.correct;
    const timeSpent = Date.now() - this.questionStartTime;

    if (isCorrect) this.score++;

    this.answers.push({
      questionId: q.id,
      category: q.category,
      chosen: chosenLetter,
      correct: isCorrect,
      timeSpent
    });

    // Track in analytics
    if (typeof Analytics !== 'undefined') {
      Analytics.trackAnswer(q.id, q.category, isCorrect, timeSpent);
    }

    return isCorrect;
  }

  advance() {
    this.currentIndex++;
    this.questionStartTime = Date.now();
  }

  getCategoryBreakdown() {
    const breakdown = {};
    this.answers.forEach(({ category, correct }) => {
      if (!breakdown[category]) breakdown[category] = { attempted: 0, correct: 0 };
      breakdown[category].attempted++;
      if (correct) breakdown[category].correct++;
    });
    return breakdown;
  }

  saveResults() {
    const breakdown = this.getCategoryBreakdown();

    // Persist per-category progress
    Object.entries(breakdown).forEach(([cat, { attempted, correct }]) => {
      Storage.saveProgress(cat, attempted, correct);
    });

    // Save session
    Storage.saveSession({
      score: this.score,
      totalQuestions: this.questions.length,
      categories: Object.keys(breakdown),
      timeTaken: this.elapsed,
      mode: this.mode,
      answers: this.answers,
      passed: this.mode === 'mock'
        ? (this.score / this.questions.length) >= PASS_THRESHOLD
        : null
    });
  }

  startTimer(onTick, onExpire) {
    if (this.mode !== 'mock') return;
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      if (typeof onTick === 'function') onTick(this.timeRemaining);
      if (this.timeRemaining <= 0) {
        this.stopTimer();
        if (typeof onExpire === 'function') onExpire();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
  }
}

// ── Results Helpers ─────────────────────────────────────────────
function calcPassFail(score, total, mode) {
  if (mode !== 'mock') return null;
  return (score / total) >= PASS_THRESHOLD;
}

function getWeakestCategories(answers, n = 3) {
  const breakdown = {};
  answers.forEach(({ category, correct }) => {
    if (!breakdown[category]) breakdown[category] = { attempted: 0, correct: 0 };
    breakdown[category].attempted++;
    if (correct) breakdown[category].correct++;
  });

  return Object.entries(breakdown)
    .map(([cat, p]) => ({ category: cat, accuracy: Math.round((p.correct / p.attempted) * 100) }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, n);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── UI Helpers (for quiz.html) ──────────────────────────────────

function renderQuestion(session, container) {
  const q = session.currentQuestion;
  const { current, total, pct } = session.progress;

  const catInfo = CATEGORIES.find(c => c.slug === q.category) || { label: q.category, icon: '📝' };

  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-breadcrumb">${catInfo.icon} ${catInfo.label}</div>
      <div class="quiz-count">Question ${current} of ${total}</div>
    </div>
    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width: ${pct}%"></div>
    </div>
    <div class="question-card">
      <p class="question-text">${q.question}</p>
      <div class="options-grid" id="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" data-letter="${['A','B','C','D'][i]}" aria-label="Option ${['A','B','C','D'][i]}">
            <span class="option-letter">${['A','B','C','D'][i]}</span>
            <span class="option-text">${opt.replace(/^[A-D]\.\s*/, '')}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="explanation-panel hidden" id="explanation-panel">
      <div class="explanation-inner">
        <div class="explanation-result" id="explanation-result"></div>
        <p class="explanation-text">${q.explanation}</p>
        ${q.hcRule ? `<p class="hc-rule">📖 Highway Code: <strong>${q.hcRule}</strong></p>` : ''}
        <div class="explanation-actions">
          <button class="btn-bookmark" id="btn-bookmark" aria-label="Bookmark this question">
            <span id="bookmark-icon">🔖</span> Bookmark
          </button>
          <button class="btn-next primary" id="btn-next">Next Question →</button>
        </div>
      </div>
    </div>
  `;
}

function showAnswer(session, chosen, container) {
  const q = session.currentQuestion;
  const isCorrect = chosen === q.correct;

  // Disable all options and highlight
  container.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const letter = btn.dataset.letter;
    if (letter === q.correct) {
      btn.classList.add('correct');
      btn.setAttribute('aria-label', `${letter} - Correct answer`);
    } else if (letter === chosen && !isCorrect) {
      btn.classList.add('incorrect');
      btn.setAttribute('aria-label', `${letter} - Incorrect`);
    }
  });

  // Show explanation
  const panel = container.querySelector('#explanation-panel');
  const result = container.querySelector('#explanation-result');
  panel.classList.remove('hidden');
  result.textContent = isCorrect ? '✅ Correct!' : `❌ Incorrect - the answer was ${q.correct}`;
  result.className = 'explanation-result ' + (isCorrect ? 'correct' : 'incorrect');

  // Bookmark button
  const bookmarkBtn = container.querySelector('#btn-bookmark');
  updateBookmarkButton(bookmarkBtn, q.id);
  bookmarkBtn.addEventListener('click', () => {
    const nowBookmarked = Storage.toggleBookmark(q.id);
    updateBookmarkButton(bookmarkBtn, q.id);
  });

  // Slide up panel
  requestAnimationFrame(() => panel.classList.add('visible'));
}

function updateBookmarkButton(btn, questionId) {
  const isMarked = Storage.isBookmarked(questionId);
  btn.classList.toggle('active', isMarked);
  btn.querySelector('#bookmark-icon').textContent = isMarked ? '🔖' : '🔖';
  btn.textContent = isMarked ? '🔖 Bookmarked' : '🔖 Bookmark';
}

// ── Initialise from URL params ──────────────────────────────────
function getSessionConfig() {
  const params = new URLSearchParams(window.location.search);
  return {
    mode: params.get('mode') || 'category',
    category: params.get('category') || null,
    count: parseInt(params.get('count') || '20', 10)
  };
}

// ── Export ──────────────────────────────────────────────────────

const Quiz = {
  CATEGORIES,
  MOCK_TEST_SIZE,
  PASS_THRESHOLD,
  MOCK_TIME_LIMIT_SECONDS,
  shuffle,
  getByCategory,
  getMockTestQuestions,
  getWeakAreaQuestions,
  getBookmarkedQuestions,
  getHazardScenarios,
  QuizSession,
  calcPassFail,
  getWeakestCategories,
  formatTime,
  renderQuestion,
  showAnswer,
  getSessionConfig
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Quiz };
}
