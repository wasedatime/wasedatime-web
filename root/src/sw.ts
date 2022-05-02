/// <reference lib="webworker" />

import { skipWaiting, clientsClaim, setCacheNameDetails } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

cleanupOutdatedCaches();
skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

setCacheNameDetails({
  prefix: "wasedatime-cache",
  precache: "precache",
  runtime: "runtime",
});

registerRoute(
  ({ request }) => request.mode === "navigate",
  new NetworkFirst({
    fetchOptions: {
      credentials: "omit",
    },
  })
);

registerRoute(
  /.*\.(?:js|css)/,
  new NetworkFirst({
    fetchOptions: {
      credentials: "omit",
    },
  })
);

registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)/,
  new StaleWhileRevalidate({
    fetchOptions: {
      credentials: "omit",
    },
  })
);

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
    clientsClaim();
  }
});
