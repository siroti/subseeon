<template>
    <div class="mobile-navigation" >
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul data-nosnippet>
                <li class="has-children">
                    <a :href="localePath('/#crm_subsee')" :aria-label="$t('header.menu.subseeAlt')" :title="'Clique aqui para acessar a página do '+$t('header.menu.subsee')" >
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
                <li class="has-children">
                    <a :href="localePath('/#planos')" :aria-label="$t('header.menu.pricesAlt')" :title="'Clique aqui para acessar a página dos '+$t('header.menu.prices')">
                        {{ $t('header.menu.prices') }}
                    </a>
                </li>
                <li class="has-children">
                    <a href="https://blog.sub100sistemas.com.br/" target="_blank" rel="noreferrer" :aria-label="$t('header.menu.blogAlt')" :title="'Clique aqui para acessar a nosso '+$t('header.menu.blog')">
                        {{ $t('header.menu.blog') }}
                    </a>
                </li>
                <li class="menu-item-has-children">
                    <div class="text-primary submenu pe-auto" :aria-label="$t('header.menu.aboutAlt')" :title="$t('header.menu.about')">
                        <span class="text-white">{{ $t('header.menu.about') }}</span >
                    </div>
                    <ul class="sub-menu" style="width:270px">
                        <li>
                            <a href="https://sub100sistemas.com.br/sub100-sistemas/" aria-label="sub100-sistemas" :title="$t('header.menu.submenuAbout.sub100')" target="_blank" rel="noreferrer">
                                <span class="menu-text">{{ $t('header.menu.submenuAbout.sub100') }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://sub100sistemas.com.br/sub100-sistemas/#missao-valores" aria-label="missao-valores" :title="$t('header.menu.submenuAbout.mission')" @click="$root.$emit('to-slide', 6)" target="_blank" rel="noreferrer">
                                <span class="menu-text">{{ $t('header.menu.submenuAbout.mission') }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://sub100sistemas.com.br/sub100-sistemas/#palavra-do-diretor" aria-label="palavra-do-diretor" :title="$t('header.menu.submenuAbout.word')" @click="$root.$emit('to-slide', 7)" target="_blank" rel="noreferrer">
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
    </div>
</template>
<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }

            const children = offCanvasNav.querySelectorAll('.menu-item-has-children');
            children.forEach(item => {
                item.addEventListener("click", (e) => {sideMenuExpand(e)});
            })
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
    
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {

                const actives = offCanvasNav.querySelectorAll('.active');
                actives.forEach(item => {
                    if(item !== e.currentTarget) {
                        item.classList.remove('active');
                    }
                });

                e.currentTarget.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>
<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 2px solid rgba(255, 255, 255, 0.15);
                &.menu-item-has-children {
                    &.mega--title > {
                        a {
                            font-weight: 500;
                        }
                    }
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a, .submenu {
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $secondary;
                        font-weight: 900;
                    }
                    .badge {
                        background-image: linear-gradient(45deg, #fe378c 0%, #fe5b34 100%);
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    list-style: none;
                    border: none;
                    a {
                        color: $white;
                        font-weight: lighter;
                        &:hover {
                            color: $primary;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                font-size: 13px;
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
            
            li {
                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active > {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 2px solid $white;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 2px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>