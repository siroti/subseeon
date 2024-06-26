<template>
    <div class="demo-section section-padding">
        <div class="container">
            <div class="row max-mb-n30">
                <!-- Content Start -->
                <div class="col-12 col-md align-self-center max-mb-30">
                    <div class="demo-content pt-2 pt-xl-5 ps-2 ps-xl-5 position-relative">
                        <ShapeWithAnimation addClassName="corner d-none d-xl-block" imgSrc="/images/sub100/corner.svg?55202404055" imgAlt="corner" imgTitle="Corner" dataWidth="143" dataHeight="120"/>
                        <h1 class="title max-mb-30 text-primary">É hora<br/><span>saber mais!</span></h1>
                        <div class="desc">
                            <p class="pe-3 pe-md-4">Agradecemos seu interesse em obter mais informações sobre sites, hotsites e landing pages personalizados.</p>
                            <p>Utilize o formulário ao lado para descrever suas necessidades para seu projeto de site personalizado, hotsite ou landing page. Estamos ansiosos para compreendê-las. </p>
                            <p>Clientes como você, com necessidades específicas, nos ajudam a identificar novos desafios e tendências.</p>
                            <p>Primeiramente, nosso time de atendimento entrará em contato para, em seguida, alinhar os detalhes com a equipe técnica.</p>
                            <p>Conte com a nossa equipe para qualquer dúvida, sugestão ou suporte que precisar.</p>
                        </div> 
                        <!-- Demo Animation Start -->
                        <div class="pt-5 text-end d-none" v-if="!success">
                            <ShapeWithAnimation dataDepth="0" imgSrc="/images/sub100/personDemo.svg?552055" imgAlt="preencha-o-formulario" imgTitle="Preencha o formulário para saber mais sobre sites personalizados"/>
                            <ShapeWithAnimation addClassName="backgroundDemo" dataDepth="1" imgSrc="/images/sub100/mais.svg?502404055" imgAlt="mais" imgTitle="É hora saber mais!"/>
                        </div>
                        <!-- Demo Animation End -->
                    </div>
                </div> 
                <!-- Content End -->
                <!-- Demo Form Start -->
                <div class="col-12 col-md instructor-register-from ml-0 ml-xl-5">
                    <div class="contact-form ps-90 ps-md-0 ps-sm-0 ps-xs-0">
                        <DemoForm @obrigado="success=true"/>
                    </div>
                </div>
                <!-- Demo Form End -->
                
            </div>
        </div>
        <!-- Curva Shape Start -->
        <div class="sub100-demo d-none d-md-block">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2500px" height="282px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 25000 2814.1">
                <g id="curvaBackgroundBottom">
                <rect class="fil0" y="189.1" width="25000" height="2625"/>
                <path class="fil1" d="M0 0l25000 0 0 785.3c-1706,-198.3 -5122.9,-299.9 -10454.2,822.1 -3662.1,770.7 -7974.2,250.5 -7974.2,250.5 0,0 -2877.2,-134 -4960.7,-541.9 -601.7,-117.8 -1135.4,-209.2 -1610.9,-278.8l0 -1037.2z"/>
                <path class="fil2" d="M25000 623c-1706,-190.6 -5122.9,-280.8 -10454.2,841.2 -3012.5,634 -6464.3,500.2 -7594.3,432.7 1130,105 4581.8,344.5 7594.3,-289.5 5331.3,-1122 8748.2,-1020.4 10454.2,-822.1l0 -162.3z"/>
                </g>
            </svg>
        </div>
        <!-- Curva Shape End -->
    </div>
</template>
<script>
    export default {
        data(){
            return{
                success:false,
            }
        },
        components: {
            DemoForm: () => import('@/components/sub100/partials/DemoForm'),
        }
    };
</script>