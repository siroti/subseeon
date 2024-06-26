<template>
    <div class="testimonial-section">
        <div class="container">
            <div class="section-title text-center mb-2 p-3 p-xl-0">
                <h4 class="fs-5 mb-0" v-html="$t('heroPlan.title')"></h4>
                <h2 class="title text-secondary" v-html="$t('heroPlan.subtitle')"></h2>
            </div>
            <div class="testimonial-slider-two px-0 px-lg-5 mx-0 mx-md-5" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide py-3 py-md-5 " v-for="testimonial in $t('heroPlan.package')" :key="testimonial.index">
                        <div class="testimonial-two p-3 p-md-5 rounded-2 shadow bg-white mb-3 mx-2 mx-md-4">
                            <h3 class="mb-4 fs-2 text-primary">{{ testimonial.plan }}</h3>
                            <div class="fs-6">{{ testimonial.type }}</div>
                            <div class="maxHeight">
                                <div class="d-flex px-3 align-center lh-md" v-for="functionalitie in testimonial.functionalities" :key="functionalitie.index">
                                    <div class="me-2" v-if="functionalitie.item"><img src="/images/icons/seta.svg?5520220555404" :alt="functionalitie.item" width="10" height="15"/></div>
                                    <div class="fs-6 text-dark">{{ functionalitie.item }}</div>
                                </div>
                            </div>
                            <hr class="mx-2"/>
                            <h3 class="fs-2 text-primary text-center mb-3 d-flex align-items-center justify-content-center">
                                {{ testimonial.prices }} <span class="ms-1 fs-6" v-if="testimonial.monthly">{{ testimonial.monthly }}</span>
                                <span class="ms-1 fs-6" v-if="testimonial.optional">{{ testimonial.optional }}</span></h3>

                                <a :href="testimonial.knowLink" :aria-label="testimonial.knowLink" :title="testimonial.knowtilte" class="btn btn-outline-secondary d-flex my-3 fs-6 fw-bold btn-plan">
                                    {{ testimonial.know }}
                                </a>

                                <a href="/teste-gratis/" :aria-label="testimonial.linkalt" :title="testimonial.linktilte" class="btn btn-primary d-flex fs-5 fw-bold btn-plan">
                                    {{ testimonial.namelink }}
                                </a>
                        </div>
                    </div>
                </swiper>
                <!-- swiper pagination 
                <div class="swiper-pagination text-center" id="planos_precos"></div>-->
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 0,
                    loop: false,
                    speed: 1000,
                    centeredSlides: false,
                    autoHeight: true, 
                    cssMode: true,
                    mousewheel: true,
                    breakpoints: {
                        1200:{
                            slidesPerView : 2,
                        },
                        992:{
                            slidesPerView : 2
                            
                        },
                        300:{
                            slidesPerView : 1.1
                        }
                    }
                /*
                testimonials: [
                    {
                        plan: "Free",
                        tipo: "Funcionalidades:",
                        functionalities: [
                            {
                                item: "01 Usuário",
                            },
                            {
                                item: "Site & hotsite demonstrativo",
                            },
                            {
                                item: "Suporte via WhatsApp",
                            },
                            {
                                item: "Treinamentos",
                            },
                        ],
                        valor: "Gratuito por 30 dias",
                        mensal: "",
                        opcionail: "",
                        saiba: "Sem necessidade de cartão de crédito",
                        saibaLink: "/planos-precos/",
                        namelink: "Teste agora",
                        link:"/teste-gratis/",
                    },
                    {
                        plan: "Urbano",
                        tipo: "Funcionalidades:",
                        functionalities: [
                            {
                                item: "02 Usuários",
                            },
                            {
                                item: "Site & hotsite padrão urbano",
                            },
                            {
                                item: "Integração com SUB100",
                            },
                            {
                                item: "Suporte via WhatsApp",
                            },
                            {
                                item: "Treinamentos",
                            },
                        ],
                        valor: "R$ 350,00",
                        mensal: "a.m",
                        opcionail: "+ opcionais",
                        saiba: "Ver todos os recursos inclusos",
                        saibaLink: "/planos-precos/",
                        namelink: "Compre agora",
                        link:"",
                    },
                    {
                        plan: "Rural",
                        tipo: "Funcionalidades:",
                        functionalities: [
                            {
                                item: "02 Usuários",
                            },
                            {
                                item: "Site & hotsite padrão rural",
                            },
                            {
                                item: "Integração com SUB100",
                            },
                            {
                                item: "Suporte via WhatsApp",
                            },
                            {
                                item: "Treinamentos",
                            },
                        ],
                        valor: "R$ 350,00",
                        mensal: "a.m",
                        opcionail: "+ opcionais",
                        saiba: "Ver todos os recursos inclusos",
                        saibaLink: "/planos-precos/",
                        namelink: "Compre agora",
                        link:"",
                    },
                ]*/
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bg-e9eefd { background:$white}
    .fil0 {fill:#686AF1!important}
    .dark-mode {
        .fil0 {fill:#ffff!important}
        .text-dark {color: $white!important;}
        .author-info img {filter: brightness(0) invert(1)}
        .bg-e9eefd { background:$bg-dark-secondary }
    }
</style>