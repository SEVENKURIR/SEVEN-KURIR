const CACHE_NAME = 'seven-kurir-v2';
const PRECACHE_URLS = [
  'index.html',
  'admin.html',
  'utang.html',
  'style.css',
  'manifest.json',
  'LOGO%20SEVEN%20KURIR.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll())
      .then(clientsList => {
        // Kasih tau semua tab yang lagi kebuka biar auto-reload, gak perlu hard refresh manual
        clientsList.forEach(client => client.postMessage({ type: 'SW_UPDATED' }));
      })
  );
});

// Network-first buat file statis di domain sendiri, biar tetep bisa kebuka pas offline/sinyal jelek.
// cache:'no-store' dipaksa biar SELALU ambil versi terbaru dari server, gak kena cache HTTP browser
// yang bisa bikin file lama nyangkut walaupun udah di-deploy ulang.
// Request ke Firebase (data realtime, auth) gak disentuh sama sekali — selalu langsung ke jaringan.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(res => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
