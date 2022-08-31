/*! For license information please see 31.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"105":function(t,i,n){"use strict";n.r(i),n.d(i,"taro_picker_core",(function(){return c})),n.d(i,"taro_picker_group",(function(){return s}));var a=n(29),o=n(130),__spreadArray=function(t,i){for(var n=0,a=i.length,o=t.length;n<a;n++,o++)t[o]=i[n];return t};function getTimeRange(t,i){for(var n=[],a=t;a<=i;a++)n.push((a<10?"0":"")+a);return n}var u=__spreadArray(__spreadArray(["20","21","22","23"],getTimeRange(0,23)),["00","01","02","03"]),h=__spreadArray(__spreadArray(["56","57","58","59"],getTimeRange(0,59)),["00","01","02","03"]);function verifyValue(t,i){return!isNaN(+t)&&t>=0&&t<i.length}function verifyTime(t){if(!/^\d{1,2}:\d{1,2}$/.test(t))return!1;var i=t.split(":").map((function(t){return+t}));return!(i[0]<0||i[0]>23)&&!(i[1]<0||i[1]>59)}function compareTime(t,i){var n=t.split(":").map((function(t){return+t})),a=i.split(":").map((function(t){return+t}));return n[0]<a[0]||n[0]===a[0]&&n[1]<=a[1]}function verifyDate(t){if(!t)return!1;var i=new Date(t.replace(/-/g,"/"));return!isNaN(i.getMonth())&&i}function formatValue(t){return Array.isArray(t)?t.map((function(t){return String(t)})):t}function getDateRange(t,i){for(var n=[],a=t;a<=i;a++)n.push(a);return n}function getYearRange(t,i){return getDateRange(t,i)}function getMonthRange(t,i,n){var a=1,o=12;return t.getFullYear()===n&&(a=t.getMonth()+1),i.getFullYear()===n&&(o=i.getMonth()+1),getDateRange(a,o)}function getDayRange(t,i,n,a){var o=1,u=function getMaxDay(t,i){return 4===i||6===i||9===i||11===i?30:2===i?t%4==0&&t%100!=0||t%400==0?29:28:31}(n,a);return t.getFullYear()===n&&t.getMonth()+1===a&&(o=t.getDate()),i.getFullYear()===n&&i.getMonth()+1===a&&(u=i.getDate()),getDateRange(o,u)}var c=function(){function e(t){var i=this;Object(a.g)(this,t),this.onChange=Object(a.c)(this,"change",7),this.onColumnChange=Object(a.c)(this,"columnchange",7),this.onCancel=Object(a.c)(this,"cancel",7),this.index=[],this.mode="selector",this.disabled=!1,this.range=[],this.start="",this.end="",this.fields="day",this.name="",this.pickerValue=[],this.height=[],this.hidden=!0,this.fadeOut=!1,this.isWillLoadCalled=!1,this.showPicker=function(){i.disabled||(i.height=i.getHeightByIndex(),i.hidden=!1)},this.getHeightByIndex=function(){return i.index.map((function(t){var n=0;return"time"===i.mode&&(n=136),102-34*t-n}))},this.hidePicker=function(){i.fadeOut=!0,setTimeout((function(){i.hidden=!0,i.fadeOut=!1}),350)},this.handleChange=function(){i.hidePicker(),i.index=i.height.map((function(t){return(102-t)/34}));var t=i.index.length&&"selector"!==i.mode?i.index:i.index[0];if("time"===i.mode){var n=[u.slice(),h.slice()],a=i.index.map((function(t,i){return n[i][t]}));i.index=a.map((function(t){return parseInt(t)})),t=a.join(":")}if("date"===i.mode){var o=i.pickerDate,c=o._start,s=o._end,l=o._updateValue,d=l[0],p=l[1],g=getYearRange(c.getFullYear(),s.getFullYear()),f=getMonthRange(c,s,d),m=getDayRange(c,s,d,p),v=g[i.index[0]],y=f[i.index[1]],b=m[i.index[2]];t=(t="year"===i.fields?[v]:"month"===i.fields?[v,y]:[v,y,b]).map((function(t){return t<10?"0"+t:t})).join("-")}i.pickerValue=t,i.onChange.emit({"value":t})},this.handleCancel=function(){i.hidePicker(),i.onCancel.emit()},this.updateHeight=function(t,n,a){void 0===a&&(a=!1);var o=__spreadArray([],i.height);if(o[n]=t,i.height=o,a){var c=i,s=c.start,l=c.end;if(verifyTime(s)||(s="00:00"),verifyTime(l)||(l="23:59"),!compareTime(s,l))return;var d=[u.slice(),h.slice()],p=i.height.map((function(t){return(102-t)/34})).map((function(t,i){return d[i][t]})).join(":");if(compareTime(s,p)){if(!compareTime(p,l)){var g=l.split(":").map((function(t){return 102-34*(+t+4)}));requestAnimationFrame((function(){return i.height=g}))}}else{var f=s.split(":").map((function(t){return 102-34*(+t+4)}));requestAnimationFrame((function(){return i.height=f}))}}},this.handleColumnChange=function(t,n){i.onColumnChange.emit({"column":Number(n),"value":(102-t)/34})},this.updateDay=function(t,n){var a=i.pickerDate,o=a._start,u=a._end,h=a._updateValue;h[n]=t;var c=h[0],s=h[1],l=h[2];if(0===n){var d=getMonthRange(o,u,c),p=d[d.length-1],g=d[0];s>p&&(h[1]=p),s<g&&(h[1]=g);var f=102-34*d.indexOf(h[1]);i.updateDay(h[1],1),i.updateHeight(f,"1")}else if(1===n){var m=getDayRange(o,u,c,s);p=m[m.length-1],g=m[0];l>p&&(h[2]=p),l<g&&(h[2]=g);f=102-34*m.indexOf(h[2]);i.updateDay(h[2],2),i.updateHeight(f,"2")}},this.getSelector=function(){return Object(a.e)("taro-picker-group",{"range":i.range,"rangeKey":i.rangeKey,"height":i.height[0],"updateHeight":i.updateHeight,"columnId":"0"})},this.getMultiSelector=function(){return i.range.map((function(t,n){return Object(a.e)("taro-picker-group",{"range":t,"rangeKey":i.rangeKey,"height":i.height[n],"updateHeight":i.updateHeight,"onColumnChange":i.handleColumnChange,"columnId":String(n)})}))},this.getTimeSelector=function(){var t=u.slice(),n=h.slice();return[Object(a.e)("taro-picker-group",{"mode":"time","range":t,"height":i.height[0],"updateHeight":i.updateHeight,"columnId":"0"}),Object(a.e)("taro-picker-group",{"mode":"time","range":n,"height":i.height[1],"updateHeight":i.updateHeight,"columnId":"1"})]},this.getDateSelector=function(){var t=i,n=t.fields,o=t.height,u=i.pickerDate,h=u._start,c=u._end,s=u._updateValue,l=s[0],d=s[1],p=getYearRange(h.getFullYear(),c.getFullYear()).map((function(t){return t+"年"})),g=getMonthRange(h,c,l).map((function(t){return(t<10?"0"+t:t)+"月"})),f=getDayRange(h,c,l,d).map((function(t){return(t<10?"0"+t:t)+"日"})),m=[Object(a.e)("taro-picker-group",{"mode":"date","range":p,"height":o[0],"updateDay":i.updateDay,"updateHeight":i.updateHeight,"columnId":"0"})];return"month"!==n&&"day"!==n||m.push(Object(a.e)("taro-picker-group",{"mode":"date","range":g,"height":o[1],"updateDay":i.updateDay,"updateHeight":i.updateHeight,"columnId":"1"})),"day"===n&&m.push(Object(a.e)("taro-picker-group",{"mode":"date","range":f,"height":o[2],"updateDay":i.updateDay,"updateHeight":i.updateHeight,"columnId":"2"})),m}}return e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0,this.handleProps()},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.pickerValue},"set":function(i){return t.value=i},"configurable":!0}),this.overlay&&document.body.appendChild(this.overlay)},e.prototype.disconnectedCallback=function(){var t;this.overlay&&(null===(t=this.overlay.parentNode)||void 0===t||t.removeChild(this.overlay))},e.prototype.onPropsChange=function(){this.isWillLoadCalled&&this.handleProps()},e.prototype.handleProps=function(){var t=this,i=this,n=i.mode,a=i.start,o=i.end;if("selector"===n){var u=this.value;this.index=[verifyValue(u,this.range)?Math.floor(u):0]}else if("multiSelector"===n){var h=this.value;this.index=[],this.range.forEach((function(i,n){var a=null==h?void 0:h[n],o=verifyValue(a,i)?Math.floor(a):0;t.index.push(o)}))}else if("time"===n){verifyTime(u=this.value)||(console.warn("time picker value illegal"),u="0:0");var c=u.split(":").map((function(t){return+t}));this.index=c}else if("date"===n){var s=verifyDate(u=this.value)||new Date((new Date).setHours(0,0,0,0)),l=verifyDate(a)||new Date("1970/01/01"),d=verifyDate(o)||new Date("2999/01/01");if(!(s>=l&&s<=d))throw new Error("Date Interval Error");var p=s.getFullYear(),g=s.getMonth()+1,f=s.getDate(),m=getYearRange(l.getFullYear(),d.getFullYear()),v=getMonthRange(l,d,p),y=getDayRange(l,d,p,g);this.index=[m.indexOf(p),v.indexOf(g),y.indexOf(f)],this.pickerDate&&this.pickerDate._value.getTime()===s.getTime()&&this.pickerDate._start.getTime()===l.getTime()&&this.pickerDate._end.getTime()===d.getTime()||(this.pickerDate={"_value":s,"_start":l,"_end":d,"_updateValue":[p,g,f]})}if(this.height=this.getHeightByIndex(),this.pickerValue=this.value,"date"===n){var b=this.pickerValue;"month"===this.fields?this.pickerValue=b.split("-").slice(0,2).join("-"):"year"===this.fields&&(this.pickerValue=b.split("-")[0])}},e.prototype.render=function(){var t,i=this,n=this,u=n.name,h=n.mode,c=n.fadeOut,s=n.hidden;switch(h){case"multiSelector":t=this.getMultiSelector();break;case"time":t=this.getTimeSelector();break;case"date":t=this.getDateSelector();break;default:t=this.getSelector()}var l=Object(o.c)("weui-mask","weui-animate-fade-in",{"weui-animate-fade-out":c}),d=Object(o.c)("weui-picker","weui-animate-slide-up",{"weui-animate-slide-down":c}),p=s?{"display":"none"}:{};return Object(a.e)(a.a,null,Object(a.e)("div",{"onClick":this.showPicker},Object(a.e)("slot",null),Object(a.e)("input",{"type":"hidden","name":u,"value":formatValue(this.pickerValue)})),Object(a.e)("div",{"class":"weui-picker__overlay","style":p,"ref":function(t){i.overlay=t}},Object(a.e)("div",{"class":l,"onClick":this.handleCancel}),Object(a.e)("div",{"class":d},Object(a.e)("div",{"class":"weui-picker__hd"},Object(a.e)("div",{"class":"weui-picker__action","onClick":this.handleCancel},"取消"),Object(a.e)("div",{"class":"weui-picker__action","onClick":this.handleChange},"确定")),Object(a.e)("div",{"class":"weui-picker__bd"},t),Object(a.e)("input",{"type":"hidden","name":u,"value":formatValue(this.pickerValue)}))))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(a.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"mode":["onPropsChange"],"value":["onPropsChange"],"range":["onPropsChange"],"start":["onPropsChange"],"end":["onPropsChange"]}},"enumerable":!1,"configurable":!0}),e}();c.style=".weui-picker,.weui-picker__hd{font-size:12px}";var s=function(){function e(t){Object(a.g)(this,t),this.range=[]}return e.prototype.getPosition=function(){var t=this.touchEnd?.3:0,i="translate3d(0, "+this.height+"px, 0)",n="transform "+t+"s";return{"transform":i,"-webkit-transform":i,"transition":n,"-webkit-transition":n}},e.prototype.formulaUnlimitedScroll=function(t,i,n){var a=this,o=this,u=o.height,h=o.updateHeight,c=o.columnId,s="up"===n?1:-1;this.touchEnd=!1,h(-t*s*34+u,c),requestAnimationFrame((function(){a.touchEnd=!0;var n=Math.round(i/-34)+t*s;h(102-34*n,c,!0)}))},e.prototype.handleMoveStart=function(t){this.startY=t,this.preY=t,this.hadMove=!1},e.prototype.handleMoving=function(t){var i=t,n=i-this.preY;this.preY=i,this.touchEnd=!1,Math.abs(i-this.startY)>10&&(this.hadMove=!0);var a=this.height+n;"time"===this.mode&&("0"===this.columnId?(a>0&&(a=-816+n),a<-850&&(a=-34+n)):"1"===this.columnId&&(a>0&&(a=-2040+n),a<-2074&&(a=-34+n))),this.updateHeight(a,this.columnId)},e.prototype.handleMoveEnd=function(t){var i,n=this,a=n.mode,o=n.range,u=n.height,h=n.updateHeight,c=n.onColumnChange,s=n.columnId,l=-34*(o.length-1),d=t;if(this.touchEnd=!0,this.hadMove)i=u-102;else if(i=u-102-(d-(window.innerHeight-119)),"time"===a)if("0"===s){if(i>-85)return this.formulaUnlimitedScroll(24,i,"up");if(i<-969)return this.formulaUnlimitedScroll(24,i,"down")}else if("1"===s){if(i>-85)return this.formulaUnlimitedScroll(60,i,"up");if(i<-2193)return this.formulaUnlimitedScroll(60,i,"down")}i>0&&(i=0),i<l&&(i=l);var p=Math.round(i/-34),g=102-34*p;"date"===this.mode&&("0"===this.columnId&&this.updateDay(+this.range[p].replace(/[^0-9]/gi,""),0),"1"===this.columnId&&this.updateDay(+this.range[p].replace(/[^0-9]/gi,""),1),"2"===this.columnId&&this.updateDay(+this.range[p].replace(/[^0-9]/gi,""),2)),h(g,s,"time"===a),c&&c(g,s)},e.prototype.onMouseDown=function(t){this.isMove=!0,this.handleMoveStart(t.clientY)},e.prototype.onMouseMove=function(t){t.preventDefault(),this.isMove&&this.handleMoving(t.clientY)},e.prototype.onMouseMoveEnd=function(t){this.isMove&&(this.isMove=!1,this.handleMoveEnd(t.clientY))},e.prototype.onTouchStart=function(t){this.handleMoveStart(t.changedTouches[0].clientY)},e.prototype.onTouchMove=function(t){t.preventDefault(),this.handleMoving(t.changedTouches[0].clientY)},e.prototype.onTouchEnd=function(t){this.handleMoveEnd(t.changedTouches[0].clientY)},e.prototype.render=function(){var t=this.range,i=this.rangeKey,n=t.map((function(t){var n=i?t[i]:t;return Object(a.e)("div",{"class":"weui-picker__item"},n)}));return Object(a.e)(a.a,{"class":"weui-picker__group"},Object(a.e)("div",{"class":"weui-picker__mask"}),Object(a.e)("div",{"class":"weui-picker__indicator"}),Object(a.e)("div",{"class":"weui-picker__content","style":this.getPosition()},n))},e}()},"130":function(t,i,n){"use strict";(function(t){n.d(i,"a",(function(){return createCommonjsModule})),n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"d",(function(){return getDefaultExportFromCjs}));var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,i,n){return t(n={"path":i,"exports":{},"require":function(t,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var o=createCommonjsModule((function(t){!function(){var i={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var u=r.apply(null,a);u&&t.push(u)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var h in a)i.call(a,h)&&a[h]&&t.push(h);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))}).call(this,n(42))}}]);