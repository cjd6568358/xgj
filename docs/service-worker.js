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

importScripts("/xgj/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/xgj/workbox-v4.3.1"});

importScripts(
  "/xgj/precache-manifest.16f4f6cd50ba88e1eaf3c98b96335ee8.js"
);

workbox.core.setCacheNameDetails({prefix: "xgj"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/xgj\/(tools|discuz|sign|password|my)$/, new workbox.strategies.NetworkFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200, 404 ] })] }), 'GET');
