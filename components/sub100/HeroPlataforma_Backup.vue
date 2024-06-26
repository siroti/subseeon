<template>
    <div class="position-relative pb-0 pb-md-0">
        <div class="container">
            <div class="align-items-center py-1 py-md-4">
                <div class="faq-content-area">
                    <div class="section-title text-center mb-0" data-aos="fade-up">
                        <h2 class="title text-dark mb-2 mb-md-0">Uma plataforma idealizada para múltiplos mercados</h2>
                        <p class="fz-sm-18 fs-3 mb-4 mb-md-0">O que você gostaria de gerenciar com o SUBSEE <span class="text-on">on</span></p>
                    </div>
                </div>
            </div>

            <swiper :options="swiperOptionMenu" ref="mySwiperMenu" class="px-0 px-lg-5 mb-5">
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(1)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="imoveis-lancamentos" autocomplete="off" :checked="curent === 1">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="imoveis-lancamentos"><img src="/images/icons/lancamentos.svg" height="43" width="50" class="mb-2"/> Imóveis <br> Lançamentos</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(2)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="imoveis-venda" autocomplete="off" :checked="curent === 2">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="imoveis-venda"><img src="/images/icons/venda.svg" height="43" width="50" class="mb-2"/>Imóveis <br> Venda</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(3)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="imoveis-locacao" autocomplete="off" :checked="curent === 3">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="imoveis-locacao"><img src="/images/icons/locacao.svg" height="43" width="50" class="mb-2"/>Imóveis <br> Locação</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(4)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="imoveis-temporada" autocomplete="off" :checked="curent === 4">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="imoveis-temporada"><img src="/images/icons/temporada.svg" height="43" width="50" class="mb-2"/>Imóveis <br> Temporada</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(5)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="imoveis-rurais" autocomplete="off" :checked="curent === 5">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="imoveis-rurais"><img src="/images/icons/rural.svg" height="43" width="50" class="mb-2"/>Imóveis <br> Rurais</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(6)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="sites-hotsites" autocomplete="off" :checked="curent === 6">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="sites-hotsites"><img src="/images/icons/sites_hotsites.svg" height="43" width="50" class="mb-2"/>Sites & <br> Hotsites</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(7)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="portais-imobiliarios" autocomplete="off" :checked="curent === 7">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="portais-imobiliarios"><img src="/images/icons/portal_imobiliarios.svg" height="43" width="50" class="mb-2"/>Portais <br> Imobiliários</label>
                </div>
                <div class="swiper-slide menu h-100 " @click.stop="toSlide(8)">
                    <input type="radio" class="btn-check w-0" name="btnradio" id="minhas-conexoes" autocomplete="off" :checked="curent === 8">
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" for="minhas-conexoes"><img src="/images/icons/on.svg" width="50" height="50" class="mb-2"/>Minhas <br> Conexões</label>
                </div>
            </swiper>
            

            <div class="products pt-1" data-aos="fade-up">
                <swiper :options="swiperOption" ref="mySwiper">
                    <div class="swiper-slide" v-for="product in products" :key="product.id">
                        <div class="row row-cols-2 g-2">
                            
                            <div class="col-12 col-md-5 order-1 order-md-2 position-relative px-3 px-md-2">
                                <div class="d-flex pb-3">
                                    <div class="col-auto me-3"><img :src="product.icone" :alt="product.titulo" class="iconProducts" width="50" height="50"/></div>
                                    <div class="col">
                                        <h3 id="logoProduto" class="col-12 fs-4 text-start text-primary mb-2">{{ product.titulo }}</h3>
                                        <p class="fs-6 lh-base mb-2 fw-bolder text-secondary">{{ product.desc1 }}</p>
                                        <p class="fs-6 lh-base">{{ product.desc2 }}</p>
                                    </div>
                                </div>

                                <div>
                                    <b-tabs pills vertical nav-wrapper-class="w-100 text-start" v-model="product.activeIndex">
                                        <div class="col" v-for="modulo in product.modulo" :key="modulo.id">
                                            <b-tab title-link-class="py-2 pe-1 rounded-pill" id="modulo">
                                                <template #title>
                                                    <div class="d-flex  align-items-center" @click="setModule(modulo, product)">
                                                        <div class="me-3"><img src="/images/icons/visto2.svg?5520220555404" class="iconVisto" height="20" width="25"/></div>
                                                        <div class="text-dark lh-sm">{{ modulo.item}}</div>
                                                    </div>
                                                </template>
                                            </b-tab>
                                        </div>
                                    </b-tabs>
                                </div>
                            </div>

                            <div class="col-12 col-md-7 text-center px-4 px-md-0 order-2 order-md-1 h-100 position-relative justify-content-center mb-3 mb-md-0 mt-4 mt-md-0" :class="`prod-${product.id}`" style="overflow-x: clip!important">
                                <swiper :options="product.swiperOption" :ref="`moduleSwiper${product.id}`" :nested="true" :instanceName="product.id" @slide-change="changeModuleSlide(product)">
                                    <div class="swiper-slide" v-for="modulo in product.modulo" :key="modulo.id">
                                        <img :src="modulo.imgSrc" class="pt-1"/>
                                    </div>
                                </swiper>
                                <div class="text-center swiper-pagination"></div>
                            </div>

                        </div>
                    </div>
                </swiper>
                <div class="swiper-pagination text-center d-none"></div>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
