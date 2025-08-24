(function(){const V=document.createElement("link").relList;if(V&&V.supports&&V.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))m(H);new MutationObserver(H=>{for(const W of H)if(W.type==="childList")for(const P of W.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&m(P)}).observe(document,{childList:!0,subtree:!0});function z(H){const W={};return H.integrity&&(W.integrity=H.integrity),H.referrerPolicy&&(W.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?W.credentials="include":H.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function m(H){if(H.ep)return;H.ep=!0;const W=z(H);fetch(H.href,W)}})();function rc(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var Xs={exports:{}},pn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function Nm(){if(Xu)return pn;Xu=1;var S=Symbol.for("react.transitional.element"),V=Symbol.for("react.fragment");function z(m,H,W){var P=null;if(W!==void 0&&(P=""+W),H.key!==void 0&&(P=""+H.key),"key"in H){W={};for(var ce in H)ce!=="key"&&(W[ce]=H[ce])}else W=H;return H=W.ref,{$$typeof:S,type:m,key:P,ref:H!==void 0?H:null,props:W}}return pn.Fragment=V,pn.jsx=z,pn.jsxs=z,pn}var Qu;function Om(){return Qu||(Qu=1,Xs.exports=Nm()),Xs.exports}var M=Om(),Qs={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Rm(){if(Pu)return J;Pu=1;var S=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),Z=Symbol.iterator;function ae(h){return h===null||typeof h!="object"?null:(h=Z&&h[Z]||h["@@iterator"],typeof h=="function"?h:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fe=Object.assign,Je={};function je(h,v,D){this.props=h,this.context=v,this.refs=Je,this.updater=D||Te}je.prototype.isReactComponent={},je.prototype.setState=function(h,v){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,v,"setState")},je.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Dt(){}Dt.prototype=je.prototype;function yt(h,v,D){this.props=h,this.context=v,this.refs=Je,this.updater=D||Te}var _e=yt.prototype=new Dt;_e.constructor=yt,fe(_e,je.prototype),_e.isPureReactComponent=!0;var Ve=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function we(h,v,D,T,O,q){return D=q.ref,{$$typeof:S,type:h,key:v,ref:D!==void 0?D:null,props:q}}function Me(h,v){return we(h.type,v,void 0,void 0,void 0,h.props)}function nt(h){return typeof h=="object"&&h!==null&&h.$$typeof===S}function ft(h){var v={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(D){return v[D]})}var it=/\/+/g;function De(h,v){return typeof h=="object"&&h!==null&&h.key!=null?ft(""+h.key):v.toString(36)}function At(){}function Ht(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(At,At):(h.status="pending",h.then(function(v){h.status==="pending"&&(h.status="fulfilled",h.value=v)},function(v){h.status==="pending"&&(h.status="rejected",h.reason=v)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function We(h,v,D,T,O){var q=typeof h;(q==="undefined"||q==="boolean")&&(h=null);var G=!1;if(h===null)G=!0;else switch(q){case"bigint":case"string":case"number":G=!0;break;case"object":switch(h.$$typeof){case S:case V:G=!0;break;case N:return G=h._init,We(G(h._payload),v,D,T,O)}}if(G)return O=O(h),G=T===""?"."+De(h,0):T,Ve(O)?(D="",G!=null&&(D=G.replace(it,"$&/")+"/"),We(O,v,D,"",function(Kt){return Kt})):O!=null&&(nt(O)&&(O=Me(O,D+(O.key==null||h&&h.key===O.key?"":(""+O.key).replace(it,"$&/")+"/")+G)),v.push(O)),1;G=0;var $e=T===""?".":T+":";if(Ve(h))for(var de=0;de<h.length;de++)T=h[de],q=$e+De(T,de),G+=We(T,v,D,q,O);else if(de=ae(h),typeof de=="function")for(h=de.call(h),de=0;!(T=h.next()).done;)T=T.value,q=$e+De(T,de++),G+=We(T,v,D,q,O);else if(q==="object"){if(typeof h.then=="function")return We(Ht(h),v,D,T,O);throw v=String(h),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return G}function p(h,v,D){if(h==null)return h;var T=[],O=0;return We(h,T,"","",function(q){return v.call(D,q,O++)}),T}function _(h){if(h._status===-1){var v=h._result;v=v(),v.then(function(D){(h._status===0||h._status===-1)&&(h._status=1,h._result=D)},function(D){(h._status===0||h._status===-1)&&(h._status=2,h._result=D)}),h._status===-1&&(h._status=0,h._result=v)}if(h._status===1)return h._result.default;throw h._result}var E=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function se(){}return J.Children={map:p,forEach:function(h,v,D){p(h,function(){v.apply(this,arguments)},D)},count:function(h){var v=0;return p(h,function(){v++}),v},toArray:function(h){return p(h,function(v){return v})||[]},only:function(h){if(!nt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},J.Component=je,J.Fragment=z,J.Profiler=H,J.PureComponent=yt,J.StrictMode=m,J.Suspense=C,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,J.__COMPILER_RUNTIME={__proto__:null,c:function(h){return Y.H.useMemoCache(h)}},J.cache=function(h){return function(){return h.apply(null,arguments)}},J.cloneElement=function(h,v,D){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var T=fe({},h.props),O=h.key,q=void 0;if(v!=null)for(G in v.ref!==void 0&&(q=void 0),v.key!==void 0&&(O=""+v.key),v)!le.call(v,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&v.ref===void 0||(T[G]=v[G]);var G=arguments.length-2;if(G===1)T.children=D;else if(1<G){for(var $e=Array(G),de=0;de<G;de++)$e[de]=arguments[de+2];T.children=$e}return we(h.type,O,void 0,void 0,q,T)},J.createContext=function(h){return h={$$typeof:P,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:W,_context:h},h},J.createElement=function(h,v,D){var T,O={},q=null;if(v!=null)for(T in v.key!==void 0&&(q=""+v.key),v)le.call(v,T)&&T!=="key"&&T!=="__self"&&T!=="__source"&&(O[T]=v[T]);var G=arguments.length-2;if(G===1)O.children=D;else if(1<G){for(var $e=Array(G),de=0;de<G;de++)$e[de]=arguments[de+2];O.children=$e}if(h&&h.defaultProps)for(T in G=h.defaultProps,G)O[T]===void 0&&(O[T]=G[T]);return we(h,q,void 0,void 0,null,O)},J.createRef=function(){return{current:null}},J.forwardRef=function(h){return{$$typeof:ce,render:h}},J.isValidElement=nt,J.lazy=function(h){return{$$typeof:N,_payload:{_status:-1,_result:h},_init:_}},J.memo=function(h,v){return{$$typeof:I,type:h,compare:v===void 0?null:v}},J.startTransition=function(h){var v=Y.T,D={};Y.T=D;try{var T=h(),O=Y.S;O!==null&&O(D,T),typeof T=="object"&&T!==null&&typeof T.then=="function"&&T.then(se,E)}catch(q){E(q)}finally{Y.T=v}},J.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},J.use=function(h){return Y.H.use(h)},J.useActionState=function(h,v,D){return Y.H.useActionState(h,v,D)},J.useCallback=function(h,v){return Y.H.useCallback(h,v)},J.useContext=function(h){return Y.H.useContext(h)},J.useDebugValue=function(){},J.useDeferredValue=function(h,v){return Y.H.useDeferredValue(h,v)},J.useEffect=function(h,v,D){var T=Y.H;if(typeof D=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return T.useEffect(h,v)},J.useId=function(){return Y.H.useId()},J.useImperativeHandle=function(h,v,D){return Y.H.useImperativeHandle(h,v,D)},J.useInsertionEffect=function(h,v){return Y.H.useInsertionEffect(h,v)},J.useLayoutEffect=function(h,v){return Y.H.useLayoutEffect(h,v)},J.useMemo=function(h,v){return Y.H.useMemo(h,v)},J.useOptimistic=function(h,v){return Y.H.useOptimistic(h,v)},J.useReducer=function(h,v,D){return Y.H.useReducer(h,v,D)},J.useRef=function(h){return Y.H.useRef(h)},J.useState=function(h){return Y.H.useState(h)},J.useSyncExternalStore=function(h,v,D){return Y.H.useSyncExternalStore(h,v,D)},J.useTransition=function(){return Y.H.useTransition()},J.version="19.1.1",J}var Zu;function or(){return Zu||(Zu=1,Qs.exports=Rm()),Qs.exports}var Mt=or();const jm=rc(Mt);var Ps={exports:{}},bn={},Zs={exports:{}},er={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec;function Wm(){return ec||(ec=1,(function(S){function V(p,_){var E=p.length;p.push(_);e:for(;0<E;){var se=E-1>>>1,h=p[se];if(0<H(h,_))p[se]=_,p[E]=h,E=se;else break e}}function z(p){return p.length===0?null:p[0]}function m(p){if(p.length===0)return null;var _=p[0],E=p.pop();if(E!==_){p[0]=E;e:for(var se=0,h=p.length,v=h>>>1;se<v;){var D=2*(se+1)-1,T=p[D],O=D+1,q=p[O];if(0>H(T,E))O<h&&0>H(q,T)?(p[se]=q,p[O]=E,se=O):(p[se]=T,p[D]=E,se=D);else if(O<h&&0>H(q,E))p[se]=q,p[O]=E,se=O;else break e}}return _}function H(p,_){var E=p.sortIndex-_.sortIndex;return E!==0?E:p.id-_.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;S.unstable_now=function(){return W.now()}}else{var P=Date,ce=P.now();S.unstable_now=function(){return P.now()-ce}}var C=[],I=[],N=1,Z=null,ae=3,Te=!1,fe=!1,Je=!1,je=!1,Dt=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;function Ve(p){for(var _=z(I);_!==null;){if(_.callback===null)m(I);else if(_.startTime<=p)m(I),_.sortIndex=_.expirationTime,V(C,_);else break;_=z(I)}}function Y(p){if(Je=!1,Ve(p),!fe)if(z(C)!==null)fe=!0,le||(le=!0,De());else{var _=z(I);_!==null&&We(Y,_.startTime-p)}}var le=!1,we=-1,Me=5,nt=-1;function ft(){return je?!0:!(S.unstable_now()-nt<Me)}function it(){if(je=!1,le){var p=S.unstable_now();nt=p;var _=!0;try{e:{fe=!1,Je&&(Je=!1,yt(we),we=-1),Te=!0;var E=ae;try{t:{for(Ve(p),Z=z(C);Z!==null&&!(Z.expirationTime>p&&ft());){var se=Z.callback;if(typeof se=="function"){Z.callback=null,ae=Z.priorityLevel;var h=se(Z.expirationTime<=p);if(p=S.unstable_now(),typeof h=="function"){Z.callback=h,Ve(p),_=!0;break t}Z===z(C)&&m(C),Ve(p)}else m(C);Z=z(C)}if(Z!==null)_=!0;else{var v=z(I);v!==null&&We(Y,v.startTime-p),_=!1}}break e}finally{Z=null,ae=E,Te=!1}_=void 0}}finally{_?De():le=!1}}}var De;if(typeof _e=="function")De=function(){_e(it)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Ht=At.port2;At.port1.onmessage=it,De=function(){Ht.postMessage(null)}}else De=function(){Dt(it,0)};function We(p,_){we=Dt(function(){p(S.unstable_now())},_)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(p){p.callback=null},S.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<p?Math.floor(1e3/p):5},S.unstable_getCurrentPriorityLevel=function(){return ae},S.unstable_next=function(p){switch(ae){case 1:case 2:case 3:var _=3;break;default:_=ae}var E=ae;ae=_;try{return p()}finally{ae=E}},S.unstable_requestPaint=function(){je=!0},S.unstable_runWithPriority=function(p,_){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var E=ae;ae=p;try{return _()}finally{ae=E}},S.unstable_scheduleCallback=function(p,_,E){var se=S.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?se+E:se):E=se,p){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=E+h,p={id:N++,callback:_,priorityLevel:p,startTime:E,expirationTime:h,sortIndex:-1},E>se?(p.sortIndex=E,V(I,p),z(C)===null&&p===z(I)&&(Je?(yt(we),we=-1):Je=!0,We(Y,E-se))):(p.sortIndex=h,V(C,p),fe||Te||(fe=!0,le||(le=!0,De()))),p},S.unstable_shouldYield=ft,S.unstable_wrapCallback=function(p){var _=ae;return function(){var E=ae;ae=_;try{return p.apply(this,arguments)}finally{ae=E}}}})(er)),er}var tc;function Em(){return tc||(tc=1,Zs.exports=Wm()),Zs.exports}var tr={exports:{}},ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function xm(){if(ac)return ze;ac=1;var S=or();function V(C){var I="https://react.dev/errors/"+C;if(1<arguments.length){I+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)I+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+C+"; visit "+I+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(){}var m={d:{f:z,r:function(){throw Error(V(522))},D:z,C:z,L:z,m:z,X:z,S:z,M:z},p:0,findDOMNode:null},H=Symbol.for("react.portal");function W(C,I,N){var Z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:Z==null?null:""+Z,children:C,containerInfo:I,implementation:N}}var P=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ce(C,I){if(C==="font")return"";if(typeof I=="string")return I==="use-credentials"?I:""}return ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ze.createPortal=function(C,I){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!I||I.nodeType!==1&&I.nodeType!==9&&I.nodeType!==11)throw Error(V(299));return W(C,I,null,N)},ze.flushSync=function(C){var I=P.T,N=m.p;try{if(P.T=null,m.p=2,C)return C()}finally{P.T=I,m.p=N,m.d.f()}},ze.preconnect=function(C,I){typeof C=="string"&&(I?(I=I.crossOrigin,I=typeof I=="string"?I==="use-credentials"?I:"":void 0):I=null,m.d.C(C,I))},ze.prefetchDNS=function(C){typeof C=="string"&&m.d.D(C)},ze.preinit=function(C,I){if(typeof C=="string"&&I&&typeof I.as=="string"){var N=I.as,Z=ce(N,I.crossOrigin),ae=typeof I.integrity=="string"?I.integrity:void 0,Te=typeof I.fetchPriority=="string"?I.fetchPriority:void 0;N==="style"?m.d.S(C,typeof I.precedence=="string"?I.precedence:void 0,{crossOrigin:Z,integrity:ae,fetchPriority:Te}):N==="script"&&m.d.X(C,{crossOrigin:Z,integrity:ae,fetchPriority:Te,nonce:typeof I.nonce=="string"?I.nonce:void 0})}},ze.preinitModule=function(C,I){if(typeof C=="string")if(typeof I=="object"&&I!==null){if(I.as==null||I.as==="script"){var N=ce(I.as,I.crossOrigin);m.d.M(C,{crossOrigin:N,integrity:typeof I.integrity=="string"?I.integrity:void 0,nonce:typeof I.nonce=="string"?I.nonce:void 0})}}else I==null&&m.d.M(C)},ze.preload=function(C,I){if(typeof C=="string"&&typeof I=="object"&&I!==null&&typeof I.as=="string"){var N=I.as,Z=ce(N,I.crossOrigin);m.d.L(C,N,{crossOrigin:Z,integrity:typeof I.integrity=="string"?I.integrity:void 0,nonce:typeof I.nonce=="string"?I.nonce:void 0,type:typeof I.type=="string"?I.type:void 0,fetchPriority:typeof I.fetchPriority=="string"?I.fetchPriority:void 0,referrerPolicy:typeof I.referrerPolicy=="string"?I.referrerPolicy:void 0,imageSrcSet:typeof I.imageSrcSet=="string"?I.imageSrcSet:void 0,imageSizes:typeof I.imageSizes=="string"?I.imageSizes:void 0,media:typeof I.media=="string"?I.media:void 0})}},ze.preloadModule=function(C,I){if(typeof C=="string")if(I){var N=ce(I.as,I.crossOrigin);m.d.m(C,{as:typeof I.as=="string"&&I.as!=="script"?I.as:void 0,crossOrigin:N,integrity:typeof I.integrity=="string"?I.integrity:void 0})}else m.d.m(C)},ze.requestFormReset=function(C){m.d.r(C)},ze.unstable_batchedUpdates=function(C,I){return C(I)},ze.useFormState=function(C,I,N){return P.H.useFormState(C,I,N)},ze.useFormStatus=function(){return P.H.useHostTransitionStatus()},ze.version="19.1.1",ze}var oc;function zm(){if(oc)return tr.exports;oc=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(V){console.error(V)}}return S(),tr.exports=xm(),tr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function Gm(){if(nc)return bn;nc=1;var S=Em(),V=or(),z=zm();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function W(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function P(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ce(e){if(W(e)!==e)throw Error(m(188))}function C(e){var t=e.alternate;if(!t){if(t=W(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ce(n),e;if(i===o)return ce(n),t;i=i.sibling}throw Error(m(188))}if(a.return!==o.return)a=n,o=i;else{for(var l=!1,s=n.child;s;){if(s===a){l=!0,a=n,o=i;break}if(s===o){l=!0,o=n,a=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===a){l=!0,a=i,o=n;break}if(s===o){l=!0,o=i,a=n;break}s=s.sibling}if(!l)throw Error(m(189))}}if(a.alternate!==o)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,Z=Symbol.for("react.element"),ae=Symbol.for("react.transitional.element"),Te=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Dt=Symbol.for("react.provider"),yt=Symbol.for("react.consumer"),_e=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var At=Symbol.for("react.client.reference");function Ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===At?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fe:return"Fragment";case je:return"Profiler";case Je:return"StrictMode";case Y:return"Suspense";case le:return"SuspenseList";case nt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Te:return"Portal";case _e:return(e.displayName||"Context")+".Provider";case yt:return(e._context.displayName||"Context")+".Consumer";case Ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:Ht(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}var We=Array.isArray,p=V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E={pending:!1,data:null,method:null,action:null},se=[],h=-1;function v(e){return{current:e}}function D(e){0>h||(e.current=se[h],se[h]=null,h--)}function T(e,t){h++,se[h]=e.current,e.current=t}var O=v(null),q=v(null),G=v(null),$e=v(null);function de(e,t){switch(T(G,t),T(q,e),T(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tu(t),e=_u(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(O),T(O,e)}function Kt(){D(O),D(q),D(G)}function ji(e){e.memoizedState!==null&&T($e,e);var t=O.current,a=_u(t,e.type);t!==a&&(T(q,e),T(O,a))}function kn(e){q.current===e&&(D(O),D(q)),$e.current===e&&(D($e),gn._currentValue=E)}var Wi=Object.prototype.hasOwnProperty,Ei=S.unstable_scheduleCallback,xi=S.unstable_cancelCallback,dc=S.unstable_shouldYield,uc=S.unstable_requestPaint,kt=S.unstable_now,cc=S.unstable_getCurrentPriorityLevel,nr=S.unstable_ImmediatePriority,ir=S.unstable_UserBlockingPriority,In=S.unstable_NormalPriority,gc=S.unstable_LowPriority,lr=S.unstable_IdlePriority,mc=S.log,yc=S.unstable_setDisableYieldValue,ko=null,qe=null;function Ft(e){if(typeof mc=="function"&&yc(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(ko,e)}catch{}}var Xe=Math.clz32?Math.clz32:pc,fc=Math.log,wc=Math.LN2;function pc(e){return e>>>=0,e===0?32:31-(fc(e)/wc|0)|0}var vn=256,Sn=4194304;function fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tn(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=o&134217727;return s!==0?(o=s&~i,o!==0?n=fa(o):(l&=s,l!==0?n=fa(l):a||(a=s&~e,a!==0&&(n=fa(a))))):(s=o&~i,s!==0?n=fa(s):l!==0?n=fa(l):a||(a=o&~e,a!==0&&(n=fa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Io(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(){var e=vn;return vn<<=1,(vn&4194048)===0&&(vn=256),e}function rr(){var e=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),e}function zi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function vo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kc(e,t,a,o,n,i){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(a=l&~a;0<a;){var w=31-Xe(a),k=1<<w;s[w]=0,r[w]=-1;var y=g[w];if(y!==null)for(g[w]=null,w=0;w<y.length;w++){var f=y[w];f!==null&&(f.lane&=-536870913)}a&=~k}o!==0&&hr(e,o,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~t))}function hr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Xe(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function dr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Xe(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ur(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Uu(e.type))}function Ic(e,t){var a=_.p;try{return _.p=e,t()}finally{_.p=a}}var Yt=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Yt,Le="__reactProps$"+Yt,Ra="__reactContainer$"+Yt,Vi="__reactEvents$"+Yt,vc="__reactListeners$"+Yt,Sc="__reactHandles$"+Yt,cr="__reactResources$"+Yt,So="__reactMarker$"+Yt;function Li(e){delete e[Ee],delete e[Le],delete e[Vi],delete e[vc],delete e[Sc]}function ja(e){var t=e[Ee];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ra]||a[Ee]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Hu(e);e!==null;){if(a=e[Ee])return a;e=Hu(e)}return t}e=a,a=e.parentNode}return null}function Wa(e){if(e=e[Ee]||e[Ra]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function To(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Ea(e){var t=e[cr];return t||(t=e[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ae(e){e[So]=!0}var gr=new Set,mr={};function wa(e,t){xa(e,t),xa(e+"Capture",t)}function xa(e,t){for(mr[e]=t,e=0;e<t.length;e++)gr.add(t[e])}var Tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yr={},fr={};function _c(e){return Wi.call(fr,e)?!0:Wi.call(yr,e)?!1:Tc.test(e)?fr[e]=!0:(yr[e]=!0,!1)}function _n(e,t,a){if(_c(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Mn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}var Ui,wr;function za(e){if(Ui===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||"",wr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ui+e+wr}var Ki=!1;function Fi(e,t){if(!e||Ki)return"";Ki=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(f){var y=f}Reflect.construct(e,[],k)}else{try{k.call()}catch(f){y=f}e.call(k.prototype)}}else{try{throw Error()}catch(f){y=f}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(f){if(f&&y&&typeof f.stack=="string")return[f.stack,y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=o.DetermineComponentFrameRoot(),l=i[0],s=i[1];if(l&&s){var r=l.split(`
`),g=s.split(`
`);for(n=o=0;o<r.length&&!r[o].includes("DetermineComponentFrameRoot");)o++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(o===r.length||n===g.length)for(o=r.length-1,n=g.length-1;1<=o&&0<=n&&r[o]!==g[n];)n--;for(;1<=o&&0<=n;o--,n--)if(r[o]!==g[n]){if(o!==1||n!==1)do if(o--,n--,0>n||r[o]!==g[n]){var w=`
`+r[o].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=o&&0<=n);break}}}finally{Ki=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function Mc(e){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Fi(e.type,!1);case 11:return Fi(e.type.render,!1);case 1:return Fi(e.type,!0);case 31:return za("Activity");default:return""}}function pr(e){try{var t="";do t+=Mc(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function br(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=br(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dn(e){e._valueTracker||(e._valueTracker=Dc(e))}function kr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=br(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ac=/[\n"\\]/g;function st(e){return e.replace(Ac,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yi(e,t,a,o,n,i,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lt(t)):e.value!==""+lt(t)&&(e.value=""+lt(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?$i(e,l,lt(t)):a!=null?$i(e,l,lt(a)):o!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+lt(s):e.removeAttribute("name")}function Ir(e,t,a,o,n,i,l,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+lt(a):"",t=t!=null?""+lt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=s?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l)}function $i(e,t,a){t==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ga(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+lt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vr(e,t,a){if(t!=null&&(t=""+lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+lt(a):""}function Sr(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(m(92));if(We(o)){if(1<o.length)throw Error(m(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=lt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Hc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tr(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Hc.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _r(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Tr(e,n,o)}else for(var i in t)t.hasOwnProperty(i)&&Tr(e,i,t[i])}function qi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return Bc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Xi=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,La=null;function Mr(e){var t=Wa(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Le]||null;if(!n)throw Error(m(90));Yi(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&kr(o)}break e;case"textarea":vr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ga(e,!!a.multiple,t,!1)}}}var Pi=!1;function Dr(e,t,a){if(Pi)return e(t,a);Pi=!0;try{var o=e(t);return o}finally{if(Pi=!1,(Va!==null||La!==null)&&(mi(),Va&&(t=Va,e=La,La=Va=null,Mr(t),e)))for(t=0;t<e.length;t++)Mr(e[t])}}function _o(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Le]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=!1;if(Bt)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Zi=!1}var $t=null,el=null,Cn=null;function Ar(){if(Cn)return Cn;var e,t=el,a=t.length,o,n="value"in $t?$t.value:$t.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[i-o];o++);return Cn=n.slice(e,1<o?1-o:void 0)}function Bn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Hr(){return!1}function Ue(e){function t(a,o,n,i,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:Hr,this.isPropagationStopped=Hr,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=Ue(pa),Do=N({},pa,{view:0,detail:0}),Nc=Ue(Do),tl,al,Ao,Rn=N({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(tl=e.screenX-Ao.screenX,al=e.screenY-Ao.screenY):al=tl=0,Ao=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Cr=Ue(Rn),Oc=N({},Rn,{dataTransfer:0}),Rc=Ue(Oc),jc=N({},Do,{relatedTarget:0}),ol=Ue(jc),Wc=N({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ec=Ue(Wc),xc=N({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zc=Ue(xc),Gc=N({},pa,{data:0}),Br=Ue(Gc),Jc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lc[e])?!!t[e]:!1}function nl(){return Uc}var Kc=N({},Do,{key:function(e){if(e.key){var t=Jc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fc=Ue(Kc),Yc=N({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nr=Ue(Yc),$c=N({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),qc=Ue($c),Xc=N({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qc=Ue(Xc),Pc=N({},Rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=Ue(Pc),eg=N({},pa,{newState:0,oldState:0}),tg=Ue(eg),ag=[9,13,27,32],il=Bt&&"CompositionEvent"in window,Ho=null;Bt&&"documentMode"in document&&(Ho=document.documentMode);var og=Bt&&"TextEvent"in window&&!Ho,Or=Bt&&(!il||Ho&&8<Ho&&11>=Ho),Rr=" ",jr=!1;function Wr(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Er(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function ng(e,t){switch(e){case"compositionend":return Er(t);case"keypress":return t.which!==32?null:(jr=!0,Rr);case"textInput":return e=t.data,e===Rr&&jr?null:e;default:return null}}function ig(e,t){if(Ua)return e==="compositionend"||!il&&Wr(e,t)?(e=Ar(),Cn=el=$t=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Or&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function zr(e,t,a,o){Va?La?La.push(o):La=[o]:Va=o,t=ki(t,"onChange"),0<t.length&&(a=new On("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Co=null,Bo=null;function sg(e){bu(e,0)}function jn(e){var t=To(e);if(kr(t))return e}function Gr(e,t){if(e==="change")return t}var Jr=!1;if(Bt){var ll;if(Bt){var sl="oninput"in document;if(!sl){var Vr=document.createElement("div");Vr.setAttribute("oninput","return;"),sl=typeof Vr.oninput=="function"}ll=sl}else ll=!1;Jr=ll&&(!document.documentMode||9<document.documentMode)}function Lr(){Co&&(Co.detachEvent("onpropertychange",Ur),Bo=Co=null)}function Ur(e){if(e.propertyName==="value"&&jn(Bo)){var t=[];zr(t,Bo,e,Qi(e)),Dr(sg,t)}}function rg(e,t,a){e==="focusin"?(Lr(),Co=t,Bo=a,Co.attachEvent("onpropertychange",Ur)):e==="focusout"&&Lr()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(Bo)}function dg(e,t){if(e==="click")return jn(t)}function ug(e,t){if(e==="input"||e==="change")return jn(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:cg;function No(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Wi.call(t,n)||!Qe(e[n],t[n]))return!1}return!0}function Kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var a=Kr(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kr(a)}}function Yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $r(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=An(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=An(e.document)}return t}function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gg=Bt&&"documentMode"in document&&11>=document.documentMode,Ka=null,hl=null,Oo=null,dl=!1;function qr(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dl||Ka==null||Ka!==An(o)||(o=Ka,"selectionStart"in o&&rl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oo&&No(Oo,o)||(Oo=o,o=ki(hl,"onSelect"),0<o.length&&(t=new On("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Ka)))}function ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},ul={},Xr={};Bt&&(Xr=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function ka(e){if(ul[e])return ul[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Xr)return ul[e]=t[a];return e}var Qr=ka("animationend"),Pr=ka("animationiteration"),Zr=ka("animationstart"),mg=ka("transitionrun"),yg=ka("transitionstart"),fg=ka("transitioncancel"),eh=ka("transitionend"),th=new Map,cl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cl.push("scrollEnd");function wt(e,t){th.set(e,t),wa(t,[e])}var ah=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=ah.get(e);return a!==void 0?a:(t={value:e,source:t,stack:pr(t)},ah.set(e,t),t)}return{value:e,source:t,stack:pr(t)}}var ht=[],Ya=0,gl=0;function Wn(){for(var e=Ya,t=gl=Ya=0;t<e;){var a=ht[t];ht[t++]=null;var o=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}i!==0&&oh(a,n,i)}}function En(e,t,a,o){ht[Ya++]=e,ht[Ya++]=t,ht[Ya++]=a,ht[Ya++]=o,gl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ml(e,t,a,o){return En(e,t,a,o),xn(e)}function $a(e,t){return En(e,null,null,t),xn(e)}function oh(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,o=i.alternate,o!==null&&(o.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Xe(a),e=i.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),i):null}function xn(e){if(50<nn)throw nn=0,ks=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qa={};function wg(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,a,o){return new wg(e,t,a,o)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nt(e,t){var a=e.alternate;return a===null?(a=Pe(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nh(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zn(e,t,a,o,n,i){var l=0;if(o=e,typeof e=="function")yl(e)&&(l=1);else if(typeof e=="string")l=bm(e,a,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case nt:return e=Pe(31,a,t,n),e.elementType=nt,e.lanes=i,e;case fe:return Ia(a.children,n,i,t);case Je:l=8,n|=24;break;case je:return e=Pe(12,a,t,n|2),e.elementType=je,e.lanes=i,e;case Y:return e=Pe(13,a,t,n),e.elementType=Y,e.lanes=i,e;case le:return e=Pe(19,a,t,n),e.elementType=le,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dt:case _e:l=10;break e;case yt:l=9;break e;case Ve:l=11;break e;case we:l=14;break e;case Me:l=16,o=null;break e}l=29,a=Error(m(130,e===null?"null":typeof e,"")),o=null}return t=Pe(l,a,t,n),t.elementType=e,t.type=o,t.lanes=i,t}function Ia(e,t,a,o){return e=Pe(7,e,o,t),e.lanes=a,e}function fl(e,t,a){return e=Pe(6,e,null,t),e.lanes=a,e}function wl(e,t,a){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xa=[],Qa=0,Gn=null,Jn=0,dt=[],ut=0,va=null,Ot=1,Rt="";function Sa(e,t){Xa[Qa++]=Jn,Xa[Qa++]=Gn,Gn=e,Jn=t}function ih(e,t,a){dt[ut++]=Ot,dt[ut++]=Rt,dt[ut++]=va,va=e;var o=Ot;e=Rt;var n=32-Xe(o)-1;o&=~(1<<n),a+=1;var i=32-Xe(t)+n;if(30<i){var l=n-n%5;i=(o&(1<<l)-1).toString(32),o>>=l,n-=l,Ot=1<<32-Xe(t)+n|a<<n|o,Rt=i+e}else Ot=1<<i|a<<n|o,Rt=e}function pl(e){e.return!==null&&(Sa(e,1),ih(e,1,0))}function bl(e){for(;e===Gn;)Gn=Xa[--Qa],Xa[Qa]=null,Jn=Xa[--Qa],Xa[Qa]=null;for(;e===va;)va=dt[--ut],dt[ut]=null,Rt=dt[--ut],dt[ut]=null,Ot=dt[--ut],dt[ut]=null}var Ge=null,me=null,Q=!1,Ta=null,It=!1,kl=Error(m(519));function _a(e){var t=Error(m(418,""));throw Wo(rt(t,e)),kl}function lh(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Ee]=e,t[Le]=o,a){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(a=0;a<sn.length;a++)F(sn[a],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),Ir(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Dn(t);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),Sr(t,o.value,o.defaultValue,o.children),Dn(t)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Su(t.textContent,a)?(o.popover!=null&&(F("beforetoggle",t),F("toggle",t)),o.onScroll!=null&&F("scroll",t),o.onScrollEnd!=null&&F("scrollend",t),o.onClick!=null&&(t.onclick=Ii),t=!0):t=!1,t||_a(e)}function sh(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:Ge=Ge.return}}function Ro(e){if(e!==Ge)return!1;if(!Q)return sh(e),Q=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ws(e.type,e.memoizedProps)),a=!a),a&&me&&_a(e),sh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){me=bt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}me=null}}else t===27?(t=me,da(e.type)?(e=Gs,Gs=null,me=e):me=t):me=Ge?bt(e.stateNode.nextSibling):null;return!0}function jo(){me=Ge=null,Q=!1}function rh(){var e=Ta;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),Ta=null),e}function Wo(e){Ta===null?Ta=[e]:Ta.push(e)}var Il=v(null),Ma=null,jt=null;function qt(e,t,a){T(Il,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=Il.current,D(Il)}function vl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Sl(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var l=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),vl(i.return,a,e),o||(l=null);break e}i=s.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(m(341));l.lanes|=a,i=l.alternate,i!==null&&(i.lanes|=a),vl(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function Eo(e,t,a,o){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(m(387));if(l=l.memoizedProps,l!==null){var s=n.type;Qe(n.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(n===$e.current){if(l=n.alternate,l===null)throw Error(m(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn):e=[gn])}n=n.return}e!==null&&Sl(t,e,a,o),t.flags|=262144}function Vn(e){for(e=e.firstContext;e!==null;){if(!Qe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ma=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return hh(Ma,e)}function Ln(e,t){return Ma===null&&Da(e),hh(e,t)}function hh(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},jt===null){if(e===null)throw Error(m(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return a}var pg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bg=S.unstable_scheduleCallback,kg=S.unstable_NormalPriority,ve={$$typeof:_e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new pg,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&bg(kg,function(){e.controller.abort()})}var zo=null,_l=0,Pa=0,Za=null;function Ig(e,t){if(zo===null){var a=zo=[];_l=0,Pa=Ds(),Za={status:"pending",value:void 0,then:function(o){a.push(o)}}}return _l++,t.then(dh,dh),t}function dh(){if(--_l===0&&zo!==null){Za!==null&&(Za.status="fulfilled");var e=zo;zo=null,Pa=0,Za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vg(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var uh=p.S;p.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ig(e,t),uh!==null&&uh(e,t)};var Aa=v(null);function Ml(){var e=Aa.current;return e!==null?e:he.pooledCache}function Un(e,t){t===null?T(Aa,Aa.current):T(Aa,t.pool)}function ch(){var e=Ml();return e===null?null:{parent:ve._currentValue,pool:e}}var Go=Error(m(460)),gh=Error(m(474)),Kn=Error(m(542)),Dl={then:function(){}};function mh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fn(){}function yh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Fn,Fn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wh(e),e;default:if(typeof t.status=="string")t.then(Fn,Fn);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wh(e),e}throw Jo=t,Go}}var Jo=null;function fh(){if(Jo===null)throw Error(m(459));var e=Jo;return Jo=null,e}function wh(e){if(e===Go||e===Kn)throw Error(m(483))}var Xt=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ee&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=xn(e),oh(e,null,a),t}return En(e,o,t,a),xn(e)}function Vo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,dr(e,a)}}function Cl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bl=!1;function Lo(){if(Bl){var e=Za;if(e!==null)throw e}}function Uo(e,t,a,o){Bl=!1;var n=e.updateQueue;Xt=!1;var i=n.firstBaseUpdate,l=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,g=r.next;r.next=null,l===null?i=g:l.next=g,l=r;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==l&&(s===null?w.firstBaseUpdate=g:s.next=g,w.lastBaseUpdate=r))}if(i!==null){var k=n.baseState;l=0,w=g=r=null,s=i;do{var y=s.lane&-536870913,f=y!==s.lane;if(f?($&y)===y:(o&y)===y){y!==0&&y===Pa&&(Bl=!0),w!==null&&(w=w.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var x=e,R=s;y=t;var ie=a;switch(R.tag){case 1:if(x=R.payload,typeof x=="function"){k=x.call(ie,k,y);break e}k=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=R.payload,y=typeof x=="function"?x.call(ie,k,y):x,y==null)break e;k=N({},k,y);break e;case 2:Xt=!0}}y=s.callback,y!==null&&(e.flags|=64,f&&(e.flags|=8192),f=n.callbacks,f===null?n.callbacks=[y]:f.push(y))}else f={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(g=w=f,r=k):w=w.next=f,l|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;f=s,s=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);w===null&&(r=k),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=w,i===null&&(n.shared.lanes=0),la|=l,e.lanes=l,e.memoizedState=k}}function ph(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function bh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ph(a[e],t)}var eo=v(null),Yn=v(0);function kh(e,t){e=Lt,T(Yn,e),T(eo,t),Lt=e|t.baseLanes}function Nl(){T(Yn,Lt),T(eo,eo.current)}function Ol(){Lt=Yn.current,D(eo),D(Yn)}var Zt=0,L=null,oe=null,ke=null,$n=!1,to=!1,Ha=!1,qn=0,Ko=0,ao=null,Sg=0;function pe(){throw Error(m(321))}function Rl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Qe(e[a],t[a]))return!1;return!0}function jl(e,t,a,o,n,i){return Zt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,p.H=e===null||e.memoizedState===null?od:nd,Ha=!1,i=a(o,n),Ha=!1,to&&(i=vh(t,a,o,n)),Ih(e),i}function Ih(e){p.H=ti;var t=oe!==null&&oe.next!==null;if(Zt=0,ke=oe=L=null,$n=!1,Ko=0,ao=null,t)throw Error(m(300));e===null||He||(e=e.dependencies,e!==null&&Vn(e)&&(He=!0))}function vh(e,t,a,o){L=e;var n=0;do{if(to&&(ao=null),Ko=0,to=!1,25<=n)throw Error(m(301));if(n+=1,ke=oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}p.H=Cg,i=t(a,o)}while(to);return i}function Tg(){var e=p.H,t=e.useState()[0];return t=typeof t.then=="function"?Fo(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(L.flags|=1024),t}function Wl(){var e=qn!==0;return qn=0,e}function El(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xl(e){if($n){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$n=!1}Zt=0,ke=oe=L=null,to=!1,Ko=qn=0,ao=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?L.memoizedState=ke=e:ke=ke.next=e,ke}function Ie(){if(oe===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ke===null?L.memoizedState:ke.next;if(t!==null)ke=t,oe=e;else{if(e===null)throw L.alternate===null?Error(m(467)):Error(m(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ke===null?L.memoizedState=ke=e:ke=ke.next=e}return ke}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=Ko;return Ko+=1,ao===null&&(ao=[]),e=yh(ao,e,t),t=L,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,p.H=t===null||t.memoizedState===null?od:nd),e}function Xn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fo(e);if(e.$$typeof===_e)return xe(e)}throw Error(m(438,String(e)))}function Gl(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=L.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zl(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=ft;return t.index++,a}function Et(e,t){return typeof t=="function"?t(e):t}function Qn(e){var t=Ie();return Jl(t,oe,e)}function Jl(e,t,a){var o=e.queue;if(o===null)throw Error(m(311));o.lastRenderedReducer=a;var n=e.baseQueue,i=o.pending;if(i!==null){if(n!==null){var l=n.next;n.next=i.next,i.next=l}t.baseQueue=n=i,o.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=l=null,r=null,g=t,w=!1;do{var k=g.lane&-536870913;if(k!==g.lane?($&k)===k:(Zt&k)===k){var y=g.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),k===Pa&&(w=!0);else if((Zt&y)===y){g=g.next,y===Pa&&(w=!0);continue}else k={lane:0,revertLane:g.revertLane,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=k,l=i):r=r.next=k,L.lanes|=y,la|=y;k=g.action,Ha&&a(i,k),i=g.hasEagerState?g.eagerState:a(i,k)}else y={lane:k,revertLane:g.revertLane,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(s=r=y,l=i):r=r.next=y,L.lanes|=k,la|=k;g=g.next}while(g!==null&&g!==t);if(r===null?l=i:r.next=s,!Qe(i,e.memoizedState)&&(He=!0,w&&(a=Za,a!==null)))throw a;e.memoizedState=i,e.baseState=l,e.baseQueue=r,o.lastRenderedState=i}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vl(e){var t=Ie(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do i=e(i,l.action),l=l.next;while(l!==n);Qe(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,o]}function Sh(e,t,a){var o=L,n=Ie(),i=Q;if(i){if(a===void 0)throw Error(m(407));a=a()}else a=t();var l=!Qe((oe||n).memoizedState,a);l&&(n.memoizedState=a,He=!0),n=n.queue;var s=Mh.bind(null,o,n,e);if(Yo(2048,8,s,[e]),n.getSnapshot!==t||l||ke!==null&&ke.memoizedState.tag&1){if(o.flags|=2048,oo(9,Pn(),_h.bind(null,o,n,a,t),null),he===null)throw Error(m(349));i||(Zt&124)!==0||Th(o,t,a)}return a}function Th(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=zl(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function _h(e,t,a,o){t.value=a,t.getSnapshot=o,Dh(t)&&Ah(e)}function Mh(e,t,a){return a(function(){Dh(t)&&Ah(e)})}function Dh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Qe(e,a)}catch{return!0}}function Ah(e){var t=$a(e,2);t!==null&&ot(t,e,2)}function Ll(e){var t=Ke();if(typeof e=="function"){var a=e;if(e=a(),Ha){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:e},t}function Hh(e,t,a,o){return e.baseState=a,Jl(e,oe,typeof o=="function"?o:Et)}function _g(e,t,a,o,n){if(ei(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};p.T!==null?a(!0):i.isTransition=!1,o(i),a=t.pending,a===null?(i.next=t.pending=i,Ch(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ch(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var i=p.T,l={};p.T=l;try{var s=a(n,o),r=p.S;r!==null&&r(l,s),Bh(e,t,s)}catch(g){Ul(e,t,g)}finally{p.T=i}}else try{i=a(n,o),Bh(e,t,i)}catch(g){Ul(e,t,g)}}function Bh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nh(e,t,o)},function(o){return Ul(e,t,o)}):Nh(e,t,a)}function Nh(e,t,a){t.status="fulfilled",t.value=a,Oh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ch(e,a)))}function Ul(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Oh(t),t=t.next;while(t!==o)}e.action=null}function Oh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rh(e,t){return t}function jh(e,t){if(Q){var a=he.formState;if(a!==null){e:{var o=L;if(Q){if(me){t:{for(var n=me,i=It;n.nodeType!==8;){if(!i){n=null;break t}if(n=bt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){me=bt(n.nextSibling),o=n.data==="F!";break e}}_a(o)}o=!1}o&&(t=a[0])}}return a=Ke(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rh,lastRenderedState:t},a.queue=o,a=ed.bind(null,L,o),o.dispatch=a,o=Ll(!1),i=ql.bind(null,L,!1,o.queue),o=Ke(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=_g.bind(null,L,n,i,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Wh(e){var t=Ie();return Eh(t,oe,e)}function Eh(e,t,a){if(t=Jl(e,t,Rh)[0],e=Qn(Et)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Fo(t)}catch(l){throw l===Go?Kn:l}else o=t;t=Ie();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,oo(9,Pn(),Mg.bind(null,n,a),null)),[o,i,e]}function Mg(e,t){e.action=t}function xh(e){var t=Ie(),a=oe;if(a!==null)return Eh(t,a,e);Ie(),t=t.memoizedState,a=Ie();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function oo(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=L.updateQueue,t===null&&(t=zl(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Pn(){return{destroy:void 0,resource:void 0}}function zh(){return Ie().memoizedState}function Zn(e,t,a,o){var n=Ke();o=o===void 0?null:o,L.flags|=e,n.memoizedState=oo(1|t,Pn(),a,o)}function Yo(e,t,a,o){var n=Ie();o=o===void 0?null:o;var i=n.memoizedState.inst;oe!==null&&o!==null&&Rl(o,oe.memoizedState.deps)?n.memoizedState=oo(t,i,a,o):(L.flags|=e,n.memoizedState=oo(1|t,i,a,o))}function Gh(e,t){Zn(8390656,8,e,t)}function Jh(e,t){Yo(2048,8,e,t)}function Vh(e,t){return Yo(4,2,e,t)}function Lh(e,t){return Yo(4,4,e,t)}function Uh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kh(e,t,a){a=a!=null?a.concat([e]):null,Yo(4,4,Uh.bind(null,t,e),a)}function Kl(){}function Fh(e,t){var a=Ie();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Rl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Yh(e,t){var a=Ie();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Rl(t,o[1]))return o[0];if(o=e(),Ha){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,t],o}function Fl(e,t,a){return a===void 0||(Zt&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Xd(),L.lanes|=e,la|=e,a)}function $h(e,t,a,o){return Qe(a,t)?a:eo.current!==null?(e=Fl(e,a,o),Qe(e,t)||(He=!0),e):(Zt&42)===0?(He=!0,e.memoizedState=a):(e=Xd(),L.lanes|=e,la|=e,t)}function qh(e,t,a,o,n){var i=_.p;_.p=i!==0&&8>i?i:8;var l=p.T,s={};p.T=s,ql(e,!1,t,a);try{var r=n(),g=p.S;if(g!==null&&g(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var w=vg(r,o);$o(e,t,w,at(e))}else $o(e,t,o,at(e))}catch(k){$o(e,t,{then:function(){},status:"rejected",reason:k},at())}finally{_.p=i,p.T=l}}function Dg(){}function Yl(e,t,a,o){if(e.tag!==5)throw Error(m(476));var n=Xh(e).queue;qh(e,n,t,E,a===null?Dg:function(){return Qh(e),a(o)})}function Xh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:E,baseState:E,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:E},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Et,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qh(e){var t=Xh(e).next.queue;$o(e,t,{},at())}function $l(){return xe(gn)}function Ph(){return Ie().memoizedState}function Zh(){return Ie().memoizedState}function Ag(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=at();e=Qt(a);var o=Pt(t,e,a);o!==null&&(ot(o,t,a),Vo(o,t,a)),t={cache:Tl()},e.payload=t;return}t=t.return}}function Hg(e,t,a){var o=at();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ei(e)?td(t,a):(a=ml(e,t,a,o),a!==null&&(ot(a,e,o),ad(a,t,o)))}function ed(e,t,a){var o=at();$o(e,t,a,o)}function $o(e,t,a,o){var n={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ei(e))td(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,a);if(n.hasEagerState=!0,n.eagerState=s,Qe(s,l))return En(e,t,n,0),he===null&&Wn(),!1}catch{}finally{}if(a=ml(e,t,n,o),a!==null)return ot(a,e,o),ad(a,t,o),!0}return!1}function ql(e,t,a,o){if(o={lane:2,revertLane:Ds(),action:o,hasEagerState:!1,eagerState:null,next:null},ei(e)){if(t)throw Error(m(479))}else t=ml(e,a,o,2),t!==null&&ot(t,e,2)}function ei(e){var t=e.alternate;return e===L||t!==null&&t===L}function td(e,t){to=$n=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ad(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,dr(e,a)}}var ti={readContext:xe,use:Xn,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe},od={readContext:xe,use:Xn,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Gh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Zn(4194308,4,Uh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Zn(4194308,4,e,t)},useInsertionEffect:function(e,t){Zn(4,2,e,t)},useMemo:function(e,t){var a=Ke();t=t===void 0?null:t;var o=e();if(Ha){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ke();if(a!==void 0){var n=a(t);if(Ha){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Hg.bind(null,L,e),[o.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:function(e){e=Ll(e);var t=e.queue,a=ed.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Ke();return Fl(a,e,t)},useTransition:function(){var e=Ll(!1);return e=qh.bind(null,L,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=L,n=Ke();if(Q){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),he===null)throw Error(m(349));($&124)!==0||Th(o,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Gh(Mh.bind(null,o,i,e),[e]),o.flags|=2048,oo(9,Pn(),_h.bind(null,o,i,a,t),null),a},useId:function(){var e=Ke(),t=he.identifierPrefix;if(Q){var a=Rt,o=Ot;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,t="«"+t+"R"+a,a=qn++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Sg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:$l,useFormState:jh,useActionState:jh,useOptimistic:function(e){var t=Ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ql.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:Gl,useCacheRefresh:function(){return Ke().memoizedState=Ag.bind(null,L)}},nd={readContext:xe,use:Xn,useCallback:Fh,useContext:xe,useEffect:Jh,useImperativeHandle:Kh,useInsertionEffect:Vh,useLayoutEffect:Lh,useMemo:Yh,useReducer:Qn,useRef:zh,useState:function(){return Qn(Et)},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Ie();return $h(a,oe.memoizedState,e,t)},useTransition:function(){var e=Qn(Et)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Fo(e),t]},useSyncExternalStore:Sh,useId:Ph,useHostTransitionStatus:$l,useFormState:Wh,useActionState:Wh,useOptimistic:function(e,t){var a=Ie();return Hh(a,oe,e,t)},useMemoCache:Gl,useCacheRefresh:Zh},Cg={readContext:xe,use:Xn,useCallback:Fh,useContext:xe,useEffect:Jh,useImperativeHandle:Kh,useInsertionEffect:Vh,useLayoutEffect:Lh,useMemo:Yh,useReducer:Vl,useRef:zh,useState:function(){return Vl(Et)},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Ie();return oe===null?Fl(a,e,t):$h(a,oe.memoizedState,e,t)},useTransition:function(){var e=Vl(Et)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Fo(e),t]},useSyncExternalStore:Sh,useId:Ph,useHostTransitionStatus:$l,useFormState:xh,useActionState:xh,useOptimistic:function(e,t){var a=Ie();return oe!==null?Hh(a,oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gl,useCacheRefresh:Zh},no=null,qo=0;function ai(e){var t=qo;return qo+=1,no===null&&(no=[]),yh(no,e,t)}function Xo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oi(e,t){throw t.$$typeof===Z?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function id(e){var t=e._init;return t(e._payload)}function ld(e){function t(u,d){if(e){var c=u.deletions;c===null?(u.deletions=[d],u.flags|=16):c.push(d)}}function a(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function o(u){for(var d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function n(u,d){return u=Nt(u,d),u.index=0,u.sibling=null,u}function i(u,d,c){return u.index=c,e?(c=u.alternate,c!==null?(c=c.index,c<d?(u.flags|=67108866,d):c):(u.flags|=67108866,d)):(u.flags|=1048576,d)}function l(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function s(u,d,c,b){return d===null||d.tag!==6?(d=fl(c,u.mode,b),d.return=u,d):(d=n(d,c),d.return=u,d)}function r(u,d,c,b){var A=c.type;return A===fe?w(u,d,c.props.children,b,c.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&id(A)===d.type)?(d=n(d,c.props),Xo(d,c),d.return=u,d):(d=zn(c.type,c.key,c.props,null,u.mode,b),Xo(d,c),d.return=u,d)}function g(u,d,c,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==c.containerInfo||d.stateNode.implementation!==c.implementation?(d=wl(c,u.mode,b),d.return=u,d):(d=n(d,c.children||[]),d.return=u,d)}function w(u,d,c,b,A){return d===null||d.tag!==7?(d=Ia(c,u.mode,b,A),d.return=u,d):(d=n(d,c),d.return=u,d)}function k(u,d,c){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=fl(""+d,u.mode,c),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ae:return c=zn(d.type,d.key,d.props,null,u.mode,c),Xo(c,d),c.return=u,c;case Te:return d=wl(d,u.mode,c),d.return=u,d;case Me:var b=d._init;return d=b(d._payload),k(u,d,c)}if(We(d)||De(d))return d=Ia(d,u.mode,c,null),d.return=u,d;if(typeof d.then=="function")return k(u,ai(d),c);if(d.$$typeof===_e)return k(u,Ln(u,d),c);oi(u,d)}return null}function y(u,d,c,b){var A=d!==null?d.key:null;if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return A!==null?null:s(u,d,""+c,b);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ae:return c.key===A?r(u,d,c,b):null;case Te:return c.key===A?g(u,d,c,b):null;case Me:return A=c._init,c=A(c._payload),y(u,d,c,b)}if(We(c)||De(c))return A!==null?null:w(u,d,c,b,null);if(typeof c.then=="function")return y(u,d,ai(c),b);if(c.$$typeof===_e)return y(u,d,Ln(u,c),b);oi(u,c)}return null}function f(u,d,c,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return u=u.get(c)||null,s(d,u,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ae:return u=u.get(b.key===null?c:b.key)||null,r(d,u,b,A);case Te:return u=u.get(b.key===null?c:b.key)||null,g(d,u,b,A);case Me:var U=b._init;return b=U(b._payload),f(u,d,c,b,A)}if(We(b)||De(b))return u=u.get(c)||null,w(d,u,b,A,null);if(typeof b.then=="function")return f(u,d,c,ai(b),A);if(b.$$typeof===_e)return f(u,d,c,Ln(d,b),A);oi(d,b)}return null}function x(u,d,c,b){for(var A=null,U=null,B=d,j=d=0,Be=null;B!==null&&j<c.length;j++){B.index>j?(Be=B,B=null):Be=B.sibling;var X=y(u,B,c[j],b);if(X===null){B===null&&(B=Be);break}e&&B&&X.alternate===null&&t(u,B),d=i(X,d,j),U===null?A=X:U.sibling=X,U=X,B=Be}if(j===c.length)return a(u,B),Q&&Sa(u,j),A;if(B===null){for(;j<c.length;j++)B=k(u,c[j],b),B!==null&&(d=i(B,d,j),U===null?A=B:U.sibling=B,U=B);return Q&&Sa(u,j),A}for(B=o(B);j<c.length;j++)Be=f(B,u,j,c[j],b),Be!==null&&(e&&Be.alternate!==null&&B.delete(Be.key===null?j:Be.key),d=i(Be,d,j),U===null?A=Be:U.sibling=Be,U=Be);return e&&B.forEach(function(ya){return t(u,ya)}),Q&&Sa(u,j),A}function R(u,d,c,b){if(c==null)throw Error(m(151));for(var A=null,U=null,B=d,j=d=0,Be=null,X=c.next();B!==null&&!X.done;j++,X=c.next()){B.index>j?(Be=B,B=null):Be=B.sibling;var ya=y(u,B,X.value,b);if(ya===null){B===null&&(B=Be);break}e&&B&&ya.alternate===null&&t(u,B),d=i(ya,d,j),U===null?A=ya:U.sibling=ya,U=ya,B=Be}if(X.done)return a(u,B),Q&&Sa(u,j),A;if(B===null){for(;!X.done;j++,X=c.next())X=k(u,X.value,b),X!==null&&(d=i(X,d,j),U===null?A=X:U.sibling=X,U=X);return Q&&Sa(u,j),A}for(B=o(B);!X.done;j++,X=c.next())X=f(B,u,j,X.value,b),X!==null&&(e&&X.alternate!==null&&B.delete(X.key===null?j:X.key),d=i(X,d,j),U===null?A=X:U.sibling=X,U=X);return e&&B.forEach(function(Bm){return t(u,Bm)}),Q&&Sa(u,j),A}function ie(u,d,c,b){if(typeof c=="object"&&c!==null&&c.type===fe&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ae:e:{for(var A=c.key;d!==null;){if(d.key===A){if(A=c.type,A===fe){if(d.tag===7){a(u,d.sibling),b=n(d,c.props.children),b.return=u,u=b;break e}}else if(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&id(A)===d.type){a(u,d.sibling),b=n(d,c.props),Xo(b,c),b.return=u,u=b;break e}a(u,d);break}else t(u,d);d=d.sibling}c.type===fe?(b=Ia(c.props.children,u.mode,b,c.key),b.return=u,u=b):(b=zn(c.type,c.key,c.props,null,u.mode,b),Xo(b,c),b.return=u,u=b)}return l(u);case Te:e:{for(A=c.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===c.containerInfo&&d.stateNode.implementation===c.implementation){a(u,d.sibling),b=n(d,c.children||[]),b.return=u,u=b;break e}else{a(u,d);break}else t(u,d);d=d.sibling}b=wl(c,u.mode,b),b.return=u,u=b}return l(u);case Me:return A=c._init,c=A(c._payload),ie(u,d,c,b)}if(We(c))return x(u,d,c,b);if(De(c)){if(A=De(c),typeof A!="function")throw Error(m(150));return c=A.call(c),R(u,d,c,b)}if(typeof c.then=="function")return ie(u,d,ai(c),b);if(c.$$typeof===_e)return ie(u,d,Ln(u,c),b);oi(u,c)}return typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint"?(c=""+c,d!==null&&d.tag===6?(a(u,d.sibling),b=n(d,c),b.return=u,u=b):(a(u,d),b=fl(c,u.mode,b),b.return=u,u=b),l(u)):a(u,d)}return function(u,d,c,b){try{qo=0;var A=ie(u,d,c,b);return no=null,A}catch(B){if(B===Go||B===Kn)throw B;var U=Pe(29,B,null,u.mode);return U.lanes=b,U.return=u,U}finally{}}}var io=ld(!0),sd=ld(!1),ct=v(null),vt=null;function ea(e){var t=e.alternate;T(Se,Se.current&1),T(ct,e),vt===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(vt=e)}function rd(e){if(e.tag===22){if(T(Se,Se.current),T(ct,e),vt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(vt=e)}}else ta()}function ta(){T(Se,Se.current),T(ct,ct.current)}function xt(e){D(ct),vt===e&&(vt=null),D(Se)}var Se=v(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zs(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Xl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ql={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=at(),n=Qt(o);n.payload=t,a!=null&&(n.callback=a),t=Pt(e,n,o),t!==null&&(ot(t,e,o),Vo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=at(),n=Qt(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Pt(e,n,o),t!==null&&(ot(t,e,o),Vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=at(),o=Qt(a);o.tag=2,t!=null&&(o.callback=t),t=Pt(e,o,a),t!==null&&(ot(t,e,a),Vo(t,e,a))}};function hd(e,t,a,o,n,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!No(a,o)||!No(n,i):!0}function dd(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ud(e){ii(e)}function cd(e){console.error(e)}function gd(e){ii(e)}function li(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function md(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Pl(e,t,a){return a=Qt(a),a.tag=3,a.payload={element:null},a.callback=function(){li(e,t)},a}function yd(e){return e=Qt(e),e.tag=3,e}function fd(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=o.value;e.payload=function(){return n(i)},e.callback=function(){md(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){md(t,a,o),typeof n!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var s=o.stack;this.componentDidCatch(o.value,{componentStack:s!==null?s:""})})}function Bg(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Eo(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 13:return vt===null?vs():a.alternate===null&&ye===0&&(ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Dl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Ts(e,o,n)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Ts(e,o,n)),!1}throw Error(m(435,a.tag))}return Ts(e,o,n),vs(),!1}if(Q)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==kl&&(e=Error(m(422),{cause:o}),Wo(rt(e,a)))):(o!==kl&&(t=Error(m(423),{cause:o}),Wo(rt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=rt(o,a),n=Pl(e.stateNode,o,n),Cl(e,n),ye!==4&&(ye=2)),!1;var i=Error(m(520),{cause:o});if(i=rt(i,a),on===null?on=[i]:on.push(i),ye!==4&&(ye=2),t===null)return!0;o=rt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Pl(a.stateNode,o,e),Cl(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=yd(n),fd(n,e,a,o),Cl(a,n),!1}a=a.return}while(a!==null);return!1}var wd=Error(m(461)),He=!1;function Ne(e,t,a,o){t.child=e===null?sd(t,null,a,o):io(t,e.child,a,o)}function pd(e,t,a,o,n){a=a.render;var i=t.ref;if("ref"in o){var l={};for(var s in o)s!=="ref"&&(l[s]=o[s])}else l=o;return Da(t),o=jl(e,t,a,l,i,n),s=Wl(),e!==null&&!He?(El(e,t,n),zt(e,t,n)):(Q&&s&&pl(t),t.flags|=1,Ne(e,t,o,n),t.child)}function bd(e,t,a,o,n){if(e===null){var i=a.type;return typeof i=="function"&&!yl(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,kd(e,t,i,o,n)):(e=zn(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ls(e,n)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(l,o)&&e.ref===t.ref)return zt(e,t,n)}return t.flags|=1,e=Nt(i,o),e.ref=t.ref,e.return=t,t.child=e}function kd(e,t,a,o,n){if(e!==null){var i=e.memoizedProps;if(No(i,o)&&e.ref===t.ref)if(He=!1,t.pendingProps=o=i,ls(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,zt(e,t,n)}return Zl(e,t,a,o,n)}function Id(e,t,a){var o=t.pendingProps,n=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~o}else t.childLanes=0,t.child=null;return vd(e,t,o,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Un(t,i!==null?i.cachePool:null),i!==null?kh(t,i):Nl(),rd(t);else return t.lanes=t.childLanes=536870912,vd(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(Un(t,i.cachePool),kh(t,i),ta(),t.memoizedState=null):(e!==null&&Un(t,null),Nl(),ta());return Ne(e,t,n,a),t.child}function vd(e,t,a,o){var n=Ml();return n=n===null?null:{parent:ve._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Un(t,null),Nl(),rd(t),e!==null&&Eo(e,t,o,!0),null}function si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zl(e,t,a,o,n){return Da(t),a=jl(e,t,a,o,void 0,n),o=Wl(),e!==null&&!He?(El(e,t,n),zt(e,t,n)):(Q&&o&&pl(t),t.flags|=1,Ne(e,t,a,n),t.child)}function Sd(e,t,a,o,n,i){return Da(t),t.updateQueue=null,a=vh(t,o,a,n),Ih(e),o=Wl(),e!==null&&!He?(El(e,t,i),zt(e,t,i)):(Q&&o&&pl(t),t.flags|=1,Ne(e,t,a,i),t.child)}function Td(e,t,a,o,n){if(Da(t),t.stateNode===null){var i=qa,l=a.contextType;typeof l=="object"&&l!==null&&(i=xe(l)),i=new a(o,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ql,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=o,i.state=t.memoizedState,i.refs={},Al(t),l=a.contextType,i.context=typeof l=="object"&&l!==null?xe(l):qa,i.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(Xl(t,a,l,o),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&Ql.enqueueReplaceState(i,i.state,null),Uo(t,o,i,n),Lo(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ca(a,s);i.props=r;var g=i.context,w=a.contextType;l=qa,typeof w=="object"&&w!==null&&(l=xe(w));var k=a.getDerivedStateFromProps;w=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||g!==l)&&dd(t,i,o,l),Xt=!1;var y=t.memoizedState;i.state=y,Uo(t,o,i,n),Lo(),g=t.memoizedState,s||y!==g||Xt?(typeof k=="function"&&(Xl(t,a,k,o),g=t.memoizedState),(r=Xt||hd(t,a,r,o,y,g,l))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=g),i.props=o,i.state=g,i.context=l,o=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Hl(e,t),l=t.memoizedProps,w=Ca(a,l),i.props=w,k=t.pendingProps,y=i.context,g=a.contextType,r=qa,typeof g=="object"&&g!==null&&(r=xe(g)),s=a.getDerivedStateFromProps,(g=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==k||y!==r)&&dd(t,i,o,r),Xt=!1,y=t.memoizedState,i.state=y,Uo(t,o,i,n),Lo();var f=t.memoizedState;l!==k||y!==f||Xt||e!==null&&e.dependencies!==null&&Vn(e.dependencies)?(typeof s=="function"&&(Xl(t,a,s,o),f=t.memoizedState),(w=Xt||hd(t,a,w,o,y,f,r)||e!==null&&e.dependencies!==null&&Vn(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,f,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,f,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=f),i.props=o,i.state=f,i.context=r,o=w):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),o=!1)}return i=o,si(e,t),o=(t.flags&128)!==0,i||o?(i=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&o?(t.child=io(t,e.child,null,n),t.child=io(t,null,a,n)):Ne(e,t,a,n),t.memoizedState=i.state,e=t.child):e=zt(e,t,n),e}function _d(e,t,a,o){return jo(),t.flags|=256,Ne(e,t,a,o),t.child}var es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ts(e){return{baseLanes:e,cachePool:ch()}}function as(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function Md(e,t,a){var o=t.pendingProps,n=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Q){if(n?ea(t):ta(),Q){var s=me,r;if(r=s){e:{for(r=s,s=It;r.nodeType!==8;){if(!s){s=null;break e}if(r=bt(r.nextSibling),r===null){s=null;break e}}s=r}s!==null?(t.memoizedState={dehydrated:s,treeContext:va!==null?{id:Ot,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},r=Pe(18,null,null,0),r.stateNode=s,r.return=t,t.child=r,Ge=t,me=null,r=!0):r=!1}r||_a(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return zs(s)?t.lanes=32:t.lanes=536870912,null;xt(t)}return s=o.children,o=o.fallback,n?(ta(),n=t.mode,s=ri({mode:"hidden",children:s},n),o=Ia(o,n,a,null),s.return=t,o.return=t,s.sibling=o,t.child=s,n=t.child,n.memoizedState=ts(a),n.childLanes=as(e,l,a),t.memoizedState=es,o):(ea(t),os(t,s))}if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(ea(t),t.flags&=-257,t=ns(e,t,a)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),n=o.fallback,s=t.mode,o=ri({mode:"visible",children:o.children},s),n=Ia(n,s,a,null),n.flags|=2,o.return=t,n.return=t,o.sibling=n,t.child=o,io(t,e.child,null,a),o=t.child,o.memoizedState=ts(a),o.childLanes=as(e,l,a),t.memoizedState=es,t=n);else if(ea(t),zs(s)){if(l=s.nextSibling&&s.nextSibling.dataset,l)var g=l.dgst;l=g,o=Error(m(419)),o.stack="",o.digest=l,Wo({value:o,source:null,stack:null}),t=ns(e,t,a)}else if(He||Eo(e,t,a,!1),l=(a&e.childLanes)!==0,He||l){if(l=he,l!==null&&(o=a&-a,o=(o&42)!==0?1:Gi(o),o=(o&(l.suspendedLanes|a))!==0?0:o,o!==0&&o!==r.retryLane))throw r.retryLane=o,$a(e,o),ot(l,e,o),wd;s.data==="$?"||vs(),t=ns(e,t,a)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,me=bt(s.nextSibling),Ge=t,Q=!0,Ta=null,It=!1,e!==null&&(dt[ut++]=Ot,dt[ut++]=Rt,dt[ut++]=va,Ot=e.id,Rt=e.overflow,va=t),t=os(t,o.children),t.flags|=4096);return t}return n?(ta(),n=o.fallback,s=t.mode,r=e.child,g=r.sibling,o=Nt(r,{mode:"hidden",children:o.children}),o.subtreeFlags=r.subtreeFlags&65011712,g!==null?n=Nt(g,n):(n=Ia(n,s,a,null),n.flags|=2),n.return=t,o.return=t,o.sibling=n,t.child=o,o=n,n=t.child,s=e.child.memoizedState,s===null?s=ts(a):(r=s.cachePool,r!==null?(g=ve._currentValue,r=r.parent!==g?{parent:g,pool:g}:r):r=ch(),s={baseLanes:s.baseLanes|a,cachePool:r}),n.memoizedState=s,n.childLanes=as(e,l,a),t.memoizedState=es,o):(ea(t),a=e.child,e=a.sibling,a=Nt(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function os(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=Pe(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ns(e,t,a){return io(t,e.child,null,a),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dd(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),vl(e.return,t,a)}function is(e,t,a,o,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n)}function Ad(e,t,a){var o=t.pendingProps,n=o.revealOrder,i=o.tail;if(Ne(e,t,o.children,a),o=Se.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,a,t);else if(e.tag===19)Dd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(T(Se,o),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ni(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),is(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ni(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}is(t,!0,a,null,i);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),la|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Eo(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=Nt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Nt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ls(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vn(e)))}function Ng(e,t,a){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),qt(t,ve,e.memoizedState.cache),jo();break;case 27:case 5:ji(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:qt(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Md(e,t,a):(ea(t),e=zt(e,t,a),e!==null?e.sibling:null);ea(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Eo(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Ad(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),T(Se,Se.current),o)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,a);case 24:qt(t,ve,e.memoizedState.cache)}return zt(e,t,a)}function Hd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!ls(e,a)&&(t.flags&128)===0)return He=!1,Ng(e,t,a);He=(e.flags&131072)!==0}else He=!1,Q&&(t.flags&1048576)!==0&&ih(t,Jn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,n=o._init;if(o=n(o._payload),t.type=o,typeof o=="function")yl(o)?(e=Ca(o,e),t.tag=1,t=Td(null,t,o,e,a)):(t.tag=0,t=Zl(null,t,o,e,a));else{if(o!=null){if(n=o.$$typeof,n===Ve){t.tag=11,t=pd(null,t,o,e,a);break e}else if(n===we){t.tag=14,t=bd(null,t,o,e,a);break e}}throw t=Ht(o)||o,Error(m(306,t,""))}}return t;case 0:return Zl(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Ca(o,t.pendingProps),Td(e,t,o,n,a);case 3:e:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(m(387));o=t.pendingProps;var i=t.memoizedState;n=i.element,Hl(e,t),Uo(t,o,null,a);var l=t.memoizedState;if(o=l.cache,qt(t,ve,o),o!==i.cache&&Sl(t,[ve],a,!0),Lo(),o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_d(e,t,o,a);break e}else if(o!==n){n=rt(Error(m(424)),t),Wo(n),t=_d(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(me=bt(e.firstChild),Ge=t,Q=!0,Ta=null,It=!0,a=sd(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(jo(),o===n){t=zt(e,t,a);break e}Ne(e,t,o,a)}t=t.child}return t;case 26:return si(e,t),e===null?(a=Ou(t.type,null,t.pendingProps,null))?t.memoizedState=a:Q||(a=t.type,e=t.pendingProps,o=vi(G.current).createElement(a),o[Ee]=t,o[Le]=e,Re(o,a,e),Ae(o),t.stateNode=o):t.memoizedState=Ou(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ji(t),e===null&&Q&&(o=t.stateNode=Cu(t.type,t.pendingProps,G.current),Ge=t,It=!0,n=me,da(t.type)?(Gs=n,me=bt(o.firstChild)):me=n),Ne(e,t,t.pendingProps.children,a),si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Q&&((n=o=me)&&(o=lm(o,t.type,t.pendingProps,It),o!==null?(t.stateNode=o,Ge=t,me=bt(o.firstChild),It=!1,n=!0):n=!1),n||_a(t)),ji(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ws(n,i)?o=null:l!==null&&Ws(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=jl(e,t,Tg,null,null,a),gn._currentValue=n),si(e,t),Ne(e,t,o,a),t.child;case 6:return e===null&&Q&&((e=a=me)&&(a=sm(a,t.pendingProps,It),a!==null?(t.stateNode=a,Ge=t,me=null,e=!0):e=!1),e||_a(t)),null;case 13:return Md(e,t,a);case 4:return de(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=io(t,null,o,a):Ne(e,t,o,a),t.child;case 11:return pd(e,t,t.type,t.pendingProps,a);case 7:return Ne(e,t,t.pendingProps,a),t.child;case 8:return Ne(e,t,t.pendingProps.children,a),t.child;case 12:return Ne(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,qt(t,t.type,o.value),Ne(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Da(t),n=xe(n),o=o(n),t.flags|=1,Ne(e,t,o,a),t.child;case 14:return bd(e,t,t.type,t.pendingProps,a);case 15:return kd(e,t,t.type,t.pendingProps,a);case 19:return Ad(e,t,a);case 31:return o=t.pendingProps,a=t.mode,o={mode:o.mode,children:o.children},e===null?(a=ri(o,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Nt(e.child,o),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Id(e,t,a);case 24:return Da(t),o=xe(ve),e===null?(n=Ml(),n===null&&(n=he,i=Tl(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:o,cache:n},Al(t),qt(t,ve,n)):((e.lanes&a)!==0&&(Hl(e,t),Uo(t,null,null,a),Lo()),n=e.memoizedState,i=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),qt(t,ve,o)):(o=i.cache,qt(t,ve,o),o!==n.cache&&Sl(t,[ve],a,!0))),Ne(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Gt(e){e.flags|=4}function Cd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xu(t)){if(t=ct.current,t!==null&&(($&4194048)===$?vt!==null:($&62914560)!==$&&($&536870912)===0||t!==vt))throw Jo=Dl,gh;e.flags|=8192}}function hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rr():536870912,e.lanes|=t,ho|=t)}function Qo(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Og(e,t,a){var o=t.pendingProps;switch(bl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Wt(ve),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rh())),ge(t),null;case 26:return a=t.memoizedState,e===null?(Gt(t),a!==null?(ge(t),Cd(t,a)):(ge(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gt(t),ge(t),Cd(t,a)):(ge(t),t.flags&=-16777217):(e.memoizedProps!==o&&Gt(t),ge(t),t.flags&=-16777217),null;case 27:kn(t),a=G.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Gt(t);else{if(!o){if(t.stateNode===null)throw Error(m(166));return ge(t),null}e=O.current,Ro(t)?lh(t):(e=Cu(n,o,a),t.stateNode=e,Gt(t))}return ge(t),null;case 5:if(kn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Gt(t);else{if(!o){if(t.stateNode===null)throw Error(m(166));return ge(t),null}if(e=O.current,Ro(t))lh(t);else{switch(n=vi(G.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?n.createElement("select",{is:o.is}):n.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?n.createElement(a,{is:o.is}):n.createElement(a)}}e[Ee]=t,e[Le]=o;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Re(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return ge(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Gt(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(m(166));if(e=G.current,Ro(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Ge,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Ee]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Su(e.nodeValue,a)),e||_a(t)}else e=vi(e).createTextNode(o),e[Ee]=t,t.stateNode=e}return ge(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ro(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Ee]=t}else jo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),n=!1}else n=rh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(xt(t),t):(xt(t),null)}if(xt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool);var i=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(i=o.memoizedState.cachePool.pool),i!==n&&(o.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hi(t,t.updateQueue),ge(t),null;case 4:return Kt(),e===null&&Bs(t.stateNode.containerInfo),ge(t),null;case 10:return Wt(t.type),ge(t),null;case 19:if(D(Se),n=t.memoizedState,n===null)return ge(t),null;if(o=(t.flags&128)!==0,i=n.rendering,i===null)if(o)Qo(n,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ni(e),i!==null){for(t.flags|=128,Qo(n,!1),e=i.updateQueue,t.updateQueue=e,hi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)nh(a,e),a=a.sibling;return T(Se,Se.current&1|2),t.child}e=e.sibling}n.tail!==null&&kt()>ci&&(t.flags|=128,o=!0,Qo(n,!1),t.lanes=4194304)}else{if(!o)if(e=ni(i),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,hi(t,e),Qo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Q)return ge(t),null}else 2*kt()-n.renderingStartTime>ci&&a!==536870912&&(t.flags|=128,o=!0,Qo(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=kt(),t.sibling=null,e=Se.current,T(Se,o?e&1|2:e&1),t):(ge(t),null);case 22:case 23:return xt(t),Ol(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),a=t.updateQueue,a!==null&&hi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&D(Aa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(ve),ge(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Rg(e,t){switch(bl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(ve),Kt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kn(t),null;case 13:if(xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));jo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Se),null;case 4:return Kt(),null;case 10:return Wt(t.type),null;case 22:case 23:return xt(t),Ol(),e!==null&&D(Aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(ve),null;case 25:return null;default:return null}}function Bd(e,t){switch(bl(t),t.tag){case 3:Wt(ve),Kt();break;case 26:case 27:case 5:kn(t);break;case 4:Kt();break;case 13:xt(t);break;case 19:D(Se);break;case 10:Wt(t.type);break;case 22:case 23:xt(t),Ol(),e!==null&&D(Aa);break;case 24:Wt(ve)}}function Po(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var i=a.create,l=a.inst;o=i(),l.destroy=o}a=a.next}while(a!==n)}}catch(s){re(t,t.return,s)}}function aa(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var i=n.next;o=i;do{if((o.tag&e)===e){var l=o.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,n=t;var r=a,g=s;try{g()}catch(w){re(n,r,w)}}}o=o.next}while(o!==i)}}catch(w){re(t,t.return,w)}}function Nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{bh(t,a)}catch(o){re(e,e.return,o)}}}function Od(e,t,a){a.props=Ca(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){re(e,t,o)}}function Zo(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){re(e,t,n)}}function St(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){re(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){re(e,t,n)}else a.current=null}function Rd(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){re(e,e.return,n)}}function ss(e,t,a){try{var o=e.stateNode;tm(o,e.type,a,t),o[Le]=t}catch(n){re(e,e.return,n)}}function jd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&da(e.type)||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ii));else if(o!==4&&(o===27&&da(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(hs(e,t,a),e=e.sibling;e!==null;)hs(e,t,a),e=e.sibling}function di(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(di(e,t,a),e=e.sibling;e!==null;)di(e,t,a),e=e.sibling}function Wd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Re(t,o,a),t[Ee]=e,t[Le]=a}catch(i){re(e,e.return,i)}}var Jt=!1,be=!1,ds=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function jg(e,t){if(e=e.containerInfo,Rs=Ai,e=$r(e),rl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var l=0,s=-1,r=-1,g=0,w=0,k=e,y=null;t:for(;;){for(var f;k!==a||n!==0&&k.nodeType!==3||(s=l+n),k!==i||o!==0&&k.nodeType!==3||(r=l+o),k.nodeType===3&&(l+=k.nodeValue.length),(f=k.firstChild)!==null;)y=k,k=f;for(;;){if(k===e)break t;if(y===a&&++g===n&&(s=l),y===i&&++w===o&&(r=l),(f=k.nextSibling)!==null)break;k=y,y=k.parentNode}k=f}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},Ai=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){switch(t=Ce,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,o=a.stateNode;try{var x=Ca(a.type,n,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(x,i),o.__reactInternalSnapshotBeforeUpdate=e}catch(R){re(a,a.return,R)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)xs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}}function xd(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&Po(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){re(a,a.return,l)}else{var n=Ca(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){re(a,a.return,l)}}o&64&&Nd(a),o&512&&Zo(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{bh(e,t)}catch(l){re(a,a.return,l)}}break;case 27:t===null&&o&4&&Wd(a);case 26:case 5:oa(e,a),t===null&&o&4&&Rd(a),o&512&&Zo(a,a.return);break;case 12:oa(e,a);break;case 13:oa(e,a),o&4&&Jd(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ug.bind(null,a),rm(e,a))));break;case 22:if(o=a.memoizedState!==null||Jt,!o){t=t!==null&&t.memoizedState!==null||be,n=Jt;var i=be;Jt=o,(be=t)&&!i?na(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),Jt=n,be=i}break;case 30:break;default:oa(e,a)}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Li(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ue=null,Fe=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Gd(e,t,a),a=a.sibling}function Gd(e,t,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ko,a)}catch{}switch(a.tag){case 26:be||St(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||St(a,t);var o=ue,n=Fe;da(a.type)&&(ue=a.stateNode,Fe=!1),Vt(e,t,a),hn(a.stateNode),ue=o,Fe=n;break;case 5:be||St(a,t);case 6:if(o=ue,n=Fe,ue=null,Vt(e,t,a),ue=o,Fe=n,ue!==null)if(Fe)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(a.stateNode)}catch(i){re(a,t,i)}else try{ue.removeChild(a.stateNode)}catch(i){re(a,t,i)}break;case 18:ue!==null&&(Fe?(e=ue,Au(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wn(e)):Au(ue,a.stateNode));break;case 4:o=ue,n=Fe,ue=a.stateNode.containerInfo,Fe=!0,Vt(e,t,a),ue=o,Fe=n;break;case 0:case 11:case 14:case 15:be||aa(2,a,t),be||aa(4,a,t),Vt(e,t,a);break;case 1:be||(St(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Od(a,t,o)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:be=(o=be)||a.memoizedState!==null,Vt(e,t,a),be=o;break;default:Vt(e,t,a)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wn(e)}catch(a){re(t,t.return,a)}}function Wg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ed),t;default:throw Error(m(435,e.tag))}}function us(e,t){var a=Wg(e);t.forEach(function(o){var n=Kg.bind(null,e,o);a.has(o)||(a.add(o),o.then(n,n))})}function Ze(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 27:if(da(s.type)){ue=s.stateNode,Fe=!1;break e}break;case 5:ue=s.stateNode,Fe=!1;break e;case 3:case 4:ue=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(ue===null)throw Error(m(160));Gd(i,l,n),ue=null,Fe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Vd(t,e),t=t.sibling}var pt=null;function Vd(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),et(e),o&4&&(aa(3,e,e.return),Po(3,e),aa(5,e,e.return));break;case 1:Ze(t,e),et(e),o&512&&(be||a===null||St(a,a.return)),o&64&&Jt&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=pt;if(Ze(t,e),et(e),o&512&&(be||a===null||St(a,a.return)),o&4){var i=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":i=n.getElementsByTagName("title")[0],(!i||i[So]||i[Ee]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(o),n.head.insertBefore(i,n.querySelector("head > title"))),Re(i,o,a),i[Ee]=e,Ae(i),o=i;break e;case"link":var l=Wu("link","href",n).get(o+(a.href||""));if(l){for(var s=0;s<l.length;s++)if(i=l[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(s,1);break t}}i=n.createElement(o),Re(i,o,a),n.head.appendChild(i);break;case"meta":if(l=Wu("meta","content",n).get(o+(a.content||""))){for(s=0;s<l.length;s++)if(i=l[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(s,1);break t}}i=n.createElement(o),Re(i,o,a),n.head.appendChild(i);break;default:throw Error(m(468,o))}i[Ee]=e,Ae(i),o=i}e.stateNode=o}else Eu(n,e.type,e.stateNode);else e.stateNode=ju(n,o,e.memoizedProps);else i!==o?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,o===null?Eu(n,e.type,e.stateNode):ju(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ss(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ze(t,e),et(e),o&512&&(be||a===null||St(a,a.return)),a!==null&&o&4&&ss(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ze(t,e),et(e),o&512&&(be||a===null||St(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(f){re(e,e.return,f)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,ss(e,n,a!==null?a.memoizedProps:n)),o&1024&&(ds=!0);break;case 6:if(Ze(t,e),et(e),o&4){if(e.stateNode===null)throw Error(m(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(f){re(e,e.return,f)}}break;case 3:if(_i=null,n=pt,pt=Si(t.containerInfo),Ze(t,e),pt=n,et(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wn(t.containerInfo)}catch(f){re(e,e.return,f)}ds&&(ds=!1,Ld(e));break;case 4:o=pt,pt=Si(e.stateNode.containerInfo),Ze(t,e),et(e),pt=o;break;case 12:Ze(t,e),et(e);break;case 13:Ze(t,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ws=kt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,us(e,o)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,g=Jt,w=be;if(Jt=g||n,be=w||r,Ze(t,e),be=w,Jt=g,et(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Jt||be||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{s=r.stateNode;var k=r.memoizedProps.style,y=k!=null&&k.hasOwnProperty("display")?k.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(f){re(r,r.return,f)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(f){re(r,r.return,f)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,us(e,a))));break;case 19:Ze(t,e),et(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,us(e,o)));break;case 30:break;case 21:break;default:Ze(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(jd(o)){a=o;break}o=o.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,i=rs(e);di(e,i,n);break;case 5:var l=a.stateNode;a.flags&32&&(Ja(l,""),a.flags&=-33);var s=rs(e);di(e,s,l);break;case 3:case 4:var r=a.stateNode.containerInfo,g=rs(e);hs(e,g,r);break;default:throw Error(m(161))}}catch(w){re(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xd(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:aa(4,t,t.return),Ba(t);break;case 1:St(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Od(t,t.return,a),Ba(t);break;case 27:hn(t.stateNode);case 26:case 5:St(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,i=t,l=i.flags;switch(i.tag){case 0:case 11:case 15:na(n,i,a),Po(4,i);break;case 1:if(na(n,i,a),o=i,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){re(o,o.return,g)}if(o=i,n=o.updateQueue,n!==null){var s=o.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)ph(r[n],s)}catch(g){re(o,o.return,g)}}a&&l&64&&Nd(i),Zo(i,i.return);break;case 27:Wd(i);case 26:case 5:na(n,i,a),a&&o===null&&l&4&&Rd(i),Zo(i,i.return);break;case 12:na(n,i,a);break;case 13:na(n,i,a),a&&l&4&&Jd(n,i);break;case 22:i.memoizedState===null&&na(n,i,a),Zo(i,i.return);break;case 30:break;default:na(n,i,a)}t=t.sibling}}function cs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xo(a))}function gs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xo(e))}function Tt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,o),t=t.sibling}function Ud(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,a,o),n&2048&&Po(9,t);break;case 1:Tt(e,t,a,o);break;case 3:Tt(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xo(e)));break;case 12:if(n&2048){Tt(e,t,a,o),e=t.stateNode;try{var i=t.memoizedProps,l=i.id,s=i.onPostCommit;typeof s=="function"&&s(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){re(t,t.return,r)}}else Tt(e,t,a,o);break;case 13:Tt(e,t,a,o);break;case 23:break;case 22:i=t.stateNode,l=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,a,o):en(e,t):i._visibility&2?Tt(e,t,a,o):(i._visibility|=2,lo(e,t,a,o,(t.subtreeFlags&10256)!==0)),n&2048&&cs(l,t);break;case 24:Tt(e,t,a,o),n&2048&&gs(t.alternate,t);break;default:Tt(e,t,a,o)}}function lo(e,t,a,o,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,l=t,s=a,r=o,g=l.flags;switch(l.tag){case 0:case 11:case 15:lo(i,l,s,r,n),Po(8,l);break;case 23:break;case 22:var w=l.stateNode;l.memoizedState!==null?w._visibility&2?lo(i,l,s,r,n):en(i,l):(w._visibility|=2,lo(i,l,s,r,n)),n&&g&2048&&cs(l.alternate,l);break;case 24:lo(i,l,s,r,n),n&&g&2048&&gs(l.alternate,l);break;default:lo(i,l,s,r,n)}t=t.sibling}}function en(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:en(a,o),n&2048&&cs(o.alternate,o);break;case 24:en(a,o),n&2048&&gs(o.alternate,o);break;default:en(a,o)}t=t.sibling}}var tn=8192;function so(e){if(e.subtreeFlags&tn)for(e=e.child;e!==null;)Kd(e),e=e.sibling}function Kd(e){switch(e.tag){case 26:so(e),e.flags&tn&&e.memoizedState!==null&&Im(pt,e.memoizedState,e.memoizedProps);break;case 5:so(e);break;case 3:case 4:var t=pt;pt=Si(e.stateNode.containerInfo),so(e),pt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=tn,tn=16777216,so(e),tn=t):so(e));break;default:so(e)}}function Fd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function an(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ce=o,$d(o,e)}Fd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:an(e),e.flags&2048&&aa(9,e,e.return);break;case 3:an(e);break;case 12:an(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ui(e)):an(e);break;default:an(e)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ce=o,$d(o,e)}Fd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:aa(8,t,t.return),ui(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ui(t));break;default:ui(t)}e=e.sibling}}function $d(e,t){for(;Ce!==null;){var a=Ce;switch(a.tag){case 0:case 11:case 15:aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ce=o;else e:for(a=e;Ce!==null;){o=Ce;var n=o.sibling,i=o.return;if(zd(o),o===a){Ce=null;break e}if(n!==null){n.return=i,Ce=n;break e}Ce=i}}}var Eg={getCacheForType:function(e){var t=xe(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},xg=typeof WeakMap=="function"?WeakMap:Map,ee=0,he=null,K=null,$=0,te=0,tt=null,ia=!1,ro=!1,ms=!1,Lt=0,ye=0,la=0,Na=0,ys=0,gt=0,ho=0,on=null,Ye=null,fs=!1,ws=0,ci=1/0,gi=null,sa=null,Oe=0,ra=null,uo=null,co=0,ps=0,bs=null,qd=null,nn=0,ks=null;function at(){if((ee&2)!==0&&$!==0)return $&-$;if(p.T!==null){var e=Pa;return e!==0?e:Ds()}return ur()}function Xd(){gt===0&&(gt=($&536870912)===0||Q?sr():536870912);var e=ct.current;return e!==null&&(e.flags|=32),gt}function ot(e,t,a){(e===he&&(te===2||te===9)||e.cancelPendingCommit!==null)&&(go(e,0),ha(e,$,gt,!1)),vo(e,a),((ee&2)===0||e!==he)&&(e===he&&((ee&2)===0&&(Na|=a),ye===4&&ha(e,$,gt,!1)),_t(e))}function Qd(e,t,a){if((ee&6)!==0)throw Error(m(327));var o=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Io(e,t),n=o?Jg(e,t):Ss(e,t,!0),i=o;do{if(n===0){ro&&!o&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!zg(a)){n=Ss(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var s=e;n=on;var r=s.current.memoizedState.isDehydrated;if(r&&(go(s,l).flags|=256),l=Ss(s,l,!1),l!==2){if(ms&&!r){s.errorRecoveryDisabledLanes|=i,Na|=i,n=4;break e}i=Ye,Ye=n,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}n=l}if(i=!1,n!==2)continue}}if(n===1){go(e,0),ha(e,t,0,!0);break}e:{switch(o=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ha(o,t,gt,!ia);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=ws+300-kt(),10<n)){if(ha(o,t,gt,!ia),Tn(o,0,!0)!==0)break e;o.timeoutHandle=Mu(Pd.bind(null,o,a,Ye,gi,fs,t,gt,Na,ho,ia,i,2,-0,0),n);break e}Pd(o,a,Ye,gi,fs,t,gt,Na,ho,ia,i,0,-0,0)}}break}while(!0);_t(e)}function Pd(e,t,a,o,n,i,l,s,r,g,w,k,y,f){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(cn={stylesheets:null,count:0,unsuspend:km},Kd(t),k=vm(),k!==null)){e.cancelPendingCommit=k(iu.bind(null,e,t,i,a,o,n,l,s,r,w,1,y,f)),ha(e,i,l,!g);return}iu(e,t,i,a,o,n,l,s,r)}function zg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],i=n.getSnapshot;n=n.value;try{if(!Qe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,o){t&=~ys,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var i=31-Xe(n),l=1<<i;o[i]=-1,n&=~l}a!==0&&hr(e,a,t)}function mi(){return(ee&6)===0?(ln(0),!1):!0}function Is(){if(K!==null){if(te===0)var e=K.return;else e=K,jt=Ma=null,xl(e),no=null,qo=0,e=K;for(;e!==null;)Bd(e.alternate,e),e=e.return;K=null}}function go(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,om(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Is(),he=e,K=a=Nt(e.current,null),$=t,te=0,tt=null,ia=!1,ro=Io(e,t),ms=!1,ho=gt=ys=Na=la=ye=0,Ye=on=null,fs=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-Xe(o),i=1<<n;t|=e[n],o&=~i}return Lt=t,Wn(),a}function Zd(e,t){L=null,p.H=ti,t===Go||t===Kn?(t=fh(),te=3):t===gh?(t=fh(),te=4):te=t===wd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,tt=t,K===null&&(ye=1,li(e,rt(t,e.current)))}function eu(){var e=p.H;return p.H=ti,e===null?ti:e}function tu(){var e=p.A;return p.A=Eg,e}function vs(){ye=4,ia||($&4194048)!==$&&ct.current!==null||(ro=!0),(la&134217727)===0&&(Na&134217727)===0||he===null||ha(he,$,gt,!1)}function Ss(e,t,a){var o=ee;ee|=2;var n=eu(),i=tu();(he!==e||$!==t)&&(gi=null,go(e,t)),t=!1;var l=ye;e:do try{if(te!==0&&K!==null){var s=K,r=tt;switch(te){case 8:Is(),l=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var g=te;if(te=0,tt=null,mo(e,s,r,g),a&&ro){l=0;break e}break;default:g=te,te=0,tt=null,mo(e,s,r,g)}}Gg(),l=ye;break}catch(w){Zd(e,w)}while(!0);return t&&e.shellSuspendCounter++,jt=Ma=null,ee=o,p.H=n,p.A=i,K===null&&(he=null,$=0,Wn()),l}function Gg(){for(;K!==null;)au(K)}function Jg(e,t){var a=ee;ee|=2;var o=eu(),n=tu();he!==e||$!==t?(gi=null,ci=kt()+500,go(e,t)):ro=Io(e,t);e:do try{if(te!==0&&K!==null){t=K;var i=tt;t:switch(te){case 1:te=0,tt=null,mo(e,t,i,1);break;case 2:case 9:if(mh(i)){te=0,tt=null,ou(t);break}t=function(){te!==2&&te!==9||he!==e||(te=7),_t(e)},i.then(t,t);break e;case 3:te=7;break e;case 4:te=5;break e;case 7:mh(i)?(te=0,tt=null,ou(t)):(te=0,tt=null,mo(e,t,i,7));break;case 5:var l=null;switch(K.tag){case 26:l=K.memoizedState;case 5:case 27:var s=K;if(!l||xu(l)){te=0,tt=null;var r=s.sibling;if(r!==null)K=r;else{var g=s.return;g!==null?(K=g,yi(g)):K=null}break t}}te=0,tt=null,mo(e,t,i,5);break;case 6:te=0,tt=null,mo(e,t,i,6);break;case 8:Is(),ye=6;break e;default:throw Error(m(462))}}Vg();break}catch(w){Zd(e,w)}while(!0);return jt=Ma=null,p.H=o,p.A=n,ee=a,K!==null?0:(he=null,$=0,Wn(),ye)}function Vg(){for(;K!==null&&!dc();)au(K)}function au(e){var t=Hd(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?yi(e):K=t}function ou(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Sd(a,t,t.pendingProps,t.type,void 0,$);break;case 11:t=Sd(a,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:xl(t);default:Bd(a,t),t=K=nh(t,Lt),t=Hd(a,t,Lt)}e.memoizedProps=e.pendingProps,t===null?yi(e):K=t}function mo(e,t,a,o){jt=Ma=null,xl(t),no=null,qo=0;var n=t.return;try{if(Bg(e,n,t,a,$)){ye=1,li(e,rt(a,e.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;ye=1,li(e,rt(a,e.current)),K=null;return}t.flags&32768?(Q||o===1?e=!0:ro||($&536870912)!==0?e=!1:(ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=ct.current,o!==null&&o.tag===13&&(o.flags|=16384))),nu(t,e)):yi(t)}function yi(e){var t=e;do{if((t.flags&32768)!==0){nu(t,ia);return}e=t.return;var a=Og(t.alternate,t,Lt);if(a!==null){K=a;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);ye===0&&(ye=5)}function nu(e,t){do{var a=Rg(e.alternate,e);if(a!==null){a.flags&=32767,K=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=a}while(e!==null);ye=6,K=null}function iu(e,t,a,o,n,i,l,s,r){e.cancelPendingCommit=null;do fi();while(Oe!==0);if((ee&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=gl,kc(e,a,i,l,s,r),e===he&&(K=he=null,$=0),uo=t,ra=e,co=a,ps=i,bs=n,qd=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fg(In,function(){return du(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=p.T,p.T=null,n=_.p,_.p=2,l=ee,ee|=4;try{jg(e,t,a)}finally{ee=l,_.p=n,p.T=o}}Oe=1,lu(),su(),ru()}}function lu(){if(Oe===1){Oe=0;var e=ra,t=uo,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=p.T,p.T=null;var o=_.p;_.p=2;var n=ee;ee|=4;try{Vd(t,e);var i=js,l=$r(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&Yr(s.ownerDocument.documentElement,s)){if(r!==null&&rl(s)){var g=r.start,w=r.end;if(w===void 0&&(w=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(w,s.value.length);else{var k=s.ownerDocument||document,y=k&&k.defaultView||window;if(y.getSelection){var f=y.getSelection(),x=s.textContent.length,R=Math.min(r.start,x),ie=r.end===void 0?R:Math.min(r.end,x);!f.extend&&R>ie&&(l=ie,ie=R,R=l);var u=Fr(s,R),d=Fr(s,ie);if(u&&d&&(f.rangeCount!==1||f.anchorNode!==u.node||f.anchorOffset!==u.offset||f.focusNode!==d.node||f.focusOffset!==d.offset)){var c=k.createRange();c.setStart(u.node,u.offset),f.removeAllRanges(),R>ie?(f.addRange(c),f.extend(d.node,d.offset)):(c.setEnd(d.node,d.offset),f.addRange(c))}}}}for(k=[],f=s;f=f.parentNode;)f.nodeType===1&&k.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<k.length;s++){var b=k[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ai=!!Rs,js=Rs=null}finally{ee=n,_.p=o,p.T=a}}e.current=t,Oe=2}}function su(){if(Oe===2){Oe=0;var e=ra,t=uo,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=p.T,p.T=null;var o=_.p;_.p=2;var n=ee;ee|=4;try{xd(e,t.alternate,t)}finally{ee=n,_.p=o,p.T=a}}Oe=3}}function ru(){if(Oe===4||Oe===3){Oe=0,uc();var e=ra,t=uo,a=co,o=qd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Oe=5:(Oe=0,uo=ra=null,hu(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(sa=null),Ji(a),t=t.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ko,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=p.T,n=_.p,_.p=2,p.T=null;try{for(var i=e.onRecoverableError,l=0;l<o.length;l++){var s=o[l];i(s.value,{componentStack:s.stack})}}finally{p.T=t,_.p=n}}(co&3)!==0&&fi(),_t(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===ks?nn++:(nn=0,ks=e):nn=0,ln(0)}}function hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xo(t)))}function fi(e){return lu(),su(),ru(),du()}function du(){if(Oe!==5)return!1;var e=ra,t=ps;ps=0;var a=Ji(co),o=p.T,n=_.p;try{_.p=32>a?32:a,p.T=null,a=bs,bs=null;var i=ra,l=co;if(Oe=0,uo=ra=null,co=0,(ee&6)!==0)throw Error(m(331));var s=ee;if(ee|=4,Yd(i.current),Ud(i,i.current,l,a),ee=s,ln(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ko,i)}catch{}return!0}finally{_.p=n,p.T=o,hu(e,t)}}function uu(e,t,a){t=rt(a,t),t=Pl(e.stateNode,t,2),e=Pt(e,t,2),e!==null&&(vo(e,2),_t(e))}function re(e,t,a){if(e.tag===3)uu(e,e,a);else for(;t!==null;){if(t.tag===3){uu(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(sa===null||!sa.has(o))){e=rt(a,e),a=yd(2),o=Pt(t,a,2),o!==null&&(fd(a,o,t,e),vo(o,2),_t(o));break}}t=t.return}}function Ts(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new xg;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(ms=!0,n.add(a),e=Lg.bind(null,e,t,a),t.then(e,e))}function Lg(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,he===e&&($&a)===a&&(ye===4||ye===3&&($&62914560)===$&&300>kt()-ws?(ee&2)===0&&go(e,0):ys|=a,ho===$&&(ho=0)),_t(e)}function cu(e,t){t===0&&(t=rr()),e=$a(e,t),e!==null&&(vo(e,t),_t(e))}function Ug(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),cu(e,a)}function Kg(e,t){var a=0;switch(e.tag){case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(m(314))}o!==null&&o.delete(t),cu(e,a)}function Fg(e,t){return Ei(e,t)}var wi=null,yo=null,_s=!1,pi=!1,Ms=!1,Oa=0;function _t(e){e!==yo&&e.next===null&&(yo===null?wi=yo=e:yo=yo.next=e),pi=!0,_s||(_s=!0,$g())}function ln(e,t){if(!Ms&&pi){Ms=!0;do for(var a=!1,o=wi;o!==null;){if(e!==0){var n=o.pendingLanes;if(n===0)var i=0;else{var l=o.suspendedLanes,s=o.pingedLanes;i=(1<<31-Xe(42|e)+1)-1,i&=n&~(l&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,fu(o,i))}else i=$,i=Tn(o,o===he?i:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(i&3)===0||Io(o,i)||(a=!0,fu(o,i));o=o.next}while(a);Ms=!1}}function Yg(){gu()}function gu(){pi=_s=!1;var e=0;Oa!==0&&(am()&&(e=Oa),Oa=0);for(var t=kt(),a=null,o=wi;o!==null;){var n=o.next,i=mu(o,t);i===0?(o.next=null,a===null?wi=n:a.next=n,n===null&&(yo=a)):(a=o,(e!==0||(i&3)!==0)&&(pi=!0)),o=n}ln(e)}function mu(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-Xe(i),s=1<<l,r=n[l];r===-1?((s&a)===0||(s&o)!==0)&&(n[l]=bc(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=he,a=$,a=Tn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(te===2||te===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&xi(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Io(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&xi(o),Ji(a)){case 2:case 8:a=ir;break;case 32:a=In;break;case 268435456:a=lr;break;default:a=In}return o=yu.bind(null,e),a=Ei(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&xi(o),e.callbackPriority=2,e.callbackNode=null,2}function yu(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fi()&&e.callbackNode!==a)return null;var o=$;return o=Tn(e,e===he?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qd(e,o,t),mu(e,kt()),e.callbackNode!=null&&e.callbackNode===a?yu.bind(null,e):null)}function fu(e,t){if(fi())return null;Qd(e,t,!0)}function $g(){nm(function(){(ee&6)!==0?Ei(nr,Yg):gu()})}function Ds(){return Oa===0&&(Oa=sr()),Oa}function wu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function pu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function qg(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var i=wu((n[Le]||null).action),l=o.submitter;l&&(t=(t=l[Le]||null)?wu(t.formAction):l.getAttribute("formAction"),t!==null&&(i=t,l=null));var s=new On("action","action",null,o,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Oa!==0){var r=l?pu(n,l):new FormData(n);Yl(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=l?pu(n,l):new FormData(n),Yl(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var As=0;As<cl.length;As++){var Hs=cl[As],Xg=Hs.toLowerCase(),Qg=Hs[0].toUpperCase()+Hs.slice(1);wt(Xg,"on"+Qg)}wt(Qr,"onAnimationEnd"),wt(Pr,"onAnimationIteration"),wt(Zr,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(mg,"onTransitionRun"),wt(yg,"onTransitionStart"),wt(fg,"onTransitionCancel"),wt(eh,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function bu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var s=o[l],r=s.instance,g=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=g;try{i(n)}catch(w){ii(w)}n.currentTarget=null,i=r}else for(l=0;l<o.length;l++){if(s=o[l],r=s.instance,g=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=g;try{i(n)}catch(w){ii(w)}n.currentTarget=null,i=r}}}}function F(e,t){var a=t[Vi];a===void 0&&(a=t[Vi]=new Set);var o=e+"__bubble";a.has(o)||(ku(t,e,2,!1),a.add(o))}function Cs(e,t,a){var o=0;t&&(o|=4),ku(a,e,o,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[bi]){e[bi]=!0,gr.forEach(function(a){a!=="selectionchange"&&(Pg.has(a)||Cs(a,!1,e),Cs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,Cs("selectionchange",!1,t))}}function ku(e,t,a,o){switch(Uu(t)){case 2:var n=_m;break;case 8:n=Mm;break;default:n=Ks}a=n.bind(null,t,a,e),n=void 0,!Zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ns(e,t,a,o,n){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var s=o.stateNode.containerInfo;if(s===n)break;if(l===4)for(l=o.return;l!==null;){var r=l.tag;if((r===3||r===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;s!==null;){if(l=ja(s),l===null)return;if(r=l.tag,r===5||r===6||r===26||r===27){o=i=l;continue e}s=s.parentNode}}o=o.return}Dr(function(){var g=i,w=Qi(a),k=[];e:{var y=th.get(e);if(y!==void 0){var f=On,x=e;switch(e){case"keypress":if(Bn(a)===0)break e;case"keydown":case"keyup":f=Fc;break;case"focusin":x="focus",f=ol;break;case"focusout":x="blur",f=ol;break;case"beforeblur":case"afterblur":f=ol;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=qc;break;case Qr:case Pr:case Zr:f=Ec;break;case eh:f=Qc;break;case"scroll":case"scrollend":f=Nc;break;case"wheel":f=Zc;break;case"copy":case"cut":case"paste":f=zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Nr;break;case"toggle":case"beforetoggle":f=tg}var R=(t&4)!==0,ie=!R&&(e==="scroll"||e==="scrollend"),u=R?y!==null?y+"Capture":null:y;R=[];for(var d=g,c;d!==null;){var b=d;if(c=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||c===null||u===null||(b=_o(d,u),b!=null&&R.push(rn(d,b,c))),ie)break;d=d.return}0<R.length&&(y=new f(y,x,null,a,w),k.push({event:y,listeners:R}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",y&&a!==Xi&&(x=a.relatedTarget||a.fromElement)&&(ja(x)||x[Ra]))break e;if((f||y)&&(y=w.window===w?w:(y=w.ownerDocument)?y.defaultView||y.parentWindow:window,f?(x=a.relatedTarget||a.toElement,f=g,x=x?ja(x):null,x!==null&&(ie=W(x),R=x.tag,x!==ie||R!==5&&R!==27&&R!==6)&&(x=null)):(f=null,x=g),f!==x)){if(R=Cr,b="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(R=Nr,b="onPointerLeave",u="onPointerEnter",d="pointer"),ie=f==null?y:To(f),c=x==null?y:To(x),y=new R(b,d+"leave",f,a,w),y.target=ie,y.relatedTarget=c,b=null,ja(w)===g&&(R=new R(u,d+"enter",x,a,w),R.target=c,R.relatedTarget=ie,b=R),ie=b,f&&x)t:{for(R=f,u=x,d=0,c=R;c;c=fo(c))d++;for(c=0,b=u;b;b=fo(b))c++;for(;0<d-c;)R=fo(R),d--;for(;0<c-d;)u=fo(u),c--;for(;d--;){if(R===u||u!==null&&R===u.alternate)break t;R=fo(R),u=fo(u)}R=null}else R=null;f!==null&&Iu(k,y,f,R,!1),x!==null&&ie!==null&&Iu(k,ie,x,R,!0)}}e:{if(y=g?To(g):window,f=y.nodeName&&y.nodeName.toLowerCase(),f==="select"||f==="input"&&y.type==="file")var A=Gr;else if(xr(y))if(Jr)A=ug;else{A=hg;var U=rg}else f=y.nodeName,!f||f.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&qi(g.elementType)&&(A=Gr):A=dg;if(A&&(A=A(e,g))){zr(k,A,a,w);break e}U&&U(e,y,g),e==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&$i(y,"number",y.value)}switch(U=g?To(g):window,e){case"focusin":(xr(U)||U.contentEditable==="true")&&(Ka=U,hl=g,Oo=null);break;case"focusout":Oo=hl=Ka=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,qr(k,a,w);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":qr(k,a,w)}var B;if(il)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ua?Wr(e,a)&&(j="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(j="onCompositionStart");j&&(Or&&a.locale!=="ko"&&(Ua||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ua&&(B=Ar()):($t=w,el="value"in $t?$t.value:$t.textContent,Ua=!0)),U=ki(g,j),0<U.length&&(j=new Br(j,e,null,a,w),k.push({event:j,listeners:U}),B?j.data=B:(B=Er(a),B!==null&&(j.data=B)))),(B=og?ng(e,a):ig(e,a))&&(j=ki(g,"onBeforeInput"),0<j.length&&(U=new Br("onBeforeInput","beforeinput",null,a,w),k.push({event:U,listeners:j}),U.data=B)),qg(k,e,g,a,w)}bu(k,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=_o(e,a),n!=null&&o.unshift(rn(e,n,i)),n=_o(e,t),n!=null&&o.push(rn(e,n,i))),e.tag===3)return o;e=e.return}return[]}function fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Iu(e,t,a,o,n){for(var i=t._reactName,l=[];a!==null&&a!==o;){var s=a,r=s.alternate,g=s.stateNode;if(s=s.tag,r!==null&&r===o)break;s!==5&&s!==26&&s!==27||g===null||(r=g,n?(g=_o(a,i),g!=null&&l.unshift(rn(a,g,r))):n||(g=_o(a,i),g!=null&&l.push(rn(a,g,r)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var Zg=/\r\n?/g,em=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace(em,"")}function Su(e,t){return t=vu(t),vu(e)===t}function Ii(){}function ne(e,t,a,o,n,i){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ja(e,""+o);break;case"className":Mn(e,"class",o);break;case"tabIndex":Mn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(e,a,o);break;case"style":_r(e,o,i);break;case"data":if(t!=="object"){Mn(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Hn(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",n.name,n,null),ne(e,t,"formEncType",n.formEncType,n,null),ne(e,t,"formMethod",n.formMethod,n,null),ne(e,t,"formTarget",n.formTarget,n,null)):(ne(e,t,"encType",n.encType,n,null),ne(e,t,"method",n.method,n,null),ne(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Hn(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&F("scroll",e);break;case"onScrollEnd":o!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(m(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Hn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":F("beforetoggle",e),F("toggle",e),_n(e,"popover",o);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_n(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cc.get(a)||a,_n(e,a,o))}}function Os(e,t,a,o,n,i){switch(a){case"style":_r(e,o,i);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(m(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&Ja(e,""+o);break;case"onScroll":o!=null&&F("scroll",e);break;case"onScrollEnd":o!=null&&F("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof o=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):_n(e,a,o)}}}function Re(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var o=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];if(l!=null)switch(i){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ne(e,t,i,l,a,null)}}n&&ne(e,t,"srcSet",a.srcSet,a,null),o&&ne(e,t,"src",a.src,a,null);return;case"input":F("invalid",e);var s=i=l=n=null,r=null,g=null;for(o in a)if(a.hasOwnProperty(o)){var w=a[o];if(w!=null)switch(o){case"name":n=w;break;case"type":l=w;break;case"checked":r=w;break;case"defaultChecked":g=w;break;case"value":i=w;break;case"defaultValue":s=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(m(137,t));break;default:ne(e,t,o,w,a,null)}}Ir(e,i,s,r,g,l,n,!1),Dn(e);return;case"select":F("invalid",e),o=l=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:ne(e,t,n,s,a,null)}t=i,a=l,e.multiple=!!o,t!=null?Ga(e,!!o,t,!1):a!=null&&Ga(e,!!o,a,!0);return;case"textarea":F("invalid",e),i=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(s=a[l],s!=null))switch(l){case"value":o=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:ne(e,t,l,s,a,null)}Sr(e,o,n,i),Dn(e);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ne(e,t,r,o,a,null)}return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(o=0;o<sn.length;o++)F(sn[o],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(o=a[g],o!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ne(e,t,g,o,a,null)}return;default:if(qi(t)){for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!==void 0&&Os(e,t,w,o,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null&&ne(e,t,s,o,a,null))}function tm(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,l=null,s=null,r=null,g=null,w=null;for(f in a){var k=a[f];if(a.hasOwnProperty(f)&&k!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":r=k;default:o.hasOwnProperty(f)||ne(e,t,f,null,o,k)}}for(var y in o){var f=o[y];if(k=a[y],o.hasOwnProperty(y)&&(f!=null||k!=null))switch(y){case"type":i=f;break;case"name":n=f;break;case"checked":g=f;break;case"defaultChecked":w=f;break;case"value":l=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,t));break;default:f!==k&&ne(e,t,y,f,o,k)}}Yi(e,l,s,r,g,w,i,n);return;case"select":f=l=s=y=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":f=r;default:o.hasOwnProperty(i)||ne(e,t,i,null,o,r)}for(n in o)if(i=o[n],r=a[n],o.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==r&&ne(e,t,n,i,o,r)}t=s,a=l,o=f,y!=null?Ga(e,!!a,y,!1):!!o!=!!a&&(t!=null?Ga(e,!!a,t,!0):Ga(e,!!a,a?[]:"",!1));return;case"textarea":f=y=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!o.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ne(e,t,s,null,o,n)}for(l in o)if(n=o[l],i=a[l],o.hasOwnProperty(l)&&(n!=null||i!=null))switch(l){case"value":y=n;break;case"defaultValue":f=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ne(e,t,l,n,o,i)}vr(e,y,f);return;case"option":for(var x in a)if(y=a[x],a.hasOwnProperty(x)&&y!=null&&!o.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ne(e,t,x,null,o,y)}for(r in o)if(y=o[r],f=a[r],o.hasOwnProperty(r)&&y!==f&&(y!=null||f!=null))switch(r){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ne(e,t,r,y,o,f)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in a)y=a[R],a.hasOwnProperty(R)&&y!=null&&!o.hasOwnProperty(R)&&ne(e,t,R,null,o,y);for(g in o)if(y=o[g],f=a[g],o.hasOwnProperty(g)&&y!==f&&(y!=null||f!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:ne(e,t,g,y,o,f)}return;default:if(qi(t)){for(var ie in a)y=a[ie],a.hasOwnProperty(ie)&&y!==void 0&&!o.hasOwnProperty(ie)&&Os(e,t,ie,void 0,o,y);for(w in o)y=o[w],f=a[w],!o.hasOwnProperty(w)||y===f||y===void 0&&f===void 0||Os(e,t,w,y,o,f);return}}for(var u in a)y=a[u],a.hasOwnProperty(u)&&y!=null&&!o.hasOwnProperty(u)&&ne(e,t,u,null,o,y);for(k in o)y=o[k],f=a[k],!o.hasOwnProperty(k)||y===f||y==null&&f==null||ne(e,t,k,y,o,f)}var Rs=null,js=null;function vi(e){return e.nodeType===9?e:e.ownerDocument}function Tu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _u(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Es=null;function am(){var e=window.event;return e&&e.type==="popstate"?e===Es?!1:(Es=e,!0):(Es=null,!1)}var Mu=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(im)}:Mu;function im(e){setTimeout(function(){throw e})}function da(e){return e==="head"}function Au(e,t){var a=t,o=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<o&&8>o){a=o;var l=e.ownerDocument;if(a&1&&hn(l.documentElement),a&2&&hn(l.body),a&4)for(a=l.head,hn(a),l=a.firstChild;l;){var s=l.nextSibling,r=l.nodeName;l[So]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=s}}if(n===0){e.removeChild(i),wn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:o=a.charCodeAt(0)-48;else o=0;a=i}while(a);wn(t)}function xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xs(a),Li(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lm(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[So])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function sm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bt(e.nextSibling),e===null))return null;return e}function zs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rm(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Gs=null;function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Cu(e,t,a){switch(t=vi(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Li(e)}var mt=new Map,Bu=new Set;function Si(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ut=_.d;_.d={f:hm,r:dm,D:um,C:cm,L:gm,m:mm,X:fm,S:ym,M:wm};function hm(){var e=Ut.f(),t=mi();return e||t}function dm(e){var t=Wa(e);t!==null&&t.tag===5&&t.type==="form"?Qh(t):Ut.r(e)}var wo=typeof document>"u"?null:document;function Nu(e,t,a){var o=wo;if(o&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Bu.has(n)||(Bu.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Re(t,"link",e),Ae(t),o.head.appendChild(t)))}}function um(e){Ut.D(e),Nu("dns-prefetch",e,null)}function cm(e,t){Ut.C(e,t),Nu("preconnect",e,t)}function gm(e,t,a){Ut.L(e,t,a);var o=wo;if(o&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=po(e);break;case"script":i=bo(e)}mt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),mt.set(i,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(dn(i))||t==="script"&&o.querySelector(un(i))||(t=o.createElement("link"),Re(t,"link",e),Ae(t),o.head.appendChild(t)))}}function mm(e,t){Ut.m(e,t);var a=wo;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(o)+'"][href="'+st(e)+'"]',i=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=bo(e)}if(!mt.has(i)&&(e=N({rel:"modulepreload",href:e},t),mt.set(i,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(un(i)))return}o=a.createElement("link"),Re(o,"link",e),Ae(o),a.head.appendChild(o)}}}function ym(e,t,a){Ut.S(e,t,a);var o=wo;if(o&&e){var n=Ea(o).hoistableStyles,i=po(e);t=t||"default";var l=n.get(i);if(!l){var s={loading:0,preload:null};if(l=o.querySelector(dn(i)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=mt.get(i))&&Js(e,a);var r=l=o.createElement("link");Ae(r),Re(r,"link",e),r._p=new Promise(function(g,w){r.onload=g,r.onerror=w}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ti(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:s},n.set(i,l)}}}function fm(e,t){Ut.X(e,t);var a=wo;if(a&&e){var o=Ea(a).hoistableScripts,n=bo(e),i=o.get(n);i||(i=a.querySelector(un(n)),i||(e=N({src:e,async:!0},t),(t=mt.get(n))&&Vs(e,t),i=a.createElement("script"),Ae(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(n,i))}}function wm(e,t){Ut.M(e,t);var a=wo;if(a&&e){var o=Ea(a).hoistableScripts,n=bo(e),i=o.get(n);i||(i=a.querySelector(un(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=mt.get(n))&&Vs(e,t),i=a.createElement("script"),Ae(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},o.set(n,i))}}function Ou(e,t,a,o){var n=(n=G.current)?Si(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=po(a.href),a=Ea(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=po(a.href);var i=Ea(n).hoistableStyles,l=i.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=n.querySelector(dn(e)))&&!i._p&&(l.instance=i,l.state.loading=5),mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mt.set(e,a),i||pm(n,e,a,l.state))),t&&o===null)throw Error(m(528,""));return l}if(t&&o!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bo(a),a=Ea(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function po(e){return'href="'+st(e)+'"'}function dn(e){return'link[rel="stylesheet"]['+e+"]"}function Ru(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function pm(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Re(t,"link",a),Ae(t),e.head.appendChild(t))}function bo(e){return'[src="'+st(e)+'"]'}function un(e){return"script[async]"+e}function ju(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(o)return t.instance=o,Ae(o),o;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ae(o),Re(o,"style",n),Ti(o,a.precedence,e),t.instance=o;case"stylesheet":n=po(a.href);var i=e.querySelector(dn(n));if(i)return t.state.loading|=4,t.instance=i,Ae(i),i;o=Ru(a),(n=mt.get(n))&&Js(o,n),i=(e.ownerDocument||e).createElement("link"),Ae(i);var l=i;return l._p=new Promise(function(s,r){l.onload=s,l.onerror=r}),Re(i,"link",o),t.state.loading|=4,Ti(i,a.precedence,e),t.instance=i;case"script":return i=bo(a.src),(n=e.querySelector(un(i)))?(t.instance=n,Ae(n),n):(o=a,(n=mt.get(i))&&(o=N({},a),Vs(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ae(n),Re(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Ti(o,a.precedence,e));return t.instance}function Ti(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,i=n,l=0;l<o.length;l++){var s=o[l];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _i=null;function Wu(e,t,a){if(_i===null){var o=new Map,n=_i=new Map;n.set(a,o)}else n=_i,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[So]||i[Ee]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(t)||"";l=e+l;var s=o.get(l);s?s.push(i):o.set(l,[i])}}return o}function Eu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var cn=null;function km(){}function Im(e,t,a){if(cn===null)throw Error(m(475));var o=cn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=po(a.href),i=e.querySelector(dn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Mi.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=i,Ae(i);return}i=e.ownerDocument||e,a=Ru(a),(n=mt.get(n))&&Js(a,n),i=i.createElement("link"),Ae(i);var l=i;l._p=new Promise(function(s,r){l.onload=s,l.onerror=r}),Re(i,"link",a),t.instance=i}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=Mi.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function vm(){if(cn===null)throw Error(m(475));var e=cn;return e.stylesheets&&e.count===0&&Ls(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Ls(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Mi(){if(this.count--,this.count===0){if(this.stylesheets)Ls(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Di=null;function Ls(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Di=new Map,t.forEach(Sm,e),Di=null,Mi.call(e))}function Sm(e,t){if(!(t.state.loading&4)){var a=Di.get(e);if(a)var o=a.get(null);else{a=new Map,Di.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var l=n[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),i=a.get(l)||o,i===o&&a.set(null,n),a.set(l,n),this.count++,o=Mi.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var gn={$$typeof:_e,Provider:null,Consumer:null,_currentValue:E,_currentValue2:E,_threadCount:0};function Tm(e,t,a,o,n,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.hiddenUpdates=zi(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function zu(e,t,a,o,n,i,l,s,r,g,w,k){return e=new Tm(e,t,a,l,s,r,g,k),t=1,i===!0&&(t|=24),i=Pe(3,null,null,t),e.current=i,i.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:o,isDehydrated:a,cache:t},Al(i),e}function Gu(e){return e?(e=qa,e):qa}function Ju(e,t,a,o,n,i){n=Gu(n),o.context===null?o.context=n:o.pendingContext=n,o=Qt(t),o.payload={element:a},i=i===void 0?null:i,i!==null&&(o.callback=i),a=Pt(e,o,t),a!==null&&(ot(a,e,t),Vo(a,e,t))}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Us(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Lu(e){if(e.tag===13){var t=$a(e,67108864);t!==null&&ot(t,e,67108864),Us(e,67108864)}}var Ai=!0;function _m(e,t,a,o){var n=p.T;p.T=null;var i=_.p;try{_.p=2,Ks(e,t,a,o)}finally{_.p=i,p.T=n}}function Mm(e,t,a,o){var n=p.T;p.T=null;var i=_.p;try{_.p=8,Ks(e,t,a,o)}finally{_.p=i,p.T=n}}function Ks(e,t,a,o){if(Ai){var n=Fs(o);if(n===null)Ns(e,t,o,Hi,a),Ku(e,o);else if(Am(n,e,t,a,o))o.stopPropagation();else if(Ku(e,o),t&4&&-1<Dm.indexOf(e)){for(;n!==null;){var i=Wa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=fa(i.pendingLanes);if(l!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var r=1<<31-Xe(l);s.entanglements[1]|=r,l&=~r}_t(i),(ee&6)===0&&(ci=kt()+500,ln(0))}}break;case 13:s=$a(i,2),s!==null&&ot(s,i,2),mi(),Us(i,2)}if(i=Fs(o),i===null&&Ns(e,t,o,Hi,a),i===n)break;n=i}n!==null&&o.stopPropagation()}else Ns(e,t,o,null,a)}}function Fs(e){return e=Qi(e),Ys(e)}var Hi=null;function Ys(e){if(Hi=null,e=ja(e),e!==null){var t=W(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=P(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hi=e,null}function Uu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cc()){case nr:return 2;case ir:return 8;case In:case gc:return 32;case lr:return 268435456;default:return 32}default:return 32}}var $s=!1,ua=null,ca=null,ga=null,mn=new Map,yn=new Map,ma=[],Dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function fn(e,t,a,o,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Wa(t),t!==null&&Lu(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Am(e,t,a,o,n){switch(t){case"focusin":return ua=fn(ua,e,t,a,o,n),!0;case"dragenter":return ca=fn(ca,e,t,a,o,n),!0;case"mouseover":return ga=fn(ga,e,t,a,o,n),!0;case"pointerover":var i=n.pointerId;return mn.set(i,fn(mn.get(i)||null,e,t,a,o,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,fn(yn.get(i)||null,e,t,a,o,n)),!0}return!1}function Fu(e){var t=ja(e.target);if(t!==null){var a=W(t);if(a!==null){if(t=a.tag,t===13){if(t=P(a),t!==null){e.blockedOn=t,Ic(e.priority,function(){if(a.tag===13){var o=at();o=Gi(o);var n=$a(a,o);n!==null&&ot(n,a,o),Us(a,o)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Fs(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Xi=o,a.target.dispatchEvent(o),Xi=null}else return t=Wa(a),t!==null&&Lu(t),e.blockedOn=a,!1;t.shift()}return!0}function Yu(e,t,a){Ci(e)&&a.delete(t)}function Hm(){$s=!1,ua!==null&&Ci(ua)&&(ua=null),ca!==null&&Ci(ca)&&(ca=null),ga!==null&&Ci(ga)&&(ga=null),mn.forEach(Yu),yn.forEach(Yu)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Hm)))}var Ni=null;function $u(e){Ni!==e&&(Ni=e,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){Ni===e&&(Ni=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(Ys(o||a)===null)continue;break}var i=Wa(a);i!==null&&(e.splice(t,3),t-=3,Yl(i,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function wn(e){function t(r){return Bi(r,e)}ua!==null&&Bi(ua,e),ca!==null&&Bi(ca,e),ga!==null&&Bi(ga,e),mn.forEach(t),yn.forEach(t);for(var a=0;a<ma.length;a++){var o=ma[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ma.length&&(a=ma[0],a.blockedOn===null);)Fu(a),a.blockedOn===null&&ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],i=a[o+1],l=n[Le]||null;if(typeof i=="function")l||$u(a);else if(l){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,l=i[Le]||null)s=l.formAction;else if(Ys(n)!==null)continue}else s=l.action;typeof s=="function"?a[o+1]=s:(a.splice(o,3),o-=3),$u(a)}}}function qs(e){this._internalRoot=e}Oi.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,o=at();Ju(a,o,e,t,null,null)},Oi.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ju(e.current,2,null,e,null,null),mi(),t[Ra]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ur();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ma.length&&t!==0&&t<ma[a].priority;a++);ma.splice(a,0,e),a===0&&Fu(e)}};var qu=V.version;if(qu!=="19.1.1")throw Error(m(527,qu,"19.1.1"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=C(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Cm={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{ko=Ri.inject(Cm),qe=Ri}catch{}}return bn.createRoot=function(e,t){if(!H(e))throw Error(m(299));var a=!1,o="",n=ud,i=cd,l=gd,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=zu(e,1,!1,null,null,a,o,n,i,l,s,null),e[Ra]=t.current,Bs(e),new qs(t)},bn.hydrateRoot=function(e,t,a){if(!H(e))throw Error(m(299));var o=!1,n="",i=ud,l=cd,s=gd,r=null,g=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(r=a.unstable_transitionCallbacks),a.formState!==void 0&&(g=a.formState)),t=zu(e,1,!0,t,a??null,o,n,i,l,s,r,g),t.context=Gu(null),a=t.current,o=at(),o=Gi(o),n=Qt(o),n.callback=null,Pt(a,n,o),a=o,t.current.lanes=a,vo(t,a),_t(t),e[Ra]=t.current,Bs(e),new Oi(t)},bn.version="19.1.1",bn}var ic;function Jm(){if(ic)return Ps.exports;ic=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(V){console.error(V)}}return S(),Ps.exports=Gm(),Ps.exports}var Vm=Jm();const Lm=rc(Vm),ar=({name:S,className:V="w-6 h-6"})=>{const z={search:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:V,children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})}),"arrow-left":M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:V,children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"arrow-right":M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:V,children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})};return M.jsx(M.Fragment,{children:z[S]})},Um=({searchTerm:S,onSearchTermChange:V,onSearch:z,isSearching:m=!1})=>{const H=W=>{W.key==="Enter"&&z()};return M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("div",{className:"relative flex-grow",children:[M.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:M.jsx(ar,{name:"search",className:"w-5 h-5 text-gray-400"})}),M.jsx("input",{type:"text",value:S,onChange:W=>V(W.target.value),onKeyDown:H,placeholder:"Search diary entries...",className:"w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",disabled:m,"aria-label":"Search diary entries"})]}),M.jsx("button",{onClick:z,disabled:m,className:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-wait min-w-[120px]","aria-live":"polite",children:m?"Searching...":"Search"})]})},Km=({page:S})=>{if(!S)return M.jsx("div",{className:"flex-grow flex items-center justify-center text-gray-500",children:M.jsx("p",{children:"Loading diary page..."})});const V=z=>z.split(/\n\s*\n/).filter(H=>H.trim()!=="").map((H,W)=>{const P=H.split(`
`)[0];if(P.startsWith("# "))return M.jsx("h1",{className:"text-2xl font-bold text-yellow-100/80 mb-4 pb-2 border-b border-gray-600",children:P.substring(2)},W);const ce=H.replace(/\n/g," ").trim();return M.jsx("p",{className:"mb-4",children:ce},W)});return M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow",children:[M.jsx("div",{className:"bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center",children:M.jsx("img",{src:S.imageUrl,alt:`Diary page ${S.id}`,className:"max-w-full max-h-full object-contain rounded-md",style:{maxHeight:"calc(100vh - 200px)"}})}),M.jsx("div",{className:"bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto",style:{maxHeight:"calc(100vh - 200px)"},children:M.jsx("div",{className:"prose prose-invert prose-sm max-w-none font-serif text-gray-300 leading-relaxed",children:S.markdownContent===null?M.jsx("p",{className:"text-gray-400",children:"Loading text..."}):V(S.markdownContent)})})]})},Fm=({currentPage:S,totalPages:V,onNext:z,onPrev:m})=>{const H=S===0,W=S===V-1,P="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md border border-gray-700 transition-colors duration-200",ce="hover:bg-gray-700",C="opacity-50 cursor-not-allowed";return M.jsxs("div",{className:"flex items-center justify-between mt-4",children:[M.jsxs("button",{onClick:m,disabled:H,className:`${P} ${H?C:ce}`,children:[M.jsx(ar,{name:"arrow-left",className:"w-4 h-4"}),"Previous"]}),M.jsxs("span",{className:"text-gray-400",children:["Page ",S+1," of ",V]}),M.jsxs("button",{onClick:z,disabled:W,className:`${P} ${W?C:ce}`,children:["Next",M.jsx(ar,{name:"arrow-right",className:"w-4 h-4"})]})]})},Ym=({text:S,highlight:V})=>{if(!V.trim())return M.jsx("span",{children:S});const z=new RegExp(`(${V})`,"gi"),m=S.split(z);return M.jsx("span",{children:m.map((H,W)=>z.test(H)?M.jsx("span",{className:"bg-yellow-500 text-black px-1 rounded",children:H},W):M.jsx("span",{children:H},W))})},$m=({results:S,searchTerm:V,onResultClick:z,onClear:m})=>S.length===0?null:M.jsxs("div",{className:"w-full max-w-7xl mx-auto mt-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4",children:[M.jsxs("div",{className:"flex justify-between items-center mb-4",children:[M.jsxs("h2",{className:"text-xl font-bold text-white",children:["Search Results ",M.jsxs("span",{className:"text-gray-400 font-normal text-base",children:["(",S.length," found)"]})]}),M.jsx("button",{onClick:m,className:"text-sm text-indigo-400 hover:text-indigo-300",children:"Clear Results"})]}),M.jsx("ul",{className:"space-y-3 max-h-64 overflow-y-auto pr-2",children:S.map((H,W)=>M.jsxs("li",{onClick:()=>z(H.pageIndex),className:"p-3 bg-gray-700/50 hover:bg-gray-700 rounded-md cursor-pointer transition-colors duration-200",children:[M.jsxs("div",{className:"font-semibold text-indigo-400 mb-1",children:["Page ",H.pageIndex+1]}),M.jsxs("p",{className:"text-sm text-gray-300 italic",children:["...",M.jsx(Ym,{text:H.snippet,highlight:V}),"..."]})]},W))})]}),lc="https://pub-c3c6f85e155340249dc6850439521ff1.r2.dev",sc=["2002b_00002","2002b_00003","2002b_00004","2002b_00005","2002b_00006","2002b_00007","2002b_00008","2002b_00009","2002b_00010","2002b_00011","2002b_00012","2002b_00013","2002b_00014","2002b_00015","2002b_00016","2002b_00017","2002b_00018","2002b_00019","2002b_00020","2002b_00021","2002b_00022","2002b_00023","2002b_00024","2002b_00025","2002b_00026","2002b_00027","2002b_00028","2002b_00029","2002b_00030","2002b_00031","2002b_00032","2002b_00033","2002b_00034","2002b_00035","2002b_00036","2002b_00037","2002b_00038","2002b_00039","2002b_00040","2002b_00041","2002b_00042","2002b_00043","2002b_00044","2002b_00045","2002b_00046","2002b_00047","2002b_00048","2002b_00049","2002b_00050","2002b_00051","2002b_00052","2002b_00053","2002b_00054","2002b_00055","2002b_00056","2002b_00057","2002b_00058","2002b_00059","2002b_00060","2002b_00061","2002b_00062","2002b_00063","2002b_00064","2002b_00065","2002b_00066","2002b_00067","2002b_00068","2002b_00069","2002b_00070","2002b_00071","2002b_00072","2002b_00073","2002b_00074","2002b_00075","2002b_00076","2002b_00077","2002b_00078","2002b_00079","2002b_00080","2002b_00081","2002b_00082","2002b_00083","2002b_00084","2002b_00085","2002b_00086","2002b_00087","2002b_00088","2002b_00089","2002b_00090","2002b_00091","2002b_00092","2002b_00093","2002b_00094","2002b_00095","2002b_00096","2002b_00097","2002b_00098","2002b_00099","2002b_00100","2002b_00101","2002b_00102","2002b_00103","2002b_00104","2002b_00105","2002b_00106","2002b_00107","2002b_00108","2002b_00109","2002b_00110","2002b_00111","2002b_00112","2002b_00113","2002b_00114","2002b_00115","2002b_00116","2002b_00117","2002b_00118","2002b_00119","2002b_00120","2002b_00121","2002b_00122","2002b_00123","2002b_00124","2002b_00125","2002b_00126","2002b_00127","2002b_00128","2002b_00129","2002b_00130","2002b_00131","2002b_00132","2002b_00133","2002b_00134","2002b_00135","2002b_00136","2002b_00137","2002b_00138","2002b_00139","2002b_00140","2002b_00141","2002b_00142","2002b_00143","2002b_00144","2002b_00145","2002b_00146","2002b_00147","2006a_00002","2006a_00003","2006a_00004","2006a_00005","2006a_00006","2006a_00007","2006a_00008","2006a_00009","2006a_00010","2006a_00011","2006a_00012","2006a_00013","2006a_00014","2006a_00015","2006a_00016","2006a_00017","2006a_00018","2006a_00019","2006a_00020","2006a_00021","2006a_00022","2006a_00023","2006a_00024","2006a_00025","2006a_00026","2006a_00027","2006a_00028","2006a_00029","2006a_00030","2006a_00031","2006a_00032","2006a_00033","2006a_00034","2006a_00035","2006a_00036","2006a_00037","2006a_00038","2006a_00039","2006a_00040","2006a_00041","2006a_00042","2006a_00043","2006a_00044","2006a_00045","2006a_00046","2006a_00047","2006a_00048","2006a_00049","2006a_00051","2006a_00052","2006a_00053","2006a_00054","2006a_00055","2006a_00056","2006a_00057","2006a_00058","2006a_00059","2006a_00060","2006a_00061","2006a_00062","2006a_00063","2006a_00064","2006a_00065","2006a_00066","2006a_00067","2006a_00069","2006a_00070","2006a_00071","2006a_00072","2006a_00073","2006a_00074","2006a_00075","2006a_00076","2006a_00077","2006a_00078","2006a_00079","2006a_00080","2006a_00081","2006a_00082","2006a_00083","2006a_00084","2006a_00085","2006a_00086","2006a_00087","2006a_00088","2006a_00089","2006a_00090","2006a_00091","2006a_00092","2006a_00093","2006a_00094","2006a_00095","2006a_00096","2006a_00097","2006a_00098","2006a_00099","2006a_00100","2006a_00101","2006a_00102","2006a_00103","2006a_00104","2006a_00105","2006a_00106","2006a_00107","2006a_00108","2006a_00109","2006a_00110","2006a_00111","2006a_00112","2006a_00113","2006a_00114","2006a_00115","2006a_00116","2006a_00117","2006a_00118","2006a_00119","2006a_00120","2006a_00121","2006a_00122","2006a_00123","2006a_00124","2006a_00125","2006a_00126","2006a_00127","2006a_00128","2006a_00129","2006a_00130","2006a_00131","2006a_00132","2006a_00133","2006a_00134","2006a_00135","2006a_00136","2006a_00137","2006a_00138","2006a_00139","2006a_00140","2006a_00141","2006a_00142","2006a_00143","2006a_00144","2006a_00145","2006a_00146","2006a_00147","2006a_00148","2006a_00149","2006a_00150","2006a_00151","2006a_00152","2006a_00153","2006a_00154","2006a_00155","2006a_00156","2006a_00157","2006a_00158","2006a_00159","2006a_00160","2006a_00161","2006a_00162","2006a_00163","2006a_00164","2006a_00165","2006a_00166","2006a_00167","2006a_00168","2006a_00169","2006a_00170","2006a_00171","2006a_00172","2006a_00173","2006a_00174","2006a_00175","2006a_00176","2006a_00177","2006a_00178","2006a_00179","2006a_00180","2006a_00181","2006a_00182","2006a_00183","2006a_00184","2006a_00185","2006a_00186","2006a_00187","2006a_00188","2006a_00189","2006a_00190","2006a_00191","2006a_00192","2006a_00194","2006a_00195","2009_00002","2009_00003","2009_00004","2009_00006","2009_00007","2009_00008","2009_00009","2009_00010","2009_00011","2009_00012","2009_00013","2009_00014","2009_00015","2009_00016","2009_00017","2009_00018","2009_00019","2009_00020","2009_00021","2009_00022","2009_00023","2009_00024","2009_00026","2009_00027","2009_00028","2009_00029","2009_00030","2009_00032","2009_00034","2009_00036","2009_00038","2009_00040","2009_00041","2009_00042","2009_00043","2009_00044","2009_00045","2009_00046","2009_00047","2009_00048","2009_00049","2009_00050","2009_00051","2009_00052","2009_00053","2009_00054","2009_00055","2009_00056","2009_00057","2009_00058","2009_00059","2009_00060","2009_00061","2009_00062","2009_00063","2009_00064","2009_00065","2009_00066","2009_00067","2009_00068","2009_00069","2009_00070","2009_00071","2009_00072","2009_00073","2009_00074","2009_00075","2009_00076","2009_00077","2009_00078","2009_00079","2009_00080","2009_00082","2009_00083","2009_00084","2009_00085","2009_00086","2009_00088","2009_00089","2009_00090","2009_00091","2009_00092","2009_00093","2009_00094","2009_00095","2010_00001","2010_00002","2010_00003","2010_00004","2010_00005","2010_00006","2010_00007","2010_00008","2010_00009","2010_00010","2010_00011","2010_00012","2010_00013","2010_00014","2010_00015","2010_00016","2010_00017","2010_00018","2010_00019","2010_00020","2010_00021","2010_00022","2010_00023","2010_00024","2010_00025","2010_00026","2010_00027","2010_00028","2010_00029","2010_00030","2010_00031","2010_00032","2010_00033","2010_00034","2010_00035","2010_00036","2010_00037","2010_00038","2010_00039","2010_00040","2010_00041","2010_00042","2010_00043","2010_00044","2010_00045","2010_00046","2010_00047","2010_00048","2010_00049","2010_00050","2010_00051","2010_00052","2010_00053","2010_00054","2010_00055","2010_00057","2010_00058","2010_00059","2010_00060","2010_00061","2010_00062","2010_00063","2010_00064","2010_00065","2010_00066","2010_00067","2011_00001","2011_00002","2011_00003","2011_00004","2011_00005","2011_00006","2011_00007","2011_00008","2011_00009","2011_00010","2011_00011","2011_00012","2011_00013","2011_00015","2011_00016","2011_00017","2011_00018","2011_00019","2011_00020","2011_00021","2011_00022","2011_00023","2011_00024","2011_00025","2011_00026","2011_00027","2011_00028","2011_00029","2011_00030","2011_00031","2011_00032","2011_00033","2011_00034","2011_00035","2011_00036","2011_00037","2011_00038","2011_00039","2011_00040","2011_00041","2011_00042","2011_00043","2011_00044","2011_00045","2011_00046","2011_00047","2011_00048","2011_00049","2011_00050","2011_00051","2011_00052","2011_00053","2011_00054","2011_00055","2011_00056","2011_00057","2011_00058","2011_00059","2011_00060","2011_00061","2011_00062","2011_00063","2011_00064","2011_00065","2011_00066","2011_00067","2011_00068","2011_00069","2011_00070","2011_00071","2011_00072","2011_00073","2013a_00002","2013a_00004","2013a_00006","2013a_00008","2013a_00010","2013a_00012","2013a_00014","2013a_00016","2013a_00018","2013a_00020","2013a_00022","2013a_00024","2013a_00025","2013a_00026","2013a_00028","2013a_00030","2013a_00032","2013a_00034","2013a_00036","2013a_00038","2013a_00040","2013a_00042","2013a_00044","2013a_00046","2013a_00047","2013a_00048","2013a_00050","2013a_00052","2013a_00054","2013a_00056","2013a_00058","2013a_00060","2013a_00062","2013a_00064","2013a_00066","2013a_00068","2013a_00070","2013a_00072","2013a_00074","2013a_00076","2013a_00078","2013a_00080","2013a_00082","2013a_00084","2013a_00086","2013a_00088","2013a_00090","2013a_00092","2013a_00094","2013a_00096","2013a_00098","2013a_00100","2013a_00101","2013a_00102","2013a_00104","2013a_00106","2013a_00108","2013a_00110","2013a_00112","2013a_00114","2013a_00116","2013a_00118","2013a_00120","2013a_00122","2013a_00124","2013a_00126","2013a_00128","2013a_00130","2013a_00132","2013a_00134","2013a_00136","2013a_00138","2013a_00140","2013a_00142","2013a_00144","2013a_00146","2013a_00148","2013a_00150","2013a_00152","2013a_00154","2013a_00156","2013a_00158","2013a_00160","2013a_00162","2013a_00164","2013a_00166","2013a_00168","2013a_00170","2013a_00172","2013a_00174","2013a_00176","2013a_00178","2013a_00179","2013a_00180","2013a_00181","2013a_00182","2013a_00183","2013a_00184","2013a_00185","2013a_00186","2013a_00187","2013a_00188","2013a_00189","2013a_00190","2013a_00191","2013b_00002","2013b_00004","2013b_00006","2013b_00008","2013b_00010","2013b_00012","2013b_00014","2013b_00016","2013b_00018","2013b_00020","2013b_00022","2013b_00024","2013b_00026","2013b_00028","2013b_00030","2013b_00032","2013b_00034","2013b_00036","2013b_00038","2013b_00040","2013b_00042","2013b_00044","2013b_00046","2013b_00048","2013b_00050","2013b_00052","2013b_00054","2013b_00056","2013b_00058","2013b_00060","2013b_00062","2013b_00064","2013b_00066","2013b_00068","2013b_00070","2013b_00072","2013b_00074","2013b_00076","2013b_00078","2013b_00080","2013b_00082","2013b_00084","2013b_00086","2013b_00088","2013b_00090","2013b_00092","2013b_00094","2013b_00096","2013b_00097","2013b_00098","2013b_00099","2013b_00100","2013b_00101","2013b_00102","2013b_00103","2013b_00104","2013b_00105","2013b_00106","2013b_00107","2013b_00108","2013b_00109","2013b_00110","2013b_00111","2013b_00112","2013b_00114","2013b_00116","2013b_00118","2013b_00120","2013b_00122","2013b_00124","2013b_00126","2013b_00128","2013b_00130","2013b_00132","2013b_00134","2013b_00135","2013b_00136","2013b_00138","2013b_00140","2013b_00142","2013b_00144","2013b_00146","2013b_00148","2013b_00150","2013b_00152","2013b_00154","2013b_00156","2013b_00158","2013b_00160","2013b_00162","2013b_00164","2013b_00166","2013b_00168","2013b_00170","2013b_00171","2013b_00172","2013b_00174","2013b_00176","2013b_00177","2013b_00178","2013b_00180","2013b_00182","2013b_00184","2013b_00186","2013b_00188","2013b_00190","2013b_00191","2013b_00192","2013b_00193","2013b_00194","2013b_00195","2013b_00196","2013b_00197","2013b_00198","2013b_00199","2013b_00200","2013b_00201","2013c_00001","2013c_00002","2013c_00003","2013c_00004","2013c_00005","2013c_00006","2013c_00007","2013c_00008","2013c_00009","2013c_00010","2013c_00011","2013c_00012","2013c_00013","2013c_00014","2013c_00015","2013c_00016","2013c_00017","2013c_00018","2013c_00019","2013c_00020","2013c_00021","2013c_00022","2013c_00023","2013c_00024","2013c_00025","2013c_00026","2013c_00027","2013c_00028","2013c_00029","2013c_00030","2013c_00031","2013c_00032","2013c_00033","2013c_00034","2013c_00035","2013c_00036","2013c_00037","2013c_00038","2013c_00039","2013c_00040","2013c_00041","2013c_00042","2013c_00043","2013c_00044","2013c_00045","2013c_00046","2013c_00047","2013c_00048","2013c_00049","2013c_00050","2013c_00051","2013c_00052","2013c_00053","2013c_00054","2013c_00055","2013c_00056","2013c_00057","2013c_00058","2013c_00059","2013c_00060","2013c_00061","2013c_00062","2013c_00063","2013c_00064","2013c_00065","2013c_00066","2013c_00067","2013c_00068","2013c_00069","2013c_00070","2013c_00071","2013c_00072","2013c_00073","2013c_00074","2013c_00075","2013c_00076","2013c_00077","2013c_00078","2013c_00079","2013c_00080","2013c_00081","2013c_00082","2013c_00083","2013c_00084","2013c_00085","2013c_00086","2013c_00087","2013c_00088","2013c_00089","2013c_00090","2013c_00091","2013c_00092","2013c_00093","2013c_00094","2013c_00095","2013c_00096","2013c_00097","2013c_00098","2013c_00099","2013c_00100","2013c_00101","2013c_00102","2013c_00103","2013c_00104","2013c_00105","2013c_00106","2013c_00107","2013c_00108","2013c_00109","2013c_00110","2013c_00111","2013c_00112","2013c_00113","2013c_00114","2013c_00115","2013c_00116","2013c_00117","2013c_00118","2013c_00119","2013c_00120","2013c_00121","2013c_00122","2013c_00123"],qm={"2002b_00002":`Sept. 13 - 2002

Starting this journal waiting to hear from Tom Hillbrand - he is on the way down - left Wed night but now haven't heard since then - where is he? NUTS - I'm getting hungry! Ate early - I guess kids are out in the boat - Ashley gone somewhere.

Tom called - he is in Illinois - tired hungry - got lost once - was going out for dinner then sleep. He is thrilled about coming down the road - I hope it works! It will!

Sat - Sept 14

Will - had trouble sleeping - thinking about money for Tom & me - will he get unemployment & food stamps - good here? - what about a bed? - But then slept until 6:50 - Ate & watching a tape of "Monk" Ruth called talked quite a while - Emil still in the hoop - Monk is again really good - need to get started on this room.`,"2002b_00003":`well - it's Sat. 2:15 - I'm on the patio - at 12 Sheila & I went to Sherriffa station and lucked out - two regular mattress + box springs 1/2 off were 60$ - for 30$ - great - poor Mike has to get them now - he just got off work - no word from Tom.

Well - it's 8:10 - Got so bored at 5:30 I went to Snappers out with Darling Marie - and a great guy named Al - we had a lot of fun - and Paul the phone. Came home - kids watching football game with Dave & Jeannie - got silly on our double bed watching "Are you being serious?" then fell asleep until 9 - to bed.

Sunday - Sept 15

Slept late
up at 7:00 - made coffee - read the paper - ate - dressed & took Speed for a walk - 10:28 - where is Tom? I will worry if he doesn't get here today.`,"2002b_00004":`Check my money again & give

110
64
174 $
33 - 27c
207 until oct 3

mostly for our groceries,
so unless Tom has some it will be
all for food + gas + maybe couple times
at Snappers - Crazy "whose Line"
is on - so funny

Monday Sept 16 Everything is great!
Tom got here around 11 + called from
Holiday Inn - said I'd meet him at
Snappers - he drove up + down 19-6
times and finally found me! He looks
super - no gut - half chest muscles +
arms - unbrimmed + blonde hair -
He is so happy - cute little green neon
car - we came home unpacked etc -
went to Snappers for sandwiches + beer
(4 cig) + got Tom a tune - no more of
that - 23$ - came home - unpacked
met Ashley etc ate - watched TV`,"2002b_00005":`Kids went out in the boat - bed at 9:30 (Tom slept from 4 to 7) we could not sleep good together - he snored loud a lot - I finally slept until 6:30 - let him sleep until 9:30 we dressed & went to Homosassa Island Remedies Causeway - picked up 6 beers first - it was fun but hot - then after that we got 60# worth of gas on Tom's food stamps - watched TV & took a map - Tom got his hair cut - we are watching TV & will fix supper at 6 - stay + see favorite.

Tue - Sept 17

Doggie going fine - let Tom sleep until 8:30 then we eat breakfast cook out the trash - looks 100% better but my back hurts more I went down & bought soup - Tom is checking on unemployment - we got an e-mail from Corky - I wrote a line and so did Tom - may take speed for a walk? Tom wants to swim? I have to be interviewed tonight`,"2002b_00006":`Thursday - Sept 19

Yesterday was great - went to Clearwater Beach - sat in Palm Pavilion - had 2 beers - had fun - today went to Honeymoon Island - warm - no one there - came home - had fried chicken brought into the house. She goes to work at 11 - watching a weird movie "Push, Nevada" - written by Ben Affleck.

Friday - Sept 20

Last night was horrible! Tom had all that damn sugar + twitched and jumped all night - I am afraid he may be getting diabetes.

Saturday - Sept 21

Had a great day - went to Clearwater Beach - took sandwiches, pot chips + apples - got beer too - it was great weather etc. Lots of people came home at 1:30 + napped - then Sheila Mike + Tom went out in the`,"2002b_00007":`boat—really glad they finally did!—then they took us to Molly's Bookends for dinner!—I had a super Chef Salad—Mike drove all around & then to an old little old bar—like hangout 2 pool tables both busy—we just stayed a little while & came home.

Sunday—Sept 22

Got up at 6:40 after a sort of tossy sleep night—but Tom slept in the bed all night—I am really upset & wondering about this no sex stuff—mean to have a talk about it—because if we don't do it this will never work—what is his problem?—Gorgeous morning out—Cool—guess I'll take Speed for a walk—He's got poop all over his butt—I couldn't get off—Well—Tom & I talked—He felt like he might be "taking advantage" of me after all this time away—HA!—I said "you know I've always liked it—might as well be sleeping with my brother"—So is that solved? Hope so—Everything else is great`,"2002b_00008":`Tue Sept 24th
It worked great!
Tom locked the door took off my clothes & had sex — it needs work but we will get there. The only problem now is my snoring!
Tom went to Honeymoon & had a great time while I napped. Huge waves knocked him over & took his raft & sun glasses! But he loved it. We met at Club & shot shuffleboard — he beat me first game 15 to 14 but I beat him second 15 to 0 — we played some cards & lost. He's off now to check free clinic & I'm going to get his chain & a new raft —
Also got him a darling "snuggle" stuffed bear — put his chain on it & cashed Mike's check for him some nice shoes — guess I love the guy!

Wed - Sept 25
Well not a bad day —
I moved Tom's blankets over
the bed around — hardly any room left. Ha-
anyway this noon we went to Kmart
and got Tom 2 pair of shoes — next dress`,"2002b_00009":`shoes & some athletic shoes - they were $30 & second pair 1/2 price but we got it for $15.01 - Got eye stuff too - Came home & mapped - Tom went to Honeymoon & had wild waves again! Then I got my drivers license address changed - 15$ & Tom & I ate at Arby's - great sandwich - of course he ate 2 curly fries & cheese sticks - Kids ordered pizza for supper We ate with them - Had fun with Sheila - she is witty - watching "Lake Placid" about the huge crocodile that ate cows bears etc. Corny - Bed soon

Thur - Sept 26 Good day - Had a great hair cut for 6$-3$ tip - at "Great Clips" - Came home - Had Tom get 80$ out & get his gas - I got him some lo foods - We ate lunch - I watched YAR & Tom went to swim - Ended up joining YMCA`,"2002b_00010":`(for $10/month + no joining fee) what a fast talker! Anyway, down to $210—she called—just in that big lasagna + so well eat together—she's bringing salad.

Friday Sept 27

Supper was great—then TV + bed—today was busy—we went to Clearwater Beach + had a great time—but Tom again lost his glasses in a big wave—I got knocked down sort of dragged along the sand on my butt + had 2 beers and sandwich—shower + dressed—then called at Stein Mart—Car wouldn't start?—so Mike wasn't here—Tom & I went up—wouldn't start—Tom doesn't think it's the battery—maybe alternator do they want to see—the may go to Tarpon Turtle—by boat—I had a long talk with Tom's old friend—she sounded nice + level headed—& told her I loved Tom—she said "we all do"—I said "no"`,"2002b_00011":`I mean I am in love with him" —
He told Tom about it (not
that sentence) — Mike's boat battery
was dead so we went way down
to Shells in Dunedin — Now the
bizarre part — at the very next
table was Johnny — Jo Rachel
& another old gal & a
guy I — I
didn't even look over — Tom kept
a couple of times — Sheila knocked over
full
pop — I know they had
& fish new pots & cole
slaw — and a glass of Chardonnay
Kida wouldn't let me even put in
a 20 $ — came home so sick
she could work on her car

Sat — Sept 28
Up at 7 — coffee prayer
Tom up at 8 — he wasn't
Church? Oh well — & called Charley
last night & said come up to
Eagles at 4 or so — not sure
about him though — just tried
(10:00) to call Brian on tons
card — no answer — will try`,"2002b_00012":`Later - I hope he isn't gone! Where is my Vicker check? - I can cash it at Cash & Carry.

"Monk" is Tom now - 10:00 on 29 - I'm on old one but good - always I'm going to the B store across the street 1/2 off everything - may look at golf clubs + shirts - Ashley sat behind me - NUTS - went to thrift store - found a darling shirt some jeans + a satin robe - Also an apron from Albertsons for Tom - if the wind to. Came home - to the kids starter - Mike Crooby + being ready to she again

A bad deal - Tom was gone 5 hours! Pissed me off - I got ready + went to Eagles - I found out I'm really good at Shuffleboard! - played 3 games - won 2 - a guy (Bitty) said I was best lady shuffleboarder he ever met - Ha - I called home I had Sh. tell Tom where I was - We came up in an hour - we shot pool + laughed a lot - like an idiot`,"2002b_00013":`I wrote a check for $20 — we spent it all — had to stop — I think 6 beers — a good singer guitar player came in — played "House of Rising Son" for me. When we got here made mad love — Ha-Had the house to ourselves — slept away & can't find my lower teeth! — WITS — 20 to 8 if everyone is asleep.

Don't know what to do now — it's almost 6 — lots has happened — we went to Honeymoon — I walked a lot — we ate a hot dog & had a coke — then went to see the Arts — Scottish Tower 11 — home there to talk to — will go up two — close home & then went looking for that damn golf course — never found it drove & drove & got pooped! Tom brought a Stolberg & drank — anyway finally came home & napped — Tom went to Honeymoon again — then got up & called Jim & Shawn.`,"2002b_00014":`Well I tried to learn the house rules down low—man—I put grease in a big skillet & was going to fry pork chops—Sheila said—put with my pots in the oven so I walked off—then I walked into the front room—smelled grease burning—a HUGE fire—good thing Mike was cool—got the extinguisher & put it out fast—there was smoke all over the house—we put fans facing out—OK now—waiting for supper—my neck feels better—

Monday—Sept 30
Last day of Sept & a terrible fire—last night like an idiot—I ate a big piece of Rich choc & then laid down flat—I got terrible bile etc but then started shaking & couldn't stop! But Sheila up—put lots of covers on me still shaking uncontrollably—I started rubbing my worst legs & finally just shaking—But Sheila went to see to`,"2002b_00015":`to ER in case of smoke inhalation
So poor old Tom took me up at 6-
Didn't get in for 2 hours - then
waited another hour - NVTB But
my lungs are OK - & they think its
flu or a bad cold - came home saw
Dana & Maria at convenience store - she
asked me where I was hiding Tom all
this time - but Dana looked awful - all
poorly white & thin - Home bed - none
left to job - apply - thinks he has a
chance (sleep until 1:30)
ate crackers - milk - 2 pieces toast -
Tom just felt for Horseshoe
good - He closed it - I called
Sheila to bring me medicine

Finally felt better this morning
Read - cleaned up - at 12:30 watched
Tom to the Beach - at 4 to the
Eagles - Tom beat me at Shuffleboard
& once at pool`,"2002b_00016":`Still feel kind of sick at my stomach—Diana came over—little chaos but fun—Sheila got kids cute little curtains eyes swirled noises—they loved them. George got Moody & Andrew kept wanting to "go home"—but it wasn't bad—Last week Maria had flu & Dana was sickish last night—my nose hurt a lot—today it's better.

Where is Vickers chick?—And Toms checks?—he has my car—church store I hope!—He needs to find a job—maybe we should go to the apt. today & look at it—we'll see—I still don't feel very good—let dressed up—where is Tom? 9:30—

3:00—well—a good & disappointing day—we applied—& gave him a $235 to ok!—pretty sure will get it. But the mail came—no Vickcheck & no union checks—for Tom—poor Guy—We are job hunting`,"2002b_00017":`tomorrow - I've got a check for $65 - so we cashed it - got out $20 out at the bank.

He got 4 beers - I got a bottle of wine. I had him go to Carversway & stuff. I really want Tom happy - & I will try to guess I'll go call John Trent.

**Thursday - Oct 3**

A gorgeous cool morning finally! It won't stay - my neck feels better - I hope - at 8 Tom went to the Y - then it's home & job hunt. I think just drive into Dunedin and apply in person at those places in the booklet. I got unhappy (again) with Tom - he flirts all day - talks about sex - sucks my toe - kisses the back of my neck & then says "Goodnight" no kiss or anything - it really pisses me off & I told him this morning. Also said he won't smoke in the apt. There is point store in Tampa with ad in - Best & think we'll go to jobs around first in`,"2002b_00018":`Quentin, — Allie is in the water — just floating down the river + still now. I wish Tom was here or I had a camera!

Quite a day — went to 4 different places looking for work for Tom — not much hope — maybe Heritage Springs? Better hurry — looks like No unemployment still maybe have the house to sell. My neck is still bad — but we may go to the Eagles anyway — may see if kids want to go with us — Damn — I hate to start feeling better & I know it's a drag to Tom — As I lay down to watch & got a migraine — NITS — didn't last long taped WR — put ice & heat on it — Crazy kick on WR — screwing up big time with that new flappy — feel sort of sick — ate bread & milk — Hope Tom — maybe he'll go somewhere alone — what is wrong with me? Stress? — nerves?`,"2002b_00019":`Oct 14th Friday Not a bad day-
Tom to NY then we bought Jobs (etc.) comedies - went to Charley's Tavern - met there - (turns out he was here) and good news - I took 1/2 pain pill (strong) didn't get sick.

Sat Oct 15th Lost with fun but Tom acted weird - made me mad - went to sleep on the patio until 3:30 so went to Beach - not home until 5 - then we went to Rib House with Mike & Sheila - then he slept on patio until 2 - neither of us slept good - kissed me this morn-

we tried to find another golf course - no luck - down Belcher - we both napped then went to Eagles - fun but spent too much - played shuffleboard partners - We went + then at pool 75¢ beers - home at 5:30 - Lee watching base ball I'm not much - Sheila just came home - Ashley at that wedding of her friends - I'm sleepy`,"2002b_00020":`Sun - Oct 6

Slept fair - neck still bad
but this morn. at 6:15 - took a whole pain pill - helped so much - every 4 hours
no booze though & sort of sick at
stomach - don't care - Tom just left for
Honeymoon with his new cap on &
promised to put on sun screen - will
he? - so nice on the porch-patio -
reading doing Cross word puzzle - then
an L job in the paper - one sounds
great general maint. man at trailer
court 10$ an hour do two weeks - did
another p.t. at a mobile home - Tom is
J-day - JOB day -

Tue - Oct 8

not sure what we did
Sunday - not much - but yest - I am
pretty sure Tom got his job at
Heritage Springs! - Great! Benefits!
7$ an hour - BUT - the rest of the
night a nightmare - It was my
stupid idea to go to Jesse's - no more
2 for 1 - its half off wine & beer
so Tom decided to have wine - he
was already acting odd - looking`,"2002b_00021":`the waitress to call Eckert about "tafts" - all kinds of questions about their life - etc. Then went swimming - I'm not sure he did - may have had a Jack Daniels downstairs or something - he odd on trip home but here absolutely out of control. Teasing Ashley - wearing those goofy shiny pants - we had sex - rather wild & noisy - but he can't concentrate on TV - once I look over - his long out & covers down - then looking for some shorts puts some of mine on. Saying idiotic stuff - about me sleeping on floor - crap - crap - NEVER AGAIN! This morn. I said "you sleep in my shorts on?" He said "why do I have your shorts on?" I said because you were totally out of control last night - well talk about that later. Up at 7 + off at 7:30 for drug test. Ye gods - I do not need this in my life. Ashley up until 3:33 on the 21st.`,"2002b_00022":`Computer. I need to get my blood test. I'll wait until Wed.

4:15 - Today just as good as last was bad! Tom went & so sorry about last. I know he didn't mean to do it - about calling collect (which he hung up because I told him to) saying opposed etc - anyway we dressed - he had his test - came back & we went to Apt. & he filled out paper. I wrote at ch 35$ - we have around $450 left, then a neat deal! We went to super Brown Park - up at 19 - on Crystal River. Really beautiful - then had a sandwich at Subs - very good - home trapped - let Tom have the bed & I watched TV on porch - fell asleep first - now he is at Honeymoon until 5 or so - we will eat & go to Eagles for Bingo - fun - I'm sure he will be OK. - A nice long email from his mom.

Wed - Oct 9

Yesterday a great day except at Bingo they neck hurt so had to go home. But I won the first`,"2002b_00023":`Bingo game of 20$! - Tom took me home + met back - He came home at 18 - very sweet - It's 8:03 now + he just left for NY - I have to get a Dr's appt + my blood test today - Hope we hear about Tom's job - they are waiting on his blood test I'm sure.

4:45 - Napped + watched TV + read Tom watching "Boywatch" - Made a wasted trip to Tarpon - Dr. office closed & I was supposed to get a chol. test so needed a fasting test - NUTS - Then we went to a Hospice Thrift Shop + got some meat shirts - 1$ each but Tom tried a Contest + won 5$ in thrift store money - So we got shirts free! We are going to Honeymoon Watch sun go down.

Thur - Oct 18

Had a great day -`,"2002b_00024":`At 9:30 to Clearwater Beach—There were 4 manatees in there—also some dolphins & sting rays. Tom saw all 3 & never saw before. We had an argument in the car about my not consulting him about stuff—mostly his mom buying up tel. card & stuff—he said he didn't pay he wanted to buy ours—that they would be "stupid" if they couldn't send him cards & money—HA—HA—start asking I guess but most of the stuff is—He wants is not sensible—and he can't have it both ways—we both backed down.

A long letter from Corky—She loved my letter—Poor Corky—

Well—I'm in total shock!

Tom is gone!!—First the fight about Corky & phone cards—then I tipped him $5 for a card & extra $17.00—he went to "library"`,"2002b_00025":`while I napped—at 3:30 back—
quietly funny look—a drunk
know then said he was
going to have a cig—but took the
phone outside—35 min later
still talking to Theresa—smiling
& laughing—it just hit me
wrong—of course he couldn't use
Sheila phone—we'll see who he called—
when he came in I said "How stupid
can I be?"—you needed that card
so I didn't know you were calling
her—you just can't get over her
can you? & changed clothes &
stormed out—he said "you are
wrong"—then I have my tillfold?
threw it at him & drove off—I
went to Jesse—had some tomato
juice French fries & wrote some
rules we were having—HA—got
home—NO Tom clothes all
gone—left his phone Teddy`,"2002b_00026":`Dear [name],

Shoes—where has he gone?—NO money—unless Theresa is sending some—I hate being without someone to go with but mostly relieved—NO more watching money—saying NO—etc etc—I moved stuff around—back to normal—Or at 10:15 tomorrow—just remember those pics are probably in—unless Tom got them today. Is he going to just disappear?—go back North? At least he is out of my life for good.

Friday Oct 11

Well—at 6:00 AM the phone rang—"Mary—this is Tom—just wondered if you want me back?" I said "NO—to much lying & spying & my nerves always shot"—He said "OK" & hung up—That is THAT!

Neck still hurts—Dr. today—Still have about 3 of Tom's clothes—will give to Dana. Now I have to write Corky—write—I wrote Ruthie a long e-mail + Corky`,"2002b_00027":`advised her. Tough Love - (she won't)
go - will get ready at 20 till 1
go

Big News - Sheila got her
promotion! Nurse Manager
about $75,000 a year - Ye Gods!
$50,000 about $5,000 a month! Wow -
They are giving her a dinner tonight.
So proud!

Well - Dr gave me an encephalograph
for my heart - (it is fine) a
shot - & divert press.
($8.50) also sending me to a
neurologist next time - I need to
call the apt. after I watch Y&R.

Sheila asked me to come to
the banquet in her honor -
dress up & need to wash my
hair + shower.`,"2002b_00028":`Just got back - miserable trip on way down - Sooo hot & so far away.

The Bistro "Very nice lonely place - What a classy educated nice group of nurses - + one Dr - Lots of toasts to Sheila - I did a Hip Hip Hooray - Just before we left I said something about a room mate just moving out - a woman at the end said "But he just moved in" - I said "Sheila your telling them about my love through life?" We all laughed.

Got home message from Jan - + some ventilator - they sold the house! How ironic! - She'll call tomorrow.

Oct 12

Sat - Oct 12

Up at 5:30 - Nice call from Jan worried about me - Told her I'm fine & will bounce back - Haven't went sick one tear on that jerk's behalf - I just moved everything back in the bedroom - Today I'm getting a new watch + picking up pics - taking out $7.00 - hope it lasts until the 3rd - where is my $33.00?`,"2002b_00029":`Got $20 out - it says still $399 -
know it isn't that much - got a
new watch at Stein Mart - 20% off
because I took clothes in + got a
slip for each one 10% off - put it on
watch + earrings - nice to listen
to my music - have money - not
buy cigs or snuff - anyway some
good animal shows on. The "Monk"
taped was a new one I hadn't
seen - good, too! "Monk" will
be on all day tomorrow! A cute
new movie starting that I will tape
while I am asleep.

It's 7:19 - the movie sucked,
so went to the Club - Cate "Tex"
asked me to play shuffleboard -
We just barely beat - 20 to 21
Had 12 beers - played pool, games
None asked where time was?
Went to Wal Mart + got
two - pretty good ones too!
Said on Causeway`,"2002b_00030":`looked at them — came home — had pizza ice tea & Carly bar — then Corky called — said she had been crying since she got it — & said I thought she'd a tear & won't — I make her feel better — said Tom may have taken that job — sleep in the car & eat at Shelters — get money from Theresa or his housewife — She feels guilty (Catholic crop) — She talked quite awhile — Kida bought a Earling blow up pumpkin with 3 ghosts popping out of it — It's HUGE! Cost $40! — 

Sunday Oct 13 Woke up in middle of night — read & had Crackers & Butter — Slept until 8 — then an Monk show on all day — first one I'd seen — Electricity all off Sheila & Mike fixing new hood over stove that I burned up — just`,"2002b_00031":`Had a "fight" with Mike—told them about those slot tabs we got at Amlets & he pipes up "what a diff between those pull-tab scratch-offs?" — Blah Blah — & just threw up my hands & walked off — The diff is where they are sold & gambling licenses & guess— when elec in back on I'll call Charley—see if he wants to meet me at Jesse's at 4?

Went to K-Mart and got scotch tape & package to mail Tom's mom her stuff. — Had a nap— A huge thunder & rain storm. Really cute thing happened—This big old turtle Sheila saw earlier came up to our porch twice & wanted in! Poor guy was afraid of the storm too, scurried away again— I'm watching the "monk" show—been on call day—Kids may go to a show— eating—more—Think I'll pass`,"2002b_00032":`Neck hurts again

Fasting test in the morn.

Watching a good murder mystery
with Uncle Thurman & a Baldwin.
It is so familiar I may have seen
it. She is blind & a witness to a
murder done. I can't remember
how it ended.

Monday Oct 17

Dreams again & gas 7:17 - Sheila
& Mike both here ?? what gives?
Again - No one tells me anything
around here - I will be glad to
be alone - It's almost 7:20 - starting
to get light - so I'll go to Tarpon
& get my stupid blood test.
18 & 25 - Got test - went to Wal
Mart for coffee & eggs & toast - Bought
bread, coffee, orange slices & crackers.
Neck hurts - Everyone gone - Ashley
works - good - Mike to Dr. Sheila took
dogs to Vet - so I called Charley`,"2002b_00033":`Gotten and had a good talk—hope see him there. Then I got directions to the Drs tomorrow—Better leave at 9:15—its past quitting time—
I took a pain pill at 8:30—
neck still bad—Corky called twice—
Did I hear from Tom? "No"—I think she still wishes I'd take him back—
no way—then called back to say
if I found out where he was not to
tell anyone—I wouldn't anyway—
watching TV—"Whose Line"-
A quiet Holiday—Columbus Day—
Well had some nice drinks with
Charley—although he is tipped on
taking Cindy at Palm Lake Village—
Told him again to let go but he
thinks he "threw on it" but home
just as "Meridith" (Tom's realtor)
called—Has an offer—needs to
talk to him—What was he up to?
I thought I'd call her—G'morn
Call Heritage tomorrow`,"2002b_00034":`Poor Mike in agony with his gut - I'm not sure - I'm hungry - supper soon I guess -

Spent 10$ at Jesse's - no 1/2 price on beer - Foody - So I'll drink wine - or drinks downstairs - they have drafts there - Charley and I are going to walk again when it gets cooler -

Sheila fixing a good supper - sweet pots & broccoli & meat - my neck feels better - beer waiting for supper - supper good - stuffed pork chops - sweet pots & broccoli (note that) very good - rest of Toms ice cream -

Meredith called back - call phone number? - No - said I'd call Heritage Springs tomorrow - what's up to - close HOLE!

Thu - Oct 15

8:30 - just got over a migraine - a real mild one - so that I'm in a usual series of 3 - Sheila works today so I`,"2002b_00035":`Hope she can take me to the Dr.
Drive my car though for the air cond.
Need gas - at 9 & think I'll
Call Heritage Springs & see if
Tom started work - not open until
9 -

Man & hope I don't need an MRI -
may refuse to - I would
like to hear something about NUTTY
today - How dare he worry his
mom this way? - + Meredith -
Called the Springs - they
said a new employee was
starting today - & said if it
is Tom Hillebrandt tell him to
call his mother - that Mary called
she said "Well he knew lots
that no?" "Oh yes he should"
So I called Corky & told her -
Good news! - It's 1:00 -
got back from Doctor`,"2002b_00036":`Hooray

Off of Coregolin (warfarin) and on a new improved arthritis medicine! We got lost from the awful directions I got— but called, got new ones—and I'd seen Hulley years ago because of my migraines!— anyway he couldn't figure out why I was on warfarin either & told me to stop— put me on an aspirin pill & gave me samples of new arthritis stuff. Better!— I'm to quit warfarin now and Friday start another stuff— I'm so glad I feel better already! We stopped at Snapper—they were all so nice & missed me etc.— I'd love to go again—we had tomato soup & cheese sandwiches—I had 2 beers—it's raining now & I'm watching rest of GSR—Big Storm out there!

Found out cost of new medicine $135.83— Eeek not covered by either medicare or wellcare unless (there is tylenol)— good old Betty Lee`,"2002b_00037":`one - will check on it - what can I do for her? - come & stay with me this winter -

Dr. Rossi Durai just called to see what Dr. said he's very happy about it - said he'd take care of the coveted test deal.

In studying home tonight -

Wed - Oct 16

Still home - oh well - I'm hoping when I move I can get a part time job - in a dress shop - thrift shop -

Today I'm going to call elec co TV + phone co. about deposits? - I need to find my old address at Cozy Shop - found it & will call next week about deposits - I shouldn't have to pay deposits. Hope not! & think I have $39 in the bank.

This morning I cashed`,"2002b_00038":`that $33 check—bought groceries & then called Charley—we played Lipwood—he beat both games! But we had 3 beers & bought a pizza—I was ready to jump in the back but he couldn't so begged off! Poor guy has been after me more than a year & then can't! Half loaded—drove home O.K.—took a nap then read on the patio—water way up! To 6:00 Sheila home—& walked Speed & Diet Mike went out to eat (not in the time) & well-fried ham salad & cheese sticks—going to watch TV—started a new good book—I may start walking in the morning—keep it up I hope—

Thur—Oct 17

On with zooming along.

Good—Decided to buy my own food & eat at 5:30—try & lose weight—well—its 6:08 & no one seems to be—NOTS—& hope kids go to work—Ashley seems to be out of`,"2002b_00039":"town (or at her friends) I have to e-mail Ruth & email this stuff to Corky - Also put Toms stuff in a garbage bag in the closet & get that drawer empty. Can't wait to move - I should have $800 in the bank when I do - I HOPE - Slept lovely - shouldn't have taken that Prozac - I may go to the bar tonite or at 4 - I missed Y&R yet will watch today - at 10 went to the street - an umbrella for $69 sheet for $1.50 - thanks Kathy - they are high - but I saw a cute bar up there - I think I'll go back to Snapper again - no traffic - we will the windows open - so nice - at 11 will fix lunch - eat outside finally up -","2002b_00040":`Watching Y.A.R. - had a good nap
its 2:16 - I think I'll go to the
Club at 4 - home + eat + 6 or so -
It's a beautiful day out - I'll take
Spud for a walk - & did from
Into "Michael" - Eagle guy that
started it. Pretty sure he's married.
Went to Eagles at 3:30 - Had 3 beers
and shot shuffle - lost to that goofy
"Bobby" - then went to that Chinese
food place I had a pint of sherry
& 3,25 of course ate & then
home - great meat loaf din. - from Boston
Market - watching 76's show.
Really funny - I need to take a
shower - well where is Tom? - I sent
him Mom his crap. Hollywood Square on
Friday Oct 18
Up at 5 - no
paper - made coffee - not sure
what I'll do today? - may go to that
store in Divadin - & start my
new pills today - hope they
help - think I will definitely try`,"2002b_00041":`And get a job - is Mike going to work?
Sheila is up - she called Ashley
to check on (that's a new one)
after 6 Sep check on the paper -
10:30 - Coed - really cold in here
guess I'll put on a jacket - It's 2:04
That mess is from hearing
that in Jan. I get 1/6 of
these - another 15$ - that will
pay my cable bill? -
I took my new pills and
they may have made me really
sleepy - slept from 12 to 2:15
watching YAR - Paula mother is
in jail for breaking in
Michaela's office! HA - & think
I'll go to the Causeway & read-
or not - don't feel very good-
Sickish - ate that meatloaf
for lunch - & have to
drink that chicken
up & freeze it`,"2002b_00042":`Well—just called Corky—Jack answered—Tom is back in Norfolk—Good!—maybe he will go to jail—I told Jack—"Good—that's a good place for him—just so he isn't in Florida—that's all I wanted to know"—& hang up. I think it sucks of Corky not to call me—their line was busy—maybe he just called—Oh Fuck him—he is a psychopath—and a menace—

Sheila bought a moose and table—$178.00!

7:00—Well—had fun—glad I left—went to Jesse's—sat outside—drafts $1.50 but next one free! So .75¢ a draft. Also had cheese sticks (but they were $.475!) gave them 6¢—(next time French fries)—Came home—told kids about cheap beer—for some reason Mike said "after you move house you won't have car trouble"—HA—I said "I've always lived this way Mike—that's right. I have kids with money—`,"2002b_00043":`my sons have money — that really pissed me off —

I called about the Pfizer deal — I am thinking about a nasty letter to Tom — not sure of his address.

Sat - Oct 19

Watching "Moulin Rouge" — Crazy movie up but quite exciting really — I guess she must die in it — she must have TB — not sure what to do today — have to really watch my money — guess it will be Snuffers at 3 or 4 or Jesses once or twice a week — I have to kill time until I move — if I am lonely again I'm more lonely here.

Jon called — told her all about moving & why — all about Tom and then my health.

3:00 — well maybe I have really good news! — went to Deemed Main Street — went to Skypa Somerest gal — but $2.00 — missed`,"2002b_00044":"Anyway, we had good golf today. I went to this cute boutique—been changed from consign to a straight store—no one there so I looked around and then a gal from next door came in. I took her $10 love to work part time—the owner just had a serious back operation—will be in on Tue—so—I bought these darling earrings—cats—$73.00—but worth it if I get a job—I could open Mon-Sun everyday. Got up for it or ate a hot dog on my way home—got ice tea at Allertons—home—tried to mop but couldn't—got a glass of iced tea & told the kids about maybe getting a job. That would be so neat—something to do and extra money—Sheila ordered pizza","2002b_00045":`She just doesn't want to cook! I just remembered I'm supposed to have a carrot check.

Good pizza! Watching Crazy & Are you being served? So funny! It's funny—bed at 9 Sunday, Oct 20

Up at 5:30—I read the paper—did the crossword puzzle—my new watch just stopped! Will take it back today—Also maybe buy some boots (short boots) and a belt purse—I want to get that job—man—what a waste of time! Gasoline! To Sears—It was not open until 11:30—it was 10:15—so went back to Walmart—no good boots or purse I really liked—will wait & go with Sheila to Bealls maybe.

It's 10:30—watching a house`,"2002b_00046":`Changin' show - ate chicken w/ kids - had a nap + slept & went to Palm Harbor Craft outdoor show - beautiful EXPENSIVE stuff - tried ate supper TV - bed then Shawn called - I'm sure Brian told him I felt neglected - Ha- Collin taking piano lessons. They both like getting up + singing at church programs especially Connor - he is losing teeth - Shawn said not to send over 1.00 - maybe I won't? - need to call Joe Sec. today - get forms to fill out for Officer - watching "Lost World" - a pretty good one I think. Can't wait until tomorrow when I go to Sacks - I'll make her an offer she can't refuse - 4 more days until Nov. then 4 weeks and 6 days until I move - I have to save $800 before I move! - Unless I get this job at Sacks`,"2002b_00047":`then I won't have to worry—
Anyway went to Jesse's—had
2 beers & then started home!
What a mess!—up Alt 19—
Crawled along—finally got to
Alderman—Crawled along
there too—went into Snappers
had 2 beers—
Saw a horrible wreck on
19 before I left—Horrible—cars
smashed on their side—guess
they were air lifted—will be so
glad to get off of 19—
The Oct 22
Couldn't stay awake and
went to bed at 8:30—Now—at 3 AM
and I can't sleep—I've almost decided
to not take this new medicine the
new Dr. gave me—just go to Aspirin &
over the counter arthritis pills. Even
if Kitty sends them—something is
making me sort of dizzy & unsteady,
no one would ever know it—I may
just take my pill for Cholesterol—
& couldn't afford $50 a month`,"2002b_00048":`This offer deal is too complicated! If I can get this job & then swim twice a day at the new gym that should do it — anyway — I will go to Socks this morn. about 10:30 — NO more 4 PM games for sure!

4:00 — Quite a day — A bad news — Instead of $200 in the bank down to $21 — they just now got the $235 out of the bank — so I got the last 20 out — Going down heard funny noises so I went to Charley — Completely out of oil! So he threw me to downtown + I went into "boutique" — Nice older in pleated body suit — had nice talk — she wasn't owner but took my name & tel number & said she would probably need me. I also left some of the places I worked in. I found out about the NO money with Charley — Had a read out — just wasted it — with Tom just realized that $35.00`,"2002b_00049":`Check I wrote for Tomo apple wasn't in and those earrings not good for either. I man called both places - I called and told them someone misused my card. What else is out - Eagles? Good thing I will have extra money next month to pay those with no more checks or card - just cash - Tomorrow I'm calling Carvis to get a cheaper one. - I have $42.00 to last until the 3rd - I can do it - what scares me is I won't have any in the bank dept - oh should have maybe $400

NO MORE CHECKS or ATM

Wed - 2/16 11:20 - well picking up checkers might be a blessing in disguise - I got to talk to the lady at Savannah's and help her put stuff out. They might need someone`,"2002b_00050":`4 to 9 PM on Friday & 12 to 4 on Sunday — Sheila said they have to pay minimum $6.25 — if I can make $200 a month.

The place is so cute! — Such neat jewelry & stuff —
6:36 — & just ate some honey & crackers & ice cream — Also got some privacies — Sheila here —
bought flea stuff for dogs —
watching TV — "Hollywood Squares" —
Thursday Oct 27
Slept fair — up at 5 though —
Kids both at work — only thing to do today in mail little city package
maybe a couple beers at Snappin —
figured out my checks back — all paid except towels — 35$ so released —
watching "Lost Loved" — the "bee" episode. Also taking the trash out — never saw a family that hated to do the trash like this one!`,"2002b_00051":`Went to Walmart & got some cheap sleeping pills. Asked pharmacy about OTC medicine. Heard Tylenol extra pills really good. Think I'll just do I aspirin & some tylenol also my chol. pills.

I called Dr. about my pap test — he's calling at 4 — also called about new insurance rates — so I'm sticking by the phone — hope she calls about my job.

Dr. called. I get my ultra sound Mon at 9 — told him I couldn't afford those medicines. He mentioned placenta.

Friday - Oct 25

2 months until Christmas Jan! — One month & 1 week until I move! Boy, I hope this six days last more & I hope to get that job! It would give me`,"2002b_00052":`something to do after dinner! It's 8:00 - Mike still home - what's with him? - I hope he doesn't get fired & be here all next month!

The H.D. snipers were caught! 10 dead & 3 hurt. I took Speed for a walk - I think Ash is getting ready to go to work - Good - I may go to the library later.

I did go almost my last trip - as I'm getting ready to turn out of the rear window in an ass hole speeding - Changing almost started to go in them lane to go around me in the right hand lane - he had to brake & I'm already flinching for the Crash - the air was blue - he wouldn't look at me - MAN ate lunch - back hurts - took a Darvocet - got 4 good looking murder mysteries - Almost 12 - don't know if I'll stay awake until 9:30 - will sleep if not awake - Mike still`,"2002b_00053":`sick — It's hot out there again.

Big News — I was napping when Mike said "Mary do you want to see that big alligator? He's sitting in the back yard by the clock — I jumped up & came out — My God! He's huge & up in the yard! So I told Mike to take its picture & he did. Then Dudley went to the door & looked out — the alligator reared up turned around & ran to the water. Jumped in! My God it was spooky!! I may call Jan tonight & tell her about it.

I thought I might go to the Club but I'm kind of sick at the stomach — I'll see —

7:35 — Had a good time at Eagles except that stupid Bobby had me...`,"2002b_00054":`shoot shuffleboard (beat me) and
he's so Corny and Clumb—
Then tried to just practice at
pool—here he came—I beat
him but I think he let me.
I did talk to Michael—guy I
thought was cute—well—Im pretty
sure he is GAY—his roommates
name is Tommy & then I was
talking about Ashley & he said
"Whatever—I don't have any kids
don't talk about them." He—so—
but he is still charming & funny.
Then "Bobby" and I
played shuffleboard & won a drink—
home at 6:30—kids gone—I fixed
fish & dessert—
Watching a good "Sherlock
Holmes" as a young drug quote—
never last until 10 though.
Sat—Oct 26 Slept until 7:00! Those
new pills are great. Forget &
watched a movie—it's 8 now—I read
the paper—not sure what to do`,"2002b_00055":`today — may play in the shuffleboard tournament? I'll see — this room is AWFUL so I'll clean — I hope our big alligator never comes back — think I'll go to the Causeway trend — its 10:30

My car stinks!
Always about the time I go down Klosterman to Alt 9. It jerks jolts + jumps like crazy, does mins. Installed scares me to death — just read so neat, form there. Come home ate cheese + salad + orange slices — "Lost World" (new & hope) Coming on — no — it's old one — NUTS! just saw it Thur or Fri — Had a 2 hr nap — But am pickish — damn lettuce salad — Sheila just called — anything we wanted to eat? I got a soup — wrapped I guess, watching an Adventlobe Inc. that is a pretty good show —`,"2002b_00056":`modern day adventures - Sheila got some really good soup & sandwiches from a "Bread Company" - Big new show about Nostradamus? - Is he a hoop I think so?

8:00 - watching an early "Friends" - She got hanging flowers to put in a bird bath for in front -

Sunday - Oct 27 - Up at 5 but really 6 - clocks already half turned back - daylight saving - I think Sheila & might go out garage saleing - we better go early - I might find a coffee table

It's 2:30 - We had fun & got a neat lamp with a pale green shade - a really pretty clock with gold & turquoise paint & a cute pelican door knocker or knick-knack - took a nap - short on watching a kind of goofy kids show with a mummy that can walk & talk - ate some snacks - took Speed for a walk - not sure what to do next if the`,"2002b_00057":`day — I wish Mike would come home from fishing and drive my car for me & wonder what Charley is doing? — Could call — he just called me — working on his car. I asked him up to play "Upward" but he said it wouldn't be today. I bet he is going to Olga — HA — show is over now — guess I'll go read on the back porch —

Now I'm watching this amazing movie that could be about Tom — only this guy cons women and murders them — a smooth talking liar that charms people — takes their money — sets fires etc., etc., gets insurance money etc., etc., now the guy is telling him he is broke and everyone knows it — he even uses his tongue a lot like Tom was always`,"2002b_00058":`using his tongue. To stop around in his mouth. I don't know he is really an insane person on the edge of total insanity. I am so lucky he left when he did before screwing me up totally. Sheila is fixing salmon baked potatoes. I hate to see this end. This is how crazy people act. She goes to prison for 25 years.

Sheila made a great meal—baked sweet potatoes—eggplant & great baked salmon & also a banana nut cake—a good Sherlock Holmes—The Whitechapel Vampire—then at 8 "Hero Wolf" Hope it's new—otherwise $10 read—Another weekend gone

GOOD—Tomorrow at 9

Monday Oct 23

Well—last night I saw a shocking thing, Ashley`,"2002b_00059":`photographing herself topless on the computer! — I debated telling Sheila but finally wrote a note and left it in her car. Now for the blow-up? —

Well, it's 6:10 and I think Sheila is gone. — I hope she doesn't just ignore this deal like she does everything else —

8:15 — I decided not to leave until 9 — so that traffic will be quieter. They'll keep me outside 1/2 hour anyway probably.

Ashley is up — must have to go to work at 9th who cares? — I hope my car works O.K.

Poor Speed had a terribly asthma attack this morn. Ash actually got up & calmed him down — I rubbed his throat tummy — seems OK now. I need to take a shower in kids bathroom.`,"2002b_00060":`Back from Dr. Car acted terrible going up - backfiring jerking but fine coming home - pretty sure it is the oil I used - I think I'll get an oil change -
Dr. washed out my ear - room going around a lot - then he gave me Bo aggrox to last until the results of my ultra sound in. They have to get O.K. from my ins. company - probably won't get it - they did get it.
Slept until 2:15 - after 4:30 A.M. -
Ashley just came in - I'm heading for Eagles soon - not sure how Sheila is going to react to that note. Probably hear it up and just forget it like she does everything else - Can't find the number to Eagles Club -
Well went up there - pissed off those guys wouldn't let me short shuffleboard - "I need a partner" Ha - anyway - practiced pool - BAP had 5 beers - went`,"2002b_00061":`To Snoppers - Ordered a Reuben. Here came Charley (a little drunk) I bought him a beer - told him about Ashley - had good talk - he just called - told me he told Olga to leave him alone! Mike just asked if I want supper they had steak - I said no - already ate - feel like I'm hiding in here - what will Sheila do?

Up at 6 - Mike still here but left at 7 - then back at 8 - in bed & guess now - what is going on? Wake up? That drives me nuts around here - no one says anything - Didn't see Sheila at all last night, or this morning - what about Ashley? I need to cash my check & pick up that one at Apts. Hope my car is working OK - an ad on TV reminded me to call`,"2002b_00062":`line. Comp today — I'll wait until 9:15 or so — at 10 cash that check — see if my car is working OK.

I also need to buy at least 2 cans of oil: 10-30 — at a dollar store — down by Cpts.

Worse day I've had for ages! Decided to try & pick up that check — Car scared hell out of me — never again except maybe to Snappers. I may try & get Charley to come check — Anyway Apt credit cash check — oh hell — I'll mail it in Friday — in a money order — I'm stuck here! — I've got Charley just called — Coming up now — there goes my nap maybe — well — quite an afternoon. We drove up to Eagles — (motorpool) then to Nash & Nashy — they cashed my check (for $200) gave Charley 20¢ for a gas filter. We`,"2002b_00063":`looked at Walmart - I got cards for Emile & 2 loaves of bread (I hope they are in my car) he took me home & went to a friend of his that is a mechanic - I took a short nap couldn't sleep - oh yes Good News Anita from "Savannah" (gift shop) called - Roy the boss wants to talk to me tomorrow. I knew I'd get that job. So it's 4:05 now where is Charley? God I need my car! Mike thinks it is the gas fuel cover - Hope so - that's only $20 - Come on Charley! It is the spark plugs and some wiring that oil was dropping on Charley had used the wrong glue on the head gasket - anyway he drove it home & left his car for me to drive`,"2002b_00064":`down and meet him. I have to go to "Savannah" around 1—
or earlier, Anita and Roy.
Sheila called—meeting Mike
at Thrift Shop to get that
big bed head.

Wed Oct 30

Drove Charley
car down and met him. He
brought me back—was going to take to his
apt—what would we do until
1 or 2—so got him to bring me
home—slept—Charley called—
he'll be done in an hour or so—
I may go on to shop?

Charley called—11—on the
way up—bill is $70—could
have been worse—so I think I can
still have $600 in the bank next
month—

Got the Job!

Roy is exactly what I thought`,"2002b_00065":`Skinny - nervous - smokes - black outfit - hadn't even looked at my list of previous jobs. I said I'd work for $4.50 an hour (to start) and for nothing to start with - so tomorrow 1 to 4 - I may stay down there and have a beer until 5 or 5:30 if traffic is down - maybe up CRI and other Nebraska Ave. So - if I work Sun. to 4 + Mon to 4 - that's 8 hours

\\[ \\frac{32}{64} = \\frac{1}{2} \\]

not much but maybe Friday -

- 5 to 9 -

Anyway - the car works great - went back to Charles and played basketball - that guy beat me by 8 again - played on a mentor word - HA -`,"2002b_00066":`Came home—watching GTR—called Patty—she has my $10—will go by soon to beat traffic.

Had a bull! This cute couple (not married) Linda & Bill played shuffleboard—Linda + $5—she beat me! Then Bill + $5—I beat him—then a guy named Mark + $5—played Linda & Bill—they beat but it was so fun—Home at 6:00—loaded—and hungry—Sheila on her way home—I'm starving! Trying to decide what to wear tomorrow.

Thur—Oct 31—Halloween—Big deal—doesn't mean anything to me—up at 4:30—but asleep at 8—anyway I'll nap at 10:30—I need to find out what to wear to work—maybe ask Floz? Also, she gave me $5—but I told her maybe I'd wait until 5 to come home—she said the later the worse it got & darker—so guess I'll head out at 4—come either home or Snappers—how to watch GTR & eat—`,"2002b_00067":`Paper not here yet—& may have to re-pay my bill for 13 more weeks—need to get all extra bills paid now—still leaving £600 in bank—& hope I'll call &

Almost 11—going to lay down for an hour & leave at 12:30—& think I will suggest dressing up in mask & hat & cape?—watching "Family Tied" some people so stupid

4:34—Home from my job training—Anita taught me lots of things—slightly Roy is like a "cat on a hot tin roof"—obviously hates being there—& I'm smoking—had a cig every five minutes—then had a "special" next door (didn't help her any) a rich little little—Sorry I said I'd work for £5—anything left at £3½—next to`,"2002b_00068":`Supper - talked to Angie & a nice
soph from Alaska they
called "Chuck" but his name
really Douglass - had 4 glasses
watching weakest link - then
will watch Y&R - not bad
tonite - kids have lots of
Candy - hope they get trick or
treaters! Not too sure -
Had 3 so far - cute little carrots etc.
Almost 8 - I'm really sleepy - a
new friend coming in so will
stay awake - then bed

Friday NOV 1
Slept good - up at
5:20 - at 6:10 I'm going down & get
out money (400$) and then go to
Kash & carry for coffee & creamora &
back home -
Realized I could get a big
$ cup of coffee at Vessex - got out
$400 of coffee - nice not to have to
go on 19 - At 10 $21 back
Ch. his money & pay Apt.`,"2002b_00069":`then damn 35¢ - play money order for car insurance have and £160 in the drawer & extra 20¢ need a hair cut - it was raining but I took the 35¢ to the gas station car money to Charley wrote to car insurance - decided not to go to work - called - said I'd be in tomorrow but Anita called back & said "Come in Mon. Sometimes they are swamped on Sat (Ha - I'll bet) anyway that's fine. Had a nap - I guess we are going to eat at Snappers together tonight - good they are having costume party. Had a good supper - 4 peel um shrimp - mushrooms + 2 glasses of wine left 96.00 for a tip - 7:00 watching TV until 9 Sat - Nov 2 Up at 5 - Charley is up? taking a shower? out of town? I need to get some stuff - go off 10 & guess.`,"2002b_00070":`I may join the shuffleboard deal today - at 2 -
Ashley did have to work at 6 - a
big sale at 7:30 at Penneys - maybe
I'll go - no up to Wal-Mart -
It was $28 when I got my hair
cut - 5 weeks - but guess I will
anyway -
Decided not to - at 10 went
and shopped at Thrift Shop - got a
next Huntington shirt - half price
cute little brown print of Camels deer
loving in squares - then to Wal-Mart
at 6:45 watch - tan leather strap
pink diamonds & Roth Tyrola -
had coffee & hot dog & came home -
11:15 - taking a nap - I may go up
& shoot shuffle board - at 2 go up
8:12 - Guess what - I came in
first at Shuffleboard - another
girl & I (named Joyce) won $6`,"2002b_00071":`Sunday Nov 3

Up at 5:15 - hangover - Ha - read the paper
Put Dudley in & out - all the
Does it - Wbine + scratch - 8:15 - going to get lunch meat -
stuff at Kash + Harry -
Get food for sandwiches,
soup + hotdogs, soy beans etc., and
then at Wal Mart polish remover
+ some blank tapes a
watching a goofy "Woody Allen"
show - Everyone gone now - Mike
said Sheila had to work on schedules
today - After this show is over
take a nap, I may go to
Jesse's later - or not - the
dogs are driving me nuts -
I hate to shut them out -
This show was stupid -`,"2002b_00072":`2:48 - Watching a good movie - I was sick at my stomach - ate a baked potato & some crackers - feel better - it may be that dramaizing or my stupid ear - I'm getting a little unsure about that job - I'll know tomorrow - going in at 11:00 guess I'll wear that new shirt and tan pants -

4:30 - Sheila called - on her way home - I read out on the patio - really nice out there - Mike home from fishing - watching TV

Monday - New Year's

Made a decision today - not taking that job - too many drawbacks - don't like the boss and doubt if we could get along

Going up 79 at a busy time

worry about what to wear

not sure about health taking it

Spend on lunches gas

Clothes & hair as much as I make

New year keep me busy swimming etc.`,"2002b_00073":`So that that - a relief -
Ashley working again today
Hooray - house that myself -
I only wish it was Dec 3rd -
Dana called yet & I told him to
put down Dec 3rd - these I'll eat
a scrambled egg - some fruit -
It's Maria's birthday - I need
to get her a card & give her a 20$
It's 9:20 - I'm already sleepy -
I think I'll call that clinic &
make sure I'm "authorized" -
Don't
other deal - lawsuit -
well - good news - called
about that goofy 300$ - well
Cave said not big problem
forget it - also all clear for
blood morning test - called
Ruthie - she thinks I'm
smart to not work - watching
family tried - pretty funny
dogs are sleeping - hooray`,"2002b_00074":"At 11:30 I'll call Savannah & did get to leave a tel. message—Good! The soup, milk, & cake made me sick—Something is wrong with me—I'm taking too much medicine—Is it those pills for blood thinner? Can't tell. Trying to decide if to go to the Club or not—Watching TV—Why do I feel sick? I will—I think on TV that poor old Paul will have a car wreck since it is raining & he had whisky & no food—6:02—Just got home from Club—Had fun talked for a couple of hours to this guy Bull who lives with his Alzheimer mother—Has an old girlfriend coming down Wed.—Had a horrible life. Played shuffleboard lost to Bobby & then to Jim & another guy (really good) Anyways we're film now—home—Down town story—Kid down to leave","2002b_00075":`at my mom's birthday — I gave her
20$ — kids here — I ate
watching "Friends" on.

Tue - Nov 5 Election Day —

only if don't know where to
go? — I'll call the library
all see — really want to vote
for any 6 — no smoking in
rest, I board — I only have
$91.00 here — $535 in bank — and
I want it to stay there.
Can't see where I need any big
stuff — no clothes or jewelry etc.
need to stay away from the
Club too — In other words just
be bored — go to Causeway & read
read — talk lunch — read
Play upstairs with Charley —
It's election day — I found
out I vote at a Hotel right up
the street — will go at 3 or maybe`,"2002b_00076":`2:30 - not sure - again I feel sort of sick - only pill I took was my prevacid & zocor - ? Of course about 5 beers yet.

I called up to Deb. I told them Tom was back up there - He owes them $11,000! - They were very interested - jail time? - Don't care.

Took a nap - watched Y&R (wow) then went up & voted - for McBride & for banning smoke in bars - no to smaller school size etc etc - not ready to go home - went to Snapper - had 2 beers & a bowl of chili - some ignorant jerks behind me saying F--- every other word! - Glad to leave - Saw a rainbow Ashley went somewhere - milk home - another letter to Tom - wrote doesn't live here return to sender - moved back to Norfolk net - hope I get him in trouble - this place is really boring - at 8 hate 19 - had to sit there about 15 min to turn into Heroes!!`,"2002b_00077":`Kind of odd — Sheila & Mike just walked out — going to Crabby Bills — not if I want to go or bring back anything — oh well — then Maria just called looking for Diana — what's going on? anyway I made cheese sticks & some good eggplant — Watching a new TV show — almost 8:30 — going to read & bed in the morning. I have that test on my throat — Then no more days until the 13th for my chol. test — Man — I wish the time was going faster — my ear is terrible.

Wed Nov 6

Ready to get my ultrasound — took Speed for a walk — will park & walk over to leave at 8:00 — an old "lost word" on — if it doesn't rain I am going to the Cassery —`,"2002b_00078":`Well - that was an ordeal - the ultra sound - wouldn't you know it took an hour instead of 1/2 hour she wasn't "familiar" with this one - NUTS - but didn't get too dizzy - walked out (a big jam going south - broken water main) so I parked & walked over - it is of course 25¢ to pay - so I came home & wrote a check & mailed it today - its story looking - may stay home -

I asked Ashley to put the wet towels in the washer - she didn't so I plugged them on her floor -

At sandwich pots chip ice tea -
whose line on - I saw "Ally"
going down stream -
5:52 - went to Snappers
Charley came inside my car - we had a time - talked - went to Eagles -
had fun - Mr. Pogo broke up - what camp? - Had fun at Eagles
they like me there - Came home
woke in church - we are all`,"2002b_00079":`Angry - I am - Poor Sheila
hurried home with roast chicken
pot & gravy & mac & cheese
on the chicken - & called Channel
10 - asked about their horrible
channel - they going to send them
that tape I mailed couldn't see
a damn thing -
Thur Nov 7th
Well - a bad night
trying to sleep from 11 to 2
Coffee or nerves? Ashley put those
wet towels on the floor of the
tub, she really doesn't want to
play games with me! - I need
to get sleeping pills &
dogs - on Curlew - garbage
store? - at 10:00 - I have decided
to take Charley up on staying in
his apt while he is gone - I
think he may leave the 18th
or 20th until the 27th - no
dates messy bathroom or dogs out etc etc. Also NO Henry 19!`,"2002b_00080":`Just me! - then, in 2 days my own place - I won't have much money - but peace - Mike & Ashley still sleeping - why isn't he at work? - Rita - at 11 I'm getting out of here - 10 is family time - then I'm leaving -

not a bad day - except H.O.

Car - at 11 & went to Dunedin - it starts bucking and jumping - like I did before - Povesh - Andy - called Charley from the little hot dog & beer stand and he came up & joined me - then we went down & he beat me AGAIN on upward - On the way home the car stalled at a turn (now - got it started) I got home but no more Dunedin! Charley thinks he can get the wiring put in? - Oh well

Good news - I fiddled with the stupid cable box & found a loose fitting -`,"2002b_00081":"just tightened it up & it's O.K.! Hooray—also Monk is on Friday night—need to tape it & missed all of Y&R today—Friday Nov 8 Slept away again good until 1:15 & then awake until 3!—up at 6:50—Took speed for his walk—Charley coming up to work on 2* car! Probably be here early—Mike still home—Ashley too—WUTS—Anyway week going pretty fast—24 more days—I'm going to pack some little stuff & go some stuff to thrift shop.—Charley here at 9:15—Have him up & wires—he drove my car in now—got them & putting them in now—Boy & Hope—Well he said it went 75—Hope I'll get to wall fruit was perfect—Hope he knows what he's doing—I'm down to 48$ here & $50 in the bank—$60 from Davis & $33 Vicker","2002b_00082":`maybe Brian?

Had a nice nap - 2:12 - ch.

10 am still good - still watching rest of
Y&R - then maybe the
Club - at 3:00 I maybe some
shuffleboard. Kids might eat with me
at Snapper? - Fish tonite?

7:00 - Went to Eagles at 3:00 - did
great at shuffleboard - played Reid
barely beat her then we played
partners against Jim + Andre +
beat them 21 to 19 - Linda was my
partner but she kept falling off
Anyway they really want me to
shot tomorrow - I may
well - its PM, M., 11 - I just
had a horrible experience - BILE
a minor attack & then shortly
I knew why - 4 beers - a huge plate
of lasagna - a salad Italian
Dressing - then 4 orange slices &
my down - man - I had a pierced
3 molars crackers & a big`,"2002b_00083":`piece of rye bread & butter. I
myself up in the chair for
awhile.

11:15 - Last night was horrible. Guess
I slept some - I went out at 8 & almost
passed out - I was so lousy. Sheila came in
at 10 - brought me scrambled eggs & toast
& milk - still feel lousy - missing
stuff, town. Oh well -

4:30 - feeling better - ate
apple sauce & baked
potatoes - some TV and
movie with Sean Penn &
Nick Nolte - funny though -

Guess who just
called me - Johnnie - man
do I want to start that
again - she had had 4 glasses
wine - that's why she
called - Boy oh boy!`,"2002b_00084":`Sunday Nov 10

What a difference a day makes! I feel great.

Up at 5:30 AM - stomach feels fine - still dizzy of course - watching a goofy movie I've seen before "Trapped" about a fire in a big casino - lots of humor - stories - not very good - may not watch it all - gets better at the end -

Ate 1/2 sandwich + ham - 11:30 taking a nap -

Slept until 1:00 - went to the apt - sure glad - they are out of painting - door was open & just went in - disappointed in the view - as I have to peer to the right to see the Bay - but I'll keep the blinds up and put a couple mirrors on the wall to reflect the view.

So - I'm sure I can move in heavy stuff soon & the rest the 3rd - I can get the elevator right down the hall - talked to 2 ladies - one another Johnnie - & said "Those..."`,"2002b_00085":`ground stepping stones are hard to walk on when you have a balance problem." She said "I have a balance problem and I can walk them." But the other a cute little chubby nice gal. I guys were shooting pool at the pool tables empty really close to walk to all the places. The b----es name was Caroline. If stay clear of her then I went to my favorite Jesses had one ticket. I wore little glasses and an order of fries than I finished my book. I went to Michaels I bought a meat frame to put pics of Jan and me in it for her birthday present. But I'll finish the rooster first.

Rooster all finished need to find a cleaner to have it cleaned and a light press.`,"2002b_00086":`Mon-Nov 11

Up at 5:30 - so slept pretty good - got the paper I read it last night & taped this cute movie - the "Whole Nine Yards" - Matthew Perry & Bruce Willis - really cute - this movie is a scream - Ended good too - I am pissed off - say the comp. has a message on it for me but kept asking for a valid e-mail address tried to put it in - the message is from Brian & I need to answer Rettie - went back & got the e-mail to work - answered Brian - he is going to Bangkok - hasn't heard from Korea -

I asked her if she wanted to see my apt - (like warm O.K.) also Mike passed that damn store for I didn't tell me - no one says anything around here -

Should I say the apt. although the jerks (pointers) didn't even want me to look at the`,"2002b_00087":`window - I "sneaked" my way in. Ha - then we lucked out & went to X mart and got a nice clamp bed lamp $7.99 at M Super then ate at Arby's - my 20¢ is gone. That's OK. Still have $500.00 - not for long though, I need enough to get through 20 days - 50¢ I hope.

Had a good nap - watching rest of YAR - then I may read & watch Food at 4 - I need to call my boys today and wish them "Happy Veterans Day" - and write P. An e-mail - wrote a long one - short I went to (would this) about lamp - watching "Weakest Link" Funny - then I'll cool out on the patio.

Only 21 days and I may stay at Charley's for 5 days -`,"2002b_00088":`Time zooming - 2h + milk both at work - I'm going to the library my last 2 books no good - & guess I'll meet Johnnie at Jesse's show her my apt - a disgusting friend is better than none - and I can not answer the phone - and be busy - I may also tell her what bugs me - it comes up & will - guess we will meet at 1? I think Ashley is getting ready for work - Hooray - the house to myself - & mail today - just called Johnnie - we are meeting tomorrow - Today is "meeting" Day - HA - asked me if my rent was reasonable - said "No it's expensive - that's OK!" had to bring up Section 8

11:50 - went to library - got 4 books - decided not to get money out - to damn much trouble Hate 19 - may not go out or just to dinner`,"2002b_00089":`Nasty weather—just staying here.

Good news!—my carotid arteries are fine so I called to see if I can go on aspirin—they were supposed to call back but it's 4:30—don't if they do—not sure I'll get my chol. test tomorrow—called office—he's still with people—

Good news—I can go on an aspirin a day—now if the weather is nice I'll get my chol. ck in the morn.

Talked to Charlie—he's been in the hospital of all things & guess a kidney stone there 4 days without calling me! Big nut—`,"2002b_00090":`Wed. Nov 13

Well, got my Chol. (blood clot) tests -- one more Chol test - I have to call Durand and tell them not to do blood thin test.

Time is going great - one more week & I can go to Charlie's.

Meeting Johnnie at 1:30 - will be fun to see her try not to piss me off. Speaking of pissed - a long letter to Brian & pissed - some damn thing wrong with the title - so I sent a small one tone to Ruth & Jan - watching "Family Feud" - just let Durand in again! Spend my days doing that, feeding walking out out getting etc - they are going to miss me.

Ate 2 pots, pancake - 1/2 brownies and 1/2 orange slices - am anxious to eat healthy at my apt - I weigh 168 - too much! - I need 155`,"2002b_00091":`Watching "Whose Line?" 4:30 - Watching YHR - Had too much beer but really did enjoy the act. Saw Johannes cruise piece sort of ho hum but a beautiful ship - she was uncharted in town. Dad + then we went out looked around my apt, talked to nice guy today. "Come home - laid down now belching ate cheese sand. No supper. Ate 1/2 biscuit with beef stew on it. Dog ate some. Feel OK. I told Sheila I might stay at Charley's (for him). I'm going to go - tell them 2 days stay & then one week packing + go.

Thur - Nov 14

Moving right along in days - Called to see if Charley wanted to come up for "Upward" cheese - then Snappers for a beer. He wasn't home.`,"2002b_00092":`I mailed Mike that card + that awful poem I wrote about Thanksgiving (or whatever it is) to the paper last night. I'm going to tape "Harry Potter" & "Family Guy" is on.

I watched "Mercury Rising" with Bruce Willis - he's always in good movies, this was exciting.

Anyway, "YAR" is on and I'm watching it. Pretty good again.

Me & just had another acid attack (with stupidity on my part - chili (spices) + an ice cream cone + nap - after 12 hours up with bile - inside - my previous crackers + got up + spit up + coughing - took baking soda - maybe that helped.

Had a nice hour on the patio reading. I called Kitty, told her about Tom - off of counseling etc + asked her if I could come take me home - she said yes - I don't think the previous one...`,"2002b_00093":`working - I have to watch my feet better - eat at 11 + not nap until 1:30 - at 5 + bed at 9 - more pillows under me.

Called St Pete times - owe that $15 + paper stops Sat. Oh well rent a check - also well care wrote that I owed $23 for em. room -

called to ask where to send it - they said don't bother I didn't owe it - Ha - I thought it would be $50 + things breaking for me (?)

Oh yes - Kitty sending Boytra new oath pills - Good - I put a pot ham mix in the oven - but I ate at 5 - hominy or eggs - nothing else - maybe icy warm milk - Anyhow to see if nefium works better - a good movie on at 6 on 201 #BO2 "A Knights Tale"

Friday - Nov 15 Half month gone!

Slept super last night - No`,"2002b_00094":`food after 5 (late supper) sleeping pills - slept until 4:30.

Ashley left a chili bowl & pop on the coffee table - putting it in her room with a note - I hope she works today - I'm not sure what to do.

Sat - Nov 16

Well - not too bad a day - I didn't leave the chili bowl in her room but left the note - so she also leaves her supper (worked - came home for lunch hour) bowl on the sink. I was happy to see this - Sheila left them there. Yesterday I went to Wal Mart & got a paint by number - $4.95 - lots better than the old ones - a sort of matte finish - fish - for my bathroom. Called Charley - no answer again - I had toast & soup for supper then a small piece of pizza - slept`,"2002b_00095":`good—up at 6—Raining out—MOTS
I don't want to get the paper in
the rain.

I got a scare last
nite—blood in my ear! Sheila
thinks a boil in there broke—
I can't even stick my finger in
there at all without the room
swirling around!—MOTS—I
decided to shuffleboard today,
will try to get Charley again
and then Johnnie—at 7 I'll call
Charley—

I need some more nose spray—I
may be having a sinus infection?—I
sure blow a lot from my nose.—
no paper out there—so that's
that—

Nice long talk with Ruthie—
both she & Emil are getting
depressed. He only weighs 130—
too much to Clint eat because
of his diabetes—It's rainy &
stormy out. I have a little pad`,"2002b_00096":`On my ear—watching a sea story on giant Manta ray off an island named Yap. Almost 9—someone left Ashley? It's 10 now—found these old cephalopods (8 year old) 8 of them.

Watching a cute movie "Mickey & Minnie" with a cute Dudley Moore—when he was so neat—just so sad about his illness & death.

Now a crazy movie "Evolution." It's funny—but I'm getting a headache—after this may get Sheila to go to that new thrift city—went—found 2 cute Xmas sweat shirts—pouring rain went to the store I got nice tea & wine at Albertsons—really coming down coming home—having a nice t reading & then a nap. Had a short one—loving`,"2002b_00097":`day - I wanted lots of TV - ear still bad - putting stuff on it.
But maybe those pills will help.

Sunday - Nov 17

Up at 6 - Had to go to convenience store to get the paper + a novel - Cheese sandwich took me 2 hours to read the paper. I saw that the restaurant I drove by on Alt 19 - Encolonias has a cocktail 2 for one + cheap meals.

My ear still bad. Hate to go to Dr. but may need shot. It's COLD down here - I decided to watch the rest of "Harry Potter" + have more coffee - this show is darling! - I'm going to keep it.

6:00 - tried to nap - no show.
Decided to go to Eagles at 8:00 - talked to Bobby he has an almost new microwave.`,"2002b_00098":`To sell me - 25¢ - practiced shuffleboard - then lost 2 games of pool to a gal - NUTS - went to Snapper's and had a Reuben - brought it home - Sheila here - no bike for Ashley - watching a murder story about a group that murdered every girl - worried about it - Ended funny - the girl wasn't dead at all - it was a joke but the guy that pulled it got killed.

Monday Nov 18th

Up at 6 - to no coffee or paper - made a weak cup with leftover coffee - I'll go get some - & taped leaf wound on arm - they all are - I guess I'll get my hair cut today by Angelo - Street Clytie.

2 More Weeks!`,"2002b_00099":`Finally heard from Charley! He's been at Olgas. Had anyway offered to loan him $100 - he said that would be a godsend - he had so & to take with him on his trip. He is leaving the 23rd. Got warm up. It is nice I may go down this aft. and take him that money.

Took Charley the money - we got keys made - he is leaving Sat. (friendly in mine) got some stuff I had lost. Chips & meat - he was sooo glad to borrow that money! We played up & actually beat him one - I put the hair dryer on my ear. Missed JAR - Bi... is back - just got up & think she was out all night.

Napped for only an hour - something won't let me sleep. Thats OK. Painted - messed with dogs. They are driving me nuts.`,"2002b_00100":`Still hot - I took a shower, think I'll eat - chicken, lima beans & rice - milk & Hershey Kisses
Funny "Raymond" - always
5 + 6 AM
in the morning
my red diary except Paris
I watched the funniest Raymond I've ever seen -

**Tue - Nov. 19**
Up at 6 - Got coffee
mode - when it gets light I'll go
get the paper at corner of Inserra
etc. Both dogs in there - so it
begins - 4 more days until Charley's
may get another painting
numbers but before I go -
Good News - Dr. is calling
in some anti-biotics for my
ear! - I'll call at 14 see if they
are there, sure hope it does it!
I need to feel good before I move.
Family friend "Hus" just on!
Almost missed it! - So cute -
They just won $20,000 -`,"2002b_00101":`At 10:30 -

Good news - Bills are for a full week - and only $5.25! So I got them and another little paint by number kit, to take to Charley & know I'll have a few quiet boring hours - better than dogs and messy grand daughter and no one talking etc., closed doors - wasted money etc., etc. I don't need to see all this.

Just had a nice call from Michael Fitz / Hot my card about ready to go to work - it was 1/00 out there. We had a long talk about when they were baptised - 4 or 5 where etc. - then when he called Dana & Maria were here. She kept kidding me about my age & funny, told her I didn't like it too much, it off, she apologized a lot - I got miles a - small pie he said Brian was going to try an opium den!`,"2002b_00102":`Ye Gods! - so good to talk to Him.

Wed. Nov. 20

Stayed in until 6:15 - got the page coffee etc - washed my hair and put up. As far as I know I have $990 in the bank - plus Ch $100 so I'm doing O.K. Ashley said my tires need rotating. I'm sure they do and I need a hair cut & perm. No way - Oh yes - Sheila said a gal at work had a divorce too fun - 2 couches & table to go dry! Great! Will keep in her garage until I need -

I can't find my little duffel bag to take to Charles. 3 more days counting today. Family tried me on again but I think it's the same as last - YAR - If watch anything it was a new one - they missed the $2,000 - Made egg salad & sandwich morning milk & bread slice - 11:30 I'd like to stay awake for YAR & sleep in the aft. dark`,"2002b_00103":`Until 3 - Read outdoors & then move TV - painted some - may do more this volt.

Bored - got 40¢ out - went to Eagles - paid for micro wave to Bobby $25.00 - won Bobby - shuffle pool! - talked to Vanessa next gal - drove home the long way - down Alt. 19 - up Alt. 17 - home - health suppers

**Thursday Nov 21**

Freedom - How sweet it is!

He decided to leave today - Called me - I met him at Wal Mart & he gave me other key to the door & went home - Packed up & left at 11 - Remembered that I forgot ice tea mix so stopped at good old Boy & Sons & got some choc. Candy - I am in his recliner`,"2002b_00104":`watching YAR - NO ASHLEY
NO DOGS - house quiet

Clean - I will miss the dogs
& Sh & Trunks - Ha - No VCR so
will have to watch YAR if I
want to see it. So far I'm not
real sleepy. It is really quiet
here - good. Still need to carry in
clothes I will do that after my
nap. Not sure if my ear is better
or not, I think it is. It should be -
& have 3 more days of pills for it
YARN - I'm going to sleep here - I
stay until the 30th
3:30 - Had a short nap - Chi.
pillows smell like sweat - washed
them and airing the pillows out -
also airing the bedroom - Called
Johnnie - will get together tomorrow. May
eat Thinks. dinner together - I
need a few things I'll get tomorrow
(yellow (again) money out. Nuts -`,"2002b_00105":`I've had a nice quiet afternoon—
fried some little steaks, tough
potatoes & veg., milk—
5:30—Some funny show on
I painted for awhile—
Friday Nov. 8th
Last night was
hell! Even with bath—warm
milk & sleeping pills laid awake from
11 to 3—partly because Charley
smells so bad—sweat—
finally fell asleep & woke up at
5:30—Got the paper—coffee
toast & cereal—watching "Lost
Word" on old one but a
good one—so I'll watch it,
ah—place & quiet—Johnnie &
meeting—maybe Wilsons. We will
have to decide where to eat
Thursday dinner, still dizzy but I
think my ear is starting to itch.
Healing?`,"2002b_00106":`Went to bank - $60 out

It's 11:20 - Went to liquor store -
$3.99 for chardonnay - then gave store
plenty of food to last until I go
home - Come home - ate - watched TV
+ now a nap. Called Dr. - chol. c
244 -

Laid down at 11:20 - up at 12:40 -
watching YAR - my The stupid
clickers just last night - just
quit - it was old batteries. What
goodness - Charley called - I got
the phone no. where he is at his
sister's - back either 30th or 31st
- 4:15 - met J. + had fun. Had 2
wines - (2.50 each) talked a lot about
Palm Lake - Cindy (J admits people
don't like her) 2 young girls said we liked Jesus downstairs.
I went to thrift store to get a
book for $1.00 - mystery - some
coffee + watching "Pyramid" and
then "Weakest Link"`,"2002b_00107":`Sat. Nov 23

Slept better last night but it's getting colder so I decided to wash those covers of Charley's & get my cover up to darken that damn window, will go down at 10—still as dizzy as ever, if not worse! Not sure what to do anything this week.

Well—decided I had 6 more nights here so I washed those awful sheets & comforter—cost me 5¢ but they smell good now and I got most pills—(1¢ each at 7¢ store) also a pie pan & safety pins—so I can make at dark in there. Home & another one hour nap—what's the deal? anybody I need may sleep better inside. An old "lost word" on—Stress 10¢ pain`,"2002b_00108":`Watching a weird but funny movie "Samantha" - a girl trying to find her real parents. Ended cute Sunday - Nov 24. Just today to get through, decided to stay home Thursday go back up home Friday - will tell Sheila about today. My car still hurts + balance trouble, finished my paper painting + may start the new one. They are really fun. Laid down at 12 - Sheila called at 1 - dinner at 4 - told her I'm staying here - ear still bad and be home Fri - I asked her why eat dinner - Mike got a turkey at work - big deal - they may go camping before though - Charley called - about mail etc. Then a gal named "Marge" called Charley - finishing the wine. Maybe get another one Liquor store closed but got eggnog - fish sticks, pork steaks, bread, milk, cheese from juice - watching late Jovest`,"2002b_00109":`The Lost Are 11th or 5th time — my stomach hurts like diarrhea — gassy too? from what? — Chinese stuff?

Almost 4.

Monday Nov 25

Yesterday really

Drug by today will be better.

Mailed off for names for addressees.

Eaten breakfast — watching "Lost" — I've seen it 3 times at least. About Amazons — well, it's almost 12 — got a lot done — Chy of address in — tel card — papers ordered they bring to the door — free cable installation if I call this "Kevin."

I went to the Apts & made the appo. They are putting in new carpet — good — got 20 out tan beige store — got 2 @ $3.99 bottles of wine — made lunch — watching news — I will try & watch all of YAH & then nap.`,"2002b_00110":`watched it - they still don't know
Delos is in the hoop! Man! Anyway
back to my goal maps a 2½ hour
one - a nutty black lady from
upstate said "where is gentleman?" I
said "Visiting his daughter in So. Carolina"
she said "why are you parking in my
place?" I said "I didn't know
we had places" she is holding her
left boot? "oh we don't he always
park over there so he can see his
car." I tried her & moved to that I
needed to be by the door - I had a
balance problem in walking - she left.
nutty! - guess all paint - been a good
day.

Nov 26 Got up this A.M. to a
newspaper column about Helen
Somerset from Palm Lake Village - makes
her sound like a saint - HA - and she
moved to an apt with a heated pool
etc - sure hope it isn't mine - called
Johnnie & told her - Jan called
and we gabbled quite awhile -`,"2002b_00111":`mailed St. Pete paper order + charge of mail address card - also just mailed the address label order - need to call Cable Co. today & order cable. I was STUPID last night & ordered a magazine sub. from a little girl at the door - got out of Crafts - gave her $15 (call my money here) & owe $10 more - what a NUT I am - hate to say "NO" & guess I walked over to the Club House & mailed my letters & introduced myself - she said Ch. never told her about me but she remembers me playing "Upward" out there with him. Almost 9 - hope the day goes fast.

Got lots done - ordered cable by getting $35 month package its free installation - then later I can go down to $25 if I want to. Also found out I can keep Dr. Duran - so I think everything`,"2002b_00112":`but packing is done - Can't wait.

Did some painting - I will eat at 12 -

I need to change Vickers ($33.00)

address from the envelope - I keep

reading to quit maybe if I want to

sleep - can't do that. I could try if

stay up later. Couldn't believe

it - laid down at 1:30 + slept until

3 - I didn't even know I slept.

Decided to stay here. I think I have

$76 but then that $70 for address

Wed - Nov 27

I talked to Sheila last

write my Vickers ch in there. If

cash it on Fri - told her about ear.

She thinks I should go to Dr. again,

at least I'll call and try to get

stronger pills - NBT3 - I'm discouraged.

Watching "Lost Wards" - what will

Johnny again? I'm not calling her -

she called me - may not even

Come for dinner tomorrow - don't

Care - I called Dr. He can't see

me - may call back and get new

pills or advice. Maybe I'll`,"2002b_00113":`make a mon. appt. — may get a
Di Gromo pizza for tomorrow.
love Chinese food at Kent. fried
chicken & I have to wait here
for Dr. to call — watching
"Matlock" — I know I've seen
it before — but always forget—
the punch line. It was a
good one — now "Family Fried"
Well 11:45 — still no call—
had a funky lunch (Ha) — ½ a bowl
some (beer cheese) soup — black olives
gl of wine — no call yet from Dr.
Dr called at 12:15 — calling in
new medicine (stronger) to Walgreens in
Sweden — I am very happy about
that!! what a neat Dr. — they said
call mon. if I'm not a lot better —
ygr on—
Well — I'm not quite so
happy! — The damn (1# pills)
were @ 67.95 — Had to get
more money out — I'm down
below $100@ — BUT — if it`,"2002b_00114":`will cure me it will be worth it without well care 93 $1 - anyway have to take 12 hours apart took first one at 3:30 but will take next one at 6 - & then 6 - may not take my previous until noon - I got a good fried chicken I will take some food home - the funny thing on these pills - may cause dizziness HA - that's what I'm taking them for! and my infection of course.

Sheila called to see if I went to the Dr! Very sweet but unusual & she's heard of this medicine guessed it was $95 or $110 - Close - said I could take my pills though, it's 7:30 - goofy "Friends" is on - Don't remember it. Yes I do - I have seen it. I'm still dizzy -

Thanksgiving Nov 28

Last day

Here - I took my pill at 3:00 AM as I was awake 3 hours`,"2002b_00115":`During the night, still dizzy but can MAY be better? at least slept until 7 - no YAR so I can sleep whenever I want to. I am not going to call J. This medicine and alcohol may make side effects worse - so good time to stay off of it - 7 days? not sure. She's off tomorrow so that helps - think I can move alone though.

Johnny called - I don't if he's coming over today, I'm watching a good Harrison Ford movie I've never seen before - about the Irish idiots IRA that kill people for their religion & guess and of course land.

It's 3:20 - had a fair nap watching a cute show about 3 brothers - in the wild north -

No phone calls - oh well.

It's 5:10 - I did most of my packing - I think I'll leave.`,"2002b_00116":`at 10:00—so kids might be awake when dogs go nuts—I want to be sure and turn on Nebraska as Wal-Mart is having a huge sale on Alderman—I may go once more to Snappers—I have to get out & cash my Vickers check at Cash & Harry—I will be packing Sun & Mon—

Shawn just called—he just got off 2 weeks of Cipro!—for an infection in his testicles!—he got diarrhea from it—and I think Emil got the rash from it—so it is a strong medicine & just pushed on the back of my ear & soon went around—but it is itchy—good—getting well?

Friday Nov 29

Up at 5:30—slept better—will leave here at 10—
at 11:15—now 11:45—Tommy is here—he stayed all night—he helped me carry stuff in—it's cold out—I had a hilarious email`,"2002b_00117":`from Brian—his aft in an opium den—(more like a little town of huts) in Laos—it took all afternoon—3 pipefuls & only cost $4.00. He also paid Denis told him Molly was thinking about going to college in Chicago! So let Phyll & her new husband & Molly & 2 girl friends drive up there—& God!—he wants her to start college there in Omaha—but she will get her way I'm sure—Alley is going to work at 1:00—must have a sore throat—she is going to get her throat bigger? I'm getting sleepy at 12—May Tape of HK—NUTS—I just found out is a replay of their wedding—& even want to see it, so watch a little more & then nap.

Had a nap 1/2 hours—Little Tommy is having a ball fishing—then we watched`,"2002b_00118":`Harry Potter - Maria & kids came + got Tommy watching Raymond - don't feel good though ate too much + dizzy of course got lots of packing done

Good News - Sweetie Denis called! Told him everything - he sounded great AND told me that card was mine - he puts $60 in every month + there is $250 in now - wow! That will pay my phone + cable! Molly is going to college there + then Chicago + take photography!

Sat - Nov 38 Slept until 6! But another bout with stomach acid - took some D. soda + thank goodness there were soda crackers here. Missed my pill at 4 - took at 6 - ear stuff bad + dizzy too - made coffee - stumbled on a funny movie "Saving Silverman" Really a scream about 2 goofy guys trying to keep a friend from marrying a`,"2002b_00119":`Rotten gal -

Back from the bad thing - NO ELEVATOR!! Couldn't believe it! Also walls concrete - no curtain rod up at windows. But the view better & bigger than I thought - what a view! Also the eating area is right in the door way - need a table + 4 chairs. Also 3 phone jacks - overhead face in the front room - one bedroom view is the Courtyard - the other a Bay view. Now how to get the stuff up there? May just move bed, dresser & chair + pelican totally + the couches + rec. Center next Sat. - an old "lost word" on - then I'm mapping.

Nipped to Sheila's came back with 2 darling tables for me - glossed over night.`,"2002b_00120":`iron (green) & a cute white breakfast table—needs paint—maybe dark green—
Decided to go to Eagles & Michael (down the block) said where have you been? Then Bobby asked me to play Shuffle-
board with him (as Buddy didn't want to play—I said OK—played against a cute named Bryan—the beat 21 to 18—I really won the game—Bryan bought me 2 wines!—I gave the "mark" to Bobby his opponent—Dave didn't buy his one—the tournament on Sun. I may go up + short Sunday—Dec 1st—up at
4:30!—it's too dark to get the paper—I watched a tape of "Are you Being Served"—cute`,"2002b_00121":`I am going to dig into the closet today. I may buy a little wheeled cart to take things up to the apt. Later my laundry—trying to decide if to play shuffleboard—probably will. Won more money. Didn't win—lost 2 won.

I had a losing partner "Simmy" gave them $5!—George & Mike back—George caught a fish! He's so happy—Tomorrow they back to normal—Good—will pack my car full—maybe buy a little wheeled cart to help, & still have an ear ache—dizziness may be better—write Oppy an e-mail—watching a murder mystery (?)—not sure—Pretty good show—Ends OK.

Mon—Dec 2

Just about Moving Day—& may get`,"2002b_00122":`a hair cut and try to buy a little cart to haul my stuff out into. Guess I'll get 60$ out of Denis card - watching an old "Lost World." Ashley is still here - I thought she was gone - nuts - Ha -
took good shower - still trying to decide if to call Dr. or stick it out until my ear. I got 40$ out of Denis's card - still need a hair cut - packed a lot of stuff to put in the car. Guess I'll wait on Dr. + hair cut - on top of everything else I am sick at my stomach! Won't eat lunch - feeling sleepy already - I'll probably take Tylenol - the fever is probably making me sick - Never had before -
after short nap felt better - ate toast + mashed potatoes - went to Wal-Mart Crazy! - Mob - got a really neat cart (shopping) for $15.00 to take things up to apt + then`,"2002b_00123":`for dirty clothes - Mike just got here - I'm packing like crazy - washing down the TV center. Put all my clothes in the car an old "monk" on.

Tue Dec 3rd PAY DAY

And MOVING DAY - up at 4:35 - so ear better? Hope so - Here's my itinerary -

1. get paper - check bank acct
2. 9 - get gas - bank withdrawal
3. stop P. office & write $600 m.o. to get papers - Had $1,050 in

It's 7:00 - as tired as I've been for ages! - Charley was packed & I had already put all my clothes in - but by now, quickly - Charley found a good cart downstairs - held`,"2002b_00124":`a lot. Got stuff up here then took him to the British Pub for lunch + a "pint" from 3 to 7 its £1 for 1. We both had Reuben fries & I came back home - packed more - took small nap then at 3 back down - shed a few tears at the dogs little faces. BUT - so glad - the Bay is so gorgeous! & brought up my beach chair - its almost 8 and I'm going to bed - I can only get one channel until tomorrow when cable guy comes - I left 100 in bank - have £220 in Denis 350 here - 33 Vickers

but need more to pay Car into - need a couple things to get - going to bed - Ear still bad.

Wed Dec 4th Well up at 5 - didn't sleep too badly - made coffee - putting things away. So much STUFF and pics, making really good progress. Need lots of stuff.`,"2002b_00125":`Can't go anywhere until cable guy gets here.

8:30 I may lay down. I did & Johnny called. Cable guy came - HA - that's good. He said I can tape watch another show - then I may lay down & then go to 1st store & buy stuff. Also need lots of groceries.

It's 3:35 - Almost everything done. It's really rainy looking out - my car is terrible! Tomorrow is car day - need to get mail & one more lamp from the car.

7:25 - well - good old Mike & Charley brought up the whole 3 pc. center - so glad - & covers - (not the comforter) poor ole Charley is so broke again - He bought some beer & made him keep 10$. Told him I was going to Dr. - he's suppose to call & give me Mayfyn's daughter address - Charley Carried`,"2002b_00126":`my chair in—put it in his truck!
Called R—gave her phone number—
Waiting on Ch.—will call Jan + maybe Kitty—
Cher—Dec 5—
Dr. day—Hooray—I
just had the paper delivered inside
my screen door! Guess I could stay
here & never leave—HA—Ordered
paper—that and cat was almost
$100—Oh well—ate soup & sand
Johnnie called & we met at
Ossendin post office—too many people—
left. I went to #11 store—got a few
things—then met Johnnie twice time
until she said "we just can't say certain
things—religion morals—I said
morals?" "you don't think I'm moral?"
she said well—things on e mail—I said
oh inspirations—and I said sports—
She mentioned Cherley—so I'd never talk
about him—otherwise we talked about
girls & early Xmas's etc. Came up
here & showed her around—Bayall`,"2002b_00127":`Foggy - she left - I made coffee
and then watching TV. Johnnie taped
for me, watching it - I
make eggs ham cheese some
cottage cheese for supper. There
is a funny show on at 8-10
if I can't stay awake I'll tape it.
Taping is some old deal - 4-4H
leave on channel -
or at 10:15 tomorrow -
Raining again - most lightning
over the Bay - I need to call
my kids - tell new phone no.
Called Shawn gave him no +
he gave me card no to call free -
300 free minutes - actually 174-
Called Shawn & Denis - left a mike
message (they weren't home) so -
Watching a funny 70's show.
Friday Oct 6
Trip Pat 5:30 - paper -
doesn't get here until 6 - late - red
paper - watching "Lost" - It's gloomy
going out but supposed to clear
up. Not sure if I'll write money.`,"2002b_00128":`call back No Adkins 9th Mon

orders before or after Dr. Evers' visit
bad of course—big article in the
paper about tinnitus in the
ear—kept it. 8:00—huge winter
storm in Carolina's north—Lucky
for us—

Back from Dr.—He acts like I
did this to myself—got unhappy when
I jerked—so sending me to the
specialist—I went & got 32¢ gone at
cheap store—they just called
and want to send me to a specialist
ADKINS—I know that is the
Dr. I hate in Palm Harbor—NO WAY—
Told them—Calling me too—I call back
at 12:30—they will call soon try to
get me in to see Dr. Remoe—there in
the complex—Dr said there was a brief
blood clot in there—I found my little
ear syringe—going to put warm water in
& maybe buy some new ear drops there
are old—took 2" anti-dizzy pills—sin`,"2002b_00129":`going to nap.

Waking when Michael F. called—had nice talk—looks like it's going to be June when everyone comes down. That's OK—let's go out on gambling boat, washed ear out but no clot—may try again.

Bad news—Ruthie is in the hospital, high blood pressure again—200—I talked to Emil—he sounded awful!—Hope she calls me tomorrow—talked to Johnnie of course, she told me not to use plain water—Foxy—

Sat—Dec 7

Bad night—awake again every hour—ear hurt—what to do? I hope R. calls me, decided not to get out today. It's only 45° now.

20 to 8—Going to be a long day—a mystery coming on—about a kidnapped little boy that supposedly comes back. Pretty gripping movie laid down for an hour—old game show on—drawing game next—where are the kids?`,"2002b_00130":`It's 11:30 & I'm hungry - Guess I'll eat.

Poor kids - Carried the couch up the stairs and it's heavy - a Ride-a-bed! It's beautiful cream colored - pale blue & gold stripes & big cushions - Really clean - I was taking a nice nap when Johnnie called - she had 2 glasses of wine - watching football full of telling me what I should do - call Emil back for his number etc - go to the party tonite etc etc finally said in real stern voice "I'm NOT going to Johnnie" - she backed down - watching an old "Relic Hunter" Ear bad - took pain pills - I just called to see how you spell "superior".

Sunday - Dec 8th Slept OK - took sleeping pills at 1:00 A.M. - Up at 6:20 - So nice to have the paper outside the door! Ear still horrible! I got scared about Ruth & called Info & got Taylor Hospital - she is O.K. If they try & get her a phone so she can call me, what to do about my...`,"2002b_00131":`Damn dizziness? I'm sitting on my great new couch—so great! Subway has an ad for 2 footlong subs for $7.00—those would feed me for a week. If I feel good enough I'll get 2—$14.

9:15—where is Ruthie?

10:45—my dizziness is worse—but managed to put up some lights. Will eat at 11:30—hot little up (very haphazardly) gloomy out—what is Ruthie?—I'm fixing sausage twice & having the last of my wine—washed out my ear with "boiled water"—at least that blood in there will soften up—

R. called 11:30—she is O.K.—but went in Fri—told her Emil didn't call me back—of all things—he had a car wreck. His foot slipped off of the brake & hit the gas tank & plunged into another car—& Linda had a terrible migraine. What's going on?—called J. & left a message—Called Charley & asked`,"2002b_00132":`him up this aft. He wasn't home - left a message 'to come up & get us wine & beer -

It's 3:00 - I had a nap & of course I woke me up - nuts - trying to decide if to go out & buy some more stuff I need - tried to fix a phone to have call waiting. Couldn't figure it out - maybe Mike or Charley could.

(Charley came up - we played "Upward" and for a change I won - he got lonely letters - Then I made pizza and he tightened up those screws on the coffee table. Meanwhile - sharp pain in my ear - & staggering - Put up all my Xmas lights - very pretty - watching a rather bizarre TV show - but with Timothy Hutton & just felt that blood clot in my ear - Now it hurts again - Have to get this fixed!!

Tomorrow!

It's 8 - TV is running late because of a football game - nuts - Trying to decide if to wash my car out`,"2002b_00133":`again - I can feel that damn Rumb in there.

Monday - Dec 9

Not too bad a night - woke up twice - today is the day I get the ear fixed - I HOPE! I may ask Johnnie to drive me up there - watching a good show about a father that sexually abuses his kids - Good show - The father is a monster and of course the older sister knew what was going on and didn't protect her.

I'm back from the Dr. Not nearly as bad as I thought except the ride up & back was Scary Hard rain the whole time up & back + lots of cars - I drove 35 MPH - The assistant gal looked in both ears - very carefully & he did too & only got dizzy once - what he did was give me ear drops - must be strong - 3 drops twice a day 1/2 hrs apart - should help in 2 or 3 days he said - I will be SO`,"2002b_00134":`glad when it gets well & I'm not dizzy. I can't swim until it's well—
I have an appt in 2 weeks—which is almost Xmas—the 23rd at 9:00 A M
should be well by then. The old blood and
is coming out now from my ear—
It has to be that because it's a rusty
color & the drops are clear, &
make coffee—turned on the heat, put
on a sweat shirt—ate leftover little
noodles—coffee & my lap robe—I need
some books but don't think I'll get out
tomorrow. Talked to Johnnie—hates to go to
the meetings—why go?—Anyway need
cozy now—will eat at 6 I guess
Tried a good supper—pork steak
and Cauliflower & sweet pot—milk & 4
Hershey kisses—the little blood spots
keep coming—Good—pressure should
let up.

Tue—Dec 10
My ear is still doing a
little bleeding & I'm still dizzy
but I know it will be better. But
some in at 4:30—2 yp at 5—`,"2002b_00135":`watching a new funny "Raymond" about Christmas presents. Really a darling show. I still have blood in my ear—spooky—but hopefully—the ear drops will help. It's fairly out still—I need to get a book or some books at the library—an old "Lost Word" on—Put my hair up—I may go to the Club House & for a movie & popcorn—if it quits raining & it's a good movie—"Magnum" is on and funny—I made a list of TV shows on that I watch—

Back from the library & a spooky, damn ride!—The car started acting really funny & sluggish on the way down—I am dizzier than ever! So I drove to Charley—he wasn't home—went on to the lib. & got 4 books—Decided the wires were damp—stopped at Walgreens & got bottle of wine & can of tuna—so glad to get there! I'm staying home until I'm not dizzy.`,"2002b_00136":`or just go here at the Club House - no place like home! HA. Going to eat. Had a tuna sandwich and milk - 4 or 5 Hershey kisses. Choc. is good for you - news on - I'll watch 1/2 of your tape next - watched it all - they are closing in on Diana. Lies tried to sleep but way too bright. I have to figure out how to get holes drilled in here for curtains etc.

A funny deal - Dr. said put 3 drops in. Instructions say 5 for kids + 10 for adults. So I'll use 7 - I want that gunk out of my ear! I did dig a lot out - just tip of little finger.

Wed - Dec 11 a little late on my ear drops - at 5:15 instead of 4:30 - Blood (old) coming out too. Maybe it will all get well soon! I hope - I need to mail Jane's pic + money to Shown today. Also a few groceries. Mom - I must be nuts - to mail Jane package + a card cost $30.00! Almost said "NO" but she is worth it. So - I will just send`,"2002b_00137":`20th for the little boys - need cards -
Stopped & paid for New Years Eve
also bought present for dinner party -
Cute candle holders. I got $68 out of
Diana card - down to $163 there &
75 in mine. Also $50 from Charly - $287

It's 2:20 - I'm so happy - I just got
a huge job of guy out of my ear and
I think its the start of getting well.
Man! I won't even know how to act if
I'm not dizzy. More stuff in there at
5:15 - Had a nice nap - watching
Y&R. I think I may take my book
out in back on the Pier & read. It's
beautiful out. This is the episode where
pamper & they all come back to haunt
Phyllis, now the old judge (wimpy guy)
some guy named Brian - Sasha Paul
she's losing it in jail.

Down - more crap up in my ear -
It's just 3:00

It's 4:10 "Pyramid" on - I sat on
the Pier - a little chilly but so nice`,"2002b_00138":`Still really dizzy - coming back almost fell over on those stepping stones. Talked to Mary in 320 - she works at the Japanese Golf across from Snappers! - She might go to Xmas Party if she doesn't work. She's going home for Xmas - maybe I can get Charley to go to the New Years or maybe I don't want him to - might meet someone here? - HA - Having a glass of wine an hour until 5 - just in drops. At 5:15 - Bed at 8:30 to read.

**Thursday Dec 12**

Slept away - awake at 2-3-4 and up at 5. Drops in at 5:15 - still dizzy. Watching an old "Lost World" - going to do a wash - took a quick shower last nite - felt good - a big article in the paper about "Iron King" - I hope Sh. Mike goes & I can go. 1:30 - up from a nap - feel kind of sick - will watch Y&R & then go get pics. - Hot pics not bad - plenty of everything but pool - Odd thing I plugged in mail`,"2002b_00139":`station, it worked— but didn't send—I have to call them—I found the number in my book of instructions.

Friday—Dec 13

Rain—Lots of it. Slept good until 4—have to get out in this anyway—to mail my stuff to kids (cards + piece of art.) It's 72° out but going & need to get my mail working—I found a number to call (wrote this year) made a great omelet—Man—25 minutes on the phone to activate mail out of Davis Card—I think I was the first person for this dumb guy—he forgot to ask me my new address+phone etc! But said it should be O.K. today (this aft.)—need it to write Brian, watch "Fred" then I'll go mail stuff—still so dizzy—Well—staggered through that—parked out back & staggered up outside—WVTS`,"2002b_00140":`Tried to nap at 12 - no go - up at 12:45 - watching Y.A.R. - ate hot dog + cottage cheese + orange slices + milk - writing make a thank you card + my letter.

Tried another nap - no go - decided to go to jazz - so glad - met a nice guy named Phillip Saville older - a water color artist AND a poet. We had a nice talk - I read my book had 3 beers (one ticket) for $3.00 and came home - e mail still not working - NITS - will get soon.

Made fried pork steak + eggplant and peas - good - some choc kisses - e mail not working yet.

Sat - Dec 14 - Up at 5 - stumbled onto a great program about the brain and then about how important touch is to all babies and people - I was surprised yesterday when this Phillip kissed me 3 times as I was leaving - a very affectionate guy - & typed a cute short last note`,"2002b_00141":`"Rudolph the Red-Nosed Reindeer" - guess he's Rudolph's son - other deer are jealous of him - it's really cute - the Williams voice is Hugh Grant - one guy is gay from "Raymond" - Pretty cute - I think I'll take it up Christmas - I hope my e-mail works today - & not let call again -

Man - about lost it - 25 min of no luck - ate + drank glass of wine & tried again - another 20 min - a dumb kid again but at least they had all my figures stored in 2 days. Finally I said - look I'm 80 - can't hear good - sick of your music & hope it's OK because I don't want to have to call you again! He said sorry - it's all ready to go now.

HA! took short nap - cleaned up - I think Johnny is coming up - Glory Bay - Lost Loved suppose to be on but it's a "gassy" Will Smith "crappy show" just a bad day altogether!

Johnny just called - on her way up`,"2002b_00142":`Had a nice visit - 3 1/2 glasses of wine. A lot of blah about Village meeting crap. Don't care about it at all but I listen. After she left I (oh yes she brought me a patch for dizziness behind my ear) made myself go to the cleaners with Sheila's sweater $3.02 - I can get it wed - It's 4:00 - decided to make potato soup and maybe eggplant (baked) - glad to be here - had hot soup + polish sauce, some orange slices - but drops in - for better - only 7 + I'm sleepy.

Sunday - Dec 15

56th Wedding Anniversary - Oh yeah! Lots has happened since then - including 5 great kids - It's 5:30 - awake at 3 but back to sleep until 5 - drops in - almost gone - maybe one more - I'm still dizzy. I've been going nuts looking for those negatives of the pool & after I can't find I think to get some things today. But he called when I was in bed last night (at`,"2002b_00143":`I was reading - Poor thing on 4 new pills (200 some) I think they're some pill crazy - I did fine on no previous visit. I went to get Chol. checked - if it is half way good I'll go off of your too - only be on an again. Time for the paper. Still dizzy. NUTS Read the paper etc - at 10 cent to Public - got $0 & out - days until have $16 in Denis - hope so - anyway got grove & then stuff for little boy for Xmas, all 3 of a kind except one top game - good for all 3 - ate just soup & hot dog - Wrap at 12 & think -

Slept until 2 = watched TV then went to Eckhard & got throat drops for my throat - came home & made soup. I watched an old Helen Hunt movie - Good - But in ear drops - watching Haunted Places in America - Having a wine. Always afraid when film is over.`,"2002b_00144":`Dec. 16 - Mon

Woke up at 2 - but back to bed until 5:30 - drops in ear - tried to call Guest - they asked me to call back at 10:00 - Did dishes & cleaning up trash - at least it's a beautiful day - Cold but sunny - My ear lots better - no junk in there - still dizzy though.

To only 43° - Had nice talk with Sheila - asked her about getting tickets for "Lion King" when Jan comes down to SF - was pessimistic (as usual) but I said I'll call today to see if need a date from Jan - I need to find out what I have in little bank - around $150 together I think.

Went to Jessica - 3 beers - pretty dizzy - making supper - feel great - beautiful sky and water.

Tue - Dec 17

Up at 6 - no coffee etc - drove up to get blood test - my LAST hope - But - it was so dark...`,"2002b_00145":`and humid I had trouble driving. 
Cried - I needed to keep on stopping 
& defrost - And one there - got 
right out - so weakish & stopped at 
this nice cafe & had egg toast & 4 
cups of coffee (also home fried potatoes) all 
for 3 $. Felt better & nice & sunny, 
just remembered I can get Sheila's 
club rooster today. After my nap 
I'll wash my hair & put up. Great 
get ready for Club - go down at 
6:15 - to be watching a cute show 
+ "the Fred" 8/10:30 -
Watching YHR - I'm proud of myself 
worked the whole cross word puzzle in 
the paper! - Without help because there 
are no answers until tomorrow. 
YHR on - Good old Diane is 
shocked & heartbroken that she got 
caught on this deal - Phyllis told her 
off - Had a nice 1/2 hour nap 
Need to wash hair & put up. So 
far I'm still going to write`,"2002b_00146":`I'm still dizzy - Y+R is sort of touching me that Chrysie is out of jail I
now its about Coleen - 360
4:30 - washed my hair + put it up.
Will fix supper soon. Made a good
supper - pork chop - sweet potatoes
Cold dinner with cheese. Johnny
Called - 4 times - telling me stuff
over & over - they want Charley to
sign a letter about how rotten the
Village is now.
Well - I checked out about
party - just so dizzy - talking to
Johnny from went around a lot.
I'd going to start taking it
easy until I get O.K.

Well - Dec 18
Jane Birthday - 8:00 - &
just watched an old "lost" - need
to get Shiloh rooster + our on the pillow
also need first pain pills. Taped an
old freezer & will watch.
Well - just did battle with the
& mail idiots - really tell this
cool woman off - they'd made an`,"2002b_00147":`error somehow - Ha - 15¢ to reactivate! and another 48 hrs
shit - I asked her "What's wrong
with you people up there?" Friday better be off!
Got the rooster + pain
pills milk + a big bottle of wine.
It's 75° out. Really beautiful. I'm
thinking about swimming but not
sure if I should. My money is
going down fast - $75 in Denis-
$9 in mike + its 9 days until
the 27th - I will probably get some
money? for Xmas - watching YSTR.
Then a nap. Good old routine.
Just had nice long talk with
Jennifer - She got my picture & loved
it - Having a nice birthday she can't
wait to get down here - We decided
it had been a year - She is 61 - can
draw so see next year may get a
part time job.
Starting new Diary`,"2006a_00002":`Dec 27 - 2005 -

Run out of journal before I wrote about Xmas - it was wonderful - of course we had to wait a long time to open presents - finally I hollered "Sheila were opening presents." I wrote all my loot in my other diary. Anyway we played "Spoons" - it was fun - Maria had to go sleep. The food was wonderful - prime rib + turkey - all the trimmings, pie etc. I made a big dish but when I got home the paper dish broke in half - all the food on the ground - 2 egrets & 5 crows ate it - Ha! A super mess!

Dec 27 more from above -

Today went to Walmart - found a new rug I want. I got these journals inside for Ashleys anklet bracelet - cut litter - on the way home - got gas & a cute toy chicken that danced rings - I was going to give it to Ruth but then Mary & Mike came by and she`,"2006a_00003":`We had dinner for Sheila's birthday Sun. So I'll greet to her.

Mary bought me a really pretty light white blouse—really nice. I'll wear it today—with black pants.

Brian was here when I got back from Walmart—he brought in TV—but we couldn't get it to work—so played a game—AGAIN—I was winning when he came back—at the end he played a word I was going to play!—But he badly!—Mike & Mary stopped by on way to Vets—to get Mike pills—

I'm watching YAR & then a nap

And then Eddie—

Called Dr H. she (Stacy) said call Barrio—(closed until Jan 3) so I left Sheila a sarcastic message:

"You never answered my last 2 so I don't know—I need to see Dr. Barrio first in until Jan 3—so well see?"`,"2006a_00004":`3:00 - "Family Fred" - funny - Tony to dress up & go to Eddie's - Had a ball - with MB (Marty) + John - this cute little old guy named "Billy" - & got him in on the game -

I am so upset with Brian - he had the door open & Kitty got out. So when I got home he missed so much of Kitty out - NO! - I don't know where he is - have back screen open & front door - but - where is he - WHERE -

Got home - Mary & Mike left off orange towels (small ones) to go with pets. Kitty is back - came in back door quiet a cute little guy at Eddie tried to help him get on the board - Billy, "Marty" (MB) gave me wrong answer on purpose once - Ha - last named "John"

5:00 - Got home late - called Mary & thanked for towels - now pleasant sure about birthday.

Jim sent me a darling card - sorry about my request & sending a hug.`,"2006a_00005":`Such a doll! - called & thanked her,
watched "Pyramid" - now "Family Feud"
8:00 - bed time

Dec. 28
Up at 6 - no food then
remembered Sheila is off this week,
waiting for the phone to ring from R.
she's a little late.
Had good talk & laughs
with R.

Stood ole Brian brought my
rug - looks cute - hope it doesn't
get a wrinkle in it. He also
brought stuff to put my TV-DVD
in - took awhile I can't close the door -
that's fine. I'm sitting in bedroom watching
TV - may rent some DVD's at store,
B. - wine for me - He went out the
last minute but again - but its
fun.`,"2006a_00006":`went to the Spa - 3 gals talking operations - Cancer blah blah only stayed in 1/2 hour - heat for 15 min. Then just came home - took Xmas stuff down - tree stuff too - need to water it

Dec 29 - Thu

Up at 6:20! - at 8:15 I had a migraine - went to bed took pill + cold cloths on my head - over in 1/2 hour - entry satired. 1/4 talk with R.

2:40 - watched YAR after nap.

dressing for Eddie - don't want to go until 3 though - may go to real Mart - Ready for Eddie - watching "Family Fred"

Hold a ball! - first nutty Krusty "but with a nice guy" Leon - then MB and lots of wine crackers etc. Raymond talks to me + is fine - No Ozzie - home at 5:15

making sauce - pots of broccoli -

Really good supper - watching 70's show about the war. Broccoli.`,"2006a_00007":`Dec 30 - Friday

Went to bed at 11:30! - woke up at 5:00 but much better - a pitcher today. I'm going to Wal-Mart and get Sheila a pencil set with my card.

Lucky me - Claire Cardin pen sets from $9.95 to $24.35 - then went to bank & got new "transaction register" - all up to snuff - writing for the 3rd.

Had hour nap + watching Y&R - put my hair up, going to Eddie's first library & get DVDs -

Got some really good DVDs will see if they work pretty soon!

Had so much fun - Aggie MB wishes - again - Karen said I've been taken care of - either 3$ - Aggie bought me a drink - watching '70s show - I saw them all -

I knew I'd get DVD - it works great but I didn't want to see "Focus" about bigotry.`,"2006a_00008":`Sat. Dec 31

New Year's Eve Day -

Ho-hum - hope I can stay up until 8 - HA - doing a wash. Saw the next door guy and asked about a cat - it is his sisters-in-law who is staying until her apt. up the street is OK next week - so good - it's not a stray.

Also good news - got a $30 gift from Publix - all the people in here. So I'll go up today also to eat store - see if they have 2 more flashlights.

Darn! Shawn - they came out but get more next wed - I'll get one for Shawn.

Watched a rather sad goofy movie - "The Secret of Joe Gould" - good acting.

6:45 PM - well went to Eddie's + visited why I left Cricks - walked in & saw Alan Heather (always sister Mary) + Ficky, still so smart + smug - I was last all the time - gave Ficky a bad case - anyway hotel the whole time they were there.

They finally left to a "block party" in`,"2006a_00009":`their "cul-de-sac" - Sat by Marty + Krongs. Had 4 beers - Alexes? only charged me for 2 - left her 4 & tip -
Anyway won the last game and came home - ate meat loaf baked
pot spinach + cookies - I need to tell Lynn about it

- 2006 -

Jan 7 - Sunday Up at 5:20 - terrible dreams - today go to She. at 1:30 -
I watched "Sideways" but didn't like it as much as I thought I would,
too many f---s + 2 sex scenes (very real) but it had funny places, and learned
a lot about wine. Need to wash my hair
and put it up. I did -
& stumbled on to 98a - Monk is on all day - taping it from
2 to 6 - I'll be at Sheila's`,"2006a_00010":`New Year Resolution or hopes:

1. Hope to get over BPPV soon and ear OK.
2. Have a good time every day (as possible)
3. Tell kids you love them often.
4. Don't spend money on junk.
5. Take pills as ordered.

Sheila's Birthday:
Had a great time! Sheila got some neat stuff—she liked her pencil. Got 2 dog roses from Mike & dog from Ashley—a cute "frog" T-shirt & a darling copper water windvane—from Mary. The food was super—bought a plate home—we played a little trivia. Dana was really good—ate cherry pie & whipped cream—gave Brian one tub—five a plate & came home watching "Monk"—It's 6:15—8:00 now & going to dress do dishes etc.`,"2006a_00011":`Jan 2 - 2006

A new year! Back to normal - I think I have plenty of money - HA (do I ever?) Up at 5:45 as usual. Crazy dreams - lots of men in street cars - San Fran? used to wait on those crowded ones all the time.

Will try to clean up today - may comfort clothes - decided to buy more silky things in colors - red, blue, etc., etc. IX - that white shirt looks good on me.

2:00 - had nap when John called. We talked a long time - told him how happy I was - especially about family - watched YTR - now family ready to go to Eddie's.

Had fun - although there were 12 players there - I was 3rd, 6th, 7th. Anya wasn't paying attention so she lost too. Anyways had fun. Home at 6 - ate Shetler's food from yesterday. Sure missed my...`,"2006a_00012":`call Barrios

look for 3 or 4 days - (New Yorked)

Up just in time for Sheila to bring some shrimp noodles - looks good - feels like Monday - it is Tuesday
mail again - things really back to normal. I may go to Spa + swim.

Trinity - talking to Barrios

B 2:15 Wed - East Lake So of Keystone
up 19 - Tampa way make a right
to East Lake straight up E - 5 miles from
Time Kingdom + 7-11 - take left -
and corner Ridge Line Blvd.

Cross me - I wrote down East Bay
and it is East Lake - drove way too
far - now I know!
Damn - I weigh 184! - too much -
going to the spa - start eating ½ of
what she brings me -

Rightnow Brian came down - we
played up - he beat me again! - but we
went to Palm Pavilion - I had 2 beers
and Philly beef - bought half home
I may ask Dr. H. for diet pills -`,"2006a_00013":`I need to get serious here about it—at least until I'm down to 170—184

Need to get my pills at 9 in morning.

Proud of myself—went to Spa—met a gal who told me to chew food 20 times each bite. I know I have to quit beer—means Eddie's Monday & grill for 2 weeks—smaller portions of food—no eating + then napping. So—I'll nap at 11 & eat when I get up—Spa at 3—

Well—Jan 4 Woke up to a terrible roaring in my ear again!—got up & it's finally gone—I just moist heat on it. Today at 9 I get pills—1:30 is Dr. (2:15) It's O.K. now—thank goodness. Cat isn't meowing this morn.?—just sleeping.`,"2006a_00014":`It's 1:00 P.M. - watching YTHR - will leave after this - sure not looking forward to it. It's so gorgeous out - of.

Nitemore!

Went to East Lake - turned left - No 7-11 on Ricklen's Road - went into Rose Radiology & they called - gave me new address - to McMillen Booth Rd - went back up where I'd been - LOST - finally found tempo - not sure which way? wrong way - so turned around - came home - bra off - wine & food -
almost had a car wreck - when I'm lost & don't know where I'm going etc. & get in wrong lanes - almost pulled into a white van - eating -
have dinner - clothes comfy &
TV - At 5:30 - eating again -
7:30 having crackers & cheese & wine
going to bed at 7:40 -`,"2006a_00015":`Thur - Jan 5
Laid in bed thinking about Barrios. Cleared lots of junk out of there - think I'll just see if they call me -
Talked to R - Took Brian
Wash up & met at Wal-Mart - home to eat - got more glass beads blue -
In fixing cabbage and baked pot + spinach.
Got 5 more movies & went to Eddie's - had long talk with Dr. Bill & after he left Raymond -
Karen said she wore my beard
everyone loved it & said it was worth 20¢
I'll give her some to wear & sell for me -
10¢ each

Friday - Jan 6
Up at 5:30 - $1,
left me $20 instead of food. Will get
4 of those shrimp + chicken meals =
I got 3 (had one here) bananas = 4 quarters
Just ate - washed sheets for Brian -
Ate at 10:30 - I'll nap it 11`,"2006a_00016":`Just watched Y&R - Lauren is finally out - and standing by Michael. Good - so today was great - now not sure what to do - watch news + Family Feud + go to Eddie - I did a wash + Brian's sheets.

2:00 - ready to go but will wait until 3 - watch "Family Feud"

Had a ball - Ozzie - "Dr." Bill + Eddie - lots of people playing - I had 3 wins + a coffee.

Sat - Jan 7

Up at 4 - didn't take my sleeping pills last night & am going to try + quit them all. Something is making me dizzy + I don't think it's my ears or BPPV - I'll find out - may mix my pilosec the most. No "Eddies" for sure - got more beads at Michael - then went to "Old Chicago" + played the game - had 2 wines - $4.75 each - nuts + no Brian. I had his sheets in the car.`,"2006a_00017":`Bed at 8 - called Shawn - good talk.

Sunday - Jan 8

I'm so happy! Only woke up twice - I then at 5:50! - with no sleeping pills & just a little heartburn with no problems. Going to quit both (or try also) - just take blood pressure & chol. Good and plavix (platelets)

Read the paper - going to go to library and hopefully go to spa today. It's really cold out.

I went down & got bal. ($28) and 100 out - went to Build & got a sweat shirt & T-shirt for Shawn's birthday. Shirt says "To Save Time Lets Assume I Know Everything"

Blue - cute - fitting lunch`,"2006a_00018":`What a long day - had a 2 hour nap - went to library - got 5 movies & 2 books - came home & watched Clive Owen in "Cropper" all about gambling - not bad - I really like him! Watching TV 'til 7:00 - Another hour - and bed.

Monday - Jan 9

Up at 6:10! Hot up at 2 and work pain pills - but found out neck problem - got sickish at the library & came home - so guess I'll stick to them & about time for P. to call - talked 25 min! Sheila left food - but not very good - bow mackerel (spag) & ricky meat balls - some good Lima beans - she's trying & of course I won't say anything - I ate my own vegt yellow squash -

Had short nap - YSR coming on - should be great - Loren is back & Michael is a good actor -

It was great - he couldn't believe it.`,"2006a_00019":`Well—changed my mind again—back to beer—(can't afford wine) to help with my weight—just have fun—going to Eddie's this off—time + their spa—maybe Sat or Sun.

Went to Eddie's—way too much Krazy—finally "Voister" came in + helped—finally left. Another guy "Chin" came in—beat one then I beat one—then W. goofy "Big Mike" came down to talk—kissed me up + said "Soft lips" nuts—got home Sheila called—it was Brian's last note he was starting new job two—making steaks—he'd come get me—so he did it was fun—bet ate too much of drove home Dang—kissed B. Goodbye + told him I loved him—oh yes—he bought lots of food from Sh.

Tue—Jan 10

Day started with a shock—
"Dr. Bill" from Eddie's—in jail
for D.U.S. and something`,"2006a_00020":`medicine after losing his license—and cocaine and alcohol also abuse—He is in jail—$20,000 bond—so when his Father "died" & he left he was probably really in jail. Wonder what Krazy will have to say about this? HA—Bill was a big egotist anyway—another "building Krazy."

Mike & Mary are going to the Beach—said I'd go but don't want to. Will tell Mike how to get there.

Watching TV to see if "Dr." Bill (an osteopath) is on. Probably not.

Need to go to [illegible] Michaels & somewhere for cat food—

Going to sort out food Bri brought me.

Not out of going to Beach. Told Mike how to get there.

Good time at Eddie's—NO Krazy—but he had been there & Ozzie had my book but I let Raymond look at it too. This guy called "Cain" came & played—shot me twice—his cute wife came in. Beat him then—`,"2006a_00021":`Wed - Jan 11

Up 3 times in the night - took pills at 2:00 AM - slept until 6:20! Talked to R - watching "House" - really a good one - The gets back with his old flame. No one can figure out what this guy with "aphasia" problem is. I sort of figured it out.

10:00 - Got good breakfast - cottage cheese - mailed Brine package + 2 amb. final bills - Cat pushing on me -

Had hour & 1/2 nap - woke up - roaring in my ear again - I think I have Meniere's Disease - at least it's a possibility - & I called Dr. for more medicine and they called it in. No questions about spec.

Oh yes - I called Mike & tried him about card from April - then he said "Can we take you to lunch tomorrow?" Wow! Of course - About 11 - great - I'm`,"2006a_00022":`watching YAR.

6:00 - Had lots of fun at Eddie's.
Sat 1/2 down the bar & Eddie said "Could you sit on further down?" I said "Yes" & didn't go to the door. He finally left. Later & Eddie came in. Had fun playing. I won 1 game - haven't fixed myself yet. Watch TV - Dr. Phil.

I got my vertigo pills (medication) & felt (my cause dizziness) or blurred vision. He was angry. I'll take the pills & do those damn exercises. Now still need to get back to Hansen.

Thur. Jan 18th up at 5:45 - I took my sleeping pills but they didn't do any better than just plain acetaminophen. But am going to take medication 4 times a day and suggested I taped "Lost" today. Mom & I are taking me to lunch. Great.`,"2006a_00023":`4:00 - Had a short nap - Lunch was great - Mary & Mike got here at 11 - went to Jollimons - Mary & I ate seafood wrap - I had 2 beers and cola slow - Mike had a cheeseburger & beer twice & key lime pie - I brought ½ home - Will have soon - Mary brought me a dress (had her give it to Sheila) bought me soap too - I gave her my "House" copy.

Almost 6 - The kids also gave me (as a joke) a silk flag with a lady flamingo drinking a cocktail - tried to put it on the pot stand but I had to take it down over the window - shut off the view.

Friday - Jan 13 Up at 6:00 - Yet Mike told me Sheila is making $300.00 a day! - Ye Gods - $1500 a week! - No wonder she doesn't worry about food costs etc. $6,000 a month! Monk is on call boy, this is an old one - guess they`,"2006a_00024":`all will be
2:00 - got to pick up pills -
Sat. Jan 14th
up at 5:45 - 6:15 now
no paper - it's cold & windy - my
money is pretty good -
27 here
120 bank
120 loop 16th
267
33
300
90
300
210 left -

I am tempted to get my screen door
next week - tipped monk & house last
week - Both really good -
However had another damn migraine -
lasted an hour - so - back to work

& also did something I wanted to
bought that cute bear named Russell
wrote him a nice letter - called Can she
think it's a great idea - said Russell took him
down recently - I'll mail it down - and I
had an air mattress & covered it well
if he wanted to come down. Jim`,"2006a_00025":`Sunday - July 18

Cats slept with me - it's too cold out to keep him out. I'll go to library this aft. Writing for the paper & it's 6:00.

Paper came at 6:30 - talked to R. A friend of hers husband died in a fall. The friend has M.S. God - read paper - went to bank - they paid. I had $71.00 - I thought $100 - may ask - got gas 10¢ & 20 prilosec. Left preo. for play - (another 25¢) So no screen door - also got 2 dark chocolate candy bars - just ate 4 squares.

4:00 PM - Good nap - went to Spa - had a great "jig" in the water - a full ½ hour didn't talk to anyone - just exercised - then to Wal-Mart got 2 necktie things - a subway card - I need my book.`,"2006a_00026":`Home & TV — It's 6:30 — already took sleeping pills — bed at 8 — and Sunday over or sunny "King of Queens"

Monday — Jan 16

Up at 5 — lots of groggy dreams — ear stinking & running.

Found 2 doxycycline pills & read I'd need to see if they were antibiotics for fleas.

I think one of them was antibiotics for fleas.

Talked to R. — in another negative mood — don't think she is happy (Emil?)

7:30 — Had fun at Eddie's — had a nap — watched TV/R — took all my books back to library — a young guy carried them up — Hope the family turned them in — he sat by alone & "Janes" kind of goofy friend of Rosies'.

Did bowling at Thrift — Erin & his wife there — he beat most of the games — asked this guy — got started on the bowling — told them all I know about them — sort of impressed them.

Had 4 beers — home — fixed supper.`,"2006a_00027":`Watching "Family Feud" - ready to go to bed -

**Tue - Jan 17**
Can't believe I slept until 5:45! She dropped off 20 $ - fine - will buy you - May swim again today -
2:00 - just had a terrible cold.
I had canned chili for lunch - then went to nap. When I got up my throat was on fire & I was so sick - finally threw up a little - ate crackers & root beer - decided to eat some cottage cheese - still feel sick - watching "Family Feud" - not going anywhere but mail box - Before lunch I mailed the Bear to Russell - Ha -

**Wed - Jan 18**
Up at 5:30 - slept O.K.
Sheila (Dr. Nurse) called - sort of snotty - "we have some playing - not sure how long we can do it" - "not tomorrow" - "oh no I meant even next week?" - "Umm I'm not sure" - My`,"2006a_00028":`Vertigo is still really bad— I'll let you know tomorrow. BITCH— Anyway— go wash my hair & put up & go over about 9:30— I'm going to really watch what I eat—

My beads look extra pretty with a big bead hanging down on the end. I need to get 2 big pink and one kelly green—

I threw out the damn chili— I want to start eating AFTER I nap— well— ate but it will be an hour & half before I nap. 11:45 now— I read— drank wine and listened to music. Now watching news on the YTR—

Shot my pills— 20 pills. Sharon tried me Sheila was really sick yet, I went home early. Maybe that's why she was so crabby— anyway I'll call tomorrow—

Fell asleep in the chair— woke up at 12:30 for YTR— worked good— no heartburn— must do that— probably sleep better at night too—

2:30— Going to Eddie— & need to get`,"2006a_00029":`big skillet - from thrift shop?

7:10 - just had a ball - only women there - Crazy Clair Ron (Lizzie) & Joel (for a while Big Mike) I had four beers - should be $10 - but Karen only charged $5 she thought I should charge $20 for my necklace - I said $10 and Ron said that would do it better.

Came home at 5 and made really good shrimp & veggie dish - 7:15

I went to go to bed - ha -

Thur - Jan 19

Up at 5:30 - rewinding "Lost" - Oh well - Read paper & ate - now worrying about Ruthie - Its 7:40 & she usually calls at 7:15 - I'm going to Wal Mart at 8:10 or Michaels at 9:18

I called R - she just forgot me, a guy was coming to fix their furnace.`,"2006a_00030":`Brian called me—such a great son. He's by Detroit in Mich.—guess I'll go get Denis's money out.

Got out $100 & went to Michaels & got more pink beads & some neat silver ones—but coming out got in a terrible traffic jam on 19—came home—eating bed at 8—

Then you do today. I am going to see a Dr. if not Hansen Jr. then Hansen Sr. or a walk-in clinic. Also just got a camera for my beads & my. I don't have much energy.

1/10 PM—Man! Went to Hansen—Had to sit there until Sheila "Surgical" to see me—first thing "Did you go to Spec?" I tried but got lost—she repeats "Why didn't you go?" told her again—well I can't see you until you do—I said "Then I'll get another Dr." walked out—came home called Sheila &—she said go to the walk-in—she goes—so I did 2 hours later I saw Dr. gave me`,"2006a_00031":`Pressed for generic
(Asked for eye drops + amblyopia)
After 2-3 hours, dropped them off at
CVS down on corner. Got home. Here is a message from Sheila:
Dr. just came in and said he'd see you
this afternoon. Call me when you can.
The - so I tried - can you hold
8 min., hang up, poopy. I think if I don't call back she will be
in hot water! Good.
Sheila came by & left me a
check for $74.81 ($30 to spend).

Big news is Russell called!
He must have gotten the bear -
I thought I was here at 6:10 but
maybe not. Anyway, I'm going to bed.

Sat - Jan 21
Another weekend -
Up at 5:30 - took my pill (put
in drops - I'm so mad I forgot to
take Monk & Horse - Thinking
about Russell I guess I'll`,"2006a_00032":`For some reason the cat was meowing frantically this morn. Wanted out again real quiet now? -

Doing a wash - did lots of dishes. At 9 going to Dr. clinic with check - then to Michaela -

Russell called - my damn phone went dead twice! - But we had a great gab. He quit his job & is going to draw out his 401K money & not work for a year. I told him "Good" - he has 4 grandkids - I wish the damn phone had worked - He still has a temper - He - I'll call him later, maybe Wed. nite or write.

Sun. Jan 22

I have a whole 20 $ Ha - may go to Spa & library or read on Christmas & get up at 6:30 - but had bad nite - thinking about the Bank. Figured out my money from check book - Sure enough - only had 8 when I used ATM for 18 $ gone.

Will go in morn & talk to Mary -
Now I'm cleaning up the apt - a real mess`,"2006a_00033":`Went to Causeway - it was super.
Only read an hour - then I wanted
some buttermilk but store didn't
have any so - got wine - came home
and made a sandwich - laid down.
Now it's 5:00 - watching a good murder
on TV - with Robert Urich - wish
the day was OVER.

Monday - Jan 23

Day did get
over - I'm up at 5:45 -
Watching "Desperate
Housewives" - It was cute -

10:00 - Boy! - I was desperate
myself - down to 10$ but went to car &
I went to the bank & "Mary" took
off - the overdraft - so it's only $13.00
then decided to see if that $20$ was
in Denise acct. & it was! So now I have
$70 until pay day the 3rd - oh man the
lottery 33$ on the 3rd!`,"2006a_00034":`ate lunch - took my pills - I'm probably going to watch "Rockford Files" - now
hopped in the car - had bad diarrhea - after I got OK & went to Michael's - got more silver beads - (still need more)
talked to Sheila - the $5 was from Mike Fitz. gave it to her. told her to give it to me since they were leaving.
a laid back day - out of sleeping
pills - oh well -

Tue - Jan 24
up at 5:40 - threw up
go to Eddie's today - need more jewelry but at NO - decided to write checks for bills & take out all the rest - no more overdrafts -
also leave ATM cards here - get out all of Denis' - $20.00 - if I run out - I run out!
talked to Ruthie - she had a ball at her mom's singalong -`,"2006a_00035":`Cool nice day—guess I'll get stuff at K-Mart, got them—came home and ate—nap & then watched TV—went to Eddie's—two boxes there, think of Krozy—also nice Raymond there & later "Joe" (who I like a lot)—had a beer—sweetie pie Karen said I didn't owe anything—that Raymond bought some she did too—so I left her $3—what a doll—Home & fixed supper—TV now—at bar—goofy Hank coming to my door with champagne & roses—ha—his feet boring—tells awful jokes—(usually about Jewish people) came home & ate—I called Shawn & had a nice talk—he got the shirts & said "Lover Mom"—So it was great—watching old TV—"Raymond" third I'd think—went to bed at 7:30!—terrible`,"2006a_00036":`Wed Jan 25

Up at 4:30—oh well—finally decided I had to take a shower—got in & remembered I turned the hot water off—HA—had a cool short shower 5:20—now I need to go to the spa—at 10:30—

First hour at Eddie was torture—just Eddie & I—wait—after Ron & Joe came in—I had fun—got a good pie of Azzie—Once a beer spigot broke & sprayed beer all over a bunch of guys—then they gave us a pitcher of it—it tasted awful—Ha—came home fried fish—baked potatoes & peas—watched an interesting Dr Phil—

Thur—Jan 26

10:45—I got up at 6:18!

Super—watched a great "LOST"—all about (mostly) Charlie—his memories & hallucinations about the baby Aaron—Really good—angry—then went to work—dropped films off—then to Erin Duff`,"2006a_00037":`for wine (phone) + TV dinners. Dozed
not to go to Eddie's today - only
have $6.

1:20 - just talked to Russell again.
It was fun. He was feeling guilty
about quitting work - we had a nice
talk - think I'll take a nap. Ha -
Had too much wine - but glad I went
to Eddie's at 4 - Ron Raymond + Joe there
for borrowed the book - they left & I was
left with nice but boring "Cain" - nice wife
she came in 5 minutes later, Karen wouldn't
take any money - said to just make a
bracelet - blue + pearls (blue is her favorite)
but then this guy John came in + gave me
$7.00. I'd loaned him a long time ago. I think
it was just $5. Anyway I made $7 going to
the bar. Ha -

Friday - Jan 27

up at 6:30 - Super -
wonderful daughter left me
a $20 - will go get 7 TV dinners
or 2 - 5 $ ones - only have $ more
days to go until Vickers. OK will be O.K.`,"2006a_00038":`Been having a heck of a time making Karen's bracelet - too short and so got a longer strand.

Went to Savealot - got lots of stuff - shrimp - TV dinners - veg - 9:30 have 22 # left or more watching "Matlock" never saw it before - that's rare - Pretty good too - 12 map time

1:30 - slept an hour - watching Y&R then "Family Tied" - then Eddie. I washed my hair & put it up - looks cute - Had sausage & fried potatoes for lunch.

6:30 - had super time (again) at Eddie's. Joe brought back the book - loaned it to Cain - At Eddie (owner) asked me to find out where Denis got it - I was lost for awhile & then told the last hour. After Karen got my tet - I gave her the bracelets - she loved them. Home at 6 - Ate TV din.

Amazon.com search`,"2006a_00039":`talked to Denis and got the address of the comp. for the book — Bed at 8 —

Sat 28

Well—up at 6—my ear is really ringing but doesn't smell or have any color—only have 4 pills left—will make an appt with Hansen Monday—May go to Spa & library today—4:00—went to Spa—had good 1/2 hr. swim—10 min in hot tub—I called Sheila—about movie—Dana & maria ride were there helping in back yard & dirt—she asked me if I wanted to go to bridal deal in Tampa—1 to 7—told her I'd never lost—vegetables watching TV—

Sunday Jan 29

Up at 6:40—Couldn't believe it—Cleaning house (a little) & had an egg cockroach in the kitchen! Hope that doesn't start something...`,"2006a_00040":`It's already 9 - at 11 going to get eggs for
spring from Chinese store - some wine & 
grocery bags - at 1 go to the library & get
movies. Chicken little? -
5:00 - Didn't go to library - but had
fun at Eddie - they were singing - decided not
to sing - had beers - only Chip in for 2 -
I heard that Paulie was OUT + there was a
new manager - well - I only have $100 so can't
go tomorrow. Fixed scrambled eggs sharp & 
vegetables - some choc. -
She left $20.00 - with gal -
Monday - Jan 30
Up at 6:20 - Went to
work mail - pics really good -
especially of "Apple" + joe "I sent
to Ruthie & lots of bad pictures too
+ the tables - almost crying. It's
raining - Come home + made lunch
fried pots + polish sausage + wine -
It's 10:30 - watching Rockford - kind
of funny + good -
1-877 Cash 702`,"2006a_00041":`I called those "cash" people but they didn't call back—also called to make an appt. with Hansen—got a message but she didn't say this is Sheila—watching YAR—my ear is bleeding again—I called them but they haven't answered—I may have to go over there to make an appt.—will I have to—"my ear bleeding bothers me a lot."

Well, I WIN—Dr's office (Sheila?) just called—I have an appt. today at 12:15—about time! Getting ready to go to Eddie's—called Brian—in Illinois—got his tax returns made $2,000—they held out $2,600 so he owed it back—he said everyone was after him for money—Ha—

The—Jan 31—appt. at 6:20—good & got a stupid overdraft bill that Mary said she would excuse—so I'll have to go down this morning.`,"2006a_00042":`Talked to R - we have trouble finding something to talk about - oh well - our lives are dull.

I'm so mad I could chew a nail in half - HA - & do have a $5 overdraft - because that - 13 was over 7 days closed another 32!

So again - I'm getting out of my bank - I found out Publix Cashes So S. Cks for $1 - I'm going to buy with money orders - just my ATM way. (Keep Denise) get out at bank - Cash Visa at Publix - Poop on overdrafts - a damn scam!

At least the bank cashed my Vic check even if I had a - bank acct. But I'm still going to quit my bank & deal with money orders - WHATS LEFT bar at 5 - come home & filled eggs vest pots -

my sink is still leaking - NITS -

I'll call again Fri - if its still leaking -

Hold a good time at Eddie - I'm still only woman player - "belle of the ball" - stupid "Pink C" wants to sit by me - then`,"2006a_00043":`Cute Joe comes in - later Cain this
weird John - then Wisher - Bill
5$ + gave Karen 3$ chances -
Tomorrow - Dr - hooray -

Wed. Feb 1st 1st day - tossel &
turned last nite thinking about it.
My ear is still draining - I also need
groceries for 2 days - Good news she bought
up a Mexican sandwich & cookies - lunch - good -
Ruthie forgot to call again - called her at
7:45 - then once her phone went dead - &
said "I don't like the way this day is
starting" - He - always has good laughs -
I'll get ready at 11:15 - leave at 15 to 12 -
Dozing & listening to music so sleepy - but
will watch "Rockford Files" -
11:30 - watching an old "Matlock"
Ready to go to Drs. - ate the super
Calzone & had glass of wine - It's
11:30 - I'll leave at 11:45 -`,"2006a_00044":`4:10 - Sheila & I sort of "trysted" around each other - told her about Walk In Clinic - Dr. was also a little pissed - But we made up & he made me laugh - once he said "I can't even see your ear down - don't know where it's going?" Ha - had a good laugh about that - so I have to make an appt. with an Ear-Nose-Throat guy - let call Atkins tomorrow.

up at 5:30

Thur - Feb 2

Sheila bought me bisquits - I have 10 & left - good - at 10:00 let call Atkins - Maybe do a dry run on him this morn.

Ended up in the office making an appt. (eg) also gave me a paper to get to Hansen

hearing test codes

92557
92567
92568
92588

Almost 3 - leaving for Crest Eddie`,"2006a_00045":`Feb 3 - Pay day! Slept all through the night! At first light going to bank - then Wal-Mart - home at 9. Save a lot - then (maybe Michaels) mail bills.

Terrible ordeal! - Got about 1/2 down to bank + terrible lightning & rain storm - Got wet getting out money out - then over to Publix for food. Coming home was as scary as any driving I've ever done! - Couldn't see - defogger not working - 30 miles an hour but got there OK. Lightning is terrible - Storm over - but - & ate spaghetti meat balls & had 2 wines - so will take a nap when I get up will mail bills & maybe go to Wal-Mart - need jade & coral beads - stamps. Watching "Rockford Files" etc. always pretty good - but I'm sleepy.`,"2006a_00046":`Up at 1:00 — for some reason I was sure it was Saturday and was surprised when Y&R was taping — a funny thing just happened — a black lady came to door I was & "Mary"? Martha" was having the Club meeting & she came to pick me up! Finally found out it was 1987 — she went over there but left —? ye gods.

5:00 — had fun at Eddie's — met nice gal named Susan — Karen out — Sharon working — won 3 games — no one playing — then a guy "Zippy"? — they beat me — I paid the bill $7.50 & left $1.50 tip. Miss Karen — ha — glad for home — still messy & rainy out.

Sat Feb 4th — 4:20 — just got back from the bar — Eddie started bad — only Krazy & me — then cute Raymond — (Krazy beat me) and this cold air kept blowing in from the door — So I moved way down`,"2006a_00047":`the bar - there I could concentrate and I beat Krozy 2 games - Ha - Raymond got a small pizza and gave me 2 pieces - he also bought me a beer - so I only owed $3.50 - for 2 beers - they must be $1.75 on Sat - Then I went to go for 20$ - I saw a lot & got attics of

Sunday Feb 5) Up at 6:30 - day going fast - Good - It's 6:30 am - I just ate lunch! Need to get pills at Walgreens - have to call first to see about charge - then maybe to Michaels for little bags for jewelry - 3 for $1.00 need get 40 worth - first I need to call about pills - Ha - they were OUT - said price is 64$ - I said I have insurance - so probably 40$ - Rita not getting for playlet crap`,"2006a_00048":`Almost 4 - What a long, long, long, long day! Watching a good detective "The Investigators" boy they never give up - 3 or 4 years & keep at it until they get the guilty one.

Now - "Monk" on - with Andrea McCarthy I remember it -

Monday - Feb 6 The long day is over - God - I had a laugh this morning in the door & wrote that said water would be off Feb 3rd - to boil water after that - Ha! - I didn't of course but doubt if I could any need to check on well care to pay - Didn't get up until 7 - Super! It's 8 am - Called well care - I am level 6 so drugs should be cheaper - There is no pay on lovastatin - but lots on flaxix

I had a weird call from Mary - She had a thought about my illness - asked where I was at 8 - just thought it was salesman for cell phones - he no just says of cellular`,"2006a_00049":`I had a ball at Eddie's. Asked "Paulie" & Karen about who won the lottery? No one knew so finally Paulie held the drawing & drew the winning ticket. It turned out to be Frank Clin. I'm not sure what player he was.

Had a lot of clowns around from Joe, Boo & Ziggy. Had 4 beers—sometimes been 10 & R. Chugge $5—either 2—came home late. N dinner then Mary called—she thinks I might have thyroid or B6 or B12 problem will ask Dr.

Feb 9

Up at 6:20—talked to R—

It's 8:00—not sure what to do today—better get more pills—just put in ear drops—let a rusty bill from a credit co. for $75 for ambulance nuts!—am sending $25—

It's 11:15—Had lunch—watching a "Matlock" she seen before. I finished my book—the bad guy was the one I knew it was—usually they are good to the last minute, my dear.`,"2006a_00051":`Day is looking better! The family is going to take today (his birthday) to a pizza parlor—shea picking me up after work—so there goes $14. Need to get a card for him to put it in. Will clean at 8:30—decided to dress down—no earrings or necklace—my turtle neck & black gray slacks—maybe my red coat?

Whoopie! It's over! and for 15 minutes it was as bad as I thought. It was some little cranky Dr. but determined to win him over—He turned on the machine & sucked out my ear making the room go around & hurting. I MADE myself relax. Closed my eyes & told myself I was at Eddie's—HA—From time to time he put his hand on my head & screwed it into the back of the chair—HA—then a long heavy test. I am DEAF in my left ear & have 80% after right. She`,"2006a_00052":`wanted me to get a hearing aid or in the future voices won't be as clear—puts $1,000 & $500—puts then he came back in a dry little voice—"well there something not sure what on top of middle of your ear need to get rid of that." Giving me a pres. for drops to use for 15 days then come back. Then he kind of jovially said "let's move out of here"—I said I'd like your tid—"he said thanks" at first the nurse said "you've been here before" I said "I don't think so" she said "yes" ate on the comp.—but we've destroyed records past 7 years—Home free—Adkins never did remember me—and only 20¢—no 10¢ for hearing aid so—I got some wine—left my dropper pres. at CVS on corner. Watched a Matlock—already saw it—this one though. Typed "Lost"—

4:00—Had a good nap—got my ear drops and other pills.

Thur. Feb 9 Up at 6—nice day so far washed my hair and put it up—need to go to Wal-Mart get another card for my cell phone. Titled % hour to R. Titled her`,"2006a_00053":`Now, Crosby & confrontational Nick was. He can't be wrong—ever! We were lost last night but he denied it—Said he knew where she was all the time—I said "No, you didn't." "Yes I did"—NO—You didn't." Whatever! Ha—almost got us in a wreck when a guy turned too short & he went around and said "He's not going to eat me off!" We almost got hit by a car coming behind the guy. I wish he'd mellow! 2:45—Had nice nap—ready to go to Eddies—went to Wal-Mart got red jewelry—hair shampoo & gel—made jam 2 yrs earrings & mailed I made Karen a pair to—

Friday—Feb/18 Had fun at Eddies talking to a nutty "clean-freak" black kid named Roy. He cleans horses—gets $5 or $80 a house! He applied to clean Eddies—told him he needed help for his compulsive obsessive behavior. Chine came in—she's so nice!`,"2006a_00054":`After 1:30 - bread ate at clubhouse

Came home - ate - TV + bed - up at 5 today - Decided to go to thrift shop + look at dresses for the wedding - Also need high heels -

Karen really liked the earrings - gave me a hug - and didn't cry me again. I left $3 for a tip - not sure what I'll do today -

Sweetie Sh. gave me $20 - no leftovers - I like that better - Ha - She said she had a pretty dress I could wear to the funeral - block with prints + sparkles an "over top" - may do it to make Sh. happy - Almost time for R to call -

6:10 - quite a day. R called but couldn't talk long - went to the eye Dr.

I went to thrift shop at 9 and found a gorgeous dress - 2 piece grey-violet 2 piece sleeveless lined dress big slit up the back + long sleeved jacket with one button - really Classy

$28.50 - $4.50`,"2006a_00055":`I made earrings violet beads & large beads - Speed heels - black or silver - I have that little black purse - just laid down & had a nice surprise - Brian called - he came down & bathed at "Upward" - Ha - then took me to lunch at "Honeymoon" we had shrimp basket & p. - I had beer Brian had tea too. The sea gulls were screaming around - Brian took a long walk on the beach. He brought me home - I took a nap - he went back with his book. Glad he liked it - Got some wine & TV dinner - watching TV -

Sat. Feb 11 Up at 5:45 - wonder if dingy next door will have his sale - It will rain this afternoon - I taped "Monk" but it was the one with the little boy - Don't know what I'll do today. Went to Wal-Mart - got really cute shoes to wear - slip ons with sequins & beads & some`,"2006a_00056":`Color as on my dress - purplest silver -
periwinkle also some triangle
earrings in silver & violet - The dress needs a
little glitter - Shoes $18.00 - earrings only
$5.00 - So I'm fixed - may go to
spa - Stopped at thrift shop & got 3
wine glasses - Took a nap - almost
1:00 - do to - not sure what to do - I put
my hair up on hot rollers -
4:30 - went to Eddie's - Damn I
missed all the fun next. Some of the guys
were kidding Eddie (Krazy) & I guess he
went nuts - Ran down the bar & tried to
hit Raymond! - Raymond dodged it & he &
Eddie both went down! - Krazy was barred
(not sure if for 3 days or forever) hope he
forgets forever. He could have paralyzed
Raymond with his terrible neck trick.
Anyway I was only one playing so won 3 games
then Bo came in also played as well -
I got some potato chips - suppose to be
crisp & weren't - he told me anything
but gave me no better - gave him 10¢`,"2006a_00057":`Jim called - had a good long talk - I
remembered they went.

Monday Feb 13 Up at 6 - couldn't
decide if it was Sun or Mon. Then
remembered where my new TV booklet -
found it is Sunday - It is
Sunday - Nuts -

Had a good nap - then Edgie
no one I knew - played against "two
people" ended up second - they left
I won - then Marty "Come in" said
Fuzzy came down to the bar at the
bowling alley - told his side of it - said he
could have killed Raymond and might go back -
Marty acted like he was talking to Raymond
for him - So - Raymond was outside waiting

Monday Feb 13 Up at 6:00
watching "Desperate Housewives" - so
nutty but cute - talked to R - she
had diarrhea all night - Poor thing
ate salmon & lettuce salad -
I had a super shower this`,"2006a_00058":`I'm not sure what I'm doing today. Good grief—
need to refill my ear drops—will
check my ATM—at Eddie's will use
my free card—want some
wine—Put clothes in dryer and
it's freezing out!!—Stupid dryer wasn't
working so put another $50 in other
one. Also think you store was too
much—not a good day—I have $8.50
in my ATM—will get ear drops with
that I use my free card at Eddie's.
10—am hungry already—got some nice
shrimp at good sale—guess I'll fix it.
It was super!—Going to nap—guess
I'll go to Eddie's—try to talk "Paulie"
into keeping & try out for good—
Had a nap on couch—about an
hour—that all I need—sleep too long
in bed & probably bothers my mate sleep.
Watching TV—then Eddie—
no Krazy!—
I had a nap—more 4 games in a
row—best wishes!—also Burns`,"2006a_00059":`boyfriend & games—Ha—glad Karen my "free" card—worth $8.25—I also had a chance to tell Paulie I wasn't held but Kroger for good. He said if he steps out of line again he would be OUT for good! We'll see—Tomorrow is my lab tests—at 10:25—I'll get there at 10—

**Feb 14** Valentines Day—Big Deal!
I am suffering with no breakfast. I made coffee & put in a tsp of credmor. Can't believe that will make any diff. Talked to R—her eye up 8 days from now same day. I go back to Dr.—The dry is dragging on—at 9:15 I'll go get just then take my coins up—about 5$ or so. Oh boy—I can get Denis money tomorrow I think—Got 10¢, got—tried in coins—$5.75—got some cinn. Rolls & then drove to the Dr. Got in at 10:10—And came out I saw Sheila—putting a patient in a room—Anyway`,"2006a_00060":`I asked her "Did you ever find any playboy samples?" — then she threw me a dirty look & said "I'm with a patient" but got a big handful of them — 20 in all — Ha — She is such a bitch! Came home had toast & coffee — my B/P was 160/80 sort of high — don't feel too good — please eat. It's 11—

Sheila called & took me to lunch. We went to "The Mark" cute little restaurant down on Main Street — had a great pork chop — mashed pot — pea bean soup rolls — choc pudding $7.50 — Sheila had bad news though — she needs a hysterectomy. After the wedding — a total — of course she is very matter of fact about it.

What a super day — $ was short by 4$ but in the black got a 25$ refund from Meade Hosp. on overpayment on a bill — I am so lucky — put on my felt velvet top & went to Eddie's — pretty put his arms around me for a big hug — wrote to Dr. Bill & discussed`,"2006a_00061":`(We) lost there - then "Paulie" (owner) gave me a rose! - Claimed I played - I won once - No Eddie but he had been in & left. Karen wouldn't cry me - tried to give her a tip no go - I came home & ate - watched TV - 8:00 bed now.

Wed - Feb-15

Terrible nite! Kitty out all night! Somehow he's found a way off of the back porch when it get light out (& warmer) I go find out - Got up at 4:45 - Popey still worried about the damn cat - and there he was - meowing at the back door! Now he's asleep - watching "House" always good -

Still still cold out. I need to get 2 boys birthday cards.

Only 6:15 -

10:00 P.M. - Had a great time at Eddie's - I refused to talk to Eddie - turned my back on`,"2006a_00062":`him. Best "Coin" one—moved away from Eddie—came to Susan—cut friend of Karen—
Aggie sat by me—at least one—#20 a
cutie—Come home & fixed supper—then I
checked my messages—it said Russell
Lizzy called—so I called him—he said
there was an old message—but anyway he
had some good laughs—He also said
Phyllis was after money—Ah ha—
fun talking to him—I have recipes!—
Nuts—

Thur Feb 16 Up at 6—talked to Ruthie—
went down & got Denis' money out, 7 days
in there, Ha—$28 #—has to last 2 weeks—
or until (st—$20 for or the drink)
got garbage bag & a frozen green
pepper,—then eat at 10:30—nap at 11—
queen Kitty gave up trying to get out,
it's beautiful out—I'm going up to the Spa
then maybe go read at Canaway—
well—went to Spa—good—except
I forgot my towel & bag again!`,"2006a_00063":`Anyways, found a roll of paper, 
park in store to dry off on—half came 
home—read—watched Elliot Dr. 
Phil. Had some wine—Phil has an 
8 year old looking like a 20 year old hooker, 
false teeth, hair & tan—& 2,000 dresses 
sick—

Friday—Feb-17
Had fun at Eddie's—
gave Karen her tiny bracelet 
again—didn't cry me—left $1.75 tip. 
Sat at end of the bar to get away 
from Krazy—moved up after Clan got 
there, met a cute girl named Renee—
she met a cute guy named Ric—got home 
packed by climbing—now Josh says he 
filled up his car & table so I have 
to get my own table—what OK, one 
by the bed—need to buy some 
balloons—
Got 2 balloons—& 
2 feet of pipe!—He let me get him 
one 5 so I'm made /5/7`,"2006a_00064":`good - since I've spent £17 - but I bought a really nice blue carpet for £5 & a nice little table for £2 & Sheila came down & helped me put it down in the front room - really looks nice - it's 12x8! my new little one in the living room - poor old guy might not have sold any furniture or much else - I'm getting sleepy - I'll just cover up my head & take a nap.

I did - then brought them in & went to Jollimors - they were so busy I had to sit inside - got a ham & beer - when a chair opened outside I asked them to get rest of lunch & sloppy bag & bring me another beer. But - they threw it out so made me another one - but they gave me £4 too much - should have been 9 or 10 - £14 - oh well - but it still makes me lonely to see all those people together & dates & families - oh well - came on home - finished my book - going to clean house a little & washes etc.`,"2006a_00065":`Sunday Feb 19

Up at 5:30 — as soon as it's light I put my head back out today — the Spa at 10:30 — home & eat & nap & then the library & maybe Eddie's or not — if I can get some good movie — I still have about $84 — need ear drops — bread — milk & buttermilk.

6:45 — waiting for the paper — it's finally here.

Cat got out again! Just pushed away new screen — & than it all covered up now — looks awful. So go to the store — buy bread & milk.

5:30 — had a nice nap — got bread & buttermilk — also my favorite shrimp混凝土 — went to library & got 5 movies — then to Eddie's — wished Ozzie & his girl friend — gave her my bracelet — wished her best & fuzzy after I helped him a couple of times.`,"2006a_00066":`Anyway—fun—lots of stupid questions about the car races—Brody did win that—nuts—anyway came home & fixed my shrimp stuff & watched a good odd movie "How to Kill Your Neighbors Dog"—Benneth Brendan—funny too—talked to Brian—in Seattle—didn't get in—& now will be back on the 3rd—

Monday—Feb 20

Up at 6:20—did some work around drawers etc—the closet in the back porch—watching "Desperate Housewives"—to a hot. At 7 mopped—went to spa—terrible deal—those 3 gals—one high pitched voice never quits talking—and drove us all out—I wish I'd asked her when she came—so that I don't have to.

AND—a crazy deal at CVS when I went back to get my ear drops—she said I couldn't get until tomorrow—if I could get them they would cost $85.00—only`,"2006a_00067":`98 tomorrow. Well why didn't she tell me this morning? I better be able to get it tomorrow! I caught Kitty trying to get out again!

Tue - Feb 21

No drinking yet. Good girl (according to my dopey scale) I lost 3 lbs yet! Anyway my money is better - what about my hair? It's terrible! Ate oatmeal-skipped bread - low cal TV - going swimming at 8:15 - then I'll pick up ear drops.

Had good quiet swim. Ate lunch - watched YAR - napped - going to watch a baked potato movie on DVD - already saw it - chicken so came out & read - now ate spinach supper -

Wed - Feb 22

Day started out Super! Sheila came by gave me 20¢ & darling pic of loyalt - in an alligator suit with a bone in his hand smiling. Just adorable - I'm sending it to magazine for sure! Also My Invitation!`,"2006a_00069":`I need some envelopes - I stationary, thing to open at 11:30 - may get them at Walmart or drug store - waiting for R. to call but she may have had to go to eye Dr. called - was just leaving. Will call back. I went downtown got envelopes and writing pad & set Dr. a letter - asking for my blood test results. Mailed - watching a show about Heidi Fleiss - "Hollywood Babylon". A slut - liked money & motorcycles.

Had dinner nap - watching TV then sleep - Hope "Gabby" isn't there - if she is I'll find out her hours she comes.

Had nice swim - no "gabby" - stopped at Koch & Harry & got salad stuff fruit mix & tomatoes. It's 3:00 - till bill $8.32

Long day - 6:00 now.

**Thur - Oct 23**

Up at 6:10 - good - 7:30 time for R. I thought she said she'd call last night - she got busy I guess`,"2006a_00070":`Anyway her second op. is in 2 weeks—
Cheap skate Emil doesn't want R to drive
their car until it's fixed which he is
afraid will "cost too much"—but he is
driving to the Vets today; "a way to control
R?"—Not sure what to do today—
Maybe spo—maybe Eddie—wine & coffee
went down—got oatmeal laundry soap
and wine—gotta have wine—wine—
Don't feel like swimming or doing wash—
No motivation—He—watching "Rockford
Files"—always cute—Think I'll eat,
ate & napped—I was going to Eddie
but got sick at my stomach? Probably
that lettuce salad. Eating crackers. It's
raining—watching funny "cops" on goofy
things actors do—their flops fights etc.—
funny!—Taped supper—shrimp & vegt—feel
better—also glass of wine. Been out of Eddie
a week Sunday—Miss some of them.`,"2006a_00071":`Sat. Feb 25  
Not a bad day - up at 6 -  
did a wash - mopped etc -  
spent quite awhile at Alamo - maybe  
then to Eddie's - had 2 beers  
played 3 games - won 2  
talked to Raymond - spent all my money -  
Came  
home & Jane had called. Called her  
back & jabbed a lot - she's going to  
California for 2 weeks - told her wedding  
was coming up & getting  
watching a super show "Dinosaur"  
with Cuba Gooding Jr & another Hopkins  
about an inmate  
loved & worked  
supposedly crazy - was  
with gorillas & the  
trees & got him out! And almost  
does but he escapes - ends good!

Sunday - Feb 26  
Up at 5:30 - not bad.  
a rainy Thursday night & warm  
though. Decided to cook pot my  
chicken today. R isn't calling until  
8 now. Good - I can get paper read.  
May swim today - not sure -`,"2006a_00072":`nothing else to do anyway. Read my book watching a funny "Coach" with Tim Conway & a scream! R called at 8 - what to do? - may clean up closet. Had good swim all by myself at 10 till 1 - came home & ate some chicken & finished the wine - could get some on my card - have $7.95 in there, Wino! I went down & got a $6.09 bottle of wine so have $1.86 in my account - Ha -

Feb 27

Monday - Up at 5:20 - not bad - laid awake trying to decide if to go to the office or not about 1606 & think I will though - my ear feels totally well. Watching an old "Lost World" - I've seen them all 2 or 3 times - 9:15 - finished my book - walked - my back started hurting & my neck - took pills for pain (case) no money today that's OK.

Hopped - watched YTR - then went to 1606 again - no answer - so I went to office she didn't live there last year she is in the hospital - So - she thanked me for`,"2006a_00073":`being concerned.— So I went to our library & got out 4 good books—one by Block—(may have read it but hope not)—Read it nuts!

Feb. Feb. 28 Going up to see this morning & get them (money?) but at least I can cash my check today this aft. And will go to Eddie's—Have wine—
3.75 $1—tip—for 2 if she chooses 5) any
1.50 way she missed it. I have had a
food—lonely 5 days—I'd like to have
everyone come down—There who will be here—
Sheila & Mike
Denis April Molly
Sharon Michelle Connor Collin.
Brian
Mike & Mary
me
Ashley & Leon

Here people—I'd like to have them all
& then maybe go to Eddie's for
food—?
I went to Sheila's at 10`,"2006a_00074":`and glad I did—she just gave me $10 so
I got my pilose—some wine and hamburger
& burns—came home & made a hash &c
like an idiot put onions on it—got
terrible heart burn—took another pilose
& sat up instead of laying down—feel
some better—watching YAK—a tear jiker
John is going off to jail—He is a good actor
I'm now watching "Family Feud" think I'll
go to Eddie's anyway—at 3:30 or 4—
just called Karen & said I was coming
down—around 4—put my hair up, still
feel lousy—

Sheila said most everybody would only
be here Sat & Sun & go back Mon.—so getting
everyone here is probably out—well—I won't
have to clean house—ha—
At 2:30 went to Bank & cashed check—then
to Eddie—a glass of wine—burned my gut so
just had one—played the game—Rosy didn't talk
to me again—good—but cute—Joe was there &
quite witty & funny—Oh well—
Susan there too,`,"2006a_00075":`Came home—to gro store—rice—
cottage cheese & buttermilk.

Wed March 1st

Up at 5:45—I will have Sheila call me when Denis gets there. I forgot what Leone last name was. It's Lopez—so Leon Lopez—easy to remember. Anything an exciting 5 days ahead.—Super! I haven't gotten Ashley anything yet—May wait until I see all she gets. I'm leaning toward bright colored set of 4 dishes—cups—from Pier One?

7:40—Washed my hair + put up—
Did dishes—waiting for & to call—my back has been terrible—

Had a nice gab with R.—At 5:20
Had quite an aft! Brian called at
12:20—Kent, Fred & I went up—So
good to see Denis—all shaved
nude—he gave me a huge hug & kiss.
The rest of the aft was a mix—mash—
Mary & April went to shop—we read
magazines—Poor Denis was so`,"2006a_00076":`sleepy I told him to go nap - he did -
Mike F. left so I decided to go buy
some wine - found some for $3.59! - got 2 of
them - after one at Sheila's, Mike L, Mike F &
Denis went swimming - we watched "WAR" -
Sheila gave me some food - 5 great London
Broil" meat - other stuff - super - I only
have 10# for tomorrow. OK, have plenty
of food & wine but low on gas.

Thur - March 2
Up at 6:10 - what help
today tired - I hope Denis comes down -
maybe all 3 of them - Clearwater Beach?
Eddie? 15 to 8 - 8 - time for R. to call -
where is she? She called - told her everything -
we had lots of laughs - Better get
dressed - I have 10# - probably need gas -
called St. at 10 - Denis & Brian in the
back - drinking coffee - told St. to tell them I'd like
them to come down - After I took all my pills
& felt sick to the stomach - ate toast & cottage
cheese - feel better. Boys are probably coming down,
watching Rockford.`,"2006a_00077":"2:30 - Boys here at 11 - had a wonderful afternoon, asked if they wanted to go to Beach - Mike said Eddie so we had a great time playing the game. I actually won 2 - Denis the rest - Brian once - we went out & had one more coffee & a steak philly sandwich. I was going to bring home but Denis asked for it. Ha! They dropped me off at 2:30 - R's present was there for Ashley very pretty a neat photo album from Hallmark - I'm watching YAR - pretty good - taking a nap after this - I can't remember the code I need to ring to get my messages - YAR over - nap time - found the code in a virgin letter - Denis brought me some wonderful Beethoven piano pieces. About 10 classics!","2006a_00078":`Friday March 3

Up at 4:45—finally
light I'll go get gas & I can get shopping
done at Wal Mart with my card. Good—then
after I get all my money out of bank—
Stupid bank!—a $2 overdraft
because I was minus $160 or some
some deal—ye Gods!—NEVER AGAIN—
I just got out $1,000 + wrote money
orders. I have $200 left—oh well—
ate garlic shrimp pasta & had wine, took
a good nap.

2:15—just called—Shawn just got
there so—let's go up at 3—

Sat. March 4

First person I saw at Sh.
was Leon—he looked so handsome—he
lost 50 pounds—Connor is really tall and
funny but Collin is a mess. Boxy and
to himself—& still really jealous of Connor.
Michelle was very friendly and gave me a big
hug. So dramatic though—& stiff says
"there you go" about everything. Jim was
trying to get Brian to get him a bachelor`,"2006a_00079":`party started. Instead Brian had a beer! gave me his car keys to keep - Leon had his jet ski boat there & took the boys out. Corner fell in & he - They (all but Brent & April) went on a "beer run" & to get groceries were gone 3 hours. Sheila started making hamburgers but I left - getting dark. What a mob! - wonderful!

Big news is Cat is gone! - I can't figure out where he got to - I have the back door open & lit on back porch when it's light out. I'll go looking for him. Pokey. Getting hair fixed at 10.

Drove around looking for Cat - no luck - also asked "John" (tricycle man) to watch out for him & think someone has Kitty - going to put up notice in campground.

My hair looks gorgeous! He took care of each twist & turn lots of time. Name is Reuben - he owns the place in a young Porto Rican.`,"2006a_00080":`(probably gay) only charged $15 - I paid $20 - really luck good - Hope it lasts well - mopped & then went to
she, at 3 - all the girls were out shopping,
they didn't get back until 5! - I was pretty
upset and when she said
"It's all about you isn't it?" I was really
dumbfounded - but then later - a real
shock - Physiss was standing there -
ye gods - shell push into anything of our
family - of course I recovered & had to be
nice. She left to go get Molly - then
LeeAnn brought in Wyatt - what a
doll he is. Once he found this mag rock
& drugged it across the room & then
pulled it up and looked so
proud of
himself - Ha - he has a little tuxedo to
wear - got some pics with kids - I
came home at 6 - NO CAI - Everyone said
he'll come back - ?? not sure`,"2006a_00081":`March 5 - 2006

- Wedding Day -

Finally - Hallelujah! My hair was really bushy when I got up. Hope it will go down. Hope so. My bills are all paid - still shocked about Phyllis + Sheila's remark. Oh well - she's under lots of pressure. Tomorrow things will be back to normal - I hope.

No Kitty - nuts - It's cold out too. 10:30 - went down to J&J store - got Kleenex + black nylons - groc at Save A Lot -

Brian called and wondered if I wanted to come up - I said NO. He could get me at 5:30 - So - napped - made some beads - made coffee + tea next - then got ready - I decided to wear little pink blouse + black slacks (but dress just wasn't me)`,"2006a_00082":`Almost 4 - I'm getting antsy - had a good shower - applied cold cream on my face - cleaned teeth - etc.

Monday March 6

The wedding was FABULOUS - Several good things happened. Michelle & I got closer (because of Physics) We both can't stand her & she told me a shocker! - Shawn went to bed with her too! - Before he even met Michelle! What a slut! - & she was all over at the wedding "Helping out" - And Mike P. & I got closer - Maria had us take a pic - I said "I guess we can get that close without killing each other" - He put his arm around me and said "you know I love you Mary"! after all you gave me skills - I said that night - everyone was taking pictures I'm taking my pics up to Wal-Mart or get faster (but cost more) at CVS.

Cat is Back!`,"2006a_00083":`John (tricycle man) knocked on the door & said he saw Kitty run in back of my house—so I got dressed & opened back door & in he ran! Looks tired & scared & has burrs in him. He drank a lot & ate some. He was gone 3 minutes! So he loved to be here—He's sleeping in the closet right now.

Mike & Mary & Denis came down—they got stuff they'd left here to store. We all talked & I called Ruth & told her they were coming over tomorrow—Mike put my clothes out—they left & kissed them all goodbye. Almost 7 & I'm really sleepy. Watching a funny Raymond—

I went to Edgie's—played alone 3 games—then Wisher came in & we had fun playing. Then I came home.`,"2006a_00084":`Well Care just called & said I might be eligible for $80 more a month! They will be calling soon.

Tuesday - March 7

Just talked to R. It's 8:20 - told her I mailed pics - going to Spa today - and call about phone work - volunteer work - read paper - Sent volunteer letter in - went to J&J store - got a neat pic frame - plastic 3 frames for pics, got baby & Mike in there - also a photo album - put all new pics in it of wedding etc. Then at Belles - found a bathing suit for $9.00, but after all discounts $2.15! - Ha my lucky day - Cat just let me put collar on!! - Maybe I better buy a lottery ticket! Had good swim at Spa - 6:00 - had fun at Eddie's - won first 2 games - Azgie came in & sat by me we talked - he's still in love - Ha - Had 3 beers - Karen cheg for 2 - $7.00 - low on gas - too`,"2006a_00085":`Came home - baked pots, Lima beans - and London Broil - really good - Cat keeps sneezing & "jerking" - hope he hasn't got something awful.

Wed - March 8

Up at 5:35 - Cat seems to be better - he isn't jerking - I could barely worry about rabbits. But!

No Ruthie this morning.

Maybe Mike took them to breakfast.

9:15 + still no R. - Hope nothing happened -

Well - I forgot this was her day to get operated on at 12:30 -

I just had an hour nap. Cat has quit jerking & sneezing - She's asleep on the back porch -

Went to Jolly Mons - sat outside,

read - 2 beers - then Eddie - if all people "Ass" (from Cricketeers) in there,

hope they don't start coming in.

"Climb" (that guy I used to get)

Lights (verbal) both gave me lots of debt on Cricks - everyone is leaving`,"2006a_00086":`prices are raised—Babe wife never comes in anymore—Karika only after 4—Paul hardly ever—they are going next door to Leo's—beer (tiny) are $1.03.

**Thursday March 9.**

At 5:30—Stiff have $1.20 but it has to last at least until the 10th—next week ear or 20$—today swim (after YAR) get coffee at "Salit" and wine in the cig. store.

Went to Wool Mart & got coffee & eating backs & to wine store—$2 per 6$—so I got 4—But won't leave me alone—Always putting his paw on my face—Made 2 peson earnings.

12:35—ate lunch—(ribbet puts wine)

napped—11 to 12:30—watching yte—then Jill swim & Eddie—

What a day!—Left Spa at 3 & got stopped by a cop!—Going to fast in a school zone—25 m 15$—I wasn't scared at all—he just gave me a warning ticket—Had a ball at Eddie's.`,"2006a_00087":`Thanks to Marty & Joe - Marty gave me beer & scratched off ticket. Afterward going home car conked out! On Dan Christopher - this really great gal "Malorie" asked me if I'd want help to move the car over to in front of these cops & said I'd really appreciate it if they pushed me = 4 or 5 other guys/just talked to Mike - well do it but (if that's OK) so I called "malorie" & asked finding out - what a day! So I'm stuck here tomorrow - no problem except - & need my pills.

Friday - March 10 was off today Mike said she & help let her handle it. Glad she is off. What's with my car? Hope it's not out of oil. Probably the water pump - what if it had conked out on 19? - Wow - 8:45 - Sheila called - has to get tag on Mike's car renewed & then find`,"2006a_00088":`out her auto mechanics address. Then will get me and see where the car is - Sheila said "my poor bank account" - life car?

10:00 - I'm dressed & ready to go - Sheila got here & we went over to the car - It started right up and I drove it home. They swept door opened hood - no water - they are pretty sure its getting over heated. So we put lots of water in & I drove up in Walmart - then she tried to drive it home & I followed in her Van but it cooked out on the block before 19-30 - we went to her house & called tow - then went to Old Chicago and had a super hamburger much & cheese Cole slaw - then the nightmare! An hour waiting in the car for the tow - it was late - Finally got there - she brought me home - Watching TV - going to sleep at 3:15`,"2006a_00089":`Napped until 6:15 -

Sat March 11

Got up & had a message left by Sheila to call her (at 3:15) I was asleep and didn't get the message until this morning - Stupid phone.

So now it's 7:30 - will call her at 9 if she hasn't called me. Watching a hilarious "Monk" about dentists and murder.

Called Sheila. She needs car at least all weekend - Rita - told her I need stamps and pills - watching a good "House" they are always good - Going to be a long day, at least I have plenty of wine.

At 11 ate lunch had some wine - at 11:20 lied down - I talked to Sheila & told her I needed my pills - so far no one here but I'm watching a good movie with Nicholas Cage - about the Italian Street war. - Sort of a comedy, more of a tragedy but ends OK.`,"2006a_00090":`Sunday - March 12

No car! Decided to take cab to + from work office - get oatmeal, bananas, apples & egg-fu yong at Chinese store - more time for tomorrow, & need to call + cancel errand. It's in the morning tomorrow! Slept until 6:00 - great - sure miss the car! No paper yet - nuts -

Read the paper - did dishes. Guess I'll make some beets?

1:20 - well - got a cab + went to drug + grocery store - finally got my ear drops - wine (for tomorrow) tomatoes, shrimp dinner + oatmeal. 6¢ each way - really $4.50 + 3.75 + tip. Came home - had a short nap - watching TV about tornadoes. - & think I'll make some beets. Also call Molly - talked to Elvis - Cancelled Adkins apt. + - watching Bath - George Strait. Cut on lap.

Fished shrimp + noodles -

5:30 - this day wait and! - watching a comedy "Jane Doe" at 8 going to bed.

I knew the mystery right away`,"2006a_00091":`and a stupid puzzle they gave,
watching a sand castle sculpt
contest. Then they blow up the
lovers. Another hour I can go to
bed!

I'm Pleased!!

Cat got out again! - I'm
just leaving the screen open
lit on & not telling anyone - just
decide he'll be back. He moved the
Christmas tree & blanket aside - there
was another cat here outside earlier

Monday - March 13 Hallelujah -

Monday - no car & no cat.
I guess Mike will bring my car
down after work - Hope so need
to do a wash - taped "Desperate Housewife"
sticker on.

My inner clock is right on the
button & up at 6 - eat at 10 - nap at
11 - up at 12:30 - for JAR - after that`,"2006a_00092":`I don't know - I may call Sheila & see if someone is getting my car today - after 4/18
no car yet -

It's 4:20 - called Sheila - no word from her - there is a gorgeous tree across the street - like orchids - pale purple -
I HATE being without a car AND not knowing where cat is. Not a good day -
I'm sure they will be home some time tonite -

Car not ready until tomorrow -
Shit! - hole in the radiator - no antifreeze in car - major tune up needed - Could have been worse I guess. Almost 5 - maybe I'll take a cab to give store tomorrow?

I am really down about no car tall.
Only one more day & then my car!

March 17

Up at 6:08 - because
stayed up until 8:30 I guess. NO CAR
NO CAT - Nuts - will take a cab down at
11 - get a book of stamps & wine - birthday card for
Denis & April - wait until I can get at
card shop tomorrow.`,"2006a_00093":`Tell R - mammogram - no car - moved chair out - corvette no anti freeze?
Get tonite - taking statin pill? I flumped over my - talked to R - she had to go -
Dearborn - Ha - called cab - herein 10 min. 10$ round trip to Winn Dixie - I got stamps chipped wini - just a wino who cares?

Went on back porch to look for magnifying glass & there was 60$ under the bowl on the back porch - I guess Sheila was up early - my door locked me car! I'm giving it back to them. I called & told her I have 30$ & get $20 on 16 from Denia & want to give it back.

It was so odd - the kids brought my car up at 6:00 - Sheila didn't leave the 60$ - gave it to her anyway - Called Denia out him - Called Mary & Mike - she did it! So sweet! I also tried to find 'Mitzie' but no one knew where.`,"2006a_00094":`she lived so I came home, watching old TV shows. So glad to have my car—tomorrow I'll go to Eddie's—
a funny Raymond—now "family
friend then kid—

Wed. March 15

Up at 4:45—povesh—
But I want to go to the Spa—14 store I
S.A.L.—definitely
thrift shop—St Patty shirt—or not—
have $8 still a lot
got up NO YET—my VCR acting nutty—
& unplugged it said no program entered!
so—I didn't see it at all! NUTS—just my
hair up & I'll get ready for Eddie's—I
went to the bank—I keep getting 32¢
overdrafts every 7 days—already owe
$174! Shirt—came home & tried to
cancel on phone—I had to write so I did—
also tried to call Joe, etc.—also have
to write them so I did—what a day!
well anyway had a ball at Eddie's—
a young guy named Frank played the piano
but kept going out to smoke so I beat him`,"2006a_00095":`I won 3 games but "war" + a nice girl "Blonde Art - Dave Karen 2 for 10 cents - she didn't change me (should have been 10¢) I made her take a $5 - so much fun! Made baked pot, fish & corn - watching a goofy "Raymond"

Thur. March 16th - Days going fast - I'm skipping Eddie today - will go to Spa instead - save my money for tomorrow - St. Patty's Day

Big News! Cat's back? Gone to Days tired but not all that hungry. Ruth told me you was so good yet. So I woke up & ran out to see if it wasn't on - 4D basketball! -

I went to Ace - first got gas then little fences for the back yard fence cat in. Out of money now - may go home - decided to take it easy 'Back hurts!'`,"2006a_00096":`Waiting for mail man—watching family feed over now—Making eggs on toast for supper.

Mail was bad for me—Well-Care said "NO" on the Walk-in Dr. Oh well—+ from Vets Dept—cat needs 2 year shot—$20—I will next month. Need a cat carrier—

Friday March 17—St. Patrick's Day

Up at 4:23 but back to bed until 6. It's cloudy out & no paper yet. Cat was in & out of bed with me all night. He needs flu shot & exam. More money & may skip exam.

What a joke! Went up to Club House for breakfast. Brochure said at 1:00—but the changed it to 1:30—so we sat and waited until 1:30—some fat guy got into it & left—we were all grumbling—I thought it all hilarious! Funny on TV—I got mushrooms, rolls & a good looking pastry. But with whipped cream—any good? gotta bite probably kill me—&—going to bar at`,"2006a_00097":`3 - got $20 out - it says $50 balance
?? great - there's some I can get the
27th -

Sat - March 18
Another weekend -
Took up first at 4:23
Jack until 6:15 - then at Eddie's -
helped a new guy start Trivia - Boot
Crazy - Booked a 1/4/12 & score the other
day - pretty smart guy - no Eddie's today
I went to Spa - good swim - no one
in! - stopped at Jack & Harry got wine,
fixed lunch & watched "Chicken Run" so
funny - came in front room gal next
door asked if I could turn them up to
Club House - a visitor has M.S. I told them
just take the car - I'm not going anywhere,
so - made Bonnie points - anyway - she
half looked - Don't care -

Sunday March 19
Trip at 6:15 - not
bad. Going to swim
again, I have 2 movies to see - day`,"2006a_00098":`should go by OK. May go read on the
Chesapeake.

Watched "Waking Ned Devine" - so
cute - English. Bought a lottery ticket,
took a nap & then (damn) went to Eddie's.
Forgot him was damn car races.
Played against 2 other people, of course
lost - I was better than all along the
way, gone until the last 2 questions.
Anyway - drinks are only $1.75 on Sun.
But Tim only chipped for 3 - left him a 2
tip & came home - John called to tell
me it was Russell's birthday, we
gulled awhile & I called him - not home left
a message - ate a grilled cheese & some
pot chips -

Monday March 20
Up at 6:00
Taped "Desperate Housewives" good. It is funny
and always weird - I need a few things
at the store - little bulbs Creamora tomato
Shelley's operation is held. Need to get
her something - a little animal figure`,"2006a_00099":`Watching Fred - I got a stupid thing from the bank - overdraft $110 now. He wrote the bank (in Orlando) + told them I quit my acct.

Decided to call Joe Joe & get his sent here - a 1/2 hour of stupid "Automatic voice" answered 10 questions and then turned me over to a person. Ended up though - the gal said "April's check will go to the bank." I said "Oh no - closed out that account?" so she said we'll mail it to your home then. Hooray.

Had such a ball at Eddie's! That Marty + Aggie had me going - I wished - had 4 beers. Karen just chy'd me $250 - gave her 5-

Tue-March 21 Up at 5:05 - Joey - Not sure what to do today - Spa? movie? Almost 10 - I'll eat - Went to Winn Dixie Got a bunch (7) of gorgeous pale pink gladiolus - only $3.99 - came home + put them in that vase Sheila made me a long time ago - Also some wine watching`,"2006a_00100":`"Price Is Right" then news then YAR + a map.

Went to the Spa - nice swim - home
Slow in school zone. Home + ate -
watching Dr. Phil - I called Mike -
Sheila is in the mess. Hoop at
McMullen both road. I go up -
Maine Street to Mc B. + take a left.
It's at the top of a hill. I'll go at 10 -
I got my tax for car - $6.10 (due in
May) I was kind of hoping to hear
from the bank -

My darling daughter bought me
a 20! + I was worried about finding
hoop tomorrow - she said wait until
then + Mike will get me.

Cat is gone - again) pushed
out out the blanket screen - NUTS -
Sheila called him a part time cat -
well - I'm not getting his shots or
exam!`,"2006a_00101":`Wed. March 22

Cat came back after 2 hours!

Operation day today! Sure be glad when that's over! OK! Up at 5:30 - going to see how much bricks cost at Ace - I'll need that porch this spring - put the bricks inside I guess -

I went to Ace Hardware & got heavy "logs" 16 in., 1.50 each - & got 4 came home - put them up. Cat won't even get close to them - so - I may have outwitted him? Fried pot salad & fried chicken putty.

I called the Hope - Got Meese Deveda first - finally Countryside (McMullen) op room -
It went very well - gave me her room no.
but she is still in recovery - then later Mike called me - acted like I didn't know! He's picking me up tomorrow around 4 - So good -

Had fun at Eddie's - wished it was a goofy guy & his girlfriend. She won one "wisher" was funny - he`,"2006a_00102":`was a postmaster & apparently an important man in Demo party. Know he was in Oval Office with Clinton & said he was so charismatic everyone loved him - Had 4 beers - Karen said 2# - Ha! - gave her 5 - filled string pot salad & Lima beans - good - typed "Lost" -

Had fun at Eddie's - with wishes (said this) & outwitted Kitty with those cement dogs - Denis called me & I called back - Molly & her boyfriend were taking him out to dinner - said he was getting up as "montage" of the wedding with Brian on there for Sheila.

**Thur - March 23**

Up at 6 - today - did wash - spa TV - put up hair to see Sheila - home - spent no money hopefully

Did a wash - ate - watching "Rockford Files" - a nap - up & HR then put up my hair up + "Family Tied" & then Mike should be`,"2006a_00103":`Here. Had a nice nap, when I lay down at 11 & wake up at 12:30—works good! After JHR mail comes. & put my hair up on curlers—All ready—watching a guy tell us how to get our metabolism down—and of course lose weight. I taped it—well went to see Sheila. Mike picked me up at 4—She was just as I thought—"I'm OK," don't need anything etc. But she hasn't had anything to eat for 2 days now—Dr. had just said she could eat when she got sick & moped all over—so—no food—she got up & walked slowly to the toilet—at first she was on a morphine drip—she controlled her pain—they took it off & she's on Percodan—pills—they also rather block me—she goes home Sat. told Mike to call—I'll go up Mon. for sure.`,"2006a_00104":`Friday - March 24

Anyway - didn't get up until 6:30 - 
great - cat was on the porch all night. 
Guess he's given up - I'm down to one pillowcase 
half-full of used motor gas - Almost time for 
Rite Aid - guess I'll hit Eddie's this after-
noon - had short nap - watching YATR -
something always happens on Friday -
not much happened today - & got a 
musty letter from Sun Trust saying if 
I didn't pay $17 right away they would 
close out my account - HA! just what I 
want, so close it! - guess all they can 
do is threaten me with a bad report and 
no more bank accounts - HA -

6:30 - Had a blast at Eddie's -
Especially Joe was cute & bought me a 
drink - played about 6 games almost &
won them all - then an older 
married couple came in - no wait - Karen 
would only take $50 - gave me back 
a 5$ tip - paid make earrings`,"2006a_00105":`Sat - March 26

Up at 6:35! Almost 8
now - made oatmeal - not a bad
day - made good spaghetti - had a nap
at 11 - went to Spa at 1:30 - then got beads
for Karen - more wine - home - made some
really pretty long blue beads & earrings for
Karen on the Island of Can Cien -
The sausage & gravy was too spicy &
I had too much wine so felt lousy when
I went to bed & have to kick this "bottle
a day" wine habit. 1/2 glass at lunch + 1/2
at supper - then maybe buttermilk -
Bettie called - said she had acid
stomach last night - asked me what's good to eat -
I said "baked potatoes & buttermilk" - need to put
up my hair -
Went to She. at 10 - at least I
could put a sink full of dirty
dishes in the dish washer & also
got 2 good meals & some time -
been watching TV all day.`,"2006a_00106":`Monday - March 27

All night & woke up on the hour to go to the toilet — had terrible back ache every time I coughed — eyes hurt finally went to Dr. Sheila was nice for a change — Called the drug store — Walgreens on Main & Kane — I went to a wrong area as sick as I was — finally got at — FREG — great — bought some Tylenol — came home & slept from 11 to 12:30 — kept watching Y&R

Really sick all day — bed at 7:30

Tuesday - March 28

Just was awful — I think I feel better — made coffee — asked toast — haven't eaten much — or gone to the toilet for 3 days — Around 9 I started feeling enough better to drive down to Happy Foods — Their prices are stupid — way too high — But I needed milk & TV dinners — Bread — $1.50!

Had a nap — watched Y&R — Ruthie & I gabbled Then Sheila called me twice but once I was asleep & once couldn't get across the room in time We talked about Y&R — her op. etc. etc.`,"2006a_00107":`Wed - March 29
I have felt lousy all morning - took medicine - yet cat got out but wanted back in - something scared him. He's left foot hurts AND there is a "5" written inside his ear - I know it wasn't there before - He is almost 10 years old! Had funny talk with R about our lousy houses in our past etc.
5:30 - Feeling some better - since he's been eating maybe

Thur - March 30
Felt so sick that I made myself get up at 5:00 - still sick but made coffee & took my pilose. Feel better & watching "Lost" - feel sick again - W&T - Cat pushing on me - Brian will be here either Fri or Sat - mom - here all weekend - also doc. (after 1/2 hour staring computerized questions) finally said out it will be mailed here (to my address) Good! - My equilibrium is worse - 12:10 - almost time for Y&R - Then nap time - Answered crazy thank letter & said "I asked you to cancel 2 weeks ago! Why don't you?"`,"2006a_00108":`5:45 - watching TV - turned it off - bed at 8 -

Friday - March 31

Still weak & dizzy
back pain - I'm in a mess - talked to
going to call Dr. Sheila & try to get appointment -
call at 9:00 - Well - glad I didn't call -
want to store mostly for cat litter - made it
in the corner on plastic papers.
But Sheila called - had her stitches out &
can drive. Back to work in a month -
Brian can sleep there on his air
mattress - She told me she's pretty
sure I have what Nick & Maria
had - a virus that antibiotics won't
help. Just have to wear it down. Took Nick
7 days! - ½ of mine should be over. Going to
try.

Sat - April Fool's Day

Guess I feel better,
tried to fix cats "get away" hole - I
have to call Vet today and make appt.
Also - call Zenith - this crazy TV
keeps having a big black square pop up
about every 2 min. on the bottom of the`,"2006a_00109":`screen, if I push "sound" button it goes off.

Waiting for Brian. He might be late. Well
luckily Sheila came with him & she figured
it out - I helped because I said I thought it
was blocking - she turned on menu found
blocking used < > small D's and just "block"
& hit "off" - So great! - Then we went to
beef O'Brady's - I had wine & Reuben
sandwich. Really good - took a good nap - was
going to wash my hair & go to Eddie's -
just don't feel like it! - Brian came back
with good supper for us - Chinese - lots left-
played "Upward" to beat again, 3 times in a
row! - Only by about 5 or 6 - Slept good-
times changed to hour later overnight - Need to
change clocks

Sunday - April 2
Slept late & also
but remote doesn't work - WVT5 - I made
French toast for breakfast - it was good - 5 grain
bread. - Need to mail 2 letters - Brian is
doing his washing - Maybe we'll go to Honeymoon
Island & eat.`,"2006a_00110":`We went to Hon. Island but Brian refused to play the game there! There was only one couple there but he said "NO" - So & had a hamburger & 2 beers - then we went up further found a table - can't believe it but I beat him again! 4 in a row! - Can't hang on - Watching a pretty good Matlock - Brian is at the Book Store - He gave me $6 for April - got some fruit, sleepy pills wine & cookie. We may play another game.

Monday - April 3

Up at 6 & Brian was up
had coffee - read paper - ready to
do a wash. PAY DAY - (I hope) Anyway,
I have to make 2 appointments today - Haven't
Vet, - Did - Vet! - Left mess at Dr. did
wash - Brian took car to put in fluid - checked
water - Good kid. Cat has a glow concert - Has
Good new remote just needed new
batteries! Does everything now! - Picked
up Kent, fried - 2 pieces - only $1 dollar!
Tiring arm & watching Matlock hoping for
midterm`,"2006a_00111":`Good News! J.J., Check here! So F.U. Bank! We ate—$10 watched TV & then napped—went down there it was! Also elec bill—so put my hair up & will go down at 3:30—got money orders—(after a foul up) and went to Eddie—just had so much fun!—won a game—lost 3—but until pie Joe sat by me & we always have fun talking. Also Big Mike—rich Dr. Bill—Cain—wished—but most fun was Joe—let's really click—oh to be 40 again! Joe—As soon as its light—it almost there I'm going to put rent check in the office.

I did & mailed all my bills. Good feeling—cat just sitting out in the back yard looking around—came right in—April 4th—up at 6—& went & mailed checks—washed my hair—put up—she slept again—Got groceries & a cute little fuzzy duck with a vest & bow tie on—only $3.00—will mail to Loyall today—next week for Easter.`,"2006a_00112":`Eating Cheez-It chips & having wine. It's 10—
I hope Dr. Hanson calls with an appointment.
Vet. Calls about trams. I put my hair up.

Dr. called—just left me a democet
prescription. I really want to see him.—I went to
a couple of new T-shirt thrift store by
Crick's or one by Eddie—Y&R on—
Found 3 neat T-shirts & thought they were
$10 or $11 so altogether—they were $26—!
About fell over—one in coral with 4 embroidered
fish on it—one plain gray one a linen yellow
shirt—so cute and obviously
very smart!

Had good later part at Eddie—First
part—Bill & Peggy—Nuts—then Susan
(kind of a "loose" gal moving away soon) always
sits by me but I can't play. Karen tells
everyone about my making her best—! Came
home at 7:30—ate & watching TV
& bed at 8—I took a democet—
Betty sleepy—Raymond (not Peggy) came in
& took my phone number—and his call`,"2006a_00113":`The tomorrow I take me out to breakfast? I do like him though.

**Wed April 5**

Up at 5:45 - 6 now - got House on - d new one - took my Darvocet at 5:30 - with a big piece of toast. Guess my knees felt better this morn.

I am really happy right now - knees bones feel better. We went down & we got lattice work at Lowes - I paid $20 for it - we crammed it in her van. I also got some pottet felantes - purple red (gremmas) and some neat beads - great big tan brown & amber beads in between 5 little brown beads.

Wore my new yellow blouse - had a ball except this bragging smug "Dr" Bill - cocaine addict & no really good license for medicine - anything like "rite-of-passage" - told me a lie isn't appropriate for El Cam - guess that Mexico & told him nuts - I was going to`,"2006a_00114":`wear leis—actually—if I could find a lot of little sombreros I would!

**Thur April 6**

Up at 5:30—coffee toast and devocet. I decided to skip Eddie—go to spa—maybe jellie more. Too much beer at Eddie—(4) and some of wishers—pitchers. I need to not sit further down the bar when Froggy is there.

Bill—

Watching a "Lost"—always exciting. Mostly about Hurley—shot everything in the mind from his "alter ego" a god rescued him and brings him back, then it shows her at the same asylum? 7:30—watching a funny "Raymond" Roberts wedding and all the mess Marie makes (jabbing in the middle) ends cute—she hit in here—may turn on air.

**Friday April 7**

Up at 5—oh well—had coffee toast oatmeal & devocet. Read the paper & etc. 7—I'm going`,"2006a_00115":`Walmart for groceries & maybe towels,
will go after 8 — need to do spa.
1-40 — fresher on then family friend
Eldora
2:30 — This morning cat easily got out
the back porch so I'm not letting him out
on the back porch — Hopefully Mike will
come down tomorrow & fix the lattice.
I'm wearing my gray T-shirt & put silver dots
on it. Cute.

Sat. — April 9
Up at 5 — I don't think
my new sleeping pills work-up 3 times —
I dreamed I won $1 million in a lottery
and had to call R — maybe I'll buy some
Fantasy Five today — Comp. pick — 5
dip ones —

Well — cat is certifiedly NUTS — door
two back porch open all morning & he goes into
the closet! Also just sat at open
screen & then ran back into room.`,"2006a_00116":`pill cat - petromazine
(to be ahead)

Sunday - April 9
Up at 6 - great - today
It's Spa - call Jon - get DVD at
"Hollywood" - non wine? - look in drug store or
ask about get young. - Ruthie called but
my phone wasn't on the base right off
- said we talk later -
I went to Walmart and got 2
gorgeous plants cyclamin - but in the
bird bath soil - beautiful fushia also
Chinese red beads + cat litter + food,
still need wine and olor.

Had a great aft. - napped until 2 -
went to Spa - then Michelle - then
she + got DVD of wedding mostly
boring except boys having a good time
+ a FUNNY Brian dancing like a nut -
ate my new diet - veg + fruit - ate
raw card - grape popp - grape straw - catalogue
until 8 - love 20 pts - had a good
long talk with Jan - loved her
books - so I'll send more - it's almost
9 - going to bed -`,"2006a_00117":`Monday April 10

Already lost a pound—
I'm determined to keep it up! - Up at 5! got
Forgot pills last night at Walgreens also
need more red foods—got bread & bananas!
went to Walgreens for pills—bought cheese & peanuts
and forgot the damn pills—went back.
Eating veggie & fruit—feel full—this may
be great. Vet gave me pills for tranquilizer
but doubt if I get it—watching "Rockford"
then nap.

Good nap—but loud—spa—the
gabber was there—at 2—just counted
out loud—I tried to ignore them. Came home
first went to library & got out 3 books—
Allen is on—she's a nut! and so
funny—6:15—watching news—bed at 8

Tuesday April 11

Cat Shot Day!

Sure glad Sheila is coming down.
She got carrier "expended" & I just
drop him in. Ha—hope it will be that
easy.

Washed & put up my hair—`,"2006a_00118":`Waiting for P to call. Then drop books off at library + mail Jane's cards.

1:00 - getting closer! I'm getting nervous. Sure it will be OK.

4:50 - Back home - poor kitty! I just had it on end + dumped him in - door didn't want to close but finally did. Dr. is so good + so was nurse - she held his neck + massaged it - the shots didn't even really bother him - he felt him all over - looked at teeth + ears - weighed him (18 lbs) + even shaved his butt - he is in great shape - just keep doing what I am doing - got my license + tags too - Poor Sheila!

It cost $100.00! I gave $70 - so she paid 60% - yep!

(Wed - 12) bed until 6 - good - eyes bone - cat under table - ignoring me - Ha - so happy when scale said 178 - went to Jane's - got DNA - fruits + veg, cottage cheese - extra yogurt (low fat) Home + made hard boiled eggs`,"2006a_00119":`Getting hungry—will get my lunch-th-
Ate next—took hour nap—got in Spa
at 12:30—class started at
1:00—home tape had run out—only saw
1/4th of YTR—NUTS—oh well—scale at
Spa said 179 with clothes on—Hooray!—
Feel like I'm on the right road—I'll
drink wine at bar—it's 2:00 "Family Fun"
or Black family is giving stupid answers.
Now another one—I think I've seen
these before—I'll get ready to go at 3—

Had a ball—Krazy & Wisher—I think
he is serious about having sex—not sure what to do
about him?—not sit by him & guess?—He is leaving
for up north soon.—
Ate next—had pain pill—at 8 will
go to bed

Thur—April 13
Got up at 10:30+ again
at 3:45 back to bed until 6—
Taped "last" will watch at 7—
Karen asked me if I was
coming in today? I said yes`,"2006a_00120":`I think she brought me something from Can Can? —
Went at 2 — Aggie & Kraggy — joke about Karen getting married — + house keys, anyway she bought me a darling T-shirt with gecko & watermelon on front + Conran poster — also a cute key chain + stickers with "Bubba Gump Restaurant & Market" on — Aggie bought me a wine — I only had 3 — hope the weight will get from more Aggie (Ron) bought me a wine!

Friday - 14
Up at 4:30 — I decided to try an exercise tape at Hollywood —
and DO IT — every day — I was unhappy about weight 187.5 — MTS — 2 in looking for 177 — then 176 — 175 — since 94
swim after YTR — no classes on aft.
I need to go to Eddie's to wear my shirt out then may stop every day stuff —
took my love potion down to refill — they here to call Dr. — get at store.
Today eat 10:30 — pup on couch
YTR — then swim, home change + Eddie.`,"2006a_00121":`I had fun at Eddie's - had 3 wins - none of our regulars - I won first 4 games - the 2 other guys lost - off - hope I had my own best - + a bonus - sold some new pots tried to get my shoe, but guess I'm still called Walgreens yet - The funny "Raymond"

Sat 15th Up at 6:15 super! - I need a laxative or stool softener - BM is like round marbles - hate that! - She said pain pills do it. Not sure what to do today, forget my bathing suit in car - yuk - Jane called - loved the jewelry - Also waffling about the trip with cruise & told her call & say she can't go - her mom is in bad shape - so said she would

Sunday 16th Easter - big deal! - Haven't heard from Sheila - probably going to eat out or call in - I need groc. Got grocery - Sheila did call - dinner at 2! and poor little thing has her top teeth! Nothing stops`,"2006a_00122":`her! I'm giving her that thing I made. Must just eat little portions—she liked the birds but doesn't have pierced ears—so I gave them to Ashley—they liked them. Of course the food was super—and Sheila's teeth are really pretty & her mouth just a little swollen—she also said Mike was going to have his pulled too—she looked so good—nothing like I did—in 4 weeks her bottom—or was it 4 mo.? Andrew & Tommy & played "Zenga"—fun—Sheila gave us all a cute Easter card with 20 $ in it! What a gal. Mike looks so diff., no beard & must still lecturing everyone on what to do.

Monday 17th

Up at 5:30—still 177.5—
Super—cat being needed again. Just jumped off of my lap—talked to R—
Watching "The Private Honorees"—So
furry—(added to R) did dishes but
I'd go back to Michaela—got 8—
bread & silver ones for carrots/dice around
I am really gauche—but it is`,"2006a_00123":`D. had fun at Eddie's - had 3 wins - none of our regulars - I won first 4 games - the 2 other guys lost - OK - love I had by now vest + a bonus - sold some new pants tried to get my shoe, but guess they never called Walgreens yet - The funny "Raymond"

Sat 15th Up at 6:15 super! - I need a laxative or stool softener - B.M. like round marbles - hate that! - She said pain pills do it, not sure what to do today, forgot my bathing suit in car - yuk - Jane called - loved the jewelry - Also waffling about the trip - crisis & told her call & say she can't go - her mom is in bad shape - so said she won't

Sunday 16th Easter - big deal! - Haven't heard from Sheila - probably going to eat out or call in - I need groceries - Sheila did call - dinner at 2! and poor little thing has her top teeth! Nothing helps`,"2006a_00124":`her! I'm going to try that thing I made. Must just eat little portions—she liked the birds but doesn't have pierced ears—so I gave them to Ashley—they liked them. Of course the food was super—and Sheila's teeth are really pretty & her mouth just a little swollen—she also said Mike was going to have his pulled too—she looked so good—nothing like I did—in 4 weeks her bottom—or was it 4 mo.? Andrew & Tommy & played "Zenga"—fun—Sheila gave us all a cute Easter card with 20 $ in it! What a gal. Mike looks so diff., no beard & must still lecturing everyone on what to do.

Monday 17th Up at 5:30—still 177.5—Super! Cat being needed again. Just jumped off of my lap—talked to R—Watching "The Private Secretary"—So funny—(R) did dishes—at 10:30 went to Michaela—got things—bread & silver ones for earrings—I am really excited—the`,"2006a_00125":`scales at Spa - last week it said 180 today 175 - hope so - Watching E.T.R.

Pretty good

6:00 Had a nap went to Eddie's - Had fun - got some scratch-offs - no deal - goofy "Big Mike" bought some - hit 25 # - didn't buy me a drink or anything - jerk talked to a nice little guy named "Les" - left $4.00 gave Karen 3 scratch-offs as a tip - Neither of us won.

Came home - fixed food - getting used to it - had watermelon for dessert.

**Tuesday April 18**

Up at 6:20 - not bad took sleeping pills at 11 when I woke up watching a goofy movie - can't figure out who is married to who? or having an affair - I read a story about it - they are a bigamist couple & she is insane - ends up with 2 dead guys & her - Really Bad! 10 - watching Brookford Fields pretty cute - I went to your store`,"2006a_00126":`Counsellor, tons, wine + catalogue

Anyway - decided to stay home today -
I called $75 peron. Appointment -
May 4th $55 so 60$.

Sug next door just offered me a couch -
It's not bad looking - I told him to sell it
Sat. for 10$ - Watching "Matlock" - I've
seen it before. Going to watch Y&R +
then nap. Ropped first now Y&R - then
swim - Had a short nap - a good
swim - watching Ellen now - she is
a nut - so much fun!

I had a great talk with Jan - She
did go on the stupid cruise - and said
that Connie really blew up and said
she ruined everything - Jan told her off
though, said last year she asked a fourth
gal about telling her & she needed to be
there for her mother - I told her to never
feel bad about that - I never liked Connie
Connie went out (to bed) with Dan - her
husband - Jan will be down in Jan a few
or sooner - Act or Not - Hope so!`,"2006a_00127":`Wed - April 19

Up at 7:00! Latest I've ever stayed in bed lately & weighed 176.5 - getting down. I guess it's going to the spa everyday! - I'd like to find a funny uplifting little book for Jan.

Went to Publix & got weighed - clothes on but it said 179. Poorly shouldn't have done it. Got Denise's 68¢ - got 10¢ groc. So put it in drawer - at Publix I bought a super spinach quiche - had slice for lunch - baby carrots and cottage cheese also some string beans - I snapped the beans! Am cooking. The quiche was $6.00 but will last at least 4 meals - and was super!

Little by little I'm finding good tasting vegt - etc. Need more fruit.

Today 333 came in on Pk 3 - the same number little Peanuts always played with. But it took another 2 years to come in. Can't think of her nickname - I'm going to watch Y&R then nap then Spa - then maybe`,"2006a_00128":`Eddies - I'm in a good mood - for some reason - I had to look in all my albums (but one) to find "Peanuts" nickname. Completely forgot it.

6:20 - Had a ball at Eddies only got there - Aggie wished Boo & went then call 2 games - lots of sex (not sure) gave Karen $500 - ate quickly - beans & carrots - really good! - I need to swim at Spa in the morning - (traffic terrible) missed today.

Thurs - April 20 - up at 7 again - Great!
Eat in lap - going to Spa after 9th at 1:30 - I need gas & guess - went to Spa at 10:30 - 2 golly old girls finally left - so had a nice swim finally! Homed a good lunch - spinach quiche + broccoli & green beans - cucumber - wine + apple

7:20 - one more N + then bed - I hate to go to bed when its still light out but thats how it goes. Nothing on at 8 -
Tomorrow swim at 10:30 + Eddie around 3:30 - I ate too much quiche - but it was`,"2006a_00129":`so good - got some squeezed wine at the store -
I am a certified "wine-o" I know - so what? -

Friday - April 21
Up at 7:30 - great -
work and shower - talked to R -
Cat is wild - running around like a nut -
It's 9 - I have to go get garbage bags &
clean this house - it's awful - eating my outword -
Ate good lunch - squash, egg,
beans, broccoli - wine - the squeezed
is really good - the little yellow
kind.

Had a ball at Eddies with Joe -
also "Dr." Bill could have commented of
all his charges - came home at 5:00 - watching
TV - "Fox show" - so funny -

Sat April 22
Up at 7 - need to
put jewelry out -
did - no one is coming - the wait
guy went over sold a little - Ha -`,"2006a_00130":`He has a step-exercise little machine & may buy - give him $5.00 for it.

Brian is here for the weekend.

Stayed at Sheila's - beat him at Spalding again! He looked at my car belts & said they were OK. Good - I went to thrift shop by Eddie's - found a great book for Jan - poems & inspiration - also a goofy green monkey - I put a necklace & earrings on it - Funny!

I'll mail it Monday -

Went to Eddie's - 2 wines - Krazy came in - we bought fantasy fires together again - played 3 games - home & napped - then to Spa - scale up there paid & weighed 176! - my scales are goofy - Anyone had got slim -

Sunday - April 23

Up at 7:30 - talked to P. - need to do a wash + vacuum floor - Cat on lap - watching an old "monk" & "house" - saw monk & an old house but I forgot it I wanted to watch`,"2006a_00131":`"Haven't it cut off. Nuts! Went to store - veg., baked beans, tomatoes, pineapple. Came home & ate - some was last night I wrapped jeans back & monkey. Sheila called - it was Leon's birthday she was fixing dinner lunch at 2-8. Went up at 1:30. Brian & I played "Upward" - he beat me! Good food was Cuban - rice & black beans - salad - good ate a little & a slice of birthday cake - Sheila gave Leon $100! What a girl! Played "Up" with Ashley - beat her badly - oh well - home at 5 - TV & bed.

Monday April 24 I have a real genuine mystery on my hands - NO CAT - & couldn't have got out & I'm not even sure he was on the back porch or in my room. Anyways he is nowhere unless under the bed & why hasn't he come out? Guess we'll see. Hope "Repeat H" will watch after I read the paper. It was a repeat - nuts well I solved the mystery - a hole in a new screen! - Its 5 after 11 now`,"2006a_00132":`+ no cat - watching a "Matlock"
I know I've seen but don't really remember. I mailed Jen's packages - my heart keeps started killing me - got store + got eggs + wine. I need to swim - after nap - tried to do cell phone - no soap - had B/P taken + weight - 178 (with clothes on) + OP 142/86 not bad at all! - still so wobbly!

4:00 - I left a message for Lynn since Marcy called & gave me her new phone # so she wasn't home so I left a message + my number. Great to get back together.

What an aft went to Spa at 2:45 - at Tampa. I had a red light + cars kept coming so I couldn't turn. A bull once + then a school bus - so I waited until I got the green - as I turned an old coot drove up next to me + hollered "why didn't you turn?" "why did you wait?" I said "shut up you old coot - did it again + he drove off. I got up`,"2006a_00133":`met him later & he rolled down his window so I put my music up really loud and smiled at him & he drove off. Then of course "old grey bun" was in the pool. Tabby - never again at 3 on Monday - so when I got Lynn's number I was glad - may meet her tomorrow. If she calls, watching a funny Raymond still no cat. - I hope she comes back - I miss her a lot! I think I'll act & if I don't do my cell phone deal,

The April 25 Up at 5:30 - No Cut Lynn didn't call, oh well - maybe this morning - taped some comedies for this AM.

Sheila called - go eat at Shells? I said sure - we got stuck in car with dish - finally on way to Scotti - She had a COB card for free - finally shell found the shells - mailman Bernie? I miss - how I mugged - up - to`,"2006a_00134":`Edithia - played with Grandpa - talked to Raymond & Maggie - came home at 7 - watching C&F -

Wed - April 26

Cat Is Back -

Just came "wearing" in from the back porch - she's full of leaves & little sticks & very nervous - pacing & crying. Sat on my lap - her little feet paws are all dirty.

Decided no booze today, not even wine - and I'm probably going back to my old eating - only stuff street veg.

Feel about half sick at my stomach. Hangover! - anyway ate 1/2 of Sheila's lunch from yest. & hope I'm not getting flu - (I think it's all the shrimp & wine from yest.) Called Jan & left message. I threw up but not much. Still feel icky - made a cheese sandwich. Had a nap. It's 3:20 - I am still sickish nuts - at least I didn't spend any money at all today. Only`,"2006a_00135":`good thing about it. Ellen is on—she is so cute.

**Thur - April 27**

This month almost gone. It is raining hard too—we really need it—F taped "Lost" looks good too. Will watch later—It's 6:00—slept long—need pills—I've been "sickish" all morning. What is wrong? I need a good nap—watched "Lost" some new stuff—new next week.

11:45—Had a really short nap—I thought my watch said 12:30—it said 11:30—so 1/2 hour nap—Oh well—put up my hair—will watch JAR—get dressed—watch "Family Ties"—go to Eddie—3 days until the 1st—I have 33 & left—now—next month a perm of Dr.—Raining again—ate rice eggs, green beans & carrots—wine—felt better but not sure about now. What is it?`,"2006a_00136":`(5:00 PM) Had fun at Eddie—no trivia—it was done—Sat by Rod—really ate guy & crew at Eddie—We had fun getting there. Karen’s friend Susan came in—a real promiscuous gal—hope in bed with everyone—a young one—the came here & ate—Shelia’s old lunch from Sheila—good watching Dr. Phil—and a 700 pd woman!

Friday—April 28

Up at 6—This week start fast—Trying to decide if to have Joe come over this Sat., or not—I won’t have any money. After the cat moved all night I think I will let Joe come up—Hope he’s there tonite (cat bar)—I only have $8.50—Good swim—from 2 to 2:30—then hot tub & Shelly came in—great—moved her—went to Eddie—Straddl (Neil) & I played—also a gal—he lost—I beat & she beat—had 4 wins—Karen & I got all my money—Home & ate—Shelia got my cell phone working but drove her nuts! Getting it in the morning—I AM BROKE`,"2006a_00137":`Sat - April 29

Up at 7 - Pepper talked to P. Called Joe at 8:45 - he's coming up at between 9 & 10 - Home later OK - Emmyje was disappointing - y&R only "Best Writers" - no gala mom, not sure - John called - got the monkey but not the book - tomorrow I would have been Jane's son's birthday (Rodney) - maybe the book will help, waiting for Joe. He got here & wants another full sheet of lattice work - but I went to Sheila & she gave me back my 1/2 rest of it - not sure we can use it? Oh well - had lunch - she left me $30 + my cell phone - got some "the chicken veg pasta deal" (cost of shrimp) good anyway, ad some wine - watching a goofy journey to the center of the earth" - really full of "lizard people" + cliché people - 2 good actors Bryan Brown & Trent Williams - but it is stupid - so I'm just going back - a letter telling me I owe $17 # - wrote them a snarky note - watching 70's show - not sure what to do tomorrow - Spa - ?`,"2006a_00138":`Sunday April 30

Last day of April—stock—can cash my check tomorrow—cat drove me nuts last night. I have to borrow that book today. Thinking about comforter pillows—had a nice shower—spend this morning at library—maybe.

12:30—I was so embarrassed—took the pills to Walgreens & asked to CVS—$30 for a form there—came home & ate—napped for an hour—"Mork" is on—one I've seen before—where they think "Trudy" (his wife) is really not dead—don't remember it really—so I'm watching—it was good—went to the library & found 3 Evonovitch books—love those books—about Stephanie Plum—a sexy bounty hunter—fried eggs & potatoes—I'm sleepy—cat hasn't figured out how to escape—maybe I can sleep tonite—

Monday MAY 1st

Hooray—a new Monday & month—I will cash my check.`,"2006a_00139":`get some gro. Finally had a good
nite sleep, took my sleeping pills when I
went to bed, just ignored the cats meows
+ she didn't do it long. Super
Went to Publix + got ck cashed,
not a problem - then to CVS - they took
my 2 pres. + will fill them by tued - the 30$
it for anything - think I'll get Biloxee though.
10:45 - ate lamb, fried pota. + risotto
Cheese - glass of wine. I'm going back to beer at
Eddies. Watching a good "Rockford" - think $9
nap at 11 - unless "Mattlock" is a new one -
But I'm sort of sleepy now.
I took a nap - watching E+R.
put my hair up - will go to Eddies @ 2 -
I'm going back on beer - can't afford
wine - I'm dressed already - My hair
looks good - real curly
Had fun mostly with Rank -
"Brendy" + Wister. Drank beer - bill was
$4
I have a bet with Brendy. He
said Peter Sciarra was in Simon Simon`,"2006a_00140":`We bet bet $5 I know he wasn't—it was
guy that worried to fat got this lost lots
of weight and lives on Cheers
Gerald M. Hanney
Parker Stevenson

Tue May 2 Up at 5:45—cat a pain again!
Threw him out & shut door. Getting
good today! It's this thing I get my
perm!

Went to save a lot—got sloopy—raisin
bread—catsup—sau sauce—pork steak—frozen
potato crockers (finally) $16.00—& next door—
wine $5.99—only stay home—

12:30—had good nap—watching y+R—
and then going swimming—
I did go swim—it was great
only 2 old gals there—home through 3
child zones—15 mph. & got Brenda
Check book in the mail—from Bradenton Fl.,
guess I'll send them something—payday
tomorrow—Good!`,"2006a_00141":`May

April 3rd (payday) Hooray—up at 7:00! Lots to do today—mostly with money orders. Can't until after mail gets here 1:30—need to wash but no soap & only have 1/8 tank gas—need that for going to Publix—oh well.

Finished my first Ewomatch book—2 to go—it was cute & scary at the end—No mail yet—2:50—NUTS—guess it's a good sign—he's late taking around.

Mailman came at 2—went to Publix—had to talk them into it. Went to Eddie—lots of fun—good Karen that 10$ short—boy what should have—she was 10$ short on her receipt—so glad I paid her—Susan (cute lady) came in—playing next Fri—guess I'll go—talk her necktie & earrings—Krazy playing then girl came in—beat me—NUTS—came home—watching Dr. Phil—I think I need another place to cash 2.5 check—I'll ask twin life & Kant Harry—`,"2006a_00142":`Thursday May 4th

Up at 6:30 - great taking those pills at 1:30 or so keep me until 7 - at 9 (watched House) really good - went to Beauty Parlor - an ordeal rinsed it about 10 min. ha - I am I curly! It's kind of cute though - 65¢ - yikes - I was so hungry - went to groc store got some TV dinner & wine - home and ate watching YAR - I have $280.00 now - bills all paid -
- 33.00 Vick
- 120.00 boys
- 433.00 for rest of month - should be

O.K.

6:00
Went to Eddie "Krazy" said I looked 20 yrs younger with my curly hair - ha did hang out the game - Joe came in - had to have a full piece of lattice - HP Call kids today

Got a letter from the bank - HA - I owe them 120¢ - 32¢ for closing out acct. I won't be able to write checks etc - Big deal - just not going to answer it - Ate TV dinner -`,"2006a_00143":`Watching "Lost" that I taped last night—really shocking! Michael "black guy" shorts 2 people & suppose to get his son back.

Called Sheila & begged her to bring up more lattice. Said she said she would get sometime—so that's OK.

Friday May 5

Weeks flying by—up at 5:40. Lots to do today. Washing getting pills—TV dinner door guard—get back porch fixed—

9:30—Almost too late with the porch—cat out & walked around & then saw him go next door (not idea) & let grass almost get them but he ran back so I came up & got a blanket to throw on him. He ran again but into the house—no more porch for him! or her—

The door thing was 32" nuts—He can leave the door well fit it.

I'm getting hungry.`,"2006a_00144":`ate ham & T.V. dinner - napped - G & R is on - will go to Eddie's at 10:30 - be fun. Normally is - it was a ball - Dr Bill - Eddie & Wisher - he beat me and I threatened to kill him! - Had - Had fun - got home & Sheila had left this big sheet & thought she might. Called & said thanks & I'd pay her this weekend. Joe said he'd be here more like noon - that's OK.

Sat - May 6 - Up at 6:20 - coffee paper & now 8:00 - the cat is driving me nuts wanting out. Finally went in bedroom & shut the door - just called Joe & told him new lattice here - He said "Good" - 11:30 - Joe called - called me "dear" & said he was plugged up with a plumbing job - should he come later or in the morn. I said, "Anytime this aft" - that the cat was driving me nuts - so probably this aft around 1 - Glad he called - I need some kind of dessert.`,"2006a_00145":`6:00 - All done - Joe chgd $40 - gave
him $50 - Ha big spender! - Cat
is pissed off - So she can stay out then
tonite - Work for me all - I'm watching
the Kentucky Derby 132 ND - I tried
Ruthie's secret. Lawyer Ron to win -
She Barbara + Emil in sinister minister -
It is really exciting - R & E horses are
fighting it out -
Ruthie's horse won! So Emil is
taking her to dinner.

Sunday - May 7
Another icky Sunday -
Going to the Spa for sure - maybe the
Chinag (?) No too many people went to Spa
at 12 - home + ate napped - then to
Kmart - got cute little shoes ($5.00) but
need inner soles - + a neat colored
pencil little house paint by number $7.00 - it's
been fun - talked to Jan - Vickers
having a reunion May 19 - not going -
also Brian called - just to check`,"2006a_00146":`W. Writer having another reunion - he's going to maybe Denis. I am watching CST and then bed -

Monday - May 8

Love Mondays - 6:00 having coffee - cat is staring at me - threw a toy - no way not in the play mood. He wasn't cold out - think I'll read the paper on the porch (not all here yet) - heard from Eddie's "mojo" a guy I knew a long time ago was playing late "writer" I played a trick on Karen - she said "call me when you get home" - so I called her from the car phone (about 2 min after I left) I said "I'm home" - she said "OK glad you called" He - when I did get home I called again - in the meantime the guys tried her - she thought it was funny too -

Tuesday May 9

Up at 6 - I always struggle really bad in the morning`,"2006a_00147":`tomorrow mammogram - wed Dr. Today I'm going swimming and K must feed cat litter & shells get pic frame - I'm waiting for the paper - as always

went to Wal-Mart - got cute stones & blue ones for frame - made the frame really fast & cute - need more frames - just $1.03 each at #1 store - it's hot & steamy out - I'm not going to Ed today, got wine instead - watched "Rockford" - didn't see start so it didn't make sense - Price is Right on - making the frame is fun - so I'll do a lot of them - got 5-80 for made 3 - Going to make jeans with the red hearts (need more) anyway - got really hungry so went to McDonald's - got fish sandwich - small fries + 2 apple pies - $4.50 - Not bad. Watching "Ellen" - She loves "House" its on tonite - I'm taping it -

Wed May 10 Up at 6 - took a shower - watching a bad "House" - a baby dies`,"2006a_00148":`Had my mammogram—only 1 side was hurt a little, over for another year—I hope! Then got sleeping pills & dish soap. Love my new shoes but need heel pads—feel better—watched Rockford & ate—R.H.T. got at odds again—seems like Kimberly is sending her kids to private (Christian no less) schools—Public schools there no good R said—Poor little kids—such snobs—"Christian" schools & I'm sure Kim. was having a long affair with her sons teacher from that school—H.A.—so pure! Anyway we didn't agree on that & wouldn't of course—Need to tell her about Collin & the J.C. deal—and I will.—Cat woke me up & JAR is really good—on girl—

Thursday May 11

Finally Dr. day—Mostly talk about balance of activities—stayed "lost" & will watch at 9—It was cozy as usual but good—Had a short nap—always wake`,"2006a_00149":`up at 12:30 — Now Phyllis is probably preg. I suppose by Nick!
Bingo right on — Now Jack will have to find out about Nick — unless she marries Jack — says it's his! —
May 12th
Dr was a cutie as ever — gave me blood tests (touch nose touch my finger) etc. — stand up feet together — said instead of Prolactin take a baby aspirin in the morning — he said Surely I didn't write "Pain" says she feels goofy — "yes you did" — Ha — when he left he said OK "goofy" take care! — th
A really ironic thing happened! I mailed letter to Shawn — got baby aspirin — groc. & then went to Michaels — ad & walked in I had a MIGRAINE! — just after Dr. asked about them! I had to sit in the car & even lay down — stayed there at least 10 min. Home took 2 Advocets — + laid down with a cool rag.`,"2006a_00150":`It's 11:30 - watching 70's show - last one - it will be on next Thurs. - I'll have to watch - anxious to see Y&R - always something on Fridays -
"Matlock" is an old one but good -

5/28 - Had fun at Eddie's but no one else played the game - none of the regular guys were there.

Sat - May 13
Another weekend - I actually have $34 - thanks to Shawn's $20 - but a $5 from my check - I guess this not too good - but $20 from Silent Brian - $33 from Vice - oh well - went to WalMart got good potting soil - beads for pic - no one there - then drove to Rossia - what a rat race! but I got a beautiful black polka dot (small) & 3/4 sleeves with a ruffle - but only one button - got $.50 off for total $5.50 - got home - only one button hole so it only meant to have`,"2006a_00151":`So I'll just wear over my black knit top— if I'm going anywhere. I was really disappointed when no cards today from Denis or Mike—tomorrow will tell—no call from Sheila either!

Sunday—May 14 Mothers Day—AA!

Well see at 10 called Sheila. I asked Mike "Is Sheila there?"—He said "I was going to ask you?"—She's on the way down—not here yet—Don't know if she's coming or not—& did wash my hair. But no Denis or Mike? Brian & don't expect—But Brian was first to call—Mike got—then I laid down & by Mike called—But first a huge shock! Sheila called—she wasn't coming down—Mike had story screwed up—anyway terrible news—Denis' mother died this morning! I can't believe it—she was young (50?) & violent! Poor kid!—so not sure what to expect today—going up at 2—then talked quite a while to Mike—just being up & Denis called—had`,"2006a_00152":`a hangover - I said "good" - let him about
from - he couldn't believe it either!
sent a card - probably get it tomorrow.
shed a few tears - wish they were
still little - not to be - gay up
at 2:30

4:50 - Just had a super time.
food super - turkey rolls - shrimp baked
pots - all so good - Sheila got some
pedal pushers & a knit shirt for $100! $!
more touching - Dana's 3 boys bought me a
blender - with their own money - the
I had Maria take some pics of me -
Sh. took some with her camera - one really
good -

think I'll call Ashley - I did she was
talking to Sheila & said if they needed to
talk to anyone call me - got home - had some
wine potatoes - watching "Monk" - on all day
Saw them all but good anyway - bed at 8`,"2006a_00153":`Monday - May 15

8 in. talked to R. Then went to Best Mart & left camera—got kleenex, paper towels & fruit. Stopped & got wine—came home & ate—napped—watching TV—then going to get my ring fixed with some turquoise or green jade—only under $50—that jewelry store is gone—so I went in Publix & got cheese & milk cheese & also—then up to 1st store—saw a jewelry store on corner of Alt 9 & Main—got 2 more pic frames & then went in Sorel's—But I started feeling lousy sweaty etc so just came home—Had a cute card from Denis—card return address said "Little Denys—a cow saying to baby calf 'were you raised in a barn?'—oh never mind—& that there was extra in my bank acct!—good—I'll leave it there—Decided to stay home where its cool & cheap.

Tue. May 16

Up at 6—Need to do a wash—Slept thirty good—`,"2006a_00154":`If I feel good I will go to Eddie's just got up from a nap - watching TV - my days are all the same - lots of people would love to change places.

Jim called at 8:30 - last night it was 7:30 there - I was asleep. I'll call her after YAR - need to see what's in Dennis's bank acct. - found out $23 for me - leave it there as long as I can wait to Eddie's - goofy fuzzy had to talk at length about the "Riba fund" - Eeek! - He & another guy were 12th in the nation - hot bad - the "Wisher" came in & this cute guy - that plays against me then Joe came in - so cute - said he left his dust pan here, I found it - I'll take it in tomorrow. Called Karen when I get home.

Up at 6 - read paper - I taped "House" - today I'm taking my Paris ring to the jeweler on 42nd St. to get a new jade stone put in -`,"2006a_00155":`Took ring in - got jet though - cheapest will last longer - $35.00! Not bad - I thought he said $75! Ha - will take 10 days though - that's fine! Went to Winn - out of my savings dinner so I just bought something to have kept here - stuff win -

5:20 - I had a ball - Crazy & punchy - with Lorsha & Bill. I won one game & almost 2 - left

5:00 - Came home & ate -

Thur May 18 Up at 6:45 - went back to sleep at 4:45 but had terrible nightmares. Lost again this time with some little boys. Hate those.

Was next called - pics ready. Will go up at 8:30 or 9:00 - I may watch "Lost" first. No bar today - things got out of hand & too vulgar yet.

Had a great surprise - Sheila played "Hockey" & took me to lunch! At "Sea Sea Riders" had pasta & "grilled cheese" - really good.`,"2006a_00156":`So cute there. Guess I'll take R. there.
Bought 1/2 of mince & 1/2 of P's. Enough
for 3 meals. We came back & watched
GTR - poor Jack - found out about Plywood
was fired from both jobs at once -
Also shower & my pics. She's taking
the 2 best home + mess around - make 10 of them
or she said go out to the Causeway & takes
more pics with her camera. She took off
because they went to Miss Lopez' memorial.
Did they didn't ask me - all night anyway!
Friday - May 19 - up at 6 - slept pretty
good. Stayed home all morning reading
TV - watched an old Matlock
Good but saw before. Just ate last of
Sheila's meatloaf. Very good - watching more
GTR - mop - clean up - Eddie etc.
Sat - May 20
One week until Birthday.
I need to mail P's goofy gift
today. Woke up at 4 - everything shut so &
took 2 demovets - maybe I will every six
hours. Getting them refilled today - 10 to 7 -
paper finally here.`,"2006a_00157":`5:30 PM - quite an aft, mostly. Fuzzy.
Had a good nap-up and went to Eddie's.
Ye gods - fuzzy - had two hours.
I guess I'm getting used to him.
Came home to Winn - got Denz' money out - $100. Chicken dinner - meat
Cheese - corn - roll - $7.49. Lamp ate.
Watched TV - bed at 8 - Nasty Dreams -
about being on a runaway ocean liner
with Colin & Connor - they get eaten by a
whale - Gordon Fitz came in! Wetmore.

Sunday May 21
6 days to Birthday Big
Deal or R said Linda's car didn't have
aircon for the trip over, not sure if it's a good
idea - R said Linda hiring a rented
car with aircon - so good! Need to
clean - turn mattress - sew etc. Decided
to take her to Sea Sea Riders - maybe
Honeymoon Park - movie "On the Hedge"?
Tried to get Brian's cell is "out of
area" or it's turned off. Went down
got pork for young. At 2 of them.`,"2006a_00158":`Monday May 22

Up at 6:45 - Crazy Dreams all night - cut a kid that stole money from me. Y's God - talked to R - Jim watching Desperate Housewives - It's usually pretty grim and this is no different - full of surprises - twists & turns - 9:15

This is a 2 hour show

Just got over being sick
ate all that rice & gravy & egg for you
& then laid down for a nap & here
it came - burning acid - finally made
myself up - ate - sat up & took
another pill - sitting up - finally
feel better - Really want to go to
Eddie's with Wanda & Carla -

Tuesday May 23

7:23 - Finally got to sleep
after 2 hours! Up at 6:30 -
getting some stuff done - taking out old
clothes & blankets etc from closet on
back room. Had a ball at Eddie & Bill
& Eddie - then let go play tennis - she hit
me first game - then as I was beating
her she quit - HA - Already come in`,"2006a_00159":`So cute! - I ordered thin pots, places to go
she wouldn't take any money! - So I gave
2¢ to this guy at the bar to give her
after I left, a game - don't know why
we won't take any money from me? Home & fixed
pork steak - baked up potatoes - watching TV
"Raymond" taped "House"

Wed May 24
Up at 6:24 - great
almost 8 now - I've gotten rid of all the
icky crap in my little back closet -
old blankets & comforter etc - also will toss that
lofty Xmas tree I got - I'll put Kitty's box
in there - next week I'll clean a little
Almost 8 - got spray cleaner - did some
doors - ate a sandwich with mushrooms - glass of wine &
stock - pop-up at 1:30 - felt sickish - what is
wrong - mushrooms - YAR was grumpy - "Cassie"
Come back to Nick - all her showing him
everything wasn't his fault - I feel lonely -
ate some cottage cheese - not going anywhere -
unless I feel better - I love that 5¢ slipper`,"2006a_00160":`I may be in trouble!! - but the law no less - I went to the post office. Parked at the end when I came out & didn't look in the back mirror but the other car wasn't there when I got in.

I knocked into a car that was honking - I thought my horn was stuck - just pulled around & drove out - some gal said "Can't you hear?" - I said "my horn was stuck" only realized I didn't hit a curb or tree when I got half way to home - just parked & went in - I did take a white shirt off in there - I not drive by the p. office coming home - Come up Michigan - But I looked at my car back bumper & really couldn't see a thing - so maybe I got by - Hope so.

Well - I didn't get by but I think it may be OK - a cop & a lady came to the door.`,"2006a_00161":`I just went I said "I know why you're here" - I backed into something - I thought it was a tree or curb and that my horn was stuck so I turned the wheel it stopped - but rounded again - by the time I got to the corner of the parking lot I looked back and realized I'd hit a car! An awful feeling - but I kept on going to Winn Dixie - I went in expecting to see cops looking for me - Ha - even took off my white shirt - But! - came home watched TV about 1/2 hour here he came - except a lady. Said this - about not knowing they took my insurance - and they just had a small dent - nothing on mine - she wrote everything down & said they probably wouldn't turn it in - I shall ask her husband. Haven't heard from them. Hope they don't call - watching TV piled up "Lost" "Nothing makes sense - this is last one until next fall - hope it explains something - it didn't explain anything - a bomb went off - But the 4 are prisoners - except rotten Michael & his son and then`,"2006a_00162":`yet, I went up to swim at 2:00 — to Eddie at 3 — parked out on the corner where I can see all around to back out — Ha — day was interesting — a gorgeous blonde on the patio kept letting her blouse fall way off each shoulder — also pair her thing about her tiny skirt so that she is a frost — talked to a nice guy with a big motorcycle named Dave — we had a good laugh talking about her — I won 3 games — only one playing — I was actually awful — Karen booked me out for leaving that $2 with that one kid — said she paid for mine today & didn't want a tip — so I said OK & didn't leave any — "Young Melic came in & played a game Raygo" ? — I beat him easy — came home fried shrimp vest — had buttermilk — bed at 8

Friday - May 26 9:30 — quite a morning — I feel better after my blood test now — I've had coffee & 2 toasts — Jan called & said she'd mail a card & could tear up this check — On an impulse I`,"2006a_00163":`Check my calls - Russell said "I'm answering your call from last night - sorry I missed you" so I called back. "Oh hi Russell - so I did call you - I had a lot to drink but I was thinking about it what did I say? Hath" - Call me back.

He just called back - what a guy - we talked 1/2 hour - about everything. It was last time & called him - & ended by my saying I had a rubber blow-up bed - & a back porch - Jan could have the couch & would keep my bed - But doubt if it will ever happen. Was great talking though. Ate lunch - shrimp vest & wine. It was so good talking to Russell - he sounds exactly so much like at 25 - think I sound the same too - maybe I can get him & Jan to drive down here (Sept?) Watching YSTR tried to call the jewelry store - no answer - maybe lunch - let try later - my ring wasn't back yet - they had to send it out - NOS - hoped until 2:30 - got a card from Ruthie & my Vick check -`,"2006a_00164":`26th Ruby & went to Eddie's - played 3 games alone - then Ryan played and of course I beat him. Until pie got came in & kidded me - I said if I was 10 years younger I'd be all over him! Mean it - Ha! Left Karen a $5 bill in my glass of ice - she took it though so am glad - couldn't keep stopping on her - & played 5 more - won $14.00 - played them all luck & lost, oh well - Had fun - Came home & ate - pork steak - pita-corn + orange slice - wine -

May 27 - Birthday - 83 - nuts -

Up at 6:30 - opened P's cute card & goofy presents - mostly little water toys - all funny - had good talk - she said at least three were new - Ha -

Had a great day! - Pells got me at 2:20 - went to Tarpon Turtle - what a change - it's a huge plushy place now - we sat by - inside by the window & could see out - too hot`,"2006a_00165":`Outside - I had great steak sandwich cole slaw - Sheila left for tomorrow - After we ate we took it back to Sheila's then went to the movie - It was so adorable - laughed all the time - missed a lot - one of the animals was too hard to understand. Went back to the house - Sheila showed me pics she worked on of me and one with 4 sons - really good - especially of Denis.

Watching "King Solomon's Mines" quite corny - Patrick Swayze - so funny - funny - funny - over at 8 - forgot to say Sheila gave me a card and $100 - card had ducks

jumping in it - Ha - Will spend some on Ruthie - talk! Taking her to "Sea Sea Riders"

Sunday - May 28

Talked to R - I did most not very satisfactory talk - she has a sore throat.

plenty of O.K. - I will go to Spa this morning + maybe Eddie after 4 - Face car day - 2015

Yesterday got clothes in order in closet.`,"2006a_00166":`6:15 - went to Spa at 2:30 - at 3 got food to fix at Kosh & Kory or CRT then to Hollywood KCK's store - I was still in their comp. (on Carefree) wanted Pierce Brosnan new movie - they didn't have yett were out of "Nanny McPhee" so got "Just Inna Smith". It was a hit - really funny - quite sexy - But I'm sleepy at 6:30 - had 2 glasses of wine - Bed at 8.

Monday, Sept 29 - Memorial Day - no mail - just returned "Desperate Housewives" will watch after I talk to R - talked to R - watching P.H. - I think it's an old one - seems familiar - goofy as usual - R. told me a funny thing - She took those 2 "fighting" pens to lunch with Linda - Linda bought a couple earlier for $3.00 each as a "good gift!" Ha -

I took some clothes to thrift shop - got 2 more pens + wrapped for Connor + Collin - napped - watched "Housewives" (said that) went to Eddie's - Karen not there - played with "Boo" he was /I me & all afternoon. The`,"2006a_00167":`old couple of the poor guy that had a stroke & doesn't remember anything—asked me what he drank—I remembered red wine—his lady friend didn't come to get him for ages, I called her number (he did find that) she finally came in—her garage door didn't open—she took my phone number—I got hers—Had lots of fun with Boo—he said what are you in your 50's?—I said of course!—He looked even all goofy—I punched in right no. got O—several times—She charged me $1.50—which was right—but Karen never came—Karen came & made guacamole—really good—watching a funny "Raymond"—it's really cute—

Tue—May 30

Up at 6:30—eating the best Cantaloupe I've had for ages. 8:00 R is 2 min late—Ha—Had good talk & then phone went dead—R needs new battery in her phone—It was 9:57 yet again today—Heard about a good author—I may go to the library—or not—`,"2006a_00168":`Watching "Millionaire" —
Moiled little boys pens — then got
wine & shrimp only (3.99?) should have
gotten 2 — went to thrift store — got 4
nice saucers and an alum. skillet 3.95 —
Watching "Rockford" — still need another
hobby? Mexico? — my wine is from
Argentina 2003 — 3 year old! — Classy!
Watching an old "Matlock" — a really
good one —

Wed - May 31
Last day of May! — months
zooming by — How can that be when
the days drag by — Ha — life's little
mystery — talked to R — she has lots of
work to do for the "face" also. Called "e"
mails — I may go to the library & get
some books by Jeffrey Deaver — I hear
they are super det. stories — Also wish I
could find a crewel embroidery somewhere.
Got rocks off of back porch — need to clean
couch & chair.`,"2006a_00169":`Well good news! Had news - I found a really pretty creel emb. off flowers in a vase. $24.95 - Home & ate lunch. My type didn't type HR - so didn't see the sad "Cassie" stuff - that's O.K. - went to the library to get 2 books by an author that was on TV this am. Jeffrey Deaver - it looks good - so she got books + emb. + wine.

Bad news in Dr. nurse Sheila called - Am I still taking my levotypt? my chol. is 295! - how wrong? thing? need to find out. Sheila called - my other no. 165 very bad - oh well - doing bad - some OK = 2130 - had a short nap or 2130 - going to bar at 3:00

A darling white "Happy Birthday Dear" from John - with $20 & - So cute. Called & thanked her.

Went to Eddie's - had a well "Krazy T" bill - kidding me & going to beer - after 1/2 left I won 2 games.`,"2006a_00170":`Dove Karen "joke" walked out left 5:00 when I left — ran out put my car window got stopping wet — Dove ate watching TV at 5:30 7:00 show

Friday June 2nd Pay day — so this off bill pay bills — I need to spend that $2.00 I got from CVS — think I'll get night cold cream — last note was really sickish — realized those little "White Castle" buns have lots of onions in them. Finally drank milk & ate crackers & was OK but cat jumped on twice on me — woke me so mad! Almost 8 time for R.

I started calling that goofy jewelry store that has my ring — No answer funny noises — at 12 I called Better Bus Bureau no bad reports — Called again & a young gal answered next time for Ring! That's '6-6-6-Ha' I told her I was tired waiting but said I'd be there — watching Y&R watching Y&R — just got my check — going to nap.`,"2006a_00171":`Guess I'll hit Eddie -

Sat June 3rd - up at 6 - ate breakfast
went to C & D + got some good
face stuff for overnight - I had the $5.00
free card + it was 2$ off so it was only
2 something - good - I'll use every night -
good map - but I'm so MAD - all the way
up to spa + pool closed until the "tiling"
forever - so went to Old Chicago + played
trivia - only one playing - of course won -
but 2 beers $6.00! Came home watching
TV - about a haunted house, Buffy -
Catholic exercise - blah blah -
Called Jon but my phone gave out - &
had it off the hook all day. Used my cell
phone - she was talking to Russell - We had
a good laugh + talk about him - when he's
doubled they call him "Rando" a big man -
she said he tried Vince Jon said if she came
down here with him they (Vince + Denia)
would be jealous. She never said any such
thing! Ha - so much fun! Made a`,"2006a_00172":`chicken - baked pot + quick for supper. early bed + wine. at 8 bed - show on mimmies - eerie + grotesque but interesting.

Sunday June 4th Up at 6:30 - I did 2 dirty jobs - took my biggest knife + dug a hole for poor little evergreen tree - also got hood up - just used a metal pole under handle - low on gas + no coolant - went to 1st store + auto store > got $ coolant + oil - passed neighbor & took him to corner - asked him to check oil + coolant - keep forgetting to ask him about his wife - ate 2 donuts - having wine - will sleep at 12 - after 1:30 - not sure

just called Mike & His folks are the first cat talked to Ashley - she has a present for me - going to drop it off - well talk 3:00 + no Ashley - where is she? - getting antsy - not sure what to eat tonite + I went down + got ribs + pot, salad + fruit - Ashley + Sheila came in - She had 2 gorgeous`,"2006a_00173":`wine goblets & bottle of anti-spontaneity champagne
We talked about Leon—guess he went to dinner with them—she spent a night with him. As soon as he gets over his broken heart it will be easier—I'm sure they will get back together.

Watching TV—

Monday June 5th

Up at 6:00—read the paper—watching "A Miss Marple" same plot of an old one but entirely different; really good although hard to understand some English actors. 9:30—ate my ribs & then napped sitting up—decided to go lay down—lots of dreams again—lost car school etc. Anyway when I woke up I thought it was the noon and I needed to get ready to see Raymond—Ha!—It was 2:30 in the afternoon decided not to go to war—too lazy to get dressed. Watching a cute TV about 2 cute bears that go to movies—Dr. Dolittle (what a waste)

Time for Ellen DeGeneres—She's so`,"2006a_00174":`June 25

8:00 am - I am proud of myself! I took the hammer out and got the damn car hood up - oil in and also coolant! - about killed my back - 8:00 - just about bed time - (also planted some tree outside)

Up at 6:25 - Supposedly "date" coffee with Raymond? Doubt very much if he gets there - ha - ha - I will - I washed my hair - today championing the chair. Thought about work but decided not to - time for R to call -

10:15 - No Raymond - not surprised.

Went to bar at 3 - drank way too much - Boo gave me 2 of his pitcher - anyway at 7:36 had a migraine - took pill - went to bed - slept long! Then had a bad headache - no booze today.

At 9 I'm going down for my ring - better be ready! So don't have the sleep oh well -

Bad news from R - Dr. thinks Emil has Parkinson's disease? That awful - poor guy has everything else`,"2006a_00175":`too—we are falling apart!
I got my ring and it is gorgeous!—But at table very early,
When I got there the door was locked
and said "Back at 12!" But this girl
came late in and had the ring
tried to say it was late because of
holiday—Nuts!—Any way it's all right—
and really black—I don't feel good—
Sort of sickish—banana?—
I was sick all afternoon—but
for supper had a lamb & mashed potatoes
and feel pretty good. I've done late on
my embroidery—"Family Bed" is on
the bed!—bed today is over—going to
swim tomorrow if I feel good—maybe the bar.

This—June 9—Up at 6—slept good—
no booze at all yesterday—I HAVE
to cut down to 2 beers & then
coffee—or coke—no more 4 or 5—& none
of "Boo" beer—Ha—guess I'll do
better before R. calls—`,"2006a_00176":`She called—poor thing had a terrible time at the dentist with a new, inept assistant—new—that was terrible—it hurt her—an ordeal—and she said poor Emil will have to go to a rest home one of these days—thought she might have to go too—Hope not! Or me!

Went up to Wal Mart—got oven rolls, chore girl—2 litter bags—Kleenex & 3 pairs of huge pants—it said for a 35 in waist—HA—Way too big—will take back soon.

Went to Eddie's at 3—won 3 games & other guys quit—ha—cute little "nurse" girl (can't think of his name) then finally a married couple came to play the game—they were late so I beat them—but I had to leave—hid her $8—I came home—she wouldn't take any pay for beer. Home ate my shrimp meal—Sat girl—had milk—New phone book came—Jim M Fitzpatrick in it—oh well—Watching TV—`,"2006a_00177":`Friday - June 10

Up at 6:20 - read paper ate
almost 8 time for R - grabbed
Went to Walmart - took pants back
got size 10 - cut food & geraniums plant food
but think I got overheated - stopped & got
wine. Came home & had a migraine - now
my stomach hurts - constipated? - ate
shrimp milk orange slice - will take nap after
YHR - doubt if I go to Car.
Did go & had a ball - a young (30)
year old guy knew me & we
had great talk - he love of marine - married
real nice - called me a "USO dancer" - when he
left Brandi came in & played - goofy blond
"wife" that can't remember anything came in.
Left $9 on the bar + 2$ added in sugar.
Ha -

Watching TV - about history - ships
buried in ancient Italy (and mussolini)

Sat - June 11

Up at 5:30 - making a
list of things to do before R
gets here.`,"2006a_00178":`Tell R - no more presents for grandkids -
Tracy's birthday today - I will get Ashley something -
Victor brain tumor? - migraine yet -
got pants size 10 -

I think I'll order some Chinese food today -
go to library too - maybe I'll go now -
look books back - library not open
yet - came back to that cute little
"Josie Boutique" - the clothes are super
and not too expensive - I had some really
nice slacks - size 20 - white - only $9.95 - at
my first time in 25% off - don't think he did
it though. Oh well - a really striking black
jersey with yellow lion tigers outlined in silver
spangles - 20$ - also saw a darling small purse
got for Ashley's birthday - came home ate +
wine - TV - nap -

Went to the pool - after 15 min. a
migraine with mini pool hit! Darn - floated
around awhile but it got worse so I got
out - I put wet towels on my head & laid
down & the pain went away - drove home OK.
Wished I had a cup - again I got pretty hot
going up there - cool that it's in the
last week - Wed - Fri & Sat`,"2006a_00179":`I'll call Dr. Mon.

Sunday June 11
Making coffee - I'm afraid to go anywhere now - I lost down 15 lbs before last night.

Talked to R - she is going to get in "triggers" on comp. She said wedding was kind of a mess - too windy - couldn't hear. McKenzie was a terrible brat, once Emil hollered "someone get that brat out of there."

Ha - also R said when she got in the car her day was standing on end. She had a huge laugh about it. I'm calling Sheila.

Talked to She. at 2:00 - She is sure my migraines are stress over R. Coming over maybe - so I've got to relax - tried R. This had a good laugh, watching TV.

My darling wonderful daughter just came down with Ashley and told me she had rented us a motel room at Dolphin Inn for Wed & Thurs Room 302 looking at the`,"2006a_00180":`water - Isn't that super? — Also gave Ashley her cute little purse for birthday present — She said she loved it and I think she did.

Monday June 12

Up at 5:50 — not bad, but I was awake for 2 hours thinking about clothes to wear — He — substitute cleaning house for what clothes to wear — What a NUT — 15 to 6 + no paper — I may be shut off? — I may try & get by without it, just get Sunday paper — Bed of clock — It's still raining — Did a wash — all ready for wed — took a nap watched YAR — finished all my wine — I swept scrubbed, couple floors — cleaned off tables — packing — saving vacuuming for wed.

The June 13

Slept OK — will scrub today floor hurricane moving on — I need stuff today — shoe repair, etc. Jon just called — "Am I OK?" Thinking of hurricane — not sticking me at`,"2006a_00181":`All - Sun is out - real breezy though. Almost time for R to call - then I'll shop - at 9.

Boy! - Did I shop! - 38¢ worth - got nice white leather tennis shoes - really neat "table" slippers - heather & grass - look real + a nice square rug - $15 at Wal. Small throw rug - tan + green - for bedroom - 12¢ - cards dice + Yachtzee game - no "upward" games - I'll take Solitaire game - Stopped + got wine - watching "Price" I want to watch "YAR" - nap + I guess Eddie -

6:15 - Had a real ball at Eddie's! A guy named thick "Dick" - + & were one on one for awhile - he beat me - then I beat him badly - then a game we hate + he beat me bad - then "Boo" came in - before - after + beers + was getting loaded! - beat last game + left. Maggie + [illegible] in Joe - fried chicken + hot pot + cold - TV + bed - told Karen about R - played joke on her - called from toilet + said I was home - Ha - She came in there funny - TV + then bed at 8`,"2006a_00182":`Wed June 14

The day is here! R. Day slept OK. House is pretty clean - have to vacuum - do the bedroom - that's it - at 11 I'll go get the key - make coffee & will eat.

I got the keys at 9:30 - The room is fantastic! A huge balcony - nice deck chairs - a micro-refrigerator coffee maker - so nice Room 203 - guy was cleaning pool - I will swim for sure - Sheila wants to take us to dinner at Tarpon Turtle. Their site - great - if R. wants to go!

Went to 1st store - got Camera - wine & 2 journals - (give R one) Y&R Coming on news now.

I found out lady next door has about 3 weeks to live - she is back home - was in the hospital. I talked to her son (or him?) Need to bring some food over - fruit & muffins - I think.

Sat June 17

Lots time to spend - wrote in my new journal about our trip to Royal Yacht Club.`,"2006a_00183":`But when we got here 2 guys were sitting in front of next door - the lady died last night! - a funny thing happened though & told R I need to go to Idaho & tell her about it. I went over & she looked so shocked to see me - she said "Mary I thought you died your paper was out everyone what a look on her face! - anyway not sure what to do -

Also big news Brian is here for 6 days! Today he & Mike will probably be buying a car - but I'm sure help be here for his mail.

12 to 3 - Brian is here - was out here after my nap. He decided not to get a car - He gave me $50 - $60 for money $40 for food - we wrote Swallow & got $50 worth of stuff - a lot - just fixed supper - a good hamburger & corn on the cob - he had a big salad - I went & got my pills at Walgreens - my lornostatin`,"2006a_00184":`Sunday June 18

First up at 4:38 so
back to bed until 6:35! Made coffee &
got paper - Brian up at 6:45 - We ate,
Later I'm going to Michaels & Walmart for
cell phone card -
Brian said he slept OK on the "air
bed" on back porch
Went to Walmart - got a
card for cell phone $18.99 - pipe etc -
then to Michaels - had to buy to sell -
at 10 - no beads left & wanted but
did get some pretty ones to make
earrings with -
Sheila asked us up for supper
at 4 - It was super except Mike's awful
New York Strip was so damn tough
we couldn't cut or chew it. I finally said
I can't eat it Mike - too tough! - She took
it to dogs - what a waste. The kids
went to dinner so Mike could fix their
water problem so he came home - watching
TV - going to work on earrings -
Made some cute ones -`,"2006a_00185":`Monday - June 19

Up at 7 - made coffee -
paper still here - guess I should call.
Also talking to tel. people -
Talked to R - she had a low blood -
Linda is moving to Mississippi - to be with
Amy - got a good job there - R said we
just burst into tears & ran into the bedroom.
But feel better today - Brian went to
turn in his license plates he decided not
to buy a car.

I'm going to call tel co. (cheap) + newspaper (cheap) - I have 40¢ left (4¢33)
not too much but plenty of groc. & wine - He

Tuesday - June 20

Well stopped paper and
called tel co. and asked for dinner bill.
First though I went (at 8:30) to K-Mart for
toi paper sugar & vitamin - didn't have any
Cheap creamer - then to Crossroads tel Co.
Not open until 9:30 - walked around - got coffee
finally got in - just gave me a number to
call - but she said it would be lower
no caller id - still have messages & long
distance - Cheaper on my cell phone -`,"2006a_00186":`Came home—watching "Rockford"—will eat at 11:30 or 12—All at 12—shining dinner—watched YAR—Victor getting further & farther out—

Had a long nap—up at 3 & dressed up—red velvet top—tried to get Brian to go—no deal—angry—Gwendyl—Ryan thick—Joe—stay—so fun—Home & fixed chicken salad got + cold—watched TV and played "Upword" with Brian—He beat me again!—Hm—7:30—going to bed at 8—Brian leaves tomorrow etc.

Wed June 21

Up at 6:30—super—day goes faster—Shall I skip Eddie's? Take Brian up to Sheila's this after & do mix the paper but I'll get used to it—Have to 27¢ for 10 days—Eek—maybe Linda will want to lend money.—Well took Brian up to Sheila's—Brother—but my house is mine again Ha—No sneaking wine—He—watching Rockford—No Matlock—He was good—Laid down at 12—didn't sleep good—up at 1:15—waiting for YAR to tape—I didn't want to go to Eddie.`,"2006a_00187":`but there isn't anything else to do. Way too hot to go up to swim - can just make it to Eddie's -

Thur - June 22

Up at 6:50 - already 10:30 - I went down & got wine -
(alley) blood pressure 155 - 90 -
pretty damn high - oh well -
watching "Rockford" - a funny one -
5:45 - back from Eddie's lots of fun -
Boo & Ryan in rare mood -
of course first hour I had to listen to Stacy's sad story - working two
money - living out of car! - ye gods -
but she was in Eddie's since 11 -
4 hours -
Pays $200 something a week for
a motel room - nutty -
Ryan loves to talk about dating me
etc & with Boo too - put an ice cube down
his back - threatened to smack pizza
in his face - Ha - He said "Lady you are crazy"
Ha - gave her the tiny earrings made
& left $2.50 in money - Ryan gave me
piece of his pizza so I'm not`,"2006a_00188":`hungry - cat won't leave me alone - ate an egg sand. Bed at 8

Friday - June 23

Up at 6:15 - those sleeping pills really work good when I do wake up I go right back to sleep. Watching a funny "70's" show - cat on my lap as usual.

I am down to $13 left in my coins. I'll take them in this aft. get some money from the week end - mon. I'll ask ski for $20 - I'll need to watch my pennies - luckily Karen won't get me pay for my beer - so I leave her 2 hidden for a tip - a game we play - I made her thing earrings yet.

Talked to R - they are taking Linda out to supper & Sat night. She moves July 8 - I know R is devastated about it. She still has Kimberly - not much to do today - I have plenty of food & wine (for today) I have to take Karen DVD's back. She has "Shark Tales" for me - & missed Neil Armstrong yet. He is so`,"2006a_00189":`Cute funny—
Stupid gal on millionaire—Had to use all her "help" by $8,000—only one left. She didn't know anything—Took her $8,000 + left.—I should go—
10:45—Watching Rockford—I went to Kashi & Harry—Had $4.33 worth of coins—So I have 18¢—pitiful!—only need 2¢ today—I got coffee creamer—
Fixing chicken & broccoli & cottage cheese & wine—going to watch YAR then mop, make some red earrings—May give to Crystal or Stacy—really don't want to encourage her though—these in her new best friend—Eek!
My goofy cat just nibbled at my elbow—He's nuts—
7:20—Got the phone call—It has 6 calls on it to St. Johns, Florida—
I called Brian before I checked the number—It's Rutha—I'll ask her about it—Watched 2 old "movies"—Didn't like either one too much—`,"2006a_00190":`Nothing to do today, may try to get a book at Club House & swim this afternoon. Called R. and found out St. Johns is her County name—why now? She was still interrogative. She's going to find out.

1:45—Wopped from 12 to 1:30—out of wine—guess I'll get some more. Too hot to swim—no Eddie—not much on TV.

2:30—Calm & happy—On a hunch I tried Denis Card—there was $6.3.00! I forgot to get it out this month. Now I'm fine until Sunday—I won't have to ask Sheila—Yah! got wine ribs potatoat corn at Winn Dixie & a magazine.

Ate at 3:50—very good—watching an old TV show & already ours—"Journey to Center of the Earth"—

Man—it started pouring down—both windows were down in the car—I just ran out—got soaked—put up window—really wet—now of course it's stopped.`,"2006a_00191":`Sunday - June 25

Up at 6:30 - Bad
time trying to
get the paper
corner store - Went to
conv. store - not open yet! - So
had to go to Winn-Dixie - Home of
read paper, had coffee - talked to R - Henry
lunch with Linda maybe last? She's
already dreading they "goodbye" - I
told her I was worried about Denis - after
we talked I called & said if he doesn't
call by 1 I'll call Jon & ask her to
check on him. Hope he & Rhylia
didn't
talked back together! -

Talked to D. at 12:00 - everything OK
He didn't get message this morn. Has been at
gymn & playing basketball a lot - So empty
in time - took a nap - feel lonely. Up and
went to Eddie - But by a nice guy "Scott"
"Rookie" - He beat first 2 - but after 2
been 3 - beat him - we have only 2
Playing - Came home after 2 been
at 5:00 - It was raining - Cat under bed -
out now - Jon called - had a good`,"2006a_00192":`Talk - Ate grilled cheese & cottage cheese
Watching TV - "King of Queens" then CSI
At bed - another Sunday over - Good!
This diary almost finished. I have
the other one ready - Getting sleepy
Going to bed -
See new diary
June 26`,"2006a_00194":`to do
wash orange mugs + towels
wash dish clothes
vacuum
flowers for table
wash robe + T shirts

Xmas pics + frames

Denis
Sheila
Brian
Mike
Shawn
Jon
Ruthie
Ashley
Molly
Dane
Ryan

Spics

Love Mom 2006

- Best friend
- Twinnie
- grandpa mary

When R comes - 2 red flowers in front
bouquet flowers = table
three milk raisin bread - oatmeal - cottage?
milk spray
new cat litter`,"2006a_00195":`Mon:
- Oatmeal
- Cantaloupe
- Grapes
- Coffee
- Bananas

1805:
- Cold
- Pepp
- Tomatoes
- Cheese
- Carrots
- Nuts
- Boiled
- Port wine

- Pineapple
- Peanuts

Tue:
- Oatmeal
- Banana
- 2 coffees

Wed:
- 1/2 coffee
- Cantaloupe
- Lunch
- Cheese
- Celery
- Cucumber
- Carrots
- 1/2 boiled egg
- Avocado
- Wine
- Tomatoes

Thur:
- Oatmeal
- Banana
- 2 coffee
- Oatmeal

Lunch:
- Salad
- Egg
- Celery

Supper:
- Celery
- Cucumber
- Cheese

Fri:
- Oatmeal
- Coffee
- Banana
- Cantaloupe

Cucumbers
- Cold
- Egg
- Celery
- Tomatoes
- Green pepper
- Wine
- Pineapple
- Yogurt

All of above except egg

Sat:
- Oatmeal
- Pineapple

Sun:
- Sheila's

Mon:
- Oatmeal
- Coffee
- Fruit

Lunch:
- Broccoli
- Celery
- Hard-boiled
- Egg
- Green pepper
- Cottage cheese
- Cheese

Fruit:

Supper:`,"2009_00002":`2009

New Journal Easter - April 12

Monday - Easter -

Laid awake an hour last night thinking what this place needs - Something to do that's fun.

You never hear laugh except the nurses talk.

I wrote a soothing paper - Will leave when I get to net. Didn't work so far as to say maybe my birthday? If so I'll let Dana + Marie read now. At till 8-

8:45 - breakfast 2 waffles one sausage and orange juice - ate the waffles - wrote on my lip - can't eat sausage or drink o.j. they're on tomorrow tomorrow - Bonnie still asleep.

Get out of here - I mean food good

10:10 - I'm dressed - new top - tan stock

Did nails - "Dick" still here - in jammies

Teddy bear & purple jacket.

Monday 8:15 -

New week - Let's hope

Had a great day yesterday - Sheila got me at 12 - I held kitty cat about ½ an hour

Doodled all over me - butt head - just has paw on my face! Also Jon called me at Sheila's - he said - Food great from corn

Hot pots - brownie & ice cream. Ashley was supposed to get there but didn't -

Maria just bought cool coffee - nuts -

Cold in here

Maria heated up the coffee - She + I`,"2009_00003":`Had a hilarious time "looking" at my jewelry. Gave her a little silver bracelet chain & said I thought it was the Hope diamond—then she started pinning on pins, beads, rings etc., until I was bogged down & told her "Get away from me!" We both laughed. She left at 3—worked on bead for 2 days.

Tue April 14 I thought the paper was here—got 7:10—But it wasn't delivered on the site—it will be here soon & hope for coffee! I'm asking for a "stool softener" like rocks—

Tue 8:45—had lot of coffee. We are having a terrific literary wind storm—TV off—my mike uncle blowing every few minutes and I have to go to the window!

Wed April 15 It was a tornado not "wind storm." Had good pancakes for breakfast (for a change) got warm & had good hot coffee—need a shower—need to wash hair but no shampoo—Maybe Maria can get some, she did and shower was nice.

Good News!!

I have a new room—3 of us but my bed is right by window & they both go to bed early—no more old cat! Guess I'll call R & tell her. I have diarrhea—from those stool softeners—so`,"2009_00004":`I lay awake all night wondering why I hate this place and what it needs most.

"Something to Do" to "USE OUR RAIS" and have fun. There is no laughter here or activities. Where is the pool table (I used to be quite good), ping-pong table, swimming pool (or at least a hot tub), some funny slot machines—fishing on the lake shore every day. Crossword puzzles, word scramble—so I get gambling? Drinking? Challenges—SO BORING! If you took 6 of New York's smartest CEO and put them in here for months they'd be handicapped too—to here grading.

FOOD—B—once in awhile "ug."

Clean—A—more attention paid to shiny floors than patients!

Comfort—A—don't do anything to be uncomfortable.

Activity—FFF—Camp "Do nothing"

D—never see one around

So what if we get hurt having fun? I'd rather be hurt than numb—I won't leave this note until I'm gone (not dead—somewhere else)—Please get an active "Recreation Director" young & energetic & get some LIFE in this place!

—ANONAMOUS—`,"2009_00006":`Maria said I had another room if I wanted it. And do I ever! — one talks to herself & the other one doesn't talk & they both go to bed early! Best part I get away from Q.B. early in the morning—4:32 (I think) at the end of the hall. Get some emulsion. Nurse said & other genius you diarrhea! — let call Sheila.

April 16

Moving Day!!

Away from Q.B.! Only 6 in ready! — Ha ha — All moved— I love it. I do have a window— big trees birds cars— workers coming & going— No Q.B.— my 2 "roomies" are just sleeping zombies— halfway sick at my stomach— these what? — Nick gave me a TV good color with C.R. — say that left it didn't want it! — bigger than mine! Wow— goofy Sci Fi "Hercules" is on— Maria bought me glass of wine— I need food— water— I hugged Nick— he's a cutie—

Lady in corner asked me my name— went to bathroom when she came out— had a disapproving look on her face. — Nick said her name was Mary Anne— She acts lonely— new in city— in her recliner— It's 12— time for food— don't know if she eat anything— know the fat lady— (not with the red hat) is talking to patient in corner bed— now leaving— 9:45 — went to Dock— Sun was`,"2009_00007":`Hot - I am getting a little too loud at 5 need a glass of wine. Want not need wonder where OB is? Who cares?

It would be nice to have a normal roommate - Even the girl that sleeps all day makes herself happy regularly from 4 to 5.

Friday - April 17

I know what it felt like to starve. Literally so hungry this morning. I begged 3 people for food - one girl bought me coffee - finally quick got me 4 crackers at 8am and 20¢. They should bring breakfast in 15 min. I never would have lasted. But I will get a lot of much food in dinner - Maria got me papers - Sat. Sheila is coming (I hope) Eat at Holy Konga - bring back shrings.

I knew Maria left the papers by the smell of "Oscarin" her perfume - breakfast in 10 min. I HOPE -

Rick brought me 4 crackers - ate them all - breakfast at 8:15 - oatmeal + french toast ate all the toast most of the oatmeal - good they want me to take 2 showers a week - don't want to - at least I get Maria to do it.

Looking for Sat. She. Maria had put my jeans in the "dirty" bag. Wearing Sheila said she'd come about 10 - So funny - the fat lady "Caroline" that I thought was a new friend - gave her my stripped bear I said she could use our front door to go to`,"2009_00008":`take bathroom (we share) & she sent a big
voice over to tell me to turn my TV down!
People! - he said don't worry about her - she's nice -
said I'll try to keep it down.

Sat. April 18th Only 7:00 but I'm awake &
she will be here at 10 - good - & have a lot to get at
' most.'

I've been thinking about "scar" cream for you - there's
look - eating that well - tester O.K. Getting lots
stuff to eat today.

It's 9:15 - had an adequate breakfast -
like warm coffee - Ronnie (the fat one) is fluttering
and in her jolly role + jamie - now in her
recliner for the day I guess - the other one is
zombie - living dead - Boy am I lucky - Yeah! -

My darling daughter did it again! Bought me
other "cat" purse in blue - not quite as many birds but
just matches my jacket! Then she took me to Wal
mart & I got everything I wanted. Lots of snacks
fruits & cheese curls candy bars (tiny milk by way) powder
house - nail polish bombs. $5.4 worth - brought
me luck - Mike is sick at home - Ronnie "talks
to herself" foaming around - makes me nervous -
decided I better go to "wine & cheese" aft.

Had 4 people - 1/2 glass wine & Bingo! what a
place! went out in the sun - hot - getting a little
tired - I asked for 2nd wine - so far no -
maybe - those nurses said I only
had one wine a day - ha - So she is`,"2009_00009":`Sunday April 19 only 7:20—no sugar or coffee—
or milk—had 2 pain pills & an oatmeal cookie
Begged when lunch is over. + Didn't have
any lunch + Nick—
"Maryanne" (Dormie) is a real nut.
In her chair & back to bed again & again.
Other poor gal may as well be dead—
never does anything but sleep—can't even
turn over or walk or go to the. Have
to be turned & cleaned—No company—
not mess—
Breakfast time at 8—Blueberry pancakes—
always (always) wrote can't eat it—don't like
applesauce—they will both be there tomorrow
but—
Just had a huge P.M.—Had to push it out
of times—eek!—Again cold in bed—
12:30—just ate lunch—not too bad—& too
good—turkey & meat—dressing—crumbing sauce
peas—chocolate—still feel sick. Used the
shoe little aid kit for a newspaper—did shell look—
nice chocolate won't eat it—She didn't find a
paper yet. Had it. She's trying to find this
room mate.
Talked to Denis—Now I really
Can't wait—You can come & go as you want
they have their own bus that takes you
around—Let in a dining-room—now that is
Assisted living—This is prison—or a`,"2009_00010":`Tried to call Sheila - Nick answered phone but not - said I had $7 in account - need to finish Barbara's book - sounds better - you come at go as you want - they wrote this but it's exciting - mom is living like a nut house! - two hours still went by - then I'm not getting any coffee - I'll come out & get it - mom also found out how to open window - breeze blowing in almost upper time.

I was shocked - the girl's heavy lady (not Zombi) has darling daughter & I adorable grandkids - she at least loves them - she has bad diabetes - gets a shot every night - kids are really cute - almost 7 - will be glad when it's Monday & finally a nice tan - it's going out again tomorrow - need my clothes from St. Found clean green pants but no shirt - had some one on 4 days - Nick brings it - other guy helped buy coffee - Nick or I

Just had a good shower by Maria - will eat & get wine & nap.

They are giving away clothes people & left here - got a pretty pink sweater & a too little (k) shirt - where are my clothes Sheila?`,"2009_00011":`Jennifer's videos are on—

Monday
12:45 - not bad lunch - beef noodles in "poor
gravy" - roll (carrots, egg) & wine - also gingerbread
going to take - nap

Watching "Family Feud" - too much hi-5-
Really pushing hard - hope it quits so
Sheila can bring my clothes - it did quit. I
just watched "Family Feud"

Big mystery about my clothes - they aren't
here! I was awake until 11:30 - hope nothing
happened to Sheila.

(Thu. April 14) 6:15 - WITS no paper or coffee
today - I had hopes of hearing from Dennis yet,
nope - patience! I never had any! well -
Sheila is OK because my big bag of
clothes were on the chair in the plastic
bag. 6 pcs of plucks! - I'll get dressed soon
Clean clothes -

$1.00 - guy striking bathroom -
good - I think "fatso" has diarrhea. Need
just bought breakfast - "cheese" yesterday
flings at our present Oatmeal -
juice - drink 2 - got my own coffee
thing up in the (7 pm pants) but on
clock watch. Where are the kids? just 5:15
maybe they don't start until 8:30 -
No P.O. except - Maria said Dana had them -
where is the P.O. America plays Brazil Russia or
on them! 1/6,000 question - Brazil gave the guy the
wrong answer - Brazil or Russia or Brazil.
Of course it's Russia!
Got some sun - met maria - she brought`,"2009_00012":`I got 4 shirts for Dana (Scott) on 
work - good one -
12:00 - Nick bringing lunch -

Well - I think things will be happening. I 
had a nice long talk with Linda (the doc. 
worker) told her I had to get out of here - I 
never did belong in a nursing home. My nurse 
daughter is mostly concerned with my physical 
not my mental health) She agreed & understood. That 
seemed urinary infection got me in here but its fine 
- I do have a terrible cough & "Cough" In quitting 
- I get a N/P pill everyday but no one has taken 
at least a week! Told her that too. Called Ruthie & 
wanted "to see"

Feel better about telling Linda. For the 
first time I can see me out of here.

Had good talk with Dana & Maria 
about having to get out of here. Biggest 
trouble is Sheila. At the point where 
dont care about what she feels - Dana 
talked to Linda & will see Sheila tonite. 
surprised me - I am filled of junk & a 
bad cough - Sneezing now - asked Nick to 
take my B/P so far no - another nurse said shed 
be right back & take it. Im not taking my pill 
until I know it. Why is it so hard to get? Im 
my other room at least every other day - Its 5:30 
supper my baked bean with weiners in it. Cake 
& cold bread & some cake - Of course apple 
juice -

1/23/89 Finally - poor exhausted`,"2009_00013":`nurse on a 12 hour shift.

Wed - April 23 - Got my own coffee in the "little kitchen" no comfort from Dana about Sheila? Try the patient. Mary - II it's mostly up to Linda at Omaha.

Nick brought me a whole lunch (8) colored pencils so I started the day. Got tired so quit. Phone rang - couldn't get it to answer - but I called Chris and told him I talked to Linda - Stupid phone -

Lunch same - good soup - icy hot chocolate mashed potatoes - glass of wine - "Roomie" H. Gates fighting over the toilet. Cute little girl that interview people was in. Told her I was impatient and always late. Nice talk - "And" Fred" is on -

Supper - "corn" soup - chicken salad on a bun 5 pot puff - pickles milk choc pudding - for him eating that box all night.

Thur April 23 - I got up at 7:15 I got coffee - I know when the "coffee cart" is next - I don't think Dana and Dana are here yet - I'm watching for them - Called Sheila - going to the Chinese place tomorrow night. Dining there place until May 3rd - then my check + motel.

Dramatically supported by Dr. 2 fried eggs - I corn flakes - no diet oatmeal.`,"2009_00014":`I'm still here May 3rd or May 4th (S.S. check)
go to motel by a cafe with a pool
we eat just 5 months need 6
without bathing suit. Cash check at Wal Mart.
Need -
protection sleeping pills advil
smoke wine wine opener
need Taylor Springs phone books for motels
I'd be happy for a month in a motel & wood by a cafe + bar

Timber came in and said Denis talked to
while he is going to the Medicaid office I
talk to them in person. That should do
I'll forget the motel. No Nick said I'd take you
me first. OK! Nick
Fred is on - Going out on the dock

Went out in the sun for 1/2
getting a good sun tan.
For the first time in ages I have
hopes of leaving here. Come on Denis.

Friday April 24
Woke up at 3:00 couldn't get
back to sleep. Wandered the halls looking for
coffee - no it's not "down" yet. Soon as the sun gets
up I'm on the clock.

Set out 7 hr - really brown.

Lunch 12:30 - good fish - awful rice & green beans - good
cake - good glass of wine. Found my polish`,"2009_00015":`remover - feeding "zombie" in bed - Eek!
poor kids -
I thought of a good name for this place -
The House of the Living Dead! I hope Sheila had good news from Denis -
or my motel "plan" might be on again.

Sat. April 25
Well had a good night. Denis had no
news (Sheila said) brought girl over for some food
a nurse came out said she couldn't have it -
high blood pressure. Guess I'll tell her someone ate it last night. I had to get pain
pills in the night - right hip was terrible - knees etc.
Motel - are out - need $10 for everything yet. Curly, chair, get food etc.
gallows door came out said she was sorry
about yest. that she could have outside food but no
salt. She's a mess. I'll heat it on the
dock - Still want OUT of here but not quite
so badly - If Omaha turns me down
on Medicaid Sheila will investigate ass living
down here - OK.
Sheila had lots of mail & 2 darling pics of
Wyatt & Rydins Mary - taken at a photographers.
So cute!
Called Sheila - Mike answered - asked for a
paper tomorrow - Mike said he'd bring me one. OK!`,"2009_00016":`April 23

10:00 and I'm on the rocks. Smells bitter. I am at peace with this place because if not out of here by payday (May 3) I am plotting my escape to a motel.

Sunday April 26?

Got some good coffee but the nurse didn't make it. Grilled she made it for "her" people (that ate brown there) & snarled back, "Why it isn't a picnic being in here either - I hate it here - Everyone either nuts or dying." She backed down & said "I know it" so I asked taking a cup of coffee isn't so bad; need a robe & slippers to take for here - cold next & guess? Have news on.

Coffee cart is here - so - I've got plenty. Almost 8:00 - Hope I get the paper about 10. Better yet - Sheila brought it at 9 - Milk had bad bacterial infection - Better now - lunch wasn't bad - Chicken - noodles & mixed veggie - pudding wine & donut. She brought me TV about volcanoes - Knock a tea!

What a day! Some old guy in a wheelchair held out his hand for me to shake - tried to pull me over to him? broke away - I now someone (a lady) in coat in the hall hollering "Help me help me" Aahh! - I think it's a matter of time now. Girl with terrible legs - I think she was...`,"2009_00017":`upstairs the first week I was here.

And "Helmet Guy" had his helmet off & was leaning by the railing on the deck. I was hoping he didn't jump. He didn't come walking in. TV "How the earth was made" volcanoes mostly "faults"

Natty has stopped. Please come on!

Roommate in toilet again. She falls then buck - Hallowing again! - he stands. I'll be nuts before I get out of here.

Monday April 27) Well - I almost started to riot - refused a shower! They sent Maria - a white girl - a black fellow & I finally said "This isn't a jail - I don't feel good (sick) so go away." They finally quit.

In a lobotomy next? Ha - Pat on Clean points.

Still in first bed gone? Hope she stops away! Not in shower - Can't find my scissors.

Maria brought me wine. Said I had every right not to take a shower. Said I would melt.

Poor old "Lady" in next bed has been up in her wheelchair since lunch & showed he buck in bed. I told nurse she is finally putting her back - Called Maria but no answer - At least came in & got washing.

Nice breeze in window. Need shoes for trip - red or white -

Singer died at 5 - wood fish cole slow

fruit - shoe brownie -`,"2009_00018":`April 28

Up at 7:00 - got coffee
Stock gal said it was for everyone
not just dinner - come get it anytime!
Good too - Also good bacon
Still no pictures - I need them too
Need more time

11/15 - Went out on Dock - Hot getting a
cool tan -
5:00 - TV on about volcanos + Krakatoa
really good + spooky - Aide came to the door
and something "Sally" left - not sure what it
was? Had back & neither from ever - out
back - acts like she'd like to come over to me -
News about vampire deaths in Conn. in 1799 - Now
Hungary

Delightful was tapioca pudding - vanilla
very good - Mac & cheese & green beans - ate all
the beans - need time

Big news from Ruth - Emil is going to
live with his daughter + Ruth to Conn. to live
with Linda - Hope that going to work with
Linda's sick hubby? - But - she can't take care
Emil anymore - All things are changing

April 29

Shower day! - Big deal!
Up at 6:30 + no coffee yet - Coffee at 7:30
What a laxative.

Maria gave me a great shower -
Sleepy now. Laxative didn't work. It smelled
so bad I had to ring twice 2 times to
complain - Better now`,"2009_00019":`Friday May 1st

In May now. Hope this is "moving" month. At least 2 offers.

"Nuts" or "gally" is at it again. In and out of bathroom 6 times in 15 min. I asked her if she had diarrhea or urine infection? She didn't even answer me—she ran out again. Her hand is shaking too. Think I'll ask a nurse about her.

At 5:15 still hoping Sheila shows up. Supper was icky—hot dog, pot cake. Will call her at 6:00.

Poor Sheila isn't very happy with me. She got here at 6—I asked her to get me some time to pray (well that put the screen to sleep).

Friday May 1st

Now we are in May—late. Came back from work & water all over—drink spilled—got some more.

Cries is gone—some crazy "suck" noise here—don't know what it is. Some of "gally" room. If it starts again I'll call. I did say "what is that noise?" If it's your attempt I'll let her go first. Will call her tomorrow to ask.

5 to 3—10 after 5:30`,"2009_00020":`May 2nd

7:25 - already had a light with the bitchy aide that was there in the morning. Again, "I don't care who you make it for, I take it where it goes." She said, "I don't care what she does - you'll have to wait for coffee cart - here it came - but it's coming up at 9 for hot food. Had first good gal - glad got a cute baby - called Engraving Art - you scratch out lines & it comes up silver - for doing a turtle. Also have a cute water horse. Supper - cold pizza salad, clam chowder soup, milk & cookie week - ate cheese off of the back to my belly. Paper said again - we are getting $250 from Uncle Sam, Dell for Omaha.

We found out my cell phone "ringer" turned off! - It's on side of cell phone - & I pushed it off while talking - so had to talk with R. & Jan. She changed her tune a little - said I'd like A.F. (of I ever be there) Trying a new drug on her clamma - poor girl!

May 3rd

Didn't think I would ever get finally coffee cart at 7:45 - Good too - Nurse said I bring me a tiny paper. Hope so! Seems finish turtle - Did!

Lunch was good but needed salt - Luckily I`,"2009_00021":`had some! Had to get my own wine but I hope a nurse is getting me a paper. She had to close my window— but I'm coming in A/C is on— nuts— oh well.

Got a Sunday paper today at all— NO TV guide though. "Sick" is twice as bad this aft. I'd out every 3 to 5 min. I gripped to the nurses. I up swear she has just on purpose— the blonde nurse brought me a urine. I said "Good bring me 1 more— my looney room mate is in dort up down every 5 min." etc.

Monday May 4

Worked on pic of sea horse. Didn't bring me papers and coffee was down early. Nutty room mate "Sick" up to her old tricks— in dort etc— Boring— Maria gave me a good shower (1 hour)

6/8/00— work on other pic to color—

Tuesday May 5

Started out good— paper & coffee down at 7— Read papers. I had 2 cups— decided to give big "color pic on velvet" to Wyatt— too babyish I say of sea horses.

I'm out on the dock worked on Sea Horses— talked to Rich he wants me to send the pic so I will & get a funny Birthday card & maybe a sea horse necklace & send.

They're finally getting "rest" to bed. First he's working hard.

Another sick day here— 6:45— Need to call Sheila to ask about clock

Paris T-shirt—`,"2009_00022":`May 6

The "distinguished" looking lady across the way asked me (in a very broken accent) could she borrow $5? I had to ask someone else. Maybe I'm a sucker but she looked desperate.

May 7

8:00 - red pepper + tea - coffee - no sugar - good bacon + egg toast - cheese - no sugar - so didn't eat them 8:15 am

Long boring day - no hobby and another engraving picture flowers? - Tiger? - Family Field good too - over now

Not taking little orange pill that took longer in the A.M. He said it was a no - he'll compare them tomorrow with

Supper not bad - some real good gravy - egg salad on a croissant - beets - some kind of "jello" dessert

Watched 2 Family Fields - think Sep 1st - asked her to pick up stuff for me after work tomorrow

May 8

Coffee was too strong.

Breakfast - except sausage again

Maria will be here soon for shower - I see - Didn't take little orange pill

Pretty sure it's a sleeping pill

Had a good shower + hair -`,"2009_00023":`Watching "Fuel" - Oct 2:30 - wish I knew if Sheila was buying stuff or getting rid - made a list - I'd like to go
Talked to Sheila - We are going to look
Mart tomorrow at 10 or 11 - good, she got me
some pics to "draw" - good - 2 to 8 now

May 9th
Up at 7:00 - coffee at 7:30
Watching other on TV - so cute!
Waiting for Sheila - I asked Nurse for a
laxative or stool softner - Sorry next door
left me a "Mother" day card then came & got
a $100- Ha -

Sheila & I had a great time today -
I got some new slippers & sneakers - went to
a darling place outdoors to eat - had great skin
& wine. Bought 2 things home. Will eat at 11 -
Had goofy dreams all night. Didn't wake up until
7:30 - hang good coffee - Nurse - need sun.

Hooray

Best present ever! - We are flying to
Omaha Sat morn! I'm spending the night at
Sheila's & at 4 in the AM go to Omaha.
What a great matter day, on top of
that Sheila got me a darling outfit
with great off white slacks - So I get
outfit to take.

I am so happy - get a glo`,"2009_00024":`wine - called R. + told her.

Monday May 11
Had coffee & time for breakfast - gave "shinny" all my change -
Nick packed all my makeup in la
was
Its 10:45 - I need to call down April
Mike - also talk to Linda -
it isn't this Sat. It's not until the
23rd - Remember! Linda told me,
foeey! She's wrong, it is this Fri - the 16th
Anyway - got my food from ref. So good
things - almost out of wine. Need to call R. +
tell her -

Good News - So see they were
appointed in the little bank here! So this
Friday I'll get $2,000 ck from them! I think I've
$500 from bank - so if in Maine they don't
pay me back and I'll get a little apt. with some
money - Molly is moving back in with David
- that's out, ok - well - I'll be fine - and it will be
Friday & go out of here! - Hooray!

May 12
So far nice day - watching
Trivial Pursuit - poor girl got all
her answers wrong! I want Maria to mail
sea horse" pic to Ruth - "watched" Millionaire"
turned TV off -
11:30 - sat on dock for 20 min., got
movie + chaise curls
noodles + peas + lentil for lunch -
wine gone - these DIY naps this aft`,"2009_00026":`Wed May 13

Just took pills - have good coffee & a cookie. It's 7:45 - only 2 more days in "Limbo" or land of the living dead.

Dreamed about Fred & Monk & Col. last night.

Last night a mess - they forgot my sleeping pills - I lack without them. I got up & shut radio TV off. Didn't know where remote was so just put my finger in a hole & clicked - she wasn't even looking at it. She probably thinks she shut it off. Ha - only 2 nights (w/this) to go!

10:00 went out to deck - hot - nice tan though - need a glass of wine if someone will come in. It's 4:30 - never did get the wine - will get it with supper.

Thu May 14

Last full day! Hooray! Dress & get clothes stuff closet & food ready for Sheila to put in suitcase - ate good breakfast - 2 fried eggs bacon corn flake toast -

Had good shower with Maria. But now room sticks - veg. in the corner & TV goes off all the time.

4:45 Maria just brought me wine & cheese cake - she said it. Also just got 2 cards`,"2009_00027":`In the mail - Shawn & April - But now my stupid phone doesn't work!
It did work - called April & Shawn.
Next door neighbor (who already thinks I'm an angel) Ha - just came over & I gave her a 20¢ with that -
She just came over & said someone took her expensive perfume. A puts worker probably.
Stinks in here - Come on, time a "family feud" is on. I love this one family loser - I don't like the goofy mother.
Wood - they lost.
They were having a lawn but it's raining. A goofy old out there said "God wouldn't let it rain HA! All those poor souls slowly dying & he lets that go on - Booy - pulled a cutie - just said "Do I have any wine left?" - + said "yes" + got me my 3rd glass! - Ha They caught me - No more wine - OK!

[Friday May 15] Last day in "House of the Living Dead" - I'll get my clothes out & fold up for suitcase.

[May 17]
Well - I'm here! In Omaha -
Plane ride was fine a little bumpy once in awhile. A darling little girl was across the aisle & The Daddy did`,"2009_00028":`Everything for her & the stupid Mother didn't
want to hold her. They were going to
California! We landed at 03:30 & Helen was
there. I was in a wheelchair—she's gained a
lot of weight but looks good. I took a long nap &
then we went to Old Market & ate. I had
great shrimp—glasses of wine. Coming home we
stopped at a store & Helen got sleeping pills &
Chardonnay for me. We watched a movie that
was cute but I couldn't hear & have a 24-hour
appointment Monday. I talked to Jon—he sounded good! Also
said she was glad I was here. I talked to Tiger
& said he'd go in to see him. Denis had a
lecture on astrology—of Joseph Turner. I
have an apartment! If I get on the code I won't
have to tell. She said Denis said they take you in
van to a YMCA to win—there's 80% a
boy in normal apt—more for a bigger one. Dog & house
my finger crossed. Good news—wife is sending me
money to help buy fur. Sheila thinks I need to get a
haircut & get out of also a red couch.
Had a good lunch—St. made chicken
rollat & apple salad. I told Denis story about
his childhood—and the Ruth & parking deal.
Denis took us to their huge Wal-Mart
for shoes—too tight—traded Sheila for
some nice brown leather ones. Got a few
shorts and some tickets for "Jamie"—6 for 5 panties.`,"2009_00029":`Monday May 18

Last night Dennis & I played "Think Blot" a fun game. Didn't get to bed until 10:00! Slept good though.

Got up & turned coffee on. It's 8:30 now. Dennis fixing toast. Sheila washed my outfit jacket too - she said it was a sweater? People are coming at 10. Dennis said - Good - would have to wait all day.

Get dressed - white clocks - She told me put on a bra.

Tuesday May 19

15 to 8 - Dennis gone. Need new pants - popped in my jam shorts - NUTS

Good News! - I made melonade & into the towers - they said they would try & get me in by three. Called Seth & Lynn & Jan need to call Dennis & Maria.

Put coffee in - found socket low. My reading glasses lens came out but I found the screw. (tiny) Need to fix it - Dennis did. Sheila kept Dennis calm. He just called & said a red coach for $50. Not spending that much!

Sheila made ham & cheese sandwich & glass wine for lunch.

Took a nap up at 2:00 - sat on the porch & worked on "The Tigers"

Had a good night off. Mostly still sick. Went to "Tiger Town" - at first I thought John was Tiger - he & Joan were there.`,"2009_00030":`I played Rano lost both games.

Although Tiger was there at the Catskill Game show, took a nap.

Tuesday - May 20

Up at 8:30 - Denis just left. We played "thinklot" again. So much fun! Tried to make toast but failed and we ate of bread - had Cheerios + coffee. Hope tomorrow cells today, they did but didn't get in this.

Wednesday - May 21

Got up at 7:00 - no coffee & no one up so went back to bed. Now 20 feet tall! Denis went to work. Coffee first - not doing much today. See you tomorrow. We saw Dirty Harry - NEXT! It's back your edging - I really like it - know it would.

Later this afternoon we got to see Capt. J go to a thrift store. Look at fun. Bed & Couch - already have a coffee table & chairs (chairs)

Molly just got here - stayed at home & met with a finished fish (rainbow) with

For May 22

I knew on the wrong places so won't write much. It's 7:30 & everyone is still asleep. The kids must have been up late working on the bathroom. They painted & glued rocks on the wall. Looks great, & treated you to coffee - really hot!`,"2009_00032":`May 23

Up at 7 - Sheila at Julie's Cold Will
avoid, Dreaming alone & nuts. Hope I can go
buy some stuff I need - made a list. Don't
need it until I move. Need toast but can't
find bread. This house looks like a bomb
White Hall

Looked at a lot of junk. I bought
a lot of junk. I bought
the most glorious
Christmas present.

May 23 - 1:45 - Sheila brought Julie in -
she really cute - said I looked the same! I've
soda - Sheila bought me dinner silverware
at a coffee mate / all really cute & nice.
Went up from nap and watched
forever young with Alain. She napped
Sheila finishing tile in bathroom. I'm having
fries & wine - a movie with the
Wood King for guy on - she's on phone
Diana shopping.

Sunday

Up at 7 - Sheila came
to think of girl - she is good-
she just got my pills for next week. I'm
watching movies but found in bedroom
this book,
I'm going to Barbe to get this book
want - Sheila on cupboard - finally in bed.
I will have coffee in the trunk.

Monday Memorial Day - have just left.
I talked to him about the move &
he asked me if not anything to`,"2009_00034":`Molly in the room about 6.
Talked to Dan - were writing.
Had coffee & Toast.

At 7:00 PM - had a nice day so far.
Memorial Day - good food & fun.
We went to the park - had a picnic.
We played cards at home - I won.
We went to the movies - "The Shawshank Redemption."
We played video games - we lost.
We went out on the porch.

Tuesday, May 25th
Up at 8:35 AM.
Dad left for work. Have to wash my hair today. Forgot it - the shampoo.
8:46 - went to the store - bought some things.
12:00 - Molly made tuna salad for lunch.
Went to the movies - "The Shawshank Redemption."
Washed TV. I did + laid down until 3:00.
Got a cute card from Shawn. Will call him later.

Dr. Raymond Hansen
727-763-2513
736`,"2009_00036":`May 27 - Birthday.

86 yrs old! - Wow!

Kenzie had 2 candles set in a corn cake when I got home. I really enjoyed my day. We went to a queen show and taking me to the ice cream.

Vickie cf

copy

595 Health

dept of Human Serv.

@ the Tom Graham

01/15 42 1/2

12/15 20 1/2

on

$1800 cash?

Can't really write back this.
It's almost 7 - watching TV
now - a nice quiet little birthday - Good!`,"2009_00038":`May 28th

Up at 8:00 - couldn't find my keys! Denis
called me - said he was in the yard
looking for me. Denis said "Hello."

Ryan called again - said he
doesn't have anything.

Ate some fish - had wires took
my 2 pills. At 11:30 - I wish the
mail man would come! I washed my hair -
molly had shampoo here - towel - worked
OK - I couldn't believe it but soon it's
June 3rd year ago I was in the car wreck.
Hard to believe!

I hope my Victoria will come - I need to
show it to Medicaid.

I'm eating the last fish - think
puppy - just love the fish - Long
john Silver.

Watching for mail - that last year June to
this June was horrible but so much better
now. I just need to get rid of my stuff
with my nice new furniture - other things
my clothes - shoes - I need new
clothes - shirts & socks - shoes
need new shoes - moving Denis yard -
wood - I hope he pays him.

Well - 2:30 had a nice nap
no mail got mail - where is that`,"2009_00040":`money from morning from ? + milk?

I am getting worried - I'll call Sheila to write about it. Should be couple thousand £300 or more?

Friday May 29

Up at 8 - Denis made me coffee & toast. Now he has a violin lesson! He always arranges for toast. Is Parks going to party? It's too late. Denis said they'd bring it from up here. I leave at the towers and they would deliver it when I move in.

WHEN? I told Denis I need Calgon & Cranberry juice. Took my pill. No idea what to do today - again!

TV on animals - in San Fran. Had a tuna sandwich & last glass of wine. TV. Celbert a cat caught in a chimney. Guess I'll take a nap. Molly just left.

Denis just called - may get in right.

Well - jump B? O.K. Going to take a nap. That is one year after my car wreck to the day.

3:00 - just got up from a nap & mailman is coming (across the street) Bring me some checks please!

No mail for me - just Molly & Denis.

Denis ordered Calgon & dessert for supper. He's going to Parks. Molly & I go to bed at 8.`,"2009_00041":`Sat May 30

Up at 8 - my new porch furniture is here! Couch on porch, chair, coffee table (beautiful). We watched an animal plant.

We got money in this week ($150) from an ATM.

Brewed coffee pot looks super on the table. Need a printed cloth under it.

Siri & Paul were here - I turned on the coffee maker set up. I want something spectacular to put under the vase. Meanwhile I worry about his house, such a mess! Needs help - I did fold clothes but that's nothing.

Potter the Dentist went to The Neighbourhood. We got fresh camels - will go to bed at 8.

Monday June 1st

So it was a year ago (almost) of my break - the 3rd - A LOT has happened since then. Some bad (nursing home) most good (Tower)`,"2009_00042":`my new furniture Denis Billy (no back support) just called me. She said call her when I'm all settled. She sounded pretty good. Told her I'm not calling Kitty. I just remembered that from store hadn't bought my lamp! Called Denis she had called them about it! They said they just forgot to put it in—so I called but it's at 30+ they don't open until 10—so I'll try again at 10:30.

Just got my birthday present from Ruth, the cutest cat statue—she's tall & got an all-knowing look on her face so I named her "Socrates" or "Socks." We tore & stuck little silver dots on a kerchief & legs & ankle bracelets & oh yes his ears. I just called her & thanked her. Now where's my lamp? Just called them again—& lookey Denis! I had to go down there & get it. Lamp. I ask for money back—No go—anyway no more.

Up at 8:30—Took a wash rag shower, soap off me—don't care I smell good. Denis left. We played scrabble last night—can't believe I beat! Fun though—it was $50.00 on sale 30¢ more little & a bigger board. Made toast & had coffee. I looked at Denis' nature magazine mostly struck to me—& lot on cancer research.

12:00—Heated ½ Range. I had ½ gl of wine—watching for mail man. He didn't come until 3 yet—so—now got a wait—I got so sleepy. I laid down & thought Denis...`,"2009_00043":`was coming home for lunch. I guess he did & I was asleep. Someone fried an egg. No mail yet but ate only 2 lbs. I'm doing Metos & corn.

Good news—Towers is coming at 8:30 to get from. I better go pack. So happy. Denia is taking off tomorrow! New packed—so excited. Tomorrow my new life starts—be independent—NO I Rule.

Check about working clothes.

I'm here—and it's wonderful! Denia helped me put things away. We'll eat lunch together then she's buying what else I need. Got so happy!

Need to deliver.`,"2009_00044":`Routine

Coffee + paper + TV - lunch & nap.
Maybe tell calls - Jan?
TV + supper - TV + bed.

I have to ask Denis about doc sec ck -
sent to Wells Fargo - it is!

Just had a nice lunch - B.B.Q pork
in sandwich - potato puff & cole slaw with a
good pudding. I have a meeting at 5 - with
Denis in. Denis just brought
the N + phone - so they were really
nice in the dining room. There was
a telephone + mirror across or aside. And
Brody the social worker director.

Dinner was good - chicken mashed potatoes
& creamed corn + biscuit + pudding. Really
nice lady - Amy + her daughter Susan &
let there be dry - good - a funny talk
thing happened - added salt + meat table
that a wedded upper neighbor at me + then
made an angels face - so cute!
Found out Wells got $28 a month back!
Nice! Get more than that.

Denis came back with N - cranking since
little milky way further telephone - red folder
for poor dear Roger - don't need anything - (a
TV programmer - almost - red soon.

My 5 cats in the window sill - look so
cute! Almost 8 of bed!`,"2009_00045":`I wrote R a letter, will mail tomorrow.

We have a little mail station downstairs.

Mont Thur shower day

Sun-washed - track out & dirty clothes out

Need teeth cleaner (Denia might have some)

Going to bed - next up fills -

Thur June 3

First full day in apt. Made coffee - good - Boy wish I had shower and toilet - it will soon. Really don't want to take a shower but will.

I mix a remote - can't find the right buttons. Almost 7 - what time is dinner? Being this high doesn't bother me quite as much as it did. I like the sky. Eating cheerios -

Drank orange juice -

My little flashlight went dead

& need one for N unless I get a remote.

9:00 went down & had breakfast

Pancake & sausage - coffee - cereal - met several nice people - one that says he doesn't do names here - Good idea - sitting the paper I called about the subscription.

yet - I feel soooo sleepy.

Took a nap - its 11:30`,"2009_00046":`When I'll go down & eat at 12:15 - a little girl told me we can eat anywhere at breakfast but our places at noon supper - I weigh 164 - I just called Jon & told her my phone number.

Tried to call R. Crazy noise on cell, so don't know.

Had a nice lunch & then a really nice lady took me up to the Penthouse - it's gorgeous! Tables & chairs and grills along the walls, statues & paintings -

Ate with Amy - plus in 902 -
Having a glass of wine. NEED a remote!
Toaster & Guess still work.
Did nap - 3:00 P.M. called Denis said I have to come a remote! Can't operate TV at all.
Got mail - my ATM (cash) there.
Loved. I can get 300$ at one time - but won't - 100$ about it. Denis is coming up - soon I guess.
Got the new Avon book. Seller in 67 - next door I guess

Friday June 4

Now - Denis & I did a lot of shopping - at K Mart - way far away and Denis was in a bad mood most of the trip - ? But - we did get everything (next better) I needed - water bread jam`,"2009_00047":`really pretty bed spread - pale blue $30.00
a lot of waste basket - bread jam teeth tablets
Denise brought up a TV remote (thank heavens) and fixed my telephone - NO 5109
needed new batteries. She is like 952-
Sheila - can do anything. Well - what time
will cleaning and shower ladies get
there? Had toast & coffee - TV - called R - not
home? I gave her my new phone no.
she called me back - such a funny
tel bell - a gal gel brought my pills
gave me cranberry juice to have with
them. Had coffee & toast -
Had good talk with Jan - she was
need (or jet) plastic surgery on her face.
she's starting new "chemo" but it hasn't made her
sick - or good! She's feeling coming out
either Tue or Fri next week - I forgot but
Family Tued is on at 7 on channel II -
Cleaning gal was here - need 2 new
sheets - will clean next Fri - charge her
sheets - extra sheets. Va were
watched ysp - tick back with Sharon - Jack &
12:45 - Back from not a bad lunch -
PPQ home on ban - P.P. green beans & coffee -
also good pudding - ate with Amy + 2 other gals.
Home - slept.
Ordered the paper for 6 mo in
AM - they just outside the paper, good!
a minute ago I snicked - my bottom teeth fell
behind the lid + I couldn't find them. I
got that "gripper" that Denise gave me & prodded
them out - Huray! Nurse came`,"2009_00048":`Watching news, finishing wine
Had pretty good supper — good meat
Potato salad, coffee, cake. It's only 6:30 and I'm
so sleepy. Found AFV on tel., good.

Around 8 took my "vitals" 135 BP
97.6 temp — not sure of heart rate —

Sat., June 6
Dad up at 6:00 — no paper
I called them — be here tomorrow!
Had pretty dreams — cowboys — anyone had a
gun — HD — Curt Reynolds decided to try and
quit wine — I need coat hanger —

65 years ago & tax — we invaded
Europe — I was 20 — still single — in
Kansas City, I guess — Pres. of France talking —
so many crosses! 9,000 died.

Just had 5 pills — I call Mike Ruth —
"shown (still Denis) for 4 day — I listened to
all the speeches — King of England didn't
talk — prime minister did (of Canada)
Got dressed — tried to get 3rd & remember
its Sat! Called R — on 8-day she was in Povesh
Island — they hugged, cheered & kissed when
it was announced. Don't remember when I was!
I was 20 & single + no kids —

10 PM Had a really good lunch — hunt party with
Bacon — baked potato, sour cream — veggie fruit dish
& coffee — got home — had 10 calls — so I called
Denis — not him — phone fell — needs to be
late — cooler! called Mike — he said
they will be down (or over?) in 3 weeks`,"2009_00049":`Can sleep in their van.

3:34 had nap - TV still on
invasion - tried to call shown -
that goofy noise played? (Don't have long
distance yet)
watched a show on the tents in
the rain - now Einstein -
almost supper time. I'll get the Sunday
paper tomorrow - good -
June 1/2 glass of wine. Wanted to
just eat nuts -
so full - goofy fish &
I guess there wasn't
no one knew - he

Sunday - June 7
Up at 7:00 - real
foggy out - can see buildings - no
visibility - made coffee - went to tor - 4 times
- was really good - ham & green
peppers with Spanish rice - good corn -
supper good too - Amy & Louise crook me
up - really funny - goofy streak other Hz -
tonight at 6:00 in the "Tong" - I'll
watch

Goofy lady at the next table draws
me nuts. She has long bright fingernails &
nibbles her mouth over & over. They play a lady
named Joan asked me to join "Red Hat" ladies -
no - I hate them. Tried her. I'd think
about it - goofy -`,"2009_00050":`need:
Robe
coat hangers
5 pant hangers
coffee maker or rolls or pantry
long distance (phone)
2 new sheets - fitted + plain

Too 8 hours sleep good - 10 or 11 too much!

Monday June 8
Up at 7:00 - lady nurse came early & I took a good shower but couldn't get the water warm! It was HOT - I'll fiddle with it.

Went down & took bill to office.
Lady (head of activities) took 2 pics of me and took the letter! Also asked about telephone & long distance, she made a note about it. Lots of tornadoes (5) in the county - lightning & rain here -
Ruth just called and I heard it! - We laughed - neither one of us could think of names.
Talked to Denie - coming up today - We said to eat at 5 though.
Good salad - chicken - meat pots brown
apples & hot pudding & coffee - I'm too full.
Denie where are you?
He just left. Bought me a different telephone - took my cash card - gave me $1 - (I have $25 now) God let cell tel co. I get
shute & a robe - He brought & put up 3 pics
took one back - a fire in chimney - Too violent -
Florida pie behind couch - "trees" behind bed
Had a lot to the Apt. Denie took my`,"2009_00051":`cash card - that's fine - I'm going to bed.

Almost 8:00

Tuesday June 9

I got up at 7:00 + paper was here, made coffee & read paper + TV news on. Jane called that they are coming up at 10:30 Friday - good. If Denis gets me Long Distance on Tel. I'll call Ruth. I'm happy that I just pay $20 a day - $600 a month but I get $870 so she is making $1290 (or $70 if they take love note.) for rent. I'd have to wait until July 3rd.

Found out Lorine is 96 years old - she's entitled to be called (+ is)

Last note: Denis brought my pie up + hung them (wrote this already) So lucky to have him! Time for lunch.

(12:30) Roast pork, soy beans and rice. Didn't want for dessert. Skipped the book.

Wednesday June 10

Up at 6 - made coffee - paper here. I read it, need toast - ate - clock was running so I took pain pills & laid back down. It's 9:00 - "Family Feud" on channel 11 - Jane called - good deal & they can't come free. They are coming Tue - cleaning on Fri anyway. Shower then, wrote 2 cks fairly 4.257 mobil

1/6.94 - prevention mag. sub.

Just spent $6.05 on Avon - shampoo, bath earrings + stock chic in black perfume - don't care - need more clock books -`,"2009_00052":`4/15 - Avon Lady Sally Barry is in a wheelchair. I can't walk—very sweet. Sold me shampoo for $2.00 (gave her $3). Go to a casino on their menu. Will ask about it. Shampoo pretty good—Amy gave me her meat loaf. They do go to a casino on Thursday mornings—& need more time.

**Thursday June 11**

Up at 5:30—Bathroom Day? Shower & tomorrow need to wash my hair—check book a mess—need cash card and pay big bills with check—rent—paper etc. We'll figure it out tonight—trying to decide if to tell Denis about casino outing? Soon wash my hair & have new Avon shampoo. 12:30 lunch & 5:30 supper (not elevator) Lady on elevator reminded me. So did wait—also a gal asked me if I was hard of hearing? She could hear my TV down the hall—NO!—S

**Friday June 12**

Denise was here—gave me $60 & I have to pay Avon out of it—HA—she also brought me a nice robe & sheets—I have $2,000 in the bank!—my tax etc. check came. Barb sent a darling Mexican Indian "rug" for under my vase—Polly also a lot & helped us making a hearing aid—THANKS for me. Medicaid will pay it—THANKS!

Wanted some if it was for or not.

**Friday** almost 8 & not cleaner—do it today? I love my new little...`,"2009_00053":`Pole & I like it - Had 2 coffees & toast - 
Emma here Sunday - Binging wine & 
dish away. He's a doll! 
ate toast & cherries - TV on. I 
muted it. Will read my book. 
Napping when "Maid" came at 
10:30. 
Was the blonde I either they 
were drunk or doped! - Only here an hour. 
Cleared bathroom good. Vacuumed & changed bed 
took sheets to wash. Watching "Price in Paris" got 
dinner for lunch - 11:00 - I gettet salad & cake 
for lunch. 
Story to super at 4:30 - ate back & finished 
my book - Will give to Emma and get another 
more corn juice. 
(Sat June 13) Up at 5:30 - but 5 times 
to toilet & urine stinks - oh oh no! 
a little foggy out - no paper yet - 6:33 
Paper here at 7:00 - I went to the "Country 
Store" at 9:00 - Stuff Cheap! Got dish soap 
Fiddle Faddle (Grapefruit peanuts) & strawberry 
jam. $3.50! A little ladies - & see at lunch 
lunch sucks today - Out of wine 
It was OK. Mexican + Jello - Napoleon 
TV news & late 

Sunday June 14 I remembered last night 
that tough looking blonde that 
cleaned my room & took my dirty 
clothes - didn't bring them back! 
& lots of orange sweat pants?`,"2009_00054":`Tell authorities tomorrow. Got up at 6:30
no paper yet.

Some lightning or else blew
outside my window last night.

Called Denis - not coming until
but maybe sooner - & he's sooner.

Got a new - better look but still
wish Denis came up.

Monday - June 15
We came up & bought $50
worth of stuff at Woolworth - got great pie from
Molly & kept it put here. Also got R. on
& need a photo album for Omaha
sick.

Had a good lunch - spinach cheer
and - (sp?) & ham soup. Then went down left
instead of right to mid R. pics -
Back from supper - 2 huge meat
all rice roll & cabbage - a good salad
- coffee & great cheese cake. Hell now. A
way nurse said "you're walker in dirty wash
& hell!

Tuesday - June 16
Today is it. Just today
coming of 10:30 - can't wait! They came today
was a shock. Back because I just been
& was rather other found Brenda -
first came? Anyways had a good time
talking - Den had a nice talk patch
& stores pretty ugly but didn't bother him.
Signed lunch & supper they bought it up to me
need to check mail

First fall in left. Buy some of bed / but`,"2009_00055":`again couldn't get up. Had to push range off. They got me in bed—stayed most of night. Nurse brought up my meal—
not very good—trying to think of pal of Jane's—
not today—but still a cabin—both were Vince
Same at the cab driver in FL.

Pretty We are having a fire alarm—
stay in bed with door
closed—lites flashing off on Harvey—
got this over—
1/30—lites still flashing—
just want a nap—BP
was 134/8—pulse OK.
Now a tornado warning—I had a
good supper—book—favorite—good
read—didn't get to pedaling—so tired of sleepy
back—
Thursday June 13—what a day!—
came while I took shower—no
water wouldn't come out—soap stiff
on me—then my lens popped out of
reading glasses—also toilet won't flush—hot water
in shower doesn't come on—no bra
either—
"Janitor" was the blonde that
didn't bring back my clothes—don't care
who fixed or long as it's done—
wonder if Avon lady brings
my stuff or if I go get it—`,"2009_00056":`I didn't say anything to the tough looking blonde about not bringing back my laundry. "Family Tied" on Friday today at the new book & got out in dumb luck at back. Got a diff book that looks good.

Lunch not bad - good polish sausage but cold bow-tie macaroni - zucchini & choc. pudding will read + then take a nap. I tried to change seats with Louis but they said I had to keep my assigned seat. Ha.

Dinner was good - roast beef - mashed potatoes & gravy - little vanilla pudding - sleepy now.

Friday - June 19

Breakfast with - need stuff - Denis -

Made hard coffee - clean up day - blondie?

I asked Denis to get me a long distance card - heard OK. - Eating cherries!

Lunch room - may go down, if I'm not mapping.

Got a cat - cat - I went store + tried 2 times - first - no answer - well - do something else - broke the bottle neck + got the What a Nuisance.

Sat June 26

I asked Avon gal (name) if my order came in? She said No! it will be here. Me! I asked "why is it taking so long?" she said "I didn't send it in yet well - I tried her." I really don't like to wait that long for an order.`,"2009_00057":`you bring it down? No more Avon.

Well, it's 3:00 - I had a short nap. Called Denis but he's not home - tried him. He needed to talk about money. I want to talk up here with someone or anyone today. I really want my ATM card - still 0527 pin not about $2,000 in there. I'll need it without money in the bank as my doc comes every 3rd - and Medicaid payment. So I'll get my ATM card - if Denis comes up. Just got weighed - 164 - that's O.K.

Monday June 22. No Denis so I'll wait until Saturday - my clean clothes were outside the door - great! April called me - just got my number from Mike - guess he is coming back next week.

I had a 2 wash clothes "show" washed my hair - got clean clothes - will hang "Fred" on winter's wire - Denis brought up 100$ - was very nice. Put money in what's pocket in bed drawer. I told him I didn't like to come to anyone - not especially to tell what I spent money on - he said OK - we got my Medicaid numbers to keep saying "stay out of trouble" & said yes because I'm so sick got some aloe vera cream and it should last 2 weeks - 6 bottles in a box.

Wow - I'm too full - water song - but speech of the matter. Will another book. Hope to you.`,"2009_00058":`Hi mom—ear test 7:30
Dinner will call at 6:30

It isn't any good—I'll take it back. 9:30 country store—good roast corn. Fiddle Faddle. Got 2 loaves—no salad—made me sick. Got into 20—still late. Took back at noon.

12:00—R called—got my piece of the pie. Ate it down then. She said I looked out at about 4:00—Bored to death! Thought I finally found the title not address but so much work. Could go to the neighbors and play. Maybe after I eat—
Stumbled on to "a note at the moon" with Ben Stiller's face on it. Still to when I got back from eating—Rainy like crazy. Going to bed 7:30—AFvon

Wed June 24
Up at 7:00—proper coffee—
Took more rolls—gel just brought fills depressed!—in the last 2 days moved—moved until 10—having Fiddle Faddle—
A good dinner on—
Going to eat it. Then go to Tigers—
1:45—Just got out from work—
Polish sausage, ham, potato from new—
Pasta—no full—didn't go anywhere.`,"2009_00059":`Then June 25) up at 7:30 - I got my rent bill 6.20.00
9:00 30c 186.00
11 - Fred
never be broke - 566.00 247.00 - 314
I miss my Hong Kong though - ate some
"tidal tide" - need some stuff - nail clippers
and rolls -
8:30 - writing for "Fred" ?
I may call all to go to Tyne today.
I need some juice - it was on.
Coconut pie - too full. I called to
my agent was 35 in the aft? -
Friday - June 26) just got back from
hiking trip. They went back from
bed at ear - nose and - found it
always - go back the 4th of July. During
bought a big - ree - I went to tell - but lost
heated up coffee - "Fred" in on
cleaning out in here - strong Blinds
What a surprise! Mike is here!
I was stopping at the corn in - he's huge & thin
a shirt with facing ears on it. He has a little
gray beard on the side. Now he took off to
meet Denis & cat. Also went to
keeping water.
I bought a day! I got my own
finally - lost the earning.
I got from the office brought the
stuff from Sheila. Will telephone and the`,"2009_00060":`cutest stuffed cat! A wrinkled guy and tan he is impressive - really big & soft. Leave it to Sheila! Need a good name for him. Also lots of pictures of some red chowder - just not Will -

Anyone got from the office (Sheila) friend my loving for the corn chips? Named the cat & hard to call Sheila

Tried to call - hate that each call card! - Hope Demet Mike come up and put in my new phone. Also lots of pics of kids when babies. All so cute!

Sunday June 28 Last day of June!
Stood Hot weather Cooling
Finished wine + book - murderer a woman - not who I thought! Will try &
get another book by her.

I think boys are taking me out
for lunch, we'll go to Tiger & demo
and shop -
3:00 - had a nap - boys should
be here soon.

$55. Quite a day. Mike came & we
went to Tiger store - he knew the way! /
met Vince there - lost it Reno! Mike came &
Vince - Jude we left demo just as
great time! Darfield "in on" etc.`,"2009_00061":`Monday June 29

Up at 6 - made coffee - paper here - + clean clothes - buck shorts today - guess Mike is gone - 8:30 - fruit wine.

Just had toe nails cut - By Dr. late letter - not doing anything today - watching "Fuel" now - shower - God came took a good shower - water too hot today - too cold yet, oh well - at 10:30 - having no wine - anxious to eat - come back + nap - news still all about Michael Jackson - lunch wasn't bad - beef barley soup + chicken salad + sandwich - pink sherbert (too sweet) - dinner

Well I called Al + went to store - only had 9$ so I got a matl. envelope + gave him the rest - ate supper - chopped steak + lima beans - now 6:00 - I called Denis told him + needed money -

Now - Sponge divers of Tupper Springs! - I'm drinking wine + watching this - still about Michael Jackson - now about his kids - he died

Tuesday June 30

Up at 7 - 8 now - I just left Denis a message - I have $50 He - need money

Denis reminded me he gave me 100$ + I put in a shorts pocket - so I had 60$ when I thought`,"2009_00062":`I was broke. Now Bill never trust me.

Oh well—don't trust myself.

Eating a chicken leg (marylin) & wine.

Took "Sweetie Pie" down & showered.

Sue—she thought it was adorable!

Fell in love—

Called R., got her right away. Emil moving July 17—my hearing aid date!

April called again—no pic today.

Almost supper time—guess I'll go to eat.

Didn't wait for dessert—bed early tonight.

Sleepy now—5:45—way too early.

Wed July 1st

Up at 6:30—1/2 hours in bed—too much—Oh well—paper says too much acetaminophen gives liver damage—yellow urine and nose bleeds a sign—new pill helps joints—I need it trigonamine.

Thurs July 2nd

Up at 7:00—really tried tylenol + flaxseed—went to bed too early (6:30) 8 tonsie.

I hope.

"Fell" is on—at 10:15 shower gel is coming.

Had a good shower—since water got low—fell—Oh well—having wine—

A big surprise, Michael was here! Took me to Tigers—not go to Reno—they didn't`,"2009_00063":`food until 6:00—so we left & fish at Long John Silver's. Good—then milk bought me a lighted clock & a flashlight—typical! So nice! We talked & he left. Said he'd be back Sunday—? Well he? Don't know—so I read my book but now it's 7:35 time for bed—I'm so sleepy—need my sleeping pills first.

Fri. July 3rd

Pills here but not cleaning gal—going to go up & buy hair spray & tooth brush—at 9—cat is a movie top like to see—if I'm not too sleepy.

11:00 What a day! Went down to 3rd floor (not sure but door was) & met a gal at a florist—hair spray & fiddle—fiddle—came out & here is Paws cat gal that works in there on the floor! No points on—& helped her get up—started to leave 10¢ in store but lady tried me not too. Now at 11 I went back—still no one there—came home—will eat lunch—maybe go back after.

Sat. July 4th

Dad is taking me to W.M. at 10—need to buy new tops—lots of stuff—cute Mickey Mouse tee new sandals—white milk—looks & mop & still own county store—Oh well—I will have Tue—or not—I'm waiting for the paper—`,"2009_00064":`not a bad day - took cab - but very embarrassing - it was too tall to fit in so another "car cut" came up - took me to HyVee - don't think it was closed - 15¢ - gave him a 20¢. I got 3 magazines & ice creams - Read & drink wine napped & then tried to call Sheila - No go - NUTS Called Denis & told him to call tel. Co to come up tomorrow, wish I knew when Mary & Cyril are coming up? Hate surprises - almost 7 - bed at 7:30

Monday - July 6
Nothing I have to do today & I like that. Up at 6:30 - coffee & paper. Back to bed - up at 9 - "Family Truck" a repeat - Halloween - Slept most of the afternoon. It's 3:40 - supper at 4:45 - need to get long distance card figured out. Trying to remember what I got store?

Tuesday - July 7
Up at 6:30 - paper here - have to go to library store & pay them. Denis postponed my hearing aids - waiting for 9:30 - Finally - paid for stuff $7.50 - got cheese balls & bread & J. Silver's fish & chips. Eating & having wine - really good! Still all about Michael Jackson - at 11:30 go to lunch.

Not a surprise! April here with Mike - he got her the guest suite across - 1406 - me in bed & really late - I had to wake up & she is too. Cancelled support called Denis to pick up some fish - these we are`,"2009_00065":`going to Barb's today - I really hate surprises - my phone still doesn't work. At 2 p.m., I hate that. I hope Denis comes up after work. I called and asked him to bring a few things up. Guess Mary is coming up too? Well, just went over - told her she didn't have to eat downstairs - Denis will bring food.

Wed July 8 Things went OK. Phone is fixed. I guess I pushed wrong button anyway. Talked to R. I'm afraid I have some poisoning again! Need more cranberry juice. Called Denis he said they'd be here around noon. So, was OK. I thought I lost my block spring! But it was under my pillow. I need to thank Mike for the $300. Denis just told me yet. Swell. Slumped Mike yet. Mary and April here - decided to eat at a Chinese place. It's 11:00 - Mary is taking a shower.

We drove to Old Market and ate in a cute Chinese place - they had Manchurian. Good - I had egg foo young - good. Came home and napped. Mike was here this afternoon. We met Denis at the Olive Garden. Really sweaty. Barb was there too - she's a doll - I had shrimp and asparagus in risotto (like rice) with milk. Paid the whole bill - wow! Over $100. I'm...`,"2009_00066":`hair spray - 2.50
tooth brush - 75¢
Fiddle Faddle -

sure - brought lots home - my stuff isn't working
not really cold - also showered - so hot
water out.

Really still sleepy & hungry - got a new
refrigerator! And guys fixed the shower.
Quite a day! Mike Mary & April left. Sheila
called me. I ate the rest of the shrimp. Took
a nap - skipped lunch! - have to go to supper -
4:00 - had another nap - up + TV -
then 4:30 - supper - having wine.
I hope Denise will take me to W.M.
Sat. Fred stuff
Two full! - ham sweet potatoes
vegetable roll + apple + chocolate pie -

Friday July 10 No cleaner yet? She
called after 12 - can't decide if I'll go to
Wal-Mart or have Denise pick up stuff. It's
such a job to go. Decided to go though.`,"2009_00067":`2 pills at 7:15

Friday - July 17
Ear ache - Denis
picked me up stuff - more rolls
coffee - cheese puff - pack of chips
I have NO energy`,"2009_00068":`Wed July 15
Up at 6:30 - coffee + roll - no energy today - back down. 10 to 45 - looked at all my old diaries for ear call skills + found it Atkins - $10. Showed Wash my hair but too lazy. + trip tomorrow (not shower)

Then July 16
Dad dreams again! - got up + had coffee + roll. Not feel sick going to bed again. - I did - but I made breakfast

Washed Hair!

Then got called - coming up at 9:45 so I can take a shower. Cold shower - like crazy + snog - But took a shower anyway. Running

Sat - July 18
Up at 7:00 - ate roll + cheerios! - Ear some bitter blood - Have to buy a hot pad today. - Call to Walgreens? - No - read - drunk wine + ate supper - fish + fish + pepper (dry) they put in Ruth's number.

Sun - July 19
Made coffee - up at 7:00 - no paper`,"2009_00069":`Monday July 20
Bro's birthday - but can't reach or even send a card! - not need to get Mike a card - feel blah

Tuesday July 21
Rains - foggy out again
County Store supposed to be open at 9:30 - guess I'll go up
Crazy dreams -
Stupid store NOT OPEN -
Poopy called Della -

Thursday July 23
Just sleep all the time - units - Time for "Fuel" -
Think I'll go to Walgreen at 1:00
$150 money + went - got my
hair fixed - no wine glass at thrift store
got $14 - hit - got a cute card for makes
our sticky note but not better, I have enough money for 1 more trip to Walgreen next week
11:30 - going to lunch pretty soon - laid down for 1/2 hour - watched TV - guy falling down a snow cliff & got hit by a cycle

Saturday July 25
Had a super call to Della - she said a check for $600 was coming to me from old Korea
not telling if you going to try to prove they wrong at Rip out the cash at home - not tell anyone about this - even
then keep more run out of money - thought`,"2009_00070":`L. Dr. Adkins

Got out my turtle necklace! - well-stripped store was open - just from China curls & a frothy puddin' -
Back from church -

Sunday July 26 - up at 6:48 - tomorrow I'll get Kemp - go to Post office & bank
& nice just called - clothes
the month until Friday -

Tell Reneé Denis - I'm out of time on L. Distances
up from my job - what is Denis?
found cat ears off of me - they -
it's been pink streak and cabbage not
to good for me early - that
sweetie pie Denis came up put in
a lot of time on my long distance.

Monday July 27 - up at 7:00 - today ok cooking
got some eggs - no eggs again. Hope
water too hot! Have a good book finally. To
1/2 - will fix my face -

Tue July 28
Yesterday nice?`,"2009_00071":`I skipped lunch & Molly came up at 1/30 - gave her a $20 bill - had a little problem at bank (Genius gave me the wrong check book) - but my ID is little lost & do have money in there! Wells Fargo they gave me 2 $100 bills & the rest in $20s! But then in coffee wrapper in fridge.

Laid down again until 9 - "feed" or thinking about Xmas - why? get away for Canada - may be for boys

4/30 - Russell called me! Now is in the hope again! I hate that - but he is coming up next week & take me to Tiger Town. Be fun.

Wed 29

On OK - up at 7:00 - coffee pills & tea - already tired - finished my book - it was cute - a love story & lots of sex.

11:30 lunch time - but not sure - just had a real snack. No plans - not anything in the city so walked only out for a beer - library - then at home - in a chair to the nuts!`,"2009_00072":`Christmas

Dena - may sub.
Ruth -
Mary Fitz -
Jan 28 -
Molly -
Michelle -
Shawn - may sub.
Mike -
Brian -
Shane -
Dan & Maria -

They had a long outside list to fill out about their nice letter.

Thursday July 30th
Up at 6 - just had good lunch. I wanted more Bubba's ribs but they were out - or well had a nap & now it's 2:00 in writing for the bank. Planned to come & fix my water line - the hot is too hot.

Friday July 31st
Up at 7:00 - just coffee
Just got back from surgery - Amy gets another all the time. She said you didn't get much - I said "all your fish if you'll remember." Tickled Louise.`,"2009_00073":`Sat. Aug 1st

I was a day behind. Boy! my ear hurt—can't wait till mom. I took tylenol & put heat on it's better. Hope it stops that way. Guess I'll look at iron shirt over. Still just took a shower—water too hot. Also washed hair.

Lena is back! Good—at 3:00 we're going to get my earrings! Good.

Wood lunch—Marylin told me twice she was glad I was there. We talked about Amy—she said Amy liked to hurt people & called her a "drug addict" once. I told her about telling Amy if yet she was glad! So I love 20 friends at the table. I know Louise likes me better!

5:45—Had a great afternoon. Didn't just come wonderful ears. Tiny at a design $45.00—the ate at Spy, inside we had stepped got wine. Time at 5:45—Kissed Bob goodbye.

Sun. Aug 2

Up at 6:30—ear some better. Went to church—went with all—my ear is better. Mom was not working. My ear is getting now. Let's go to it tomorrow—see`,"2009_00074":`Had a call about help with shower. I thought I got out but another call said I'd better have help once a week - & didn't want to jeopardize my eligibility status. So - on their "state OK," & finished my spray ear stuff hurts. Having time - Of No Hells" it's only 13$ - 175 at Wal-Mart!

Hold down at 6 - up at 8 & didn't know if it was 6 or 8 at night - Mom or Dad! Nurse told me it's still run our hurts.

Hearing Aid Day. + bad ear day! Can't wait, almost 10 - lunch pretty quick.

The Doc. was an ordeal! I got sick - sweating & my BP was 183 over 70! So I rested won't drink get my heavy diet & will stay here - they picked me up some time + my BP came down to 156 - they are going to bring my sugar up (I think) at 5:30 & feel better. She got a lot of crap out of my ear & showed me - Now I go every 2 mo. & haven't done - won't be as bad.

Friday Aug 7

Watching "Fried"

10:00 - having sheer puff to wine?`,"2009_00075":`Kenny just called—said I'd go tomorrow so I will.

Sat. 8th Kenny came at 10—got lots of groc at "No Frills" felt lousy walking down aisle. Got cheese crackers & 2 soups. Gloria will be back today—she have him get me stuff.

Sunday Aug 9 Held off stroll—still raining out—just talked to Denis—He's got to get me a B/P cuff & cough drops. Amy is getting worse—why am you so late?—came—and after I said "it looks like a lot of people missed church—she said "they have been absent gone." I disagreed—but Marilyn left me her phone no.—Didn't work though—will go down at 4:00—unless Denis is here or coming.

Denis came up and had my new B/P—60/4 very nice on—118 it read.

Very good—I wanted to eat but he had plans so I said great—so I had fun.

Monday Aug 10 Walgreens with Kenny—found a "glass" scale—need Denise to activate. Skipped church but will go down for supper. Ate half of it. Tomorrow...`,"2009_00076":`my hearing aid day! Good—
Well look at my scales—and get
them started!
Sent Dana 40¢ (or will when I
get address) writing for Dana’s
aid.

What an adventure. &
hear too well now—Ha—Denis
didn’t have time to eat—so had
scrambled eggs with cheese & wine—
& didn’t know else. Kept at each
level.
I have to take it out to nap or
sleep at night. Everything is so loud—
when I clear my throat etc. &
get used to it. Denis was nervous
coming home—almost ran a red light & I
warned him & he slammed on the brakes.
Made me nervous.

Wed Aug 12 So loud!—Ha—Need
stuff at drug store. I have iron money
plus 10¢—Good—Denis up this aft. for
Scale & B/P—PHONE is most important
Can’t get anyone!—
Denis up at 11—So I don’t
Drug—Denis—
Coming up at 11—then I’ll
eat lunch & nap—
Got 18¢ stuff at Walgreen—Didn’t go`,"2009_00077":`To lunch—have to supper—
Denise is coming up to fix
scale + B/P and I hope phone!
Called Ruth—told her about nutty
woman "attractive" & Mona Lisa" painting—
Didn't want it + called or off to mental
ward.

Had good super-baked chicken
Legs, mashed potatoes, Lima beans & salad.
Had to skip dessert—I was afraid Denise
would be locked out up here—not here
yet—HA.

We got here—scale OK—+ also
D + I had wine—took with shown
sleeping pills—going to bed—its
only 7:30—
(Then Aug 13) Up at 6:30—putting in my
new earings (I hope)—did I ate
lunch—hearing aid too loud!
An odd thing happened with it: It started
beeping like battery low—so I put in
another one. Then I needed a nap but
when took aid out it still sounded liked
was in—beeping etc. Got it to stop by
packing in—then removed earings—Boy
spooky! Finally after nap I got up & it's
OK. I'll tell Denise tonite—
Called Becky—told her
about trouble—she skip supper—`,"2009_00078":`Friday Aug 14

Went to supper - decided I need to just ignore Amy - just talk to Marilyn & Louise - 6:15 in dark - wow! Did ignore her! Good - so did Marilyn, noticed she left. Louise alone. Put in new butt, still sleeping!

Sat Aug 15

Want to go to Wal Mart - get a carpet sweeper & 3 T-shirts - turq, yellow & black. Denis is coming up sometime. Changed it to Sunday - today - Hope this pen is OK. Just got it at Wal Mart.

Tue Aug 18

Well - 3 days gone. Denis & I did get $50.00 stuff - carpet sweeper too expensive - need stuff from country store. Also got store stuff until 7:00 today. Made coffee - had roll - sat cancer fund $5.00

C. Store was open - Hooray. Got cheap crackers - little paddle & orange slices - good - $3.00. Didn't go out at 11:45 - watching TV "History" - know the story. Mommy Porch - checking who is there. Brother of babies - ! Sprayed hair & slept. Supper - I have B. Salad & soup. Wine & candy bars.`,"2009_00079":`Wed Aug 19 Rain & fog again! Need to call Dennis. Did he say O.K.? Said he'd show him where they all went. That made him feel better.

Thur Aug 20 Makes Birthday

Had my first baby—never forget that thrill! I thought it was Friday. Ha—so Dennis & cleaner probably won't be here. Dennis tonight.

Just tore the wine box open & got a full glass—made of shrimp. Ha—have to go to church.

Dad came for shower—too hot again—she agreed they have to get the pipes fixed.

Friday Aug 21 Down here? Paid in full—tip at $1.00.

New deal on money—no checks but Dennis giving me 100¢ a week. Should be enough—taking me to Wal-Mart every Sunday just to get what I need—need pliers to open wine screw off. No more coffee—& suppose cleaning gal will be here soon. Want to paper and bed changed.`,"2009_00080":`Back to bed but up now for
a fixed
Good news - B/P works!
I did it pushed in the wrong hole.
11/75 - good! Almost bought another
one. A funny fraser on - blew before
Gloomy out - I'm having wine
Aron watch heart beautiful - she gave me
money back for head sets - sold out -
NUTS - But have $60 to get presents
maybe Jim -
2:30 "Monk" is on. Never saw
before - need - women
1. Sheila 10¢
2. Barb 10¢
3. Marilyn 5¢
4. Jan
5. Molly
6. Maria $60

Sat: Aug 22
12 PM - Then 1:30 - Up at 7:00 - woke at
no coffee at night. She has to quit coffee
the AM - I hope - need batteries for remote
no TV until 8:00 - too early for paper
NUTS - County store was open but wrong
size batt.
Henry is coming to get me at 11:30 -
Didn't sound like him - sounded DOWN -`,"2009_00082":`Checks I wrote

| No | Date   | To          | Amount |
|----|--------|-------------|--------|
| 1  | 8-19   | Owen        | $81.12 |
| 2  | 8-20   | Xmas (boys) | 18.00 + tax |

No Checks - 180 a week

Jan Wollen
Brighton Gardens
9220 Western Ave.
Omaha Neb.
68114

Remote still not working - even with new batteries. Denis will have to work on it tomorrow. We did "re-code" it.

What a guy!

No shower! Will call this A.M.

B/P - 123-64 - Good -
Rainy & foggy like crazy

11:12

Wed. 10th
at 7:00 - Feel lousy.
B/P - 124-64 - not bad - slight - foggy
Lightning - In full of goo - fever!
Finally! Took a "sort-of"
shower. Still too hot - jumped in t`,"2009_00083":`found out he'd had a difficult time - he was 1/2 hour late! Not like him. He went in for me (to do) I got me batteries and wine - last box too hard to open.

Sunday Aug 23 Slept lousy - worrying about Marilyn's deal, trying to be Lady Bountiful. Ha - have to quit that! I wrote Marilyn a note telling her I couldn't buy a carton every week - too expensive. It would be 1/2 of my money! Nuts - told her I couldn't do it! Got up at 5:30 - now I hope Denis will come get my remote to work!

Talked to Denis - going at 11 - wrote Marilyn a note - forgot to tell Denis good! Ruthie called - still packing! all she does is move - sending pieces of her new house - good.

next page`,"2009_00084":`Monday - Aug 24
Up at 6:15 - paper was here! Had cereal toast & coffee watching animals platform for money, a dog won $25,000 - major luck to bed. Writing to me at 9:00 of "Family Fred" is on.

Have! Good - my B/P is high today but it will go down. Had a good talk with David - he is so cute & nice, I know he got Amy & Louise. Had a nap - need to ask Denis about other $50.00 + Scrabble Dad (in massage - left.)

Tue Aug 25
Up at 8:30 - good - have to go down for lunch AND supper. Wish they'd get the "late supper out. Almost "Family Fred" time. 2nd game on. Forgot to write - had terrible diarrhea at 2:30 AM - candy bar & ate? a snickers (?) and no good supper. "Fred" white team just won $80,000! Wow! White people won 3 times in a row over blacks. Denis just called 11:12 - he will bring me money ($50?) tomorrow night. OK.

Wed - Aug 26
Up at 7:00 - feel lousy. B/P is 125-64 - not bad - smart - foggy. Couldn't believe it. In bed of goo - fever! Finally! Took a "sort-of" shower. Still too hot - jumped back`,"2009_00085":`out. Clean anyway.

Had a nap, woke up my face—
hung over 3:37—need mostly pills
alive—sleeping pills, dry soup
mugs—Pills in hand, coming?
answer—not at all—came in lunch
room. Came in 100$.

Thu Aug 27 Real rainy out, + foggy. Need
staff at Walgreen's. Amy?
Fri Aug 28 Yes—K got me. My knee
started to give out—had to come home.
Asked them to bring up my lunch—they
did—a sloppy hot dog & chili on top.
Today got up at 7—real foggy, no rain.
As quick as de gala change bed I'm going
back—at least I drank cran. juice
Sat Aug 29 Didn't go to supper. Amy
thought to no trouble but felt sickish.
On quick in & got in there, got some
staff & came from hospital all off. It's 6:30
My BP was 131/68—not bad.
Work/marathon her typical—not
sure how much they were typical.

Sat Aug 29 Day ahead of myself. Today
in Sat: 9:30—Have to go to dinner
OK—so hungry! Made up with Amy—as long
as she behaves`,"2009_00086":`Sunday - Aug 30
By 8:11 Called Denise - don't have to go to W.M. but come up & write else for rent paper. Here my doll! & have 1/2 & more.

Monday Aug 31
Last day of Aug. Hooray - I just called and left a message asking Jesus if I could skip supper! Hope so.

Going to skip anyway. Amy bent my ear at lunch again about how the buck got state but I'm not going to take a nap now.

Had a good nap. I need a can opener. Maybe Marilyn had 2 - 6:10

Sleepy again. Went to bed at 6:30

Tue - Sept 1st
Hooray! - slept. Real sunny out. Need a CAN OPENER!
C. store opens at 10 (it says) just had 2 deviled egg halves - good + clear - 1/4 glass of wine + crackers. Also washed my hair.

Didn't want to go down for lunch but better not skip both. Went to lunch - Amy & Louise both "stack tough fish" Amy & Louise and I had a laugh. Marilyn almost fell down leaving. Taped until 2:30 - TV + wine

Wed Sept 2
Decided to get HBO. Good movie on at 11 - Not sure what it will cost. Don't care.`,"2009_00088":`Still need a can opener.

11:00 Just left a message with Deniz to please bring me a can opener & pain pills in the morning.

But need to call Deniz tonight about this goofy letter & get from upstairs. Maybe I will that night. He don't own that, one of the girls said. Deniz looking into it.

Terrible lunch! 15 min early & all 3 gals quiet and sulky. Pokey! 12:00 tomorrow for sure! Good onion rings & tuna salad sandwich.

"Beast" movie on—a killer—Laid down but restless—sleep at 1:45—TV about hyenas & cheetahs—LUNCH AT 12:00

No sooner! So boring! Even Marilyn is always really tired & won't talk. So glad & eat up here for supper—Had 2 burritos—cc, tomato—& cracker—Got up at 6:00—oh well—had to be at 6—that 12 hour! Going to get my today & hopes

Friday Sept 4th Up at 7+8—pa—went back to bed too much sleep—need to change clothes into cotball—no fills?—no cleaning ladies yet—they didn't come until 11:00—D`,"2009_00089":`called Denis & he said the owner or rent will go through — I'll see! Got a cab (Kenya), it will pick up. Got guide — won't bother me at all — especially if I can have a kitten & make my own food & NO rules! Denis coming up soon. What a deal! They said I should only have 69¢ a day to spend — jerks. Sat. night — ate white cattle — Tom &t cheese ice cream bar. Talked to R. about Apt. had a lot of laughs.

Sunday Sept 5

Egg & coffee today — talk about future — not paying that high rent — pay out of work. Just had a long argument with Shirley & I knew exactly what she was saying about an Apt. MT SAFE — would take care of me. Everyone says this much luck — wish I could find a job — tried her. You've been saying that for 5 years! Anyway she doesn't want me to drive Denis' car.

3:00 — had great meal at St John Silver's. Denis & I — I had fish & shrimp. She forgot to give me any money though — don't need it. Pay $8 & 1/27th a month! I'm allowed to be shut 5 days a week, thought.`,"2009_00090":`No change of address already done.
Forgot to get money.
Sorry such a pill yet - just depressed - I'm
OK today to stay here.
Want HBO or Med?
Mon. least to labor day.

Dear Denis in off today - Labor Day!
I'll call him about 10:30 to watch TV.
Called his cell - told him the
deal - he was at barbe - thought so -
asked for more calls - HBO or med -
let go eat lunch. Here - here this is it from
"not to eternity" on the movie said.
Had a good lunch - BBQ ribs &
corn on cob - ice cream. Depression
Morgen in sad mood - told her to cheer up!
Army OK (for a change) Back in A.P. Glad you
not going to supper - Hallelujah - Going to
my mom's. Weighed first - 171

Well - I managed to piss Denis off.
He stormed out - gave me $20 - and I
spent $85 on groceries! He said you can
eat 3 meals downstairs & you've been broke
all your life. I said "Do you make it"
clearer?" - He sounds like Shaila said I
have no grace for anything." - I said Reason
not grace, so I eat lunch for sure -
don't call him - Most Mrs. Smith
on - cute - angelic Broad -
Shawn called. Had a good talk -
told him I need poor Denis mad`,"2009_00091":`Tue Sept 8

got up at 7:00 - had coffee & toast - Pajamas out - what will the day bring? Guess it's too late to get breakfast - oh well!

Good - Denis called - he is coming up to see our officials - tried him & appreciated everything he did for me - I know he was skeptical but so he's coming up. He kissed me & we talked - he did ask if I cashed any SS checks? I haven't been seen any. Denis talked to S.S. lady a long time - found my cuff watch thought I lost it. It was in dresser drawer with clean pants. Is David coming up? Said he was. Where is he? To find Boy! lunch was terrible - none of them talking but Amy said "It's all you've given to it?" I said "Does it look like it?" She said "Sorry" I asked "I said 'me too'" Had no supper down there.

Had a nap but no David. ate a pizza tom & cottage cheese - wine for dessert. Family fixed us on.

Wed Sept 9

got up at 7:00 - still expect about 1/2 more deal - sign up for bus trip to Baker - need more cough drops - get ck cashed - I was shocked to see water running out of the sink on the floor! mopped it up with a towel & let it dry. Eating cheese & banana & fixed ice on.`,"2009_00092":`Lunch was good old tom, soup & cheese sand.
Got a huge survey to fill out about groceries etc.
Saw & wrote. Boring - but gets component major cash.

Big news is a plane hijacked - let
105 aboard - done Austria. They
let them go but got at least 5 suspects - one
looked like Brian - So - hope not - I'd
hear - no chance - the in particular -
TV full of dire predictions for
senior money - medicine etc.

(Thurs Sept 18) 2p at 7:00 - had pills
& can't cash my check downstairs
this morn (I was told) so - at 10 I'll go
down - no one there - come back yet
and she'd come up at 10:30 & cash it. Had
to guess she meant give me a shower - anyway
water still be hot & so I laid down
went down at 12:30 - well got washed -
Told her about get saying will come up to my
room. She also said my rent to eat been paid yet.
Dennis? - Need any drops?
Plumber here & said when I let water
overflow it backed up under sink & wet all my
papers - he agreed. I'm all out & am fixing
shower water for the lat.

The 11'6" window.

[Signature]`,"2009_00093":`What a nice surprise! Russell called—asked me to lunch the at Tigers! Will we if Teddy wants to come too! Cold water was shut off in shower! No wonder! I'll take one tonite Denis does mind about Russell or I won't talk about him. He said it was a lot more than Russell—city more arguing all the time etc., But when I told him we were having lunch he said "let him" (meaning R) bring you there—"honey" pure—sounded jealous!—He—Anyway they just took out $65.00 but Denis said what I spend on food will come out of it—shot eating at least a meal downtown. He pushed my remote—guess I'd pushed the wrong top button. So—he also bought me an Enquirer I'd already seen! oh well didn't tell him that.

Friday Sept 11 Finally—had a great shower—I'm going to tell Denis I'll compromise—eat ticket save 1/2 for supper & not go down for supper. Nothing will make me do that! Better get rising in—fuzzy again`,"2009_00094":`"Jude" on TV - got on I started from
there was awful. We were back
over - and I know I didn't get what I
ordered - nuts - but I got enough for
supper - going to bed - Had a good
talk with Rita - She is moving tomorrow,
I'm afraid - screened TV remote again
won't work! Trying to punch TV and it
works now - will be more careful not to
hit wrong button.

Sat Sept 12 3 years ago when planes
went into World Trade Center killed
300 people! Rainy day - no idea
on clothes. Can't see them either - at 9
& 50 up - cough drops & chew gum
didn't have either one! I got cheese
popcorn & pretzels - and wine.

Lunch turkey! Last once again! Going
down at 12:30 tomorrow! But I just
bought - and apricots - not enough to
bring up any. I found a good bowl was
covered to put food in - TV has animals on it.

Sunday - Sept 13 Up at 7:30 - 12:30
for lunch - bring some back! Drink a
glass of grandpa's juice - up! It's 10 - 2 hours
still lunch`,"2009_00095":`Nice surprise! Dennis took me to lunch—But she was in a lousy mood—oh well—I ignored it. We ate at a Nat. Fry—
I got 1/4 Ck. Age I came down. He was better
after we ate. I have 3 legs left of
myself and Cole slow—Good! Henry was
animal cops" One poor dog had a
neck collar on. So little cat left
more—man—hope they get fixed.
9:00—just saw a mountain lion chop
on a guy while his wife hit it with a big stick!
Almost killed him—going to eat at 6—
bed at 8

(Monday Sept 14) Up at 8:00—ate my
last honey bun, Posey.

(See new diary)`,"2010_00001":`Bank - open T, W, Th.

scorpion

Wow -

I'm going to bed at 7:00.

Sharks in Australia - I'd NEVER go there! All about sharks now -
They lose 30,000 teeth in their life time - Eek!

Monday - March 29

What a shock!
A cute young guy brought my pills. I had just sat down & put on shorts & shirt - 5 min earlier I'd have been nude - Eek. Hope they fixed "ole grumpy" slick gal. Shower today -
Maybe not - foot or cut my toe nails - Fixed on -

Couldn't get Marilyn - forgot her last name! She is at St Joseph Villa -
I had to holler at Amy for telling Louise to eat! - She got off another goodie - Talking about not hearing - I said if you were talking - she said "what did I say?" HA - lunch tuna fish salad + veggie -
& cherry pie -
It's having wine - Then a nap -

Ste 1/20 -

304 - Stupid bank NOT open on MON!`,"2010_00002":`ate tuna & noodle casserole —
Called Denis — out of wine
Tue - March 30
not up until 7:30 — nothing
to do — no shower or cleaning — have to
cash check at our little bank & I did — at
9:30 — almost lunch time — BARBQ ribs
& pot salad — not bad — but no wine —
I know now that Amy has alz.
too — she forgot Doris's name! — I've
known her for years — I guess I shouldn't
have said it but I said "Are you having
an alzheimer moment?" She said "no" & just
forgot her name" — I said "But you've known
her for years — yes" — getting worse —

2:50 — just up from my nap — Denis won't
bring wine until tomorrow night — NITS —
I found a new journal in my bottom drawer!
looking for knitting needles, no luck —
Snake on TV — eg — how a
minatour — gorgeous — long claws — lizard —
ate pot salad & B-B-Q sandwich
my supper from lunch — worms on
TV — 6:15 — drunk animals on TV
going to bed 6:30`,"2010_00003":`Wed March 31

Made myself get up at 6:30 - had go off dream all night long
with dread.

10:20 - made popcorn - good - on TV
underground war of house - how a
town full of "ghosts" Telladaya
another of space ships to come
now coloke foods - one for
Superman - Metropolis - now Santa
Chase -
I'm hungry - ate frozen "white Castle"
hard, not too good,
Cowboys on TV -

11:00 - County store had a sale - got a
great red silk jacket made in Guatemala!
For $4 dollars - going to go to Bar -
I ate too much - will nap -
3:41 - common Denis - with wine - really
miss it.
Also got cute black T-shirt with 3 diff
colored balloons on it - $11.00
TV in Belize - just up from Guatemala -
Denis here - not happy about my money
wine etc. So I need to talk to Mike about it.
Got me wine anyway - I'll ask Mike`,"2010_00004":`to send Denis $50 a month — Didn't
sleep good last night — worrying about money /
9:00 Sort of numb — don't know
what to do about Denis — call Sheila tonite &
have her call Mike — $60 a mo. to Denis,
Shower soon? — not much at ambition —
Had shower — lunch next 11:01
Lunch — meat loaf & zucchini —
Louise went to the bathroom & didn't
come back — so I asked if she's ok or her —
I opened the door they both acted funny —
"don't come in — she's not in here" — I hope
she didn't die in there! — Something's
funny!
I have $35.00 for Denis and called
Mike to call him tonite — Like to get this
straightened out — So I hope Mike calls him
tonite & says he'll send so much a mo.!
Tried calling Marilyn — kept getting
good numbers but not her. Called Mike &
left a message — call Denis — I gave no.
Now will see. Also told Denis I had
$35.00 for him —
Thurs. April 1 — no paper yet — NTS — 2
called — try and be 7 min! —`,"2010_00005":`April 2 - Friday - at 4:44 my litter went on & nurse turned on water-they were both at supper to let it run - so I had to get up and turn off the light! OK today -
Tomorrow is April's birthday - trying to remember who her mother is?
Can't get April on phone - nuts -
Cleaning gal here - asked her to ck on Louise, also take trucks. She is a crabby old gal cleaning - using the "wand" to get cob web - wish she'd leave so I could get more wine - think I'll skip lunch - better not - need food -
I gala cleaning - knees under bed
Finally left -
Had a nap - 2:00 - 1/2 wine - 30
Called Mike & left a message - Denis (and I) needed help money wise - 50¢ a mo. would help.
No mail - Louise O.K. - she ate lunch today. Amy couldn't remember. Altz. for sure,
6:00 - mopping but decided it was too early - so got up - bears on TV - having a wine -
Supper just a fried egg on toast -
I'll have to go to lunch tomorrow - or
starve - crazy minds never brought`,"2010_00006":`buck my covers! or let me any T.P. I at 8:30
going to bed

I called nurses station about
T.P. & blanket - it isn't 7:00 yet -

movie 11/13 - a Jack
McKolson movie - in love with
an older gal who has a younger boyfriend - can't
remember her name. She married Woody
Allen - But I have to go eat -

Diane Keaton - finally
remembered it.

Got a nice Easter card from Molly
and Matt! Need to get them a gift. I
think a nice silver pie frame.

Now - guess what - tapping and
a knock on the door - one of those
great fruit deals from Sheila! Think
I'll send it with Denis to Barb -
He just called - He's at Barb's - coming
up tomorrow morning - Nice Easter -
Sunday Easter -

Just found this diary - under
my cover on chair

Denis is coming up - 9:24 - with
food I hope - 1/2 - 4 chicken legs -
Yummi! also a little (read)`,"2010_00007":`from Barb & some choc. eggs — she's a
sweetie! — Denis going to her "moms in
Lincoln for Easter. My holidays are
alone again, naturally" — he
just ate some cantaloupe — got Molly's
number.

Denis watered my pansy — don't over water
it says — he also brought me more wine!
"Victoria" is on. also ate little toy
dog. other dog steals food from
counter.

Nice Easter — flower, chicken, wine card
and fruit in a bag (on skewers)(skillet)
11/11 — napped — having leg & went
cracker.

Denis talked to Mike — will get
together on money — stood & gave $35
but he had the key 16¢ I need
vitamins + pain pills — I may go to
Wal Mart on our bus trip

Watching a good movie "Firewall"
with H. Ford — about bank robbers — &
his family as hostages — We'll get em.`,"2010_00008":`Monday April 5th

Up at 7:30 - had shower -
got water in my face & hair -
"Fred" on - I do good on this
I've just got 36 on questions and he got
41 - Bed - too hot in here now
12:53 - lunch time - beef noodles
+ a fake orange -
Bell for feet & ear - ye gods! - a
lot but guess Medicaid will pay it
all - I hope! - I wish I felt better - I'd
go to "sing along" at 2:00
"well - I took a nap. It's
2:40 - having glass of wine. Same
TV & same seat. Africans & cattle -
7:24 - I went to bed at 7:30 / slept
up at 7:30 - will go back to bed at 8 -

Tue. April 6

Foggy out - need
the sun for my paroxysm. Don't feel good - but
never do in AM - having Croakers & wine.
watching "Fred" - Have to go to lunch.

Good soup - cheese & cauliflower
and roast beef & cheese sandwich.`,"2010_00009":`I'm home - just ate - 4:00 - need more
data on TV - look like little foxes
Things having temper tantrums
turning colors - some of us turn
red!

Wed April 7
Raining out. Eyes at
7:30 - ate last honey bun. Ugly
"jackals" on TV - killing baby zebra -
now monkeys stealing food &
robbing cars - nothing to do today.
I'd like to shop - pain pills?

On TV - Yuck - all over the
place. Now - churches - another
yuck - TV goofy - 8:11 - now cattle
crossing river with crocodiles - thousands
of them - and Simon Henry - Ha - I need on
Yuk - I hope lunch is
good - Not bad - chicken & dumplings
(dry) + Louise's layer lasagna -
ate it at 4:30 - golf on TV - tiger
woods - he should ignore talk -
everyone had affair -
TV has killer in Texas - shooting
people in a cafe - guy shoots him.`,"2010_00010":`6/13 - ate had wine - TV on scandals
Ha - Bed at 7

Thu - April 8
Shower day!
Pokey - need groceries - guess I'll
call Randi -
Had just nice shower, need to
call O. Left a list of groceries need
(cat house) Lines on TV -
Lunch was soup & egg salad sand.
Amy ad & getting along fine without Louise &
Marylyn - C'mon Penny, give me a
Cafe -
Speed dy + Dudley - She dogs
had a nice talk & with R.
We agree were both getting cremated
and don't need to go - It's 5:29 - going to
bed.

Friday - April 9
Denis called - he is
coming up - (with stuff I hope) It's 8:11 -
Poor little pancreas died - too much
heat -

Denis brought food - soup & spam &
wine! Also Engineer - Sandra Belloche
kitty a monster! Also runs a dog
fighting group - a jerk!
Out + TV - alligator and a leopard`,"2010_00011":`3 guys came in to clean (Leopard lost a dear) good—now she's scrubbing the bathroom floor. Cat "meows" for her all the time.

Lions got a zebra—guess they have to eat! Cleaners left—now I can get some wine—

Got a surprise in the mail—a calculator from Kida wish"—nice big flat—I'll give to Denis send them $10—sucker list for sure—Denis can't use—Barb—or her daughter—

Thanks on TV

Sat April 18 Up at 7—me or the Dog. Family has 6 dogs! No rules—Victoria is setting them straight—huge fish with teeth on TV

Opening my new wine almost killed me—Ha—let Denis do next one. It's 10:03—I'll have to go down to lunch—Didn't get any soup & cheese sand—

Tail end of "A Perfect Murder" just remember parts of it—just`,"2010_00012":`Ate some food for supper. TV is about ghosts in an old insane asylum. Cats & dogs reacting to them. Fun having wine.

8:00 - just got up. Cats on TV - main motif I had one.

Sunday - April 11

Got in on the tail end of a goofy Eddie Murphy show - full of machines & wizards etc. Still wondering about "A Perfect Murder."

I'm sleepy still - want to do mails today.

Back to bed - until 10:30 - a little worried about all the sleep I get - 7 to 7 - to 10:30 - 15 hrs! Oh well - Jeopardy on TV with a hurt leg.

Now - Gorillas & a gal that studies them! Wow! They would scare me.

Lunch ham & p. - toed Louise & came down (6:05) to her apt. & find her glasses for her. At 1:00 I will, no one but I may have gone to the wrong floor.

I did it's 6:05 - I went to 506 - I'm pooped out! & called the`,"2010_00013":`desk for Louise - TV guys on a mountain top freezing - one hurt his leg badly! - wow & helio - got 2 guys off.

I called desk for Louise - Hope they fix it. Deep freezing on TV.

Monday - April 12
Woke at 7:00 - Afraid it's shower day - Nute - or is it fire & thunder? Like a nut I didn't get my dirty clothes out on time - I put them out at 12:00 AM & they were back inside this morn. Oh well! My fault. Dogs on TV - Chihuahua -

Now the reincarnation of the Lama in Nepal - "New" Lama is 3 years old & wondering what it's all about - Ha - wondering what it's all about

9-11 on TV - Terrible -
11:15 - had a nice shower - & like the young blonde girl that gives it - She said Marilyn fell outside & broke her knee - I asked her to try & tell her I'm thinking about her.`,"2010_00014":`Taking mistreated animals - dogs, horses etc. in Texas.

Lunch OK - love soup & roast beef sandwich. Lots of mail - all wanting money!

My Avon gal is nuts! She left me a bill for 2 soap gels - I don't debit her then. So I took mine down & she said "Oh you'll be in Friday!" Haha - really don't need them anyway. I'll let her do the work - want a week to pay! It's 5:30 - bed at 7 - talked to R - told her about Avon goofy gal! TV - a red haired orangutan on a wild rampage - scaring people in a zoo in Pittsburgh - knocking over motorcycles etc.

Article on Santa Cruz - Jan and I were there - Miss her - The April 13 Boy - this apt is a mess! Letters, papers etc all over! Need my hair cut - she hot - got up again at 9 - cheese & wine - oh boy! "Field" was on - Now about aging in Feb.

Now dog trainer - "Bella" a lousy dog - she hates everyone!`,"2010_00015":`Having wine-lunch at 12—
Went to lunch—polish soup on
a bun & sauerkraut—cake—
12:47—home & maybe stop sleep
this aft—sure I will!
6:24—ate supper—news all
about poor little 5 yr old missing—
baby sitter looks like the mother
of dead baby they found—& Hope not
Wed—April 17—
Lousy pen—need some—
Called Denise—good news on
MRI—car just needs cleaning
every part then—no generator &
bad fan & need angle dropper wire.
Said OK—tonite & good.
Pen is this OK—yes—good—only
one I found—found 2 white
Castle ham—had for supper—need
more wine—
April just called me—guess
they'll all be here soon and sounds like
she is staying—
One min. I'm sweating & the net's in
cold—
TV had the lion Remember the 2`,"2010_00016":`guys that raised him after 2 years
touching. Now elephants in a deep
pit with water in it. They add more to
float them out.

Now fishing - for "alligator gar"
10 ft long. - 300 feet

7:11 - wonder when Denis is
going to get here. We'll stay up
until he does. Hope went to bed at 8 -
(Thu April 15) Welcome tax day - Ha -
But also shower day - poopy - 7:55 -
Not a bad shower - No Denis? Need one.
Called Denis - coming over with
wine after work - about 4:30? Notta I'd
like it now - Ha -

Lunch O.K. - vegt soup - ham & cheese
and - saved Ya sand.

3:20 - had a nap - watching 67 -
snakes up! - wonder what happened
on "Firewall" - H. Ford movie.
Have a headache - withdrawal?
rhino on TV -

3:45 - C'mon Denis - NOW 4:00 -
more snakes!

Denis came - brought wine
Have him calculator - TV absent`,"2010_00017":`Ireland & leprechauns! (they believe in them)

Friday, April 16

Up at 7:30 - I struggled to open cough drops but never did so I'll cut all the tops off! Dance us taking me out to eat dinner. (At Park)

Blacks won again! Cleaning gal should be here - did dishes - having first wine -

Awful what they did to blacks in the South in the old days - dogs & water hoses - awful - Had a nap.

Lunch tom soup & cheese sandwich Louise hated her lunch - said she didn't order it but I said "Yes you did - from me - they traded her -

Just remembered dingy Avon gal was supposed to get my order today - Ha won't ever come - I'm not asking.

I had to go down and get my sandwich & forgot from lunch - Got it -

Cinco de Mayo so darn cute - wish I had one - Ha -

No Avon - Ha - knew it -`,"2010_00018":`Sat. April 17

Up at 7:30 - 8:30 now
flying animals on - new Cats -
oh I want one! - there are curly
hair cats - so cute - going to lunch
at 11:30

Bar b que ribettes sand & corn - Louise thinks she was a
secretary but not sure or what state
it was in! - what a character!
11:00 - having wine
4:25 - mopping & a gal brought in a
pil - up & watching "Haunted" Teen -
ate my sandwich - laid down again -
until 8:00 - having cheese cake & wine -
TV has pomegranates - so cute &
little -

Ye gods! - I weigh 181! - gal
just here & took it - almost 9:00 -
Sunday April 18

Think I'll ask Denis
to just bring me chicken & mag -
no energy or desire to go out. Called
him - he's bringing fish & shrimp - around
11 - good -
Denis forgot mag. But the
food was so good -`,"2010_00019":`Movie "Ray Charles" — He had been a heroin addict — Guess its shower day — nuts.

Mon. April 19

Ho-hum — another day of boring — shower day — I need it. Time is she? 10:34 — late — ate shrimp & lobster etc — won't go to lunch — having wine

10:50 — nice gal gave me a shower — gave her those tiny beads I made — friend for life — Ha — smell better — ate shrimp — will nap soon — I sure smell better — Ha — said that — going to nap — 11:45 —

Jodi — its 1:40 — no pain pill not surprised — 2:38 — wish "dumbo" would bring my pill — I'd tell her she's a long time no mail — that's OK — just asking for money — Hydro on TV — sedated with a dart gun — why? he's ugly — got his blood sample and off he went — 3:30 — gonna eat at 5 — tried to remember name of insect & a scorpion — ugly & poison`,"2010_00020":`Going to eat at 5:00 & go to bed—
6:30—Natives on TV—sitting by ants
to be macho—man!—
orangutan—now—car ads—
fish with huge teeth now—
back to orangutan—little babies
look like humans—
Tuesday April 20—I have to go to
lunch but nothing else today—gad
gave me a tylenol—
Had a great talk with R.—she
sort of wishes she was back in
Aug.—with Emil—in her own home—
Kimberly had a baby girl—she also dreams
of mom & Dad—we talked about Ally—
I told her a long time ago I had signs of it
big deal—TV on our impossible dog—huge &
all over—
Had veg soup—egg salad sandwich—
for lunch—
I need ear batteries—these no
good—going to nap soon—
Good deal—found a good
battery for my hearing aid—had a
nap 3:05 now—went some peanuts`,"2010_00021":`Good looking guy (snake man) Simon
King - can't understand him - now
sleeping having a baby! - snack machine a
mess - sat on gum instead of peanuts!
Jovey "Fatal Attraction" on a chimp,
attracts a lady -
almost 10 PM! - chimp has to be
killed -

Wed April 27 Raining out - hard -
maybe it will kill pollen -
no energy or ambition - and no
honey buns - got rice crispy bar -
but way too sweet. 2:53 up from
nap. Leopard on 67 - Babies crawling -
cute -

David came & gave me a test (mental)
I've been here a year now! Passed five
Donald Infinity is the
snake guy,
and Brian is in Guatemala
not Nicaragua -
I think David made me a doc.

Called Denis. - will bring
honey buns tomorrow -`,"2010_00022":`Watching Bull fights + wild horses

6:30 - bed soon

[Thursday April 22]
Up at 7 - shower today -
Need food - ate cheese balls - desperate! He -
Made toast & jam - good -
First wine - what is shower
god?
She got here - OK god though
not my Blonde - guess she's at
Villa.

10:40 - almost lunch. No
another hour -

Lunch soup + meat + cheese
sand, having wine = 67 has odd
fish on it. Look like plants - also
squid + whales -

Napped - up at 2:30 went clean
balls, Balls all gone.
Smelled something cooking in
hell way appcom!

Switched on TV -`,"2010_00023":`Waiting for Denis—
He didn't come—no food or anything.
That's OK—car batteries—
Friday April 23
Up at 8:00
May get violent violent weather today—
Fed at 9—Bobble "head lady"
Was yes, in all she does!
Rainy now—"Me or the Dog"-
Huge dog—big jerk owner
Won't believe his dog could bite—
Ha! Victoria sets him straight—
It's a Great Dane—spotted—ugly—
Ryan has one—
Wine is gone—nuts—
Up at 2:36—god made me get up
so she made up bed—thats OK—left
message for Denis—if he wants to bring
wine up in the AM I'll meet him in the
lobby—god did empty trash—good—glass of
wine left—TV OK—except dog—cat—
Cat started meowing very loud—
out—Ha—almost wine gone—
Called Denis again—tomorrow
Sat—called him back—said he had been
Check out wine tomorrow—god appreciate
it?`,"2010_00024":`Sat - April 24) Every morning until I eat & feel sick at my stomach. At 8:30 - Dog show was on - an ugly dalmatian won first! - I thought a hairy white dog was a new funny animal.

Great - Denis bringing chicken and wine (and mug) - so my day is made!

TV has pics of animal cruelty on farms or anywhere - couldn't watch it.

5:30 - had a nap but sick at my tummy - that chicken too rich - throat sore too - wine O.K. - now layed in well in India.

Sunday April 25) Ch ($33.) should be here tomorrow but bank not open on MON -

April just called - be here TUE.

Oh boy!

Denis has a blow up bed - I won't be here until July - OK.

Mon April 26) Just rented the apt. 37.25 - Had my`,"2010_00025":`shower - smell better!

Napped again - TV - Don - called
Denise said "No coupon apt" - having
Chicken & wine. Will go to lunch - at
12 -

So sick! I think that
Chicken was spoiled - I took some
items & ate a piece of toast - may
get mail - at 2:30 nurse said she'd
call Dr - at 4 - no one so I called again -
They will call Dr again -
Now on TV - clay eaters! I've
heard of it - babies eating plaster! Isn't
that my kids ever old!
Never did get any medicine. I'm
mad about that but will let it go - I'll call
David later & tell him. Wish I felt
OK.

Pliner called me - Mike will be out of
this apt. Good - guess I'll go back to bed. The
new nice nurse make my coffee or rather
poured it for me (I made it) -
11:28 - these get try & make
it to lunch -
I did - chicken sandwich veggie -
Also cake - and coffee -`,"2010_00026":`1:44 - napped - I'm up - everything is a mess

5:28 - Mike & April came - I always forget how young their hair - April's hair hanging down - messy but I guess it's "sexy" - they went to sleep, woke to meet Denise - didn't feel like going - guess they will bring me some. It's tough getting them to talk - so I blab on & on.

Having wine - Mike gone to eat, met Denise - sleep, woke -

Wed - April 28 -
Mike & April (and dog) took off - he just came back with "gerber daisies" from Barb! yummy - ate a roll & had coffee. Going back to bed. Got to talk M.F. till him & show him 11:30 - up and started Calgon and got wine. Still feel lousy gal in L. from called about that ticket - tried to leave it on the chair.

Feel awful that I was sick all week. Missed Mike and`,"2010_00027":`April were here - can't be helped. They are on their way to Weeping Water - even if I felt good no way - too many memories - Mike didn't think Neil shot Lizzie - hope not!

Dave April 10 $00

Told her to buy pretty when wanted - Mike said that going.

Demi romp.

Friday April 30

8:00 - just called Demi - Mike took April back in car to work again? What the drove first? Told Demi & asked if they could get around me - that for him to take back. She said give it to Mary & say I said "goodbye". April left for golden brook lake - Oh well...

9:23 Family just won a car on Tues. Let another pull - at 7:45.

5:14 - laid down - went down to pop up filling two minutes. Cookie in & she loaded with Mike took it off on top of bed.`,"2010_00028":`Sat - MAY 1st - 2010

Actually may - still no wine!
Denia - just drinking until 10 or 11-
bringing me back. I may. I had
him load me up since... no wine
bringing anyone.

11:45 - "Cats" on TV - had to
turn it off.

12:49 - turkey, eggs & egg salad
sand. & half sandwich for supper.

Denia: - call Mary & Ruth
Net Flix?

The name of the "girl" guy
is Jeremy Weber on TV now`,"2010_00029":`4:58 - ate my "supper" - coffee
& egg salad & creme puff
& - oh well - Denis bringing
me mug + food tomorrow.
News on TV - a nat (religion)
in a lion den - 2 lions - got
him in the arm & leg. Earlier a
poor bear had 4 tiny, cute
in him. Had to save them from
drowning.

Sunday - May 2nd - Mike gave me a
pic of "Katya"? Mary Fitz
Darling grand daughter. She's
darling! But is from India -
Nothing to write or do - Ha

Denis came - p.
in study + 12:15 -
call in. He got the
news just doing
the - 2 tiny people say. Denis
called myself a little blind lady
too. New column "Tonic" his new
call -

The name of the "girl" guy
in Jeremy Webb on TV now`,"2010_00030":`are giant monte rays—etc.

6:30—bed at 8—If I can but!

Had a nice long talk with Ruthie—didn't last too long—
we ended a great.

Sheila said she sent me
box of wine (HA) + money—good!
I'll save wine for my birthday

Monday—May 3

Effecting shower get any
minutes—
8:45 still not here—mom bought
clean clothes—dropped them
on floor. Ha—

Had good shower—
Lunch was not good! Turn
Cassole of carrots—ate the same
Sheila sent me Charlie wine
+ 50¢—Have Denis take me
to wash out Set of Sun.

Called kitchen—said it
is down + took chicken—`,"2010_00031":`Mon - May 3rd
went to supper - people were glad to see me - it was really good - 2 per chicken leg & thigh (bought it up) some good scalloped potatoes - broccoli - also a good salad - guess it kept going -
My stupid phone won't get signal & didn't - so I called Dennis & asked him to call me.

Tue - May 4th
Up at 7 - "Pat Stars" on
Now "Wolverine" - coffee & roll
9:18 - myself - up chicken
& a little wine

Lunch OK - good bar-b-que
sandwiches (Amy called it a hamburger) - Her
altz is almost as bad as Louise -
didn't know her or my name! - and
Louise kept my pen - Oh well -
3:00 - got ambitious & went outside -
Hot & windy - sat in the sun for awhile then
came in -
5:30 - Traded Amy supper - She
had chili + corn bread - the other
was real tough meat - but good scalloped`,"2010_00032":`potatoes & beans - Amy didn't eat anything - not hungry (I'll remind her when she hollers at Louise!)

Also at site have a good salad.

Wed May 5

Up at 7 - coffee roll & paper

What else? Poured all the wine

Sheila sent out - no more! May buy some

elation's lot -

Found a pen in the bedroom -

Good - Louise kept mine.

Lunch was good - made myself a taco - Spanish rice & crisp with

pan + cinnamon - bought some

napkins - Stupid Stern Wilkoe

was on

couples fighting over who is the

Father - one is + one isn't -

I should go down and hear the

Mariachi band but won't - sleepy now.

Both guys are the Father! Ha - they

said, No -

Napped - 3:20 - at 4:30 going to sit

outside until 5 -

I did but now I'm miserable`,"2010_00033":`I ate too much—beef & noodles, spinach & then "ambrosia" fruit and marshmallows—got some psycho brown—helped a little.

She's getting so healthy—no more wine—sun & fresh air—salad—fruit—lots of sleep! Probably make 100—Ha—By then she'll be ready!

Just talked to Mike—he got home OK—Mary still in Texas—loved him & loved one of baby to tell Mary—

Next calling Sheila—talked to her and Shawn, and Mike—Denise here so that all went the "renegade"—Ha—

Thur May 6 Got up at 6:30 and actually washed my hair—a pain in the neck!—Looks good.

Had my shower—someone is in or had trouble—3 grim looking people walked by my room—I'll find out—

Lunch OK—meat loaf & zucchini—brought a big piece back—won't go down to supper`,"2010_00034":`Humane Society - on - abused dogs -
napped - had pie - going to go down
for supper to get cheese cubes - if they
have them. It's 3:33 now -
Coyotes on TV in Hollywood - killing
dogs cats + a little girl - need to
shoot them!
Pork too dry - put on mayonnaise
cauliflower and Coke with choc
chips - now too full again - But I
got great cheese cubes + ritz crackers -
One more day (Friday) + then
Wal Mart - good -
(Friday May 7) Up at 7 - blah blah -
8:00 now - sat up 5 times to go to
toilet in the night - coffee? ice tea? -
6:7 on - 8:10 - taking it easy - save
energy for Wal Mart + lunch - try the
new Chinese place - across from
Town Mart - Had lunch in room.
Got mail - a "grandmother" card from
April for Mother's Day. She's a sweater.
2:00 + still no cleaner -
went down to the end of the hall + asked
if she was working her way down -
yes - she's coming - I have to go`,"2010_00035":`6/7 - elephants

Down for supper. Cleaner here. She's alone today & took her to bed & take out trash - she is -

3/4/4 - Supper in an hour - good -
(Sat May 8) Shopping Day - my
mother's Day with Denis - Slept
super! Because I took 2 Alex - only
went to toi once - watched what I drank - not
as much coffee

Denis took me to W.M. - got late -
clock slip on - dr Pepper Cards & pic
frame for Molly - card for April -
tall glass - jewelry (for Sheila) popcorn

Sunday May 9
found this pen in my
drawer. Where are my boys
except (Denis & Sheila) Mother's Day
calls? - Should get some - only 2
cards - Sheila & April - but Denis did this
bit - nice lunch -
"Wombats" on TV - cute -
Mike called me - just known
left, Shawn called - said I'd
get a card Monday - ha -
too few - salad roll cake`,"2010_00036":`potato hamburger, cucumbers - left before dessert - taking it easy until bed.

It's 5:49.

Monday - May 10

Up at 7:15 - expecting shower gal - had pills and 1 a day, sort of pooped out.

Shower - nice blonde aide gave it to me. She has a car & will take me to a grove store - Good Finished Shelia's beads - they are pretty & silver crystal & pinky medallion with little fake diamonds.

Napping when phone ran - wrong number! - wanted Sandy Barry - avon gal - stayed up - 11:07 - hungry! going to lunch.

Tuesday - May 11

Last time I sign up for morning bus, woke up at 4-5-6 & got up at 7-1/2 - I'm ready - will go down at 8:45 - see get tiny aide (cute blonde) next time or she is Pooped! Van was 20 min late, got to No Frills & a nice gal said - it was cheap - 18¢ - thought it would be 30 - got wine - said it was a wedding present - they bring your groceries - wish they would...`,"2010_00037":`& need to go to store & take a map.

It was only $18 - wine $9. Wonder if she delivered it all?

Only one soup not 2 - or well -

Wed - May 11th up at 7:30 - 8:10 now - had coffee yet. I decided to ride the wine (best she ever had - $4 bottle) don't think I'll tell Denis even - so they don't worry me - got a shopping bag & T-shirt

$20 - for sending money I guess if Denis will take. Decided to have wine after lunch + after supper

Have enough for supper - good thing a little wine then no nap - also on 67 - saving them from a miserable life.

3:45 - napped - having wine - don't think she go to supper - can't talk to Denis - bringing no money. She ask aide (Clondie) to take me to go to Ellie get wine - Kendall Jackson - so good & best ever!

Thu - May 12th up at 7:30

Don't know if go downstairs &`,"2010_00038":`Denis or not, not sure when he's coming.

I called him & went down - gave me $20 - if I get Vickers I can take a cab -

My favorite aide didn't come. I skipped shower -

"Fred" family just won a car.

Diet

Salads - eatly meal - no dessert -

No wonder I'm gaining weight - always hungry! Guess I didn't write that she gained 2-3 lbs - Eeek! - sleepy again.

Minestrone soup - egg salad - took 1/2 sandwich up.

Called Kenny (cab) - he's parking me up a bottle - steel not wine opener - NUTS -

They said they didn't have K-J - So he got me a huge Chardonnay. That nearly as good - told him I'd cut my own & we'd go to the bank - get out $40 - in the meantime buy wine opener & tomorrow I'll call around & see who has K-J.`,"2010_00039":`Ate my egg sandwich & had wine. Put it in the bathroom under the counter in that blue bag. Having some.

Watching "Dad" - I would do good on this - Called 2 wine shops don't carry K-J - wonder why?

Going to bed - at 6:00

Friday May 14th Up at 6 - thinking about money - (never have any) Ha - & resent all my S & going here.

Lunch OK - waffle, cheese in scrambled egg + sausage. Need money though.

Well - called Bernie - said Denis is going to the bank & draw out $40. He said "Mom you don't have $40" I said according to a notice from the bank - I do - He said he'd bring me some money this weekend. So - I'm asking for $40 a week.

Things finally working out! Spirit World God has K-J - Benny bringing me money. Sat & then Benny said stood he could come up tomorrow aft!

Can't wait for tomorrow - money - great wine`,"2010_00040":`May 15 Sat - Slept long - thinking about how to fool stuff on drinking (or Benny?) Drink after lunch & after supper - But I'd make a long spy, trying to decide if to tell Denis - No - went 48th on Sat.

Watching dog show - a darling white Sealyham terrier won - new funniest animals! Crackers & cheese now.

I have a "rent kept" magazine here - Old Market lofts - Pets O.K.

May 15 6:24 o'clock from Boss

Ha - Denis met me but flat ok! Wrote me to write down where I spent it. I said No I didn't want to do when he left he said I'll give you your 48th if I remember!

Ha -

Tried to call Nick - no go -

Shields -

7:23 had a long nap - watching 2 feisty dogs that hate each other's "doggy" on it.

Sunday May 16 Slept OK - ate a 9:00 - no bone

Buns - no more toast, what to`,"2010_00041":`do about Denis? Call Sheila about 10 - try Mike to send money to Denis.

Decided not to get Sheila in this mess - will go to lunch at 11:45.

Took a nap now - may go lay down.

I did - at 11:30 went to lunch.

Don't think I'm getting better.

Called Molly - asked for help and told her what her present was. May try to come up? Told her R. and I had a flight - oh well - got water for a little than nap.

Can't get Mike - nuts.

3:24 - up from nap - all next doors on TV - eating flowers for -

Hope Molly comes over -

Supper pretty good - pork chop (tender) mashed potato gravy - cornbread - lemon pie (Denise's favorite) - TV on tornado - wow -

(May 17) Up at 7:30 - nice quiet shower - not my house but nice black girl. Rats on TV - ee`,"2010_00042":`Kendall-Jackson

No Molly yet, gift will just sit here, can't mail anything & it's glass!
Lunch O.K. - good soup - Cream of broccoli & roast beef & salad & Louise finally fighting back at Amy - she stood me up but do anything right according to Amy & said "Oh I noticed" - Ha - feel stuffed now - & left a nice message on Denis phone - guess he gets home about 5.

129 Center behind Schlotzky - K-S-12.49
all I need is money & money Denis.
Hooray - Denis called - said Red better get my wine for me than pay so much to a cab - so didn't let him & already found a place 12.49 - All right!
Almost Birthday! - Tiger kills its lady owner - a wild animal is just that!

May 18
Up - 7:30 - toast & coffee
Miss my honey Bees - move funny like crazy, cold? or allergy? - going to be 75 today! - will go out and sit.
Bees on 67?
Had popcorn, roast beef salad & Dr.
9:42 - still cold, at 1:00`,"2010_00043":`To Louise today - polish sauce sourk, new potatoes & cake - I'm too full.

Called Denis about 6:30 and "How'd you find out?" I said I called - ha -
he was afraid afraid & took cab,
2:30 I had nap - at 4:30 going
down in the sun & then supper -
hope Denis brings me wine and
some mag, 6:15 on - horse falling on
man - slow it 4 times!

Ruthie called - sending me a
present - oh boy - I know it will
5:52 - sat in the sun for 1/2
hour - before supper -

Supper lovely - plain peas
good sweet potatoes & strawberries - Ellen
wine & wine - now I'm too full.

Louise finally fighting back at
Amy - tickled me - she said "Sara's
isn't she?" I said "oh yeah & noticed. I always
agree with Louise, she had said several times "you
my best friend in the whole world"

Denney let me down again but
said he'd bring wine & honey bun
tomorrow night - guess that will last.

Bed now -`,"2010_00044":`Wed - May 19 - Up at 7 - just have to get through the day with tortois - just took pills - "Pet Star" on TV - 9:00 - laid down "food" on then lunch - not going down until 11:30 or later.

Watched Frasier - when Roy had her baby Alice -

Not goofy Myth Buster

Make an "air" carrier -

Lunch ham - roasted pots - Caesar

Perch (eg) So - kind of OK - 67 on

Now Mary - man - one gal that guys tested - nowhere - the Dad - pretty embarrassing!

No Louise again!

Sweetie pie Denis - here with 3 wives

12 @ 8 + 5 Hope the cheap stuff is good.

My K - I sure is, & said "Keep me in wine + a big + gold + I won't need any money." Maybe good food on Sun aft I think he was happy!! He even kissed me goodbye!`,"2010_00045":`Thursday May 20

Up at 6:30 yesterday. Demi found my wine bottle opener he got me long time ago. Complimented so he showed me how—next—expecting shower gal—pig on "Pet Star" but I missed his act—cute though—one week until birthday—big deal—had my shower—felt good—we have it done—Vendange wine—not too bad but not my K-J.

Lunch—"green bean" soup—roast beef and plum—wait a laugh! Had trouble getting the cork out—muddled it—no—Hog's "A Haunting" is on—good—baloney—course. Even the great rain out—7:36—just got up—storm in Texas—had mushroom soup—red wine—my favorite Kendall-Jackson—Demi got 2 others—no good—a darling "can one of cat and butterflies" you R. just love it.

Friday May 21

Midy out. Can't believe I drank that whole large bottle of wine yet & do think I have a "runa`,"2010_00046":`serves me right. Clean up lady due today.

11:24 - going to lunch at 11:15 - goofy Jerry Springer on with 2 strippers and their boss -

2:37 - napping when the bed started jiggling. Cleaner gal - told her I was sleepy. She please just take out trash. She did - & made popcorn & hot wine. I got a litter with all my pills on it. Good - need a pill book so Sep know what I'm taking.

Boy - the watercooler got slower all the time - 5:20 before we got served - noodles & huge meatballs - good salad pineapple (yuck) & coffee - 5:57 - I'm back out with dogs on TV. Need to call Denis - pill book?

Bears on TV now.

Sat - May 22

8:15 now - up at 7 -

Povesh a man

10:41 - but we gonna nap again!

Self go to lunch - Eric just called - taking me out tomorrow for lunch.

Lunch was fun - Phyllis, Fitzgerald is sitting with us! - She's the 300 lbs gal that was at her`,"2010_00047":`table - I thought she was looking + 
Phyl said Wisy - TV on space ships 
etc. + "drawing" in the dirt, 
Lunch was sallet on bun & corn on 
cob - lime pears - 
Nice having Phyllis there, 
she said "water" weighed 300 
pounds - wow - 
Denise taking me to lunch soon. 
and more wine - & hope) 
TV had 2 boys drifting days on 
the ocean - no food or water & sharks 
around! Sure they'll be saved! They were 
so lost guy who walked too far 
stay put in the rule 
4:30 - coffee & time sand - put chips 
need some wine - Ha - 
No mail 6:47 - bed soon - 
Sunday May 23 Up at 6:30 - dropped 
bowes in sink - chipped hit OK. - went back 
to bed - 9:00 - asked Denise to bring me 
fish shrimp wine maga, and cough drops 
He said about 11 - Oh boy - 2 hours - 
"Me or the Dog" is on. As goods if 
they get near his food / tear up stuff etc. 
Myth Busters on now.`,"2010_00048":`Denis got here at 11:20 - great fish & I had one. Also wine - has to last until Wed - Ha -

Bear on TV - huge - almost kills this
Dr. - now guy topping white rhinos
What is the matter with men?
Mad mamba snakes + bears and
little kid on TV - finishing first wine -
Bear has mother.

Mon May 24
Eat with a man. I woke up and thought it was 3:00 - it was 10
guess I went to bed real early - 5:00 - no
tonite 8:00

Finally washed my hair - Lots of
soup left - Oh well - I get
Fixed noodles and egg mix dinner.
Clean & smell good - pots sausage & peas
I don't think Phyllis Fitz would be so
nice as I thought she was. A "next-nik"
like Amy - I said "It's doomed" - Ha - She go
eat + come up early I go down to
supper late - 5:10 - Have to peel an
apple (for dessert)

A.P. has poor dog with an ugly
growth on its nose. Had to operate to
get it off, so ugly! - they got it`,"2010_00049":`Guess the dog lived. How puppies in a drainage ditch—ye gods! Called Denis about pill book—He forgot but well try & find one. I need money for wine! Horse just gave birth—out the rear as all animals do I guess—Now TV on sharks in Australia—Bed at 8:08—Good! Alex

Elie May 25

Week—I thought it was wed—just the—I wish I'd quit these erotic dreams! Last night it was George Clooney & was having wild sex with, I guess I miss it—Oh well—my wine is gone—supposed to last until wed—Ha—9:22—Where's my cards? 11:08—vegetable soup and egg salad sand. Brought Va. up. Left a message on Denis Tel.—Flush!—I'm out of wine Ha—Sleepy—now—bed—
9:47—TV about sharks again—
I got an invitation to the "May Birthday" Fisherman Joe—
1-888-753-0005`,"2010_00050":`lunch - but doesn't say where?
knew I'd get dressed up & go - it's tomorrow - tying pants + white knit blouse - tying, bending -
supper off - baked chicken -
(brought it up) Mashed potatoes -
zucchini or squash? had a pain in my chest and came up. Phyllis Fitz liked to tell you how to do things - Dessert work with Louise too
too full now - still like some wine + will I hear from Danny?
Bed at 7:00

Wed May 26 Up at 7 - tried to wear satin robe - ha - only too little but other is too hot so put on T-shirt + green pants.
Get ready at 11 - TV & guess -
at 11:30 went down - It was in Activity Room - Not much of a party,
no coke - or song 'only 4 of us & two good tacos + cinnamon crepes -
Brought one home - TV show has Mom slept with daughters right! on
Steve Wilkos -
now Murray - 2 months old
black mother - big mouth`,"2010_00051":`Screamer - Ha - Hop next -
It's 6:07 - Dennis surprised me by
bringing up wine at 4:30 & it was my
favorite. I always talk up a storm
while he's here - They (Bart & Ken) are coming
up today - God - he also brought the new
Engines! Good kids!
"No wait - that please me OK -
Put on door - 3 balloons, crepe paper and a
Birthday sign. Nice.
Mary
"I'm a lion sneaking
on a wart hog - 2 of them 4 - kill
him - this gal named "Dadd" following a leopard
up a tree - I got more wine - David coming at
10:13 - had wine - 11:33 - had shower
and nap - now wine & lunch. Again
no mail! Sheila where are you?
Lunch OK - half off strawberry
cheesecake - I gave Sylvia all my
thread I had leftover. She was thankful to get
it too. Still now -
Snakes on TV -
Mike (NO!) just called. Mary
not back yet - I asked him to send
Rosa $50.00 a mo. So - Sheila is at`,"2010_00052":`Regina

I was very late - I went to bed. He gave me a hug when he left. Record up to date and drinking record. "Cheap wine isn't bad - Barefoot."

A gal brought me a dark little cake - flowers in frosting.

They do a lot for you.

Friday May 28

My victors check here after waiting a long time. Bank cashier told me (and gave) me $7.00 (from 30 + I didn't get). Ha - when she said you have quite a lot saved up! I thought maybe 100 #64 -

2:50 - Got coke in machine. Denis told me Sheila & Mike went to Belize to see Brian - heard - I thought it was Ryan - No wonder I didn't hear from her. Hope they are safe.

May 29

6:30 - no paper yet.

Caper Rose - a volcano "climber" in Guatemala - Better call Sheila & check.

12:55 Denis brought Long Island I wine! So good!`,"2010_00053":`I called Sheila + got Ashley - Sheila will be gone until next Thursday.

Sat. May Sun. May 30 - and what was Sat. + it's Sunday - I wonder the paper is late. Almost 9-

Sun. 9:32 - Paper boy just brought said down again - now 67on - lion checking out toy car - Can't decide what it is. Ha - pushed it - funny

The "Botfly" on monsters inside me - ug - get in Africa -

Now - bed bugs - Creepy - Sure I don't have after sheets changed every week.

Mon - May 31 - Left side (in between legs) is really sore + smells awful! myself off + put on med. Feel lousy - let it shower day - Couldn't find anything on Guatemala in the paper - $2 turn on TV

They had mudslides - Pet Star on $5,000 prize - poodle does "back flips" - dog on skate board - they aren't giving 10c for some reason! - Just got pills - she put in clothes basket for me. She someone else is giving me a shout out.

Stephanie - she too busy. Wood bird`,"2010_00054":`Shower by white blonde —
"Jed" on —
4:57 — wine all gone! — get a candy bar & diet coke —
Alex on — caught a big manta ray — checking it out — But
cheese brother is missing & think
they are blaming Alex? — almost
lasts
5:55 — Ted at 7 — I can
lasts

June 1
Bad news in our
about Guatemala — Lots dead & missing
after mud slides. Ye gods, Brian are you
OK? April just called — coming up
there! Oh well —

just had toe nails cut — nice
guy — Called Ashley — Brian is OK — Sheila
Called Ash last nite, So that's a relief!
Called Denis — he is coming up after work
Great. Told him I hit my last wine yet. True
"Saba" on 67 — (what a name) Baby
leopards wrestling — so cute — one has a
bad leg! —

Lunch OK — Pizza (hot) and a
salad — wrong dressing — Oh well — Pyllic`,"2010_00055":`ate up.

Well June 3rd - not goofy when I woke up,
not sure what I was doing. So drank cranberry
juice - and then Denis brought 2 loaves of
honey bread and 3 wines!

"Feed" on - found a stale good
cinn. bun - and wine (at 9)

Ruth called - couldn't remember what I got
her for birthday (watch) I think it's this
Ha! - old age? - normal - I tried this
was wondering if I'd spend the rent & my
here - she said she wondered the same thing
misses her independence - Baby lion cub or
so cute!

Now a leopard - "Sala" (big cat)
you get in Africa...

June 3rd - been thinking about
April - how to get her to quit just coming
over? Same guest only 2 visits a year
going to see R - too old, worn out
9:30 - when is she coming?
shower gel? She came and
nice quick one, hoped we
well I called Denis & said
didn't know what to do - or eat -
April - he said she called him - twice`,"2010_00057":`So this afternoon, I went to the lunch room and begged for food—Ha—made me a tuna sandwich and chips & cookies—& cut my lip—then April called—had time to talk (I heard right) & on her way up—she was just tired—

Friday June 4

Monday—I talked—she just got back last night—let me a Turq. necklace—there was no phone in Belize—& mailed Mike—so I'm here now—where is April?—talked to her—she said she went to motel #3 today—maybe she came this time but she has got to—let me know where she is! Cleaner is coming—etc.

They are two—& she was—& got a darling little dog—bright red & yellow & dressed in a little dress & hat & sweater for $15.00—& gave her.

April listened to me because she called me when she got home—about 4:00—& told me not that I'm out`,"2010_00058":`of wine. Said he'd be up tomorrow
Good - Had my B/P pill at supper
It was 147 - So take now. Good!
11/ - so the pill works. Tried
to call Mike - no soap.
Sat. June 5 Up at 6:30 - rain &
lightning out. Sleeping & very nice
Mike just called 11:00 - be here in 15
min. Hooray -
Sun. June 6 What a nut I am!
Drank that whole bottle of Kendall wine
last nite - had a hangover all day & was
sick all day - just had 1/3 of all day - no
more - won't open until Mon.
Supper OK - Ham - sweet potatoes &
cauliflower - brought up 2 pieces of ham
(Amy) TV "White Wars" on tonight
Married on Board - Japs rammed us
at 6:00 - Police raided our boat
well - it's 7:00 - time for bed.
Mon. June 7 Up at 6:15 - woke up at
5 - insomnia - too much napping - will
try & maybe take a shot sup after lunch.
No more drinking a whole bottle of wine.
1/3 - is plenty. I have a whole bottle
I haven't opened yet. Talked to Denis`,"2010_00059":`He will write rent OK tomorrow & why so late?

My BP is high - mine said 128 -
here 123 - now didn't think that was
too bad - caffeine & honey beans maybe -
anyway - I laid down then ate ham &
sweet potatoes & had wine. Now will be
Still high - that cute TV show of
guy buying relics is on - one old guy
won't sell anything - Ha -
Denia called coming up - won't be
here tomorrow -

The June 8
Wow - not up until 7:05 -
need to take check down after 9-(mail)
& did - no mail - went back to bed at
9:30 - Nuts - ate my chicken & opened
wine - couldn't understand TV - Spanish - Ha -
Dog having awful growth removed from
his neck. Good - but sickening -
11:45 - Bed seems good -
2:45 - just got up - too much wine! again
oh well - will go to supper -
Missed supper - slept right through
it! - Eating put chym & jam in - what a
nut!`,"2010_00060":`Wed June 9
No more in bed all day.
I got up at 6:30 - paper roll after - spill -
and I got a sleeping pill at mts met
in day - trumpet videos on - now
Cloth close calls cheating death -
"well - I did lay down but
only for an hour - just made toast
with jam - good - still really
hungry,
at supper (from lunch) wet
monsters inside of me - lucky?
excruciating - in her eye - and
time for bed - 6:50 -
Thurs June 10
up at 7 - sweating
must its shower day. 7:50 - no
shower gal? when is O coming up?
Here at 10:00 - last shower -
Help! My lunch
water are full nuts. There is an
excuse - she 96+ skinny. Plym are she
she has a secret of national interest "many
she (fat lady at next table) only give Joan
bananas to buy a friend - He - I carry
did her banning on Louise table
saying "EAT" & Amy
& picking on
twice - don't ever a`,"2010_00061":`Lunch was meat loaf & zucchini & cookies - Animal Planet
Napped - TV - "Houdini" - saw before - then making Pizza
work - thousands a day. Called Denis
he about 15 min. It's 5:22 buying food
I wine - stood!
We did - Chinese food & 2 bottles
wine - Hallo + 5th bottle - took
my gas list & will bring up Sun. OK.
Friday June 11 7/3 at 6:30 - goofy sexy
dreams against John Alwood - wish I could
erase that jerk from my memories -
decided to skip lunch & eat supper there
hood - Sheila's birthday card here
with necklace & earrings - beautiful! cleaning
gals put them on for me! AND $60.00 in
there! 3 cleaning gals = flipped my
matress for me!
Had terrific bargains at garage
sale - 2 boxes with Xmas squares on lid
for Xmas $5.00 darling Santa Claus with
cute beard for $3.00 - hit to be 20° when
new - AND a nice robe, white with
feather birdings! For $1.00`,"2010_00062":`4:50 - Woke up wanting to go down and live by Sheila - Rent me a little house - get my cat back or a kitten - just leave my furm here. After all I have $10.50. 8/11/50 - Mo.

Day Dreams! B/p 125 - not good not too bad - cartoons on instead of minister and "bobble head" with "Fred" or next I hope - It's hot / sticky - no food

9:31 57 - think I'll write Sheila and tell her I want to come back down there - rent a little house - get a kitten - dig my meals - or take a cab to a rest. or get it delivered. Something to look forward to. Dream on

"Fred" on - block won again`,"2010_00063":`June 13 Sun

Last 7: paper was here!
Put on new robe 11:00 - had 2 cups of coffee. Pillar here -

Went back to bed - up at 10:30 -
what a nut! Wonder when Kevin will be up? All kinds of food + wine with him, decided I would knit angora scarf for Dmas - need to get yarn and needles.
Kevin called - on his way up.

Had 3 wines + lots of grog, & had a nap until 3:00 - made a tom + lettuce sandwich + wine - TV on Russia + animals -

June 14 Sun

No paper! Pillar got sick Sun.
Paper not there - I let it go for next mo.
in this moon. Getting another one.

The paper was here - pillar got put it in clean clothes, wrapped in bedroom -
9:15 still haven't bought another one!
"Fixed" on - Eating cheese balls - Had a shower - having wine - will go down to lunch - check mail.

Paper called to say if I had mine yet.
Said yes -

Logans on A.P. -
Having tea + lettuce sand - think see go back to bed!`,"2010_00064":`I did now up at 11:30 - down to eat & guess - Lunch OK food but nutty Phyllis worse - full of "secrets" - "dire" happenings etc. Ye Gods! Lunch was beef & noodles + "tunza" - Ha - Took 1/2 cup for supper.

Floods in OK City & some Neb.

Had nap 3:22 - now - alligators in swamp.

Down to my last bottle of wine - watching "Ghost Whisperer" ate N dinner - almost out of wine! TV 23 - sound like they are talking a foreign language.

June 15 Up at 7 - put money $5.00 in closet - nose running again - sneezing - flooding in Neb. - earthquake in Cali.

Eating the 1/2 "tunza" from yesterday.

Skip lunch

9:40 - guess I'll nap.

12:57 - went down & ate - same old stuff - Phyllis full of "secrets" - Ha - Amy dragging Louisa - L not eating - Ha - good soup, turkey & cheese sand, good gravy - stuff - Boiled through. Eat up her tomato.`,"2010_00065":`I wrote Sheila about coming down. Called Denis & asked him to come up and read Sheila's letter.

6:30 - no D. yet - Oh well -
octopus on TV with Paul Salmonti (lion guy) Sweating again! - nuts! Need some wine

[June 16] Up at 7:00 - can't decide if I want to move back or not. I'll probably just stay here - if Denis will keep me in wine & Engsta - need a pretty knit? jewelry? scratch off?

Bad girl - called Kenny - so he's buying me wine. He said 45 min. Almost an hour bottle - hid in clothes closet. Shine on me.

Maybe I can find - little house here in Omaha? Denis & I will talk about it!

He brought fish & shrimp later - also wine. Also got me 3 i cups. What now? Should I do? Computer for a while?

He brought me fish, shrimp & wine - hot doll! Baby boom & crocker - But the corner Mama Lin - OK -`,"2010_00066":`Thursday June 17

Up at 7:30 - Denis was going to talk to Sheila (about my life) last nite I don't need to ask (Mom can't live alone) I am alone most of the time, oh well - if he OK - doing to bring me a comp. mail + games? Had a shower - popcorn wine - Gospel now - 12:30 ate some fish & shrimp enough for supper.

7:30 - David here - told him he was "sly" No - said moving in with girl friend so hopes no - David on 9:30 up and made bacon + eggs in micro - toast in toaster - not bad.

7:35 - cooking on TV -

Sleepy - boots on TV - ice etc. - Whale Wars -

Friday June 18

A dark gloomy black clouds day! Suits me - guess I might as well stay here - get more to do - Raining now -

beds

Knit + needles

scratch off pic.

Computer?

Need new journal`,"2010_00067":`Ruthie called—we agreed "old age sucks" but we both realize we have it better than most old gals!—
what a lunch!—Amy sure a pen was here—Plym said there is a Mary Fitz street?
I wrote Humane Soc. asking for a kitten—to change the No-Pet rule
found a new journal so I'll end this—

I am now 87—need more to do—knit—read—computer—
Denise is wonderful—shown down July 4—

New journal—`,"2011_00001":`Dec. 30th

Nightmare - Nov. 26th

In Nov., the last real memory & how it all started - World Dream - soon off over my back & neck under my left hand - Burn like a sunburn - "Can't write."

Next, it's 3:00 - ate breakfast & lunch - a good group of men singers did some stuff - then & slept all afternoon.

I think baby is leaving that kept me awake all night. Nice get though - lung problem. PB of Cancer.

Low had been near - kicking him out as not needing care. So your out of your job & out of your house - HA.

But - they searched him for pills - took no more from Clint now! - He said!

Found a super strong lotion - also got a pain pill from mom - Call your OK - he was happy.

Just woke up again - again, old Bat hit her TV on real loud - I got up to break it - No - but nurse turned it off with lower right hand knob!

Jan. 4th

Nightmare - At 6:30 AM 2 thugs came in - drag me into the shower & change my bed cover! - A.H. especially by block to gel with long black hair - Pretty quick (at 3:30) It's 7:15 they will put me back in A.P. or not? Crossed fingers`,"2011_00002":`Starting new journal on back

Thursday June 14

Pill at 6 - no paper or coffee - good hot coffee - need a roll - "Rollit" is really doing his thing but the garbage closet - good - put on a new knob from closet - favorite crocheter on 937 - pain better - ate little sugar fudge & ice cream

got cut in 2 in elevator - I did not get hurt - boys fighting old man evil

not a short no pain pills

not helping - out map did - went down alligator hunting history on TV

down to slave times

good bad guy airplane pic

seen - Muslim taking over

afraid I'll need stronger morphine opium tranquilizer valium - pills

pain pill at 1:24 aft med - good - needed

Such excitement! Ha - I went outside & sat in the warm air - felt good - Ha

my favorite Jo made on`,"2011_00003":`I hate this place with a purple passion. I thought my meeting would go well! David is pretty sure I'll opt in a couple of days. They bought cycle times—see left. I said to the Apt. Dir. Ha—

Friday—13th!—week-end break—still need my reading glasses also "trouble" button—still no but close.

Got a big laugh—I thought all the clothes hanging up were ones left here—they were "Maudie" new to the roomie—think she left. They were icky ugly old maid stuff. Anyone who called them "slim." A treat in the jet tomorrow on "safety" getting on. Oh man

Well the jerks changed their minds again & it's their NUTS—also had to go to the exercise room to do tests for the little Oriental boss. Apparently did fine—in brick again already. I'll go batty before 6:00 (upper) time.

Now it's the? It's 4:00—been asleep since 12:30—by God!

Now brought up a nice suitcase—But the Apt. people say they can't get stuff—I have NO energy.

Wed—

I'm sorry Apt. Dir's did it for me. I was so tired & laid down. Need Dr. Pizer as well.`,"2011_00004":`Showed a big saw fish - 17,000 inside teeth, ugly.

It's almost 6 - hope to last until 7 tomorrow clean sheets / 9

Fri 157 not sure if cute - need clean & tight skirts - I got up about 6 times for the potty - oh well - it helped coffee - good to move around - ate roll how am I going to go - may start jewelry today - TV guy on "Redneck" guy

Pills + paper (after 3 very dryers) mostly new "aid" thru fills at pm practically + didn't answer on paper - NVT -

Finally 123 PM - Had short nap maid making bed! - Surprised me but nice - pain in sh tummy, ate all the judge! - Bed girl

Guess I'll start jewelry - well made a Rosepetti bead necklace!

Nice clean bed!

Old pen butt - this is good`,"2011_00005":`TV now "loggers" powey pow
trees -
Meet to get Dr Pep. Have 3 once
Bed at 17

Well - bed at 6:00 BUT up
at 11:30 - 5 hours! Hail! That's a record.
But I know she is right never
last a year - this week will do it if
it is & want some wine - wanted off
sleeping pills - Drank all my coffee
damn - GROK Monster Worm
movie on - Stupid Gap movie
Changed - ear aid - making ugly
noise

Sat June 16 AGAIN 7:00 + no
pain pills or paper - WTS - song
my buzzer - just ignore me - Hard
fishing on TV - just ignore me - Hard
how do I get pills?
Made good coffee instant
He feels here + paper
Coming at 7: she said - Don't push
buzzer unless on sixth floor!

Finally up of dressel - earrings in
new top of Odellas - silky print brown
tory
Sci Fi on - wrote + no enemy
yet - Giant Fish & guess
Meal after 10 + some Dr Pep
Denis should call -
Eat the huge fish - buried`,"2011_00006":`Friday Jan 27
my nice experience of
was before with another interview - pretty tired
of those now. "Leave Me Alone!"
No! They just called - am I coming to
and? - No - had breakfast - will do supper at
4:30 -
It's 4:00 - hot new soup. Lord wrote tel. no.
of Jimmy John's pizza - he don't see them. Will be at
supper
He found them & then I wondered when
I'd need them. Also a mystery - Mary Fitz didn't
send the comforter! Who did?
Decided to talk to Rand just make a deal - $15
for food - I'll be safe from being sent back to
Well...
2:30 - TV good - a tomato in N.Y., I
opened the last wine - Have to go down at 5 -
Now on TV - star hitting earth - oh dear! Oh go
down at 5:00 eat & then bed.

Sunday Jan 29
Up at 7:30 - what to eat - not
very good eggs or rolls - walked to the
Hall - Low picked me rest of way - said he'd get
balled out - NUTS - one or the other - Skip
sky's lunch & go to supper at 4:30
11:45 - Losing dawn -
2:30 - having poetry & wine, TV show sci-fi -
Supper at 4:38 - Each fence -
Well nice surprise! Denis popped in at supper -
& saved my foot for tomorrow - so I could use button again! - It's 5:00 - bed
soon (at 8) Ships wrecking on TV - oh`,"2011_00007":`met - 2 blk. lovers - main guys OK

Now mother said hi - bad by? smoke?

College kids drinking -

Now they rescued a manatee from a trap - he's OK but heavy

I got 2 Dr. Pep, bit got real faint down there - Steph, come along

It helped - good

Denis called - bring no scratch

Leaving the room, she got eggs

Putter of ice cream

I like to stay right here - NO

Mail TV - cop show - now

Sports sick -

Need thru pills - 7 to 11 - 2-6-9

So it will be fun to see if I get any

orzy, world at. Boys back home!

Dr. Hi-

When D. coming up I'll have

scratch off papers - good

pain just radiates down

that damn shoulder & a bad sore

corner of my mouth - need med.

I sure feel funky t

Week today -`,"2011_00008":`yes - D brought me some 'reading glasses' work OK.

Mon Jan 29

On bad pain all night
at 7:00 called for help on "Code Alert"
written, no one! So called "O" (operator) on
tel. Button still worked but stupid "Shift Change"
at 11. Anyway got pills + pain pills, had sticky stuff
over coffee + milk + milk the paper.
late at 11:30 - may skype 4:30PM - came + 
here here for wine opener but didn't need it -
Stayed too long. Where is Low?
Had nap - it's now 3:16 so - I can eat
supper if I went to.
I did cheese steak + fries. Story to get a
wheel chair - they have them here - good.
Low will get it for me - good!

Tue Jan 30

Felt lonely but made myself go down
at 8:00 - also wrote at 4:30 SHARP Low goes
To ask on wheel chair - st. etc. NUTS
11:00 - had another nap, what's wrong with
me? Need to ask clinic to take me to lunch
next Sat - I need everything!
called good old friend + the broyome
a ly-clone! What about pimples + prostitutes
young ones - then they get killed! I'm having
more than supper
(Read Tel!) My little special gal wanted
to do sex, I said "NO - I'd rather not anymore."
She coming Fri to talk.
Damn - guess I am every day`,"2011_00009":`Sunday, June 17

6:20 AM - no paper or pill - Rita made good coffee (intact)
1/2 hr yet - TV - movie in corn - week
morning call + octopus
fighting ugly.

Pill - please + paper
Finally my pills, 19 min late

Trying to get paper & cookies
Paul & Grace lost their phone A/I/O
won't hurt me to walk it down I guess -
Finally did - & cookie - can back
ate ice cream cup SO Good! - Show still
writing?

So mixed up, napped - got no
thinking it was 4 or 5 PM - 10:30 AM?
eating too much choc. Had chocolate
+ crackers - in a pig!
So mixed up - gator on TV

3rd watched last of Indiana Jones movie for
last time
but need my 1/100 per pill?
will call soon - makes thieves mad`,"2011_00010":`Breakfast - 8 to 9 -

Heaven again - My Apt.

Denis moved me & fixed up everything. I had a major but minor came in and made me get up so ate some cake. Had a nice nap.

Low coming back later with wine. Ate in on a funny cut out & read really glasses. BUT - Good news - My watch was on the bathroom & right on time! Good!

1:30 if Low is coming & he would

Thursday Jan 26 Will I ever feel O.K.? No energy down - time given - no food here (but coffee)

BUT no other rules or busy nurses either.

Went to breakfast - & was late (9:30) so just got cherries & coffee.

There are 2 wines in the ref. Not too sure what to do for food today.

Well - (under threat) I went to lunch.

Most chose veg jello - Low joined me late said he has to stay away some - they think I'm being spoiled - A.Holes - the wine is good.

Got gel here & wine out - ha - left it out - she went to get some from the car. So - shall I skip supper? Tired of this crap - so guess I'll go to sleep.

I did go - walked all the way but Low pushed me back. Dry chicken poulard - for me - mustard & corn - the coffee - coffee good - sleepy - Bed at 8 -`,"2011_00011":`Thursday Feb 9

Got up at 7 - Cold out
8:00 - I'll go down to breakfast
soon, where's my dear wheelchair?
Decided to try it. Also ate lunch - which I
hadn't given Low 10¢ for wine & he says he can't
get a ride - I asked about his cab friend.
Couldn't get him. I'm afraid he spent the 10¢
on booze - hope it's wrong. I'd really
like some wine.

It was wrong. Low came up - gave me my
10¢ back - called his cab friend - keeps in
here about an hour. - So good!

Friday Feb 10

Good - Had never got here.
But Denim had lost little bottle
with nurses & didn't tell me! He
list with brought them up.

Lunch OK - veg soup & roast beef sand.

To Low - Nita wanted to tell him funny
deal about little wines. And here comes my
golden globe - Damn -

Hooray!

Found my golden globe! In my
bedroom! That calls for some wine.

Low was mad! when I said "What's
it all in happening?" Cab took 2 hours not 1 - Oh well
good baby HA! Had a good break - 2 egg (over
easy) bacon & toast food coffee -
Now die off - for some reason.`,"2011_00012":`fish
If I ever find that I am lucky
blank again! Does it mean
Holder—or else.`,"2011_00013":`have Doris wine nurse brought up pain pill.
For shingles - No wine - water - vinegar.
Oh yes! Having went pop corn - poorly.

Sunday, Feb 5
Up at 8 - feel lousy
had pain pill. Ate breakfast, good eggs over
fried potatoes, home made rolls - good coffee - then a
long nap. At 12:30 noon - lunch no - 4:30 supper
at 7 PM good - young said that killed others -
found utility - God's in low order - how another one
May skip supper?

Mon. Feb 6
9:20 AM - Had breakfast - Low pushed me
back. Read Egyptian Bible - Black aide said he couldn't
do this, she gave me hard time over pain pill want
me out?
It's only 1/200. I feel like for 5 - just
had a shower + hair wash - good - &
then good

Tue. Feb 7
Up at 8 + ate breakfast - So
Eggs, toast, coffee + sauce. Give it to
Low - He wasn't very happy about the walker
And at last minute - pushed me to elevator. Doesn't
care he said! Afraid & told Lies! Low bought
me the wheelchair - Hope she forgets -
He was here - the wine is good -
Now find exercise gal here - we walked
& steps of the left murder (she
on. Really "Cold Case" I'm sleepy
again. Didn't find a gold bull ring
iced soon`,"2011_00015":`just ringing my 7:00 pain bell

when she dropped it - HA -
still good & glass skull - guess
no watch - story it had ended -

Bed Sunday
nite
5:00
or
6 -

Ind. Anx. finally really over
& think - Ind & maroon
getting married! cute -
9:30 - Maybe Butters Fun (not)
Now "Pawn Shop" Doll Earth -
C'mon Bed - oh not too bad but
not good -
need the coffee

Sheila called - we talked OK - they
are home & fine - Mike F too - so good!

Monday June 18
Again - all mixed
up over day & time Mon ?? Sun? no paper
but got it yet, read and gave away - so what
in it - got good coffee
then really forgot me morroth week - used
it helped
soapy will run on - HA I'm the goofy
one - not sure when it is? or just
pills -
How can it be 8? It was already
8 on Sun.
I'll figure it out OUCH - back`,"2011_00016":`Wed Feb 8 Trying to make myself go to breakfast. Need coffee so gonna get it. Didn't feel well - ate 10:45 & phone rang. Got untangled from blanket - a nurse was there still what she said. I'll see her before lunch. I still hurt in this place in MESS! Favorite show on - 2 demon cheating brothers. Called "Laws" in HM - she was worried about me & sounded (I was) drunk. Lunch was ok but too much - medicine & then choc brownie. Animal show was abused horses. Rounded them up & are taking them to a nice place. How a detective show? Think I'll skip supper - Oh no I won't.

Got a severe call from David - I have to go to 2 meals a day or - moving home & it is good news! David is going to get me an electric wheel chair! And scoops! Hooray!

Strawberry for dessert. Fruit pots - French dip beef - good - have low 10 for me tomorrow. TV's makeup artist - one model passed out & was taken to hospital. Models under water - not yet! It's 6:00 - I'd like to go to bed. Low is getting teeth. I'm getting whale - Ha.

Have off in "Haunted" Hosp`,"2011_00017":`so bad - I'll ask for 4 hours between fills not 6 -

Just ordered a J.J. #13 - 500

Again - its AM not PM -

Oh hell - I'll get at something

won't call or bother them again

I have coffee rolls + RAIN

POPEY - why is it suddenly a pain in the butt - tired of it but he had good long break when kids came

T.V. - popey alli & crooks

J.J. late! Need it NOW -

Gal said I said 10:30 - 12:30

may be lost J.J. I order -

Who else could I

pizza & dinner -

4:00 PM - ate more - good, so good BUT too much turkey - worrying about hair

Gina is a stubborn little snoot wouldn't talk at all if I wasn't for my cat - TV has tigers now sword`,"2011_00018":`Supper O.K. - chicken salad & muffin & coffee
2 pm O.K. - not mad anymore - was my back
hurt? "Management said either pain pill or
wine - I'll get my own wine to hide it -
movie on "Mysterious Island" - dinosaurs etc.
corny but fun. Then bed -
Sunday Feb 12 went to bro - good
french toast & eggs - coffee - & a pain pill
gave paper to Grace - have to deal w
then 4/02 - to gether -
how has been crabby lately - so
what? life will be leaving soon - mixed
emotion - sort of tired of his "care quirks"
kittens & puppy on now - so cute -
now tigers on the hunt - not so cute -
1:15 PM - had a good nap. Police story on.

Put dirty clothes out!
I heated up a burrito - so good! But
better not eat it all at once want some more!
Mon Feb 13 Up at 8:00 - Dreading shower!
On west - she never showed up - good!
I had a pain pill & laid down until 11:30
now TV - about kidnapped kids - sexual offender
almost 12 - I had bro. cheerios & coffee -
will eat supper at 4:30 -
Denise was here for me to sign check
for rent - told him I loved him a lot -
we kissed - he is a doll!

[Signature]`,"2011_00019":`What a deal! ODD dreaming & I think impagos on mouth & butt hemorrhoids. Bothouch need ch. book

Will demo call? No - he came up of 6 Dr. Peppers - now - NO comp & TV remote or hearing aid - in a JERK - found it in back of chair.

History ch. on Wizard of Oz on stage - cuts

TV has play -

Too many Dr. Peppa 6 or 8 - need more candy boy Hershey's

Changes! I am getting moved to a nursing home! - all that means is better care & meals brought. But what about my furniture etc?

Now who's house? Just talked to a dummy - she said you have to come`,"2011_00020":`Exercise gal from Valle was here. We just walked— to the slot machine & back here stood at 4:30 will eat & have wine. Got 2 cards— so cute from R. a cat in a basin heating the water— it roger from April (card card) my left shoulder (blade is killing me). I'll go with try for some wine.

Got my wine— backwards on my walker— choc hearts & chips & wine— my favorite fishermen on Jeremy Wade— so cute! Wine in good—

Sheila came through again! If hopes of exotic food— & peace & early. Need to get Denis call her & have her call me— And I'll call April— phone is terrible— Lady called? coming up? want to go to bed— I need a new coffee pot.

It's 1:00— not going to supper— much Spaghetti— lovely—
Did go to supper. Not too bad— but so tired when here. I'd need to call Denis soon— see wait until for nite or sat— TV on tomorrows— awful things—
I'm too full— Bed soon— 5:45

(Friday Feb 17) 12:30 PM— I'm so tired all the time and sleepy— cleaning gal (goof) is here— says Apt. is so clean! That's thanks to exercise gal. Boy my shoulder hurts! Bitten on TV & now mixture horse—
Got big cup coffee for morning—
Drunk a lot of it. Exercise gal from Valle here— did some walking— (yawn)`,"2011_00021":`Down the road, NO NO - that's all straightened out. Just ordered my meal.

Snippy cook and waitress really snotty but finally said we are bringing your lunch. I all needed - "OK thank you."

It was good soup & icky sandwich (tuna)

Steph is bringing up supper for me & coffee (after mine in AM)

Big yummy BM - good my stomach hurts - may still have some more

Friday - no one cleaned - so made bed - poor TV has people caught in a snow storm - now getting snow - good

Now TV - they (Steph) brought me food - good eggs with peppers & folded over - yummy no taste though

Hummed video on - done not funny

Another nap - now its only 1:00 in the afternoon. It must be the cancer that makes me so tired. Just brought my lunch - sorry I said.

I think its chic noodle & egg salad

sandwich

ice cream cup & crunchy bar (more)

TV has cozy men in Alaska just`,"2011_00022":`called me - we gabbled awhile - not going to supper - ate crackers & pea butter - gel
Call O'meara - He left Sheila a
message -
Had breakfast - good - 2 eggs & bacon -
However - I have ugly white gel with
skin disease in front of me - I fit white gel that
picks her teeth - switches her head & picks her nose
eek - if I don't look ya OK. He - no supper
Coffee pot is foogy -
Denis just called. Getting me a coffee
maker (I hope) or instant coffee - "Little
people" on TV -
Denis checked the maker - it was a brown
face! But he took it home & I've got
instant coffee - It's 4:00 P.M. + decide to go to
supper - my back hurts -
Sunday Feb 19 I felt like passing
out on elevator - yep - sleepy now still -
"Nurse" gave me tiny, part of pain pill -
will get one at lunch -
I did get one and had a nap. Son
brought me up 2 bottles of wine from Australia-
I gave him 10¢ - he spent 20¢ - OK Good
Movie on about mountain erupting - with Pierre
Broston - He seen it straight low here
again he put mine in freezer & whole ice cubes
what a guy! - TV good - the grandma
just did - good show - mountain just
blew up & family strayed.`,"2011_00023":`Killing people everywhere—5 now? They tried on the train! Get him!

Finally got my bed mostly bathroom clean.

I feel like I have to do all the time, wouldn't mind a part-time job a lot of s— again but feel better.

TV making pretzels—no him.

More News!

David came up—move next week!—I can take some stuff will take my t. Here try to get me a single room! Oh need if I don't & don't—not sure—

Sat June 23

Not sure what to write—oh yes—Sheila just called—Doubts if I move tomorrow (Sunday)—Don't care—need to put clothes away from work.

Sun June 24

Denis is here

Lost my hair—But found on coffee table—Leaving in now—tired of doing it—Afraid not living at grave.

While Denis was here a man said he used to work at Sutton House—So they bring`,"2011_00024":`Tue Dec 21

Boy! I am in agony & have been all night. Dumb nurse not back with pain pill that NURS. These shades are AWFUL. Got my eye shadow - black & brown. Not going to supper - hit candy & wine - good TV det. story on. Need to call demo. Left him a message - about coffee pot & paper on dying etc. Filled pen butter & crockery & wine. Still paged - April just called me. Watched comedy about Wisc. and Texas Fly - Donna & Eric Red.

Fri - 24th Dec

Den's O.K. - just skipping work today. Tried to call me - ick phone. He said he got my coffee maker working - good. He's coming out Sat.

Sat 3:45 - Sci Fi - on - magic card game - murder etc. I'm sleepy sleepy again, sky story.

Sat Jan 25

So weak - tried to make it to the Restaurant but almost passed out. Got my walker & started up & here came Lou and saved my life. I called Den's bringing me an Arby's around. Got me coffee - finally got my pain pill. Dad admitted she forgot it. This has been the worst Feb. ever.

Shoulder still hurts!

Alone`,"2011_00025":`you wrote mails - oh "yes" I looked there
Do Denis yes they do -
Wed is a chemo

Mon. June 25
What to write? Yesterday
angry - full of adult diapers" - course a
miss - at least bringing up my food
finally -
"Damn it" on a red all over so
cute - I took a shower
My "testa bibs" are dead or
sometime I could hate my mom again -

Last stop at
St Joseph High
Rose -

Hooray -
at least I'll have -
Nurses!`,"2011_00026":`4:15 - Had a nice afternoon; I beat Denis at "Upward" - Ate my Arby's the brought me a hot wine & then mapped.

It ended + awful.

1:05 PM TV on snakes in Florida's Gulf
I need to go to bed.

Mon Feb 27
Hot awful shower - water too hot or too cold. Read the paper + ate a roll back hurt - Mapping out the sound "Mary get dressed - you have a very upset. Note was left on door, so I went.

My "Indian" lady - She said it was neuralgia nerve endings inflammation - got same pain full of that all - Cab came - then both

Coffee still long. May go get some.

Coffee - too close to suggest well wait until 5:00 - make pop corn.

2:00 - Ate breakfast - pooped out - in bed until 11:30.

Mon - 7:08 - watching TV cop show - good though - Jimmy does finally took a long time to get there.

Wed 29 In bed most of day - Julie came up - helped me pick up etc. + got dressed. She left low left - then hit a 20th - he can keep it for a birthday present. T-shirt "TOP DOG" or something. It was so sweet - went down't get me coffee - I was afraid. I'd lost a Chick - but found it & have $1.00 (+ $0 for low)

Game him already.`,"2011_00027":`Office gal wants me for supper at 7. I'll have to - at 4:30 or 2:45 now. Cop show on "Criminal Minds" - All about Muslims + Castro's anthrax now. Where is Lou worth my while? Will bottle? Well - the nurse brought me one - guess it's some Denis put in there long time ago - not bad - where is Lou? She said she'd come back - Oh well - at 7 - BBT.

Sheila called - we had a good talk. I asked her if she remembered the 3 cats on a beach story. She didn't - Ha -

Thursday - March 1st - Lou's Birthday. My neuralgia is killing me - had a roll of cold coffee - just too tired & sleepy.

Went to lunch - soup & BLT - now cat TV movie - with a monkey.

It's over -

Lou talked my arm off; all his stories & kids & money - card he got them etc. - our wife was bi-polar - A lover to talk! I wrote "Happy Birthday" on a card. A goofy Japanese movie on now - 2 drunk guys + a wife - MATTY

3:57 PM - Cop show on. Had I

Friday - March 2

Got up enough energy to go down + get coffee - donker was in so I cashed my checks. At 9:30 + I just got my pill box full. I got coffee - paid that + a cookie - going back to bed -

It's 11:08 - going down to lunch.

Hope I make it!`,"2011_00028":`I did - but pooped out - back to Aft. & watched "House" -
Made pop corn and am drinking last
wine - poopy TV has tornadoes all over
in Indiana - Going to bed after this -
No supper -
TV on tornadoes in Indiana etc.
TV war movie - in Nam - hero
not, young kid - in TV series - Can't
think of anyone's name - Oh well its
lunch time - or not -
Had lunch at 11:30 - soup &
tuna sandwich - TV has
alligators & snakes too - I made 2
eggs & had br. food - and chocolate -
Written on TV - Mike snakes eek
& may be in Calif. He calls a lot -
My back wrist hurt a lot, & since
another pain pill -
Ate pork - more Chinese - Murder
story on -
Sat March 3
I thought it was
Sunday - & need good coffee - guess I'll go
back to bed - MTVS -
Movie on about Viet Nam & city
turmoil & murder - Lee reminded me about
Bruce Willis - I like him - Needed to
get coffee but didn't -
Ate supper - lousy - nurse brought me
wine - Good -
TV good - Corp - Dr Richard`,"2011_00029":`Tumble - innocent man but hunted down
Now about "Big Foot"
10:15 - got up from nap - Having wine,
11:30 in lunch - drank all my wine down -
Went to lunch - exercise gal here & feet
felt faint - she just walked me up
& asked a few questions - & couldn't think
of NEVADA - until now - We had a
fire alarm - then OK - wish I had
enough energy to go downstairs get more wine /
& did it - so good - want more - but
NO WAY -

(Wed March 7) I feel L O U S Y -
just weak - sleepy - house a mess & so
is coffee table - too hot - Ate a roll -
read the paper -
Sitting in my new Beautiful chair
in a dark maroon color - Denis brought me a
car Bichamb - I hated it - & French fries -
But I am really mad - Denis talked to Jesus
They said they found 2 giant wine bottles in
my truck - No way - & like the little ones, a
meeting Friday about it. I'd like to get one
of these - Maybe this will do it - But I'll
drink until no more pills - I've lost 13
pounds

Lou just called - wants me to be sure
he just got me out of trouble - Car driver one
of them - he name or company - TV on
"Law & Order"`,"2011_00030":`It's 5:30 - Bed at 7 -

(Thursday, March 8) I thought it was Friday - But ate lunch - talked to Lou by + noodle + ham + cheese sand. I'm sleepy now - It's 12:30

(Friday, March 9) Trying to decide if to cancel the meeting or not, don't need it. I haven't had pain pills for 4 days - Hate to call anyone - David doesn't want to cancel so we went - Nitty though.

Made 2 scrambled eggs -
Ate lunch - not all - not really hungry - now back watching a good "House" Ende funny.

Well - the Inquisition was AWFUL -
I said several times I haven't had any wine out of big bottles - just one - but they won't believe me - David is going on one week with not one wine - That's okay -
I tried them to check on my pain pills -
I came pretty close to crying but I'm mostly MAD - I'm to go down to eat too - breakfast wish I was in Florida -
fish + MAD - for supper - I'm still on shock + MAD - Bed at 9 - I'll be a good little girl! Shit!!

Tomorrow is wed most good - eat out -

Had a great shopping trip with Deany - got some super shoes / tan leather slip ons - $25.00 - for jeans`,"2011_00031":`red pretty nail polish - peachy silver - beads pearl green & dr peppes - I drove in auto chair - fast easy - good action TV on islands + dinosaurs etc. - next "the Librarian" I like it too

Had a nap and thought it was Sunday. No
Still sat aft wrote without coffee - not bad -
Sat - Its 4:30 - Still TV adventure stuff
my back hurts again? - NUTS - It's 4:45 -
Bed at 7 - set clock to 8 -

Sunday March 11
That cozy low bought me a 6 pack of wine! I put it in a
drawer - have one - TV on action + I'm
eating grapes. Need to find Cord for book
of poetry - Cute - Its either foggy or
snowy out. Visibility "O" my favorite brothers "Dean + Sammy"
were on.

David popped in to tell lecture me about
wine again! NUTS - Sure glad that's out of
the way, & I may still throw them out if I
get a good chance.

Its 4:47 - skipping supper - had 2 toast -
scrambled eggs - candy bar - I got good coffee
in my new thermos - unhappy nurse wanted me
to come let supper - said NO -

The aft. March 13
"House" is on 2 or 3
hours - I just don't get coffee -
Trying to decide if to go back to bed
but I'll finish "House" - He's in prison
medical stuff?`,"2011_00032":`It's 1:00 - go to supper at 4:30 - a good "Law & Order" on.

Now Jeremy Wake - my favorite fisherman. He wrote a "sea fish" joke. Lots of teeth "saw" also electric cells. Downstairs I got a pain pill but it's wearing off now - nuts - $6.00 PM tomorrow I have to eat at least 2 meals - maybe 3 ate breakfast + lunch - no supper. Spooky story on TV - about "ghost monkeys" guess I'll get bread & pea butter.

Ye Gods - the same old nutty woman came in my apt looking for her purse - she has no idea where her apt is? Second time she came in - I called the desk they finally came up & got her - she went through my purse & clothes on my bed! Black nurse finally got her - I think she had her apt near 1310? I'm locking my door - ate a catalogue. It's 1:00 PM then my back still hurts - more like my left shoulder blade.

Then my exercise gal came in - we walked my dog to the pet house - gorgeous up there, I also got some chips & pretzels.`,"2011_00033":`Some party! This guy says: "All sound alike." Everyone had on green day early! But I had green beer at popcorn. "Billy" dancing a force again. I cleaned my apt while I was gone. I put on a goofy hat that had my face taken.

I'm home again. It was goofy.

Gals on "Housewives" stupid.

5:22 - Back from supper not bad. Baked potato, sour cream broccoli in cheese & fish with bacon dessert chocolate cake. But elevator a mess - too many had to go. Time getting here - "Jeremy Wade" + God save our souls.

Sat - St Patty's Day - I still hurt ans got a pain pill - Rottie called + we talked. Her fall still bothers her head.

TV on a cat - or cats - and "artism" in a little boy.

Dennis just called - bringing me chili and other stuff - eggs honey cream & my paper - food! Spark show coming on.

Sat

7:17 PM - My back hurt so bad I called for a pain pill + just got it. After this show (N.C.S) I'm going to bed. It will be 8:00

6:05 - Went to supper - ham mashed potatoes + cauliflower + cherry pie for dessert. Not bad. Frozen World II on - Russia`,"2011_00034":`amida - then bed at 7:00

Re-watching a good movie - Dennis Quaid - about an airplane that crashed in the desert + these people have to fix it. They find out the designer just made "toy" airplanes - another sandstorm buries it, not sure about the ending.

6:00 PM Tue night - Some day! Dr. Nassar (very friendly) nice big man - told me I did have # one time the shingles now - nerve inflamed - neuropathy - he gave me some new pills that should cure it in a couple weeks or I go back then & just get a strong pain pill.

The cab got me at 2:30 - raining out - nice black nurse + a white one. I'm going to bed at 8 or 7 - missed supper but had 2 eggs, chips and a honey bun - Dr Pepper too. Alligator hunting on TV - Nuts!

Nurse brought pills - hope it works soon! My poor boob is so tender.

Exercise gal (nice one) had our last session - she hugged me good bye - things are better. I've got shower - the way I want it. I do my own. So little by little things are working out - maybe hurting - hopefully the new pills will cure them. 1/30 bed at 8.

(Wed at 9:30 to buy for my own pills - Julie exercise gal) last trip. Today no more ex-gals & for shower I'll wash myself - but I went to church - good time.`,"2011_00035":`cheese soup t. by sand & brought t. up for supper
my back is hurting about an 8
TV on "Alasked vortex" - and people dropping
I'm going to nap - it's 11:25 -
3:48 - napped - then got pain pills -
TV - good movie on Brad Pitt & George
Clooney - "Ocean's 12?" Not sure -
Now another -
Now 5:50 my cute Jeremy Wake-
fighting & huge sting ray - I had a
poison bark! He gets it overweight 200
Now -
really horrible wound
Thur March 9 10:52 - Had pills but
still hurt. Also hungry - will go to
lunch at 11:30
"coffee" - will go to lunch at 11:30
It was "goulash" - ate some & came home
TV Det. story with "Strassen" on it
not going to supper - just need coffee -
decided to go to Supper. (Had a nap) Fixed
Coffee - 4:15 time to go
Supper OK, nice fat ham, baked pot
cottage cheese & custard - I love jam on this
Custard - just in fig -
TV is on melting iceburgs -
11:30 Friday
no cleaners yet! Need my
sheets changed - TV guys looking for
yetis - Now storm is moving in
I'm skipping supper I think - but its special
food & a beer - May go`,"2011_00036":`I got a pain pill but gals starting to wonder if I really have pain. I just the Dr. convince them. 

Now lost my "were-wolf" channel & Wise.

Sydney on - magic - babies disappear -

3:15 - almost supper time. Will I get a beer?

Need to get coffee

Got coffee - had beer at supper

Catfish nuggets (too dry) tom soup & much cheese. Didn't feel good though. Back in Apt. Delirious.

Now talking with Jeremy Wake.

Sat - March 24

Denny Day - Good - other than that - Pod - Hot Fair coffee from downstairs in Thermos. Up here - feel blah - will go to lunch at 11:30

TV - no monster - make-up people - making a werewolf - I need more coffee - to get around - Ha -

Did that - just called Denic - etc.

11:30 - He said "yes he was coming up" - felt OK - brings me chili - I asked for 2. Bed later & he said "I'd have to check on that - oh pooh - they left me someone else towels & 2 of mine."

Had a good supper - Bar B Q ribs, mashed sweet potatoes, peas, & dessert - new I'm in my favorite chair - TV & blanket - just taking pain pill at 3:30 but still hurts!`,"2011_00037":`TV on "Pawn Shop" - Hot coffee tomorrow - Good - Dad early - 5/16/80

Sunday March 25
Up at 7:30 - they gave me the strong pain pill but I still hurt. Need more coffee - Made it. Thought I'd lost my hearing aid - thought & put it in my jeans pocket but it was in my robe! Thank goodness TV has Myth Busters & in water explosions - Good movie - Michelle Pfeiffer & Harrison Ford - Dad brought a little pill - said should bring my pain pill up later - Movie too good to miss the end.

Mon March 26
It's 2:00 - had nap & TV - Need good food - eating a honey bun, I went down & she gave me a strong pain pill - Good - TV Crime scene (for real) Blocks in the south. Eating a honey bun (said that) May not go to eat - It's 2:30 & supper is at only 2:35 - Did go eat supper - Long Chicken sandwich (dry) good fat salad - Apple cherry pudding - So back in chair - TV on - too full - Mom mostly again - size of his thing again - Nuts - don't care - "Boy" fatherman is on "Jeremy Wade" - "Spect" invite - guess I'll go back to bed.

Finally did it! Wished my hair - it was damp - water too hot - too cold - I can't reach the dryer - NOOO!`,"2011_00038":`Went down - got "Hiya + coffee" - feeling
their air - dry. Dad asked me "Are you
not eating? You're so skinny!" - wow? I
got coffee - it's good
Bitty (blind gal next door) came over -
asked me to call Dad - charge her visiting
hour - couldn't find his cell no..
Spoke main on - Stupid - bad guy
looker like The Devil
Ate at 4:30 - not very good. But
"B-Φ" on a bun & baked beans
"my" fisherman on - Jeremy Wade?
huge catfish - 140 lbs! We wanted 150 on-
my size hat - where is my pain pill?
went to bed - they knocked me out -
back to bed - up & ate an egg + TV - Crime
show, back just started hurting - poopy!
Check here? Then I'll go down & see
NO - not here - NO money yet -
Stupid good - little talor-tote - sand (a
Reuben) - low gave me baked pot + sour cream -
dessert marshmallow orange -
how back in jet, J. wade fishing for
a huge sting ray - 700 lbs!
Check (small) two!
But Stupid machine (with early
etc.) doesn't work - I called low & said "your
money is here" he said "OK" - TV on "serial
killers" gruesome stuff -`,"2011_00039":`Friday 30th March
Hot pills hit back awful,
and no food here - ate pea bitter. Coffee
hot crust awful - Dad cleaning - need to go
back to bed - feel lousy -
lunch ok - pot soup & cheese and - fell
now - Dessert angel food cake - fell
more - Rang for a pain pill but it's too
soon & only 8 hours for sex and the rest of it
could have it any of the content -
saw TV on ...
just had a huge BM - thought
it stopped up - toilet out it was just
stuck on for -
that sweet Lou brought me up
choc ice cream & 1/2 methadone (pain pill) read
strong or just took 1/4 of it & will mix Lou
would be serious

Mon March 31st
Up at 7:00 - Dr Massarota at
10:45 - fell down at 10:15 - I feel lousy &
sleepy & tired - poor - the only 9:30 - need to get my
top teeth behind the damn bed -
Pinnie came up with Runya
egg etc. Then took a nap but woke up
two late & they wouldn't give the supper -
came back, fed my Runya (coffee & candy bar)
at 11:45 - what a day! NUTS - cute show
on - playing the bottles.

Sunday April 1st (First day)
Up at 7:30 - Dreamed about Japan`,"2011_00040":`Monday April 2

Up at 7:15 - Dr. at 11:45 - just got pills & gave her "popper" - I'm coming soon enough. We take shower. Writing awful - Cab called - he's there (not yet) at 11 - so sleepy! I gave Pabst Blue Ribbon - it was there. It was so goofy & sleepy - pills or eggs? Sleepy now - go to bed. The two brothers fight demons. I need to know why my head is so bad - 10:11 time to go down.

Back from Dr. - had a nice white lady or I think made my pain pill stronger (I hope) Better - went out of town & plate of food - eat & drink - made me a 4:18 - had a nap - well go to supper - need a pain pill - hot pills - Swiss steak - corn - coffee - pot - corn - Back in room - TV has boat something - have my eyes - Devil show on - 5:30

Pills made me goofy - I asked them to make the pain pill stronger - they did - I feel ODD - goofy like.

Well April 4 - feel funny again - Oh well made coffee - hot roll - don't work - cracking - no fun - other

Pills don't work - Wall Street`,"2011_00041":`Down at 1:00 for pain pill!

March 25th
Had a long nap but still only
12:30 PM. Nurse sat on my lap & chipped away
march salad. Bo. OK. No sugar downstairs
feel lousy where are pills? Nurse came
up with new pill—had tried telling me
PHOTO—can't write. Can't write.
Crazy hours. Didn't write bed at 4:00.
Tired at 2:00. Dreamed about trying to
get into bed and out of bed. Yuck—also
felt really sick—man can't write.
Got pen—oh well—back hurts.
Bed again & next morning out. Made coffee—
Drew in need to work pain—11:15—lunch OK—
Flash on TV—Not going down to eat to tireless
already.

Monday April 6
Up at 8:30—more from
my head—jumping again to get a bite? Need
good coffee—no coffee? Not much doing
today—feeling pretty bloated and—
Had nap—up at 3:51—nice long talk with
R.

In my dream I was having a dinner for a
lot of people up with potato soup! Ha—
Cathy came. She told me Michael—
had Parkinson's—I suppose I'm getting that—
this "cool cookie" jerking pen stuff.

Sat April 7
Real foggy out—then
the rain came over at 7:00 or 11—
shop (telephone) go out Red Lobster—feel
lousy—big deal—trouble breathing—
hot Jim here—can't write again.`,"2011_00042":`Supper 4:30

Shopping today—mostly a good phone! Would I can write today? Or in my hand twitching? Going this breath problem too—aye gods!

Good shopping—2 phones—one in front room & one goes to bathroom & cantelope & tangerine—some pens—never did find brown spot stuff! Had good nap—but got mixed up! Went down to eat at 5:30—supper to be 6:30 Nice guy gave me waffles & two eggs & coffee anyway—hot coffee in my holder & more TV.

Send a little card—got pills—intense stuff—coffee—after coffee is good—get it in the lunch room. Read the Child paper—will wait until 18 to call.

Monday April 9—up at 7:00—made coffee—had roll—I read paper—same old same old—found jerky—shower this morn.

Met a bad shower—went back to bed—now down for mid—looking for more from AMERICAN SHOTTER—I sent 10¢—a good charity.

I lost my money pocket book Clittle one with coins—NUTS—need a stamp`,"2011_00043":`March 11, 30

Supper 4:30

Supper OK - steak and f.f. - I got my St. Pate Day pie, but hooray - I found those really pretty birds & ended those "engraved" pieces I made - thought it best that nickname tomorrow into "Shrimp"

I was shocked to see that Marilyn Cropper (friend of mine) died - she was moved to rest home - she probably wanted to go - "Valle" was so sad!

Had a nice nap - it's 5:30 - waiting for Denis to bring up deli - watched a cute movie - about Rodden & "flying machine" Denis just called - let's be late - bringing in a burger - nuts - oh well - I'll have a phone.

(Next April 11) - my "shaky" is back (probably returning to NUTS - "slant head" are son about "fearless" this did not be Parkinsons - hope not - Oh well - what's next?

Had a long nap. Wake up - 3 of every bone muscle in me hurt. Now I can't get the till to work - keeps saying "Out of Range"

Nurse got "Robby" the state doesn't allow office people - Jesus for love she just brought it back - they loved him too.`,"2011_00044":`Sun April 13

Rode my new phone out to work says battery low will be by noon? We call Dr. from the phone in the hall think I'll go back to bed almost 10 - lunch OK, today's camera & Angel food cake Low gave me his cake - he is going to come visit me if he can fix my phone - so so - so I'll leave Dennis alone.

Wood Cold Low - all I need to do is dial 9 - 405 - then number hit green button - so I'll call Dr. tonite about 7 - Don't have to - Low's answering service picked up. It's 4:15 - TV has guy with pet tiger in his apt! They make him move it - this damn hand won't work right! What is it?

3:00 PM - nice nap - made Popcorn TV about stupid "going" conditions!

Sat April 14

Feel LOUSY - can't get my breath, waiting for Dennis to call or bring me stuff - guess I'll get fruit, shrimp for lunch.

TV has alligator & the everything - I'm trying to memorize my tel no - 951-5199

Dennis where are you?

I had to use Betty's phone & call Dr. He came up about 1:30 & showed me phone - Hard to get my head - tornadoes around here too

Again foggy out - & tornadoes around`,"2011_00045":`1. Push BOOK (left middle big button)

2. Push Down arrow until you see LONG-I then press TALK

3. Push BOOK then push the Down arrow until you see LD2 then press SELECT

4. Push BOOK then push the Down arrow until you see the name of the person then press SELECT`,"2011_00046":`Having some beer—Spooky tornado
around & maybe worse after dark

Sunday (April 16) went back home—had a
pain pill at 1:00—doesn't help—Now "fish show"
on with jelly whale—Before bed need to get coffee for
morning

TV on weather & tornado—
Had my shower & mapped until 8:47
Foot or cut my toe nails—good—
TV has poor guy lost on a volcano—
no food or water—scores infection in leg—
He'll be lucky to make it—Been out 3-4 hours
Eat at 12—Poor guy—5 days lost in a
volcano! They find him after 5 days—so
I am so sleepy—Pills try to get me—also rather
goofy sci-fi—On—but I like Sam & Dean—
Had lunch down street—I like the
new way—I sat right at the entrance to the
front room—we had soup & salad—wanted to
get candy bar & coffee but too tired to—ice cream—
peanut butter for dessert—
took pics down & drew of these 3
things—hope they are still there—now
alligator on TV & snakes—egg—

Boy am I happy. Lost my
hearing aid! Looked all over in bedroom
then mapped—Got my looked again—there
it was on the floor by little table—so
I FOUND IT!`,"2011_00047":`3/6 6:15 PM - TV famous people
Now 7:10 - bed soon - call in here

Wed April 18
Yesterday I was - I went to the hospital - couldn't get a good breath! Ambulance took me - had X-ray - blood test - no wonder 3/p 190. Yikes - state high. Stupid nurse just felt my wrist - had to force her to call. Home in van in wheelchair. Van guy drove me home & helped me get on toilet. No reason for deal?

2:44 P.M. - left Denis a message - now
headache. Catch - watched something - blue eyes.

Thu April 19
Bed most of day & feel
faintly - fell in bed - funny thing. Hope
came in - filled out card - voting for me! Th-
don't even know who is running!
Denis called - they made an appt. for me next
Thu at 7:45 - be there at 7:15 another X-ray
"large 3"

I called & asked for lunch - there. Will see -
other wise go home. Cool wanted me to come down -
too. I ordered a No 13 at J.J. Johnson's - $1.35 and a
pickle.

What with kitchen? Make me mad.

Guess I will go to supper - its 5:30
though - not 4:30 - I left early.
I am too nervous about this new
X-ray - they probably just didn't do it right -`,"2011_00048":`Supper OK but pork roast like a shoe sole.
Saw dessert ice cream - I got coffee & cake bar.
TV - Lions now & ice bergs - huge
+ you know

Friday April 2nd
By 6:30 - feel better -
just felt ill - blood pressure high - coughing - dizzy
Hand is getting again! I'll call Dr. Ture -
Cleaning day today

3:30 - ate lunch - soup - icky - sand - little
old lady talking - ad I couldn't understand her
"religion" - "lying" - finally said "in bed in both
ears" - HA! went and sit there again.

up from nap - but B/P still

Tigers on TV

10:30 AM - Had another nap - time for Doris
to call me, & hope he will take me too -
wish he'd call

April 2nd
9:30 - read Tigers. Then
sleep - need coffee

went down to supper - met good
TJ & F. Touch Charlie - handball - then - in
bed

Mon April 3rd
These pins are so - go!
Another one - not much better. TV - SAM +
Dean and town drownings - something about a
man too - Good show - guess I'll go to
lunch at 12 -

Next - took a 5:30 fall in
Two Stallroom - just before lunch`,"2011_00049":`X-ray - 7:00 in lobby

Phone was ringing, got up by the bed. They fixed me lunch so funny. I thought it was chocolate jam on my table. It was blood from a finger. Nurse put bandage on it - ate French toast, bacon & eggs & coffee - feel better.

Made some coffee was awful! Oh well. 3 people have reminded me of X-ray but in the moon - will be glad when it's over.

The 24

Big Day X-ray - I'm dressed & will go down at 7:00. When I fell it must have been on my butt - it was sore & also couldn't find my hearing aid in the chair. Got my fingers crossed for good news at Drs. Need money - Vickers here soon.

Well - no good news! A flop in my throat. Cuts put me out & take a biopsy - also a big tumor in my stomach pressing on my heart - hence shortness of breath - so tried to get home - Dr. said. Didn't see Dr. Pop. + Candy here. Could popped in & will be back. Pray - want to listen a nap.

It's OK - We were here & gone fast. I'm eating candy & will take a nap. 2:17 PM

Had good long nap - It's 5:30, thinking about calling Sheila.

She called me - wants me to be sure that Denis does a power of attorney or I'm not on`,"2011_00050":`Elmo - power of attorney - pay rent
key and leaving aid - fill out form for
Medicaid`,"2011_00051":`Life support for a long time. NO

Went down to lunch at 12 - had to wait in hall 15 min.

Mitts - Polish sausage & pepperoni - rice. Krispie
dessert - topped until 4:15 PM - WOW TV
looking for "goons" in the jungle.

Thurs April 26 10:20 - got dresses watching
my favorite brothers - Dean & Jay - in old
old movies - insane asylums. Closed down
for bodies missing from long ago -
lunch OK - tom boy + clean cut sand -
& drew out $10 bills at bank - got honey
but no candy bar.

BUT - no hearing aid yet.

HORAY - I took a nap - turned
over event though it is! My hearing aid! Never
lost it again! Seems me too much. I will
put it in the tooth holder & on coffee table
in front of Wendy's pie.

Friday April 27 thought it was Sun. Ha - my
money should be there! Feel lousy - what else
is new? TV has "fisherman" Jeffry Ward -
$15 - my a.

502-2720

Some guy from a collection agency
called & owed $35 for something? Credit "have
good & John Alan Denis call phone."`,"2011_00052":`Chil Denny favorite 6:00

Know he won't like it but I know nothing about it. I need some coffee—went down and got it. I feel lousy—It's 3:25—got chips better than that!

"Law & Order" on—Importing young girls for brothels from Europe.

My Alan show on now—only he's someone else—at wicket.

I found David's card—I'll call him tomorrow—just talked to Denise. He will be up tomorrow—good.

It's 6:37—bed at 7—

[Note—April 28] Up at 9—feel punkey—can't find medicine papers & need to fill out. Will call David. TV has "Librarian" on—late show.

Darling Denny came up with papers—2 beers—Mushroom & chicken—Give me 3¢ what a deal—also made out rent check & filled in power of att. for himself—so hoody—Now it's 4:15—good to bed at 6?—"Pirates" movie with Johnnie Depp is on—our skin at last into a cute movie.

[Sunday—April 29] Chk in here. But bank is not open until two—Denise gave me 5¢. Don't need anything but candy—TV has "Journey To Center Of Earth"—ended OK.

ate lunch—fried chicken—scallions—red & yellow orange—favorite fishermen on Jeremy Wade—so cute! Looking for a killer catfish—in Indiana—now he is looking for a good—`,"2011_00053":`I am so sleepy & tired & the only

Well—there over—at

was the biopsy—not the hernia! It was done
really well though—Oct. 21st & my throat is so
done & there was with me the whole time. What a doll—

Afterwards we went to his house & got by brother Cottage
Cheese & beer—Home now & a long day & need to sell
Cott—TV has been packed in Office—story to bed—

It's 3:00 got TV on "Homer," "Monkey" and "Eleo."

Watch mushroom soup—long, those dirty clothes are
mine. Have need some early—no problem here!

The May 1st Got check & cashed—
& went to lunch—hot bad—clean quick—
tomatoes—good—raspberry cookies for dessert.

$5.50—this is a better
pen—super pretty good—went to shop & going back
up at 6:01—wanted to get coffee too tired—Fisherma
on next giant fish—

Wed May 2 No shower girl? What's up?
Hope state quit. Woke up just in time to
go block—12:00—buy cup of coffee & cheese cake.
yuck—But—got coffee—TV on Nostradamus
Star positions—13,000 years until end—WA
now be huge tidal wave and apocalypse—
probably a flood—"Mona Lisa" painting in there too.
why? Anyone see it? I will see soon. I got a
pain still at block—I don't help yet—pain in
my eye—going away—hood—c'mon—back to
Di Vinc—Now about earthquake—di-Vinci Cutting
up a body—says the soul will still be`,"2011_00054":`how to die - yesterday - hope it's all wrong, it's going to be - it's 2:00.

(Then May 3rd) Up for the last time. Feel like s. Always having coffee & second for breakfast. Also coffee from TV - making talks like the "Big City" didn't see who won!

Well, Denis brought me up a sur and bed now - I do have cancer. Really not surprised - lost 10 lbs - lost my singing voice - see the Dr next week. I was pretty sure it was -

Supper, I know, they wouldn't give me what I want, I was down too early - y'know. Left after hard boiled egg - HA - thinking about cancer now - got no coffee. NCSI is on, on A+E - now my favorite fisherman - Jens Wade - got another pretty card from April - will call her - almost 6:00 PM

Jeremy on + giant sting ray & babies - feeling older guy sat with me - he was mad about them not writing one me - just came home today. Fish on TV - can't decide if to call Ruth yet or not.

Fri May 4th - Six p.m. Nothing new - got off for the good - ate Pizza again. Had Dr Roy, I called David Penello & told him - I said will things change now - oh no - so that's good but still - go down for food - poverty.

Went down + glad - "Cineo de Mayo" also deal on AND a free beer - also 3 candy bars.`,"2011_00055":`Dr. Fro 8 AM

Knew I was in a change - went down
and got coffee. Got a few things
to eat. Went to Mayo
thought it would be nice today - Nita
got R, it was the lousy cord coming out.
But finally got her to tell her
decided to go to lunch.

Sunday May 6
Cant get my biscuit
Mad at 9:00 AM
going to lunch - feel lousy
Maltate 2 cent, egg toast - 1/2 Hershey - lousy
coffee - back really hurts - felt worse
so short of breath. N
"Man against Nature" ate ice cream cup, watching
Indiana Jones again - now in the
dingle - Sheila should call me -
or I'll call her -

Janes is over - cute -
down & got coffee & choc. candy. Good - TV
guy slept well - now "Down Below"
on. Dennis said Dr. got. 3:00 at 8:00 AM - OK
N - 4 foot sailors boat overturned - no
one ever knows where they are - Ha -
1:00 - TV "Down Below" gun 1500
Lunch & beef sandwich - no soup - coffee - back in
room & will n't
got Kent House reserved - Sat 77
1 to 5 - feel lousy, what else?
TV - freaks & bad guys - & my favorite
Detective`,"2011_00056":`6:45 Sun rises - bed at 7:00 - Fish & Wade on TV - need more pain pills - Cuts on TV Help - too cuts

Betty (next door blind lady) got locked out - ask for help - no one answered phone - so went down - nurse made me stay & eat - good luck & chips - watermelon - almost bed time

May 8 - Put in new battery but still can't hear - just faint "Sam I am" on Charlie

Vampire in the one - stupid watch won't work - But I guess clock does - 10:30 AM

So sleepy - still 8:00 on

TV - maybe its 11:00 - Boy it's a record "bed" day I know 1:15 - 2:15 - get up at 9:00 - 10:00 go to supper at 5:30 & bed at 7:00 - my cute fisherman Jeremy Wade on TV

West down for candy & pen into David - I have lung cancer not vocal cords! Better I guess - we have a puppy - I got 2 honey bears coffee & candy - coffee & TV on "Plants"

These I'll call R. Crazy phone - tried 3 times - no deal - poopy

TV has old "dog" "choochoo" story

has a stuffed one in Texas - guys are taking it

May 9 - TV has movie - where is shower girl? - when am I out of bed, for hearing aid?

I am Happy, Lost My ½ hearing aid - & thought under chair - looked everywhere then there it was on the floor - under the blanket

Even worse better - I can hear!

I tried to heat up puppy - blew up all our in micro - the & ate what I could`,"2011_00057":`Lunch at 11:30 noon - take old seat

Sure glad I found it, I can hear TV after supper - will go down & get coffee & maybe candy. So happy about that ear aid. It's luck!

Then May 10th I had to ring for a pain pill last night & hurt so bad - left shoulder still hurts - no shower yet. Had good B.M. this morn. TV "things" in water. Looked like a manatee to me. They finally called it that! I am so breathless already! - Ya sick to stomach & 8:30 am I'm hungry? Guess I'll fix an egg & toast.

Not bad lunch - big rice soup - cheese tom bacon sandwich.

Got another pretty card from April also record of med. fill & O. owie thank goodness. Had ice cream - also pen pill at 1:00 -

6:30 PM - thought it was 7:00 o'clock. It is 6:40 AM! Nuts -

Friday May 11th Back from Dr. (Mrs.) I took two shots on my lung - right hand side. Had to wait - guess our x-rays got mixed up. Next trip next Mon. for another MRI or the other poor dummy tried it - I asked if we met by a doctor he said "I'm taking you home mom" Ch.K. - & that that survived from yest. Good rest & I'm going to TV - airplane going bad. (And today a gal (nurse) just brought me a gorgeous bouquet of flowers - I guess`,"2011_00058":`Sheila! Sure enough - in a pretty large vase - roses and cornflowers I think - TV has two fishermen - she never makes my bed - the one said she took them to work - what the hell! Need to go to bed. Went with pillow + blanket - OK - it's 8:45 - this place is a MESS - don't care except for company coming. I'll pick up a little - back hosts - not paper yet - it's 7:15 - NOTS

Sat May 12
Cold in here - put on robe and blanket and turned off heat. Called the paper co. but couldn't hear a word. Left my name.

Got the paper - also wonderful box of fruit chocolate from Mary & Mike - I ate first a huge strawberry with chocolate coating. Then trying to remember actor's name - finally looked up newspaper listing - there it was "Tony Shaloub" of course - the detective too - it's only 2:30 But let's go I guess.

Had more J.J. sandwich + ice cream - Fish game on TV - great fish - goofy guys - Now a "barn shop" - old money + diggers etc. Now a "driver" joint - worth a lot of money - $5,000 not bad at all.

Sun May 13
Well feel lousy - lots of buying feels better - I hope.

Jokes on me. She sent flowers to Fred both!

So Sheila Shawn called - guess what!`,"2011_00059":`Now 6:32 PM Sun - 11/14

Mike Fitz sent a gorgeous bouquet of 5 different colors of Chrysanthemums & Baby Breath in a pretty vase. 12 flowers or 16 flowers? And he's coming up soon—maybe this weekend!

Hermie is on his way up with good beer etc.

Good!

It's 6:30 - had beer - I'm wired something about Dr. at 7:30 in morning & told him to call me in the noon - I put out my dirty clothes - back hurts -

Ordered (Cat scan) over 1

Terrible time - they kept me waiting 2 or 3 hours in freezing rooms - then 4 pics of scan - put in dry - waited for cat - took me though Burger King - had good coffee & chicken strips - & tipped him 5% so he would get me coffee. Now I'm missing cotton - little nurse "bugging" me about it. At least I'm warm & had food + coffee - Snakes on TV - Now dogs -

Other gal found my help button so that's good. 8:13 PM got Dr. open + Herby bar - So good - Police story on. CSI

Now cartoon "Junior" Citi Boy + Cat - Oct 12/95

I need bed - Had a nap. Ste 3:15 - got a Dr Pep & candy - said that. Ati chips - TV too.

Thumbs "swung" people + alligators - My back hurts - Will fix an egg for supper - show

Wed May 16 Hot pain pill breakfast at intermally short - Coffee this noon was awful`,"2011_00060":`Wed May 16

Up at 7 - coffee terrible? Why?

Washed hair but no dry towel & soap wouldn't come out - Ha - Finally at least it's done! Now 2:30 The cat. Heated coffee maker - now raindeer? Trying to let them go - they are jumping - Miami is awful

Just heard from Denis - Be in lobby at 10:5 AM (tomorrow)

Cat will be there - to tell me about cat scan - good I hope

Had supper - good sweet pot fries & hot or brick chicken patty - So tomorrow to the dog - to hear about cat scan! Fingers crossed.

Denis called - Cat at 10:15 in lobby

Snoopy "wildman" on TV now. Catching a smoke - rattle - got him! His "helper" is scared to death - like I would be - He is a big ham - show off

Now FISH - tank builder - 2 more nuts - but do make gorgeous tanks

Thur. 12:40 - Back from ordeal! Some good news - It hasn't spread! Had to laugh about going Down East into - they said we didn't see anything in your head - Ha - good deal - hasn't spread - We stopped at a Runya - got a nice cheese mushroom sandwich`,"2011_00061":`really good - No chemo until June 3
wake - good - another good thing - Sheila
is coming up & help me (+ Denis) Be so
good to see her. TV has volcano & war =
bull fight - now boat sinking -
and airplane crash - mageton gets sat on if
fire - hanging upside down. He really was on
fire - Denis went back to work - these I've go to bed
& call she. tonite -

Friday 13th
"Chuck wagon" style - catfish corn salad
Cake - but they said "no beer" - OK have to
go down & get wine - or have a girl get me
some. Poopy

Amuse fun. Video on "cute"

Sat 14th
It's 1023 and no Denis Call
yet. - I'm really out of wind! Sleepy
"swell" men on - trying to catch a racoon!
Now my favorite fishermen go wade.

Sheila just called - coming up from 10 - Den.
afternoon - Mike Ditty too & they may go Ditty
pictures on comp.

It's 3:15 - went down + got coffee - needed to
get pushed up by nice little guy. TV
on cowboy show - Jimmy Stewart - TV cutting
down the - Row - Snake - cook -
late there. These I'll get pea butter + crackers
Monday 16
up at 8 - had to wait an hour
gal every now & then pill! + a new shower
have me shower (I need`,"2011_00062":`Save the paper for three.

It's hot - roll - see the paper - need to mix coffee -
so I will - didn't look a map - now oh 36
- Alan & Dean - Sam looks dead - all done
I got a neat looking grade card from Callin'
getting out of his school - Tommy Lee Jones - movie
on - I just love him - went down & got
chips & tried to get Dr. Pepper - no go -
feel LOVING - oh well - Roberto was
the other actor

Nitty again! Thought I'd lost
my aide - in my ears already! So
stupid - what next? I need a keeper!
Sheila hurries up - she - it's 5:30 or so - my
watch says 7:20 - it's nuts too! Anyways
good soon soon - I hope it is. I'm
tired & don't want -
Tuesday 17th
I was late but they were nice
enough to feed me - chicken noodles & peas
with meat on - my favorite - beef
noodles with meat - in cream
Found my good pen - can't
decide what day I put it in -
Trace came along & got paper & talked a
little while. Save her phone -
Had good lunch - late again - it
was taco salad & strawberries - coffee
Really pooped when I got here. Wonder about
chemo - I really be pooped & sick`,"2011_00063":`Thursday - May 19
Up at 9 - feel fairly well - TV had Hollywool-Deatha & Last note I was really scared - pretty nurse gave me a weak pain pill - then later a strong one - too many - worried about my chest - got up - came in front room ate crackers & pea - Butter - TV on - unexpected death of someone - Bernie Mac now - My Breathing bad - third arm was watching Bruce Willis but lost it.

Friday
6:30 PM - Denie & Mike just left - such sweet kids! Mike will be here 3 weeks - Denie in tickled to pieces - he -

Now - Lou just called me - but wants Denie to come get him - NO way - so I'm going to bed. Tired!

May 27 - Birthday Sunday
It started out with NO paper & big things on leg from BITCH aide. Called paper - heard my name so just said "Thanks" - balloons & sign on door for birthday

Nice -
I did it again - Stupid - thought it was 8 AM
It was 8 P.M. Let's called about paper two feet - pressure on my chest in the note - laughed it off & go at what a heart attack!

May 28 Monday - Got one piece early making me wait for other other - gay to call Dr. tomorrow. My song "Wade" is`,"2011_00064":`Lyfy - 33 - hunting "Big Foot"

On - In by old ugly cat fish * Can't find my damn waste basket - "Lyfy" took it somewhere - maybe in garbage room.

May 30

Called Dr - will change - have Nurse call - may be able to change.

Then Mike showed up with food & beer - Took a nap - it's 2:09 after a darling "Alice in Wonderland" is on TV - good - cute rabbit etc. Johnnie Wapp is a real weird nut. Almost over - I gave Paul the tree paper.

Now Micky Mona is on - poopy.

Two

3:36 PM - watch TV - aft.

3:34 PM - Lyfy on - check here - third of socket - Ouch. Made popcorn & finished beer - TV huge smoke - a Boa. Also something - how in India.

Three May 31

Pills at 7:00 AM - Ole honey don't need the paper - will make coffee. I'm laughing this program that little people met to wear has run into - gel that doesn't like anything! Jumbled all her old clothes - gave her $5,000 card to get new stuffs - can't wait to see what she buys - Having a hard time to break today - Better after I ate. Mike & here - had a beer but we went to eat - soup & sandwich. Home & had beer - Mike reading papers - Lottery on will my soon. After Mike leaves - he made me a nice board with dates & where on it. Chino (3 times)`,"2011_00065":`Then May 3rd

John Edwards found not guilty on affair (Good - he was just too cute - Ha) I thought all day it was all day cleaning but it's tomorrow - good - finishing my beer Mike bringing chick legs etc - puppy & hope - Breathing trouble again. NIVS - Pain pill at 8:00 around 4 hours or 6 - poopy - don't know -

Friday May 6th

Got 3 pain pills - No more alcohol, Mike said - knew that! Anyway, got 39¢ and Mike bought chicken legs (little late) lots of chips coffee & grape jam - good! Mopped & hit 2:00 PM - need to fill out a form for money - filled it out - NIV - Alaska & whale - Now Debbie & Fathers? Made chick soup hot chips & candy bar - Money - yuk -

I hope Olivia is enjoying his "Mom - Action" or "vacation" from me - Ha -

Sat June 2

Been sleeping most of the day what I got up from long nap & thought it was 5:00 PM - HA 12:30 - just remembered chicken leg - good - Denis called & bought me Ringer Hamb - Swirl it at 6:00 PM Sat. Bed after pain pill - Fishing guy "wade" in on.

Sun June 3

Feel after icky - can't get over it - P and made coffee - now to see if it's any good - Yes - it's very good - walked down & got phone - No more walking!

Ate lunch - was flock I had a tea - no my whole - Ye Sods - called my aunt`,"2011_00066":`Need Walmart with Sheila
housekeeper
mail pick & remover
lite cotton tile
lite wine glass
denture tooth paste & brush
brown spots`,"2011_00067":`(Brother came) at 10
Supper @ 3:30

down - will throw out shorts & 
its nap time -
Only 2:30 Sun. aft. Nice nap,
though - Baby bears on TV - now trying to
trumpet one - made coffee - good too
Sloppy guy that catches all animals & thinks
he is so "hot stuff" - "Call of the Wildman"
getting a skunk - that digs holes & horses
step in - & break a leg -
Now he's looking for a cow - found in a
big hole.

Monday - June 4
Sick this morn - Turned
down shower - made her unhappy - she cares? Feels
better after toast & eggs - "Am. Pickers" on now - they
Buy old American & new Chrysler etc. Steel feel
Lobby.

3:26 - So Mad! - I called 3 or 4 people
asking for laxatives & food - NO ONE
in 3 hours - went to bed - Dozy - up & no one
here - but at 3 a nurse brought me a tiny pellet
small milk of magnesia?

now on it - Greedy old statues - Books &
nude women & men - men all there - Ha / 4:01 -
Cartoon Arthur - Changed - guff - no -
Mike called still having my chest - oh well
good

Next to last chemo here - only
took 1 hour & Mike took me back & forth - got me
a great chemo roll - paper work - coffee - I feel to
be home - will I ever get through? You
Tomorrow last one
Putting in my hearing aid but`,"2011_00068":`Seypper 4:30

Couldn't find batteries for hearing aid - going to bed.

Sunday June 10

Wed 6 June - well chewed out bad cat
2 more to go & then again in 2 weeks - Pawn Shop is
on.

Just had an awful scare - pulled my hearing
aid out except no brown part! - looked inside
chair - under it etc - finally gave up then
feeling hair - there it still was! just
brown plastic part - so glad - I think
it's helped. No - my eyes are goofy.

Sat 9 Not sure of date or day - I do
know it's real early - 4:30 AM but I
feel better now. I've got good coffee & a roll -
my hair looks pretty (too far) nice grey
thing (shop) today. Hope not! My wash
had 5 pair of clean pants! - Good to see to
go get hearing aid -

Finally found out it WAS Sat for sure - NO
Chase (I hope) until next week - Sheila here too! -
It's 8:45 in chair - blanket on - almost at the last
of the trip? Want some papers & long underwear EGG

Had a surprise letter from
moved me closer to door to help
old gal that they trouble.
Close to door - Need good in`,"2011_00069":`Soup, red bean & cheese salad & choc chip cake (too rich) then upstairs. April called - couldn't hear her twice & hung up (accidentally) on her, tried her, I was going to bed but just woke me up, & kinda hope she goes home but guess she will.

Was I shocked - got up and here is lots of nice presents for me - April & Denis - my funny barking dog there & working - a cute stuffed white cat - 2 wall straw hat decorations - 3 ceramic cats white - real pretty potted flowers. Hope they come up, left message of food & need. Pawn store is on - my hand really hurts when needle was left in - again on next week - week -

Well - they (Mike Denis & April) FINALLY showed up - went to a movie! First they brought me all this stuff (Denis my "rolling dog & barking") my hand that had the needle in it is so sore & ache - will tell more next trip - going to bed soon 9th 7:15

Sunday June 10 Happy Day - Sheila here today & good. Hand is better - Boye took me upstairs everything - Sat on - honey bread coffee - Countains - So good / sci-fi on - Now cartoon`,"2011_00070":`Bad Year 1910

Jon died—
I'm in a bad car wreck—flown to Hosp.
In awful nursing home—
Put in not bad High Rise in Omaha
sent to horrible home—Valle—
back to St Joseph. Asst. Living—not bad
my own apt., 1410—
Came down with Shingles—very painful—
went into neuroalgia—then into Cancer of lung`,"2011_00071":`Monday June 17

Up at 7 - just had Sheila coming up and will try on new clothes - Good shopping & watch, slippers (brown spots) shoes - elastic & engraving? big soap

8:15 A.M. Someone call me & bring good coffee! - The one I made in coffee pot is AWFUL!

Tuesday June 18

Up at 8 - getting (I think) hair washed & cut by Ashby - it's slippered - B.T. mode to drive (at least) 10 miles to BIG FRED'S for Pizza! I hate him & was stupid - pizza was good but I wanted something else.

Well Ash cut my hair real cute & short then Sheila got really pretty - very courageous - So I look good (& younger) Mike has gone back & won't miss him a lot.

Sheila has only given me this pair - Ha - So I'll drink & worry they're better & let her make over 90 - hair club

1-800 873-2606

Now - I was sci fi on - I need new pens - I have 50 lots of food`,"2011_00072":`Just take a day at a time—
It can mean stand more on its own
it’s innocent but everyone is there

(July 13th June) Slept OK—got up at
5:30—nice—felt 73 M—looked down
today—Sheila & Denis both taking me
know my
swallow. Oh well—she got good stuff to
chemo until next week. Dr thinks I’m doing good & not
breathing better—
Everyone is getting ready to leave—
slow again—
that’s OK—
had a little bite—so good—
one leaves I’ll nap—what else is new?
Couldn’t believe I lost more. She says it
I want to gain—I don’t—
but going to be great & lonesome but she got
lots of crafts (thanks to shei)

We—my family just left,
First she got me a great big black piano &
a smaller white one—also great black &
silver earrings—what a gal! One in a
million—Sheila wants the to be sure of
her—Damn piano
not a bad sci fi on—
now I need new pens—
have 50 lots of food`,"2011_00073":`new watch (dig + black + white earrings
bag + shoulder bag + dressy small
white one - about $8 lovely type of
Sheila = so lucky to have had
her - of course it helped her through
nurse training but it's her talent
at brain got her where she is - by
job - great pay - ($10,000 year) and so
generous - my best production - Ha -
Dinis next - Mike Finley - Shawn next
Breen dragging up the rear - Ha -
had a nice talk with Ruth
told her all about presents from Sheila -
probably won't eat supper - bed at 7:00
pain pill hasn't helped a lot - she said
those nerves in my left shoulder blade
are probably destroyed - it will hurt at least a
year - Oh boy! - she talks loud now as
it is - nurse in her

Almost bed time - good - great
having kids here but nerve wrecking too -
what do everyone? - when coming? always late -
never kept me informed -
how on TV - my favorite fishermen
Jeremy Wade - fish are ugly & some have
huge teeth - Tomorrow is Thursday - no
chemo for couple weeks - good - drew blood
today - OK I guess - Tomorrow start lunch
downstairs - walk for mail + coffee`,"2013a_00002":`Cat scan. 8/22

Well—finally have a notebook—Denise bought it at a range band of beer—I came in and here's Mary in my bed! I knew she would—

Lunch OK—BLT sandwich, apple juice & water—melon. Now I'm full & sleepy—

It's 2:34 after dinner. I'll read rest of En Grouver—

I did—watch looked at birds—
then I'll lay down until 4:00—supper time.

Sunday Aug 12

Up at 7:15—B---- kept turning ceiling light on. Now my slippers are under the dresser—wets—

Read the paper, need to go to B.M.—
guess I'll take paper down & leave—
I did—then lunch—good—roast beef, pot roast, cabbage & coconut pie—now I'm full now. But I good book—no
but today—just not working at desk—
OK!`,"2013a_00004":`The books aren't so good -

I'm at supper now - fruit & cottage cheese
apple juice - what will - not bad - I had to
laugh when Elaine picked up her sand. (time) it
fell all to pieces so funny! - I'm filled & going
back - may watch TV

Mon Aug 13 again - no bacon. NUTS-
also milk of magn. for a stool softer - that's OK
although I hate it.

(To green diary)

Can't - it's lost - along with hearing
aid - what is going on?

Oct 29?

Good for feet but again - no Bacon.
Oh well - no diary or h. aid -

(Over)`,"2013a_00006":`Just found this

Tue April 16 Talked to Mary & Mike. April OK - good - having beer last night.

TV - "Jodi" trial - doing her personality traits - not good - bi-polar - out of - but not exactly. Afraid she's maybe getting the death penalty. Don't know now - but it was planned - were pretty sure of that.

Dinner lousy, Jim carved my tray again? A nice heavy cut gal (mike?) acts like we are best friends - not really sure who she is. Dry pork chops (no sauce) & dry rice - no gravy - good cookies - It's time for bed for me - 6 o'clock - end. a moo - all you can see is Hummingbird - Oh well - bed time -

Wed April 17 Up at 6:30 - tried coffee again. Lousy - 9 to 7:15 - guess I'll try breakfast. - It was OK - NO B.

As usual -

I woke up wondering where all`,"2013a_00008":`my little baby pics are? Especially the one of Deniz under a blanket & Shaloo, the one that won $500 for cutest baby!

Guess what? They had food downstairs & who walks in but Russell! I said "I heard you died" he said "I did" - But he's on 2nd floor - that's where the mentally disturbed go - what did he do? Anyway after I ate I just got up & walked out & here he came & said "were you on 4th floor?" he said NO - God ?? That's for mental problems or maybe breaking rules?

Also saw Jim but he was very distant & cold so OK!

It's 1:00 - they caught a bombing suspect. Good news soon!

April just called me! We had a nice chat & I told her to call me at eve. after 8 - I have a date that comes on, they caught the bomber - we hope.

Went down & got Candy`,"2013a_00010":`Thursday April 18

Up at 6:30 - another cruise ship engine caught on fire! You wouldn't get me near one - I'm still reeling from Russell being on 2nd.

Breakfast extra good - Regret 2 bacon - Had to struggle to get down milk open - Finally stabbed it with a fork - tomorrow I'll ask aide to open it. Jim left early - ate apple, don't care to L with Russ & Jim.

Big fertilizer dust in room.

It's 8:26 - Man! I can't find my stupid flashlight. I tied it to a cloth belt but it was gone! I'm sure it's under the bed -

So many bad things happening now!

I hope they catch the Boston Bomber!

Now - 4 cars just fell in a sink hole in Chicago.

Boy am I constipated! 2 times in bathroom! Not taking a leap though!

Need to tell R about Russell -`,"2013a_00012":`Wopped - its 10:15 - shoulder hurts -
pretty sure its shingles as it hurts just
like it did.

I'm scared to turn on TV news
or look outside now. My back
hurts enough to keep from worrying
about anything else.

I'm watching a cute fat bird trying
to hang on to a tree branch in the wind.
Oops - he's gone - I need to call R.

Lunch OK - beef gravy over mashed potatoes
& corn, peas (tough) yet didn't.
its now 2:35 - nice nap Jodi

trial on -

Supper OK - tomato soup + grilled
cheese sandwich watermelon for dessert. Sleepy
now.

For April 19 up at 6:30 - I am afraid
I might have diabetes! toilet 5 times +
really dry throat - I'll check with Sheila.

Good - Caught 2 "Boston Bombers"
one dead - one on the run. They are
brothers! But they killed one guard`,"2013a_00014":`this mom. They are from Russia!

OK - no B and she gave me scrambled eggs - but I got my hard boiled egg.

Police are looking for Bomber #2 - His Brother is dead & I hope he is soon.

They are still looking for him.

"Waterloo" is shut down in lock out "to catch No 2 Bomber"

11:00 - nice nap -

Shoulder hurts! - TV all about 2nd bomber! Such a "pretty" boy for a monster. Tried Pitta phone - too busy

Guess I'll go down & get Cheez-mix -

Did + Smuckers (which I ate)

News is still "survival" as they say.

+ no one who knew bomber ever thought it was them!

Jim Carroll's tray - I told him I liked his shirt but - he is odd - looks like

true + thrown his pelvis forward? what's that?

Almost 1:00 - time for a nap.

2:30 - nap OK but cold. TV on -

Did they kill that thief yet? Hope so`,"2013a_00016":`Also Jodi's trial - she in prison - now
Boston - like a ghost town
I wish my shoulder would get better - I'm
not going to sugar - I have the trip trial back
on.

My "helper" Sherry was here & we had a
good time & talk. She said "Let her know if I
want to go to the gym." Do I?

Sat April 20 Up at 6:30 - they caught
the 2nd bomber - hiding in a van! Ha
But good as usual no bacon - oh well -
"Mr X" pushed me around & took care of me
again ?? Yesode - its 10:30 - just
got up from a nap. Left Danny a message,
Can you get me some chili + mini candy
bars. I tried walking - it does too hard. Looks
like I'm stuck here.

Dinner here at 12:15 - chili - a ham
+ beer - also DVD + 3 movies -

Puck 2 - put in
silverware up`,"2013a_00018":`It's 2:45 - murder mystery on.
6:00 PM - Supper OK -
Sunday April 21 up at 6 - back to bed until 7:30 - Long line - Extra good except NO B__! She gave me 2 eggs! Please she finally decided I'm OK - Ha - No "boyfriend" + I need more coffee.

It's 2:30 PM - had a nap, chatted a bit, how early - murder story on - Rich guys after some girl, one shoots the other, burns his house. Takes 9 years to go to court. But finally they reach a not guilty - I'm going to supper - mostly to get out of here -

Supper good - chicken leg & rice - fruit & grape for dessert.

It's 5:30 - bed at 7 - I went down & got another snicker - BAD GIRL - HA
Monday April 22 Wow had a terrible dream last night with a lot of an aide.
She came in & turned the light lights on & asked me to turn them off over the bathroom etc. She showed her hand
NO - I said well - I won't take any pills`,"2013a_00020":`then "she just held them out so I took them BUT - when she left she turned on the lights of left & put on a shirt & went out & hallord "turn off my light" about 4 times finally I said "where's your boss? I'm going to get you fired." she clock her head like I don't care - so - I turned off my light & came back to bed. Now what? coffee - Ha - shit going to until 7:50 - this place sucks!

No bacon - Lots of sausage of course!
My eating partner had 4 of them & about 3 scrambled eggs.

No feedback from last site
YET - Ha -
I'll eat lunch in here - if my "helpers" let me -

They didn't - Jim took my tray. I said you a doll "I he grinned - there's pork & mac & cheese. Didn't eat it all, came back to + candy bar. Left map -

for the trial -
2:30 - nice nap - need a pain pill`,"2013a_00022":`Had one yest. at 2:38 - So - just got at
Good - new aide here - very nice maybe
we will like "Godzilla" place - Ha -
Nothing about last night funny -
my feet came - Having my last beer -
Jodi still on trial. Maybe get the
verdict today - Hope so. (Alchemy)
not 2 Mi - this typical stinks!
The April 23
Up at 7 - B. good as
usual - Its 8:00 - Still deals from
Boston bombers!
Just had a big contemplated BM
Uhr - Washed my (hair)? Shaped
12:45 - Lunch OK - 2 fried chick legs
mashed potato gravy, corn & cherry jello + pink
lemonade. But little Prof. (gally) talked &
talked (to no one) - drove me nuts - Also
Mr. Sunshine! - He's OK though. 1:45
Jodi trial? - My damn door was lost
when I tried to come in - door was
locked - Had tough time getting key to
work!
Its 1:10 - I got a pain pill at 2:30. Need it!
Got it early - Had candy bar - got
2 of them.`,"2013a_00024":`Guess I'll be going to bed about 5 - just had my pain pill - Please work! - Guess it is - it is 5:20 - Jodi trial almost over - Mom -
She scrubbed the floor & the smell
about makes me sick / Opened the door
to the bed -
Wed April 24 Up at 7 - Bock killing me.
Pills helped - good by as
usual - I wish my 33$ check
would get here so I can deposit it
in my little bank with Mary's TV
has that cute little penguin coming out
of the water.

11/0 - Cool in her - had hoped will go to church
Lunch good - Bar B Q chick (meaty)
cube potatoes grapes pink lemonade -
1:00 - went down to get clip to snicker -
Shock - up in elevator was Buck - my
ex guy - still don't know if he's coming - don't
think so - Candy so good -

Nurse gave me pain pill & asked if
I'd like a whirlpool - Said yes so at
2:00 -

I'm OUT of money in my bank!`,"2013a_00025":"I need your assistance for two weeks.","2013a_00026":`I'll get some from Lewis—

Just had a great whirlpool—
you sit in a chair & it flows into the tub. Black nurse did it, trying to
figure out if she is the one I had the fight
with. DON'T THINK so—she's too nice—
& scraped up $1.00 in change & got another Snicker!

5:30—Bed time

Thursday—April 24

Up at 6:30—I feel pretty good but need coffee—let it—good
tea as usual! I may not try to
make some good coffee—1 tsp of coffee
not 2 or 3—Still not good—I remembered
I had Honey Buns—thank goodness—I
was hungry—now—11:30—Lunch—
pork steak & a salad—juice—&
didn't like any—now back in room, 12
3:00—Had nice nap, now back to TV &
golf—

5:30—Supper good—fried chicken &
scalloped potatoes, ice cream bar for
dessert, 7:55—bed at 7—
Ruthie called me`,"2013a_00028":`On April 2

Up at 7 - again - got cards - same old (but good) breakfast. David is the name of "Sally." He won't shut up so can't understand him anyway. I am ad for Cinco De Mayo - 5th of May for Spanish people - Drs. are saying drugs are too expensive - mine was $22.00 - good thing I have Medicaid - Did Denis leave me 108. Hope so - no LEFT ME $20.00! When abroad - my #33 should be here - I'll just stick it in my "bank" here.

Went down & got 3 chex + 2 crackers - ate 10:30 -

In 10 to 1 - good nap.

5:30 - Good spaghetti meat sauce - Texas toast + white cake with choc. Frosting. I'm full - ate 6:45 - bed at 7

Flat April 26

Up at 3:30 - I feel OK - knaps woogie - eating a honey bun - Bacon !! - 2 nice pieces - she skipped my cream of wheat though, I got more coffee.

Hope Denis brings me Chili' -`,"2013a_00030":`from arlys today - so good!
9:45 - fixed my nails - going down to get food.
went down & got a Chex mix & snicker.
Spent 1 hr dividing good close at noon
out colos - ate my snickers,
11:30 Denis here soon - chili & beer I hope
Wed - Denis got here about 11:45 - time
beer - mini-curry bars - piece of Brian in
Antigua - we went out & I got a meat
cheese burger at arlys - no more chili are
they doing.
Talked to Sheila - won't be here
on 9th - that OK - will get Skype & talk -
Supper OK - goulash & zucchini
home & ice cream bar.
W had a loaded shark ha -
Sun. April 27 Tip at 6:45 -
its usual breakfast great! Brought
coffee back. My damn ck from Vickere
should be here soon if not today -
Lunch LOUS Vape Chicken vs
OK - then Cabbage & that's it`,"2013a_00032":`plaid I have an ice cream bar here—It's good—I asked for T.P. but didn't get it yet—

It's 2:30 nice day. Having a frozen beer—so good—

Now it's 3:00—my fisherman Jeremy woke with gruesome fish that crawled up a man penis & ate the inside—Eeek—

Now TV—gold diggers (guys) in Alaska

What a job! Almost supper—

It was O.K. rice with chick gravy over it. I got one big mushroom! Really good vanilla pudding—Back home "Ha, no more beer—she had 1½ now. Doing a little coloring.

Bed at 6:30—

"Jodi" on after 9—nite—I don't care—I know—no better death or life in jail not of her free life—

Mon. April 28 Up at 7:00—Good—cold in here & got heated. Cream but need a jacket. Got heat on—Boo good—NO B—Couldn't find both slippers. Scott found it stuck on my wheelchair—Ha.`,"2013a_00034":`Nice nap - now 1:45 Jodi is telling a bunch of lies about 2 non-existent people and women that killed Travis & hit her - Ye Gods - they don't even exist. But Travis is also a liar & a skunk. She gets Jodi for oral sex - my guys it isn't as much a sin as vaginal sex.

It's 3:45 - ads on TV

Now 4:05 - Bed at 6:30 - I've had 2 beers - too tame again - ha -

Hooray - check got here - will put it all in back downstairs.

Supper 5 SPARSE - 2 chicken sticks - no pots or veg - dessert apple sauce - 2005 y-

Guess I'll go to bed at 6:30 -

Tue April 29

2y at 7 - back

Punts - I really like those pics of Brian! He looks happy & healthy.

Good Br. but NO B - I check so I'll go down & depart it all.

I did "smack Br" not open yet.`,"2013a_00036":`Put my check in the bank—almost supper time.

It was good—roast lamb & cole slaw & apricots for dessert. Home & ate couple mini-bars & bed at 7:00.

Wed May 1st Not sure of date

Back in terrible—up at 6:30 again. Br. OK—little burnt but 2 sweet. Missed a banana—

Supper good—steak, green pepper & creamed cucumber—dessert little orange—my "buddy" carried my tray—I asked him to sit with me but he came over said some reason why he couldn't—I said "OK fine whatever"—He is a shy guy or something? Just suite of Godly trial—Good Juan Martinez is being a jerk! Accusing this poor new expert about a lot of crap—It's only 6:20—bed at 7—

He—poor Jim. He carried my tray—when he came out & said "you know if I was 40 years younger I'd give you a`,"2013a_00038":`Then May 2

We had snow last nite. I decided to always get a cup of coffee just in the refer. at nite. Just heat up in the coffee pot. Be a good deal - it's only 10 to 7. It snowed last nite - quite a bit of it.

Run for your money. We looked startled but happy about that - HA -

I remembered to get a cup of coffee to heat up in the AM.

10 to 10 -

It's 2:30 - had a nice nap from 1 to 2:30 - tonite bed at 8 -

trial still on - good - I like Jason a lot more - his fun really. I'm beginning to believe shell get the death sentence if he has his way.

Then May 3

Up at 7 - my coffee idea didn't work. I thought I could bring over coffee at nite & reheat in the AM - HA - look forever & didn't even get hot - Foey! Anyway be good -`,"2013a_00040":`brought back hot coffee

went down & got Alex mix - new girl chg. 60 - Shelly .50.

Jodi Case in closing stage & liked Juan yet - not before.

I finally made good coffee -
my shoulder is killing me.
Coffee is good because it's all clean.
But it didn't stay good - NUTS
nursie is finished & not too good,
he really tried for manslaughter. It's
14:20 - supper time - NUTS -

Supper Supper! Shrimp + zucchini
I was writing this + looked + jumped
Denis was there! He won't be here but he'll
come Sun - brought me beer though!
6 of them!

Trial is over - now the verdict
+ punishment.
Denis took my coffee just good -`,"2013a_00042":`I forget tomorrow is 4th of July - so no wonder Denia is going on a picnic - So glad -

Jury is giving a verdict, I hope before I go to bed -

Well, maybe

Sat 4 up at 5:30 - why? to vote the verdict - then fell out a Honey Bun -

NUTS - no verdict until Mon.

Good or, a great grape count -

I need hearing aid batteries !! None in here -

Call Denia about 10 tomorrow or around 9:30

Lunch - cheeseburger & cherry pie!
Brought it back to my room & got a beer.

2:30 - Had good nap - its 2:30 - a good TV show but I think I saw it already - Monk Whyte - The Librarian

My lunch didn't agree with me. Hamb. Had onion & garlic I guess -`,"2013a_00044":`Luckily I have time—
Watching and Librarian but bed at
6:00—its 5 now.

Sunday May 5
Cinco de Mayo
as the Spanish say it. Went
over + BEHOLD—Coffee at 7:00—no food
until 7:30—so I came back & got
a honey bun

11:00 AM Left Denny message—batteries
of coffee pot—just had mop up here

½ beer—

Tomorrow we hear the verdict on
Judi—If it isn't guilty of forced death
verdict we be surprised—

I'm trying to decide how to
give Denis weekend off—Since I'll call
when I know he's not there & leave a
list of what I need & he can just pick a
evening & bring it up—or leave it at the desk.
Maybe we could do it once a month &
play scrabble—

Am—2:40 & said he told me they'd
be here at 4—no way—oh well—`,"2013a_00046":`I think I made Denis happy with the no
Sat. & no food at all — two him & Dad
need money thought so & signed 2
Checks — & said 30* week — topic stiff

Mon May 6 Breakfast — BACON! Ha-
almost forgot to order it at nurse (aid) reminded
me — 8:45 back to bed —
9:45 — bed for an hour. Pants are so
tight legs were bad — I got lunch.
I had nice talk with R. — need to
call Shawn tonite.

Having dinner — Guy came in & gave
me a new light bulb. Good — it looked like
a baby — Ha—

It's 2:30 — no verdict yet — this I had
a nap 4 hours they have have deliberating!
Now she is at first denying any part of
his murder — LIAR — I'm good at it.

NUTS — Lite went out — all over
the body — no verdicts!

Lite till our only ones`,"2013a_00047":`typewriter mistakes on MUTE-TV

A man do - Amader
fail not - Pedro
new for knew
awardses
new instead of knew
Balf (back) - hang instead of hair
I'll instead of on
there - their
worst instead of worth
class - close
cryptized for criticized
Boyce for boys
new for knew
Jay O - for jodi
face instead of fate
treflt for treat
fine for find
sentence for sense
feel for few
screens for screws
freps instead of freps
ability for about`,"2013a_00048":`at all are on the TV towers—nothing here & NO ELEVATOR—just come on!
Hooray! Wonder what happened?
Now—new aide but is working good
Supper lovely—two sandwiches oranges for dessert.

May 7 (the) Up at 6:30—at first I thought
it said 2:30—trying to find out about
jodie—NO verdict yet!—the soda—
Just had a HUGE BM—so
constipated!

Lunch O.K.—meat loaf mashed potatoes
& gravy—really good Cherry cobbler &
a soft drink—My buddy carried my tray
again—The loud Communist clapped when I
came in. Later he said "Why don't you
like me?"—I said "Oh I do—I love you" —Ha—
2:30—nice nap—no verdict yet!

NUTS—
5:30 Still no verdict! What
year will we hear? Ha—`,"2013a_00050":`Wed May 8

Up at 6 - didn't rise at 6 - 1/2 hrs
Br. OK - another guy carried
my tray - "Boy friend" - I didn't even speak to
each other - good
It's 8:20 - need to call Denis but
will wait until 9 - waited until 9:40 but he
said can't today - help out tomorrow. Boy -
give him let off if he gets really smelly - he
will be O.K. - ok -
I wrote to Sheila & sent self addressed
envelopes asking her to send me 10¢ a week & put
in envelopes (addressed to me) so will see -
lunch very good - big piece of ham
& some sweet potatoes - also had strawberry
cake - & red drink.
Verdict! Finally - BUT - we won't
hear until 4:30 - that's 1½ hours -
just had my last choc, I'm not telling
Denis about asking her for 10¢ a week. Then
if he gives me some I'll be ahead of the game!
Verdict! - Guilty & premeditated! So
death sentence - But not for 8 years. I
won't see it or I'd be 98 - Ha - these`,"2013a_00052":`I'll go to supper—
Supper supper! & chick legs
little pot squash—& squash—dessert
really good brownies & chock & moist—
So guess Jodi changed her
time "no jury will convict me!" ////
said that before she confessed to it.
However it will be 8 or 12 years before
that happens—& still be in jail all that
time—so what a deal!
Their may D up at 6:30—Almost 7
now & I need coffee! I hope Denis
doesn't forget my coffee pot—that its filled—
Or some old but good—
Well—I'm pissed off at Denis no
money yet. I don't want to call him
so I won't—at least until 1:00 PM—
"Called & left a message—
D—how the money deal? I still need—
& desperately." I was common fed—`,"2013a_00054":`Lunch fair—mashed lentil gravy.

But my lunch mate (tall black guy) was sick—couldn't eat + was really sweating really bad. A nurse checked him over—I left & having sweet roll—then dessert was apricot again—pokey.

Called Denis home number—left message—said "what's going on Denis—where's some money? I'm getting upset"—He "Criminal minds" coming on—looks good—

Finally! Denis got me a $20.00

Paid my pool bill—got chips nuts + candy bar & have a bal. of $3.95—Ha—
ate the food—boy do I love those snickers!

I guess Jenny & I are at an impasse—well—I'm not calling him—
ate but it was LOUSY—tough pork chop + tough sliced apples!—Left early!

My Jeremy Wade is on—he's the fisherman. He's looking for a huge snake—La Cobra Grande—`,"2013a_00056":`Fri May 10 Good by, but she forgot my cream of wheat—Oh well—back in my room now! Had a huge B.M.T feel better—Jerk that had 2 girls capture also killed his wife—pushed her down stairs and she had a bad concussion. Later got a tumor. They better fry him!

Think I'll color—too—Colors all dried out.

Lunch OK—rice + chicken + breaded tomatoes, apple slices for dessert. I got a candy bar & chip mix—& had a cut of a 3.50 in book—the was $1.50—

Supper fair—chicken breast + good sweet pot. fries + lemon jello for dessert. Jodi is lying her ass off on the murder—2 non-existent people did it—a man + women—LIAR—make up a whole story—the "woman" had a knife—ha—she is the woman. What a NIT`,"2013a_00058":`Sat May 11

Up at 6:30 - got dressed - checked
to not watch so much TV - too many
disgusting people - doing horrible
things - well or good - another little guy
took my tray & Jim was waiting for
it - what's going on?

Up from nap at 9:30 - waiting for
Mother's Day cards or flowers or
money - I'm a Genius! Lost the
plastic tip of my hearing aid - remembered
it was in my jacket pocket with pack
of sugar & coffee cream - I had thrown
them away so - I looked in the
bath room waste basket & lo & behold
there it was - Hooray -

It's so odd - today (or now) I have
no money & just 1 honey bun but I
hope later I'll have flowers &
maybe candy & money - Ha -
Guess I'll eat lunch though`,"2013a_00060":`I only have enough money for a candy bar—
Oh well—

Big mystery. New girl at the desk said I had $3.30 in my coat.
So they must have not put it in last week—oh well—I got pop, cup & 2 smackers
or 3¢—so—I must have 30¢ in there.
Oh well—2:15—nice nap—ate 2
candy bar—Bad girl—

Now blow—the new girl at the desk
said I had $3.00 in there—HA—It was $3.30—
now that's gone—oh boy—so it's only
5:30—Bed at?—Having 3rd sucker—
BAD & FAT GIRL—HA—F

Sun May 12 Mothers Day—Up at
6:30—out of honey buns—what am I
going to do on my "dancing tray Career?"
2 guys & an aide went to early st. Finally
7:00—Book by (as usual) new guy
carried tray (no boyfriend) new guy—
Ken—Sheila just called—Happy
Mother's Day call—God—She sent`,"2013a_00062":`A present but to Denis's address - to keep her away.

A Great Mother's Day -

Mostly thanks to Denis - he gave me a 20¢ fete for 2 weeks - so he's going to give me 10¢ a week for his "free weekend" - good - So he gave me a pretty bouquet of white & pink daisies & pink carnations. Also from Sheila - darling ty teddy bear holding cute box of decorative cookie-bugs & etc. very good - I now have 4 bears (all sizes) going to use Missy Rabbit as a bank - also 6 beers & a globe from him. I've played a fun game of "Upward" & won and didn't want to - ha - Ha! at 7:00 - I went down to get cheap mix & I sneaked - felt sleepy supper. Need to call Shawn & make Sheila - Did -

Mon May 13

Good by, no bacon, there was water on the floor in bathroom. I threw down some old pants. Oh well - I finally got towels. Now - plenty of money.`,"2013a_00064":`nothing from mike yet - Hope it's more money - Ha - Scrooge

"Cute movie on with dog Marley" cute black guy Owen Wilson & Jennifer Aniston in it I think Marley dies - Sad!

10:00 & I'm eating a sandwich! BAD GIRL -

Cute but sad at the end. He gets put to sleep because he's so sick. Just remembered the main actor's name Owen Wilson - He's good -

2:00 - nice nap -

Now 4:15 - guess I will eat supper - had 2 sandwiches today (again) about 3.

Supper was chili - took it back & had beer & TV has block singer Nina Simone? Never heard of her nickname "left eye" Lopez - why? Shot in a car wreck?`,"2013a_00066":`Tue May 14

Up at 6:45 - Had to put in new battery, now it's working.

Really good for + BACON! - It's 10 to 8 - TV these guys are looking for "Dark Man" or the devil. One girl saw a red eye & screamed - Ha -

Took a nap - got up & thought it was 4:00 - Ha - 1:30 - TV trying for oil.

Got more Cheez & a Snickers -
TV good - flying saucers & "things" walking on TV -

Wed May 15

Breakfast OK - no bacon naturally. At first my hearing aid wouldn't work but when I got back I took a needle & cleaned it out (like dense does) & now it works! - Hooray!

Cooked late again - NUTS - But I got more coffee - TV on fish -
Well - ate a Cheez mix -
Just the squeeze - Ate a Snickers -
Jim a NUT 10:15 & eating candy`,"2013a_00068":`TV Sam & Dean show - good too -
Sort of dumb this one - with
manikins that kill + love -

Then 16th - called Mike - no
answer - maybe 11:00
1:00 - had nap - cute movie coming on
Povesh Hour 2 - I might have seen
it - cute though

Now - ghosts in the Deep Red
South - a cotton mill - little boy fell down
an elevator shaft and haunts the
place - "It make a 'lite' come on!
Now they are re-enacting the
Civil war - 3,000 men died! -

Supper good - pork chop & asparagus
also cherry strudel - little guy named
Ken - asked me which ear was bad! - Ha-ha
also carried my tray. Oh, it's a "Female Fatale" Ha -

TV still ghost hunting - jy builds a
coffin to take to cemetery - try to call
ghosts in - one lit up a 'lite' I guess
that would scare me`,"2013a_00070":`It's 6:30 - Still ghost hunting - Ha - bed at 7
I am sleepy now but I like this program
It's over (for me anyway) -

May 17

up at 6:30 - guess I'll put clothes out when I go out & have breakfast but very good - They had ham & cheese on bun - yum - I'm surprised
out for some reason. No help
with my tray I guess -
just saw last end of a
"Trojan" "best sitcom" ever - another
one on - will watch then go down & get
clothes every hour - Got them - its 9:30 AM
Put my dark glasses in my case
went out - windy & cool - came back & no
glasses so went back out I looked - NONE -
came up & there they were by the door -
Good - I don't feel good - too much
candy? -
The wind is coming up & it's
chilly -
Jodi trial in on penalty
phase -`,"2013a_00072":`Really sad—his brother & sister try to cope with it. He was a specially good guy, too good to die so soon. I think about all the wonderful people that have been killed—Shandri Melking—Kennedy & Lincoln and so many more. Jealousy & hate & money mostly.

Mary (dear gal) told me it was them NOT Tri-Travis sisters was a police officer!

2 tacos for supper—no dessert so I got another Snickers—type D, gets me some mini bars & I can save some money in my coffee pot.

Friday May 18 Finally really Friday—& thought God was like—But I'll put my laundry out—my mattress is killing me—so lumpy—trying to get my hearing aid to quiet keeping—good—it quiet.

Good by same old one but always good—"boyfriend" carried my tray & then pushed me back. Oh boy`,"2013a_00074":`guess I still have "it" - Ha-
"Frasier" is on for 3 shows!
So - just ended - guess I'll
stay down - It's 10:00
My "brothers" Jim & [illegible] are
on

Yikes - a guy with sharks teeth! -
and in this one every body has dark skin
twins - doesn't Sam & Dad - & there is
Cannibalism! Awesome this episode.

Chicken nuggets & chili soup &
a fruit - not bad but the poor crippled
guy that walked with a cane fell down
in the floor & they couldn't get him up -
"Shaky" wouldn't even try to help - just
my "buddy" tried & had them get a
nurse & I went to eat - Guess they
got him up.

went down & got a candy bar
Sat - May 19 - Horrible tornado in
Texas - Homes destroyed! Now Deb.
might get tornadoes - oh well - need coffee
Good by - MB`,"2013a_00076":`Mel,

We are supposed to get tomatoes today—Eek—

I've been trying to fight off depression—not too good at it—Only have $60 to my name. I should get a lottery ticket 600 million $—HA—your more apt to die from a tree story than win—Ha— I'm just waiting to see what Denis does today—

Young gal at desk in lobby said I had $126.00 in there—But? anyone got a chip of a snickers—Ha—

Watching good movie "streamline" about cute little animals that turn into monsters—Sta 12:15 now—

$220

$490

$600

$440

$7

$416

5:45 This is a scam—that young gal said I had $16.00 in there. But now—the older gal said it's $60! We had a laugh & I told her to just say my`,"2013a_00078":`Candy bar to anyone there - Ha! brought it up & I'm eating it! Denie where are you? & some money? This bar is sooo good - GIOPMY now - Monk just ended - I saw it but cute -

New "Monk" don't think I said it, now another one that I hadn't seen. Natalie gets to be the lottery "picker" - the other one got murdered.

Sunday May 28 Up at 7:20 - That's good - Good B - NO B - what's New? Ha Finally got pills - had another BM - nurse was a mess - I hope I got the right pills. I'd wait until 11 & call Denie - money - honey bun - cheese & crackers mini Candy bar -

Oje Stoke - what a dingy aide & had me freeze me in the whirlpool & let me in there while she "make my bed" - came back - bad news - no shifts - & I just got me out of here I'm cold - She finally did - I got out my mattress cover & put that on & have dreams.`,"2013a_00080":`She's terrible—then I'll call Kevin often to go to lunch. She's "goofy" today, then not "cute lady" with me—she's still wasting all the food—slimy (new gel) taken 3 red drinks! I don't get one—I stopped her in the hall, asked her to just take one so we could have one too. She—how well are—? called Denis & he's coming over with stuff.

We were here at 2:30—6 beers mini Candy bars—right 2 cheeses & a 5¢—then showed me DVD again—not sure I'll do it probably not! TV is "Pawn Shop"—I open bed at 7:00

(Mon May 21) Up at 6:30—oh dear—Good but late Br: M.B.

I said we should all go once at 8:00 AM—Nice black nurse made my bed really nice & found my flash light—so much better than other "stick" (in a dumb ass) I am having another beer even though I did potty 6 times last night—Ha still waiting for Jodi to talk—she is not going to today—June 27 go`,"2013a_00082":`back to bed - nuts -

2:30 - Nurse is now trying to get
out of the case - no way - say the judge.
I got a weird bill in the mail.
It says I owe $200 but if I pay $600 it will be
OK - I have NO IDEA what its for - Its for
medicine! / Tell them it's Denis

Tue May 22 This place is
nuts! - Bacon now but no eggs - Ha
My "honey" came over & said something to
me - Didn't hear it. Glad I went over late.
That tornado was horrible - 5 dead! 1200
Everything down - homes leveled - no water
etc etc.

3:20 - little nap - painful but not working
yet - Jodie female lawyer is asking for life
not death - It's anyone guess - I still
think it will be death.

Having my last hur & it's sooo
good - means 5 or 6 trips to bathroom - OK.
Well I tried using the walker but it hurt so
bad (Knees) & it is not navigatable -
So nuts - into the wheel chair again.
Don't care - next 3 or 4 years of it`,"2013a_00084":`so what, my kids will be shocked at it. Oh well— I tried— just too flighty hard.

Supper good— I fried chick. legs
rice (dry) & asparagus. pineapple for
dessert— ate some of it— ate in my
room to watch verdict— hope they get it
tonite.

Well May 23 over here at 7:25— good timing
I was seventh in line— N all about the
horrible tornado in okla.

They still haven't reached a verdict
on jodi—

My nurse is the dumb one— But
got my pills and a laxative—
heavy— what a crock!— if they have a "hung"
jury I'm not watching—
12:15— nice little nap. I'm waiting
for Sherrie (case worker) to make sense of
this bill—

ate 4 crackers— cheddar cheese— But
It's 3:40 & I will go to supper— where is
Sherrie?—

Supper good— noodles good corn pork
chop & pineapple & watermelon— that skinny`,"2013a_00086":`bitch got 3 red drinks after we ask her not to — so — told the cook I asked her to just take 2 — Ha! She put one back. Weighs about 8 pounds — I tell her "you aren't making any friends here"

(Thur May 27) Up at 6:30 — NEED to WALK — Breakfast super — we had BACON!

I have a Dr's appt. at 10:15 — guess I'll go in my wheel chair — down at 10 —

1:30 — Back from Dr. not too bad, Denis came down (I called him) to have to go back up before I got in. Had a cute young Dr. (Kyle) ask me questions & then Dr. Silberstein — Breathing good — she gained 4 pounds (151) told them about shoulder — no one even looked at it) but that's OK — Dinner got me — when I came back they fed me a good lunch — TV still no verdict on death or life — Nuts

I will take a nap at 2 — no`,"2013a_00088":`Matter what -

3:15 - had a "quick nap" still no decision on life or death - by God!

I went down & left magazines & saw the birds - the little ones are so cute.

Supper - fair - noodles & one big meatball & good pie. Cake - still no life or death!

The gal we banked out for taking 3 glasses & has diabetes I'm sure - she drank 4 glasses of water - well why didn't she tell us?

Fri May 27 Up at 6:00 - so stiff & hurting all over - Had good BM - just now 7 - I'll go over at 7:15

Cook only gave me one egg & a sausage - And don't be a post nurse hasn't given me my pills yet. Finally did.

10:00 AM No Chex mix - so I got popcorn.`,"2013a_00090":`1:45 aft - small nap, watching a silly movie - huge alligators & pythons been fed hormones that make you grow & not stop.

Good guy is blowing up eggs - either snake or alligator - there is one rotten bloody bitch (Oh) that I hope gets hit - Ha -

Supper really super! shrimp in rice & squash! & good!

Sat May 25 6:30 up - going to be raining here hasn't it? - she'll eat a honey bun?

Breakfast OK - at least got 2 eggs also really big B.M. Wearing my new turtle neck white floral & gold nugget necklace Del long, laid down for a little while - 12:45 now - a Jessica Fletcher on. Cute - Denia will be here - with food & dope - the cablet not coming & guess -

But Mike & Mary sent the most gorgeous bouquet of flowers - 12½ RED roses & little tiny white flowers in a`,"2013a_00092":`beautiful red vase & a super box of choc, truffle candies - Both wonderful -
I called Mike & thanked them - couldn't
hear good again Damn it! -

Wow! What a Surprise!

I was in dining room & someone took my
wheelchair - It was Denis - but the
surprise was back in my room - Shawn
Collin, Connor, & Michelle - also April -
Denis brought me burnt papers
(gossip) We went down & Collin played piano
(not too well) then back up to here - I had
them sing "Happy B" to me - got a
little - kind them all & they left but are
staying at Denis' (Voye) & a motel - Michelle &
Shawn, April going home

Sunday May 26 I am so

MAD! - nuts Cooks were late
late at 8:00 - I told them they
weren't funny & hurry up! - But
we did have good BACON!`,"2013a_00094":`They just measured a super-cow—29.05 feet—Wow!

Lunch late—12:20—Ham roast, potatoes & peas + good apple pie—Back in room 12:25—ate last 2 choc from Mike. I am full!—Watching a show about giant squid (or something)

2:30—Nap—Where is everyone?

Fishing still on with J. Wilde—Having a Tema—Too many chocolate—Ha—

Where are my kids? 3:10

Finally got here—With shrimp & great big cookie + new sheets! And April got me a cross with scripture on it!—So—I tell Michelle there might be something to it—not sure about putting it up.

Kids are picking me up at 9 A.M.—I'll wear my dress outfit—Washing clothes—Black slacks—Still watching J. Wilde—`,"2013a_00096":`Birthday! No 90

Wow - seems impossible. Kelce are taking me somewhere

To a surprise house in the Country that Sheila rented & here's who was there!

Brian
Dana
Maria
Ryan
Leann
Wyatt
Rylin Rylin
Molly
Matt
Mike L.
Sheila
Denis
Coffin
Connor

Best birthday ever! We had ham & beans & pot salad - cheese & crockpot chips. It was way out in the`,"2013a_00098":`Country, but Denis never has any trouble driving anywhere. I started to lay down there but knew Olive would want to get back so we came home. I napped.

Got a nice cake from here - lots of cards.

Gifted a darling T-shirt from Guatemala!

With airport & mynah bird on front. I let Sheila bought it. She did!

50¢ bill from Shawn

Pic of Ryan's kids - Ryan

Heart necklace - April

Cards - flowers & candy. Mike

I'll get the cake & share it.

Embroidery kit from Sheila

Sheila doesn't know what a mess the cake was - to get to people - No got behind the desk - needed plates & forks - even went up to it - when I came back my favorite corner top was putting pieces in bowls!`,"2013a_00100":`Scary movie on - Coral shark & octopus or "Killing" machine - made by a witty scientist.

Tue May 28
8 pm at 7:20 - Good -
Half hr. show 8:15

My "Brothers" show in on Clan
& Clan -

I have $70 in my purse + $30 in the bank. Ask Denis to take me to Walmart first or last.

Well - It's 2:45 - where are my kids. Just called Denis he turns they took more time at the store. I hate it when I don't know where they are.

Wed May 29
8 pm - Real good br.
except cook only gave me one egg. Don't think she likes me - Ha - But now she acts awful - Don't care -

Just had a nice quick shower - feels great - TV had boy killed by a shark - I hate them & snakes - having a roll -
TV now about piranha - pirates`,"2013a_00101":`Birthday

Brian July July 20
Mike Aug 30
Sheila Jan 1
Denis March 22
Shawn Jan 19

[Handwritten text not legible]`,"2013a_00102":`It's 2:45 - had a nap & called Chris - he said Brian & I were on the way up.

Brian came up and we had a super time talking & laughing. He's a doll. He liked that little woven basket; the earrings so I gave them to him.

Thursday May 30

Real good dinner even bacon! Need y pills

Got them.

Lunch extra good - 2 chick legs & baked potato & peas - "home" & candy bar.

Watching C&I - look I thought it was Tro & Tro Thursday!

Friday May 31

Br. honey - no hard boiled eggs! - Today - Yr Goods - had to empty ice tray & water tray & water spilled everywhere. Finally emptied it in bathroom.

12:30 - Need chex - had a beer

1:30 - up from nap - so bored.

Self watch TV - Good show "The..."`,"2013a_00104":`mentalist - real handsome actor -
I hope I'm not getting urinary
problems again - I went to toilet 5 times
last night & had no beer

Denis just called - damn - I had a
hunch he wouldn't be here today. Tomorrow
at 10 - FOOEY - Oh well
2:30 - had nap - TV on Nazi war -
& their filming of "Tidbits" - but
they change history & truth for Nazi
prop & it doesn't work! They get in
trouble + prison - good -
This new show is how we got
startit 5 billion years ago from the "Big Bang"
So interesting!

Sunday
Early June 4th Wal Mart today. I didn't
wake up until 8:30! Little cool was nice
enough to send up breakfast!
Well - it's 6:35 by my new
watch - I got at Wal Mart. Denis got
there at 10 - I got this new watch (only
$14) coloring book, stamps & hot dints. Birds
& pie to color - also big needle eyed`,"2013a_00106":`Mon June 3rd I looked up

Connors book & will ask Anna to send. Well—they sent it from down stairs—good—

TV has snakes in Miami—python! Burmese—blood snake—Eel—Hope none of them get to Sheila.

2:20 nice nap—will emb.
5:20—Supper OK—chicken in a crust with cheese—icky veggie—no dessert—so I had 2 of my choc ice cream cups!

NCIS is on—always good! Hope it's off in 10 min—7:00 bed time.

Tue June 4th Did bed at 7—had dia. this morn—NUTS! got an emotion—Break—super—2 bacon no ham?
Slept most of the aft`,"2013a_00108":`Did more emb. & coloring. Supper OK—corn & beef rice—I saw Bernie share a pizza with Scott. She has been mostly lately anyway—OK kid—that's it.

(Wed June 5) Up at 7:10—Put on my slacks, shirt. Smiled Bernie—did say Hi—she had another new shirt—no comment—Ha—

Guess I'll embroidery!

Lunch OK—meat, beans, fruit—cookies & ice cream here. Another murder case on TV—cops wife shot—suicide or murder?

(Thu June 6) No bacon—OK break otherwise—

Nap—its 3:00—gonna eat some Cheer—& a honey bun—

Sta 4:10

Now 5:10—Supper OK—Rent & Free—joint baked apples—"Pawn Stars" still on

(Fri June 7) Up at 6:45—Break—extra good—BACON! I will emb. today—

TV has my Sand Clan on—This mom, Scott said "you look`,"2013a_00110":`nice." I said "short from downstairs" - he said "how much?" 27 - big laugh & I said "thats my thrift shop" - ha -
"Brothers" show is good - ugly spooky monster on it
11:20 - bring to bed - sleepy
1:30 - hour nap - sickish - so took things
Sam & Dean are still on - like 3 hrs. so far. Now a "cannibal" story
Sat June 8 & thought I was late to be. Ha! They weren't even there yet at 7:50! Worse every day!
TV good story on with Noah Wylie on it. Never can think of his name - "alt.?" I'm leaning toward "Anthony"? Noah Wylie
Denia was here - took my list of things I need.
"Fish" guys are on - stupid elevator was not opening the door! They need new ones!`,"2013a_00112":`Supper OK - polish sauce, corn - baby
oranges. Now - where is Denis?
Again - where is he?
TV has cute baby puppy dogs on it.

NWTS - phone rang - I answered
but couldn't understand a thing! My phone
is awful - going to have it clocked.
June 9 - no bacon or hard
boiled eggs. Extra late elevators
didn't work. This place SUCKS!
Let's show on!
Where's Denis? + my stuff?

"Patriotism is a Virtue" Oh
yeah? I don't have any!
Just called O. cell - he said he
was OK but hadn't counted on bringing
my stuff. ?? What with him? Guess we go
get chips + candy bar IF the elev.
are tight.

One worked - the right one.
Got chips + smokes - ate them.
TV has "Pawn Stars" finally`,"2013a_00114":`2:45 - had a nice nap. Still wondering about Denis - if he hasn't come today or tomorrow I'll call. Mostly - well - I was here at least two - guess I'll have one. Don't know where the rest is? Cheese & Crackers over here so I'm eating. Called D. & left a message.

(From June 10) 6:30 - desk is incredibly messy - okay.

Break, really good - eggs & bacon TV awful - old movies with Hardy & a dr. - no sign of his partner Laurel.

6:30 - watching Black Channel - pretty lame - minute ago I smelled burning - went out in the hall & asked ok said "popcorn" - I said "really?" Yes - so that's good.

Good Girl - I called Ruthie. I had nice talk - also washed my hair!`,"2013a_00116":`June 11

I almost killed myself trying to do a BM-50 huge so much blood Br. no bacon but at least hard boiled eggs.

10:00 - wanted to walk but no go. I haven't been downstairs for 2 days - Elevators - not sure if they are OK or not - well no, OK - got my Chez & bar, "Scare Tactics" is on. Get people on the show I have spooky stuff set up.

4/15 - had a nap again - felt funny - but "Scare Tactics" still on - some good some - lousy - I know they are all actors & know its all staged! I like "Total in the Dark" better.

Wed - June 12

Good Br. no t. ad usual - "Sam" (boyfriend) had on bright shorts & a red shirt. Looked cute but no serious - thought I'd lost a telejeep but again caught on my wheelchair - Scott dug it out for me.`,"2013a_00118":`2h 3 hours

TV - couple choosing new house or re-do theirs.

1:00 - just got up from nap.

TV - apt. rentals + makeovers.

Most of it $500 a mo but super nice.

I asked for a laxative (pill) so I get one. I'll go to supper joints - not sure.

Had my dope - liquid -

Now turkmen on off - caught some nutria - now we hear jeremy was in India.

Jer. has wild idea after him's a tiger - YH Hols

Chew June 13

Up at 6:45 - again

Crazy Dreams - Nuts - now it's 7:00

Coffee yet? I put on my sweat shirt so cute. That (so-called) laxative hasn't worked yet.

Diet for Bacon & Alice gave me here too! - 10 after 8 -

Had a tough BM - still constipated -

Up from nap at 11:30 - shall I eat?

Lunch good - baked sour cream meat loaf, koolaid & choc filled pie - So full

now I'm miserable.`,"2013a_00120":`"Pawn Shop" is on, 3:00 PM still on still fun. That meat loaf is "surprising" me—icky.

Friday June 14

Br. good—no bacon—I had to ask for second egg—the got it though. Feel lousy—Didn't see "water" lady—maybe they kicked her out—Ha—no? Sam either.

TV about "gangs" in stupid L.A. Clothes guy said he doesn't remember a white blouse! He better find it, & bought that next black "he's a rockstar" for $100!

Really windy out!

TV all about stupid gangs in L.A. I mean, stupid guys trying to be "big shots"—HA—

Lunch—foolish sauce & sour trout—yuck (which I forgot to get)

Now—let show—a report that also murders people—`,"2013a_00122":`Sat June 15

Breakfast same as except 1 egg + m&b. Tomorrow I'll ask for 2 eggs.

TV was cold burning down house in the fire. Poor people! Will I see Denis today?

Story news White House - good called Denis - he's bringing wine & food - good. TV good - etc.

Story man - worst biggest & hardest shit I've ever done or had - got on top anyway from dummy alike - came one other left me in the Coed whirlpool.

Good movie "Along Came a Spider" guess I didn't say that? Cinco amigos! The movie is taking all kinds of turns - the girl we thought was nice, god was a B - and almost murdered the little girl. Just black guy saying one - don't remember his name - Morgan Freeman.

Deni got here - great meal of shrimp and 6 wines - "Mags"`,"2013a_00124":`Sunday June 17 - went over to lunch room at 7:15 - I don't think that coffee works - but I need coffee so I'll go over.

Read my mag.
Dumbass as a good knot nurse tried to take my BP - had to re-do at 3 times! & said "you haven't been a nurse very long have you?" Ha

Have wine - crackers & jam buttered
2 baby bars -

Had a shower with "nutso"
Again she kept leaving & coming back
Cute movie on Tom Cruise &
Cameron Diaz - "First Day"

Mon June 17
Good breakfast including bacon. My "boyfriend" is moody. Wouldn't look at me or carry my toys. Bipolar? I hate the way he bends his knees & sticks his pelvis out. So I didn't wave goodbye -
Ha - James - TV has Tom Hanks
Movie on - religion - created quite a stir when it came out. Can't remember the name.`,"2013a_00126":`"Da Vince Code" - I thought of it. But it's nutty - says Christ had living descendents -
HA? Who knows? More is good but puzzling.

Went to go down & get big amber stone necklace - wasn't there dawn - also a red stone one earring - & she was in there with jewelry - I said "are you following me?" laughed - no answer? What is her story?

I can't believe I got the wine open real easily! just worked on the cap & then unseamed it!

Going to bed 12:00

3:00 Watched Gary Grant Irene Dunne movie. He 33 & somehow been 15

Good old show on about serial killer - I've seen it before -

This show is "Crimson Days"

Good actors`,"2013a_00128":`Tue June 18 Up at 7:00 Br & K - same old but good - no bacon
Ha - I feel faintly - 9:50 - feel better BUT can't find my hearing aid!
Denis will help me - Ha - He's around here somewhere

I like N - people a lot worse off than I am - Ha! Mother
problems - no housing - no job etc. I'm happy at 2:00

Wed June 19 Br, good as usual
Sheila sent me 20 of the most amazing photos (taken on
plain paper!) "ghost" show about vampires
and their howling
Some guys looking for a little
little 3 foot "monster" from the past
Now guys in Thailand - looking for a
30 ft tall "phant" or ghost -
Stupid "news" scared me & announced "Lunch" no
thanks! Rest. Truth - Josh got slid
down a hill - Had a nice`,"2013a_00130":`nap - this show is still on
Vietnam "Big Foot"
Cute new show "Epic" - asks
questions - winners get $10,000 -
Thurs June 20 5 to 7 -

7:30 - good Grimoire, my
"boyfriend's" name is John - I
asked Scott - got more coffee - I
asked nurse about my hand -
she said she'd look it tell others. Good -
"Drover" is on always cute -
I asked Scott (said this) guys
name - it's John.

Lunch today - "chicken pot pie" in a
bowl no crust. Also skinny gal that is
always bumping me started to go ahead in my
place, bumped me - I said "will you get away from
me? you bump me every chance you get" She gave
a stupid grimace but got away. TV has new
Murder trials - poor young blacked shot to
death by a white guy - I think he is a
jerk.`,"2013a_00132":`June 21

Br. good as usual—"John" carried my today—? why?—It's Scott I like—he has such a wonderful sense of humor—laughs at everything! Also of course gray haired lady that jittered feet all the time or rubs her fingers together, next to her is "Fatso" very real fatty—hand shakes all the time—feel sorry for him but he drives me nuts—they all do.

11:40—mopped—feel "sickish"—guess I'll not lunch—pizza

Had a scare—lost my coin purse with a $20 in it. It was on the floor of lunchroom by crisp guy feet—now—Kreepy movie on TV—thin pizza & cherry pie—movie has zombies & "zota" of each other called Walkers—no—they are cannibals & zombies—this is the plot of the "Z" war—`,"2013a_00134":`Sat June 22

Up at 7:00

Bacon—yeah!—and "professor" brought over straw jam for me & my toast. Also Scott got me a cup for my coffee. He is a doll!

TV about Los Angeles—hotel named

About time for D. to call me—

Ha—no & yet it's 10 after 4

What's with him?

Movie over—"Indiana Jones"

Best one—

Just called Denis—he said he'd been trying to call me all night? I wonder if he had it on the dinner phone.

Sun. June 23

Up at 7:30!—Cooked food not there until 8—Ha—my day started longer. I dropped my top teeth behind it but never moved but got that

quickbite! Good—Br. OK—She was in a good mood today—yest. Longer`,"2013a_00136":`Well 11:00 AM - going to get dressed if anyone is working - need to make it by 3:00 - spend all my time in bed - NOTS -
TV - movie comedy -
5:00 PM - kind of lean supper - ham,
with gravy & dish of peas -

Mon June 24th What a nightmare!
I dreamed my top teeth dropped on
the floor - worried about how to get them
I even looked with my flashlight! AND
then mom they were both in the toy
where I keep them. Hooray! Decided it
was a dream! Good for but only
eggs + no bacon!

8:00 Tried to try but no go!
Nuts -
Sci fi movie on with Danny
Reyes - very good -
Lunch - meatball + noodles + good
jello.

Popped it now its 2:10 - got chip of
and a new TV - Steve Segall -`,"2013a_00138":`Criminal Minds

Now 3:10 - Last folder coming on -
I like them & ended good -
Another one - A he abducts 2
little kids boy & girl - he rapes the
boy - good they got his pal.

Tue June 25 Up at 7:30 - Long
breakfast - no eggs or bacon - John
carried my tray again - gave him a
sign when I left. I asked
nurse for a nightgown -
TV had ghost stories - turned it
off - 9:00 AM -

Wed 1:30 - Had a nap
in Criminal Minds -
really most fun "cos
worked out here - She's a doll - we
laughed the whole time. - I showed
her my new pier -

Wed June 26 Up at 7:10 - Good
for a bit not bacon - at least 2
eggs - John carried my Tray again?`,"2013a_00140":`Hope Dems had luck in getting me more pics to color - As of now have to embroidery - & TV - got

The Chester & Tucker - Sand Deer are one - how the Demons are doing if I was wondering how old Mike was so when she ask my pain number I said "Oh a good 70" - No shower usually is good 7 -

Well - I just got told I have to quit using my wheelchair and someone will help me do it otherwise 2nd floor roommate? - Yikes! - I'm not sure if I'll have to move my room. If I did it would be a roommate deal - Nuts -

Supper OK - tacos & salad & peach cobbler.

I'd have to give up my room too as that settles that.

Then June 27 up at 7:00 - need a naptime - got one

Found out who my best friend is in this deal - Mary from the dark! She's doing all she can to keep me here! - And`,"2013a_00142":`I always thought she hated me," I said. "I don't want to lose this," I said. We don't want to lose you either." Wow! I'll wait until God tells me.

Supper: pork, I'd love it & cheese & good cake - CSI on still. I feel great about being able to stay here & use my wheelchair. They need to get another one from Medicaid; this one belongs to Luther.

Fri June 28 Up at 6:30 - Br. of two good - with bacon! & no shaky foot - she loves me with John so sweet - carried my tray & had to go back for my silverware - I am inclined to think he's gay and I'm his cover up. He always wears gay shorts & "throw" shoes - Oh well.

TV article on Cleo & Caesar. She was ugly according to them.

2:30 - Up & TV - History of Egypt & Wars $1457 - Guess I'll eat supper here.

Bed at 8 - 15 All the Egyptians`,"2013a_00144":`did was wage war and worship
"Gods"—Brian was there and inside a
pyramid!—
Sat June 29
Up at 6:45—
Need my coffee.

Super Brooke Bacon even! Among
"nurse" just asked if I wanted a shower & I
said "no— I had one yet!" ? did I?

New hearing aid

Good colors—now I hope Denis brings
me 11
0 & drinks—

So hot in Vegas—117!
Just started to pen—sit me some piece
to color—tired him & like beer or wine & he said
Ruth tried to call me—so—& even her`,"2013a_00146":`Sun June 30

Check here - I'll cash if
Bank open. Horrible BM
I need aspirin that works. 10 after?
good for but N.B.

Cute movie - tough Marine
signs on to baby sit kids

Mon July 1st - Up at 6:45 -
Having a honey bun - tiger pie come
The are gorgeous! The bread is so
BACON - Sci-fi TV with monsters etc.
Mopped TV has fine print. Had all my
wine - coloring bird parrot. Toucan
next.

Letter saying I have to change
address for Dec.

Supper - noodles (lots of them) Bar B Q
pork & choc cake. On my way out Scott
handed me a pea - ha - I hit his arm
laughed - Rock now + Am. Pickers still on
so interesting though.
Coloring a parrot and toucan now,
May go to bed at 6:30am.`,"2013a_00148":`June 2
Good by, NO Bacon—a new gal I thought was a teen age—shorts—T-shirt hair in a pony tail—then saw her face—at least 60—Oh well—dress like you want to.

One of my favorite movies on—"Romancing the Stone"—so cute. It's 9148—ate a honey bun & wrote to Scott' 312 S.B.

2:30—nice nap TV has volcanoes & tsunamis on—Sydney so powerful

July 3
Good by—wrote Scott a nice letter but won't send—Young Chinese kid comedy—but mostly about sex—ug—

Well—"Cook Out" was OK & had Polish goulash & watermelon & then there came Russell! He's on second—Oh Oh—what'd you do? He looks good though & shook his head & said my kids were all at my birthday (not true—no Mike)`,"2013a_00150":`"Baby Story" on TV -

(July 4) Then I don't think there will be any fireworks.

Supper at 7 o'clock!

Lunch OK - 2 chicken legs pott
gravy - choc pudding (forgot a drink)
forgot cherry drink - TV had snow
slider - 200 m.p.h. - Eek! - one loses his
leg.

Now another Cage movie on
Treasure. I ate 4 corn crackers + 2 ice
cream cups - 10:45 - Bed early -
(July 5) Didn't hear one boom
upset - Who cares?

I ate some chex + smacker.

Horfy movie starting: About a
baby ghost & couple adopt - got that
spooked - also deaf - found out she had a
disorder that made her look like a little
kid - 9 or so - actress really in her 30's +
a murderer! She kills a people + almost
the father - but they get her at the
end & she drowns - Good show -`,"2013a_00152":`I was really hungry & missed supper - at 7:30 everything was closed but I found out there was coffee in the living room - & then at 8:00 someone came by & gave me some crackers & cookies - so I got to take 5 of them & saved my life - but my phone doesn't work.

July 6

BT OK - BUT got back & damn door was locked! "Came Lady" unlocked it for me! - Guess about 10 till call Denise (in hall) since my stupid phone doesn't work.

Sun July 7

Extra good breakfast with 2 bacon & a banana - Then lunch - ham & fruit juice & apple pie - also wine - then a nap - now I feel sick at my stomach, I had tums & nurse gave me one - alien "bug" movie on. Good movie - they blew up their mother ship -`,"2013a_00154":`medium brush curlers

avoid
buy small candy bars
beer or wine
chex mix

Mon July 8 Br. OK - hot fields
& have cris apt. 10:30
downtown - "Dean" & "Sam" show on
on - Dean is so good looking!
I had an eye exam & then took my
horse pic up to the 2nd floor more Sam & Dean
in so M&D - they said he could
stains at 10:30 - script so I did it
was cancelled! But back to the 30th -
NUTS -

supper got baked chicken
best was zucchini squash & jello

Tue July 9 Up at 7:15 Break. OK
but I feel lousy - got a lap!
10:20 - went down - got chip of bar -
ate two chex packages & some crackers.`,"2013a_00156":`Wed July 9

Up at 7 - had to go get 4 tickets - Nuts

1-727-939-0165

Sheila cell - 727-410-1323

I had a good whirlpool. Fell better. Sam & I came back on.

I got coffee & chips.

Wanted to leave at 12:30.

"Nutty & Bunch" tried me back over all.

Gone - so I ask Mary if she had Jimmy.

Povesh - maybe he can if you don't need to order yet - they did - tom.

Songt - I think Bernie is jealous of me - ? Bernie is having an audition & get - So

Feel me cool toward "her"

Thu July 9

Br. Egg

But 2 bacon! John calling my story again!

I will call Ruth at 9:00 - get ordained

Address?

8:15 "Dear & Dear" or so.`,"2013a_00158":`4/5 - nice nap, cute movie - trying to remember last movie name.

July 10

by at 6:30 - decided to just go on. It's ugly and too much work. I hope we go to Wal-Mart today. It's only Friday. Pokey - I thought it was Sat., when we go to Wal-Mart. I'm getting a toy gun - to shoot Scott with - Ha!

"giants alligator mile"

OK, then

low in the gun (finger) out

Ha -

and a good nap after break, but felt really late headed.

I'm waiting to hear verdict in this murder case - hope it's guilty +`,"2013a_00160":`Lots of jail years, I guess they don't give "death" anymore - haven't heard one from "jail" on.

Good Denis is coming over in about an hour. I'd like to eat lunch in a restaurant have a glass of wine! Of all people - Mr. Shaky from our art was in there with his wife & guess what, I was disappointed though because we didn't get any "nobby" - we went to Walgreens & not Walmart - poey - but I got pretty pink nail polish, 12 good curlers, grey scarf, heavy white cap, nice honey, 6 white wine. For lunch we went to a place & had a beef taco & beer - Denis is a cheesy + margarita - now 3:20 trial still on - it must be a not guilty or? guilty?

Sun July 14 Br. good, no B, next day paper TV said Zimmerman will be hiding out for awhile - don't hurt it - a lot of black guys would like to kill him!`,"2013a_00162":`The young black kid shouldn't have used so much violence! I dreamed about a cute white cat all night.

I drew a "bulls-eye" card for Scott tomorrow—Ha—

Lunch fair—beef marbled patty & gravy & good chocolate pie—
In my room now watching TV—

Cute TV show about giant lizard attacking New York. Saw it before but it's cute! And wine—OK!
Can't think of actor's name.

4:40—Sick as a dog! Up from nap—taking time.

Monday July 15 No bacon but otherwise good. Have to come back for B Mt to get rid of HOT jacket. My new cap is too heavy.
I put that bulls-eye sign up but Scott said it was his favorite bulls-eye—Ha—He's a DOLL`,"2013a_00164":`Sun & Wed 36

all I have to do is watch her & put up so guess I will.

The 11:20 - had a banana & 2 candy "bits" - no glass of wine. Then fell sick next day.

I am so sick! To those awful honey buns at 3:00 so I'm up and trying to turn again.

Feel OK. Went down & got the latest stuffed shaggy in a swim suit & water skis for Wright & a earling glass flat mouse holding bouquet for Rylin. $5 each! & 2 chix necks.

The 7:00 - bed time - third wine.

The "Castle" is a cute show - actor good & cute.

The July 16th up at 7: BACON but she didn't give me toast - oh well - no big deal. I am clean & am on.`,"2013a_00166":`Found the kids toys. In the package I thought was story book—there's glue—put some packaging around it. I will mail soon.

My new favorite show is on "Castle" (Wed July 17) Up at 6:30—will go over at 6:45

I know why my physical therapy disappeared—I guess I reached my limits on Medicaid ended—$12,600 for that much!

OK—I had to come back to go to the beach—East coast is HOT—Sam I am on a shower of them & cute

Just had a shower from "dummy" wasn't too bad (or too good) cold

Eating lunch in my room—& it wasn't too bad. Can watch TV—Lunch was shell mac & cheese & watermelon`,"2013a_00168":`Supernatural

Don't know
a gruesome show on "Bones"
took a nap-up just in time to
see a new "Castle" - good - I really
like it -

5/18 - Still on

Wed July 18
Up at 7, going for
Coffee - Good old same br. no bacon
John -
how Deans & Sam.
Had a nap - now "police story" on
my other couple shot in Coral Castle.
The "NCO" was here - a pretty
young gal & nice will give me pills this
week for my "shingle" hangover & might work for
Arthritis.

Wopped up at 4 & "Castle" - on
my new favorite show - she is so
cute & so is the pilot.

Fri July 19
Coffee Coke for break-
John carried my Troy -
feel fairly & Back in Room "Dean & Sam"
are on. Awesome today - wiping
green mop etc.`,"2013a_00170":`call Denis tome - Craft store

The food at the "Beach" was good:
- Polish eggs
- Baked beans
- Hot chips & cute marshmallows
- Cookie fish
- Crackers

Hopped - "C"
2 show on.

Good - I got a
Tomorrow (I hope)
I NEED A HOUSE!

Jan 6:00 -

Called Denis - he's taking me
to a craft store at 11:00 Good!

The show "Castles" are over - cute - Bed time
7:00 Bed

Sat July 30
Denis Day! taking me to
Crafts

By OK - no bacon! John
Carried my tray
Got sleep - Almost time for D.`,"2013a_00172":`had a great time with the
lot of diff' crafts at a store—
then ate super cheap & a
salad at Bread nuts then to get
me out my I am home
having time of renting my

Dad (t) bought a box
of junk at the Craft store—mostly
colored pencils & markers =
also
silver blue glitter
It will be good for Xmas cards
later on—

A funny thing on—

HA!—I put the tiger pic
Scott. It 11:20 & Shaky & skinny,
are already in the cupboard! BUTS—
145—talked to R. poor kid has
that horrible mouth pain & is going to have
an opar soon.

"Maty" more we had to do B/P
147—pretty high—`,"2013a_00174":`Supper OK - Italian & grapes & wine.
Now "TV o Lebanon" - I liked it, main
guy & etc.

Mon.

Mon. July 22

Pri Supper - 2 pieces:
I need my clothes basket.
Ask guys about it and he said he'll
bring it back! "Soda" Dean &
Sam are on.
I'm going to get new cards.
Downstairs & practice sparkles on
them. Charge to my account -
I did - got 3 Valentine
card - long way off!
Put silver on the red
Val. cards -
"Castle" is on it it's 3:10
I'm eating p.b. on a spoon.

Hot supper - good eats.
In rice & a chicken "Cute"
also watermelon & cherry
& me, watching "Castle" and`,"2013a_00176":`9:00 AM here in Florida

Having a candy bar. Haha!

My best nurse said NO MORE eating in my room - I was a baby! But she said "I still love you" - 

Show almost over, then bed at 7.

Tue July 23 Didn't wake up until 7:30 - that was good - walked right in & got coffee & food & waiting - 

Blech, can't stand any - 

I hate vampire movies - this one is?

Nuts - went down - shook door closed until 9 - came back up - it's after 9 now - I'm watching Sandman -

Well - I called th... & thought was Sheila's

"Here is no..." - 

So I said "I have the wrong number sorry - Nurse a wonder! What I want down & asked if someone`,"2013a_00178":`could make my bed. It was when I got back.

ate chips except one candy.

Had a long nap—missed lunch at 2:00 in the aft—missed lunch—OK—will go to supper—in the meantime put butter & candy.

A good "Castle" is on—had

Supper was lousy! Rice & tomato sauce called Mexican dish. But I had nuts!

It's a pretty good cole slaw—see little cookie.

Watching Castle again bed at 7:00

Castle is over—since I'll feel down—He

Bed at 7

Wed July 34 Up at 6:30—no noon at 7:00—good timing—coffee food there—4 people ate of me—John took my tray—Told my hearing aid`,"2013a_00179":`Thursday May 8th

Up at 7.

Good to. No bacon.

8 AM

BM

"Dear to Jam" good -

Got 108 out - do I have $2/00
To spend on a hobby. Left Lewis a
message to take me to lobby intro
Sun. - & thought & more
money in him - not nothing - oh
well - well.

Nice surprise - while I was
eating Lewis came by & gave 3 bags of
candy bars & 3 new journals - so this
last so long in here.

NEW JOURNAL

Well - well.

7 PM

...`,"2013a_00180":`Ask about cat purses she got me—In drawer over there?

Sam & Dean are on—pretty gruesome show—but funny.

Wed. off mom 10:30

Up at 2:00

Exercise gel concert & I told her I needed legs of pigs again. She gave me one. But I can either have my new wheelchair or exercise with her so I chose wheel chair.

Ate the last candy bar. We need a candy bar.

I'm in 7th heaven—a candy bar coffee & "Castle" is on.

It's 2:30 & cute "Castle" on—Show how jealous he is of every guy that talks to her. It's cute—Now car ride.`,"2013a_00181":`Book 1 Characters

Characters are really cute!

I've been eating everything I can get my hands on. Well, at almost supper time so I'll just...

Supper OK - Chow mein & for dessert whipped cream over fruit & marshmallows.

Now - a good Castle -

(5/7/94) (May 7) Good by no bacon & yet that every day - Sam Dean are on

Castle is on at 6:00 tonight!

Just had a nice shower with favorite music & now to -

Went down got 2 chips & a snickers - Sam & Dean are on

Cute comedy on - "How

A Castle is on!"`,"2013a_00182":`Still a Castle

It's 20° - Castle almost over
at then bed at 7:30

had a nice shower

Thur July 25
Up at 7:00 - the cards I did are pretty - especially the "blue" ones cards.
Breakfast super - 2 pieces of bacon but only 1 egg - that's ok
I feel great now - 8:30 - don't tan
are on
goes her way into viv. in library -
gave her my room M. + ate Canna
up. However she talked a lot and I couldn't hear her. Oh well - no lunch.
I get Alex at base trip
245 up from my shop, yep
Tort. Griss in airport - sales
not much snow - heavy clouds -
a "cherry fruit bar" is a good`,"2013a_00183":`Mon May 5
My left leg (nerve) was killing then it went over to the tendon.
Bit good - even bacon - only 1 egg - Huh.
3:40 PM just finished my last wine - need more Huh.

Well - its 6:30 PM - I'll go to bed but a good "Castle" is on!
Oh well - bed wins out!

Tue May 6
Need to get up.
7:30 for Brk. OK - all but Bacon.
I felt dizzy & weak - headed coming back.
Napped - cute movie on - In sleeping again - will wait until this is over.

on this book? Stop about Dr. Seuss - stops from his sleepy`,"2013a_00184":`Lipper really good! - Chicken nuggets & zucchini & really good Choc Coke.

Movie is still on, but bad at 7.

Tom cruise movie almost over - or about a really nice but boring attitude.

Friday July 26

Put dirty clothes out.

5 to 7 - More goofy dreams about men in love with me - Yuck - Anyway almost coffee time! (ad B & a good cinnamon roll & no bacon)

10:15 - up from nap - guess I'll go down and get stuff - get Chey to a movie go barn.

Lunch ok - polish some comfort & hello for dear pink punch to drink. Guess who sat with me - the girl in the sweater that used to come into me on the tram with her walker. So cute this shaky -`,"2013a_00185":`Just got up & ready for Denis.
Main things I went at store are
notebook - curler pics - wine
mine candy bars - sugar

He got me some a good lamb
papers - so I feel good talked to
Pothie - waiting for her open on face
look!

Upper OK - chili polish sauce + choc
Coke with - lemonade - really good!
But inside shop.

went to bed at 9 -

Sun May 4 up at 7:30 Br of
& then breakfast
in the cards to Sprinkles
& travel

sign - Sprinkles
place

Sun 5/4`,"2013a_00186":`Sat July 27

Up at 6:30 - more cold crisp falling. I wrote a letter to Humane Soc. about getting me a kitten. HAD

Called Denia. He's giving me a W. bacon cheese & mini bars - I did not care.

Went down & got 2 Cheez-its - Eating a chocolate (mini) just ate 2 Cheez-its & 3 mini bars - guess had to nap.

Up from nap at 2:00 - finished Lee "more" - chipped black guy

PUSH HER

Now with Denia & Grover - that good Chinese guy who is a mean

Asked what I had in the bank - $40. Ha - that means 90 cents!

& I called Denia & asked him for a 10

Good supper - tom rice soup & cheese sandwich. I marshmallows fruit dessert

Also too`,"2013a_00187":`Washed my hair & dried it in a hurry - 10 min tops. Didn't get on.

Don't feel good - sick at my stomach. Need another time.

Sam & Dean still on - purified bodies & a red light from them.

I think there is a "Castle" on at 3 - I know it was 4+5.

I "sparked" 4 cards - will take.

Legs good - 2 chick

No, I hope it's done on at 6.

It didn't go still Sam & Dean.

We wasn't on - need to look at a newspaper.

Went down - no Char - she comes in at 7 - but D will be here.

My mom - I hope.`,"2013a_00188":`Mon 29

up at 7 - crazy dreams again - must be my pills almost
Coffee time - Break. Super - even
Bacon! - Back home and BM - so I'm
sett.

Dean & Sam were on -
No mail - poopy - eating chow

Lunch OK - B-R-B - Q ribs & french
fries - Lemon pudding but I didn't get any
Any - Have chow at home & normal minds
Good TV show - & I am smart
Comp. off - I really full now - will nap
after this show

My little
bank
acct
$120.00

Red red & green sparkles

then ok came - good
by 30 - No I go to Dr. It has a
my calendar - Yes I go
my papers -

Dr. Lousy - no edge of
bacon - I told John I'd carry my
own tray - upset him & gave big
deal - ha -

Snack shop not open until 9`,"2013a_00189":`Decided to see the blank book pages instead of waiting for tennis. I'm watching a cute "Castle" - it must start at 3:00 in aft.

I decided to go to supper so I hope it's good.

Stew OK - hamburger (tough) patty-broccoli with cheese (melted) & fried TV "Center of the Earth" - cute, but I'm done it - oh well - 6:00 bed at 7.

(?) May 2) Or OK - no bacon - my brothers are on digging up a grave.

Went down & bought and a sandwich - more Sand Leo married a gal at dinner with a dinner - well see.

I wanted - offered $5.00 little gal didn't want to take it so Charlie coming in at 5.`,"2013a_00190":`It's 6:30 - bed at 9. Castle just ending.

Up to times in note - no fluids after 5 - also sick at stomach.

Br. OK - 8:00 -

Sloppy Joe sandwich - baked beans - corn on cob - straw short cake - good lunch.

Chicken pot pie & mushy brownie spoons - apple pie & orange dessert.

Top of the morning!`,"2013a_00191":`I hurt so bad this noon
my leg & shoulder -
Better when I get up.

(Thur May 1) I thought it
was Mon or Tue - but Scott &
Bernie said it was Thur.
That's better - 2 days until Sat.
Br. good - even had Bacon!

Sam & Dean are on,
taking my cards down - I need
envelopes for 2 of them.
Clar - give me a box of
cards & envelopes & I got`,"2013b_00002":`New Notebook

May 8, 2013 or 2014?

Denis surprised me at lunch & showed up—mostly to tell me Ruth had her deal. Yesterday worked fine I guess they forget it—another next week I think—not too painful she said. Lunch was good—chicken & baked potato with sour cream on it—& Choc pudding. I'm going to nap now—

At 2:30—will nap
TV has storm in New York subways flooding etc. some power shop closure.

6:00 PM & Bed—I'm tired & sleepy!

(May 9—Friday) One more day & I go craft shopping. Br. lousy I'm—egg or bacon. Trying to decide a craft I want. I feel lousy but always do in the morn.

"Castle" Ton tonite at 6:00`,"2013b_00004":`Sam & Dean on now. I'm eating a roll but need coffee.

Went down for Chip-X but it doesn't open until 9. I'll go down. But I need coffee so I'll go down. Not sure what Chip-X is.

Weird movie about lethal weapons murderer. Still on - good. But I love it a good gel.

Nice nap - 3:30 - nothing but good on 36 - but it better be off by 6 - for "Castle."

Guess I'll go to supper. It was OK - ham + fries, dessert fruit, cents watermelon - very good - back home.

+ a candy (mini) bar - dark choc with nuts - sooo good -

"Chette coming

So far Red Riding Hood + Snow White have been murdered.

Now he knew they visited the wrong person. Cute show.

I need a cup.

Sat May 10 no eggs but good bacon - guess it's a trade-off`,"2013b_00006":`Sat May 10

Today is Denny-Day - shopping for a hobby - don't know what to get.

Need a cup & a hobby. I saw clothes guy down stairs - his name is Charly - told him about my shirt from Sheila - now it's 10:30 - leave price in here at 11-00 -

Back from shopping - got coloring stuff - a tiger book of rabbits - will go to Ryan's kids TV cup though I don't want sugar Chinese.

Sunday May 11 Good br. but no bacon - I ask for a stool softer - so - nurse here with pills + stool softener good -

"more" last of wine!

So far no "Cotte" on note -`,"2013b_00008":`Mon May 12

trash goes out.
But coffee brought back from a honey bun nap.
Up from nap at 2:30 - will eat supper.

Back from supper - sloppy joe & a chicken noodle deal - really good chowder cake & now "Castle" is on!

Tue May 13 Terrible Day! First of all stupid cooks didn't bring coffee until 9:45! A black guy sat in my place in line so when he got coffee I sat there - he stood behind me and stepped my chair - I said "this is my place I have been for a year" Bernie turned around & said "no Mary it's his" - so I moved & said "I hate to see a grown man cry" so I sat & stared at him. He is really lame - so I'll ignore. Better be early or late tomorrow & think late! Like 8:00`,"2013b_00010":`Castle at 6:00

3:00 comedy - Will (black man actor)

nap time - 1:00 at 2:30 - I'm trying to figure out what to do about the lunchroom go late & think what would be 4:45 & 7:50?

"Castle" on - my case worker was here she's so nice - told her about the lunch fiasco - Ha - I'll go in late -

Supper interesting - NO same black guy - I went in late and his place was open so I took it. Then he doesn't show up - He - supper was rice & beef chunks & pineapple for dessert. Come home & am watching the party Castle - I need his name - I think he's in a movie called "Olympus Fields" or something Olympus but I'm not sure.

Well May 14th Br good - tough BM-

Went over at 7:30 - good time - Leon & Sam are on - "Castle" is on Tract at 6 - good - I'll remember it & try to get his real name - this on`,"2013b_00012":`Aug 5

Breakfast super - eggs, bacon. Black guy I had the argument with has a health breathing problem - cancer? I see his chest go up and down when he breathes - I made a Dr. egg to ask about hallucinations + arthritis.

I was writing May on stuff at nurse said "Mary it's Aug." Alzheimer's? What happened to June & July?

20 until 10

Went down - got 2 cherry + bought next yellow long sleeve shirt. Doubtful Denis wore new but well.

Sam I clean on still - + Dad - played by Xavier (?) a new movie actor. Cute - a real Re-man.

Supper - good lasagna + corn + cookie - "Cattle's cute."

Another one at 7-`,"2013b_00014":`Castle on tonite 6—
Fri August 8
over at 7—no coffee yet—
I was in front of block got—got
Coffee—food late but good—only less—
Ha—Liam & Sam are on—

Well—that was a surprise! Lunch was
a "lusa" or I—pretty good too—rice & ham
of pin cake

What a day—Karin took me
downstairs to "answer" questions from
medicard but they kept us waiting on
line for them about 20 min & I had to
go to the toilet—poor kid took me in their
office toilet & I did No 2—yuk—BT I had a
really nice surprise—she let me try stuff to
do scratch off art pencil coloring—piece
piece of great grandkids in a cute park
&—cute also 30$—Gotta call her
she finally back in my room—

Up at 6:50—fellas—
Breakfast OK—In going to wash
my hair—put it up—
Well—I got brave & washed
I put up my hair—After I take`,"2013b_00016":`it down—well see—I took it
down but haven't looked at it yet.
I was sleeping when Denis
came in—I forgot it was Sat—Anyway,
that doll had so wires—a great
Chinese dinner—2 papers—what a
sweetie—so I had a wine & ate a lot
of Chinese. After Denis left I went back
bed—It's now 3:30 and I'm
tired—Candy—great I
have "brain" exercises
"Da Vinci"—a lot of gay
"brain" were from "angel"
a man named Tesla—funny
else piece—

Subject over—WAY behind

Anyway!

Denis said my name is Ann or
hearty parlor for del from Collin & Connor,
I'll see tomorrow.

Need more wine & then

Aug 10
Super breakfast
even had bacon—nice
& crispy! No—john though?`,"2013b_00018":`2:15 - Sun. aft. How a huge croc (18 feet) is heavy its stomach pumped to see if he ate humans.

Cute movie on a haunted hotel - cute actor - John Cusack

Decided to eat but too late
Ha - do having a show
wine & candy - then bed

My wine is gone well

I don't know when I laid down by
the moon woke me up with jill
what time was it? - 7:30 - with morning?
at night - So I got up & watched TV - Jill go to bed at 10 -

Mon Aug 11 Note - I got up too early
It's only 6:50 - they lunch
never have coffee that early
They did at 7:10 - OK but -
good breakfast - John carried it for
me - It is now 9:20 - FBI show
is on.`,"2013b_00020":`gun point + pipe help kill them all +
himself too. — Ended good —

Guess what? Got my new
wheelchair out & it's nice. Brakes are
tight & steers funny but otherwise
good.

Lunch OK — peanut butter
sandwich + chocolate cake — Back in my
room now.

tried to call Mike again,
bunch of stuff & didn't get him.

TV — cop show — good one.

5:30 — supper good — eggs, Tater tots &
lime jello.

Came home + TV was good — went a
pedophile jerk.

Gotta tomorrow night at 6 (or 3)

Bed time — 7:00`,"2013b_00022":`Castle on tonite at 8

Tue Aug 12

Up at 7:15 - got breakfast - good

Wed - Stood - got 6:30 - I thought it was 7:30 - turned in all 2 other people there to a bare room - ha -
Came back & wrote this. At a long run I went back over at 7:15 - good by.

(No B) oh well -

& still need a carbon paper.

"Am I Dream" are on. This damn stuff is getting old - now - a TV I (almost) get away with it.

11:30 - up from nap - still need something to do: Lunch OK - grilled cheese + tomato soup - grapes - TV has ghost stories -

4:15 I was watching something & decided to switch over & see if "Castle" could be on & it was!

It's on its 2nd show now:
All about sex clubs + "pain"`,"2013b_00024":`There are 4 Castles and it's 8:00 + one more.

(Wed) It's 11:45 in the AM - guess I'll take a nap again.

Good nap - it's 10:30 - I will eat supper here.

TV has volcanoes in Hawaii
Gyps photographying it - 2000 degrees
TV catching snakes & "tigers" & lizards -

Surprise - "Castle" is on! - Haven't seen it either. Now another one & it is 5:30 - one more & I'm to bed.

(Thur) Aug 15

Lousy day - Denis came up
and got my bank statement and
bought me some antibiotic cream.
Clothes guy brought my basket back - good
"Dean" & "I Dean" are on! (Am I
taken over by demons & hate up Dean!)`,"2013b_00026":`But Dean got the demon out of Sam.
He says "Did I miss anything?" He -
at 10:00 - now 10:20
"Supernatural" still on.
1:20 - 2:40 still on - episodes - I tried
to get R to call me but M. she has for my
phone doesn't work -
NOW - missing my embroidery! Is someone
stealing stuff from house? Looked in all my
drawers & NO luck.
I did get R. & asked her to send me some
hobby - pics to color.
Sam & Dean good - It's 5:45-
Supper OK - hard macaroni sauce" & meat
stick.
I was hoping "Castle" was next but
it's not. But "Sam & Dean" is really good
again! Ha
(Last Aug 16) up at 7- er, OK-
Got dressed - feel LOUSY-
10:35 - mopped - Denise should be calling by
morning.
We got here with a heat
much from 6 wires 1.8. I'm taking
it`,"2013b_00028":`Well it's 10 after 2-
Now 2:30-

TV has bearst wolves on,
wine is good but I need to go to bed soon

Now—odd sci-fi stuff.

10 after 4—

Sun. Aug 17 Lousy Break.

No Eggs or Bacon— I've been trying to think of Brody's first name.
Scott—just came to me.

And OK—fish, mashed potatoes + choc pie. The stupid tall grey haired gal that jitter her feet tried to get in my place in line but I outsmarted her—now I'll either go real early or come late.

No supper tonight. I finally got my wheelchair to looking good so I don't feel back when I get in bed / or out of it.

14/10—had a nice nap—TV on alligator—I hate them I'm having a cheap day & wine`,"2013b_00030":`Mon., Aug 18

Up early - In back of that cute young kid name is Bryan - does stretching exercise & splits in line - Ha - Huts - too time - Did a lot - Made me faintly - Sam & Dean are on.

I had some chex & Xmas candy. Sam & Dean on - Look like Demons part demon! -

It's 10:15 & I'm sleepy!

Having next to last wine - & Chex ex -

Well - ate too much of something & wiped -

3:00 & Castle is on - Good 10 to 4

Cute Castle

Tue Aug 19

NO EGG! But good bacon, no John again? Hope he is O.K. - TV a crime show murderer trying to lead a normal life a lady calls in about him - She gets caught!

Crazy hall - last mile. Dream &`,"2013b_00032":`Had a cat but forgot to give it water. Woke up at poor thing was sucking on a wet washing & actually got up & got water in a cup when I realized it was a hall! Oh boy! Finally got up at 7:20 & got breakfast. Scott only one smiling - the rest are pickle-pusses - including watching a murderer try & escape. Shower off his 'cash (like a nut) or mix' from him around. Now - guys looking for gold in So. Am.

Back to Land & Clear & eating dry x & I eat my candy bar. "Bad Santa" on 8:30 - a minute - Can't believe it. "Castle" is on 10 to 3 - Water is good.

Lived Aug 2 Mike's birthday TV - demons again - minute under attack by a demon. Wow a hope at demons.

Back to Land & Clear & then k - getting killed but coming back the time a thief shoots him. Now will`,"2013b_00034":`Castle 6 PM

see they are over - Bones - don't like it - So 43 weather station.

It's 10 after one - had nice nap.

Murder story on - serial killer

Comp. dis. guy -

Watching Castle - but a magic act - murder - guy in water tank by his heels - now see him alive.

More Castle - it's only 5:30 yet I'm sleepy. Cross fingers & finally got to see Castle & got kissing. Good!

They had wheelchair race & said it was the 28th - I thought it was 21 - how am I losing time? At least the intro Aug. 28th. Well? Not sure what day it is! Stupid "race" people pushing them in here down an aisle.

TV & 8 in jail but about when she was pregnant.`,"2013b_00036":`Castle tome 3?

Benny

Sam & Dean on - Lilith is first
percolate time on. I'm napping after this.

9:30 - nap time -
I need to nap! -

go until 10 -

lunch OK - chicken & rice - had to
go back to get a drink though.
dessert cake with whipped cream and
a huge strawberry. But the stupid
skinny bitch sat at my table & if
she doesn't write it somewhere
else!

Chatter is on
Fri Aug 22. Not sure if it is
Sat or Sun - ste fr -

lunch good - mac & cheese on
it - dessert super - fruit marshmallows
banana, straw. So good - Lunch a mess
with new gal Vivian asking me stuff
skinny bitch behind me. I didn't let
her get in front of me. I'll swear
Bernie is trying to screw me up. I think
she is jealous of all the attention &
get - John & Scott etc.`,"2013b_00038":`"Bones" is good—bit "Castle" is coming on—good!

"It's Peckett's story story this time but help be there?"

"At the show when she gets shot at for a time dies but they come her."

"Still on Castle" new show—starts out with frozen bodies in eyeshades.

(Sat Aug 23) Layt over at 7:15—Hope Deni will take me to Walmart

He did & we got a lot of stuff—& ate at a cute fast place full of 30% off

Home & napped—ste 4:00 now—& am so proud of myself. Got new sheets & pillow case on—not easy but did it.

Also bought bars—a huge one! Really cute into your dog on front sofa snuggle up

But where is Castle?

(Sun Aug 24) I was really sick in the night shoulder tightness was killing me—felt like no liquid at all in it. Going to hang for sure`,"2013b_00040":`Castle on tonite

No one came until I did the bathroom one.

Just had a good shower out that nice smart nurse—

Lunch OK—ham pots cherry pie—

3:30—sleep is all I do!

Monday—(Labor Day?) Hurt so bad during the night—no worry—
it's Labor Day—

"Son & Clean" are on—now my favorite honey detective author Rick Castle and Kate Beckett—

This one is about a 50-mill statue
Kate sees Rick seeing the "crook" only she is innocent. The "stolen" statue is still in the museum. Rick finds it.

Missed supper—had a long nap—up at 5:00—"Castle" still on
Body C.A.R.

To 7:30—Can I go to bed?

Mon Aug 25 "Castle"—so good
Becket comes to his apt. At the apt.
"I Beckett, what do you want?" + she says "you—I want you" + gives him`,"2013b_00042":`Castle is on Tonight
big kiss—"Is that OK?"—So good!—So
on again Tonight—or at 3
Castle is good—but not the
scene I wanted—(I want you Castle OK? I
want you) This one has his daughter
working in his Dept. or an intern.

Supper OK—two in bread
crumbs & Cole slaw—bread "stick"
& cookies—But I missed "Castle" it's
still on I think.—It is—10 to 7—
Bed next—

June Aug 25 Horrible Nite!
I fell out of my damn wheel chair—it
slipped out from under me & I fell—then
had to get my pillow under my knees &
pull myself up by the bed head. A awful
the little cute nurse was very nice & helped
me to the toilet twice—Her name is Vee?
It's now 9:35—Poor girl—no Bacon. Now
I have to work on the wheel chair deal
Nothing really on that—I'll wait until
Daria fixes it`,"2013b_00044":`Castle 3:00

Wed Aug 26 Breakfast was super! I forgot the banana—oh well bacon!

Sam & Dean are on. Castle tonite—
It says 6 but I think 3—
lunch ok—bt—I'm too full—the
skinny bitch that kept knocking into me
with her walker likes to eat warm. I don't even
talk to her so why? Asked put fish or cheese &
meat beef—+ hot food—now I'm too full—
"Bones" is on—it's pretty cute really.
Castle on now—frozen bodies of
lady—missing 5 years!—
not arrested. B.+C. were in
shot out—

It's 6:30—bed time—

Fri Aug 28 Bre. good with a
super Cinelli + Laundry day—
Mary said she'd get me another
bed that will help + exercise classes
again.

Sam & Dean good—`,"2013b_00046":`Sat August 29

I'm not doing OK—demons again. I'm sick from school when they were kids. The nurse tried to get me to play a board game but I couldn't. Viv was there also Scott but he left so...

Sat August 29

DM

2 lipsticks at need more times & my lipstick must be under the bed. "Harry Potter" is on, really cute.

Mon May 2

Found my lipsticks in my jewelry box—Drew? or nurse? "I'm in order" on it good—now another one.

Lunch time—It's too good ham, dress, pear, egg, tomato cream pie—old "gitter" that my friend from seminole she picked up foot so writer to here.

But more wine but that's it!`,"2013b_00048":`Where is 36—my honey?—"Castle"

June May 3rd Real good breakfast
and even bacon. I told Scott
he was the nicest guy in here. + he is.
Dean + Sam are on. Trying to beat
death! — Dean is putting "holy water"
in a demon.

"Where is my 133.30—
"Ranny" exercise guy was here and
killed me pushing on my left leg. I
told him at my age I just hurt my
foot 2 or 3 years. Take care + nice—
he said "I'll take care of you." Just no
you don't tell me while you are
doing it. — He—He having a cup of wine and
a candy. Milky Way—
"Bones" is on and I like it.
Now MY SHOT "Castle"—But
I've seen it before—Oh well—& love him
Anyway—
It's 20 till 8—Cast. still on.
They open a coffin & boy of coal are
in it—not a dog!`,"2013b_00050":`Cottle 6:00

Wed May 4? Lousy Day - Coffee 7:40!
Then had hard-boiled eggs - I teased Scott (he got some) called him together
but how much did he pay her?
He

Lunch OK except skinny red sweater
wheelchair burger not at my table again if
she does tomorrow I'll eat somewhere else.

Segit

Wed May 4 Good or, I sat in
block guys place but made up. He
his 6 kids names on his shirt, 5 boys & a
girl. I like the fabric name "Carnotters"
very English. I like it. So he & I
are made up. I'll go in later & let him have
his "place" - Also "Bernie" wasn't paid "Hi"
trying to make up I don't know
good T-shirts to get clothes guys - I got 2
good T-shirts mixing silver one & white
turtle neck -
"Bones" - cool & awesome. I
would coffee but was very downstairs
by her.

Ex. Only here - very nice rubbed
the back of my face with cloth. Had me walk a`,"2013b_00052":`"Castle" Tuesday - 3:00 aft.

Little with walker - killed me! So she said to quit. Nice black lady. Name is Sally!

Sugar OK - meat rice & onion
Cousin sprouts (cooked soft) done &
"Castle" is still on Good -

Thur Sept 5 Br. good h. &i.
But no toast - she manages to always leave out something!

"Sam" & "Dean" are on fighting
the end of the world.

I asked her what no. She said
Sept!

"Bones" is on now. Always
gloomy but good -
Nopped at noon 1:30 - TV has
girl captive with a chain around her
neck - yep - woman two baby but
doesn't want it - since it's a boy.

Hooray - "Castle" is coming on!
Watched one show then ate dinner
good - scallops & cheese broccoli
fruit for dessert. Back & "Castle" is`,"2013b_00054":`Castle tonite - or
still on - Good - 6:30 - getting
sleepy -
Fri Sept 5
Forgot milk - so no
Cr of wheat - oh well
eggs & bacon good

"Bonez" is on - pretty sure I
saw it & did - now at new one!
Char. said last import in my
tank was July! So that $66 I own
owed 10 min until "Castle"

Sat Sept 6
Br. extra good -
eggs & bacon! I forgot silver
ware and that doll Scott went
& got it for me. Ambulance took "Joy"
this morn. She's the real skinny
one that drinks 6 or 8 glasses of liquid
a day.

Terrible flooding in Colo.
200 missing - Clinton Bank! & mud
foot & wine`,"2013b_00056":`Castle on Mon.

Denis brought a much larger
at 6 wine! - plus 3 honey buns
how 3:00 so pretty closets
bed -

4:20 - I have no idea what
this N is about - some sort of "in"
the future "thing"
& agent over - no coffee so
came back - going out

NO BACON - OK - eggs & etc.

not sure the day or month
etc., I was hoping "castle" was on Foey
in "Pirates" again - try last
wine!

Mon - went over at 7:25 - no one
there & no coffee - POOEY
5 am NUTS
were 7:30 at nuts - not morning

Mon Sept 8 Br. very good. Bacon
eggs etc. I was nutty again`,"2013b_00058":`Last night, I thought it was breakfast time, but it wasn't. I went back to bed.

I went out on the patio. Ex-Lady (Regina) was here and will be back Wed. In the meantime, I'm sitting on my recliner and pop the leg rest.

I see the "Castle" but I still love this one. Once I'll go to - fit too.

Supper at... pork steak, milk, no dessert.

Or my best Castle? I guess.

Anyway, it will be... & that's it!

Well, Sept 10, not sure - no bacon, but OK.

"Sam & Dean" are on.`,"2013b_00060":`Castle on Tonto or 3-
Sam & Dean on snow-

Lunch good - that skinny b- in the
red sweater was sitting at my table!
When Scott took my tray I said "Don't
just me over there - I'll sit with you" Ha
I'm sure she got the message - I hope
she was humiliated!

1:30 I went down to get a Candy
bar and here is a cute card from
Shields and a $2 bill in it! Good!

"Castle" is on - my favorite case
workers is here. At 7:30 I got
coffee & had a honey bun.

Arthur - a ghost story is
on TV - pretty spooky too. It
has a haunted nest. Made in '23 -
Ha 90 yrs ago.

Now in "Face Off!" when they
make models & original things - one
a cute little "ump" - so cute!`,"2013b_00062":`Ex-gal was here - true to walk-IT-A - no go - I got some really pretty coral bead necklace - $1.00

TV is "Faces Off" making sculptures of goblin etc.

"Bones" is on and sad. A neat little guy just got shot & killed -

Now - my favorite "Castle" and its 3:00 - a show about magic

Breakfast was only decent meal I've had today - so - just chips & crackers

Don't care -

With this wait get over - I sleepy

It's 5:20 - if I'm roaming around at 8 or 9 it's NITE TIME

Friday Sept 12

Boo - good - no bacon - ham & bean are on`,"2013b_00064":`Fri - Sept 12

I hope it will take me to Hobby Lobby Sat. I'll ask him.

Leon & Sam (too bloody) dear and Sam on, may not watch.

Now another one:

Now - 15 to 10 -

Lunch good but had a confrontation with "skinny walker bums" he sat at my table and I said "don't sit here at my table, you know I don't like you." He said "this is my table." He - he went out there over - so I moved to the next table over. Then she - maybe we start eating in my room - we had fried chicken (2 legs good) baked potato, sour cream (very good), pear pie - good choc pudding.

"Cette" coming on.

I'm so pissed! A nurse told me the Dr. was here yet! I have been asking for 2 M.O.'s she didn't come!

After "Castle" I'll ask Mary (at desk) about it.`,"2013b_00066":`BAD NEWS—Denis is going out of town for 3 days to a friend's wedding. Bought a send of wine—but no gossip papers so won't take me to hobby shop tomorrow. Oh well—

Opened my wine—See you Denis & his stuff.

Well—enough wine—it's bed time,

NO EGGS!—FOREVER—of Denis is gone for 4 days—Going to be a lousy week.

Sam & Helen still on trying to catch the Denis—

Darling baby on "Bones" pretty little girl.

TV "Bones" is gruesome—& Body dragged by a big truck a long ways. Head stuck in the motor—eek—`,"2013b_00068":`But - it's a cute show with
2 dogs surrounded by a messery!

Wow - 3:20 - our time gone -
oh well -

Mon Feb 15
I think
Cattle is on tonite or at 3 -
hope so! - I'm tired - 2 BM's
made me way - TV has "Emmy"
2 BM's on

Br. was the best Zeggo & second

That sweet Denis - cat Molly
over with 4 wires! - Matt was with
her - I had her pick me up some
times - she said anything else?
said "Diamond Ring & a tattoo?" She
shook her head "NO" & we laughed - I'm
having a roll of wine.

Tue Feb 16
Up at 7:30 - Br O.K.
O.K. - TV has "Friends" on - now
kids with career - Sad`,"2013b_00070":`Feb 19. Sam & Dean still on
earth - I feel sick. What else is new?

BM I would like to go back to bed.
Sam has to put the devil back in his cage that he let him out of.
It's good but sad - all written by
Eric Kripke.

Now Sam & Dean are going
to fight the devil together.

Went to lunch - skinny bitch thought
she could outsmart me and put her 3 drinks
at my table - So I got the tray moved
them over to John table - He - She came
breezing in & stopped short - X A M drinks - So
she sat at that table. I finished my sandwich &
came back. A good strawberry cake - bought it
too.

Don't feel good - think I'll go

2:00 - Castle on about theft in a
Museum - Now ghosts in an old
Mansion -`,"2013b_00072":`"Castle" tonite - $1.00

"Where is my Denis? and my wine?"

I just ate an ice cream soda, forgot to read "Castle" or go to about a bank robbery.

Denis is back! Good -

I need to call Ruth - Helen had a stroke - oh well - no comment - gotta be nice -

I talked to R. She does seem a little down, will start Helen getting because R. always had money. That was the main thing with Helen. She is 95 now -

I decided to try find a cab driver or someone to get my stuff at the drugstore - wind mage - I'll run it by Denis.

Guess I'll just give O. lots of room.

Son & Dean are on - about vampires - you girl falls for one - look if Dean gets charged into one - then back`,"2013b_00074":`Just waiting to see what he does - I'm not calling him. Sure hope he does - call or come. Today Scott blew me a kiss! As he went by, I said "Don't make promises you can't keep." He laughed - "He's a doll."

Now where is my other Doll? Do I go eat or stay here & wait for him?

The ex lady came - it was Wed., not Sat. No wonder no Denis - well - lunch bitch at it again.

She bumped me twice - I backed into her twice - then on my way in her broke at my table again! So I sat where John used to. Little pink guy sat there - didn't talk - or eat much.

Dessert was watermelon - I love it - so does Scott -

Nap time -

Up at 3 - a repeat "Castle" is on - but who cares? I love them!`,"2013b_00076":`I'm starting to get mad. The mixed supper at 7:30 - where is D.? I called Molly - she said he's yet to come home. I did I guess - but not today & I got a check out a snacker. I realized I can get money out of (call James John) need to find his tell no.

Sam & Ellen gory. I got some cute little pearl earrings clip on -

Now on TV is Boner - really gory -

I hope it's a new Castle today. - AND - I wish Denis would stop by at 4 -

Supper OK - but I have no (back here for ice cream mine)

Drew - I called D. on his tel

2/2-5/20 - He didn't answer "leave a message" - I just left a calm nice one and hung up. He stay away now. Maybe I'll wait until Sun. write him a note`,"2013b_00078":`Now - "Castle" has them living together in an apt somewhere - She made a deal with the Senator that killed her mom. This is cute but I'm glad it's running out soon.

7:30 - bed but a new Castle on. Guess I'll turn it off.

Fri or Mon?

I think it's Fri -

Hooray! I did call & he answered. He reminded me he saw me last Wed - I agreed & he said "now it's Sat. I'll see you on." I said "you want to go back to bed?" He said "no" & I said "OK - see you Sat. I love you" so good. I can sleep at noon. "Am I done?" On + OK.

I was thinking about all I needed to do if no Larry - like my rent ck due - car - speaking maybe etc. etc. Can't do it - ever -

Mon - "Castle" on`,"2013b_00080":`up from my nap—its 12:30—
just ate the last Honey Bun—Oh well—
don't clean are funny back
stage writers, etc—
Clothes grey brought in
12-14 white T—NO—too little, no black or
silver—

7:30 pain pill

She was here—real nice lady—tall
thin blonde—put me on vitamin c
& more—Hope it cure my throat
and gives me more energy—she had a
laugh—I thought we said I was an operation!
said "No way—she said I'm not—no I don't say that.
She looked at my face & breathing—she was in
awesome health for my age!
only 4'30 but boy she so skinny!

She's got a bit hope so—
will I need a hair curler picka
& Carbon paper`,"2013b_00082":`Hooray - what a great day! Denis bought me a lamb & wines (also a check from Vickers - $300.) So am Denis & I have a bit on that so can find some carbon paper - we bet $500 - $100 doesn't think he can buy any hope he can. Also bought my "new" way - so I've read them & then need going to take my new check down & keep 10% out - put in $23.30.

Sunday

Put 20¢ in my bank - kept 10¢, I need to find out how much I have.

Went down with my 10¢ I got chips & that darling silk grey sweater shirt then Denis bought me! He thin paper & carbon paper honey burnt better candy bars.

Boy! So that just started on my tiger.

Mon. No eggs but good bacon.

Denis & Dean - Den is killing himself (or trying to)

Ex. got here today -

Am I clean pretty good -`,"2013b_00084":`Castle Towns

all about death - with my exercise gal would get here. She did it at first again - Panny was with her too. Then I snapped from 1 to 3 - Castle so on not about a religious sect + a murder.

So achy - both shoulders

Well "Bones" is on "Castle" at 3 -

Br. super! eye doctor -

no to eat - Ha - back in room.

Sam + Dean on now - gruesome!

... invisible - Make one guy eat himself! how one in on clean street -

BM

had a nap - lunch was good,

fried chicken (2 legs) + noodles - now it's "Bones" a guy to be expected but he didn't do it - a lawyer did -

Dick at my stomach? Belching

Chicken - was it bad?

OK now - ate some chef

It's only 5:30 - but I'm going to bed`,"2013b_00086":`Christmas List

1. Denise - nice shirt - (Montana)
2. Sheila - nice stationery set
3. Molly - sleeveless sweater & earrings
4. Connor - bertha (red eagle or one for middle)
5. Collin - nice desk set
6. Ruth -
7. Mike & Mary - plastic flower arrangement
8. Shawn & Michelle " "
9. Brian - envelope & stationery
10. Mary (at desk) pen or pencil
11. Char (main desk) jewelry box
12. Regina - earrings
13. Wyatt
14. Rylinn
15. Raymond wife

Well, it's 7:30 - bed time! But Collin is still on.

Regina - exercise gel - earrings dangly thing

Supper OK - B-B-Q salad & b. sprouts
mini candy bar for dessert.`,"2013b_00088":`Thur.

Not sure what day or date -
Sam & Helen are on? Its 1:35 + Bonus
is on.

Up from nap - its 2:45 - try
tel strike - can't get Ruth at noon
Denise

"Castle" is on at 3 - good - its
2:45 - now 4:20 - I'm going to
skip supper. "Castle" still on - let's see it!

4/4/5

Wasn't sure about good -
Did some more coloring - got
bored - "Lost Leader" coming on.

Good - I called Ruth
again at it went though! We had a
nice talk - she said she felt so bad
there (in bed) with Horton.

Its Sat! Crisis
was there - Oct 5`,"2013b_00090":`He brought me mushrooms & wine
& my papers! - so glad to see him!

He told me Helen died last
Tue - Why didn't R tell me? Did she
think I'd say good? She never does that
about anyone.

Sun Oct 6 OK but no
egg or bacon! - toast - er. of
wheat cups back in room - eating
a honey

Slept right through lunch - NUTS - got
some Chee & coffee

Movie on "Along Came A
Spider" - I saw it, but it's good -
that really good black actor in on the TV
pic in stuck on one screen

530 - Supper Bleh - Tom did some
laughing & fit quick & got love
I got his & his.`,"2013b_00092":`Mon - Oct 7

Didn't write -
I missed lunch - ate supper - bed -

Tue Oct 8

Good lunch Lamb & sweet potato

Napped - started watching a repeat of Castle & my nice case worker
told me to work on getting another hearing aid. Let's try!

Wed. Oct 9

Was good - wonderful brain but
no E.T.O.S. AGAIN! -

I have to get a new hearing aid from
my old Dr. That got me very first one! Hooray!
Held shower - still had a shower! She
said "well try today" - O.K.

Shower at 2 - Lunch
iffy - fish (not bad) but cold mac & cheese
no dessert - ate candy bars -
"Bones" is on.
Just had my shower - flat case`,"2013b_00094":`While she was getting towels—
Sugar good rent boy & steward
Poveshell Bed time—6:00—no repeat
Castle—(Castle Toronto)

Thursday Oct 10—Dr. good—Moticon
but eggs—
3:00—Carter lunch & sprouts chick
pieces apple & butter—back in
room—ate dessert—since I'll lay down
$1.75—my left but both shoulders hurt
really bad—Niles Hicks playing poker but
"Boys" won—too sorry

Friday Oct 11—woke up at 6:45 and
so stiff I could hardly move! I need strong
aspirin—asked doctor—& asked for
stool softener—
Dr. OK—no bacon—put clothes
out—need to get money out—
Sam & Helen are on—
Hal! I had $29.00 in the bank—so
take out 20—so I'll give Dr. 20.00—`,"2013b_00096":`For "Castle" at 3 (or 6)

Up from name "Bone" is on
Good Castle west supper
Not too good - a big pot biscuit pork
Spread apples & pineapple
Home & candy

Friday

Breakfast Lousy

No eggs or cream of what -
TOAST only - no coffee -
BAKED -

It's 9:30 AM FRIDAY

Well - Yanny was here (for a short
time) I walked a little ways and he left -
will be back next Wed - good!
My lady ex' gal come in
we went downstairs in the ex-room - She
put the elec. pad on my left knee &
then right - then
My Sweet daughter sent`,"2013b_00097":`bottle of wine - tried to fix my bed
(good go) & kissed me goodbye -
Castle still on - cute, &
still need a bandaid -
He's on again.

YEAH! Tomorrows

- talking more? YUP! at
- 10:30 PM - 2 AM
- ! HA!

NOPE! I'M UP

Takes off work - 8 AM - 5 PM
Hi! at 2 AM
- 10:30 PM - 2 AM
- ! HA! but this time it was
- no more top
- bad luck
- too much work today`,"2013b_00098":`Sat. Wal Mart. 10:00

me 2 silver watch off $30 & I so I called he of rang a
Thank you — so I've got a good
deal to give Elvis — mostly "Cold & the
Hot" and a shirt.

Sat - Br. good today. I did
forget milk but put on powdered
milk - the eggs - back in room &
TV - let's story - also worked on
my "sea horse" pic.

At 9:30 - I'll go down at
9:50

Sun. Oct 13

Had a good time with D. She had
my 40$ - Bill was 60$. I got a cute
black skirt - Supposing it was 15$ - so
easy to go to tor with it on.

Br. my - no eggs & no bacon - toast &
Cry of int. - how - let u here
wait down & get those meet time - pretty
file she gave me for 50 each`,"2013b_00099":`Sam + Dean on about telling the truth - I can't believe - my need to go to toi - wow did I a lot good

a "raging" snowstorm outside - still that stop or hurry him up? - Still "combating" down side ways + big flores

3:21 - quit snowing so Dems so I went down & shir called him for me. He sounded mad said "I come over on this" - I said this is this wasn't it? - So I told him my leg got cut. We'll see?

Maybe will have to pay someone to take care of me getting pissed off now -

He knew I'd be pissed - so got 4 or 5 things to color - and a`,"2013b_00100":`Had some wine - so good - also chef - TV Circle + good actor Tommy Lee Jones.

6:00 - too late for dinner - they sent it up - it was AWESOME - mashed potatoes gravy or little - their famous awful pizza from chili (not today) I got some salad with - brown rice soup

Monday night - SUPER

Egg bacon toast + coffee. But then I think they put heavy weighted chair on me and I couldn't move my legs. My legs were cramped - Ha - till can't feel what little is there - no pic + white and blue dress - felt like I'm going.

Just sleeping and feeling (exercise) woke me up - exercise + went out at the moment if we didn't go much - back.

Cleaning today here - she covered huge me - so nice - I have to`,"2013b_00101":`Wed 19th Feb

I had the toughest damn shower - my new "aide" hates white people I think - well I never again with her.

Missed lunch - had a Coyde "minie"

Just got scared - the cute plumber came out & came in to say he'd hug me before he left. What is this "area" here? HA -

Supper good - not sure what it was, rice, eggs & cheese I think, & corn -

Coste is still on - this seem it but its good - about 5PM

Thu 20th Feb

Sunny day - Hope he brings me stuff to do the nasty bit. Dark & grey wind pretty strong.`,"2013b_00102":`Oct 15

Br. good—eggs but no bacon
Forgot my cream & wheats—oh well
Sam & Eric are ok.

Good—my clock & watch are
both OK and right. It's 8:25
these I'll color a little

Did a little—
watching Sam & Dean—but now
sleep—Castle at 3:00? at 6:00
Up from nap at 11:30—will go to
lunch at 12:00—

BM

Lunch just ok.—chicken gravy on
rice & spinach—with choc. pudding
Back there at 12:30—watched last of Bond.

Oct 16

Up at 7:00—will go
to at 7:30—Br. good but no
bacon—yes chocolate

Mary (Dick) came in—said I was to
be at Silverstein's at 9:30—so I
called Denis. He said he was here then
call him when I get there.

So—I went down & was
1/2 hour early—came back`,"2013b_00103":`Ex met Thur—

Wed Feb 18

Hopped—now 10/16—Is it ex day? TV has wild weather on—scary—But—it's nice out now—59°—

Been trying to think Bickette first name—fig. 7 of it—STATE

Ex got here—we did a few experiments on the foot pedal—my wrists are so bad—I don't know why?

TV—"Bones"—serial killer of young women—He catches the bad guy!

Kate Beckett

4:4—how'll it go?

Wed Feb 19

The floor!`,"2013b_00104":`Got downstairs 1/2 hr early so came back up. Felt sick so nurse gave me 2 tablets. Hope they help.

Well not sure if it was good news or bad. A tiny spot on my lung or pneumonia? I'm to be put on meds. for pneumonia. Hope this is it - it's probably because they're making me cough. My darling Denis got me a "chicken salad royale" & coffee - it was so good. When I finish it BED! Hope it's pneumonia not cancer!

ate 1/2 of salad & got me chicken lettuce - ultimate friend dear - so good now candy bar & lid

Hooray 1/2 piece of wine left - so good after salad.

When in DC they said I would be there yet! HUH? Can't anybody get anything right`,"2013b_00105":`time eh 43

W. have lottery winners on,
makes me want to buy some
tickets - ha -
"Rones" is on. Is "Castle" next?
Hope so. I went down & in the
"Bird" Room got a neat magazine
"Nat'l Geo. Traveler" - great scenes.

Castle still on - No hot candy
bore / gotta quit.

Supper good - deviled potatoes
potatoes & peas - fried
Castle ending - not yet -
wish it would - I started

Tue Feb 18
Up at 7 - my worst (right one)
really hurts where those 2
ganglions were cut out - well
its true - 2 more days until stems
bring me something to do - I hope
May go back to bed`,"2013b_00106":`Castle Tonito

anymore? Or well—

Thursday Oct 17
Need more coffee—bt
too lazy to go back & get it.
Br good—eggs & bacon—or what?
toast—
Sam & Glenn are on—Sam in in feet
Ha—

3:30—Castle finishing + and
gone last of wine from box.

Friday Oct 18

Break—a good Cinn.
roll BUT no eggs or bacon.
FOOey—Eve & Sam are
on. Not putting any more
dirty clothes. Don't get them
back.

Sam & Glenn not Eve

All about demon in the
woods—an Indian one?`,"2013b_00107":`Didn't realize Conan Doyle wrote "Hound of the Baskervilles" from a true "dog" story.

TV has invention on it

Pumpkin with "Billy Bob Teeth"

Love R. Catt and looking in window

Stuff for Halloween

Funny

Just talked to R. Most of it I didn't get - oh well -

Zumba has bronchitis but is still working - too good -

TV - cabin in the woods - outdoor

Toilet rug - $9.00 - yikes - it's almost 3:00

Monday Feb. 17th

Left my coffee somewhere? Or just with bacon too!`,"2013b_00108":`(Castle Mom)

Yummy - let guy come here & walked to desk - got sick and glad I had my After 2 - hope Castle is on at 3 -

This is a rerun where Kate gets shot.

3:15 - Castle still on - I ate chip mix & 3/4 had a little water.

Sat Oct 19

Br good - no bacon oh well - poor old guy with lousy equil. dropped a whole glass of ice - made a huge sound - Poor guy.

Back in room - Scott blew me a kiss this morn. Ha

TV has poor kidnapped & held captive ride.

I have a nurse checking on my pills for pneumonia - hope Denis brings food & wine coming via the One Mile Way arc up this weekend & I have a`,"2013b_00109":`Sat Feb 15 Pretty boring day.
Mostly learning to get in & out of new bed. Sort of spooky. Takes nerves.
TV has girl in heart stopping & no one knows why - diabetes.
It's all done. Doing super things in medicine. At 4:07 I'll get supper toste & get eating candy.

Sun Feb 16 Knees hurt so bad or I'd been able to get out of bed easier.
Card Sheila sent so cute.
A knit dog named Boofie also a zoo hope Dennis gets lots of colors with it.

I saw Karen sitting on the side of her bed. So she's alive still -
Br good - no bacon -
TV has tiles in Portugal Spain`,"2013b_00110":`Sun Oct 20

Blen sick or hurting all day. Ask for crackers. Got cheese & 7 up.

TV on about 8:45.

Chicken & dressing

& lemon pie 25¢ each & 2 quarts

nap - up at 2:00 - fell watch TV or color.

TV was "Wuthering Heights" short.

Heathcliff & Cathy - love in life & death.

Sure good actors.

Mon Oct 21

So stiff - after I sprats bitter - BUT my shoulder (strings) is bad - also my little bulb burned out from desk lamp.

Need coffee!

Be good but forget toast!`,"2013b_00111":`Well plumber finally fixed the sink but left a mess of his tools so my shop bed is in the trash. That grossly overweight fat lady said it was hers? I said "no way that's mine—she wanted a..."

Nice surprise! Molly met me at the train station and brought me a house of 2 weeks. So nice! I gave Molly a big hug & kiss & said "I love you!" She said "I love you too" So nice!`,"2013b_00112":`Milk - had a prescription from Dr. for antibiotics - Mary said she'd call Dr.

B.M. just had a painful constipated that was hard to get out every day yet.

went downstairs & had a shock on right knee & not good on left. Also walked a little way - ouch!

"Clotter" is on - Bird - The son of an art thief - Beckett is so jealous - the thief likes Clotter - She's gorgeous bloody

need to go to airport -`,"2013b_00114":`"Castle" tonight

Damn, I've seen this Castle,
found out at least 7 pills are here - antibiotics - first one at 5¢

Supper OK - chili bits - chili
I got some soda of crackers (in case of heartburn) again "Castle" - haven't seen it -

Oh yes, got my first antibiotic pill for my pneumonia. Should I have
get another one at 9¢

Don't know what day it is, I think Wed. Clothes
are out so it must be Fri. Got
my a.b. pill - I think it's helping
Br. good but I forgot milk again
thanks to John - wish he'd just
helping me - oh well -
Colored for awhile.

Went down - found out I have
$1 in my bank - Ha - but I got a
candy bar at noon it's 3¢ - Great`,"2013b_00116":`Dear,

I have a couple in an old addition nut house.

TV "Bones" - after I came in
a gal put in car & drowned - gruesome
body. I think Castle is next - no
another "Bones"

"nurse" made my bed - sheets in
the dryer - don't have any more -
"Castle" still on but I saw it,
all about the mayor - owns a coat
worn by a murderer - not the mayor of course!

"supper calls! Off I go."

Supper Riggs shell mac - no topping a
chicken sauce - dry too gravy or sauce - no
dessert & came back & fed a new - force at dry!
just thrown up - guess they are dry enough
late to be. No egg tonight to eat

Back in room

But Oct 25) No egg but I was late`,"2013b_00118":`Oct 25

Sam & Dean are on. Dean has a heart attack & a "miracle" minister is working on him. But he saves one & some one else dies.

I now have $150 in my "bank"

Well - found out its WED today.

Called D. at work & told him I had good news. Treat me to dinner - very easy but I needed to go to town. It was a long way off.

Castle on - I don't but do good.

I'm skipping supper & only 10 to 6 but I may go to bed.

Thur Oct 26

Bn perfect - egg bacon toast coffee

Toast - all good. TV has

Prince Brown on - now Sam & Dean

Got Prince - S & Dean new. Wish I had

Times or crackers.

Sam & Dean good - Sam in a cage.

Dean looking for him - found him in a cell

needs the key -

Now a draw for tender`,"2013b_00120":`"Castle Tonight"!

Sam is climbing up an elevator shaft. Exit is locked. Meg the vampire is drinking blood.

Had a nice nap—now it's 3 & cute pie is on. "Castle" of course. They are living together now.

Friday Oct 27

Br. good—no bacon. Forgot ham & fork so good old Scott went & got me some. What a swell good guy.

Up at 7:30—

Going to leave a list for D. That I need tomorrow on his phone.

Lost my blue pen. This is OK. Left a list for D. forgot love & joyous. Hope he'll know—

Lunch kinda yuck—their lousy pizza—good but too hot corn on cob & really good choc chip cookies too. Back in town. Don't even think I'll about the Colt pistol—`,"2013b_00122":`Still on Dean & Son - Oct. Marathon

I guess - anyway - Evil clown had little boy - Dad doesn't know what to do.

Didn't know Deirdre and Dana had died.

"Kaiser" someone real good looking guy.

Nice talk with Ruth - she has her own tel now, so good work by them Linda & hubby.

(Sat Oct 28) I made sure it was Sat! Br. eggs, egg bacon or hot toast & milk. Good - TV Land Order -

Sunday - 29

Nice day + special visitor - Mike F.

He yanked my arm & woke me up. So good to see him! Denis & he took me to Doc's.

Eddy - I had a stuffed gut + a beer - then we went to Walgreens & Mike got me two color books - (for free) but I don't care. So color came back & took a nap - Mike will take me to ear test.`,"2013b_00124":`Supper a super lamb, pretty & mashed
potatoes gravy - home at 2 choc. cardies &
writing until 7 + then bed -
Boring to bed at 7:00

(Mon. Oct 7, 29) Big treat - got scared
when I looked up at a terrible
UGLY mask on a girl. Let out a gasp &
everyone laughed. Halloween
had bacon & eggs & cr. of what - I'm home"
now. Don't clean or ghosts etc
2:00 - Mike & Mary came up
Brought me a great piece of strawberry
pie with whipped cream on top.
Castle on! It's good but they
are trying to keep their cat box (it
must look tidy) from finding out about their
affair.

Hearing test 1:00 o'clock - Mary
& Mike taking me!
Mike gave me a 10¢ bill - good
Got new pen - one wouldn't
work but this one is O.K. Sand Dean are
OK. It's 10:30 - Feel lousy - not sure when
Mary & Mike will get here. Need a cheeseburger &`,"2013b_00126":`glass or bottle of wine.

Feb 26

Wed. not sure - by then -

Nov. 2?

Gx 30

And for 2 days yet only 1?

I have a nasty eye pain at

9:30

Now eye pain at 9:30 till

call Mike at 9-

Last night a stupid new, new nurse

turned on over head light - I just ask her

if she'd turn it out & use bottom light - she

did BUT - left my pills on desk & left - I

waited until I went to toi & took them & she

won't last long! - I hope.

My "EYE EXAM" turned out to

be a CAT scan! Had a shot, &

had to put my arm behind my head & my

shoulder started killing me & it was

so cold - Bro gel got me at 10:30 - no

Dr. appointment tomorrow.`,"2013b_00128":`This? Had a terrible terrible cat scan—arms up behind my head & hurt like hell—so slow & cold in there. So glad to be back! Went to bed.

A funny thing—I called Ruth & thanked her for the next skirt & color book. She said I didn't do that—turns out it was Sheila! Skirt fit but awful dark colors just goes with brown top—ha—so Ruth said she didn't mind anything or make a skirt. I thought talked to Ruth & we laughed! I called her back & told her about it—tried Sheila but she won't come. Really funny, color books are too childish—snow white & dwarfs—prince & princess word game—

Eat a wine & snack mix!

Hooray my chick came & I will put it in the bank! Bones is on. I hope cattle is next—no more bones. But my chick got her—I'll put it in the bank—I did.`,"2013b_00130":`Well, I called Sheila today. We met up at her place.

I said I loved the skirt—really don't too long and dark—but cute. Can't go out in it also.

Bookstore so (as my old one) that makes $3.00 have! Hair done & pots & coffee & coffee maker.

Nov 1?

OK BUT clumsy me spilled my cream of wheat all over the floor of my wheel chair & got coffee on my room.

Am I ever on

15 to 9—guess the color—

I did & now its $9.45—

ate some chex—want a candy—

Probably make me sick—Ha—

Had a candy—where is my X-size gal? I'm ready—for electricity—not walking.

Now—TV—gonesome "Bones" is on—

& it's gruesome—a skull with 4 dogs—

this is awful—

"Where X-size gal?"`,"2013b_00132":`Nov 1st

Lunch good—eating in rice & squash—
now I'm waiting for my gel—no go—
decided no lady won't be coming—so I'll
take a nap.

Went down to see at saw Buck my first
ex-guy—forgot how old he was—Did lot of
ex by much visit with Ike around my
ego—also had to walk up
Back in my room & Castle still on
ate candy—watching it.

Almost 7 & I'm going to bed soon.
But—Rick proposed to Buck & I need to
know her answer—can't find my concho
new necklace—Pokey.

Sat. Nov 2

My "best" day—sunny
day—I coughed—put up stuff about
1/2 hour—Also left the water on again.
11:30 had a nap—then dinner—very hungry!
We brought me a super meal—beef + 2
large wines in cardboard boxes—my
"papers" too.`,"2013b_00134":`Mon Nov 4? Well - had a great trip then
now a dinner & heavy rain
TV has soup comm. now refug. &
hunting 18 ft alligators - Biggest in the world

The librarian is on - cute cat.
I have my wine - but I'm afraid I'm
getting sleepy
Now - another Librarian - I like
it -

Out time

Mon

Too early - Bernie only
came in there - She passed me
and didn't say anything - I said "you
can still talk to me can't you?" He - not sure
she heard me`,"2013b_00135":`This - Br. good - eyes
seen - in tired through &
sleepy. Chris should be here
again. It is there.`,"2013b_00136":`Oh yeah - she heard me - wanted
real big to me - take your me cream
for my coffee -
I need to put outside on my clothes -
Most of them already had them - thanks
to Leslie -
TV advertised child - now found a body
by the river -
Guess I'll Color! -
Guess I won't - except young
Cape - had to walk - so painful, but a short
lesson. Good - got a 1/2 glass of wine,
own store & got 2 new mix and
cute olipin eating for $.50 - how little pearls &
gold -
$4.00 - Hooray - my honey Castle
be on - someone death - you get
raped & put in a clothe dryer!
"Castle" good - I stiff murder -
I need to go to bed -
The
up at 7 - went to Lincoln
room - no one there - clock said 6:30 - but my clock said -`,"2013b_00138":`Lunch room in AM - 7:30
I ate my last honey bun -
OK - napped - woke up sick, took
tums & crackers. Then fell asleep
Lunch chick fried steak, mashed potatoes
gravy, dessert fruit -
"Bones" was good but sad. Boott
has his smile goodfather playing with him
but he starts a fire by leaving a
towel in the oven. He keeps saying it's the
oven's fault.

Good - Castle is on & I
think I saw it - Picard & haven't seen it.

(Was too late?) went to lunch room
too early at 6:30 -
Ghost Dean are on -
NOW - commercials - cherio -
I had a good breakfast - same old one -
Saw Dan have a "Ghost Ship" an old
Cyper Ship.
Had a nap - its 1:30 - took off
my "itch red stripe shirt" put on the neat
grey with silver "studs" around the neck.
TV is a murder story sick good looking`,"2013b_00140":`guy gets turned down on marriage proposal so
knew about murders (26 still unsolved) the lady

May just came & said I had an appointment
with Delbert Stein at 1:30

Wits was dinner and 2/5
So - an hour to kill -

This place in seedy, Denis will
be too soon? - just as he's there when
Sibb is -

Back with bad news - stupid cancer
is still growing! Have to go back in 2
weeks! Oh well - I'm on antibiotics for my
cough & throat maybe pneumonia -
Life is strange huh -
& sleepy all the time, This cancer
isn't going to be a piece of cake -

Half my eyes got here - went down to
basement and just finished - 1/2 hour, came home
"Castle" is on! Good - saw it I think
No - it's just art forgives - now another
one's murder at a wedding -`,"2013b_00142":`4:3 Weather & Time

I find myself thinking more about death than I want to. After family dinner was back—it's understandable.

Can't leave a message for &—guess I'll call him to vote on cell phone.

Good Girl!

Washed my hair.

Nurse came in & gave a strange looking pill—I asked what for? & she said "Diabetes" I said "I don't think I'll take it." The next nurse came in & said it was either Alzheimer's or spells of seizures. But the next pill was anti-biotics that Dr. Silverstein recommended.

Sat Oct 9?

Not sure of day—too early for coffee so came back to write in here. Found another channel—43—

TV is goofy—some channel just stuck with a picture & no movement. Note—I can't exist without working TV!—It's OK—it's 3:30 & I found Monk on 57—& got the greatest card from`,"2013b_00144":`Ruth - a pie (commercial) of all her grand-
great-grandkids - a sweet card that says
"Be fierce & relates to cancer - &
20% in the card. I called her & thanked
her.

I'm debating asking Dr. how long do
I have or not. Don't think so -

Sun Oct 10

just had a laughing
fit with Sheila's. I was trying to
get her cell phone no & getting it
wrong. She'd say Nooo - its --- I'd
say --- & she'd say noooo - So I
said you call me at 10 - same deal for
Ruth only 11 -

At 3:30 - got my first trip
color

Mary popped in & said Earle, in 5
minutes - So I got down there but Bus Driver
took me. It was AWFUL even using a
stick but she got a great big job out of &
manicure! I had a list & even got my hearing
aid - everything is LOUD - I even had a
valium - anyway I hope it wasn't my`,"2013b_00146":`Castle tonic

New hearing aid in - so nice to hear stuff - maybe too much, or I'd get used to it.

Had a good nap - not too 3:00 - 9:00
"Castle" on TV, hoped it's on -
Another "Castle" - I've had 2 wines
Then bed after this is over

The next day
Well slept awhile - watched
Sam & Dean - had some wine - Nurse is supposed to be here - I need stronger pain pills or more -
"Pones" is on - I'm having chex mix & wine - Better quiet wine -
making me sleepy!
Went down & got some jewelry earrings mostly, a cute skull &
red eyes for Connor

The shot
Mary just came in and gave me
a few shots - no big deal
I said down at 3:30 let's go
new "Castle" is on now - or wine
& a honey bun -`,"2013b_00148":`Supper OK—rice & beef + plums
2 Candies + after the show—BED
4:30—So its 6:30—BED—

Wed Oct 13 Be good as usual
Dr here today so I'm waiting
out pretty soon I'll have some wine

Mary asked me where my hearing aid
was—Asked her if she too loud so she
called Roy & talked to ear dr.
She said she gave me the option of a little
box to up & down sound—to tell Mary at in
a separate box I didn't want to bother
with—so she said "try at later" having
a little more wine + watching Bonet
then a nap—Told Mary I needed
stronger pain pills.

Well had nap but exp gal
woke me up—so went down + exp machine
my legs for 10 min then she got walker
+ I said "NO" she tried for a few min's
then gave up & did paper work.
She asked me if she got me up
the range could I get to my room?`,"2013b_00150":`and "Sure" — so I also said "I think I should have to the say over my own exercise" — I came home — Boris is on — I had some wine and a twist — I think "Castle" is on? It's only 10 so maybe not.

& went to supper — OK — Chili and melted cheese sand — John carried it in here for me!

Thursday Oct 14

Lousy but no eggs or bacon, toast & cr of wheat — Today I asked Scott if he knew I had cancer. He said "Yes" but the other day he said "Where you been? I'm missed you" — Love that man. Guess the color.

I've got some love times cards down on P-week — bought them up & sprinkled. Once I run the glue and looked down at my left hand was holding the glue over my clock guide down! Changed & washed them!

7:50

Choked but good as usual. Almost though. Choked on my 8 pills there now. Good story. Pain pill is`,"2013b_00152":`Oct 14

I decided to get some excitement in my life—a happy hour and get 20% scratch off of 20 beers at Harp on Sat night. Bernie can push them—op! I should have some sort of care—after "Bones" at a nice place unless it's Castle.

Well—130—more beer and TV—I'm going crazy—there's no more food—good.

Now how did I find a pan-fish worker? OK—"Castle" is in a stop opera—no one in kitchen at 5—so silent until 5:30.

Supper and late—good Polish sausage & odd cucumber pieces with tiny shrimp—pepper for heart—lid candy at front & lid open—still Castle on.

Oct 15

Bernie came up and 1/2 + forgot scratch off—more thanks—no way.`,"2013b_00154":`Sun Oct 16

All my "parts" are aching—shoulder elbow knees etc etc & got wine & per butter & crackers—made all my cards—even some for April (a dog) I'll keep it.

No lunch but I'll eat supper at 4:30

So—cup of wine & bed—
Took the cards down
Back up TV—also color. Died—
TV has looking for "Big Foot"—one couple found his hair—black & red tints—& ran right past them. Glad I'm 3 stories up (and no tornado!)

Denise needs to buy my legs back—

hearing aid—

Mon Oct 17

Up at 7:20—bt good bacon and eggs etc & was so conserving
felt like passing out. I told nurse be sure
and get in School Sitter. I almost passed out
TV—saw it—about "killer" of women—
comes back & puts make up on—my shoulder hurts—
Denise brought up my hearing aid—
It's great but I'll send on 3th in Spanish!
She hung up all my clothes for me`,"2013b_00156":`Castle-tonto

From Sheila—She sent a huge box of the greatest clothes—skirts, tops, a gorgeous jacket I lost a cute stuffed penguin push him out.

Tue Oct 8

Well—I got my hair in again—I'm leaving it at—

Wed—

And my camera but still no glasses—how will I forget how blind I am.

Better tell Denis

Wed—Their TV—Castle is about watching

This one about the bombing turned on the lights

Almost 5—

Sat Oct 32`,"2013b_00158":`Fri Oct 21? Still no glasses tomorrow, and too loud here. Tomorrow's taking seat. Chipping nuts good - this taking a turn. I'm getting a hope, led with aim builders. Can't see just had a good nap.

11/15 -

Well it's 23° and another bone is coming on - then cuttle. I need my glasses!

Hooray! Denis shook out the covers and here are my glasses! However his attitude about me dying etc is pushing me off. Oh well - boys, Mr. chicken legs & wine - but not now.

Watching TV movie saw before but very good - Dr. Loring Jr. better episodes.`,"2013b_00160":`Monday Oct 24

What a day—was sleeping. She woke me up. I said EAR
ON! WFTS went down stairs too early—up the
bed down. Then Denis poke in & everyone
agreed it should have been shown our
drops 2 or 3 times a day & a volume—she
was a good digger but still took in there—does
I'll get drops again for another week—
TV has "What Wars" & Dog fighters

I checked again on their orders to
Joe's bed—just now nurse said they had not
she didn't know how long it took
Diana D. was here—the wine is gone
Ex. size gal was here. I will be
back well off. She said they are
taking all the ex. equipment & moving
it—also make the floor east living—
anyway I got the little spotifier to work
back forth or cycle.
TV—boy kills his sister out of
jealousy—`,"2013b_00162":`After Thanks - Castle all day.

Supper: OK. Bar B Q, and it smokes.
+ good brownie for dessert.

Castle always good.

It's 9:30 pm - Breakfast OK but no hot eggs or bacon. Came back to room but want to go out. I look for "cat" sweater.

Went down to NO ONE there - not clear on snack from POOLY + NO cat sweater. Clothes man said we're supposed to pay for those "hot" green hit list. WAS
I wanted that sweater - how much is it?

Not sure what day it was Wednesday I think.`,"2013b_00164":`"Castle" just came on
Please it will run all day - I feel sick - ? Better now? But hungry,
I sore all over, especially my neck
Neck & shoulder (always) - I "sparked"
about 20 cards - a new "Castle" on - Guess
I'll clear -

Thanksgiving Oct 27
had a scare! Denis called me & I put by
heavy and down then couldn't find it - but I
stood up and moved from there it was - ON
the floor. Thank God! After the
glasses from dj loved killed & now
he'll never know!
"Castle" so cute & also my
favorite pig. Ha -
didn't do anything but my dad
came over at 5:00 with a plate of
sauce food - he also brought a box
of mini bars and 2 pints of honey
June - OK Denis - I wanted to play
double but "NO" he didn't want to. So
about 8 he left. Such a waste!`,"2013b_00166":`Mon. Oct 31

TV has cartoons, I'm not wearing my "sparkle" sweater. Lots of comments on "Harry Potter" is on - shall I watch? I haven't seen this one.

I was so sick last night - I got a "kayf" can to try in! Couldn't do it.

It's 9:15 - I feel OK.

This place stinks!

I'm sick again & I go ask for pills. Nurse looked up on comp. "Nothing on here for you." But I got some not too long ago.

Anyway - my phone is working.

Took a Crockett tablet - I'm watching "Harry Potter" - it's good.

6:00 - guess I'm not going to enjoy bed.

"The Birds" is on.

Povesh - Penny Day! Sure hope she brings the Tiger coloring pair.

TV - "Cold Justice" on - Don't`,"2013b_00168":`like it. Come on "Castle" —
how farmers + ways —
I feel lousy again. But
had a mini-milking.

TV — a corny movie — am girl in
need to be a heroine to a crown, only
person is cute guy in — speech,
was so predictable I knew
a little diff.

9:45 A.M. — Cold coffee up.
I actually got a battery in the
hearing aid. The battery store
always sell not longer down at / Almost
10 —

got my 33¢ — good —

"Castle" is on. Have to see
it,

Supper OK — turkey + noodles — pie + chocolate cake. Bed time —`,"2013b_00170":`Tuesday Dec 2

Bacon - little Alice good supper
& got my silverware - no doubt he was
early, need to call hotel house
Guess I'll color -
TV - Symphonia & Demons - Oh boy!
It's 9:30 A.M.

Now 1:00 - mixed lunch - I guess
"Bones" is on - still I'm hungry - So I'll
be sure to go to supper at 4:00 - Bones is
good today.
New murder on - funny -
Supper OK - a sloppy Joe from beef?
+ asparagus & pineapple also ice tea - now I'm
back in my room -

I can't get Ruthie - just my phone
or here -

Wednesday Dec 3

Took D. about Ruthie so &
hope he calls her - B. good but no
bacon, stat & my pills etc. Also
stool softener! - TV still clean & demons
TV still clean & demons - I was
worried my hair might be gone
there or hood -
Chased by "Vampires" Men & women!`,"2013b_00171":`Sunday Feb 23 Lunch OK
Cheese & ham - nap now + then more coloring. I HAVE TO take dishes etc back - about 7 or 8

Mon Feb 24 Took them back
& then colored. Did a darling kitten in a hat &
flowers. I need more colors though.

Wed 26th - Bone set on - then (I hope) Castle
Ne - but of course it's not
this OK.

Dinner awful tough chicken
couldn't eat it! Also some
half Cottage - tried the Eagles but needed
a good blue color

(End of entry)`,"2013b_00172":`These "Bones" color—
"Bones" is on + gruesome turtles
eating off burned flesh—
Dinner still eat a candy bar—
It's 1:00 PM—"Bones" still on—
Checking a bear stomach & leftovers—
+ a man had gone up—"Wish Castle"
would come on—But this is good too—
"Bones" still on—
Boy missing—a lone little bone skeleton
Sad—
Just had a great shower—
Hair wash—now I'm hungry—
Goofy Sci-Fi more on—Robotech
Bed soon

(Thur Dec 4) 6:30—
Meet my eye—
TV is stupid!
Wonderful book; even bacon
TV is still stinky!`,"2013b_00174":`Where is Castle? Hi

Sam & Dean are on - Sam is soul-less
Ha - But Dean will get it -
11:50 - up from nap "Bones" is on
and funny! they go to a nite club &
a cloud of meth comes out of the
finds a mummy! One of the D.S.'s at the
Club - was murdered with meth.

Had a laugh. Nurse came in
and I jumped 10 feet & so did she - she -
She didn't know & was very jumpy

Castle is on tomorrow -
He is on now - But its still
time - 5:30 so Good night
Had a good talk with R twice - &
do her good test now I can call more -
Sam & Dean are fighting
for fairies (watch fire)
set gills = 'school afternoo

"Bones" is on - again gruesome!
air cold, so noisy I had to turn it
off`,"2013b_00176":`Sat Dec 7

Denny Day,

Please bring my Tigers! - 20 until 10 -

TV - Denis called me his car wouldn't start - I had a feeling he'd not make it - BUT he does have my posters (not tigers) & he'll be here about 8:00 tomorrow morn.

TV has sloths - they are cute!

TV - good show full of gadgets, glees and grip breaking in a few & not one about it.

TV movie "Catch Out of You Can" - I'm taking card trick

5:45 Bed - tried to think less and sleep here thrown - will see.

Sun Dec 7

Up at 7:00 - had good breakfast bacon etc. - TV - movie not good - "Swage" - is dead + a ghost.

I left cards on the desk downstairs - Hope they don't`,"2013b_00177":`Valentine's Day

Castle on

Something tied me to Cook
In refers a bottle of wine
Ha— from Denis!
I called him I thought
him for my valentine— Ha!
Castle— long distance
shooter of people— they find
him—
The wine is good—
but need more— Ha—
I wrote Sheila a sweet
letter telling her how much
I love her.

Let's about Kate &
She's such a good actress`,"2013b_00178":`take them all.

Sci-Fi movie on. — End of world thing. Enemy little bugs—everything stops.

Went down & got puppy cards OK—accord to Char—cards.

Back up—now common cards Another Another End of World—no—a Xmas show with Santa Claus etc.

Now—car ads—snowing again only 1:00 after Denis said did bring food at 5:00?

He did roast mushrooms—& a pop!

P called—& have a cat soon at 12—`,"2013b_00180":`Dec 16 ear

I had a terrible awful BM—
round hard marbles. I need
strong ate stool softer or
a laxative pill—

I'm back from the CAT scan—
not too bad this time—I also got my ear
drops an apt the 16th—so glad
to be here—need a candy bar—got
a snicker down stairs. We had about
5 or 6 comics on my bed shirt (spelled)
lots of them men like it! So go it!—
gonna try & finish my dragon!

I did (finish it)—now "Don't Den
are on in the "old west"—verse here
with ear stuff—He's checking on my
ear apt & getting me a stool softer—
Still don't know about ear
appt.

Had a nap—"Bonnie" is on—
Castle next I hope!
No Castle—that stupid "Bot Man"
movie is on. So goofy & not
funny at all!—Also in entry`,"2013b_00182":`Not sure what date or day it is. I am clean even on a lot of drinking (what?) on the show. Need to clean up or mess. "Kitchen lady" came by just in time to put my dishes on her card. Good almost 95% I'm tired almost asleep here came ex gal. Progy. Had to dress & do leg exercises.

Monday Dec

Well... the place is all Xmas decorations. Really cute - loved the rich coffee cake & didn't eat it all. "Dimmy" gave me my pills - ear drops. I put on my heart square. They call it a "head" patch for some reason. I feel LOUSY!

Got 2 chex mix - New Year's Eve.`,"2013b_00184":`Well I missed lunch but

OK. "Had dinner"

2:30 good nap - still can't sleep
still on - but I hope Castle is
on next.

My back was killing me so I tried
the desk & made that white pain pill
that "dunno" didn't bring - and I had to
ask for it - well I did ask about it,
I'll have to keep an eye on her.

Not a bad supper - noodle & ham
balls - (carrots yuck) red drink - she
helped me again - on the way out & said "kiss me"
to Scott & he did a kiss & spit together. He -
I'd kiss him in a minute! - tried to call
Ruth - line was busy, I'll try again
tried R 2 times - Bag or I have a
number.

Two OK. - I feel lousy but
better after I ate - not sure of the
date - I have epineuse today-`,"2013b_00186":`I guess I decided to send all the gifts in a boxcard.
Had a BM but nothing came out.
I ate a croissant & butter - TV is cute - Anthony Bourdain looking for special food -
Now Lynn called.
Well I got tired of waiting in the hall (in my robe) for a damn shower so came back in here.
So where is she? NTS - I'm not patient - thought exercise was coming too -`,"2013b_00188":`Saturday Dec 14

Dinner came up - food & coke

I talked to Shawn - they got Cole
a car (a cougar) - Mike sat
me 20¢-

Sunday Dec 15 OK Boi

Slept until 9:30! - after breakfast
found out I could use milk just like
glue for my sparkles - OK-

Boozy movie on my 36 -
Don't think I'll watch it. I took my
dancing penguin out & down & anyone
got a big kick out of him - except Scott &
he was gone -

More his Chinese guy & black
man Comedian - Funny -`,"2013b_00190":`Mon Dec 16

Well, that's right

Mon, no eggs at all, bacon & hate

that - well - John carried my tray out
Scott got me sugar & a banana -
90 years old & 2 boy friends - ha -

Good news! - just got back
from Dr. She got all of the toys out
of my head ear some pain & dizzy - So my
driver got me at any time home
Having a banana -
$1.00 off - had a nice nap
Stupid TV show on - new cats -
Red Lobster corn -
one of the nurses said "they
want you to use your walker" - well - I've
been all through that. This time

I got a precious card from April -
momma cat laying down with her 2
babies. Darling. I'll call her.`,"2013b_00191":`I hope police get her.
Now an older man is abroad,
2 years & no parole
Good

Thur Feb 13

Didn't sleep good - worry
about bed & sink full
and towels
Got my fills but forgot`,"2013b_00192":`Castle Towns 6:00

Tue - Dec 17
I think I go to cancer dr. about my cat scan.
Hope its OK but a little nervous about it. I'm telling Denis I WANT a telephone so I can talk to people - Ruth & Sheila

Sam & Dean are on Voo
Doo & magic -
April sent a darling card of a mother cat with her 2 kittens. I said this cat is so cute - corny
TV Sam & Dean -

Got fills -

Had leg ap. She'll be back next

Thu -
TV very silly
Nurse just told me appointment is
1:30 - I'm nervous about it
Que sera sera -`,"2013b_00193":`Tue Feb 11

Stood by my bed oh well— I am out of TP. I still need my pills. Have ordered be right here.

Finally got TP. 1st pills,
8:42— Still 2 days without honey buns & candy bars— Nuts—

Its 9:25—I went down & got 10 W out— got chocolate Hershey’s & did my exercise.

Wed Feb 12

My clock goofy and said 10:00 am— at least probably 6:30— oh well— where is Ruthie? TV has bridges— I guess getting old— his new people furnishing them kids real bad— now who are killers of nuts.`,"2013b_00194":`Stamps are $4.

Good news—there are still a couple of spots but they are stable! Just stay happy & enjoy.

"I do" I said so bus brought me home—Denis was but at last minute they wanted me to take the bus. They kept me at a heavy dinner—
The grand weight—151—bit etc., we so enjoyed it had a good dinner! Me too—the

Wed Dec 18

Up at 7:30—had bus, had eggs—good
my back was killing me but got pills & had a big BM late better & sent the
Ride 5$ each—they live in Alarmit
Florida!

I have a shower today—stood,
I hope the old gal & like gives it to
me she's fast! Not here though. HA
Caesar (my male nurse) gave me the
shower!—Sort of embarrassing but not really
because he is so cool & nice—also made`,"2013b_00195":`"Castle" was good but dry
seen it—probably the
next one too

Supper was good—chicken cordon
bleu" at press—apples at supper
dessert.

I went by Sarah room—she
lay in bed.

Cute Castle with Big feet in the
story—how he & Kate
fell in a big hole! Kate left!
Now Castle sees a shaggy figure
at top of the hole—a guy in a suit to
scare his girl?—not sure—difficult

Story now.`,"2013b_00196":`my bed really nice. Lost my clock though—
must have fallen in the crack behind my
bed. Now he just sat on the counter.

Poor Booth—like getting beat up danged
around. But they found & rescued him.
Now is the girl that saw the
crime making friends with one of them
not knowing it.

(Thur Dec 19) Worse over—all
killed—mostly—my back hurts. Well
I have a (new-old) problem. I have to
walk to lunch or—I don't know
what or—is it tell them" if I could well
I would be—I'd love to—Can't—

Dean & Sam are fighting demons still—
I wonder what they want me to
do?

I've decided no more shows by Cassie—
he's too young & good looking.

Sam & Dean pretty bloody!
Had good BM & now my back
feels better—also got pills for
pain. Poor Dean is alone in
Purgatory.`,"2013b_00197":`This is now I'm going down this morning but her about my hoop, but oh well— I'm too lazy.

TV has bones—a young boy is dead—I think they found out the brother did it—no—a grown up sat on him & broke his ribs.

There is a pathetic deal going on here—Karen Olsen is a poor woman baby she's been laying in the hall on a wheelchair for 2 hours. I went down to complain stupid "boss" won't even—so I told Shari & she said talk to Heather—no she sit there sitting stupid Alice gets about`,"2013b_00198":`Q.R. If they don't have anywhere to put her— but a cleaner out here said they are working on it!

NUTS - I doubt it.

Jug at the desk just said Karen was in bed— Ha— I was told she can't be in there alone— But one gal said "She's going to be taken care of" I hope so.

Castle is good but darn the rain it— probably 2 times

Wrong page go to forward one`,"2013b_00199":`Sunday Feb 9 2014

I'm desperate for $20
had the back pages of the old diary ripped - watched TV - went
to damn toilet at least 3 times
late 5:13 - Jim watching
"Sherlock Holmes" movie its
funny
I'm going to bed at 6 -

Mon Feb 10

Up at 6:30! I have my robe
on - I got dressed & went in
I got coffee - told Scott I was
taking it back to my room - not
sitting in there 1/2 hour - finally at
7:45 got br. Extra good - bacon
+ all
Jim back in my room now
& TV a comedy - "Hills of Frasier"`,"2013b_00200":`Friday Dec 20

5 more days until Xmas

Well it's interesting to see what they will do to me back down to 2nd? Hope not! Oh well.

Kind of interesting topic - let have them talk to Penny.

My back hurts now. Have I said go to sup. at 4:30?

Sandman real bloody - got eating a human heart - Eek!

Or this sat? I think so.

I need wine glass new at the store.

Paring Knife (red apple)

Shawn went at sup - will you know.

Just found out its Friday - got a pic to color but its the same.`,"2013b_00201":`old dragon. Oh well

My cute nurse Chuck thin
flying tied me to go ahead at eat in
my wheelchair in the lunchroom. They
tied me where Caesar was but I
didn't get it. Got a package here
from Shawn too. So save it.

But Dec 21st Danny boy - just had
a good trip. I need a
desk lamp. Also need a
towel so I can wash my
hair!

Couldn't fix my hair so
I'll have Denis try it.
He did so I'll just keep
wearing it. TV is an instant
"fighting" family. Denis clean
up everything here & throw
a lot away.

I need a mop at 1:00
more next year

2/04`,"2013c_00001":`Monday Dec 24

This isn't a very good diary—too little but, one mystery solved—Casey is back! Good—just took some time off he said. OK—now shower still there in question mark. Also ck from R.

I have money! I cashed my ck from R at the bank—how? What? I think a ring.

Boy—these Lutherans really do things up right! They led us to a big room and "pick out 3 things"`,"2013c_00002":`Perfume "Obsession"
A red fuzzy lip robe +
Cute soft slippers - zebra print &
Fake fur trim!
Also supper was good
Mashed potato gray - great
Bean soup - effect straw
Jelly short cake. All very
Super - another note is
in order -
"Boxer is on and a
funny one! Castle next
I hope. He was / He
and Beckett almost
Freeze to death - found
just in time -
Wed Dec 24-
*mas tomorrow*`,"2013c_00003":`I feel awful—Denis is the only one I'm getting a present for—maybe pencil set?

Lunch smelled good but was awful—fish or liver a huge piece—Cattle! is on tonite—good!

Well—I took the left elevator down and again door wouldn't open until I kicked at a couple of times! No more "Bone" is good today.

It's cold & windy out and lots of birds flying`,"2013c_00004":`aminal,

Leris - will be here

1:30 dinner after

So Be Ready—

Christmas Day
Dec 25 2013

I need coffee. Got
it at breakfast (with Scott)
Eggs but not bacon — oh well
remember Ruth & I
having to wait for
Grandpa Hartley to put
on "long johns"`,"2013c_00005":`Not bad — the food was super — ham & potato
wine — now I'm back
"home" — watching "the Black Pearl" — Pirates etc.
Had a bad time finding the remote —
Well — Mike sent me $100 &! So I have $156.48
To do what with?

Nuts — Lost it — did again! + lens?`,"2013c_00006":`Good! - H-and found next to my clock - pulled it out with a pillow. Good won't tell Denis - & + Sam are on + Dean

Now - Sci-Fi with "The Librarian" (cute guy) So I'm O.K. - but glasses are still broken. Patched with tape. I need glue or nail polish.

Now - back to "Bones"`,"2013c_00007":`Friday -

Finally got up and got nurse to get me pain pill (strong) she said I probably had flu - why didn't I think of that? Got coffee & honey bun - I'll ask D. to do my shopping for me - I'll be glad to probably - go without me.

"Sam I Am" are on. Lemons & crap I need more coffee.

Woke up & found pills Jill brought me - took them and decided I did have a touch of the flu - feel better.`,"2013c_00008":`now - It's Fri - hope Denis brings me a hamlet tomorrow
+ NO mushrooms - sick of them -
Castle on at 6 - "now"
"Bones" -
3:15 - "Castle" is on now. a repeat -
But -
not sure of the date
Dr. OK - no bacon but large cr. wheat - toast & coffee OK.
My back (left) hurts -
8:19 - 49° + 51°
Will call Dr. at 10:00
Called Dr. & asked for glue to fix specks, also a hamlet. He said OK. Good`,"2013c_00009":`Big 'hunk' movie about
Cath Church + book
called The Divine Code

The Pope was murdered
I need to go to bed - and my
back hurts again.

Sunday Dec

Well - next Sat & B.M.
taking me to Wal Mart to
spend my $156.00 - Hooray -
Need 2 dog presents`,"2013c_00010":`Well—s wrapped
Africans arranged with
mail in AM
I'm watching a
funny "Rango" —
guy cartoon.

Mon—NUTS—
just dropped my
cup on the floor
under the bed.

Now "Bones" and
it's about dog fights—
I hope Castle is
next—?`,"2013c_00011":`it went-

yet ate 2 crackers

P.S.

also washed my hair-

"Bones" is on & funny-

not sure what day it is-

Good br. no bacon-

TV has people being drowned by a demon-

Sam & Dean on it-

a demon in the water- drowned people for revenge?`,"2013c_00012":`Now - demon in an airplane crash on Dean & Sam. Dean is scared.

Just found the demon.

The TV has "Moonshiners" makes illegal whisky - mad because it's legal to make wine but not whisky.

Ha! Not a free country they say. Ha! As if we could just do anything we want to -

Got a Coca Cola - no Dr Pepper - poopy.`,"2013c_00013":`Tell me on Wednesday how to label & bottle it. But toothless gets can't I think the stuff blow up?

If I had any career from asbestos of get money—HA!

Cute movie on "The Librarian" "Noah Wyle"—to jail from cast was the heroine!

8:00 - Jan 1 <web

Snow! Lots of it!

Good lot (as usual)`,"2013c_00014":`Jan 1 2014

It ain't not working.

NRS - Caesar just brought my pills.

It's 11:00 - Lord of the Rings just came on.

Caesar just told me its shower day - "By a lady of hope" - He laughed and said if you wish - "I do - nothing against you - just feel more comfortable."

Caesar can't find a gal to give me a shower but I just turned him down again. "I can wait some more."`,"2013c_00015":`Jan 1 2014

It ain't not working.

NOS - Caesar just brought my pills.

It's 11:00 - Lord of the Rings just came on.

Caesar just told me its shower day - "By a lucky star hope" - He laughed and said "your wish" - "I do - nothing against you & just feel more comfortable."

Caesar can't find a gal to give me a shower but I just turned him down again. "I can wait some more."`,"2013c_00016":`"The Twin Towers" & Lord of the Rings is just over. I need water.

Then Jan 3?

Not sure about date. This morning I had put my hair in the clock and it fell on the floor! I got it thank goodness!

Br. O.K. - no bacon but eggs but cereal or of wheat - get more coffee I'm in my room 'air cond. too loud.

I have a list of 5 things I need - one for Denis.`,"2013c_00017":`Last alarm was on a
the "Bloody Mary"
show, I have to
take a shower this
morning.

Exercise just left, &
actually walked 8 steps
with my walker! Still no
shower yet.

"Povesh" is on. She
just fired her poor dad - she
is a "bitch".

Well - I called Denis - I
reminded him I want to go to
Wal-mart tomorrow.`,"2013c_00018":`Pretty sure he'll take me

"Custle" is coming on a repeat. I went down and got a "cherry crush" pop - it's got pop in .75

"Custle" is a repeat but good - I left a little pop`,"2013c_00019":`I called Dr. He's
coming Sat
I'll go downstairs -

Friday - Jan 2014
good by, Wal-Mart
tomorrow - Good!
Had er. just got
pills + patch -
Sam + Dean on -
On Indian "curse"
with bugs!
Now Sam talk
Dean to go back -`,"2013c_00020":`Cute, new alarm
caught in the sink,
Sam & Dean beat Dad
spirit

"Castle" today —
Spooks in story
now — ghosts in closed for
insane asylum? I'm
getting sleepy again!

Lunch good — chicken
cabbage, lemonade & dessert
TV —

Now — 3:00 & a cute
"Castle" is on x repeat —`,"2013c_00021":`Castle is good - Beckett almost falls off a bed.

But I'm so glad I kept watching - it more or less ended she said "I want you" & they kissed too. She decided to stop looking -

This time place - they decided & had to take my own trip John credits helping? there is a lot of jealousy going on here -

WVTS

(put) Wal Mart Guy

good -

Good good egg +`,"2013c_00022":`Bacon

I'm ready for D.
(at 10) Ha - I have on my Guatemala T-shirt & jeans. Ready to shop just got pills + heat patch.
Pretty close to 10 & think.

Ruth just called & we talked & told her I'd call her later & tell her what I got - the card OK to a scarf.

My little finger ring size is 5 - the other finger is 7 (I think).`,"2013c_00023":`I got pretty mail today
sort of - rose - address book
desk lamp - scarf for Ruth - I
still have 50¢ left with Davis
and I have 60¢ in my billfold.
My nightgown is a
neat soft cotton tiger head
neck!
TV was all "zombies"
now "Batman" is on.

Mon -
Didn't go over until
7:45 - work usual hrs.
I need to rival Ro
scarf. I'll just take a
dollar down.`,"2013c_00024":`I left it but Char. had me keep the $1.

That creep stealing & locking away kids.
They catch the father in the act.

Now a young guy devil worshiper or against it. Anyway a young pretty girl—

Still FBI stories and "members" killing innocent "devile wives"

Ey Soda! How did I make it 90 years?
Especially living dangerously like I did.`,"2013c_00025":`Taking a strange guy home from a bar for sex — he was nice or he could have murdered me & no one would know it.

In St Louis — never again!

Lunch OK

Meat loaf, meat cheese & pie — had to go all the way down to full lunchroom.

But better follow rules HA —

I need to fill out my new address book but I'm so lazy & tired!`,"2013c_00026":`Still watching TV at
"Storage Wars" - bidding for units
unknown - mostly
people - $2,600 & no idea
what it is!
value $50 cost $6.00

TV - Kidnapped girls - one
dead
now another murder - by a
friend -

Now TV show
of French girl & Nazi
gay in love with her
poor thing -`,"2013c_00027":`Almost bed time
Good - I'm sleepy

Brad Pitt had a small part in The movie as a German Nazi.

Mon
Jan 26
Up at 7:30 - nice chef fixed my br. Took it to my room.
I need more T-shirts
Guess I'll go to thrift shop late (or have Denis do it)`,"2013c_00028":`I want to TRY and walk today. Eeek! —
12:15 I should go
eat — poopy —

Castle on Torvato
Good — or 3:00 + 4:00

Spentots — they had me
go to the kitchen (bounced)
Get my lunch — not very
good — tough steak — big
pretzels & cold noodles!
orange jello for dessert,
with fruit in it.

Just had a huge BPA
yuk — So exhausting
glad to know`,"2013c_00029":`It's Mon.
"Castle" is on! - stock!
No more sleeping or I won't tolerate.

Poor Castle - arrested for murder - of a cute gal - of course he is innocent -
It is more nerve wracking - he going to a jail where this jerk (Tyson) paid someone to kill him -
Hurry get over!
They got away of the drowned (maybe)
Castle doesn't think the enemy top (Tyson) is dead -`,"2013c_00030":`This morning at 7:30—ate my good breakfast. I wonder if the exercise gal will be here to help me walk? I think this place is about to close. I haven't had a shower for 3 weeks!

Sam and Dean are on. Dean and Sam are dressed like priests! Ha

BM
Had a good BM
Need my pills
Found out I have to ask for my pills now—they aren't on a schedule—Poor Dean`,"2013c_00031":`just got killed - sort of no he didn't - nutty kid killed himself.

So - what's this place doing? I'll ask Regina if she's getting paid.

Try us on - it's 9:00

So far no new gal.

Had my pills - had to ask for them.

Regina here - took 13 steps - did exercises next week try 20.

Now 600 per woman.

Up from my nap - it's 12:45 - Bones is funny.`,"2013c_00032":`ate a lady Ruth
(mini)

I don't believe it!
I hoped there might be a cake in there too - I looked in a BOTTLE of wine!
Chardonnay? Denis?
Anyway I'm having it!`,"2013c_00033":`next time

Lipper OK but rice
& no bitter, B.B.Q
sandwich threw most
of it away. Dessert good
fruit with marshmallows.

Time for bed ——

Wed? Having a honey bun
I NEED coffee —
surprise — it was in
the lunchroom early 7:05 —
Coffee I mean! So back in
room — had my pills. They
are every 8 hours!`,"2013c_00034":`Well

Had coffee - Sam and Dean - fighting a ghost "mordecai"
They burn his house down.

Commercials - "trivia" isn't enough.

It's after spoons with long dark fingers at a Hoop - The Dr. is evil!

A new "Dallas" is coming on - I won't watch it - don't like it -`,"2013c_00035":`"Well—someone doesn't—Sam—
Let's kill this spook!"
They do—it's just ashes
& smoke—
Think I'll go to bed and
sleep—after this next show—
Now—a gruesome
Bones—a wine keg with a
body in it—& she wants
a baby with Booth's sperm
Ha—
I was a good girl & washed
my hair—
It was a funny—The
smart girl wants a baby with
Booth's sperm. They
have sex—Ha`,"2013c_00036":`Penny (ex-girlfriend) was here & put me through some exercises — help to tense my back & had me stand up & lie back up. That hurt.

He left — I've been drinking a "Canada Dry" pop & got downtown. I think I'll go to be again!`,"2013c_00037":`Outline for cast:

Bones is attracted to her boyfriend saves her, & I guess they admit love-like Castle & Beckett.

9:00 - "Castle" on TV having crackers & pea butter.

"Castle's" plot now has blackmail & a baby in it, a 5% trust fund.

Beckett need to decide if she shows either to her boss or not.

Not sure what day it is.`,"2013c_00038":`Well - I was Castle in
Gren - But Alexis in Rodrigo
along with a foreign girl

TV is about shingles
yeah tell me about them
also rheumatoid arthritis
medicine for it with lots of
problems too

C'mon Beckitt - get
Alexis out so I can
go to bed!`,"2013c_00039":`The exercise
how do I + vampires
Toey -
Took 22 steps
so - 8 - 13 - 22 -
So Regina & Penny were both here.
It's 11:00 - almost -
time for lunch -
"Bones" is gruesome again -
Lunch OK - chic. leggy +
pot + apple collard greens! -
so - ate the chic + pate -
passed on the green came back + having a mini Baby Ruth -.`,"2013c_00040":`Just got up from a nap at 1:30. Bonnie is here now, running around like a murdered lady.

Now Castle is with Alejia. Kidnapped her grandfather (or something). He was a spy for U.S.A. Now Castle has to go through a sewer & cut wires to get Alejia out. He does & meets her dad. They all get out OK. I'm ready for bed—supper? Don't know.`,"2013c_00041":`Alma

Bring 2 little bottles

Supper? Rice good but meat TOUGH-

Friday Jan 10

By weird! - a twist no eggs - forgot milk so no Cr. wheat stuffing instead of toast - oh well - back in my warm room with coffee

Dear Dean - Dean is really sick but his "ghost" is roaming around - also a bit dying - no one is helping him. He's cold and smashed`,"2013c_00042":`"I Castle" on tante or tip.

I finally got Ruth -
I thought she was a man
she said Mary Mary hang on
to me - she got a cold -
sounded like a man &`,"2013c_00043":`Ruthie tel No.

(1-865-774-1262)

note I have to say hope it isn't a torture deal. If was easy! quite a bit too! well dean is alive but Dad had to die. forgotten name (Dean Dad) but he's a good actor - Xanier something

Ruth & both have a cold - (twin stuff)

I got more coffee in lunch room

TV - Clowns as killers
& they hunt kids now
need to have Denis get my dang to work`,"2013c_00044":`my back hurts - & need to prop my left leg up

I took ate crackers & cheese - Lunch at 11:30
TV > about missing girl
& foot growing -

Back to Dean & Sam
Dean kills a vampire.

Now "Bones" It's only
10:30 -

Lunch - popcorn
supper - shrimp
diet root beer (no butter)
coffee - cake`,"2013c_00045":`Bones still on but
"Castle" next—good /
Booths grand father is
dancing with fat ladies at every
it—Ha—
Now eggs drowned in
Cooking oil + show fat dropper
off bones—yuk—
I keep sneezing
Show almost over but
"Castle" next—damn!—I need to
nap.

But yeah!

By good—only one egg
but super bacon—+ 3
pieces—I'm going to eat`,"2013c_00046":`Sat Jan 11

Denise for an Arby's or Panera -

[Signature]

Denise

Panera or Arby's
double play & late talk.

Man oh Man -
Sheila did it again.
Sent piece of new baby - a
cat known with Ryan &
Rylinn & Wyatt in it
saying Merry from grandma
Mary!

from Sheila a darling
back pack for my`,"2013c_00047":`Ch 43 - Tells time

Wheelchair, darling
material & flower buttons
+ $40! Denis called her
and I got to thank her
for it all!

Denis said he'd take me to
thrift shop next Sat. so I'll
have $90 to spend - T-shirts &
a ring?

After he left I napped &
watched TV - I gave Karen
(Ugly green hat) a comfy bar & have
knit hat for her too! Went
down & got cherry pie -
sheila also sent 7
small "scratch off pics" in a
tiger folder etc. Good`,"2013c_00048":`Sun Jan 12
Well I had too much pop & candy & Cheezits so I won't be hungry for supper—But it's only 4—supper 5—
I love baby animals & are so cute—piglets rabbits hedgehogs
cutest is the "lop eared" rabbits—they just hop like crazy!
Piggy piglets in a pool`,"2013c_00049":`Monday Jan 13

Well last night was
pokey. I had to get a
drink of (thought) phlegm
out—turned out to be
bright red blood! Scared
me and I got a nurse—she
got me ice cubes—said I
could see dr. today—I had
good sleep & now no blood!
At 7:00—I'm dressed.
I wrote Sheila a love
letter & will mail!
I mailed it—left at
6:00 on Chari desk. No
blood (so far) today.
I got coffee but no
cream! NTS—`,"2013c_00050":`mon jan 13

Well - I'm ready for today - it's 8:00 -
mailed Sheila "love" letter - She does so much for me - so does Denis. I have 60¢ here and D said he'd take me to thrift shop - need T shirts - maybe pants? a ring? - have no idea what they have in three.

No Blood - super! I have 90¢ to take to store (thrift)
Sat. with Denis. Die`,"2013c_00051":`got it in my pants pocket—not leaving it in purse for someone to steal. In my pants pocket.

No blood this AM

Thanks to who or what ever made that happen.

It's 9:30— I'm either hungry or sleepy or both—

Lunch hmm OK—Mashed potatoes gravy tough roast beef—Brownie

Back in room—tree house building on TV`,"2013c_00052":`Drinking sour lemonade,
Yuck—
It's 12:00—next on TV
alligators—hate them!—
Still tree houses—
now a beer bar in the
tree—cute—

Where is Castle? It's noon
3:00 + 36—It's another show
Sam Wilson "Father" is head guy,
other story ended—

Got a strong pain
pill at 4:20—for my back—
Always wrote
Tell with cane asked
me why not a walker?`,"2013c_00053":`Mon — 13 Jan

I thought it was the day but it's not. The mom clothes are out. Not mine.

Not my pills + patch (poopy) No

Guys there are tornadoes around the country. Airfoil!

8:28 -

No more blood - just phlegm — good a Dr. will look at my throat`,"2013c_00054":`next Mon - someone took me.

I'm pissed. One gal (with Cava) asked me why I wasn't walking with a walker. Said my knee tendon needed exercise. Now - why the hell did she care? She's on my shit list! I'll ask her if she thought she could keep me in my room? No way -

"Bones" is on - then.`,"2013c_00055":`June 14

Day started AWFUL—
No TV—and again spitting
up blood.

I see why that gal is
mad about my wheelchair—
She wanted one but got a
walker—ha!

Got my pills & Viv. brought
me a TV—

TV—Sam I am not
"hell bound" dogs—

Had my feet, could only
walk a little—poorly—`,"2013c_00056":`Castle Tonight or 3

went down got a Clap my
and a Mounds candy bar.

TV no bones - all about
rat pop - week -

TV Virginia + poison
leaked in their tap water.
Done now -

TV - a mean "bones" she
antagonize everyone with her
honesty & ego!

Now they have a head & she
probably rent.`,"2013c_00057":`For awhile I couldn't decide if the pic was Sheila or Ruth. It's Sheila & she does have silver hair so
for Ruth she'd be new
grandfather - so cute - Ruth
wouldn't be with "Delilah"
Baby name - (I don't like it - So call her "Doe")

went down & got a
Milky Way - Hers
"Castle" on - Hot channel
my mom & I waited in the hall,
got 2 rolls of TP plus the
one Vivian brought me`,"2013c_00058":`Castle almost over -
It's only 4:00 - can't go to bed -
Castle show as usual -

Wed Jan 15

I hope NO MORE BLOOD today - does
from warm to cold in here.

Br. Off - no bacon but
nice banana & eggs toast
& cr. wht. -
then I'll fix finger nails`,"2013c_00059":`Wed. Jan 15

Having a terrible time wrapping "Eva" present. Stupid Scotch tape breaker all the time.

BM

Ep gal here but I'm coughing up lots of blood. Nurse said she's got to see if she can get one. Do we even have one? Almost 11—am on doc. I'm still waiting but a nurse just told me they are writing for the doc. I just got up a blood clot.`,"2013c_00060":`Nurse just told me he is coming tomorrow to see me.

TV has giant "lizard" tearing up a stretchin' NY? Saw it before. Cute actor (from Jerry Bulloch Day off) is the hero.

Thur Jan 14

Dr. comes today—stay home!

Just woke up—toi
So far no more st
Blood!—`,"2013c_00061":`Let's have a look at it.

Jan 17

Br. soggy super-eggs + bacon toast + er wheat. It's now 8:45—so far no blood.

I think it's coming today—blood! Someone needs to look down my throat?

Got my pills but Nurse didn't know about Dr.? So—still no one has looked at it.`,"2013c_00062":`1/17 - Don't know what to do but guess I'll go down & get a candy bar again.

Dr. was here — She's very pretty & smart. Looked down my throat & agreed with me — blood came from broken capillaries like nose bleeds — so no worries — looked for medicated cough drops & she said she'd get some to me. OK — TV has say hi robot killing bug.`,"2013c_00063":`Stupid cooks not there yet at 5:00 but they say he there at 6:30

It's Friday (not sat) Jun 17

Will dance while all getting spills toed her I haven't had shower for 5 weeks? not sure`,"2013c_00064":`I think I'm changing my mind about shopping. It's too damn COLD to be out.

TV sci-fi big metal thing & metal legs—just left.

I tried Char how bad that Payday Candy bar was & she gave me a Reese's peanut butter cup free—it is SOOO good—

TV has poor guys ever & wet in back looking for an island—now they are`,"2013c_00065":`crossing a mountain - cold & wet

Why jumps do them awful chances in my old age.

Oiki having 5 ladies & green Ha

I scratched off a major bird - pretty red & yellow.

ate my candy bar - its 3:15 now what?

It got to +140 in Austin - the heat stopped timing

not going to happen until 5:16 or 5:30`,"2013c_00066":`Sat -

just went in & got coffee & back to room &
honey bun. I hate that lunch room & waiting in
line - so this is
better TV & warmth.

Boy my back hurts -

TV - full of legal talk
about "State Roads"
Voting - Joey -`,"2013c_00067":`Now adv. "Ax men"
at the disco pig -
He's so cute -

TV - Hawaii I a
Luna - I got 2 chip
mix & another peanut butter &
choc. candy bar. My
favorite now - no Hershey
bars or Hers cookie bar -
TV has lottery winners.
cars, money, etc. I'd never
be that lucky!`,"2013c_00068":`To 10:44 — turned on the heater to 74 — last night I had one aide help me to the toilet but then went by myself 4 times. Water sounds — have a big drought in Calo — terrible.

Be down at door at 10:00 Sat. & go shopping.`,"2013c_00069":`Mon Jan 20

Can't find "Castle" but I know he's somewhere.

Looked - but no luck again - found him on 36.

Tue - It was SOOOO cold in here & went on 2 T-shirts & got coffee.

I still have that 10¢ & toil that aide did give me for food - But she's not here yet.

TV news checking.

FBI - a relig' meet`,"2013c_00070":`It was weird!
Cold soup with stuff
vegetables - yuck -

Felling people

Poor FBI have to watch their
favorite man get beat up
drugs put in him too hard
to watch.

He's in a cemetery & I
know they find him.

The show is about the
woman who murdered people &
now she gets her head shot
off anyone is glad.`,"2013c_00071":`Now they need to find the
boy who shot her—a
hired killer—

Now if he has kidnapped
the nice Jordan`,"2013c_00072":`Food I need in
drawer

crackers
cheese & cheese
& brick

Eggs - Hard boiled
yogurt
tom soup
2 tomatoes

candy bar & water`,"2013c_00073":`Well,

Don't know what time it is but I have a dull ache in my left back! Had a big B/M & the pain is gone now I can't find my TV "charger"

Where is it? Found it in the huge comforter & just shook it out! Hooray!

Wait down for pop but I'm not sure I like the Dasani - sparkling water - It's lovely.

Yam & spinach guy was here again lots of guests mostly in that painful mood`,"2013c_00074":`Measuring my shoulder—
5'2" and 6'3" tall—
If he gets
30¢ for my deal & anyone
else—his making like 120¢
day!

Found my box of crackers
on the floor at the base of the
bed!

Then Jan 23

Br. super egg & bacon!

Regina here—& I lay
off—hardest thing was
pushing with arm &
feet (in chair) have to sit
slow! Hard. She said let
will be nice 40¢ so soon
I will stop`,"2013c_00075":`Fri

Went down - saw birds - they have lots of new "toys" ladders, balls etc. Also chop mix of another no good flavor.

Just got up - looked at clock - It's 3:15.

I stumbled on a new "Castle" on Fri! It's cute too.

They weighed me 148 -

Went down - got a Coke. She said it's better than Pepsi - she's sure!`,"2013c_00076":`That ol' Colette is shut on.

Castle on Fri-344

Jan 25

Need rain fell last

Had coffee & cr

of wheat.

Get my pills`,"2013c_00077":`Friday Jan 24

Had
good TV conn. in new place
P.M.
Pain in my left side still
there.

Another long nap - its
12:00 now - my pain is gone
I found my clock -

TV - and - stupid
sharpshooter Bills young kid
that come working there`,"2013c_00078":`Now - a bowler gets "squeezed" by the pin setter - the skull etc come down set by the pinset!

Now Angies water just broke & she grabs her poor hubby on the chest & is hurting him - Baby is adorable!

Watching a bird in the tree outside here - It's a big one - It was 2 squirrels mating?

Supper a mess rice with gravy & hot cucumber slices - No dessert - pink drink`,"2013c_00079":`My back is killing me -
I got a pain pill (Oxycontin)
at 5:15 - Hope it works
Bed at 6

Sat -
Had good dreams
Took - stopped the
pain.
Have to BM -

Had good BM.

I have to keep clearing
my throat - Damn`,"2013c_00080":`N has "cake box"
on
now "money show"

Surprise

I just had a
shower & hair wash! By
a really nice nurse!
It was fast too - saving
my wine & cheese -

Poor old goofy Karen
is the other one
screaming out in the
hall. She needs to be
put somewhere
Guess I'll just be`,"2013c_00081":`quiet about D., but
not ask him
for anything or to
do anything for me.

I need to tell D. to
quit coming over on Sat.
It'll be fine.

I wondered who was
screaming in the hall?
It's Karen - they'll have to
put her in an asylum.

Need to talk to D.
and tell him to quit coming
over on Sat. I am getting
to him in a bad way.`,"2013c_00082":`I "tore off" the "cane"
lady, told her what I
things put me in here at
my age—that she was just
jealous of everyone with a
wheel chair." Ha passed his off
good—now to tell D—not
to come over on Sat's anyway
that I'm OK—have everything
I need—I don't need a
"nasty" Denis telling me what's
wrong with me—not from him—
anyone else wouldn't bother me!

TV all about "BIG
FOOT"—Fooey—who
cares? 100 people or more
Ha—`,"2013c_00083":`my pain pill has worn off -ouch my left back side -

Sun 26th

I left a phone message he didn't need to "take care" of me or come over Sat. We're free -

Supper OK burrito with cheese chili - if you need time -

Really windy out & grim looking -

Well I called Denis & was glad I did - He said "Go`,"2013c_00084":`mail files

dirty floor downstairs
phone OK - too dumb
couldn't take care of baby

Sam & Susan are on
I need more coffee

Br. not good - no eggs or bacon...

Where's Denis?

Maybe I should call
Sheila - tell her what I did
& why!`,"2013c_00085":`Monday 27th

It's 2:27—just up from a long nap. My stupid phone doesn't work—I need to talk to someone about it.

I thought sure he would be over here.`,"2013c_00086":`I feel better - Sheila
Called me! - told her all
about Denis. She said she'd
wait a day then call him to say
"listening?" then let me know what
he said.`,"2013c_00087":`Tue Jan 28

Up at 7 - got coffee & food - eggs, toast & cereal
not bad, well Denis?
She'll help me -
I hope so - I am
getting depressed -
I have to talk myself out
of it. Tomorrow Ruth should
call me - about Denis -
"Dean" is on - block
guy just told him he'd die & not
and about Bela - where she
is now - a hotel in Canada -
how Sam is snoozing
around - found a body on
a "journey" - with a`,"2013c_00088":`pretty girl - "Bela?"

Castle on tonite

Regina was here - I did
24 steps & almost fell
Down at the end.

Now on TV - ourselves and
"Bones" -

Now Castle but
Cleaning lady just came in to
do the floor.

Don't know about supper.
Don't want to co-`,"2013c_00089":`Wed Jan 29

Up at 7:30 - got up. OK. Eggs, toast, or what coffee.

Don't know what to do about Denis. I'll let Sheila do it.

If nothing by end of day - I'll call him.

I did - so glad - guess he's OK. I said "I miss you" - he said "Do you want to see me?" I said of course - I miss you anyone else could invent`,"2013c_00090":`Me and it wouldn't bother me but when you do it does bother me!

Shall I go eat?

Got coffee & honey bun.
Guess we skip lunch & sit here waiting for Denis.

"Wipeout" is on. It's a hard game to play! One guy won't get $50,000.

Car insurance with the frog on it,
now college ads.`,"2013c_00091":`Now - Case Comm.

Really rotten murderer on N - He finally committed suicide but they saved his life buried alive -

Now people "home workers" kill whole families! - AWFUL

My case worker came in & we had a nice talk - She's a doll - Said she'd try & get me a hospital bed -

"Cottle" is on the air -
at the "frozen head" case`,"2013c_00092":`Chase Jan 34

Up at 7:30 - cook
followed me about dishes
I was bringing back - said "Don't
put them here" so I put them
on the ice machine - But
she did give me all my
free food - So late
"Clean & Jam" are on.

Denise - where are
you? At work I guess
I'm going down to draw
some money out - a 20?

Went down at 8:30 -
Shaz said "Can't
until 9 - come back`,"2013c_00093":`I did get 10$ - 5ones
+ a free
just got my pills but
need tor paper

Sent Dean about
a Cannibal eating his
own family - week

this place SUCKS
no tor paper -
Had my eyes but didn't
walk - WTS

"Bones" is on - its
good - But "Booth" is a a
funny because a guy is
is crossing her, how she`,"2013c_00094":`back with her hubby -

Well - if they bring my
hoped for D. will have
to come get this one -

They finally got
me 2 TV's (from my
box)

Going to lay down
after this "Boxer" is
over. I need to see them
catch the rat & they
did -

2:15 Up from a nap`,"2013c_00095":`I hope they bring my bed today then Denis will have to come get the one.

I know now what happened with his "girl friend" he had a mini-breakdown at throwing her out.

Ott some cheap ers - possibly bar & peafutter -

Wish they'd bring my bed, ate a honey bun but I'm still hungry & going to supper but not until 4.50-`,"2013c_00096":`Hooray! Denis came over & we're fine—kissed goodbye actually. He jerked.

Then, as the day was coming over—OK. Also I thought he wanted to keep the bed out so I'll donate it to the home.

Up at 7:00—got my coffee. Today is the last day of January—good—get going WINTER!`,"2013c_00097":`Big snow storm again
Called mom (later)
Big football game tomorrow
Super Bowl—yuck yuck!
Got a hockey ban
Next more coffee

Had good B.M.
I had to laugh—
Cook gave me 3 eggs
Ha—

So—Denim picked
This note to come
over—Ha! guess him a
nice long weekend—good—
I want him happy—`,"2013c_00098":`Found my mail file good—needed it, now I'll keep track of it.

S & D. are on—fighting demons

Went down & got a snack—I told Shaw Lena came back I were fine.

There was a well ringing for ages & no one knows how or where to stop it! Giving us all NITS—

Dinging well stopped!`,"2013c_00099":`Need
mini candy bars

12:45 - Had good nap.
"Bones" is on - Castle?
It is so gory -
I had a bloody spot up.
Note - If it's too violent it will be, none again -
wish they'd bring my new bed -

"Bones" - good today.
No Castle tonite a
new show - not until 8
Let's cut out - APB is the
name - fooney`,"2013c_00100":`I miss "Castle",
said it was on 33.

It is on - about dog shows - don't remember it.

I think the beautiful model did it, no it wasn't -

She was - a drug courier too -

Don't eat two tomatoes`,"2013c_00101":`Sat Feb 1

Dreaming about W.W. and red ete. Can't find my nose drops. Did get coffee - so good.

It's ground hog day. Tomorrow is huge football game so hope weather is good.

Get all my "dishes" etc. that go back on my walker. Hope they don't fall. We need snow.`,"2013c_00102":`Last night, not today though. I'll wait until tomorrow to take my dishes back so that mostly cool controller at me—no—

All about Phil (groundhog) of football Super Bowl—

Went down—cooked my check—she's only gave me $208 + $36 in bank.

OK,

ate 1/2 of my toast—

ate some of my`,"2013c_00103":`Trip & got some water.
Guess I'll nap pretty soon.

Did more fix-up
its 10 to 12 - not eating
lunch there - I hate it! Hope I can get all
those dishes back.
TV in Shanghai - ha -
& snow & YETIES -

N has 400 formerly
600 pd woman. She had
surgery & lost 200 pd - yikes!
I weigh 148 -`,"2013c_00104":`I got a Dr Pepper but it made me sort of sick so I didn't drink it all.

Stuffy movie on about the mall & 2 guys fighting with Kevin James.

Sunday Feb 2

Good to egg + bacon but no salt. I have to swipe some.

The Big football`,"2013c_00105":`Game is today - I thought it was yesterday, don't care!

Good PM

Phil - the ground hog said 6 more weeks of winter! Eeek -

Went down - only 1 new mix so - got it at a Hershey's Candy bar & coffee from Bird Room.

The coffee is COLD - yuck -

9:00 Got pilled patch.

Had nice nap - ate Candy bar - threw out almonds way too tough - they'd break`,"2013c_00106":`My teeth -
12:10 - Don't know what to do - color some more I guess -

TV has "Walking Dead" awful - Lost it now

TV funniest videos -
Now "Monk"

Ha - Ruth called & I didn't understand a word she said - sounded like "Do you have a sister? Then do you have a sitter?" Ha -
we agreed to invite -`,"2013c_00107":`So I will...

Ate some sausage out of rever.

Now I need dessert!

Ha

Had a honey bun

Cookies still great

6:00 - going to bed -

More like 7:00`,"2013c_00108":`Mon Feb 3

It's 7:06 - I'm dressed and coffee.

Weather Channel

Got more coffee & a banana! Ha-

Seattle won the big game. Guess Sherrill & Mike are happy? Don't know.

Just got pills & patch

1:05 - Ha - that boy - thought was crackers was an empty bag! Jokes on me`,"2013c_00109":`Ruthie -

I'm still laughing at the phone call. I haven't got your note yet so I'll wait & get it to finish this & send it.

Went down but no Chef yet so got 2 Candy Bars having some cheese now.`,"2013c_00110":`"Bone's" always good, a skeleton with "jewel-looking" connected on it - even mica & heat.

Now Booth & hubby holding baby & dancing around - cute.

Now in contest - not very good though - Ha - in lab water spills over everything.

Got a Hershey's at 2 cherry -

Good "Castle" is on but a repeat I've seen it`,"2013c_00111":`about "fairy tale killer"

Supper was awful
grilled had no taste
cucumbers were good
bathroom sink is
stayed up. I'll wait until
7:00 to take shower
Ouch.

The Feb 4 2p at 7
where is my bed?

Still no answer - It's
1:26 AM next dawn & asked
about it again!`,"2013c_00112":`Oh boy— I just jumped
a man standing here
scared me! We laughed—

"Bones" is on.

The wife of Booth just got
shot & is being operated on.

So Bones is good.
She gets shot & sees her dead
mother—

(Wed Feb 5)

"Thomas Crown Affair"

—Pierce Brosnan`,"2013c_00113":`I've seen it twice already, but not this first part.

Now ads for "Walking Dead" say not thanks.

T. Cowan again so cute - roll it over - cute, how

Sink is still stopped up - guess they called the janitor - I went to the toi anyway.`,"2013c_00114":`Thu Feb 6

Now I'll see what Denis means by "Thur."
Had a great lot bacon + eggs etc in
The closest lunch room. I'll do that now!
Leave dishes in there.
Today I get trays back.

Sam & Denis is on
Sam is drinking blood -
Eek -

Well - its 11:06
Now what? And`,"2013c_00115":`where I when in D.
coming here. Oh well -
I'll go to lunch at 11:38
I did - it was O.K. Then
I mopped - then will
get clay mix to clean.
Wondering who
will show up?
Guess what?
"Castle" is on next
then Thur. at 3
"I haven't seen it either?"`,"2013c_00116":`Fri. Feb 7

Went over house
room at 7:01—too
early—so I came
back—I'll go back
at 7:30

Breakfast was
per—egg &
by cinnamon
and sweet—got
me for—

TV about Egypt—
supposed to get
my wed today.
I have a call in
for monitor ?? just`,"2013c_00117":`ask Coover to get me a janitor —
A damn "bell" has been ringing non stop for about 5 min & hate it.
No janitor &
No bed
and a f— bell ringing for about 5 min now.
It's finally stopped,
Still stopped - But where is a janitor? &
My hoop liek? This`,"2013c_00118":`place SUCKS!
Lunch good
chili - polish sauce
lemon jello
Back now (in my room)
no jointure - I'm taking
a nap -
Sink still stopped
up & I don't care -
after about bed either
at 3:35 - got permits
a candy bar
got a rate card from
April so sent her one
inse where is putti`,"2013c_00119":`Castle is on + good but
I saw it Alegis is
kidnapped & he meets
his dad -

Almost 6 - Castle
ends OK -

Sat Jun 8
Br OK - no bacon -
Lunch Room full of
holes who want to
be first in line - even if
they sit way in
back. Bunch of
ignorant people`,"2013c_00120":`I need to read April's letter.

Poor old Karen is outside my door. Poor Caesar is stuck with her. She needs to be in an asylum somewhere.

And my sink is still stopped up. Also the bell is ding-ding again.

Caesar said Karen can't be in bed alone in case she falls out. Then why don't they put a bell on her?`,"2013c_00121":`Nice nap—its 1/13—
watch on military time again
don't like that, and stuff
stuffy eyes! + no bed—

TV—has cute cats,
one just falls asleep—
with its head on the pillow!

Read the paper—

went down got a Crunch bar.

(over)`,"2013c_00122":`Sunday Feb 9

Pr. OK - waited until after 8 to go to the lunchroom. Still OK - no jocks - I swiped the salt shaker - I was going to exchange mine but can't find it.

TV has cute wild cat getting into everything - but his owners love him anyway - So would it.

All done`,"2013c_00123":`Feb 21

I feel so bad. I'm really heartbroken—the next little guy I called "Honey Bun" died yesterday. He looked and acted so healthy, it was a shock! He was Alice's best friend and my husband. I'm sure when I told her I was so sorry she sort of waved me away like she couldn't talk about it so I left. They were always together until lately. I figure they had a fight. Bad timing, Alice!`},Xm=()=>{const[S,V]=Mt.useState([]),[z,m]=Mt.useState(0),[H,W]=Mt.useState(""),[P,ce]=Mt.useState(""),[C,I]=Mt.useState([]),[N,Z]=Mt.useState(!0),[ae,Te]=Mt.useState(!1),[fe,Je]=Mt.useState("");Mt.useEffect(()=>{if(lc.includes("your-public-bucket-url")){Je("Configuration needed: Please update the R2_PUBLIC_URL in `data/diaryData.ts` with your public Cloudflare R2 bucket URL."),Z(!1);return}if(sc.length===0){Je("Configuration needed: Please add your diary entry filenames to the `DIARY_ENTRIES` array in `data/diaryData.ts`."),Z(!1);return}const le=sc.map((we,Me)=>({id:Me+1,year:we.split("_")[0],imageUrl:`${lc}/${we}.jpg`,markdownContent:qm[we]??`*Content for ${we} is not in the local bundle. Please run the content generation script.*`}));V(le),Z(!1)},[]);const je=()=>{m(le=>Math.min(le+1,S.length-1))},Dt=()=>{m(le=>Math.max(le-1,0))},yt=le=>{le>=0&&le<S.length&&(m(le),window.scrollTo({top:0,behavior:"smooth"}))},_e=()=>{if(!H.trim()){Ve();return}Te(!0);const le=H.toLowerCase(),we=[];S.forEach((Me,nt)=>{const ft=Me.markdownContent?.toLowerCase();if(ft&&ft.includes(le)){const it=ft.indexOf(le),De=Math.max(0,it-50),At=Math.min(ft.length,it+le.length+50),Ht=Me.markdownContent.substring(De,At);we.push({pageIndex:nt,snippet:Ht})}}),I(we),ce(H),Te(!1)},Ve=()=>{W(""),ce(""),I([])},Y=S[z]||null;return M.jsxs("div",{className:"min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6",children:[M.jsxs("header",{className:"w-full max-w-7xl mb-6",children:[M.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg",children:[M.jsx("div",{className:"flex items-center gap-4",children:M.jsx("h1",{className:"text-2xl font-bold text-white tracking-wider",children:"Digital Diary Viewer"})}),M.jsx("div",{className:"w-full sm:w-auto sm:min-w-[300px]",children:M.jsx(Um,{searchTerm:H,onSearchTermChange:W,onSearch:_e,isSearching:ae})})]}),fe&&M.jsx("div",{className:"w-full max-w-7xl mt-4 p-3 bg-red-800/50 border border-red-700 text-red-200 rounded-lg text-center",children:fe})]}),C.length>0&&M.jsx($m,{results:C,searchTerm:P,onResultClick:yt,onClear:Ve}),M.jsx("main",{className:"w-full max-w-7xl flex-grow flex flex-col mt-4",children:N?M.jsx("div",{className:"flex-grow flex flex-col items-center justify-center text-gray-500 bg-gray-800 rounded-lg p-8",children:M.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-300",children:"Initializing Diary..."})}):S.length>0&&Y?M.jsxs(M.Fragment,{children:[M.jsx(Km,{page:Y}),M.jsx(Fm,{currentPage:z,totalPages:S.length,onNext:je,onPrev:Dt})]}):M.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center text-gray-500 bg-gray-800 rounded-lg p-8",children:[M.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-300",children:"Welcome to your Digital Diary"}),M.jsx("p",{className:"text-center max-w-md",children:!fe&&"Could not load diary entries. Please ensure your configuration in `data/diaryData.ts` is correct."}),fe&&M.jsx("p",{className:"text-center max-w-lg mt-4 text-red-300 bg-red-900/50 p-3 rounded-md",children:fe})]})}),M.jsx("footer",{className:"w-full max-w-7xl mt-6 text-center text-xs text-gray-500",children:M.jsx("p",{children:"A simple interface for exploring scanned documents."})})]})},hc=document.getElementById("root");if(!hc)throw new Error("Could not find root element to mount to");const Qm=Lm.createRoot(hc);Qm.render(M.jsx(jm.StrictMode,{children:M.jsx(Xm,{})}));
