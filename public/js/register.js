!function(a){var e={};function n(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return a[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)n.d(t,i,function(e){return a[e]}.bind(null,i));return t},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="/",n(n.s=47)}({47:function(a,e,n){a.exports=n(48)},48:function(a,e){var n=$('meta[name="csrf-token"]').attr("content"),t=function(a){$(".alert")&&$(".alert").remove(),$.post("/api/register/create/account",{data:a,_token:n}).done((function(a){a.error?$(".register-button").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                    '.concat(a.message,'\n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>')):($(".register-button").before('<div class="alert alert-success alert-dismissible fade show" role="alert">\n                    '.concat(a.message,'. Silakan login untuk menambahkan data diklat menggunakan Email/NIP yang telah anda daftarkan <a href="/login" style="color:blue">disini</a> \n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>')),document.getElementById("form-regis").reset())})).fail((function(a){$(".register-button").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                Terjadi kesalahan kesalahan. Silakan hubungi operator dan coba beberapa saat lagi\n                <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                </button>\n            </div>')}))};$(document).ready((function(){$.get("/api/instansi-pembina",(function(a,e){var n=$('select[name="instansi_pembina"]');n.empty(),n.append('<option value="0" >Pilih Instansi Pembina</option>'),a.forEach((function(a){n.append("<option value=".concat(a.id,">").concat(a.name,"</option>"))}))})).done((function(a){})).fail((function(a){})).always((function(a){})),$.get("/api/golongan",(function(a,e){a.forEach((function(a){$('select[name="golongan"]').append("<option value=".concat(a.id,">").concat(a.name,"</option>"))}))})).done((function(a){})).fail((function(a){})),$(".datepicker").datepicker({dateFormat:"dd-mm-yy",todayBtn:"linked",clearBtn:!0,changeYear:!0,changeMonth:!0,yearRange:"c-65:c"}),$('select[name="instansi_pembina"]').change((function(){var a;a=$(this).val(),$.get("/api/rumpun-jabatan-option",{id:a},(function(a,e){var n=$('select[name="rumpun_jabatan"]');n.empty(),n.append('<option value="0">Pilih Rumpun Jabatan</option>'),a.forEach((function(a){n.append("<option value=".concat(a.id,">").concat(a.nama,"</option>"))}))})).done((function(a){})).fail((function(a){})).always((function(a){})),$('select[name="jabatan_fungsional"]').empty(),$('select[name="jabatan_fungsional"]').append("<option>Pilih Jabatan Fungsional</option>")})),$('select[name="rumpun_jabatan"]').change((function(){var a;a=$(this).val(),$.get("/api/jabatan-fungsional-option",{id:a},(function(a,e){var n=$('select[name="jabatan_fungsional"]');n.empty(),n.append('<option value="0">Pilih Jabatan Fungsional</option>'),a.forEach((function(a){console.log(a.id),n.append("<option value=".concat(a.id,">").concat(a.nama,"</option>"))}))})).fail((function(a){}))})),$('select[name="jabatan_fungsional"]').change((function(){!function(a){$.get("/api/jenjang-jabatan/option",a,(function(a,e){var n=$('select[name="jenjang_kategori_lingkup"]');n.empty(),n.append('<option value="0">Pilih Jenjang-Kategori-Lingkup</option>'),a.forEach((function(a){console.log(a),n.append("<option value=".concat(a.id,">").concat(a.jenjang," - ").concat(a.kategori," - ").concat(1==a.lingkup?"Pusat":"Daerah","</option>"))}))})).done((function(a){})).fail((function(a){}))}({id_jabfung:$(this).val()})})),$.validator.addMethod("valueEquals",(function(a,e,n){return n!=a}),"Value must equal arg."),$.validator.addMethod("valueNotEquals",(function(a,e,n){return a==$('input[name="password"]').val()}),"Password and confirm password fields do not match"),$.validator.addMethod("valueNotEquals2",(function(a,e,n){return a==$('input[name="password_create"]').val()}),"Password and confirm password fields do not match"),$.validator.addMethod("passwordCheck",(function(a,e,n){return!!new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(a)}),"Password must be eight characters or longer, contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character,1 numeric character, least one special character"),$.validator.addMethod("indonesianDate",(function(a,e){return Date.parseExact(a,"d-M-yyyy")}),"Format tanggal tidak valid"),$("#form-regis").validate({rules:{email:{required:!0,email:!0},nama:{required:!0},password:{required:!0,passwordCheck:!1},confirm_password:{required:!0,valueNotEquals:!0},nip:{required:!0,maxlength:18,number:!0,minlength:18},tempat_lahir:{required:!0},tanggal_lahir:{required:!0,indonesianDate:!0},golongan:{required:!0,valueEquals:0},instansi_pembina:{required:!0,valueEquals:0},rumpun_jabatan:{required:!0,valueEquals:0},jabatan_fungsional:{required:!0,valueEquals:0},jenjang_kategori_lingkup:{required:!0,valueEquals:0},unit_kerja_saat_ini:{required:!0,valueEquals:0}},messages:{email:{required:"Email is required"},nama:{required:"Nama is required"},password:{required:"Sandi is required",passwordCheck:"Password must be eight characters or longer, contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character,1 numeric character, least one special character"},confirm_password:{required:"Konfirm Sandi is required",valueNotEquals:"Sandi dan Konfirmasi Sandi tidak cocok"},nip:{required:"NIP is required",maxlength:"Panjang data harus 18 karakter",minlength:"Panjang data harus 18 karakter",number:"Data harus berupa angka"},tempat_lahir:{required:"Tempat lahir is required"},tanggal_lahir:{required:"Tanggal lahir is required"},golongan:{required:"Golongan is required",valueEquals:"Please select an item!"},instansi_pembina:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},rumpun_jabatan:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},jabatan_fungsional:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},jenjang_kategori_lingkup:{required:"Instansi Pembina is required",valueEquals:"Please select an item!"},unit_kerja_saat_ini:{required:"Unit kerja is required"}},submitHandler:function(a){var e=$('input[name="email"]').val(),i=$('input[name="password"]').val(),r=$('input[name="confirm_password"]').val(),o=$('input[name="nip"]').val(),s=$('input[name="nama"]').val(),l=$('input[name="tempat_lahir"]').val(),u=null!=$('input[name="tanggal_lahir"]').val()?Date.parse($('input[name="tanggal_lahir"]').val()).toString("yyyy-MM-dd"):null,d=$('select[name="jenjang_kategori_lingkup"]').val(),c=$('input[name="unit_kerja_saat_ini"]').val();!function(a){console.log(a),$(".alert")&&$(".alert").remove(),$.post("/api/register/create",{data:a,_token:n}).done((function(e){e.error?$(".register-button").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                    '.concat(e.message,'\n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>')):t(a)})).fail((function(a){$(".register-button").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                Terjadi kesalahan kesalahan. Silakan hubungi operator dan coba beberapa saat lagi\n                <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                </button>\n            </div>')}))}({email:e,password:i,confirm_password:r,nip:o,name:s,golongan:$('select[name="golongan"]').val(),tempat_lahir:l,tanggal_lahir:u,jenjang_kategori_lingkup:d,unit_kerja_saat_ini:c})}}),$("#form-create-account").validate({rules:{email_create:{required:!0,email:!0},password_create:{required:!0,passwordCheck:!1},confirm_password_create:{required:!0,valueNotEquals2:!0},nip_create:{required:!0,maxlength:18,number:!0,minlength:18}},messages:{nip_create:{required:"NIP is required",maxlength:"Panjang data harus 18 karakter",minlength:"Panjang data harus 18 karakter",number:"Data harus berupa angka"},email_create:{required:"Email is required"},password_create:{required:"Sandi is required",passwordCheck:"Password must be eight characters or longer, contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character,1 numeric character, least one special character"},confirm_password_create:{required:"Konfirm Sandi is required",valueNotEquals2:"Sandi dan Konfirmasi Sandi tidak cocok"}},submitHandler:function(a){!function(a){$(".alert")&&$(".alert").remove(),$.post("/api/create-account",{data:a,_token:n}).done((function(a){a.error?$("#btn-create").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                    '.concat(a.message,'\n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>')):($("#btn-create").before('<div class="alert alert-success alert-dismissible fade show" role="alert">\n                    '.concat(a.message,'. Silakan login untuk menambahkan data diklat menggunakan Email/NIP yang telah anda daftarkan <a href="/login" style="color:blue">disini</a> \n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>')),document.getElementById("form-regis").reset())})).fail((function(a){$(".register-button").before('<div class="alert alert-danger alert-dismissible fade show" role="alert">\n                Terjadi kesalahan kesalahan. Silakan hubungi operator dan coba beberapa saat lagi\n                <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                </button>\n            </div>')}))}({email:$(a).find('input[name="email_create"]').val(),password:$(a).find('input[name="password_create"]').val(),confirm_password:$(a).find('input[name="confirm_password_create"]').val(),nip:$(a).find('input[name="nip_create"]').val()})}})}))}});