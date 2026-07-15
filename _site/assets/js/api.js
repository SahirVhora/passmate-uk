// PassMate UK - API Module
// Integrates with Open Trivia Database (opentdb.com) as supplementary questions
// and manages the local JSON question bank
// Falls back silently to static bank if API is unavailable

const API_BASE = 'https://opentdb.com/api.php';
const QUESTIONS_JSON_URL = './data/questions.json';
const CACHE_KEY_PREFIX = 'passmate_api_';

// Map our categories to Open Trivia DB category IDs (general knowledge, vehicles etc.)
// opentdb category 28 = Vehicles, 27 = Animals, 17 = Science & Nature
const OTDB_CATEGORY_MAP = {
  'alertness': 28,
  'hazard-awareness': 28,
  'vehicle-safety': 28,
  'rules-of-the-road': 28,
  'road-signs': 28,
  'motorway-rules': 28,
  'environmental-issues': 17,
  'accidents': 28
};

function _cacheKey(category, count) {
  return `${CACHE_KEY_PREFIX}${category}_${count}`;
}

function _getCached(key) {
  try {
    const cached = sessionStorage.getItem(key);
    if (!cached) return null;
    const { data, timestamp } = JSON.parse(cached);
    // Cache valid for 30 minutes
    if (Date.now() - timestamp > 30 * 60 * 1000) {
      sessionStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function _setCache(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // sessionStorage full - ignore
  }
}

function _decodeHtml(text) {
  const el = document.createElement('textarea');
  el.innerHTML = text;
  return el.value;
}

function _normaliseOtdbQuestion(q, index, category) {
  // Convert OTDB format to PassMate schema
  const allAnswers = [q.correct_answer, ...q.incorrect_answers]
    .sort(() => Math.random() - 0.5);
  const letters = ['A', 'B', 'C', 'D'];
  const correctIndex = allAnswers.indexOf(q.correct_answer);

  return {
    id: `API_${Date.now()}_${index}`,
    category: category,
    subcategory: 'general',
    question: _decodeHtml(q.question),
    options: allAnswers.map((a, i) => `${letters[i]}. ${_decodeHtml(a)}`),
    correct: letters[correctIndex],
    explanation: `The correct answer is: ${_decodeHtml(q.correct_answer)}`,
    difficulty: q.difficulty === 'hard' ? 'hard' : q.difficulty === 'medium' ? 'medium' : 'easy',
    hcRule: null,
    imageUrl: null,
    source: 'api'
  };
}

async function fetchDynamicQuestions(category, count = 5) {
  const cacheKey = _cacheKey(category, count);
  const cached = _getCached(cacheKey);
  if (cached) return cached;

  const otdbCategory = OTDB_CATEGORY_MAP[category];
  if (!otdbCategory) return [];

  const url = `${API_BASE}?amount=${count}&category=${otdbCategory}&type=multiple`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    if (data.response_code !== 0 || !data.results.length) return [];

    const normalised = data.results.map((q, i) => _normaliseOtdbQuestion(q, i, category));
    _setCache(cacheKey, normalised);
    return normalised;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.warn('PassMate: API fetch failed, using static bank only', err.message);
    }
    return [];
  }
}

/**
 * Loads the main question bank from the JSON file.
 * This replaces the static QUESTIONS array in questions.js.
 */
async function loadQuestionBank() {
  try {
    const response = await fetch(QUESTIONS_JSON_URL);
    if (!response.ok) throw new Error(`Failed to fetch question bank: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error('PassMate: Critical error loading question bank. App may not function.', err);
    return [];
  }
}

// Merge API questions with static ones for variety
async function getEnrichedQuestions(staticQuestions, category, apiCount = 3) {
  const apiQuestions = await fetchDynamicQuestions(category, apiCount);
  return [...staticQuestions, ...apiQuestions];
}

const Api = {
  loadQuestionBank,
  fetchDynamicQuestions,
  getEnrichedQuestions
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Api };
}
