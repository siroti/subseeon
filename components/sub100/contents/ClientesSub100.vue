<template>
    <div class="section pb-5 pt-3 pt-md-5">
        <div class="container">
            <h3 class="text-center text-secondary fw-light pb-2 pb-md-5">Conheça alguns projetos desenvolvidos pela <span class="text-primary fw-bold"> SUB100 Sistemas</span></h3>
            <div class="row g-3 g-md-4">
                <div class="col-6 col-md-2" v-for="item in items" :key="item.id">
                    <div class="d-flex justify-content-center border py-4">
                        <img class="logoCliente" :src="item.icon" :alt="item.alt" :title="item.title" height="55" width="140"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .products{
        .tela{height: 111px; left:15%; padding-right: 24%}
        @media #{$extra-small-mobile} {
            .border {border-color: #FFF!important}
            .tela{left:0!important; padding-right: 0!important}
            .fs-5 {font-size: 16px!important;}
            
        }    
    }
    .dark-mode {
        .logoCliente {
            filter: brightness(0) invert(1);
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        icon: "/images/logo/silvioiwata.png?55202404055",
                        title: "Site desenvolvido para Imobiliária Silvio Iwata Maringá - PR",
                        alt: "site-silvio-iwata"
                    },
                    {
                        id: 2,
                        icon: "/images/logo/soma.png?55202404055",
                        title: "Site desenvolvido para Imobiliária Soma Imóveis Florianóplis - SC",
                        alt: "site-soma-imoveis"
                        
                    },
                    {
                        id: 3,
                        icon: "/images/logo/jl.png?55202404055",
                        title: "Site desenvolvido para JL Imobiliária Cascavel - PR",
                        alt: "site-jl-imobiliaria"
                    },
                    {
                        id: 4,
                        icon: "/images/logo/cocical.png?55202404055",
                        title: "Site desenvolvido para Cocical Empreendimentos Cacoal - RO",
                        alt: "site-cocical"
                        
                    },
                    {
                        id: 5,
                        icon: "/images/logo/riva.png?55202404055",
                        title: "Site desenvolvido para Riva Imobiliária Primavera do Leste - MT",
                        alt: "site-riva-imobiliaria"
                    },
                    {
                        id: 6,
                        icon: "/images/logo/invest.png?55202404055",
                        title: "Site desenvolvido para Loteamentos Invest Sinop - MT",
                        alt: "site-loteamentos-invest"
                    }
                ]
            }
        }
    };
</script>