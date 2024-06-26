<template>
    <div class="section py-3 py-md-5">
        <div class="container">
            <div class="row gy-3 gy-md-0">
                <div class="col-12 col-md" v-for="item in items" :key="item.id">
                    <div class="d-flex align-itens-center p-4 rounded-3 bg-body-tertiary h-100" data-vivus-hover>
                        <div class="col-auto d-none d-md-flex flex-column justify-content-center">
                            <div class="border border-2 p-4 rounded-circle w-100">
                                <img :src="item.icon" :alt="item.alt" :title="item.titleAlt" height="82" width="82"/>
                            </div>
                        </div>
                        <div class="col-12 col-md lh-base ms-0 ms-md-4 d-flex flex-column justify-content-around">
                            <h4 class="title fw-light text-primary">Site para <span class="fw-bold">{{ item.title }}</span></h4>
                            <div class="desc fs-6">
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .dark-mode {
        .bg-body-tertiary {
            background-color: #111111!important;
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
                        icon: "/images/icons/siteHome_verde.png?55202404055",
                        alt: "site-corretores-urbanos",
                        titleAlt: "Ícone casa site para corretores e imobiliárias que anunciam imóveis urbanos",
                        title: "Urbanos",
                        desc: "Indicado para imobiliárais e corretores com foco em imóveis urbanos. Podendo ser escolhido entre contratar um site padrão ou personalizado."
                        
                    },
                    {
                        id: 2,
                        icon: "/images/icons/siteRural_verde.png?55202404055",
                        alt: "Ssite-corretores-rurais",
                        titleAlt: "Ícone colheitadeira site para corretores e imobiliárias que anunciam imóveis rurais",
                        title: "Rurais",
                        desc: "Indicado para anúnciantes com foco em propriedades rurais. O diferencial desse site esta nas pecularidades do anúncio rural. O modelo disponível é o site padrão"
                        
                    }
                ]
            }
        }
    };
</script>