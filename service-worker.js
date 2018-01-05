"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","4997eac5d54400157aa76094d435993c"],["/portfolio/static/css/main.63477ad1.css","145f2aeac0bc5bef959c3d016e92ba5c"],["/portfolio/static/js/main.2805f9b1.js","2c37f72357da18b6443311afbca3069b"],["/portfolio/static/media/chippmunk-1.d56ad150.png","d56ad1501b1b21a44ecd00130ee2ef3b"],["/portfolio/static/media/chippmunk-2.7b83b8f9.png","7b83b8f976127c6646ecbaf260e0a068"],["/portfolio/static/media/chippmunk-3.f9af1128.png","f9af1128901912eb461068a6343cb9f5"],["/portfolio/static/media/chippmunk-4.8800bd12.png","8800bd1246df893bd8c491cefd95d424"],["/portfolio/static/media/contacts.cbbf4660.jpg","cbbf4660959754d7c13a6e9fff64963f"],["/portfolio/static/media/exclusive-1.bfebcfeb.png","bfebcfeb8483eb4893c6d15978f8deae"],["/portfolio/static/media/exclusive-2.d4227155.png","d4227155f815fd8829ca74f8be278977"],["/portfolio/static/media/exclusive-3.d10a97d8.png","d10a97d8d25ca29ca5799f7c34ca40b8"],["/portfolio/static/media/exclusive-4.975f6c7c.png","975f6c7c441dc70cbd3dfde297867d9e"],["/portfolio/static/media/experience.7ac13254.jpg","7ac1325486a3cd4d68c408d64a11f3d5"],["/portfolio/static/media/goto-1.f6b3248c.png","f6b3248c0eeb0f688b2b26098fd387b7"],["/portfolio/static/media/goto-2.4076ef78.png","4076ef783fc242ef76678255a214c3c1"],["/portfolio/static/media/goto-3.4d23db99.png","4d23db9914e0885fded2855a18dae733"],["/portfolio/static/media/home.e99e6735.jpg","e99e6735a923d3266d97c577ac98675e"],["/portfolio/static/media/loading.4fc924ee.svg","4fc924eeb91e54a351b676d538290d3b"],["/portfolio/static/media/magiclinks-1.4cd67c3a.png","4cd67c3a834df1fc0d24b12c1f040b09"],["/portfolio/static/media/magiclinks-2.60b42e6a.png","60b42e6a592b3a5ba9493dd500a6ca01"],["/portfolio/static/media/magiclinks-3.72b4cff0.png","72b4cff0762548498b22cb5d9af701cf"],["/portfolio/static/media/magiclinks-4.00eaddf9.png","00eaddf9e5abda264f5fff039ac393e5"],["/portfolio/static/media/man-in-suit.f036a8a4.png","f036a8a4dd8b3aedbcd46896376820f3"],["/portfolio/static/media/openhousevideo-2.f5e96312.png","f5e96312603d0a00ae8a00ec97b874fd"],["/portfolio/static/media/openhousevideo-3.2756b968.png","2756b968687a3c56f4539b121ef37ad7"],["/portfolio/static/media/openhousevideo-4.0ba7ed32.png","0ba7ed325ed43bf74c69b1f4b4fa6d21"],["/portfolio/static/media/openhousevideo.25326a5f.jpg","25326a5fbb0f0810c99cb599f7595f74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});