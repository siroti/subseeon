<template>
    <div class="pageHome">
        <LazyHydrate when-visible>
            <Header />
        </LazyHydrate>
       <LazyHydrate when-visible>
            <MobileHeader />
       </LazyHydrate> 
       <LazyHydrate when-visible>
            <PageBanner :title="name"/>
       </LazyHydrate>
       <LazyHydrate when-visible>
            <Products :category="id" :frase="description" :UrlProduts="Linkhref"/>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <Publicity/>
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
            PageBanner: () => import('@/components/sub100/contents/PageBanner'),
            Products: () => import('@/components/sub100/HeroPlataformaProducts'),
            Publicity: () => import('@/components/sub100/Publicity'),
            Footer: () => import('@/components/sub100/Footer'),
        },
        
        data() {
            let url = `https://subseeon.com/crm-imobiliario/sites-hotsites/`;
           if(process.client) {
                url = window.location.href;
            }
            const name = "Sites & Hotsites";
            const description =  "Modelos de sites, hotsites e landing pages para atender as necessidades do seu negócio.";
            const description1 = "Modelos de sites, hotsites e landing pages para atender as necessidades do seu negócio. Os sites & Hotsites são desenvolvidos para o mercado de imóveis Urbanos e imóveis Rurais. Os dois tipos de sites possuem características e peculiaridades que proporcionam autoridade na apresentação dos seus anúncios aos potenciais compradores.";
            return {
                url: url,
                id: "sitesHotsites",
                name: name,
                description: description,
                description1: description1,
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": url,
                            "url": url,
                            "name": name,
                            "description": description1,
                            "isPartOf": {
                              "@id": "https://subseeon.com/#website"
                            },
                            "about": {
                            "@id": "https://subseeon.com/#organization"
                            },
                            "datePublished": "2023-10-10T11:29:34+00:00",
                            "dateModified": "2024-05-20T05:44:30+00:00",
                            "breadcrumb": {
                                "@id": `${url}#breadcrumb`
                            },
                            "inLanguage": "pt-BR",
                            "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": [
                                    this.url
                                ]
                            }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": `${url}#breadcrumb`,
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "item":{
                                        "@id":"https://subseeon.com/",
                                        "name": "Home"
                                    }
                                },
                                {   "@type":"ListItem",
                                    "position":2,
                                    "item":{
                                        "@id":"https://subseeon.com/crm-imobiliario/",
                                        "name":"CRM Imobiliário"
                                    }
                                }
                                ,
                                {   "@type":"ListItem",
                                    "position":3,
                                    "item":{
                                        "@id": url,
                                        "name": name
                                    }
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
                        }
                    ]
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
                title: `${this.name}`,
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
                        content:   this.description1
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
                        content:   `${this.name}`
                        },
                        {
                        hid:       'og:description',
                        property:   'og:description',
                        content:    this.description1
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
    };
</script>