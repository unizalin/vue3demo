(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),c=n("2d00"),a=r("species");e.exports=function(e){return c>=51||!o((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var o=n("a04b"),r=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var a=o(t);a in e?r.f(e,a,c(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("da84"),c=n("d039"),a=n("e8b5"),s=n("861d"),i=n("7b0b"),d=n("07fa"),l=n("8418"),u=n("65f0"),f=n("1dde"),b=n("b622"),m=n("2d00"),p=b("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",w=r.TypeError,j=m>=51||!c((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),E=f("concat"),O=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},g=!j||!E;o({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,o,r,c,a=i(this),s=u(a,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?a:arguments[t],O(c)){if(r=d(c),f+r>h)throw w(v);for(n=0;n<r;n++,f++)n in c&&l(s,f,c[n])}else{if(f>=h)throw w(v);l(s,f++,c)}return s.length=f,s}})},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"container mt-5"},c={class:"col-md-6"},a=Object(o["createElementVNode"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),s={class:"mb-2"},i=Object(o["createElementVNode"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},l=Object(o["createElementVNode"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(o["createElementVNode"])("div",{class:"text-end mt-4"},[Object(o["createElementVNode"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function f(e,t,n,f,b,m){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("form",{class:"row justify-content-center",onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((function(){return m.signIn&&m.signIn.apply(m,arguments)}),["prevent"]))},[Object(o["createElementVNode"])("div",c,[a,Object(o["createElementVNode"])("div",s,[i,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"email",id:"inputEmail","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.user.username=e}),class:"form-control",placeholder:"Email address",required:"",autofocus:""},null,512),[[o["vModelText"],b.user.username]])]),Object(o["createElementVNode"])("div",d,[l,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"password",id:"inputPassword","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.password=e}),class:"form-control",placeholder:"Password",required:""},null,512),[[o["vModelText"],b.user.password]])]),u])],32)])}n("99af");var b={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var e=this;console.log("signIn");var t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");console.log(t),this.axios.post(t,this.user).then((function(t){if(t.data.success){console.log(t);var n=t.data,o=n.token,r=n.expired;document.cookie="hexToken=".concat(o,"; expires=").concat(new Date(r)),e.$router.push("/dashboard/products")}})).catch((function(e){console.log(e)}))}}},m=n("d959"),p=n.n(m);const h=p()(b,[["render",f]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-4bec8d34.6e6cb438.js.map