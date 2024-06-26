<template>
    <div class="demo-section section-padding">
        <div class="container">
            <div class="row max-mb-n30">
                <div class="col-12 col-md">
                    <div class="demo-content pt-2 pt-xl-5 ps-2 ps-xl-5 position-relative d-flex flex-column flex-wrap-nowrap h-100 justify-content-between">
                        <div>
                            <ShapeWithAnimation addClassName="corner d-none d-xl-block" imgSrc="/images/sub100/corner.svg?55202404055" imgAlt="corner" imgTitle="Corner" dataWidth="143" dataHeight="120"/>
                            <h1 class="title max-mb-30 text-primary">Teste grátis<br/><span>por 30 dias</span></h1>
                            <div class="desc">
                                <p class="pe-3 pe-md-4">O teste gratuito do <span class="fw-bold">SUBSEE</span> <span class="fw-bold text-on">on</span> permitirá que você avalie as funcionalidades do sistema, bem como a forma como nossa empresa oferece suporte a você.</p>
                                <p>Solicite seu teste grátis agora sem a necessidade de cartão de crédito.</p>
                                <p>Nossos serviços são cobrados na modalidade pós-pago, para que você não precise se preocupar.</p>
                                <p>Avaliar um CRM abrangente é uma tarefa inspiradora. Estamos felizes em ter clientes exigentes que procuram o melhor em CRM imobiliário.</p>
                                <p>Contamos com o seu feedback para alcançarmos a excelência no atendimento ao cliente.</p>
                            </div> 
                        </div>
                        <div class="pt-5 text-end d-none" v-if="!success">
                            <ShapeWithAnimation dataDepth="0" addClassName="personDemo" imgSrc="/images/sub100/personTeste.svg?5524055" imgAlt="teste-gratis-30-dias" imgTitle="Preencha o formulário e teste grátis por 30 dias o CRM SUBSEE on" dataWidth="390" dataHeight="748"/>
                            <ShapeWithAnimation addClassName="backgroundDemo mt-5" dataDepth="1" imgSrc="/images/sub100/mais.svg?552024055" imgAlt="mais" imgTitle="É hora saber mais!"/>
                        </div>
                    </div>
                </div> 
                <div class="col-12 col-md ml-0 ml-xl-5">
                    <div class="contact-form instructor-register-from">
                        <DemoForm @obrigado="success=true"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="sub100-demo d-none d-md-block">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2500px" height="282px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 25000 2814.1">
                <g id="curvaBackgroundBottom">
                <rect class="fil0" y="189.1" width="25000" height="2625"/>
                <path class="fil1" d="M0 0l25000 0 0 785.3c-1706,-198.3 -5122.9,-299.9 -10454.2,822.1 -3662.1,770.7 -7974.2,250.5 -7974.2,250.5 0,0 -2877.2,-134 -4960.7,-541.9 -601.7,-117.8 -1135.4,-209.2 -1610.9,-278.8l0 -1037.2z"/>
                <path class="fil2" d="M25000 623c-1706,-190.6 -5122.9,-280.8 -10454.2,841.2 -3012.5,634 -6464.3,500.2 -7594.3,432.7 1130,105 4581.8,344.5 7594.3,-289.5 5331.3,-1122 8748.2,-1020.4 10454.2,-822.1l0 -162.3z"/>
                </g>
            </svg>
        </div>
    </div>
</template>
<style>
   .personDemo{ min-height: 900px;}
</style>
<script>
    export default {
        data(){
            return{
                success:false,
            }
        },
        components: {
            DemoForm: () => import('@/components/sub100/partials/FreeTrial'),
        }
    };
</script>