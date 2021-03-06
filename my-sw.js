importScripts('./sw-toolbox/sw-toolbox.js');

// latest update: make code readable

// cache during service-worker install step
toolbox.precache([
  'css/app.css',
  'img/pwa-reliable.png'
]);
toolbox.router.get('css/*', toolbox.networkFirst);
toolbox.router.get('img/*', toolbox.networkFirst);

// cache during service-worker active step
toolbox.router.get('', toolbox.networkFirst); // index
toolbox.router.get('index.html', toolbox.networkFirst);
toolbox.router.get('js/*', toolbox.networkFirst);
