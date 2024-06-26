<template>
    <div class="position-relative pb-0 pb-md-0">
        <div id="crm-imobiliario" class="position-relative" style="top: -70px">
        </div>
        <div class="container">
            <div class="align-items-center py-1 py-md-4">
                <div class="faq-content-area">
                    <div class="section-title text-center mb-0" data-aos="fade-up">
                        <h3 class="title text-dark mb-2 mb-md-0" id v-html="$t('heroPlataforma.title')"></h3>
                        <h4 class="fz-sm-18 fs-3 mb-4 mb-md-0 fw-normal" v-html="$t('heroPlataforma.subtitle')"></h4>
                    </div>
                </div>
            </div>

            <swiper :options="swiperOptionMenu" ref="mySwiperMenu" class="px-0 px-lg-5 mb-5">
                <div class="swiper-slide menu h-100" v-for="product in $t('heroPlataforma.products')" :key="product" @click.stop="toSlide($t(product.id))">
                    <input type="radio" class="btn-check" name="btnradio" autocomplete="off" :id="`SUBSEE-${$t(product.id)}`" :checked="curent === $t(product.id)"> 
                    <label class="btn btn-outline-primary w-100 h-100 d-flex flex-column lh-sm fs-7 pt-3" :for="`SUBSEE-${$t(product.id)}`"><img :src="$t(product.img)" :alt="$t(product.aba).replace('<br> ', '')" width="43" height="50" class="mb-2"/> <span v-html="$t(product.aba)"></span></label>
                </div>
            </swiper>           

            <div class="products pt-1" data-aos="fade-up">
                <swiper :options="swiperOption" ref="mySwiper">
                    <div class="swiper-slide" v-for="product in products" :key="product.id">
                        <div class="row row-cols-2 g-2">
                            <div class="col-12 col-md-5 order-1 order-md-2 position-relative px-3 px-md-2">
                                <div class="d-flex pb-3">
                                    <div class="col-auto me-3"><img  :src="product.icone" :alt="product.titulo" class="iconProducts" width="43" height="50"/></div>
                                    <div class="col">
                                        <h3 id="logoProduto" class="col-12 fs-4 text-start text-primary mb-2">{{ product.titulo }}</h3>
                                        <p class="fs-6 lh-sm mb-2 fw-bolder text-secondary">{{ product.desc1 }}</p>
                                        <p class="fs-6 lh-sm">{{ product.desc2 }}</p>
                                    </div>
                                </div>
                                <div>
                                    <b-tabs pills vertical nav-wrapper-class="w-100 text-start" v-model="product.activeIndex">
                                        <div class="col" v-for="modulo in product.modulo" :key="modulo">
                                            <b-tab title-link-class="py-2 pe-1 rounded-pill">
                                                <template #title>
                                                    <div class="d-flex align-items-center">
                                                        <div class="me-3">
                                                            <img  src="/images/icons/visto2.svg?5520220555404" :alt="modulo.imgAlt" class="iconVisto" height="20" width="25"/>
                                                        </div>
                                                        <div class="text-dark lh-sm">{{ modulo.item}}</div>
                                                    </div>
                                                </template>
                                            </b-tab>
                                        </div>
                                        <div class="col"><a :href="product.href" :aria-label="product.titulo" class="btn btn-outline-secondary d-flex my-3 fs-7 btn-plan col-12 col-md-4 m-auto">Saiba mais</a></div>
                                    </b-tabs>
                                </div>
                            </div>

                            <div class="col-12 col-md-7 text-center px-4 px-md-0 order-2 order-md-1 mh-100 position-relative justify-content-center mb-3 mb-md-0 mt-4 mt-md-0" :class="`prod-${product.id}`" style="overflow-x: clip!important">
                                <div :options="product.swiperOption" :ref="`moduleSwiper${product.id}`" :nested="true" :instanceName="product.id" @slide-change="changeModuleSlide(product)">
                                    <div class="swiper-slide" v-for="modulo in product.modulo.filter(item=>item.imgSrc)" :key="modulo.id">
                                        <img :src="modulo.imgSrc" v-if="modulo.imgSrc" :alt="modulo.imgAlt" width="817" height="541" class="pt-1 pt-md-4"/>
                                        <a :href="product.href" :aria-label="product.titulo" class="position-absolute bottom-50 end-50 z-n1 text-opacity-25">{{ product.titulo }}</a>
                                        <div class="fs-9" v-if="modulo.imagens">{{modulo.imagens}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
               <!-- <div class="swiper-pagination text-center d-none"></div>-->
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .pontinho {
        position: static;
        display: block;
        line-height: 1;
        margin-top: 20px;
    }
    .swiper-pagination {
        & .swiper-pagination-bullet {
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
    .fs-9 {
        font-size: 11px;
        font-style: italic;
        padding-top: 5px;
        color: #666666;
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

    .dark-mode {
        .fs-9 {color: #FFFFFF!important; }
        .text-dark{color: #FFFFFF!important;}
        .btn-check:checked+.btn {
            color: #fff;
            background-color: #323847;
        }
        .btn-outline-primary {color: #FFF }
    }
</style>
<style>
    .nav-link.active, .show > .nav-link {
        background-color: initial!important;
        color: #333 !important;
        cursor: auto!important;
    }
    .nav-link {cursor: auto!important}
    .dark-mode .nav-pills .nav-link.active {          
            background-color: initial !important;
            color: #fff !important;
    }
</style>

<script>
    export default {
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
                    autoHeight: true,
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
                            slidesPerView : 8,
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
                                item: "Apresenta seus lançamentos com recursos avançados de mídia;",
                                imgSrc:  "/images/sub100/prod/lancamento/notebookHome1.png?date20231013",
                                imgAlt: "Sistema para Lançamentos",
                                imagens: "Imagens cedidas pela Ciplart Construtora"
                            },
                            {
                                id: "lanc02",
                                item: "Status dos Lançamentos com informe das suas evoluções;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "lanc03",
                                item: "Informe múltiplos valores, negociações especiais e unidade de referência;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "lanc04",
                                item: "Anexe ao seu anúncio a tabela de preço e o memorial descritivo e compartilhe facilmente com seus potenciais compradores.",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            
                        ], 
                        href: "/crm-imobiliario/imoveis-lancamentos/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
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
                        desc2:  "Destaque o potencial de valor de renda para locação. Ofereça insights sobre o ambiente da rua onde o locatário irá residir. Isso proporcionará uma visão completa e atrativa do imóvel.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "venda01",
                                item: "Descritivo completo para imóveis de Venda;",
                                imgSrc:  "/images/sub100/prod/venda/notebookHome1.png?date20231013",
                                imgAlt: "Sistema para venda",
                                imagens: ""
                            },
                            {
                                id: "venda02",
                                item: "Sugestão e revisão de textos integrados ao Chat GPT;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "venda03",
                                item: "Controle de Autorização de vendas;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "venda04",
                                item: "Integração fácil com portais imobiliários e rígido controle para restringir ou destacar informações no anúncio.",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                        ],
                        href: "/crm-imobiliario/imoveis-venda/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
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
                        desc2:  "Um sistema que classifique seu anúncio como 'Pet Friendly', ‘Regiões acadêmicas’. Mantenha um rígido controle sobre o quadro de chaves e desfrute do inovador empréstimo de chaves.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "locacao01",
                                item: "Descritivo completo para imóveis de Locação",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome1.png?date20231013",
                                imgAlt: "Sistema para Locação",
                                imagens: ""
                            },
                            {
                                id: "locacao02",
                                item: "Informe detalhado dos valores complementares ao aluguel;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "locacao03",
                                item: "Registro de alertas e informações restritas;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "locacao04",
                                item: "Ocupação do imóvel e rastreio de chaves.",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                            },
                        ],
                        href: "/crm-imobiliario/imoveis-locacao/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "temporada",
                        icone: "/images/icons/temporada.svg",
                        titulo: "Imóveis Temporada",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Gerenciamento de propriedades para aluguel de temporada com o CRM imobiliário especialista.",
                        desc2:  "O módulo de temporada administra reservas, bloqueios, contratos de locação de maneira fácil e intuitiva. Seus anúncios respeitam períodos de temporadas e datas especiais permitindo divulgar preços conforme calendário desejado.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "temporada01",
                                item: "Emissão de contrato de locação de temporada;", 
                                imgSrc: "/images/sub100/prod/temporada/notebookHome1.png?date20231013",
                                imgAlt: "Sistema para temporada",
                                imagens: ""
                            },
                            {
                                id: "temporada02",
                                item: "Calendário permite visualizar todas as informações dos imóveis de temporada;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "temporada03",
                                item: "Reservas integradas com outros Portais de temporada;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "temporada04",
                                item: "Bloqueios por períodos simultâneos integrados ao site e outros Portais de temporada.",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            }
                        ],
                        href: "/crm-imobiliario/imoveis-temporada/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "rural",
                        icone: "/images/icons/rural.svg",
                        titulo: "Imóveis rurais",
                        iconeWidth: "",
                        iconeHeight: "",
                        desc1:  "O anúncio de imóveis para o agronegócio brasileiro subiu de patamar com o CRM SUBSEE on.",
                        desc2:  "O módulo de imóveis rurais permite o corretor gerar informações de qualidade e padronizada para potenciais compradores e investidores sem a necessidade de gerar informações complementares.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "rural01",
                                item: "Descritivo completo e específico para imóveis rurais;",
                                imgSrc: "/images/sub100/prod/rural/notebookHome1.png?date20231013",
                                imgAlt: "Sistema para rural",
                                imagens: "Geoatributos cedidos pela Congeo"
                            },
                            {
                                id: "rural02",
                                item: "Registro de disponibilidade hídrica e logística a propriedade e armazenamento;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "rural03",
                                item: "Permite disponibilizar links públicos para os anúncios como laudos, histórico de pluviometria, informações sobre o CAR;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            },
                            {
                                id: "rural04",
                                item: "Integração com atributos georreferenciados kml com interação de informações e controles de camadas.",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                            },
                        ],
                        href: "/crm-imobiliario/imoveis-rurais/",
                        target: "Item",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "sitesHotsites",
                        icone: "/images/icons/sites_hotsites.svg",
                        titulo: "Sites & Hotsites",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Modelos de sites, hotsites e landing pages para atender as necessidades do seu negócio.",
                        desc2:  "Os sites & Hotsites são desenvolvidos para o mercado de imóveis Urbanos e imóveis Rurais. Os dois tipos de sites possuem características e peculiaridades que proporcionam autoridade na apresentação dos seus anúncios aos potenciais compradores.",
                        activeIndex: 0,
                        modulo: [{
                                id: "sitesHotsites01",
                                item: "Sites para imóveis urbanos e rurais;",
                                imgSrc:  "/images/sub100/prod/site/notebookHome1.png?date20231013",
                                imgAlt: "Sites & Hotsites",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites02",
                                item: "Ficha do imóvel com qualidade visual e de fácil interação;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites03",
                                item: "Área de interação para captação de leads;",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites04",
                                item: "Sites responsivos e otimizados para o Google.",
                                imgSrc: "",
                                imgAlt: "",
                                imagens: ""
                                }
                        ],
                        href: "/crm-imobiliario/sites-hotsites/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
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
                        desc2:  "O sistema possui um controle de disponibilidade e destaques de cada portal contratado, permitindo otimizar o máximo dos investimentos despendidos pelo anunciante.",
                        activeIndex: 0,
                        modulo: [{
                                id: "portal01",
                                item: "Integração nativa com o Portal SUB100;",
                                imgSrc:  "/images/sub100/prod/portais/notebookHome1.png?date20231013",
                                imgAlt: "Portais Imobiliários",
                                imagens: ""
                                },
                                {
                                id: "portal02",
                                item: "Integração com ZAP Imóveis, Viva Real, OLX, Imóvel Web, Chave na Mão, Casa Mineira, Imobilist e outros",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "portal03",
                                item: "Controle de ofertas e destaques para cada portal",
                                imgSrc:  "/images/sub100/notebookHome.png?5520230901",
                                imgAlt: "Portais Imobiliários",
                                },
                                {
                                id: "portal04",
                                item: "Validação de critérios mínimos para anunciar nos portais;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "portal05",
                                item: "Controle rígido das informações que não devem ser divulgadas no anúncio.",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                },
                        ],
                        /*swiperOption: {
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
                        },*/
                        href: "/crm-imobiliario/portais-imobiliarios/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "on",
                        icone: "/images/icons/on.svg",
                        titulo: "Minhas Conexões",
                        iconeWidth: "50",
                        iconeHeight: "50",
                        desc1:  "Crie conexões com seus parceiros, convide um corretor amigo a acesser seu CRM Imobiliário.",
                        desc2:  "Construa facilmente conexões com redes de parceiras, divulgue oportunidades aos seus grupos e faça avaliações coletivas dentro do seu CRM Imobiliário.",
                        activeIndex: 0,
                        modulo: [{
                                id: "on01",
                                item: "Criação de redes de parcerias;",
                                imgSrc:  "/images/sub100/prod/on/notebookHome1.png?date20231013",
                                imgAlt: "Minhas Conexões",
                                imagens: ""
                                },
                                {
                                id: "on02",
                                item: "Avaliação de imóveis em grupos fechados;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "on03",
                                item: "Divulgue suas oportunidades a suas conexões através do dashboard;",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                },
                                {
                                id: "on04",
                                item: "Faça parcerias estratégicas e venda mais e mais rápido.",
                                imgSrc:  "",
                                imgAlt: "",
                                imagens: ""
                                }
                        ],
                        /*swiperOption: {
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
                        }, */
                        href: "/crm-imobiliario/minhas-conexoes/",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
        
                ]
            }
        },
        mounted() {
            setTimeout(() => {this.toSlide(1);}, "200");
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
        },

    };
</script>

