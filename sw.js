const CACHE_NAME = 'necessary-resources';
const base = self.location.pathname.replace(/sw\.js/, '');
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
      // Remove all caches that aren't the current one
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
})

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // Handle navigation requests
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match('/index.html')
      )
    );
  } else {
    // Handle other requests
    event.respondWith(
      caches.match(event.request)
        .then(response => { 
          response || fetch(event.request))
        }
    );
  }
});
