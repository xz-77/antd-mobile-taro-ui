(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"160":function(e,t,r){},"167":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(159),a=(r(18),r(160),r(158)),i=function DemoBlock(e){return Object(a.jsxs)(n.d,{"className":"demoBlock","children":[Object(a.jsx)(n.d,{"className":"title","children":e.title}),Object(a.jsx)(n.d,{"className":"main","style":{"padding":e.padding,"background":e.background},"children":e.children})]})};i.defaultProps={"padding":"12px 12px","background":"var(--adm-color-background)"}},"168":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;t.FORMAT_HTML="html";t.FORMAT_PLAIN="plain";var n=["html","plain"];t.FORMATS=n},"169":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.WORDS=void 0;t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},"170":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"capitalize",{"enumerable":!0,"get":function get(){return n.default}}),Object.defineProperty(t,"isNode",{"enumerable":!0,"get":function get(){return a.default}}),Object.defineProperty(t,"isReactNative",{"enumerable":!0,"get":function get(){return i.default}}),Object.defineProperty(t,"isWindows",{"enumerable":!0,"get":function get(){return o.default}}),Object.defineProperty(t,"makeArrayOfLength",{"enumerable":!0,"get":function get(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{"enumerable":!0,"get":function get(){return c.default}});var n=_interopRequireDefault(r(178)),a=_interopRequireDefault(r(179)),i=_interopRequireDefault(r(180)),o=_interopRequireDefault(r(181)),u=_interopRequireDefault(r(171)),c=_interopRequireDefault(r(183));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}},"171":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function makeArrayOfLength(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))};t.default=n},"173":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"LoremIpsum",{"enumerable":!0,"get":function get(){return o.default}}),t.loremIpsum=void 0;var n=r(168),a=r(174),i=r(169),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(175));t.loremIpsum=function loremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.count,r=void 0===t?1:t,u=e.format,c=void 0===u?n.FORMAT_PLAIN:u,s=e.paragraphLowerBound,d=void 0===s?3:s,l=e.paragraphUpperBound,f=void 0===l?7:l,p=e.random,m=e.sentenceLowerBound,g=void 0===m?5:m,v=e.sentenceUpperBound,h=void 0===v?15:v,_=e.units,b=void 0===_?a.UNIT_SENTENCES:_,P=e.words,O=void 0===P?i.WORDS:P,j=e.suffix,R=void 0===j?"":j,y={"random":p,"sentencesPerParagraph":{"max":f,"min":d},"words":O,"wordsPerSentence":{"max":h,"min":g}},N=new o.default(y,c,R);switch(b){case a.UNIT_PARAGRAPHS:case a.UNIT_PARAGRAPH:return N.generateParagraphs(r);case a.UNIT_SENTENCES:case a.UNIT_SENTENCE:return N.generateSentences(r);case a.UNIT_WORDS:case a.UNIT_WORD:return N.generateWords(r);default:return""}}},"174":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;t.UNIT_WORDS="words";t.UNIT_WORD="word";t.UNIT_SENTENCES="sentences";t.UNIT_SENTENCE="sentence";t.UNIT_PARAGRAPHS="paragraphs";t.UNIT_PARAGRAPH="paragraph";var n=["words","word","sentences","sentence","paragraphs","paragraph"];t.UNITS=n},"175":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(168),a=r(176),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(177)),o=r(170);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var u=function(){function LoremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.FORMAT_PLAIN,r=arguments.length>2?arguments[2]:void 0;if(_classCallCheck(this,LoremIpsum),this.format=t,this.suffix=r,_defineProperty(this,"generator",void 0),-1===n.FORMATS.indexOf(t.toLowerCase()))throw new Error("".concat(t," is an invalid format. Please use ").concat(n.FORMATS.join(" or "),"."));this.generator=new i.default(e)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{"writable":!1}),e}(LoremIpsum,[{"key":"getLineEnding","value":function getLineEnding(){return this.suffix?this.suffix:!(0,o.isReactNative)()&&(0,o.isNode)()&&(0,o.isWindows)()?a.LINE_ENDINGS.WIN32:a.LINE_ENDINGS.POSIX}},{"key":"formatString","value":function formatString(e){return this.format===n.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{"key":"formatStrings","value":function formatStrings(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{"key":"generateWords","value":function generateWords(e){return this.formatString(this.generator.generateRandomWords(e))}},{"key":"generateSentences","value":function generateSentences(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{"key":"generateParagraphs","value":function generateParagraphs(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,o.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}]),LoremIpsum}();t.default=u},"176":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.LINE_ENDINGS=void 0;t.LINE_ENDINGS={"POSIX":"\n","WIN32":"\r\n"}},"177":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(169),a=r(170);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var i=function(){function Generator(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sentencesPerParagraph,r=void 0===t?{"max":7,"min":3}:t,a=e.wordsPerSentence,i=void 0===a?{"max":15,"min":5}:a,o=e.random,u=(e.seed,e.words),c=void 0===u?n.WORDS:u;if(_classCallCheck(this,Generator),_defineProperty(this,"sentencesPerParagraph",void 0),_defineProperty(this,"wordsPerSentence",void 0),_defineProperty(this,"random",void 0),_defineProperty(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(i.min>i.max)throw new Error("Minimum number of words per sentence (".concat(i.min,") cannot exceed maximum (").concat(i.max,")."));this.sentencesPerParagraph=r,this.words=c,this.wordsPerSentence=i,this.random=o||Math.random}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{"writable":!1}),e}(Generator,[{"key":"generateRandomInteger","value":function generateRandomInteger(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{"key":"generateRandomWords","value":function generateRandomWords(e){var t=this,r=this.wordsPerSentence,n=r.min,i=r.max,o=e||this.generateRandomInteger(n,i);return(0,a.makeArrayOfLength)(o).reduce((function(e,r){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{"key":"generateRandomSentence","value":function generateRandomSentence(e){return"".concat((0,a.capitalize)(this.generateRandomWords(e)),".")}},{"key":"generateRandomParagraph","value":function generateRandomParagraph(e){var t=this,r=this.sentencesPerParagraph,n=r.min,i=r.max,o=e||this.generateRandomInteger(n,i);return(0,a.makeArrayOfLength)(o).reduce((function(e,r){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{"key":"pluckRandomWord","value":function pluckRandomWord(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}]),Generator}();t.default=i},"178":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function capitalize(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)};t.default=n},"179":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function isNode(){return!!e.exports};t.default=n},"180":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function isReactNative(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e};t.default=n},"181":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(182),a=function isWindows(){var t=!1;try{t=e.platform===n.SUPPORTED_PLATFORMS.WIN32}catch(e){t=!1}return t};t.default=a}).call(this,r(36))},"182":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.SUPPORTED_PLATFORMS=void 0;t.SUPPORTED_PLATFORMS={"DARWIN":"darwin","LINUX":"linux","WIN32":"win32"}},"183":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(171));var a=function makeArrayOfStrings(e,t){return(0,n.default)(e).map((function(){return t()}))};t.default=a},"195":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(173),a=new n.LoremIpsum({"sentencesPerParagraph":{"max":8,"min":4},"wordsPerSentence":{"max":16,"min":4}})},"306":function(e,t,r){"use strict";r.r(t);r(18);var n=r(159),a=r(162),i=r(195),o=r(167),u=r(186),c=r(158),s=i.a.generateWords(20),demo1=function(){return Object(c.jsxs)(c.Fragment,{"children":[Object(c.jsx)(o.a,{"title":"通告栏语义","padding":"0","background":"transparent","children":Object(c.jsxs)(a.p,{"block":!0,"direction":"vertical","children":[Object(c.jsx)(a.l,{"content":"默认","color":"default"}),Object(c.jsx)(a.l,{"content":"警告","color":"alert"}),Object(c.jsx)(a.l,{"content":"错误","color":"error"}),Object(c.jsx)(a.l,{"content":"信息","color":"info"})]})}),Object(c.jsx)(o.a,{"title":"可关闭","padding":"0","children":Object(c.jsx)(a.l,{"content":"这条通知可以关闭","color":"alert","closeable":!0})}),Object(c.jsx)(o.a,{"title":"超长滚动","padding":"0","children":Object(c.jsx)(a.l,{"content":s,"color":"alert"})}),Object(c.jsx)(o.a,{"title":"自定义","padding":"0","background":"transparent","children":Object(c.jsxs)(a.p,{"block":!0,"direction":"vertical","children":[Object(c.jsx)(a.l,{"extra":Object(c.jsx)(u.b,{"style":{"fontSize":18}}),"icon":Object(c.jsx)(u.b,{}),"content":"自定义图标"}),Object(c.jsx)(a.l,{"extra":Object(c.jsxs)(a.p,{"style":{"--gap":"12px"},"children":[Object(c.jsx)(n.c,{"children":"查看详情"}),Object(c.jsx)(n.c,{"children":"关闭"})]}),"content":"自定义右侧功能区","color":"alert"})]})})]})};t.default=function(){return Object(c.jsx)(c.Fragment,{"children":Object(c.jsx)(demo1,{})})}}}]);