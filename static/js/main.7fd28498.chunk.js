(this["webpackJsonpanime-hub"]=this["webpackJsonpanime-hub"]||[]).push([[0],{34:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var i,r,c,a,s=t(1),o=t(24),d=t.n(o),l=t(10),j=(t(34),t(2)),u=t(3),b=t(5),h=t(6),p=h.a.div(i||(i=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),x=h.a.div(r||(r=Object(b.a)(["\n  width: 200px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 10px;\n    height: 300px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h4 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),g=Object(h.a)(l.b)(c||(c=Object(b.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: grey;\n  &.active {\n    color: blue;\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: blue;\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"]))),f=t(0),O=[{to:"/",text:"Home"},{to:"/Starred",text:"Starred"}],m=function(){var e=Object(j.f)();return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:"nav-list",children:O.map((function(n){return Object(f.jsx)("li",{children:Object(f.jsx)(g,{className:e.pathname===n.to?"active":"",to:n.to,children:n.text})},n.to)}))})})},v=function(e){var n=e.title,t=e.subtitle;return Object(f.jsxs)("div",{className:"title",children:[Object(f.jsx)("h1",{children:n}),Object(f.jsx)("p",{children:t}),Object(f.jsx)("hr",{})]})},w=function(e){var n=e.children;return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{title:"Anime Hub",subtitle:"Platform to discover Animes and Mangas "}),Object(f.jsx)(m,{}),n]})},y=Object(h.a)(x)(a||(a=Object(b.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),S=function(e){var n=e.title,t=e.image,i=e.id,r=e.description,c=e.toggleStar,a=e.isStarred,s=n.eng,o=n.jpn,d=r?"".concat(r.split(" ").slice(0,10).join(" "),"..."):"No Description!";return Object(f.jsxs)(y,{children:[Object(f.jsx)("div",{className:"img-wrapper",children:Object(f.jsx)("img",{src:t,alt:"".concat(s,"_image")})}),Object(f.jsx)("h4",{children:s?"".concat(s):"No title found!"}),Object(f.jsx)("h4",{children:o}),Object(f.jsx)("p",{children:d}),Object(f.jsxs)("div",{className:"btns",children:[Object(f.jsx)(l.b,{to:"/anime/".concat(i),children:"Read more"}),Object(f.jsx)("button",{type:"button",onClick:c,children:Object(f.jsx)("i",{className:a?"fas fa-star yellow":"far fa-star",children:" "})})]})]})},k=t(29);function N(e,n){switch(n.type){case"ADD":return[].concat(Object(k.a)(e),[{data:n.resourceID,type:n.val}]);case"REMOVE":return e.filter((function(e){return e.data!==n.resourceID}));default:return e}}function E(e,n,t){var i=Object(s.useReducer)(e,n,(function(e){var n=localStorage.getItem(t);return n?JSON.parse(n):e})),r=Object(u.a)(i,2),c=r[0],a=r[1];return Object(s.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,a]}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"starred";return E(N,[],e)}var D,I,A,F,L,R,T,_=function(e){var n=e.data,t=C(),i=Object(u.a)(t,2),r=i[0],c=i[1];return Object(f.jsx)(p,{children:n.map((function(e){var n=r.find((function(n){return n.data===e.id}));return Object(f.jsx)(S,{toggleStar:function(){c(n?{type:"REMOVE",resourceID:e.id}:{type:"ADD",resourceID:e.id,val:"anime"})},title:{eng:e.attributes.titles.en_jp,jpn:e.attributes.titles.ja_jp},id:e.id,isStarred:n,description:e.attributes.description,image:e.attributes.posterImage.small},e.id)}))})},P=Object(h.a)(x)(D||(D=Object(b.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),W=function(e){var n=e.title,t=e.image,i=e.id,r=e.description,c=e.toggleStar,a=e.isStarred,s=n.eng,o=n.jpn,d=r?"".concat(r.split(" ").slice(0,10).join(" "),"..."):"No Description!";return Object(f.jsxs)(P,{children:[Object(f.jsx)("div",{className:"img-wrapper",children:Object(f.jsx)("img",{src:t,alt:"".concat(s,"_image")})}),Object(f.jsx)("h4",{children:s?"".concat(s):"No title found!"}),Object(f.jsx)("h4",{children:o}),Object(f.jsx)("p",{children:d}),Object(f.jsxs)("div",{className:"btns",children:[Object(f.jsx)(l.b,{to:"/manga/".concat(i),children:"Read more"}),Object(f.jsx)("button",{type:"button",onClick:c,children:Object(f.jsx)("i",{className:a?"fas fa-star yellow":"far fa-star",children:" "})})]})]})},H=function(e){var n=e.data,t=C(),i=Object(u.a)(t,2),r=i[0],c=i[1];return Object(f.jsx)(p,{children:n.map((function(e){var n=e.id,t=e.attributes,i=r.find((function(e){return e.data===n}));return Object(f.jsx)(W,{title:{eng:t.titles.en_jp,jpn:t.titles.ja_jp},id:n,isStarred:i,description:t.description,image:t.posterImage.small,toggleStar:function(){c(i?{type:"REMOVE",resourceID:n}:{type:"ADD",resourceID:n,val:"manga"})}},n)}))})},J=t(21),K=t.n(J),M=t(28),U=function(){var e=Object(M.a)(K.a.mark((function e(n){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://kitsu.io/api/edge/").concat(n)).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),V=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastInput",n=Object(s.useState)((function(){var n=sessionStorage.getItem(e);return n?JSON.parse(n):""})),t=Object(u.a)(n,2),i=t[0],r=t[1];return[i,function(n){r(n),sessionStorage.setItem(e,JSON.stringify(n))}]}(),n=Object(u.a)(e,2),t=n[0],i=n[1],r=Object(s.useState)(null),c=Object(u.a)(r,2),a=c[0],o=c[1],d=Object(s.useState)("anime"),l=Object(u.a)(d,2),j=l[0],b=l[1],h="anime"===j,p=function(){U("".concat(j,"?filter[text]=").concat(t)).then((function(e){o(e.data)}))},x=function(e){b(e.target.value)};return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsxs)(w,{children:[Object(f.jsx)("input",{className:"search",type:"text",placeholder:"Enter here to search",onChange:function(e){i(e.target.value)},value:t,onKeyDown:function(e){13===e.keyCode&&p()}}),Object(f.jsxs)("div",{className:"radio",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"anime",children:["Anime",Object(f.jsx)("input",{type:"radio",id:"anime",value:"anime",onChange:x,checked:h})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"manga",children:["Manga",Object(f.jsx)("input",{type:"radio",id:"manga",value:"manga",onChange:x,checked:!h})]})})]}),Object(f.jsx)("div",{className:"btn-wrapper",children:Object(f.jsx)("button",{type:"button",onClick:p,children:"Search"})}),a&&0===a.length?Object(f.jsx)("div",{className:"err-img",children:"No Results"}):a&&a.length>0?"anime"===j?Object(f.jsx)(_,{data:a}):Object(f.jsx)(H,{data:a}):null]}),Object(f.jsxs)("footer",{children:["An anime disovering website powered by ",Object(f.jsx)("i",{children:"\xa9Kitsu"}),", handcrafted by Str4nge"]})]})},z=function(){var e=C(),n=Object(u.a)(e,1)[0],t=Object(s.useState)(null),i=Object(u.a)(t,2),r=i[0],c=i[1],a=Object(s.useState)(!0),o=Object(u.a)(a,2),d=o[0],l=o[1],j=Object(s.useState)(null),b=Object(u.a)(j,2),h=b[0],p=b[1];return Object(s.useEffect)((function(){if(n&&n.length>0){var e=n.map((function(e){var n=e.data,t=e.type;return U("".concat(t,"/").concat(n))}));Promise.all(e).then((function(e){return e.map((function(e){return e.data}))})).then((function(e){c(e),l(!1)})).catch((function(e){l(!1),p(e)}))}else l(!1)}),[n]),Object(f.jsx)(w,{children:Object(f.jsxs)("div",{className:"starred",children:[d&&Object(f.jsx)("div",{children:"Data is Loading..."}),h&&Object(f.jsx)("div",{children:"Error Occured"}),!d&&!r&&Object(f.jsx)("div",{className:"err-img",children:"No Starred shows"}),!d&&r&&Object(f.jsx)("div",{children:Object(f.jsx)(_,{data:r})}),Object(f.jsxs)("footer",{children:["An anime disovering website powered by ",Object(f.jsx)("i",{children:"\xa9Kitsu"}),", handcrafted by Str4nge"]})]})})},B=function(){return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsxs)("div",{className:"err-block",children:["Error 404! ",Object(f.jsx)("br",{}),"OOPS Page you are looking for does not exist."]}),Object(f.jsxs)("footer",{children:["An anime disovering website powered by ",Object(f.jsx)("i",{children:"\xa9Kitsu"}),", handcrafted by Str4nge"]})]})},$=t(22),q=h.a.div(I||(I=Object(b.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 220px;\n    width: 275px;\n    max-height: 330px;\n    border: 1px solid #ddd;\n    border-radius: 10px;\n  }\n\n  .text-side {\n    margin-left: 30px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),G=h.a.div(A||(A=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h2 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),Q=function(e){var n=e.title,t=e.description,i=e.image;return Object(f.jsxs)(q,{children:[Object(f.jsx)("img",{src:i,alt:"show-cover"}),Object(f.jsxs)("div",{className:"text-side",children:[Object(f.jsxs)(G,{children:[Object(f.jsx)("h2",{children:n.eng}),Object(f.jsx)("span",{children:n.jpn})]}),Object(f.jsx)("div",{className:"summary",children:Object(f.jsx)("p",{children:t})})]})]})},X=h.a.div(F||(F=Object(b.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),Y=h.a.div(L||(L=Object(b.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),Z=function(e){var n=e.id,t=e.rating,i=e.count,r=e.status,c=e.genreString,a=e.ctg,o=Object(s.useState)(null),d=Object(u.a)(o,2),l=d[0],j=d[1];return Object(s.useEffect)((function(){var e=!0;return U(c).then((function(n){e&&j(n.data)})),function(){e=!1}}),[c]),Object(f.jsxs)(X,{children:[Object(f.jsxs)("p",{children:["Average rating: ",t]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["Status: ",Object(f.jsx)("span",{children:r})]}),Object(f.jsxs)("p",{children:["Total ","anime"===a?"Episodes":"Volume",": ",i]})]}),Object(f.jsxs)("div",{children:["Tags:",Object(f.jsx)(Y,{children:l&&l.map((function(e){return Object(f.jsx)("span",{children:e.attributes.name},e.id)}))})]}),Object(f.jsx)("br",{}),"Checkout what others think on"," ",Object(f.jsx)("a",{href:"".concat("https://kitsu.io","/").concat(a,"/").concat(n),rel:"noreferrer",target:"_blank",children:"Kitsu.io"})]})},ee=h.a.div(R||(R=Object(b.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),ne=h.a.div(T||(T=Object(b.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),te=function(e,n){switch(n.type){case"FETCH-SUCCESS":return{details:n.details,isLoading:!1,error:null};case"FETCH-FAILED":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,error:n.error});default:return e}},ie={details:null,isLoading:!0,error:null},re=function(e){var n=e.category,t=Object(j.g)(),i=Object(s.useReducer)(te,ie),r=Object(u.a)(i,2),c=r[0],a=c.details,o=c.isLoading,d=c.error,l=r[1];if(Object(s.useEffect)((function(){var e=!0;return U("/".concat(n,"/").concat(t.id)).then((function(n){e&&l({type:"FETCH-SUCCESS",details:n})})).catch((function(e){l({type:"FETCH-FAILED",error:e.message})})),function(){e=!1}}),[t.id,n]),o)return Object(f.jsx)("div",{children:"Data is Loading..."});if(d)return Object(f.jsxs)("div",{children:["Error Occurred: ",d]});var b=a.data.attributes,h=a.data.type;return Object(f.jsxs)("div",{children:[Object(f.jsxs)(ee,{children:[Object(f.jsx)(Q,{image:b.posterImage.small,title:{eng:b.titles.en_jp,jpn:b.titles.ja_jp},description:b.description}),Object(f.jsxs)(ne,{children:[Object(f.jsx)("h2",{children:"Details"}),Object(f.jsx)(Z,{id:t.id,rating:b.averageRating,ctg:h,count:"anime"===h?b.episodeCount:b.volumeCount,status:b.status,genreString:"".concat(n,"/").concat(t.id,"/genres")})]})]}),Object(f.jsxs)("footer",{children:["An anime disovering website powered by ",Object(f.jsx)("i",{children:"\xa9Kitsu"}),", handcrafted by Str4nge"]})]})};var ce=function(){return Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",children:Object(f.jsx)(V,{})}),Object(f.jsx)(j.a,{exact:!0,path:"/starred",children:Object(f.jsx)(z,{})}),Object(f.jsx)(j.a,{exact:!0,path:"/anime/:id",children:Object(f.jsx)(re,{category:"anime"})}),Object(f.jsx)(j.a,{exact:!0,path:"/manga/:id",children:Object(f.jsx)(re,{category:"manga"})}),Object(f.jsx)(j.a,{children:Object(f.jsx)(B,{})})]})},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),c(e),a(e)}))};d.a.render(Object(f.jsx)(l.a,{children:Object(f.jsx)(ce,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/anime-hub",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/anime-hub","/service-worker.js");ae?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):se(n,e)}))}}(),oe()}},[[47,1,2]]]);
//# sourceMappingURL=main.7fd28498.chunk.js.map