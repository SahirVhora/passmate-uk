// PassMate UK - Analytics Module
// Lightweight in-browser analytics - no external services

// Relies on Storage module being loaded first
// (loaded via <script> tags in HTML, Storage is global)

const Analytics = (() => {

  // Track which questions were seen and answered in this session
  let _sessionLog = []; // [{ questionId, category, correct, timeSpent }]

  function trackAnswer(questionId, category, correct, timeSpent = 0) {
    _sessionLog.push({ questionId, category, correct, timeSpent, ts: Date.now() });
  }

  function clearSession() {
    _sessionLog = [];
  }

  function getSessionLog() {
    return [..._sessionLog];
  }

  // ── Most missed questions ──────────────────────────────────

  function getMostMissedQuestions(n = 10) {
    // Aggregate from all sessions stored in localStorage
    const sessions = typeof Storage !== 'undefined' ? Storage.getSessions() : [];
    const missCounts = {};

    sessions.forEach(session => {
      if (!session.answers) return;
      session.answers.forEach(({ questionId, correct }) => {
        if (!correct) {
          missCounts[questionId] = (missCounts[questionId] || 0) + 1;
        }
      });
    });

    return Object.entries(missCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([questionId, count]) => ({ questionId, missCount: count }));
  }

  // ── Current session stats ────────────────────────────────────

  function getSessionStats() {
    const total = _sessionLog.length;
    const correct = _sessionLog.filter(e => e.correct).length;
    const totalTime = _sessionLog.reduce((sum, e) => sum + (e.timeSpent || 0), 0);
    const byCategory = {};

    _sessionLog.forEach(({ category, correct: isCorrect }) => {
      if (!byCategory[category]) byCategory[category] = { attempted: 0, correct: 0 };
      byCategory[category].attempted++;
      if (isCorrect) byCategory[category].correct++;
    });

    return {
      total,
      correct,
      incorrect: total - correct,
      accuracy: total ? Math.round((correct / total) * 100) : 0,
      totalTimeMs: totalTime,
      byCategory
    };
  }

  // ── Recommended categories (needs most work) ─────────────────

  function getRecommendedCategories() {
    const progress = typeof Storage !== 'undefined' ? Storage.getProgress() : {};
    const CATEGORIES = [
      'alertness', 'attitude', 'safety-margins', 'hazard-awareness',
      'vulnerable-road-users', 'other-types-of-vehicle', 'vehicle-safety',
      'safety-first', 'rules-of-the-road', 'road-signs', 'documents',
      'accidents', 'vehicle-loading', 'motorway-rules', 'environmental-issues'
    ];

    return CATEGORIES.map(cat => {
      const p = progress[cat] || { attempted: 0, correct: 0 };
      const accuracy = p.attempted ? (p.correct / p.attempted) * 100 : null;
      return { category: cat, attempted: p.attempted, accuracy };
    })
    .sort((a, b) => {
      // Not started first, then lowest accuracy
      if (a.accuracy === null && b.accuracy !== null) return -1;
      if (a.accuracy !== null && b.accuracy === null) return 1;
      if (a.accuracy === null && b.accuracy === null) return 0;
      return a.accuracy - b.accuracy;
    });
  }

  // ── Category accuracy breakdown ──────────────────────────────

  function getCategoryBreakdown() {
    const progress = typeof Storage !== 'undefined' ? Storage.getProgress() : {};
    return Object.entries(progress).map(([category, p]) => ({
      category,
      attempted: p.attempted,
      correct: p.correct,
      accuracy: p.attempted ? Math.round((p.correct / p.attempted) * 100) : 0
    }));
  }

  // ── Performance over time (last N sessions) ──────────────────

  function getScoreHistory(n = 10) {
    const sessions = typeof Storage !== 'undefined' ? Storage.getRecentSessions(n) : [];
    return sessions.map(s => ({
      date: s.date,
      score: s.score,
      total: s.totalQuestions,
      pct: s.totalQuestions ? Math.round((s.score / s.totalQuestions) * 100) : 0,
      mode: s.mode || 'category'
    }));
  }

  return {
    trackAnswer,
    clearSession,
    getSessionLog,
    getMostMissedQuestions,
    getSessionStats,
    getRecommendedCategories,
    getCategoryBreakdown,
    getScoreHistory
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Analytics };
}
