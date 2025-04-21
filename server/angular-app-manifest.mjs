
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nevoGeva.github.io/angular-build/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-build"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 529, hash: '73489432289e4b19002ae4049bca26ef829ba4d1c6ca052bfe43479e44c6223c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1042, hash: '7330e86a2d3e326f11e8cdcfaedb505fc6ffcc5031e0781536ca4b05137d8a87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1415, hash: '9a6be62c9368c954fccfc86c592fc32fbbabea5c2a8f2b5d37f075895ef24a34', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
