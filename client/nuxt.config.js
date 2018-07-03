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
    ]
  },

  loading: { color: '#42A5CC' },

  router: {
    middleware: ['locale', 'check-auth']
  },

  css: [
    { src: 'flag-icon-css/css/flag-icon.min.css' },
    { src: 'font-awesome/css/font-awesome.min.css' },
    { src: 'simple-line-icons/css/simple-line-icons.css' },
    // { src: 'animate.css/animate.css' },
    { src: '~assets/css/animate.css', lang: 'css' },
    { src: '~assets/css/bootstrap.css', lang: 'css' },
    // { src: '~assets/css/style.css', lang: 'css' }
    { src: '~assets/less/style.less', lang: 'less' }
    // { src: 'bootstrap/scss/bootstrap.scss' }
  ],

  plugins: [
    '~components/global',
    '~plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/nuxt-client-init',
    // { src: '~plugins/jquery', ssr: false },
    { src: '~plugins/metisMenu', ssr: true },
    { src: '~/assets/js/jquery-3.1.1.min.js', ssr: false },
    { src: '~plugins/jquery-scroll', ssr: false },
    // { src: '~plugins/bootstrap.js', ssr: false },
    { src: '~/assets/js/bootstrap.js', ssr: false },
    { src: '~/assets/js/inspinia', ssr: false },
    { src: '~/assets/js/pace/pace.min.js', ssr: false },
    // { src: '~/assets/js/metisMenu/jquery.metisMenu.js', ssr: false },
    { src: '~plugins/bootstrap-vue.js', ssr: true }
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
    ]
  }
}
