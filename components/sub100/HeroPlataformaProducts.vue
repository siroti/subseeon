<template>
    <div class="py-5">
        <div class="container">
            <div class="products pt-1" data-aos="fade-up">
                <h2 class="text-center pb-5 mb-0 fs-3 text-primary">{{ frase }}</h2>
                <div class="swiper-slide" v-for="product in products" :key="product.id">
                    <div class="row row-cols-2 g-2" v-if="product.id == category">
                        <div class="col-12 col-md-5 order-1 order-md-2 position-relative px-3 px-md-2">
                            <div class="d-flex pb-3">
                                <div class="col mt-4">
                                    <h2 class="fs-7 fw-normal lh-3">{{ product.desc2 }}</h2>
                                </div>
                            </div>
                            <div>
                                <b-tabs pills vertical nav-wrapper-class="w-100 text-start" v-model="product.activeIndex">
                                    <div class="col" v-for="modulo in product.modulo" :key="modulo.id">
                                        <b-tab title-link-class="py-2 pe-1 rounded-pill" id="modulo">
                                            <template #title>
                                                <div class="d-flex  align-items-center">
                                                    <div class="me-3"><img src="/images/icons/visto2.svg?5520220555404" :alt="modulo.item" class="iconVisto" height="20" width="25"/></div>
                                                    <h3 class="text-dark fs-6 fw-normal lh-sm">{{ modulo.item}}</h3>
                                                </div>
                                            </template>
                                        </b-tab>
                                    </div>
                                </b-tabs>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 text-center px-4 px-md-0 order-2 order-md-1 mh-100 position-relative justify-content-center mb-3 mb-md-0 mt-4 mt-md-0" :class="`prod-${product.id}`" style="overflow-x: clip!important">
                            <div :options="product.swiperOption" :ref="`moduleSwiper${product.id}`" :nested="true" :instanceName="product.id" @slide-change="changeModuleSlide(product)">
                                <div class="swiper-slide" v-for="modulo in product.modulo.filter(item=>item.imgSrc)" :key="modulo.id">
                                    <inline-svg :id="modulo.id" :src="modulo.imgSrc" :aria-label="modulo.imgAlt" :title="modulo.imgTitle" width="100%" height="100%" class="pt-1 pt-md-4" v-if="modulo.id === 'localizacao01'"/>
                                    <img :id="modulo.id" :src="modulo.imgSrc" :alt="modulo.imgAlt" :title="modulo.imgTitle" width="100%" height="100%" class="pt-1 pt-md-4" v-else-if="modulo.imgSrc"/>
                                    <div class="fs-9" v-if="modulo.imagens">{{modulo.imagens}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        font-size: 17px;
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
    
    @media (min-width: 768px) { #localizacao01{padding-right: 35px;} }
    .nav-link {cursor: auto!important}
    .dark-mode .nav-pills .nav-link.active {          
            background-color: initial !important;
            color: #fff !important;
    }
</style>
<script>
    export default {
        props: ['category','frase', 'UrlProduts'],
        data () {
            return {
                curent:1,

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
                                imgAlt: "lancamento-avanti-crm",
                                imgTitle: "Imagem do lançamento Avanti no CRM para Imibiliárias e Corretores mostrada no celular e desktop",
                                imagens: "Imagens cedidas pela Ciplart Construtora"
                            },
                            {
                                id: "lanc02",
                                item: "Status dos Lançamentos com informe das suas evoluções;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "lanc03",
                                item: "Informe múltiplos valores, negociações especiais e unidade de referência;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "lanc04",
                                item: "Anexe ao seu anúncio a tabela de preço e o memorial descritivo e compartilhe facilmente com seus potenciais compradores.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                        ], 
                        href: "/#imoveis-lancamentos",
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
                                imgAlt: "casa-venda-crm",
                                imgTitle: "Cadastro de casa para venda em condomínio no CRM mostrada no celular e desktop",
                                imagens: ""
                            },
                            {
                                id: "venda02",
                                item: "Sugestão e revisão de textos integrados ao Chat GPT;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "venda03",
                                item: "Controle de Autorização de vendas;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "venda04",
                                item: "Integração fácil com portais imobiliários e rígido controle para restringir ou destacar informações no anúncio.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                        ],
                        href: "/#imoveis-venda",
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
                        desc2:  "Um sistema que classifique seu anúncio como 'Pet Friendly', 'Regiões acadêmicas'. Mantenha um rígido controle sobre o quadro de chaves e desfrute do inovador empréstimo de chaves.",
                        activeIndex: 0,
                        modulo: [
                            {
                                id: "locacao01",
                                item: "Descritivo completo para imóveis de Locação",
                                imgSrc:  "/images/sub100/prod/locacao/notebookHome1.png?date20231013",
                                imgAlt: "apartamento-locacao-crm",
                                imgTitle: "Ficha cadastral do apartamento para locação no CRM mostrado no celular e desktop",
                                imagens: ""
                            },
                            {
                                id: "locacao02",
                                item: "Informe detalhado dos valores complementares ao aluguel;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "locacao03",
                                item: "Registro de alertas e informações restritas;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "locacao04",
                                item: "Ocupação do imóvel e rastreio de chaves.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                        ],
                        href: "/#imoveis-locacao",
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
                                imgAlt: "casa-para-locacao-de-temporada",
                                imgTitle: "Cadastral da casa para locação de temporada mostrada no celular e desktop",
                                imagens: ""
                            },{
                                id: "temporada02",
                                item: "Calendário permite visualizar todas as informações dos imóveis de temporada;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "temporada03",
                                item: "Reservas integradas com outros Portais de temporada;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "temporada04",
                                item: "Bloqueios por períodos simultâneos integrados ao site e outros Portais de temporada.",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            ],
                        href: "/#imoveis-temporada",
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
                                imgAlt: "fazenda-a-venda-imoveis-rurais",
                                imgTitle: "Cadastro de imóveis rurais com o CRM SUBSEE para corretores e especializados em venda de fazendas",
                                imagens: "Geoatributos cedidos pela Congeo"
                            },
                            {
                                id: "rural02",
                                item: "Registro de disponibilidade hídrica e logística a propriedade e armazenamento;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "rural03",
                                item: "Permite disponibilizar links públicos para os anúncios como laudos, histórico de pluviometria, informações sobre o CAR;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                            {
                                id: "rural04",
                                item: "Integração com atributos georreferenciados kml com interação de informações e controles de camadas.",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                            },
                        ],
                        href: "/#imoveis-rurais",
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
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites02",
                                item: "Ficha do imóvel com qualidade visual e de fácil interação;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites03",
                                item: "Área de interação para captação de leads;",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "sitesHotsites04",
                                item: "Sites responsivos e otimizados para o Google.",
                                imgSrc: "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                }
                        ],
                        href: "#sites-hotsites",
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
                                imgAlt: "exemplo-de-integracao-com-portais-de-imoveis",
                                imgTitle: "Cadastro de integração com os principais portais de imóveis",
                                imagens: ""
                                },
                                {
                                id: "portal02",
                                item: "Integração com ZAP Imóveis, Viva Real, OLX, Imóvel Web, Chaves na Mão, Casa Mineira, Imobilist e outros;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "portal03",
                                item: "Controle de ofertas e destaques para cada portal;",
                                imgSrc:  "",
                                imgAlt: "",
                                },
                                {
                                id: "portal04",
                                item: "Validação de critérios mínimos para anunciar nos portais;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "portal05",
                                item: "Controle rígido das informações que não devem ser divulgadas no anúncio.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                        ],
                        href: "/#portais-imobiliarios",
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
                                imgAlt: "minhas-conexoes-com-corretores-e-imobilirias",
                                imgTitle: "Apresentação do currículo do corretor de imóveis para criar conexões e parceirias com outro profissionais",
                                imagens: ""
                                },
                                {
                                id: "on02",
                                item: "Avaliação de imóveis em grupos fechados;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "on03",
                                item: "Divulgue suas oportunidades a suas conexões através do dashboard;",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "on04",
                                item: "Faça parcerias estratégicas e venda mais e mais rápido.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                }
                        ],
                        href: "/#minhas-conexoes",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
                    {
                        id: "localizacao",
                        icone: "/images/icons/localizacao.svg",
                        titulo: "Melhor localização",
                        iconeWidth: "43",
                        iconeHeight: "50",
                        desc1:  "Para o mercado imobiliário, a premissa da localização está diretamente relacionada a boas vendas ou locações.",
                        desc2:  "Quando o corretor não utiliza um CRM abrangente que permita cadastrar múltiplos tipos de imóveis, é comum que características relevantes dos imóveis não sejam destacadas em anúncios no seu site ou em portais. Veja alguns erros comuns encontrados em anúncios nos principais portais:",
                        activeIndex: 0,
                        modulo: [{
                                id: "localizacao01",
                                item: "Anúncios de imóveis para lançamentos com características de anúncios de revenda.",
                                imgSrc:  "/images/sub100/prod/localizacao/aprovado.svg?date20240514",
                                imgAlt: "mercado-imobiliarioa-a-premissa-da-localizacao",
                                imgTitle: "A premissa da localização está diretamente relacionada a boas vendas ou locações",
                                imagens: ""
                                },
                                {
                                id: "localizacao02",
                                item: "Imóveis de temporada com nomenclaturas de imóveis de locação anual.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "localizacao03",
                                item: " Imóveis comerciais com títulos e subtítulos que não descrevem corretamente o imóvel que se pretende vender.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                                {
                                id: "localizacao04",
                                item: "Imóveis rurais estão sendo tratados como imóveis urbanos, seja pelo tipo de unidade de medida, seja por detalhes irrelevantes como número de dormitórios, vagas de garagem, IPTU e condomínio, que apenas atrapalham a leitura e comprometem a autoridade do anunciante.",
                                imgSrc:  "",
                                imgAlt: "",
                                imgTitle: "",
                                imagens: ""
                                },
                        ],
                        href: "/#melhor-localizacao",
                        target: "",
                        imgSrc:  "/images/sub100/notebookHome.png?date20231013",
                        imgAlt: "",
                        disabled: false,
                    },
        
                ]
            }
        },
    };
</script>