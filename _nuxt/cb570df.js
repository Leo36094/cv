(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{323:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("b47b6762",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r(323)},329:function(t,e,r){var n=r(70)(!1);n.push([t.i,".card[data-v-77bc17e1]{background-color:#29282b;width:5rem;min-height:3rem;border-radius:.1rem;overflow:hidden;box-shadow:2px 2px 2px 1px rgba(41,40,43,.2);padding-bottom:.05rem}.card.can-hover[data-v-77bc17e1]{cursor:pointer}.card__img[data-v-77bc17e1]{width:100%;background-repeat:no-repeat;background-position:50%;background-size:100% 100%;background-position:top;height:2.5rem;background-color:#000}.card img[data-v-77bc17e1]{width:100%}.card__content[data-v-77bc17e1]{padding:.1rem;text-align:center}.card .link[data-v-77bc17e1]{font-weight:700;color:rgba(239,150,102,.5)}",""]),t.exports=n},332:function(t,e,r){"use strict";r.r(e);var n=r(0),o=Object(n.d)({__name:"index",props:{cardName:{type:String,default:function(){return""}},img:{type:String,default:function(){return""}},href:{type:String,default:function(){return""}}},setup:function(t){var e=t;return{__sfc:!0,props:e,goProjectSite:function(){e.href&&window.open(e.href,"_blank")}}}}),c=(r(328),r(38)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{class:["card",{"can-hover":t.href}],on:{click:r.goProjectSite}},[e("div",{staticClass:"card__img",style:{backgroundImage:"url(".concat(t.img,")")}}),t._v(" "),e("div",{staticClass:"card__content"},[e("p",[t._v(t._s(t.cardName)+" "),t.href?e("a",{staticClass:"link",attrs:{href:t.href}},[t._v("LINK")]):t._e()])])])}),[],!1,null,"77bc17e1",null);e.default=component.exports}}]);