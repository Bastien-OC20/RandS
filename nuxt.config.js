
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  static: {
    prefix: false
  },
  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sébastien Rapuzzi | Développeur web frontend, à votre service !',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        ie: 'edge'
      },
      { name: 'Author', content: 'Sébastien Rapuzzi' },
      { name: 'Publisher', content: 'Vue.js + Nuxt.js' },
      { name: 'theme-color', content: '#000' },
      {
        property: 'og:url',
        content: 'https://rands.netlify.app/'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'R&S - Web | e-portfolio de Sebastien Rapuzzi'
      },
      {
        name: 'description',
        content:
          'Portfolio de Sébastien Rapuzzi | developpeur Web frontend junior à marseille et à ses environs. Développement en CSS3, Html5, SaSS, Framework Boostrap, JavaScript, Angular.JS, Express.JS, Node.JS, NPM, Vue.JS et Nuxt.JS'
      },
      {
        property: 'og:description',
        content:
          'Portfolio de Sébastien Rapuzzi | developpeur Web frontend junior à marseille et à ses environs. Développement en CSS3, Html5, SaSS, Framework Boostrap, JavaScript, Angular.JS, Express.JS, Node.JS, NPM, Vue.JS et Nuxt.JS'
      },
      { name: 'twitter:card', content: 'website' },
      { name: 'twitter:site', content: '@S3baast1en' },
      { name: 'twitter:creator', content: '@S3baast1en' },
      {
        name: 'twitter:title',
        content: 'R&S - Web | e-portfolio de Sebastien Rapuzzi'
      },
      {
        name: 'twitter:description',
        content:
          'Portfolio de Sébastien Rapuzzi | developpeur Web frontend junior à marseille et à ses environs. Développement en CSS3, Html5, SaSS, Framework Boostrap, JavaScript, Angular.JS, Express.JS, Node.JS, NPM, Vue.JS et Nuxt.JS'
      },
      {
        name: 'twitter:image',
        content:
          'https://rands.netlify.app/logo-rands.png'
      },
      // google search console
      {
        name: 'google-site-verification',
        content: '2wGkRx0bGhKXBm2TJGiUxICEtrstf13Ohpgz-oYkdFQ'
      },
      {
        name: 'keywords',
        content:
          'R and S - web, Marseille, Aubagne, la penne sur huveaune, Gémenos, Pont de l\'étoile, bouches du rhône, PACA, Portfolio de Sébastien Rapuzzi, developpeur Web frontend junior à marseille et à ses environs, Développement, front-end, backend , backend, site internet, site web, web , internet, CSS3, Html5, SaSS, Framework Boostrap, JavaScript, Angular.JS, Express.JS, Node.JS, NPM, Vue.JS et Nuxt.JS, developpeur freelance, développeur web freelance, developpement web, trouver un développeur web, cherche développeur web, site web developpeur, recherche développeur web freelance, freelance dev web, mission freelance developpeur web, développeur web indépendant, mission, freelance, SEO, OWASP, RGDP, WCAG, W3C, Lighthouse '
      },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      {
        rel: 'canonical',
        href: 'https://rands.netlify.app/'
      },
      { rel: 'apple-touch-icon', href: './favicon.ico' },
      {
        rel: 'StyleSheet',
        href:
          'https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-LBSV9M902G'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-LBSV9M902G'
    }
  },

  debug: {
    enabled: true,
    sendHitTask: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-helmet',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-purgecss',
    ['nuxt-mail', {
      smtp: {
        host: 'in-v3.mailjet.com',
        port: 587
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    assetsPublicPath: '/',
    extend (config) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'))

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i

      return config
    }
  },
  robots: [
    {
      UserAgent: '*',
      Disallow: '/'
    }
  ],
  sitemap: {
    hostname: 'https://rands.netlify.app/',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/Work',
      '/Contact',
      '/About'
    ]
  },
  gtm: {
    id: 'GTM-5NFW2SS'
  },

  loading: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  purgeCSS: {

  }
}
