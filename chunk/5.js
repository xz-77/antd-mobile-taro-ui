/*! For license information please see 5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{"125":function(e,t,r){"use strict";e.exports=r(145)},"126":function(e,t,r){"use strict";r.d(t,"d",(function(){return R})),r.d(t,"c",(function(){return S})),r.d(t,"b",(function(){return N})),r.d(t,"a",(function(){return x}));var n=r(17),o=r.n(n),a=r(23),i=r.n(a),u=r(43),c=r.n(u),s=r(14),f=r.n(s),l=r(31),d=r.n(l),p=r(32),v=r.n(p),m=r(146),y=r.n(m),_=r(148),h=r.n(_),g=r(150),b=r.n(g),P=r(44),O=r.n(P);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=b()(e);if(t){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var a=e.ref.current,i=o[r],u=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,i),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=i);if("scrollLeft"===r)return void(a.mpScrollLeft=i);if("scrollIntoView"===r)return void(a.mpScrollIntoView=i)}if("function"==typeof i&&r.match(/^on[A-Z]/)){var c=r.substr(2).toLowerCase(),s=i;return"taro-scroll-view-core"===t&&"scroll"===c&&(s=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),e.eventHandlers.push([c,s]),a.addEventListener(c,s)}return"string"==typeof i||"number"==typeof i?(a.setAttribute(r,i),void(a[r]=i)):"boolean"==typeof i?i?(a[r]=!0,a.setAttribute(r,i)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=i)}if("string"==typeof i)return void a.setAttribute(r,i);if(!i)return void a.removeAttribute(r);if(n)if("string"==typeof u)a.style.cssText="";else for(var f in u)updateStyle(a,f,"");for(var l in i)updateStyle(a,l,i[l])}else a.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),i=[];return n.forEach((function(e){a.indexOf(e)>-1?(i.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&i.push(e)})),(i=[].concat(O()(i),O()(a))).join(" ")}(a,n,o):i}var w=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return d()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return v()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===f()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=c()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,a={"ref":this.ref};return o&&(a.dangerouslySetInnerHTML=o),Object(n.createElement)(e,a,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};w("taro-input-core"),o.a.createElement;var R=w("taro-view-core"),S=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),N=(w("taro-button-core"),w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core"),w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core"),w("taro-radio-group-core"),w("taro-slider-core"),w("taro-switch-core"),w("taro-cover-image-core"),w("taro-textarea-core"),w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core")),x=(w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"));w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),n.Fragment,w("taro-custom-wrapper-core")},"127":function(e,t,r){"use strict";r.d(t,"a",(function(){return withNativeProps}));var n=r(17),o=r.n(n),a=r(128),i=r.n(a);function withNativeProps(e,t){var r=Object.assign({},t.props);for(var n in e.className&&(r.className=i()(t.props.className,e.className)),e.style&&(r.style=Object.assign(Object.assign({},r.style),e.style)),void 0!==e.tabIndex&&(r.tabIndex=e.tabIndex),e)e.hasOwnProperty(n)&&(n.startsWith("data-")||n.startsWith("aria-"))&&(r[n]=e[n]);return o.a.cloneElement(t,r)}},"128":function(e,t,r){var n,o=r(14).default;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=classNames.apply(null,r);i&&e.push(i)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var u in r)a.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===o(r(134))&&r(134)?void 0===(n=function(){return classNames}.apply(t,[]))||(e.exports=n):window.classNames=classNames}()},"134":function(e,t){(function(t){e.exports=t}).call(this,{})},"139":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;t.FORMAT_HTML="html";t.FORMAT_PLAIN="plain";var n=["html","plain"];t.FORMATS=n},"140":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.WORDS=void 0;t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},"141":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"capitalize",{"enumerable":!0,"get":function get(){return n.default}}),Object.defineProperty(t,"isNode",{"enumerable":!0,"get":function get(){return o.default}}),Object.defineProperty(t,"isReactNative",{"enumerable":!0,"get":function get(){return a.default}}),Object.defineProperty(t,"isWindows",{"enumerable":!0,"get":function get(){return i.default}}),Object.defineProperty(t,"makeArrayOfLength",{"enumerable":!0,"get":function get(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{"enumerable":!0,"get":function get(){return c.default}});var n=_interopRequireDefault(r(158)),o=_interopRequireDefault(r(159)),a=_interopRequireDefault(r(160)),i=_interopRequireDefault(r(161)),u=_interopRequireDefault(r(142)),c=_interopRequireDefault(r(163));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}},"142":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function makeArrayOfLength(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))};t.default=n},"145":function(e,t,r){"use strict";r(35);var n=r(17),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,a={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{"$$typeof":o,"type":e,"key":s,"ref":f,"props":a,"_owner":i.current}}t.jsx=q,t.jsxs=q},"146":function(e,t,r){var n=r(147);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"147":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"148":function(e,t,r){var n=r(14).default,o=r(149);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"153":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"LoremIpsum",{"enumerable":!0,"get":function get(){return i.default}}),t.loremIpsum=void 0;var n=r(139),o=r(154),a=r(140),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(155));t.loremIpsum=function loremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.count,r=void 0===t?1:t,u=e.format,c=void 0===u?n.FORMAT_PLAIN:u,s=e.paragraphLowerBound,f=void 0===s?3:s,l=e.paragraphUpperBound,d=void 0===l?7:l,p=e.random,v=e.sentenceLowerBound,m=void 0===v?5:v,y=e.sentenceUpperBound,_=void 0===y?15:y,h=e.units,g=void 0===h?o.UNIT_SENTENCES:h,b=e.words,P=void 0===b?a.WORDS:b,O=e.suffix,w=void 0===O?"":O,R={"random":p,"sentencesPerParagraph":{"max":d,"min":f},"words":P,"wordsPerSentence":{"max":_,"min":m}},S=new i.default(R,c,w);switch(g){case o.UNIT_PARAGRAPHS:case o.UNIT_PARAGRAPH:return S.generateParagraphs(r);case o.UNIT_SENTENCES:case o.UNIT_SENTENCE:return S.generateSentences(r);case o.UNIT_WORDS:case o.UNIT_WORD:return S.generateWords(r);default:return""}}},"154":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;t.UNIT_WORDS="words";t.UNIT_WORD="word";t.UNIT_SENTENCES="sentences";t.UNIT_SENTENCE="sentence";t.UNIT_PARAGRAPHS="paragraphs";t.UNIT_PARAGRAPH="paragraph";var n=["words","word","sentences","sentence","paragraphs","paragraph"];t.UNITS=n},"155":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(139),o=r(156),a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(157)),i=r(141);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var u=function(){function LoremIpsum(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.FORMAT_PLAIN,r=arguments.length>2?arguments[2]:void 0;if(_classCallCheck(this,LoremIpsum),this.format=t,this.suffix=r,_defineProperty(this,"generator",void 0),-1===n.FORMATS.indexOf(t.toLowerCase()))throw new Error("".concat(t," is an invalid format. Please use ").concat(n.FORMATS.join(" or "),"."));this.generator=new a.default(e)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{"writable":!1}),e}(LoremIpsum,[{"key":"getLineEnding","value":function getLineEnding(){return this.suffix?this.suffix:!(0,i.isReactNative)()&&(0,i.isNode)()&&(0,i.isWindows)()?o.LINE_ENDINGS.WIN32:o.LINE_ENDINGS.POSIX}},{"key":"formatString","value":function formatString(e){return this.format===n.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{"key":"formatStrings","value":function formatStrings(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{"key":"generateWords","value":function generateWords(e){return this.formatString(this.generator.generateRandomWords(e))}},{"key":"generateSentences","value":function generateSentences(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{"key":"generateParagraphs","value":function generateParagraphs(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,i.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}]),LoremIpsum}();t.default=u},"156":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.LINE_ENDINGS=void 0;t.LINE_ENDINGS={"POSIX":"\n","WIN32":"\r\n"}},"157":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(140),o=r(141);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var a=function(){function Generator(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sentencesPerParagraph,r=void 0===t?{"max":7,"min":3}:t,o=e.wordsPerSentence,a=void 0===o?{"max":15,"min":5}:o,i=e.random,u=(e.seed,e.words),c=void 0===u?n.WORDS:u;if(_classCallCheck(this,Generator),_defineProperty(this,"sentencesPerParagraph",void 0),_defineProperty(this,"wordsPerSentence",void 0),_defineProperty(this,"random",void 0),_defineProperty(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(a.min>a.max)throw new Error("Minimum number of words per sentence (".concat(a.min,") cannot exceed maximum (").concat(a.max,")."));this.sentencesPerParagraph=r,this.words=c,this.wordsPerSentence=a,this.random=i||Math.random}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{"writable":!1}),e}(Generator,[{"key":"generateRandomInteger","value":function generateRandomInteger(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{"key":"generateRandomWords","value":function generateRandomWords(e){var t=this,r=this.wordsPerSentence,n=r.min,a=r.max,i=e||this.generateRandomInteger(n,a);return(0,o.makeArrayOfLength)(i).reduce((function(e,r){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{"key":"generateRandomSentence","value":function generateRandomSentence(e){return"".concat((0,o.capitalize)(this.generateRandomWords(e)),".")}},{"key":"generateRandomParagraph","value":function generateRandomParagraph(e){var t=this,r=this.sentencesPerParagraph,n=r.min,a=r.max,i=e||this.generateRandomInteger(n,a);return(0,o.makeArrayOfLength)(i).reduce((function(e,r){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{"key":"pluckRandomWord","value":function pluckRandomWord(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}]),Generator}();t.default=a},"158":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function capitalize(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)};t.default=n},"159":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function isNode(){return!!e.exports};t.default=n},"160":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function isReactNative(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e};t.default=n},"161":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=r(162),o=function isWindows(){var t=!1;try{t=e.platform===n.SUPPORTED_PLATFORMS.WIN32}catch(e){t=!1}return t};t.default=o}).call(this,r(45))},"162":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.SUPPORTED_PLATFORMS=void 0;t.SUPPORTED_PLATFORMS={"DARWIN":"darwin","LINUX":"linux","WIN32":"win32"}},"163":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(142));var o=function makeArrayOfStrings(e,t){return(0,n.default)(e).map((function(){return t()}))};t.default=o}}]);