const baseUrlFunction = () => {
  if (process.env.BUILD_MODE === 'dev') {
    return '//localhost:3000'
  }
  if (process.env.BUILD_MODE === 'prod') {
    return 'https://my-portfolio-beta-rose.vercel.app'
  }
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  router: {
    // base: ''
    // scrollBehavior (to) {
    //   if (to.hash) {
    //     return window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth'
    //     })
    //   }
    //   return window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lucas Pineda | Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Remote Front End Developer for hire based in Sao Paulo' },
      { name: 'msvalidate.01', content: '096A34C194625F23C154763C283DDD69' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/global.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' }
    { src: '~plugins/clarity.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: baseUrlFunction()
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
  // googleAnalytics: {
  //   // Options
  //   googleAnalytics: {
  //     id: 'G-P2NE29Q5V3'
  //   }
  // }
}