/*
.pontinho {
    position: static;
    display: block;
    line-height: 1;
    margin-top: 20px;
}
.swiper-pagination .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 0;
    border-radius: 0;
    display: inline-block;
    background: transparent;
    opacity: 1;
    position: relative;
    outline: none;
    margin-right: 20px;
    margin: 0 8px !important;
    cursor: pointer;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background-color: #EFEFEF!important;
    color: #333 !important;
}
.btn-outline-primary {
    color: #333333;
    border-color: #DDDDDD;
}
.btn-check:checked + .btn {
    color: #333333;
    background-color: #fff;
    border:2px solid #6769ef;
}
.fs-7 {
    font-size: 15px;
}
.dark-mode {
        .btn-check:checked+.btn {
            color: #fff;
            background-color: #323847;
        }
        .btn-outline-primary {color: #FFF }
        .nav-pills .nav-link.active {
            background-color: #111111 !important;
            color: #fff !important;
        }
}
.iconVisto{ max-width: 24px }

@media #{$large-mobile} {
    .iconVisto{
        max-width: fit-content;
        width: 15px!important;
    }
    .iconProducts {
        max-width: fit-content;
        width: 30px!important;
    }
}
*/
</style>

<style lang="scss" scoped>
/*
    .dark-mode {
        .text-dark{color: #FFFFFF!important;}
        .btn-check:checked+.btn {
            color: #fff;
            background-color: #323847;
        }
        .btn-outline-primary {color: #FFF }
        .nav-pills .nav-link.active {
            background-color: #111111 !important;
            color: #fff !important;
        }
    }*/
</style>

