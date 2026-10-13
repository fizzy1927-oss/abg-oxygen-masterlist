/* Pocket Pulmo offline support.
   - Pages: network first. Online you always get the latest version (and the saved copy is refreshed);
     offline, or if the network takes longer than a few seconds, the saved copy is used.
   - Fonts and icons: served from the saved copy, refreshed in the background.
   The version below changes every time the site is rebuilt, which clears out old saved copies. */
var VERSION = "14e1e9ab34f4";
var CACHE = "pocket-pulmo-" + VERSION;
var FONTS = "pocket-pulmo-fonts";
var PAGES = ["./", "index.html", "abg-o2.html", "abg-practice.html", "formulas.html", "gas.html", "sounds.html", "o2-cases.html", "med-cases.html", "math-quiz.html", "meds.html", "review.html", "vent.html", "assess.html", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png"];
var TIMEOUT_MS = 4000;

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(PAGES.map(function (p) { return new Request(p, { cache: "reload" }); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE && k !== FONTS; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function fromNetwork(req, cacheName) {
  return fetch(req).then(function (res) {
    if (res && (res.ok || res.type === "opaque")) {
      var copy = res.clone();
      caches.open(cacheName).then(function (c) { c.put(req, copy); });
    }
    return res;
  });
}

function networkFirst(req) {
  return new Promise(function (resolve, reject) {
    var done = false;
    var fallback = function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) {
        return hit || caches.match("index.html");
      });
    };
    var timer = setTimeout(function () {
      fallback().then(function (hit) { if (hit && !done) { done = true; resolve(hit); } });
    }, TIMEOUT_MS);
    fromNetwork(req, CACHE).then(function (res) {
      clearTimeout(timer);
      if (!done) { done = true; resolve(res); }
    }).catch(function () {
      clearTimeout(timer);
      fallback().then(function (hit) {
        if (done) return;
        done = true;
        hit ? resolve(hit) : reject(new Error("offline and not saved"));
      });
    });
  });
}

function cacheFirst(req, cacheName) {
  return caches.match(req).then(function (hit) {
    var net = fromNetwork(req, cacheName).catch(function () { return hit || Response.error(); });
    return hit || net;
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(cacheFirst(req, FONTS));
  } else if (url.origin === self.location.origin) {
    if (req.mode === "navigate" || /\.html$|\/$/.test(url.pathname)) e.respondWith(networkFirst(req));
    else e.respondWith(cacheFirst(req, CACHE));
  }
});
