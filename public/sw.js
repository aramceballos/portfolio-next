if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Cover.jpg",revision:"ccc278d9c4ed6bb32df8667684999d08"},{url:"/_next/static/chunks/a3003e4b0d4f2849b09650554683a366df41d561.64e78618727d5656bad2.js",revision:"12cd5fc55e706f0c80b4e14aaf5abe85"},{url:"/_next/static/chunks/c552ba66a62d40697af9e26296922950f53cd509.541ac1022dfe6dd7bf3c.js",revision:"dc0cd785160dbefd26477e9a8d3b02c0"},{url:"/_next/static/chunks/commons.b19af3ffebb408f580f7.js",revision:"658e529606900ef17b274538692702ab"},{url:"/_next/static/chunks/d77f0cbd6d72daa0d47d116ef0de33b60cd1e74f.3334ccac0bf3f71b13e2.js",revision:"7c572ac8ed240f0438dea28f74da5191"},{url:"/_next/static/chunks/framework.d3c9d973ca0cf43312e7.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/main-7251b3ab8517d14fe8d9.js",revision:"ce16e574645634ec3c659b4be0855a3f"},{url:"/_next/static/chunks/pages/_app-b5fddfb88d03bf89f900.js",revision:"dafba483dd3e4a56129eaf36e60e79e3"},{url:"/_next/static/chunks/pages/_error-62624271355dc24095dc.js",revision:"a04c95d9d96ddc42fc9783ca5e88025a"},{url:"/_next/static/chunks/pages/certificates-877108088033706b1fa9.js",revision:"d34ad09a769a92e99ebd19648bc9b523"},{url:"/_next/static/chunks/pages/curriculum-dea75f7a23c2027457d4.js",revision:"efb62de03ccf56fda405b4a6b8eb9fd2"},{url:"/_next/static/chunks/pages/index-33f2c45d0c1a8a707475.js",revision:"c76eeffe7fd92425ecf57dd9536e6d22"},{url:"/_next/static/chunks/pages/projects-54fb2f86cd42ea327975.js",revision:"88286a7f1a19f3fc30afe2a49a182838"},{url:"/_next/static/chunks/polyfills-c0664c850fd807bc92c2.js",revision:"90ff26de925d896506e96868d52d1db7"},{url:"/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/yapdIDgHmND5b-hfP3p4E/_buildManifest.js",revision:"2b0a8260731c1d135c136b9088c757f7"},{url:"/_next/static/yapdIDgHmND5b-hfP3p4E/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"0e7fb95952669ceb3c05a40992489608"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));