import{u as e,c as t,a as r,t as n,i as s,b as o,d as a,e as i,r as c}from"./index-dab64add.js";import{L as u,u as d,R as h,a as p}from"./solid-app-router-6ab26aeb.js";const g=t();function l(e){return r(g.Provider,{get value(){return function(){const e={},t=t=>e[t]||(e[t]=fetch("https://node-hnapi.herokuapp.com/"+t).then((e=>e.json())));return{getItem:e=>t("item/"+e),getUser:e=>t("user/"+e),getStories:(e,r)=>t(`${f[e]}?page=${r}`)}}()},get children(){return e.children}})}function b(){return e(g)}const f={top:"news",new:"newest",show:"show",ask:"ask",job:"jobs"};const m=n("<b>HN</b>",2),j=n("<b>New</b>",2),w=n("<b>Show</b>",2),k=n("<b>Ask</b>",2),v=n("<b>Jobs</b>",2),N=n('<header class="header"><nav class="inner"><a class="github" href="http://github.com/ryansolid/solid" target="_blank" rel="noreferrer">Built with Solid</a></nav></header>',6);function y(){return(()=>{const e=N.cloneNode(!0),t=e.firstChild,n=t.firstChild;return s(t,r(u,{href:"",get children(){return m.cloneNode(!0)}}),n),s(t,r(u,{href:"new",get children(){return j.cloneNode(!0)}}),n),s(t,r(u,{href:"show",get children(){return w.cloneNode(!0)}}),n),s(t,r(u,{href:"ask",get children(){return k.cloneNode(!0)}}),n),s(t,r(u,{href:"job",get children(){return v.cloneNode(!0)}}),n),e})()}const S=["new","show","ask","job"];function C(e){const[t,r]=o(),{getStories:n}=b(),s=()=>{var t;return+((null===(t=e.query)||void 0===t?void 0:t.page)||1)},c=function(){const{router:e}=d();return a((()=>{const t=e.location;for(let e=0;e<S.length;e++)if(t.includes(S[e]))return S[e];return"top"}))}();return i((()=>n(c(),s()).then(r))),{get type(){return c()},get stories(){return t()},get page(){return s()}}}var I=[{path:"",component:"pages/stories.js",data:C},{path:"new",component:"pages/stories.js",data:C},{path:"show",component:"pages/stories.js",data:C},{path:"ask",component:"pages/stories.js",data:C},{path:"job",component:"pages/stories.js",data:C},{path:"users/:id",component:"pages/users/[id].js",data:function(e){const[t,r]=o(),{getUser:n}=b();return i((()=>n(e.params.id).then(r))),{get user(){return t()}}}},{path:"stories/:id",component:"pages/stories/[id].js",data:function(e){const[t,r]=o(),{getItem:n}=b();return i((()=>n(e.params.id).then(r))),{get story(){return t()}}}},{path:"*",component:"pages/stories.js",data:C}];c((()=>r(p,{routes:I,get root(){return"/solid-hackernews/"},get children(){return r(l,{get children(){return[r(y,{}),r(h,{class:"view"})]}})}})),document.body);
