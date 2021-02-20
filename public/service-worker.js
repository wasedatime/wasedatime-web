importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();
const precacheController = new workbox.precaching.PrecacheController();
precacheController.addToCacheList([]);

workbox.core.setCacheNameDetails({
  prefix: "wasedatime-cache",
  precache: "precache",
  runtime: "runtime",
});

workbox.routing.registerRoute(
  ({ event }) => event.request.mode === "navigate",
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /.*\.(?:js|css)/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)/,
  new workbox.strategies.StaleWhileRevalidate()
);
