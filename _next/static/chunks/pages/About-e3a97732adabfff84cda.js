_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{PZQO:function(t,e,i){"use strict";i.r(e);var n=i("nKUr"),o=i("q1tI"),a=i("vOnD"),r=i("irF2"),s=i("YEJx"),l=[{position:10,year:"1997",title:"Born",detail:"Bangkok"},{position:25,year:"2007",title:"School",detail:"Bunyawat Witthayalai School"},{position:42,year:"2013",title:"Computer Olympic (POSN)",detail:"Camp 1 - 2\nChiang Mai University"},{position:52,year:"2015",title:"Computer Engineering",detail:"Kasetsart University"},{position:62,year:"2017",title:"Back-End Developer (internship)",detail:"Fungjai Co., Ltd."},{position:72,year:"2019 - present",title:"Front-End Developer",detail:"AppMan Co.,Ltd"}],c=function(t){var e=t.isShowTimeline,i=Object(o.useState)(!1),a=i[0],r=i[1],s=Object(o.useState)(0),c=s[0],w=s[1],x=function t(e){e<=l.length&&setTimeout((function(){w(e),t(e+1)}),300)};return Object(o.useEffect)((function(){e&&setTimeout((function(){x(1),r(!0)}),1e3)}),[e]),Object(n.jsxs)(n.Fragment,{children:[l.map((function(t,e){var i=e%2===0?"top":"bottom";return Object(n.jsxs)(d,{position:t.position,children:[Object(n.jsx)(m,{isShowBulleLine:a&&e<=c,direction:i,position:t.position}),Object(n.jsxs)(h,{isShowContent:a&&e+1<=c,direction:i,position:t.position+1,children:[Object(n.jsx)(p,{children:t.year}),Object(n.jsx)(b,{children:t.title}),Object(n.jsx)(f,{children:t.detail})]})]},"Bullet-".concat(e))})),Object(n.jsx)(u,{isShowTimeline:e})]})},d=a.b.div.withConfig({displayName:"Timeline__Container",componentId:"sc-1lwl3sc-0"})(["position:absolute;left:","%;top:-4px;"],Object(s.b)("position",0)),p=a.b.div.withConfig({displayName:"Timeline__YearContainer",componentId:"sc-1lwl3sc-1"})(["padding:6px 0 6px 12px;font-size:18px;font-weight:bold;"]),b=a.b.div.withConfig({displayName:"Timeline__TitleContainer",componentId:"sc-1lwl3sc-2"})(["padding-left:12px;font-size:16px;font-weight:bold;"]),f=a.b.div.withConfig({displayName:"Timeline__DetailContainer",componentId:"sc-1lwl3sc-3"})(["padding:6px 0 6px 12px;font-size:14px;white-space:pre-line;"]),h=a.b.div.withConfig({displayName:"Timeline__ContentContainer",componentId:"sc-1lwl3sc-4"})(["position:absolute;height:200px;width:200px;display:",";opacity:0;left:","%;animation:fadeIn 2s both;> div{color:#2b2b2b;}@keyframes fadeIn{from{opacity:0;transform:translateX(-5px);}to{opacity:1;transform:translateX(0);}}",";"],Object(s.a)("isShowContent","flex","none"),Object(s.b)("position",0),Object(s.a)({direction:"top"},Object(a.a)(["bottom:50%;flex-direction:column;"]),Object(a.a)(["top:50%;flex-direction:column-reverse;"]))),m=a.b.div.withConfig({displayName:"Timeline__Bullet",componentId:"sc-1lwl3sc-5"})(["position:relative;width:10px;height:10px;border-radius:50%;background:#2d2d2b;opacity:",";transition:opacity 2s;&::after{content:'';padding-left:10px;position:absolute;border-left:2px solid;border-color:#2d2d2b;left:4px;height:","px;transition:height 2s;}",""],Object(s.a)("isShowBulleLine",1,0),Object(s.a)("isShowBulleLine",200,0),Object(s.c)("direction",{top:Object(a.a)(["&::after{bottom:0;}"]),bottom:Object(a.a)(["&::after{top:0;}"])})),u=a.b.span.withConfig({displayName:"Timeline__Line",componentId:"sc-1lwl3sc-6"})(["width:0;border-bottom:2px solid;border-color:#2d2d2b;animation:mymove 5s both;display:",";@keyframes mymove{from{width:0%;}to{width:100%;}}"],Object(s.a)("isShowTimeline","block","none")),w=i("WlAH"),x=a.b.span.withConfig({displayName:"About__RemarkLink",componentId:"j1i91q-0"})(["font-size:16px;font-style:italic;transition:font-size 1.2s;position:relative;@media only screen and (max-width:","px){font-size:12px;&:hover{font-size:14px;}}&:hover{font-size:18px;}&::after{background:none repeat scroll 0 0 transparent;bottom:-8px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 1.5s ease 0s,left 1.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}"],w.a.screenSize.small),y=a.b.div.withConfig({displayName:"About__Container",componentId:"j1i91q-1"})(["width:100%;position:relative;"]),j=a.b.div.withConfig({displayName:"About__DetailContainer",componentId:"j1i91q-2"})(["position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:","px){padding:0 20px;}"],w.a.screenSize.small),v=Object(a.b)(j).withConfig({displayName:"About__TimelineContainer",componentId:"j1i91q-3"})(["max-width:100vw;overflow-x:scroll;"]),g=a.b.div.withConfig({displayName:"About__TimelineWrapper",componentId:"j1i91q-4"})(["min-width:100%;position:relative;@media only screen and (max-width:","px){min-width:1024px;padding-right:20px;}"],w.a.screenSize.small),O=a.b.div.withConfig({displayName:"About__TextContainer",componentId:"j1i91q-5"})(["font-size:42px;line-height:1.6;@media only screen and (max-width:","px){font-size:24px;}"],w.a.screenSize.small);a.b.span.withConfig({displayName:"About__Line",componentId:"j1i91q-6"})(["width:100%;border-bottom:2px solid;"]),e.default=function(t){var e=Object(o.useState)(!1),i=e[0],a=e[1];return Object(o.useEffect)((function(){var t=function(t){var e=t.target.scrollTop,i=t.target.scrollHeight;e+t.target.clientHeight>=i-5&&a(!0)};return window.addEventListener("scroll",t,!0),i&&window.removeEventListener("scroll",t,!0),function(){return window.removeEventListener("scroll",t,!0)}}),[i]),Object(n.jsx)(r.a,{children:Object(n.jsxs)(y,{children:[Object(n.jsx)(j,{children:Object(n.jsxs)(O,{children:["My name is Khathawut ,",Object(n.jsx)("br",{}),"born on the 7th of March 1997.",Object(n.jsx)("br",{}),"I'm Web developer located at Bangkok.",Object(n.jsx)("br",{}),"Experience with React and Express",Object(n.jsx)("br",{}),Object(n.jsx)(x,{children:Object(n.jsx)("a",{target:"_blank",href:"https://www.appman.co.th/",children:"Developer at Appman Co., Ltd."})})]})}),Object(n.jsx)(v,{children:Object(n.jsx)(g,{children:Object(n.jsx)(c,{isShowTimeline:i})})})]})})}},PwFv:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return i("PZQO")}])},YEJx:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s}));var n=function(t,e){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof i[t])return i[t];if(t&&t.indexOf(".")>0){for(var n=t.split("."),o=n.length,a=i[n[0]],r=1;null!=a&&r<o;)a=a[n[r]],r+=1;if("undefined"!==typeof a)return a}return e}};function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a={function:function(t,e){return Boolean(e(t))},object:function(t,e){for(var i=Object.keys(e),o=i.length,a=0;a<o;a+=1){var r=i[a];if(e[r]!==n(r)(t))return!1}return!0},string:function(t,e){return Boolean(n(e)(t))}},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=!0;if(Array.isArray(t))for(var s=t.length,l=0;r&&l<s;)r=a[o(t[l])](n,t[l]),l+=1;else r=a[o(t)](n,t);var c=r?e:i;return"function"===typeof c?c(n):c}},s=function(t,e,i){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="function"===typeof t?t(o):n(t)(o),r="function"===typeof e?e(o):e;return a in r?r[a]:i}}},irF2:function(t,e,i){"use strict";var n=i("vOnD"),o=i("YEJx"),a=n.b.div.withConfig({displayName:"DetailLayout__ContentContainer",componentId:"sc-7fask4-0"})(["",";width:100%;height:100%;overflow-y:scroll;scroll-behavior:smooth;scroll-snap-type:both mandatory;animation:contentContainerFadeIn 1.5s;@keyframes contentContainerFadeIn{0%{opacity:0;}100%{opacity:1;}}&::-webkit-scrollbar{display:none;}"],Object(o.a)("isHide",Object(n.a)(["display:none;"])));e.a=a}},[["PwFv",0,1,2]]]);