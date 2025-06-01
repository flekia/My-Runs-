const CACHE_NAME = 'necessary-resources';
const base = self.location.pathname.origin + '/My-Runs-/';
const urlsToCache = [
  base,
  base + 'index.html',
  base + 'manifest.json',
  base + 'sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      }).catch(hehe => {
        console.error('Failed caching', hehe);
      })
    );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== 'CACHE_NAME') {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
