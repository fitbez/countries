(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(15),o=n.n(r),s=(n(21),n(6)),a=(n(22),n(16)),u=n.n(a),l=n(0);var j=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),a=o[0],j=o[1],h=n.filter((function(e){return e.name.toUpperCase().indexOf(a.toUpperCase())>-1}));return console.log(h),Object(c.useEffect)((function(){u.a.get("https://restcountries.com/v2/all").then((function(e){i(e.data)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h2",{children:"Welcome from countries"}),Object(l.jsx)("label",{children:"Search for a country by name "}),Object(l.jsx)("input",{type:"text",onChange:function(e){j(e.target.value)}}),h.length>=250?Object(l.jsx)("p",{children:"Please enter a country to know about..."}):h.length>=20?Object(l.jsx)("p",{children:"Too many matches, specify another filter"}):1===h.length?h.map((function(e){var t=e.flag,n=e.name,c=e.population,i=e.region;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t,style:{width:"100px"},alt:"countries"}),Object(l.jsxs)("p",{children:["Name: ",n," "]}),Object(l.jsxs)("p",{children:["Population: ",c]}),Object(l.jsxs)("p",{children:["Region: ",i," "]})]},n)})):Object(l.jsx)("div",{children:h.map((function(e){return Object(l.jsx)("div",{onClick:function(){return j(e.name)},children:e.name})}))})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.5fb195ea.chunk.js.map