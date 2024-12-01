// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=t();function o(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,a=Object.prototype.hasOwnProperty;function c(r,e){return null!=r&&a.call(r,e)}var u,f="function"==typeof Symbol?Symbol:void 0,l="function"==typeof f?f.toStringTag:"",s=o()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[l],e=c(r,l);try{r[l]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[l]=t:delete r[l],n}:function(r){return i.call(r)};function p(r){return"[object Arguments]"===s(r)}u=function(){return p(arguments)}();var g=u,y="function"==typeof Object.defineProperty?Object.defineProperty:null,b=Object.defineProperty;function d(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function v(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(o):h(o)+r,n&&(r="-"+r)),r}var w=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function j(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=v(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=v(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===m.call(r.specifier)?m.call(t):w.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var O=Math.abs,S=String.prototype.toLowerCase,_=String.prototype.toUpperCase,E=String.prototype.replace,k=/e\+(\d)$/,T=/e-(\d)$/,x=/^(\d+)$/,I=/^(\d+)e/,P=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function F(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,A,"e"),t=E.call(t,P,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,k,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,x,"$1."),t=E.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_.call(r.specifier)?_.call(t):S.call(t)}function $(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var C=String.fromCharCode,N=Array.isArray;function B(r){return r!=r}function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,o,i,a,c,u,f,l,s,p,g;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,B(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!B(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+$(g):$(g)+l)),a+=n.arg||"",c+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function X(r){var e,t,n,o;for(t=[],o=0,n=G.exec(r);n;)(e=r.slice(o,G.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=G.lastIndex,n=G.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Z(r){var e,t;if("string"!=typeof r)throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[X(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return R.apply(null,e)}var M,Y=Object.prototype,U=Y.toString,H=Y.__defineGetter__,z=Y.__defineSetter__,D=Y.__lookupGetter__,q=Y.__lookupSetter__;M=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?b:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(D.call(r,e)||q.call(r,e)?(n=r.__proto__,r.__proto__=Y,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&z&&z.call(r,e,t.set),r};var J=M;function K(r,e,t){J(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(r){return"string"==typeof r}var rr=String.prototype.valueOf,er=o();function tr(r){return"object"==typeof r&&(r instanceof String||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===s(r)))}function nr(r){return Q(r)||tr(r)}function or(r){return"number"==typeof r}K(nr,"isPrimitive",Q),K(nr,"isObject",tr);var ir=Number,ar=ir.prototype.toString,cr=o();function ur(r){return"object"==typeof r&&(r instanceof ir||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===s(r)))}function fr(r){return or(r)||ur(r)}function lr(r){return r!=r}function sr(r){return or(r)&&lr(r)}function pr(r){return ur(r)&&lr(r.valueOf())}function gr(r){return sr(r)||pr(r)}K(fr,"isPrimitive",or),K(fr,"isObject",ur),K(gr,"isPrimitive",sr),K(gr,"isObject",pr);var yr=Number.POSITIVE_INFINITY,br=ir.NEGATIVE_INFINITY,dr=Math.floor;function hr(r){return dr(r)===r}function vr(r){return r<yr&&r>br&&hr(r)}function wr(r){return or(r)&&vr(r)}function mr(r){return ur(r)&&vr(r.valueOf())}function jr(r){return wr(r)||mr(r)}K(jr,"isPrimitive",wr),K(jr,"isObject",mr);var Or=Object.prototype.propertyIsEnumerable,Sr=!Or.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&Sr&&nr(r)?!sr(e=+e)&&wr(e)&&e>=0&&e<r.length:t)}var Er=Array.isArray?Array.isArray:function(r){return"[object Array]"===s(r)},kr=g?p:function(r){return null!==r&&"object"==typeof r&&!Er(r)&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=4294967295&&c(r,"callee")&&!_r(r,"callee")},Tr=Array.prototype.slice;function xr(r){return null!==r&&"object"==typeof r}K(xr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xr));var Ir=_r((function(){}),"prototype"),Pr=!_r({toString:null},"toString"),Ar=9007199254740991;function Vr(r,e,t){var n,o,i;if(!("object"==typeof(i=r)&&null!==i&&"number"==typeof i.length&&hr(i.length)&&i.length>=0&&i.length<=Ar||Q(r)))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!wr(t))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(gr(e)){for(;o<n;o++)if(gr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Fr=/./;function $r(r){return"boolean"==typeof r}var Cr=Boolean,Nr=Boolean.prototype.toString,Br=o();function Lr(r){return"object"==typeof r&&(r instanceof Cr||(Br?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===s(r)))}function Rr(r){return $r(r)||Lr(r)}K(Rr,"isPrimitive",$r),K(Rr,"isObject",Lr);var Gr="object"==typeof self?self:null,Wr="object"==typeof window?window:null,Xr="object"==typeof globalThis?globalThis:null,Zr=function(r){if(arguments.length){if(!$r(r))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Gr)return Gr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Zr.document&&Zr.document.childNodes,Yr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n,o;if(("Object"===(t=s(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}K(Ur,"REGEXP",Hr);var Dr="function"==typeof Fr||"object"==typeof Yr||"function"==typeof Mr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?zr(r).toLowerCase():e};function qr(r){return r.constructor&&r.constructor.prototype===r}var Jr,Kr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Qr="undefined"==typeof window?void 0:window,re=function(){var r;if("undefined"===Dr(Qr))return!1;for(r in Qr)try{-1===Vr(Kr,r)&&c(Qr,r)&&null!==Qr[r]&&"object"===Dr(Qr[r])&&qr(Qr[r])}catch(r){return!0}return!1}(),ee="undefined"!=typeof window,te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Jr=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return kr(e)?r(Tr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,a,u;if(o=[],kr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!c(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof r)&&!xr(r))return o;t=Ir&&n}for(i in r)t&&"prototype"===i||!c(r,i)||o.push(String(i));if(Pr)for(e=function(r){if(!1===ee&&!re)return qr(r);try{return qr(r)}catch(r){return!1}}(r),u=0;u<te.length;u++)a=te[u],e&&"constructor"===a||!c(r,a)||o.push(String(a));return o};var ne=Jr;function oe(r){return"function"===Dr(r)}var ie,ae=Object,ce=Object.getPrototypeOf;ie=oe(Object.getPrototypeOf)?ce:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===s(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ue=ie,fe=Object.prototype;function le(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Er(r)}(r)&&(e=function(r){return null==r?null:(r=ae(r),ue(r))}(r),!e||!c(r,"constructor")&&c(e,"constructor")&&oe(e.constructor)&&"[object Function]"===s(e.constructor)&&c(e,"isPrototypeOf")&&oe(e.isPrototypeOf)&&(e===fe||function(r){var e;for(e in r)if(!c(r,e))return!1;return!0}(r)))}var se=t();return function(r){return!(!le(r)||ne(r).length>0||se&&Object.getOwnPropertySymbols(r).length>0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isEmptyObject=e();
//# sourceMappingURL=browser.js.map
