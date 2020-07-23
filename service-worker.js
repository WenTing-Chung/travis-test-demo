importScripts("/travis-test-demo/precache-manifest.49cbba132f23d5a410da84880c03085e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  // 設定要 cache 的 API 或 檔案的路徑
  new RegExp('https:\/\/picsum\.photos\/200'),
  // workbox.strategies.cacheFirst()
  // NetworkFirst() 以網路資料優先
  new workbox.strategies.NetworkFirst()
)
