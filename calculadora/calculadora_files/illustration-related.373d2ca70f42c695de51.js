(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{1216:function(t,e,a){var i=a(1571);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(9).default)("0d930ac8",i,!0,{sourceMap:!1})},1217:function(t,e,a){var i=a(1573);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(9).default)("a50c53a8",i,!0,{sourceMap:!1})},1218:function(t,e,a){var i=a(1575);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(9).default)("fe297b9a",i,!0,{sourceMap:!1})},1570:function(t,e,a){"use strict";a(1216)},1571:function(t,e,a){var i=a(8)((function(t){return t[1]}));i.push([t.i,".related-styles-grid[data-v-513ef36b]{display:grid;grid-template-columns:repeat(auto-fit,minmax(auto,320px));position:relative}@media(max-width:980px){.related-styles-grid[data-v-513ef36b]{grid-template-columns:repeat(auto-fit,minmax(auto,240px))}}@media(max-width:576px){.related-styles-grid[data-v-513ef36b]{grid-template-columns:repeat(2,1fr)}}",""]),i.locals={},t.exports=i},1572:function(t,e,a){"use strict";a(1217)},1573:function(t,e,a){var i=a(8)((function(t){return t[1]}));i.push([t.i,".categories-previews .category-preview[data-v-04289928]{border-radius:8px;cursor:pointer;display:block;height:100%;margin-bottom:16px;padding-bottom:8px;transition:all .2s ease-out}.categories-previews .category-preview__wrapper[data-v-04289928]{align-items:center;bottom:0;display:flex;height:100%;justify-content:center;left:0;padding:4px;position:absolute;right:0;top:0}.categories-previews .category-preview__wrapper--main[data-v-04289928]{padding:16px}.categories-previews .category-preview__wrapper img[data-v-04289928]{height:auto;max-height:100%;max-width:100%;width:auto}.categories-previews .category-preview .main[data-v-04289928]{align-items:center;background-color:#00000008;border:1px solid #00000008;border-radius:4px;display:flex;justify-content:center;padding-top:100%;position:relative}.categories-previews .category-preview .thumbs[data-v-04289928]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:1fr 0;margin-bottom:16px;margin-top:4px;overflow:hidden}@media(max-width:576px){.categories-previews .category-preview .thumbs[data-v-04289928]{grid-template-columns:repeat(2,1fr)}}.categories-previews .category-preview .thumbs .thumb[data-v-04289928]{align-items:center;background-color:#00000008;border:1px solid #00000008;display:flex;justify-content:center;padding-top:100%;position:relative}.categories-previews .category-preview .thumbs .thumb[data-v-04289928] .illustration__preview{padding:4px}.categories-previews .category-preview .thumbs .thumb[data-v-04289928]:not(:last-of-type){margin-right:4px}.categories-previews .category-preview .thumbs .thumb[data-v-04289928]:last-of-type{border-bottom-right-radius:7px;border-top-right-radius:7px}.categories-previews .category-preview .thumbs .thumb[data-v-04289928]:first-of-type{border-bottom-left-radius:7px;border-top-left-radius:7px}.categories-previews .category-preview .legend[data-v-04289928]{display:flex;flex-direction:column}.categories-previews .category-preview .legend .name[data-v-04289928]{color:#1a1a1a;font-weight:600;margin-right:8px}.categories-previews .category-preview .legend .amount[data-v-04289928]{color:#0006;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),i.locals={},t.exports=i},1574:function(t,e,a){"use strict";a(1218)},1575:function(t,e,a){var i=a(8)((function(t){return t[1]}));i.push([t.i,".related-styles-illustrations[data-v-050f6725]{padding:16px 30px 30px}.related-styles-illustrations h2[data-v-050f6725]{font-size:18px;font-weight:700;letter-spacing:-.09px;line-height:24px;margin-bottom:16px}",""]),i.locals={},t.exports=i},1639:function(t,e,a){"use strict";a.r(e);var i=a(154),s=a(936),r={name:"OuchIllustrationsGrid",props:{gutter:{type:Number,default:16}},computed:{gridStyles(){return{gridGap:`${this.gutter}px`}}}},o=(a(1570),a(6)),l=Object(o["a"])(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"related-styles-grid",style:t.gridStyles},[t._t("default")],2)}),[],!1,null,"513ef36b",null).exports,n={name:"OuchIllustrationRelatedStyleCard",mixins:[a(1005)["a"]],props:{styleData:{type:Object,default:()=>{}}},data:()=>({isHovered:!1}),computed:{illustrationsCount(){return 0===this.styleData.illustrations_count?this.$t("OUCH_V2.STYLE_CARD.NO_ILLUSTRATIONS"):1===this.styleData.illustrations_count?`1 ${this.$t("OUCH_V2.STYLE_CARD.ILLUSTRATION")}`:`${this.styleData.illustrations_count} ${this.$t("OUCH_V2.STYLE_CARD.ILLUSTRATIONS")}`},description(){return this.$t("OUCH_V2.SEO.CONTENT.CATEGORY.TITLE",{term:this.styleData.title})},image(){var t;return this.styleData&&((null===(t=this.styleData)||void 0===t?void 0:t.random_previews)||[]).length?this.styleData.random_previews[0].thumb1x.url:""},mainPreview(){if(!this.styleData.random_previews.length)return{thumb2x:{url:""}};const t=this.styleData.random_previews.filter(this.isLandscapeFormat);return t.length?t[0]:this.styleData.random_previews[0]},previewsNotMain(){if(!this.styleData.random_previews.length)return[];const t=this.styleData.random_previews.filter((t=>t.thumb2x.url!==this.mainPreview.thumb2x.url)),e=t.filter(this.isLandscapeFormat),a=t.filter(this.isPortraitFormat),i=e.length>=3?0:3-e.length;return[...e.slice(0,3),...a.slice(0,i)]},previewUrl(){var t;return`/illustrations/${null===(t=this.styleData)||void 0===t?void 0:t.pretty_id}`},styleBackground(){return{backgroundColor:this.styleData.backgroundColor}}},methods:{getStyles:t=>({backgroundImage:`url(${t.url})`}),isLandscapeFormat:t=>t.thumb2x.width>t.thumb2x.height+50,isPortraitFormat:t=>t.thumb2x.width<t.thumb2x.height+50}},u=(a(1572),{name:"OuchIllustrationRelatedStylesList",components:{"ouch-related-styles-grid":l,OuchIllustrationRelatedStyleCard:Object(o["a"])(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categories-previews"},[e("a",{staticClass:"category-preview",attrs:{href:t.previewUrl},on:{click:function(e){return e.preventDefault(),t.onLinkClickInModal(t.previewUrl)}}},[t.mainPreview?e("div",{staticClass:"main background"},[e("div",{staticClass:"category-preview__wrapper category-preview__wrapper--main"},[e("img",{attrs:{loading:"lazy",fetchpriority:"low",alt:t.$t("OUCH_V2.SEO.CONTENT.CATEGORY.TITLE",{term:t.styleData.title}),src:t.mainPreview.thumb2x.url}})])]):t._e(),t.previewsNotMain.length?e("div",{staticClass:"thumbs"},t._l(t.previewsNotMain,(function(a,i){return e("div",{key:i,staticClass:"thumb",class:{landscape:t.isLandscapeFormat(a)}},[e("div",{staticClass:"category-preview__wrapper"},[e("img",{attrs:{loading:"lazy",fetchpriority:"low",alt:t.$t("OUCH_V2.SEO.CONTENT.CATEGORY.TITLE",{term:t.styleData.title}),src:a.thumb2x.url}})])])})),0):t._e(),e("div",{staticClass:"legend text4"},[e("div",{staticClass:"name"},[t._v(t._s(t.styleData.title))]),e("div",{staticClass:"amount"},[t._v(t._s(t.illustrationsCount))])])])])}),[],!1,null,"04289928",null).exports,"ouch-masonry":a(926)["a"]},mixins:[s["a"]],props:{illustrationPage:{type:Boolean,default:!1},styles:{type:Array,default:()=>[]}},data:()=>({columns:5,isClient:!1,isMasonryLoaded:!1}),computed:{listGridComponent(){return this.isClient?"ouch-masonry":"ouch-related-styles-grid"}},mounted(){this.isClient=!0},methods:{onMasonryLoad(){this.isMasonryLoaded=!0,this.$root.$emit("masonry loaded")}}}),d={name:"OuchIllustrationRelatedStyles",components:{OuchIllustrationRelatedStylesList:Object(o["a"])(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"related-styles-list"},[e(t.listGridComponent,{tag:"component",attrs:{cols:t.columns,gutter:16},on:{load:t.onMasonryLoad}},t._l(t.styles,(function(t){return e("ouch-illustration-related-style-card",{key:t.id,attrs:{styleData:t}})})),1)],1)}),[],!1,null,null,null).exports},mixins:[i["a"]],props:{loading:{type:Boolean,default:!1},illustration:{type:Object,default:()=>({})},illustrationPage:{type:Boolean,default:!1},relatedStyles:{type:Array,default:()=>[]},total:{type:Number,default:0}},data:()=>({categoriesPreviews:[]}),computed:{isPaginationVisible(){return!this.loading&&this.categoriesPreviews.length&&(this.page*this.perPage<this.total||this.nextPageLoading)},perPage(){return this.illustrationPage?12:8}},watch:{relatedStyles(t){this.categoriesPreviews=t}},created(){this.categoriesPreviews=[...this.relatedStyles]},methods:{fetch(){this.nextPage({entity:"categoriesPreviews",params:{related_illustration_id:this.illustration.id,page:this.page+1,per_page:this.perPage,random_previews_count:4}})}}},c=(a(1574),Object(o["a"])(d,(function(){var t=this,e=t._self._c;return t.categoriesPreviews.length?e("div",{staticClass:"related-styles-illustrations"},[e("h2",[t._v(t._s(t.$t("OUCH_V2.FULL_ILLUSTRATION.RELATED_CATEGORIES")))]),e("ouch-illustration-related-styles-list",{attrs:{illustrationPage:t.illustrationPage,styles:t.categoriesPreviews}}),t.isPaginationVisible?e("ouch-pagination",{attrs:{entity:"categories",page:t.page,perPage:t.perPage,loading:t.nextPageLoading,total:t.total},on:{nextPage:t.fetch}}):t._e()],1):t._e()}),[],!1,null,"050f6725",null));e["default"]=c.exports},918:function(t,e,a){var i=a(925);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(9).default)("43c8cea8",i,!0,{sourceMap:!1})},924:function(t,e,a){"use strict";a(918)},925:function(t,e,a){var i=a(8)((function(t){return t[1]}));i.push([t.i,".masonry[data-v-424a9435]{align-items:flex-start;overflow:hidden}.masonry[data-v-424a9435]>div{display:flex;flex-direction:column}",""]),i.locals={},t.exports=i},926:function(t,e,a){"use strict";var i={name:"OuchMasonry",props:{items:{type:Array,default:()=>[]},cols:{type:[Object,Number,String],default:3},gutter:{type:[Object,Number,String],default:0}},mounted(){this.$nextTick((()=>{this.$emit("load")}))}},s=(a(924),a(6)),r=Object(s["a"])(i,(function(){var t=this;return(0,t._self._c)("masonry",{staticClass:"masonry",attrs:{cols:t.cols,"default-display-columns":t.cols,gutter:t.gutter}},[t._t("default")],2)}),[],!1,null,"424a9435",null);e["a"]=r.exports},936:function(t,e,a){"use strict";var i=a(15),s=a(939);e["a"]={computed:{...Object(i["e"])({windowWidth:t=>t.windowWidth})},watch:{windowWidth:"getColumns"},beforeMount(){this.getColumns()},mounted(){this.getColumns()},methods:{calcColumns(){var t;const e=(null===(t=this.$el)||void 0===t?void 0:t.offsetWidth)||0;e>0&&(this.columns=Object(s["b"])({width:e,hasComponents:!!this.hasComponents}))},getColumns(){this.calcColumns(),this.$nextTick(this.calcColumns)}}}},939:function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d}));const i=576,s=980,r=320,o=240,l=216,n=180;function u(t){let{width:e,hasComponents:a=!1}=t;const u=window.innerWidth;if(u<=i)return 2;if(u<=s){const t=Math.ceil(e/(a?n:o));return Math.min(t,3)}const d=Math.ceil(e/(a?l:r));return Math.max(d,3)}function d(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}}}]);