<template>
    <div>
        <Nuxt />
        <CookieControl>
            <template v-slot:bar>
                <div class="cooike">
                    <h3 class="mb-2">Configurações de cookies</h3>
                    <p>Ao navegar nesse site, você aceita os cookies que usamos para melhorar sua experiência e promover marketing personalizado, conforme nossos <a href="/lgpd/termos-de-uso/">Termos de Uso</a> e <a href="/lgpd/politica-de-privacidade/ d-inline">Política de privacidade</a></p>
                    <button @click.prevent="accept()" class="btn btn-secondary mt-3 mx-w-100">Ok, entendi</button>
                </div>
            </template>
        </CookieControl>
    </div>
</template>
<script>
    export default{
        methods:{
            accept(){
                const container = document.querySelector('.cookieControl__BarButtons');
                const button = container.querySelectorAll('button')[1];
                button.click();
            }
            
        }

    }
</script>
<style lang="scss" scoped>
    @media only screen and (min-width: 767px) {
        .cookieControl__Bar--center p,
        .cookieControl__Bar--top-left p, 
        .cookieControl__Bar--top-right p, 
        .cookieControl__Bar--bottom-left p, 
        .cookieControl__Bar--bottom-right p {
            max-width: 340px;
        }
    }
    .cooike {
        font-family: "Poppins";
        border-radius: 0.32rem;
        box-shadow: 0 2px 15px 0 rgb(0 0 0 / 20%);
        padding: 1.5rem;
        background-color: #fff;
        & h3 { 
            font-size: 18px;
            color: #5D5FEF;
        }
        & p { 
            font-size: 14px;
            line-height: 22px;
        }
        & a {
                font-weight: 700;
                color: #545454;
            }
        & button {
            padding: 10px 40px!important;
            font-size: 14px;
            @media only screen and (max-width: 479px) {
                &.mx-w-100 {
                    width: 100%;
                }
            }    
        } 
    }
</style>

