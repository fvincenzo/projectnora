// sw.js
const CACHE_NAME = 'zen-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Required fetch listener for PWA install criteria
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});