<template>
    <div class="py-3">
        <div class="container" v-if="dados.title">
            <div class="testimonial-section">
                <h2 class="text-center text-secondary fs-3 fw-light pb-3" v-html="dados.title"></h2>
                <div class="p-5 fs-6 text-justify rounded-3 bg-body-tertiary bgProduto" v-html="dados.desc"></div>
                <h3 class="fs-3 text-center fw-bold lh-sm my-4" v-html="dados.func"></h3>

                <div class="row row-cols-xl-2 row-cols-sm-1 row-cols-1 no-gutters">
                    <div class="col my-4" v-for="item in dados.items" :key="item.id">
                        <div class="testimonial-two p-4 p-lg-5 rounded-1 shadow bg-white mb-1 mx-2 h-100" v-if="$t(item.id)">
                            <h3 class="title fw-light fs-5 text-primary mb-1" v-html="$t(item.title)"></h3>
                            <div class="h-100 d-flex flex-column justify-content-center">
                                <div class="row gy-3 text-justify" v-html="$t(item.desc)"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-5 p-5 fs-6 text-justify rounded-3 bg-body-tertiary bgProduto" v-html="dados.end"></div>
            </div>
            <hr class="mb-5 pb-1" />
        </div>
    </div>
</template>
<script>
    export default {
        props: ['category','UrlProduts'],
        data () {
            return {
                lancamento: 
                {
                    title:  "Dicas de como cadastrar Lançamentos Imobiliários no <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>Muitos CRMs voltados para imobiliárias e corretores possuem funcionalidades para o cadastro de imóveis à venda e locação. No entanto, são poucas as soluções que permitem cadastrar de forma específica um imóvel ou empreendimento destinado a lançamentos imobiliários, sejam apartamentos, condomínios horizontais ou loteamentos.</p>"+
                            "<p>Quando uma incorporadora, imobiliária ou corretor precisam anunciar um imóvel exclusivamente de lançamento, o processo pode se tornar mais difícil e parecer amador. Isso ocorre porque os imóveis de lançamento frequentemente exigem uma apresentação visual atrativa que acompanhe o material de venda fornecido pela incorporadora ou loteadora.</p>"+
                            "<p>O <span class='fw-bold text-primary'>CRM SUBSEE</span> oferece uma solução robusta para lançamentos imobiliários. Ele possui campos específicos que permitem uma melhor apresentação no site do anunciante e em portais imobiliários que aceitam integrações com arquivos XML.</p>",
                    func:   "A seguir, alguns recursos e funcionalidades de como cadastrar <span class='d-inline d-lg-block'>um lançamento no CRM Imobiliário SUBSEE <span class='text-on'>on</span>:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Variação de <span class='fw-bold'>Valores</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Os lançamentos possuem uma variação de valores, muitas vezes com a necessidade de informar o valor mínimo e máximo da unidade.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O anúncio deve ter uma unidade de referência e o valor dessa unidade para deixar claro que, mesmo existindo várias unidades com valores diferentes, a unidade em questão possui o valor sugerido para venda.</div>"
                        },
                        {
                            id:     "02",
                            title:  "Variação de <span class='fw-bold'>Metragem</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O CRM SUBSEE possui campos específicos para a variação de metragem de áreas privativas, totais e do terreno.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Além das variações, o anúncio permite escolher a unidades de medida em <span class='fw-bold'>m², ft² e acres</span>. </div>"
                        },
                        {
                            id:     "03",
                            title:  "Status <span class='fw-bold'>Lançamento Imobiliário</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Permite divulgar uma timeline do status do lançamento, trazendo informações desde “Breve Lançamento” até “Pronto para Morar”.</div>"
                        },
                        {
                            id:     "04",
                            title:  "Landing Pages de <span class='fw-bold'>alta conversão</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O CRM SUBSEE é excelente nesse quesito, permitindo cadastrar fotos, áudios, vídeos, vídeos 360º, plantas do empreendimento, além de anexos que podem ser publicados ou exportado para o anúncio ou uma landing page para converter leads altamente qualificados.</div>"
                        }
                    ],
                    end:   "Essas funcionalidades demonstram como é fácil cadastrar lançamentos imobiliários de forma profissional e atrativa no <span class='fw-bold text-primary'>CRM SUBSEE</span>, potencializando suas chances de sucesso na venda de novos empreendimentos"
                },
                venda: 
                {
                    title:  "Dicas de como cadastrar um imóvel de venda ou revenda no <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>O CRM para imobiliárias e corretores SUBSEE on possui diferenciais competitivos em relação a outros CRMs. O SUBSEE on foi desenvolvido com a experiência de quase 25 anos da SUB100 Sistemas, empresa que controla um dos maiores portais imobiliários do Brasil, o <a href='https://sub100sistemas.com.br' target='_blank' class='text-primary text-decoration'>www.sub100.com.br</a>. Esse portal foi um dos primeiros a surgir no mercado, juntamente com o <span class='fw-bold text-primary'>CRM SUBSEE</span>.</p>"+
                            "<p>Essa expertise de mais de duas décadas nos permitiu criar um CRM adaptado às necessidades do mercado. Cadastros bem-feitos geram bons conteúdos que são exportados para o Portal SUB100 e para os principais portais imobiliários do Brasil. Além disso, há integração nativa com os sites de corretores e imobiliárias, feiras de imóveis e redes de parcerias.</p>"+
                            "<p>O <span class='fw-bold text-primary'>CRM SUBSEE</span> oferece uma solução adequada para o cadastro de imóveis de venda ou revenda. A grande dificuldade nesse tipo de negociação é a falta de experiência de muitos CRMs novos no mercado, que carecem de informações básicas, ou até mesmo CRMs mais antigos, que possuem campos desatualizados que prejudicam a experiência do corretor e do cliente.</p>",
                    func:   "A seguir, alguns recursos e funcionalidades de como cadastrar<span class='d-inline d-lg-block'> um imóvel para venda no CRM SUBSEE <span class='text-on'>on</span>:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Classificação de <span class='fw-bold'>Tipos de Imóveis</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Para anunciar em portais, é necessário que o CRM tenha a classificação correta dos tipos de imóveis. No CRM SUBSEE, há uma variedade de tipos de imóveis residenciais, como apartamento em sobreloja. Para imóveis comerciais, há opções como laje comercial. E para tipos classificados como negócios e investimentos, há opções atualizadas como venda de negócios tipo startup. Esses são exemplos de tipos e subtipos para cadastrar seu imóvel de venda.</div>"
                        },
                        {
                            id:     "02",
                            title:  " Informações de Valores <span class='fw-bold'>Restritos e Públicos</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Muitas vezes, imóveis à venda são procurados por investidores interessados no retorno da renda. O CRM SUBSEE considera isso, oferecendo um campo para o potencial valor de renda.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O sistema dispõe de campos como avaliação da imobiliária, avaliação bancária e princípios aceitos em uma negociação.</div>"
                        },
                        {
                            id:     "03",
                            title:  "Informe de  <span class='fw-bold'>Ambientes e Dormitórios</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O SUBSEE é pragmático com essas informações, oferecendo recursos simples e úteis para que seu anúncio não fique cansativo.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O CRM possui campos de multiescolha, campos abertos e específicos para cada tipo de negócio. Por exemplo, um valor de IPTU não deve ser mostrado em um anúncio de fazenda, tornando o anúncio do corretor de imóveis mais profissional e de fácil leitura.</div>"
                        },
                        {
                            id:     "04",
                            title:  "Descritivo do Anúncio Integrado com o <span class='fw-bold'>ChatGPT</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O anúncio não precisa ser um poema, mas deve comunicar de forma clara e correta para quem quer comprar. Para isso, o SUBSEE oferece uma sugestão padrão e dois níveis de revisão com integração do ChatGPT, aumentando o poder do seu anúncio para gerar leads qualificados de alta conversão.</div>"
                        }
                    ],
                    end:   "Essas funcionalidades demonstram como é fácil cadastrar imóveis de venda ou revenda de forma profissional e atrativa no <span class='fw-bold text-primary'>CRM SUBSEE</span>, potencializando suas chances de sucesso."
                },
                locacao: 
                {
                    title:  "Dicas de como cadastrar um imóvel de locação no <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>O sistema para imobiliárias e corretores SUBSEE on possui recursos avançados para realizar um excelente cadastro de imóveis de locação. Anúncios de locação geram 10 vezes mais leads que anúncios de venda, então uma imobiliária deve estar preparada para atender a uma alta demanda de clientes interessados. Um correto cadastramento e a mitigação das dúvidas básicas no anúncio já eliminam atendimentos com perguntas simples.</p>"+
                            "<p>O anúncio de locação deve ser atualizado e baixado rapidamente. A procura é alta e a experiência do futuro locatário pode ser prejudicada sem um CRM ágil e eficaz.</p>"+
                            "<p>A <span class='fw-bold text-primary'>SUB100</span> possui vasta experiência no setor de locação e administração de imóveis, tornando seu sistema CRM extremamente ágil para colaboradores que não podem perder tempo.</p>",
                    func:   "A seguir, alguns recursos e funcionalidades de como cadastrar<span class='d-inline d-lg-block'> um imóvel para locação no CRM SUBSEE <span class='text-on'>on</span>:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Campos que informam sobre os valores que <span class='fw-bold'>compõem a locação </span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Os anúncios de locação muitas vezes têm o valor do aluguel composto por valores complementares, como valor do condomínio, valor do IPTU, seguro de incêndio e taxa de mudanças. Esses valores devem ser mostrados no anúncio ou serem restritos para um atendimento junto ao futuro locatário.</div>"
                        },
                        {
                            id:     "02",
                            title:  "Quadro de <span class='fw-bold'>chaves</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Quando uma imobiliária possui uma grande carteira de imóveis para locação, a gestão do quadro de chaves pode ser caótica. A funcionalidade de quadro de chaves dinâmico do CRM SUBSEE proporciona uma gestão adequada desses recursos</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O CRM SUBSEE on permite controlar múltiplos quadros de chaves, inclusive de filiais.</div>"
                        },
                        {
                            id:     "03",
                            title:  "Empréstimo de <span class='fw-bold'>chaves</span>:",
                            desc:   "<div class='col-auto pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Um dos pontos fortes do SUBSEE sempre foi o empréstimo de chaves. Com a nova versão do CRM SUBSEE on, essa funcionalidade ficou ainda melhor, como dizem nossos clientes gaúchos: 'tri-legal', ou 'bom demais' para os mineiros.</div>"+
                                    "<div class='col-auto d-flex flex-column pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11 text-start'>O empréstimo de chaves permite vários processos, como:<br><span style='line-height:12px !important}'>&bull; Cadastramento do visitante com foto<br>&bull; Visita assistida.<br>&bull; Visita liberada mediante retenção de documento de identificação<br>&bull; Compartilhamento de termo de visita por múltiplos meios de comunicação<br>&bull; Roteiro de visita.<br>&bull; Alerta de atraso com atualização do horário de retorno</span></div>"
                        },
                        {
                            id:     "04",
                            title:  "Emissão de <span class='fw-bold'>recibos</span>:",
                            desc:   "<div class='col-auto pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'> Já imaginou precisar emitir um recibo à imobiliária ou para terceiros? Nosso CRM possui uma das funcionalidades mais apreciadas pelos usuários do departamento financeiro: a emissão de recibos.<br>&bull; Recibo a Fornecedor/Clientes<br>&bull; Recibo de Fornecedores/Clientes<br><br>Com essa ferramenta, você simplifica seus processos financeiros e garante um maior nível de organização e eficiência. Experimente essa funcionalidade e veja como um simples recibo pode transformar a gestão financeira da sua empresa.</div>"
                        }
                    ],
                    end:   "O setor de locação de uma imobiliária exige agilidade e eficiência. O SUBSEE on, com suas funcionalidades, é o CRM perfeito para ajudar sua imobiliária a aumentar a carteira de locação com bons anúncios e contribuir com rapidez na fase de locação do imóvel."
                },
                temporada: 
                {
                    title:  "Dicas de Como Cadastrar um Imóvel de Temporada no <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>O sistema para imobiliárias e corretores SUBSEE on possui recursos avançados para realizar um excelente cadastro de imóveis de temporada. Os anúncios de imóveis de temporada exigem beleza, clareza e, principalmente confiança. Claro que o anúncio gerado pelo CRM SUBSEE on irá ajudá-lo a cumprir com esses requisitos</p>"+
                            "<p>Os anúncios de locação de temporada necessitam de atualização dos valores para a próxima alta temporada. Para isso, o sistema pode deixar o anúncio com valores a consultar, pois em muitos casos é necessário confirmar junto ao locador.</p>"+
                            "<p>A <span class='fw-bold text-primary'>SUB100</span> possui vasta experiência no setor de locação de temporada de imóveis desde 2007, tornando seu sistema CRM extremamente ágil para corretores de temporada que não podem perder tempo.</p>",
                    func:   "A seguir, alguns recursos e funcionalidades de como cadastrar um imóvel para locação de temporada no <span class='fw-bold text-primary'>CRM SUBSEE</span>:",
                    items: [
                        {
                            id:     "01",
                            title:  "Campos que Informam Sobre os Valores que Compõem a <span class='fw-bold'>Locação de Temporada</sapn>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Os anúncios de locação de temporada muitas vezes incluem além do valor das diárias uma composição de outros valores complementares, como taxa de limpeza, rouparia, taxa de condomínio e taxas extras. Esses valores devem ser mostrados no anúncio ou serem restritos para atendimento direto com o futuro locatário.</div>",
                        },
                        {
                            id:     "02",
                            title:  "Características do <span class='fw-bold'>Imóvel</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Quando se trata de locação para curto período, chamada locação de temporada, a busca pela experiência do locatário é muito diferente. O anúncio deve informar algumas características, como:<br>&bull; PAX - Capacidade de ocupação por adultos e crianças<br>&bull; Informação sobre os cômodos com suas mobílias e utensílios para o período da ocupação<br>&bull; Proximidade do mar, lagos ou rios<br>&bull; Vista para o mar ou serra<br>&bull; Acesso à rede Wi-Fi</div>",
                        },
                        {
                            id:     "03",
                            title:  "Bloqueios e Reservas <span class='fw-bold'>por período</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>A locação de temporada é muito similar à ocupação de um hotel, necessitando bloquear e reservar unidades. Com o CRM SUBSEE, sua locação de temporada ficará mais simples e prática para atender turistas de alta ou baixa temporada do mundo todo.</div>",
                        },
                        {
                            id:     "04",
                            title:  "Calendário integrado ao <span class='fw-bold'>anúncio</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Para as imobiliárias que possuem imóveis de temporada, o controle do calendário é primordial para evitar overbooking. O CRM SUBSEE on integra o calendário do anúncio ao site da imobiliária, ao portal de imóveis SUB100 e a outros portais especializados em temporada que aceitam integração por XML do anúncio.</div>",
                        },
                    ],
                    end: "Aproveite todos esses recursos e potencialize seus anúncios de imóveis de temporada com o <span class='fw-bold text-primary'>CRM SUBSEE</span>. Cadastre-se hoje mesmo e descubra como nosso sistema pode transformar a gestão dos seus imóveis e maximizar suas locações de curta duração. Não perca mais tempo, comece agora!"
                },
                rural: 
                {
                    title:  "Dicas de como cadastrar um Imóvel Rural no <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>O sistema para imobiliárias e corretores SUBSEE on é excelente para anúncios de imóveis rurais, como fazendas, sítios e chácaras. O agronegócio brasileiro evoluiu nas últimas décadas, tornando-se uma referência mundial no setor. Tanto o corretor de imóveis rurais quanto o comprador de grandes áreas ou fazendas também evoluíram. O nível de especialização técnica para quem anuncia ou para quem compra aumentou significativamente, e a busca por informações de qualidade para avaliar as melhores condições para um excelente negócio tornou-se essencial. Com o CRM Imobiliário SUBSEE on, isso se tornou uma realidade.</p>"+
                            "<p>Os anúncios de imóveis rurais enfrentam um dilema entre apresentar informações de qualidade e ocultar detalhes que possam prejudicar o anunciante devido a entrada indesejada de outros profissionais mal-intencionados na captação desse anúncio. Com o SUBSEE on, esse problema foi resolvido, pois o sistema trabalha perfeitamente entre esses dois mundos.</p>"+
                            "<p>A <span class='fw-bold text-primary'>SUB100</span> possui vasta experiência no setor de imóveis rurais, adquirida com profissionais do mercado, como corretores, imobiliárias e empresas de georreferenciamento que atendem o agro.</p>",
                    func:   "A seguir, alguns recursos e funcionalidades de como <span class='d-inline d-lg-block'>cadastrar um imóvel rural no <span class='fw-bold text-primary'>CRM SUBSEE</span>:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Campos que informam de verdade um <span class='fw-bold'>anúncio rural</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Os anúncios de imóveis rurais possuem valores de venda muito altos em relação aos valores de um imóvel urbano. Para que o anunciante se torne uma autoridade no conhecimento da venda dessa propriedade, o CRM SUBSEE trouxe campos pragmáticos e essenciais para essa negociação:<br>&bull; Princípios da negociação<br>&bull; Organização correta sobre as áreas abertas e totais<br>&bull; Matrículas e documentações<br>&bull; Cadastramento correto da propriedade, independente do CEP da localidade<br>&bull; Unidade de medicas padronizadas para o agro</div>"
                        },
                        {
                            id:     "02",
                            title:  "Cadastramento de <span class='fw-bold'>atributos georreferenciados<span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Atributos podem ser anexados através de arquivos KML, com informações complementares como detalhamento da área, tipo e descrição. Além disso, é possível vincular links com fotos ou vídeos.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>A divulgação do anúncio pode ser pública ou restrita. Quem define é o anunciante, mas a qualquer momento, se necessário, o corretor pode compartilhar informações restritas especificamente com um interessado ou parceiro, com total segurança e transparência.</div>"+
                                    "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>A apresentação das sequências dos arquivos KML é feita através do Google Maps, com controle da visibilidade das camadas (layers).</div>"
                        },
                        {
                            id:     "03",
                            title:  "Busca de <span class='fw-bold'>anúncio</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>A busca de anúncios no CRM é padronizada para propriedades rurais, proporcionando a melhor experiência para anunciantes e compradores:<br>&bull; Busca por propriedades por estado<br>&bull; Busca por propriedades por cidade<br>&bull; Busca por propriedade pelo bioma<br>&bull; Busca por propriedade pelo Google Maps<br>&bull; Busca por venda ou arrendamento</div>"
                                },
                        {
                            id:     "04",
                            title:  "Anexos de <span class='fw-bold'>arquivos e CAR</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Os anúncios de propriedades rurais são mais complexos e necessitam ser complementados com alguns tipos de anexos e links, que podem ser restritos ou públicos:<br>&bull; Cadastro de anexos de laudos<br>&bull; Cadastro de anexos de clima<br>&bull; Cadastro de anexos de CAR<br>&bull; Link para o car.gov.br</div>"
                        },
                        {
                            id:     "05",
                            title:  "Características do <span class='fw-bold'>anúncio</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Trabalhar com um CRM especializado em imóveis rurais torna tudo mais fácil. O detalhamento da propriedade, nas mãos de um corretor experiente, resultará em um anúncio disruptivo:<br>&bull; Nome da propriedade<br>&bull; Bioma em que a propriedade está inserida<br>&bull; Dupla aptidão da propriedade<br>&bull; Propriedade em situação de juquira<br>&bull; Predominância de cultivo<br>&bull; Tipo de solo predominante e teor de argila<br>&bull; Pluviometria e período de chuvas<br>&bull; Disponibilidade hídrica e volume<br>&bull; Logística da propriedade e ao armazenamento</div>"
                        },
                        {
                            id:     "06",
                            title:  "Compartilhar <span class='fw-bold'>anúncios</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Quando o assunto é compartilhar um anúncio com um corretor parceiro ou um comprador, o padrão de qualidade para o mercado subiu de nível com o CRM SUBSEE. Com recursos que permitem restringir ou habilitar a visualização para cada caso específico, você pode controlar:<br>&bull; Informação de Preço: Decida se o preço será visível ou não.<br>&bull; Divulgação de Premissas para Negociação: Escolha quais detalhes de negociação serão compartilhados.<br>&bull; Mascarar Localização: Oculte a localização exata do imóvel, se necessário.<br>&bull; Anexos Restritos: Controle o acesso a documentos e anexos importantes.<br>&bull; Ficha do Anúncio: Personalize a ficha do anúncio de acordo com o destinatário.<br><br>Esses recursos garantem que você mantenha a qualidade e a confidencialidade das informações ao compartilhar anúncios.</div>"
                        }
                    ],
                    end: "Sem dúvidas, o SUBSEE on, com seus recursos para imóveis rurais, elevará sua imobiliária especializada em anúncios de fazendas, sítios e chácaras a um novo patamar de qualidade. Cadastre-se hoje mesmo e descubra como nosso sistema pode transformar a gestão dos seus imóveis e maximizar suas vendas. Não perca mais tempo, comece agora! "
                },
                on: 
                {
                    title:  "Dicas de Como Gerar Conexões com <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>Se me perguntarem em que revolução estamos atualmente vivendo, eu diria que é a era das Conexões. A era do conhecimento já foi ultrapassada. No mercado imobiliário, as conexões fortes são cada vez mais essenciais, pois é cada vez mais difícil se diferenciar em um mercado tão competitivo. O corretor de imóveis hoje precisa saber se conectar, pois seu produto e seus clientes exigem cada vez mais rapidez e autoridade nesse mercado.</p>",
                    func:   "A seguir, apresentamos alguns recursos e funcionalidades <span class='d-inline d-lg-block'>de conexão disponíveis no <span class='fw-bold text-primary'>CRM SUBSEE</span>:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Acervo <span class='fw-bold'>imobiliário</span> ",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O corretor ou a imobiliária precisam comunicar ao mercado sobre seu acervo. A experiência em negociações e transações imobiliárias gera autoridade e firmeza para tratar com vendedores e compradores. Através do SUBSEE, é possível gerar esse acervo de forma profissional.</div>"
                        },
                        {
                            id:     "02",
                            title:  "Redes de <span class='fw-bold'>parcerias</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Desde a sua primeira versão, o SUBSEE foi concebido com a formação de redes em mente. A Central de Negócios Imobiliários de Maringá foi a precursora e, há mais de 20 anos, utiliza nossos serviços. Hoje, existem dezenas de redes pelo Brasil, e com o SUBSEE, as conexões entre elas podem ser mais eficazes através da versão atual do CRM SUBSEE on ou dos nossos sites/portais para Redes.</div>"
                        },
                        {
                            id:     "03",
                            title:  "Construção de micro <span class='fw-bold'>redes imobiliárias</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Dois corretores ou imobiliárias podem formar uma rede de negócios com interações internas e restritas no sistema CRM. Descubra como isso é possível e potencialize suas parcerias.</div>"
                        },
                        {
                            id:     "04",
                            title:  "Conexão para <span class='fw-bold'>corretores autônomos</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Acesso específico para corretores em CRM é comum. No entanto, com o SUBSEE, tudo pode ser melhorado para aprimorar sua experiência e conectar-se melhor com o mercado.</div>"
                        }
                    ],
                    end: "A palavra do momento é conexão. Com o <span class='fw-bold text-primary'>CRM SUBSEE</span>, você estará atualizado na atual revolução humana, garantindo que suas conexões e parcerias no mercado imobiliário sejam fortes e eficazes."
                },
                portal: 
                {
                    title:  "Dicas de como anunciar em Portais de Imóveis com <span class='fw-bold text-primary'>CRM SUBSEE</span>",
                    desc :  "<p>Os primeiros portais de imóveis surgiram no final dos anos 90. Naquela época, portais como Planeta Imóvel, Imóveis Curitiba e SUB100 eram os protagonistas do mercado, iniciando a transformação dos anúncios impressos para os digitais. Antes, imobiliárias e corretores lutavam por caracteres e linhas nos anúncios impressos, mas com a chegada dos portais, um novo mundo de possibilidades se abriu.</p>"+
                            "<p>Atualmente, existem dezenas de portais e centenas de CRMs que integram os anúncios aos portais de preferência dos corretores ou imobiliárias. No entanto, a dificuldade atual reside na qualidade das integrações entre os CRMs e os portais. Muitos portais, por atenderem a uma vasta gama de integrações, preferem ter layouts de dados mais simples, o que pode fazer com que um bom anúncio de um bom CRM se torne comum diante da listagem de ofertas.</p>"+
                            "<p>O <span class='fw-bold text-primary'>CRM Imobiliário SUBSEE</span> permite fazer um excelente cadastro de anúncios. Como o <span class='fw-bold text-primary'>SUBSEE</span> é nativo na exportação para o Portal SUB100, a mesma qualidade do anúncio que está no seu sistema e no site do anunciante estará também no <span class='fw-bold text-primary'>Portal SUB100</span>, propagando a qualidade por esses vários meios.</p>",
                    func:   "Aqui estão 10 orientações que seus corretores <span class='d-inline d-lg-block'>ou sua equipe de Marketing devem conhecer:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Cadastro <span class='fw-bold'>completo</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Preencha todos os campos do cadastro no CRM SUBSEE para garantir que todas as informações necessárias estejam disponíveis para exportação.</div>"
                        },
                        {
                            id:     "02",
                            title:  "Mídias de <span class='fw-bold'>alta qualidade</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Utilize fotos de qualidade para destacar seu anúncio. O SUBSEE permite a inclusão de várias mídias sendo (fotos, vídeos, vídeos 360º, plantas, áudio e arquivos KML), além dos arquivos anexos que pode ser inserido no corpo do anúncio o que melhora a clareza do anúncio e gerando mais leads qualificados.</div>"
                        },
                        {
                            id:     "03",
                            title:  "Descrição  <span class='fw-bold'>detalhada</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Escreva descrições detalhadas e atraentes. Informações completas sobre o imóvel, como metragem, número de quartos, localização e diferenciais, ajudam a atrair mais interessados.</div>"
                        },
                        {
                            id:     "04",
                            title:  "Atenção aos <span class='fw-bold'>detalhes</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Certifique-se de que todas as informações estão corretas e atualizadas. Um anúncio bem detalhado e sem erros transmite mais confiança aos potenciais clientes.</div>"
                        },
                        {
                            id:     "05",
                            title:  "Utilização dos Recursos do <span class='fw-bold'>CRM</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Aproveite todos os recursos que o CRM SUBSEE oferece, como a possibilidade de destacar anúncios, adicionar tags e gerenciar leads de forma eficiente. Os destaques e super destaques têm uma função estratégica para anunciar em portais imobiliários.<br>Algumas premissas devem ser cumpridas:<br>&bull;Imóveis com pouca procura devem ser destacados e monitorados.<br>&bull;Imóveis comuns e de fácil comercialização não precisam ser destacados, pois são os mais pesquisados.<br>&bull;Os destaques devem ser escolhidos com critério, pois podem gerar 10 vezes mais leads do que os imóveis sem destaque.<br>&bull;O responsável pelo gerenciamento dos destaques deve fazer um benchmarking sobre o que está sendo destacado e qual é a competição de ofertas.</div>"
                        },
                        {
                            id:     "06",
                            title:  "Entenda os termos como tipos e subtipos para <span class='fw-bold'>anunciar corretamente</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Muitos portais possuem termos para tipos e subtipos de imóveis que não são compatíveis com os utilizados em CRMs imobiliários. Isso pode causar problemas ao cadastrar imóveis, especialmente comerciais, negócios e rurais, como Laje Inteira, Prédio Inteiro, Lojas, Barracão, negócios para venda e Haras ou Granjas. Esses tipos muitas vezes podem ser interpretados de forma diferente em cada região do país.<br>Para evitar confusões e garantir que seus anúncios sejam corretamente entendidos, é importante:<br>&bull;Conhecer os Termos Utilizados pelos Portais;<br>&bull;Harmonizar os Cadastros no CRM;<br>&bull;Adaptar-se às Diferenças Regionais<br><br>Seguindo essas diretrizes, você garantirá que seus anúncios sejam claros e atrativos, independentemente da plataforma ou região.</div>"
                        },
                        {
                            id:     "07",
                            title:  "Integração com <span class='fw-bold'>portais</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Utilize a integração nativa do SUBSEE com o Portal SUB100 para garantir que seus anúncios sejam exibidos com a mesma qualidade em ambos os locais. Explore também outras integrações via XML para expandir a visibilidade dos seus imóveis.</div>"
                        },
                        {
                            id:     "08",
                            title:  "Acompanhamento de <span class='fw-bold'>resultados</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Monitore os resultados dos seus anúncios. O CRM SUBSEE permite acompanhar o desempenho dos anúncios e ajustar as estratégias conforme necessário para melhorar os resultados.</div>"
                        },
                        {
                            id:     "09",
                            title:  "Acompanhamento das <span class='fw-bold'>publicações</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Diferente do monitoramento dos resultados, monitorar as publicações permite identificar grandes gaps, como anúncios com informações incompletas ou anúncios fantasmas que deveriam ser retirados e ainda constam nos portais. Esse monitoramento bem conduzido pode aumentar a eficiência na geração de leads qualificados.</div>"
                        }
                        ,
                        {
                            id:     "09",
                            title:  "Converse com seu <span class='fw-bold'>Time de Marketing</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Analise se o CRM está gerando problemas de anúncios fantasmas. Esses problemas muitas vezes são causados pelo fator humano, pelo CRM integrador ou pelo próprio portal. Avaliar esse processo com frequência ajuda a mitigar críticas dos usuários e possíveis clientes que estejam procurando imóveis para comprar ou alugar.</div>"
                        }
                    ],
                    end: "Seguindo essas dicas, você poderá maximizar a eficácia dos seus anúncios em portais de imóveis, utilizando todo o potencial do <span class='fw-bold text-primary'>CRM SUBSEE</span> para alcançar mais clientes e fechar mais negócios."
                },
                localizacao:
                {
                    title:  "Dicas de como ganhar a <span class='fw-bold text-primary'>Melhor Localização</span> para seus Imóveis.",
                    desc :  "Conseguir um imóvel em uma ótima localização já foi uma tarefa difícil em um mercado imobiliário tão competitivo. Agora, não podemos perder esse fator de diferenciação, seja para lançamentos, venda, locação, temporada ou imóveis rurais",
                    func : "Baseado nisso, aqui estão algumas dicas<span class='d-inline d-lg-block'> que podem contribuir para o sucesso:</span>",
                    items: [
                        {
                            id:     "01",
                            title:  "Apresentação dos <span class='fw-bold'>Imóveis</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Invista em fotos, plantas e vídeos de alta qualidade. Experimente revisar a descrição do anúncio com o ChatGPT integrado ao SUBSEE. Recursos de áudio também são bem-vindos. O CRM possui essa funcionalidade que pode ser exportada para seu site e para o portal de imóveis SUB100.</div>"
                        },
                        {
                            id:     "02",
                            title:  "Destaques e <span class='fw-bold'>Super Destaques</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>No site ou em portais, os imóveis podem ser destacados. Um imóvel em destaque melhora a visualização e pode gerar muito mais leads. Além dos destaques a importância das targetas de Financiável, Exclusivo Aceita permuta promovem o interesse do consumidor.</div>"
                        },
                        {
                            id:     "03",
                            title:  "Parcerias <span class='fw-bold'>Estratégicas</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>No mercado imobiliário, é comum a parceria na venda de imóveis com angariação exclusiva. Tenha informações importantes registradas em áreas restritas do anúncio, onde poderão ser apresentadas aos seus parceiros de forma rápida e com total autoridade para a venda.</div>"
                        },
                        {
                            id:     "04",
                            title:  "Serviço ao <span class='fw-bold'>Cliente</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>Seu cliente, proprietário do imóvel, precisa acompanhar a evolução do anúncio e estar ciente dos próximos passos. Mantenha-o informado sobre o desempenho do seu imóvel no seu site e no Portal SUB100. Utilize os recursos de conexões que o SUBSEE oferece.</div>"
                        },
                       
                        {
                            id:     "05",
                            title:  "Estudo de <span class='fw-bold'>Mercado</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>O CRM SUBSEE está integrado ao Portal SUB100. Aproveite os relatórios de inteligência de mercado disponíveis no menu Dashboard para cada cidade. Esses dados poderão ser compartilhados a sua equipe de marketing digital para melhorar a performance das suas campanhas.</div>"
                        },
                        {
                            id:     "06",
                            title:  "Flexibilidade nas <span class='fw-bold'>Negociações</span>:",
                            desc:   "<div class='col-auto d-flex flex-column pt-2 pe-0'><img src='/images/icons/visto2.svg?5520220555404' alt='' height='20' width='25' class='iconVisto'></div>"+
                                    "<div class='col-10 col-lg-11'>No campo de negociações, sinalize que seu anúncio está preparado para receber propostas. Libere esses campos para atrair mais contatos e interações com os interessados.</div>"
                        }
                    
                    ],
                    end: "Implementar essas estratégias, juntamente com a ênfase na localização do seu anúncio nos principais canais, com a qualidade exigida pelo consumidor, pode maximizar o sucesso nas vendas e locações no competitivo mercado imobiliário."
                }
            }
        },
        computed: {
            dados() {
                return this[this.category]
            }
        }
    };
</script>
<style lang="scss" scoped>
    .text-justify {text-align:justify}
    .dark-mode {
        .text-dark {color:$white!important}
        .bgProduto{background-color:#111!important}
    }
</style>