!function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=59)}({0:function(t,n,e){t.exports=e(2)},2:function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,n,e,r){var a=n&&n.prototype instanceof s?n:s,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(t,n,e){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return E()}for(e.method=a,e.arg=o;;){var i=e.delegate;if(i){var u=b(i,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=c(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,i),o}function c(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function s(){}function l(){}function p(){}var d={};d[a]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(_([])));v&&v!==n&&e.call(v,a)&&(d=v);var m=p.prototype=s.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function g(t,n){var r;this._invoke=function(a,o){function i(){return new n((function(r,i){!function r(a,o,i,u){var f=c(t[a],t,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):n.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(f.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=c(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function w(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function _(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return l.prototype=m.constructor=p,p.constructor=l,p[i]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(n,e,r,a,o){void 0===o&&(o=Promise);var i=new g(u(n,e,r,a),o);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;j(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},59:function(t,n,e){t.exports=e(60)},60:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r);function o(t,n,e,r,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function u(t){o(i,r,a,u,c,"next",t)}function c(t){o(i,r,a,u,c,"throw",t)}u(void 0)}))}}var u=$('meta[name="csrf-token"]').attr("content"),c=$("#tableJabFung").DataTable({processing:!0,ajax:{url:"/api/jabatan-fungsional",dataType:"json",cache:!1,dataSrc:""},order:[[1,"asc"]],columns:[{render:function(t,n,e,r){return r.row+r.settings._iDisplayStart+1}},{data:"nama"},{data:"rumpun_jabatan.nama"},{data:"rumpun_jabatan.instansi_pembina.name"},{defaultContent:'<button type="button" id="btnEditJabFung" data-toggle="modal" data-target="#modalEditJabFung" class="btn btn-sm btn-primary" >Edit</button>\n            <button type="button"  id="btnRemoveJabFung" class="btn btn-sm btn-danger">Remove</button>\n            '}]}),f=function(t){return $.get("/api/rumpun-jabatan-option",{id:t},(function(t,n){var e=$('select[name="rumpun-jabatan"]');e.empty(),e.append("<option>Pilih Rumpun Jabatan</option>"),t.forEach((function(t){e.append("<option value=".concat(t.id,">").concat(t.nama,"</option>"))}))})).done((function(t){})).fail((function(t){}))},s=function(){var t=i(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$.post("/api/jabatan-fungsional/store",{data:n,_token:u}).done((function(t){c.ajax.reload()})).fail((function(t){}));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=i(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$.post("/api/jabatan-fungsional/update",{data:n,_token:u}).done((function(t){c.ajax.reload()})).fail((function(t){}));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();$(document).ready((function(){$.get("/api/instansi-pembina",(function(t,n){var e=$('select[name="instansi-pembina"]');e.empty(),e.append("<option>Pilih Instansi Pembina</option>"),t.forEach((function(t){e.append("<option value=".concat(t.id,">").concat(t.name,"</option>"))}))})).done((function(t){})).fail((function(t){})).always((function(t){})),$('select[name="instansi-pembina"]').click((function(){f($(this).val())})),$("#btnAddJabFung").click((function(){var t={name:$('input[name="nama-jabatan-fungsional"]').val(),instansi:$('select[name="instansi-pembina"]').val(),rumpun:$('select[name="rumpun-jabatan"]').val()};s(t)})),$("#tableJabFung tbody ").on("click","button",(function(){var t=c.row($(this).parents("tr")).data();"btnEditJabFung"==this.id&&function(t){var n=$(".modal-body");n.find('input[name="id-jabatan-fungsional"').val(t.id),n.find('input[name="nama-jabatan-fungsional"').val(t.nama),n.find('select[name="instansi-pembina"]').val(t.rumpun_jabatan.id_instansi),f(t.rumpun_jabatan.id_instansi).done((function(){n.find('select[name="rumpun-jabatan"]').val(t.id_rumpun_jabatan)})),n.find('select[name="lingkup-jabatan"]').val(t.lingkup)}(t),"btnRemoveJabFung"==this.id&&function(t){$.post("/api/jabatan-fungsional/destroy",{data:t,_token:u}).done((function(t){c.ajax.reload()})).fail((function(t){}))}(t)})),$("#btnUpdateJabFung").click((function(){var t=$(this).parents(".modal-content").find(".modal-body"),n={id:t.find('input[name="id-jabatan-fungsional"]').val(),nama:t.find('input[name="nama-jabatan-fungsional"]').val(),rumpun:t.find('select[name="rumpun-jabatan"]').val(),lingkup:t.find('select[name="lingkup-jabatan"]').val()};l(n)}))}))}});