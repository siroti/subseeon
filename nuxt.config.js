
import { analyticsMiddleware } from 'vue-analytics'

const webpack = require('webpack');

export default {
    
    target: 'static',
    ssr: true,

    generate: {
        fallback: true
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { 'http-equiv':  'Content-Security-Policy', content:'upgrade-insecure-requests' },
            { hid: 'description', name: 'description', content: '' },
            { property: 'fb:app_id', content: '2744542915835221' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
          /*  { rel: 'preconnect', href: 'https://www.google-analytics.com' },
            { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
            { rel: 'preconnect', href: 'https://connect.facebook.net' },
            { rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
            { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
            { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },*/
            
        ],
        htmlAttrs: {
            lang: 'pt-br'
        },
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'assets/scss/style.scss',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/async-scripts.js',
       '~/plugins/vue-awesome-swiper.js',
        '~/plugins/silentbox.js',
        '~/plugins/vue2-google-maps.js',
       // '~/plugins/vuejs-paginate.js',
       // '~/plugins/vue-select.js',
        '~/plugins/vue-inline-svg.js',
        {
            src: "~/plugins/vue-carousel.js",
            ssr: false
        },
        {
            src: "~/plugins/vuelidate.js",
        },
       /* {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: true
        },*/
        {
            src: '~plugins/vue-backtotop.js',
            ssr: false
        },
        {
            src: '~plugins/mascara.js',
            ssr: false
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        'nuxt-purgecss',
    ],

    purgeCSS: {
        mode: 'postcss',
        enabled: false, // or `false` when in dev/debug mode
        paths: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js'
        ],
        styleExtensions: ['.css','.scss'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        extractors: [
            {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['html', 'vue', 'js']
            }
        ]
     },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [       
        '@nuxtjs/robots',
        'nuxt-speedkit',
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/color-mode',
        '@nuxtjs/sitemap',
        'vue-sweetalert2/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/recaptcha',
        '@nuxt/image',

        ['nuxt-cookie-control',{   
            barPosition: 'bottom-right',
            colors: {
                barTextColor: '#333',
                modalOverlay: '#fff',
                barBackground: 'none',
                barButtonColor: '#fff',
                modalTextColor: 'blue',
                modalBackground: '#fff',
                modalOverlayOpacity: 0.8,
                modalButtonColor: '#000',
                modalUnsavedColor: '#000',
                barButtonHoverColor: '#ffff',
                barButtonBackground: '#5D5FEF',
                modalButtonHoverColor: '#000',
                modalButtonBackground: '#fff',
                controlButtonIconColor: '#fff',
                controlButtonBackground: '#000',
                barButtonHoverBackground: '#4447ed',
                checkboxActiveBackground: '#fff',
                checkboxInactiveBackground: '#fff',
                modalButtonHoverBackground: '#333',
                checkboxDisabledBackground: '#ddd',
                controlButtonIconHoverColor: '#fff',
                controlButtonHoverBackground: '#fff',
                checkboxActiveCircleBackground: '#000',
                checkboxInactiveCircleBackground: '#000',
                checkboxDisabledCircleBackground: '#000',
            },
            //controlButton: false,
            consentModel: 'opt-in',
            settingsStyle: 'tab',
            text: {
                barTitle: 'Configurações de cookies', 
                barDescription: 'Ao navegar nesse site, você aceita os cookies que usamos para melhorar sua experiência e promover marketing personalizado, conforme nossos <a href="/lgpd/termos-de-uso/">Termos de Uso</a> e <a href="/lgpd/politica-de-privacidade/ d-inline">Política de privacidade</a>',
                acceptAll: 'Aceitar todos', 
                declineAll: 'Excluir tudo',
                close: 'X',
                save: 'Salvar',
                manageCookies: 'Gerenciar cookies', 
                privacyPolicy: 'Política de Privacidade', 
            },

            styles: {
                ModalContent: {
                padding: '20px',
                },
                ModalButtons: {
                color: '#fff',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                cursor: 'pointer',
                marginRight: '10px',
                transition: 'background-color 0.3s ease',
                },
                ModalButtonsHover: {
                backgroundColor: '#0056b3',
                },
                ModalText: {
                color: '#333',
                fontSize: '16px',
                lineHeight: '1.5',
                },
            },

            cookies: {
                necessary: [
                    {
                        name: 'session',
                        description: 'Session cookie',
                        cookies: ['session']
                    }
                ],
                optional: [{
                    name: 'tag-manager',
                    description: 'Google Tag Manager',
                    cookies: ['_ga', '_gid'], // Ajuste os cookies conforme necessário
                    accepted: () => {
                        // Initialize Google Tag Manager
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-W2NQZCDR');
                    },
                    declined: () => {
                        // Disable Google Tag Manager (if necessary)
                        // This example clears the cookies; adjust according to GTM usage
                        document.cookie = '_ga=; Max-Age=-99999999;';
                        document.cookie = '_gid=; Max-Age=-99999999;';
                        // Optionally, you may want to remove GTM script from the DOM
                        // Check your implementation specifics for full removal
                    }
                }]
            }
        }],
       '@nuxtjs/gtm',
        ["nuxt-compress",{
            gzip: {
                cache: true
            },
            brotli: {
                threshold: 10240
            }
        }]   
    ],
    i18n: {
        locales: ['pt'],
        defaultLocale: 'pt',
        vueI18n: {
          fallbackLocale: 'pt',
          messages: {
            pt: require('./locales/pt.json'),
          }
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', 
        }
      },
      recaptcha: {
        hideBadge: true,
        siteKey: '6LfZmUwpAAAAAG02xnkW5C4naYptCxypNjZV66CS', 
        version: 3
    },
    gtm: {
        id: 'GTM-W2NQZCDR',  // Substitua pelo seu ID do GTM
        enabled: false, // Inicialmente desabilitado, será ativado via consentimento do usuário
    },
    robots: {
        UserAgent: '*',
        Disallow: '/en/*',
        Disallow: '/es/*',
        Disallow: '/_nuxt/*',
        Sitemap: "https://subseeon.com/sitemap.xml"
    },
    
    router: {
        trailingSlash: true
    },
    speedkit: {
        detection: {
          performance: true,
          browserSupport: true
        },
        performanceMetrics: {
          device: {
            hardwareConcurrency: { min: 2, max: 48 },
            deviceMemory: { min: 2 }
          },
          timing: {
            fcp: 800,
            dcl: 1200
          }
        },
        componentAutoImport: false,
        componentPrefix: undefined,
        /**
         * IntersectionObserver rootMargin for Compoennts and Assets
         */
        lazyOffset: {
          component: '0%',
          asset: '0%'
        },
    
        loader: {
          dataUri: null,
          size: '100px',
          backgroundColor: 'grey'
        }
        
      },
      image: {
        screens: {
          default: 320,
          xxs: 480,
          xs: 576,
          sm: 768,
          md: 996,
          lg: 1200,
          xl: 1367,
          xxl: 1600,
          '4k': 1921
        },
    
        domains: ['img.youtube.com', 'i.vimeocdn.com'],
    
        alias: {
          youtube: 'https://img.youtube.com',
          vimeo: 'https://i.vimeocdn.com',
        }
    },

    sitemap: {
        hostname: 'https://subseeon.com',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
          }
    },


    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss'
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend (config, ctx) {
        },
        babel: {
            compact: true
        },
        analyze: process.env.APP_BUILD_ANALYZE,
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /pt-br/)
        ],
        /*optimization: {
            splitChunks: {
                chunks: 'async',
            }
        },*/

        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'async',
                automaticNameDelimiter: '.',
                name: true,
                maxSize: 120000,
                cacheGroups: {
                    vendor: {
                        name: 'node_vendors',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'async',
                        maxSize: 120000
                    }
                }
            }
        },
       splitChunks: {
            pages: true,
            vendor: true,
            commons: true,
            runtime: true,
            layouts: true
        },
        transpile: [/^vue2-google-maps($|\/)/],
       
    },
    render: {
        static: {
            maxAge: 3600,
        }
    },
    "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate"
    },
    "dependencies": {
        "@chenfengyuan/vue-carousel": "^2.0.0",
        "@fancyapps/ui": "^4.0.26",
        "@nuxt-modules/cache": "^0.1.0",
        "@nuxtjs/component-cache": "^1.1.6",
        "@nuxtjs/gtm": "^2.4.0",
        "@nuxtjs/i18n": "^7.3.1",
        "@nuxtjs/recaptcha": "^1.1.2",
        "@nuxtjs/robots": "^2.5.0",
        "@nuxtjs/sitemap": "^2.4.0",
        "@nuxtjs/style-resources": "^1.2.1",
        "aos": "^2.3.4",
        "axios": "^0.26.1",
        "bootstrap": "^5.3.0",
        "bootstrap-vue": "^2.21.2",
        "core-js": "^3.18.2",
        "cpf-cnpj-validator": "^1.0.3",
        "nuxt": "^2.15.8",
        "nuxt-cookie-control": "^1.9.91",
        "nuxt-lazy-load": "^1.3.0",
        "nuxt-speedkit": "^2.0.6",
        "parallax-js": "^3.1.0",
        "rellax": "^1.12.1",
        "swiper": "^5.4.5",
        "vue": "^2.6.14",
        "vue-analytics": "^5.22.1",
        "vue-awesome-swiper": "^4.1.1",
        "vue-backtotop": "^1.6.1",
        "vue-carousel": "^0.18.0",
        "vue-gtag": "^1.16.1",
        "vue-image-lightbox-carousel": "^1.0.7",
        "vue-inline-svg": "^2.0.0",
        "vue-lazy-hydration": "^2.0.0-beta.4",
        "vue-picture-swipe": "^2.1.0",
        "vue-select": "^3.13.0",
        "vue-silentbox": "^2.4.5",
        "vue-sweetalert2": "^5.0.5",
        "vue-the-mask": "^0.11.1",
        "vue-typed-js": "^0.1.2",
        "vue2-google-maps": "^0.10.7",
        "vuejs-paginate": "^2.1.0",
        "vuelidate": "^0.7.7"
    },
    "devDependencies": {
        "@fullhuman/postcss-purgecss": "^4.1.3",
        "@nuxt/image": "^0.7.1",
        "@nuxtjs/color-mode": "^2.1.1",
        "@nuxtjs/google-analytics": "^2.4.0",
        "nuxt-compress": "^5.0.0",
        "nuxt-purgecss": "^1.0.0",
        "postcss": "^8.4.12",
        "purgecss-webpack-plugin": "^4.1.3",
        "sass": "^1.42.1",
        "sass-loader": "^10.2.0",
        "webpack": "^4.46.0"
    }
}