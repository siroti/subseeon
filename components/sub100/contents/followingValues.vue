<template>
    <div class="section pb-5">
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col" v-for="item in items" :key="item.id">
                    <div class="p-4 border border-1 rounded-2 bg-light h-100 d-flex flex-column justify-content-around">
                        <h4 class="title text-center fs-5 text-primary">{{ item.title }}</h4>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
                <div id="palavra-do-diretor"></div>
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
                        title: "Responsabilidade",
                        desc: "Somos comprometidos em assumir responsabilidade por nossas ações e resultados. Buscamos cumprir nossos compromissos com nossos clientes, parceiros e equipe, agindo com ética e integridade em todas as situações."
                    },
                    {
                        id: 2,
                        title: "Inovação",
                        desc: "Estamos sempre em busca de soluções inovadoras que impulsionem o avanço tecnológico e promovam o crescimento e o sucesso de nossos clientes. Encorajamos a criatividade e o pensamento fora da caixa, buscando constantemente novas maneiras de melhorar e superar as expectativas."
                    },
                    {
                        id: 3,
                        title: "Competência",
                        desc: "Valorizamos a busca pelo conhecimento e a excelência em nossas habilidades. Investimos no aprimoramento profissional contínuo, para oferecermos serviços de alta qualidade e estarmos atualizados com as melhores práticas do mercado."
                    },
                    {
                        id: 4,
                        title: "Profissionalismo",
                        desc: "Agimos com profissionalismo em todos os aspectos do nosso trabalho. Mantemos uma conduta ética, respeitando nossos clientes, parceiros e colegas. Buscamos estabelecer relacionamentos sólidos e duradouros, baseados na confiança e na parceria."
                    },
                    {
                        id: 5,
                        title: "Transparência",
                        desc: "Valorizamos a transparência em nossas relações. Comunicamo-nos de forma clara e aberta, mantendo nossos clientes informados e envolvidos em todas as etapas dos projetos. Buscamos construir relações de confiança, pautadas pela honestidade e pela sinceridade."
                    },
                    {
                        id: 6,
                        title: "",
                        desc: "Esses valores não são apenas ilustrativos, mas sim princípios que vivenciamos no dia a dia, tanto pela diretoria quanto por todos os colaboradores da SUB100. Eles norteiam nossas decisões, nossas relações e nossa busca constante pela excelência em tudo o que fazemos."
                    }
                ]
            }
        }
    };
</script>