<template>
    <div class="intro5-section section">
        <div class="container">
            <div class="row intro5-content pt-5 pb-3 mb-4 mb-md-0 position-relative">
                <div class="col-12 col-md-6 desc d-flex flex-column justify-content-around order-2 order-md-1 pt-4 pt-md-0 pb-3 z-2">
                    <h1 class="fs-35 text-white fw-light lh-sm py-0 pb-md-3 px-2 px-md-0" v-html="$t('heroSistemas.title')"></h1>
                    <div class="fs-6 sistema text-white fw-light lh-md pt-0 pb-4 px-2 px-md-0">
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="crm-imobiliaras" :title="$t('heroSistemas.specialty.01')" class="me-2"/> <a href='/#crm_subsee' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.01')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="emprestimos-locacao" :title="$t('heroSistemas.specialty.02')" class="me-2"/> <a href='/crm-imobiliario/imoveis-locacao/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.02')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="crm-marketing-digital-imobiliario" :title="$t('heroSistemas.specialty.03')" class="me-2"/> <a href='https://sub100.com.br/' target="_blank" class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.03')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="melhor-lancamentos" :title="$t('heroSistemas.specialty.04')" class="me-2"/> <a href='/crm-imobiliario/imoveis-lancamentos/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.04')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="aintegracao-portais-imoveis" :title="$t('heroSistemas.specialty.05')" class="me-2"/> <a href='/crm-imobiliario/portais-imobiliarios/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.05')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="controle-venda" :title="$t('heroSistemas.specialty.06')" class="me-2"/> <a href='/crm-imobiliario/imoveis-venda/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.06')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="gerencie-temporada" :title="$t('heroSistemas.specialty.07')" class="me-2"/> <a href='/crm-imobiliario/imoveis-temporada/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.07')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="site-landing-pages" :title="$t('heroSistemas.specialty.08')" class="me-2"/> <a href='/crm-imobiliario/sites-hotsites/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.08')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="software-rurais" :title="$t('heroSistemas.specialty.09')" class="me-2"/> <a href='/crm-imobiliario/imoveis-rurais/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.09')"></a></h2>
                        <h2 class="d-flex align-items-start visto text-white fw-light"> <img src="/images/icons/visto.svg?55202404055" height="18" width="18" alt="leads-qualificados" :title="$t('heroSistemas.specialty.10')" class="me-2"/> <a href='/crm-imobiliario/melhor-localizacao/' class='text-light text-decoration-none' v-html="$t('heroSistemas.specialty.10')"></a></h2>
                    </div>
                        <a :href="localePath('/teste-gratis/')" aria-label="teste-gratis" :title="$t('heroSistemas.button')" class="btn btn-secondary col-12 col-md-9 px-4 d-flex fw-bold mt-1 mb-0 mb-md-4">{{ $t('heroSistemas.button') }}</a>
                    <div id="crm_subsee"></div>
                </div> 
                <div class="col-12 col-md-auto order-1 order-md-2">
                    <div class="mt-4 position-absolute top-0 end-0 homeSistema" >
                        <LazyHydrate when-visible>
                            <nuxt-img format="webp" quality="5"  src="/images/sub100/mobile540.png" preload width="316" height="325" alt="tela-crn-subsee-versao-mobile" title="Tela CRM SUBSEE para versão mobile" v-if="isMobile"/> 
                            <nuxt-img format="webp" quality="70" src="/images/sub100/mobile.png" preload width="750" height="630" alt="tela-crn-subsee-versao-mobile" title="Tela CRM SUBSEE para versão mobile" v-else/>
                        </LazyHydrate>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    h2.visto {font-size: 1.10rem; margin-bottom: 10px;}
    h2.visto img {margin-top: 2px;}
    .fs-35 { font-size: 35px;}
    @media #{$large-mobile} {
        .homeSistema {position:static !important;}
    }
</style>
<script>
    import LazyHydrate from 'vue-lazy-hydration';
    import fancybox from "@/mixins/fancybox.js"
    export default {
        name: 'ImageComponent',
        props: ['addClassName', 'imgSrc', 'dataDepth'],
        mixins:[fancybox],
        components: {
            LazyHydrate
        },
        name: 'PerformanceObserverComponent',
        data() {
            return {
                isMobile: false,
            };
        },
        mounted() {
            this.checkViewport();
            window.addEventListener('resize', this.checkViewport);
            // Create a new PerformanceObserver
            this.performanceObserver = new PerformanceObserver((list) => {
                // Get the latest entry from the performance observer list
                const latestEntry = list.getEntries().at(-1);

                // Check if the LCP element has a 'loading' attribute set to 'lazy'
                if (latestEntry?.element?.getAttribute('loading') === 'lazy') {
                    console.warn('Warning: LCP element was lazy loaded', latestEntry);
                }
            });

            // Observe the largest-contentful-paint entries
            this.performanceObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkViewport);
            // Disconnect the observer to prevent memory leaks
            if (this.performanceObserver) {
            this.performanceObserver.disconnect();
            }
        },
        methods: {
            checkViewport() {
            this.isMobile = window.innerWidth <= 767;
            },
        },
    };
</script>