(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(53)},42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);for(var a=t(0),r=t.n(a),c=t(16),o=t.n(c),s=t(4),l=t(2),i=t.n(l),m=t(17),u=t.n(m),p=t(1),d=t.n(p),g=t(5),f=t(18),h=function(){var e=Object(g.a)(d.a.mark(function e(n,t){var a,r,c,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=v(n))){e.next=3;break}return e.abrupt("return",a);case 3:return e.prev=3,e.next=6,Object(f.get)(t);case 6:return r=e.sent,c=r.data,o=c&&c.items.sort(function(e,n){return e.name<n.name?-1:e.name>n.name?1:0}).map(function(e){return{name:e.name,description:e.description,source:e.html_url,created:new Date(e.created_at)}}),E(n,o),e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",null);case 16:case"end":return e.stop()}},e,null,[[3,13]])}));return function(n,t){return e.apply(this,arguments)}}(),v=function(e){if("undefined"===typeof Storage||!window.sessionStorage)return null;var n=window.sessionStorage.getItem(e);if(n)try{return JSON.parse(n)}catch(t){return null}},E=function(e,n){"undefined"!==typeof Storage&&window.sessionStorage&&window.sessionStorage.setItem(e,JSON.stringify(n))},w=function(){var e=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("passion-projects","https://api.github.com/search/repositories?q=user:waichungwong+topic:passion-project");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("npm-modules","https://api.github.com/search/repositories?q=user:waichungwong+topic:npm-module");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=(t(42),function(e){var n=e.className;return r.a.createElement("div",{className:i()(n,"scroll-icon")})}),N=(t(43),function(e){var n=e.className,t=e.onChange,a=void 0===t?function(){}:t,c=e.checked,o=void 0!==c&&c;return r.a.createElement("label",{className:i()(n,"switch")},r.a.createElement("input",{type:"checkbox",onChange:a,checked:o}),r.a.createElement("span",{className:"slider"}))}),j=(t(44),Math.random),y=Math.PI,O=["\u25a0","\u25cf","\u25b2"],x=[],S=0;S<5;S++)x.push({top:"".concat(100*j(),"%"),left:"".concat(100*j(),"%"),shape:O[S%O.length],transform:"translate(-50%, -50%) scale(".concat(.5+j(),") rotate(").concat(y*j(),"rad)"),color:"hsl(".concat(360*S/5,", 100%, 80%)"),opacity:.1+.2*(1-j()),animationDuration:"".concat(30+10*j(),"s"),animationDelay:"".concat(5*j(),"s")});var M=function(e){var n=e.top,t=e.left,a=e.shape,c=e.transform,o=e.color,s=e.opacity,l=e.animationDuration,i=e.animationDelay;return r.a.createElement("div",{className:"background-shape-wrapper",style:{top:n,left:t,transform:c}},r.a.createElement("div",{className:"background-shape",style:{color:o,opacity:s,animationDuration:l,animationDelay:i}},a))},C=function(e){var n=e.className;return r.a.createElement("div",{className:i()(n,"background")},x.map(function(e,n){return r.a.createElement(M,Object.assign({key:"s_".concat(n)},e))}))},P=(t(45),function(){return r.a.createElement("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"90 30 220 340"},r.a.createElement("path",{d:"M210 30 L310 30 L310 260 q 0 100 -100 110z M190 30 L90 30 L90 130z M40 320 m 50 0 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0z"}))}),z=(t(46),function(){return r.a.createElement("svg",{className:"signature",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 550 250"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"signature-clip",className:"signature-clip"},r.a.createElement("path",{className:"signature-clip-troke",d:"\nM469.9 8.4c-9.3 3.3-27.2 14.8-43.9 28.1-20 16-71.8 64.7-91.4\n86.1-6 6.6-12 13-13.4 14.4l-2.4 2.5 2.2-4.4c5.3-10.7 39.3-67.5 50.6-84.8 3-4.4\n5.4-8.4 5.4-8.7 0-3.2-13.1 9-69.6 64.6-10.6 10.3-19.4 18.8-19.8 18.8-.3 0\n2.6-3.9 6.4-8.8 14.9-18.5 33.5-47.2 41.7-64.1 9.8-20.3 11.5-32.7\n5.2-38.7-2.9-2.7-3.5-2.9-11.2-2.8-10.5.1-18.8 2.3-30.6 8-12.2 5.8-20.3 11.6-32\n22.9-29.6 28.6-45.9 63.8-32.1 69.5 6.4 2.7 21.5-3.2 36-14 9.5-7.1 30.8-27.5\n29.8-28.5-.3-.4-4.2 2.9-8.7 7.4-19.4 19.4-37.6 31.7-48.6\n32.8-6.8.7-8.5-.5-8.5-6.1.1-5.3 3.3-13.2 9.4-22.6 24.3-37.6 63-68 86.6-68 8.4 0\n10.8 3.5 9 12.9-4 21.1-24.7 53.3-68.3 105.9-30.3 36.6-30.6 37-24.5 35.8 4.7-.9\n8-3.8 26.4-23.3 29.3-30.8 77.9-78.1 79.1-76.9.3.2-12.4 22.8-28.1 50.1-15.7\n27.4-28.6 50.4-28.6 51.1 0 2.8 2 1.2 8.6-6.9 22-26.5 72.1-77 101.4-102.1 26-22.2\n45.5-34.5 47.2-29.7.5 1.6 27.3-17.7 27.3-19.7 0-2.2-5.6-2.7-10.6-.8zM190.7\n12c-26.5 4.5-61.3 26.2-83.2 52-17.8 20.9-25.1 36-21.1 43.8 1.9 3.7 4.3 4.6 12.1\n4.5 10.3-.2 26.5-7.4 43.9-19.3 11.7-8.1 16.2-11.7 15.5-12.4-.2-.3-5 2.7-10.4\n6.5C114.3 110.5 89 117.4 89 103c0-7.4 9.3-21.1 25-37 28.4-28.7 64.2-50.2\n86.1-51.7 8.8-.7 9.7.1 7.8 7-3.6 13.3-27.6 49.6-60.6 91.7-9 11.5-10.7 13.1-21.2\n20.2-45.7 30.9-80 62.4-93.4 85.8-3.5 6.2-6.7 16.1-6.7 21 0 3.6.3 4 2.4 4 10.8 0\n74-63.1 116.2-115.9 7.1-8.9 8.9-10.5 17.1-15.3 11-6.3 12.5-8.8 1.8-2.9l-7.4 4.1\n10.7-14.2c20.8-27.4 36.8-53.7 41.7-68.3 1-2.8 1.8-7.8\n1.9-11.3.1-5.2-.2-6.6-1.8-7.8-2.2-1.5-9.9-1.7-17.9-.4zm-64.9 127.7c-34.9\n43.2-79.9 92.7-89.1 98.4-4.6 2.8-5.8 2.5-5.1-1.4 3.5-19.8 21.5-43.4 53.9-70.3\n16.8-14 43.9-34.3 45.8-34.4.5 0-2 3.5-5.5 7.7zM510.5 101.6c-19 4-28.9 10.2-45.1\n28.4-3.6 4-29.7 20.4-31.6 19.8-.7-.3 5.7-7.4 14.3-15.9 8.6-8.5 16.8-17.5\n18.3-20.1 2.8-4.8 3.2-9.8.9-10.5-1.1-.4-21.8 13.3-43.2 28.4-5.7 4.1-10.5\n7.2-10.8 7-.2-.3 2.4-3.9 5.9-8.2 3.5-4.2 9.1-11.2 12.5-15.4 6.5-8 6.9-8.7\n5.3-11.1-.8-1.2-1.8-.6-5.2 3.5-6.8 7.9-10.5 11.2-22.8 19.4-10.3 6.8-19.3\n11.1-20.7 9.7-.3-.2 1.4-2.8 3.8-5.8 5.8-7.3 8.9-14.3 8.9-20.1\n0-4.1-.3-4.9-2.4-5.6-3.3-1.3-10 .4-17.2 4.4-7.7 4.3-19.7 15.4-24.1\n22.3-4.3 6.6-6.2 14.9-4.5 18.8 1.1 2.3 1.7 2.6 4.8 2.1 4.7-.8 13.7-5 20.2-9.5\n4.1-2.8 6.2-3.6 8.8-3.3 3.4.3 11.8-3 17.2-6.7 1.5-1 4.5-2.9 6.7-4.3l4-2.4-2.3\n3c-1.3 1.7-6.4 7.4-11.4 12.8s-8.8 10-8.5 10.3c.3.3 1.9.6 3.6.6 2.3.1 4.1-.8\n6.4-3 7.4-7.1 58.9-42.6 60.9-42 .7.3-5.8 7.4-14.4 15.9-9.1 9-16.5 17.1-17.7\n19.6-2.5 5.1-2.8 9.3-.5 9.3 2.1 0 13.4-5.7 23.3-11.9 4.6-2.8 8.4-5.1 8.6-5.1.2\n0-.1 1.3-.6 2.9-.6 1.6-.9 5.1-.7 7.7.5 7.6 3 7.3 16.7-2.1 6.1-4.1 11.1-7.2\n11.1-6.9 0 .4-2.6 3.7-5.8 7.3-3.1 3.6-7.7 8.9-10 11.8-2.4 2.8-11.4 10.5-20\n16.9-25.2 18.9-37.3 32.5-38.8 43.7-.6 4-.4 4.6 1.4 5.1 1.2.4 3.1.2 4.2-.4 7.5-4\n34.8-32 52.9-54.2 7.6-9.4 11.2-12.9 14.8-14.7 15.4-7.9 35.3-19.9 35.3-21.4\n0-1.4-1.7-.7-8.1 3.4-10.7 6.9-25.1 15-26.1 14.7-.8-.3 15.3-21.5 30.9-40.6\n5.9-7.3 5.7-8.2-1.4-8.1-3.2.1-6.7.3-7.8.5zm4.5 3.5c0 1.5-5.6 8.4-14.5 17.8-10.2\n10.7-29.5 25.1-33.8 25.1-1.6 0-1.8-.5-1.2-3.3 2.6-11.9 21.9-31.7 37-37.9 7.4-3.1\n12.5-3.7 12.5-1.7zm-122.4 7.3c-4.8 5-10.6 15.5-10.6 19.2 0 4.4-17.9 18.4-23.5\n18.4-2.5 0-1.8-5 1.5-10.8 3.1-5.4 18.5-21.7 25.2-26.7 3.5-2.5 10.9-5.7 11.6-5\n.2.2-1.7 2.4-4.2 4.9zm69.2 58.3c-.8 1-7.7 9.2-15.3 18.2-15.7 18.6-25.3 29.1-26.6\n29.1-1.8 0-.8-4.8 2.1-10.6 3.5-7.2 13.8-17.6 29.3-29.9 10.7-8.4 13.4-10.2\n10.5-6.8z\n"}),r.a.createElement("ellipse",{className:"signature-clip-troke",cx:"167",cy:"138",rx:"5",ry:"5"}))),r.a.createElement("g",{clipPath:"url(#signature-clip)",className:"signature-stroke"},r.a.createElement("path",{className:"signature-stroke-J",d:"\nM157.56 81.463c-23.414 17.074-65.853 42.927-70.243 22.927-4.39-20 78.537-100\n117.56-91.707C243.903 20.976 35.61 256.098 28.78 241.463c-6.83-14.634\n47.805-85.365 141.464-134.634\n"}),r.a.createElement("path",{className:"signature-stroke-dot",d:"\nM166.642 134.167c4.434 1.405 4.064 9.135-1.11\n5.973-5.172-3.162-.37-4.568.74-5.973\n"}),r.a.createElement("path",{className:"signature-stroke-W",d:"\nM300.488 68.78c-28.78 30.732-59.512 49.757-67.317 38.05-7.802-11.708\n45.856-96.586 97.076-96.098 51.22.488-75.61 147.317-79.512 153.17-3.903 5.854\n115.122-116.097 119.512-118.536 4.39-2.44-71.22 116.585-73.66 121.95-2.438 5.367\n134.636-158.048 180-156.096\n"}),r.a.createElement("path",{className:"signature-stroke-ong",d:"\nM397.56 105.366c-16.097 0-48.78 34.146-42.926 44.878 5.854 10.732 53.17-39.512\n44.39-40.488-8.78-.976-15.122 24.878-14.146 26.83.976 1.95 41.463-15.123\n50.732-31.708 9.268-16.585-32.683 40-36.586 44.39-3.902 4.39 54.37-39.034\n67.52-43.902 13.15-4.868-64.44 64.512-23.73 42.307 40.712-22.206 40.6-41.718\n70.032-46.9 29.43-5.184-44.106 16.2-51.515 43.77-7.405 27.57 46.894-28.09\n55.674-38.82 8.78-10.733-103.16 138.393-100.274 111.503 2.885-26.89\n94.816-79.675 105.222-86.006\n"})))}),_=(t(47),function(){return r.a.createElement("section",{className:"intro"},r.a.createElement(P,{className:"intro-logo"}),r.a.createElement("div",{className:"intro-headline"},r.a.createElement(z,null),r.a.createElement("div",{className:"intro-title"},"Software Engineer"),r.a.createElement("div",{className:"intro-subtitle"},"Passionate about front-end, experienced with the back-end. Into creating intuitive and attractive UI/UX. And loves CSS and animations!")))}),W=t(6),L=(t(48),function(e){var n=e.name,t=e.source,c=(Object(W.a)(e,["name","source"]),Object(a.useState)(!1)),o=Object(s.a)(c,2),l=o[0],m=o[1],u=Object(a.useRef)(null),p=function(){return m(!0)};return Object(a.useEffect)(function(){var e=u.current;(function(){var n=Object(g.a)(d.a.mark(function n(){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!l){n.next=6;break}return n.next=4,e.play();case 4:n.next=8;break;case 6:return n.next=8,e.pause();case 8:n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}},n,null,[[0,10]])}));return function(){return n.apply(this,arguments)}})()()},[l]),r.a.createElement("div",{className:i()("passion-projects-item",{active:l})},r.a.createElement("video",{ref:u,className:"passion-projects-item-video",loop:!0},r.a.createElement("source",{src:"https://waichungwong.github.io/".concat(n,"/demo.mp4"),type:"video/mp4"})),r.a.createElement("div",{className:"passion-projects-item-overlay",onMouseOver:p,onMouseOut:function(){return m(!1)},onMouseDown:p},r.a.createElement("span",{className:"passion-projects-item-title"},n),r.a.createElement("a",{className:"passion-projects-item-source",href:t,target:"_blank",rel:"noopener noreferrer"},"Source"),r.a.createElement("a",{className:"passion-projects-item-demo",href:"https://waichungwong.github.io/".concat(n,"/build"),target:"_blank",rel:"noopener noreferrer"},"Demo")))}),I=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!0),l=Object(s.a)(o,2),i=l[0],m=l[1];return Object(a.useEffect)(function(){(function(){var e=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),r.a.createElement("section",null,r.a.createElement("div",{className:"passion-projects-title"},"Passion Projects"),i?r.a.createElement("div",{className:"passion-projects-loader"}):null!==t?r.a.createElement("div",{className:"passion-projects-list"},t.map(function(e,n){return r.a.createElement(L,Object.assign({key:"p_".concat(n)},e))})):r.a.createElement("div",{className:"passion-projects-error"},"Oops...There seems to a problem loading those projects. Sorry about that."))},D=(t(49),function(e){var n=e.name,t=e.source;Object(W.a)(e,["name","source"]);return r.a.createElement("div",{className:"npm-modules-item"},r.a.createElement("span",{className:"npm-modules-item-title"},n),r.a.createElement("div",{className:"npm-modules-item-tags"},r.a.createElement("a",{href:"https://travis-ci.org/WaiChungWong/".concat(n),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.shields.io/travis/WaiChungWong/".concat(n,".svg"),alt:n})),r.a.createElement("a",{href:"https://npmjs.org/package/".concat(n),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.shields.io/npm/dm/".concat(n,".svg"),alt:n}))),r.a.createElement("a",{className:"npm-modules-item-install",href:"https://nodei.co/npm/".concat(n),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://nodei.co/npm/".concat(n,".png"),alt:n})),r.a.createElement("a",{className:"npm-modules-item-source",href:t,target:"_blank",rel:"noopener noreferrer"},"Source"),r.a.createElement("a",{className:"npm-modules-item-demo",href:"https://waichungwong.github.io/".concat(n,"/build"),target:"_blank",rel:"noopener noreferrer"},"Demo"))}),H=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!0),l=Object(s.a)(o,2),i=l[0],m=l[1];return Object(a.useEffect)(function(){(function(){var e=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),r.a.createElement("section",null,r.a.createElement("div",{className:"npm-modules-title"},"NPM Modules"),i?r.a.createElement("div",{className:"npm-modules-loader"}):null!==t?r.a.createElement("div",{className:"npm-modules-list"},t.map(function(e,n){return r.a.createElement(D,Object.assign({key:"p_".concat(n)},e))})):r.a.createElement("div",{className:"npm-modules-error"},"Oops...There seems to a problem loading those modules. Sorry about that."))},A=(t(50),{"Front End":[{name:"HTML5",logo:"html5"},{name:"CSS3",logo:"css3"},{name:"JavaScript",logo:"js"},{name:"PHP",logo:"php"},{name:"React",logo:"react"},{name:"Redux",logo:"redux"},{name:"JQuery",logo:"jquery"},{name:"SASS",logo:"sass"}],"Back End":[{name:"Node",logo:"node"},{name:"Express",logo:"express"},{name:"GraphQL",logo:"graphql"},{name:"MySQL",logo:"mysql"},{name:"PostgreSQL",logo:"postgres"}],Testing:[{name:"Mocha",logo:"mocha"},{name:"Chai",logo:"chai"}]}),J=function(e){var n=e.name,t=e.logoClass;return r.a.createElement("div",{className:"skill-badge",tabIndex:"0"},r.a.createElement("div",{className:"skill-badge-inner"},r.a.createElement("div",{className:"skill-badge-front"},r.a.createElement("div",{className:i()("skills-logo",t)})),r.a.createElement("div",{className:"skill-badge-back"},r.a.createElement("span",null,n))))},T=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"skills-title"},"Skills"),r.a.createElement("div",{className:"skills-list"},Object.keys(A).map(function(e,n){return r.a.createElement("div",{key:"c_".concat(n)},r.a.createElement("div",{className:"skills-list-title"},e),r.a.createElement("div",{className:"skills-list-content"},A[e].map(function(e,t){var a=e.name,c=e.logo;return r.a.createElement(J,{key:"s_".concat(n,"_").concat(t),name:a,logoClass:c})})))})))},q=(t(51),function(e){var n=e.svgPath,t=e.url,a=(e.name,Object(W.a)(e,["svgPath","url","name"]));return r.a.createElement("a",{className:"contact-link",href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",Object.assign({className:"contact-link-icon"},a,{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),r.a.createElement("path",{d:n,strokeWidth:"0"})))}),B=function(){return r.a.createElement("section",{className:"contact"},r.a.createElement("div",{className:"contact-title"},"Get In Touch"),r.a.createElement("div",{className:"contact-comment"},r.a.createElement("p",null,"If you are looking to collaborate on cool projects, you are very welcome to contact me."),r.a.createElement("p",null,"I\u2019m currently based in Hong Kong. I\u2019m available for freelance and part-time work. I\u2019m also open to remote jobs, too.")),r.a.createElement("div",{className:"contact-link-list"},r.a.createElement(q,{svgPath:"\nM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\n",url:"https://www.linkedin.com/in/johnwongwwc",name:"Linkedin"}),r.a.createElement(q,{svgPath:"\nM12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z\n",url:"https://github.com/WaiChungWong",name:"Github"}),r.a.createElement(q,{svgPath:"\nM24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z\n",url:"mailto://johnwongwwc@gmail.com",name:"Gmail"})))},R=(t(52),v("night-mode")||!1),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(function(){var e=Object(a.useState)(R),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),m=l[0],p=l[1];return Object(a.useEffect)(function(){var e=u()(function(){return p(window.scrollY>0)});return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),r.a.createElement("div",{className:i()("app",{"night-mode":t})},r.a.createElement(C,{className:i()({"night-mode":t})}),r.a.createElement(k,{className:i()({"night-mode":t,hide:m})}),r.a.createElement(N,{className:"night-mode-switch",onChange:function(){c(!t),E("night-mode",!t)},checked:t}),r.a.createElement("main",null,r.a.createElement(_,null),r.a.createElement(I,null),r.a.createElement(H,null),r.a.createElement(T,null),r.a.createElement(B,null)))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");U?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):V(n,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.094e84eb.chunk.js.map