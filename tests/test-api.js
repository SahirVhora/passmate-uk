// PassMate UK — API Module Tests
// Tests: response normalisation, fallback, caching

'use strict';

// ── sessionStorage shim ──────────────────────────────────────
const sessionStore = {};
global.sessionStorage = {
  getItem:    (k) => sessionStore[k] ?? null,
  setItem:    (k, v) => { sessionStore[k] = String(v); },
  removeItem: (k) => { delete sessionStore[k]; },
  clear:      () => { Object.keys(sessionStore).forEach(k => delete sessionStore[k]); }
};

// ── document shim for _decodeHtml (uses textarea) ────────────
global.document = {
  createElement: (tag) => {
    if (tag === 'textarea') {
      return {
        set innerHTML(val) { this._raw = val; },
        get value() {
          // Minimal HTML entity decode for tests
          return (this._raw || '')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        }
      };
    }
    return {};
  }
};

// ── fetch shim — returns a resolved mock response ────────────
global.fetch = null; // set per test below

const { Api } = require('../assets/js/api.js');

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

// ── Helpers ──────────────────────────────────────────────────
function makeOtdbResponse(results, responseCode = 0) {
  return {
    ok: true,
    status: 200,
    json: async () => ({ response_code: responseCode, results })
  };
}

const SAMPLE_RESULT = {
  question: 'What is the speed limit on a motorway?',
  correct_answer: '70 mph',
  incorrect_answers: ['50 mph', '60 mph', '80 mph'],
  difficulty: 'easy'
};

async function runApiTests() {
  console.log('\n🌐 test-api.js\n');

  // ── 1. Successful fetch returns normalised questions ──────
  sessionStorage.clear();
  global.fetch = async () => makeOtdbResponse([SAMPLE_RESULT]);
  const results = await Api.fetchDynamicQuestions('alertness', 1);
  assert(Array.isArray(results), 'fetchDynamicQuestions returns an array');
  assert(results.length === 1, 'Returns correct number of questions');

  // ── 2. Normalised question has required fields ────────────
  if (results.length > 0) {
    const q = results[0];
    assert(typeof q.id === 'string',       'Normalised question has id field');
    assert(typeof q.question === 'string', 'Normalised question has question field');
    assert(Array.isArray(q.options),       'Normalised question has options array');
    assert(q.options.length === 4,         'Normalised question has exactly 4 options');
    assert(['A','B','C','D'].includes(q.correct), 'Normalised correct is A/B/C/D');
    assert(typeof q.explanation === 'string', 'Normalised question has explanation');
    assert(['easy','medium','hard'].includes(q.difficulty), 'Normalised difficulty is valid');
    assert(q.source === 'api', 'Normalised question tagged with source: api');
  }

  // ── 3. Correct answer appears in options ─────────────────
  if (results.length > 0) {
    const q = results[0];
    const letterIndex = ['A','B','C','D'].indexOf(q.correct);
    const correctOption = q.options[letterIndex];
    assert(
      correctOption.includes('70 mph') || q.options.some(o => o.includes('70 mph')),
      'Correct answer text appears somewhere in options'
    );
  }

  // ── 4. HTML entities are decoded ─────────────────────────
  sessionStorage.clear();
  global.fetch = async () => makeOtdbResponse([{
    ...SAMPLE_RESULT,
    question: 'What does &amp; mean?',
    correct_answer: 'And &amp; also',
    incorrect_answers: ['X', 'Y', 'Z']
  }]);
  const decoded = await Api.fetchDynamicQuestions('alertness', 1);
  if (decoded.length > 0) {
    assert(
      !decoded[0].question.includes('&amp;'),
      'HTML entities decoded in question text'
    );
  }

  // ── 5. API failure returns empty array (graceful fallback) ─
  sessionStorage.clear();
  global.fetch = async () => { throw new Error('Network error'); };
  const fallback = await Api.fetchDynamicQuestions('alertness', 1);
  assert(Array.isArray(fallback),    'Returns array on network failure');
  assert(fallback.length === 0,      'Returns empty array on network failure (silent fallback)');

  // ── 6. Non-200 response returns empty array ───────────────
  sessionStorage.clear();
  global.fetch = async () => ({ ok: false, status: 503, json: async () => ({}) });
  const badStatus = await Api.fetchDynamicQuestions('alertness', 1);
  assert(badStatus.length === 0, 'Returns empty array on non-200 HTTP status');

  // ── 7. response_code != 0 returns empty array ────────────
  sessionStorage.clear();
  global.fetch = async () => makeOtdbResponse([], 1); // response_code 1 = no results
  const noResults = await Api.fetchDynamicQuestions('alertness', 1);
  assert(noResults.length === 0, 'Returns empty array when OTDB response_code is non-zero');

  // ── 8. Session storage caching works ─────────────────────
  sessionStorage.clear();
  let fetchCount = 0;
  global.fetch = async () => {
    fetchCount++;
    return makeOtdbResponse([SAMPLE_RESULT]);
  };
  await Api.fetchDynamicQuestions('alertness', 1);
  await Api.fetchDynamicQuestions('alertness', 1); // should hit cache
  assert(fetchCount === 1, 'Second identical request uses sessionStorage cache (fetch called once)');

  // ── 9. Different parameters bypass cache ─────────────────
  fetchCount = 0;
  sessionStorage.clear();
  global.fetch = async () => {
    fetchCount++;
    return makeOtdbResponse([SAMPLE_RESULT]);
  };
  await Api.fetchDynamicQuestions('alertness', 1);
  await Api.fetchDynamicQuestions('alertness', 5); // different count — new request
  assert(fetchCount === 2, 'Different count parameter results in separate fetch');

  // ── 10. Category without OTDB mapping returns empty array ─
  sessionStorage.clear();
  global.fetch = async () => makeOtdbResponse([SAMPLE_RESULT]);
  const unmapped = await Api.fetchDynamicQuestions('attitude', 1);
  // 'attitude' has no OTDB mapping — should return [] without calling fetch
  // (fetchCount increments only if mapped, but attitude is not in OTDB_CATEGORY_MAP)
  assert(Array.isArray(unmapped), 'Unmapped category returns an array');

  // ── 11. getEnrichedQuestions merges static and API ────────
  sessionStorage.clear();
  global.fetch = async () => makeOtdbResponse([SAMPLE_RESULT]);
  const staticQs = [{ id: 'Q001', category: 'alertness', question: 'Test?', options: ['A. a', 'B. b', 'C. c', 'D. d'], correct: 'A', explanation: 'ex', difficulty: 'easy' }];
  const enriched = await Api.getEnrichedQuestions(staticQs, 'alertness', 1);
  assert(enriched.length >= 1, 'getEnrichedQuestions returns at least the static questions');
  assert(enriched.some(q => q.id === 'Q001'), 'getEnrichedQuestions includes original static questions');
}

runApiTests().then(() => {
  module.exports = { passed, failed, failures };
}).catch(err => {
  console.error('  💥 Unexpected error in test-api.js:', err.message);
  failed++;
  module.exports = { passed, failed, failures };
});
