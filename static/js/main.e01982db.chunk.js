(this["webpackJsonpdesign-site"]=this["webpackJsonpdesign-site"]||[]).push([[0],{51:function(e,t,n){e.exports=n(88)},69:function(e,t,n){e.exports=n.p+"static/media/logo.7414e0dd.svg"},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),s=n.n(c),o=n(12),l=n(7),i=n(91),u=n(92),m=n(93),p=n(5),f=n.n(p),b=n(9),d=n(69),g={"bsw-cti":["BSWCti","BSWCti"],"All assets on GitHub":["All assets on GitHub","Alle Assets auf GitHub"],"Please sign in to see the content":["Please sign in to see the content","Bitte anmelden, um die Inhalte sehen zu k\xf6nnen"]};function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t=t||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",(n=n||g)[e]?t.indexOf("de-")>-1?n[e][1]:n[e][0]:e}var v="http://43k.patorg.org:4000/fetch/";function E(e,t){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(f.a.mark((function e(t,n){var a,r,c,s,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(o.length>2&&void 0!==o[2])||o[2],r={Authorization:"".concat(t.token_type," ").concat(t.access_token),"Content-Type":"application/json","cache-control":"no-cache"},!1===a&&(r["cache-control"]="no-cache"),e.next=5,l.Utilities.fetchData("".concat(v).concat(n),{method:"GET",headers:r});case 5:return c=e.sent,e.next=8,c.json();case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(89),j=n(96),x=n(94),H=n(95);function k(e){var t=e.gitHubAccess,n=e.item,c=Object(a.useState)(null),s=Object(o.a)(c,2),l=s[0],i=s[1],u=Object(a.useState)(!1),m=Object(o.a)(u,2),p=m[0],d=m[1];Object(a.useEffect)((function(){!0===p&&null===l&&g()}),[p]);var g=function(){var e=Object(b.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n.url,!1);case 2:a=e.sent,i(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{isOpen:p,toggle:function(){return d(!p)}},r.a.createElement(x.a,{caret:!0},n.name),r.a.createElement(H.a,null,null!==l&&l.map((function(e){return r.a.createElement("a",{key:e.sha,className:"dropdown-item",href:e.download_url,target:"_blank",rel:"noopener noreferrer"},e.name)}))))}function A(e){var t=e.gitHubAccess,n=e.item,c=Object(a.useState)(null),s=Object(o.a)(c,2),l=s[0],i=s[1],u=Object(a.useState)(null),m=Object(o.a)(u,2),p=m[0],d=m[1];Object(a.useEffect)((function(){null===l&&g()}),[l]);var g=function(){var e=Object(b.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n.url);case 2:a=e.sent,i(a),a.forEach(function(){var e=Object(b.a)(f.a.mark((function e(n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("svg"!==n.name){e.next=5;break}return e.next=3,E(t,n.url,!1);case 3:(a=e.sent)[0]&&(r=a[0],d(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:null===p||void 0===p?void 0:p.download_url,className:"mb-4",alt:n.name}),r.a.createElement("h5",null,h(n.name)),null!==l&&r.a.createElement(O.a,null,l.map((function(e){return r.a.createElement(k,{key:e.sha,gitHubAccess:t,item:e})}))))))}var S=function(e){var t=e.gitHubAccess,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],i=c[1];Object(a.useEffect)((function(){null!==t&&null===s&&u()}),[t,s]);var u=function(){var e=Object(b.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,"https://api.github.com/repos/bruegmann/design/contents/suite-logos/icons");case 2:a=e.sent,i(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(l.Page,null,r.a.createElement(l.Header,null,r.a.createElement(l.HeaderTitle,{logo:d,appTitle:"Corporate Design"})),r.a.createElement(l.Body,{containerClass:"container pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h1",{className:"page-header"},"Suite Logos"),r.a.createElement("div",{className:"row"},null!==s&&s.map((function(e){return r.a.createElement(A,{gitHubAccess:t,key:e.sha,item:e})})))))))},N=(n(87),n(90)),y=n(48),C=n.n(y);function G(e){var t=e.setGitHubAccess;return r.a.createElement(l.Intro,{logo:d,title:"Corporate Design"},r.a.createElement("div",{className:"text-center"},r.a.createElement("p",{className:"lead"},h("Please sign in to see the content")),r.a.createElement(C.a,{clientId:"0e88710af11826fb210a",redirectUri:"",onSuccess:function(){var e=Object(b.a)(f.a.mark((function e(n){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.code,e.next=3,fetch("".concat("http://43k.patorg.org:4000/login/oauth/access_token","?code=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,t(c),localStorage.setItem("gitHubAccess",JSON.stringify(c));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onFailure:function(e){return console.error(e)},scope:["user","repo"],className:"btn btn-primary btn-lg d-inline-flex align-items-center"},r.a.createElement(N.a,{className:"mr-1"})," Sign in with GitHub")))}var I=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},r.a.createElement("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"}))};function B(e){var t=e.gitHubAccess,n=e.setGitHubAccess;return null===t?r.a.createElement(G,{setGitHubAccess:n}):r.a.createElement(S,{gitHubAccess:t})}var _=function(){var e=null,t=localStorage.getItem("gitHubAccess");t&&(e=JSON.parse(t));var n=Object(a.useState)(e),c=Object(o.a)(n,2),s=c[0],p=c[1];return r.a.createElement(l.Grid,{expandSidebar:!0,sidebarToggleIconComponent:r.a.createElement(i.a,null),pages:[{name:"home",component:r.a.createElement(B,{gitHubAccess:s,setGitHubAccess:p})}]},r.a.createElement(l.SidebarMenu,{bottomContent:r.a.createElement("div",{className:"fluent-btn"},r.a.createElement("div",{className:"fluent-btn-ball"}),r.a.createElement("a",{href:"https://github.com/bruegmann/design",target:"_blank",rel:"noopener noreferrer",className:"blue-app-sidebar-btn btn has-label"},r.a.createElement(I,null)," ",r.a.createElement("span",{className:"blue-app-sidebar-label"},h("All assets on GitHub"))),null!==s&&r.a.createElement(l.MenuItem,{onClick:function(){localStorage.removeItem("gitHubAccess"),p(null)},icon:r.a.createElement(u.a,null),label:"Sign out"}))},r.a.createElement(l.MenuItem,{href:"#",icon:r.a.createElement(m.a,null),label:"Home",isHome:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.e01982db.chunk.js.map