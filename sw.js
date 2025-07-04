var cacheName = 'sellittothem-pwa';
var filesToCache = [
  './',
  './index2.html',
  './src/style.css',
  './src/arrays.js',
  './src/main.js',
  './src/scripts.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
