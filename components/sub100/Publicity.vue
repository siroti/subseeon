<template>
    <div class="cta-section section-padding-bottom-70 mt-3 mt-md-0 pt-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>
                        <a :href="localePath('/teste-gratis/')" class="d-block">
                            <nuxt-img loading="lazy" v-if="isMobileExtra" src="/images/sub100/bannerTeste-412.svg" width="412" height="280" alt="banner-para-avaliacao-gratuita-teste-gratis-por-30-dias" title="Banner para Avaliação gratuita teste grátis por 30 dias"/> 
                            <nuxt-img loading="lazy" v-else-if="isMobile" src="/images/sub100/bannerTeste-540.svg" width="540" height="300" alt="banner-para-avaliacao-gratuita-teste-gratis-por-30-dias" title="Banner para Avaliação gratuita teste grátis por 30 dias"/>
                            <nuxt-img loading="lazy" v-else-if="isMedium" src="/images/sub100/bannerTeste-770.svg" width="770" height="300" alt="banner-para-avaliacao-gratuita-teste-gratis-por-30-dias" title="Banner para Avaliação gratuita teste grátis por 30 dias"/>
                            <nuxt-img loading="lazy" v-else src="/images/sub100/bannerTeste-1200.svg" width="1200" height="300" alt="banner-para-avaliacao-gratuita-teste-gratis-por-30-dias" title="Banner para Avaliação gratuita teste grátis por 30 dias"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
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
            this.isMobileExtra = window.innerWidth <= 412;
            this.isMobile = window.innerWidth <= 540;
            this.isMedium = window.innerWidth <= 768;
            },
        },
    };
</script>