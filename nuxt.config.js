import settings from './settings'

export default {
  mode: 'universal',
  // srcDir: __dirname,
  // buildDir: '_nuxt/app',
  //lambdaName: 'index',
  env: {
    baseUrl: process.env.BASE_URL || `${settings.baseAPIUrl}`,
  },
  loading: {
    color: '#e04950',
    height: '2px'
  },
  modules: [
    //'@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      baseUrl: 'https://www.example.com',
      seo: false,
      lazy: true,
      parsePages: false,
      detectBrowserLanguage: false,
      routesNameSeparator: '/',
      locales: [{
          code: 'tr',
          iso: 'tr',
          name: 'Turkish',
          file: 'tr.json',
        },
        {
          code: 'en',
          iso: 'en',
          name: 'English',
          file: 'en.json',
        },

      ],
      langDir: 'locales/',
      defaultLocale: 'tr',
      strategy: 'prefix_except_default',
      vueI18n: {
        fallbackLocale: 'tr',
        messages: {
          tr: require('./locales/tr.json'),
          en: require('./locales/en.json')
        }
      }
    }],
  ],
   plugins: [
    '~/plugins/filters'
  ],
  axios: {
    baseURL: 'https://api.hackerwebapp.com'
  },
  render: {
     http2: {
       push: true
     },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  },
  build:{
    //publicPath: '_nuxt/app',
  },
  router: {
  },

}
