var cacheName = 'send-directly-pwa-cache-v1';
var filesToCache = [
    'https://piinalpin.com/whatsapp-send-directly',
    'https://piinalpin.com/whatsapp-send-directly/index.html',
    'https://piinalpin.com/whatsapp-send-directly/assets/css/style.css',
    'https://piinalpin.com/whatsapp-send-directly/assets/js/main.js',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/hero-bg.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/hero-logo.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-72x72.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-96x96.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-128x128.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-144x144.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-152x152.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-192x192.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-384x384.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/img/icon-512-512.png',
    'https://piinalpin.com/whatsapp-send-directly/assets/vendor/aos/aos.css',
    'https://piinalpin.com/whatsapp-send-directly/assets/vendor/aos/aos.js',
    'https://piinalpin.com/whatsapp-send-directly/assets/vendor/bootstrap/css/bootstrap.min.css',
    'https://piinalpin.com/whatsapp-send-directly/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
];

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