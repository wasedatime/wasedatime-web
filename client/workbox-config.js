// https://developers.google.com/web/tools/workbox/guides/configure-workbox

module.exports = {
  cacheId: 'wasetime-v1',
  globDirectory: 'build/',
  globPatterns: [
    'static/media/*.{ico,png,gif,svg,jpg}',
    '*.{ico,png,gif,svg,jpg}',
    'index.html'
  ],
  swDest: 'build/sw.js',
  clientsClaim: true,
  skipWaiting: true,
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  runtimeCaching: [
    {
      urlPattern: '/',
      handler: 'networkFirst',
      options: {
        cacheName: 'topPage',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24,
        },
      },
    },
    {
      urlPattern: /\/api\/.+/,
      handler: 'networkFirst',
      options: {
        cacheName: 'api',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24
        },
      },
    },
    {
      urlPattern: /\.(jpg|png|svg|gif|woff|ttf|eot)/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'assets',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 14
        }
      }
    },
  ],
}
