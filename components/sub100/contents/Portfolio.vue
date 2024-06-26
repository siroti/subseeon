<template>
    <div class="section py-4">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md position-relative">
                    <NuxtImg format="webp" src="/images/sub100/notebook.png" alt="site-modelo-corretores" title="Site modelo para corretores urbanos com imagem do lançamento AVANTI" quality="80" width="580" height="347" class="px-3 px-md-5"/>
                </div>

                <div class="col-12 col-md about-content mw-100 d-flex flex-column justify-content-evenly mt-4 mt-md-0">
                    <div v-for="item in items" :key="item.id">
                        <div class="col-auto px-3 px-md-0">
                            <h4 class="title fz-24 mb-1 mb-md-2">{{ item.title }}</h4>
                            <div class="desc fs-6 lh-base text-justify">
                                <p v-html="item.desc"></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="px-3 px-md-0">
                            <p class="fs-6 text-primary lh-sm fw-bold">Gostaria de receber uma proposta para um site personalizado?</p>
                            <a :href="localePath('/solicite-um-orcamento/')" aria-label="solicite-um-orçamento" title="Gostaria de receber uma proposta para um site personalizado? Clique aqui" class="btn btn-primary w-100">Solicite um<span class="fw-bold"> orçamento</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        title: "Entrega Rápida e Custos Reduzidos",
                        desc: "Nossos modelos de sites padrão são ativados após a conclusão da negociação comercial e o fornecimento das informações necessárias para o desenvolvimento. Devido à eficiência na implementação dos sites padrão, os custos são significativamente mais baixos em comparação com os sites personalizados."
                        
                    }
                ]
            }
        }
    };
</script>