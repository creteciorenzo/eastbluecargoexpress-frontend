export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)

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
