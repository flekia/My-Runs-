const CACHE_NAME = 'necessary-resources';
const BASE = self.location.origin + self.location.pathname.replace('/My-Runs-/');
const urlsToCache = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => 
        cache.addAll(urlsToCache)).catch(err => {
          console.error('SW Failed :(', err)
        })
    );
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
        .catch(() => caches.match(BASE +'/index.html'))
    );
  } else {
     event.respondWith(
      caches.match(event.request).then(response =>
        response || fetch(event.request)
      )
    );
  }
});
