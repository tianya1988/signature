(function(e){function t(t){for(var r,a,u=t[0],i=t[1],o=t[2],l=0,f=[];l<u.length;l++)a=u[l],s[a]&&f.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5f035e46":"ab0d8fc7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5f035e46":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5f035e46":"954d0a8a"}[e]+".css",s=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var o=c[u],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===r||l===s))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){o=f[u],l=o.getAttribute("data-href");if(l===r||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=c);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),o=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}s[e]=void 0}};var f=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("f5df"),n("5c96")),s=n.n(a),c=(n("0fae"),n("b20f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],i={name:"App"},o=i,l=n("2877"),f=Object(l["a"])(o,c,u,!1,null,null,null),d=f.exports,p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},h=[],v={},b=Object(l["a"])(v,m,h,!1,null,null,null),g=b.exports,T={path:"/",redirect:"/dashboard",component:g,children:[{path:"dashboard",name:"MainDashboard",meta:{title:"态势感知大屏"},component:function(){return n.e("chunk-5f035e46").then(n.bind(null,"9406"))}}]};r["default"].use(p["a"]);var j=new p["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/dashboard"},T]}),y=n("cebc"),A=n("2f62"),k=(n("96cf"),n("3b8d")),D=n("d225"),_=n("b0b4"),w=n("bc3a"),R=n.n(w),x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(D["a"])(this,e);var n=t.timeout,r=void 0===n?3e4:n,a=t.baseUrl,s=void 0===a?"":a,c=t.contentType,u=void 0===c?"application/json":c,i=t.withCredentials,o=void 0===i||i;this.timeout=r,this.baseUrl=s,this.contentType=u,this.withCredentials=o}return Object(_["a"])(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.ajax("get",e,{params:t},n)}},{key:"del",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.ajax("delete",e,{params:t},n)}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.ajax("put",e,{data:t},n)}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.ajax("post",e,{data:t},n)}},{key:"ajax",value:function(t,n,r,a){var s=R()(Object(y["a"])({method:t,url:a.baseUrl?a.baseUrl+n:this.baseUrl+n,headers:Object(y["a"])({"Content-Type":this.contentType},a.headers),timeout:a.timeout?a.timeout:this.timeout,onUploadProgress:a.uploading,onDownloadProgress:a.download,withCredentials:void 0!==a.withCredentials?a.withCredentials:this.withCredentials},r));return s.then(function(t){var n=t||{},r=n.data,s=void 0===r?null:r,c=n.status,u=void 0===c?200:c,i=n.statusText,o=void 0===i?"":i,l=null;return 200===u?(a.success&&a.success(s.data),l=s.data):l=e.errorHandler(Object(y["a"])({},s,{statusCode:u,statusText:o}),a),l}).catch(function(t){var n=t.response||{},r=n.data,s=void 0===r?{statusCode:10500,statusText:"服务器链接错误，请稍后再试！",data:null}:r;return e.errorHandler(s,a)})}}],[{key:"errorHandler",value:function(e,t){switch(t.failed&&"function"===typeof t.failed&&t.failed(e),t.tips){case 1:Object(a["Message"])({message:e.statusText,center:!0,type:"error"});break;case 2:a["MessageBox"].alert(e.statusText,"提示",{type:"error",confirmButtonText:"确定"});break;case 3:Object(a["Notification"])({type:"error",title:"出错啦",message:e.statusText});break;default:break}return e.data}}]),e}(),E=new x,L=E,S=function(){return L.get("/app-alert/getAlertType")},O=function(){return L.get("/app-alert/getAlertRank")},P=function(){return L.get("/app-alert/getLast24hAlertRankCount")},C=function(){return L.get("/app-alert/getLast24hAlertTypeCount")},I=function(){return L.get("/app-alert/getLast7DayAlertRankCount")},N={namespaced:!0,state:{alertTypes:[],alertLevels:[],last24hAlertRankCounts:{},last24hAlertTypeCounts:[],last7DayAlertRankCounts:{}},getters:{alertLevels:function(e){return e.alertLevels},alertTypes:function(e){return e.alertTypes}},mutations:{UPDATE_ALERT_TYPE:function(e,t){e.alertTypes=t},UPDATE_ALERT_LEVEL:function(e,t){e.alertLevels=t},UPDATE_LAST_24H_AlERT_TYPE_COUNT:function(e,t){e.last24hAlertTypeCounts=t},UPDATE_LAST_24H_AlERT_RANK_COUNT:function(e,t){e.last24hAlertRankCounts=t},UPDATE_LAST_7DAY_AlERT_RANK_COUNT:function(e,t){e.last7DayAlertRankCounts=t}},actions:{fetchAlertTypes:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,e.prev=1,!(r.alertTypes.length<=0)){e.next=9;break}return e.next=5,S();case 5:for(c in a=e.sent,s=[],a.data)s.push({key:c,value:a.data[c]});n("UPDATE_ALERT_TYPE",s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchAlertLevels:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,e.prev=1,!(r.alertLevels.length<=0)){e.next=9;break}return e.next=5,O();case 5:for(c in a=e.sent,s=[],a.data)s.push({key:c,value:a.data[c]});n("UPDATE_ALERT_LEVEL",s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchLast24hAlertTypeCounts:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,e.prev=1,!(r.last24hAlertTypeCounts.length<=0)){e.next=9;break}return e.next=5,C();case 5:for(c in a=e.sent,s=[],a.data)s.push({key:c,value:a.data[c]});n("UPDATE_LAST_24H_AlERT_TYPE_COUNT",s);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchLast24hAlertRankCounts:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,P();case 4:r=e.sent,n("UPDATE_LAST_24H_AlERT_RANK_COUNT",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchLast7DayAlertRankCounts:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,I();case 4:r=e.sent,n("UPDATE_LAST_7DAY_AlERT_RANK_COUNT",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}()}},U={enumCom:N},M=function(e){return L.post("/app-alert/search",Object(y["a"])({},e))},Y=function(){return L.get("/app-alert/searchRecord")},z=n("c1df"),H=n("ed08"),V={namespaced:!0,state:{alerts:[],alertList:[],pageInfo:null,recent:[],commonUse:[]},getters:{alertList:function(e){return e.alertList},pageInfo:function(e){return e.pageInfo},recent:function(e){var t=Object(H["c"])(e.recent);return t.map(function(e){var t="",n=Object(y["a"])({},e._source),r=n.alarmRank,a=n.alarmType,s=n.beginTime,c=n.endTime,u=n.ip,i=n.port,o=n.alarmDetail;for(var l in e.tagList=[],e.params={alarmRank:r,alarmType:a,beginTime:s,endTime:c,ip:u,port:i,alarmDetail:o},e.params)void 0===e.params[l]?delete e.params[l]:"beginTime"!==l&&"endTime"!==l&&e.tagList.push({key:l,value:e.params[l]});s&&c&&(t=z(s).format("YYYY-MM-DD HH:mm:ss")+"~"+z(c).format("YYYY-MM-DD HH:mm:ss"),e.tagList.push({key:"iTimes",value:t})),e.show='"'+Object(H["a"])([r,a,t,u,i,o]).join('" "')+'"'}),t},commonUse:function(e){var t=Object(H["c"])(e.commonUse);return t.map(function(e){var t="",n=Object(y["a"])({},e._source),r=n.alarmRank,a=n.alarmType,s=n.beginTime,c=n.endTime,u=n.ip,i=n.port,o=n.alarmDetail;for(var l in e.tagList=[],e.params={alarmRank:r,alarmType:a,beginTime:s,endTime:c,ip:u,port:i,alarmDetail:o},e.params)void 0===e.params[l]?delete e.params[l]:"beginTime"!==l&&"endTime"!==l&&e.tagList.push({key:l,value:e.params[l]});s&&c&&(t=z(s).format("YYYY-MM-DD HH:mm:ss")+"~"+z(c).format("YYYY-MM-DD HH:mm:ss"),e.tagList.push({key:"iTimes",value:t})),e.show='"'+Object(H["a"])([r,a,t,u,i,o]).join('" "')+'"'}),t}},mutations:{UPDATE_ALERT:function(e,t){e.alerts=t},UPDATE_ALERT_LIST:function(e,t){e.alertList=t},UPDATE_ALERT_PAGE:function(e,t){e.pageInfo=t},UPDATE_ALERT_COMMON_RECENT:function(e,t){e.recent=t},UPDATE_ALERT_COMMON_RECORD:function(e,t){e.commonUse=t}},actions:{fetchAlerts:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,M(n);case 4:for(u in a=e.sent,s=[],c={},a.data)"list"===u?s=a.data[u]:c[u]=a.data[u];r("UPDATE_ALERT_LIST",s),r("UPDATE_ALERT_PAGE",c),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t,n){return e.apply(this,arguments)}return t}(),searchRecordAlarm:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,Y();case 4:r=e.sent,n("UPDATE_ALERT_COMMON_RECORD",r.data.commonUse),n("UPDATE_ALERT_COMMON_RECENT",r.data.recent),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}()}},q=(n("28a5"),n("a4bb")),B=n.n(q),G=(n("ac6a"),function(e){return L.get("/app-alert/getAlarmDetail",Object(y["a"])({},e))}),K=function(e){return L.get("/app-alert/getLast7DayAlertTypeCount",Object(y["a"])({},e))},F=function(e){return L.post("/app-alert/search",Object(y["a"])({},e))},J=function(e){return L.get("/app-dns/getDnsAlarmDetail",Object(y["a"])({},e))},W=function(e){return L.get("/app-dns/getDnsAlarms",Object(y["a"])({},e))},$=function(e){return L.get("/app-dns/get24hDnsResponseCount",Object(y["a"])({},e))},X=function(e){return L.get("/app-dns/getIntraDayDnsAlarmDetailCount",Object(y["a"])({},e))},Q=function(e){return L.get("/app-dns/getIntraDayDnsAlarmDetail",Object(y["a"])({},e))},Z=n("c1df");function ee(e){var t=new Date,n=[],r={},a=[],s=0;while(s<7){var c=Z(t).subtract(s,"days").format("YYYY-MM-DD");s++,n.push(c)}return n.reverse(),B()(e).forEach(function(t){var s=[];a.push(t),n.forEach(function(n){var r="";B()(e[t]).forEach(function(a){n===Z(a).format("YYYY-MM-DD")&&(r=e[t][a])}),s.push(r||0)}),r[t]=s}),r.keys=a,n.map(function(e,t){n[t]=e.split("-")[2]+"日"}),r.charsX=n,r}var te={namespaced:!0,state:{alerts:[],detail:{},chartsSrcData:{},chartsDstData:{},searchMoreData:{},intraDayDnsAlarmDetail:[],dnsAlarmDetail:{},dnsAlarmsReqList:{},dnsAnswerList:[],dnsAlarmCount:{},DNSTitle:""},mutations:{UPDATE_ALERT:function(e,t){e.alerts=t},UPDATE_ALERT_Detail:function(e,t){e.detail=t},UPDATE_CHARTS_SRC_DATA:function(e,t){e.chartsSrcData=t},UPDATE_CHARTS_DST_DATA:function(e,t){e.chartsDstData=t},UPDATE_SEARCH_MORE_DATA:function(e,t){e.searchMoreData=t},UPDATE_DAY_DNS_ALERT_DETAIL_DATA:function(e,t){e.intraDayDnsAlarmDetail=t},UPDATE_DNS_ALERT_DETAIL_DATA:function(e,t){e.dnsAlarmDetail=t},UPDATE_DNS_ALERT_LIST_DATA:function(e,t){e.dnsAlarmsReqList=t},UPDATE_DNS_ALERT_LIST_PAGE_DATA:function(e,t){e.dnsAlarmsReqList.list=e.dnsAlarmsReqList.list.concat(t.list),e.dnsAlarmsReqList.pageNow=t.pageNow,e.dnsAlarmsReqList.pageSize=t.pageSize,e.dnsAlarmsReqList.totalCount=t.totalCount,e.dnsAlarmsReqList.totalPageCount=t.totalPageCount},UPDATE_DNS_ANSWER_LIST_DATA:function(e,t){e.dnsAnswerList=t},UPDATE_DNS_ALERT_COUNT_DATA:function(e,t){e.dnsAlarmCount=t},UPDATE_DNS_TITLE_DATA:function(e,t){e.DNSTitle=t}},actions:{fetchAlerts:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit;try{n("UPDATE_ALERT",[])}catch(r){}case 2:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchAlarmDetail:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,G(n);case 4:return a=e.sent,e.next=7,K({ip:a.data._source.alarm_src_ip});case 7:return s=e.sent,e.next=10,K({ip:a.data._source.alarm_dst_ip});case 10:c=e.sent,a.success&&(r("UPDATE_ALERT_Detail",a.data),r("UPDATE_CHARTS_SRC_DATA",ee(s.data)),r("UPDATE_CHARTS_DST_DATA",ee(c.data))),e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](1);case 16:case"end":return e.stop()}},e,null,[[1,14]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchSearch:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,F(n);case 4:a=e.sent,a.success&&r("UPDATE_SEARCH_MORE_DATA",a.data),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchIntraDayDnsAlarmDetail:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Q(n);case 4:a=e.sent,a.success&&a.data&&(s=Z(a.data[0]._source.alarm_find_time).toArray(),c=a.data[0]._source.dns_questionname_domain,u="".concat(s[1],"/").concat(s[2]," 请求 ").concat(c," DNS告警信息"),r("UPDATE_DAY_DNS_ALERT_DETAIL_DATA",a.data),r("UPDATE_DNS_TITLE_DATA",u)),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDnsAlarmDetail:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,J(n);case 4:return a=e.sent,e.next=7,$(n);case 7:return s=e.sent,e.next=10,X(n);case 10:c=e.sent,a.success&&(r("UPDATE_DNS_ALERT_DETAIL_DATA",a.data),r("UPDATE_DNS_ANSWER_LIST_DATA",s.data),r("UPDATE_DNS_ALERT_COUNT_DATA",c.data)),e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](1);case 16:case"end":return e.stop()}},e,null,[[1,14]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDnsAlarmsPageIndex:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,W(n);case 4:a=e.sent,a.success&&(0!==n.pageNum?r("UPDATE_DNS_ALERT_LIST_PAGE_DATA",a.data):r("UPDATE_DNS_ALERT_LIST_DATA",a.data)),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}()}},ne={alertDashboard:V,alertDetail:te},re=function(){return L.get("/static/configs")},ae=function(){return L.get("/attacked/system/statistic/info")},se=function(){return L.get("/buneisijuriskscores")},ce=function(e){return L.get("foreign/threats/topn",Object(y["a"])({},e))},ue=function(e){return L.get("/attack/trendency",Object(y["a"])({},e))},ie=function(){return L.get("/industrythreatranking")},oe=function(){return L.get("/industrysituationstatistics")},le=function(){return L.get("/motindustrysystemvulnerabilities")},fe=function(e){return L.get("/industrysecurityincidents",Object(y["a"])({},e))},de=function(e){return L.get("/wangzhanyunxingstatus",Object(y["a"])({},e))},pe=function(e){return L.get("/zhibanbiao",Object(y["a"])({},e))},me=function(){return L.get("/second/line/defence/info")},he=function(e){return L.get("/attack/info/today/page",Object(y["a"])({},e))},ve=function(e){return L.get("/motindustrysystemvulnerabilities/page",Object(y["a"])({},e))},be=function(e){return L.get("/industrysecurityincidents/page",Object(y["a"])({},e))},ge=function(e){return L.get("/wangzhanyunxingstatus/page",Object(y["a"])({},e))},Te=function(e){return L.get("/zhibanbiao/page",Object(y["a"])({},e))},je=function(e){return L.get("/buneisijuriskscores/page",Object(y["a"])({},e))},ye={namespaced:!0,state:{dashboardConfigs:{networkDevice:{},securityDevice:{},domain:{},website:{},virtualDevice:{},port:{},host:{},database:{},operatingSystem:{},middleware:{},service:{},application:{},attackNetworkDeviceBase:{},attackNetworkDevice:{},terminalBase:{},firstLineDiscovery:{},riskIndex:{},monitorSystemCount:{},eventCount:{},securityHole:{},websiteTotal:{},websiteNormal:{},websiteAbnormal:{}},attackList:{},bunScores:[],threatRanking:[],situationStatistics:[],vulnerabilitiesController:[],securityIncidents:[],interStatus:[],attendanceList:[],attackTrendency:[],foreignThreats:[],defenceInfo:{},attackInfoPage:[],industryVulnerability:[],industrySecurityIncidents:[],interStatusPage:[],attendanceListPage:[],scoresPage:[]},getters:{getDashboardConfigs:function(e){return e.dashboardConfigs},getDashboardConfigsLevel:function(e){var t=e.dashboardConfigs,n=[];for(var r in t)/securityHoleLevel/.test(r)&&n.push(t[r]);return n},getDashboardConfigsTypes:function(e){var t=e.dashboardConfigs,n=[];for(var r in t)/threatType/.test(r)&&n.push(t[r]);return n},getNetworkDevice:function(e){var t=e.dashboardConfigs;if(t.hasOwnProperty("attackNetworkDevice")&&t.hasOwnProperty("attackNetworkDeviceBase"))return[{value:t.attackNetworkDevice.itemValue,name:"攻击状态"},{value:t.attackNetworkDeviceBase.itemValue-t.attackNetworkDevice.itemValue,name:"正常状态"}]},getAttackColumn:function(e){var t=e.attackList,n={};return n["terminal"]=[{value:t.attackedTerminalNumToday,name:"攻击状态"},{value:t.terminalTotalNum-t.attackedTerminalNumToday,name:"正常状态"}],n["system"]=[{value:t.attackedSystemNumToday,name:"攻击状态"},{value:t.systemTotalNum-t.attackedSystemNumToday,name:"正常状态"}],n["host"]=[{value:t.attackedHostNumToday,name:"攻击状态"},{value:t.hostTotalNum-t.attackedHostNumToday,name:"正常状态"}],n},getBunScores:function(e){return e.bunScores},getSituationStatistics:function(e){return e.situationStatistics},getThreatRanking:function(e){var t={name:[],value:[]},n=e.threatRanking;return n.forEach(function(e){t.name.push(e.provinceName),t.value.push(e.threatCount)}),t},getSecurityIncidents:function(e){return e.securityIncidents},getVulnerabilitiesController:function(e){return e.vulnerabilitiesController},getInterStatus:function(e){return e.interStatus},getAttendanceList:function(e){return e.attendanceList},getAttackTrendency:function(e){return e.attackTrendency},getForeignThreats:function(e){return e.foreignThreats},getDefenceInfo:function(e){return e.defenceInfo},getAttackInfoPage:function(e){return e.attackInfoPage},getIndustryVulnerability:function(e){return e.industryVulnerability},getIndustrySecurityIncidents:function(e){return e.industrySecurityIncidents},getInterStatusPage:function(e){return e.interStatusPage},getAttendanceListPage:function(e){return e.attendanceListPage},getScoresPage:function(e){return e.scoresPage}},mutations:{update_dashboard_configs:function(e,t){e.dashboardConfigs=t},update_attack_list:function(e,t){e.attackList=t},update_bun_scores:function(e,t){e.bunScores=t},update_ThreatRanking:function(e,t){e.threatRanking=t},updateSituationStatistics:function(e,t){e.situationStatistics=t},updateVulnerabilitiesController:function(e,t){e.vulnerabilitiesController=t},update_security_incidents:function(e,t){e.securityIncidents=t},updateInterStatus:function(e,t){e.interStatus=t},updateAttendanceList:function(e,t){e.attendanceList=t},updateAttackTrendency:function(e,t){e.attackTrendency=t},updateForeignThreats:function(e,t){e.foreignThreats=t},updateDefenceInfo:function(e,t){e.defenceInfo=t},updateAttackInfoPage:function(e,t){e.attackInfoPage=t},updateIndustryVulnerabilityPage:function(e,t){e.industryVulnerability=t},updateIndustrySecurityIncidents:function(e,t){e.industrySecurityIncidents=t},updateInterStatusPage:function(e,t){e.interStatusPage=t},updateAttendanceListPage:function(e,t){e.attendanceListPage=t},updateScoresPage:function(e,t){e.scoresPage=t}},actions:{fetchDashboardConfigs:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,re();case 4:r=e.sent,a={},r.forEach(function(e){a.hasOwnProperty(e.itemKey)||(a[e.itemKey]=e)}),n("update_dashboard_configs",a),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardStatisticInfo:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,ae();case 4:r=e.sent,n("update_attack_list",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchBunScores:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,se();case 4:r=e.sent,n("update_bun_scores",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardForeignThreats:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,ce(n);case 4:a=e.sent,r("updateForeignThreats",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDashboardIndustryThreatRanking:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,ie();case 4:r=e.sent,n("update_ThreatRanking",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardIndustrySituationStatistics:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,oe();case 4:r=e.sent,n("updateSituationStatistics",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardMotindustrysystemvulnerabilities:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,le();case 4:r=e.sent,n("updateVulnerabilitiesController",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardIndustrySecurityIncidents:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fe();case 4:r=e.sent,n("update_security_incidents",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardInterStatus:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,de();case 4:r=e.sent,n("updateInterStatus",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDashboardAttendanceList:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,pe();case 4:r=e.sent,n("updateAttendanceList",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchAttackTrendency:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,ue(n);case 4:a=e.sent,r("updateAttackTrendency",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDefenceInfo:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,me();case 4:r=e.sent,n("updateDefenceInfo",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchAttackInfoPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,he(n);case 4:a=e.sent,r("updateAttackInfoPage",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchIndustryVulnerabilityPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,ve(n);case 4:a=e.sent,r("updateIndustryVulnerabilityPage",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchIndustrySecurityIncidentsPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,be(n);case 4:a=e.sent,r("updateIndustrySecurityIncidents",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchInterStatusPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,ge(n);case 4:a=e.sent,r("updateInterStatusPage",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchAttendanceListPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Te(n);case 4:a=e.sent,r("updateAttendanceListPage",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchBunScoresPage:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,je(n);case 4:a=e.sent,r("updateScoresPage",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}()}},Ae=ye;r["default"].use(A["a"]);var ke=new A["a"].Store({modules:Object(y["a"])({},U,ne,{dashboard:Ae})}),De=ke;r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({el:"#app",router:j,store:De,render:function(e){return e(d)}})},b20f:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i});n("b6d0"),n("774e"),n("ac6a"),n("a745"),n("28a5");var r=n("a4bb"),a=n.n(r),s=(n("4917"),n("0a0d"),n("a481"),n("e814"),n("7618"));function c(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function u(e,t,n){var r,a,s,c,u,i=function i(){var o=+new Date-c;o<t&&o>0?r=setTimeout(i,t-o):(r=null,n||(u=e.apply(s,a),r||(s=a=null)))};return function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];s=this,c=+new Date;var f=n&&!r;return r||(r=setTimeout(i,t)),f&&(u=e.apply(s,o),s=o=null),u}}function i(e){if(!e&&"object"!==Object(s["a"])(e))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return a()(e).forEach(function(n){e[n]&&"object"===Object(s["a"])(e[n])?t[n]=i(e[n]):t[n]=e[n]}),t}}});
//# sourceMappingURL=app.e0130bdb.js.map