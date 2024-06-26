<template>
    <div class="footer-section" >
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-6 max-mb-50">
                    <div class="footer-widget footer-logo" :class="addClassName">
                        <a href="/" class="pb-3" aria-label="SUB100 Imobiliárias">
                            <inline-svg class="light-logo" src="/images/logo/dark-logo.svg?55202404055" aria-label="logomarca-sub100-imobiliarias" title="Logomarca SUB100 Imobiliárias" />
                         </a>
                        <h4 class="footer-widget-title mb-0">{{ $t('footer.titleAddress') }}</h4>
                        <div class="footer-widget-content">
                            <div class="content">
                                <p class="endereco" v-html="$t('footer.address')"></p>
                            </div>
                        </div>
                    </div>
                    <a data-fancybox="map" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=rua+machado+de+assis+621+maringa+pr" class="col-xs-12 btn btn-outline-primary btn-hover-primary-two mt-4 mt-md-0 mx-w-100 px-5 fw-bold" :aria-label="$t('footer.howToGetAlt')" :title="$t('footer.howToGet')">{{ $t('footer.howToGet') }}</a>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-7 max-mb-50">
                    <div class="footer-widget text-start text-xl-center" :class="addClassName">
                        <h4 class="footer-widget-title">{{ $t('footer.titleNetwork') }}</h4>
                        <div class="footer-social-inline d-block">
                            <a href="https://www.facebook.com/sub100brasil/" target="_blank" rel="noreferrer">
                                <img src="/images/icons/facebook.svg?5520220407" width="30" height="34" alt="facebook" title="Acesse nossa página no Facebook"/>
                            </a>
                            <a href="https://www.instagram.com/sub100brasil/" target="_blank">
                                <img src="/images/icons/instagram.svg?5520220407" width="30" height="34" alt="instagram" title="Acesse nossa página no Instagram">
                            </a>
                            <a href="https://www.linkedin.com/company/sub100/" target="_blank" rel="noreferrer">
                                <img src="/images/icons/linkedin.svg?552020407" width="34" height="34" alt="linkedin" title="Acesse nossa página no Linkedin">
                            </a>
                            <a href="https://blog.sub100sistemas.com.br/"  target="_blank" rel="noreferrer">
                                <img src="/images/icons/blog.svg?552022047" width="34" height="34" alt="blog" title="Acesse nosso Blog">
                            </a>
                        </div>
                    </div>
                    <div class="max-mt-70 text-md-start text-xl-center pe-4 fz-14" data-nosnippet>{{ $t('footer.descriptionSUB100') }}</div>
                </div>
                <div class="col-xl-3 col-md-5 max-mb-50 text-start text-xl-end">
                    <h4 class="footer-widget-title mb-0">{{ $t('footer.titleConctact') }}</h4>
                    <div class="footer-widget" :class="addClassName">
                        <div class="content">
                            <p class="comercial">
                                {{ /* $t('footer.tel') */ }}
                                <a href="tel://04430325200" aria-label="clique-aqui-para-ligar-agora" title="Clique aqui para ligar agora" target="_blank" rel="noreferrer">44 3032-5200</a><br/>
                                <a href="mailto:contato@sub100.com.br" target="_blank" rel="noreferrer" aria-label="e-mail" title="Clique aqui para enviar mensagem pelo email">{{ $t('footer.email') }}</a>
                            </p>
                        </div>
                        <a href="https://web.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%C2%A0SUBSEE" target="_blank" rel="noreferrer" aria-label="quero-contato-via-whatsApp" title="Quero contato via WhatsApp" class="btn btn-secondary mx-w-100 mb-3 d-none d-xl-block ps-0 pe-0 fw-bold" v-if="$i18n.locale === 'pt'">{{ $t('footer.whatsapp') }}</a>
                        <a href="https://api.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20CRM%C2%A0SUBSEE" target="_blank" rel="noreferrer" aria-label="quero-contato-via-whatsApp" title="Quero contato via WhatsApp" class="btn btn-secondary mx-w-100 mb-3 d-block d-xl-none ps-0 pe-0 fw-bold" v-if="$i18n.locale === 'pt'">{{ $t('footer.whatsapp') }}</a>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <n-link to="/lgpd/termos-de-uso/" :aria-label="$t('footer.terms')" :title="$t('footer.terms')">{{ $t('footer.terms') }}</n-link>
                                    <a href="/lgpd/" aria-label="Conteúdo" class="d-none">LGPD</a>
                                    <a href="/crm-imobiliario/imoveis-lancamentos/" aria-label="Lançamentos" class="d-none">Lançamentos</a>
                                </li>
                                <li>
                                    <n-link to="/lgpd/politica-de-privacidade/" :aria-label="$t('footer.policy')" :title="$t('footer.policy')" class="d-inline">{{ $t('footer.policy') }}</n-link>
                                </li>
                                <li>
                                    <ColorMode />
                                </li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright text-start text-xl-center"><span class="d-block d-md-inline">&copy; {{ new Date().getFullYear() }} <span v-html="$t('footer.company')"></span></span> <img src="/images/icons/heart.svg?5520220407" width="14" height="14" alt="amor" title="Obrigado por visitar nossa página"/> by <a href="https://sub100sistemas.com.br" target="_blank" rel="noreferrer" v-html="$t('footer.by')"></a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top fal fa-long-arrow-up"></i>
                <i class="arrow-bottom fal fa-long-arrow-up"></i>
            </back-to-top>
        </client-only>
    </div>
</template>
<style lang="scss" scoped>
    .footer-logo img {
        width: 160px;
    }
    
    .footer-widget-content .endereco, .footer-widget .comercial {
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 20px;
    }

    .footer-social-inline a img {
        height: 34px;
        color: #5D5FEF;
    }

</style>

<script>
    export default {
        props: [
            'addClassName', 
            'addBackgroundColor' 
        ],
        components: {
            ColorMode: () => import('@/components/sub100/ColorMode'),
        },
    }
</script>