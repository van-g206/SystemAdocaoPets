const CACHE_NAME = 'petadopt-v5';
const OFFLINE_URL = './offline.html';

// Recursos estáticos com caminhos RELATIVOS (compatível com subpastas do GitHub Pages)
const STATIC_ASSETS = [
  './',
  './offline.html',
  './manifest.json',
  './icon.svg',
];

// ─── INSTALL ─────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pré-cache dos recursos...');
      return Promise.all(
        STATIC_ASSETS.map((url) =>
          cache.add(url)
            .then(() => console.log(`[SW] Guardado: ${url}`))
            .catch((err) => console.warn(`[SW] Aviso - não foi possível guardar: ${url}`, err))
        )
      );
    })
  );
  self.skipWaiting();
});

// ─── ACTIVATE ────────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
  console.log('[SW] Ativo e pronto!');
});

// ─── FETCH ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  if (event.request.url.includes('chrome-extension')) return;
  if (event.request.method !== 'GET') return;

  // Navegação SPA (HTML) → rede primeiro; fallback para raiz local (HashRouter resolve a rota no cliente)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(async () => {
          // Tenta entregar a raiz cacheada (o HashRouter trata o path #/... no cliente)
          const cached = await caches.match('./') || await caches.match(event.request);
          if (cached) return cached;

          // Fallback para offline.html físico
          const offlinePage = await caches.match(OFFLINE_URL);
          if (offlinePage) return offlinePage;

          // Último recurso: resposta inline
          return new Response(
            `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetAdopt — Sem Ligação</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; text-align: center;
           padding: 2rem; background: #f8fafc; color: #334155; }
    .card { max-width: 400px; margin: 4rem auto; padding: 2rem; background: white;
            border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
    h1 { color: #f97316; margin-bottom: 8px; }
    p  { line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Sem Ligação à Internet 🐾</h1>
    <p>O PetAdopt está em modo offline. Por favor, verifique a sua rede para aceder a todas as funcionalidades de adoção!</p>
  </div>
</body>
</html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // Assets (JS, CSS, imagens) → Cache-first, atualiza em background
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => null);

      return cached || networkFetch || new Response('', { status: 503 });
    })
  );
});

// ─── BACKGROUND SYNC ─────────────────────────────────────────────────────────
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pets') {
    event.waitUntil(syncPendingPets());
  }
});

async function syncPendingPets() {
  try {
    const db = await openDB();
    const pending = await getPendingPets(db);
    if (pending.length === 0) return;

    for (const pet of pending) {
      console.log('[SW] Sincronizando pet pendente:', pet.name);
      await removePendingPet(db, pet.id);
    }

    self.registration.showNotification('PetAdopt — Sincronizado! 🐾', {
      body: `${pending.length} pet(s) adicionado(s) com sucesso!`,
      icon: './icon.svg',
      badge: './icon.svg',
      tag: 'sync-success',
      data: { url: './' },
    });
  } catch (err) {
    console.error('[SW] Erro na sincronização:', err);
  }
}

// ─── PUSH NOTIFICATIONS ──────────────────────────────────────────────────────
self.addEventListener('push', (event) => {
  const defaults = {
    title: 'PetAdopt 🐾',
    body: 'Novidades no PetAdopt!',
    icon: './icon.svg',
    badge: './icon.svg',
    tag: 'petadopt-push',
    url: './',
  };

  let data = { ...defaults };
  if (event.data) {
    try { data = { ...defaults, ...event.data.json() }; }
    catch { data.body = event.data.text(); }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: data.tag,
      data: { url: data.url },
      actions: [
        { action: 'open',  title: '🐾 Ver agora' },
        { action: 'close', title: 'Fechar' },
      ],
      requireInteraction: false,
      vibrate: [200, 100, 200],
    })
  );
});

// ─── NOTIFICATION CLICK ──────────────────────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'close') return;

  const url = event.notification.data?.url || './';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ─── IndexedDB helpers ───────────────────────────────────────────────────────
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('petadopt-db', 1);
    req.onupgradeneeded = (e) => {
      e.target.result.createObjectStore('pending-pets', { keyPath: 'id' });
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror  = () => reject(req.error);
  });
}

function getPendingPets(db) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction('pending-pets', 'readonly');
    const req = tx.objectStore('pending-pets').getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => reject(req.error);
  });
}

function removePendingPet(db, id) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction('pending-pets', 'readwrite');
    const req = tx.objectStore('pending-pets').delete(id);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}
