/* eslint-disable */
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
    'https://jsonplaceholder.typicode.com/todos',
    new workbox.strategies.NetworkFirst({
        cacheName: 'todo',
    })
);

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'todo_page',
    })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
