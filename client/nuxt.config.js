require('dotenv').config()
const webpack = require('webpack')
const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

module.exports = {
  mode: 'spa',
  srcDir: __dirname,

  env: {
    apiUrl: process.env.APP_URL || 'http://api.laravel-nuxt.test',
    appName: process.env.APP_NAME || 'Laravel-Nuxt',
    appLocale: process.env.APP_LOCALE || 'en',
    githubAuth: !!process.env.GITHUB_CLIENT_ID
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` }
      // { src: `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.js` }
    ]
  },

  loading: { color: '#1ab394' },

  router: {
    middleware: ['locale', 'check-auth']
  },

  css: [
    { src: 'flag-icon-css/css/flag-icon.min.css' },
    { src: 'font-awesome/css/font-awesome.min.css' },
    { src: 'simple-line-icons/css/simple-line-icons.css' },
    // { src: 'vue2-animate/src/sass/vue2-animate.scss' },
    // { src: 'animate.css/animate.css' },
    { src: 'vue2-datatable-component/dist/min.css' },
    { src: '~assets/css/animate.css', lang: 'css' },
    { src: '~assets/css/bootstrap.css', lang: 'css' },
    { src: 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css' },
    // { src: '~assets/css/style.css', lang: 'css' }
    { src: '~assets/less/style.less', lang: 'less' }
    // { src: 'bootstrap/less/bootstrap.less', lang: 'less' }
  ],

  plugins: [
    '~components/global',
    // '~components/Datatable',
    '~plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/nuxt-client-init',
    { src: '~plugins/jquery' },
    { src: '~plugins/metisMenu' },
    // { src: '~/assets/js/jquery-3.1.1.min.js', ssr: false },
    { src: '~plugins/jquery-scroll' },
    { src: '~plugins/bootstrap.js' },
    { src: '~plugins/vue-datatable.js' },
    { src: '~plugins/datepicker.js', ssr: false }
    // { src: 'bootstrap-datepicker/js/bootstrap-datepicker.js', ssr: false }
    // { src: '~plugins/boostrap-date', ssr: true }
    // { src: '~/assets/js/bootstrap.js', ssr: false }
    // { src: '~/assets/js/pace/pace.min.js', ssr: true }
    // { src: '~/assets/js/metisMenu/jquery.metisMenu.js', ssr: false }
    // { src: '~plugins/bootstrap-vue.js', ssr: true }
  ],

  modules: [
    '@nuxtjs/router',
    '~/modules/spa'
  ],

  build: {
    extractCSS: true,
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    vendor: [
      '~/assets/js/inspinia.js'
    ]
  }
}
