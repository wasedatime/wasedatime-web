importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

const precacheManifest = [];

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
