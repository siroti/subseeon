<template>
    <div class="cta-section section-padding pb-0 pb-xl-5" :class="addClassName">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content text-center">
                        <span class="sub-title">Entre em contato com <span>nosso escritório</span></span>
                        <h2 class="title">Você pode ser sua própria orientação com a nossa ajuda!</h2>
                        <n-link to="/fale-conosco/" class="btn btn-primary btn-hover-secondary btn-width-300">Fale conosco</n-link>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1 d-none d-xl-block" dataDepth="4"/>
                        <ShapeWithAnimation addClassName="shape-2 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/cta-shape-01.png?55202404055"/>
                        <ShapeWithAnimation addClassName="shape-3 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png?55202404055"/>
                        <!-- Animation Shape End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['addClassName'],

        components: {
            ShapeWithAnimation: () => import('@/components/sub100/ShapeWithAnimation'),
        },
    }
</script>