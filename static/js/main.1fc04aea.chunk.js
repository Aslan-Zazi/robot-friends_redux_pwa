(this["webpackJsonprobot-friends_redux_pwa"]=this["webpackJsonprobot-friends_redux_pwa"]||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(5),s=n(6),u=n(13),l=(n(25),n(1)),d=n(2),h=n(4),p=n(3),f=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(f,{key:t,id:e.id,name:e.name,email:e.email})})))},g=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.props.setError("text")}},{key:"render",value:function(){return this.props.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(r.Component),v=Object(i.b)((function(e){return{hasError:e.getRobots.error}}),(function(e){return{setError:function(t){return e(function(e){return{type:"ERROR_HAPPEND",payload:e}}(t))}}}))(m),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.updateCount,color:this.props.color},"Count: ",this.state.count)}}]),n}(r.Component),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(O,{color:"red"}))}}]),n}(r.Component),w=(n(26),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequsetRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(y,null),o.a.createElement(g,{searchChange:n}),o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(b,{robots:c}))))}}]),n}(r.Component)),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.getRobots.robots,isPending:e.getRobots.isPending,error:e.getRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequsetRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S={searchField:""},_={isPending:!1,robots:[],error:""},k=(n(27),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"ERROR_HAPPEND":return Object.assign({},e,{error:t.payload});default:return e}}})),N=Object(s.d)(k,Object(s.a)(u.a));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robot-friends_redux_pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robot-friends_redux_pwa","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.1fc04aea.chunk.js.map