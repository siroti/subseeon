<template>
    <div class="testimonial-section pt-4 pt-md-5 pb-0 pb-md-5">
        <div class="container">
            <div class="section-title text-center mb-3 mb-md-5 px-3 px-xl-0">
                <h3 class="title text-primary" v-html="$t('heroDepositions.title')"></h3>
            </div>
            <div class="testimonial-slider-two" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide h-100" v-for="testimonial in $t('heroDepositions.testimonials')" :key="testimonial.index">
                        <div class="testimonial-two p-4 rounded-4 mx-0 mx-md-3 h-100 d-flex flex-column justify-content-around">

                            <div class="mb-3"><NuxtImg loading="lazy" src="/images/icons/comma.svg" :alt="$t(testimonial.name)" height="36" width="28"/></div>
                            <div class="mb-5 px-3 fs-6 lh-base"><p v-html="testimonial.desc"></p></div>
 
                            <div class="d-flex px-3 justify-content-between align-center">
                                <div class="lh-sm">
                                    <div class="mb-0 fs-5 fw-bold text-primary lh-1 mb-1">{{ $t(testimonial.name) }}</div>
                                    <span class="d-block fs-8">{{ $t(testimonial.position) }}</span>
                                    <span class="d-block fs-8">{{ $t(testimonial.company) }}</span>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                    <NuxtImg v-if="$t(testimonial.imgSrc)" loading="lazy" format="webp" :src="$t(testimonial.imgSrc)" :width="$t(testimonial.width)" :height="$t(testimonial.height)" :alt="$t(testimonial.alt)"  :title="$t(testimonial.titleAlt)" class="parceiro"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
                <div id="planos" ref="planos" class="position-relative" style="top: -50px;"></div>
                <!-- swiper pagination -->
                <div class="swiper-pagination text-center"></div>  
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
                    spaceBetween: 20,
                    loop: false,
                    speed: 1000,
                    centeredSlides: false,
                    autoHeight: true, 
                    cssMode: true,
                    mousewheel: true,
                    breakpoints: {
                        1200:{
                            slidesPerView : 3,
                        },
                        992:{
                            slidesPerView : 2.2,
                            spaceBetween: 15,
                        },
                        300:{
                            slidesPerView : 1.1,
                            spaceBetween: 10,
                        }
                    }
                }
                /*testimonials: [
                    {
                        title: "",
                        desc: "O grande diferencial com o SUBSEE é a integração nativa com o Portal SUB100, o que permite a criação de anúncios com a qualidade exigida pelo nosso departamento de marketing. Todos os leads gerados são direcionados para nosso CRM de forma integrada e rápida.",
                        name: "Rafael Garcia",
                        position: "Diretor geral",
                        company: "PRC Empreendimento",
                        imgSrc: "/images/depositions/prc.png?date20231013",
                        width: "120",
                        height: "36"
                    },
                    {
                        title: "",
                        desc: "A qualidade do anúncio produzido pelo SUBSEE nos impressionou. O sistema possui uma linguagem especializada para lidar com anúncios rurais, além de permitir a criação de atributos que se integram a arquivos georreferenciados kml.",
                        name: "Alessandro Mendes",
                        position: "Engenheiro Cartográfico",
                        company: "Congeo – Consultoria Geográfica",
                        imgSrc: "/images/depositions/congeo.png?date20231013",
                        width: "120",
                        height: "32"
                    },
                    {
                        title: "",
                        desc: "Utilizamos o SUBSEE desde suas versões iniciais. No entanto, o SUBSEE on nos impressionou a todos devido à sua mobilidade e facilidade no cadastro. O sistema de empréstimo de chaves é verdadeiramente revolucionário, deixando nossos clientes surpresos com essa funcionalidade.",
                        name: "Valtinez Favarão",
                        position: "Diretor",
                        company: "Favarão Imóveis",
                        imgSrc: "/images/depositions/favarao.png?date20231013",
                        width: "150",
                        height: "41"
                    }
                ]*/
            }
        }
    };
</script>
<style>
.text-subsee { color: #333!important;}
.dark-mode .text-subsee { color: #FFF!important;}
</style>
<style lang="scss" scoped>
    .bg-e9eefd { background:#FFF}
    .text-subsee { color: #333!important;}
    .dark-mode {
        .author-info img {filter: brightness(0) invert(1)}
        .bg-e9eefd { background:$bg-dark-secondary }
        .text-subsee { color: #FFF!important;}
         img.parceiro { filter: brightness(0) invert(1);}
    }
</style>