(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[5],{34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(29),o=t.n(c),u=t(30),i=function(){var n=Object(u.a)(o.a.mark((function n(){var e,t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/region/europe");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=Object(u.a)(o.a.mark((function n(e){var t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=Object(u.a)(o.a.mark((function n(e){var t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/region/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=t(1),f=t(5),h=t(32),x=t(3);function m(){var n=Object(f.a)(["\n    width: 80%;\n    height: 200px;\n    position: relative;\n    padding: 50px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: ",";\n    > input {\n        color: ",";\n        width: 450px;\n        height: 35px;\n        border-radius: 15px;\n        padding: 0 20px;\n        background-color: ",";\n        border: none;\n        box-shadow: 0 0 2.5px 0 rgba(168,168,168,1); \n    }\n    ul {\n        :hover  li {\n            opacity: 1;\n        }\n        list-style-type: none;\n        > li {\n            position: relative;\n        }\n        li {\n            border-bottom: 1px solid white;\n            box-shadow: 0 0 2.5px 0 rgba(168,168,168,1); \n            background-color: ",";\n            width: 175px;\n            height: 35px;\n            padding: 5px 20px;\n            :hover {\n                cursor: pointer;\n                background-color: #FF0000;\n                }\n            ul {\n                position: absolute;\n                left: 0;\n                top: 35px;\n            }\n            ul > li {\n                opacity: .0;\n                transition: all 0.25s;\n            }\n            }\n        }\n    }\n"]);return m=function(){return n},n}var d=x.b.form(m(),(function(n){return n.text}),(function(n){return n.text}),(function(n){return n.bg}),(function(n){return n.bg})),b=Object(p.b)(null,{fetchDataByName:function(n){return function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n);case 2:r=e.sent,t({type:"FETCH_COUNTRY_BY_NAME",payload:r});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},fetchDataByRegion:function(n){return function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:r=e.sent,t({type:"FETCH_COUNTRIES_BY_REGION",payload:r});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}})((function(n){var e=n.theme,t=n.fetchDataByName,r=n.fetchDataByRegion,c=Object(h.a)(),o=c.handleSubmit,u=c.register,i=e.element,l=e.text,s=["Africa","Europe","Americas","Asia","Oceania"].map((function(n){return a.a.createElement("li",{onClick:function(){return r(n)},key:n},n)}));return a.a.createElement(d,{onSubmit:o((function(n){var e=n.countryName;e&&t(e)})),text:l,bg:i},a.a.createElement("input",{ref:u(),name:"countryName",type:"text",placeholder:"Look for a country"}),a.a.createElement("ul",null,a.a.createElement("li",null,"Filtered by region",a.a.createElement("ul",null,s))))}));function g(){var n=Object(f.a)(["\n    width: 300px;\n    height: 325px;\n    box-sizing: border-box;\n    margin: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 2.5px 0 rgba(168,168,168,1);\n    background-color: ",";\n    color: ",";\n    overflow: hidden;\n    :hover {\n        cursor: pointer;\n    }\n    > figure {\n        width: 300px;\n        height: 175px;\n    }\n    > figure > img {\n        width: 300px;\n        height: 175px;\n    }\n    > section {\n        padding: 20px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        flex-wrap: wrap;\n        height: 150px;\n        \n        > h2 {\n            width: 100%;\n            text-align: left;\n        }\n        > p {\n            align-self: flex-end;\n        }\n    }\n"]);return g=function(){return n},n}var v=x.b.article(g(),(function(n){return n.bg}),(function(n){return n.text})),y=function(n){var e=n.item,t=n.theme,r=t.element,c=t.text,o=e.name,u=e.flag,i=e.region,l=e.capital,s=e.population,f=Object(p.c)();return a.a.createElement(v,{bg:r,text:c,onClick:function(){f({type:"SELECT_COUNTRY",payload:e})}},a.a.createElement("figure",null,a.a.createElement("img",{alt:"".concat(o,"'s flag"),src:u})),a.a.createElement("section",null,a.a.createElement("h2",null,o),a.a.createElement("p",null,a.a.createElement("strong",null,"Population: "),s,a.a.createElement("br",null),a.a.createElement("strong",null,"Region: "),i,a.a.createElement("br",null),a.a.createElement("strong",null,"Capital: "),l)))};e.default=Object(p.b)(null,{fetchDataAll:function(){return function(){var n=Object(u.a)(o.a.mark((function n(e){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i();case 2:t=n.sent,e({type:"FETCH_ALL_COUNTRIES",payload:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(n){var e=n.fetchDataAll,t=n.theme,c=Object(p.d)((function(n){return n.countries}));c?console.log("hello"):e();var o=c?c.map((function(n){return a.a.createElement(y,{key:n.numericCode,item:n,theme:t})})):a.a.createElement("div",null,"Loading...");return a.a.createElement(r.Fragment,null,a.a.createElement(b,{theme:t}),o)}))}}]);
//# sourceMappingURL=5.4e19c604.chunk.js.map