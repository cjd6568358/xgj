/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/xgj/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/xgj/workbox-v3.6.3"});

importScripts(
  "/xgj/precache-manifest.b603775aa462bf100b8ffa7bbe844dac.js"
);

workbox.core.setCacheNameDetails({prefix: "xgj"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/xgj\/(tools|discuz|sign|password|my)$/, workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200,404]})] }), 'GET');
