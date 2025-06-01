var path = '/My-Runs-';

var appPrefix = 'myruns_';

var version = 'version_00';

var urls = [
  `${path}/`,
  `${path}/index.html`,
  `${path}/manifest.json`,
]
//caching
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urls);
    })
  );
});

//uninstalls cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// saved
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
