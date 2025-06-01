const CACHE_NAME = 'necessary-resources';
const base = self.location.pathname.replace(/\/[^/]*$, '/');
const urlsToCache = [
  base,
  base + 'index.html',
  base + 'manifest.json',
  base + 'sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
