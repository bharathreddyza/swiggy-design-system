"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e){var t={exports:{}};return e(t,t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,w=o?Symbol.for("react.fundamental"):60117,O=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case y:case i:case s:case u:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case v:case f:return e;default:return t}}case c:return t}}}function E(e){return S(e)===y}var j={AsyncMode:p,ConcurrentMode:y,ContextConsumer:l,ContextProvider:f,Element:a,ForwardRef:d,Fragment:i,Lazy:h,Memo:v,Portal:c,Profiler:s,StrictMode:u,Suspense:m,isAsyncMode:function(e){return E(e)||S(e)===p},isConcurrentMode:E,isContextConsumer:function(e){return S(e)===l},isContextProvider:function(e){return S(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},isForwardRef:function(e){return S(e)===d},isFragment:function(e){return S(e)===i},isLazy:function(e){return S(e)===h},isMemo:function(e){return S(e)===v},isPortal:function(e){return S(e)===c},isProfiler:function(e){return S(e)===s},isStrictMode:function(e){return S(e)===u},isSuspense:function(e){return S(e)===m},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===i||e===y||e===s||e===u||e===m||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===f||e.$$typeof===l||e.$$typeof===d||e.$$typeof===w||e.$$typeof===O||e.$$typeof===x||e.$$typeof===g)},typeOf:S},$=n((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case s:case f:case o:case c:case a:case p:return y;default:var b=y&&y.$$typeof;switch(b){case u:case l:case m:case d:case i:return b;default:return t}}case n:return t}}}var O=s,x=f,S=u,E=i,j=r,$=l,P=o,T=m,k=d,N=n,C=c,_=a,I=p,R=!1;function M(e){return w(e)===f}t.AsyncMode=O,t.ConcurrentMode=x,t.ContextConsumer=S,t.ContextProvider=E,t.Element=j,t.ForwardRef=$,t.Fragment=P,t.Lazy=T,t.Memo=k,t.Portal=N,t.Profiler=C,t.StrictMode=_,t.Suspense=I,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||w(e)===s},t.isConcurrentMode=M,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===l},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===d},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===c||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===u||e.$$typeof===l||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b)},t.typeOf=w}()})),P=n((function(e){"production"===process.env.NODE_ENV?e.exports=j:e.exports=$})),T=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function C(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var _=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=C(e),a=1;a<arguments.length;a++){for(var c in r=Object(arguments[a]))k.call(r,c)&&(o[c]=r[c]);if(T){n=T(r);for(var i=0;i<n.length;i++)N.call(r,n[i])&&(o[n[i]]=r[n[i]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=function(){};if("production"!==process.env.NODE_ENV){var M=I,z={},A=Function.call.bind(Object.prototype.hasOwnProperty);R=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function V(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(A(e,a)){var c;try{if("function"!=typeof e[a]){var i=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw i.name="Invariant Violation",i}c=e[a](t,a,n,r,null,M)}catch(e){c=e}if(!c||c instanceof Error||R((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in z)){z[c.message]=!0;var u=o?o():"";R("Failed "+r+" type: "+c.message+(null!=u?u:""))}}}V.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(z={})};var D=V,F=Function.call.bind(Object.prototype.hasOwnProperty),q=function(){};function L(){return null}"production"!==process.env.NODE_ENV&&(q=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var W=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:i(L),arrayOf:function(e){return i((function(t,r,n,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=t[r];if(!Array.isArray(i))return new c("Invalid "+o+" `"+a+"` of type `"+f(i)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<i.length;u++){var s=e(i,u,n,o,a+"["+u+"]",I);if(s instanceof Error)return s}return null}))},element:i((function(t,r,n,o,a){var i=t[r];return e(i)?null:new c("Invalid "+o+" `"+a+"` of type `"+f(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:i((function(e,t,r,n,o){var a=e[t];return P.isValidElementType(a)?null:new c("Invalid "+n+" `"+o+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return i((function(t,r,o,a,i){if(!(t[r]instanceof e)){var u=e.name||n;return new c("Invalid "+a+" `"+i+"` of type `"+(((s=t[r]).constructor&&s.constructor.name?s.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var s;return null}))},node:i((function(e,t,r,n,o){return s(e[t])?null:new c("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return i((function(t,r,n,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var i=t[r],u=f(i);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var s in i)if(F(i,s)){var l=e(i,s,n,o,a+"."+s,I);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&q(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),L;function t(t,r,n,o,i){for(var u=t[r],s=0;s<e.length;s++)if(a(u,e[s]))return null;var f=JSON.stringify(e,(function(e,t){return"symbol"===l(t)?String(t):t}));return new c("Invalid "+o+" `"+i+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+f+".")}return i(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&q("Invalid argument supplied to oneOfType, expected an instance of array."),L;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return q("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(r)+" at index "+t+"."),L}return i((function(t,r,n,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,r,n,o,a,I))return null;return new c("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}))},shape:function(e){return i((function(t,r,n,o,a){var i=t[r],u=f(i);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(i,s,n,o,a+"."+s,I);if(p)return p}}return null}))},exact:function(e){return i((function(t,r,n,o,a){var i=t[r],u=f(i);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var s=_({},t[r],e);for(var l in s){var p=e[l];if(!p)return new c("Invalid "+o+" `"+a+"` key `"+l+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(i,l,n,o,a+"."+l,I);if(y)return y}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function c(e){this.message=e,this.stack=""}function i(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function a(a,i,u,s,f,l,p){if(s=s||n,l=l||u,p!==I){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=s+":"+u;!r[d]&&o<3&&(q("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[d]=!0,o++)}}return null==i[u]?a?null===i[u]?new c("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`."):new c("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,u,s,f,l)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function u(e){return i((function(t,r,n,o,a,i){var u=t[r];return f(u)!==e?new c("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function s(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(s);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!s(o.value))return!1}else for(;!(o=a.next()).done;){var c=o.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function l(e){if(null==e)return""+e;var t=f(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=l(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return c.prototype=Error.prototype,o.checkPropTypes=D,o.resetWarningCache=D.resetWarningCache,o.PropTypes=o,o};function B(){}function U(){}U.resetWarningCache=B;var Y=n((function(e){if("production"!==process.env.NODE_ENV){var t=P;e.exports=W(t.isElement,!0)}else e.exports=function(){function e(e,t,r,n,o,a){if(a!==I){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:U,resetWarningCache:B};return r.PropTypes=r,r}()}));const J=({type:e,backgroundColor:n,size:o,label:a,...c})=>{const i="primary"==e?"bg-yellow-swiggy text-white border-md shadow font-bold":"white"==e?"bg-white text-black border-md font-bold":"bg-black text-white border-md shadow font-bold",u="text-lg"===o?"py-3 px-20":"text-base"==o?"py-4 px-6":"py-2 px-6 ";return t.default.createElement("button",r({type:"button",className:[o,i,u].join(" "),style:n&&{backgroundColor:n}},c),a)};J.propTypes={type:Y.PropTypes.oneOf(["primary","white","black"]),backgroundColor:Y.PropTypes.string,size:Y.PropTypes.oneOf(["text-sm","text-base","text-lg"]),label:Y.PropTypes.string.isRequired,onClick:Y.PropTypes.func},J.defaultProps={backgroundColor:null,size:"text-base",onClick:void 0},exports.Button=J,exports.LocationSearcher=function({label:e}){return t.default.createElement("div",{className:"main flex border border-gray-400 h-16 \tflex"},t.default.createElement("div",{className:"inputfield "},t.default.createElement("input",{className:"border-0 p-2 flex text-black text-lg font-semibold  pl-4 w-full outline-none\t",placeholder:"Enter  your delivery location"})),t.default.createElement("div",{className:"my-2 locatesvg flex items-center p-2  text-gray-500 hover:bg-gray-200\t"},t.default.createElement("svg",{className:"w-4 py-1",id:"regular","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},t.default.createElement("path",{d:"m12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"}),t.default.createElement("path",{d:"m12 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"}),t.default.createElement("path",{d:"m23.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"}),t.default.createElement("path",{d:"m12 24c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"}),t.default.createElement("path",{d:"m4.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"}),t.default.createElement("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"})),t.default.createElement("h1",{className:"text-sm "},"Locate Me")))};
