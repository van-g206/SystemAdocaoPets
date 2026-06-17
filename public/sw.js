const CACHE_NAME = 'petadopt-v3';
const OFFLINE_URL = 'offline.html'; 

const STATIC_ASSETS = [
  './', 
  'offline.html',
  'manifest.json',
  'icon.svg',
];

// ─── INSTALL ─────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
    
      return Promise.all(
        STATIC_ASSETS.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn(`Aviso: Não foi possível carregar o recurso para o cache: ${url}`, err);
          });
        })
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
});

self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  if (event.request.url.includes('chrome-extension')) return;
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          const offlinePage = await caches.match(OFFLINE_URL);
          return offlinePage || new Response('<h1>Offline</h1>', {
            headers: { 'Content-Type': 'text/html' },
          });
        })
    );
    return;
  }

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
    const db    = await openDB();
    const pending = await getPendingPets(db);
    if (pending.length === 0) return;

    for (const pet of pending) {
      console.log('Sincronizando pet:', pet.name);
      // TODO: substituir pela chamada real à API
      // await fetch('/api/pets', { method: 'POST', body: JSON.stringify(pet) });
      await removePendingPet(db, pet.id);
    }

    self.registration.showNotification('PetAdopt — Sincronizado! 🐾', {
      body: `${pending.length} pet(s) cadastrado(s) com sucesso!`,
      icon: 'icon.svg',
      badge: 'icon.svg',
      tag: 'sync-success',
      data: { url: '/pets' },
    });
  } catch (err) {
    console.error('Erro na sincronização:', err);
  }
}

// ─── PUSH NOTIFICATIONS ──────────────────────────────────────────────────────
self.addEventListener('push', (event) => {
  const defaults = {
    title: 'PetAdopt 🐾',
    body: 'Novidade no PetAdopt!',
    icon: 'icon.svg',
    badge: 'icon.svg',
    tag: 'petadopt-push',
    url: '/',
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

  const url = event.notification.data?.url || '/';

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

// ─── PUSH SUBSCRIPTION CHANGE ────────────────────────────────────────────────
self.addEventListener('pushsubscriptionchange', (event) => {
  console.log('Push subscription changed — resubscribing...');
});

// ─── IndexedDB helpers para sync ─────────────────────────────────────────────
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

function savePendingPet(db, pet) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction('pending-pets', 'readwrite');
    const req = tx.objectStore('pending-pets').put(pet);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}
