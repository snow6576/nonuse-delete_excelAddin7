/*! For license information please see taskpane.js.LICENSE.txt */
!function(){var t={27091:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},60806:function(t,e,r){"use strict";t.exports=r.p+"3f7b0704ae3483db3e73.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",g="suspendedYield",d="executing",m="completed",v={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var k=Object.getPrototypeOf,R=k&&k(k(C([])));R&&R!==o&&a.call(R,u)&&(E=R);var L=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function A(e,r){function n(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=y;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?m:g,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(L,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},O(A.prototype),f(A.prototype,s,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new A(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(L),f(L,l,"Generator"),f(L,u,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}function o(){return a.apply(this,arguments)}function a(){return a=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o,a,i,c,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),(o=n.tables.getItem("ExpensesTable")).columns.load("Items"),o.rows.load("Items"),t.next=6,r.sync();case 6:return n.getRange("A:A").getResizedRange(0,o.columns.items.length).insert(Excel.InsertShiftDirection.right),(a=r.workbook.slicers.getItem("SlicerA")).load("caption"),t.next=12,r.sync();case 12:return a.caption,n.getRange("A1").formulas=[["=ExpensesTable[#Headers]"]],i=o.getHeaderRowRange(),c=o.getDataBodyRange().getVisibleView(),i.load("values"),c.load("values"),c.load("format"),c.load("rowCount"),t.next=23,r.sync();case 23:return console.log(c.values),console.log(c.rowCount),n.getRange("A1").getResizedRange(0,o.columns.items.length-1).values=i.values,n.getRange("A2").getResizedRange(c.rowCount-1,o.columns.items.length-1).values=c.values,n.getRange("A1").copyFrom(o.getHeaderRowRange(),Excel.RangeCopyType.formats),n.getUsedRange().format.autofitColumns(),console.log(51),a.clearFilters(),(u=n.getRange("A:A").getResizedRange(0,o.columns.items.length)).copyFrom(u,Excel.RangeCopyType.values),o.delete(),t.next=38,r.sync();case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function i(){return c.apply(this,arguments)}function c(){return(c=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.getElementById("file"),(n=new FileReader).onload=function(t){Excel.run((function(t){var e=n.result.toString().indexOf("base64,"),r=n.result.toString().substr(e+7);return Excel.createWorkbook(r),t.sync()}))},n.readAsDataURL(r.files[0]),console.log("ファイル作成");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return s=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o,a,i,c,u,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),(o=n.tables).load("name"),t.next=5,r.sync();case 5:if(0!=o.items.length){t.next=11;break}a=n.getUsedRange(),n.tables.add(a,!0).name="ExpensesTable",t.next=16;break;case 11:return(i=o.getItemAt(0)).load("name"),t.next=15,r.sync();case 15:i.name="ExpensesTable";case 16:return c=r.workbook.getActiveCell().load("values"),t.next=19,r.sync();case 19:return u=c.values[0][0],(s=n.slicers.add("ExpensesTable",u)).name="SlicerA",s.left=395,s.top=15,t.next=26,r.sync();case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),(o=n.tables.add("A1:D1",!0)).name="ExpensesTable",o.getHeaderRowRange().values=[["Date","Merchant","Category","Amount"]],o.rows.add(null,[["1/1/2017","The Phone Company","Communications","120"],["1/2/2017","Northwind Electric Cars","Transportation","142.33"],["1/5/2017","Best For You Organics Company","Groceries","27.9"],["1/10/2017","Coho Vineyard","Restaurant","33"],["1/11/2017","Bellows College","Education","350.1"],["1/15/2017","Trey Research","Other","135"],["1/15/2017","Best For You Organics Company","Groceries","97.88"]]),o.columns.getItemAt(3).getRange().numberFormat=[["€#,##0.00"]],o.getRange().format.autofitColumns(),o.getRange().format.autofitRows(),t.next=10,r.sync();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}Office.onReady((function(t){t.host===Office.HostType.Excel&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("create-table").onclick=function(){return h(l)},document.getElementById("make-Slicer").onclick=function(){return h(u)},document.getElementById("make-File").onclick=function(){return h(i)},document.getElementById("delete-Nonuse").onclick=function(){return h(o)})}))}(),function(){"use strict";var t=r(27091),e=r.n(t),n=new URL(r(60806),r.b);e()(n)}()}();
//# sourceMappingURL=taskpane.js.map