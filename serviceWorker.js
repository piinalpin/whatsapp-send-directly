var cacheName = 'send-directly-pwa-cache-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/img/hero-bg.png',
    '/assets/img/hero-logo.png',
    '/assets/img/icon-72x72.png',
    '/assets/img/icon-96x96.png',
    '/assets/img/icon-128x128.png',
    '/assets/img/icon-144x144.png',
    '/assets/img/icon-152x152.png',
    '/assets/img/icon-192x192.png',
    '/assets/img/icon-384x384.png',
    '/assets/img/icon-512-512.png',
    '/assets/vendor/aos/aos.css',
    '/assets/vendor/aos/aos.js',
    '/assets/vendor/bootstrap/css/bootstrap.min.css',
    '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
];

console.log("Service Worker: Registered " + filesToCache.length + " files to cache");

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});