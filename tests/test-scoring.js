// PassMate UK — Scoring & Logic Tests
// Tests: score calculation, pass/fail threshold, weak categories, shuffle, storage

'use strict';

// Minimal localStorage shim for Node.js
const localStorageStore = {};
global.localStorage = {
  getItem:    (k) => localStorageStore[k] ?? null,
  setItem:    (k, v) => { localStorageStore[k] = String(v); },
  removeItem: (k) => { delete localStorageStore[k]; },
  clear:      () => { Object.keys(localStorageStore).forEach(k => delete localStorageStore[k]); }
};

const { Storage } = require('../assets/js/storage.js');
const { Quiz }    = require('../assets/js/quiz.js');
const { QUESTIONS } = require('../data/questions.js');

let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, label, detail = '') {
  if (condition) {
    passed++;
    console.log(`  ✅ ${label}`);
  } else {
    failed++;
    failures.push({ label, detail });
    console.log(`  ❌ ${label}${detail ? ': ' + detail : ''}`);
  }
}

function runScoringTests() {
  console.log('\n🧮 test-scoring.js\n');

  // ── 1. Score calculation ──────────────────────────────────
  {
    const qs = QUESTIONS.slice(0, 10);
    const session = new Quiz.QuizSession(qs, 'category');
    // Answer first 7 correctly, last 3 incorrectly
    qs.forEach((q, i) => {
      session.currentIndex = i;
      session.questionStartTime = Date.now();
      session.recordAnswer(i < 7 ? q.correct : (q.correct === 'A' ? 'B' : 'A'));
    });
    assert(session.score === 7, 'Score counts correct answers accurately', `Expected 7, got ${session.score}`);
  }

  // ── 2. Pass/fail at exactly 43/50 (86%) ──────────────────
  assert(Quiz.calcPassFail(43, 50, 'mock') === true,  'Pass: 43/50 (86%) passes mock test');
  assert(Quiz.calcPassFail(42, 50, 'mock') === false, 'Fail: 42/50 (84%) fails mock test');
  assert(Quiz.calcPassFail(50, 50, 'mock') === true,  'Pass: 50/50 (100%) passes mock test');
  assert(Quiz.calcPassFail(0,  50, 'mock') === false, 'Fail: 0/50 fails mock test');
  assert(Quiz.calcPassFail(43, 50, 'category') === null, 'Non-mock mode: calcPassFail returns null');

  // ── 3. Weak category identification ──────────────────────
  {
    localStorage.clear();
    Storage.saveProgress('alertness',    10, 5);  // 50% — weak
    Storage.saveProgress('attitude',     10, 9);  // 90% — strong
    Storage.saveProgress('road-signs',   10, 6);  // 60% — weak
    Storage.saveProgress('vehicle-safety', 10, 8); // 80% — strong

    const weak = Storage.getWeakCategories(70);
    assert(weak.includes('alertness'),   'getWeakCategories includes alertness (50%)');
    assert(weak.includes('road-signs'),  'getWeakCategories includes road-signs (60%)');
    assert(!weak.includes('attitude'),   'getWeakCategories excludes attitude (90%)');
    assert(!weak.includes('vehicle-safety'), 'getWeakCategories excludes vehicle-safety (80%)');
  }

  // ── 4. Fisher-Yates shuffle produces different orderings ──
  {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    for (let i = 0; i < 20; i++) {
      results.add(JSON.stringify(Quiz.shuffle(arr)));
    }
    assert(results.size > 1, 'Fisher-Yates shuffle produces different orderings across multiple runs',
      `Got ${results.size} unique orderings in 20 runs`);
  }

  // ── 5. Shuffle does not lose or duplicate elements ────────
  {
    const original = QUESTIONS.slice(0, 20).map(q => q.id);
    const shuffled = Quiz.shuffle([...QUESTIONS.slice(0, 20)]).map(q => q.id);
    assert(
      shuffled.length === original.length &&
      new Set(shuffled).size === shuffled.length &&
      original.every(id => shuffled.includes(id)),
      'Shuffle preserves all elements with no duplicates or losses'
    );
  }

  // ── 6. Mock test has correct question count ───────────────
  {
    const mockQs = Quiz.getMockTestQuestions(QUESTIONS);
    assert(mockQs.length === Quiz.MOCK_TEST_SIZE,
      `Mock test generates exactly ${Quiz.MOCK_TEST_SIZE} questions`,
      `Got ${mockQs.length}`);
  }

  // ── 7. Mock test covers all categories ───────────────────
  {
    const mockQs = Quiz.getMockTestQuestions(QUESTIONS);
    const cats = new Set(mockQs.map(q => q.category));
    assert(cats.size >= 10,
      'Mock test questions span at least 10 categories',
      `Actual: ${cats.size}`);
  }

  // ── 8. Category filter returns correct questions ──────────
  {
    const alertness = Quiz.getByCategory('alertness', QUESTIONS);
    const allMatch = alertness.every(q => q.category === 'alertness');
    assert(allMatch && alertness.length > 0,
      'getByCategory filters correctly (alertness)',
      `Found ${alertness.length} questions`);
  }

  // ── 9. Progress storage and retrieval ────────────────────
  {
    localStorage.clear();
    Storage.saveProgress('motorway-rules', 5, 3);
    const p = Storage.getCategoryProgress('motorway-rules');
    assert(p.attempted === 5 && p.correct === 3,
      'saveProgress and getCategoryProgress are consistent',
      `Got attempted=${p.attempted}, correct=${p.correct}`);

    // Accumulate
    Storage.saveProgress('motorway-rules', 5, 4);
    const p2 = Storage.getCategoryProgress('motorway-rules');
    assert(p2.attempted === 10 && p2.correct === 7,
      'saveProgress accumulates correctly (10 attempted, 7 correct)');
  }

  // ── 10. getCategoryAccuracy ───────────────────────────────
  {
    localStorage.clear();
    Storage.saveProgress('accidents', 10, 8);
    assert(Storage.getCategoryAccuracy('accidents') === 80,
      'getCategoryAccuracy returns correct percentage (80%)');
    assert(Storage.getCategoryAccuracy('documents') === null,
      'getCategoryAccuracy returns null for untouched categories');
  }

  // ── 11. Bookmark operations ───────────────────────────────
  {
    localStorage.clear();
    Storage.addBookmark('Q001');
    Storage.addBookmark('Q002');
    assert(Storage.isBookmarked('Q001'), 'addBookmark and isBookmarked work (Q001)');
    assert(Storage.getBookmarks().length === 2, 'getBookmarks returns 2 entries');

    Storage.removeBookmark('Q001');
    assert(!Storage.isBookmarked('Q001'), 'removeBookmark removes correctly');
    assert(Storage.getBookmarks().length === 1, 'getBookmarks returns 1 after removal');

    Storage.addBookmark('Q002'); // add duplicate
    assert(Storage.getBookmarks().length === 1, 'addBookmark does not duplicate');
  }

  // ── 12. toggleBookmark ────────────────────────────────────
  {
    localStorage.clear();
    const added   = Storage.toggleBookmark('Q010');
    const removed = Storage.toggleBookmark('Q010');
    assert(added === true,  'toggleBookmark returns true when adding');
    assert(removed === false, 'toggleBookmark returns false when removing');
  }

  // ── 13. Session saving and retrieval ─────────────────────
  {
    localStorage.clear();
    Storage.saveSession({ score: 40, totalQuestions: 50, categories: ['alertness'], timeTaken: 1200, mode: 'mock' });
    Storage.saveSession({ score: 15, totalQuestions: 20, categories: ['road-signs'], timeTaken: 600, mode: 'category' });
    const sessions = Storage.getSessions();
    assert(sessions.length === 2, 'saveSession saves sessions correctly');
    const recent = Storage.getRecentSessions(1);
    assert(recent.length === 1 && recent[0].score === 15, 'getRecentSessions returns most recent first');
  }

  // ── 14. resetProgress clears data ────────────────────────
  {
    localStorage.clear();
    Storage.saveProgress('alertness', 10, 8);
    Storage.addBookmark('Q001');
    Storage.saveSession({ score: 40, totalQuestions: 50 });
    Storage.resetProgress();
    const p = Storage.getCategoryProgress('alertness');
    assert(p.attempted === 0,         'resetProgress clears category progress');
    assert(Storage.getBookmarks().length === 0, 'resetProgress clears bookmarks');
    assert(Storage.getSessions().length === 0,  'resetProgress clears sessions');
  }

  // ── 15. getOverallStats ───────────────────────────────────
  {
    localStorage.clear();
    Storage.saveProgress('alertness', 10, 8);   // 80%
    Storage.saveProgress('attitude',  10, 6);   // 60%
    const s = Storage.getOverallStats();
    assert(s.totalAttempted === 20, 'getOverallStats sums totalAttempted correctly');
    assert(s.totalCorrect === 14,   'getOverallStats sums totalCorrect correctly');
    assert(s.accuracy === 70,       'getOverallStats computes accuracy correctly (70%)');
  }

  // ── 16. weakestCategories from session answers ────────────
  {
    const answers = [
      { category: 'alertness',   correct: false },
      { category: 'alertness',   correct: false },
      { category: 'alertness',   correct: true  },
      { category: 'road-signs',  correct: true  },
      { category: 'road-signs',  correct: true  },
      { category: 'road-signs',  correct: false },
    ];
    const weakest = Quiz.getWeakestCategories(answers, 1);
    assert(weakest[0].category === 'alertness',
      'getWeakestCategories identifies alertness (33%) as weakest',
      `Got ${weakest[0].category} (${weakest[0].accuracy}%)`);
  }

  // ── 17. formatTime ────────────────────────────────────────
  assert(Quiz.formatTime(0)    === '0:00', 'formatTime(0) = "0:00"');
  assert(Quiz.formatTime(60)   === '1:00', 'formatTime(60) = "1:00"');
  assert(Quiz.formatTime(90)   === '1:30', 'formatTime(90) = "1:30"');
  assert(Quiz.formatTime(3420) === '57:00', 'formatTime(3420) = "57:00"');
}

runScoringTests();

module.exports = { passed, failed, failures };
