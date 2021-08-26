(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1],{1384:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),i=n(3727),o=n(6832),l=n(1699),c=n(9901),s=(0,a.createContext)({collectLink:function(){}}),u=n(1402),m=n(9861),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,g=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),_=(0,o.Z)().siteConfig,w=_.trailingSlash,y=_.baseUrl,N=(0,u.C)().withBaseUrl,C=(0,a.useContext)(s),L=v||h,I=(0,l.Z)(L),S=null==L?void 0:L.replace("pathname://",""),D=void 0!==S?(n=S,k&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;D&&I&&(D=(0,m.applyTrailingSlash)(D,{trailingSlash:w,baseUrl:y}));var B,T=(0,a.useRef)(!1),U=f?i.OL:i.rU,A=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&I&&null!=D&&window.docusaurus.prefetch(D),function(){A&&B&&B.disconnect()}}),[D,A,I]);var M=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,x=!D||!I||M;return D&&I&&!M&&!p&&C.collectLink(D),x?a.createElement("a",Object.assign({href:D},L&&!I&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(U,Object.assign({},Z,{onMouseEnter:function(){T.current||null==D||(window.docusaurus.preload(D),T.current=!0)},innerRef:function(e){var t,n;A&&e&&I&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:D||""},f&&{isActive:g,activeClassName:b}))}},7859:function(e,t){"use strict";t.Z=function(){return null}},1699:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},1402:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(6832),a=n(1699);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8168:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a="iconExternalLink_3J9K",i=function(e){var t=e.width,n=void 0===t?13.5:t,i=e.height,o=void 0===i?13.5:i;return r.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},8001:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var r=n(7294),a=n(6010),i=n(5977),o=n(4416),l=n(3382),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,i.k6)().action;return(0,l.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,l.nT)(),n=t.isClosed,i=t.close,c=(0,l.LU)().announcementBar;if(!c)return null;var s=c.content,u=c.backgroundColor,h=c.textColor,b=c.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:i,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(2122),g=n(7859),p=n(6832),E={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},_=(0,r.memo)((function(e){var t=e.className,n=e.icons,i=e.checked,o=e.disabled,l=e.onChange,c=(0,r.useState)(i),s=c[0],u=c[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,i=t.lightIcon,o=t.lightIconStyle,c=(0,p.Z)().isClient;return r.createElement(_,(0,b.Z)({disabled:!c,icons:{checked:r.createElement(k,{icon:n,style:a}),unchecked:r.createElement(Z,{icon:i,style:o})}},e))}var y=n(6266),N=n(8002),C=function(e){var t=(0,i.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,N.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var i=document.documentElement.scrollHeight-u,l=window.innerHeight;a&&r>=a?o(!1):r+l<i&&o(!0)}}),[u,c]),(0,l.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var L=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},I=n(7213),S=n(4713),D=n(974),B=n(9756),T=["width","height","className"],U=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,i=void 0===a?30:a,o=e.className,l=(0,B.Z)(e,T);return r.createElement("svg",(0,b.Z)({className:o,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},l),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},A="toggle_3Zt9",M="navbarHideable_2qcr",x="navbarHidden_3yey",P="right";function R(){return(0,l.LU)().navbar.items}function O(){var e=(0,l.LU)().colorMode.disableSwitch,t=(0,y.Z)(),n=t.isDarkTheme,a=t.setLightTheme,i=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?i():a()}),[a,i]),disabled:e}}function W(e){var t=e.sidebarShown,n=e.toggleSidebar;L(t);var i=R(),c=O(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,i=null==(t=(0,l.g8)())?void 0:t({toggleSidebar:a}),o=(0,l.D9)(i),c=(0,r.useState)((function(){return!1})),s=c[0],u=c[1];(0,r.useEffect)((function(){i&&!o&&u(!0)}),[i,o]);var m=!!i;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:i}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&t&&r.createElement(w,{checked:c.isDarkTheme,onChange:c.toggle})),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(S.Z,(0,b.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var H=function(){var e,t,n,i,o,c,s,u=(0,l.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=(0,I.Z)(),n="mobile"===t,i=(0,r.useState)(!1),o=i[0],c=i[1],s=(0,r.useCallback)((function(){c((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&c(!1)}),[t]),{shouldRender:n,toggle:s,shown:o}),v=O(),h=C(m),p=h.navbarRef,E=h.isNavbarVisible,k=R(),Z=k.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:P)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:P)}))}}(k),y=_.leftItems,N=_.rightItems;return r.createElement("nav",{ref:p,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[M]=m,e[x]=m&&!E,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},(null==k?void 0:k.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(U,null)),r.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),y.map((function(e,t){return r.createElement(S.Z,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},N.map((function(e,t){return r.createElement(S.Z,(0,b.Z)({},e,{key:t}))})),!v.disabled&&r.createElement(w,{className:A,checked:v.isDarkTheme,onChange:v.toggle}),!Z&&r.createElement(g.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(W,{sidebarShown:f.shown,toggleSidebar:f.toggle}))},z=n(1384),V=n(1402),j=n(1699),q="footerLogoLink_MyFc",F=n(4455),G=n(8168),J=["to","href","label","prependBaseUrlToHref"];function K(e){var t=e.to,n=e.href,a=e.label,i=e.prependBaseUrlToHref,o=(0,B.Z)(e,J),l=(0,V.Z)(t),c=(0,V.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(z.Z,(0,b.Z)({className:"footer__link-item"},n?{href:i?c:n}:{to:l},o),n&&!(0,j.Z)(n)?r.createElement("span",null,a,r.createElement(G.Z,null)):a)}var Q=function(e){var t=e.sources,n=e.alt;return r.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};var Y=function(){var e=(0,l.LU)().footer,t=e||{},n=t.copyright,i=t.links,o=void 0===i?[]:i,c=t.logo,s=void 0===c?{}:c,u={light:(0,V.Z)(s.src),dark:(0,V.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},o&&o.length>0&&r.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(K,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(z.Z,{href:s.href,className:q},r.createElement(Q,{alt:s.alt,sources:u})):r.createElement(Q,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},X=n(9901),$=(0,l.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,l.WA)("theme").set(ne(e))},ae=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,i=(0,r.useState)(function(e){return X.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),o=i[0],c=i[1],s=(0,r.useCallback)((function(){c(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){c(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(o))}),[o]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&c(ne(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?te:ee)}))}),[]),{isDarkTheme:o===te,setLightTheme:s,setDarkTheme:u}},ie=n(5502);var oe=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,i=t.setDarkTheme;return r.createElement(ie.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:i}},e.children)},le="docusaurus.tab.",ce=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(le)){var n=t.substring(le.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},se=(0,r.createContext)(void 0);var ue=function(e){var t=ce(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(se.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function me(e){var t=e.children;return r.createElement(oe,null,r.createElement(l.pl,null,r.createElement(ue,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t)))))}var de=n(9932);function fe(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(de.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var ve=n(7027);function he(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(de.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,a=function(){var e=(0,p.Z)().siteConfig.url,t=(0,i.TH)().pathname;return e+(0,V.Z)(t)}(),o=t?""+n+t:a;return r.createElement(de.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function ge(e){var t=(0,p.Z)(),n=t.siteConfig,a=n.favicon,i=n.themeConfig,o=i.metadatas,c=i.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,E=(0,V.Z)(a),k=(0,l.pe)(d),Z=u,_=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(de.Z,null,r.createElement("html",{lang:Z,dir:_}),a&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("title",null,k),r.createElement("meta",{property:"og:title",content:k}),v||c&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(ve.Z,{description:f,keywords:h,image:v}),r.createElement(be,null),r.createElement(he,null),r.createElement(fe,(0,b.Z)({tag:l.HX,locale:u},g)),r.createElement(de.Z,null,o.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var pe=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ee=function(e){var t=e.children,n=e.noFooter,i=e.wrapperClassName,o=e.pageClassName;return pe(),r.createElement(me,null,r.createElement(ge,e),r.createElement(u,null),r.createElement(h,null),r.createElement(H,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,i,o)},t),!n&&r.createElement(Y,null))}},974:function(e,t,n){"use strict";var r=n(2122),a=n(9756),i=n(7294),o=n(1384),l=n(4455),c=n(1402),s=n(6832),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,b=t.isClient,g=e.imageClassName,p=e.titleClassName,E=(0,a.Z)(e,u),k=(0,c.Z)(h.href||"/"),Z={light:(0,c.Z)(h.src),dark:(0,c.Z)(h.srcDark||h.src)};return i.createElement(o.Z,(0,r.Z)({to:k},E,h.target&&{target:h.target}),h.src&&i.createElement(l.Z,{key:b,className:g,sources:Z,alt:h.alt||f||m}),null!=f&&i.createElement("b",{className:p},f))}},2842:function(e,t,n){"use strict";n.d(t,{O:function(){return h}});var r=n(2122),a=n(9756),i=n(7294),o=n(6010),l=n(1384),c=n(1402),s=n(8168),u=n(1699),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,b=e.prependBaseUrlToHref,g=(0,a.Z)(e,m),p=(0,c.Z)(o),E=(0,c.Z)(t),k=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),_="dropdown__link--active"===h;return i.createElement(l.Z,(0,r.Z)({},d?{href:b?k:d}:Object.assign({isNavLink:!0,activeClassName:h,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),g),Z?i.createElement("span",null,f,i.createElement(s.Z,_&&{width:12,height:12})):f)}function b(e){var t=e.className,n=e.isDropdownItem,l=void 0!==n&&n,c=(0,a.Z)(e,d),s=i.createElement(h,(0,r.Z)({className:(0,o.Z)(l?"dropdown__link":"navbar__item navbar__link",t)},c));return l?i.createElement("li",null,s):s}function g(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,f));return i.createElement("li",{className:"menu__list-item"},i.createElement(h,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.position,(0,a.Z)(e,v)),o=n?g:b;return i.createElement(o,r)}},461:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),i=n(7294),o=n(2842),l=n(9099),c=n(6010),s=n(3382),u=n(9861),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),b=(0,l.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,l.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,u.uniq)([g,E,k].filter(Boolean)),n);return i.createElement(o.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[d]=p&&p.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},4493:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),i=n(7294),o=n(2842),l=n(6570),c=n(9099),s=n(3382),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,g=(0,a.Z)(e,u),p=(0,c.Iw)(f),E=(0,c.gB)(f),k=(0,c.yW)(f),Z=(0,s.J)(f),_=Z.preferredVersion,w=Z.savePreferredVersionName;var y,N=(y=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(h,y,b)),C=null!=(t=null!=(n=p.activeVersion)?n:_)?t:k,L=d&&N?"Versions":C.label,I=d&&N?void 0:m(C).path;return N.length<=1?i.createElement(o.Z,(0,r.Z)({},g,{mobile:d,label:L,to:I,isActive:v?function(){return!1}:void 0})):i.createElement(l.Z,(0,r.Z)({},g,{mobile:d,label:L,to:I,items:N,isActive:v?function(){return!1}:void 0}))}},9693:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),i=n(7294),o=n(2842),l=n(9099),c=n(3382),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,l.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,l.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return i.createElement(o.Z,(0,r.Z)({},d,{label:g,to:p}))}},6570:function(e,t,n){"use strict";var r=n(2122),a=n(9756),i=n(7294),o=n(6010),l=n(3382),c=n(2842),s=n(4713),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,l.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,l=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,i.useRef)(null),v=(0,i.useRef)(null),h=(0,i.useState)(!1),b=h[0],g=h[1];return(0,i.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),i.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===l,"dropdown--show":b})},i.createElement(c.O,(0,r.Z)({className:(0,o.Z)("navbar__item navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),i.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return i.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,l.be)(),h=f(n,v),b=(0,l.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,i.useEffect)((function(){h&&E(!h)}),[v,h]),i.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},i.createElement(c.O,(0,r.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),i.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return i.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),o=n?h:v;return i.createElement(o,r)}},4713:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(9756),a=n(7294),i=n(2842),o=n(6570),l=n(2122),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,i=e.height,o=void 0===i?20:i,s=(0,r.Z)(e,c);return a.createElement("svg",(0,l.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(6832),m=n(3382),d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,i=e.dropdownItemsAfter,c=(0,r.Z)(e,d),f=(0,u.Z)().i18n,v=f.currentLocale,h=f.locales,b=f.localeConfigs,g=(0,m.l5)();function p(e){return b[e].label}var E=h.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,E,i),Z=t?"Languages":p(v);return a.createElement(o.Z,(0,l.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,Z)),items:k}))}var v=n(7859);function h(e){return e.mobile?null:a.createElement(v.Z,null)}var b=["type"],g={default:function(){return i.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return o.Z},docsVersion:function(){return n(9693).Z},docsVersionDropdown:function(){return n(4493).Z},doc:function(){return n(461).Z}};function p(e){var t=e.type,n=(0,r.Z)(e,b),i=function(e){var t=g[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(i,n)}},7027:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9932),i=n(3382),o=n(1402);function l(e){var t=e.title,n=e.description,l=e.keywords,c=e.image,s=(0,i.LU)().image,u=(0,i.pe)(t),m=(0,o.Z)(c||s,{absolute:!0});return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}))}},4455:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),i=n(7294),o=n(6010),l=n(6832),c=n(6266),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,l.Z)().isClient,n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return i.createElement(i.Fragment,null,b.map((function(e){return i.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},8002:function(e,t,n){"use strict";var r=n(7294),a=n(9901),i=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(i()),a=function(){var t=i();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},7213:function(e,t,n){"use strict";var r=n(7294),a=n(9901),i="desktop",o="mobile",l="ssr";function c(){return a.Z.canUseDOM?window.innerWidth>996?i:o:l}t.Z=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){if(a.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(c())}}),[]),t}},4357:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},9861:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(5479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},5479:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);