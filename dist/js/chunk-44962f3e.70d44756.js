(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44962f3e"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},l=Object(o["createElementVNode"])("li",{class:"page-item"},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous"},[Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"«")])],-1),r=["onClick"],i=Object(o["createElementVNode"])("li",{class:"page-item"},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next"},[Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"»")])],-1);function d(e,t,c,d,s,u){return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",a,[Object(o["createElementVNode"])("ul",n,[l,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:"page-item",key:e},[Object(o["createElementVNode"])("a",{class:Object(o["normalizeClass"])(["page-link",{active:e===c.pages.current_page}]),href:"#",onClick:Object(o["withModifiers"])((function(t){return u.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),11,r)])})),128)),i])])}var s={props:["pages"],methods:{updatePage:function(e){this.$emit("emit-pages",e)}}},u=c("d959"),m=c.n(u);const p=m()(s,[["render",d]]);t["a"]=p},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("da84"),n=c("23cb"),l=c("5926"),r=c("07fa"),i=c("7b0b"),d=c("65f0"),s=c("8418"),u=c("1dde"),m=u("splice"),p=a.TypeError,b=Math.max,j=Math.min,O=9007199254740991,g="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var c,o,a,u,m,f,h=i(this),v=r(h),V=n(e,v),E=arguments.length;if(0===E?c=o=0:1===E?(c=0,o=v-V):(c=E-2,o=j(b(l(t),0),v-V)),v+c-o>O)throw p(g);for(a=d(h,o),u=0;u<o;u++)m=V+u,m in h&&s(a,u,h[m]);if(a.length=o,c<o){for(u=V;u<v-o;u++)m=u+o,f=u+c,m in h?h[f]=h[m]:delete h[f];for(u=v;u>v-o+c;u--)delete h[u-1]}else if(c>o)for(u=v-o;u>V;u--)m=u+o-1,f=u+c-1,m in h?h[f]=h[m]:delete h[f];for(u=0;u<c;u++)h[u+V]=arguments[u+2];return h.length=v-o+c,a}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),n=c("da84"),l=c("e330"),r=c("1a2d"),i=c("1626"),d=c("3a9b"),s=c("577e"),u=c("9bf2").f,m=c("e893"),p=n.Symbol,b=p&&p.prototype;if(a&&i(p)&&(!("description"in b)||void 0!==p().description)){var j={},O=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),t=d(b,this)?new p(e):void 0===e?p():p(e);return""===e&&(j[t]=!0),t};m(O,p),O.prototype=b,b.constructor=O;var g="Symbol(test)"==String(p("test")),f=l(b.toString),h=l(b.valueOf),v=/^Symbol\((.*)\)[^)]+$/,V=l("".replace),E=l("".slice);u(b,"description",{configurable:!0,get:function(){var e=h(this),t=f(e);if(r(j,e))return"";var c=g?E(t,7,-1):V(t,v,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:O})}},e289:function(e,t,c){"use strict";c("99af"),c("a15b");var o=c("bc3a"),a=c.n(o),n=c("be92"),l=c("3690"),r=Object(l["a"])();t["a"]=Object(n["b"])("productStore",{state:function(){return{products:[],productsPage:[],pagination:{}}},getters:{},actions:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/products/all");r.isLoading=!0,console.log(r),a.a.get(t).then((function(t){t.data.success&&(console.log("actions getProducts",t.data),e.products=t.data.products,e.pagination=t.data.pagination,r.isLoading=!1)}))},getProductPage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/products?page=").concat(t);r.isLoading=!0,a.a.get(c).then((function(t){t.data.success&&(console.log("getProductPage",t.data),e.productsPage=t.data.products,e.pagination=t.data.pagination,r.isLoading=!1)}))},updateProduct:function(e){var t=this;console.log(e),this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/product/").concat(e.id),o="put");var n=this.$refs.productModal;r.isLoading=!0,a.a[o](c,{data:this.tempProduct}).then((function(e){console.log(e),n.hideModal(),e.data.success?(console.log("success true"),t.getProducts(),t.emitter.emit("push-message",{style:"success",title:"更新成功"})):t.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")}),r.isLoading=!1}))}}})},e6dc:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"text-end"},n={class:"table mt-4"},l=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",{width:"120"},"分類"),Object(o["createElementVNode"])("th",null,"產品名稱"),Object(o["createElementVNode"])("th",{width:"120"},"原價"),Object(o["createElementVNode"])("th",{width:"120"},"售價"),Object(o["createElementVNode"])("th",{width:"100"},"是否啟用"),Object(o["createElementVNode"])("th",{width:"200"},"編輯")])],-1),r={class:"text-right"},i={class:"text-right"},d={key:0,class:"text-success"},s={key:1,class:"text-success"},u={class:"btn-group"},m=["onClick"],p=["onClick"];function b(e,t,c,b,j,O){var g=Object(o["resolveComponent"])("Loading"),f=Object(o["resolveComponent"])("ProductModal"),h=Object(o["resolveComponent"])("DelModal"),v=Object(o["resolveComponent"])("Pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(g,{active:e.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return O.openModal(!0)})}," 增加一個")]),Object(o["createElementVNode"])("table",n,[l,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.productsPage,(function(t,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:c},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",r,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",i,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,"啟用")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",s,"未啟用"))]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return O.openModal(!1,t)}},"編輯",8,m),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return O.dalModal(t)}},"刪除",8,p)])])])})),128))])]),Object(o["createVNode"])(f,{ref:"productModal",product:j.tempProduct,onUpdateProduct:O.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["createVNode"])(h,{ref:"delModal",product:j.tempProduct},null,8,["product"]),e.pagination?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0,pages:e.pagination,onEmitPages:e.getProductPage},null,8,["pages","onEmitPages"])):Object(o["createCommentVNode"])("",!0)],64)}var j=c("5530"),O=(c("99af"),c("a15b"),c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),g={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0",ref:"modal"},h=Object(o["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["createElementVNode"])("span",null,"新增產品")]),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},V={class:"row"},E={class:"col-sm-4"},N={class:"mb-3"},P=Object(o["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),k={class:"mb-3"},y=Object(o["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),x=["src"],w={key:0,class:"mt-5"},M=["onUpdate:modelValue"],B=["onClick"],C={key:0},D={class:"col-sm-8"},U={class:"mb-3"},L=Object(o["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1),$={class:"row gx-2"},S={class:"mb-3 col-md-6"},_=Object(o["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1),T={class:"mb-3 col-md-6"},F=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1),z={class:"row gx-2"},I={class:"mb-3 col-md-6"},J=Object(o["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},q=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1),G=Object(o["createElementVNode"])("hr",null,null,-1),H={class:"mb-3"},K=Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),Q={class:"mb-3"},R=Object(o["createElementVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),W={class:"mb-3"},X={class:"form-check"},Y=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Z={class:"modal-footer"},ee=Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O,[Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("div",f,[h,Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",N,[P,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],e.tempProduct.imageUrl]])]),Object(o["createElementVNode"])("div",k,[y,Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,x),e.tempProduct.images?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",w,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.tempProduct.images,(function(t,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"mb-3 input-group",key:c},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return e.tempProduct.images[c]=t},placeholder:"請輸入連結"},null,8,M),[[o["vModelText"],e.tempProduct.images[c]]]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return e.tempProduct.images.splice(c,1)}}," 移除 ",8,B)])})),128)),e.tempProduct.images[e.tempProduct.images.length-1]||!e.tempProduct.images.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[2]||(t[2]=function(t){return e.tempProduct.images.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("div",U,[L,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],e.tempProduct.title]])]),Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("div",S,[_,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.tempProduct.category=t}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],e.tempProduct.category]])]),Object(o["createElementVNode"])("div",T,[F,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.tempProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],e.tempProduct.unit]])])]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",I,[J,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.tempProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],e.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createElementVNode"])("div",A,[q,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.tempProduct.price=t}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],e.tempProduct.price,void 0,{number:!0}]])])]),G,Object(o["createElementVNode"])("div",H,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],e.tempProduct.description]])]),Object(o["createElementVNode"])("div",Q,[R,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],e.tempProduct.content]])]),Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",X,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],e.tempProduct.is_enabled]]),Y])])])])]),Object(o["createElementVNode"])("div",Z,[ee,Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[11]||(t[11]=function(t){return e.$emit("update-product",e.tempProduct)})}," 確認 ")])],512)])],512)}var ce=c("6eef"),oe={methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0];console.dir(t);var c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/upload");this.$http.post(o,c).then((function(t){t.success&&(e.tempProduct.imageUrl=t.data.imageUrl),console.log(t)}))}},mixins:[ce["a"]]},ae=c("d959"),ne=c.n(ae);const le=ne()(oe,[["render",te]]);var re=le,ie=c("6ff1"),de=c("1799"),se=c("be92"),ue=c("e289"),me=c("3690"),pe={data:function(){return{tempProduct:{},isNew:!1}},components:{ProductModal:re,DelModal:ie["a"],Pagination:de["a"]},inject:["emitter"],computed:Object(j["a"])(Object(j["a"])({},Object(se["d"])(ue["a"],["productsPage","pagination"])),Object(se["d"])(me["a"],["isLoading"])),methods:Object(j["a"])(Object(j["a"])({},Object(se["c"])(ue["a"],["getProductPage"])),{},{openModal:function(e,t){console.log(e,t),this.isNew?this.tempProduct={}:this.tempProduct=Object(j["a"])({},t),this.isNew=e;var c=this.$refs.productModal;c.showModal()},dalModal:function(e){this.tempProduct=Object(j["a"])({},e);var t=this.$refs.delModal;t.showModal()},updateProduct:function(e){var t=this;console.log(e),this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("unizatest","/admin/product/").concat(e.id),o="put");var a=this.$refs.productModal;this.isLoading=!0,this.$http[o](c,{data:this.tempProduct}).then((function(e){console.log(e),a.hideModal(),e.data.success?(console.log("success true"),t.getProductPage(),t.emitter.emit("push-message",{style:"success",title:"更新成功"})):t.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")}),t.isLoading=!1}))}}),created:function(){this.getProductPage()}};const be=ne()(pe,[["render",b]]);t["default"]=be}}]);
//# sourceMappingURL=chunk-44962f3e.70d44756.js.map