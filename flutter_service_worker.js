'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "50771c150be7e26c7a83301fc77f4266",
"index.html": "58be18e46745a3c9cfda784d9da31625",
"/": "58be18e46745a3c9cfda784d9da31625",
"main.dart.js": "04a81138dd0a07e340fe4927b2eb0749",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "fee1425f28339d9ce2d39abc9b45fee7",
"icons/Icon-192.png": "6258b40f7068e928a5b7613e79a76113",
"icons/Icon-maskable-192.png": "6258b40f7068e928a5b7613e79a76113",
"icons/Icon-maskable-512.png": "17dbae5a58845a1e371aefd64b637dc3",
"icons/Icon-512.png": "17dbae5a58845a1e371aefd64b637dc3",
"manifest.json": "73bf2304c3c8b9473d80799a811a0d05",
"assets/AssetManifest.json": "5f3f61fe2f54c217f2e3de6ddc6702f8",
"assets/NOTICES": "9467a21075319b0713dd7f9ab62fe93a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_snake/assets/default_snake_fruit.png": "bbb606a12b3ba19937ac0c297da164b5",
"assets/packages/flutter_snake/assets/default_snake_body.png": "e0f0c1181f116fea93928b8b10b028e8",
"assets/packages/flutter_snake/assets/default_snake_turn.png": "fe2430372678c1223c6a568a63960f0b",
"assets/packages/flutter_snake/assets/default_snake_head.png": "928555dde8bae5699ad6698d1b801f5c",
"assets/packages/flutter_snake/assets/default_snake_tail.png": "5b75cf22f7d3f634e561a605c70e5856",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "5c4436335aeca67cdae1e7d25d97297a",
"assets/fonts/MaterialIcons-Regular.otf": "549ed3094ed81f9749344afc64dec126",
"assets/assets/icon.png": "694adc406aa21256fea54b45abf3212f",
"assets/assets/games/chess.jpg": "f1b3dee63e36138ca79e622d36b09eda",
"assets/assets/games/dino.png": "913aa3946dd70f15613084b560322af4",
"assets/assets/games/dino/ptera/ptera_2.png": "3c26cf2df2f9251ca980258b50c3bcdc",
"assets/assets/games/dino/ptera/ptera_1.png": "5562784ae28b5806ebc677762ec151f2",
"assets/assets/games/dino/dino/dino_4.png": "c0cde8641992e7aacd52cfa00f9e2605",
"assets/assets/games/dino/dino/dino_5.png": "f067a25cbfa503f2945fdbd570235b5b",
"assets/assets/games/dino/dino/dino_6.png": "5280e1adedcfe9a155ad00579d2a253a",
"assets/assets/games/dino/dino/dino_2.png": "59fa2ac70fd824d17db670293cc78eff",
"assets/assets/games/dino/dino/dino_3.png": "96b0ea8d7b27a2f6ab7acc167090e4eb",
"assets/assets/games/dino/dino/dino_1.png": "0ac2110bb26b1d0cdd5dbf7a606ef2c0",
"assets/assets/games/dino/cloud.png": "1194dac984fe89ce7dddf45bc938f6b2",
"assets/assets/games/dino/ground.png": "db55805383a6be5b4dc79cfc072c81d8",
"assets/assets/games/dino/dino_all.png": "509588200e431bed5d733c9addfa900c",
"assets/assets/games/dino/cacti/cacti_small_1.png": "897831ff6817113c6100553c4c88c5b9",
"assets/assets/games/dino/cacti/cacti_small_2.png": "17e03de1680df08597b239f7eef84b6d",
"assets/assets/games/dino/cacti/cacti_small_3.png": "49d60652da7a8a1387162e8cfad8a9df",
"assets/assets/games/dino/cacti/cacti_group.png": "9f25b62bfa16295c0404836c03cea132",
"assets/assets/games/dino/cacti/cacti_large_2.png": "2ba073b2d4e9867e42d6b405255e5217",
"assets/assets/games/dino/cacti/cacti_large_1.png": "7f7ab49cb01f305c3c172b6d545834e9",
"assets/assets/games/snake.png": "46f1d58a2e0923a4f7f095e6b8f1d0de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
