<template>
    <div class="pageHome">
        <LazyHydrate when-visible>
            <Header />
        </LazyHydrate>
       <LazyHydrate when-visible>
            <MobileHeader />
       </LazyHydrate>  

            <HeroSistemas />

        <LazyHydrate when-visible>
            <HeroNativo />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroPlataforma />
        </LazyHydrate>
            <HeroDepositions />
            <HeroPlan />
        <LazyHydrate when-visible>
            <Publicity /> 
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroFrequent /> 
        </LazyHydrate>
        <LazyHydrate when-visible>
            <Footer/>
        </LazyHydrate>
    </div>
</template>
<script>
    import LazyHydrate from 'vue-lazy-hydration';
    export default {
        components: {
            LazyHydrate,
            Header: () => import('@/components/sub100/Header'),
            MobileHeader: () => import('@/components/sub100/MobileHeader'),
            HeroSistemas: () => import('@/components/sub100/HeroSistemas'),
            HeroNativo: () => import('@/components/sub100/HeroNativo'),
            HeroPlataforma: () => import('@/components/sub100/HeroModule'),
            HeroDepositions: () => import('@/components/sub100/HeroDepositions'),
            HeroPlan: () => import('@/components/sub100/HeroPlan'),
            Publicity: () => import('@/components/sub100/Publicity'),
            HeroFrequent: () => import('@/components/sub100/HeroFrequent'),
            Footer: () => import('@/components/sub100/Footer'),
        },
        
        data() {
           let url = 'https://subseeon.com/';
           /*if(process.client) {
                url = window.location.href;
                if(url[url.length -1] === '/' && !url.endsWith("/en/") && !url.endsWith("/#crm_subsee") && !url.endsWith("/es/") && !url.endsWith("/#planos")) {
                    url = url.slice(0,  -1)
                }
            }*/
            if(process.client) {
                url = window.location.href;
            }
            const faq = this.$t('heroFrequent.frequents').map(faq => {
                return {
                    "@type": "Question",
                    "name": faq.title,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.desc
                    }
                }
            });
            return {
                url: url,
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": url,
                            "url": url,
                            "name": this.$t('head.home.title'),
                            "description": this.$t('head.home.description'),
                            "isPartOf": {
                              "@id": "https://subseeon.com/#website"
                            },
                            "about": {
                            "@id": "https://subseeon.com/#organization"
                            },
                            "datePublished": "2023-10-10T11:29:34+00:00",
                            "dateModified": "2024-05-20T05:44:30+00:00",
                            "breadcrumb": {
                            "@id": "https://subseeon.com/#breadcrumb"
                            },
                            "inLanguage": "pt-BR",
                            "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": [
                                    url
                                ]
                            }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://subseeon.com/#breadcrumb",
                            "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home"
                            }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://subseeon.com/#website",
                            "url": "https://subseeon.com/",
                            "name": "SUB100 Imobiliárias",
                            "description": "",
                            "publisher": {
                              "@id": "https://subseeon.com/#organization"
                            },
                            "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://subseeon.com/?s={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                            ],
                            "inLanguage": "pt-BR"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://subseeon.com/#organization",
                            "name": "SUB100 Imobiliárias",
                            "url": "https://subseeon.com/",
                            "logo": {
                            "@type": "ImageObject",
                            "inLanguage": "pt-BR",
                            "@id": "https://subseeon.com/#/schema/logo/image/",
                            "url": "https://subseeon.com/images/logo/dark-logo.svg",
                            "contentUrl": "https://subseeon.com/images/logo/dark-logo.svg",
                            "width": 160,
                            "height": 44,
                            "caption": "SUB100 Imobiliárias"
                            },
                            "image": {
                            "@id": "https://subseeon.com/#/schema/logo/image/"
                            },
                            "sameAs": [
                            "https://www.linkedin.com/company/sub100/",
                            "https://www.instagram.com/sub100brasil/",
                            "https://www.facebook.com/sub100brasil/"
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faq
                        }
                    ]
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
                title: this.$t('head.home.title'),
                link:[
                    {
                        rel:    'canonical', 
                        href:   this.url
                    }
                ],
                meta:[
                    {
                        hid:      'description',
                        name:     'description',
                        content:   this.$t('head.home.description'),
                        },
                        {
                        hid:       'og:url',
                        property:  'og:url',
                        content:    this.url
                        },
                        {
                        hid:       'og:type',
                        property:   'og:type',
                        content:    "website"
                        },
                        {
                        hid:       'og:title',
                        property:  'og:title',
                        content:   this.$t('head.home.title'),
                        },
                        {
                        hid:       'og:description',
                        property:   'og:description',
                        content:    this.$t('head.home.description'),
                        },
                        {
                        hid:       'og:image',
                        property:  'og:image',
                        content:   "https://subseeon.com/images/sub100/sub100imobiliarias.png"
                        },
                        {
                        hid:       'twitter:site',
                        name:      'twitter:site',
                        content:   '@sub100brasil'
                        },
                        {
                        hid:       'twitter:card',
                        name:      'twitter:card',
                        content:   'summary'
                        },
                        { hid: 'googlebot', name: 'googlebot', content: 'index, follow' }
                    ]
                }
        },
        methods: {
            setMyCookie() {
                this.$cookies.set('cookie-name', 'value', {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                    sameSite: this.$t('head.home.title'),
                    secure: true
                });
            }
        }
            
    };
</script>