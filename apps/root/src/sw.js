/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import { clientsClaim, setCacheNameDetails } from "workbox-core"
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching"
import { registerRoute } from "workbox-routing"
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies"

self.__WB_DISABLE_DEV_LOGS = true

self.skipWaiting()
clientsClaim()

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

setCacheNameDetails({
  prefix: "wasedatime-cache",
  precache: "precache",
  runtime: "runtime",
})

registerRoute(
  ({ event }) => event.request.mode === "navigate",
  new NetworkFirst({
    fetchOptions: {
      credentials: "same-origin",
    },
  })
)

registerRoute(
  /.*\.(?:js|css)/,
  new NetworkFirst({
    fetchOptions: {
      credentials: "same-origin",
    },
  })
)

registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)/,
  new StaleWhileRevalidate({
    fetchOptions: {
      credentials: "same-origin",
    },
  })
)

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
    clientsClaim()
  }
})
