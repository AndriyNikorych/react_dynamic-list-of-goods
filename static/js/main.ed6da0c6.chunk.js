(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,o){},17:function(t,n,o){"use strict";o.r(n);var e=o(4),r=o.n(e),c=o(3),s=o.n(c),a=o(5),i=o(6),u=o(7),d=o(9),l=o(8),f=o(1),j=o.n(f),h=(o(15),o(0)),b=function(t){var n=t.goods;return Object(h.jsx)("ul",{children:n.map((function(t){return Object(h.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("error");return t.json()}))}var g=function(){return p().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},m=function(){return p().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},O=function(t){Object(d.a)(o,t);var n=Object(l.a)(o);function o(){var t;Object(i.a)(this,o);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.loadGoods=function(){var n=Object(a.a)(s.a.mark((function n(o){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:e=n.sent,t.setState({goods:e});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(u.a)(o,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Dynamic list of Goods"}),Object(h.jsxs)("div",{className:"content",children:[0===n.length&&Object(h.jsx)("p",{children:"No goods"}),Object(h.jsx)(b,{goods:n})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(p)},children:"Load All goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(g)},children:"Load 5 first goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.loadGoods(m)},children:"Load red goods"})]})]})}}]),o}(j.a.Component);r.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ed6da0c6.chunk.js.map