_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(o.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,o=e.hasQuery,a=void 0!==o&&o;return n||r&&a}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var i,r=n("q1tI");var o=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),a=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){o.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=a},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(i=n("Xuae"))&&i.__esModule?i:{default:i},a=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var u=p[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],h=i[u]||new Set;h.has(l)?o=!1:(h.add(l),i[u]=h)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(a.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},"8oxB":function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"===typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,u=[],l=!1,h=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return i(e)||r(e)||o(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var i=n("MX0m"),r=n.n(i),o=n("8Kt/"),a=n.n(o),s=n("YFqc"),c=n.n(s),u=n("av6O"),l=n("q1tI"),h=n.n(l),p=n("puqk"),d=h.a.createElement,f=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},m=u.albums[0].photos;function v(){var e=Object(l.useState)("home"),t=e[0],n=e[1],i=Object(l.useState)(m),o=i[0],s=i[1],v=Object(l.useState)(!1),y=v[0],g=v[1],w=Object(l.useState)(0),_=w[0],C=w[1];Object(l.useEffect)((function(){var e=u.albums.find((function(e){return e.category===t}));if(e)s(e.photos);else{var n=u.albums.find((function(e){return"travel"===e.category})).subcategory.find((function(e){return e.name===t}));n&&s(n.photos)}}),[t]),Object(p.a)("keydown",(function(e){var t=e.key;console.log("downHandler - imageIndex",_),"ArrowLeft"===t&&j(),"ArrowRight"===t&&k()}));var b=function(e){e?C(e):0===e&&C(0),g(!y)},x=function(e){return d("li",{onClick:function(e){!function(e){C(0),n(e)}(e.target.innerText.toLowerCase())}},d(t===e?"b":"span",null,f(e)))},S=o.map((function(e,t){return d(h.a.Fragment,null,d("img",{onClick:function(){b(t)},key:t,className:"photo-image thumbnails",alt:e.caption?e.caption:"",src:e.src}))})),j=function(){0===_?C(o.length-1):C(_-1)},k=function(){var e=_+1;e<=o.length-1?(C(e),console.log("newIndex",e)):C(0)};return d(h.a.Fragment,null,d(a.a,null,d("title",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])},u.page.title),d("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])})),d(r.a,{id:"2085888330"},[]),d(r.a,{id:"3890027781",dynamic:[y?"white":"#C0C0C0"]},["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}",".title{color:#404040;}",".main-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-height:90vh;}",".footer{position:fixed;left:0;bottom:0;width:100%;text-align:left;padding-left:3em;}",".main-wrapper{padding-top:3em;padding-left:3em;}",".main-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".side-bar{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-right:1em;}",".main-canvas{-webkit-box-flex:8;-webkit-flex-grow:8;-ms-flex-positive:8;flex-grow:8;overflow:scroll;max-height:90vh;}",".list{list-style-type:none;padding-left:0px;cursor:pointer;}",".nested-list{list-style-type:none;cursor:pointer;font-size:small;}","li{padding-bottom:0.1em;}",".cursor-pointer{cursor:pointer;}",".list.contacts{font-size:small;}",".photo-image{max-height:90%;width:auto;min-height:80%;height:auto;display:block;margin-left:auto;margin-right:auto;}",".images-list-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}",".thumbnails{width:30%;padding:1em;}",".image-caption{text-align:center;font-size:small;}",".link{-webkit-text-decoration:none;text-decoration:none;color:black;}"]),d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" main-container"},d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" main-wrapper"},d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" side-bar"},d("h1",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" title"},u.page.author.name,d("br",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}),u.page.author.lastname),d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" menu"},d("br",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}),d("ul",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" list"},u.albums.map((function(e){if(e.subcategory){var t=e.subcategory.map((function(e){return x(e.name)}));return d(h.a.Fragment,null,d("li",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])},f(e.category)),d("ul",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" nested-list"},t))}return x(e.category)}))),d("br",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}),d("ul",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" list contacts"},d(c.a,{href:"https://pietropassarelli.com"},d("a",{target:"_blank",rel:"noopener noreferrer",className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" link"},"About"," "))))),d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" main-canvas"},y?d(h.a.Fragment,null,d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" images-list-container"},S," ")):d(h.a.Fragment,null,d("img",{onClick:b,alt:"Responsive image",src:o[_].src,className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" photo-image"}),d("p",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" image-caption"}," ",o[_].caption?o[_].caption:d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])},"\xa0"))))),d("div",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" footer"},d("p",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" thumnail-toggle"},d("span",{onClick:function(){g(!y)},className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" cursor-pointer"},d("small",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}," ",y?" HIDE THUMBNAILS":" SHOW THUMBNAILS")),y?null:d(h.a.Fragment,null," ",d("span",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}," ","| ".concat(_+1,"/").concat(o.length)),d("span",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])}," | ",d("small",{className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])},d("span",{onClick:j,className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" cursor-pointer"},"\u2190")," ","/"," ",d("span",{onClick:k,className:"jsx-2085888330 "+r.a.dynamic([["3890027781",[y?"white":"#C0C0C0"]]])+" cursor-pointer"}," \u2192"))))))))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=o(n("9kyW")),r=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,o=t.optimizeForSpeed,a=void 0!==o&&o,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),i&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var o=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=o,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),o=t+r;return e[o]||(e[o]="jsx-"+(0,i.default)(t+"-"+r)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var o=this.computeId(r,i);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),h=function(e){a(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(i(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=h},YFqc:function(e,t,n){e.exports=n("cTJO")},av6O:function(e){e.exports=JSON.parse('{"page":{"title":"Pietro Passarelli - Photography","author":{"name":"Pietro","lastname":"Passarelli"}},"albums":[{"category":"home","photos":[{"src":"images/home/2448658951_43882eae21_o.jpg","caption":"March 21, 2008. Brighton - UK. Olympus E-330. \u01923.5, 1/40, ISO 100, 14 mm 4/3 (28mm on 35mm equivalent)"},{"src":"images/home/144476123_b5f6c6c6f0_o.jpg","caption":"April 10, 2006. Warsaw - Poland. Olympus E-300. \u01925.6 1/80 ISO 200, 14 mm 4/3 (28mm on 35mm equivalent)"},{"src":"images/home/161707169_8d921fc42a_o.jpg","caption":"April 14, 2006. Paris - France. \u01927.1 1/125 ISO 100, 34 mm 4/3"},{"src":"images/home/84451503_10eb10ee2a_o.jpg","caption":"December 28, 2005 Germany. Olympus E-300. \u01927.1 1/125 ISO 100, 32 mm 4/3"},{"src":"images/home/144476121_ad5160a7ec_o.jpg","caption":"April 7, 2006. Warsaw - Poland. Olympus E-300. \u01929 1/250 ISO 100  45 mm  4/3"},{"src":"images/home/246934381_2752e1b141_o.jpg","caption":"July 15, 2006. Plock - Poland. Olympus E-300. \u01925.6 1/80 ISO 100, 25 mm 4/3"}]},{"category":"travel","subcategory":[{"name":"auschwitz","photos":[{"src":"/images/travel/auschwitz/aus1.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX. \u01928.1 1/1230 ISO 125 5.8 mm"},{"src":"/images/travel/auschwitz/aus2.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus3.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX.  \u01924.3 1/310 ISO 125 17.4 mm"},{"src":"/images/travel/auschwitz/aus4.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus5.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus6.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX. \u01925.2 1/1000 ISO 125  7.9 mm"},{"src":"/images/travel/auschwitz/aus7.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus8.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus9.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus10.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus11.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus12.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus13.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus14.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."},{"src":"/images/travel/auschwitz/aus15.jpeg","caption":"March 16, 2005. Auschwitz - Poland. Ricoh Caplio GX."}]}]}]}')},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?i:s,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;a(r(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];a(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&a(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(i,n):o.appendChild(i),i},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var i=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,a=r(n("q1tI")),s=n("elyg"),c=n("nOHt"),u=new Map,l=window.IntersectionObserver,h={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,i){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,i).catch((function(e){0})),h[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,n=a.default.useState(),r=i(n,2),o=r[0],u=r[1],f=(0,c.useRouter)(),m=f&&f.pathname||"/",v=a.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href);return{href:t,as:e.as?(0,s.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),y=v.href,g=v.as;a.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,s.isLocalURL)(y)&&!h[y+"%"+g])return p(o,(function(){d(f,y,g)}))}),[t,o,y,g,f]);var w=e.children,_=e.replace,C=e.shallow,b=e.scroll;"string"===typeof w&&(w=a.default.createElement("a",null,w));var x=a.Children.only(w),S={ref:function(e){e&&u(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,y,g,_,C,b)}};return t&&(S.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(f,y,g,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(S.href=(0,s.addBasePath)(g)),a.default.cloneElement(x,S)};t.default=f},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},puqk:function(e,t,n){"use strict";(function(e){var i=n("q1tI");t.a=function(t,n,r,o){void 0===r&&(r=e),void 0===o&&(o={});var a=Object(i.useRef)(),s=o.capture,c=o.passive,u=o.once;Object(i.useEffect)((function(){a.current=n}),[n]),Object(i.useEffect)((function(){if(r&&r.addEventListener){var e=function(e){return a.current(e)},n={capture:s,passive:c,once:u};return r.addEventListener(t,e,n),function(){r.removeEventListener(t,e,n)}}}),[t,r,s,c,u])}}).call(this,n("yLpj"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n}},[["vlRD",0,2,1]]]);