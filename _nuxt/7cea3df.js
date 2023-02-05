(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{318:function(e,t,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("58c3dba4",content,!0,{sourceMap:!1})},319:function(e,t,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("72a33a20",content,!0,{sourceMap:!1})},320:function(e,t,n){"use strict";n(318)},321:function(e,t,n){var r=n(70)(!1);r.push([e.i,".title-row{font-weight:600;margin-top:.2rem;margin-bottom:.08rem;padding-bottom:.08rem;color:#ef9666}.title-row__description{display:flex;justify-content:space-between;align-items:center}.title-row .title-experience{font-size:.12rem;font-style:italic}@media only screen and (min-width:750px){.title-row .title-experience{font-size:.2rem}}",""]),e.exports=r},322:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.d)({__name:"JobTitle",props:{titleInfo:null},setup:function(e){return{__sfc:!0,props:e}}}),l=(n(320),n(38)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"title-row"},e._l(n.props.titleInfo,(function(n){return t("p",{key:n.id,staticClass:"title-row__description"},[e._v("\n    "+e._s(n.title)+"\n    "),t("span",{staticClass:"title-experience"},[e._v(e._s(n.experience))])])})),0)}),[],!1,null,null,null);t.default=component.exports},324:function(e,t,n){"use strict";n(319)},325:function(e,t,n){var r=n(70)(!1);r.push([e.i,".cv{letter-spacing:1px;line-height:1.2;padding-bottom:1rem;color:#afafaf}.cv__intro p{margin-bottom:.1rem}.cv a{color:#cb957c;text-decoration:underline}.cv .divider{margin:.08rem 0 .16rem;border-bottom:.01rem solid #afafaf}.cv .tech-list{margin:.15rem 0}.cv .title{font-weight:600;margin-top:.2rem;margin-bottom:.08rem;padding-bottom:.08rem;color:#ef9666}.cv .project__name{font-weight:600;display:flex;align-items:baseline;position:relative;margin-right:.1rem;margin-bottom:.1rem;color:#ef9666}.cv .project__group{font-size:.2rem;margin-left:auto;font-weight:500;width:2rem;font-style:italic}.cv .project__description{margin-left:.1rem;font-weight:600;color:#cb957c}.cv .project__description--edu{margin-left:0}.cv .project__detail-list_en{padding:0 .2rem}.cv .project__detail-list_en li{list-style-type:disc;margin-bottom:.05rem}.cv .bold{font-weight:600}",""]),e.exports=r},326:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(322),l=Object(r.d)({__name:"index",setup:function(e){return{__sfc:!0,JobTitle:o.default}}}),c=(n(324),n(38)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"cv"},[e._m(0),e._v(" "),t("section",{staticClass:"works"},[t("h3",{staticClass:"title"},[e._v("Work Experience")]),e._v(" "),t("div",{staticClass:"project"},[t("h5",{staticClass:"project__name"},[e._v("Garena")]),e._v(" "),t(n.JobTitle,{attrs:{"title-info":[{title:"Senior Software Engineer I, Frontend",experience:"Jan 2023 - Present",id:1},{title:"Software Engineer II, Frontend",experience:"Mar 2020 - Jan 2023",id:2}]}}),e._v(" "),e._m(1),e._v(" "),e._m(2)],1),e._v(" "),t("div",{staticClass:"divider"}),e._v(" "),t("div",{staticClass:"project"},[t("h5",{staticClass:"project__name"},[e._v("Cloud Interactive")]),e._v(" "),t(n.JobTitle,{attrs:{"title-info":[{title:"Frontend Engineer",experience:"Oct 2018 - Jan 2020",id:1}]}}),e._v(" "),e._m(3),e._v(" "),e._m(4)],1),e._v(" "),t("div",{staticClass:"divider"}),e._v(" "),t("div",{staticClass:"project"},[t("h5",{staticClass:"project__name"},[e._v("Acaia")]),e._v(" "),t(n.JobTitle,{attrs:{"title-info":[{title:"Sales Support Specialist",experience:"Mar 2017 - Jun 2018",id:1}]}}),e._v(" "),e._m(5)],1),e._v(" "),t("div",{staticClass:"divider"}),e._v(" "),e._m(6)])])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("div",{staticClass:"cv__intro"},[t("p",[e._v("\n        Hi, I'm Leo! Have over two years of experience in the frontend field\n        with building internal management system platforms, marketing events,\n        etc, using "),t("span",{staticClass:"bold"},[e._v("Vue")]),e._v(" and\n        "),t("span",{staticClass:"bold"},[e._v("React")]),e._v(".\n      ")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"tech-list"},[t("span",{staticClass:"bold"},[e._v("Typescript,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Vue, Nuxt,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Vuex, Pinia,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Webpack,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Cypress,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("SCSS.")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",{staticClass:"project__detail-list_en"},[t("li",[e._v("\n          Collaborated with backend engineers to develop multiple revenue and\n          marketing events.\n        ")]),e._v(" "),t("li",[t("span",{staticClass:"bold"},[e._v("Led and participated in upgrading and migrating old front-end\n          projects")]),e._v(" for future maintenance and better development experience\n          for the team.\n        ")]),e._v(" "),t("li",[e._v("\n          Built front-end templates using cookiecutter to solve the pain of\n          setting configs when starting a new project, "),t("span",{staticClass:"bold"},[e._v("increased 16%\n          development efficiency")]),e._v(" for the front-end development team from 12 to\n          10 workdays.\n        ")]),e._v(" "),t("li",[e._v("\n          Built a platform with Auth integration for revenue events that\n          simplified testing procedures for QA partners.\n        ")]),e._v(" "),t("li",[e._v("\n          Implemented a parser tool of CSS that reduced labor costs between\n          the development team and the operation team, by generating compiled CSS\n          files to readable templates in Google Sheets.\n        ")]),e._v(" "),t("li",[e._v("\n          Used Nuxt on official websites of newly published games to support\n          dynamic meta changing, and server-side rendering for better SEO.\n          "),t("a",{attrs:{href:"https://fam.garena.tw/",target:"_blank"}},[e._v(" Event Link ")])]),e._v(" "),t("li",[e._v("\n          Keep learning and make it in practice that built web games with\n          Canvas for marketing events.\n          "),t("a",{attrs:{href:"https://codepen.io/chuangl/full/Yzejraz",target:"_blank"}},[e._v("(No commercial version demo - Cupid Trial)")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"tech-list"},[t("span",{staticClass:"bold"},[e._v("Javascript,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Vue, Nuxt, React")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Vuex,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("Webpack,")]),e._v(" "),t("span",{staticClass:"bold"},[e._v("SCSS, Stylus.")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",{staticClass:"project__detail-list_en"},[t("li",[e._v("\n          Developed an internal management system for enterprise and maintain\n          Company Official Website using Vue2, Vuex, React, SCSS\n        ")]),e._v(" "),t("li",[e._v("\n          Used React hooks and Context API for better code reusability and\n          state management across components.\n        ")]),e._v(" "),t("li",[e._v("\n          Experience in Agile / Scrum development and take advantage of Story\n          points to plan and estimate development schedule efficiently.\n        ")]),e._v(" "),t("li",[e._v("\n          Communicated and integrated with other departments to improve the\n          project such as UX flow with UI/UX designers and RESTful API with\n          backend developers.\n        ")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",{staticClass:"project__detail-list_en"},[t("li",[e._v("\n          Collaborated with UX Designers to rebuild a new website via a\n          Shopify template.\n        ")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"project"},[t("h5",{staticClass:"project__name"},[e._v("Ming Chuan University")]),e._v(" "),t("p",{staticClass:"project__description project__description--edu"},[e._v("\n        Bachelor's degree, Applied English\n      ")])])}],!1,null,null,null);t.default=component.exports},330:function(e,t,n){"use strict";n.r(t);var r=n(38),component=Object(r.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"home"},[e("Cv")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Cv:n(326).default})}}]);