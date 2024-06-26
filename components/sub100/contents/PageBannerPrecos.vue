<template>
    <div>
        <div class="pt-5 pb-4 bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-md-start lh-sm">
                            <h1 class="title fs-5 text-light">Planos & Preços</h1>
                            <h2 class="subtitle fs-2 fw-light text-light lh-sm"><span class="fw-bold text-secondary d-block">Elaboramos planos que</span> <span class="d-inline d-md-block"> se encaixam ao seu perfil</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-4 mb-md-0">
                <div class="col-12 col-md my-4 my-md-5 pt-2 d-flex justify-content-center"> 
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <div @click.stop="Pagament(1)">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-primary px-4 px-md-5 fs-6 rounded-start-pill" for="btnradio1">Mensal</label>
                        </div>
                        <div @click.stop="Pagament(2)">
                            <input type="radio" class="btn-check " name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary px-4 px-md-5 fs-6 rounded-end-pill" for="btnradio2"><span class="me-2 ms-1">Anual</span><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary px-2"> Economize 12%</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-group mb-4 mb-md-5 listagem">
                <li class="px-3 d-flex align-items-center first">
                    <div class="col-6 col-md-6 fs-6 fw-bold" style="min-height:auto"><span class="d-none d-md-block"> Funcionalidades</span></div>
                    <div class="col-3 col-md-3 text-center fs-4 fw-bold text-primary borddestaqueTop position-relative"><span class="border border-5 border-secondary border-top-0 border-end-0 border-start-0">Urbano</span><span class="position-absolute top-0 start-50 translate-middle badge text-bg-warning fs-7 text-center maisVendidos rounded-bottom-0">Mais Vendido</span></div>
                    <div class="col-3 col-md-3 text-center fs-4 fw-bold text-primary"><span class="px-2 border border-5 border-secondary border-top-0 border-end-0 border-start-0">Rural</span></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 col-6 col-md-6 fs-7">Usuários</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque">02</div>
                    <div class="col-3 col-md-3 text-center fs-7">02</div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 mb-0 col-6 col-md-6 fs-7">Integração com Portal SUB100 *</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque">Free por um ano</div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Integração com Portal SUB100 " class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 col-6 col-md-6 fs-7">Integração com Portal SUB100 Rural *</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Integração com Portal SUB100 Rural" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Integração com Portal SUB100 Rural" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 col-6 col-md-6 fs-7">Integração com Portal Imobiliários *</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Integração com Portal Imobiliários" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Integração com Portal Imobiliários" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 col-6 col-md-6 fs-7">Imóveis **</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque">100</div>
                    <div class="col-3 col-md-3 text-center fs-7">100</div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Edifícios e Condomínios</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Edifícios e Condomínios" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Edifícios e Condomínios" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Pessoas</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Pessoas" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Pessoas" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Controle de destaques</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Controle de destaques" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Controle de destaques" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Quadro de chaves</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Quadro de chaves" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Quadro de chaves" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Empréstimo de chaves</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Empréstimo de chaves" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Empréstimo de chaves" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Roteiro de visitas</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Roteiro de visitas" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Roteiro de visitas" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Compartilhar link</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Compartilhar link" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Compartilhar link" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Recibo</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Recibo" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Recibo" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center  bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Perfis de acesso</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Perfis de acesso" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Perfis de acesso" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Parâmetros</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Parâmetros" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Parâmetros" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Base de conhecimento</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Base de conhecimento" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Base de conhecimento" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Suporte via WhatsApp</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Suporte via WhatsApp" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Suporte via WhatsApp" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Treinamento</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Treinamento" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Treinamento" class="iconVisto" height="15" width="15"/></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Eventos online</h3></div>
                    <div class="col-3 col-md-3 text-center h-100 fs-7 borddestaque"><img src="/images/icons/yes.svg?5520220555404" alt="Urbano - Eventos online" class="iconVisto" height="15" width="15"/></div>
                    <div class="col-3 col-md-3 text-center fs-7"><img src="/images/icons/yes.svg?5520220555404" alt="Rural - Eventos online" class="iconVisto" height="15" width="15"/></div>
                </li>
                <span id="mensal" v-show="plano === 1">
                    <li class="px-3 d-flex align-items-center">
                        <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-5">Valor</h3></div>
                        <div class="col-3 col-md-3 text-center fs-5 fw-bold text-primary lh-sm borddestaqueBottom py-4">R$ 350,00 a.m <br>+ opcionais</div>
                        <div class="col-3 col-md-3 text-center fs-5 fw-bold text-primary lh-sm py-4">R$ 350,00 a.m <br>+ opcionais</div>
                    </li>
                </span>
                <div id="anual" v-show="plano === 2">
                    <li class="px-3 d-flex align-items-center">
                        <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-5">Valor</h3></div>
                        <div class="col-3 col-md-3 text-center fs-5 fw-bold text-primary lh-sm borddestaqueBottom py-4">R$ 308,00 a.m <br>+ opcionais</div>
                        <div class="col-3 col-md-3 text-center fs-5 fw-bold text-primary lh-sm py-4">R$ 308,00 a.m <br>+ opcionais</div>
                    </li>
                    <li class="px-3 d-flex">
                        <div class="col-md-6 fs-5" d-nome></div>
                        <div class="col-12 col-md-6 text-center fs-6 lh-sm p-3 pagamentoAnual">Pagamento anual de <span class="fw-semibold">R$ 3.696,00</span> dividido em <span class="fw-semibold">3x no boleto</span></div>
                    </li>
                </div>
            </ul>
            <div class="alert alert-primary" role="alert">
                <span class="d-block ms-2 ms-md-3">* No período gratuito de 30 dias as integrações não estão liberadas</span>
                <span class="ms-2 ms-md-3">** São considerados apenas os imóveis ativos</span>
            </div>
            <div class="py-1"><hr class="hr hr-blurry"/></div>
            <ul class="list-group mt-4 mt-md-5 listagem">
                <li class="px-3 d-flex align-items-center first">
                    <div class="col-6 col-md-6 fs-4 fw-bold" style="min-height:auto"> Opcionais</div>
                    <div class="col-3 col-md-3 text-center fs-4 fw-bold text-primary borddestaqueTop position-relative"><span class="border border-5 border-secondary border-top-0 border-end-0 border-start-0">Urbano</span><span class="position-absolute top-0 start-50 translate-middle badge text-bg-warning fs-7 text-center maisVendidos rounded-bottom-0">Mais Vendido</span></div>
                    <div class="col-3 col-md-3 text-center fs-4 fw-bold text-primary"><span class="px-2 border border-5 border-secondary border-top-0 border-end-0 border-start-0">Rural</span></div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Usuários adicionais</h3></div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold borddestaque">R$ 39,90</div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold">R$ 39,90</div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Site & Hotsite Padrão</h3></div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold borddestaque">R$ 800,00</div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold">R$ 800,00</div>
                </li>
                <li class="px-3 d-flex align-items-center bg-light">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Site & Hotsite personalizado *</h3></div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold borddestaque">Consulte</div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold">Consulte</div>
                </li>
                <li class="px-3 d-flex align-items-center">
                    <div class="col-6 col-md-6"><h3 class="fw-normal w-100 mb-0 fs-7">Mais 100 imóveis</h3></div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold borddestaqueBottom">R$ 100,00</div>
                    <div class="col-3 col-md-3 text-center fs-7 fw-semibold">R$ 100,00</div>
                </li>
                
            </ul>
            <div class="pt-4 mb-3 mb-md-5 pb-3 ms-2 ms-md-3 fs-8">
               * Solicite um orçamento para site personalizado <span class="d-none d-md-inline">-</span> <a href="/solicite-um-orcamento/" aria-label="solicitar-orçamento-para-seu-site" title="Clique aqui para solicitar um orçamento para seu site" class="d-block d-md-inline text-primary fw-bold fs-8">Clique aqui</a>
            </div>
           
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #btnradio2 { width: initial!important;}
    .maisVendidos{
        height: 18px;
        min-height: auto!important;
        font-weight: 600;
        font-size: 12px;
        margin-top: -9px;
    }
    .fs-7 {
        min-height: 40px;
        display: flex;
        align-items: center;
        font-weight: normal;
        font-size: 15px;
    }

    .fs-8{
        font-size: 14px;
    }
    .listagem {
        & .text-center{justify-content: center}
        & li{border:1px solid #eeeeee; border-top:none}
        & li.first{border-left:1px solid #fff; border-right: 1px solid #fff;}
    }

    hr { 
        &:not([size]).hr.hr-blurry {
            background-color: transparent;
            background-image: linear-gradient(90deg,transparent,#666,transparent);
            height: 1px;
            opacity: 0.25;
        }
        &.hr, &.vr {border-top: none!important}
        margin: 1rem 0;
        color: inherit;
        border: 0;
        border-top: 1px solid;
        opacity: .25;
    }

    .btn-check:checked + .btn {
        color: #fff;
        background-color: #686af1;
        border: 2px solid #686af1;
    }
    .border-secondary{border-color: #00D39B!important}
    .borddestaque {border-left: 2px solid #FFC107; border-right: 2px solid #FFC107}
    .borddestaqueBottom {border: 2px solid #FFC107; border-top: none;}
    .borddestaqueTop {border: 2px solid #FFC107; border-bottom: none;}

    @media only screen and (max-width: 768px){
        .listagem {
            & .fs-5 { font-size: 0.7rem!important;line-height:0.7rem;} 
            & .fs-4 { font-size: 0.9rem!important} 
        }   
        .pagamentoAnual {font-size:0.7rem!important;}
        
    }

    @media #{$tablet-device, $large-mobile} {
            .fs-7 { font-size: 0.7rem;line-height:0.8rem; min-height: 52px!important; } 
            .fs-8{  font-size: 0.8rem }
            .borddestaqueTop { .fs-7 {font-size: 0.58rem!important; min-height: auto!important;} }
            .alert-primary { span {font-size: 12px!important;}}
            
    }

    .dark-mode {
        & .listagem {
            & li { border: 1px solid #616161; border-top: none;}
            & li.first { border-left: 1px solid #323847;   border-right: 1px solid #323847 }
        }
        & .bg-light { background-color: #424959 !important; }
    }
</style>
<script>
    export default {
        data(){ 
            return{
                plano:1,
            }

        },
        methods: {
            Pagament(mensal) {
              this.plano = mensal;
            }
        }
        

    }
</script>