<template>
    <div class="pageHome">
        <LazyHydrate when-visible>
            <Header />
        </LazyHydrate>
       <LazyHydrate when-visible>
            <MobileHeader />
       </LazyHydrate>  
            <div class="d-flex align-items-center justify-content-center bg-primary py-2 py-md-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-5 text-center">
                            <img src="/images/sub100/404.svg" width="400" height="377" alt="tela-404" title="Erro 404"/>
                        </div>
                        <div class="col-12 col-md-7">
                            <h1 class="text-white lh-1 fs-1 fw-bold pt-5 mb-3">Oh não!<br>Parece que você se perdeu...</h1>
                            <p class="fs-5 my-3 text-white">A pagina que você está tentando acessar não foi encontrada.</p>
                            <div>
                                <n-link to="/" aria-label="voltar-pagina-principal" title="Voltar para a página principa" class="btn btn-secondary mt-4">
                                    <span class="button-text">Voltar para a página principal</span>
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            Footer: () => import('@/components/sub100/Footer'),
        },
        props: ['error'],
        data() {
           let url = 'https://subseeon.com/404/';
           if(process.client) {
                url = window.location.href;
            }
            return {
                url: url,
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": url,
                            "url": url,
                            "name": this.$t('head.404.title'),
                            "description": this.$t('head.404.description'),
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
                                    url
                                ]
                            }
                            ]
                        },
                        
                        
                    ]
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
                title:  'Erro 404 é um código HTTP que informa página não encontrada',
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
                        content:   'Se você encontrou o erro 404, isso significa que a página solicitada não pode ser encontrada em nosso site.'
                        },
                
                        { hid: 'googlebot', name: 'googlebot', content: 'noindex, follow' }
                    ]
                    }
        },
    };
</script>