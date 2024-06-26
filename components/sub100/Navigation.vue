<template>
    <nav class="site-main-menu" id="navbar-example2">
        <ul data-nosnippet>
            <li class="has-children">
                <a href="/#crm_subsee" :aria-label="$t('header.menu.subseeAlt')" :title="'Clique aqui para acessar a página do '+$t('header.menu.subsee')">
                    {{ $t('header.menu.subsee') }}
                </a>
            </li>
            <li class="has-children">
                <a :href="localePath('/crm-imobiliario/sites-hotsites/')" :aria-label="$t('header.menu.siteAlt')" :title="'Clique aqui para acessar a página dos '+$t('header.menu.site')">
                    {{ $t('header.menu.site') }}
                </a>
            </li>
            <li class="has-children">
                <a href="https://sub100.com.br/" target="_blank" rel="noreferrer" :aria-label="$t('header.menu.portalAlt')" :title="'Clique aqui para acessar a página do '+$t('header.menu.portal')">
                    {{ $t('header.menu.portal') }}
                </a>
            </li>
            <li class="has-children" :aria-label="$t('header.menu.pricesAlt')" :title="'Clique aqui para acessar a página dos '+$t('header.menu.prices')">
                <a href="/#planos">
                    {{ $t('header.menu.prices') }}
                </a>
            </li>

            <li class="has-children">
                <a href="https://blog.sub100sistemas.com.br/" target="_blank" rel="noreferrer" :aria-label="$t('header.menu.blogAlt')" :title="'Clique aqui para acessar nosso '+$t('header.menu.blog')">
                    {{ $t('header.menu.blog') }}
                </a>
            </li>
            <li class="has-children">
                <div class="text-primary submenu pe-auto" :aria-label="$t('header.menu.portalAlt')" :title="$t('header.menu.about')">
                    <span class="menu-text">{{ $t('header.menu.about') }}</span>
                </div>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu" style="width:270px">
                    <li>
                        <a href="https://sub100sistemas.com.br/sub100-sistemas/" aria-label="sub100-sistemas" :title="$t('header.menu.submenuAbout.sub100')" target="_blank" rel="noreferrer">
                            <span class="menu-text">{{ $t('header.menu.submenuAbout.sub100') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://sub100sistemas.com.br/sub100-sistemas/#missao-valores" aria-label="missao-valores" :title="$t('header.menu.submenuAbout.mission')" target="_blank" rel="noreferrer">
                            <span class="menu-text">{{ $t('header.menu.submenuAbout.mission') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://sub100sistemas.com.br/sub100-sistemas/#palavra-do-diretor" aria-label="palavra-do-diretor" :title="$t('header.menu.submenuAbout.word')" target="_blank" rel="noreferrer">
                            <span class="menu-text">{{ $t('header.menu.submenuAbout.word') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://sub100sistemas.com.br/trabalhe-conosco/" aria-label="trabalhe-conosco" :title="$t('header.menu.submenuAbout.work')" target="_blank" rel="noreferrer">
                            <span class="menu-text">{{ $t('header.menu.submenuAbout.work') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://sub100sistemas.com.br/fale-conosco/" aria-label="fale-conosco" :title="$t('header.menu.submenuAbout.contact')" target="_blank" rel="noreferrer">
                            <span class="menu-text">{{ $t('header.menu.submenuAbout.contact') }}</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
    /* export default {
        methods: {

            goToSection(value) {
                const top = this.$refs[(value)].offsetTop; 
                window.scrollTo({
                    top: top,
                    left: 0,
                    behavior: 'smooth'
                });
            }
            

        }
    }*/
</script>