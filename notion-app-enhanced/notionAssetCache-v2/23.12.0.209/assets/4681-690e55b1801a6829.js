"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4681],{32594:(n,t,e)=>{e.d(t,{Z:()=>a});var r=e(87731);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var o={x:0,y:0};function u(n,t){if(!n||!t)return null;var e,u=function(n){if(!n)return i({},o);if(function(n){return!!n&&"changedTouches"in n}(n))return n.changedTouches.length>0?{x:n.changedTouches[0].clientX,y:n.changedTouches[0].clientY}:i({},o);if(function(n){return!!n&&"clientX"in n}(n))return{x:n.clientX,y:n.clientY};var t=null==n?void 0:n.target,e=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:i({},o)}(t),a=(e=n)&&(e instanceof SVGElement||"ownerSVGElement"in e)?n.ownerSVGElement:n,c=function(n){return!!n&&"getScreenCTM"in n}(a)?a.getScreenCTM():null;if(function(n){return!!n&&"createSVGPoint"in n}(a)&&c){var l=a.createSVGPoint();return l.x=u.x,l.y=u.y,l=l.matrixTransform(c.inverse()),new r.Z({x:l.x,y:l.y})}var s=n.getBoundingClientRect();return new r.Z({x:u.x-s.left-n.clientLeft,y:u.y-s.top-n.clientTop})}function a(n,t){if((e=n)&&e instanceof Element&&t)return u(n,t);var e;if(function(n){return!!n&&(n instanceof Event||"nativeEvent"in n&&n.nativeEvent instanceof Event)}(n)){var r=n,i=r.target;if(i)return u(i,r)}return null}},87731:(n,t,e)=>{function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,{Z:()=>i});var i=function(){function n(n){var t=n.x,e=void 0===t?0:t,i=n.y,o=void 0===i?0:i;r(this,"x",0),r(this,"y",0),this.x=e,this.y=o}var t=n.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},n}()},30817:(n,t,e)=>{e.d(t,{Z:()=>mt});var r=Math.sqrt(50),i=Math.sqrt(10),o=Math.sqrt(2);function u(n,t,e){var u=(t-n)/Math.max(0,e),a=Math.floor(Math.log(u)/Math.LN10),c=u/Math.pow(10,a);return a>=0?(c>=r?10:c>=i?5:c>=o?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(c>=r?10:c>=i?5:c>=o?2:1)}function a(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function c(n){let t=n,e=n;function r(n,t,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){const o=r+i>>>1;e(n[o],t)<0?r=o+1:i=o}return r}return 1===n.length&&(t=(t,e)=>n(t)-e,e=function(n){return(t,e)=>a(n(t),e)}(n)),{left:r,center:function(n,e,i,o){null==i&&(i=0),null==o&&(o=n.length);const u=r(n,e,i,o-1);return u>i&&t(n[u-1],e)>-t(n[u],e)?u-1:u},right:function(n,t,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){const o=r+i>>>1;e(n[o],t)>0?i=o:r=o+1}return r}}}const l=c(a),s=l.right,f=(l.left,c((function(n){return null===n?NaN:+n})).center,s);var h=e(7626),g=e(73626),p=e(55720);function d(n){return+n}var v=[0,1];function y(n){return n}function m(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:(e=isNaN(t)?NaN:.5,function(){return e});var e}function x(n,t,e){var r=n[0],i=n[1],o=t[0],u=t[1];return i<r?(r=m(i,r),o=e(u,o)):(r=m(r,i),o=e(o,u)),function(n){return o(r(n))}}function w(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),o=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++u<r;)i[u]=m(n[u],n[u+1]),o[u]=e(t[u],t[u+1]);return function(t){var e=f(n,t,1,r)-1;return o[e](i[e](t))}}function M(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function b(){var n,t,e,r,i,o,u=v,a=v,c=h.Z,l=y;function s(){var n,t,e,c=Math.min(u.length,a.length);return l!==y&&(n=u[0],t=u[c-1],n>t&&(e=n,n=t,t=e),l=function(e){return Math.max(n,Math.min(t,e))}),r=c>2?w:x,i=o=null,f}function f(t){return null==t||isNaN(t=+t)?e:(i||(i=r(u.map(n),a,c)))(n(l(t)))}return f.invert=function(e){return l(t((o||(o=r(a,u.map(n),g.Z)))(e)))},f.domain=function(n){return arguments.length?(u=Array.from(n,d),s()):u.slice()},f.range=function(n){return arguments.length?(a=Array.from(n),s()):a.slice()},f.rangeRound=function(n){return a=Array.from(n),c=p.Z,s()},f.clamp=function(n){return arguments.length?(l=!!n||y,s()):l!==y},f.interpolate=function(n){return arguments.length?(c=n,s()):c},f.unknown=function(n){return arguments.length?(e=n,f):e},function(e,r){return n=e,t=r,s()}}function _(){return b()(y,y)}function T(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}var C=e(46196),N=e(53726),Z=e(42957),O=e(37655),U=e(68195);function P(n,t,e,u){var a,c=function(n,t,e){var u=Math.abs(t-n)/Math.max(0,e),a=Math.pow(10,Math.floor(Math.log(u)/Math.LN10)),c=u/a;return c>=r?a*=10:c>=i?a*=5:c>=o&&(a*=2),t<n?-a:a}(n,t,e);switch((u=(0,C.Z)(null==u?",f":u)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(t));return null!=u.precision||isNaN(a=(0,N.Z)(c,l))||(u.precision=a),(0,Z.jH)(u,l);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(a=(0,O.Z)(c,Math.max(Math.abs(n),Math.abs(t))))||(u.precision=a-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(a=(0,U.Z)(c))||(u.precision=a-2*("%"===u.type))}return(0,Z.WU)(u)}function S(n){var t=n.domain;return n.ticks=function(n){var e=t();return function(n,t,e){var r,i,o,a,c=-1;if(e=+e,(n=+n)==(t=+t)&&e>0)return[n];if((r=t<n)&&(i=n,n=t,t=i),0===(a=u(n,t,e))||!isFinite(a))return[];if(a>0){let e=Math.round(n/a),r=Math.round(t/a);for(e*a<n&&++e,r*a>t&&--r,o=new Array(i=r-e+1);++c<i;)o[c]=(e+c)*a}else{a=-a;let e=Math.round(n*a),r=Math.round(t*a);for(e/a<n&&++e,r/a>t&&--r,o=new Array(i=r-e+1);++c<i;)o[c]=(e+c)/a}return r&&o.reverse(),o}(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var r=t();return P(r[0],r[r.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var r,i,o=t(),a=0,c=o.length-1,l=o[a],s=o[c],f=10;for(s<l&&(i=l,l=s,s=i,i=a,a=c,c=i);f-- >0;){if((i=u(l,s,e))===r)return o[a]=l,o[c]=s,t(o);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}r=i}return n},n}function k(){var n=_();return n.copy=function(){return M(n,k())},T.apply(n,arguments),S(n)}var D=e(44087),F=e(16372),Y=Math.PI/180,R=180/Math.PI,E=.96422,j=.82521,H=4/29,A=6/29,L=3*A*A;function z(n){if(n instanceof q)return new q(n.l,n.a,n.b,n.opacity);if(n instanceof Q)return K(n);n instanceof F.Ss||(n=(0,F.SU)(n));var t,e,r=X(n.r),i=X(n.g),o=X(n.b),u=B((.2225045*r+.7168786*i+.0606169*o)/1);return r===i&&i===o?t=e=u:(t=B((.4360747*r+.3850649*i+.1430804*o)/E),e=B((.0139322*r+.0971045*i+.7141733*o)/j)),new q(116*u-16,500*(t-u),200*(u-e),n.opacity)}function I(n,t,e,r){return 1===arguments.length?z(n):new q(n,t,e,null==r?1:r)}function q(n,t,e,r){this.l=+n,this.a=+t,this.b=+e,this.opacity=+r}function B(n){return n>.008856451679035631?Math.pow(n,1/3):n/L+H}function V(n){return n>A?n*n*n:L*(n-H)}function G(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function X(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function J(n){if(n instanceof Q)return new Q(n.h,n.c,n.l,n.opacity);if(n instanceof q||(n=z(n)),0===n.a&&0===n.b)return new Q(NaN,0<n.l&&n.l<100?0:NaN,n.l,n.opacity);var t=Math.atan2(n.b,n.a)*R;return new Q(t<0?t+360:t,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function W(n,t,e,r){return 1===arguments.length?J(n):new Q(n,t,e,null==r?1:r)}function Q(n,t,e,r){this.h=+n,this.c=+t,this.l=+e,this.opacity=+r}function K(n){if(isNaN(n.h))return new q(n.l,0,0,n.opacity);var t=n.h*Y;return new q(n.l,Math.cos(t)*n.c,Math.sin(t)*n.c,n.opacity)}(0,D.Z)(q,I,(0,D.l)(F.Il,{brighter:function(n){return new q(this.l+18*(null==n?1:n),this.a,this.b,this.opacity)},darker:function(n){return new q(this.l-18*(null==n?1:n),this.a,this.b,this.opacity)},rgb:function(){var n=(this.l+16)/116,t=isNaN(this.a)?n:n+this.a/500,e=isNaN(this.b)?n:n-this.b/200;return t=E*V(t),n=1*V(n),e=j*V(e),new F.Ss(G(3.1338561*t-1.6168667*n-.4906146*e),G(-.9787684*t+1.9161415*n+.033454*e),G(.0719453*t-.2289914*n+1.4052427*e),this.opacity)}})),(0,D.Z)(Q,W,(0,D.l)(F.Il,{brighter:function(n){return new Q(this.h,this.c,this.l+18*(null==n?1:n),this.opacity)},darker:function(n){return new Q(this.h,this.c,this.l-18*(null==n?1:n),this.opacity)},rgb:function(){return K(this).rgb()}}));var $=e(85910);function nn(n){return function(t,e){var r=n((t=W(t)).h,(e=W(e)).h),i=(0,$.ZP)(t.c,e.c),o=(0,$.ZP)(t.l,e.l),u=(0,$.ZP)(t.opacity,e.opacity);return function(n){return t.h=r(n),t.c=i(n),t.l=o(n),t.opacity=u(n),t+""}}}const tn=nn($.wx);var en=nn($.ZP);function rn(n){return function(t,e){var r=n((t=(0,F.Ym)(t)).h,(e=(0,F.Ym)(e)).h),i=(0,$.ZP)(t.s,e.s),o=(0,$.ZP)(t.l,e.l),u=(0,$.ZP)(t.opacity,e.opacity);return function(n){return t.h=r(n),t.s=i(n),t.l=o(n),t.opacity=u(n),t+""}}}const on=rn($.wx);var un=rn($.ZP),an=-.14861,cn=1.78277,ln=-.29227,sn=-.90649,fn=1.97294,hn=fn*sn,gn=fn*cn,pn=cn*ln-sn*an;function dn(n){if(n instanceof yn)return new yn(n.h,n.s,n.l,n.opacity);n instanceof F.Ss||(n=(0,F.SU)(n));var t=n.r/255,e=n.g/255,r=n.b/255,i=(pn*r+hn*t-gn*e)/(pn+hn-gn),o=r-i,u=(fn*(e-i)-ln*o)/sn,a=Math.sqrt(u*u+o*o)/(fn*i*(1-i)),c=a?Math.atan2(u,o)*R-120:NaN;return new yn(c<0?c+360:c,a,i,n.opacity)}function vn(n,t,e,r){return 1===arguments.length?dn(n):new yn(n,t,e,null==r?1:r)}function yn(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}function mn(n){return function t(e){function r(t,r){var i=n((t=vn(t)).h,(r=vn(r)).h),o=(0,$.ZP)(t.s,r.s),u=(0,$.ZP)(t.l,r.l),a=(0,$.ZP)(t.opacity,r.opacity);return function(n){return t.h=i(n),t.s=o(n),t.l=u(Math.pow(n,e)),t.opacity=a(n),t+""}}return e=+e,r.gamma=t,r}(1)}(0,D.Z)(yn,vn,(0,D.l)(F.Il,{brighter:function(n){return n=null==n?F.J5:Math.pow(F.J5,n),new yn(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?F.xV:Math.pow(F.xV,n),new yn(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*Y,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(n),i=Math.sin(n);return new F.Ss(255*(t+e*(an*r+cn*i)),255*(t+e*(ln*r+sn*i)),255*(t+e*(fn*r)),this.opacity)}}));var xn={lab:function(n,t){var e=(0,$.ZP)((n=I(n)).l,(t=I(t)).l),r=(0,$.ZP)(n.a,t.a),i=(0,$.ZP)(n.b,t.b),o=(0,$.ZP)(n.opacity,t.opacity);return function(t){return n.l=e(t),n.a=r(t),n.b=i(t),n.opacity=o(t),n+""}},hcl:tn,"hcl-long":en,hsl:on,"hsl-long":un,cubehelix:mn($.wx),"cubehelix-long":mn($.ZP),rgb:e(88124).ZP};var wn=new Date,Mn=new Date;function bn(n,t,e,r){function i(t){return n(t=0===arguments.length?new Date:new Date(+t)),t}return i.floor=function(t){return n(t=new Date(+t)),t},i.ceil=function(e){return n(e=new Date(e-1)),t(e,1),n(e),e},i.round=function(n){var t=i(n),e=i.ceil(n);return n-t<e-n?t:e},i.offset=function(n,e){return t(n=new Date(+n),null==e?1:Math.floor(e)),n},i.range=function(e,r,o){var u,a=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return a;do{a.push(u=new Date(+e)),t(e,o),n(e)}while(u<e&&e<r);return a},i.filter=function(e){return bn((function(t){if(t>=t)for(;n(t),!e(t);)t.setTime(t-1)}),(function(n,r){if(n>=n)if(r<0)for(;++r<=0;)for(;t(n,-1),!e(n););else for(;--r>=0;)for(;t(n,1),!e(n););}))},e&&(i.count=function(t,r){return wn.setTime(+t),Mn.setTime(+r),n(wn),n(Mn),Math.floor(e(wn,Mn))},i.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?i.filter(r?function(t){return r(t)%n==0}:function(t){return i.count(0,t)%n==0}):i:null}),i}const _n=1e3,Tn=6e4,Cn=36e5,Nn=864e5,Zn=6048e5;var On=bn((n=>n.setHours(0,0,0,0)),((n,t)=>n.setDate(n.getDate()+t)),((n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Tn)/Nn),(n=>n.getDate()-1));const Un=On;On.range;var Pn=bn((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*_n-n.getMinutes()*Tn)}),(function(n,t){n.setTime(+n+t*Cn)}),(function(n,t){return(t-n)/Cn}),(function(n){return n.getHours()}));const Sn=Pn;Pn.range;var kn=bn((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*_n)}),(function(n,t){n.setTime(+n+t*Tn)}),(function(n,t){return(t-n)/Tn}),(function(n){return n.getMinutes()}));const Dn=kn;kn.range;var Fn=bn((function(n){n.setDate(1),n.setHours(0,0,0,0)}),(function(n,t){n.setMonth(n.getMonth()+t)}),(function(n,t){return t.getMonth()-n.getMonth()+12*(t.getFullYear()-n.getFullYear())}),(function(n){return n.getMonth()}));const Yn=Fn;Fn.range;var Rn=bn((function(n){n.setTime(n-n.getMilliseconds())}),(function(n,t){n.setTime(+n+t*_n)}),(function(n,t){return(t-n)/_n}),(function(n){return n.getUTCSeconds()}));const En=Rn;Rn.range;function jn(n){return bn((function(t){t.setDate(t.getDate()-(t.getDay()+7-n)%7),t.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+7*t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Tn)/Zn}))}var Hn=jn(0),An=jn(1),Ln=jn(2),zn=jn(3),In=jn(4),qn=jn(5),Bn=jn(6),Vn=(Hn.range,An.range,Ln.range,zn.range,In.range,qn.range,Bn.range,bn((function(n){n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,t){n.setFullYear(n.getFullYear()+t)}),(function(n,t){return t.getFullYear()-n.getFullYear()}),(function(n){return n.getFullYear()})));Vn.every=function(n){return isFinite(n=Math.floor(n))&&n>0?bn((function(t){t.setFullYear(Math.floor(t.getFullYear()/n)*n),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,e){t.setFullYear(t.getFullYear()+e*n)})):null};const Gn=Vn;Vn.range;var Xn=bn((function(n){n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCDate(n.getUTCDate()+t)}),(function(n,t){return(t-n)/Nn}),(function(n){return n.getUTCDate()-1}));const Jn=Xn;Xn.range;var Wn=bn((function(n){n.setUTCMinutes(0,0,0)}),(function(n,t){n.setTime(+n+t*Cn)}),(function(n,t){return(t-n)/Cn}),(function(n){return n.getUTCHours()}));const Qn=Wn;Wn.range;var Kn=bn((function(n){n.setUTCSeconds(0,0)}),(function(n,t){n.setTime(+n+t*Tn)}),(function(n,t){return(t-n)/Tn}),(function(n){return n.getUTCMinutes()}));const $n=Kn;Kn.range;var nt=bn((function(n){n.setUTCDate(1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCMonth(n.getUTCMonth()+t)}),(function(n,t){return t.getUTCMonth()-n.getUTCMonth()+12*(t.getUTCFullYear()-n.getUTCFullYear())}),(function(n){return n.getUTCMonth()}));const tt=nt;nt.range;function et(n){return bn((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-n)%7),t.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCDate(n.getUTCDate()+7*t)}),(function(n,t){return(t-n)/Zn}))}var rt=et(0),it=et(1),ot=et(2),ut=et(3),at=et(4),ct=et(5),lt=et(6),st=(rt.range,it.range,ot.range,ut.range,at.range,ct.range,lt.range,bn((function(n){n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCFullYear(n.getUTCFullYear()+t)}),(function(n,t){return t.getUTCFullYear()-n.getUTCFullYear()}),(function(n){return n.getUTCFullYear()})));st.every=function(n){return isFinite(n=Math.floor(n))&&n>0?bn((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/n)*n),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e*n)})):null};const ft=st;st.range;var ht=new Date(Date.UTC(2020,1,2,3,4,5));var gt={day:Un,hour:Sn,minute:Dn,month:Yn,second:En,week:Hn,year:Gn},pt={day:Jn,hour:Qn,minute:$n,month:tt,second:En,week:rt,year:ft};var dt=["domain","nice","zero","interpolate","round","range","reverse","align","base","clamp","constant","exponent","padding","unknown"],vt={domain:function(n,t){t.domain&&n.domain(t.domain)},nice:function(n,t){if("nice"in t&&void 0!==t.nice&&"nice"in n){var e=t.nice;if("boolean"==typeof e)e&&n.nice();else if("number"==typeof e)n.nice(e);else{var r=n,i=function(n){return"2020-02-02 03:04"===n.tickFormat(1,"%Y-%m-%d %H:%M")(ht)}(r);if("string"==typeof e)r.nice(i?pt[e]:gt[e]);else{var o=e.interval,u=e.step,a=(i?pt[o]:gt[o]).every(u);null!=a&&r.nice(a)}}}},zero:function(n,t){if("zero"in t&&!0===t.zero){var e=n.domain(),r=e[0],i=e[1],o=i<r,u=o?[i,r]:[r,i],a=u[0],c=u[1],l=[Math.min(0,a),Math.max(0,c)];n.domain(o?l.reverse():l)}},interpolate:function(n,t){if("interpolate"in t&&"interpolate"in n&&void 0!==t.interpolate){var e=function(n){switch(n){case"lab":case"hcl":case"hcl-long":case"hsl":case"hsl-long":case"cubehelix":case"cubehelix-long":case"rgb":return xn[n]}var t=n.type,e=n.gamma,r=xn[t];return void 0===e?r:r.gamma(e)}(t.interpolate);n.interpolate(e)}},round:function(n,t){"round"in t&&void 0!==t.round&&(t.round&&"interpolate"in t&&void 0!==t.interpolate?console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:",t):"round"in n?n.round(t.round):"interpolate"in n&&t.round&&n.interpolate(p.Z))},align:function(n,t){"align"in n&&"align"in t&&void 0!==t.align&&n.align(t.align)},base:function(n,t){"base"in n&&"base"in t&&void 0!==t.base&&n.base(t.base)},clamp:function(n,t){"clamp"in n&&"clamp"in t&&void 0!==t.clamp&&n.clamp(t.clamp)},constant:function(n,t){"constant"in n&&"constant"in t&&void 0!==t.constant&&n.constant(t.constant)},exponent:function(n,t){"exponent"in n&&"exponent"in t&&void 0!==t.exponent&&n.exponent(t.exponent)},padding:function(n,t){"padding"in n&&"padding"in t&&void 0!==t.padding&&n.padding(t.padding),"paddingInner"in n&&"paddingInner"in t&&void 0!==t.paddingInner&&n.paddingInner(t.paddingInner),"paddingOuter"in n&&"paddingOuter"in t&&void 0!==t.paddingOuter&&n.paddingOuter(t.paddingOuter)},range:function(n,t){t.range&&n.range(t.range)},reverse:function(n,t){if(t.reverse){var e=n.range().slice().reverse();n.range(e)}},unknown:function(n,t){"unknown"in n&&"unknown"in t&&void 0!==t.unknown&&n.unknown(t.unknown)}};var yt=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var r=new Set(t),i=dt.filter((function(n){return r.has(n)}));return function(n,t){return void 0!==t&&i.forEach((function(e){vt[e](n,t)})),n}}("domain","range","reverse","clamp","interpolate","nice","round","zero");function mt(n){return yt(k(),n)}},11720:(n,t,e)=>{e.d(t,{Z:()=>M});var r=e(67294),i=e(94184),o=e.n(i);function u(n,t){n(t)}var a=Math.PI,c=2*a,l=1e-6,s=c-l;function f(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function h(){return new f}f.prototype=h.prototype={constructor:f,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,e,r){this._+="Q"+ +n+","+ +t+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(n,t,e,r,i,o){this._+="C"+ +n+","+ +t+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(n,t,e,r,i){n=+n,t=+t,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,c=e-n,s=r-t,f=o-n,h=u-t,g=f*f+h*h;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(g>l)if(Math.abs(h*c-s*f)>l&&i){var p=e-o,d=r-u,v=c*c+s*s,y=p*p+d*d,m=Math.sqrt(v),x=Math.sqrt(g),w=i*Math.tan((a-Math.acos((v+g-y)/(2*m*x)))/2),M=w/x,b=w/m;Math.abs(M-1)>l&&(this._+="L"+(n+M*f)+","+(t+M*h)),this._+="A"+i+","+i+",0,0,"+ +(h*p>f*d)+","+(this._x1=n+b*c)+","+(this._y1=t+b*s)}else this._+="L"+(this._x1=n)+","+(this._y1=t);else;},arc:function(n,t,e,r,i,o){n=+n,t=+t,o=!!o;var u=(e=+e)*Math.cos(r),f=e*Math.sin(r),h=n+u,g=t+f,p=1^o,d=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+g:(Math.abs(this._x1-h)>l||Math.abs(this._y1-g)>l)&&(this._+="L"+h+","+g),e&&(d<0&&(d=d%c+c),d>s?this._+="A"+e+","+e+",0,1,"+p+","+(n-u)+","+(t-f)+"A"+e+","+e+",0,1,"+p+","+(this._x1=h)+","+(this._y1=g):d>l&&(this._+="A"+e+","+e+",0,"+ +(d>=a)+","+p+","+(this._x1=n+e*Math.cos(i))+","+(this._y1=t+e*Math.sin(i))))},rect:function(n,t,e,r){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};const g=h;function p(n){return function(){return n}}var d=e(18143);function v(n){return n[0]}function y(n){return n[1]}function m(){var n=v,t=null,e=p(0),r=y,i=p(!0),o=null,u=d.Z,a=null;function c(c){var l,s,f,h,p,d=c.length,v=!1,y=new Array(d),m=new Array(d);for(null==o&&(a=u(p=g())),l=0;l<=d;++l){if(!(l<d&&i(h=c[l],l,c))===v)if(v=!v)s=l,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),f=l-1;f>=s;--f)a.point(y[f],m[f]);a.lineEnd(),a.areaEnd()}v&&(y[l]=+n(h,l,c),m[l]=+e(h,l,c),a.point(t?+t(h,l,c):y[l],r?+r(h,l,c):m[l]))}if(p)return a=null,p+""||null}function l(){return function(){var n=v,t=y,e=p(!0),r=null,i=d.Z,o=null;function u(u){var a,c,l,s=u.length,f=!1;for(null==r&&(o=i(l=g())),a=0;a<=s;++a)!(a<s&&e(c=u[a],a,u))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+n(c,a,u),+t(c,a,u));if(l)return o=null,l+""||null}return u.x=function(t){return arguments.length?(n="function"==typeof t?t:p(+t),u):n},u.y=function(n){return arguments.length?(t="function"==typeof n?n:p(+n),u):t},u.defined=function(n){return arguments.length?(e="function"==typeof n?n:p(!!n),u):e},u.curve=function(n){return arguments.length?(i=n,null!=r&&(o=i(r)),u):i},u.context=function(n){return arguments.length?(null==n?r=o=null:o=i(r=n),u):r},u}().defined(i).curve(u).context(o)}return c.x=function(e){return arguments.length?(n="function"==typeof e?e:p(+e),t=null,c):n},c.x0=function(t){return arguments.length?(n="function"==typeof t?t:p(+t),c):n},c.x1=function(n){return arguments.length?(t=null==n?null:"function"==typeof n?n:p(+n),c):t},c.y=function(n){return arguments.length?(e="function"==typeof n?n:p(+n),r=null,c):e},c.y0=function(n){return arguments.length?(e="function"==typeof n?n:p(+n),c):e},c.y1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:p(+n),c):r},c.lineX0=c.lineY0=function(){return l().x(n).y(e)},c.lineY1=function(){return l().x(n).y(r)},c.lineX1=function(){return l().x(t).y(e)},c.defined=function(n){return arguments.length?(i="function"==typeof n?n:p(!!n),c):i},c.curve=function(n){return arguments.length?(u=n,null!=o&&(a=u(o)),c):u},c.context=function(n){return arguments.length?(null==n?o=a=null:a=u(o=n),c):o},c}var x=["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"];function w(){return(w=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function M(n){var t=n.x,e=n.x0,i=n.x1,a=n.y,c=n.y1,l=n.y0,s=n.yScale,f=n.data,h=void 0===f?[]:f,g=n.defined,p=void 0===g?function(){return!0}:g,d=n.className,v=n.curve,y=n.innerRef,M=n.children,b=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,x),_=function(n){var t=void 0===n?{}:n,e=t.x,r=t.x0,i=t.x1,o=t.y,a=t.y0,c=t.y1,l=t.defined,s=t.curve,f=m();return e&&u(f.x,e),r&&u(f.x0,r),i&&u(f.x1,i),o&&u(f.y,o),a&&u(f.y0,a),c&&u(f.y1,c),l&&f.defined(l),s&&f.curve(s),f}({x:t,x0:e,x1:i,defined:p,curve:v});return null==l?_.y0(s.range()[0]):u(_.y0,l),a&&!c&&u(_.y1,a),c&&!a&&u(_.y1,c),M?r.createElement(r.Fragment,null,M({path:_})):r.createElement("path",w({ref:y,className:o()("visx-area-closed",d),d:_(h)||""},b))}},98649:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(67294),i=e(94184),o=e.n(i),u=["className","innerRef"];function a(){return(a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function c(n){var t=n.className,e=n.innerRef,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,u);return r.createElement("rect",a({ref:e,className:o()("visx-bar",t)},i))}},93382:(n,t,e)=>{e.d(t,{Z:()=>f,j:()=>s});var r=e(45697),i=e.n(r),o=e(67294),u=e(94184),a=e.n(u),c=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var s={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(n){var t=n.className,e=n.top,r=n.left,i=n.offsetLeft,u=void 0===i?10:i,f=n.offsetTop,h=void 0===f?10:f,g=n.style,p=void 0===g?s:g,d=n.children,v=n.unstyled,y=void 0!==v&&v,m=n.applyPositionStyle,x=void 0!==m&&m,w=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,c);return o.createElement("div",l({className:a()("visx-tooltip",t),style:l({top:null==e||null==h?e:e+h,left:null==r||null==u?r:r+u},x&&{position:"absolute"},!y&&p)},w),d)}f.propTypes={children:i().node,className:i().string,left:i().number,offsetLeft:i().number,offsetTop:i().number,top:i().number,applyPositionStyle:i().bool,unstyled:i().bool}},17455:(n,t,e)=>{e.d(t,{Z:()=>g});var r=e(67294),i=e(73935);function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l={top:0,right:0,bottom:0,left:0,width:0,height:0};var s=e(93382),f=["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled"];function h(){return(h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}const g=(p=function(n){var t,e=n.children,i=(n.getRects,n.left),o=void 0===i?0:i,u=n.offsetLeft,a=void 0===u?10:u,c=n.offsetTop,l=void 0===c?10:c,g=n.parentRect,p=n.rect,d=n.style,v=void 0===d?s.j:d,y=n.top,m=void 0===y?0:y,x=n.unstyled,w=void 0!==x&&x,M=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,f);if(p&&g){var b=o,_=m,T=!1,C=!1;if(g.width){var N=b+a+p.width-g.width,Z=p.width-b-a;T=N>0&&N>Z}else{var O=b+a+p.width-window.innerWidth,U=p.width-b-a;T=O>0&&O>U}if(g.height){var P=_+l+p.height-g.height,S=p.height-_-l;C=P>0&&P>S}else C=_+l+p.height>window.innerHeight;b=T?b-p.width-a:b+a,_=C?_-p.height-l:_+l,t="translate("+(b=Math.round(b))+"px, "+(_=Math.round(_))+"px)"}return r.createElement(s.Z,h({style:h({left:0,top:0,transform:t},!w&&v)},M),e)},v=d=function(n){var t,e;function s(t){var e;return c(u(e=n.call(this,t)||this),"node",void 0),e.state={rect:void 0,parentRect:void 0},e.getRects=e.getRects.bind(u(e)),e}e=n,(t=s).prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e);var f=s.prototype;return f.componentDidMount=function(){var n=this;this.node=i.findDOMNode(this),this.setState((function(){return n.getRects()}))},f.getRects=function(){if(!this.node)return this.state;var n=this.node,t=n.parentNode;return{rect:n.getBoundingClientRect?n.getBoundingClientRect():l,parentRect:null!=t&&t.getBoundingClientRect?t.getBoundingClientRect():l}},f.render=function(){return r.createElement(p,o({getRects:this.getRects},this.state,this.props))},s}(r.PureComponent),c(d,"displayName","withBoundingRects("+(p.displayName||"")+")"),v);var p,d,v},18143:(n,t,e)=>{function r(n){this._context=n}function i(n){return new r(n)}e.d(t,{Z:()=>i}),r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:this._context.lineTo(n,t)}}}}}]);