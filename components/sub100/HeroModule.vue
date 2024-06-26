<template>
    <div class="py-5 position-relative bg-f8f8f8">
        <div id="crm-imobiliario" class="position-relative" style="top:-70px;"></div>
        <div class="testimonial-section">
            <div class="container">
                <div class="section-title module text-center mb-3 mb-md-4 mt-3 p-3 p-xl-0">
                    <h2 class="title text-dark fs-2" id v-html="$t('heroPlataforma.title')"></h2>
                    <h3 class="text-dark fw-normal fz-sm-18 fs-3" id v-html="$t('heroPlataforma.subtitle')"></h3>
                </div>

                <div class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 no-gutters">
                    <div class="col my-4" v-for="item in items" :key="item.id">
                        <div :id="item.urlLink"  class="position-relative" style="top: -110px;"></div>
                        <div class="testimonial-two p-4 rounded-1 shadow bg-white mb-1 mx-2 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <div class="d-flex justify-content-between mb-3">
                                    <h3 class="title fw-light fs-4 text-primary lh-1 m-0" v-html="$t(item.title)"></h3>
                                    <h4 class="icon fw-light d-flex flex-column justify-content-center align-items-center rounded border border-1">
                                        <NuxtImg loading="lazy" class="vw-auto" width="30" height="35" :src="item.icone" :alt="'logomarca-'+item.urlLink" :title="item.titleAlt"/>
                                    </h4>
                                </div>
                                <div class="d-flex align-items-center p-3 rounded-3 lh-base bg-body-tertiary bgProduto">{{ item.desc1 }}</div>
                            </div>
                            <div class="desc fs-6 lh-base text-justify mt-3">{{ item.desc2 }}</div>
                            <a :href="item.link" :aria-label="item.urlLink" :title="item.altLink" class="btn btn-outline-secondary mt-4 fs-6 fw-bold w-100">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['addClassName','mostrarTitulo'],
        data () {
            return {
                items: [
                    {
                        id: 1,
                        icone: "/images/icons/lancamentos.svg",
                        titleAlt: "Logomarca Imóveis Lançamentos",
                        title: "Imóveis <span class='fw-bold d-block'>Lançamentos</span>",
                        desc1: "Organize os seus lançamentos de maneira sistemática e minuciosa com CRM SUBSEE.",
                        desc2:  "Forneça as variações de valores das unidades, quantidade de dormitórios, banheiros, vagas de estacionamento e as metragens privativas e totais.",
                        link: "/crm-imobiliario/imoveis-lancamentos/",
                        urlLink: "imoveis-lancamentos",
                        altLink: "Clique aqui para acessar pagina dos Imóveis Lançamentos"
                    },
                    {
                        id: 2,
                        icone: "/images/icons/venda.svg",
                        titleAlt: "Logomarca Imóveis Venda",
                        alt2: "logomarca-imoveis-venda",
                        title: "Imóveis <span class='fw-bold d-block'>Venda</span>",
                        desc1:  "Aprimore a qualidade das descrições dos imóveis disponíveis para venda com melhor CRM.",
                        desc2:  "Destaque o potencial de valor de renda para locação. Ofereça insights sobre o ambiente da rua onde o locatário irá residir. Isso proporcionará uma visão completa e atrativa do imóvel.",
                        link: "/crm-imobiliario/imoveis-venda/",
                        urlLink: "imoveis-venda",
                        altLink: "Clique aqui para acessar pagina dos Imóveis Venda"
                    },
                    {
                        id: 3,
                        icone: "/images/icons/locacao.svg",
                        titleAlt: "Logomarca Imóveis Locação",
                        title: "Imóveis <span class='fw-bold d-block'>Locação</span>",
                        desc1:  "Qualifique os anúncios dos imóveis para locação com os valores adicionais ao aluguel com SUBSEE.",
                        desc2:  "Um sistema que classifique seu anúncio como 'Pet Friendly', 'Regiões acadêmicas'. Mantenha um rígido controle sobre o quadro de chaves e desfrute do inovador empréstimo de chaves.",
                        link: "/crm-imobiliario/imoveis-locacao/",
                        urlLink: "imoveis-locacao",
                        altLink: "Clique aqui para acessar pagina dos Imóveis Locação"
                    },
                    {
                        id: 4,
                        icone: "/images/icons/temporada.svg",
                        titleAlt: "Logomarca Imóveis Temporada",
                        title: "Imóveis <span class='fw-bold d-block'>Temporada</span>",
                        desc1:  "Gerenciamento de propriedades para aluguel de temporada com o CRM imobiliário especialista.",
                        desc2:  "O módulo de temporada administra reservas, bloqueios, contratos de locação de maneira fácil e intuitiva. Seus anúncios respeitam períodos de temporadas e datas especiais permitindo divulgar preços conforme calendário desejado.",
                        link: "/crm-imobiliario/imoveis-temporada/",
                        urlLink: "imoveis-temporada",
                        altLink: "Clique aqui para acessar pagina dos Imóveis Temporada"
                    },
                    {
                        id: 5,
                        icone: "/images/icons/rural.svg",
                        titleAlt: "Logomarca Imóveis Rurais",
                        title: "Imóveis <span class='fw-bold d-block'>Rurais</span>",
                        desc1:  "O anúncio de imóveis para o agronegócio brasileiro subiu de patamar com o CRM SUBSEE on.",
                        desc2:  "O módulo de imóveis rurais permite o corretor gerar informações de qualidade e padronizada para potenciais compradores e investidores sem a necessidade de gerar informações complementares.",
                        link: "/crm-imobiliario/imoveis-rurais/",
                        urlLink: "imoveis-rurais",
                        altLink: "Clique aqui para acessar pagina dos Imóveis Rurais"
                    },
                    {
                        id: 6,
                        icone: "/images/icons/sites_hotsites.svg",
                        titleAlt: "Logomarca Sites & hotsites",
                        title: "Sites & <span class='fw-bold d-block'>Hotsites</span>",
                        desc1:  "Modelos de sites, hotsites e landing pages para atender as necessidades do seu negócio.",
                        desc2:  "Os sites & Hotsites são desenvolvidos para o mercado de imóveis Urbanos e imóveis Rurais. Os dois tipos de sites possuem características e peculiaridades que proporcionam autoridade na apresentação dos seus anúncios aos potenciais compradores.",
                        link: "/crm-imobiliario/sites-hotsites/",
                        urlLink: "sites-hotsites",
                        altLink: "Clique aqui para acessar pagina dos Sites & hotsites"
                    },
                    {
                        id: 7,
                        icone: "/images/icons/portal_imobiliarios.svg",
                        titleAlt: "Logomarca Portais Imobiliários",
                        title: "Portais <span class='fw-bold d-block'>Imobiliários</span>",
                        desc1:  "Integre-se com os principais portais brasileiros de forma rápida e intuitiva com o CRM SUBSEE.",
                        desc2:  "O sistema possui um controle de disponibilidade e destaques de cada portal contratado, permitindo otimizar o máximo dos investimentos despendidos pelo anunciante.",
                        link: "/crm-imobiliario/portais-imobiliarios/",
                        urlLink: "portais-imobiliarios",
                        altLink: "Clique aqui para acessar pagina dos Portais Imobiliários"
                    },
                    {
                        id: 8,
                        icone: "/images/icons/on.svg",
                        titleAlt: "Logomarca Minhas Conexões",
                        title: "Minhas <span class='fw-bold d-block'>Conexões</span>",
                        desc1:  "Crie conexões com seus parceiros, convide um corretor amigo a acesser seu CRM Imobiliário.",
                        desc2:  "Construa facilmente conexões com redes de parceiras, divulgue oportunidades aos seus grupos e faça avaliações coletivas dentro do seu CRM Imobiliário.",
                        link:   "/crm-imobiliario/minhas-conexoes/",
                        urlLink: "minhas-conexoes",
                        altLink: "Clique aqui para acessar pagina das Minhas Conexões"
                    },
                    {
                        id: 9,
                        icone: "/images/icons/localizacao.svg",
                        titleAlt: "Logomarca Melhor Localização",
                        title: "Melhor <span class='fw-bold d-block'>Localização</span>",
                        desc1:  "A premissa da localização está diretamente relacionada a boas vendas ou locações.",
                        desc2:  "A estratégia de quem vende mais está sempre ligada à angariação dos melhores imóveis. Esses imóveis destacam-se por vários quesitos, como melhor localização, preço e conservação. Entretanto, o anúncio de um imóvel tradicional pode se tornar muito eficiente e atrativo.",
                        link:   "/crm-imobiliario/melhor-localizacao/",
                        urlLink: "melhor-localizacao",
                        altLink: "Clique aqui para acessar pagina do Melhor Localização"
                    }
                ]
            }
        }
    };
</script>
<style lang="scss" scoped>
    .bgProduto{min-height:104px}
    .icon{height:56px; width:68px}
    .icon svg{height:35px}
    .bg-e9eefd{background:$white}
    .fil0 {fill:#686AF1!important}
    .text-justify {text-align:justify}
    .dark-mode {
        .fil0 {fill:#ffff!important}
        .text-dark {color:$white!important}
        .bgProduto{background-color:#111!important}
    }
</style>
<style>
.icon path{stroke:initial!important}
</style>