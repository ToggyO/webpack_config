/* eslint-disable */
// @ts-ignore
workbox.core.skipWaiting();
// @ts-ignore
workbox.core.clientsClaim();
// @ts-ignore
workbox.routing.registerRoute(
    'https://jsonplaceholder.typicode.com/todos',
    // @ts-ignore
    new workbox.strategies.NetworkFirst({
        cacheName: 'todo',
    })
);
// @ts-ignore
workbox.routing.registerRoute(
    new RegExp('/*'),
    // @ts-ignore
    new workbox.strategies.NetworkFirst({
        cacheName: 'todo_page',
    })
);
// @ts-ignore
workbox.precaching.precacheAndRoute(self.__precacheManifest);
