(this["webpackJsonpdesign-site"]=this["webpackJsonpdesign-site"]||[]).push([[0],{19:function(e,t,n){e.exports=n(39)},37:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),l=n(3);var i=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"}))};var s=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"bi bi-house",viewBox:"0 0 16 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"}))},u=n(4),d=n.n(u),m=n(8),h=n(18),p=n.n(h),g=n(37),f={HELLO_WORLD:["Hello World!","Hallo Welt!"]};var v="http://localhost:4000/fetch/";var b=function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(l.Page,null,o.a.createElement(l.Header,null,o.a.createElement(l.HeaderTitle,{logo:g,appTitle:"My App Title"},"HomePage")),o.a.createElement(l.Body,{containerClass:"container"},o.a.createElement("h1",{className:"mt-4 mb-3"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t=t||navigator.language.toLowerCase().indexOf("de")>-1?"de-DE":"en-US",(n=n||f)[e]?t.indexOf("de-")>-1?n[e][1]:n[e][0]:e}("HELLO_WORLD")),o.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:e},"Why don't you click this"),o.a.createElement(p.a,{clientId:"d64aa2c0928af6b72a90",redirectUri:"",onSuccess:function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,o,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.code,console.log(n),e.next=4,fetch("".concat(v,"https://github.com/login/oauth/access_token"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({client_id:"d64aa2c0928af6b72a90",client_secret:"adacdf77487f40bafae58263b8e398b39c9480c4",code:n})});case 4:return a=e.sent,console.log(a),e.next=8,a.json();case 8:return o=e.sent,console.log(o),e.next=12,fetch("".concat(v,"https://api.github.com/repos/bruegmann/design/git/trees/master"),{method:"GET",headers:{Authorization:"".concat(o.token_type," ").concat(o.access_token),"Content-Type":"application/json"}});case 12:return r=e.sent,console.log(r),e.next=16,r.text();case 16:c=e.sent,console.log(c);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onFailure:function(e){return console.error(e)},scope:["user","repo"]})))};n(38);var w=function(){return o.a.createElement(l.Grid,{expandSidebar:!0,sidebarToggleIconComponent:o.a.createElement(i,null),pages:[{name:"home",component:o.a.createElement(b,null)}]},o.a.createElement(l.SidebarMenu,null,o.a.createElement(l.MenuItem,{href:"#",icon:o.a.createElement(s,null),label:"Home",isHome:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0288e0fb.chunk.js.map