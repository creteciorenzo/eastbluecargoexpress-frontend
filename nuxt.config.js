export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'EastBlue Cargo Express',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#f1f1f1' },
      {
        name: 'msapplication-TileColor',
        content: 'favicons/ms-icon-144x144.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: 'favicons/android-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: 'favicons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'favicons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'favicons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'favicons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'favicons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'favicons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicons/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: 'favicons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: 'favicons/manifest.json',
      },
      {
        rel: 'canonical',
        href: 'https://eastbluecargoexpress.ph/',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      rel: 'stylesheet',
      src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
    },
    {
      rel: 'stylesheet',
      src: 'assets/fonts.css',
    },
    {
      rel: 'stylesheet',
      src: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    },
  ],

  script: [
    {
      src: 'node_modules/bjquery/dist/jquery.min.js',
      type: 'text/javascript',
    },
    {
      src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
      type: 'text/javascript',
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/Error.vue'),
      })
    },
  },
}
