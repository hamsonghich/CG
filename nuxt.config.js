export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CG',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/font.css',
    '~/assets/icon/font-awesome-6-pro-main/css/all.css',
    '~/assets/style/global.scss',
    '~/assets/style/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/Firebase/index.js',
    '~/plugins/Component/InputWebComponent.js',
    '~/plugins/Component/PaginationWebComponent.js',
    '~/plugins/Component/AutocompleteWebComponent.js',
    '~/plugins/Component/vue-simple-suggest',
    '~/plugins/Component/AccordionWebComponent.js',
    '~/plugins/Component/ButtonWebComponent.js',
    '~/plugins/Component/SelectWebComponent.js',
    '~/plugins/Component/StarWebComponent.js',
    '~/plugins/Component/CardDetailWebComponent.js',
    '~/plugins/Component/ModalYNWebComponent.js',
    '~/plugins/Component/AccordionAdminWebComponent.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server:{
    port: 2511
  },
  styleResources: {
    scss: [
      '~/assets/style/*.scss',
    ]
  }
}
