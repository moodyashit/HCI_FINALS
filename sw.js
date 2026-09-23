// Offline cache: app files are network-first (so updates arrive), sprites/fonts are cache-first.
const CACHE = 'pba-v1';
const SHELL = ['./', 'index.html', 'main.html', 'stats.html', 'pokedex.html', 'index.js', 'retro.css', 'index.css', 'main.css', 'stats.css', 'pokedex.css',
  'favicon.svg', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.hostname === 'api.github.com') return;
  const local = url.origin === location.origin;
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    });
    return local ? net.catch(() => hit) : (hit || net);
  }));
});
