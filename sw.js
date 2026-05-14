// PassMate UK — Service Worker
// Cache-first strategy for full offline support

const CACHE_NAME = 'passmate-v2';

const STATIC_ASSETS = [
  './',
  './index.html',
  './pages/categories.html',
  './pages/quiz.html',
  './pages/results.html',
  './pages/dashboard.html',
  './assets/css/style.css',
  './assets/js/quiz.js',
  './assets/js/storage.js',
  './assets/js/api.js',
  './assets/js/analytics.js',
  './data/questions.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  // Google Fonts — cache the loaded fonts (fetched dynamically)
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700;800&display=swap'
];

// ── Install: cache all static assets ─────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.map(url => {
        // Use no-cors for cross-origin resources (Google Fonts)
        if (url.startsWith('http')) {
          return new Request(url, { mode: 'no-cors' });
        }
        return url;
      })).catch(err => {
        console.warn('SW: Some assets failed to cache during install', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ─────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first strategy ───────────────────────────────
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip browser-extension requests
  if (!event.request.url.startsWith('http')) return;

  // Skip Open Trivia DB API calls — always go to network for fresh data
  if (event.request.url.includes('opentdb.com')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('[]', {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache it
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) return response;

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(() => {
        // Offline and not cached — return offline page for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

// ── Background sync placeholder ───────────────────────────────
// Future: sync bookmarks and progress with a backend
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    // Placeholder for future backend sync
    event.waitUntil(Promise.resolve());
  }
});
