(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{1167:function(t,a,o){var s=o(1466);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,o(9).default)("ec9d490a",s,!0,{sourceMap:!1})},1465:function(t,a,o){"use strict";o(1167)},1466:function(t,a,o){var s=o(8)((function(t){return t[1]}));s.push([t.i,".gen-toast.toast-container[data-v-3831d5b4]{border-radius:4px;bottom:40px;padding:0;width:100%}@media(max-width:955px){.gen-toast.toast-container[data-v-3831d5b4]{bottom:16px}}.gen-toast--dark.toast-container[data-v-3831d5b4]{background:#4d4d4d;max-width:380px}.gen-toast--dark.toast-container .gen-toast__title[data-v-3831d5b4]{color:#fff}.gen-toast--dark.toast-container .gen-toast__subtitle[data-v-3831d5b4]{color:#ffffffb3}@media(max-width:412px){.gen-toast--dark.toast-container[data-v-3831d5b4]{max-width:calc(100vw - 32px)}}.gen-toast--dark.toast-container[data-v-3831d5b4] .icon--close svg{fill:#ffffff4d}.gen-toast--error.toast-container[data-v-3831d5b4]{background:#f86a6a;max-width:380px}.gen-toast--error.toast-container[data-v-3831d5b4],.gen-toast--error.toast-container .gen-toast__subtitle[data-v-3831d5b4]{color:#fff}@media(max-width:500px){.gen-toast--error.toast-container[data-v-3831d5b4]{max-width:calc(100vw - 32px)}}.gen-toast--error.toast-container[data-v-3831d5b4] .icon--close svg{fill:#fff}.gen-toast--info.toast-container[data-v-3831d5b4],.gen-toast--pink.toast-container[data-v-3831d5b4]{background:#edb8f1;max-width:468px}@media(max-width:500px){.gen-toast--info.toast-container[data-v-3831d5b4],.gen-toast--pink.toast-container[data-v-3831d5b4]{max-width:calc(100vw - 32px)}}.gen-toast--success.toast-container[data-v-3831d5b4]{background:#1fb141;max-width:396px}.gen-toast--success.toast-container .gen-toast__subtitle[data-v-3831d5b4],.gen-toast--success.toast-container .gen-toast__title[data-v-3831d5b4]{color:#fff}@media(max-width:412px){.gen-toast--success.toast-container[data-v-3831d5b4]{max-width:calc(100vw - 32px)}}.gen-toast--success.toast-container[data-v-3831d5b4] .icon--close svg{fill:#fff}.gen-toast--info.toast-container[data-v-3831d5b4]{width:-moz-fit-content;width:fit-content}.gen-toast__body[data-v-3831d5b4]{padding:16px 52px}.gen-toast__icon[data-v-3831d5b4]{height:24px;left:16px;position:absolute;width:24px}.gen-toast__title[data-v-3831d5b4]{margin-bottom:8px;margin-top:2px}.gen-toast__subtitle[data-v-3831d5b4]{color:#000000e6}",""]),s.locals={},t.exports=s},1696:function(t,a,o){"use strict";o.r(a);var s={name:"OuchMainToast",components:{I8Button:o(24)["b"]},data:()=>({forceClose:!1,icon:"",style:"",title:"",subtitle:""}),computed:{toastClass(){return`gen-toast--${this.style}`}},methods:{close(){this.forceClose=!this.forceClose},onShown(){let{style:t="pink",title:a="",subtitle:o="",icon:s=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.style=t,this.title=a,this.subtitle=o,this.icon=s}}},n=s,e=(o(1465),o(6)),i=Object(e["a"])(n,(function(){var t=this,a=t._self._c;return a("ouch-toast",{staticClass:"gen-toast",class:t.toastClass,attrs:{name:"main-toast","force-close":t.forceClose},on:{shown:t.onShown},scopedSlots:t._u([{key:"body",fn:function(){return[a("div",{staticClass:"gen-toast__body"},[t.icon?a("div",{staticClass:"gen-toast__icon",domProps:{innerHTML:t._s(t.$icons[t.icon])}}):t._e(),a("div",{staticClass:"gen-toast__title semi-bold"},[t._v(t._s(t.$t(t.title)))]),a("div",{staticClass:"gen-toast__subtitle"},[t._v(t._s(t.$t(t.subtitle)))])])]},proxy:!0}])})}),[],!1,null,"3831d5b4",null);a["default"]=i.exports}}]);