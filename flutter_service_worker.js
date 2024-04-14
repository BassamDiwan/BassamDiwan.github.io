'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a1b1711a9ce6e7ba5eb55d0f8f42d049",
"assets/AssetManifest.bin.json": "e835a5f0c3907b73c266bc0d0c2c4a17",
"assets/AssetManifest.json": "95b7823581369847a9aaac2d6b9ddccb",
"assets/assets/images/01.png": "3b47e58e79148dbbed97b6cd358092b1",
"assets/assets/images/02.png": "06f2c73d0af961a5ea7ae1d85c4a2d7b",
"assets/assets/images/03.png": "560560b3431387034e983ef17a559aad",
"assets/assets/images/04.png": "265a2c9de90604484ab8b111e2a38eb7",
"assets/assets/images/background_design_1.png": "44e89ca5554749560376fcc39aea2a36",
"assets/assets/images/background_design_2.png": "a6490a08a3fdb6dc23be66d2fe201575",
"assets/assets/images/closed_icon.png": "4b25bf2fb5052250aec5ba47278bc08b",
"assets/assets/images/Ellipse%252010.png": "0c11241ec6625461665bde1e986086fb",
"assets/assets/images/Ellipse%252023.png": "b1f8967eb649815b8351ec52ddf01a6e",
"assets/assets/images/Ellipse%252024.png": "9ca4fba08c269c1a67e037f08a51b3dd",
"assets/assets/images/Ellipse%252025.png": "31f8d16f5691d3ec5454fd824e41d6dd",
"assets/assets/images/location_image.png": "dbc043a2b461d61d329f628ae6307b49",
"assets/assets/images/LOGO%2520Cisco.png": "f53a0c081d13203b7e9ab7af30b0624f",
"assets/assets/images/LOGO%2520Hewlett.png": "b057cf1e6dae89c391cce3ff26f07933",
"assets/assets/images/LOGO%2520Huwawei.png": "d1b9e24655015286d44b7d70b51ad36b",
"assets/assets/images/LOGO%2520Microsoft.png": "6b84c19f71a351c8b588aab88d01de6b",
"assets/assets/images/LOGO%2520Nutanix.png": "bcf6f450accb48449ce04de45e6f8ea8",
"assets/assets/images/LOGO%2520Paloalto.png": "12cc5c7f6dba9f91213ac7b661c7f562",
"assets/assets/images/LOGO%2520Veeam.png": "28b94a7ece76273961924d2f3d262313",
"assets/assets/images/LOGO%2520Vmware.png": "126062525515a476aff2653f63211416",
"assets/assets/images/LOGO%2520Vyopta.png": "fb918a4a67e1f27649b1ddde89da3a0a",
"assets/assets/images/logo.png": "bbb7f226d308bced6bacea333808d4bd",
"assets/assets/images/logo2.png": "604367847b3cbb21df98b055e7738970",
"assets/assets/images/logo3.png": "25b3ba0bf0c053b49b9a74df18e1beed",
"assets/assets/images/running_icon.png": "112eb0c653476cc33d0d6cd5e66fc575",
"assets/assets/images/total_icon.png": "de1e0702d3dca7d7222fba45cb8629e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "614a2ce4bc8ebab3d37bd4283659e60e",
"assets/NOTICES": "4a4120c7e0e98034babc41052991e6d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "43d78bd2483b948e0dc5341a93f02344",
"icons/apple-touch-icon.png": "72d5c821c506f15d9512c66a3e383a20",
"icons/favicon-16x16.png": "76a42a2cb23c693a15164db70348c8c1",
"icons/favicon-32x32.png": "fb2feffdb6209b2a235b2215102f7385",
"icons/favicon.ico": "ac586e43aa6580c8c2843919e1d02130",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/redketchup.zip": "7d8caa7723883fe96a3e29823ddd50d6",
"icons/site.webmanifest": "3bbccedface908936ca94df52e793b85",
"index.html": "fd89f8fa764fec5b964533d5e1769573",
"/": "fd89f8fa764fec5b964533d5e1769573",
"main.dart.js": "0fcbee62cbda054c49143d68ad3cb78b",
"manifest.json": "cd3df784a161cf5dae4a7dc6676339de",
"version.json": "af6fb5b37b5d6dcc27ceea9b3c54ddaf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
