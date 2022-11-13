import fs from 'fs';
import en from './src/locales/en.json';

export default {
  target: 'static',
  /** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Gretly',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/global.ts',
      ssr: false,
    },
    {
      src: '~/plugins/lastRouterPath',
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  srcDir: 'src/',
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { path: './' }],
    'nuxt-typed-vuex',
    '@nuxtjs/composition-api/module',
  ],
  build: {
    loaders: {
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', 'nuxt-i18n', '@nuxtjs/proxy', '@nuxtjs/toast', '@nuxtjs/style-resources'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      messages: {
        en,
      },
    },
  },
  // extend routes
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, '@/pages/not-found.vue'),
      });
    },

    prefetchLinks: true,
  },
  server: {
    https: {
      key: fs.readFileSync('cert/server.key'),
      cert: fs.readFileSync('cert/server.crt'),
    },
  },
  pwa: {
    icon: true,
  },
  loader: {
    color: '#5c00fa',
  },
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#5c00fa',
    background: 'white',
  },
  toast: {
    iconPack: 'fontawesome',
    position: 'bottom-left',
  },
  watch: ['@/locales'],
  styleResources: {
    scss: ['@/assets/scss/*.scss'],
  },
};
