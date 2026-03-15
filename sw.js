// MangaTL Service Worker v2.1 — GitHub Pages fix
const CACHE = 'mangatl-v3';

// ใช้ relative paths เพื่อรองรับ GitHub Pages subfolder
const BASE = self.registration.scope;
const STATIC = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'icon-192.svg',
  BASE + 'icon-512.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // ข้าม API calls — ไม่ cache
  if (url.hostname === 'openrouter.ai') return;
  if (url.hostname === 'api.mangadex.org') return;
  if (url.hostname === 'fonts.googleapis.com') return;
  if (url.hostname === 'fonts.gstatic.com') return;
  if (url.hostname.includes('corsproxy') || url.hostname.includes('allorigins')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => {
        // Fallback to index.html for navigation requests
        if (e.request.mode === 'navigate') {
          return caches.match(BASE + 'index.html');
        }
      });
    })
  );
});
