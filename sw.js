if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"[id]-4c5c8693.js",revision:"fbb617778e08e4e8e1406bb7baa5de3c"},{url:"[id]-9e64bac4.js",revision:"62ac08470d1aad538a017bd411ca2d1d"},{url:"404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"index.css",revision:"5c98cb501a8ea95854e2ceac214b1ce0"},{url:"index.html",revision:"517ec351c60694e4635c70a1cd47e77b"},{url:"index.js",revision:"893d6c217fe4322ba6b2ebc0e09ec15f"},{url:"stories-49ec819c.js",revision:"d60ac58c16d9e14268f732d90573e2eb"}],{})}));
//# sourceMappingURL=sw.js.map
