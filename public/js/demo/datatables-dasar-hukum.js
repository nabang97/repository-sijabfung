!function(t){var n={};function a(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,n,o){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)a.d(o,e,function(n){return t[n]}.bind(null,e));return o},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/",a(a.s=49)}({49:function(t,n,a){t.exports=a(50)},50:function(t,n){var a=$('meta[name="csrf-token"]').attr("content"),o=$("#tableDasarHukum").DataTable({processing:!0,ajax:{url:"/api/dasar-hukum",dataType:"json",cache:!1,dataSrc:""},order:[[1]],columns:[{render:function(t,n,a,o){return o.row+o.settings._iDisplayStart+1}},{data:"judul"},{data:{id:"id",status:"status"},render:function(t,n,a,o){var e;return 1==t.status?(e="btn btn-sm btn-success",textPost="Unpost"):(e="btn btn-sm btn-primary",textPost="Post"),'<a href="/dasar-hukum/view/'.concat(t.id,'" target="_blank" class="btn btn-sm btn-primary">Download PDF file </a>                \n                <button type="button"  id="btnEditDasarHukum" data-toggle="modal" data-target="#modalEditDasarHukum" class="btn btn-sm btn-primary">Edit</button>\n                <button type="button"  id="btnPostDasarHukum" class="').concat(e,'">').concat(textPost,'</button>\n                <button type="button"  id="btnRemoveDasarHukum" class="btn btn-sm btn-danger">Remove</button>\n                ')}}]});$(document).ready((function(){$("#tableDasarHukum tbody ").on("click","button",(function(){var t=o.row($(this).parents("tr")).data();"btnPostDasarHukum"==this.id&&function(t){$.post("/api/dasar-hukum/post",{id:t.id,status:!t.status,_token:a}).done((function(t){o.ajax.reload(),console.log(t)})).fail((function(t){console.log(t)}))}(t),"btnEditDasarHukum"==this.id&&($('input[name="idDasarHukum"]').val(t.id),$('input[name="namaDasarHukum"]').val(t.judul)),"btnRemoveDasarHukum"==this.id&&function(t){$.post("/api/dasar-hukum/destroy",{id:t,_token:a}).done((function(t){o.ajax.reload(),console.log(t)})).fail((function(t){})).always((function(t){console.log(t)}))}(t.id)})),$("#btnUpdateDasarHukum").click((function(){var t=$(this).parents(".modal-content").find(".modal-body");console.log(t);var n={id:t.find('input[name="idDasarHukum"]').val(),judul:t.find('input[name="namaDasarHukum"]').val()};console.log(n),function(t){$.post("/api/dasar-hukum/update",{data:t,_token:a}).done((function(t){o.ajax.reload()})).fail((function(t){})).always((function(t){}))}(n)}))}))}});