import e from"react";function r({label:r}){return e.createElement("div",{className:"main flex border border-gray-400 h-16 \tflex"},e.createElement("div",{className:"inputfield "},e.createElement("input",{className:"border-0 p-2 flex text-black text-lg font-semibold  pl-4 w-full outline-none\t",placeholder:"Enter  your delivery location"})),e.createElement("div",{className:"my-2 locatesvg flex items-center p-2  text-gray-500 hover:bg-gray-200\t"},e.createElement("svg",{className:"w-4 py-1",id:"regular","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"m12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"}),e.createElement("path",{d:"m12 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"}),e.createElement("path",{d:"m23.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"}),e.createElement("path",{d:"m12 24c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z"}),e.createElement("path",{d:"m4.25 12.75h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z"}),e.createElement("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"})),e.createElement("h1",{className:"text-sm "},"Locate Me")))}function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function n(e){var r={exports:{}};return e(r,r.exports),r.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,w=o?Symbol.for("react.fundamental"):60117,O=o?Symbol.for("react.responder"):60118,E=o?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case a:switch(e=e.type){case p:case y:case c:case u:case s:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case v:case f:return e;default:return r}}case i:return r}}}function x(e){return S(e)===y}var $={AsyncMode:p,ConcurrentMode:y,ContextConsumer:l,ContextProvider:f,Element:a,ForwardRef:d,Fragment:c,Lazy:h,Memo:v,Portal:i,Profiler:u,StrictMode:s,Suspense:m,isAsyncMode:function(e){return x(e)||S(e)===p},isConcurrentMode:x,isContextConsumer:function(e){return S(e)===l},isContextProvider:function(e){return S(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},isForwardRef:function(e){return S(e)===d},isFragment:function(e){return S(e)===c},isLazy:function(e){return S(e)===h},isMemo:function(e){return S(e)===v},isPortal:function(e){return S(e)===i},isProfiler:function(e){return S(e)===u},isStrictMode:function(e){return S(e)===s},isSuspense:function(e){return S(e)===m},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===u||e===s||e===m||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===f||e.$$typeof===l||e.$$typeof===d||e.$$typeof===w||e.$$typeof===O||e.$$typeof===E||e.$$typeof===g)},typeOf:S},j=n((function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var y=e.type;switch(y){case u:case f:case o:case i:case a:case p:return y;default:var b=y&&y.$$typeof;switch(b){case s:case l:case m:case d:case c:return b;default:return r}}case n:return r}}}var O=u,E=f,S=s,x=c,$=t,j=l,P=o,T=m,k=d,N=n,C=i,_=a,I=p,R=!1;function z(e){return w(e)===f}r.AsyncMode=O,r.ConcurrentMode=E,r.ContextConsumer=S,r.ContextProvider=x,r.Element=$,r.ForwardRef=j,r.Fragment=P,r.Lazy=T,r.Memo=k,r.Portal=N,r.Profiler=C,r.StrictMode=_,r.Suspense=I,r.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||w(e)===u},r.isConcurrentMode=z,r.isContextConsumer=function(e){return w(e)===s},r.isContextProvider=function(e){return w(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===l},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===m},r.isMemo=function(e){return w(e)===d},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===i},r.isStrictMode=function(e){return w(e)===a},r.isSuspense=function(e){return w(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===i||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===l||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b)},r.typeOf=w}()})),P=n((function(e){"production"===process.env.NODE_ENV?e.exports=$:e.exports=j})),T=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function C(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var _=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=C(e),a=1;a<arguments.length;a++){for(var i in t=Object(arguments[a]))k.call(t,i)&&(o[i]=t[i]);if(T){n=T(t);for(var c=0;c<n.length;c++)N.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=function(){};if("production"!==process.env.NODE_ENV){var z=I,M={},A=Function.call.bind(Object.prototype.hasOwnProperty);R=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function V(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(A(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((n||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw c.name="Invariant Violation",c}i=e[a](r,a,n,t,null,z)}catch(e){i=e}if(!i||i instanceof Error||R((n||"React class")+": type specification of "+t+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in M)){M[i.message]=!0;var s=o?o():"";R("Failed "+t+" type: "+i.message+(null!=s?s:""))}}}V.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(M={})};var D=V,F=Function.call.bind(Object.prototype.hasOwnProperty),q=function(){};function W(){return null}"production"!==process.env.NODE_ENV&&(q=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}});var L=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:c(W),arrayOf:function(e){return c((function(r,t,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=r[t];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+f(c)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,n,o,a+"["+s+"]",I);if(u instanceof Error)return u}return null}))},element:c((function(r,t,n,o,a){var c=r[t];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+f(c)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:c((function(e,r,t,n,o){var a=e[r];return P.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+f(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(r,t,o,a,c){if(!(r[t]instanceof e)){var s=e.name||n;return new i("Invalid "+a+" `"+c+"` of type `"+(((u=r[t]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+s+"`.")}var u;return null}))},node:c((function(e,r,t,n,o){return u(e[r])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(r,t,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=r[t],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var u in c)if(F(c,u)){var l=e(c,u,n,o,a+"."+u,I);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&q(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function r(r,t,n,o,c){for(var s=r[t],u=0;u<e.length;u++)if(a(s,e[u]))return null;var f=JSON.stringify(e,(function(e,r){return"symbol"===l(r)?String(r):r}));return new i("Invalid "+o+" `"+c+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+f+".")}return c(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&q("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return q("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),W}return c((function(r,t,n,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(r,t,n,o,a,I))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}))},shape:function(e){return c((function(r,t,n,o,a){var c=r[t],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var p=l(c,u,n,o,a+"."+u,I);if(p)return p}}return null}))},exact:function(e){return c((function(r,t,n,o,a){var c=r[t],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");var u=_({},r[t],e);for(var l in u){var p=e[l];if(!p)return new i("Invalid "+o+" `"+a+"` key `"+l+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,l,n,o,a+"."+l,I);if(y)return y}return null}))}};function a(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function i(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var t={},o=0;function a(a,c,s,u,f,l,p){if(u=u||n,l=l||s,p!==I){if(r){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=u+":"+s;!t[d]&&o<3&&(q("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[d]=!0,o++)}}return null==c[s]?a?null===c[s]?new i("The "+f+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`."):new i("The "+f+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(c,s,u,f,l)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function s(e){return c((function(r,t,n,o,a,c){var s=r[t];return f(s)!==e?new i("Invalid "+o+" `"+a+"` of type `"+l(s)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function u(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(u);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,a=n.call(r);if(n!==r.entries){for(;!(o=a.next()).done;)if(!u(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!u(i[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function l(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=l(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return i.prototype=Error.prototype,o.checkPropTypes=D,o.resetWarningCache=D.resetWarningCache,o.PropTypes=o,o};function U(){}function Y(){}Y.resetWarningCache=U;var B=n((function(e){if("production"!==process.env.NODE_ENV){var r=P;e.exports=L(r.isElement,!0)}else e.exports=function(){function e(e,r,t,n,o,a){if(a!==I){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Y,resetWarningCache:U};return t.PropTypes=t,t}()}));const J=({type:r,backgroundColor:n,size:o,label:a,...i})=>{const c="primary"==r?"bg-yellow-swiggy text-white border-md shadow font-bold":"white"==r?"bg-white text-black border-md font-bold":"bg-black text-white border-md shadow font-bold",s="text-lg"===o?"py-3 px-20":"text-base"==o?"py-4 px-6":"py-2 px-6 ";return e.createElement("button",t({type:"button",className:[o,c,s].join(" "),style:n&&{backgroundColor:n}},i),a)};J.propTypes={type:B.PropTypes.oneOf(["primary","white","black"]),backgroundColor:B.PropTypes.string,size:B.PropTypes.oneOf(["text-sm","text-base","text-lg"]),label:B.PropTypes.string.isRequired,onClick:B.PropTypes.func},J.defaultProps={backgroundColor:null,size:"text-base",onClick:void 0};export{J as Button,r as LocationSearcher};
