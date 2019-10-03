/* eslint-disable */
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/todos'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'todo',
    })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
