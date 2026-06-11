// Data smoke tests for the DVSA question bank: a malformed entry can render
// a question with no correct answer and silently break mock tests.
// Run with: node --test tests/validate-questions.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const questions = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'questions.json'), 'utf8')
);

test('bank has the advertised 304 questions', () => {
  assert.strictEqual(questions.length, 304);
});

test('every question is well-formed', () => {
  const seenIds = new Set();
  for (const q of questions) {
    const where = `question ${q.id || '(no id)'}`;
    assert.ok(q.id && !seenIds.has(q.id), `${where}: missing or duplicate id`);
    seenIds.add(q.id);
    assert.ok(q.category, `${where}: missing category`);
    assert.ok(typeof q.question === 'string' && q.question.trim(), `${where}: empty text`);
    assert.ok(Array.isArray(q.options) && q.options.length === 4, `${where}: needs exactly 4 options`);
    assert.ok(q.explanation, `${where}: missing explanation`);
    // correct answer must reference one of the options (e.g. "B")
    const letters = q.options.map(o => String(o).trim().charAt(0));
    assert.ok(letters.includes(String(q.correct).trim()), `${where}: correct "${q.correct}" not among options`);
  }
});

test('all 15 DVSA categories are covered', () => {
  const categories = new Set(questions.map(q => q.category));
  assert.strictEqual(categories.size, 15, `found ${categories.size} categories: ${[...categories].join(', ')}`);
});
