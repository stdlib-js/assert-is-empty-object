// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isEmptyObject=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=e();function o(){return n&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function c(t,r){return null!=t&&i.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var l,a=o()?function(t){var r,e,n;if(null==t)return u.call(t);e=t[f],r=c(t,f);try{t[f]=void 0}catch(r){return u.call(t)}return n=u.call(t),r?t[f]=e:delete t[f],n}:function(t){return u.call(t)};function p(t){return"[object Arguments]"===a(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b,v=Object.defineProperty,g=Object.prototype,d=g.toString,j=g.__defineGetter__,h=g.__defineSetter__,m=g.__lookupGetter__,w=g.__lookupSetter__;b=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?v:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===d.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||w.call(t,r)?(n=t.__proto__,t.__proto__=g,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&j&&j.call(t,r,e.get),i&&h&&h.call(t,r,e.set),t};var O=b;function _(t,r,e){O(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function S(t){return"string"==typeof t}var P=String.prototype.valueOf;var E=o();function I(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===a(t)))}function T(t){return S(t)||I(t)}function A(t){return"number"==typeof t}_(T,"isPrimitive",S),_(T,"isObject",I);var N=Number,k=N.prototype.toString;var x=o();function B(t){return"object"==typeof t&&(t instanceof N||(x?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function V(t){return A(t)||B(t)}function F(t){return t!=t}function L(t){return A(t)&&F(t)}function G(t){return B(t)&&F(t.valueOf())}function Y(t){return L(t)||G(t)}_(V,"isPrimitive",A),_(V,"isObject",B),_(Y,"isPrimitive",L),_(Y,"isObject",G);var C=Number.POSITIVE_INFINITY,M=N.NEGATIVE_INFINITY,X=Math.floor;function H(t){return X(t)===t}function W(t){return t<C&&t>M&&H(t)}function D(t){return A(t)&&W(t)}function R(t){return B(t)&&W(t.valueOf())}function U(t){return D(t)||R(t)}_(U,"isPrimitive",D),_(U,"isObject",R);var q=Object.prototype.propertyIsEnumerable;var z=!q.call("beep","0");function J(t,r){var e;return null!=t&&(!(e=q.call(t,r))&&z&&T(t)?!L(r=+r)&&D(r)&&r>=0&&r<t.length:e)}var K=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};var Q=s?p:function(t){return null!==t&&"object"==typeof t&&!K(t)&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=4294967295&&c(t,"callee")&&!J(t,"callee")},Z=Array.prototype.slice;function $(t){return null!==t&&"object"==typeof t}_($,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!K(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}($));var tt=J((function(){}),"prototype"),rt=!J({toString:null},"toString");function et(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,r,e){var n,o;if(!et(t)&&!S(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!D(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Y(r)){for(;o<n;o++)if(Y(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ot=/./;function ut(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ct=o();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function lt(t){return ut(t)||ft(t)}function at(){return new Function("return this;")()}_(lt,"isPrimitive",ut),_(lt,"isObject",ft);var pt="object"==typeof self?self:null,st="object"==typeof window?window:null,yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},bt="object"==typeof yt?yt:null;var vt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(pt)return pt;if(st)return st;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=vt.document&&vt.document.childNodes,dt=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function mt(t){var r,e,n,o;if(("Object"===(e=a(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ht.exec(n.toString()))return r[1]}return $(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}_(jt,"REGEXP",ht);var wt="function"==typeof ot||"object"==typeof dt||"function"==typeof gt?function(t){return mt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?mt(t).toLowerCase():r};function Ot(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===wt(St))return!1;for(t in St)try{-1===nt(_t,t)&&c(St,t)&&null!==St[t]&&"object"===wt(St[t])&&Ot(St[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var It,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];It=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return Q(r)?t(Z.call(r)):t(r)}:t:function(t){var r,e,n,o,u,i,f;if(o=[],Q(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!c(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!$(t))return o;e=tt&&n}for(u in t)e&&"prototype"===u||!c(t,u)||o.push(String(u));if(rt)for(r=function(t){if(!1===Et&&!Pt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),f=0;f<Tt.length;f++)i=Tt[f],r&&"constructor"===i||!c(t,i)||o.push(String(i));return o};var At=It;function Nt(t){return"function"===wt(t)}var kt,xt=Object.getPrototypeOf;kt=Nt(Object.getPrototypeOf)?xt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Bt=kt;var Vt=Object.prototype;function Ft(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!K(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Bt(t))}(t),!r||!c(t,"constructor")&&c(r,"constructor")&&Nt(r.constructor)&&"[object Function]"===a(r.constructor)&&c(r,"isPrototypeOf")&&Nt(r.isPrototypeOf)&&(r===Vt||function(t){var r;for(r in t)if(!c(t,r))return!1;return!0}(t)))}var Lt=e();return function(t){return!!Ft(t)&&(!(At(t).length>0)&&!(Lt&&Object.getOwnPropertySymbols(t).length>0))}}));
//# sourceMappingURL=browser.js.map
