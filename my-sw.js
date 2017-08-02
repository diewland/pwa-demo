importScripts('./sw-toolbox/sw-toolbox.js');

// 20170802 - remove theme_color from manifest

// cache during service-worker install step
toolbox.precache([
  'css/app.css',
  'img/pwa-reliable.png'
]);
toolbox.router.get('css/*', toolbox.cacheFirst);
toolbox.router.get('img/*', toolbox.cacheFirst);

// cache during service-worker active step
toolbox.router.get('', toolbox.cacheFirst);
toolbox.router.get('js/*', toolbox.cacheFirst);
