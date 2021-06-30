import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - learning',
    title: 'learning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      {
    src: '~/node_modules/highlight.js/styles/qtcreator-light.css',
    lang: 'css'
  },

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-highlightjs'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
      [
      '@nuxtjs/firebase',
      {
        config:{
          apiKey: "AIzaSyDu2Y59BA1E-UwuJVkofBVmOjc7aHIQChk",
          authDomain: "learn-nuxt-c81f5.firebaseapp.com",
          projectId: "learn-nuxt-c81f5",
          storageBucket: "learn-nuxt-c81f5.appspot.com",
          messagingSenderId: "916176309698",
          appId: "1:916176309698:web:4d7ae47c5ede0fa5255a5b",
          measurementId: "G-10FYYP5V4V"
          },
          services: {
            auth: true // Just as example. Can be any other service.
          }
      }
      ],
    ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server: {
    port:8080,
  },
}
