importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.core.setCacheNameDetails({
  prefix: 'wasedatime-cache',
  precache: 'precache',
  runtime: 'runtime',
});

const precacheController = new workbox.precaching.PrecacheController();
precacheController.addToCacheList([]);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:html|js|ts|tsx|ejs)'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'wasedatime-code-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        // Cache for a maximum of 2 weeks
        maxAgeSeconds: 14 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:css)'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'wasedatime-style-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
        // Cache for a maximum of 1 month
        maxAgeSeconds: 30 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'wasedatime-image-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        // Cache for a maximum of 3 months
        maxAgeSeconds: 90 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /.*\.(?:woff|woff2|eot|ttf|otf)/,
  // Use the cache if it's available
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'wasedatime-fonts-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 5,
        // Cache for a maximum of 6 months
        maxAgeSeconds: 180 * 24 * 60 * 60,
      })
    ],
  })
);
