<template>
    <div class="frequent">
        <div class="container">
            <div class="position-relative py-5">
                <inline-svg  src="/images/sub100/frequent2.svg?552022554" aria-label="duvidas-frequentes" title="Ponto de interrogação para ilustrar a sessão de dúvidas frequentes" class="position-absolute top-0 d-none d-md-block"/>
                <div class="text-center mb-3 mb-md-5 p-3 p-xl-0 position-relative z-3">
                    <h4 class="text-secondary" v-html="$t('heroFrequent.title')"></h4>
                </div>

                <div class="d-flex align-items-center flex-column position-relative z-3">
                    <div class="col-12 col-md-8">
                        <section class="accordion accordion--radio mb-4">
                            <div class="tab mb-4" v-for="frequent in $t('heroFrequent.frequents')" :key="frequent.id">
                                <input type="radio" name="accordion-2" :id="`${frequent.id}`" class="position-absolute opacity-0 z-n1" :aria-label="frequent.title">
                                <label :for="`${frequent.id}`" class="tab__label d-flex justify-content-between btn btn-light border  rounded-0 p-3 w-100 fs-6 btn-block collapsed">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3"><img src="/images/icons/visto2.svg?5520220555404" :alt="frequent.alt" :title="frequent.title" class="iconVisto" height="20" width="25"/></div>
                                        <div class="lh-sm text-start">{{ frequent.title }}</div>
                                    </div>
                                </label>
                                <div class="tab__content bg-white">
                                    <p class="border border-secondary-subtle border-top-0 p-3" v-html="frequent.desc"></p>  
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <inline-svg src="/images/sub100/frequent.svg?55202205554" aria-label="duvidas-frequentes" title="Ponto de interrogação para ilustrar a sessão de dúvidas frequentes" class="position-absolute top-0 end-0 z-1" style="top: -40px!important"/>
            </div>
        </div>
    </div>
</template>
<style>
    .dark-mode .frequent .fil00 {fill:#5D5FEF!important}
    .dark-mode .frequent .fil1 {fill: #444b5f!important }
    .accordion label {cursor: pointer;}
</style>
<style lang="scss" scoped>
    .dark-mode {
        & .frequent {
            & .btn-light { background-color: #424959 !important; color: #ffff!important; }
            & .bg-white { background-color: #424959 !important;}
            & .border {border-color: #566179 !important;}
        } 
    }

    .card {border-radius: 0; border:1px solid #e1e1e1}
    .card-header:first-child {border:none}
    .tab__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s;
    }

    .tab input:checked ~ .tab__content {
     max-height: 25rem;
    }

    /* Visual styles */
    .accordion {
        overflow: hidden;
    }

    .tab__label::after {
        content: "\276F";
        width: 1em;
        height: 1em;
        text-align: center;
        transform: rotate(90deg);
        transition: all 0.35s;
    }

    .tab input:checked + .tab__label::after {
        transform: rotate(270deg);
    }

    /* Small animation */
    .tab input:not(:checked) + .tab__label:hover::after {
        animation: bounce .5s infinite;
    }
    @keyframes bounce {
        25% {
            transform: rotate(90deg) translate(.25rem);
        }
        75% {
            transform: rotate(90deg) translate(-.25rem);
        }
    }
</style>
<script>
 /* export default {
    data() {
      return {
        frequents: 
        [
            {
                id: "1",
                titulo: "Como vou aprender a usar o SUBSEE?",
                desc:  "Primeiramente a SUB100 é reconhecida pelos clientes em desenvolver sistemas <b>fáceis e intuitivo</b> de manusear. Mas se for necessário o sistema SUBSEE possui uma plataforma de aprendizado de todos os módulos do sistema. Além disso promovemos treinamentos coletivos mensais e sempre que atualizamos o sistema produzimos vídeos trazendo as novidades da nova versão. Caso possua alguma dificuldade ainda, o usuário poderá acionar o suporte para saná-las.",
            },
            {
                id: "2",
                titulo: "É possível importar meus dados do meu sistema para o SUBSEE?",
                desc:  "Caso o seu sistema seja capaz de exportar informações em formato <b>XML e formato de planilhas</b> para os cadastros de pessoas, nossa equipe estará pronta para efetuar a importação dos seus registros de imóveis e contatos para o SUBSEE. Estamos à disposição para auxiliá-lo.",
            },
            {
                id: "3",
                titulo: "Por usar o SUBSEE on, tenho descontos para anunciar no Portal SUB100?",
                desc:  "Sim, na SUB100 oferece combos especiais para a utilização de mais de um serviço. Você pode verificar as condições em nossa seção de <b>Planos & Preços</b> ou solicitar um orçamento com nosso time comercial.",   
            },
            {
                id: "4",
                titulo: "O SUBSEE integra-se com quais portais imobiliários?",
                desc:  "O SUBSEE integra-se com os principais portais imobiliários brasileiros. Você pode conferir a lista de portais disponíveis em minhas conexões. Se o <b>portal ou rede de negócios</b> de sua preferência não estiver listado, você poderá solicitar à nossa equipe de suporte uma análise da viabilidade para criarmos essa integração.",
            },
            {
                id: "5",
                titulo: "Os anúncios podem ser inseridos no Pixel do Facebook?",
                desc:  "Sim, além do <b>Pixel do Facebook</b>, você pode inserir outras chaves que permitem o rastreamento e a otimização necessários para que seu anúncio seja bem-sucedido nas suas campanhas de marketing e fácil de ser encontrado no <b>Google</b>.",   
            },
            {
                id: "6",
                titulo: "Possuo um domínio. Posso utilizá-lo nos sites criados pela SUB100?",
                desc:  "Sim, se você já possui um <b>domínio</b> para o seu site, ele pode ser utilizado com o SUBSEE on. Caso você não tenha um domínio, não se preocupe, o registro de domínio é simples, barato e fácil de ser feito.",
            },
            {
                id: "7",
                titulo: "O SUBSEE on já vem com um site imobiliário?",
                desc:  "Sim, o SUBSEE on inclui um site imobiliário padrão. Basta você escolher o padrão de anúncio desejado, seja para sites com predominância de <b>imóveis urbanos</b> ou sites para corretores especialistas em <b>imóveis rurais</b>.",
            }
        ]
      }
    }
  } */
</script>