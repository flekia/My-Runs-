const CACHE_VERSION = 'v57';
const CACHE_NAME = `Cache-${CACHE_VERSION}`; 

self.addEventListener('install', (event) => {
const BASE = self.location.origin + '/My-Runs-/';
const urlsToCache = [
  BASE,
  BASE + 'index.html',
  BASE + 'offline.html',
  BASE + 'manifest.json',
  BASE + 'body.js',
  BASE + 'head.js',
  BASE + 'tooLong.css',
  BASE + 'sw.js'
];


  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          console.log('Cached:', url);
        } catch (err) {
          console.error('Failed to cache:', url, err);
        }
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});


self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
           const copy = response.clone();
           event.waitUntil(
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy))
           );
          return response;
           
        })
        .catch(() => {
          console.warn("I'm serving the offline.html version.");
          return caches.match(self.location.origin + '/My-Runs-/offline.html');
  })
);
  } else {
     event.respondWith(
      caches.match(event.request)
      .then(response => response || fetch(event.request))

      )
    
  }
});
