!function(e){var a={};function n(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=a,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)n.d(t,o,function(a){return e[a]}.bind(null,o));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/",n(n.s=71)}({71:function(e,a,n){e.exports=n(72)},72:function(e,a){var n=$('meta[name="csrf-token"]').attr("content"),t=function(e,a){console.log(a),$(e).before('<div class="alert alert-success alert-dismissible fade show" role="alert">\n        '.concat(a,'\n        <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>\n    </div>'))};"undefined"!=typeof Storage?("true"===sessionStorage.getItem("edit")&&(t("#updateProfile",sessionStorage.getItem("messages")),sessionStorage.setItem("edit",!1)),"true"===sessionStorage.getItem("photo-success")&&(t("#form-photo",sessionStorage.getItem("messages")),sessionStorage.setItem("photo-success",!1))):alert("Sorry, your browser does not support Web Storage...");$.validator.addMethod("valueEquals",(function(e,a,n){return n!=e}),"Value must equal arg."),$.validator.addMethod("valueNotEquals",(function(e,a,n){return e==$('input[name="password"]').val()}),"Password and confirm password fields do not match"),$.validator.addMethod("passwordCheck",(function(e,a,n){return!!new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(e)}),"Password must be eight characters or longer, contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character,1 numeric character, least one special character"),$.validator.addMethod("indonesianDate",(function(e,a){return Date.parseExact(e,"d-M-yyyy")}),"Format tanggal tidak valid"),$("#form-profile").validate({rules:{nama:{required:!0},nip:{required:!0,maxlength:18,number:!0,minlength:18},tempat_lahir:{required:!0},tanggal_lahir:{required:!0,indonesianDate:!0},golongan:{required:!0,valueEquals:0},instansi_pembina:{required:!0,valueEquals:0},rumpun_jabatan:{required:!0,valueEquals:0},jabatan_fungsional:{required:!0,valueEquals:0},jenjang_kategori_lingkup:{required:!0,valueEquals:0},unit_kerja_saat_ini:{required:!0,valueEquals:0}},messages:{nama:{required:"Nama is required"},nip:{required:"NIP is required",maxlength:"Panjang data harus 18 karakter",minlength:"Panjang data harus 18 karakter",number:"Data harus berupa angka"},tempat_lahir:{required:"Tempat lahir is required"},tanggal_lahir:{required:"Tanggal lahir is required"},golongan:{required:"Golongan is required",valueEquals:"Please select an item!"},instansi_pembina:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},rumpun_jabatan:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},jabatan_fungsional:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},jenjang_kategori_lingkup:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},unit_kerja_saat_ini:{required:"Unit kerja is required"}},submitHandler:function(e){!function(e){$(".alert-sijabfung")&&$(".alert-sijabfung").remove(),$.post("/profile/update",{_token:n,data:e}).done((function(e){e.error?$("#updateProfile").before('<div class="alert-sijabfung alert-sijabfung-danger">'.concat(e.message,"</div>")):"undefined"!=typeof Storage?(sessionStorage.setItem("edit",!0),sessionStorage.setItem("messages","Profile berhasil diperbarui"),window.location.reload()):alert("Sorry, your browser does not support Web Storage...")})).fail((function(e){}))}({nip:$('input[name="nip"]').val(),name:$('input[name="nama"]').val(),birthday_place:$('input[name="tempat_lahir"]').val(),birthday_date:null!=$('input[name="tanggal_lahir"]').val()?Date.parse($('input[name="tanggal_lahir"]').val()).toString("yyyy-MM-dd"):null,golongan:$('select[name="golongan"]').val(),id_jenjang_jabfung:$('select[name="jenjang_kategori_lingkup"]').val(),unit_kerja:$('input[name="unit_kerja_saat_ini"]').val()})}}),$(".datepicker").datepicker({dateFormat:"dd-mm-yy",todayBtn:"linked",clearBtn:!0,changeYear:!0,changeMonth:!0,yearRange:"c-65:c"}),$('select[name="instansi_pembina"]').change((function(){var e;console.log($(this).val()),e=$(this).val(),$.get("/api/rumpun-jabatan-option",{id:e},(function(e,a){var n=$('select[name="rumpun_jabatan"]');n.empty(),n.append('<option value="0">Pilih Rumpun Jabatan</option>'),e.forEach((function(e){n.append("<option value=".concat(e.id,">").concat(e.nama,"</option>"))}))})).done((function(e){console.log(e)})).fail((function(e){})).always((function(e){})),$('select[name="jabatan_fungsional"]').empty(),$('select[name="jabatan_fungsional"]').append("<option>Pilih Jabatan Fungsional</option>"),$('select[name="jenjang_kategori_lingkup"]').empty(),$('select[name="jenjang_kategori_lingkup"]').append("<option>Pilih Jenjang - Kategori - Lingkup</option>")})),$('select[name="rumpun_jabatan"]').change((function(){var e;$('select[name="jenjang_kategori_lingkup"]').empty(),$('select[name="jenjang_kategori_lingkup"]').append("<option>Pilih Jenjang - Kategori - Lingkup</option>"),e=$(this).val(),console.log(e),$.get("/api/jabatan-fungsional-option",{id:e},(function(e,a){var n=$('select[name="jabatan_fungsional"]');n.empty(),n.append('<option value="0">Pilih Jabatan Fungsional</option>'),e.forEach((function(e){console.log(e.id),n.append("<option value=".concat(e.id,">").concat(e.nama,"</option>"))}))})).fail((function(e){}))})),$('select[name="jabatan_fungsional"]').change((function(){!function(e){$.get("/api/jenjang-jabatan/option",e,(function(e,a){var n=$('select[name="jenjang_kategori_lingkup"]');n.empty(),n.append('<option value="0">Pilih Jenjang-Kategori-Lingkup</option>'),e.forEach((function(e){console.log(e),n.append("<option value=".concat(e.id,">").concat(e.jenjang," - ").concat(e.kategori," - ").concat(1==e.lingkup?"Pusat":"Daerah","</option>"))}))})).done((function(e){console.log(e)})).fail((function(e){console.log(e)})).always((function(e){console.log(e)}))}({id_jabfung:$(this).val()})})),$('input[name="photo-profile"]').change((function(e){console.log($("#form-photo")[0]);var a=new FormData,t=$('input[name = "photo-profile"]')[0].files[0];a.append("file",t),a.append("_token",n),$.ajax({url:"/profile/photo",type:"POST",data:a,cache:!1,contentType:!1,processData:!1,success:function(e){console.log(e),!1===e.error&&("undefined"!=typeof Storage?(sessionStorage.setItem("photo-success",!0),sessionStorage.setItem("messages","Foto profile berhasil diperbarui"),window.location.reload()):alert("Sorry, your browser does not support Web Storage..."))},error:function(e){$("#form-photo").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n    Terjadi kesalahan saat mengubah password. Silakan hubungi kontak yang tersedia.\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n    </button>\n</div>')}})}))}});