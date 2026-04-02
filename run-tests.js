#!/usr/bin/env node
// PassMate UK — Test Runner
// Usage: node run-tests.js

'use strict';

console.log('');
console.log('╔═══════════════════════════════════════════╗');
console.log('║       PassMate UK — Test Suite            ║');
console.log('╚═══════════════════════════════════════════╝');

let totalPassed = 0;
let totalFailed = 0;
const suiteResults = [];

// ── Run test-questions.js ─────────────────────────────────────
try {
  const r = require('./tests/test-questions.js');
  totalPassed += r.passed;
  totalFailed += r.failed;
  suiteResults.push({ name: 'test-questions.js', passed: r.passed, failed: r.failed, failures: r.failures });
} catch (err) {
  console.error('\n💥 test-questions.js threw an uncaught error:', err.message);
  totalFailed++;
  suiteResults.push({ name: 'test-questions.js', passed: 0, failed: 1, failures: [{ label: 'Module load error', detail: err.message }] });
}

// ── Run test-scoring.js ──────────────────────────────────────
try {
  const r = require('./tests/test-scoring.js');
  totalPassed += r.passed;
  totalFailed += r.failed;
  suiteResults.push({ name: 'test-scoring.js', passed: r.passed, failed: r.failed, failures: r.failures });
} catch (err) {
  console.error('\n💥 test-scoring.js threw an uncaught error:', err.message);
  totalFailed++;
  suiteResults.push({ name: 'test-scoring.js', passed: 0, failed: 1, failures: [{ label: 'Module load error', detail: err.message }] });
}

// ── Run test-api.js (async) ───────────────────────────────────
const apiPromise = new Promise((resolve) => {
  // test-api.js sets module.exports asynchronously inside .then()
  // We need a small trick: delay reading exports until the event loop settles
  try {
    require('./tests/test-api.js');
    // Give the async test time to finish before we read the module exports
    setTimeout(() => {
      try {
        const r = require('./tests/test-api.js');
        resolve(r);
      } catch (err) {
        resolve({ passed: 0, failed: 1, failures: [{ label: 'Module read error', detail: err.message }] });
      }
    }, 2000);
  } catch (err) {
    console.error('\n💥 test-api.js threw an uncaught error:', err.message);
    resolve({ passed: 0, failed: 1, failures: [{ label: 'Module load error', detail: err.message }] });
  }
});

apiPromise.then((r) => {
  totalPassed += r.passed;
  totalFailed += r.failed;
  suiteResults.push({ name: 'test-api.js', passed: r.passed, failed: r.failed, failures: r.failures || [] });

  printSummary();
});

function printSummary() {
  console.log('\n');
  console.log('═══════════════════════════════════════════════');
  console.log('  RESULTS SUMMARY');
  console.log('═══════════════════════════════════════════════');

  suiteResults.forEach(suite => {
    const icon = suite.failed === 0 ? '✅' : '❌';
    console.log(`  ${icon}  ${suite.name.padEnd(22)} passed: ${suite.passed}  failed: ${suite.failed}`);
    if (suite.failures && suite.failures.length) {
      suite.failures.forEach(f => {
        console.log(`       ↳ FAIL: ${f.label}${f.detail ? ' — ' + f.detail : ''}`);
      });
    }
  });

  console.log('───────────────────────────────────────────────');
  console.log(`  Total:  ${totalPassed + totalFailed} tests  |  ✅ ${totalPassed} passed  |  ❌ ${totalFailed} failed`);
  console.log('═══════════════════════════════════════════════');

  if (totalFailed === 0) {
    console.log('\n  🎉  All tests passed!\n');
  } else {
    console.log(`\n  ⚠️   ${totalFailed} test(s) failed. Review failures above.\n`);
    process.exit(1);
  }
}
