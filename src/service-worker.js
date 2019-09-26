/* eslint-disable */
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
    'https://jsonplaceholder.typicode.com/todos',
    new workbox.strategies.NetworkFirst({
        cacheName: 'todo',
    })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