<script>
 /*   export default {
        data () {
            return {
                curent:1,
                swiperOption: {
                    spaceBetween: 200,
                    loop: true,
                    speed: 10,
                    centeredSlides: false,
                    mousewheel: false,
                    allowTouchMove: false,
                },

                swiperOptionMenu: {
                    spaceBetween: 15,
                    loop: false,
                    freeMode: true,
                    autoHeight: true, 
                    mousewheel: true,
                    cssMode: true,
                    hashNavigation:true,
                    breakpoints: {
                        1400:{
                            slidesPerView : 8,
                        },
                        1200:{
                            slidesPerView : 7.3,
                        },
                        992:{
                            slidesPerView : 5.3
                            
                        },
                        300:{
                            slidesPerView : 2.3
                        }
                    }
                },
                
                products: [
                    {
                        id: "lancamento",
                        icone: "/images/icons/lancamentos.svg",
                        titulo: "Imóveis Lançamentos",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Organize os seus lançamentos de maneira sistemática e minuciosa com CRM SUBSEE.",
                        desc2:  "Forneça as variações de valores das unidades, quantidade de dormitórios, banheiros, vagas de estacionamento e as metragens privativas e totais.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "lanc01",
                                item: "Status dos Lançamentos com informe das suas evoluções",
                                imgSrc:  "/images/sub100/prod/lancamento/notebookHome1.png?5520230555092",
                                imgAlt: "Sistema para Lançamentos",
                            },
                            {
                                id: "lanc02",
                                item: "Informe múltiplos valores e unidade de referência",
                                imgSrc:  "/images/sub100/prod/lancamento/notebookHome2.png?5520230555092",
                                imgAlt: "Sistema para Lançamentos",
                            },
                            {
                                id: "lanc03",
                                item: "Mapa de vendas e suas disponibilidades",
                                imgSrc:  "/images/sub100/prod/lancamento/notebookHome3.png?5520230555092",
                                imgAlt: "Sistema para Lançamentos",
                            },
                            {
                                id: "lanc04",
                                item: "Reajuste de tabela de preço simplificada",
                                imgSrc:  "/images/sub100/prod/lancamento/notebookHome4.png?5520230555092",
                                imgAlt: "Sistema para Lançamentos",
                            },
                            
                        ], 
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true,
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-lancamento .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "#",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "Sistema para Lançamento",
                        disabled: false
                    },
                    {
                        id: "venda",
                        icone: "/images/icons/venda.svg",
                        titulo: "Imóveis Venda",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Aprimore a qualidade das descrições dos imóveis disponíveis para venda com melhor CRM.",
                        desc2:  "Destaque o potencial de valor de renda para locação. Oferece insights sobre o ambiente da rua onde o locatário irá residir. Isso proporcionará uma visão completa e atrativa do imóvel.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "venda01",
                                item: "Descritivo completo para imóveis de Venda",
                                imgSrc:  "/images/sub100/prod/venda/notebookHome1.png?5520230555092",
                                imgAlt: "",
                            },
                            {
                                id: "venda02",
                                item: "Quadro de chaves e monitoramento de empréstimos",
                                imgSrc:  "/images/sub100/prod/venda/notebookHome2.png?552023055592055",
                                imgAlt: "Sistema para venda",
                            },
                            {
                                id: "venda03",
                                item: "Controle de Autorização de vendas",
                                imgSrc:  "/images/sub100/prod/venda/notebookHome3.png?5520230555092",
                                imgAlt: "Sistema para venda",
                            },
                            {
                                id: "venda04",
                                item: "Emissão de proposta de compra",
                                imgSrc:  "/images/sub100/prod/venda/notebookHome4.png?5520230555092",
                                imgAlt: "Sistema para venda",
                            },
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true,
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-venda .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "locacao",
                        icone: "/images/icons/locacao.svg",
                        titulo: "Imóveis Locação",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Qualifique os anúncios dos imóveis para locação com os valores adicionais ao aluguel com SUBSEE.",
                        desc2:  "Um sistema que classifique seu anúncio como 'Pet Friendly', ‘Regiões acadêmicas’. Mantenha um rígido controle sobre do quadro de chaves e desfrute do inovador empréstimo de chaves.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "locacao01",
                                item: "Descritivo completo para imóveis de Locação",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome1.png?5520230901",
                                imgAlt: "Sistema para Locação",
                            },
                            {
                                id: "locacao02",
                                item: "Quadro de chaves e monitoramento de empréstimos",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome2.png?5520230901",
                                imgAlt: "Sistema para Locação",
                            },
                            {
                                id: "locacao03",
                                item: "Registro de alertas e informações restritas",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome3.png?5520230901",
                                imgAlt: "Sistema para Locação",
                            },
                            {
                                id: "locacao04",
                                item: "Informe detalhado dos valores complementares ao aluguel",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome4.png?5520230901",
                                imgAlt: "Sistema para Locação",
                            },
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-locacao .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "temporada",
                        icone: "/images/icons/temporada.svg",
                        titulo: "Imóveis Temporada",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Gerenciamento de propriedades para aluguel de temporada",
                        desc2:  "O módulo de temporada administra reservas, bloqueios, contratos de locação de maneira fácil e intuitiva. Seus anúncios respeitam períodos de temporadas e datas especiais permitindo divulgar preços conforme calendário desejado.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "temporada01",
                                item: "Reservas integradas com outros canais como Airbnb, Expedia ou Booking", 
                                imgSrc:  "/images/sub100/prod/temporada/notebookHome1.png?5520230901",
                                imgAlt: "Sistema para temporada",
                            },
                            {
                                id: "temporada02",
                                item: "Bloqueios por períodos simultâneos integrados a todos os canais",
                                imgSrc:  "/images/sub100/prod/temporada/notebookHome2.png?5520230901",
                                imgAlt: "Sistema para temporada",
                            },
                            {
                                id: "temporada03",
                                item: "Emissão de contrato de locação de temporada com assinatura eletrônica",
                                imgSrc:  "/images/sub100/prod/temporada/notebookHome3.png?5520230901",
                                imgAlt: "Sistema para temporada",
                            },
                            {
                                id: "temporada04",
                                item: "Calendário permite visualizar todas as informações dos imóveis disponíveis para temporada",
                                imgSrc:  "/images/sub100/prod/temporada/notebookHome4.png?5520230901",
                                imgAlt: "Sistema para temporada",
                            }
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-temporada .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        }, 
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "rural",
                        icone: "/images/icons/rural.svg",
                        titulo: "Imóveis rurais",
                        iconeWidth: "",
                        iconeHeight: "",
                        desc1:  "O anúncio de imóveis para Agronegócio brasileiro subiu de patamar com o SUBSEE on.",
                        desc2:  "O módulo de imóveis rurais permite o corretor gerar informações de qualidade e padronizada para potenciais compradores e investidores sem a necessidade de gerar informações complementares.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "rural01",
                                item: "Descritivo completo e específico para imóveis rurais",
                                imgSrc:  "/images/sub100/prod/rural/notebookHome1.png?5520230901",
                                imgAlt: "Sistema para rural",
                            },
                            {
                                id: "rural02",
                                item: "Registro de disponibilidade hídrica e logística a propriedade e armazenamento",
                                imgSrc:  "/images/sub100/prod/rural/notebookHome2.png?5520230901",
                                imgAlt: "Sistema para rural",
                            },
                            {
                                id: "rural03",
                                item: "Permite disponibilizar links públicos para os anúncios como laudos, histórico de pluviometria, informações sobre o CAR",
                                imgSrc:  "/images/sub100/prod/rural/notebookHome3.png?5520230901",
                                imgAlt: "Sistema para rural",
                            },
                            {
                                id: "rural04",
                                item: "Integração com atributos georreferencias klm com interação de informações e controles de camadas",
                                imgSrc:  "/images/sub100/prod/rural/notebookHome4.png?5520230901",
                                imgAlt: "Sistema para rural",
                            },
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-rural .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "",
                        target: "Item",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "sitesHotsites",
                        icone: "/images/icons/sites_hotsites.svg",
                        titulo: "Sites & Hotsites",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Modelos desenvolvidos para atender as necessidades do seu negócio",
                        desc2:  "Os sites & Hotsites são desenvolvidos para o mercado de imóveis urbanos e imóveis rurais. Os dois tipos de sites possuem características e peculiaridades que proporcionando autoridade na apresentação dos seus anúncios aos potenciais compradores.",
                        activeIndex: 0,
                        modulo: [{
                                id: "sitesHotsites01",
                                item: "Busca para imóveis urbanos e rurais",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Sites & Hotsites",
                                },
                                {
                                id: "sitesHotsites02",
                                item: "Ficha do imóvel com qualidade visual e de fácil interação",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Sites & Hotsites",
                                },
                                {
                                id: "sitesHotsites03",
                                item: "Área de integração para captação de leads",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Sites & Hotsites",
                                },
                                {
                                id: "sitesHotsites04",
                                item: "Sites responsivos e otimizados para o Google",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Sites & Hotsites",
                                }
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-sitesHotsites .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "portal",
                        icone: "/images/icons/portal_imobiliarios.svg",
                        titulo: "Portais Imobiliários",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Integre-se com os principais portais brasileiros de forma rápida e intuitiva com o CRM SUBSEE.",
                        desc2:  "O sistema possui um controle de disponibilidade e destaques de cada portal contratado, permitindo otimizar o máximo dos investimentos dispendido pelo anunciante.",
                        activeIndex: 0,
                        modulo: [{
                                id: "portal01",
                                item: "Integração nativa com o Portal SUB100",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Portais Imobiliários",
                                },
                                {
                                id: "portal02",
                                item: "Controle de ofertas e destaques para cada portal",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Portais Imobiliários",
                                },
                                {
                                id: "portal03",
                                item: "Validação de critérios mínimos para anúncio nos portais selecionados",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Portais Imobiliários",
                                },
                                {
                                id: "portal04",
                                item: "Controle rígido das informações que não devem ser divulgadas no anúncio.",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Portais Imobiliários",
                                },
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-portal .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        },
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "on",
                        icone: "/images/icons/on.svg",
                        titulo: "Minhas Conexões",
                        iconeWidth: "50",
                        iconeHeight: "50",
                        desc1:  "Crie conexões com redes de parcerias, convide um corretor amigo para a fazer parte da sua base de oportunidades",
                        desc2:  "Construa facilmente conexões com redes de parceiras, divulgue oportunidades aos seus grupos e faça avaliações coletivas dentro do seu CRM Imobiliário.",
                        activeIndex: 0,
                        modulo: [{
                                id: "on01",
                                item: "Criação de redes de parcerias",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Minhas Conexões",
                                },
                                {
                                id: "on02",
                                item: "Avaliação de imóveis em grupos fechados",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Minhas Conexões",
                                },
                                {
                                id: "on03",
                                item: "Divulgue suas oportunidades a suas conexões através do dashboard",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Minhas Conexões",
                                },
                                {
                                id: "on04",
                                item: "Faça parcerias estratégicas e venda mais e mais rápido",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Minhas Conexões",
                                }
                        ],
                        swiperOption: {
                            spaceBetween: 200,
                            loop: true,
                             speed: 1000,
                            centeredSlides: true,
                            autoHeight: true, 
                            //autoplay: { delay: 20000000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                            pagination: {
                                el: '.products .prod-on .swiper-pagination',
                                type: "bullets",
                                clickable: true,
                            },
                        }, 
                        href: "",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                        imgAlt: "",
                        disabled: false,
                    },
        
                ]
            }
        },
        mounted() {

            this.$root.$on('to-slide', (slide) => {
                this.toSlide(slide, true);
            })
        },
        methods: {
            setModule(module, product) {
              product.modulo.map(item => {
                item.selected = false
              });

              module.selected = true;
              const index = product.modulo.indexOf(module);
              this.$nextTick(() => {
                this.$refs[`moduleSwiper${product.id}`][0].$swiper?.slideTo(index +1);
              })
            },
            changeModuleSlide(product) {
              this.$nextTick(() => {
                product.activeIndex = this.$refs[`moduleSwiper${product.id}`][0].$swiper?.realIndex;
              })
            },
            openInNewTab(url,target) {
                window.open(url, target, 'noreferrer');
             },
            toSlide(product, immediate = true) {
              this.curent = product;
                if(!immediate) {
                    this.$refs.mySwiper.$swiper.slideTo(product)
                } else {
                    this.$refs.mySwiper.$swiper.slideTo(product, 0)
                }
            },
            teste(e) {
              //console.log(this.$refs.mySwiper?.$swiper);
                this.curent = this.$refs.mySwiper?.$swiper.realIndex;
            },
        },

    };*/
</script>

