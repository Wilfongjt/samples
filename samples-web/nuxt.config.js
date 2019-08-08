import pkg from './package'
// console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV)
// console.log('process.env.DEPLOY_ENV: ' + process.env.DEPLOY_ENV)
if (process.env.NODE_ENV !== 'production') {
  process.env.DEPLOY_ENV=''
  require('dotenv').config()
} else {
   // switch to
   process.env.DEPLOY_ENV='GH_PAGES'
}
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV)
console.log('process.env.DEPLOY_ENV: ' + process.env.DEPLOY_ENV)
// allow static app to run in root of host
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
   router: {
     base: '/'
   }
 } : {}
export default {
  ...routerBase,
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
