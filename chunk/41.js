(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"82":function(t,i,o){"use strict";o.r(i),o.d(i,"taro_cover_image_core",(function(){return n}));var e=o(29),n=function(){function r(t){Object(e.g)(this,t),this.onLoad=Object(e.c)(this,"load",7),this.onError=Object(e.c)(this,"error",7),this.nativeProps={}}return r.prototype.imageOnLoad=function(){var t=this.imgRef,i=t.width,o=t.height;this.onLoad.emit({"width":i,"height":o})},r.prototype.imageOnError=function(){this.onError.emit()},r.prototype.render=function(){var t=this,i=this,o=i.src,n=i.imageOnLoad,s=i.imageOnError,c=i.nativeProps;return Object(e.e)("img",Object.assign({"ref":function(i){return t.imgRef=i},"src":o,"onLoad":n.bind(this),"onError":s.bind(this)},c))},r}();n.style="taro-cover-image-core{overflow:hidden;width:320px;height:240px}"}}]);