(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),j=c(21),r=c.n(j),o=(c(69),c(47)),l=c(19),d=c(106),h=c(104),b=c(107),O=c(105),x=c(63),u=(c.p,c(70),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),p=c(43),m=c(8),f=c(44),g=(c(71),c(35)),v=c.n(g),N=c(1),S=f.a.div(n||(n=Object(p.a)(["\n  padding: 20px;\n"]))),k=f.a.h4(i||(i=Object(p.a)(["\n  font-size: 25px;\n  color: ","\n"])),(function(e){return e.\uc0c9\uc0c1}));function B(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),j=Object(l.a)(a,2),r=j[0],o=j[1];Object(s.useEffect)((function(){v.a.get();var e=setTimeout((function(){i(!1)}),2e3);return console.log("\uc548\ub155"),function(){clearTimeout(e)}}),[]);var d=Object(m.g)().id,h=Object(m.f)(),b=e.shoes.find((function(e){return e.id==d}));return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(S,{children:Object(N.jsx)(k,{className:"red",children:"Detail"})}),r,Object(N.jsx)("input",{onChange:function(e){o(e.target.value)}}),!0===n?Object(N.jsx)("div",{className:"my-alert2",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \uc548\ub0a8\uc74c"})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:b.title}),Object(N.jsx)("p",{children:b.content}),Object(N.jsxs)("p",{children:[b.price,"\uc6d0"]}),Object(N.jsx)(C,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,11,12])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){h.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})}function C(e){return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]]})}var w=c(27);function y(e){return Object(N.jsxs)("div",{className:"col-md-4",children:[Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(N.jsx)("h4",{children:e.shoes.title}),Object(N.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var F=function(){var e=Object(s.useState)(u),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(l.a)(i,2),j=a[0],r=a[1];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(d.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(d.a.Brand,{href:"#home",children:"ShoeShop"}),Object(N.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(b.a,{className:"me-auto",children:[Object(N.jsx)(b.a.Link,{as:w.b,to:"/",children:"Home"}),Object(N.jsx)(b.a.Link,{as:w.b,to:"/detail",children:"Detail"}),Object(N.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(O.a.Divider,{}),Object(N.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(N.jsxs)(m.c,{children:[Object(N.jsxs)(m.a,{exact:!0,path:"/",children:[Object(N.jsx)("div",{className:"background",children:Object(N.jsxs)("div",{className:"text",children:[Object(N.jsx)("h1",{children:"Sale up to 50% Off"}),Object(N.jsx)("h3",{children:"Sandal, Slip-On, Flat Shoes, Boots, Canverse, Loafer, Pumps etc .."}),Object(N.jsxs)("p",{children:[Object(N.jsx)(x.a,{variant:"primary",children:"Primary"})," "]})]})}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(y,{shoes:c[t],i:t},t)}))}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(o.a)(c),Object(o.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(N.jsx)(m.a,{path:"/detail/:id",children:Object(N.jsx)(B,{shoes:c,"\uc7ac\uace0":j,"\uc7ac\uace0\ubcc0\uacbd":r})}),Object(N.jsx)(m.a,{path:"/:id",children:Object(N.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c"})})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(w.a,{children:Object(N.jsx)(F,{})})}),document.getElementById("root")),I()}},[[98,1,2]]]);
//# sourceMappingURL=main.00bf1d95.chunk.js.map