(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{6086:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},p="Getting Started with IOTA Wallet Python Binding",s={unversionedId:"libraries/python/getting_started",id:"libraries/python/getting_started",isDocsHomePage:!1,title:"Getting Started with IOTA Wallet Python Binding",description:"Security",source:"@site/docs/libraries/python/getting_started.md",sourceDirName:"libraries/python",slug:"/libraries/python/getting_started",permalink:"/docs/libraries/python/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/tree/dev/documentation/docs/libraries/python/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/docs/libraries/nodejs/api_reference"},next:{title:"examples",permalink:"/docs/libraries/python/examples"}},c=[{value:"Security",id:"security",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-iota-wallet-python-binding"},"Getting Started with IOTA Wallet Python Binding"),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a production setup, do not store passwords in the host's environment variables or in the source code. See our ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way to get python binding up and running is to leverage pre-built python libraries for linux, MacOs or Windows that can be installed to your python environment (3.6+) via ",(0,i.kt)("em",{parentName:"p"},"pip")," . The binding is automagically generated using github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/actions/workflows/python_binding_publish.yml"},"actions"),"."),(0,i.kt)("p",null,"You can download the latest artifacts for major python version using the  ",(0,i.kt)("a",{parentName:"p",href:"https://nightly.link/iotaledger/wallet.rs/workflows/python_binding_publish/develop"},"nighly.link service"),".  "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download zip file for the given os and pyversion. "),(0,i.kt)("li",{parentName:"ol"},"Unpack wheel file ( ",(0,i.kt)("em",{parentName:"li"},".whl")," )."),(0,i.kt)("li",{parentName:"ol"},"Install it via ",(0,i.kt)("em",{parentName:"li"},"pip")," by running the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <wheel_file>\n")),(0,i.kt)("p",null,"Once it has been properly installed you can double-check the installation using ",(0,i.kt)("em",{parentName:"p"},"pip")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,i.kt)("p",null,"The pip list should now include the ",(0,i.kt)("em",{parentName:"p"},"iota-wallet-python-binding"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Package                    Version\n-------------------------- -------\niota-wallet-python-binding 0.1.0\n")),(0,i.kt)("p",null,"Once you python environment has installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota-wallet-python-binding")," you can start developing using the python binding."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the ",(0,i.kt)("em",{parentName:"p"},"iota_wallet")," you will need to add an import statement:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import iota_wallet\n")),(0,i.kt)("p",null,"If you'd like more information on the ",(0,i.kt)("em",{parentName:"p"},"iota_wallet")," , you can print the documentation using the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(iota_wallet.__doc__)\n")))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);