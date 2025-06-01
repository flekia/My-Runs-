const CACHE_NAME = 'site-cache-v1';
const FILES_TO_CACHE = [
  './index.html', //inlined
  './manifest.json' //manifest
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response || 
        fetch(event.request).catch (() => {
         if (event.request.mode === 'navigate') {
         return caches.match('/index.html');
         }
        })
    );
    })
  );
});
