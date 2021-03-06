const CACHE_NAME = "version-1";
const urlsToCache = [
  "./",
  "./index.html",
  "./offline.html",
  "./static/js/bundle.js",
  "./static/js/vendors~main.chunk.js",
  "./static/js/main.chunk.js",
  "./static/js/0.chunk.js",
  "./static/js/3.chunk.js",
  "./static/js/1.chunk.js",
  "./static/js/2.chunk.js",
  "./manifest.json",
  "/static/media/HomeBg.12c11064.webp",
  "/static/media/PostBg1.bd533372.webp",
  "/static/media/BorneoBg.054e4862.webp",
  "/static/media/Whitney-Bold.4e16fc1b.ttf",
  "/static/media/Whitney-Black.3825fd4a.ttf",
  "/static/media/Whitney-Semibold.1070fecc.ttf",
  "/static/media/Roboto-Bold.4f39c579.ttf",
  "/static/media/Whitney-Medium.40d453ca.ttf",
  "/static/media/Whitney-Book.a7d57ff0.ttf",
  "/static/media/OurServers.6a8cc213.svg",
  "/images/icon-192x192.png",
  "/static/media/DiscordIconMini.c3518179.svg",
  "/static/media/UpdatesIcon.68cc1586.svg",
  "/static/media/ArrowIcon.b9f6ba74.svg",
  "/static/media/ArrowIconGray.d1fe0b73.svg",
  "/static/media/DiscordFooterIcon.022cd393.svg",
  "/static/media/VkFooterIcon.db0b25ce.svg",
  "/static/media/OurServers.950dd0bb.svg",
  "/static/media/Donate.cda73393.svg",
];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
