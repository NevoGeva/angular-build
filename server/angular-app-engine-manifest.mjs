
export default {
  basePath: 'https://nevoGeva.github.io/angular-build',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
