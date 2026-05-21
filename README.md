# PassMate UK - Free Theory Test Practice

A free, offline-capable Progressive Web App for UK Car Theory Test preparation. Practice 304 original questions across all 15 DVSA topic categories - no sign-up, no payment, no nonsense.

## Features

- **304 questions** across all 15 official DVSA categories (20–22 per topic)
- **Mock test mode** - 50 random questions, 57-minute timer, 86% pass mark (mirrors real test)
- **Category drill** - focus on specific topics
- **Weak areas mode** - automatically targets your lowest-scoring categories
- **Bookmarks** - save tricky questions and practice them as a dedicated set
- **Instant feedback** - explanation + Highway Code rule reference after every answer
- **Progress tracking** - per-category accuracy, streaks, session history (localStorage)
- **Dark mode** - auto-detects system preference, manual toggle stored in localStorage
- **Auto-advance** - optional 2-second auto-advance between questions
- **Fully offline** - works without internet after first load (PWA + service worker)
- **No backend, no account** - everything runs 100% client-side
- **Open Trivia DB** - optional supplementary API questions for variety (degrades gracefully offline)

## Screenshots

The live site is deployed and available at: https://sahirvhora.github.io/passmate-uk/

## Project Structure

```
passmate-uk/
├── index.html                  # Home page
├── pages/
│   ├── categories.html         # Category selection with filter pills
│   ├── quiz.html               # Quiz engine (all modes)
│   ├── results.html            # Score + breakdown page
│   └── dashboard.html          # Progress dashboard + settings
├── assets/
│   ├── css/style.css           # Single stylesheet (dark mode, mobile-first)
│   ├── js/
│   │   ├── quiz.js             # Session logic, shuffle, mode handling
│   │   ├── storage.js          # localStorage persistence layer
│   │   ├── api.js              # Open Trivia DB integration + caching
│   │   └── analytics.js        # In-browser analytics (no external service)
│   └── icons/                  # PWA icons (192px, 512px)
├── data/
│   └── questions.js            # 304 original questions
├── tests/
│   ├── test-questions.js       # Question bank integrity tests
│   ├── test-scoring.js         # Scoring, storage, shuffle tests
│   └── test-api.js             # API normalisation + fallback tests
├── run-tests.js                # Test runner (node run-tests.js)
├── manifest.json               # PWA manifest
├── sw.js                       # Service worker (cache-first, offline)
└── .github/workflows/deploy.yml
```

## Run Locally

No build step required - just open the file:

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally (recommended - avoids some browser file:// restrictions for SW)
npx serve .
# Then visit http://localhost:3000
```

## Run Tests

```bash
node run-tests.js
```

All 76 tests pass across three test files:

| Test file | Tests | Coverage |
|---|---|---|
| `test-questions.js` | 16 | Schema, IDs, categories, count, difficulty spread |
| `test-scoring.js` | 39 | Scoring, pass/fail, shuffle, storage, bookmarks, sessions |
| `test-api.js` | 21 | API normalisation, fallback, caching, entity decoding |

## Deploy to GitHub Pages

1. Fork this repository
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push to `main` - the workflow in `.github/workflows/deploy.yml` runs tests then deploys automatically
5. Your site will be live at `https://<your-username>.github.io/passmate-uk/`

## Question Categories

| # | Category | Questions |
|---|---|---|
| 1 | Alertness | 20 |
| 2 | Attitude | 20 |
| 3 | Safety Margins | 20 |
| 4 | Hazard Awareness | 20 |
| 5 | Vulnerable Road Users | 20 |
| 6 | Other Types of Vehicle | 20 |
| 7 | Vehicle Safety | 20 |
| 8 | Safety First | 20 |
| 9 | Rules of the Road | 22 |
| 10 | Road Signs | 22 |
| 11 | Documents | 20 |
| 12 | Accidents | 20 |
| 13 | Vehicle Loading | 20 |
| 14 | Motorway Rules | 20 |
| 15 | Environmental Issues | 20 |
| | **Total** | **304** |

## Contribute

Contributions welcome! To add or correct questions:

1. Fork the repo
2. Edit `data/questions.js` - follow the existing schema:
   ```js
   {
     id: "Q305",
     category: "alertness",
     subcategory: "observation",
     question: "Your question here",
     options: ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
     correct: "A",
     explanation: "Why A is correct, referencing Highway Code where applicable",
     difficulty: "medium",   // easy | medium | hard
     hcRule: "Rule 159",     // optional
     imageUrl: null
   }
   ```
3. Run `node run-tests.js` - all tests must pass
4. Open a pull request

## Disclaimer

> **This is an independent, community-built tool. It is not affiliated with, endorsed by, or connected to the Driver and Vehicle Standards Agency (DVSA), the Driver and Vehicle Licensing Agency (DVLA), or any official UK government body.** Questions are original and written based on publicly available Highway Code knowledge domains. Always use official DVSA study materials as your primary preparation resource.

## Licence

MIT - free to use, modify, and distribute.

## Next Learning Enhancement

See [docs/spaced-repetition.md](docs/spaced-repetition.md) for the proposed local spaced-repetition queue. It builds on the existing weak-area and bookmark logic without changing the mock-test behaviour.
