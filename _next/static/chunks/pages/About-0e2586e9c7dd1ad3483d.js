_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{PZQO:function(t,e,i){"use strict";i.r(e);var n=i("nKUr"),o=i("q1tI"),r=i("vOnD"),a=i("irF2"),s=i("YEJx"),l=[{position:10,year:"1997",title:"Born",detail:"Bangkok"},{position:25,year:"2007",title:"School",detail:"Bunyawat Witthayalai School"},{position:42,year:"2013",title:"Computer Olympic (POSN)",detail:"Camp 1 - 2\nChiang Mai University"},{position:52,year:"2015",title:"Computer Engineering",detail:"Kasetsart University"},{position:62,year:"2017",title:"Back-End Developer (internship)",detail:"Fungjai Co., Ltd."},{position:72,year:"2019 - present",title:"Front-End Developer",detail:"AppMan Co.,Ltd"}],c=function(t){var e=t.isShowTimeline,i=Object(o.useState)(!1),r=i[0],a=i[1],s=Object(o.useState)(0),c=s[0],x=s[1],w=function t(e){e<=l.length&&setTimeout((function(){x(e),t(e+1)}),300)};return Object(o.useEffect)((function(){e&&setTimeout((function(){w(1),a(!0)}),1e3)}),[e]),Object(n.jsxs)(n.Fragment,{children:[l.map((function(t,e){var i=e%2===0?"top":"bottom";return Object(n.jsxs)(d,{position:t.position,children:[Object(n.jsx)(m,{isShowBulleLine:r&&e<=c,direction:i,position:t.position}),Object(n.jsxs)(h,{isShowContent:r&&e+1<=c,direction:i,position:t.position+1,children:[Object(n.jsx)(p,{children:t.year}),Object(n.jsx)(b,{children:t.title}),Object(n.jsx)(f,{children:t.detail})]})]},"Bullet-".concat(e))})),Object(n.jsx)(u,{isShowTimeline:e})]})},d=r.b.div.withConfig({displayName:"Timeline__Container",componentId:"sc-1lwl3sc-0"})(["position:absolute;left:","%;top:-4px;"],Object(s.b)("position",0)),p=r.b.div.withConfig({displayName:"Timeline__YearContainer",componentId:"sc-1lwl3sc-1"})(["padding:6px 0 6px 12px;font-size:18px;font-weight:bold;"]),b=r.b.div.withConfig({displayName:"Timeline__TitleContainer",componentId:"sc-1lwl3sc-2"})(["padding-left:12px;font-size:16px;font-weight:bold;"]),f=r.b.div.withConfig({displayName:"Timeline__DetailContainer",componentId:"sc-1lwl3sc-3"})(["padding:6px 0 6px 12px;font-size:14px;white-space:pre-line;"]),h=r.b.div.withConfig({displayName:"Timeline__ContentContainer",componentId:"sc-1lwl3sc-4"})(["position:absolute;height:200px;width:200px;display:",";opacity:0;left:","%;animation:fadeIn 2s both;> div{color:#2b2b2b;}@keyframes fadeIn{from{opacity:0;transform:translateX(-5px);}to{opacity:1;transform:translateX(0);}}",";"],Object(s.a)("isShowContent","flex","none"),Object(s.b)("position",0),Object(s.a)({direction:"top"},Object(r.a)(["bottom:50%;flex-direction:column;"]),Object(r.a)(["top:50%;flex-direction:column-reverse;"]))),m=r.b.div.withConfig({displayName:"Timeline__Bullet",componentId:"sc-1lwl3sc-5"})(["position:relative;width:10px;height:10px;border-radius:50%;background:#2d2d2b;opacity:",";transition:opacity 2s;&::after{content:'';padding-left:10px;position:absolute;border-left:2px solid;border-color:#2d2d2b;left:4px;height:","px;transition:height 2s;}",""],Object(s.a)("isShowBulleLine",1,0),Object(s.a)("isShowBulleLine",200,0),Object(s.c)("direction",{top:Object(r.a)(["&::after{bottom:0;}"]),bottom:Object(r.a)(["&::after{top:0;}"])})),u=r.b.span.withConfig({displayName:"Timeline__Line",componentId:"sc-1lwl3sc-6"})(["width:0;border-bottom:2px solid;border-color:#2d2d2b;animation:mymove 5s both;display:",";@keyframes mymove{from{width:0%;}to{width:100%;}}"],Object(s.a)("isShowTimeline","block","none")),x=i("WlAH"),w=r.b.div.withConfig({displayName:"MouseAnimation__ArrowAnimation",componentId:"cr3n0x-0"})(["position:absolute;width:40px;height:40px;bottom:60px;left:50%;margin:-20px 0 0 -20px;transform:rotate(45deg);border-left:none;border-top:none;border-right:2px #000 solid;border-bottom:2px #000 solid;@media only screen and (max-width:","px){width:20px;height:20px;left:52%;border-right:1px #000 solid;border-bottom:1px #000 solid;}&::before{position:absolute;left:50%;content:'';width:20px;height:20px;top:50%;margin:-10px 0 0 -10px;border-left:none;border-top:none;border-right:1px #000 solid;border-bottom:1px #000 solid;animation-duration:2s;animation-iteration-count:infinite;animation-name:arrow;@media only screen and (max-width:","px){width:10px;height:10px;}@keyframes arrow{0%{opacity:1;}100%{opacity:0;transform:translate(-10px,-10px);}}}"],x.a.screenSize.small,x.a.screenSize.small),y=function(){return Object(n.jsx)(w,{})},j=r.b.span.withConfig({displayName:"About__HilightText",componentId:"j1i91q-0"})(["color:#4ca708;font-style:italic;font-size:52px;font-weight:500;@media only screen and (max-width:","px){font-size:28px;}"],x.a.screenSize.small),g=r.b.span.withConfig({displayName:"About__RemarkLink",componentId:"j1i91q-1"})(["font-size:16px;font-style:italic;transition:font-size 1.2s;position:relative;@media only screen and (max-width:","px){font-size:12px;&:hover{font-size:14px;}}&:hover{font-size:18px;}&::after{background:none repeat scroll 0 0 transparent;bottom:-8px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 1.5s ease 0s,left 1.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}"],x.a.screenSize.small),v=r.b.div.withConfig({displayName:"About__Container",componentId:"j1i91q-2"})(["width:100%;position:relative;"]),O=r.b.div.withConfig({displayName:"About__DetailContainer",componentId:"j1i91q-3"})(["position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:","px){padding:0 20px;}"],x.a.screenSize.small),_=Object(r.b)(O).withConfig({displayName:"About__TimelineContainer",componentId:"j1i91q-4"})(["max-width:100vw;overflow-x:scroll;"]),C=r.b.div.withConfig({displayName:"About__TimelineWrapper",componentId:"j1i91q-5"})(["min-width:100%;position:relative;@media only screen and (max-width:","px){min-width:1024px;padding-right:20px;}"],x.a.screenSize.small),S=r.b.div.withConfig({displayName:"About__TextContainer",componentId:"j1i91q-6"})(["font-size:42px;line-height:1.6;@media only screen and (max-width:","px){font-size:24px;}"],x.a.screenSize.small);r.b.span.withConfig({displayName:"About__Line",componentId:"j1i91q-7"})(["width:100%;border-bottom:2px solid;"]),e.default=function(t){var e=Object(o.useState)(!1),i=e[0],r=e[1];return Object(o.useEffect)((function(){var t=function(t){var e=t.target.scrollTop,i=t.target.scrollHeight;e+t.target.clientHeight>=i-5&&r(!0)};return window.addEventListener("scroll",t,!0),i&&window.removeEventListener("scroll",t,!0),function(){return window.removeEventListener("scroll",t,!0)}}),[i]),Object(n.jsx)(a.a,{children:Object(n.jsxs)(v,{children:[Object(n.jsxs)(O,{children:[Object(n.jsxs)(S,{children:["My name is ",Object(n.jsx)(j,{children:"Khathawut"})," ,",Object(n.jsx)("br",{}),"born on the 7th of March 1997.",Object(n.jsx)("br",{}),"I'm Web developer located at Bangkok.",Object(n.jsx)("br",{}),"Experience with ",Object(n.jsx)(j,{children:"React"})," and"," ",Object(n.jsx)(j,{children:"Express"}),Object(n.jsx)("br",{}),Object(n.jsx)(g,{children:Object(n.jsx)("a",{target:"_blank",href:"https://www.appman.co.th/",children:"Developer at Appman Co., Ltd."})})]}),Object(n.jsx)(y,{})]}),Object(n.jsx)(_,{children:Object(n.jsx)(C,{children:Object(n.jsx)(c,{isShowTimeline:i})})})]})})}},PwFv:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return i("PZQO")}])},YEJx:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s}));var n=function(t,e){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof i[t])return i[t];if(t&&t.indexOf(".")>0){for(var n=t.split("."),o=n.length,r=i[n[0]],a=1;null!=r&&a<o;)r=r[n[a]],a+=1;if("undefined"!==typeof r)return r}return e}};function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r={function:function(t,e){return Boolean(e(t))},object:function(t,e){for(var i=Object.keys(e),o=i.length,r=0;r<o;r+=1){var a=i[r];if(e[a]!==n(a)(t))return!1}return!0},string:function(t,e){return Boolean(n(e)(t))}},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=!0;if(Array.isArray(t))for(var s=t.length,l=0;a&&l<s;)a=r[o(t[l])](n,t[l]),l+=1;else a=r[o(t)](n,t);var c=a?e:i;return"function"===typeof c?c(n):c}},s=function(t,e,i){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="function"===typeof t?t(o):n(t)(o),a="function"===typeof e?e(o):e;return r in a?a[r]:i}}},irF2:function(t,e,i){"use strict";var n=i("vOnD"),o=i("YEJx"),r=n.b.div.withConfig({displayName:"DetailLayout__ContentContainer",componentId:"sc-7fask4-0"})(["",";width:100%;height:100%;overflow-y:scroll;scroll-behavior:smooth;scroll-snap-type:both mandatory;animation:contentContainerFadeIn 1.5s;@keyframes contentContainerFadeIn{0%{opacity:0;}100%{opacity:1;}}&::-webkit-scrollbar{display:none;}"],Object(o.a)("isHide",Object(n.a)(["display:none;"])));e.a=r}},[["PwFv",0,1,2]]]);