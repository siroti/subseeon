<template>
    <div class="error404">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" alt="page-404" title="Pagina 404" src="/images/others/page-404-image.png?date20231013">
                    </div>
                    <h1 class="error-404-title text-white">Ooops! Página não encontrada!</h1>
                    <div class="error-buttons">
                        <a href="/" aria-label="Voltar para a página principal" class="btn btn-primary">
                            <span class="button-text">Voltar para a página principal</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
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
<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 60vh;
        align-items: center;
        justify-content: center;
        background-color: #5D5FEF;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 40px;
        margin-bottom: 30px;
        //res
        @media #{$extra-small-mobile} {
            font-size: 30px;
        }
    }
</style>