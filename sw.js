// sw.js — Service worker mínimo SOLO para instalabilidad (PWA con logo).
// NO cachea nada: passthrough total. Nunca sirve versión vieja del control.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request));
  }
});
