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
  "/static/media/DiscordIconMini.596aef7e.svg",
  "/static/media/UpdatesIcon.2a31c348.svg",
  "/static/media/PostBg1.bd533372.webp",
  "/static/media/ArrowIcon.15687dbf.svg",
  "/static/media/ArrowIconGray.b0e26715.svg",
  "/static/media/BorneoBg.054e4862.webp",
  "/static/media/DiscordFooterIcon.731d543f.svg",
  "/static/media/VkFooterIcon.c1aee1a2.svg",
  "/static/media/Whitney-Bold.4e16fc1b.ttf",
  "/static/media/Whitney-Black.3825fd4a.ttf",
  "/static/media/Whitney-Semibold.1070fecc.ttf",
  "/static/media/Roboto-Bold.4f39c579.ttf",
  "/static/media/Whitney-Medium.40d453ca.ttf",
  "/static/media/Whitney-Book.a7d57ff0.ttf",
  "/static/media/OurServers.6a8cc213.svg",
  "/static/media/Donate.07b4b934.svg",
  "/images/icon-192x192.png",
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
