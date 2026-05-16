// PassMate UK - Storage Module
// All persistence via localStorage

const STORAGE_KEY = 'passmate_uk';

const DEFAULT_STATE = {
  progress: {}, // { [category]: { attempted: 0, correct: 0, lastAttempted: null } }
  bookmarks: [],
  settings: { darkMode: false, autoAdvance: false, timerEnabled: false },
  sessions: [] // [{ date, score, totalQuestions, categories, timeTaken }]
};

function _load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    const data = JSON.parse(raw);
    // Merge with defaults to handle missing keys from older versions
    return {
      progress: data.progress || {},
      bookmarks: data.bookmarks || [],
      settings: Object.assign({}, DEFAULT_STATE.settings, data.settings || {}),
      sessions: data.sessions || []
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function _save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('PassMate: Could not save to localStorage', e);
  }
}

// ── Progress ──────────────────────────────────────

function saveProgress(category, attempted, correct) {
  const state = _load();
  if (!state.progress[category]) {
    state.progress[category] = { attempted: 0, correct: 0, lastAttempted: null };
  }
  state.progress[category].attempted += attempted;
  state.progress[category].correct += correct;
  state.progress[category].lastAttempted = new Date().toISOString();
  _save(state);
}

function getProgress() {
  return _load().progress;
}

function getCategoryProgress(category) {
  const progress = _load().progress;
  return progress[category] || { attempted: 0, correct: 0, lastAttempted: null };
}

function getCategoryAccuracy(category) {
  const p = getCategoryProgress(category);
  if (!p.attempted) return null; // null = not started
  return Math.round((p.correct / p.attempted) * 100);
}

function getOverallStats() {
  const state = _load();
  let totalAttempted = 0;
  let totalCorrect = 0;
  for (const cat of Object.values(state.progress)) {
    totalAttempted += cat.attempted;
    totalCorrect += cat.correct;
  }
  return {
    totalAttempted,
    totalCorrect,
    accuracy: totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
    streakDays: _calculateStreak(state.sessions)
  };
}

function _calculateStreak(sessions) {
  if (!sessions.length) return 0;
  const dates = sessions
    .map(s => new Date(s.date).toDateString())
    .filter((v, i, a) => a.indexOf(v) === i) // unique days
    .sort((a, b) => new Date(b) - new Date(a));

  let streak = 0;
  let current = new Date();
  current.setHours(0, 0, 0, 0);

  for (const dateStr of dates) {
    const d = new Date(dateStr);
    const diff = Math.round((current - d) / (1000 * 60 * 60 * 24));
    if (diff === streak) {
      streak++;
      current = d;
    } else {
      break;
    }
  }
  return streak;
}

// ── Weak Categories ───────────────────────────────

function getWeakCategories(threshold = 70) {
  const progress = _load().progress;
  return Object.entries(progress)
    .filter(([, p]) => p.attempted > 0 && Math.round((p.correct / p.attempted) * 100) < threshold)
    .sort((a, b) => (a[1].correct / a[1].attempted) - (b[1].correct / b[1].attempted))
    .map(([category]) => category);
}

// ── Bookmarks ─────────────────────────────────────

function addBookmark(questionId) {
  const state = _load();
  if (!state.bookmarks.includes(questionId)) {
    state.bookmarks.push(questionId);
    _save(state);
  }
}

function removeBookmark(questionId) {
  const state = _load();
  state.bookmarks = state.bookmarks.filter(id => id !== questionId);
  _save(state);
}

function getBookmarks() {
  return _load().bookmarks;
}

function isBookmarked(questionId) {
  return _load().bookmarks.includes(questionId);
}

function toggleBookmark(questionId) {
  if (isBookmarked(questionId)) {
    removeBookmark(questionId);
    return false;
  } else {
    addBookmark(questionId);
    return true;
  }
}

// ── Sessions ──────────────────────────────────────

function saveSession(session) {
  // session: { score, totalQuestions, categories, timeTaken, mode }
  const state = _load();
  state.sessions.push(Object.assign({ date: new Date().toISOString() }, session));
  // Keep last 100 sessions to avoid storage bloat
  if (state.sessions.length > 100) {
    state.sessions = state.sessions.slice(-100);
  }
  _save(state);
}

function getSessions() {
  return _load().sessions;
}

function getRecentSessions(n = 10) {
  const sessions = _load().sessions;
  return sessions.slice(-n).reverse();
}

// ── Settings ──────────────────────────────────────

function getSettings() {
  return _load().settings;
}

function saveSetting(key, value) {
  const state = _load();
  state.settings[key] = value;
  _save(state);
}

function getSetting(key) {
  return _load().settings[key];
}

// ── Reset ─────────────────────────────────────────

function resetProgress() {
  const state = _load();
  state.progress = {};
  state.sessions = [];
  state.bookmarks = [];
  _save(state);
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
}

// ── Export ────────────────────────────────────────

const Storage = {
  saveProgress,
  getProgress,
  getCategoryProgress,
  getCategoryAccuracy,
  getOverallStats,
  getWeakCategories,
  addBookmark,
  removeBookmark,
  getBookmarks,
  isBookmarked,
  toggleBookmark,
  saveSession,
  getSessions,
  getRecentSessions,
  getSettings,
  saveSetting,
  getSetting,
  resetProgress,
  resetAll
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Storage };
}
