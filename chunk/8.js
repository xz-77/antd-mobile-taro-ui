(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"130":function(c,e,t){},"133":function(c,e,t){},"134":function(c,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(125),n=(t(17),t(130),t(124)),r=function DemoBlock(c){return Object(n.jsxs)(a.c,{"className":"demoBlock","children":[Object(n.jsx)(a.c,{"className":"title","children":c.title}),Object(n.jsx)(a.c,{"className":"main","style":{"padding":c.padding,"background":c.background},"children":c.children})]})};r.defaultProps={"padding":"12px 12px","background":"var(--adm-color-background)"}},"135":function(c,e,t){},"136":function(c,e,t){"use strict";t(135);var a=t(17),n=t(128),r=t.n(n),l=t(125),i=t(129),o=t(126),j=t(124),s={"default":"var(--adm-color-weak)","primary":"var(--adm-color-primary)","white":"var(--adm-color-white)"},d={"color":"default"},b=Object(a.memo)((function(c){var e=Object(i.a)(d,c),t=Object(a.useMemo)((function(){var c;return null!==(c=s[e.color])&&void 0!==c?c:e.color}),[e]);return Object(o.a)(e,Object(j.jsx)(l.c,{"className":r()("adm-loading","adm-dot-loading"),"children":Object(j.jsxs)(l.c,{"className":"wrapper","children":[Object(j.jsx)(l.b,{"className":"dot a","style":{"backgroundColor":t}}),Object(j.jsx)(l.b,{"className":"dot b","style":{"backgroundColor":t}}),Object(j.jsx)(l.b,{"className":"dot c","style":{"backgroundColor":t}})]})}))}));e.a=b},"138":function(c,e,t){},"145":function(c,e,t){"use strict";t(133);var a=t(5),n=t(17),r=t.n(n),l=t(128),i=t.n(l),o=t(125),j=t(126),s=t(129),d=t(124),b={"direction":"horizontal"};e.a=function Space(c){var e,t=Object(s.a)(b,c),n=t.direction,l=t.onClick;return Object(j.a)(t,Object(d.jsx)(o.c,{"className":i()("adm-space",(e={},Object(a.a)(e,"".concat("adm-space","-wrap"),t.wrap),Object(a.a)(e,"".concat("adm-space","-block"),t.block),Object(a.a)(e,"".concat("adm-space","-").concat(n),!0),Object(a.a)(e,"".concat("adm-space","-align-").concat(t.align),!!t.align),Object(a.a)(e,"".concat("adm-space","-justify-").concat(t.justify),!!t.justify),e)),"onClick":l,"children":r.a.Children.map(t.children,(function(c){return null!=c&&Object(d.jsx)(o.c,{"className":"".concat("adm-space","-item"),"children":c})}))}))}},"174":function(c,e,t){"use strict";t(138);var a=t(5),n=t(21),r=t(30),l=t(15),i=t(17),o=t(128),j=t.n(o),s=t(125),d=t(129),b=t(126),u=t(7);"undefined"==typeof window||"undefined"==typeof document||!window.document||window.document.createElement;var O=t(136),h=t(124),x={"color":"default","fill":"solid","block":!1,"loading":!1,"loadingIcon":Object(h.jsx)(O.a,{"color":"currentColor"}),"type":"","shape":"default","size":"middle","onTouchStart":function onTouchStart(){}},m=Object(i.forwardRef)((function(c,e){var t,o=Object(d.a)(x,c),O=Object(i.useState)(!1),m=Object(l.a)(O,2),f=m[0],p=m[1],g=Object(i.useRef)(null),k="auto"===o.loading?f:o.loading,v=o.disabled||k;Object(i.useImperativeHandle)(e,(function(){return{get"nativeElement"(){return g.current}}}));var w=function(){var c=Object(r.a)(Object(n.a)().mark((function _callee(c){var e;return Object(n.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(!v){t.next=2;break}return t.abrupt("return");case 2:if(o.onClick){t.next=4;break}return t.abrupt("return");case 4:if(e=o.onClick(c),!(a=e)||"object"!==Object(u.a)(a)||"function"!=typeof a.then){t.next=17;break}return t.prev=6,p(!0),t.next=10,e;case 10:p(!1),t.next=17;break;case 13:throw t.prev=13,t.t0=t.catch(6),p(!1),t.t0;case 17:case"end":return t.stop()}var a}),_callee,null,[[6,13]])})));return function handleClick(e){return c.apply(this,arguments)}}();return Object(b.a)(o,Object(h.jsx)(s.c,{"ref":g,"onClick":w,"className":j()("adm-button",o.color?"".concat("adm-button","-").concat(o.color):null,(t={},Object(a.a)(t,"".concat("adm-button","-block"),o.block),Object(a.a)(t,"".concat("adm-button","-disabled"),v),Object(a.a)(t,"".concat("adm-button","-fill-outline"),"outline"===o.fill),Object(a.a)(t,"".concat("adm-button","-fill-none"),"none"===o.fill),Object(a.a)(t,"".concat("adm-button","-mini"),"mini"===o.size),Object(a.a)(t,"".concat("adm-button","-small"),"small"===o.size),Object(a.a)(t,"".concat("adm-button","-large"),"large"===o.size),Object(a.a)(t,"".concat("adm-button","-loading"),k),t),"".concat("adm-button","-shape-").concat(o.shape)),"onTouchStart":o.onTouchStart,"onTouchEnd":o.onTouchEnd,"children":k?Object(h.jsxs)(s.c,{"className":"".concat("adm-button","-loading-wrapper"),"children":[o.loadingIcon,o.loadingText]}):o.children}))}));e.a=m},"308":function(c,e,t){"use strict";t.r(e);t(17);var a=t(145),n=t(174),r=t(134),l=t(124),demo1=function(){return Object(l.jsxs)(l.Fragment,{"children":[Object(l.jsx)(r.a,{"title":"水平方向的间距","children":Object(l.jsxs)(a.a,{"children":[Object(l.jsx)(n.a,{"children":"按钮1"}),Object(l.jsx)(n.a,{"children":"按钮2"}),Object(l.jsx)(n.a,{"children":"按钮3"})]})}),Object(l.jsx)(r.a,{"title":"换行","children":Object(l.jsxs)(a.a,{"wrap":!0,"children":[Object(l.jsx)(n.a,{"children":"按钮1"}),Object(l.jsx)(n.a,{"children":"按钮2"}),Object(l.jsx)(n.a,{"children":"按钮3"}),Object(l.jsx)(n.a,{"children":"按钮4"}),Object(l.jsx)(n.a,{"children":"按钮5"}),Object(l.jsx)(n.a,{"children":"按钮6"}),Object(l.jsx)(n.a,{"children":"按钮7"}),Object(l.jsx)(n.a,{"children":"按钮8"}),Object(l.jsx)(n.a,{"children":"按钮9"}),Object(l.jsx)(n.a,{"children":"按钮10"}),Object(l.jsx)(n.a,{"children":"按钮11"})]})}),Object(l.jsx)(r.a,{"title":"垂直方向的间距","children":Object(l.jsxs)(a.a,{"direction":"vertical","children":[Object(l.jsx)(n.a,{"children":"按钮1"}),Object(l.jsx)(n.a,{"children":"按钮2"}),Object(l.jsx)(n.a,{"children":"按钮3"})]})}),Object(l.jsx)(r.a,{"title":"自定义间距大小","children":Object(l.jsxs)(a.a,{"style":{"--gap":"24px"},"children":[Object(l.jsx)(n.a,{"children":"按钮1"}),Object(l.jsx)(n.a,{"children":"按钮2"}),Object(l.jsx)(n.a,{"children":"按钮3"})]})}),Object(l.jsx)(r.a,{"title":"渲染为块级元素","children":Object(l.jsxs)(a.a,{"direction":"vertical","block":!0,"children":[Object(l.jsx)(n.a,{"children":"按钮1"}),Object(l.jsx)(n.a,{"children":"按钮2"}),Object(l.jsx)(n.a,{"children":"按钮3"})]})}),Object(l.jsx)(r.a,{"title":"主轴对齐方式","children":Object(l.jsxs)(a.a,{"justify":"center","block":!0,"children":[Object(l.jsx)(n.a,{"children":"1"}),Object(l.jsxs)(n.a,{"children":["2",Object(l.jsx)("br",{}),"2"]}),Object(l.jsxs)(n.a,{"children":["3",Object(l.jsx)("br",{}),"3",Object(l.jsx)("br",{}),"3"]})]})}),Object(l.jsx)(r.a,{"title":"交叉轴对齐方式","children":Object(l.jsxs)(a.a,{"align":"end","children":[Object(l.jsx)(n.a,{"children":"1"}),Object(l.jsxs)(n.a,{"children":["2",Object(l.jsx)("br",{}),"2"]}),Object(l.jsxs)(n.a,{"children":["3",Object(l.jsx)("br",{}),"3",Object(l.jsx)("br",{}),"3"]})]})})]})};e.default=function(){return Object(l.jsx)(l.Fragment,{"children":Object(l.jsx)(demo1,{})})}}}]);