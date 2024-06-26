<template>
    <div class="position-relative mb-3 mb-lg-5">
        <div class="container">
            <div class="align-items-center py-1 py-md-5">
                <div class="faq-content-area">
                    <div class="section-title text-center mb-0" data-aos="fade-up">
                        <h3>
                            <div class="title text-dark mb-2 mb-md-0" v-html="$t('heroNativo.title')"></div>
                            <div class="fz-sm-18 fs-3 mb-4 mb-md-0 fw-normal d-block" v-html="$t('heroNativo.subtitle')"></div>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-block d-lg-none">
            <nuxt-img v-if="isMobile" src="/images/sub100/mobileNativa820.png" alt="tela-do-crm-imobiliario-subsee-para-desktop" title="Tela do CRM imobiliario SUBSEE para desktop" width="100%" height="100%" format="webp" quality="60" loading="lazy" preload /> 
            <nuxt-img v-else src="/images/sub100/mobileNativa540.png" alt="tela-do-crm-imobiliario-subsee-para-desktop" title="Tela do CRM imobiliario SUBSEE para desktop" width="100%" height="100%" format="webp" quality="60" loading="lazy" preload /> 
        </div>
        <div class="d-none d-lg-block">
            <div class="container" >
                <div class="d-flex">
                    <div class="position-relative col-auto justify-content-center d-flex"> 
                        <img src="/images/sub100/setaCurva.svg" width="250" height="120" alt="seta-mostrando-a-visao-da-tela-do-crm-no-celular" title="Seta mostrando a visão da tela do CRM no celular" class="position-absolute z-3 start-100 translate-middle seta"/>
                        <NuxtImg format="webp" src="/images/sub100/telaDesktop.png" width="817" height="541" alt="tela-do-crm-imobiliario-subsee-para-desktop" title="Tela do CRM imobiliario SUBSEE para desktop" class="mb-3"/>
                        <NuxtImg format="webp" src="/images/sub100/mulher.png" width="324" height="529" alt="gorata-propraganda-trabalhando-com-crm-no-celular" title="Gorata propraganda trabalhando com CRM no celular" class="position-absolute bottom-0 end-0 mb-3"/>
                    </div>
                    <div class="col-auto justify-content-center d-flex z-2 position-relative right-0 mulher"> <NuxtImg format="webp" src="/images/sub100/telaMobile.png" width="343" height="556" alt="resultado-do-anúncio-de-imóveis-no-crm-no-celular" title="Resultado do anúncio de imóveis no CRM no celular"/></div>
                </div>
            </div>
            <div class="top-shape position-absolute mx-auto left-0 right-0 bottom-0 mb-2">
                <inline-svg src="/images/sub100/linhaCurva.svg?5520200000000" alt="linha-SUB100-imobiliarias" title="Linha SUB100 Imobiliárias"/>
            </div>
            <div class="bottom-shape mt-2 position-absolute mx-auto left-0 right-0 bottom-0 z-n1">
                <inline-svg src="/images/sub100/backgroundCurva.svg?55202000000000" alt="background-da-sub100-imobiliarias" title="background da SUB100 Imobiliárias"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .mulher{
        top:30px
    }
    .seta{
        top:40%;
        padding-right: 60px;
    }
    .top-shape  {
        right: 50%;
        transform: translate(50%, 0%);
    }
    .bottom-shape {
        right: 50%;
        transform: translate(50%, 0%);
    }
</style>
<script>
    export default {
        data() {
            return {
                isMobile: false,
            };
        },
        mounted() {
            this.checkViewport();
            window.addEventListener('resize', this.checkViewport);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkViewport);
        },
        methods: {
            checkViewport() {
            this.isMobile = window.innerWidth <= 540;
            },
        },
    };
</script>