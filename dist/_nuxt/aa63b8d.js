(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{634:function(e,t,n){var content=n(867);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(220).default)("371b2eb8",content,!0,{sourceMap:!1})},866:function(e,t,n){"use strict";n(634)},867:function(e,t,n){var l=n(218)((function(i){return i[1]}));l.push([e.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:2px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children.mega--title>a{font-weight:500}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;padding-left:0;visibility:visible}.offcanvas-navigation ul li .submenu,.offcanvas-navigation ul li a{color:#fff;display:block;font-size:16px;font-weight:500;padding:10px 0}.offcanvas-navigation ul li .submenu:hover,.offcanvas-navigation ul li a:hover{color:#00d39b;font-weight:900}.offcanvas-navigation ul li .submenu .badge,.offcanvas-navigation ul li a .badge{background-image:linear-gradient(45deg,#fe378c,#fe5b34)}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{border:none;list-style:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:lighter}.offcanvas-navigation ul.sub-menu li a:hover{color:#5d5fef}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{display:block;position:relative}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{background-color:hsla(0,0%,100%,.1);cursor:pointer;height:35px;line-height:35px;position:absolute;right:0;text-align:center;top:5px;width:35px}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{border-bottom:2px solid #fff;display:block;left:50%;position:relative;text-align:center;top:50%;transform:translate(-50%,-50%);width:10px}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{border-bottom:2px solid #fff;content:"";display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s;width:100%}',""]),l.locals={},e.exports=l},972:function(e,t,n){"use strict";n.r(t);n(56),n(57);var l={name:"MobileNavMenu",mounted:function(){for(var e=document.querySelector("#offcanvas-navigation"),t=e.querySelectorAll(".sub-menu"),n=e.querySelectorAll("a"),i=0;i<t.length;i++)t[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");e.querySelectorAll(".menu-item-has-children").forEach((function(e){e.addEventListener("click",(function(e){r(e)}))}));e.querySelectorAll(".menu-expand").length;for(var l=0;l<n.length;l++)n[l].addEventListener("click",(function(){o()}));var r=function(t){e.querySelectorAll(".active").forEach((function(e){e!==t.currentTarget&&e.classList.remove("active")})),t.currentTarget.classList.toggle("active")},o=function(){var e=document.querySelector("#offcanvas-mobile-menu");null==e||e.classList.remove("active")}}},r=(n(866),n(209)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mobile-navigation"},[t("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[t("ul",{attrs:{"data-nosnippet":""}},[t("li",{staticClass:"has-children"},[t("a",{attrs:{href:e.localePath("/#crm_subsee"),"aria-label":e.$t("header.menu.subseeAlt"),title:"Clique aqui para acessar a página do "+e.$t("header.menu.subsee")}},[e._v("\n                    "+e._s(e.$t("header.menu.subsee"))+"\n                ")])]),e._v(" "),t("li",{staticClass:"has-children"},[t("a",{attrs:{href:e.localePath("/crm-imobiliario/sites-hotsites/"),"aria-label":e.$t("header.menu.siteAlt"),title:"Clique aqui para acessar a página dos "+e.$t("header.menu.site")}},[e._v("\n                    "+e._s(e.$t("header.menu.site"))+"\n                ")])]),e._v(" "),t("li",{staticClass:"has-children"},[t("a",{attrs:{href:"https://sub100.com.br/",target:"_blank",rel:"noreferrer","aria-label":e.$t("header.menu.portalAlt"),title:"Clique aqui para acessar a página do "+e.$t("header.menu.portal")}},[e._v("\n                    "+e._s(e.$t("header.menu.portal"))+"\n                ")])]),e._v(" "),t("li",{staticClass:"has-children"},[t("a",{attrs:{href:e.localePath("/#planos"),"aria-label":e.$t("header.menu.pricesAlt"),title:"Clique aqui para acessar a página dos "+e.$t("header.menu.prices")}},[e._v("\n                    "+e._s(e.$t("header.menu.prices"))+"\n                ")])]),e._v(" "),t("li",{staticClass:"has-children"},[t("a",{attrs:{href:"https://blog.sub100sistemas.com.br/",target:"_blank",rel:"noreferrer","aria-label":e.$t("header.menu.blogAlt"),title:"Clique aqui para acessar a nosso "+e.$t("header.menu.blog")}},[e._v("\n                    "+e._s(e.$t("header.menu.blog"))+"\n                ")])]),e._v(" "),t("li",{staticClass:"menu-item-has-children"},[t("div",{staticClass:"text-primary submenu pe-auto",attrs:{"aria-label":e.$t("header.menu.aboutAlt"),title:e.$t("header.menu.about")}},[t("span",{staticClass:"text-white"},[e._v(e._s(e.$t("header.menu.about")))])]),e._v(" "),t("ul",{staticClass:"sub-menu",staticStyle:{width:"270px"}},[t("li",[t("a",{attrs:{href:"https://sub100sistemas.com.br/sub100-sistemas/","aria-label":"sub100-sistemas",title:e.$t("header.menu.submenuAbout.sub100"),target:"_blank",rel:"noreferrer"}},[t("span",{staticClass:"menu-text"},[e._v(e._s(e.$t("header.menu.submenuAbout.sub100")))])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://sub100sistemas.com.br/sub100-sistemas/#missao-valores","aria-label":"missao-valores",title:e.$t("header.menu.submenuAbout.mission"),target:"_blank",rel:"noreferrer"},on:{click:function(t){return e.$root.$emit("to-slide",6)}}},[t("span",{staticClass:"menu-text"},[e._v(e._s(e.$t("header.menu.submenuAbout.mission")))])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://sub100sistemas.com.br/sub100-sistemas/#palavra-do-diretor","aria-label":"palavra-do-diretor",title:e.$t("header.menu.submenuAbout.word"),target:"_blank",rel:"noreferrer"},on:{click:function(t){return e.$root.$emit("to-slide",7)}}},[t("span",{staticClass:"menu-text"},[e._v(e._s(e.$t("header.menu.submenuAbout.word")))])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://sub100sistemas.com.br/trabalhe-conosco/","aria-label":"trabalhe-conosco",title:e.$t("header.menu.submenuAbout.work"),target:"_blank",rel:"noreferrer"}},[t("span",{staticClass:"menu-text"},[e._v(e._s(e.$t("header.menu.submenuAbout.work")))])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://sub100sistemas.com.br/fale-conosco/","aria-label":"fale-conosco",title:e.$t("header.menu.submenuAbout.contact"),target:"_blank",rel:"noreferrer"}},[t("span",{staticClass:"menu-text"},[e._v(e._s(e.$t("header.menu.submenuAbout.contact")))])])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);