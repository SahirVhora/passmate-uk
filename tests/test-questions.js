// PassMate UK — Question Bank Tests
// Validates integrity, coverage and structure of data/questions.js
// Run via: node run-tests.js

'use strict';

const { QUESTIONS } = require('../data/questions.js');

const VALID_LETTERS = ['A', 'B', 'C', 'D'];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard'];

const REQUIRED_CATEGORIES = [
  'alertness', 'attitude', 'safety-margins', 'hazard-awareness',
  'vulnerable-road-users', 'other-types-of-vehicle', 'vehicle-safety',
  'safety-first', 'rules-of-the-road', 'road-signs', 'documents',
  'accidents', 'vehicle-loading', 'motorway-rules', 'environmental-issues'
];

const MIN_PER_CATEGORY = 10;
const MIN_TOTAL = 300;

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

function runQuestionTests() {
  console.log('\n📋 test-questions.js\n');

  // ── 1. Array exists and is non-empty ──────────────────────
  assert(Array.isArray(QUESTIONS), 'QUESTIONS is an array');
  assert(QUESTIONS.length > 0, 'QUESTIONS is non-empty');

  // ── 2. Minimum total count ────────────────────────────────
  assert(
    QUESTIONS.length >= MIN_TOTAL,
    `Total question count >= ${MIN_TOTAL}`,
    `Actual: ${QUESTIONS.length}`
  );

  // ── 3. Required fields on every question ─────────────────
  const requiredFields = ['id', 'category', 'subcategory', 'question', 'options', 'correct', 'explanation', 'difficulty'];
  let allHaveRequired = true;
  const missingFields = [];

  QUESTIONS.forEach((q, i) => {
    requiredFields.forEach(f => {
      if (q[f] === undefined || q[f] === null || q[f] === '') {
        allHaveRequired = false;
        missingFields.push(`Q[${i}] id=${q.id} missing field: ${f}`);
      }
    });
  });

  assert(allHaveRequired, 'All questions have required fields', missingFields.slice(0, 3).join('; '));

  // ── 4. Options array has exactly 4 items ─────────────────
  const badOptions = QUESTIONS.filter(q => !Array.isArray(q.options) || q.options.length !== 4);
  assert(badOptions.length === 0, 'All questions have exactly 4 options',
    badOptions.map(q => q.id).slice(0, 5).join(', '));

  // ── 5. Correct answer is A/B/C/D ────────────────────────
  const badCorrect = QUESTIONS.filter(q => !VALID_LETTERS.includes(q.correct));
  assert(badCorrect.length === 0, 'All correct answers are A, B, C, or D',
    badCorrect.map(q => q.id).slice(0, 5).join(', '));

  // ── 6. Difficulty values are valid ───────────────────────
  const badDifficulty = QUESTIONS.filter(q => !VALID_DIFFICULTIES.includes(q.difficulty));
  assert(badDifficulty.length === 0, 'All difficulty values are easy/medium/hard',
    badDifficulty.map(q => q.id).slice(0, 5).join(', '));

  // ── 7. No duplicate IDs ───────────────────────────────────
  const ids = QUESTIONS.map(q => q.id);
  const uniqueIds = new Set(ids);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert(uniqueIds.size === ids.length, 'No duplicate question IDs',
    dupes.length ? `Duplicates: ${[...new Set(dupes)].join(', ')}` : '');

  // ── 8. IDs follow expected format ────────────────────────
  const badIds = QUESTIONS.filter(q => !/^Q\d{3,}$|^API_/.test(q.id));
  assert(badIds.length === 0, 'All IDs follow Q### format',
    badIds.map(q => q.id).slice(0, 5).join(', '));

  // ── 9. All categories are from the required list ─────────
  const usedCategories = new Set(QUESTIONS.map(q => q.category));
  const unknownCats = [...usedCategories].filter(c => !REQUIRED_CATEGORIES.includes(c));
  assert(unknownCats.length === 0, 'All categories are from the official list',
    unknownCats.join(', '));

  // ── 10. All required categories are present ───────────────
  const missingCats = REQUIRED_CATEGORIES.filter(c => !usedCategories.has(c));
  assert(missingCats.length === 0, 'All 15 required categories are present in the question bank',
    missingCats.join(', '));

  // ── 11. Minimum questions per category ────────────────────
  const lowCats = REQUIRED_CATEGORIES.filter(cat => {
    const count = QUESTIONS.filter(q => q.category === cat).length;
    return count < MIN_PER_CATEGORY;
  });
  assert(lowCats.length === 0,
    `Every category has at least ${MIN_PER_CATEGORY} questions`,
    lowCats.map(c => {
      const count = QUESTIONS.filter(q => q.category === c).length;
      return `${c}:${count}`;
    }).join(', '));

  // ── 12. Questions are non-trivially long ─────────────────
  const shortQuestions = QUESTIONS.filter(q => q.question.length < 20);
  assert(shortQuestions.length === 0, 'All question texts are at least 20 characters',
    shortQuestions.map(q => q.id).join(', '));

  // ── 13. Explanations are non-trivially long ───────────────
  const shortExplanations = QUESTIONS.filter(q => q.explanation.length < 20);
  assert(shortExplanations.length === 0, 'All explanations are at least 20 characters',
    shortExplanations.map(q => q.id).join(', '));

  // ── 14. Options letters match A/B/C/D pattern ────────────
  const badOptionFormat = QUESTIONS.filter(q =>
    q.options.some((opt, i) => !opt.startsWith(['A', 'B', 'C', 'D'][i] + '.'))
  );
  assert(badOptionFormat.length === 0, 'All option texts start with the correct letter (A./B./C./D.)',
    badOptionFormat.map(q => q.id).slice(0, 5).join(', '));

  // ── 15. Spread of difficulty ─────────────────────────────
  const easy   = QUESTIONS.filter(q => q.difficulty === 'easy').length;
  const medium = QUESTIONS.filter(q => q.difficulty === 'medium').length;
  const hard   = QUESTIONS.filter(q => q.difficulty === 'hard').length;
  assert(easy > 0 && medium > 0 && hard > 0,
    `Difficulty spread: easy=${easy}, medium=${medium}, hard=${hard}`);

  // ── Per-category count summary ────────────────────────────
  console.log('\n  📊 Questions per category:');
  REQUIRED_CATEGORIES.forEach(cat => {
    const count = QUESTIONS.filter(q => q.category === cat).length;
    const ok = count >= MIN_PER_CATEGORY ? '✓' : '✗';
    console.log(`     ${ok} ${cat}: ${count}`);
  });
}

runQuestionTests();

module.exports = { passed, failed, failures };
