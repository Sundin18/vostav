const pkg = require('./package')

module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', type: 'text/css', href: '/fonts/font-awesome/css/font-awesome.css'},
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
        ],
        script: [
            {src: "/js/jquery.1.11.1.js"},
            {src: "/js/bootstrap.js"},
            {src: "/js/SmoothScroll.js"},
            {src: "/js/nivo-lightbox.js"},
            {src: "/js/jqBootstrapValidation.js"},
            {src: "/js/contact_me.js"},
            {src: "/js/main.js"},
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        "~/assets/css/bootstrap.css",
        "~/assets/css/style.css",
        "~/assets/css/nivo-lightbox/nivo-lightbox.css",
        "~/assets/css/nivo-lightbox/default.css",
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/smooth-scroll', ssr: false},
        {src: '~/plugins/v-img', ssr: false},
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [,
        // Doc: https://bootstrap-vue.js.org/docs/
        // 'bootstrap-vue/nuxt'
    ],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },

    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x) => {
                return document.querySelector(hash) ||
                      new Promise((resolve, reject) => {
                          if (x > 50) {
                              return resolve()
                          }
                          setTimeout(() => {
                              resolve(findEl(hash, ++x || 1))
                          }, 100)
                      })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({top: el.offsetTop, behavior: 'smooth'})
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return {x: 0, y: 0}
        },
    }
}
