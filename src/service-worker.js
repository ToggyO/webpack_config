/* eslint-disable */
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// workbox.routing.registerRoute(
//     'https://magora-react-university-api.herokuapp.com/categories',
//     new workbox.strategies.NetworkFirst({
//         cacheName: 'todo',
//     })
// );

workbox.precaching.precacheAndRoute(self.__precacheManifest);
