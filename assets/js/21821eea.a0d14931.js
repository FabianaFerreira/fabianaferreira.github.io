"use strict";(self.webpackChunkfabianafonseca=self.webpackChunkfabianafonseca||[]).push([[521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={slug:"k8s-network",title:"Kubernetes Networking",author:"Fabiana Fonseca",author_title:"Software Engineer @ VTEX",author_url:"https://github.com/fabianaferreira",author_image_url:"https://avatars.githubusercontent.com/u/19495917?s=400&u=302696fe63b0bceec347a6b90dd42bddcea1cf43&v=4",tags:["k8s"]},i=void 0,s={unversionedId:"technical/2021-06-18-k8s-network",id:"technical/2021-06-18-k8s-network",title:"Kubernetes Networking",description:"One of the most exciting parts about Kubernetes is how the network works. Thinking about different nodes and pods that do not know each other, how can they communicate?",source:"@site/docs/technical/2021-06-18-k8s-network.md",sourceDirName:"technical",slug:"/technical/k8s-network",permalink:"/docs/technical/k8s-network",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/technical/2021-06-18-k8s-network.md",tags:[{label:"k8s",permalink:"/docs/tags/k-8-s"}],version:"current",frontMatter:{slug:"k8s-network",title:"Kubernetes Networking",author:"Fabiana Fonseca",author_title:"Software Engineer @ VTEX",author_url:"https://github.com/fabianaferreira",author_image_url:"https://avatars.githubusercontent.com/u/19495917?s=400&u=302696fe63b0bceec347a6b90dd42bddcea1cf43&v=4",tags:["k8s"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Labels and Selectors",permalink:"/docs/technical/k8s-labels-and-selectors"}},c={},l=[],u={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most exciting parts about Kubernetes is how the network works. Thinking about different nodes and pods that do not know each other, how can they communicate?"),(0,o.kt)("p",null,"A node knows the IPs of all the other nodes, and it also knows the IPs of its pods. For instance, let\u2019s use the scenario of a pod that needs to make a request to a pod that is on another node. "),(0,o.kt)("p",null,"In that case, a container will forward the payload to the pod switch, which will then forward it to the node switch that will send the request to the node that has the pod that we want to make the request to. Once there, it will make the other way around, passing through the switches, reaching the pod, and at last, communicating with the container through its port."),(0,o.kt)("p",null,"The daemon set is a little different; since it\u2019s on the edge of a node, it does not have a specific IP"))}h.isMDXComponent=!0}}]);