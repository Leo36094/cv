(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{368:function(e,t,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("42b33b89",content,!0,{sourceMap:!1})},372:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.FamOfficial=0]="FamOfficial",e[e.MapGacha=1]="MapGacha",e[e.Lottery=2]="Lottery",e[e.CupidTrial=3]="CupidTrial",e[e.LuckyPoints=4]="LuckyPoints",e[e.AcarnaGacha=5]="AcarnaGacha"}(r||(r={}))},373:function(e,t,n){"use strict";n(368)},374:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".card[data-v-77bc17e1]{background-color:#29282b;border-radius:.1rem;box-shadow:2px 2px 2px 1px rgba(41,40,43,.2);min-height:3rem;overflow:hidden;padding-bottom:.05rem;width:5rem}.card.can-hover[data-v-77bc17e1]{cursor:pointer}.card__img[data-v-77bc17e1]{background-color:#000;background-position:50%;background-position:top;background-repeat:no-repeat;background-size:100% 100%;height:2.5rem;width:100%}.card img[data-v-77bc17e1]{width:100%}.card__content[data-v-77bc17e1]{padding:.1rem;text-align:center}.card .link[data-v-77bc17e1]{color:hsla(21,81%,67%,.5);font-weight:700}",""]),r.locals={},e.exports=r},376:function(e,t,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("4d40af40",content,!0,{sourceMap:!1})},377:function(e,t,n){"use strict";n.r(t);var r=n(0),c=Object(r.d)({__name:"index",props:{cardName:{type:String,default:function(){return""}},img:{type:String,default:function(){return""}},href:{type:String,default:function(){return""}}},setup:function(e){var t=e;return{__sfc:!0,props:t,goProjectSite:function(){t.href&&window.open(t.href,"_blank")}}}}),o=(n(373),n(45)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{class:["card",{"can-hover":e.href}],on:{click:n.goProjectSite}},[t("div",{staticClass:"card__img",style:{backgroundImage:"url(".concat(e.img,")")}}),e._v(" "),t("div",{staticClass:"card__content"},[t("p",[e._v(e._s(e.cardName)+" "),e.href?t("a",{staticClass:"link",attrs:{href:e.href}},[e._v("LINK")]):e._e()])])])}),[],!1,null,"77bc17e1",null);t.default=component.exports},380:function(e,t,n){e.exports=n.p+"img/ff-cupid-main.64b811c.png"},381:function(e,t,n){e.exports=n.p+"img/mapgacha-discount.7083392.png"},382:function(e,t,n){e.exports=n.p+"img/aov-lottery-milestone.ed91f97.png"},383:function(e,t,n){e.exports=n.p+"img/aov-luckypoint-draw.3050321.png"},384:function(e,t,n){e.exports=n.p+"img/lol-card-init.2d1cb5b.png"},385:function(e,t,n){"use strict";n(376)},386:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".project .container[data-v-6deeb9ea]{align-items:center;align-items:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;justify-content:space-around;padding:.5rem .1rem}.project__card[data-v-6deeb9ea]{margin-bottom:.5rem}",""]),r.locals={},e.exports=r},387:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),c=n(372),o=Object(r.d)({__name:"index",setup:function(e){return{__sfc:!0,cardList:[{img:"https://dlgarenanow-a.akamaihd.net/mgames/famtw/h5/20220715_official/meta_01.jpg",name:"FAM Official Website (Nuxt)",id:c.a.FamOfficial,href:""},{img:n(380),name:"FreeFire - Cupid Trial (Canvas, Vue2)",id:c.a.CupidTrial,href:"https://codepen.io/leo36094/full/XWBxZwJ"},{img:n(381),name:"League of Legends - Map Gacha (Vue3)",id:c.a.MapGacha,href:""},{img:n(382),name:"ARENA OF VALOR - Lottery (Vue3, Websocket)",id:c.a.Lottery,href:""},{img:n(383),name:"ARENA OF VALOR - Lucky Points (Vue2)",id:c.a.LuckyPoints,href:""},{img:n(384),name:"League of Legends - Acarna Gacha (Vue2)",id:c.a.AcarnaGacha,href:""}]}}}),d=(n(385),n(45)),component=Object(d.a)(o,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"project"},[t("h4",{staticClass:"title"},[e._v("Projects From Garena")]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"project__tech-stack"},[e._v("\n    Built with Vue, Nuxt, Websocket, Pinia, Vuex, Canvas.\n  ")]),e._v(" "),t("div",{staticClass:"container"},e._l(n.cardList,(function(e){return t("Card",{key:e.id,staticClass:"project__card",attrs:{cardName:e.name,img:e.img,href:e.href}})})),1)])}),[],!1,null,"6deeb9ea",null);t.default=component.exports;installComponents(component,{Card:n(377).default})}}]);