(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"130":function(e,t,n){},"136":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(126),r=(n(17),n(130),n(125)),i=function DemoBlock(e){return Object(r.jsxs)(a.d,{"className":"demoBlock","children":[Object(r.jsx)(a.d,{"className":"title","children":e.title}),Object(r.jsx)(a.d,{"className":"main","style":{"padding":e.padding,"background":e.background},"children":e.children})]})};i.defaultProps={"padding":"12px 12px","background":"var(--adm-color-background)"}},"137":function(e,t,n){},"144":function(e,t,n){},"146":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;t.FORMAT_HTML="html";t.FORMAT_PLAIN="plain";var a=["html","plain"];t.FORMATS=a},"147":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.WORDS=void 0;t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},"148":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"capitalize",{"enumerable":!0,"get":function get(){return a.default}}),Object.defineProperty(t,"isNode",{"enumerable":!0,"get":function get(){return r.default}}),Object.defineProperty(t,"isReactNative",{"enumerable":!0,"get":function get(){return i.default}}),Object.defineProperty(t,"isWindows",{"enumerable":!0,"get":function get(){return o.default}}),Object.defineProperty(t,"makeArrayOfLength",{"enumerable":!0,"get":function get(){return c.default}}),Object.defineProperty(t,"makeArrayOfStrings",{"enumerable":!0,"get":function get(){return s.default}});var a=_interopRequireDefault(n(159)),r=_interopRequireDefault(n(160)),i=_interopRequireDefault(n(161)),o=_interopRequireDefault(n(162)),c=_interopRequireDefault(n(149)),s=_interopRequireDefault(n(164));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}},"149":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function makeArrayOfLength(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))};t.default=a},"150":function(e,t,n){"use strict";n(144);var a=n(17),r=n(128),i=n.n(r),o=n(126),c=n(129),s=n(127),l=n(125),u={"default":"var(--adm-color-weak)","primary":"var(--adm-color-primary)","white":"var(--adm-color-white)"},d={"color":"default"},f=Object(a.memo)((function(e){var t=Object(c.a)(d,e),n=Object(a.useMemo)((function(){var e;return null!==(e=u[t.color])&&void 0!==e?e:t.color}),[t]);return Object(s.a)(t,Object(l.jsx)(o.d,{"className":i()("adm-loading","adm-dot-loading"),"children":Object(l.jsxs)(o.d,{"className":"wrapper","children":[Object(l.jsx)(o.c,{"className":"dot a","style":{"backgroundColor":n}}),Object(l.jsx)(o.c,{"className":"dot b","style":{"backgroundColor":n}}),Object(l.jsx)(o.c,{"className":"dot c","style":{"backgroundColor":n}})]})}))}));t.a=f},"151":function(e,t,n){},"153":function(e,t,n){"use strict";n(137);var a=n(4),r=n(17),i=n.n(r),o=n(128),c=n.n(o),s=n(126),l=n(127),u=n(129),d=n(125),f={"direction":"horizontal"};t.a=function Space(e){var t,n=Object(u.a)(f,e),r=n.direction,o=n.onClick;return Object(l.a)(n,Object(d.jsx)(s.d,{"className":c()("adm-space",(t={},Object(a.a)(t,"".concat("adm-space","-wrap"),n.wrap),Object(a.a)(t,"".concat("adm-space","-block"),n.block),Object(a.a)(t,"".concat("adm-space","-").concat(r),!0),Object(a.a)(t,"".concat("adm-space","-align-").concat(n.align),!!n.align),Object(a.a)(t,"".concat("adm-space","-justify-").concat(n.justify),!!n.justify),t)),"onClick":o,"children":i.a.Children.map(n.children,(function(e){return null!=e&&Object(d.jsx)(s.d,{"className":"".concat("adm-space","-item"),"children":e})}))}))}},"154":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"LoremIpsum",{"enumerable":!0,"get":function get(){return o.default}}),t.loremIpsum=void 0;var a=n(146),r=n(155),i=n(147),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(156));t.loremIpsum=function loremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.count,n=void 0===t?1:t,c=e.format,s=void 0===c?a.FORMAT_PLAIN:c,l=e.paragraphLowerBound,u=void 0===l?3:l,d=e.paragraphUpperBound,f=void 0===d?7:d,b=e.random,m=e.sentenceLowerBound,p=void 0===m?5:m,j=e.sentenceUpperBound,h=void 0===j?15:j,O=e.units,v=void 0===O?r.UNIT_SENTENCES:O,g=e.words,k=void 0===g?i.WORDS:g,y=e.suffix,x=void 0===y?"":y,_={"random":b,"sentencesPerParagraph":{"max":f,"min":u},"words":k,"wordsPerSentence":{"max":h,"min":p}},P=new o.default(_,s,x);switch(v){case r.UNIT_PARAGRAPHS:case r.UNIT_PARAGRAPH:return P.generateParagraphs(n);case r.UNIT_SENTENCES:case r.UNIT_SENTENCE:return P.generateSentences(n);case r.UNIT_WORDS:case r.UNIT_WORD:return P.generateWords(n);default:return""}}},"155":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;t.UNIT_WORDS="words";t.UNIT_WORD="word";t.UNIT_SENTENCES="sentences";t.UNIT_SENTENCE="sentence";t.UNIT_PARAGRAPHS="paragraphs";t.UNIT_PARAGRAPH="paragraph";var a=["words","word","sentences","sentence","paragraphs","paragraph"];t.UNITS=a},"156":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=n(146),r=n(157),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(158)),o=n(148);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var c=function(){function LoremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(_classCallCheck(this,LoremIpsum),this.format=t,this.suffix=n,_defineProperty(this,"generator",void 0),-1===a.FORMATS.indexOf(t.toLowerCase()))throw new Error("".concat(t," is an invalid format. Please use ").concat(a.FORMATS.join(" or "),"."));this.generator=new i.default(e)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{"writable":!1}),e}(LoremIpsum,[{"key":"getLineEnding","value":function getLineEnding(){return this.suffix?this.suffix:!(0,o.isReactNative)()&&(0,o.isNode)()&&(0,o.isWindows)()?r.LINE_ENDINGS.WIN32:r.LINE_ENDINGS.POSIX}},{"key":"formatString","value":function formatString(e){return this.format===a.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{"key":"formatStrings","value":function formatStrings(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{"key":"generateWords","value":function generateWords(e){return this.formatString(this.generator.generateRandomWords(e))}},{"key":"generateSentences","value":function generateSentences(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{"key":"generateParagraphs","value":function generateParagraphs(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,o.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}]),LoremIpsum}();t.default=c},"157":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.LINE_ENDINGS=void 0;t.LINE_ENDINGS={"POSIX":"\n","WIN32":"\r\n"}},"158":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=n(147),r=n(148);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var i=function(){function Generator(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sentencesPerParagraph,n=void 0===t?{"max":7,"min":3}:t,r=e.wordsPerSentence,i=void 0===r?{"max":15,"min":5}:r,o=e.random,c=(e.seed,e.words),s=void 0===c?a.WORDS:c;if(_classCallCheck(this,Generator),_defineProperty(this,"sentencesPerParagraph",void 0),_defineProperty(this,"wordsPerSentence",void 0),_defineProperty(this,"random",void 0),_defineProperty(this,"words",void 0),n.min>n.max)throw new Error("Minimum number of sentences per paragraph (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));if(i.min>i.max)throw new Error("Minimum number of words per sentence (".concat(i.min,") cannot exceed maximum (").concat(i.max,")."));this.sentencesPerParagraph=n,this.words=s,this.wordsPerSentence=i,this.random=o||Math.random}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{"writable":!1}),e}(Generator,[{"key":"generateRandomInteger","value":function generateRandomInteger(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{"key":"generateRandomWords","value":function generateRandomWords(e){var t=this,n=this.wordsPerSentence,a=n.min,i=n.max,o=e||this.generateRandomInteger(a,i);return(0,r.makeArrayOfLength)(o).reduce((function(e,n){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{"key":"generateRandomSentence","value":function generateRandomSentence(e){return"".concat((0,r.capitalize)(this.generateRandomWords(e)),".")}},{"key":"generateRandomParagraph","value":function generateRandomParagraph(e){var t=this,n=this.sentencesPerParagraph,a=n.min,i=n.max,o=e||this.generateRandomInteger(a,i);return(0,r.makeArrayOfLength)(o).reduce((function(e,n){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{"key":"pluckRandomWord","value":function pluckRandomWord(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}]),Generator}();t.default=i},"159":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function capitalize(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)};t.default=a},"160":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function isNode(){return!!e.exports};t.default=a},"161":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function isReactNative(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e};t.default=a},"162":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=n(163),r=function isWindows(){var t=!1;try{t=e.platform===a.SUPPORTED_PLATFORMS.WIN32}catch(e){t=!1}return t};t.default=r}).call(this,n(45))},"163":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.SUPPORTED_PLATFORMS=void 0;t.SUPPORTED_PLATFORMS={"DARWIN":"darwin","LINUX":"linux","WIN32":"win32"}},"164":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(149));var r=function makeArrayOfStrings(e,t){return(0,a.default)(e).map((function(){return t()}))};t.default=r},"175":function(e,t,n){},"178":function(e,t,n){"use strict";n(151);var a=n(4),r=n(21),i=n(30),o=n(15),c=n(17),s=n(128),l=n.n(s),u=n(126),d=n(129),f=n(127),b=n(7);"undefined"==typeof window||"undefined"==typeof document||!window.document||window.document.createElement;var m=n(150),p=n(125),j={"color":"default","fill":"solid","block":!1,"loading":!1,"loadingIcon":Object(p.jsx)(m.a,{"color":"currentColor"}),"type":"","shape":"default","size":"middle","onTouchStart":function onTouchStart(){}},h=Object(c.forwardRef)((function(e,t){var n,s=Object(d.a)(j,e),m=Object(c.useState)(!1),h=Object(o.a)(m,2),O=h[0],v=h[1],g=Object(c.useRef)(null),k="auto"===s.loading?O:s.loading,y=s.disabled||k;Object(c.useImperativeHandle)(t,(function(){return{get"nativeElement"(){return g.current}}}));var x=function(){var e=Object(i.a)(Object(r.a)().mark((function _callee(e){var t;return Object(r.a)().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!y){n.next=2;break}return n.abrupt("return");case 2:if(s.onClick){n.next=4;break}return n.abrupt("return");case 4:if(t=s.onClick(e),!(a=t)||"object"!==Object(b.a)(a)||"function"!=typeof a.then){n.next=17;break}return n.prev=6,v(!0),n.next=10,t;case 10:v(!1),n.next=17;break;case 13:throw n.prev=13,n.t0=n.catch(6),v(!1),n.t0;case 17:case"end":return n.stop()}var a}),_callee,null,[[6,13]])})));return function handleClick(t){return e.apply(this,arguments)}}();return Object(f.a)(s,Object(p.jsx)(u.d,{"ref":g,"onClick":x,"className":l()("adm-button",s.color?"".concat("adm-button","-").concat(s.color):null,(n={},Object(a.a)(n,"".concat("adm-button","-block"),s.block),Object(a.a)(n,"".concat("adm-button","-disabled"),y),Object(a.a)(n,"".concat("adm-button","-fill-outline"),"outline"===s.fill),Object(a.a)(n,"".concat("adm-button","-fill-none"),"none"===s.fill),Object(a.a)(n,"".concat("adm-button","-mini"),"mini"===s.size),Object(a.a)(n,"".concat("adm-button","-small"),"small"===s.size),Object(a.a)(n,"".concat("adm-button","-large"),"large"===s.size),Object(a.a)(n,"".concat("adm-button","-loading"),k),n),"".concat("adm-button","-shape-").concat(s.shape)),"onTouchStart":s.onTouchStart,"onTouchEnd":s.onTouchEnd,"children":k?Object(p.jsxs)(u.d,{"className":"".concat("adm-button","-loading-wrapper"),"children":[s.loadingIcon,s.loadingText]}):s.children}))}));t.a=h},"193":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(154),r=new a.LoremIpsum({"sentencesPerParagraph":{"max":8,"min":4},"wordsPerSentence":{"max":16,"min":4}})},"195":function(e,t,n){"use strict";n(175);var a=n(19),r=n(126),i=n(17),o=n(127),c=n(129),s=n(125),l={"default":.55,"thin":.35,"thick":.75},u={"visible":!0,"destroyOnClose":!1,"forceRender":!1,"color":"black","opacity":"default","disableBodyScroll":!0,"getContainer":null,"stopPropagation":["click"]};t.a=function Mask(e){var t=Object(c.a)(u,e),n=Object(i.useMemo)((function(){var e,n=null!==(e=l[t.opacity])&&void 0!==e?e:t.opacity,a="white"===t.color?"255, 255, 255":"0, 0, 0";return"rgba(".concat(a,", ").concat(n,")")}),[t.color,t.opacity]);return Object(o.a)(t,Object(s.jsxs)(r.d,{"className":"adm-mask","style":Object(a.a)(Object(a.a)({},t.style),{},{"background":n,"zIndex":t.visible?"var(--z-index)":"-1","opacity":t.visible?"1":"0"}),"children":[t.onMaskClick&&Object(s.jsx)(r.d,{"className":"".concat("adm-mask","-aria-button"),"onClick":t.onMaskClick}),Object(s.jsx)(r.d,{"className":"".concat("adm-mask","-content"),"children":t.children})]}))}},"237":function(e,t,n){},"256":function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(15),i=n(153),o=n(178),c=(n(237),n(19)),s=n(126),l=n(128),u=n.n(l),d=n(127),f=n(129),b=n(195),m=n(125),p={"position":"bottom","visible":!1,"getContainer":function getContainer(){return document.body},"mask":!0,"stopPropagation":["click"]},j=function Popup(e){var t=Object(f.a)(p,e),n=u()("".concat("adm-popup","-body"),t.bodyClassName,"".concat("adm-popup","-body-position-").concat(t.position));return Object(d.a)(t,Object(m.jsxs)(s.d,{"className":"adm-popup","onClick":t.onClick,"style":{"opacity":t.visible?"1":"0","zIndex":t.visible?"var(--z-index)":"-1"},"children":[t.mask&&Object(m.jsx)(b.a,{"visible":t.visible,"onMaskClick":t.onMaskClick,"className":t.maskClassName,"style":t.maskStyle,"disableBodyScroll":!1,"stopPropagation":t.stopPropagation}),Object(m.jsx)(s.d,{"className":n,"style":Object(c.a)(Object(c.a)({},t.bodyStyle),{},{"transform":function percent(e){return t.visible?"translate(0, 0%)":"bottom"===t.position?"translate(0, ".concat(e,"%)"):"top"===t.position?"translate(0, -".concat(e,"%)"):"left"===t.position?"translate(-".concat(e,"%, 0)"):"right"===t.position?"translate(".concat(e,"%, 0)"):"none"}(100)}),"children":t.children})]}))},h=n(136),O=n(193),demo1=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),d=u[0],f=u[1],b=Object(a.useState)(!1),p=Object(r.a)(b,2),O=p[0],k=p[1],y=Object(a.useState)(!1),x=Object(r.a)(y,2),_=x[0],P=x[1],S=Object(a.useState)(!1),N=Object(r.a)(S,2),R=N[0],C=N[1],w=Object(a.useState)(!1),M=Object(r.a)(w,2),I=M[0],T=M[1];return Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(h.a,{"title":"弹出位置","children":Object(m.jsxs)(i.a,{"direction":"vertical","children":[Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){c(!0)},"children":"底部弹出"}),Object(m.jsx)(j,{"visible":n,"onMaskClick":function onMaskClick(){c(!1)},"children":g})]}),Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){f(!0)},"children":"顶部弹出"}),Object(m.jsx)(j,{"visible":d,"onMaskClick":function onMaskClick(){f(!1)},"position":"top","children":g})]}),Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){k(!0)},"children":"左侧弹出"}),Object(m.jsx)(j,{"visible":O,"onMaskClick":function onMaskClick(){k(!1)},"position":"left","bodyStyle":{"width":"60vw"},"children":g})]}),Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){P(!0)},"children":"右侧弹出"}),Object(m.jsx)(j,{"visible":_,"onMaskClick":function onMaskClick(){P(!1)},"position":"right","bodyStyle":{"width":"60vw"},"children":g})]})]})}),Object(m.jsx)(h.a,{"title":"自定义样式","children":Object(m.jsxs)(i.a,{"direction":"vertical","children":[Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){C(!0)},"children":"圆角的弹出层"}),Object(m.jsx)(j,{"visible":R,"onMaskClick":function onMaskClick(){C(!1)},"bodyStyle":{"borderTopLeftRadius":"8px","borderTopRightRadius":"8px","minHeight":"40vh"},"children":g})]}),Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(o.a,{"onClick":function onClick(){T(!0)},"children":"内容超长滚动"}),Object(m.jsx)(j,{"visible":I,"onMaskClick":function onMaskClick(){T(!1)},"children":Object(m.jsx)(s.d,{"style":{"height":"40vh","overflowY":"scroll","padding":"20px"},"children":v})})]})]})})]})},v=O.a.generateParagraphs(10),g=Object(m.jsx)(s.d,{"style":{"padding":"20px"},"children":O.a.generateParagraphs(1)}),demo2=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),d=u[0],f=u[1];return Object(m.jsx)(m.Fragment,{"children":Object(m.jsxs)(h.a,{"title":"多层堆叠","children":[Object(m.jsx)(o.a,{"onClick":function onClick(){c(!0)},"children":"展开第一个弹出层"}),Object(m.jsx)(j,{"visible":n,"onMaskClick":function onMaskClick(){c(!1)},"bodyStyle":{"height":"40vh"},"children":Object(m.jsx)(s.d,{"style":{"padding":"24px"},"children":Object(m.jsxs)(i.a,{"direction":"vertical","children":[Object(m.jsx)(s.d,{"children":"这是弹出层1"}),Object(m.jsx)(o.a,{"onClick":function onClick(){f(!0)},"children":"展开第二个弹出层"})]})})}),Object(m.jsx)(j,{"visible":d,"onMaskClick":function onMaskClick(){f(!1)},"bodyStyle":{"height":"20vh"},"children":Object(m.jsx)(s.d,{"style":{"padding":"24px"},"children":Object(m.jsx)(s.d,{"children":"这是弹出层2"})})})]})})};t.default=function(){return Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsx)(demo1,{}),Object(m.jsx)(demo2,{})]})}}}]);