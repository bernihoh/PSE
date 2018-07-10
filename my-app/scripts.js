!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cytoscape=t():e.cytoscape=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(3),a=i?i.navigator:null,o=i?i.document:null,s=r(""),l=r({}),u=r(function(){}),c="undefined"==typeof HTMLElement?"undefined":r(HTMLElement),d=function(e){return e&&e.instanceString&&h.fn(e.instanceString)?e.instanceString():null},h={defined:function(e){return null!=e},string:function(e){return null!=e&&(void 0===e?"undefined":r(e))==s},fn:function(e){return null!=e&&(void 0===e?"undefined":r(e))===u},array:function(e){return Array.isArray?Array.isArray(e):null!=e&&e instanceof Array},plainObject:function(e){return null!=e&&(void 0===e?"undefined":r(e))===l&&!h.array(e)&&e.constructor===Object},object:function(e){return null!=e&&(void 0===e?"undefined":r(e))===l},number:function(e){return null!=e&&(void 0===e?"undefined":r(e))===r(1)&&!isNaN(e)},integer:function(e){return h.number(e)&&Math.floor(e)===e},bool:function(e){return null!=e&&(void 0===e?"undefined":r(e))===r(!0)},htmlElement:function(e){return"undefined"===c?void 0:null!=e&&e instanceof HTMLElement},elementOrCollection:function(e){return h.element(e)||h.collection(e)},element:function(e){return"collection"===d(e)&&e._private.single},collection:function(e){return"collection"===d(e)&&!e._private.single},core:function(e){return"core"===d(e)},style:function(e){return"style"===d(e)},stylesheet:function(e){return"stylesheet"===d(e)},event:function(e){return"event"===d(e)},thread:function(e){return"thread"===d(e)},fabric:function(e){return"fabric"===d(e)},emptyString:function(e){return void 0===e||null===e||!(""!==e&&!e.match(/^\s+$/))},nonemptyString:function(e){return!(!e||!h.string(e)||""===e||e.match(/^\s+$/))},domElement:function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement},boundingBox:function(e){return h.plainObject(e)&&h.number(e.x1)&&h.number(e.x2)&&h.number(e.y1)&&h.number(e.y2)},promise:function(e){return h.object(e)&&h.fn(e.then)},touch:function(){return i&&("ontouchstart"in i||i.DocumentTouch&&o instanceof DocumentTouch)},gecko:function(){return i&&("undefined"!=typeof InstallTrigger||"MozAppearance"in o.documentElement.style)},webkit:function(){return i&&("undefined"!=typeof webkitURL||"WebkitAppearance"in o.documentElement.style)},chromium:function(){return i&&"undefined"!=typeof chrome},khtml:function(){return a&&a.vendor.match(/kde/i)},khtmlEtc:function(){return h.khtml()||h.webkit()||h.chromium()},ms:function(){return a&&a.userAgent.match(/msie|trident|edge/i)},windows:function(){return a&&a.appVersion.match(/Win/i)},mac:function(){return a&&a.appVersion.match(/Mac/i)},linux:function(){return a&&a.appVersion.match(/Linux/i)},unix:function(){return a&&a.appVersion.match(/X11/i)}};e.exports=h},function(e,t,n){"use strict";var r=n(0),i=n(2),a={MAX_INT:Number.MAX_SAFE_INTEGER||9007199254740991,trueify:function(){return!0},falsify:function(){return!1},zeroify:function(){return 0},noop:function(){},error:function(e){console.error?(console.error.apply(console,arguments),console.trace&&console.trace()):(console.log.apply(console,arguments),console.trace&&console.trace())},clone:function(e){return this.extend({},e)},copy:function(e){return null==e?e:r.array(e)?e.slice():r.plainObject(e)?this.clone(e):e},copyArray:function(e){return e.slice()},clonePosition:function(e){return{x:e.x,y:e.y}},uuid:function(e,t){for(t=e="";e++<36;t+=51*e&52?(15^e?8^Math.random()*(20^e?16:4):4).toString(16):"-");return t}};a.makeBoundingBox=i.makeBoundingBox.bind(i),a._staticEmptyObject={},a.staticEmptyObject=function(){return a._staticEmptyObject},a.extend=null!=Object.assign?Object.assign.bind(Object):function(e){for(var t=arguments,n=1;n<t.length;n++){var r=t[n];if(null!=r)for(var i=Object.keys(r),a=0;a<i.length;a++){var o=i[a];e[o]=r[o]}}return e},a.assign=a.extend,a.default=function(e,t){return void 0===e?t:e},a.removeFromArray=function(e,t,n){for(var r=e.length;r>=0&&(e[r]!==t||(e.splice(r,1),n));r--);},a.clearArray=function(e){e.splice(0,e.length)},a.push=function(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.push(r)}},a.getPrefixedProperty=function(e,t,n){return n&&(t=this.prependCamel(n,t)),e[t]},a.setPrefixedProperty=function(e,t,n,r){n&&(t=this.prependCamel(n,t)),e[t]=r},[n(21),n(22),{memoize:n(13)},n(23),n(24),n(25),n(27)].forEach(function(e){a.extend(a,e)}),e.exports=a},function(e,t,n){"use strict";var r={};r.arePositionsSame=function(e,t){return e.x===t.x&&e.y===t.y},r.copyPosition=function(e){return{x:e.x,y:e.y}},r.modelToRenderedPosition=function(e,t,n){return{x:e.x*t+n.x,y:e.y*t+n.y}},r.renderedToModelPosition=function(e,t,n){return{x:(e.x-n.x)/t,y:(e.y-n.y)/t}},r.array2point=function(e){return{x:e[0],y:e[1]}},r.deg2rad=function(e){return Math.PI*e/180},r.getAngleFromDisp=function(e,t){return Math.atan2(t,e)-Math.PI/2},r.log2=Math.log2||function(e){return Math.log(e)/Math.log(2)},r.signum=function(e){return e>0?1:e<0?-1:0},r.dist=function(e,t){return Math.sqrt(r.sqdist(e,t))},r.sqdist=function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},r.qbezierAt=function(e,t,n,r){return(1-r)*(1-r)*e+2*(1-r)*r*t+r*r*n},r.qbezierPtAt=function(e,t,n,i){return{x:r.qbezierAt(e.x,t.x,n.x,i),y:r.qbezierAt(e.y,t.y,n.y,i)}},r.lineAt=function(e,t,n,i){var a={x:t.x-e.x,y:t.y-e.y},o=r.dist(e,t),s={x:a.x/o,y:a.y/o};return n=null==n?0:n,i=null!=i?i:n*o,{x:e.x+s.x*i,y:e.y+s.y*i}},r.lineAtDist=function(e,t,n){return r.lineAt(e,t,void 0,n)},r.triangleAngle=function(e,t,n){var i=r.dist(t,n),a=r.dist(e,n),o=r.dist(e,t);return Math.acos((i*i+a*a-o*o)/(2*i*a))},r.bound=function(e,t,n){return Math.max(e,Math.min(n,t))},r.makeBoundingBox=function(e){if(null==e)return{x1:1/0,y1:1/0,x2:-1/0,y2:-1/0,w:0,h:0};if(null!=e.x1&&null!=e.y1){if(null!=e.x2&&null!=e.y2&&e.x2>=e.x1&&e.y2>=e.y1)return{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,w:e.x2-e.x1,h:e.y2-e.y1};if(null!=e.w&&null!=e.h&&e.w>=0&&e.h>=0)return{x1:e.x1,y1:e.y1,x2:e.x1+e.w,y2:e.y1+e.h,w:e.w,h:e.h}}},r.updateBoundingBox=function(e,t){e.x1=Math.min(e.x1,t.x1),e.x2=Math.max(e.x2,t.x2),e.w=e.x2-e.x1,e.y1=Math.min(e.y1,t.y1),e.y2=Math.max(e.y2,t.y2),e.h=e.y2-e.y1},r.expandBoundingBoxByPoint=function(e,t,n){e.x1=Math.min(e.x1,t),e.x2=Math.max(e.x2,t),e.w=e.x2-e.x1,e.y1=Math.min(e.y1,n),e.y2=Math.max(e.y2,n),e.h=e.y2-e.y1},r.expandBoundingBox=function(e,t){return e.x1-=t,e.x2+=t,e.y1-=t,e.y2+=t,e.w=e.x2-e.x1,e.h=e.y2-e.y1,e},r.boundingBoxesIntersect=function(e,t){return!(e.x1>t.x2)&&(!(t.x1>e.x2)&&(!(e.x2<t.x1)&&(!(t.x2<e.x1)&&(!(e.y2<t.y1)&&(!(t.y2<e.y1)&&(!(e.y1>t.y2)&&!(t.y1>e.y2)))))))},r.inBoundingBox=function(e,t,n){return e.x1<=t&&t<=e.x2&&e.y1<=n&&n<=e.y2},r.pointInBoundingBox=function(e,t){return this.inBoundingBox(e,t.x,t.y)},r.boundingBoxInBoundingBox=function(e,t){return r.inBoundingBox(e,t.x1,t.y1)&&r.inBoundingBox(e,t.x2,t.y2)},r.roundRectangleIntersectLine=function(e,t,n,r,i,a,o){var s=this.getRoundRectangleRadius(i,a),l=i/2,u=a/2,c=void 0,d=n-l+s-o,h=r-u-o,p=n+l-s+o,f=h;if(c=this.finiteLinesIntersect(e,t,n,r,d,h,p,f,!1),c.length>0)return c;var v=n+l+o,g=r-u+s-o,y=v,m=r+u-s+o;if(c=this.finiteLinesIntersect(e,t,n,r,v,g,y,m,!1),c.length>0)return c;var b=n-l+s-o,x=r+u+o,w=n+l-s+o,E=x;if(c=this.finiteLinesIntersect(e,t,n,r,b,x,w,E,!1),c.length>0)return c;var P=n-l-o,C=r-u+s-o,S=P,T=r+u-s+o;if(c=this.finiteLinesIntersect(e,t,n,r,P,C,S,T,!1),c.length>0)return c;var D=void 0,k=n-l+s,_=r-u+s;if(D=this.intersectLineCircle(e,t,n,r,k,_,s+o),D.length>0&&D[0]<=k&&D[1]<=_)return[D[0],D[1]];var M=n+l-s,I=r-u+s;if(D=this.intersectLineCircle(e,t,n,r,M,I,s+o),D.length>0&&D[0]>=M&&D[1]<=I)return[D[0],D[1]];var N=n+l-s,B=r+u-s;if(D=this.intersectLineCircle(e,t,n,r,N,B,s+o),D.length>0&&D[0]>=N&&D[1]>=B)return[D[0],D[1]];var z=n-l+s,L=r+u-s;return D=this.intersectLineCircle(e,t,n,r,z,L,s+o),D.length>0&&D[0]<=z&&D[1]>=L?[D[0],D[1]]:[]},r.inLineVicinity=function(e,t,n,r,i,a,o){var s=o,l=Math.min(n,i),u=Math.max(n,i),c=Math.min(r,a),d=Math.max(r,a);return l-s<=e&&e<=u+s&&c-s<=t&&t<=d+s},r.inBezierVicinity=function(e,t,n,r,i,a,o,s,l){var u={x1:Math.min(n,o,i)-l,x2:Math.max(n,o,i)+l,y1:Math.min(r,s,a)-l,y2:Math.max(r,s,a)+l};return!(e<u.x1||e>u.x2||t<u.y1||t>u.y2)},r.solveQuadratic=function(e,t,n,r){n-=r;var i=t*t-4*e*n;if(i<0)return[];var a=Math.sqrt(i),o=2*e;return[(-t+a)/o,(-t-a)/o]},r.solveCubic=function(e,t,n,r,i){t/=e,n/=e,r/=e;var a=void 0,o=void 0,s=void 0,l=void 0,u=void 0,c=void 0,d=void 0,h=void 0;return o=(3*n-t*t)/9,s=-27*r+t*(9*n-t*t*2),s/=54,a=o*o*o+s*s,i[1]=0,d=t/3,a>0?(u=s+Math.sqrt(a),u=u<0?-Math.pow(-u,1/3):Math.pow(u,1/3),c=s-Math.sqrt(a),c=c<0?-Math.pow(-c,1/3):Math.pow(c,1/3),i[0]=-d+u+c,d+=(u+c)/2,i[4]=i[2]=-d,d=Math.sqrt(3)*(-c+u)/2,i[3]=d,void(i[5]=-d)):(i[5]=i[3]=0,0===a?(h=s<0?-Math.pow(-s,1/3):Math.pow(s,1/3),i[0]=2*h-d,void(i[4]=i[2]=-(h+d))):(o=-o,l=o*o*o,l=Math.acos(s/Math.sqrt(l)),h=2*Math.sqrt(o),i[0]=-d+h*Math.cos(l/3),i[2]=-d+h*Math.cos((l+2*Math.PI)/3),void(i[4]=-d+h*Math.cos((l+4*Math.PI)/3))))},r.sqdistToQuadraticBezier=function(e,t,n,r,i,a,o,s){var l=1*n*n-4*n*i+2*n*o+4*i*i-4*i*o+o*o+r*r-4*r*a+2*r*s+4*a*a-4*a*s+s*s,u=9*n*i-3*n*n-3*n*o-6*i*i+3*i*o+9*r*a-3*r*r-3*r*s-6*a*a+3*a*s,c=3*n*n-6*n*i+n*o-n*e+2*i*i+2*i*e-o*e+3*r*r-6*r*a+r*s-r*t+2*a*a+2*a*t-s*t,d=1*n*i-n*n+n*e-i*e+r*a-r*r+r*t-a*t,h=[];this.solveCubic(l,u,c,d,h);for(var p=[],f=0;f<6;f+=2)Math.abs(h[f+1])<1e-7&&h[f]>=0&&h[f]<=1&&p.push(h[f]);p.push(1),p.push(0);for(var v=-1,g=void 0,y=void 0,m=void 0,b=0;b<p.length;b++)g=Math.pow(1-p[b],2)*n+2*(1-p[b])*p[b]*i+p[b]*p[b]*o,y=Math.pow(1-p[b],2)*r+2*(1-p[b])*p[b]*a+p[b]*p[b]*s,m=Math.pow(g-e,2)+Math.pow(y-t,2),v>=0?m<v&&(v=m):v=m;return v},r.sqdistToFiniteLine=function(e,t,n,r,i,a){var o=[e-n,t-r],s=[i-n,a-r],l=s[0]*s[0]+s[1]*s[1],u=o[0]*o[0]+o[1]*o[1],c=o[0]*s[0]+o[1]*s[1],d=c*c/l;return c<0?u:d>l?(e-i)*(e-i)+(t-a)*(t-a):u-d},r.pointInsidePolygonPoints=function(e,t,n){for(var r=void 0,i=void 0,a=void 0,o=void 0,s=0,l=0;l<n.length/2;l++)if(r=n[2*l],i=n[2*l+1],l+1<n.length/2?(a=n[2*(l+1)],o=n[2*(l+1)+1]):(a=n[2*(l+1-n.length/2)],o=n[2*(l+1-n.length/2)+1]),r==e&&a==e);else{if(!(r>=e&&e>=a||r<=e&&e<=a))continue;(e-r)/(a-r)*(o-i)+i>t&&s++}return s%2!=0},r.pointInsidePolygon=function(e,t,n,i,a,o,s,l,u){var c=new Array(n.length),d=void 0;null!=l[0]?(d=Math.atan(l[1]/l[0]),l[0]<0?d+=Math.PI/2:d=-d-Math.PI/2):d=l;for(var h=Math.cos(-d),p=Math.sin(-d),f=0;f<c.length/2;f++)c[2*f]=o/2*(n[2*f]*h-n[2*f+1]*p),c[2*f+1]=s/2*(n[2*f+1]*h+n[2*f]*p),c[2*f]+=i,c[2*f+1]+=a;var v=void 0;if(u>0){var g=this.expandPolygon(c,-u);v=this.joinLines(g)}else v=c;return r.pointInsidePolygonPoints(e,t,v)},r.joinLines=function(e){for(var t=new Array(e.length/2),n=void 0,r=void 0,i=void 0,a=void 0,o=void 0,s=void 0,l=void 0,u=void 0,c=0;c<e.length/4;c++){n=e[4*c],r=e[4*c+1],i=e[4*c+2],a=e[4*c+3],c<e.length/4-1?(o=e[4*(c+1)],s=e[4*(c+1)+1],l=e[4*(c+1)+2],u=e[4*(c+1)+3]):(o=e[0],s=e[1],l=e[2],u=e[3]);var d=this.finiteLinesIntersect(n,r,i,a,o,s,l,u,!0);t[2*c]=d[0],t[2*c+1]=d[1]}return t},r.expandPolygon=function(e,t){for(var n=new Array(2*e.length),r=void 0,i=void 0,a=void 0,o=void 0,s=0;s<e.length/2;s++){r=e[2*s],i=e[2*s+1],s<e.length/2-1?(a=e[2*(s+1)],o=e[2*(s+1)+1]):(a=e[0],o=e[1]);var l=o-i,u=-(a-r),c=Math.sqrt(l*l+u*u),d=l/c,h=u/c;n[4*s]=r+d*t,n[4*s+1]=i+h*t,n[4*s+2]=a+d*t,n[4*s+3]=o+h*t}return n},r.intersectLineEllipse=function(e,t,n,r,i,a){var o=n-e,s=r-t;o/=i,s/=a;var l=Math.sqrt(o*o+s*s),u=l-1;if(u<0)return[];var c=u/l;return[(n-e)*c+e,(r-t)*c+t]},r.checkInEllipse=function(e,t,n,r,i,a,o){return e-=i,t-=a,e/=n/2+o,t/=r/2+o,e*e+t*t<=1},r.intersectLineCircle=function(e,t,n,r,i,a,o){var s=[n-e,r-t],l=[e-i,t-a],u=s[0]*s[0]+s[1]*s[1],c=2*(l[0]*s[0]+l[1]*s[1]),d=l[0]*l[0]+l[1]*l[1]-o*o,h=c*c-4*u*d;if(h<0)return[];var p=(-c+Math.sqrt(h))/(2*u),f=(-c-Math.sqrt(h))/(2*u),v=Math.min(p,f),g=Math.max(p,f),y=[];if(v>=0&&v<=1&&y.push(v),g>=0&&g<=1&&y.push(g),0===y.length)return[];var m=y[0]*s[0]+e,b=y[0]*s[1]+t;if(y.length>1){if(y[0]==y[1])return[m,b];return[m,b,y[1]*s[0]+e,y[1]*s[1]+t]}return[m,b]},r.findCircleNearPoint=function(e,t,n,r,i){var a=r-e,o=i-t,s=Math.sqrt(a*a+o*o);return[e+a/s*n,t+o/s*n]},r.findMaxSqDistanceToOrigin=function(e){for(var t=1e-6,n=void 0,r=0;r<e.length/2;r++)(n=e[2*r]*e[2*r]+e[2*r+1]*e[2*r+1])>t&&(t=n);return t},r.midOfThree=function(e,t,n){return t<=e&&e<=n||n<=e&&e<=t?e:e<=t&&t<=n||n<=t&&t<=e?t:n},r.finiteLinesIntersect=function(e,t,n,r,i,a,o,s,l){var u=e-i,c=n-e,d=o-i,h=t-a,p=r-t,f=s-a,v=d*h-f*u,g=c*h-p*u,y=f*c-d*p;if(0!==y){var m=v/y,b=g/y;return-.001<=m&&m<=1.001&&-.001<=b&&b<=1.001?[e+m*c,t+m*p]:l?[e+m*c,t+m*p]:[]}return 0===v||0===g?this.midOfThree(e,n,o)===o?[o,s]:this.midOfThree(e,n,i)===i?[i,a]:this.midOfThree(i,o,n)===n?[n,r]:[]:[]},r.polygonIntersectLine=function(e,t,n,i,a,o,s,l){var u=[],c=void 0,d=new Array(n.length),h=!0;5===arguments.length&&(h=!1);var p=void 0;if(h){for(var f=0;f<d.length/2;f++)d[2*f]=n[2*f]*o+i,d[2*f+1]=n[2*f+1]*s+a;if(l>0){var v=r.expandPolygon(d,-l);p=r.joinLines(v)}else p=d}else p=n;for(var g=void 0,y=void 0,m=void 0,b=void 0,x=0;x<p.length/2;x++)g=p[2*x],y=p[2*x+1],x<p.length/2-1?(m=p[2*(x+1)],b=p[2*(x+1)+1]):(m=p[0],b=p[1]),c=this.finiteLinesIntersect(e,t,i,a,g,y,m,b),0!==c.length&&u.push(c[0],c[1]);return u},r.shortenIntersection=function(e,t,n){var r=[e[0]-t[0],e[1]-t[1]],i=Math.sqrt(r[0]*r[0]+r[1]*r[1]),a=(i-n)/i;return a<0&&(a=1e-5),[t[0]+a*r[0],t[1]+a*r[1]]},r.generateUnitNgonPointsFitToSquare=function(e,t){var n=r.generateUnitNgonPoints(e,t);return n=r.fitPolygonToSquare(n)},r.fitPolygonToSquare=function(e){for(var t=void 0,n=void 0,r=e.length/2,i=1/0,a=1/0,o=-1/0,s=-1/0,l=0;l<r;l++)t=e[2*l],n=e[2*l+1],i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,n),s=Math.max(s,n);for(var u=2/(o-i),c=2/(s-a),d=0;d<r;d++)t=e[2*d]=e[2*d]*u,n=e[2*d+1]=e[2*d+1]*c,i=Math.min(i,t),o=Math.max(o,t),a=Math.min(a,n),s=Math.max(s,n);if(a<-1)for(var h=0;h<r;h++)n=e[2*h+1]=e[2*h+1]+(-1-a);return e},r.generateUnitNgonPoints=function(e,t){var n=1/e*2*Math.PI,r=e%2==0?Math.PI/2+n/2:Math.PI/2;r+=t;for(var i=new Array(2*e),a=void 0,o=0;o<e;o++)a=o*n+r,i[2*o]=Math.cos(a),i[2*o+1]=Math.sin(-a);return i},r.getRoundRectangleRadius=function(e,t){return Math.min(e/4,t/4,8)},r.getCutRectangleCornerLength=function(){return 8},r.bezierPtsToQuadCoeff=function(e,t,n){return[e-2*t+n,2*(t-e),e]},r.getBarrelCurveConstants=function(e,t){return{heightOffset:Math.min(15,.05*t),widthOffset:Math.min(100,.25*e),ctrlPtOffsetPct:.05}},e.exports=r},function(e,t,n){"use strict";e.exports="undefined"==typeof window?null:window},function(e,t,n){"use strict";var r=n(1),i={};[n(44),n(46),n(47)].forEach(function(e){r.assign(i,e)}),e.exports=i},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function e(t){if(!(this instanceof e))return new e(t);this.id="Thenable/1.0.7",this.state=0,this.fulfillValue=void 0,this.rejectReason=void 0,this.onFulfilled=[],this.onRejected=[],this.proxy={then:this.then.bind(this)},"function"==typeof t&&t.call(this,this.fulfill.bind(this),this.reject.bind(this))};i.prototype={fulfill:function(e){return a(this,1,"fulfillValue",e)},reject:function(e){return a(this,2,"rejectReason",e)},then:function(e,t){var n=this,r=new i;return n.onFulfilled.push(l(e,r,"fulfill")),n.onRejected.push(l(t,r,"reject")),o(n),r.proxy}};var a=function(e,t,n,r){return 0===e.state&&(e.state=t,e[n]=r,o(e)),e},o=function(e){1===e.state?s(e,"onFulfilled",e.fulfillValue):2===e.state&&s(e,"onRejected",e.rejectReason)},s=function(e,t,n){if(0!==e[t].length){var r=e[t];e[t]=[];var i=function(){for(var e=0;e<r.length;e++)r[e](n)};"function"==typeof setImmediate?setImmediate(i):setTimeout(i,0)}},l=function(e,t,n){return function(r){if("function"!=typeof e)t[n].call(t,r);else{var i;try{i=e(r)}catch(e){return void t.reject(e)}u(t,i)}}},u=function e(t,n){if(t===n||t.proxy===n)return void t.reject(new TypeError("cannot resolve promise with itself"));var i;if("object"===(void 0===n?"undefined":r(n))&&null!==n||"function"==typeof n)try{i=n.then}catch(e){return void t.reject(e)}if("function"!=typeof i)t.fulfill(n);else{var a=!1;try{i.call(n,function(r){a||(a=!0,r===n?t.reject(new TypeError("circular thenable chain")):e(t,r))},function(e){a||(a=!0,t.reject(e))})}catch(e){a||t.reject(e)}}};i.all=function(e){return new i(function(t,n){for(var r=new Array(e.length),i=0,a=function(n,a){r[n]=a,++i===e.length&&t(r)},o=0;o<e.length;o++)!function(t){var r=e[t];null!=r&&null!=r.then?r.then(function(e){a(t,e)},function(e){n(e)}):a(t,r)}(o)})},i.resolve=function(e){return new i(function(t,n){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},e.exports="undefined"!=typeof Promise?Promise:i},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(10),o=function(e){var t=this;if(t._private={selectorText:e,invalid:!0},null==e||r.string(e)&&e.match(/^\s*$/))t.length=0;else if("*"===e||"edge"===e||"node"===e)t[0]=a(),t[0].group="*"===e?e:e+"s",t[0].groupOnly=!0,t[0].length=1,t._private.invalid=!1,t.length=1;else if(r.elementOrCollection(e)){var n=e.collection();t[0]=a(),t[0].collection=n,t[0].length=1,t.length=1}else if(r.fn(e))t[0]=a(),t[0].filter=e,t[0].length=1,t.length=1;else{if(!r.string(e))return void i.error("A selector must be created from a string; found ",e);if(!t.parse(e))return}t._private.invalid=!1},s=o.prototype;s.valid=function(){return!this._private.invalid},s.invalid=function(){return this._private.invalid},s.text=function(){return this._private.selectorText},s.size=function(){return this.length},s.eq=function(e){return this[e]},s.sameText=function(e){return this.text()===e.text()},s.toString=s.selector=function(){if(null!=this._private.toStringCache)return this._private.toStringCache;var e=void 0,t="",n=function(e){return null==e?"":e},i=function(e){return r.string(e)?'"'+e+'"':n(e)},a=function(e){return" "+e+" "};for(e=0;e<this.length;e++){var o=this[e];t+=function t(r){var o="",s=void 0,l=void 0;r.subject===r&&(o+="$");var u=n(r.group);for(o+=u.substring(0,u.length-1),s=0;s<r.data.length;s++){var c=r.data[s];c.value?o+="["+c.field+a(n(c.operator))+i(c.value)+"]":o+="["+n(c.operator)+c.field+"]"}for(s=0;s<r.meta.length;s++){var d=r.meta[s];o+="[["+d.field+a(n(d.operator))+i(d.value)+"]]"}for(s=0;s<r.colonSelectors.length;s++)l=r.colonSelectors[e],o+=l;for(s=0;s<r.ids.length;s++)l="#"+r.ids[e],o+=l;for(s=0;s<r.classes.length;s++)l="."+r.classes[s],o+=l;if(null!=r.source&&null!=r.target&&(o=t(r.source)+" -> "+t(r.target)),null!=r.connectedNodes){var h=r.connectedNodes;o=t(h[0])+" <-> "+t(h[1])}return null!=r.parent&&(o=t(r.parent)+" > "+o),null!=r.ancestor&&(o=t(r.ancestor)+" "+o),null!=r.child&&(o+=" > "+t(r.child)),null!=r.descendant&&(o+=" "+t(r.descendant)),o}(o),this.length>1&&e<this.length-1&&(t+=", ")}return this._private.toStringCache=t,t},[n(50),n(53)].forEach(function(e){return i.assign(s,e)}),e.exports=o},function(e,t,n){"use strict";var r=n(1),i=n(0),a=n(28),o=n(8),s=n(14),l={generate:function(e,t,n){for(var i=null!=n?n:r.uuid();e.hasElementWithId(i);)i=r.uuid();return i}},u=function(e,t,n){if(void 0===e||!i.core(e))return void r.error("A collection must have a reference to the core");var u=new a,c=!1;if(t){if(t.length>0&&i.plainObject(t[0])&&!i.element(t[0])){c=!0;for(var d=[],h=new o,p=0,f=t.length;p<f;p++){var v=t[p];null==v.data&&(v.data={});var g=v.data;if(null==g.id)g.id=l.generate(e,v);else if(e.hasElementWithId(g.id)||h.has(g.id))continue;var y=new s(e,v,!1);d.push(y),h.add(g.id)}t=d}}else t=[];this.length=0;for(var m=0,b=t.length;m<b;m++){var x=t[m];if(null!=x){var w=x._private.data.id;(null==n||n.unique&&!u.has(w))&&(u.set(w,{index:this.length,ele:x}),this[this.length]=x,this.length++)}}this._private={cy:e,map:u},c&&this.restore()},c=s.prototype=u.prototype;c.instanceString=function(){return"collection"},c.spawn=function(e,t,n){return i.core(e)||(n=t,t=e,e=this.cy()),new u(e,t,n)},c.spawnSelf=function(){return this.spawn(this)},c.cy=function(){return this._private.cy},c.renderer=function(){return this._private.cy.renderer()},c.element=function(){return this[0]},c.collection=function(){return i.collection(this)?this:new u(this._private.cy,[this])},c.unique=function(){return new u(this._private.cy,this,{unique:!0})},c.hasElementWithId=function(e){return this._private.map.has(e)},c.getElementById=function(e){var t=this._private.cy,n=this._private.map.get(e);return n?n.ele:new u(t)},c.$id=c.getElementById,c.poolIndex=function(){var e=this._private.cy,t=e._private.elements,n=this._private.data.id;return t._private.map.get(n).index},c.json=function(e){var t=this.element(),n=this.cy();if(null==t&&e)return this;if(null!=t){var a=t._private;if(i.plainObject(e)){n.startBatch(),e.data&&t.data(e.data),e.position&&t.position(e.position);var o=function(n,r,i){var o=e[n];null!=o&&o!==a[n]&&(o?t[r]():t[i]())};return o("removed","remove","restore"),o("selected","select","unselect"),o("selectable","selectify","unselectify"),o("locked","lock","unlock"),o("grabbable","grabify","ungrabify"),null!=e.classes&&t.classes(e.classes),n.endBatch(),this}if(void 0===e){var s={data:r.copy(a.data),position:r.copy(a.position),group:a.group,removed:a.removed,selected:a.selected,selectable:a.selectable,locked:a.locked,grabbable:a.grabbable,classes:null};s.classes="";var l=0;return a.classes.forEach(function(e){return s.classes+=0==l++?e:" "+e}),s}}},c.jsons=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t],r=n.json();e.push(r)}return e},c.clone=function(){for(var e=this.cy(),t=[],n=0;n<this.length;n++){var r=this[n],i=r.json(),a=new s(e,i,!1);t.push(a)}return new u(e,t)},c.copy=c.clone,c.restore=function(e){var t=this,n=t.cy(),o=n._private;void 0===e&&(e=!0);for(var s=[],c=[],d=void 0,h=0,p=t.length;h<p;h++){var f=t[h];f.removed()&&(f.isNode()?s.push(f):c.push(f))}d=s.concat(c);var v=void 0,g=function(){d.splice(v,1),v--};for(v=0;v<d.length;v++){var y=d[v],m=y._private,b=m.data;if(y.clearTraversalCache(),void 0===b.id)b.id=l.generate(n,y);else if(i.number(b.id))b.id=""+b.id;else{if(i.emptyString(b.id)||!i.string(b.id)){r.error("Can not create element with invalid string ID `"+b.id+"`"),g();continue}if(n.hasElementWithId(b.id)){r.error("Can not create second element with ID `"+b.id+"`"),g();continue}}var x=b.id;if(y.isNode()){var w=m.position;null==w.x&&(w.x=0),null==w.y&&(w.y=0)}if(y.isEdge()){for(var E=y,P=["source","target"],C=P.length,S=!1,T=0;T<C;T++){var D=P[T],k=b[D];i.number(k)&&(k=b[D]=""+b[D]),null==k||""===k?(r.error("Can not create edge `"+x+"` with unspecified "+D),S=!0):n.hasElementWithId(k)||(r.error("Can not create edge `"+x+"` with nonexistant "+D+" `"+k+"`"),S=!0)}if(S){g();continue}var _=n.getElementById(b.source),M=n.getElementById(b.target);_._private.edges.push(E),M._private.edges.push(E),E._private.source=_,E._private.target=M}m.map=new a,m.map.set(x,{ele:y,index:0}),m.removed=!1,n.addToPool(y)}for(var I=0;I<s.length;I++){var N=s[I],B=N._private.data;i.number(B.parent)&&(B.parent=""+B.parent);var z=B.parent;if(null!=z){var L=n.getElementById(z);if(L.empty())B.parent=void 0;else{for(var A=!1,O=L;!O.empty();){if(N.same(O)){A=!0,B.parent=void 0;break}O=O.parent()}A||(L[0]._private.children.push(N),N._private.parent=L[0],o.hasCompoundNodes=!0)}}}if(d.length>0){for(var R=new u(n,d),V=0;V<R.length;V++){var q=R[V];q.isNode()||(q.parallelEdges().clearTraversalCache(),q.source().clearTraversalCache(),q.target().clearTraversalCache())}var F=void 0;F=o.hasCompoundNodes?n.collection().merge(R).merge(R.connectedNodes()).merge(R.parent()):R,F.dirtyCompoundBoundsCache().updateStyle(e),e?R.emitAndNotify("add"):R.emit("add")}return t},c.removed=function(){var e=this[0];return e&&e._private.removed},c.inside=function(){var e=this[0];return e&&!e._private.removed},c.remove=function(e){function t(e){for(var t=e._private.edges,n=0;n<t.length;n++)i(t[n])}function n(e){for(var t=e._private.children,n=0;n<t.length;n++)i(t[n])}function i(e){var r=c[e.id()];e.removed()||r||(c[e.id()]=!0,e.isNode()?(l.push(e),t(e),n(e)):l.unshift(e))}function a(e,t){var n=e._private.edges;r.removeFromArray(n,t),e.clearTraversalCache()}var o=this,s=[],l=[],c={},d=o._private.cy;void 0===e&&(e=!0);for(var h=0,p=o.length;h<p;h++){i(o[h])}var f=[];f.ids={},o.dirtyCompoundBoundsCache(),d.removeFromPool(l);for(var v=0;v<l.length;v++){var g=l[v];if(g._private.removed=!0,s.push(g),g.isEdge()){var y=g.source()[0],m=g.target()[0];a(y,g),a(m,g),function(e){e.parallelEdges().clearTraversalCache()}(g)}else{var b=g.parent();0!==b.length&&function(e,t){t=t[0],e=e[0];var n=e._private.children,i=e.id();r.removeFromArray(n,t),f.ids[i]||(f.ids[i]=!0,f.push(e))}(b,g)}}var x=d._private.elements;d._private.hasCompoundNodes=!1;for(var w=0;w<x.length;w++){if(x[w].isParent()){d._private.hasCompoundNodes=!0;break}}var E=new u(this.cy(),s);E.size()>0&&(e&&this.cy().notify({type:"remove",eles:E}),E.emit("remove"));for(var P=0;P<f.length;P++){var C=f[P];C.removed()||C.updateStyle()}return new u(d,s)},c.move=function(e){var t=this._private.cy;if(void 0!==e.source||void 0!==e.target){var n=e.source,r=e.target,i=t.hasElementWithId(n),a=t.hasElementWithId(r);if(i||a){var o=this.jsons();this.remove();for(var s=0;s<o.length;s++){var l=o[s],u=this[s];"edges"===l.group&&(i&&(l.data.source=n),a&&(l.data.target=r),l.scratch=u._private.scratch)}return t.add(o)}}else if(void 0!==e.parent){var c=e.parent,d=null===c||t.hasElementWithId(c);if(d){var h=this.jsons(),p=this.descendants(),f=p.union(p.union(this).connectedEdges()).jsons();this.remove();for(var v=0;v<h.length;v++){var g=h[v],y=this[v];"nodes"===g.group&&(g.data.parent=null===c?void 0:c,g.scratch=y._private.scratch)}return t.add(h.concat(f))}}return this},[n(29),n(43),n(48),n(49),n(54),n(55),n(56),n(57),n(62),n(63),n(64),n(7),n(65),n(66),n(67),n(68),n(69)].forEach(function(e){r.extend(c,e)}),e.exports=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=("function"==typeof Symbol&&Symbol.iterator,function(){function e(t){if(r(this,e),this._obj=Object.create(null),null!=t){var n=void 0;n=null!=t.instanceString&&t.instanceString()===this.instanceString()?t.toArray():t;for(var i=0;i<n.length;i++)this.add(n[i])}}return i(e,[{key:"instanceString",value:function(){return"set"}},{key:"add",value:function(e){this._obj[e]=1}},{key:"delete",value:function(e){this._obj[e]=0}},{key:"clear",value:function(){this._obj=Object.create(null)}},{key:"has",value:function(e){return 1===this._obj[e]}},{key:"toArray",value:function(){var e=this;return Object.keys(this._obj).filter(function(t){return e.has(t)})}},{key:"forEach",value:function(e,t){return this.toArray().forEach(e,t)}},{key:"size",get:function(){return this.toArray().length}}]),e}());e.exports=a},function(e,t,n){"use strict";e.exports=n(32)},function(e,t,n){"use strict";var r=function(){return{classes:[],colonSelectors:[],data:[],group:null,ids:[],meta:[],collection:null,filter:null,parent:null,ancestor:null,subject:null,child:null,descendant:null}};e.exports=r},function(e,t,n){"use strict";function r(e){i.assign(this,l,e),this.listeners=[],this.emitting=0}var i=n(1),a=n(0),o=n(16),s=/^([^.]+)(\.(?:[^.]+))?$/,l={qualifierCompare:function(e,t){return e===t},eventMatches:function(){return!0},eventFields:function(){return{}},callbackContext:function(e){return e},beforeEmit:function(){},afterEmit:function(){},bubble:function(){return!1},parent:function(){return null},context:void 0},u=r.prototype,c=function(e,t,n,r,o,l,u){a.fn(r)&&(o=r,r=null),u&&(l=null==l?u:i.assign({},l,u));for(var c=n.split(/\s+/),d=0;d<c.length;d++){var h=c[d];if(!a.emptyString(h)){var p=h.match(s);if(p){if(!1===t(e,h,p[1],p[2]?p[2]:null,r,o,l))break}}}},d=function(e,t){return new o(t.type,i.assign(t,e.eventFields(e.context)))},h=function(e,t,n){if(a.event(n))return void t(e,n);if(a.plainObject(n))return void t(e,d(e,n));for(var r=n.split(/\s+/),i=0;i<r.length;i++){var o=r[i];if(!a.emptyString(o)){var l=o.match(s);if(l){var u=l[1],c=l[2]?l[2]:null;t(e,d(e,{type:u,namespace:c,target:e.context}))}}}};u.on=u.addListener=function(e,t,n,r,i){return c(this,function(e,t,n,r,i,o,s){a.fn(o)&&e.listeners.push({event:t,callback:o,type:n,namespace:r,qualifier:i,conf:s})},e,t,n,r,i),this},u.one=function(e,t,n,r){return this.on(e,t,n,r,{one:!0})},u.removeListener=u.off=function(e,t,n,r){var a=this;0!==this.emitting&&(this.listeners=i.copyArray(this.listeners));for(var o=this.listeners,s=o.length-1;s>=0;s--)!function(i){var s=o[i];c(a,function(e,t,n,r,a,l){if(s.type===n&&(!r||s.namespace===r)&&(!a||e.qualifierCompare(s.qualifier,a))&&(!l||s.callback===l))return o.splice(i,1),!1},e,t,n,r)}(s);return this},u.emit=u.trigger=function(e,t,n){var r=this.listeners,o=r.length;return this.emitting++,a.array(t)||(t=[t]),h(this,function(e,a){null!=n&&(r=[{event:a.event,type:a.type,namespace:a.namespace,callback:n}],o=r.length);for(var s=0;s<o;s++)!function(n){var o=r[n];if(o.type===a.type&&(!o.namespace||o.namespace===a.namespace||".*"===o.namespace)&&e.eventMatches(e.context,o,a)){var s=[a];null!=t&&i.push(s,t),e.beforeEmit(e.context,o,a),o.conf&&o.conf.one&&(e.listeners=e.listeners.filter(function(e){return e!==o}));var l=e.callbackContext(e.context,o,a),u=o.callback.apply(l,s);e.afterEmit(e.context,o,a),!1===u&&(a.stopPropagation(),a.preventDefault())}}(s);e.bubble(e.context)&&!a.isPropagationStopped()&&e.parent(e.context).emit(a,t)},e),this.emitting--,this},e.exports=r},function(e,t,n){"use strict";var r=n(3),i=n(1),a=n(7),o=n(0),s=n(5),l=n(4),u=function(e){var t=this;e=i.extend({},e);var n=e.container;n&&!o.htmlElement(n)&&o.htmlElement(n[0])&&(n=n[0]);var l=n?n._cyreg:null;(l=l||{})&&l.cy&&(l.cy.destroy(),l={});var u=l.readies=l.readies||[];n&&(n._cyreg=l),l.cy=t;var c=void 0!==r&&void 0!==n&&!e.headless,d=e;d.layout=i.extend({name:c?"grid":"null"},d.layout),d.renderer=i.extend({name:c?"canvas":"null"},d.renderer);var h=function(e,t,n){return void 0!==t?t:void 0!==n?n:e},p=this._private={container:n,ready:!1,options:d,elements:new a(this),listeners:[],aniEles:new a(this),scratch:{},layout:null,renderer:null,destroyed:!1,notificationsEnabled:!0,minZoom:1e-50,maxZoom:1e50,zoomingEnabled:h(!0,d.zoomingEnabled),userZoomingEnabled:h(!0,d.userZoomingEnabled),panningEnabled:h(!0,d.panningEnabled),userPanningEnabled:h(!0,d.userPanningEnabled),boxSelectionEnabled:h(!0,d.boxSelectionEnabled),autolock:h(!1,d.autolock,d.autolockNodes),autoungrabify:h(!1,d.autoungrabify,d.autoungrabifyNodes),autounselectify:h(!1,d.autounselectify),styleEnabled:void 0===d.styleEnabled?c:d.styleEnabled,zoom:o.number(d.zoom)?d.zoom:1,pan:{x:o.plainObject(d.pan)&&o.number(d.pan.x)?d.pan.x:0,y:o.plainObject(d.pan)&&o.number(d.pan.y)?d.pan.y:0},animation:{current:[],queue:[]},hasCompoundNodes:!1};this.createEmitter();var f=d.selectionType;p.selectionType=void 0===f||"additive"!==f&&"single"!==f?"single":f,o.number(d.minZoom)&&o.number(d.maxZoom)&&d.minZoom<d.maxZoom?(p.minZoom=d.minZoom,p.maxZoom=d.maxZoom):o.number(d.minZoom)&&void 0===d.maxZoom?p.minZoom=d.minZoom:o.number(d.maxZoom)&&void 0===d.minZoom&&(p.maxZoom=d.maxZoom);p.styleEnabled&&t.setStyle([]),t.initRenderer(i.extend({hideEdgesOnViewport:d.hideEdgesOnViewport,textureOnViewport:d.textureOnViewport,wheelSensitivity:o.number(d.wheelSensitivity)&&d.wheelSensitivity>0?d.wheelSensitivity:1,motionBlur:void 0!==d.motionBlur&&d.motionBlur,motionBlurOpacity:void 0===d.motionBlurOpacity?.05:d.motionBlurOpacity,pixelRatio:o.number(d.pixelRatio)&&d.pixelRatio>0?d.pixelRatio:void 0,desktopTapThreshold:void 0===d.desktopTapThreshold?4:d.desktopTapThreshold,touchTapThreshold:void 0===d.touchTapThreshold?8:d.touchTapThreshold},d.renderer));var v=function(e,n,r){t.notifications(!1);var a=t.mutableElements();a.length>0&&a.remove(),null!=e&&(o.plainObject(e)||o.array(e))&&t.add(e),t.one("layoutready",function(e){t.notifications(!0),t.emit(e),t.notify({type:"load",eles:t.mutableElements()}),t.one("load",n),t.emit("load")}).one("layoutstop",function(){t.one("done",r),t.emit("done")});var s=i.extend({},t._private.options.layout);s.eles=t.elements(),t.layout(s).run()};!function(e,t){if(e.some(o.promise))return s.all(e).then(t);t(e)}([d.style,d.elements],function(e){var n=e[0],r=e[1];p.styleEnabled&&t.style().append(n),v(r,function(){t.startAnimationLoop(),p.ready=!0,o.fn(d.ready)&&t.on("ready",d.ready);for(var e=0;e<u.length;e++){var n=u[e];t.on("ready",n)}l&&(l.readies=[]),t.emit("ready")},d.done)})},c=u.prototype;i.extend(c,{instanceString:function(){return"core"},isReady:function(){return this._private.ready},isDestroyed:function(){return this._private.destroyed},ready:function(e){return this.isReady()?this.emitter().emit("ready",[],e):this.on("ready",e),this},destroy:function(){var e=this;if(!e.isDestroyed())return e.stopAnimationLoop(),e.destroyRenderer(),this.emit("destroy"),e._private.destroyed=!0,e},hasElementWithId:function(e){return this._private.elements.hasElementWithId(e)},getElementById:function(e){return this._private.elements.getElementById(e)},selectionType:function(){return this._private.selectionType},hasCompoundNodes:function(){return this._private.hasCompoundNodes},headless:function(){return"null"===this._private.options.renderer.name},styleEnabled:function(){return this._private.styleEnabled},addToPool:function(e){return this._private.elements.merge(e),this},removeFromPool:function(e){return this._private.elements.unmerge(e),this},container:function(){return this._private.container},options:function(){return i.copy(this._private.options)},json:function(e){var t=this,n=t._private,r=t.mutableElements();if(o.plainObject(e)){if(t.startBatch(),e.elements){var a={},s=function(e,n){for(var r=0;r<e.length;r++){var o=e[r],s=o.data.id,l=t.getElementById(s);a[s]=!0,0!==l.length?l.json(o):n?t.add(i.extend({group:n},o)):t.add(o)}};if(o.array(e.elements))s(e.elements);else for(var l=["nodes","edges"],u=0;u<l.length;u++){var c=l[u],d=e.elements[c];o.array(d)&&s(d,c)}r.stdFilter(function(e){return!a[e.id()]}).remove()}e.style&&t.style(e.style),null!=e.zoom&&e.zoom!==n.zoom&&t.zoom(e.zoom),e.pan&&(e.pan.x===n.pan.x&&e.pan.y===n.pan.y||t.pan(e.pan));for(var h=["minZoom","maxZoom","zoomingEnabled","userZoomingEnabled","panningEnabled","userPanningEnabled","boxSelectionEnabled","autolock","autoungrabify","autounselectify"],p=0;p<h.length;p++){var f=h[p];null!=e[f]&&t[f](e[f])}return t.endBatch(),this}if(void 0===e){var v={};return v.elements={},r.forEach(function(e){var t=e.group();v.elements[t]||(v.elements[t]=[]),v.elements[t].push(e.json())}),this._private.styleEnabled&&(v.style=t.style().json()),v.zoomingEnabled=t._private.zoomingEnabled,v.userZoomingEnabled=t._private.userZoomingEnabled,v.zoom=t._private.zoom,v.minZoom=t._private.minZoom,v.maxZoom=t._private.maxZoom,v.panningEnabled=t._private.panningEnabled,v.userPanningEnabled=t._private.userPanningEnabled,v.pan=i.copy(t._private.pan),v.boxSelectionEnabled=t._private.boxSelectionEnabled,v.renderer=i.copy(t._private.options.renderer),v.hideEdgesOnViewport=t._private.options.hideEdgesOnViewport,v.textureOnViewport=t._private.options.textureOnViewport,v.wheelSensitivity=t._private.options.wheelSensitivity,v.motionBlur=t._private.options.motionBlur,v}},scratch:l.data({field:"scratch",bindingEvent:"scratch",allowBinding:!0,allowSetting:!0,settingEvent:"scratch",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0}),removeScratch:l.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:!0})}),c.$id=c.getElementById,[n(70),n(71),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(94)].forEach(function(e){i.extend(c,e)}),e.exports=u},function(e,t,n){"use strict";e.exports=function(e,t){t||(t=function(){if(1===arguments.length)return arguments[0];if(0===arguments.length)return"undefined";for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return e.join("$")});var n=function n(){var r=this,i=arguments,a=void 0,o=t.apply(r,i),s=n.cache;return(a=s[o])||(a=s[o]=e.apply(r,i)),a};return n.cache={},n}},function(e,t,n){"use strict";var r=n(1),i=n(0),a=n(8),o=function(e,t,n){if(n=!(void 0!==n&&!n),void 0===e||void 0===t||!i.core(e))return void r.error("An element must have a core reference and parameters set");var o=t.group;if(null==o&&(o=t.data&&null!=t.data.source&&null!=t.data.target?"edges":"nodes"),"nodes"!==o&&"edges"!==o)return void r.error("An element must be of type `nodes` or `edges`; you specified `"+o+"`");this.length=1,this[0]=this;var s=this._private={cy:e,single:!0,data:t.data||{},position:t.position||{},autoWidth:void 0,autoHeight:void 0,autoPadding:void 0,compoundBoundsClean:!1,listeners:[],group:o,style:{},rstyle:{},styleCxts:[],removed:!0,selected:!!t.selected,selectable:void 0===t.selectable||!!t.selectable,locked:!!t.locked,grabbed:!1,grabbable:void 0===t.grabbable||!!t.grabbable,active:!1,classes:new a,animation:{current:[],queue:[]},rscratch:{},scratch:t.scratch||{},edges:[],children:[],parent:null,traversalCache:{},backgrounding:!1};if(t.renderedPosition){var l=t.renderedPosition,u=e.pan(),c=e.zoom();s.position={x:(l.x-u.x)/c,y:(l.y-u.y)/c}}if(i.string(t.classes))for(var d=t.classes.split(/\s+/),h=0,p=d.length;h<p;h++){var f=d[h];f&&""!==f&&s.classes.add(f)}(t.style||t.css)&&e.style().applyBypass(this,t.style||t.css),this.createEmitter(),(void 0===n||n)&&this.restore()};e.exports=o},function(e,t,n){"use strict";var r=n(1),i=[{selector:":selected",matches:function(e){return e.selected()}},{selector:":unselected",matches:function(e){return!e.selected()}},{selector:":selectable",matches:function(e){return e.selectable()}},{selector:":unselectable",matches:function(e){return!e.selectable()}},{selector:":locked",matches:function(e){return e.locked()}},{selector:":unlocked",matches:function(e){return!e.locked()}},{selector:":visible",matches:function(e){return e.visible()}},{selector:":hidden",matches:function(e){return!e.visible()}},{selector:":transparent",matches:function(e){return e.transparent()}},{selector:":grabbed",matches:function(e){return e.grabbed()}},{selector:":free",matches:function(e){return!e.grabbed()}},{selector:":removed",matches:function(e){return e.removed()}},{selector:":inside",matches:function(e){return!e.removed()}},{selector:":grabbable",matches:function(e){return e.grabbable()}},{selector:":ungrabbable",matches:function(e){return!e.grabbable()}},{selector:":animated",matches:function(e){return e.animated()}},{selector:":unanimated",matches:function(e){return!e.animated()}},{selector:":parent",matches:function(e){return e.isParent()}},{selector:":childless",matches:function(e){return e.isChildless()}},{selector:":child",matches:function(e){return e.isChild()}},{selector:":orphan",matches:function(e){return e.isOrphan()}},{selector:":nonorphan",matches:function(e){return e.isChild()}},{selector:":loop",matches:function(e){return e.isLoop()}},{selector:":simple",matches:function(e){return e.isSimple()}},{selector:":active",matches:function(e){return e.active()}},{selector:":inactive",matches:function(e){return!e.active()}},{selector:":backgrounding",matches:function(e){return e.backgrounding()}},{selector:":nonbackgrounding",matches:function(e){return!e.backgrounding()}}].sort(function(e,t){return r.sort.descending(e.selector,t.selector)}),a=function e(t,n){return(e.lookup=e.lookup||function(){for(var e={},t=void 0,n=0;n<i.length;n++)t=i[n],e[t.selector]=t.matches;return e}())[t](n)},o="("+i.map(function(e){return e.selector}).join("|")+")";e.exports={stateSelectors:i,stateSelectorMatches:a,stateSelectorRegex:o}},function(e,t,n){"use strict";function r(){return!1}function i(){return!0}/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var a=function(e,t){this.recycle(e,t)};a.prototype={instanceString:function(){return"event"},recycle:function(e,t){if(this.isImmediatePropagationStopped=this.isPropagationStopped=this.isDefaultPrevented=r,null!=e&&e.preventDefault?(this.type=e.type,this.isDefaultPrevented=e.defaultPrevented?i:r):null!=e&&e.type?t=e:this.type=e,null!=t&&(this.originalEvent=t.originalEvent,this.type=null!=t.type?t.type:this.type,this.cy=t.cy,this.target=t.target,this.position=t.position,this.renderedPosition=t.renderedPosition,this.namespace=t.namespace,this.layout=t.layout),null!=this.cy&&null!=this.position&&null==this.renderedPosition){var n=this.position,a=this.cy.zoom(),o=this.cy.pan();this.renderedPosition={x:n.x*a+o.x,y:n.y*a+o.y}}this.timeStamp=e&&e.timeStamp||Date.now()},preventDefault:function(){this.isDefaultPrevented=i;var e=this.originalEvent;e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){this.isPropagationStopped=i;var e=this.originalEvent;e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i,this.stopPropagation()},isDefaultPrevented:r,isPropagationStopped:r,isImmediatePropagationStopped:r},e.exports=a},function(e,t,n){"use strict";var r=n(1),i=function(e,t){function n(e){var t=e.pstyle("z-compound-depth");return"auto"===t.value?o?e.zDepth():0:"bottom"===t.value?-1:"top"===t.value?r.MAX_INT:0}function i(e){return"auto"===e.pstyle("z-index-compare").value&&e.isNode()?1:0}var a=e.cy(),o=a.hasCompoundNodes(),s=n(e)-n(t);if(0!==s)return s;var l=i(e)-i(t);if(0!==l)return l;var u=e.pstyle("z-index").value-t.pstyle("z-index").value;return 0!==u?u:e.poolIndex()-t.poolIndex()};e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(6),o=function e(t){return this instanceof e?r.core(t)?(this._private={cy:t,coreStyle:{}},this.length=0,void this.resetToDefault()):void i.error("A style must have a core reference"):new e(t)},s=o.prototype;s.instanceString=function(){return"style"},s.clear=function(){for(var e=0;e<this.length;e++)this[e]=void 0;return this.length=0,this._private.newStyle=!0,this},s.resetToDefault=function(){return this.clear(),this.addDefaultStylesheet(),this},s.core=function(){return this._private.coreStyle},s.selector=function(e){var t="core"===e?null:new a(e),n=this.length++;return this[n]={selector:t,properties:[],mappedProperties:[],index:n},this},s.css=function(){var e=this,t=arguments;switch(t.length){case 1:for(var n=t[0],r=0;r<e.properties.length;r++){var a=e.properties[r],o=n[a.name];void 0===o&&(o=n[i.dash2camel(a.name)]),void 0!==o&&this.cssRule(a.name,o)}break;case 2:this.cssRule(t[0],t[1])}return this},s.style=s.css,s.cssRule=function(e,t){var n=this.parse(e,t);if(n){var r=this.length-1;this[r].properties.push(n),this[r].properties[n.name]=n,n.name.match(/pie-(\d+)-background-size/)&&n.value&&(this._private.hasPie=!0),n.mapped&&this[r].mappedProperties.push(n);!this[r].selector&&(this._private.coreStyle[n.name]=n)}return this},s.append=function(e){return r.stylesheet(e)?e.appendToStyle(this):r.array(e)?this.appendFromJson(e):r.string(e)&&this.appendFromString(e),this},o.fromJson=function(e,t){var n=new o(e);return n.fromJson(t),n},o.fromString=function(e,t){return new o(e).fromString(t)},[n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93)].forEach(function(e){i.extend(s,e)}),o.types=s.types,o.properties=s.properties,e.exports=o},function(e,t,n){"use strict";var r=n(1);e.exports={setupDequeueing:function(e){return function(){var t=this,n=this.renderer;if(!t.dequeueingSetup){t.dequeueingSetup=!0;var i=r.debounce(function(){n.redrawHint("eles",!0),n.redrawHint("drag",!0),n.redraw()},e.deqRedrawThreshold),a=function(a,o){for(var s=r.performanceNow(),l=n.averageRedrawTime,u=n.lastRedrawTime,c=[],d=n.cy.extent(),h=n.getPixelRatio();;){var p=r.performanceNow(),f=p-s,v=p-o;if(u<1e3/60){var g=1e3/60-(a?l:0);if(v>=e.deqFastCost*g)break}else if(a){if(f>=e.deqCost*u||f>=e.deqAvgCost*l)break}else if(v>=e.deqNoDrawCost*(1e3/60))break;var y=e.deq(t,h,d);if(!(y.length>0))break;for(var m=0;m<y.length;m++)c.push(y[m])}c.length>0&&(e.onDeqd(t,c),!a&&e.shouldRedraw(t,c,h,d)&&i())},o=e.priority||r.noop;n.beforeRender(a,o(t))}}}}},function(e,t,n){"use strict";var r=n(0),i=n(12),a=n(95),o=n(137),s=function(e){return void 0===e&&(e={}),r.plainObject(e)?new i(e):r.string(e)?a.apply(a,arguments):void 0};s.use=function(e){var t=Array.prototype.slice.call(arguments,1);return t.unshift(s),e.apply(null,t),this},s.version=n(138),s.stylesheet=s.Stylesheet=o,e.exports=s},function(e,t,n){"use strict";var r=n(0);e.exports={hex2tuple:function(e){if((4===e.length||7===e.length)&&"#"===e[0]){var t=4===e.length,n=void 0,r=void 0,i=void 0;return t?(n=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16),i=parseInt(e[3]+e[3],16)):(n=parseInt(e[1]+e[2],16),r=parseInt(e[3]+e[4],16),i=parseInt(e[5]+e[6],16)),[n,r,i]}},hsl2tuple:function(e){function t(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var n=void 0,r=void 0,i=void 0,a=void 0,o=void 0,s=void 0,l=void 0,u=void 0,c=new RegExp("^"+this.regex.hsla+"$").exec(e);if(c){if(r=parseInt(c[1]),r<0?r=(360- -1*r%360)%360:r>360&&(r%=360),r/=360,(i=parseFloat(c[2]))<0||i>100)return;if(i/=100,(a=parseFloat(c[3]))<0||a>100)return;if(a/=100,void 0!==(o=c[4])&&((o=parseFloat(o))<0||o>1))return;if(0===i)s=l=u=Math.round(255*a);else{var d=a<.5?a*(1+i):a+i-a*i,h=2*a-d;s=Math.round(255*t(h,d,r+1/3)),l=Math.round(255*t(h,d,r)),u=Math.round(255*t(h,d,r-1/3))}n=[s,l,u,o]}return n},rgb2tuple:function(e){var t=void 0,n=new RegExp("^"+this.regex.rgba+"$").exec(e);if(n){t=[];for(var r=[],i=1;i<=3;i++){var a=n[i];if("%"===a[a.length-1]&&(r[i]=!0),a=parseFloat(a),r[i]&&(a=a/100*255),a<0||a>255)return;t.push(Math.floor(a))}var o=r[1]||r[2]||r[3],s=r[1]&&r[2]&&r[3];if(o&&!s)return;var l=n[4];if(void 0!==l){if((l=parseFloat(l))<0||l>1)return;t.push(l)}}return t},colorname2tuple:function(e){return this.colors[e.toLowerCase()]},color2tuple:function(e){return(r.array(e)?e:null)||this.colorname2tuple(e)||this.hex2tuple(e)||this.rgb2tuple(e)||this.hsl2tuple(e)},colors:{transparent:[0,0,0,0],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}},function(e,t,n){"use strict";var r=n(0);e.exports={mapEmpty:function(e){return null==e||0===Object.keys(e).length},pushMap:function(e){var t=this.getMap(e);null==t?this.setMap(this.extend({},e,{value:[e.value]})):t.push(e.value)},setMap:function(e){for(var t=e.map,n=e.keys,i=n.length,a=0;a<i;a++){var o=n[a];r.plainObject(o)&&this.error("Tried to set map with object key"),a<n.length-1?(null==t[o]&&(t[o]={}),t=t[o]):t[o]=e.value}},getMap:function(e){for(var t=e.map,n=e.keys,i=n.length,a=0;a<i;a++){var o=n[a];if(r.plainObject(o)&&this.error("Tried to get map with object key"),null==(t=t[o]))return t}return t},deleteMap:function(e){for(var t=e.map,n=e.keys,i=n.length,a=e.keepChildren,o=0;o<i;o++){var s=n[o];r.plainObject(s)&&this.error("Tried to delete map with object key");if(o===e.keys.length-1)if(a)for(var l=Object.keys(t),u=0;u<l.length;u++){var c=l[u];a[c]||(t[c]=void 0)}else t[s]=void 0;else t=t[s]}}}},function(e,t,n){"use strict";var r="(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";e.exports={regex:{number:r,rgba:"rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",rgbaNoBackRefs:"rgb[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",hsla:"hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",hslaNoBackRefs:"hsl[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",hex3:"\\#[0-9a-fA-F]{3}",hex6:"\\#[0-9a-fA-F]{6}"}}},function(e,t,n){"use strict";var r=n(13),i=n(0);e.exports={camel2dash:r(function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}),dash2camel:r(function(e){return e.replace(/(-\w)/g,function(e){return e[1].toUpperCase()})}),prependCamel:r(function(e,t){return e+t[0].toUpperCase()+t.substring(1)},function(e,t){return e+"$"+t}),capitalize:function(e){return i.emptyString(e)?e:e.charAt(0).toUpperCase()+e.substring(1)}}},function(e,t,n){"use strict";var r=n(3),i=r?r.performance:null,a={},o=i&&i.now?function(){return i.now()}:function(){return Date.now()},s=function(){if(r){if(r.requestAnimationFrame)return function(e){r.requestAnimationFrame(e)};if(r.mozRequestAnimationFrame)return function(e){r.mozRequestAnimationFrame(e)};if(r.webkitRequestAnimationFrame)return function(e){r.webkitRequestAnimationFrame(e)};if(r.msRequestAnimationFrame)return function(e){r.msRequestAnimationFrame(e)}}return function(e){e&&setTimeout(function(){e(o())},1e3/60)}}();a.requestAnimationFrame=function(e){s(e)},a.performanceNow=o,a.debounce=n(26),a.now=function(){return Date.now()},e.exports=a},function(e,t){function n(e,t,n){function i(t){var n=v,r=g;return v=g=void 0,C=t,m=e.apply(r,n)}function a(e){return C=e,b=setTimeout(c,t),S?i(e):m}function l(e){var n=e-P,r=e-C,i=t-n;return T?w(i,y-r):i}function u(e){var n=e-P,r=e-C;return void 0===P||n>=t||n<0||T&&r>=y}function c(){var e=E();if(u(e))return d(e);b=setTimeout(c,l(e))}function d(e){return b=void 0,D&&v?i(e):(v=g=void 0,m)}function h(){void 0!==b&&clearTimeout(b),C=0,v=P=g=b=void 0}function p(){return void 0===b?m:d(E())}function f(){var e=E(),n=u(e);if(v=arguments,g=this,P=e,n){if(void 0===b)return a(P);if(T)return b=setTimeout(c,t),i(P)}return void 0===b&&(b=setTimeout(c,t)),m}var v,g,y,m,b,P,C=0,S=!1,T=!1,D=!0;if("function"!=typeof e)throw new TypeError(s);return t=o(t)||0,r(n)&&(S=!!n.leading,T="maxWait"in n,y=T?x(o(n.maxWait)||0,t):y,D="trailing"in n?!!n.trailing:D),f.cancel=h,f.flush=p,f}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&b.call(e)==u}function o(e){if("number"==typeof e)return e;if(a(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=h.test(e);return n||p.test(e)?f(e.slice(2),n?2:8):d.test(e)?l:+e}var s="Expected a function",l=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,f=parseInt,v="object"==typeof global&&global&&global.Object===Object&&global,g="object"==typeof self&&self&&self.Object===Object&&self,y=v||g||Function("return this")(),m=Object.prototype,b=m.toString,x=Math.max,w=Math.min,E=function(){return y.Date.now()};e.exports=n},function(e,t,n){"use strict";function r(e,t){return e<t?-1:e>t?1:0}function i(e,t){return-1*r(e,t)}e.exports={sort:{ascending:r,descending:i}}},function(e,t,n){"use strict";function r(){this._obj={}}var i=r.prototype;i.set=function(e,t){this._obj[e]=t},i.delete=function(e){this._obj[e]=null},i.has=function(e){return null!=this._obj[e]},i.get=function(e){return this._obj[e]},e.exports=r},function(e,t,n){"use strict";var r=n(1),i={};[n(30),n(31),n(34),n(35),n(36),n(37),n(38),n(39),n(40),n(41),n(42)].forEach(function(e){r.extend(i,e)}),e.exports=i},function(e,t,n){"use strict";var r=n(0),i=function(e){return e={bfs:e.bfs||!e.dfs,dfs:e.dfs||!e.bfs},function(t,n,i){var a;r.plainObject(t)&&!r.elementOrCollection(t)&&(a=t,t=a.roots||a.root,n=a.visit,i=a.directed),i=2!==arguments.length||r.fn(n)?i:n,n=r.fn(n)?n:function(){};for(var o,s=this._private.cy,l=t=r.string(t)?this.filter(t):t,u=[],c=[],d={},h={},p={},f=0,v=this.nodes(),g=this.edges(),y=0;y<l.length;y++)l[y].isNode()&&(u.unshift(l[y]),e.bfs&&(p[l[y].id()]=!0,c.push(l[y])),h[l[y].id()]=0);for(;0!==u.length;){var l=e.bfs?u.shift():u.pop();if(e.dfs){if(p[l.id()])continue;p[l.id()]=!0,c.push(l)}var m,b=h[l.id()],x=d[l.id()],w=null==x?void 0:x.connectedNodes().not(l)[0];if(!0===(m=n(l,x,w,f++,b))){o=l;break}if(!1===m)break;for(var E=l.connectedEdges(i?function(e){return e.data("source")===l.id()}:void 0).intersect(g),y=0;y<E.length;y++){var P=E[y],C=P.connectedNodes(function(e){return e.id()!==l.id()}).intersect(v);0===C.length||p[C.id()]||(C=C[0],u.push(C),e.bfs&&(p[C.id()]=!0,c.push(C)),d[C.id()]=P,h[C.id()]=h[l.id()]+1)}}for(var S=[],y=0;y<c.length;y++){var T=c[y],D=d[T.id()];D&&S.push(D),S.push(T)}return{path:s.collection(S,{unique:!0}),found:s.collection(o)}}},a={breadthFirstSearch:i({bfs:!0}),depthFirstSearch:i({dfs:!0})};a.bfs=a.breadthFirstSearch,a.dfs=a.depthFirstSearch,e.exports=a},function(e,t,n){"use strict";var r=n(0),i=n(9),a={dijkstra:function(e,t,n){var a;r.plainObject(e)&&!r.elementOrCollection(e)&&(a=e,e=a.root,t=a.weight,n=a.directed);var o=this._private.cy;t=r.fn(t)?t:function(){return 1};for(var s=r.string(e)?this.filter(e)[0]:e[0],l={},u={},c={},d=this.edges().filter(function(e){return!e.isLoop()}),h=this.nodes(),p=function(e){return l[e.id()]},f=new i(function(e,t){return p(e)-p(t)}),v=0;v<h.length;v++){var g=h[v];l[g.id()]=g.same(s)?0:1/0,f.push(g)}for(;f.size()>0;){var y=f.pop(),m=p(y),b=y.id();if(c[b]=m,m!==1/0)for(var x=y.neighborhood().intersect(h),v=0;v<x.length;v++){var w=x[v],E=w.id(),P=function(e,r){for(var i,a=(n?e.edgesTo(r):e.edgesWith(r)).intersect(d),o=1/0,s=0;s<a.length;s++){var l=a[s],u=t(l);(u<o||!i)&&(o=u,i=l)}return{edge:i,dist:o}}(y,w),C=m+P.dist;C<p(w)&&(!function(e,t){l[e.id()]=t,f.updateItem(e)}(w,C),u[E]={node:y,edge:P.edge})}}return{distanceTo:function(e){var t=r.string(e)?h.filter(e)[0]:e[0];return c[t.id()]},pathTo:function(e){var t=r.string(e)?h.filter(e)[0]:e[0],n=[],i=t;if(t.length>0)for(n.unshift(t);u[i.id()];){var a=u[i.id()];n.unshift(a.edge),n.unshift(a.node),i=a.node}return o.collection(n)}}}};e.exports=a},function(e,t,n){e.exports=n(33)},function(e,t,n){var r,i,a;(function(){var n,o,s,l,u,c,d,h,p,f,v,g,y,m,b;s=Math.floor,f=Math.min,o=function(e,t){return e<t?-1:e>t?1:0},p=function(e,t,n,r,i){var a;if(null==n&&(n=0),null==i&&(i=o),n<0)throw new Error("lo must be non-negative");for(null==r&&(r=e.length);n<r;)a=s((n+r)/2),i(t,e[a])<0?r=a:n=a+1;return[].splice.apply(e,[n,n-n].concat(t)),t},c=function(e,t,n){return null==n&&(n=o),e.push(t),m(e,0,e.length-1,n)},u=function(e,t){var n,r;return null==t&&(t=o),n=e.pop(),e.length?(r=e[0],e[0]=n,b(e,0,t)):r=n,r},h=function(e,t,n){var r;return null==n&&(n=o),r=e[0],e[0]=t,b(e,0,n),r},d=function(e,t,n){var r;return null==n&&(n=o),e.length&&n(e[0],t)<0&&(r=[e[0],t],t=r[0],e[0]=r[1],b(e,0,n)),t},l=function(e,t){var n,r,i,a,l,u;for(null==t&&(t=o),a=function(){u=[];for(var t=0,n=s(e.length/2);0<=n?t<n:t>n;0<=n?t++:t--)u.push(t);return u}.apply(this).reverse(),l=[],r=0,i=a.length;r<i;r++)n=a[r],l.push(b(e,n,t));return l},y=function(e,t,n){var r;if(null==n&&(n=o),-1!==(r=e.indexOf(t)))return m(e,0,r,n),b(e,r,n)},v=function(e,t,n){var r,i,a,s,u;if(null==n&&(n=o),i=e.slice(0,t),!i.length)return i;for(l(i,n),u=e.slice(t),a=0,s=u.length;a<s;a++)r=u[a],d(i,r,n);return i.sort(n).reverse()},g=function(e,t,n){var r,i,a,s,c,d,h,v,g;if(null==n&&(n=o),10*t<=e.length){if(a=e.slice(0,t).sort(n),!a.length)return a;for(i=a[a.length-1],h=e.slice(t),s=0,d=h.length;s<d;s++)r=h[s],n(r,i)<0&&(p(a,r,0,null,n),a.pop(),i=a[a.length-1]);return a}for(l(e,n),g=[],c=0,v=f(t,e.length);0<=v?c<v:c>v;0<=v?++c:--c)g.push(u(e,n));return g},m=function(e,t,n,r){var i,a,s;for(null==r&&(r=o),i=e[n];n>t&&(s=n-1>>1,a=e[s],r(i,a)<0);)e[n]=a,n=s;return e[n]=i},b=function(e,t,n){var r,i,a,s,l;for(null==n&&(n=o),i=e.length,l=t,a=e[t],r=2*t+1;r<i;)s=r+1,s<i&&!(n(e[r],e[s])<0)&&(r=s),e[t]=e[r],t=r,r=2*t+1;return e[t]=a,m(e,l,t,n)},n=function(){function e(e){this.cmp=null!=e?e:o,this.nodes=[]}return e.push=c,e.pop=u,e.replace=h,e.pushpop=d,e.heapify=l,e.updateItem=y,e.nlargest=v,e.nsmallest=g,e.prototype.push=function(e){return c(this.nodes,e,this.cmp)},e.prototype.pop=function(){return u(this.nodes,this.cmp)},e.prototype.peek=function(){return this.nodes[0]},e.prototype.contains=function(e){return-1!==this.nodes.indexOf(e)},e.prototype.replace=function(e){return h(this.nodes,e,this.cmp)},e.prototype.pushpop=function(e){return d(this.nodes,e,this.cmp)},e.prototype.heapify=function(){return l(this.nodes,this.cmp)},e.prototype.updateItem=function(e){return y(this.nodes,e,this.cmp)},e.prototype.clear=function(){return this.nodes=[]},e.prototype.empty=function(){return 0===this.nodes.length},e.prototype.size=function(){return this.nodes.length},e.prototype.clone=function(){var t;return t=new e,t.nodes=this.nodes.slice(0),t},e.prototype.toArray=function(){return this.nodes.slice(0)},e.prototype.insert=e.prototype.push,e.prototype.top=e.prototype.peek,e.prototype.front=e.prototype.peek,e.prototype.has=e.prototype.contains,e.prototype.copy=e.prototype.clone,e}(),function(n,o){i=[],r=o,void 0!==(a="function"==typeof r?r.apply(t,i):r)&&(e.exports=a)}(0,function(){return n})}).call(this)},function(e,t,n){"use strict";var r=n(0),i={kruskal:function(e){function t(e){for(var t=0;t<a.length;t++){var n=a[t];if(n.anySame(e))return{eles:n,index:t}}}var n=this.cy();e=r.fn(e)?e:function(){return 1};for(var i=n.collection(n,[]),a=[],o=this.nodes(),s=0;s<o.length;s++)a.push(o[s].collection());for(var l=this.edges(),u=l.toArray().sort(function(t,n){return e(t)-e(n)}),s=0;s<u.length;s++){var c=u[s],d=c.source()[0],h=c.target()[0],p=t(d),f=t(h);p.index!==f.index&&(i=i.add(c),a[p.index]=p.eles.add(f.eles),a.splice(f.index,1))}return o.add(i)}};e.exports=i},function(e,t,n){"use strict";var r=n(0),i={aStar:function(e){var t=this;e=e||{};var n=this._private.cy;if(null!=e&&null!=e.root){var i=r.string(e.root)?this.filter(e.root)[0]:e.root[0];if(null!=e.goal){var a=r.string(e.goal)?this.filter(e.goal)[0]:e.goal[0];if(null!=e.heuristic&&r.fn(e.heuristic))var o=e.heuristic;else var o=function(){return 0};if(null!=e.weight&&r.fn(e.weight))var s=e.weight;else var s=function(e){return 1};if(null!=e.directed)var l=e.directed;else var l=!1;var u=i.id(),c=a.id(),d=[],h=[u],p={},f={},v={},g={};v[u]=0,g[u]=o(i);for(var y=0;h.length>0;){var m=function(e,t){if(0!==e.length){for(var n=0,r=t[e[0]],i=1;i<e.length;i++){var a=t[e[i]];a<r&&(r=a,n=i)}return n}}(h,g),b=n.getElementById(h[m]),x=b.id();if(y++,x==c){var w=function e(t,r,i,a){if(t==r)return a.unshift(n.getElementById(r)),a;if(r in i){var o=i[r],s=f[r];return a.unshift(n.getElementById(s)),a.unshift(n.getElementById(r)),e(t,o,i,a)}}(u,c,p,[]);return{found:!0,distance:v[x],path:t.spawn(w),steps:y}}d.push(x),h.splice(m,1);for(var E=b._private.edges,P=0;P<E.length;P++){var C=E[P];if(this.hasElementWithId(C.id())&&(!l||C.data("source")===x)){var S=C.source(),T=C.target(),D=S.id()!==x?S:T,k=D.id();if(this.hasElementWithId(k)&&-1==d.indexOf(k)){var _=v[x]+s(C);-1!=h.indexOf(k)?_<v[k]&&(v[k]=_,g[k]=_+o(D),p[k]=x):(v[k]=_,g[k]=_+o(D),h.push(k),p[k]=x,f[k]=C.id())}}}}return{found:!1,distance:void 0,path:void 0,steps:y}}}}};e.exports=i},function(e,t,n){"use strict";var r=n(0),i={floydWarshall:function(e){e=e||{};var t=this.cy();if(null!=e.weight&&r.fn(e.weight))var n=e.weight;else var n=function(e){return 1};if(null!=e.directed)var i=e.directed;else var i=!1;for(var a=this.edges().stdFilter(function(e){return!e.isLoop()}),o=this.nodes(),s=o.length,l={},u=0;u<s;u++)l[o[u].id()]=u;for(var c=[],u=0;u<s;u++){for(var d=new Array(s),h=0;h<s;h++)d[h]=u==h?0:1/0;c.push(d)}var p=[],f=[],v=function(e){for(var t=0;t<s;t++){for(var n=new Array(s),r=0;r<s;r++)n[r]=void 0;e.push(n)}};v(p),v(f);for(var u=0;u<a.length;u++){var g=l[a[u].source().id()],y=l[a[u].target().id()],m=n(a[u]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,f[g][y]=a[u])}if(!i)for(var u=0;u<a.length;u++){var g=l[a[u].target().id()],y=l[a[u].source().id()],m=n(a[u]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,f[g][y]=a[u])}for(var b=0;b<s;b++)for(var u=0;u<s;u++)for(var h=0;h<s;h++)c[u][b]+c[b][h]<c[u][h]&&(c[u][h]=c[u][b]+c[b][h],p[u][h]=p[u][b]);for(var x=[],u=0;u<s;u++)x.push(o[u].id());return{distance:function(e,n){if(r.string(e))var i=t.filter(e)[0].id();else var i=e.id();if(r.string(n))var a=t.filter(n)[0].id();else var a=n.id();return c[l[i]][l[a]]},path:function(e,n){if(r.string(e))var i=t.filter(e)[0].id();else var i=e.id();if(r.string(n))var a=t.filter(n)[0].id();else var a=n.id();var o=function(e,n,r,i,a){if(e===n)return t.getElementById(i[e]);if(void 0!==r[e][n]){for(var o=[t.getElementById(i[e])],s=e;e!==n;){s=e,e=r[e][n];var l=a[s][e];o.push(l),o.push(t.getElementById(i[e]))}return o}}(l[i],l[a],p,x,f);return t.collection(o)}}}};e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(1),a={bellmanFord:function(e){var t=this;if(e=e||{},null!=e.weight&&r.fn(e.weight))var n=e.weight;else var n=function(e){return 1};if(null!=e.directed)var a=e.directed;else var a=!1;if(null!=e.root){if(r.string(e.root))var o=this.filter(e.root)[0];else var o=e.root[0];for(var s=this._private.cy,l=this.edges().stdFilter(function(e){return!e.isLoop()}),u=this.nodes(),c=u.length,d={},h=0;h<c;h++)d[u[h].id()]=h;for(var p=[],f=[],v=[],h=0;h<c;h++)u[h].id()===o.id()?p[h]=0:p[h]=1/0,f[h]=void 0;for(var g=!1,h=1;h<c;h++){g=!1;for(var y=0;y<l.length;y++){var m=d[l[y].source().id()],b=d[l[y].target().id()],x=n(l[y]),w=p[m]+x;if(w<p[b]&&(p[b]=w,f[b]=m,v[b]=l[y],g=!0),!a){var w=p[b]+x;w<p[m]&&(p[m]=w,f[m]=b,v[m]=l[y],g=!0)}}if(!g)break}if(g)for(var y=0;y<l.length;y++){var m=d[l[y].source().id()],b=d[l[y].target().id()],x=n(l[y]);if(p[m]+x<p[b])return i.error("Graph contains a negative weight cycle for Bellman-Ford"),{pathTo:void 0,distanceTo:void 0,hasNegativeWeightCycle:!0}}for(var E=[],h=0;h<c;h++)E.push(u[h].id());return{distanceTo:function(e){if(r.string(e))var t=s.filter(e)[0].id();else var t=e.id();return p[d[t]]},pathTo:function(e){if(r.string(e))var n=s.filter(e)[0].id();else var n=e.id();var i=[],a=function(e,t,n,r,i,a){for(;;){if(i.push(s.getElementById(r[n])),i.push(a[n]),t===n)return i;var o=e[n];if(void 0===o)return;n=o}}(f,d[o.id()],d[n],E,i,v);return null!=a&&a.reverse(),t.spawn(a)},hasNegativeWeightCycle:!1}}}};e.exports=a},function(e,t,n){"use strict";var r=n(1),i={kargerStein:function(e){var t=this;e=e||{};var n=function(e,t,n){for(var r=n[e],i=r[1],a=r[2],o=t[i],s=t[a],l=n.filter(function(e){return(t[e[1]]!==o||t[e[2]]!==s)&&(t[e[1]]!==s||t[e[2]]!==o)}),u=0;u<l.length;u++){var c=l[u];c[1]===s?(l[u]=c.slice(0),l[u][1]=o):c[2]===s&&(l[u]=c.slice(0),l[u][2]=o)}for(var u=0;u<t.length;u++)t[u]===s&&(t[u]=o);return l},i=function e(t,r,i,a){if(i<=a)return r;var o=Math.floor(Math.random()*r.length);return e(t,n(o,t,r),i-1,a)},a=this._private.cy,o=this.edges().stdFilter(function(e){return!e.isLoop()}),s=this.nodes(),l=s.length,u=o.length,c=Math.ceil(Math.pow(Math.log(l)/Math.LN2,2)),d=Math.floor(l/Math.sqrt(2));if(l<2)return void r.error("At least 2 nodes are required for Karger-Stein algorithm");for(var h={},p=0;p<l;p++)h[s[p].id()]=p;for(var f=[],p=0;p<u;p++){var v=o[p];f.push([p,h[v.source().id()],h[v.target().id()]])}for(var g,y=1/0,m=[],p=0;p<l;p++)m.push(p);for(var b=0;b<=c;b++){var x=m.slice(0),w=i(x,f,l,d),E=x.slice(0),P=i(x,w,d,2),C=i(E,w,d,2);P.length<=C.length&&P.length<y?(y=P.length,g=[P,x]):C.length<=P.length&&C.length<y&&(y=C.length,g=[C,E])}for(var S=g[0].map(function(e){return o[e[0]]}),T=[],D=[],k=g[1][0],p=0;p<g[1].length;p++){g[1][p]===k?T.push(s[p]):D.push(s[p])}return{cut:t.spawn(a,S),partition1:t.spawn(T),partition2:t.spawn(D)}}};e.exports=i},function(e,t,n){"use strict";var r=n(0),i={pageRank:function(e){e=e||{};if(null!=e&&null!=e.dampingFactor)var t=e.dampingFactor;else var t=.8;if(null!=e&&null!=e.precision)var n=e.precision;else var n=1e-6;if(null!=e&&null!=e.iterations)var i=e.iterations;else var i=200;if(null!=e&&null!=e.weight&&r.fn(e.weight))var a=e.weight;else var a=function(e){return 1};for(var o=this._private.cy,s=this.edges().stdFilter(function(e){return!e.isLoop()}),l=this.nodes(),u=l.length,c=s.length,d={},h=0;h<u;h++)d[l[h].id()]=h;for(var p=[],f=[],v=(1-t)/u,h=0;h<u;h++){for(var g=[],y=0;y<u;y++)g.push(0);p.push(g),f.push(0)}for(var h=0;h<c;h++){var m=s[h],b=d[m.source().id()],x=d[m.target().id()],w=a(m);p[x][b]+=w,f[b]+=w}for(var E=1/u+v,y=0;y<u;y++)if(0===f[y])for(var h=0;h<u;h++)p[h][y]=E;else for(var h=0;h<u;h++)p[h][y]=p[h][y]/f[y]+v;for(var P,C=[],S=[],h=0;h<u;h++)C.push(1),S.push(0);for(var T=0;T<i;T++){for(var D=S.slice(0),h=0;h<u;h++)for(var y=0;y<u;y++)D[h]+=p[h][y]*C[y];!function(e){for(var t=e.length,n=0,r=0;r<t;r++)n+=e[r];for(var r=0;r<t;r++)e[r]=e[r]/n}(D),P=C,C=D;for(var k=0,h=0;h<u;h++)k+=Math.pow(P[h]-C[h],2);if(k<n)break}return{rank:function(e){if(r.string(e))var t=o.filter(e)[0].id();else var t=e.id();return C[d[t]]}}}};e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(1),a={degreeCentralityNormalized:function(e){e=e||{};var t=this.cy();if(null!=e.directed)var n=e.directed;else var n=!1;var a=this.nodes(),o=a.length;if(n){for(var s={},l={},u=0,c=0,d=0;d<o;d++){var h=a[d],p=this.degreeCentrality(i.extend({},e,{root:h}));u<p.indegree&&(u=p.indegree),c<p.outdegree&&(c=p.outdegree),s[h.id()]=p.indegree,l[h.id()]=p.outdegree}return{indegree:function(e){if(0==u)return 0;if(r.string(e))var e=t.filter(e)[0].id();else var e=e.id();return s[e]/u},outdegree:function(e){if(0==c)return 0;if(r.string(e))var e=t.filter(e)[0].id();else var e=e.id();return l[e]/c}}}for(var f={},v=0,d=0;d<o;d++){var h=a[d],p=this.degreeCentrality(i.extend({},e,{root:h}));v<p.degree&&(v=p.degree),f[h.id()]=p.degree}return{degree:function(e){if(0==v)return 0;if(r.string(e))var e=t.filter(e)[0].id();else var e=e.id();return f[e]/v}}},degreeCentrality:function(e){e=e||{};var t=this;if(null!=e&&null!=e.root){var n=r.string(e.root)?this.filter(e.root)[0]:e.root[0];if(null!=e.weight&&r.fn(e.weight))var i=e.weight;else var i=function(e){return 1};if(null!=e.directed)var a=e.directed;else var a=!1;if(null!=e.alpha&&r.number(e.alpha))var o=e.alpha;else o=0;if(a){for(var s=n.connectedEdges('edge[target = "'+n.id()+'"]').intersection(t),l=n.connectedEdges('edge[source = "'+n.id()+'"]').intersection(t),u=s.length,c=l.length,d=0,h=0,p=0;p<s.length;p++){var f=s[p];d+=i(f)}for(var p=0;p<l.length;p++){var f=l[p];h+=i(f)}return{indegree:Math.pow(u,1-o)*Math.pow(d,o),outdegree:Math.pow(c,1-o)*Math.pow(h,o)}}for(var v=n.connectedEdges().intersection(t),g=v.length,y=0,p=0;p<v.length;p++){var f=v[p];y+=i(f)}return{degree:Math.pow(g,1-o)*Math.pow(y,o)}}}};a.dc=a.degreeCentrality,a.dcn=a.degreeCentralityNormalised=a.degreeCentralityNormalized,e.exports=a},function(e,t,n){"use strict";var r=n(0),i={closenessCentralityNormalized:function(e){e=e||{};var t=this.cy(),n=e.harmonic;void 0===n&&(n=!0);for(var i={},a=0,o=this.nodes(),s=this.floydWarshall({weight:e.weight,directed:e.directed}),l=0;l<o.length;l++){for(var u=0,c=0;c<o.length;c++)if(l!=c){var d=s.distance(o[l],o[c]);u+=n?1/d:d}n||(u=1/u),a<u&&(a=u),i[o[l].id()]=u}return{closeness:function(e){if(0==a)return 0;if(r.string(e))var e=t.filter(e)[0].id();else var e=e.id();return i[e]/a}}},closenessCentrality:function(e){if(e=e||{},null!=e.root){if(r.string(e.root))var t=this.filter(e.root)[0];else var t=e.root[0];if(null!=e.weight&&r.fn(e.weight))var n=e.weight;else var n=function(){return 1};if(null!=e.directed&&r.bool(e.directed))var i=e.directed;else var i=!1;var a=e.harmonic;void 0===a&&(a=!0);for(var o=this.dijkstra({root:t,weight:n,directed:i}),s=0,l=this.nodes(),u=0;u<l.length;u++)if(l[u].id()!=t.id()){var c=o.distanceTo(l[u]);s+=a?1/c:c}return a?s:1/s}}};i.cc=i.closenessCentrality,i.ccn=i.closenessCentralityNormalised=i.closenessCentralityNormalized,e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(9),a={betweennessCentrality:function(e){e=e||{};var t,n;r.fn(e.weight)?(n=e.weight,t=!0):t=!1;for(var a=null!=e.directed&&e.directed,o=this._private.cy,s=this.nodes(),l={},u={},c=0,d={set:function(e,t){u[e]=t,t>c&&(c=t)},get:function(e){return u[e]}},h=0;h<s.length;h++){var p=s[h],f=p.id();l[f]=a?p.outgoers().nodes():p.openNeighborhood().nodes(),d.set(f,0)}for(var v=0;v<s.length;v++){for(var g=s[v].id(),y=[],m={},b={},x={},w=new i(function(e,t){return x[e]-x[t]}),h=0;h<s.length;h++){var f=s[h].id();m[f]=[],b[f]=0,x[f]=1/0}for(b[g]=1,x[g]=0,w.push(g);!w.empty();){var p=w.pop();if(y.push(p),t)for(var E=0;E<l[p].length;E++){var P,C=l[p][E],S=o.getElementById(p);P=S.edgesTo(C).length>0?S.edgesTo(C)[0]:C.edgesTo(S)[0];var T=n(P);C=C.id(),x[C]>x[p]+T&&(x[C]=x[p]+T,w.nodes.indexOf(C)<0?w.push(C):w.updateItem(C),b[C]=0,m[C]=[]),x[C]==x[p]+T&&(b[C]=b[C]+b[p],m[C].push(p))}else for(var E=0;E<l[p].length;E++){var C=l[p][E].id();x[C]==1/0&&(w.push(C),x[C]=x[p]+1),x[C]==x[p]+1&&(b[C]=b[C]+b[p],m[C].push(p))}}for(var D={},h=0;h<s.length;h++)D[s[h].id()]=0;for(;y.length>0;)for(var C=y.pop(),E=0;E<m[C].length;E++){var p=m[C][E];D[p]=D[p]+b[p]/b[C]*(1+D[C]),C!=s[v].id()&&d.set(C,d.get(C)+D[C])}}var k={betweenness:function(e){if(r.string(e))var e=o.filter(e).id();else var e=e.id();return d.get(e)},betweennessNormalized:function(e){if(0==c)return 0;if(r.string(e))var e=o.filter(e).id();else var e=e.id();return d.get(e)/c}};return k.betweennessNormalised=k.betweennessNormalized,k}};a.bc=a.betweennessCentrality,e.exports=a},function(e,t,n){"use strict";var r=n(4),i={animate:r.animate(),animation:r.animation(),animated:r.animated(),clearQueue:r.clearQueue(),delay:r.delay(),delayAnimation:r.delayAnimation(),stop:r.stop()};e.exports=i},function(e,t,n){"use strict";var r=n(1),i=n(45),a=n(2),o=n(0),s={animated:function(){return function(){var e=this,t=void 0!==e.length,n=t?e:[e];if(!(this._private.cy||this).styleEnabled())return!1;var r=n[0];return r?r._private.animation.current.length>0:void 0}},clearQueue:function(){return function(){var e=this,t=void 0!==e.length,n=t?e:[e];if(!(this._private.cy||this).styleEnabled())return this;for(var r=0;r<n.length;r++){n[r]._private.animation.queue=[]}return this}},delay:function(){return function(e,t){return(this._private.cy||this).styleEnabled()?this.animate({delay:e,duration:e,complete:t}):this}},delayAnimation:function(){return function(e,t){return(this._private.cy||this).styleEnabled()?this.animation({delay:e,duration:e,complete:t}):this}},animation:function(){return function(e,t){var n=this,s=void 0!==n.length,l=s?n:[n],u=this._private.cy||this,c=!s,d=!c;if(!u.styleEnabled())return this;var h=u.style();if(e=r.assign({},e,t),0===Object.keys(e).length)return new i(l[0],e);switch(void 0===e.duration&&(e.duration=400),e.duration){case"slow":e.duration=600;break;case"fast":e.duration=200}if(d&&(e.style=h.getPropsList(e.style||e.css),e.css=void 0),d&&null!=e.renderedPosition){var p=e.renderedPosition,f=u.pan(),v=u.zoom();e.position=a.renderedToModelPosition(p,v,f)}if(c&&null!=e.panBy){var g=e.panBy,y=u.pan();e.pan={x:y.x+g.x,y:y.y+g.y}}var m=e.center||e.centre;if(c&&null!=m){var b=u.getCenterPan(m.eles,e.zoom);null!=b&&(e.pan=b)}if(c&&null!=e.fit){var x=e.fit,w=u.getFitViewport(x.eles||x.boundingBox,x.padding);null!=w&&(e.pan=w.pan,e.zoom=w.zoom)}if(c&&o.plainObject(e.zoom)){var E=u.getZoomedViewport(e.zoom);null!=E&&(E.zoomed&&(e.zoom=E.zoom),E.panned&&(e.pan=E.pan))}return new i(l[0],e)}},animate:function(){return function(e,t){var n=this,i=void 0!==n.length,a=i?n:[n];if(!(this._private.cy||this).styleEnabled())return this;t&&(e=r.extend({},e,t));for(var o=0;o<a.length;o++){var s=a[o],l=s.animated()&&(void 0===e.queue||e.queue);s.animation(e,l?{queue:!0}:void 0).play()}return this}},stop:function(){return function(e,t){var n=this,r=void 0!==n.length,i=r?n:[n],a=this._private.cy||this;if(!a.styleEnabled())return this;for(var o=0;o<i.length;o++){for(var s=i[o],l=s._private,u=l.animation.current,c=0;c<u.length;c++){var d=u[c],h=d._private;t&&(h.duration=0)}e&&(l.animation.queue=[]),t||(l.animation.current=[])}return a.notify({eles:this,type:"draw"}),this}}};e.exports=s},function(e,t,n){"use strict";var r=n(1),i=n(0),a=n(5),o=function(e,t,n){var a=this._private=r.extend({duration:1e3},t,n);a.target=e,a.style=a.style||a.css,a.started=!1,a.playing=!1,a.hooked=!1,a.applying=!1,a.progress=0,a.completes=[],a.frames=[],a.complete&&i.fn(a.complete)&&a.completes.push(a.complete),this.length=1,this[0]=this},s=o.prototype;r.extend(s,{instanceString:function(){return"animation"},hook:function(){var e=this._private;if(!e.hooked){var t=void 0,n=e.target._private.animation;t=e.queue?n.queue:n.current,t.push(this),i.elementOrCollection(e.target)&&e.target.cy().addToAnimationPool(e.target),e.hooked=!0}return this},play:function(){var e=this._private;return 1===e.progress&&(e.progress=0),e.playing=!0,e.started=!1,e.stopped=!1,this.hook(),this},playing:function(){return this._private.playing},apply:function(){var e=this._private;return e.applying=!0,e.started=!1,e.stopped=!1,this.hook(),this},applying:function(){return this._private.applying},pause:function(){var e=this._private;return e.playing=!1,e.started=!1,this},stop:function(){var e=this._private;return e.playing=!1,e.started=!1,e.stopped=!0,this},rewind:function(){return this.progress(0)},fastforward:function(){return this.progress(1)},time:function(e){var t=this._private;return void 0===e?t.progress*t.duration:this.progress(e/t.duration)},progress:function(e){var t=this._private,n=t.playing;return void 0===e?t.progress:(n&&this.pause(),t.progress=e,t.started=!1,n&&this.play(),this)},completed:function(){return 1===this._private.progress},reverse:function(){var e=this._private,t=e.playing;t&&this.pause(),e.progress=1-e.progress,e.started=!1;var n=function(t,n){var r=e[t];null!=r&&(e[t]=e[n],e[n]=r)};if(n("zoom","startZoom"),n("pan","startPan"),n("position","startPosition"),e.style)for(var r=0;r<e.style.length;r++){var i=e.style[r],a=i.name,o=e.startStyle[a];e.startStyle[a]=i,e.style[r]=o}return t&&this.play(),this},promise:function(e){var t=this._private,n=void 0;switch(e){case"frame":n=t.frames;break;default:case"complete":case"completed":n=t.completes}return new a(function(e,t){n.push(function(){e()})})}}),s.complete=s.completed,e.exports=o},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(1),a=n(0),o={data:function(e){var t={field:"data",bindingEvent:"data",allowBinding:!1,allowSetting:!1,allowGetting:!1,settingEvent:"data",settingTriggersEvent:!1,triggerFnName:"trigger",immutableKeys:{},updateStyle:!1,beforeGet:function(e){},beforeSet:function(e,t){},onSet:function(e){},canSet:function(e){return!0}};return e=i.extend({},t,e),function(t,n){var i=e,o=this,s=void 0!==o.length,l=s?o:[o],u=s?o[0]:o;if(a.string(t)){if(i.allowGetting&&void 0===n){var c=void 0;return u&&(i.beforeGet(u),c=u._private[i.field][t]),c}if(i.allowSetting&&void 0!==n){if(!i.immutableKeys[t]){var d=r({},t,n);i.beforeSet(o,d);for(var h=0,p=l.length;h<p;h++){var f=l[h];i.canSet(f)&&(f._private[i.field][t]=n)}i.updateStyle&&o.updateStyle(),i.onSet(o),i.settingTriggersEvent&&o[i.triggerFnName](i.settingEvent)}}}else if(i.allowSetting&&a.plainObject(t)){var v=t,g=void 0,y=void 0,m=Object.keys(v);i.beforeSet(o,v);for(var b=0;b<m.length;b++){g=m[b],y=v[g];var x=!i.immutableKeys[g];if(x)for(var w=0;w<l.length;w++){var E=l[w];i.canSet(E)&&(E._private[i.field][g]=y)}}i.updateStyle&&o.updateStyle(),i.onSet(o),i.settingTriggersEvent&&o[i.triggerFnName](i.settingEvent)}else if(i.allowBinding&&a.fn(t)){var P=t;o.on(i.bindingEvent,P)}else if(i.allowGetting&&void 0===t){var C=void 0;return u&&(i.beforeGet(u),C=u._private[i.field]),C}return o}},removeData:function(e){var t={field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!1,immutableKeys:{}};return e=i.extend({},t,e),function(t){var n=e,r=this,i=void 0!==r.length,o=i?r:[r];if(a.string(t)){for(var s=t.split(/\s+/),l=s.length,u=0;u<l;u++){var c=s[u];if(!a.emptyString(c)){if(!n.immutableKeys[c])for(var d=0,h=o.length;d<h;d++)o[d]._private[n.field][c]=void 0}}n.triggerEvent&&r[n.triggerFnName](n.event)}else if(void 0===t){for(var p=0,f=o.length;p<f;p++)for(var v=o[p]._private[n.field],g=Object.keys(v),y=0;y<g.length;y++){var m=g[y],b=!n.immutableKeys[m];b&&(v[m]=void 0)}n.triggerEvent&&r[n.triggerFnName](n.event)}return r}}};e.exports=o},function(e,t,n){"use strict";var r=n(5),i={eventAliasesOn:function(e){var t=e;t.addListener=t.listen=t.bind=t.on,t.unlisten=t.unbind=t.off=t.removeListener,t.trigger=t.emit,t.pon=t.promiseOn=function(e,t){var n=this,i=Array.prototype.slice.call(arguments,0);return new r(function(e,t){var r=function(t){n.off.apply(n,o),e(t)},a=i.concat([r]),o=a.concat([]);n.on.apply(n,a)})}}};e.exports=i},function(e,t,n){"use strict";var r=n(8),i={classes:function(e){e=(e||"").match(/\S+/g)||[];for(var t=this,n=[],i=new r(e),a=0;a<t.length;a++)!function(e){var a=t[e],o=a._private,s=o.classes,l=!1;i.forEach(function(e){s.has(e)||(l=!0)}),l||s.forEach(function(e){i.has(e)||(l=!0)}),l&&(o.classes=new r(i),n.push(a))}(a);return n.length>0&&this.spawn(n).updateStyle().emit("class"),t},addClass:function(e){return this.toggleClass(e,!0)},hasClass:function(e){var t=this[0];return null!=t&&t._private.classes.has(e)},toggleClass:function(e,t){for(var n=e.match(/\S+/g)||[],r=this,i=[],a=0,o=r.length;a<o;a++)for(var s=r[a],l=!1,u=0;u<n.length;u++){var c=n[u],d=s._private.classes,h=d.has(c),p=t||void 0===t&&!h;p?(d.add(c),h||l||(i.push(s),l=!0)):(d.delete(c),h&&!l&&(i.push(s),l=!0))}return i.length>0&&this.spawn(i).updateStyle().emit("class"),r},removeClass:function(e){return this.toggleClass(e,!1)},flashClass:function(e,t){var n=this;if(null==t)t=250;else if(0===t)return n;return n.addClass(e),setTimeout(function(){n.removeClass(e)},t),n}};e.exports=i},function(e,t,n){"use strict";var r=(n(0),n(6)),i={allAre:function(e){var t=new r(e);return this.every(function(e){return t.matches(e)})},is:function(e){var t=new r(e);return this.some(function(e){return t.matches(e)})},some:function(e,t){for(var n=0;n<this.length;n++){if(t?e.apply(t,[this[n],n,this]):e(this[n],n,this))return!0}return!1},every:function(e,t){for(var n=0;n<this.length;n++){if(!(t?e.apply(t,[this[n],n,this]):e(this[n],n,this)))return!1}return!0},same:function(e){return e=this.cy().collection(e),this.length===e.length&&this.every(function(t){return e.hasElementWithId(t.id())})},anySame:function(e){return e=this.cy().collection(e),this.some(function(t){return e.hasElementWithId(t.id())})},allAreNeighbors:function(e){e=this.cy().collection(e);var t=this.neighborhood();return e.every(function(e){return t.hasElementWithId(e.id())})},contains:function(e){e=this.cy().collection(e);var t=this;return e.every(function(e){return t.hasElementWithId(e.id())})}};i.allAreNeighbours=i.allAreNeighbors,i.has=i.contains,e.exports=i},function(e,t,n){"use strict";var r=n(1),i=n(51),a=n(10),o=function(e){for(var t=void 0,n=void 0,r=void 0,a=0;a<i.length;a++){var o=i[a],s=o.name,l=e.match(o.regexObj);if(null!=l){n=l,t=o,r=s;var u=l[0];e=e.substring(u.length);break}}return{expr:t,match:n,name:r,remaining:e}},s=function(e){var t=e.match(/^\s+/);if(t){var n=t[0];e=e.substring(n.length)}return e},l=function(e){var t=this,n=t._private.selectorText=e,i=t[0]=a();for(t.length=1,n=s(n);;){var l=o(n);if(null==l.expr)return r.error("The selector `"+e+"`is invalid"),!1;var u=l.match.slice(1),c=l.expr.populate(t,i,u);if(!1===c)return!1;if(null!=c&&(i=c),n=l.remaining,n.match(/^\s*$/))break}for(var d=0;d<t.length;d++){var h=t[d];if(null!=h.subject){for(;h.subject!==h;)if(null!=h.parent){var p=h.parent,f=h;f.parent=null,p.child=f,h=p}else{if(null==h.ancestor)return h.source||h.target||h.connectedNodes?(r.error("The selector `"+t.text()+"` can not contain a subject selector that applies to the source or target of an edge selector"),!1):(r.error("When adjusting references for the selector `"+t.text()+"`, neither parent nor ancestor was found"),!1);var v=h.ancestor,g=h;g.ancestor=null,v.descendant=g,h=v}t[d]=h.subject}}return!0};e.exports={parse:l}},function(e,t,n){"use strict";var r=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(15),a=i.stateSelectorRegex,o=n(52),s=n(1),l=n(10),u=function(e){return e.replace(new RegExp("\\\\("+o.metaChar+")","g"),function(e,t){return t})},c=function(e,t,n){t===e[e.length-1]&&(e[e.length-1]=n)},d=[{name:"group",query:!0,regex:"("+o.group+")",populate:function(e,t,n){var i=r(n,1),a=i[0];t.group="*"===a?a:a+"s"}},{name:"state",query:!0,regex:a,populate:function(e,t,n){var i=r(n,1),a=i[0];t.colonSelectors.push(a)}},{name:"id",query:!0,regex:"\\#("+o.id+")",populate:function(e,t,n){var i=r(n,1),a=i[0];t.ids.push(u(a))}},{name:"className",query:!0,regex:"\\.("+o.className+")",populate:function(e,t,n){var i=r(n,1),a=i[0];t.classes.push(u(a))}},{name:"dataExists",query:!0,regex:"\\[\\s*("+o.variable+")\\s*\\]",populate:function(e,t,n){var i=r(n,1),a=i[0];t.data.push({field:u(a)})}},{name:"dataCompare",query:!0,regex:"\\[\\s*("+o.variable+")\\s*("+o.comparatorOp+")\\s*("+o.value+")\\s*\\]",populate:function(e,t,n){var i=r(n,3),a=i[0],s=i[1],l=i[2];l=null!=new RegExp("^"+o.string+"$").exec(l)?l.substring(1,l.length-1):parseFloat(l),t.data.push({field:u(a),operator:s,value:l})}},{name:"dataBool",query:!0,regex:"\\[\\s*("+o.boolOp+")\\s*("+o.variable+")\\s*\\]",populate:function(e,t,n){var i=r(n,2),a=i[0],o=i[1];t.data.push({field:u(o),operator:a})}},{name:"metaCompare",query:!0,regex:"\\[\\[\\s*("+o.meta+")\\s*("+o.comparatorOp+")\\s*("+o.number+")\\s*\\]\\]",populate:function(e,t,n){var i=r(n,3),a=i[0],o=i[1],s=i[2];t.meta.push({field:u(a),operator:o,value:parseFloat(s)})}},{name:"nextQuery",separator:!0,regex:o.separator,populate:function(e){var t=e[e.length++]=l();return e.currentSubject=null,t}},{name:"directedEdge",separator:!0,regex:o.directedEdge,populate:function(e,t){var n=l(),r=t,i=l();return n.group="edges",n.target=i,n.source=r,n.subject=e.currentSubject,c(e,t,n),i}},{name:"undirectedEdge",separator:!0,regex:o.undirectedEdge,populate:function(e,t){var n=l(),r=t,i=l();return n.group="edges",n.connectedNodes=[r,i],n.subject=e.currentSubject,c(e,t,n),i}},{name:"child",separator:!0,regex:o.child,populate:function(e,t){var n=l();return n.parent=t,n.subject=e.currentSubject,c(e,t,n),n}},{name:"descendant",separator:!0,regex:o.descendant,populate:function(e,t){var n=l();return n.ancestor=t,n.subject=e.currentSubject,c(e,t,n),n}},{name:"subject",modifier:!0,regex:o.subject,populate:function(e,t){if(null!=e.currentSubject&&t.subject!=t)return s.error("Redefinition of subject in selector `"+e.toString()+"`"),!1;e.currentSubject=t,t.subject=t,e[e.length-1].subject=t}}];d.forEach(function(e){return e.regexObj=new RegExp("^"+e.regex)}),e.exports=d},function(e,t,n){"use strict";var r=n(1),i={metaChar:"[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",comparatorOp:"=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",boolOp:"\\?|\\!|\\^",string:'"(?:\\\\"|[^"])*"|'+"'(?:\\\\'|[^'])*'",number:r.regex.number,meta:"degree|indegree|outdegree",separator:"\\s*,\\s*",descendant:"\\s+",child:"\\s+>\\s+",subject:"\\$",group:"node|edge|\\*",directedEdge:"\\s+->\\s+",undirectedEdge:"\\s+<->\\s+"};i.variable="(?:[\\w-]|(?:\\\\"+i.metaChar+"))+",i.value=i.string+"|"+i.number,i.className=i.variable,i.id=i.variable,function(){var e=void 0,t=void 0,n=void 0;for(e=i.comparatorOp.split("|"),n=0;n<e.length;n++)t=e[n],i.comparatorOp+="|@"+t;for(e=i.comparatorOp.split("|"),n=0;n<e.length;n++)t=e[n],t.indexOf("!")>=0||"="!==t&&(i.comparatorOp+="|\\!"+t)}(),e.exports=i},function(e,t,n){"use strict";var r=n(15),i=r.stateSelectorMatches,a=n(0),o=function(e,t){for(var n=!0,r=0;r<e[t.name].length;r++){var i=e[t.name][r],o=i.operator,s=i.value,l=i.field,u=void 0,c=t.fieldValue(l);if(null!=o&&null!=s){var d=a.string(c)||a.number(c)?""+c:"",h=""+s,p=!1;o.indexOf("@")>=0&&(d=d.toLowerCase(),h=h.toLowerCase(),o=o.replace("@",""),p=!0);var f=!1;o.indexOf("!")>=0&&(o=o.replace("!",""),f=!0),p&&(s=h.toLowerCase(),c=d.toLowerCase());var v=!1;switch(o){case"*=":u=d.indexOf(h)>=0;break;case"$=":u=d.indexOf(h,d.length-h.length)>=0;break;case"^=":u=0===d.indexOf(h);break;case"=":u=c===s;break;case">":v=!0,u=c>s;break;case">=":v=!0,u=c>=s;break;case"<":v=!0,u=c<s;break;case"<=":v=!0,u=c<=s;break;default:u=!1}!f||null==c&&v||(u=!u)}else if(null!=o)switch(o){case"?":u=!!c;break;case"!":u=!c;break;case"^":u=void 0===c}else u=void 0!==c;if(!u){n=!1;break}}return n},s=function(e,t,n){if(null!=e){var r=!1;if(!t)return!1;n=n();for(var i=0;i<n.length;i++)if(l(e,n[i])){r=!0;break}return r}return!0},l=function(e,t){if(e.groupOnly)return"*"===e.group||e.group===t.group();if(null!=e.group&&"*"!=e.group&&e.group!=t.group())return!1;var n=t.cy(),r=void 0,a=!0;for(r=0;r<e.colonSelectors.length;r++){var l=e.colonSelectors[r];if(!(a=i(l,t)))break}if(!a)return!1;var u=!0;for(r=0;r<e.ids.length;r++){var c=e.ids[r],d=t.id();if(!(u=u&&c==d))break}if(!u)return!1;var h=!0;for(r=0;r<e.classes.length;r++){var p=e.classes[r];if(!(h=h&&t.hasClass(p)))break}if(!h)return!1;if(!o(e,{name:"data",fieldValue:function(e){return t.data(e)}}))return!1;if(!o(e,{name:"meta",fieldValue:function(e){return t[e]()}}))return!1;if(null!=e.collection){if(!e.collection.hasElementWithId(t.id()))return!1}if(null!=e.filter&&t.collection().some(e.filter))return!1;var f=n.hasCompoundNodes(),v=function(){return t.source()},g=function(){return t.target()};if(!s(e.parent,f,function(){return t.parent()}))return!1;if(!s(e.ancestor,f,function(){return t.parents()}))return!1;if(!s(e.child,f,function(){return t.children()}))return!1;if(!s(e.descendant,f,function(){return t.descendants()}))return!1;if(!s(e.source,!0,v))return!1;if(!s(e.target,!0,g))return!1;if(e.connectedNodes){var y=e.connectedNodes[0],m=e.connectedNodes[1];if(s(y,!0,v)&&s(m,!0,g));else if(!s(y,!0,g)||!s(m,!0,v))return!1}return!0},u=function(e){var t=this,n=e.cy();if(t.invalid())return n.collection();if(1===t.length&&1===t[0].length&&1===t[0].ids.length)return e.getElementById(t[0].ids[0]).collection();var r=function(e){for(var n=0;n<t.length;n++){var r=t[n];if(l(r,e))return!0}return!1};return null==t.text()&&(r=function(){return!0}),e.filter(r)},c=function(e){var t=this;if(t.invalid())return!1;for(var n=0;n<t.length;n++){var r=t[n];if(l(r,e))return!0}return!1};e.exports={matches:c,filter:u}},function(e,t,n){"use strict";function r(e,t,n,r){for(var i=[],a=new s,o=e.cy(),l=o.hasCompoundNodes(),u=0;u<e.length;u++){var c=e[u];n?i.push(c):l&&r(i,a,c)}for(;i.length>0;){var d=i.shift();t(d),a.add(d.id()),l&&r(i,a,d)}return e}function i(e,t,n){if(n.isParent())for(var r=n._private.children,i=0;i<r.length;i++){var a=r[i];t.has(a.id())||e.push(a)}}function a(e,t,n){if(n.isChild()){var r=n._private.parent;t.has(r.id())||e.push(r)}}function o(e,t,n){a(e,t,n),i(e,t,n)}var s=n(8),l={parent:function(e){var t=[];if(1===this.length){var n=this[0]._private.parent;if(n)return n}for(var r=0;r<this.length;r++){var i=this[r],a=i._private.parent;a&&t.push(a)}return this.spawn(t,{unique:!0}).filter(e)},parents:function(e){for(var t=[],n=this.parent();n.nonempty();){for(var r=0;r<n.length;r++){var i=n[r];t.push(i)}n=n.parent()}return this.spawn(t,{unique:!0}).filter(e)},commonAncestors:function(e){for(var t=void 0,n=0;n<this.length;n++){var r=this[n],i=r.parents();t=t||i,t=t.intersect(i)}return t.filter(e)},orphans:function(e){return this.stdFilter(function(e){return e.isOrphan()}).filter(e)},nonorphans:function(e){return this.stdFilter(function(e){return e.isChild()}).filter(e)},children:function(e){for(var t=[],n=0;n<this.length;n++){var r=this[n];t=t.concat(r._private.children)}return this.spawn(t,{unique:!0}).filter(e)},siblings:function(e){return this.parent().children().not(this).filter(e)},isParent:function(){var e=this[0];if(e)return e.isNode()&&0!==e._private.children.length},isChildless:function(){var e=this[0];if(e)return e.isNode()&&0===e._private.children.length},isChild:function(){var e=this[0];if(e)return e.isNode()&&null!=e._private.parent},isOrphan:function(){var e=this[0];if(e)return e.isNode()&&null==e._private.parent},descendants:function(e){function t(e){for(var r=0;r<e.length;r++){var i=e[r];n.push(i),i.children().nonempty()&&t(i.children())}}var n=[];return t(this.children()),this.spawn(n,{unique:!0}).filter(e)}};l.forEachDown=function(e){return r(this,e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i)},l.forEachUp=function(e){return r(this,e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a)},l.forEachUpAndDown=function(e){return r(this,e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o)},l.ancestors=l.parents,e.exports=l},function(e,t,n){"use strict";var r=n(4),i=void 0,a=void 0;i=a={data:r.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),removeData:r.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),scratch:r.data({field:"scratch",bindingEvent:"scratch",allowBinding:!0,allowSetting:!0,settingEvent:"scratch",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,updateStyle:!0}),removeScratch:r.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:!0,updateStyle:!0}),rscratch:r.data({field:"rscratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeRscratch:r.removeData({field:"rscratch",triggerEvent:!1}),id:function(){var e=this[0];if(e)return e._private.data.id}},i.attr=i.data,i.removeAttr=i.removeData,e.exports=a},function(e,t,n){"use strict";function r(e){return function(t){var n=this;if(void 0===t&&(t=!0),0!==n.length&&n.isNode()&&!n.removed()){for(var r=0,i=n[0],a=i._private.edges,o=0;o<a.length;o++){var s=a[o];!t&&s.isLoop()||(r+=e(i,s))}return r}}}function i(e,t){return function(n){for(var r=void 0,i=this.nodes(),a=0;a<i.length;a++){var o=i[a],s=o[e](n);void 0===s||void 0!==r&&!t(s,r)||(r=s)}return r}}var a=n(1),o={};a.extend(o,{degree:r(function(e,t){return t.source().same(t.target())?2:1}),indegree:r(function(e,t){return t.target().same(e)?1:0}),outdegree:r(function(e,t){return t.source().same(e)?1:0})}),a.extend(o,{minDegree:i("degree",function(e,t){return e<t}),maxDegree:i("degree",function(e,t){return e>t}),minIndegree:i("indegree",function(e,t){return e<t}),maxIndegree:i("indegree",function(e,t){return e>t}),minOutdegree:i("outdegree",function(e,t){return e<t}),maxOutdegree:i("outdegree",function(e,t){return e>t})}),a.extend(o,{totalDegree:function(e){for(var t=0,n=this.nodes(),r=0;r<n.length;r++)t+=n[r].degree(e);return t}}),e.exports=o},function(e,t,n){"use strict";var r=n(1),i=n(58),a=n(59),o=n(60),s=n(61);e.exports=r.assign({},i,a,o,s)},function(e,t,n){"use strict";var r=n(4),i=n(0),a=n(2),o=void 0,s=void 0,l=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.isParent()&&!r.locked()){var i=r._private.position,a={x:t.x-i.x,y:t.y-i.y};e.children().shift(a)}}};o=s={position:r.data({field:"position",bindingEvent:"position",allowBinding:!0,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!0,triggerFnName:"emitAndNotify",allowGetting:!0,validKeys:["x","y"],beforeGet:function(e){e.updateCompoundBounds()},beforeSet:l,onSet:function(e){e.dirtyCompoundBoundsCache()},canSet:function(e){return!e.locked()}}),silentPosition:r.data({field:"position",bindingEvent:"position",allowBinding:!1,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!1,triggerFnName:"trigger",allowGetting:!1,validKeys:["x","y"],beforeSet:l,onSet:function(e){e.dirtyCompoundBoundsCache()},canSet:function(e){return!e.locked()}}),positions:function(e,t){if(i.plainObject(e))t?this.silentPosition(e):this.position(e);else if(i.fn(e)){var n=e,r=this.cy();r.startBatch();for(var a=0;a<this.length;a++){var o=this[a],s=void 0;(s=n(o,a))&&(t?o.silentPosition(s):o.position(s))}r.endBatch()}return this},silentPositions:function(e){return this.positions(e,!0)},shift:function(e,t){var n=void 0;if(i.plainObject(e)?n=e:i.string(e)&&i.number(t)&&(n={x:0,y:0},n[e]=t),null!=n)for(var r=0;r<this.length;r++){var a=this[r],o=a.position();a.position({x:o.x+n.x,y:o.y+n.y})}return this},renderedPosition:function(e,t){var n=this[0],r=this.cy(),o=r.zoom(),s=r.pan(),l=i.plainObject(e)?e:void 0,u=void 0!==l||void 0!==t&&i.string(e);if(n&&n.isNode()){if(!u){var c=n.position();return l=a.modelToRenderedPosition(c,o,s),void 0===e?l:l[e]}for(var d=0;d<this.length;d++){var h=this[d];void 0!==t?h.position(e,(t-s[e])/o):void 0!==l&&h.position(a.renderedToModelPosition(l,o,s))}}else if(!u)return;return this},relativePosition:function(e,t){var n=this[0],r=this.cy(),a=i.plainObject(e)?e:void 0,o=void 0!==a||void 0!==t&&i.string(e),s=r.hasCompoundNodes();if(n&&n.isNode()){if(!o){var l=n.position(),u=s?n.parent():null,c=u&&u.length>0,d=c;c&&(u=u[0]);var h=d?u.position():{x:0,y:0};return a={x:l.x-h.x,y:l.y-h.y},void 0===e?a:a[e]}for(var p=0;p<this.length;p++){var f=this[p],v=s?f.parent():null,g=v&&v.length>0,y=g;g&&(v=v[0]);var m=y?v.position():{x:0,y:0};void 0!==t?f.position(e,t+m[e]):void 0!==a&&f.position({x:a.x+m.x,y:a.y+m.y})}}else if(!o)return;return this}},o.modelPosition=o.point=o.position,o.modelPositions=o.points=o.positions,o.renderedPoint=o.renderedPosition,o.relativePoint=o.relativePosition,e.exports=s},function(e,t,n){"use strict";function r(e){return{includeNodes:a.default(e.includeNodes,b.includeNodes),includeEdges:a.default(e.includeEdges,b.includeEdges),includeLabels:a.default(e.includeLabels,b.includeLabels),includeOverlays:a.default(e.includeOverlays,b.includeOverlays),useCache:a.default(e.useCache,b.useCache)}}var i=n(0),a=n(1),o=n(2),s=void 0,l=void 0;s=l={},l.renderedBoundingBox=function(e){var t=this.boundingBox(e),n=this.cy(),r=n.zoom(),i=n.pan(),a=t.x1*r+i.x,o=t.x2*r+i.x,s=t.y1*r+i.y,l=t.y2*r+i.y;return{x1:a,x2:o,y1:s,y2:l,w:o-a,h:l-s}},l.dirtyCompoundBoundsCache=function(){var e=this.cy();return e.styleEnabled()&&e.hasCompoundNodes()?(this.forEachUp(function(e){e._private.compoundBoundsClean=!1,e.isParent()&&e.emit("bounds")}),this):this},l.updateCompoundBounds=function(){var e=this.cy();if(!e.styleEnabled()||!e.hasCompoundNodes())return this;if(e.batching())return this;for(var t=[],n=0;n<this.length;n++){var r=this[n],i=r._private;i.compoundBoundsClean||(!function(e){function n(e,t,n){var r=0,i=0,a=t+n;return e>0&&a>0&&(r=t/a*e,i=n/a*e),{biasDiff:r,biasComplementDiff:i}}if(e.isParent()){var r=e._private,i=e.children(),a="include"===e.pstyle("compound-sizing-wrt-labels").value,o={width:{val:e.pstyle("min-width").pfValue,left:e.pstyle("min-width-bias-left"),right:e.pstyle("min-width-bias-right")},height:{val:e.pstyle("min-height").pfValue,top:e.pstyle("min-height-bias-top"),bottom:e.pstyle("min-height-bias-bottom")}},s=i.boundingBox({includeLabels:a,includeOverlays:!1,useCache:!1}),l=r.position;0!==s.w&&0!==s.h||(s={w:e.pstyle("width").pfValue,h:e.pstyle("height").pfValue},s.x1=l.x-s.w/2,s.x2=l.x+s.w/2,s.y1=l.y-s.h/2,s.y2=l.y+s.h/2);var u=o.width.left.value;"px"===o.width.left.units&&o.width.val>0&&(u=100*u/o.width.val);var c=o.width.right.value;"px"===o.width.right.units&&o.width.val>0&&(c=100*c/o.width.val);var d=o.height.top.value;"px"===o.height.top.units&&o.height.val>0&&(d=100*d/o.height.val);var h=o.height.bottom.value;"px"===o.height.bottom.units&&o.height.val>0&&(h=100*h/o.height.val);var p=n(o.width.val-s.w,u,c),f=p.biasDiff,v=p.biasComplementDiff,g=n(o.height.val-s.h,d,h),y=g.biasDiff,m=g.biasComplementDiff;r.autoPadding=function(e,t,n,r){if("%"!==n.units)return"px"===n.units?n.pfValue:0;switch(r){case"width":return e>0?n.pfValue*e:0;case"height":return t>0?n.pfValue*t:0;case"average":return e>0&&t>0?n.pfValue*(e+t)/2:0;case"min":return e>0&&t>0?e>t?n.pfValue*t:n.pfValue*e:0;case"max":return e>0&&t>0?e>t?n.pfValue*e:n.pfValue*t:0;default:return 0}}(s.w,s.h,e.pstyle("padding"),e.pstyle("padding-relative-to").value),r.autoWidth=Math.max(s.w,o.width.val),l.x=(-f+s.x1+s.x2+v)/2,r.autoHeight=Math.max(s.h,o.height.val),l.y=(-y+s.y1+s.y2+m)/2,t.push(e)}}(r),e._private.batchingStyle||(i.compoundBoundsClean=!0))}return this};var u=function(e){return e===1/0||e===-1/0?0:e},c=function(e,t,n,r,i){r-t!=0&&i-n!=0&&null!=t&&null!=n&&null!=r&&null!=i&&(e.x1=t<e.x1?t:e.x1,e.x2=r>e.x2?r:e.x2,e.y1=n<e.y1?n:e.y1,e.y2=i>e.y2?i:e.y2)},d=function(e,t){return c(e,t.x1,t.y1,t.x2,t.y2)},h=function(e,t,n){return a.getPrefixedProperty(e,t,n)},p=function(e,t,n){if(!t.cy().headless()){var r=t._private,i=r.rstyle,a=i.arrowWidth/2,o=t.pstyle(n+"-arrow-shape").value,s=void 0,l=void 0;"none"!==o&&("source"===n?(s=i.srcX,l=i.srcY):"target"===n?(s=i.tgtX,l=i.tgtY):(s=i.midX,l=i.midY),c(e,s-a,l-a,s+a,l+a))}},f=function(e,t,n){if(!t.cy().headless()){var r=void 0;r=n?n+"-":"";var i=t._private,a=i.rstyle;if(t.pstyle(r+"label").strValue){var o=t.pstyle("text-halign"),s=t.pstyle("text-valign"),l=h(a,"labelWidth",n),u=h(a,"labelHeight",n),d=h(a,"labelX",n),p=h(a,"labelY",n),f=t.pstyle(r+"text-margin-x").pfValue,v=t.pstyle(r+"text-margin-y").pfValue,g=t.isEdge(),y=t.pstyle(r+"text-rotation"),m=t.pstyle("text-outline-width").pfValue,b=t.pstyle("text-border-width").pfValue,x=b/2,w=t.pstyle("text-background-padding").pfValue,E=u+2*w,P=l+2*w,C=P/2,S=E/2,T=void 0,D=void 0,k=void 0,_=void 0;if(g)T=d-C,D=d+C,k=p-S,_=p+S;else{switch(o.value){case"left":T=d-P,D=d;break;case"center":T=d-C,D=d+C;break;case"right":T=d,D=d+P}switch(s.value){case"top":k=p-E,_=p;break;case"center":k=p-S,_=p+S;break;case"bottom":k=p,_=p+E}}var M=g&&"autorotate"===y.strValue,I=null!=y.pfValue&&0!==y.pfValue;if(M||I){var N=M?h(i.rstyle,"labelAngle",n):y.pfValue,B=Math.cos(N),z=Math.sin(N),L=function(e,t){return e-=d,t-=p,{x:e*B-t*z+d,y:e*z+t*B+p}},A=L(T,k),O=L(T,_),R=L(D,k),V=L(D,_);T=Math.min(A.x,O.x,R.x,V.x),D=Math.max(A.x,O.x,R.x,V.x),k=Math.min(A.y,O.y,R.y,V.y),_=Math.max(A.y,O.y,R.y,V.y)}T+=f-Math.max(m,x),D+=f+Math.max(m,x),k+=v-Math.max(m,x),_+=v+Math.max(m,x),c(e,T,k,D,_)}return e}},v=function(e,t){var n=e._private.cy,r=n.styleEnabled(),i=n.headless(),a={x1:1/0,y1:1/0,x2:-1/0,y2:-1/0},s=e._private,l=r?e.pstyle("display").value:"element",d=e.isNode(),h=e.isEdge(),v=void 0,g=void 0,y=void 0,m=void 0,b=void 0,x=void 0,w="none"!==l;if(w){var E=0;r&&t.includeOverlays&&0!==e.pstyle("overlay-opacity").value&&(E=e.pstyle("overlay-padding").value);var P=0,C=0;if(r&&(P=e.pstyle("width").pfValue,C=P/2),d&&t.includeNodes){var S=e.position();b=S.x,x=S.y;var T=e.outerWidth(),D=T/2,k=e.outerHeight(),_=k/2;v=b-D-E,g=b+D+E,y=x-_-E,m=x+_+E,c(a,v,y,g,m)}else if(h&&t.includeEdges){var M=s.rstyle||{};if(r&&!i&&(v=Math.min(M.srcX,M.midX,M.tgtX),g=Math.max(M.srcX,M.midX,M.tgtX),y=Math.min(M.srcY,M.midY,M.tgtY),m=Math.max(M.srcY,M.midY,M.tgtY),v-=C,g+=C,y-=C,m+=C,c(a,v,y,g,m)),r&&!i&&"haystack"===e.pstyle("curve-style").strValue){var I=M.haystackPts||[];if(v=I[0].x,y=I[0].y,g=I[1].x,m=I[1].y,v>g){var N=v;v=g,g=N}if(y>m){var B=y;y=m,m=B}c(a,v-C,y-C,g+C,m+C)}else{for(var z=M.bezierPts||M.linePts||[],L=0;L<z.length;L++){var A=z[L];v=A.x-C,g=A.x+C,y=A.y-C,m=A.y+C,c(a,v,y,g,m)}if(0===z.length){var O=e.source(),R=O.position(),V=e.target(),q=V.position();if(v=R.x,g=q.x,y=R.y,m=q.y,v>g){var F=v;v=g,g=F}if(y>m){var j=y;y=m,m=j}v-=C,g+=C,y-=C,m+=C,c(a,v,y,g,m)}}}if(r&&t.includeEdges&&h&&(p(a,e,"mid-source"),p(a,e,"mid-target"),p(a,e,"source"),p(a,e,"target")),r){if("yes"===e.pstyle("ghost").value){var X=e.pstyle("ghost-offset-x").pfValue,Y=e.pstyle("ghost-offset-y").pfValue;c(a,a.x1+X,a.y1+Y,a.x2+X,a.y2+Y)}}r&&(v=a.x1,g=a.x2,y=a.y1,m=a.y2,c(a,v-E,y-E,g+E,m+E)),r&&t.includeLabels&&(f(a,e,null),h&&(f(a,e,"source"),f(a,e,"target")))}return a.x1=u(a.x1),a.y1=u(a.y1),a.x2=u(a.x2),a.y2=u(a.y2),a.w=u(a.x2-a.x1),a.h=u(a.y2-a.y1),a.w>0&&a.h>0&&w&&o.expandBoundingBox(a,1),a},g=function(e){return e?"t":"f"},y=function(e){var t="";return t+=g(e.incudeNodes),t+=g(e.includeEdges),t+=g(e.includeLabels),t+=g(e.includeOverlays)},m=function(e,t){var n=e._private,r=void 0,i=e.cy().headless(),a=t===b?x:y(t);return t.useCache&&!i&&n.bbCache&&n.bbCache[a]?r=n.bbCache[a]:(r=v(e,t),i||(n.bbCache=n.bbCache||{},n.bbCache[a]=r)),r},b={includeNodes:!0,includeEdges:!0,includeLabels:!0,includeOverlays:!0,useCache:!0},x=y(b);l.boundingBox=function(e){if(1===this.length&&this[0]._private.bbCache&&(void 0===e||void 0===e.useCache||!0===e.useCache))return e=void 0===e?b:r(e),m(this[0],e);var t={x1:1/0,y1:1/0,x2:-1/0,y2:-1/0};e=e||a.staticEmptyObject();var n=r(e),i=this,o=i.cy(),s=o.styleEnabled();s&&this.recalculateRenderedStyle(n.useCache),this.updateCompoundBounds();for(var l={},c=0;c<i.length;c++){var h=i[c];if(s&&h.isEdge()&&"bezier"===h.pstyle("curve-style").strValue&&!l[h.id()]){for(var p=h.parallelEdges(),f=0;f<p.length;f++)l[p[f].id()]=!0;p.recalculateRenderedStyle(n.useCache)}d(t,m(h,n))}return t.x1=u(t.x1),t.y1=u(t.y1),t.x2=u(t.x2),t.y2=u(t.y2),t.w=u(t.x2-t.x1),t.h=u(t.y2-t.y1),t},l.boundingBoxAt=function(e){var t=this.nodes();if(i.plainObject(e)){var n=e;e=function(){return n}}for(var r=0;r<t.length;r++){var a=t[r],o=a._private,s=o.position,l=e.call(a,a,r);o.bbAtOldPos={x:s.x,y:s.y},l&&(s.x=l.x,s.y=l.y)}this.emit("dirty"),t.dirtyCompoundBoundsCache().updateCompoundBounds();for(var u=this.boundingBox({useCache:!1}),c=0;c<t.length;c++){var d=t[c],h=d._private,p=d._private.position,f=h.bbAtOldPos;p.x=f.x,p.y=f.y}return t.dirtyCompoundBoundsCache(),this.emit("dirty"),u},s.boundingbox=s.boundingBox,s.renderedBoundingbox=s.renderedBoundingBox,e.exports=l},function(e,t,n){"use strict";var r=n(1),i=void 0,a=void 0;i=a={};var o=function(e){e.uppercaseName=r.capitalize(e.name),e.autoName="auto"+e.uppercaseName,e.labelName="label"+e.uppercaseName,e.outerName="outer"+e.uppercaseName,e.uppercaseOuterName=r.capitalize(e.outerName),i[e.name]=function(){var t=this[0],n=t._private,r=n.cy,i=r._private.styleEnabled;if(t){if(!i)return 1;if(t.isParent())return t.updateCompoundBounds(),n[e.autoName]||0;var a=t.pstyle(e.name);switch(a.strValue){case"label":return t.recalculateRenderedStyle(),n.rstyle[e.labelName]||0;default:return a.pfValue}}},i["outer"+e.uppercaseName]=function(){var t=this[0],n=t._private,r=n.cy,i=r._private.styleEnabled;if(t){if(i){return t[e.name]()+t.pstyle("border-width").pfValue+2*t.padding()}return 1}},i["rendered"+e.uppercaseName]=function(){var t=this[0];if(t){return t[e.name]()*this.cy().zoom()}},i["rendered"+e.uppercaseOuterName]=function(){var t=this[0];if(t){return t[e.outerName]()*this.cy().zoom()}}};o({name:"width"}),o({name:"height"}),a.padding=function(){var e=this[0],t=e._private;return e.isParent()?(e.updateCompoundBounds(),void 0!==t.autoPadding?t.autoPadding:e.pstyle("padding").pfValue):e.pstyle("padding").pfValue},e.exports=a},function(e,t,n){"use strict";var r=function(e,t){if(e.isEdge())return t(e.renderer())};e.exports={controlPoints:function(){var e=this;return r(this,function(t){return t.getControlPoints(e)})},segmentPoints:function(){var e=this;return r(this,function(t){return t.getSegmentPoints(e)})},sourceEndpoint:function(){var e=this;return r(this,function(t){return t.getSourceEndpoint(e)})},targetEndpoint:function(){var e=this;return r(this,function(t){return t.getTargetEndpoint(e)})},midpoint:function(){var e=this;return r(this,function(t){return t.getEdgeMidpoint(e)})}}},function(e,t,n){"use strict";var r=n(11),i=n(4),a=n(0),o=n(1),s=n(6),l={qualifierCompare:function(e,t){return null==e||null==t?null==e&&null==t:e.sameText(t)},eventMatches:function(e,t,n){var r=t.qualifier;return null==r||e!==n.target&&a.element(n.target)&&r.matches(n.target)},eventFields:function(e){return{cy:e.cy(),target:e}},callbackContext:function(e,t,n){return null!=t.qualifier?n.target:e},beforeEmit:function(e,t){t.conf&&t.conf.once&&t.conf.onceCollection.removeListener(t.event,t.qualifier,t.callback)},bubble:function(){return!0},parent:function(e){return e.isChild()?e.parent():e.cy()}},u=function(e){return a.string(e)?new s(e):e},c={createEmitter:function(){for(var e=0;e<this.length;e++){var t=this[e],n=t._private;n.emitter||(n.emitter=new r(o.assign({context:t},l)))}return this},emitter:function(){return this._private.emitter},on:function(e,t,n){for(var r=0;r<this.length;r++){this[r].emitter().on(e,u(t),n)}return this},removeListener:function(e,t,n){for(var r=0;r<this.length;r++){this[r].emitter().removeListener(e,u(t),n)}return this},one:function(e,t,n){for(var r=0;r<this.length;r++){this[r].emitter().one(e,u(t),n)}return this},once:function(e,t,n){for(var r=0;r<this.length;r++){this[r].emitter().on(e,u(t),n,{once:!0,onceCollection:this})}},emit:function(e,t){for(var n=0;n<this.length;n++){this[n].emitter().emit(e,t)}return this},emitAndNotify:function(e,t){if(0!==this.length)return this.cy().notify({type:e,eles:this}),this.emit(e,t),this}};i.eventAliasesOn(c),e.exports=c},function(e,t,n){"use strict";var r=n(0),i=n(6),a={nodes:function(e){return this.filter(function(e){return e.isNode()}).filter(e)},edges:function(e){return this.filter(function(e){return e.isEdge()}).filter(e)},filter:function(e,t){if(void 0===e)return this;if(r.string(e)||r.elementOrCollection(e))return new i(e).filter(this);if(r.fn(e)){for(var n=this.spawn(),a=this,o=0;o<a.length;o++){var s=a[o];(t?e.apply(t,[s,o,a]):e(s,o,a))&&n.merge(s)}return n}return this.spawn()},not:function(e){if(e){r.string(e)&&(e=this.filter(e));for(var t=[],n=e._private.map,i=0;i<this.length;i++){var a=this[i];n.has(a.id())||t.push(a)}return this.spawn(t)}return this},absoluteComplement:function(){return this.cy().mutableElements().not(this)},intersect:function(e){if(r.string(e)){var t=e;return this.filter(t)}for(var n=[],i=this,a=e,o=this.length<e.length,s=o?a._private.map:i._private.map,l=o?i:a,u=0;u<l.length;u++){var c=l[u]._private.data.id,d=s.get(c);d&&n.push(d.ele)}return this.spawn(n)},xor:function(e){var t=this._private.cy;r.string(e)&&(e=t.$(e));var n=[],i=this,a=e,o=function(e,t){for(var r=0;r<e.length;r++){var i=e[r],a=i._private.data.id;t.hasElementWithId(a)||n.push(i)}};return o(i,a),o(a,i),this.spawn(n)},diff:function(e){var t=this._private.cy;r.string(e)&&(e=t.$(e));var n=[],i=[],a=[],o=this,s=e,l=function(e,t,n){for(var r=0;r<e.length;r++){var i=e[r],o=i._private.data.id;t.hasElementWithId(o)?a.push(i):n.push(i)}};return l(o,s,n),l(s,o,i),{left:this.spawn(n,{unique:!0}),right:this.spawn(i,{unique:!0}),both:this.spawn(a,{unique:!0})}},add:function(e){var t=this._private.cy;if(!e)return this;if(r.string(e)){var n=e;e=t.mutableElements().filter(n)}for(var i=[],a=0;a<this.length;a++)i.push(this[a]);for(var o=this._private.map,s=0;s<e.length;s++){!o.has(e[s].id())&&i.push(e[s])}return this.spawn(i)},merge:function(e){var t=this._private,n=t.cy;if(!e)return this;if(e&&r.string(e)){var i=e;e=n.mutableElements().filter(i)}for(var a=t.map,o=0;o<e.length;o++){var s=e[o],l=s._private.data.id;if(!a.has(l)){var u=this.length++;this[u]=s,a.set(l,{ele:s,index:u})}else{var c=a.get(l).index;this[c]=s,a.set(l,{ele:s,index:c})}}return this},unmergeOne:function(e){e=e[0];var t=this._private,n=e._private.data.id,r=t.map,i=r.get(n);if(!i)return this;var a=i.index;this[a]=void 0,r.delete(n);var o=a===this.length-1;if(this.length>1&&!o){var s=this.length-1,l=this[s],u=l._private.data.id;this[s]=void 0,this[a]=l,r.set(u,{ele:l,index:a})}return this.length--,this},unmerge:function(e){var t=this._private.cy;if(!e)return this;if(e&&r.string(e)){var n=e;e=t.mutableElements().filter(n)}for(var i=0;i<e.length;i++)this.unmergeOne(e[i]);return this},map:function(e,t){for(var n=[],r=this,i=0;i<r.length;i++){var a=r[i],o=t?e.apply(t,[a,i,r]):e(a,i,r);n.push(o)}return n},reduce:function(e,t){for(var n=t,r=this,i=0;i<r.length;i++)n=e(n,r[i],i,r);return n},max:function(e,t){for(var n=-1/0,r=void 0,i=this,a=0;a<i.length;a++){var o=i[a],s=t?e.apply(t,[o,a,i]):e(o,a,i);s>n&&(n=s,r=o)}return{value:n,ele:r}},min:function(e,t){for(var n=1/0,r=void 0,i=this,a=0;a<i.length;a++){var o=i[a],s=t?e.apply(t,[o,a,i]):e(o,a,i);s<n&&(n=s,r=o)}return{value:n,ele:r}}},o=a;o.u=o["|"]=o["+"]=o.union=o.or=o.add,o["\\"]=o["!"]=o["-"]=o.difference=o.relativeComplement=o.subtract=o.not,o.n=o["&"]=o["."]=o.and=o.intersection=o.intersect,o["^"]=o["(+)"]=o["(-)"]=o.symmetricDifference=o.symdiff=o.xor,o.fnFilter=o.filterFn=o.stdFilter=o.filter,o.complement=o.abscomp=o.absoluteComplement,e.exports=a},function(e,t,n){"use strict";var r={isNode:function(){return"nodes"===this.group()},isEdge:function(){return"edges"===this.group()},isLoop:function(){return this.isEdge()&&this.source().id()===this.target().id()},isSimple:function(){return this.isEdge()&&this.source().id()!==this.target().id()},group:function(){var e=this[0];if(e)return e._private.group}};e.exports=r},function(e,t,n){"use strict";var r=n(0),i=n(17),a=n(1),o={forEach:function(e,t){if(r.fn(e))for(var n=0;n<this.length;n++){var i=this[n],a=t?e.apply(t,[i,n,this]):e(i,n,this);if(!1===a)break}return this},toArray:function(){for(var e=[],t=0;t<this.length;t++)e.push(this[t]);return e},slice:function(e,t){var n=[],r=this.length;null==t&&(t=r),null==e&&(e=0),e<0&&(e=r+e),t<0&&(t=r+t);for(var i=e;i>=0&&i<t&&i<r;i++)n.push(this[i]);return this.spawn(n)},size:function(){return this.length},eq:function(e){return this[e]||this.spawn()},first:function(){return this[0]||this.spawn()},last:function(){return this[this.length-1]||this.spawn()},empty:function(){return 0===this.length},nonempty:function(){return!this.empty()},sort:function(e){if(!r.fn(e))return this;var t=this.toArray().sort(e);return this.spawn(t)},sortByZIndex:function(){return this.sort(i)},zDepth:function(){var e=this[0];if(e){var t=e._private;if("nodes"===t.group){var n=t.data.parent?e.parents().size():0;return e.isParent()?n:a.MAX_INT-1}var r=t.source,i=t.target,o=r.zDepth(),s=i.zDepth();return Math.max(o,s,0)}}};o.each=o.forEach,e.exports=o},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(5),o=n(2),s={layoutDimensions:function(e){if(e=i.assign({nodeDimensionsIncludeLabels:!0},e),e.nodeDimensionsIncludeLabels){var t=this.boundingBox();return{w:t.w,h:t.h}}return{w:this.outerWidth(),h:this.outerHeight()}},layoutPositions:function(e,t,n){var s=this.nodes(),l=this.cy(),u=t.eles,c=function(e,t){return e.id()+"$"+t},d=i.memoize(n,c);e.emit({type:"layoutstart",layout:e}),e.animations=[];var h=function(e,t,n){var r={x:t.x1+t.w/2,y:t.y1+t.h/2},i={x:(n.x-r.x)*e,y:(n.y-r.y)*e};return{x:r.x+i.x,y:r.y+i.y}},p=t.spacingFactor&&1!==t.spacingFactor,f=function(){if(!p)return null;for(var e=o.makeBoundingBox(),t=0;t<s.length;t++){var n=s[t],r=d(n,t);o.expandBoundingBoxByPoint(e,r.x,r.y)}return e}(),v=i.memoize(function(e,n){var i=d(e,n),a=e.position();if(r.number(a.x)&&r.number(a.y)||e.silentPosition({x:0,y:0}),p){var o=Math.abs(t.spacingFactor);i=h(o,f,i)}return null!=t.transform&&(i=t.transform(e,i)),i},c);if(t.animate){for(var g=0;g<s.length;g++){var y=s[g],m=v(y,g);if(null==t.animateFilter||t.animateFilter(y,g)){var b=y.animation({position:m,duration:t.animationDuration,easing:t.animationEasing});e.animations.push(b),b.play()}else y.position(m)}if(t.fit){var x=l.animation({fit:{boundingBox:u.boundingBoxAt(v),padding:t.padding},duration:t.animationDuration,easing:t.animationEasing});e.animations.push(x),x.play()}else if(void 0!==t.zoom&&void 0!==t.pan){var w=l.animation({zoom:t.zoom,pan:t.pan,duration:t.animationDuration,easing:t.animationEasing});e.animations.push(w),w.play()}e.one("layoutready",t.ready),e.emit({type:"layoutready",layout:e}),a.all(e.animations.map(function(e){return e.promise()})).then(function(){e.one("layoutstop",t.stop),e.emit({type:"layoutstop",layout:e})})}else s.positions(v),t.fit&&l.fit(t.eles,t.padding),null!=t.zoom&&l.zoom(t.zoom),t.pan&&l.pan(t.pan),e.one("layoutready",t.ready),e.emit({type:"layoutready",layout:e}),e.one("layoutstop",t.stop),e.emit({type:"layoutstop",layout:e});return this},layout:function(e){return this.cy().makeLayout(i.extend({},e,{eles:this}))}};s.createLayout=s.makeLayout=s.layout,e.exports=s},function(e,t,n){"use strict";function r(e,t,n){var r,i=n._private,a=i.styleCache=i.styleCache||{};return null!=(r=a[e])?r:r=a[e]=t(n)}function i(e,t){return function(n){return r(e,t,n)}}function a(e,t){var n=function(e){return t.call(e)};return function(){var t=this[0];if(t)return r(e,n,t)}}function o(e,t){var n=e._private,r=n.data.parent?e.parents():null;if(r)for(var i=0;i<r.length;i++){var a=r[i];if(!t(a))return!1}return!0}function s(e){var t=e.ok,n=e.edgeOkViaNode||e.ok,r=e.parentOk||e.ok;return function(){var e=this.cy();if(!e.styleEnabled())return!0;var i=this[0],a=e.hasCompoundNodes();if(i){var s=i._private;if(!t(i))return!1;if(i.isNode())return!a||o(i,r);var l=s.source,u=s.target;return n(l)&&(!a||o(l,n))&&(l===u||n(u)&&(!a||o(u,n)))}}}var l=n(0),u={recalculateRenderedStyle:function(e){var t=this.cy(),n=t.renderer(),r=t.styleEnabled();return n&&r&&n.recalculateRenderedStyle(this,e),this},dirtyStyleCache:function(){var e=this.cy(),t=function(e){return e._private.styleCache={}};if(e.hasCompoundNodes()){var n=void 0;n=this.spawnSelf().merge(this.descendants()).merge(this.parents()),n.merge(n.connectedEdges()),n.forEach(t)}else this.forEach(function(e){t(e),e.connectedEdges().forEach(t)});return this},updateStyle:function(e){var t=this._private.cy;if(!t.styleEnabled())return this;if(t._private.batchingStyle){return t._private.batchStyleEles.merge(this),this}var n=t.hasCompoundNodes(),r=t.style(),i=this;e=!(!e&&void 0!==e),n&&(i=this.spawnSelf().merge(this.descendants()).merge(this.parents()));var a=r.apply(i);return a.dirtyStyleCache(),a.dirtyCompoundBoundsCache(),e?a.emitAndNotify("style"):a.emit("style"),this},updateMappers:function(e){var t=this._private.cy,n=t.style();if(e=!(!e&&void 0!==e),!t.styleEnabled())return this;var r=n.updateMappers(this);return r.dirtyStyleCache(),r.dirtyCompoundBoundsCache(),e?r.emitAndNotify("style"):r.emit("style"),this},parsedStyle:function(e){var t=this[0],n=t.cy();if(n.styleEnabled())return t?t._private.style[e]||n.style().getDefaultProperty(e):void 0},numericStyle:function(e){var t=this[0];if(t.cy().styleEnabled()&&t){var n=t.pstyle(e);return void 0!==n.pfValue?n.pfValue:n.value}},numericStyleUnits:function(e){var t=this[0];if(t.cy().styleEnabled())return t?t.pstyle(e).units:void 0},renderedStyle:function(e){var t=this.cy();if(!t.styleEnabled())return this;var n=this[0];return n?t.style().getRenderedStyle(n,e):void 0},style:function(e,t){var n=this.cy();if(!n.styleEnabled())return this;var r=n.style();if(l.plainObject(e)){var i=e;r.applyBypass(this,i,!1),this.dirtyStyleCache(),this.dirtyCompoundBoundsCache(),this.emitAndNotify("style")}else if(l.string(e)){if(void 0===t){var a=this[0];return a?r.getStylePropertyValue(a,e):void 0}r.applyBypass(this,e,t,!1),this.dirtyStyleCache(),this.dirtyCompoundBoundsCache(),this.emitAndNotify("style")}else if(void 0===e){var o=this[0];return o?r.getRawStyle(o):void 0}return this},removeStyle:function(e){var t=this.cy();if(!t.styleEnabled())return this;var n=t.style(),r=this;if(void 0===e)for(var i=0;i<r.length;i++){var a=r[i];n.removeAllBypasses(a,!1)}else{e=e.split(/\s+/);for(var o=0;o<r.length;o++){var s=r[o];n.removeBypasses(s,e,!1)}}return this.dirtyStyleCache(),this.dirtyCompoundBoundsCache(),this.emitAndNotify("style"),this},show:function(){return this.css("display","element"),this},hide:function(){return this.css("display","none"),this},effectiveOpacity:function(){var e=this.cy();if(!e.styleEnabled())return 1;var t=e.hasCompoundNodes(),n=this[0];if(n){var r=n._private,i=n.pstyle("opacity").value;if(!t)return i;var a=r.data.parent?n.parents():null;if(a)for(var o=0;o<a.length;o++){var s=a[o],l=s.pstyle("opacity").value;i*=l}return i}},transparent:function(){if(!this.cy().styleEnabled())return!1;var e=this[0],t=e.cy().hasCompoundNodes();return e?t?0===e.effectiveOpacity():0===e.pstyle("opacity").value:void 0},backgrounding:function(){return!!this.cy().styleEnabled()&&!!this[0]._private.backgrounding}},c=i("eleTakesUpSpace",function(e){return"element"===e.pstyle("display").value&&0!==e.width()&&(!e.isNode()||0!==e.height())});u.takesUpSpace=a("takesUpSpace",s({ok:c}));var d=i("eleInteractive",function(e){return"yes"===e.pstyle("events").value&&"visible"===e.pstyle("visibility").value&&c(e)}),h=i("parentInteractive",function(e){return"visible"===e.pstyle("visibility").value&&c(e)});u.interactive=a("interactive",s({ok:d,parentOk:h,edgeOkViaNode:c})),u.noninteractive=function(){var e=this[0];if(e)return!e.interactive()};var p=i("eleVisible",function(e){return"visible"===e.pstyle("visibility").value&&0!==e.pstyle("opacity").pfValue&&c(e)}),f=c;u.visible=a("visible",s({ok:p,edgeOkViaNode:f})),u.hidden=function(){var e=this[0];if(e)return!e.visible()},u.bypass=u.css=u.style,u.renderedCss=u.renderedStyle,u.removeBypass=u.removeCss=u.removeStyle,u.pstyle=u.parsedStyle,e.exports=u},function(e,t,n){"use strict";function r(e){return function(){var t=arguments,n=[];if(2===t.length){var r=t[0],i=t[1];this.on(e.event,r,i)}else if(1===t.length){var a=t[0];this.on(e.event,a)}else if(0===t.length){for(var o=0;o<this.length;o++){var s=this[o],l=!e.ableField||s._private[e.ableField],u=s._private[e.field]!=e.value;if(e.overrideAble){var c=e.overrideAble(s);if(void 0!==c&&(l=c,!c))return this}l&&(s._private[e.field]=e.value,u&&n.push(s))}var d=this.spawn(n);d.updateStyle(),d.emit(e.event)}return this}}function i(e){a[e.field]=function(){var t=this[0];if(t){if(e.overrideField){var n=e.overrideField(t);if(void 0!==n)return n}return t._private[e.field]}},a[e.on]=r({event:e.on,field:e.field,ableField:e.ableField,overrideAble:e.overrideAble,value:!0}),a[e.off]=r({event:e.off,field:e.field,ableField:e.ableField,overrideAble:e.overrideAble,value:!1})}var a={};i({field:"locked",overrideField:function(e){return!!e.cy().autolock()||void 0},on:"lock",off:"unlock"}),i({field:"grabbable",overrideField:function(e){return!e.cy().autoungrabify()&&void 0},on:"grabify",off:"ungrabify"}),i({field:"selected",ableField:"selectable",overrideAble:function(e){return!e.cy().autounselectify()&&void 0},on:"select",off:"unselect"}),i({field:"selectable",overrideField:function(e){return!e.cy().autounselectify()&&void 0},on:"selectify",off:"unselectify"}),a.deselect=a.unselect,a.grabbed=function(){var e=this[0];if(e)return e._private.grabbed},i({field:"active",on:"activate",off:"unactivate"}),a.inactive=function(){var e=this[0];if(e)return!e._private.active},e.exports=a},function(e,t,n){"use strict";function r(e){return function(t){for(var n=[],r=0;r<this.length;r++){var i=this[r],a=i._private[e.attr];a&&n.push(a)}return this.spawn(n,{unique:!0}).filter(t)}}function i(e){return function(t){var n=[],r=this._private.cy,i=e||{};s.string(t)&&(t=r.$(t));for(var a=0;a<t.length;a++)for(var o=t[a]._private.edges,l=0;l<o.length;l++){var u=o[l],c=u._private.data,d=this.hasElementWithId(c.source)&&t.hasElementWithId(c.target),h=t.hasElementWithId(c.source)&&this.hasElementWithId(c.target),p=d||h;if(p){if(i.thisIsSrc||i.thisIsTgt){if(i.thisIsSrc&&!d)continue;if(i.thisIsTgt&&!h)continue}n.push(u)}}return this.spawn(n,{unique:!0})}}function a(e){var t={codirected:!1};return e=o.extend({},t,e),function(t){for(var n=[],r=this.edges(),i=e,a=0;a<r.length;a++)for(var o=r[a],s=o._private,l=s.source,u=l._private.data.id,c=s.data.target,d=l._private.edges,h=0;h<d.length;h++){var p=d[h],f=p._private.data,v=f.target,g=f.source,y=v===c&&g===u,m=u===v&&c===g;(i.codirected&&y||!i.codirected&&(y||m))&&n.push(p)}return this.spawn(n,{unique:!0}).filter(t)}}var o=n(1),s=n(0),l={},u=function(e,t){return function(n,r,i,a){var o=n,l=this,u=void 0;if(null==o?u="null":s.elementOrCollection(o)&&1===o.length&&(u="#"+o.id()),1===l.length&&u){var c=l[0]._private,d=c.traversalCache=c.traversalCache||{},h=d[t]=d[t]||{},p=h[u];return p||(h[u]=e.call(l,n,r,i,a))}return e.call(l,n,r,i,a)}},c=function(e){return function(t){for(var n=this,r=[],i=0;i<n.length;i++){var a=n[i];if(a.isNode()){for(var o=!1,s=a.connectedEdges(),l=0;l<s.length;l++){var u=s[l],c=u.source(),d=u.target();if(e.noIncomingEdges&&d===a&&c!==a||e.noOutgoingEdges&&c===a&&d!==a){o=!0;break}}o||r.push(a)}}return this.spawn(r,{unique:!0}).filter(t)}},d=function(e){return function(t){for(var n=this,r=[],i=0;i<n.length;i++){var a=n[i];if(a.isNode())for(var o=a.connectedEdges(),s=0;s<o.length;s++){var l=o[s],u=l.source(),c=l.target();e.outgoing&&u===a?(r.push(l),r.push(c)):e.incoming&&c===a&&(r.push(l),r.push(u))}}return this.spawn(r,{unique:!0}).filter(t)}},h=function(e){return function(t){for(var n=this,r=[],i={};;){var a=e.outgoing?n.outgoers():n.incomers();if(0===a.length)break;for(var o=!1,s=0;s<a.length;s++){var l=a[s],u=l.id();i[u]||(i[u]=!0,r.push(l),o=!0)}if(!o)break;n=a}return this.spawn(r,{unique:!0}).filter(t)}};l.clearTraversalCache=function(){for(var e=0;e<this.length;e++)this[e]._private.traversalCache=null},o.extend(l,{roots:c({noIncomingEdges:!0}),leaves:c({noOutgoingEdges:!0}),outgoers:u(d({outgoing:!0}),"outgoers"),successors:h({outgoing:!0}),incomers:u(d({incoming:!0}),"incomers"),predecessors:h({incoming:!0})}),o.extend(l,{neighborhood:u(function(e){for(var t=[],n=this.nodes(),r=0;r<n.length;r++)for(var i=n[r],a=i.connectedEdges(),o=0;o<a.length;o++){var s=a[o],l=s.source(),u=s.target(),c=i===l?u:l;c.length>0&&t.push(c[0]),t.push(s[0])}return this.spawn(t,{unique:!0}).filter(e)},"neighborhood"),closedNeighborhood:function(e){return this.neighborhood().add(this).filter(e)},openNeighborhood:function(e){return this.neighborhood(e)}}),l.neighbourhood=l.neighborhood,l.closedNeighbourhood=l.closedNeighborhood,l.openNeighbourhood=l.openNeighborhood,o.extend(l,{source:u(function(e){var t=this[0],n=void 0;return t&&(n=t._private.source||t.cy().collection()),n&&e?n.filter(e):n},"source"),target:u(function(e){var t=this[0],n=void 0;return t&&(n=t._private.target||t.cy().collection()),n&&e?n.filter(e):n},"target"),sources:r({attr:"source"}),targets:r({attr:"target"})}),o.extend(l,{edgesWith:u(i(),"edgesWith"),edgesTo:u(i({thisIsSrc:!0}),"edgesTo")}),o.extend(l,{connectedEdges:u(function(e){for(var t=[],n=this,r=0;r<n.length;r++){var i=n[r];if(i.isNode())for(var a=i._private.edges,o=0;o<a.length;o++){var s=a[o];t.push(s)}}return this.spawn(t,{unique:!0}).filter(e)},"connectedEdges"),connectedNodes:u(function(e){for(var t=[],n=this,r=0;r<n.length;r++){var i=n[r];i.isEdge()&&(t.push(i.source()[0]),t.push(i.target()[0]))}return this.spawn(t,{unique:!0}).filter(e)},"connectedNodes"),parallelEdges:u(a(),"parallelEdges"),codirectedEdges:u(a({codirected:!0}),"codirectedEdges")}),o.extend(l,{components:function(){var e=this,t=e.cy(),n=e.spawn(),r=e.nodes().spawnSelf(),i=[],a=function(e,t){n.merge(e),r.unmerge(e),t.merge(e)};if(r.empty())return e.spawn();do{!function(){var n=t.collection();i.push(n);var o=r[0];a(o,n),e.bfs({directed:!1,roots:o,visit:function(e,t,r,i,o){a(e,n)}})}()}while(r.length>0);return i.map(function(e){var t=e.connectedEdges().stdFilter(function(t){return e.anySame(t.source())&&e.anySame(t.target())});return e.union(t)})}}),e.exports=l},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(7),o=n(14),s={add:function(e){var t=void 0,n=this;if(r.elementOrCollection(e)){var s=e;if(s._private.cy===n)t=s.restore();else{for(var l=[],u=0;u<s.length;u++){var c=s[u];l.push(c.json())}t=new a(n,l)}}else if(r.array(e)){var d=e;t=new a(n,d)}else if(r.plainObject(e)&&(r.array(e.nodes)||r.array(e.edges))){for(var h=e,p=[],f=["nodes","edges"],v=0,g=f.length;v<g;v++){var y=f[v],m=h[y];if(r.array(m))for(var b=0,x=m.length;b<x;b++){var w=i.extend({group:y},m[b]);p.push(w)}}t=new a(n,p)}else{var E=e;t=new o(n,E).collection()}return t},remove:function(e){if(r.elementOrCollection(e));else if(r.string(e)){var t=e;e=this.$(t)}return e.remove()}};e.exports=s},function(e,t,n){"use strict";var r=n(4),i=n(1),a=n(72),o={animate:r.animate(),animation:r.animation(),animated:r.animated(),clearQueue:r.clearQueue(),delay:r.delay(),delayAnimation:r.delayAnimation(),stop:r.stop(),addToAnimationPool:function(e){var t=this;t.styleEnabled()&&t._private.aniEles.merge(e)},stopAnimationLoop:function(){this._private.animationsRunning=!1},startAnimationLoop:function(){function e(){t._private.animationsRunning&&i.requestAnimationFrame(function(n){a(n,t),e()})}var t=this;if(t._private.animationsRunning=!0,t.styleEnabled()){var n=t.renderer();n&&n.beforeRender?n.beforeRender(function(e,n){a(n,t)},n.beforeRenderPriorities.animations):e()}}};e.exports=o},function(e,t,n){"use strict";function r(e,t){function n(t,n){var r=t._private,s=r.animation.current,l=r.animation.queue,u=!1;if(!n&&"none"===t.pstyle("display").value){s=s.splice(0,s.length).concat(l.splice(0,l.length));for(var c=0;c<s.length;c++)s[c].stop()}if(0===s.length){var d=l.shift();d&&s.push(d)}for(var h=function(e){for(var t=e.length-1;t>=0;t--){(0,e[t])()}e.splice(0,e.length)},p=s.length-1;p>=0;p--){var f=s[p],v=f._private;v.stopped?(s.splice(p,1),v.hooked=!1,v.playing=!1,v.started=!1,h(v.frames)):(v.playing||v.applying)&&(v.playing&&v.applying&&(v.applying=!1),v.started||a(t,f,e,n),i(t,f,e,n),v.applying&&(v.applying=!1),h(v.frames),f.completed()&&(s.splice(p,1),v.hooked=!1,v.playing=!1,v.started=!1,h(v.completes)),u=!0)}return n||0!==s.length||0!==l.length||o.push(t),u}for(var r=t._private.aniEles,o=[],s=!1,l=0;l<r.length;l++){var u=r[l],c=n(u);s=s||c}var d=n(t,!0);(s||d)&&(r.length>0?(r.dirtyCompoundBoundsCache(),t.notify({type:"draw",eles:r})):t.notify({type:"draw"})),r.unmerge(o),t.emit("step")}var i=n(73),a=n(78);e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r){var l=!r,u=e._private,c=t._private,d=c.easing,h=c.startTime,p=r?e:e.cy(),f=p.style();if(!c.easingImpl)if(null==d)c.easingImpl=a.linear;else{var v=void 0;if(s.string(d)){var g=f.parse("transition-timing-function",d);v=g.value}else v=d;var y=void 0,m=void 0;s.string(v)?(y=v,m=[]):(y=v[1],m=v.slice(2).map(function(e){return+e})),m.length>0?("spring"===y&&m.push(c.duration),c.easingImpl=a[y].apply(null,m)):c.easingImpl=a[y]}var b=c.easingImpl,x=void 0;if(x=0===c.duration?1:(n-h)/c.duration,c.applying&&(x=c.progress),x<0?x=0:x>1&&(x=1),null==c.delay){var w=c.startPosition,E=c.position;if(E&&l&&!e.locked()){var P=e.position();i(w.x,E.x)&&(P.x=o(w.x,E.x,x,b)),i(w.y,E.y)&&(P.y=o(w.y,E.y,x,b)),e.emit("position")}var C=c.startPan,S=c.pan,T=u.pan,D=null!=S&&r;D&&(i(C.x,S.x)&&(T.x=o(C.x,S.x,x,b)),i(C.y,S.y)&&(T.y=o(C.y,S.y,x,b)),e.emit("pan"));var k=c.startZoom,_=c.zoom,M=null!=_&&r;M&&(i(k,_)&&(u.zoom=o(k,_,x,b)),e.emit("zoom")),(D||M)&&e.emit("viewport");var I=c.style;if(I&&I.length>0&&l){for(var N=0;N<I.length;N++){var B=I[N],z=B.name,L=B,A=c.startStyle[z],O=f.properties[A.name],R=o(A,L,x,b,O);f.overrideBypass(e,z,R)}e.emit("style")}}return c.progress=x,x}function i(e,t){return null!=e&&null!=t&&(!(!s.number(e)||!s.number(t))||!(!e||!t))}var a=n(74),o=n(77),s=n(0);e.exports=r},function(e,t,n){"use strict";var r=n(75),i=n(76),a=function(e,t,n,i){var a=r(e,t,n,i);return function(e,t,n){return e+(t-e)*a(n)}},o={linear:function(e,t,n){return e+(t-e)*n},ease:a(.25,.1,.25,1),"ease-in":a(.42,0,1,1),"ease-out":a(0,0,.58,1),"ease-in-out":a(.42,0,.58,1),"ease-in-sine":a(.47,0,.745,.715),"ease-out-sine":a(.39,.575,.565,1),"ease-in-out-sine":a(.445,.05,.55,.95),"ease-in-quad":a(.55,.085,.68,.53),"ease-out-quad":a(.25,.46,.45,.94),"ease-in-out-quad":a(.455,.03,.515,.955),"ease-in-cubic":a(.55,.055,.675,.19),"ease-out-cubic":a(.215,.61,.355,1),"ease-in-out-cubic":a(.645,.045,.355,1),"ease-in-quart":a(.895,.03,.685,.22),"ease-out-quart":a(.165,.84,.44,1),"ease-in-out-quart":a(.77,0,.175,1),"ease-in-quint":a(.755,.05,.855,.06),"ease-out-quint":a(.23,1,.32,1),"ease-in-out-quint":a(.86,0,.07,1),"ease-in-expo":a(.95,.05,.795,.035),"ease-out-expo":a(.19,1,.22,1),"ease-in-out-expo":a(1,0,0,1),"ease-in-circ":a(.6,.04,.98,.335),"ease-out-circ":a(.075,.82,.165,1),"ease-in-out-circ":a(.785,.135,.15,.86),spring:function(e,t,n){if(0===n)return o.linear;var r=i(e,t,n);return function(e,t,n){return e+(t-e)*r(n)}},"cubic-bezier":a};e.exports=o},function(e,t,n){"use strict";/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function r(e,t,n,r){function i(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function o(e){return 3*e}function s(e,t,n){return((i(t,n)*e+a(t,n))*e+o(t))*e}function l(e,t,n){return 3*i(t,n)*e*e+2*a(t,n)*e+o(t)}function u(t,r){for(var i=0;i<f;++i){var a=l(r,e,n);if(0===a)return r;r-=(s(r,e,n)-t)/a}return r}function c(){for(var t=0;t<m;++t)E[t]=s(t*b,e,n)}function d(t,r,i){var a=void 0,o=void 0,l=0;do{o=r+(i-r)/2,a=s(o,e,n)-t,a>0?i=o:r=o}while(Math.abs(a)>g&&++l<y);return o}function h(t){for(var r=0,i=1,a=m-1;i!==a&&E[i]<=t;++i)r+=b;--i;var o=(t-E[i])/(E[i+1]-E[i]),s=r+o*b,c=l(s,e,n);return c>=v?u(t,s):0===c?s:d(t,r,r+b)}function p(){P=!0,e===t&&n===r||c()}var f=4,v=.001,g=1e-7,y=10,m=11,b=1/(m-1),x="undefined"!=typeof Float32Array;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;e=Math.min(e,1),n=Math.min(n,1),e=Math.max(e,0),n=Math.max(n,0);var E=x?new Float32Array(m):new Array(m),P=!1,C=function(i){return P||p(),e===t&&n===r?i:0===i?0:1===i?1:s(h(i),t,r)};C.getControlPoints=function(){return[{x:e,y:t},{x:n,y:r}]};var S="generateBezier("+[e,t,n,r]+")";return C.toString=function(){return S},C}e.exports=r},function(e,t,n){"use strict";/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var r=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},a=t(n,.5*r,i),o=t(n,.5*r,a),s=t(n,r,o),l=1/6*(i.dx+2*(a.dx+o.dx)+s.dx),u=1/6*(i.dv+2*(a.dv+o.dv)+s.dv);return n.x=n.x+l*r,n.v=n.v+u*r,n}return function e(t,r,i){var a={x:-1,v:0,tension:null,friction:null},o=[0],s=0,l=void 0,u=void 0,c=void 0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,i=i||null,a.tension=t,a.friction=r,l=null!==i,l?(s=e(t,r),u=s/i*.016):u=.016;c=n(c||a,u),o.push(1+c.x),s+=16,Math.abs(c.x)>1e-4&&Math.abs(c.v)>1e-4;);return l?function(e){return o[e*(o.length-1)|0]}:s}}();e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,i){if(1===r)return n;var a=i(t,n,r);return null==e?a:((e.roundValue||e.color)&&(a=Math.round(a)),void 0!==e.min&&(a=Math.max(a,e.min)),void 0!==e.max&&(a=Math.min(a,e.max)),a)}function i(e,t){return null!=e.pfValue||null!=e.value?null==e.pfValue||null!=t&&"%"===t.type.units?e.value:e.pfValue:e}function a(e,t,n,a,s){var l=null!=s?s.type:null;n<0?n=0:n>1&&(n=1);var u=i(e,s),c=i(t,s);if(o.number(u)&&o.number(c))return r(l,u,c,n,a);if(o.array(u)&&o.array(c)){for(var d=[],h=0;h<c.length;h++){var p=u[h],f=c[h];if(null!=p&&null!=f){var v=r(l,p,f,n,a);d.push(v)}else d.push(f)}return d}}var o=n(0);e.exports=a},function(e,t,n){"use strict";function r(e,t,n,r){var i=!r,a=e,o=t._private,s=r?e:e.cy(),l=s.style();if(i){var u=a.position();o.startPosition=o.startPosition||{x:u.x,y:u.y},o.startStyle=o.startStyle||l.getAnimationStartStyle(a,o.style)}if(r){var c=s._private.pan;o.startPan=o.startPan||{x:c.x,y:c.y},o.startZoom=null!=o.startZoom?o.startZoom:s._private.zoom}o.started=!0,o.startTime=n-o.progress*o.duration}e.exports=r},function(e,t,n){"use strict";var r=n(11),i=n(4),a=n(0),o=n(1),s=n(6),l={qualifierCompare:function(e,t){return null==e||null==t?null==e&&null==t:e.sameText(t)},eventMatches:function(e,t,n){var r=t.qualifier;return null==r||e!==n.target&&a.element(n.target)&&r.matches(n.target)},eventFields:function(e){return{cy:e,target:e}},callbackContext:function(e,t,n){return null!=t.qualifier?n.target:e}},u=function(e){return a.string(e)?new s(e):e},c={createEmitter:function(){var e=this._private;return e.emitter||(e.emitter=new r(o.assign({context:this},l))),this},emitter:function(){return this._private.emitter},on:function(e,t,n){return this.emitter().on(e,u(t),n),this},removeListener:function(e,t,n){return this.emitter().removeListener(e,u(t),n),this},one:function(e,t,n){return this.emitter().one(e,u(t),n),this},once:function(e,t,n){return this.emitter().one(e,u(t),n),this},emit:function(e,t){return this.emitter().emit(e,t),this}};i.eventAliasesOn(c),e.exports=c},function(e,t,n){"use strict";var r={png:function(e){var t=this._private.renderer;return e=e||{},t.png(e)},jpg:function(e){var t=this._private.renderer;return e=e||{},e.bg=e.bg||"#fff",t.jpg(e)}};r.jpeg=r.jpg,e.exports=r},function(e,t,n){"use strict";var r=n(1),i=n(0),a={layout:function(e){var t=this;if(null==e)return void r.error("Layout options must be specified to make a layout");if(null==e.name)return void r.error("A `name` must be specified to make a layout");var n=e.name,a=t.extension("layout",n);if(null==a)return void r.error("Can not apply layout: No such layout `"+n+"` found; did you include its JS file?");var o=void 0;return o=i.string(e.eles)?t.$(e.eles):null!=e.eles?e.eles:t.$(),new a(r.extend({},e,{cy:t,eles:o}))}};a.createLayout=a.makeLayout=a.layout,e.exports=a},function(e,t,n){"use strict";var r={notify:function(e){var t=this._private;if(t.batchingNotify){var n=t.batchNotifyEles,r=t.batchNotifyTypes;return e.eles&&n.merge(e.eles),void(r.ids[e.type]||(r.push(e.type),r.ids[e.type]=!0))}if(t.notificationsEnabled){var i=this.renderer();!this.isDestroyed()&&i&&i.notify(e)}},notifications:function(e){var t=this._private;if(void 0===e)return t.notificationsEnabled;t.notificationsEnabled=!!e},noNotifications:function(e){this.notifications(!1),e(),this.notifications(!0)},batching:function(){return this._private.batchCount>0},startBatch:function(){var e=this._private;return null==e.batchCount&&(e.batchCount=0),0===e.batchCount&&(e.batchingStyle=e.batchingNotify=!0,e.batchStyleEles=this.collection(),e.batchNotifyEles=this.collection(),e.batchNotifyTypes=[],e.batchNotifyTypes.ids={}),e.batchCount++,this},endBatch:function(){var e=this._private;return e.batchCount--,0===e.batchCount&&(e.batchingStyle=!1,e.batchStyleEles.updateStyle(),e.batchingNotify=!1,this.notify({type:e.batchNotifyTypes,eles:e.batchNotifyEles})),this},batch:function(e){return this.startBatch(),e(),this.endBatch(),this},batchData:function(e){var t=this;return this.batch(function(){for(var n=Object.keys(e),r=0;r<n.length;r++){var i=n[r],a=e[i];t.getElementById(i).data(a)}})}};e.exports=r},function(e,t,n){"use strict";var r=n(1),i={renderTo:function(e,t,n,r){return this._private.renderer.renderTo(e,t,n,r),this},renderer:function(){return this._private.renderer},forceRender:function(){return this.notify({type:"draw"}),this},resize:function(){return this.invalidateSize(),this.notify({type:"resize"}),this.emit("resize"),this},initRenderer:function(e){var t=this,n=t.extension("renderer",e.name);if(null==n)return void r.error("Can not initialise: No such renderer `%s` found; did you include its JS file?",e.name);t._private.renderer=new n(r.extend({},e,{cy:t})),this.notify({type:"init"})},destroyRenderer:function(){var e=this;e.notify({type:"destroy"});var t=e.container();if(t)for(t._cyreg=null;t.childNodes.length>0;)t.removeChild(t.childNodes[0]);e._private.renderer=null},onRender:function(e){return this.on("render",e)},offRender:function(e){return this.off("render",e)}};i.invalidateDimensions=i.resize,e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(7),a={collection:function(e,t){return r.string(e)?this.$(e):r.elementOrCollection(e)?e.collection():r.array(e)?new i(this,e,t):new i(this)},nodes:function(e){var t=this.$(function(e){return e.isNode()});return e?t.filter(e):t},edges:function(e){var t=this.$(function(e){return e.isEdge()});return e?t.filter(e):t},$:function(e){var t=this._private.elements;return e?t.filter(e):t.spawnSelf()},mutableElements:function(){return this._private.elements}};a.elements=a.filter=a.$,e.exports=a},function(e,t,n){"use strict";var r=n(0),i=n(18),a={style:function(e){if(e){this.setStyle(e).update()}return this._private.style},setStyle:function(e){var t=this._private;return r.stylesheet(e)?t.style=e.generateStyle(this):r.array(e)?t.style=i.fromJson(this,e):r.string(e)?t.style=i.fromString(this,e):t.style=i(this),t.style}};e.exports=a},function(e,t,n){"use strict";var r=n(1),i=n(0),a=n(5),o={};o.apply=function(e){var t=this,n=t._private,r=n.cy,i=r.collection();n.newStyle&&(n.contextStyles={},n.propDiffs={},t.cleanElements(e,!0));for(var a=0;a<e.length;a++){var o=e[a],s=t.getContextMeta(o);if(!s.empty){i.merge(o);var l=t.getContextStyle(s),u=t.applyContextStyle(s,l,o);n.newStyle||t.updateTransitions(o,u.diffProps),t.updateStyleHints(o)}}return n.newStyle=!1,i},o.getPropertiesDiff=function(e,t){var n=this,r=n._private.propDiffs=n._private.propDiffs||{},i=e+"-"+t,a=r[i];if(a)return a;for(var o=[],s={},l=0;l<n.length;l++){var u=n[l],c="t"===e[l],d="t"===t[l],h=c!==d,p=u.mappedProperties.length>0;if(h||p){var f=void 0;h&&p?f=u.properties:h?f=u.properties:p&&(f=u.mappedProperties);for(var v=0;v<f.length;v++){for(var g=f[v],y=g.name,m=!1,b=l+1;b<n.length;b++){var x=n[b];if("t"===t[b]&&(m=null!=x.properties[g.name]))break}s[y]||m||(s[y]=!0,o.push(y))}}}return r[i]=o,o},o.getContextMeta=function(e){var t=this,n="",r=void 0,i=e._private.styleCxtKey||"";t._private.newStyle&&(i="");for(var a=0;a<t.length;a++){var o=t[a];n+=o.selector&&o.selector.matches(e)?"t":"f"}return r=t.getPropertiesDiff(i,n),e._private.styleCxtKey=n,{key:n,diffPropNames:r,empty:0===r.length}},o.getContextStyle=function(e){var t=e.key,n=this,r=this._private.contextStyles=this._private.contextStyles||{};if(r[t])return r[t];for(var i={_private:{key:t}},a=0;a<n.length;a++){var o=n[a];if("t"===t[a])for(var s=0;s<o.properties.length;s++){var l=o.properties[s];i[l.name]=l}}return r[t]=i,i},o.applyContextStyle=function(e,t,n){for(var r=this,i=e.diffPropNames,a={},o=0;o<i.length;o++){var s=i[o],l=t[s],u=n.pstyle(s);if(!l){if(!u)continue;l=u.bypass?{name:s,deleteBypassed:!0}:{name:s,delete:!0}}if(u!==l){var c=a[s]={prev:u};r.applyParsedProperty(n,l),c.next=n.pstyle(s),c.next&&c.next.bypass&&(c.next=c.next.bypassed)}}return{diffProps:a}},o.updateStyleHints=function(e){var t=e._private,n=this;if(!e.removed()){var r=!1;if("nodes"===t.group)for(var i=1;i<=n.pieBackgroundN;i++){var a=e.pstyle("pie-"+i+"-background-size").value;if(a>0){r=!0;break}}t.hasPie=r;var o=e.pstyle("text-transform").strValue,s=e.pstyle("label").strValue,l=e.pstyle("source-label").strValue,u=e.pstyle("target-label").strValue,c=e.pstyle("font-style").strValue,d=e.pstyle("font-size").pfValue+"px",h=e.pstyle("font-family").strValue,p=e.pstyle("font-weight").strValue,f=e.pstyle("text-valign").strValue,v=e.pstyle("text-valign").strValue,g=e.pstyle("text-outline-width").pfValue,y=e.pstyle("text-wrap").strValue,m=e.pstyle("text-max-width").pfValue,b=c+"$"+d+"$"+h+"$"+p+"$"+o+"$"+f+"$"+v+"$"+g+"$"+y+"$"+m;t.labelStyleKey=b,t.sourceLabelKey=b+"$"+l,t.targetLabelKey=b+"$"+u,t.labelKey=b+"$"+s,t.fontKey=c+"$"+p+"$"+d+"$"+h,t.styleKey=Date.now()}},o.applyParsedProperty=function(e,t){var n=this,a=t,o=e._private.style,s=void 0,l=n.types,u=n.properties[a.name].type,c=a.bypass,d=o[a.name],h=d&&d.bypass,p=e._private,f=function(){n.checkZOrderTrigger(e,a.name,d?d.value:null,a.value)};if("curve-style"===t.name&&"haystack"===t.value&&e.isEdge()&&(e.isLoop()||e.source().isParent()||e.target().isParent())&&(a=t=this.parse(t.name,"bezier",c)),a.delete)return o[a.name]=void 0,f(),!0;if(a.deleteBypassed)return d?!!d.bypass&&(d.bypassed=void 0,f(),!0):(f(),!0);if(a.deleteBypass)return d?!!d.bypass&&(o[a.name]=d.bypassed,f(),!0):(f(),!0);var v=function(){r.error("Do not assign mappings to elements without corresponding data (e.g. ele `"+e.id()+"` for property `"+a.name+"` with data field `"+a.field+"`); try a `["+a.field+"]` selector to limit scope to elements with `"+a.field+"` defined")};switch(a.mapped){case l.mapData:for(var g=a.field.split("."),y=p.data,m=0;m<g.length&&y;m++){y=y[g[m]]}var b=void 0;if(b=i.number(y)?(y-a.fieldMin)/(a.fieldMax-a.fieldMin):0,b<0?b=0:b>1&&(b=1),u.color){var x=a.valueMin[0],w=a.valueMax[0],E=a.valueMin[1],P=a.valueMax[1],C=a.valueMin[2],S=a.valueMax[2],T=null==a.valueMin[3]?1:a.valueMin[3],D=null==a.valueMax[3]?1:a.valueMax[3],k=[Math.round(x+(w-x)*b),Math.round(E+(P-E)*b),Math.round(C+(S-C)*b),Math.round(T+(D-T)*b)];s={bypass:a.bypass,name:a.name,value:k,strValue:"rgb("+k[0]+", "+k[1]+", "+k[2]+")"}}else{if(!u.number)return!1;var _=a.valueMin+(a.valueMax-a.valueMin)*b;s=this.parse(a.name,_,a.bypass,"mapping")}s||(s=this.parse(a.name,d.strValue,a.bypass,"mapping")),s||v(),s.mapping=a,a=s;break;case l.data:var M=a.field.split("."),I=p.data;if(I)for(var N=0;N<M.length;N++){var B=M[N];I=I[B]}if(!(s=this.parse(a.name,I,a.bypass,"mapping"))){var z=d?d.strValue:"";s=this.parse(a.name,z,a.bypass,"mapping")}s||v(),s.mapping=a,a=s;break;case l.fn:var L=a.value,A=L(e);s=this.parse(a.name,A,a.bypass,"mapping"),s.mapping=a,a=s;break;case void 0:break;default:return!1}return c?(a.bypassed=h?d.bypassed:d,o[a.name]=a):h?d.bypassed=a:o[a.name]=a,f(),!0},o.cleanElements=function(e,t){for(var n=this,r=n.properties,i=0;i<e.length;i++){var a=e[i];if(t)for(var o=a._private.style,s=0;s<r.length;s++){var l=r[s],u=o[l.name];u&&(u.bypass?u.bypassed=null:o[l.name]=null)}else a._private.style={}}},o.update=function(){this._private.cy.mutableElements().updateStyle()},o.updateMappers=function(e){for(var t=this,n=this._private.cy,r=n.collection(),i=0;i<e.length;i++){for(var a=e[i],o=a._private.style,s=!1,l=0;l<t.properties.length;l++){var u=t.properties[l],c=o[u.name];if(c&&c.mapping){var d=c.mapping;this.applyParsedProperty(a,d),s=!0}}s&&(this.updateStyleHints(a),r.merge(a))}return r},o.updateTransitions=function(e,t,n){var r=this,o=e._private,s=e.pstyle("transition-property").value,l=e.pstyle("transition-duration").pfValue,u=e.pstyle("transition-delay").pfValue;if(s.length>0&&l>0){for(var c={},d=!1,h=0;h<s.length;h++){var p=s[h],f=e.pstyle(p),v=t[p];if(v){var g=v.prev,y=g,m=null!=v.next?v.next:f,b=!1,x=void 0;y&&(i.number(y.pfValue)&&i.number(m.pfValue)?(b=m.pfValue-y.pfValue,x=y.pfValue+1e-6*b):i.number(y.value)&&i.number(m.value)?(b=m.value-y.value,x=y.value+1e-6*b):i.array(y.value)&&i.array(m.value)&&(b=y.value[0]!==m.value[0]||y.value[1]!==m.value[1]||y.value[2]!==m.value[2],x=y.strValue),b&&(c[p]=m.strValue,this.applyBypass(e,p,x),d=!0))}}if(!d)return;o.transitioning=!0,new a(function(t){u>0?e.delayAnimation(u).play().promise().then(t):t()}).then(function(){return e.animation({style:c,duration:l,easing:e.pstyle("transition-timing-function").value,queue:!1}).play().promise()}).then(function(){r.removeBypasses(e,s),e.emitAndNotify("style"),o.transitioning=!1})}else o.transitioning&&(this.removeBypasses(e,s),e.emitAndNotify("style"),o.transitioning=!1)},o.checkZOrderTrigger=function(e,t,n,r){var i=this.properties[t];null==i.triggersZOrder||null!=n&&!i.triggersZOrder(n,r)||this._private.cy.notify({type:"zorder",eles:e})},e.exports=o},function(e,t,n){"use strict";var r=n(0),i=n(1),a={};a.applyBypass=function(e,t,n,a){var o=this,s=[];if("*"===t||"**"===t){if(void 0!==n)for(var l=0;l<o.properties.length;l++){var u=o.properties[l],c=u.name,d=this.parse(c,n,!0);d&&s.push(d)}}else if(r.string(t)){var h=this.parse(t,n,!0);h&&s.push(h)}else{if(!r.plainObject(t))return!1;var p=t;a=n;for(var f=Object.keys(p),v=0;v<f.length;v++){var g=f[v],y=(o.properties[g],p[g]);if(void 0===y&&(y=p[i.dash2camel(g)]),void 0!==y){var m=this.parse(g,y,!0);m&&s.push(m)}}}if(0===s.length)return!1;for(var b=!1,x=0;x<e.length;x++){for(var w=e[x],E={},P=void 0,C=0;C<s.length;C++){var S=s[C];if(a){var T=w.pstyle(S.name);P=E[S.name]={prev:T}}b=this.applyParsedProperty(w,S)||b,a&&(P.next=w.pstyle(S.name))}b&&this.updateStyleHints(w),a&&this.updateTransitions(w,E,!0)}return b},a.overrideBypass=function(e,t,n){t=i.camel2dash(t);for(var r=0;r<e.length;r++){var a=e[r],o=a._private.style[t],s=this.properties[t].type,l=s.color,u=s.mutiple;if(o&&o.bypass){var c=null!=o.pfValue?o.pfValue:o.value;o.value=n,null!=o.pfValue&&(o.pfValue=n),o.strValue=l?"rgb("+n.join(",")+")":u?n.join(" "):""+n,this.checkZOrderTrigger(a,t,c,n)}else this.applyBypass(a,t,n)}},a.removeAllBypasses=function(e,t){return this.removeBypasses(e,this.propertyNames,t)},a.removeBypasses=function(e,t,n){for(var r=0;r<e.length;r++){for(var i=e[r],a={},o=0;o<t.length;o++){var s=t[o],l=this.properties[s],u=i.pstyle(l.name);if(u&&u.bypass){var c=this.parse(s,"",!0),d=a[l.name]={prev:u};this.applyParsedProperty(i,c),d.next=i.pstyle(l.name)}}this.updateStyleHints(i),n&&this.updateTransitions(i,a,!0)}},e.exports=a},function(e,t,n){"use strict";var r=n(3),i={};i.getEmSizeInPixels=function(){var e=this.containerCss("font-size");return null!=e?parseFloat(e):1},i.containerCss=function(e){var t=this._private.cy,n=t.container();if(r&&n&&r.getComputedStyle)return r.getComputedStyle(n).getPropertyValue(e)},e.exports=i},function(e,t,n){"use strict";var r=n(1),i=n(0),a={};a.getRenderedStyle=function(e,t){return t?this.getStylePropertyValue(e,t,!0):this.getRawStyle(e,!0)},a.getRawStyle=function(e,t){var n=this;if(e=e[0]){for(var i={},a=0;a<n.properties.length;a++){var o=n.properties[a],s=n.getStylePropertyValue(e,o.name,t);null!=s&&(i[o.name]=s,i[r.dash2camel(o.name)]=s)}return i}},a.getIndexedStyle=function(e,t,n,r){var i=e.pstyle(t)[n][r];return null!=i?i:e.cy().style().getDefaultProperty(t)[n][0]},a.getStylePropertyValue=function(e,t,n){var r=this;if(e=e[0]){var i=r.properties[t];i.alias&&(i=i.pointsTo);var a=i.type,o=e.pstyle(i.name),s=e.cy().zoom();if(o){var l=o.units?a.implicitUnits||"px":null;return l?[].concat(o.pfValue).map(function(e){return e*(n?s:1)+l}).join(" "):o.strValue}}},a.getAnimationStartStyle=function(e,t){for(var n={},r=0;r<t.length;r++){var a=t[r],o=a.name,s=e.pstyle(o);void 0!==s&&(s=i.plainObject(s)?this.parse(o,s.strValue):this.parse(o,s)),s&&(n[o]=s)}return n},a.getPropsList=function(e){var t=this,n=[],i=e,a=t.properties;if(i)for(var o=Object.keys(i),s=0;s<o.length;s++){var l=o[s],u=i[l],c=a[l]||a[r.camel2dash(l)],d=this.parse(c.name,u);d&&n.push(d)}return n},e.exports=a},function(e,t,n){"use strict";var r={};r.appendFromJson=function(e){for(var t=this,n=0;n<e.length;n++){var r=e[n],i=r.selector,a=r.style||r.css,o=Object.keys(a);t.selector(i);for(var s=0;s<o.length;s++){var l=o[s],u=a[l];t.css(l,u)}}return t},r.fromJson=function(e){var t=this;return t.resetToDefault(),t.appendFromJson(e),t},r.json=function(){for(var e=[],t=this.defaultLength;t<this.length;t++){for(var n=this[t],r=n.selector,i=n.properties,a={},o=0;o<i.length;o++){var s=i[o];a[s.name]=s.strValue}e.push({selector:r?r.toString():"core",style:a})}return e},e.exports=r},function(e,t,n){"use strict";var r=n(1),i=n(6),a={};a.appendFromString=function(e){function t(){s=s.length>l.length?s.substr(l.length):""}function n(){u=u.length>c.length?u.substr(c.length):""}var a=this,o=this,s=""+e,l=void 0,u=void 0,c=void 0;for(s=s.replace(/[\/][*](\s|.)+?[*][\/]/g,"");;){if(s.match(/^\s*$/))break;var d=s.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);if(!d){r.error("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: "+s);break}l=d[0];var h=d[1];if("core"!==h){if(new i(h)._private.invalid){r.error("Skipping parsing of block: Invalid selector found in string stylesheet: "+h),t();continue}}var p=d[2],f=!1;u=p;for(var v=[];;){if(u.match(/^\s*$/))break;var g=u.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);if(!g){r.error("Skipping parsing of block: Invalid formatting of style property and value definitions found in:"+p),f=!0;break}c=g[0];var y=g[1],m=g[2];if(a.properties[y]){o.parse(y,m)?(v.push({name:y,val:m}),n()):(r.error("Skipping property: Invalid property definition in: "+c),n())}else r.error("Skipping property: Invalid property name in: "+c),n()}if(f){t();break}o.selector(h);for(var b=0;b<v.length;b++){var x=v[b];o.css(x.name,x.val)}t()}return o},a.fromString=function(e){var t=this;return t.resetToDefault(),t.appendFromString(e),t},e.exports=a},function(e,t,n){"use strict";var r=n(1),i=n(0),a={};!function(){var e=r.regex.number,t=r.regex.rgbaNoBackRefs,n=r.regex.hslaNoBackRefs,o=r.regex.hex3,s=r.regex.hex6,l=function(e){return"^"+e+"\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"},u=function(r){var i=e+"|\\w+|"+t+"|"+n+"|"+o+"|"+s;return"^"+r+"\\s*\\(([\\w\\.]+)\\s*\\,\\s*("+e+")\\s*\\,\\s*("+e+")\\s*,\\s*("+i+")\\s*\\,\\s*("+i+")\\)$"},c=["^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$","^(none)$","^(.+)$"];a.types={time:{number:!0,min:0,units:"s|ms",implicitUnits:"ms"},percent:{number:!0,min:0,max:100,units:"%",implicitUnits:"%"},zeroOneNumber:{number:!0,min:0,max:1,unitless:!0},zeroOneNumbers:{number:!0,min:0,max:1,unitless:!0,multiple:!0},nOneOneNumber:{number:!0,min:-1,max:1,unitless:!0},nonNegativeInt:{number:!0,min:0,integer:!0,unitless:!0},position:{enums:["parent","origin"]},nodeSize:{number:!0,min:0,enums:["label"]},number:{number:!0,unitless:!0},numbers:{number:!0,unitless:!0,multiple:!0},positiveNumber:{number:!0,unitless:!0,min:0,strictMin:!0},size:{number:!0,min:0},bidirectionalSize:{number:!0},bidirectionalSizes:{number:!0,multiple:!0},sizeMaybePercent:{number:!0,min:0,allowPercent:!0},paddingRelativeTo:{enums:["width","height","average","min","max"]},bgWH:{number:!0,min:0,allowPercent:!0,enums:["auto"],multiple:!0},bgPos:{number:!0,allowPercent:!0,multiple:!0},bgRelativeTo:{enums:["inner","include-padding"],multiple:!0},bgRepeat:{enums:["repeat","repeat-x","repeat-y","no-repeat"],multiple:!0},bgFit:{enums:["none","contain","cover"],multiple:!0},bgCrossOrigin:{enums:["anonymous","use-credentials"],multiple:!0},bgClip:{enums:["none","node"]},color:{color:!0},bool:{enums:["yes","no"]},lineStyle:{enums:["solid","dotted","dashed"]},borderStyle:{enums:["solid","dotted","dashed","double"]},curveStyle:{enums:["bezier","unbundled-bezier","haystack","segments"]},fontFamily:{regex:'^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'},fontletiant:{enums:["small-caps","normal"]},fontStyle:{enums:["italic","normal","oblique"]},fontWeight:{enums:["normal","bold","bolder","lighter","100","200","300","400","500","600","800","900",100,200,300,400,500,600,700,800,900]},textDecoration:{enums:["none","underline","overline","line-through"]},textTransform:{enums:["none","uppercase","lowercase"]},textWrap:{enums:["none","wrap","ellipsis"]},textBackgroundShape:{enums:["rectangle","roundrectangle"]},nodeShape:{enums:["rectangle","roundrectangle","cutrectangle","bottomroundrectangle","barrel","ellipse","triangle","square","pentagon","hexagon","concavehexagon","heptagon","octagon","tag","star","diamond","vee","rhomboid","polygon"]},compoundIncludeLabels:{enums:["include","exclude"]},arrowShape:{enums:["tee","triangle","triangle-tee","triangle-cross","triangle-backcurve","half-triangle-overshot","vee","square","circle","diamond","none"]},arrowFill:{enums:["filled","hollow"]},display:{enums:["element","none"]},visibility:{enums:["hidden","visible"]},zCompoundDepth:{enums:["bottom","orphan","auto","top"]},zIndexCompare:{enums:["auto","manual"]},valign:{enums:["top","center","bottom"]},halign:{enums:["left","center","right"]},text:{string:!0},data:{mapping:!0,regex:l("data")},layoutData:{mapping:!0,regex:l("layoutData")},scratch:{mapping:!0,regex:l("scratch")},mapData:{mapping:!0,regex:u("mapData")},mapLayoutData:{mapping:!0,regex:u("mapLayoutData")},mapScratch:{mapping:!0,regex:u("mapScratch")},fn:{mapping:!0,fn:!0},url:{regexes:c,singleRegexMatchValue:!0},urls:{regexes:c,singleRegexMatchValue:!0,multiple:!0},propList:{propList:!0},angle:{number:!0,units:"deg|rad",implicitUnits:"rad"},textRotation:{number:!0,units:"deg|rad",implicitUnits:"rad",enums:["none","autorotate"]},polygonPointList:{number:!0,multiple:!0,evenMultiple:!0,min:-1,max:1,unitless:!0},edgeDistances:{enums:["intersection","node-position"]},edgeEndpoint:{number:!0,multiple:!0,units:"%|px|em|deg|rad",implicitUnits:"px",enums:["inside-to-node","outside-to-node","outside-to-line"],singleEnum:!0,validate:function(e,t){switch(e.length){case 2:return"deg"!==t[0]&&"rad"!==t[0]&&"deg"!==t[1]&&"rad"!==t[1];case 1:return i.string(e[0])||"deg"===t[0]||"rad"===t[0];default:return!1}}},easing:{regexes:["^(spring)\\s*\\(\\s*("+e+")\\s*,\\s*("+e+")\\s*\\)$","^(cubic-bezier)\\s*\\(\\s*("+e+")\\s*,\\s*("+e+")\\s*,\\s*("+e+")\\s*,\\s*("+e+")\\s*\\)$"],enums:["linear","ease","ease-in","ease-out","ease-in-out","ease-in-sine","ease-out-sine","ease-in-out-sine","ease-in-quad","ease-out-quad","ease-in-out-quad","ease-in-cubic","ease-out-cubic","ease-in-out-cubic","ease-in-quart","ease-out-quart","ease-in-out-quart","ease-in-quint","ease-out-quint","ease-in-out-quint","ease-in-expo","ease-out-expo","ease-in-out-expo","ease-in-circ","ease-out-circ","ease-in-out-circ"]}};var d={zeroNonZero:function(e,t){return 0===e&&0!==t||0!==e&&0===t},anyDiff:function(e,t){return e!==t}},h=d,p=a.types,f=a.properties=[{name:"label",type:p.text},{name:"text-rotation",type:p.textRotation},{name:"text-margin-x",type:p.bidirectionalSize},{name:"text-margin-y",type:p.bidirectionalSize},{name:"source-label",type:p.text},{name:"source-text-rotation",type:p.textRotation},{name:"source-text-margin-x",type:p.bidirectionalSize},{name:"source-text-margin-y",type:p.bidirectionalSize},{name:"source-text-offset",type:p.size},{name:"target-label",type:p.text},{name:"target-text-rotation",type:p.textRotation},{name:"target-text-margin-x",type:p.bidirectionalSize},{name:"target-text-margin-y",type:p.bidirectionalSize},{name:"target-text-offset",type:p.size},{name:"text-valign",type:p.valign},{name:"text-halign",type:p.halign},{name:"color",type:p.color},{name:"text-outline-color",type:p.color},{name:"text-outline-width",type:p.size},{name:"text-outline-opacity",type:p.zeroOneNumber},{name:"text-opacity",type:p.zeroOneNumber},{name:"text-background-color",type:p.color},{name:"text-background-opacity",type:p.zeroOneNumber},{name:"text-background-padding",type:p.size},{name:"text-border-opacity",type:p.zeroOneNumber},{name:"text-border-color",type:p.color},{name:"text-border-width",type:p.size},{name:"text-border-style",type:p.borderStyle},{name:"text-background-shape",type:p.textBackgroundShape},{name:"text-transform",type:p.textTransform},{name:"text-wrap",type:p.textWrap},{name:"text-max-width",type:p.size},{name:"text-events",type:p.bool},{name:"font-family",type:p.fontFamily},{name:"font-style",type:p.fontStyle},{name:"font-weight",type:p.fontWeight},{name:"font-size",type:p.size},{name:"min-zoomed-font-size",type:p.size},{name:"events",type:p.bool},{name:"display",type:p.display,triggersZOrder:h.anyDiff},{name:"visibility",type:p.visibility,triggersZOrder:h.anyDiff},{name:"opacity",type:p.zeroOneNumber,triggersZOrder:h.zeroNonZero},{name:"z-compound-depth",type:p.zCompoundDepth,triggersZOrder:h.anyDiff},{name:"z-index-compare",type:p.zIndexCompare,triggersZOrder:h.anyDiff},{name:"z-index",type:p.nonNegativeInt,triggersZOrder:h.anyDiff},{name:"overlay-padding",type:p.size},{name:"overlay-color",type:p.color},{name:"overlay-opacity",type:p.zeroOneNumber},{name:"transition-property",type:p.propList},{name:"transition-duration",type:p.time},{name:"transition-delay",type:p.time},{name:"transition-timing-function",type:p.easing},{name:"height",type:p.nodeSize},{name:"width",type:p.nodeSize},{name:"shape",type:p.nodeShape},{name:"shape-polygon-points",type:p.polygonPointList},{name:"background-color",type:p.color},{name:"background-opacity",type:p.zeroOneNumber},{name:"background-blacken",type:p.nOneOneNumber},{name:"padding",type:p.sizeMaybePercent},{name:"padding-relative-to",type:p.paddingRelativeTo},{name:"border-color",type:p.color},{name:"border-opacity",type:p.zeroOneNumber},{name:"border-width",type:p.size},{name:"border-style",type:p.borderStyle},{name:"background-image",type:p.urls},{name:"background-image-crossorigin",type:p.bgCrossOrigin},{name:"background-image-opacity",type:p.zeroOneNumbers},{name:"background-position-x",type:p.bgPos},{name:"background-position-y",type:p.bgPos},{name:"background-width-relative-to",type:p.bgRelativeTo},{name:"background-height-relative-to",type:p.bgRelativeTo},{name:"background-repeat",type:p.bgRepeat},{name:"background-fit",type:p.bgFit},{name:"background-clip",type:p.bgClip},{name:"background-width",type:p.bgWH},{name:"background-height",type:p.bgWH},{name:"position",type:p.position},{name:"compound-sizing-wrt-labels",type:p.compoundIncludeLabels},{name:"min-width",type:p.size},{name:"min-width-bias-left",type:p.sizeMaybePercent},{name:"min-width-bias-right",type:p.sizeMaybePercent},{name:"min-height",type:p.size},{name:"min-height-bias-top",type:p.sizeMaybePercent},{name:"min-height-bias-bottom",type:p.sizeMaybePercent},{name:"line-style",type:p.lineStyle},{name:"line-color",type:p.color},{name:"curve-style",type:p.curveStyle},{name:"haystack-radius",type:p.zeroOneNumber},{name:"source-endpoint",type:p.edgeEndpoint},{name:"target-endpoint",type:p.edgeEndpoint},{name:"control-point-step-size",type:p.size},{name:"control-point-distances",type:p.bidirectionalSizes},{name:"control-point-weights",type:p.numbers},{name:"segment-distances",type:p.bidirectionalSizes},{name:"segment-weights",type:p.numbers},{name:"edge-distances",type:p.edgeDistances},{name:"arrow-scale",type:p.positiveNumber},{name:"loop-direction",type:p.angle},{name:"loop-sweep",type:p.angle},{name:"source-distance-from-node",type:p.size},{name:"target-distance-from-node",type:p.size},{name:"ghost",type:p.bool},{name:"ghost-offset-x",type:p.bidirectionalSize},{name:"ghost-offset-y",type:p.bidirectionalSize},{name:"ghost-opacity",type:p.zeroOneNumber},{name:"selection-box-color",type:p.color},{name:"selection-box-opacity",type:p.zeroOneNumber},{name:"selection-box-border-color",type:p.color},{name:"selection-box-border-width",type:p.size},{name:"active-bg-color",type:p.color},{name:"active-bg-opacity",type:p.zeroOneNumber},{name:"active-bg-size",type:p.size},{name:"outside-texture-bg-color",type:p.color},{name:"outside-texture-bg-opacity",type:p.zeroOneNumber}],v=a.aliases=[{name:"content",pointsTo:"label"},{name:"control-point-distance",pointsTo:"control-point-distances"},{name:"control-point-weight",pointsTo:"control-point-weights"},{name:"edge-text-rotation",pointsTo:"text-rotation"},{name:"padding-left",pointsTo:"padding"},{name:"padding-right",pointsTo:"padding"},{name:"padding-top",pointsTo:"padding"},{name:"padding-bottom",pointsTo:"padding"}];a.pieBackgroundN=16,f.push({name:"pie-size",type:p.sizeMaybePercent});for(var g=1;g<=a.pieBackgroundN;g++)f.push({name:"pie-"+g+"-background-color",type:p.color}),f.push({name:"pie-"+g+"-background-size",type:p.percent}),f.push({name:"pie-"+g+"-background-opacity",type:p.zeroOneNumber});var y=a.arrowPrefixes=["source","mid-source","target","mid-target"];[{name:"arrow-shape",type:p.arrowShape},{name:"arrow-color",type:p.color},{name:"arrow-fill",type:p.arrowFill}].forEach(function(e){y.forEach(function(t){var n=t+"-"+e.name,r=e.type;f.push({name:n,type:r})})},{}),a.propertyNames=f.map(function(e){return e.name});for(var m=0;m<f.length;m++){var b=f[m];f[b.name]=b}for(var x=0;x<v.length;x++){var w=v[x],E=f[w.pointsTo],P={name:w.name,alias:!0,pointsTo:E};f.push(P),f[w.name]=P}}(),a.getDefaultProperty=function(e){return this.getDefaultProperties()[e]},a.getDefaultProperties=r.memoize(function(){for(var e=r.extend({events:"yes","text-events":"no","text-valign":"top","text-halign":"center",color:"#000","text-outline-color":"#000","text-outline-width":0,"text-outline-opacity":1,"text-opacity":1,"text-decoration":"none","text-transform":"none","text-wrap":"none","text-max-width":9999,"text-background-color":"#000","text-background-opacity":0,"text-background-shape":"rectangle","text-background-padding":0,"text-border-opacity":0,"text-border-width":0,"text-border-style":"solid","text-border-color":"#000","font-family":"Helvetica Neue, Helvetica, sans-serif","font-style":"normal","font-weight":"normal","font-size":16,"min-zoomed-font-size":0,"text-rotation":"none","source-text-rotation":"none","target-text-rotation":"none",visibility:"visible",display:"element",opacity:1,"z-compound-depth":"auto","z-index-compare":"auto","z-index":0,label:"","text-margin-x":0,"text-margin-y":0,"source-label":"","source-text-offset":0,"source-text-margin-x":0,"source-text-margin-y":0,"target-label":"","target-text-offset":0,"target-text-margin-x":0,"target-text-margin-y":0,"overlay-opacity":0,"overlay-color":"#000","overlay-padding":10,"transition-property":"none","transition-duration":0,"transition-delay":0,"transition-timing-function":"linear","background-blacken":0,"background-color":"#999","background-opacity":1,"background-image":"none","background-image-crossorigin":"anonymous","background-image-opacity":1,"background-position-x":"50%","background-position-y":"50%","background-width-relative-to":"include-padding","background-height-relative-to":"include-padding","background-repeat":"no-repeat","background-fit":"none","background-clip":"node","background-width":"auto","background-height":"auto","border-color":"#000","border-opacity":1,"border-width":0,"border-style":"solid",height:30,width:30,shape:"ellipse","shape-polygon-points":"-1, -1,   1, -1,   1, 1,   -1, 1",ghost:"no","ghost-offset-y":0,"ghost-offset-x":0,"ghost-opacity":0,padding:0,"padding-relative-to":"width",position:"origin","compound-sizing-wrt-labels":"include","min-width":0,"min-width-bias-left":0,"min-width-bias-right":0,"min-height":0,"min-height-bias-top":0,"min-height-bias-bottom":0},{"pie-size":"100%"},[{name:"pie-{{i}}-background-color",value:"black"},{name:"pie-{{i}}-background-size",value:"0%"},{name:"pie-{{i}}-background-opacity",value:1}].reduce(function(e,t){for(var n=1;n<=a.pieBackgroundN;n++){var r=t.name.replace("{{i}}",n),i=t.value;e[r]=i}return e},{}),{"line-style":"solid","line-color":"#999","control-point-step-size":40,"control-point-weights":.5,"segment-weights":.5,"segment-distances":20,"edge-distances":"intersection","curve-style":"bezier","haystack-radius":0,"arrow-scale":1,"loop-direction":"-45deg","loop-sweep":"-90deg","source-distance-from-node":0,"target-distance-from-node":0,"source-endpoint":"outside-to-node","target-endpoint":"outside-to-node"},[{name:"arrow-shape",value:"none"},{name:"arrow-color",value:"#999"},{name:"arrow-fill",value:"filled"}].reduce(function(e,t){return a.arrowPrefixes.forEach(function(n){var r=n+"-"+t.name,i=t.value;e[r]=i}),e},{})),t={},n=0;n<this.properties.length;n++){var i=this.properties[n];if(!i.pointsTo){var o=i.name,s=e[o],l=this.parse(o,s);t[o]=l}}return t}),a.addDefaultStylesheet=function(){this.selector("$node > node").css({shape:"rectangle",padding:10,"background-color":"#eee","border-color":"#ccc","border-width":1}).selector("edge").css({width:3,"curve-style":"haystack"}).selector(":parent <-> node").css({"curve-style":"bezier","source-endpoint":"outside-to-line","target-endpoint":"outside-to-line"}).selector(":selected").css({"background-color":"#0169D9","line-color":"#0169D9","source-arrow-color":"#0169D9","target-arrow-color":"#0169D9","mid-source-arrow-color":"#0169D9","mid-target-arrow-color":"#0169D9"}).selector("node:parent:selected").css({"background-color":"#CCE1F9","border-color":"#aec8e5"}).selector(":active").css({"overlay-color":"black","overlay-padding":10,"overlay-opacity":.25}).selector("core").css({"selection-box-color":"#ddd","selection-box-opacity":.65,"selection-box-border-color":"#aaa","selection-box-border-width":1,"active-bg-color":"black","active-bg-opacity":.15,"active-bg-size":30,"outside-texture-bg-color":"#000","outside-texture-bg-opacity":.125}),this.defaultLength=this.length},e.exports=a},function(e,t,n){"use strict";var r=n(1),i=n(0),a=n(2),o={};o.parse=function(e,t,n,a){var o=this;if(i.fn(t))return o.parseImplWarn(e,t,n,a);var s="mapping"===a||!0===a||!1===a||null==a?"dontcare":a,l=[e,t,n,s].join("$"),u=o.propCache=o.propCache||{},c=void 0;return(c=u[l])||(c=u[l]=o.parseImplWarn(e,t,n,a)),(n||"mapping"===a)&&(c=r.copy(c))&&(c.value=r.copy(c.value)),c},o.parseImplWarn=function(e,t,n,i){var a=this.parseImpl(e,t,n,i);return a||null==t||r.error("The style property `%s: %s` is invalid",e,t),a},o.parseImpl=function(e,t,n,o){var s=this;e=r.camel2dash(e);var l=s.properties[e],u=t,c=s.types;if(!l)return null;if(void 0===t)return null;l.alias&&(l=l.pointsTo,e=l.name);var d=i.string(t);d&&(t=t.trim());var h=l.type;if(!h)return null;if(n&&(""===t||null===t))return{name:e,value:t,bypass:!0,deleteBypass:!0};if(i.fn(t))return{name:e,value:t,strValue:"fn",mapped:c.fn,bypass:n};var p=void 0,f=void 0;if(!d||o);else{if(p=new RegExp(c.data.regex).exec(t)){if(n)return!1;var v=c.data;return{name:e,value:p,strValue:""+t,mapped:v,field:p[1],bypass:n}}if(f=new RegExp(c.mapData.regex).exec(t)){if(n)return!1;if(h.multiple)return!1;var g=c.mapData;if(!h.color&&!h.number)return!1;var y=this.parse(e,f[4]);if(!y||y.mapped)return!1;var m=this.parse(e,f[5]);if(!m||m.mapped)return!1;if(y.value===m.value)return!1;if(h.color){var b=y.value,x=m.value;if(!(b[0]!==x[0]||b[1]!==x[1]||b[2]!==x[2]||b[3]!==x[3]&&(null!=b[3]&&1!==b[3]||null!=x[3]&&1!==x[3])))return!1}return{name:e,value:f,strValue:""+t,mapped:g,field:f[1],fieldMin:parseFloat(f[2]),fieldMax:parseFloat(f[3]),valueMin:y.value,valueMax:m.value,bypass:n}}}if(h.multiple&&"multiple"!==o){var w=void 0;if(w=d?t.split(/\s+/):i.array(t)?t:[t],h.evenMultiple&&w.length%2!=0)return null;for(var E=[],P=[],C=[],S=!1,T=0;T<w.length;T++){var D=s.parse(e,w[T],n,"multiple");S=S||i.string(D.value),E.push(D.value),C.push(null!=D.pfValue?D.pfValue:D.value),P.push(D.units)}return h.validate&&!h.validate(E,P)?null:h.singleEnum&&S?1===E.length&&i.string(E[0])?{name:e,value:E[0],strValue:E[0],bypass:n}:null:{name:e,value:E,pfValue:C,strValue:E.map(function(e,t){return e+(P[t]||"")}).join(" "),bypass:n,units:P}}var k=function(){for(var r=0;r<h.enums.length;r++){if(h.enums[r]===t)return{name:e,value:t,strValue:""+t,bypass:n}}return null};if(h.number){var _=void 0,M="px";if(h.units&&(_=h.units),h.implicitUnits&&(M=h.implicitUnits),!h.unitless)if(d){var I="px|em"+(h.allowPercent?"|\\%":"");_&&(I=_);var N=t.match("^("+r.regex.number+")("+I+")?$");N&&(t=N[1],_=N[2]||M)}else _&&!h.implicitUnits||(_=M);if(t=parseFloat(t),isNaN(t)&&void 0===h.enums)return null;if(isNaN(t)&&void 0!==h.enums)return t=u,k();if(h.integer&&!i.integer(t))return null;if(void 0!==h.min&&(t<h.min||h.strictMin&&t===h.min)||void 0!==h.max&&(t>h.max||h.strictMax&&t===h.max))return null;var B={name:e,value:t,strValue:""+t+(_||""),units:_,bypass:n};return h.unitless||"px"!==_&&"em"!==_?B.pfValue=t:B.pfValue="px"!==_&&_?this.getEmSizeInPixels()*t:t,"ms"!==_&&"s"!==_||(B.pfValue="ms"===_?t:1e3*t),"deg"!==_&&"rad"!==_||(B.pfValue="rad"===_?t:a.deg2rad(t)),"%"===_&&(B.pfValue=t/100),B}if(h.propList){var z=[],L=""+t;if("none"===L);else{for(var A=L.split(","),O=0;O<A.length;O++){var R=A[O].trim();s.properties[R]&&z.push(R)}if(0===z.length)return null}return{name:e,value:z,strValue:0===z.length?"none":z.join(", "),bypass:n}}if(h.color){var V=r.color2tuple(t);return V?{name:e,value:V,pfValue:V,strValue:""+t,bypass:n}:null}if(h.regex||h.regexes){if(h.enums){var q=k();if(q)return q}for(var F=h.regexes?h.regexes:[h.regex],j=0;j<F.length;j++){var X=new RegExp(F[j]),Y=X.exec(t);if(Y)return{name:e,value:h.singleRegexMatchValue?Y[1]:Y,strValue:""+t,bypass:n}}return null}return h.string?{name:e,value:""+t,strValue:""+t,bypass:n}:h.enums?k():null},e.exports=o},function(e,t,n){"use strict";var r=n(0),i=n(3),a=n(2),o={autolock:function(e){return void 0===e?this._private.autolock:(this._private.autolock=!!e,this)},autoungrabify:function(e){return void 0===e?this._private.autoungrabify:(this._private.autoungrabify=!!e,this)},autounselectify:function(e){return void 0===e?this._private.autounselectify:(this._private.autounselectify=!!e,this)},panningEnabled:function(e){return void 0===e?this._private.panningEnabled:(this._private.panningEnabled=!!e,this)},userPanningEnabled:function(e){return void 0===e?this._private.userPanningEnabled:(this._private.userPanningEnabled=!!e,this)},zoomingEnabled:function(e){return void 0===e?this._private.zoomingEnabled:(this._private.zoomingEnabled=!!e,this)},userZoomingEnabled:function(e){return void 0===e?this._private.userZoomingEnabled:(this._private.userZoomingEnabled=!!e,this)},boxSelectionEnabled:function(e){return void 0===e?this._private.boxSelectionEnabled:(this._private.boxSelectionEnabled=!!e,this)},pan:function(){var e=arguments,t=this._private.pan,n=void 0,i=void 0,a=void 0,o=void 0,s=void 0;switch(e.length){case 0:return t;case 1:if(r.string(e[0]))return n=e[0],t[n];if(r.plainObject(e[0])){if(!this._private.panningEnabled)return this;a=e[0],o=a.x,s=a.y,r.number(o)&&(t.x=o),r.number(s)&&(t.y=s),this.emit("pan viewport")}break;case 2:if(!this._private.panningEnabled)return this;n=e[0],i=e[1],"x"!==n&&"y"!==n||!r.number(i)||(t[n]=i),this.emit("pan viewport")}return this.notify({type:"viewport"}),this},panBy:function(e,t){var n=arguments,i=this._private.pan,a=void 0,o=void 0,s=void 0,l=void 0,u=void 0;if(!this._private.panningEnabled)return this;switch(n.length){case 1:r.plainObject(e)&&(s=n[0],l=s.x,u=s.y,r.number(l)&&(i.x+=l),r.number(u)&&(i.y+=u),this.emit("pan viewport"));break;case 2:a=e,o=t,"x"!==a&&"y"!==a||!r.number(o)||(i[a]+=o),this.emit("pan viewport")}return this.notify({type:"viewport"}),this},fit:function(e,t){var n=this.getFitViewport(e,t);if(n){var r=this._private;r.zoom=n.zoom,r.pan=n.pan,this.emit("pan zoom viewport"),this.notify({type:"viewport"})}return this},getFitViewport:function(e,t){if(r.number(e)&&void 0===t&&(t=e,e=void 0),this._private.panningEnabled&&this._private.zoomingEnabled){var n=void 0;if(r.string(e)){var i=e;e=this.$(i)}else if(r.boundingBox(e)){var a=e;n={x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},n.w=n.x2-n.x1,n.h=n.y2-n.y1}else r.elementOrCollection(e)||(e=this.mutableElements());if(!r.elementOrCollection(e)||!e.empty()){n=n||e.boundingBox();var o=this.width(),s=this.height(),l=void 0;if(t=r.number(t)?t:0,!isNaN(o)&&!isNaN(s)&&o>0&&s>0&&!isNaN(n.w)&&!isNaN(n.h)&&n.w>0&&n.h>0){l=Math.min((o-2*t)/n.w,(s-2*t)/n.h),l=l>this._private.maxZoom?this._private.maxZoom:l,l=l<this._private.minZoom?this._private.minZoom:l;return{zoom:l,pan:{x:(o-l*(n.x1+n.x2))/2,y:(s-l*(n.y1+n.y2))/2}}}}}},minZoom:function(e){return void 0===e?this._private.minZoom:(r.number(e)&&(this._private.minZoom=e),this)},maxZoom:function(e){return void 0===e?this._private.maxZoom:(r.number(e)&&(this._private.maxZoom=e),this)},getZoomedViewport:function(e){var t=this._private,n=t.pan,i=t.zoom,o=void 0,s=void 0,l=!1;if(t.zoomingEnabled||(l=!0),r.number(e)?s=e:r.plainObject(e)&&(s=e.level,null!=e.position?o=a.modelToRenderedPosition(e.position,i,n):null!=e.renderedPosition&&(o=e.renderedPosition),null==o||t.panningEnabled||(l=!0)),s=s>t.maxZoom?t.maxZoom:s,s=s<t.minZoom?t.minZoom:s,l||!r.number(s)||s===i||null!=o&&(!r.number(o.x)||!r.number(o.y)))return null;if(null!=o){var u=n,c=i,d=s;return{zoomed:!0,panned:!0,zoom:d,pan:{x:-d/c*(o.x-u.x)+o.x,y:-d/c*(o.y-u.y)+o.y}}}return{zoomed:!0,panned:!1,zoom:s,pan:n}},zoom:function(e){if(void 0===e)return this._private.zoom;var t=this.getZoomedViewport(e),n=this._private;return null!=t&&t.zoomed?(n.zoom=t.zoom,t.panned&&(n.pan.x=t.pan.x,n.pan.y=t.pan.y),this.emit("zoom"+(t.panned?" pan":"")+" viewport"),this.notify({type:"viewport"}),this):this},viewport:function(e){var t=this._private,n=!0,i=!0,a=[],o=!1,s=!1;if(!e)return this;if(r.number(e.zoom)||(n=!1),r.plainObject(e.pan)||(i=!1),!n&&!i)return this;if(n){var l=e.zoom;l<t.minZoom||l>t.maxZoom||!t.zoomingEnabled?o=!0:(t.zoom=l,a.push("zoom"))}if(i&&(!o||!e.cancelOnFailedZoom)&&t.panningEnabled){var u=e.pan;r.number(u.x)&&(t.pan.x=u.x,s=!1),r.number(u.y)&&(t.pan.y=u.y,s=!1),s||a.push("pan")}return a.length>0&&(a.push("viewport"),this.emit(a.join(" ")),this.notify({type:"viewport"})),this},center:function(e){var t=this.getCenterPan(e);return t&&(this._private.pan=t,this.emit("pan viewport"),this.notify({type:"viewport"})),this},getCenterPan:function(e,t){if(this._private.panningEnabled){if(r.string(e)){var n=e;e=this.mutableElements().filter(n)}else r.elementOrCollection(e)||(e=this.mutableElements());if(0!==e.length){var i=e.boundingBox(),a=this.width(),o=this.height();t=void 0===t?this._private.zoom:t;return{x:(a-t*(i.x1+i.x2))/2,y:(o-t*(i.y1+i.y2))/2}}}},reset:function(){return this._private.panningEnabled&&this._private.zoomingEnabled?(this.viewport({pan:{x:0,y:0},zoom:1}),this):this},invalidateSize:function(){this._private.sizeCache=null},size:function(){var e=this._private,t=e.container;return e.sizeCache=e.sizeCache||(t?function(){var e=i.getComputedStyle(t),n=function(t){return parseFloat(e.getPropertyValue(t))};return{width:t.clientWidth-n("padding-left")-n("padding-right"),height:t.clientHeight-n("padding-top")-n("padding-bottom")}}():{width:1,height:1})},width:function(){return this.size().width},height:function(){return this.size().height},extent:function(){var e=this._private.pan,t=this._private.zoom,n=this.renderedExtent(),r={x1:(n.x1-e.x)/t,x2:(n.x2-e.x)/t,y1:(n.y1-e.y)/t,y2:(n.y2-e.y)/t};return r.w=r.x2-r.x1,r.h=r.y2-r.y1,r},renderedExtent:function(){var e=this.width(),t=this.height();return{x1:0,y1:0,x2:e,y2:t,w:e,h:t}}};o.centre=o.center,o.autolockNodes=o.autolock,o.autoungrabifyNodes=o.autoungrabify,e.exports=o},function(e,t,n){"use strict";function r(e,t,n){var r=n,a=function(n){s.error("Can not register `"+t+"` for `"+e+"` since `"+n+"` already exists in the prototype and can not be overridden")};if("core"===e){if(c.prototype[t])return a(t);c.prototype[t]=n}else if("collection"===e){if(u.prototype[t])return a(t);u.prototype[t]=n}else if("layout"===e){for(var o=function(e){this.options=e,n.call(this,e),h.plainObject(this._private)||(this._private={}),this._private.cy=e.cy,this._private.listeners=[],this.createEmitter()},d=o.prototype=Object.create(n.prototype),v=[],g=0;g<v.length;g++){var y=v[g];d[y]=d[y]||function(){return this}}d.start&&!d.run?d.run=function(){return this.start(),this}:!d.start&&d.run&&(d.start=function(){return this.run(),this});var m=n.prototype.stop;d.stop=function(){var e=this.options;if(e&&e.animate){var t=this.animations;if(t)for(var n=0;n<t.length;n++)t[n].stop()}return m?m.call(this):this.emit("layoutstop"),this},d.destroy||(d.destroy=function(){return this}),d.cy=function(){return this._private.cy};var b=function(e){return e._private.cy};s.assign(d,{createEmitter:function(){return this._private.emitter=new p({eventFields:function(e){return{layout:e,cy:b(e),target:e}},bubble:function(){return!0},parent:function(e){return b(e)},context:this}),this},emitter:function(){return this._private.emitter},on:function(e,t){return this.emitter().on(e,t),this},one:function(e,t){return this.emitter().one(e,t),this},once:function(e,t){return this.emitter().one(e,t),this},removeListener:function(e,t){return this.emitter().removeListener(e,t),this},emit:function(e,t){return this.emitter().emit(e,t),this}}),l.eventAliasesOn(d),r=o}else if("renderer"===e&&"null"!==t&&"base"!==t){var x=i("renderer","base"),w=x.prototype,E=n,P=n.prototype,C=function(){x.apply(this,arguments),E.apply(this,arguments)},S=C.prototype;for(var T in w){var D=w[T],k=null!=P[T];if(k)return a(T);S[T]=D}for(var _ in P)S[_]=P[_];w.clientFunctions.forEach(function(e){S[e]=S[e]||function(){s.error("Renderer does not implement `renderer."+e+"()` on its prototype")}}),r=C}return s.setMap({map:f,keys:[e,t],value:r})}function i(e,t){return s.getMap({map:f,keys:[e,t]})}function a(e,t,n,r,i){return s.setMap({map:v,keys:[e,t,n,r],value:i})}function o(e,t,n,r){return s.getMap({map:v,keys:[e,t,n,r]})}var s=n(1),l=n(4),u=n(7),c=n(12),d=n(96),h=n(0),p=n(11),f={},v={},g=function(){return 2===arguments.length?i.apply(null,arguments):3===arguments.length?r.apply(null,arguments):4===arguments.length?o.apply(null,arguments):5===arguments.length?a.apply(null,arguments):void s.error("Invalid extension access syntax")};c.prototype.extension=g,d.forEach(function(e){e.extensions.forEach(function(t){r(e.type,t.name,t.impl)})}),e.exports=g},function(e,t,n){"use strict";e.exports=[{type:"layout",extensions:n(97)},{type:"renderer",extensions:n(106)}]},function(e,t,n){"use strict";e.exports=[{name:"breadthfirst",impl:n(98)},{name:"circle",impl:n(99)},{name:"concentric",impl:n(100)},{name:"cose",impl:n(101)},{name:"grid",impl:n(102)},{name:"null",impl:n(103)},{name:"preset",impl:n(104)},{name:"random",impl:n(105)}]},function(e,t,n){"use strict";function r(e){this.options=i.extend({},s,e)}var i=n(1),a=n(2),o=n(0),s={fit:!0,directed:!1,padding:30,circle:!1,spacingFactor:1.75,boundingBox:void 0,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1,roots:void 0,maximalAdjustments:0,animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){var e=this.options,t=e,n=e.cy,r=t.eles,i=r.nodes().not(":parent"),s=r,l=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()}),u=void 0;if(o.elementOrCollection(t.roots))u=t.roots;else if(o.array(t.roots)){for(var c=[],d=0;d<t.roots.length;d++){var h=t.roots[d],p=n.getElementById(h);c.push(p)}u=n.collection(c)}else if(o.string(t.roots))u=n.$(t.roots);else if(t.directed)u=i.roots();else{for(var f=[],v=i;v.length>0;)!function(){var e=n.collection();r.bfs({roots:v[0],visit:function(t,n,r,i,a){e=e.add(t)},directed:!1}),v=v.not(e),f.push(e)}();u=n.collection();for(var g=0;g<f.length;g++)!function(e){var t=f[e],n=t.maxDegree(!1),r=t.filter(function(e){return e.degree(!1)===n});u=u.add(r)}(g)}var y=[],m={},b={},x={},w={},E={};s.bfs({roots:u,directed:t.directed,visit:function(e,t,n,r,i){var a=e[0],o=a.id();if(y[i]||(y[i]=[]),y[i].push(a),m[o]=!0,b[o]=i,x[o]=n,w[o]=t,n){var s=n.id();(E[s]=E[s]||[]).push(e)}}});for(var P=[],C=0;C<i.length;C++){var S=i[C];m[S.id()]||P.push(S)}for(var T=3*P.length,D=0;0!==P.length&&D<T;){for(var k=P.shift(),_=k.neighborhood().nodes(),M=!1,I=0;I<_.length;I++){var N=b[_[I].id()];if(void 0!==N){y[N].push(k),M=!0;break}}M||P.push(k),D++}for(;0!==P.length;){var B=P.shift();0===y.length&&y.push([]),y[0].push(B)}var z=function(){for(var e=0;e<y.length;e++)for(var t=y[e],n=0;n<t.length;n++){var r=t[n];null!=r?r._private.scratch.breadthfirst={depth:e,index:n}:(t.splice(n,1),n--)}};z();for(var L=0;L<t.maximalAdjustments;L++){for(var A=y.length,O=[],R=0;R<A;R++)for(var V=y[R],q=V.length,F=0;F<q;F++){var j=V[F],X=j._private.scratch.breadthfirst,Y=function(e){for(var t=e.connectedEdges(function(t){return t.data("target")===e.id()}),n=e._private.scratch.breadthfirst,r=0,i=void 0,a=0;a<t.length;a++){var o=t[a],s=o.source()[0],l=s._private.scratch.breadthfirst;n.depth<=l.depth&&r<l.depth&&(r=l.depth,i=s)}return i}(j);Y&&(X.intEle=Y,O.push(j))}for(var W=0;W<O.length;W++){var H=O[W],Z=H._private.scratch.breadthfirst,$=Z.intEle,U=$._private.scratch.breadthfirst;y[Z.depth][Z.index]=null;for(var G=U.depth+1;G>y.length-1;)y.push([]);y[G].push(H),Z.depth=G,Z.index=y[G].length-1}z()}var Q=0;if(t.avoidOverlap)for(var K=0;K<i.length;K++){var J=i[K],ee=J.layoutDimensions(t),te=ee.w,ne=ee.h;Q=Math.max(Q,te,ne)}for(var re={},ie=function(e){if(re[e.id()])return re[e.id()];for(var t=e._private.scratch.breadthfirst.depth,n=e.neighborhood().nodes().not(":parent").intersection(i),r=0,a=0,o=0;o<n.length;o++){var s=n[o],l=s._private.scratch.breadthfirst,u=l.index,c=l.depth,d=y[c].length;(t>c||0===t)&&(r+=u/d,a++)}return a=Math.max(1,a),r/=a,0===a&&(r=void 0),re[e.id()]=r,r},ae=function(e,t){return ie(e)-ie(t)},oe=0;oe<3;oe++){for(var se=0;se<y.length;se++)y[se]=y[se].sort(ae);z()}for(var le=0,ue=0;ue<y.length;ue++)le=Math.max(y[ue].length,le);for(var ce={x:l.x1+l.w/2,y:l.x1+l.h/2},de={},he=y.length-1;he>=0;he--)for(var pe=y[he],fe=0;fe<pe.length;fe++){var ve=pe[fe];de[ve.id()]=function(e,n){var r=e._private.scratch.breadthfirst,i=r.depth,a=r.index,o=y[i].length,s=Math.max(l.w/(o+1),Q),u=Math.max(l.h/(y.length+1),Q),c=Math.min(l.w/2/y.length,l.h/2/y.length);if(c=Math.max(c,Q),t.circle){if(t.circle){var d=c*i+c-(y.length>0&&y[0].length<=3?c/2:0),h=2*Math.PI/y[i].length*a;return 0===i&&1===y[0].length&&(d=1),{x:ce.x+d*Math.cos(h),y:ce.y+d*Math.sin(h)}}return{x:ce.x+(a+1-(o+1)/2)*s,y:(i+1)*u}}var p={x:ce.x+(a+1-(o+1)/2)*s,y:(i+1)*u};return p}(ve,y.length)}return i.layoutPositions(this,t,function(e){return de[e.id()]}),this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},s,e)}var i=n(1),a=n(2),o=n(0),s={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1,spacingFactor:void 0,radius:void 0,startAngle:1.5*Math.PI,sweep:void 0,clockwise:!0,sort:void 0,animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){var e=this.options,t=e,n=e.cy,r=t.eles,i=void 0!==t.counterclockwise?!t.counterclockwise:t.clockwise,s=r.nodes().not(":parent");t.sort&&(s=s.sort(t.sort));for(var l=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()}),u={x:l.x1+l.w/2,y:l.y1+l.h/2},c=void 0===t.sweep?2*Math.PI-2*Math.PI/s.length:t.sweep,d=c/Math.max(1,s.length-1),h=void 0,p=0,f=0;f<s.length;f++){var v=s[f],g=v.layoutDimensions(t),y=g.w,m=g.h;p=Math.max(p,y,m)}if(h=o.number(t.radius)?t.radius:s.length<=1?0:Math.min(l.h,l.w)/2-p,s.length>1&&t.avoidOverlap){p*=1.75;var b=Math.cos(d)-Math.cos(0),x=Math.sin(d)-Math.sin(0),w=Math.sqrt(p*p/(b*b+x*x));h=Math.max(w,h)}var E=function(e,n){var r=t.startAngle+n*d*(i?1:-1),a=h*Math.cos(r),o=h*Math.sin(r);return{x:u.x+a,y:u.y+o}};return s.layoutPositions(this,t,E),this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},o,e)}var i=n(1),a=n(2),o={fit:!0,padding:30,startAngle:1.5*Math.PI,sweep:void 0,clockwise:!0,equidistant:!1,minNodeSpacing:10,boundingBox:void 0,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1,height:void 0,width:void 0,spacingFactor:void 0,concentric:function(e){return e.degree()},levelWidth:function(e){return e.maxDegree()/4},animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){for(var e=this.options,t=e,n=void 0!==t.counterclockwise?!t.counterclockwise:t.clockwise,r=e.cy,i=t.eles,o=i.nodes().not(":parent"),s=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:r.width(),h:r.height()}),l={x:s.x1+s.w/2,y:s.y1+s.h/2},u=[],c=(t.startAngle,0),d=0;d<o.length;d++){var h=o[d],p=void 0;p=t.concentric(h),u.push({value:p,node:h}),h._private.scratch.concentric=p}o.updateStyle();for(var f=0;f<o.length;f++){var v=o[f],g=v.layoutDimensions(t);c=Math.max(c,g.w,g.h)}u.sort(function(e,t){return t.value-e.value});for(var y=t.levelWidth(o),m=[[]],b=m[0],x=0;x<u.length;x++){var w=u[x];if(b.length>0){Math.abs(b[0].value-w.value)>=y&&(b=[],m.push(b))}b.push(w)}var E=c+t.minNodeSpacing;if(!t.avoidOverlap){var P=m.length>0&&m[0].length>1,C=Math.min(s.w,s.h)/2-E,S=C/(m.length+P?1:0);E=Math.min(E,S)}for(var T=0,D=0;D<m.length;D++){var k=m[D],_=void 0===t.sweep?2*Math.PI-2*Math.PI/k.length:t.sweep,M=k.dTheta=_/Math.max(1,k.length-1);if(k.length>1&&t.avoidOverlap){var I=Math.cos(M)-Math.cos(0),N=Math.sin(M)-Math.sin(0),B=Math.sqrt(E*E/(I*I+N*N));T=Math.max(B,T)}k.r=T,T+=E}if(t.equidistant){for(var z=0,L=0,A=0;A<m.length;A++){var O=m[A],R=O.r-L;z=Math.max(z,R)}L=0;for(var V=0;V<m.length;V++){var q=m[V];0===V&&(L=q.r),q.r=L,L+=z}}for(var F={},j=0;j<m.length;j++)for(var X=m[j],Y=X.dTheta,W=X.r,H=0;H<X.length;H++){var Z=X[H],$=t.startAngle+(n?1:-1)*Y*H,U={x:l.x+W*Math.cos($),y:l.y+W*Math.sin($)};F[Z.node.id()]=U}return o.layoutPositions(this,t,function(e){var t=e.id();return F[t]}),this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=a.extend({},u,e),this.options.layout=this}var i,a=n(1),o=n(2),s=n(0),l=n(5),u={ready:function(){},stop:function(){},animate:!0,animationEasing:void 0,animationDuration:void 0,animateFilter:function(e,t){return!0},animationThreshold:250,refresh:20,fit:!0,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:!1,randomize:!1,componentSpacing:40,nodeRepulsion:function(e){return 2048},nodeOverlap:4,idealEdgeLength:function(e){return 32},edgeElasticity:function(e){return 32},nestingFactor:1.2,gravity:1,numIter:1e3,initialTemp:1e3,coolingFactor:.99,minTemp:1,weaver:!1};r.prototype.run=function(){function e(e){var t={type:"message",message:e};d.trigger(t)}var t=this.options,n=t.cy,r=this,o=this.thread,u=t.weaver?t.weaver.Thread:null,d={listeners:[],on:function(e,t){return this.listeners.push({event:e,callback:t}),this},trigger:function(e){s.string(e)&&(e={type:e});var t=function(t){return t.event===e.type},n=function(t){t.callback(e)};return this.listeners.filter(t).forEach(n),this},pass:function(e){return this.pass=e,this},run:function(e){var t=this.pass;return new l(function(n){n(e(t))})},stop:function(){return this},stopped:function(){return!0}};o&&!o.stopped()||(o=this.thread=u?new u:d),r.stopped=!1,!0!==t.animate&&!1!==t.animate||r.emit({type:"layoutstart",layout:r}),i=!0===t.debug;var h=c(n,r,t);i&&p(h),t.randomize&&f(h,n);var g=Date.now(),y=!1,m=function(e){e=e||{},y&&!e.next||!e.force&&Date.now()-g<t.animationThreshold||(y=!0,a.requestAnimationFrame(function(){v(h,n,t),!0===t.fit&&n.fit(t.padding),y=!1,e.next&&e.next()}))};o.on("message",function(e){var t=e.message;h.layoutNodes=t,m()}),o.pass({layoutInfo:h,options:{animate:t.animate,refresh:t.refresh,componentSpacing:t.componentSpacing,nodeOverlap:t.nodeOverlap,nestingFactor:t.nestingFactor,gravity:t.gravity,numIter:t.numIter,initialTemp:t.initialTemp,coolingFactor:t.coolingFactor,minTemp:t.minTemp}}).run(function(t){var n,r=t.layoutInfo,i=t.options,a=function(e,t,n){o(e,t),d(e,t),h(e,t),p(e,t),f(e,t)},o=function(e,t){for(var n=0;n<e.graphSet.length;n++)for(var r=e.graphSet[n],i=r.length,a=0;a<i;a++)for(var o=e.layoutNodes[e.idToIndex[r[a]]],s=a+1;s<i;s++){var u=e.layoutNodes[e.idToIndex[r[s]]];l(o,u,e,t)}},s=function(e){return-e+2*e*Math.random()},l=function(e,t,n,r){if(e.cmptId===t.cmptId||n.isCompound){var i=t.positionX-e.positionX,a=t.positionY-e.positionY;0===i&&0===a&&(i=s(1),a=s(1));var o=u(e,t,i,a);if(o>0)var l=r.nodeOverlap*o,d=Math.sqrt(i*i+a*a),h=l*i/d,p=l*a/d;else var f=c(e,i,a),v=c(t,-1*i,-1*a),g=v.x-f.x,y=v.y-f.y,m=g*g+y*y,d=Math.sqrt(m),l=(e.nodeRepulsion+t.nodeRepulsion)/m,h=l*g/d,p=l*y/d;e.isLocked||(e.offsetX-=h,e.offsetY-=p),t.isLocked||(t.offsetX+=h,t.offsetY+=p)}},u=function(e,t,n,r){if(n>0)var i=e.maxX-t.minX;else var i=t.maxX-e.minX;if(r>0)var a=e.maxY-t.minY;else var a=t.maxY-e.minY;return i>=0&&a>=0?Math.sqrt(i*i+a*a):0},c=function(e,t,n){var r=e.positionX,i=e.positionY,a=e.height||1,o=e.width||1,s=n/t,l=a/o,u={};return 0===t&&0<n?(u.x=r,u.y=i+a/2,u):0===t&&0>n?(u.x=r,u.y=i+a/2,u):0<t&&-1*l<=s&&s<=l?(u.x=r+o/2,u.y=i+o*n/2/t,u):0>t&&-1*l<=s&&s<=l?(u.x=r-o/2,u.y=i-o*n/2/t,u):0<n&&(s<=-1*l||s>=l)?(u.x=r+a*t/2/n,u.y=i+a/2,u):0>n&&(s<=-1*l||s>=l)?(u.x=r-a*t/2/n,u.y=i-a/2,u):u},d=function(e,t){for(var n=0;n<e.edgeSize;n++){var r=e.layoutEdges[n],i=e.idToIndex[r.sourceId],a=e.layoutNodes[i],o=e.idToIndex[r.targetId],s=e.layoutNodes[o],l=s.positionX-a.positionX,u=s.positionY-a.positionY;if(0!==l||0!==u){var d=c(a,l,u),h=c(s,-1*l,-1*u),p=h.x-d.x,f=h.y-d.y,v=Math.sqrt(p*p+f*f),g=Math.pow(r.idealLength-v,2)/r.elasticity;if(0!==v)var y=g*p/v,m=g*f/v;else var y=0,m=0;a.isLocked||(a.offsetX+=y,a.offsetY+=m),s.isLocked||(s.offsetX-=y,s.offsetY-=m)}}},h=function(e,t){for(var n=0;n<e.graphSet.length;n++){var r=e.graphSet[n],i=r.length;if(0===n)var a=e.clientHeight/2,o=e.clientWidth/2;else var s=e.layoutNodes[e.idToIndex[r[0]]],l=e.layoutNodes[e.idToIndex[s.parentId]],a=l.positionX,o=l.positionY;for(var u=0;u<i;u++){var c=e.layoutNodes[e.idToIndex[r[u]]];if(!c.isLocked){var d=a-c.positionX,h=o-c.positionY,p=Math.sqrt(d*d+h*h);if(p>1){var f=t.gravity*d/p,v=t.gravity*h/p;c.offsetX+=f,c.offsetY+=v}}}}},p=function(e,t){var n=[],r=0,i=-1;for(n.push.apply(n,e.graphSet[0]),i+=e.graphSet[0].length;r<=i;){var a=n[r++],o=e.idToIndex[a],s=e.layoutNodes[o],l=s.children;if(0<l.length&&!s.isLocked){for(var u=s.offsetX,c=s.offsetY,d=0;d<l.length;d++){var h=e.layoutNodes[e.idToIndex[l[d]]];h.offsetX+=u,h.offsetY+=c,n[++i]=l[d]}s.offsetX=0,s.offsetY=0}}},f=function(e,t){for(var n=0;n<e.nodeSize;n++){var r=e.layoutNodes[n];0<r.children.length&&(r.maxX=void 0,r.minX=void 0,r.maxY=void 0,r.minY=void 0)}for(var n=0;n<e.nodeSize;n++){var r=e.layoutNodes[n];if(!(0<r.children.length||r.isLocked)){var i=v(r.offsetX,r.offsetY,e.temperature);r.positionX+=i.x,r.positionY+=i.y,r.offsetX=0,r.offsetY=0,r.minX=r.positionX-r.width,r.maxX=r.positionX+r.width,r.minY=r.positionY-r.height,r.maxY=r.positionY+r.height,g(r,e)}}for(var n=0;n<e.nodeSize;n++){var r=e.layoutNodes[n];0<r.children.length&&!r.isLocked&&(r.positionX=(r.maxX+r.minX)/2,r.positionY=(r.maxY+r.minY)/2,r.width=r.maxX-r.minX,r.height=r.maxY-r.minY)}},v=function(e,t,n){var r=Math.sqrt(e*e+t*t);if(r>n)var i={x:n*e/r,y:n*t/r};else var i={x:e,y:t};return i},g=function e(t,n){var r=t.parentId;if(null!=r){var i=n.layoutNodes[n.idToIndex[r]],a=!1;return(null==i.maxX||t.maxX+i.padRight>i.maxX)&&(i.maxX=t.maxX+i.padRight,a=!0),(null==i.minX||t.minX-i.padLeft<i.minX)&&(i.minX=t.minX-i.padLeft,a=!0),(null==i.maxY||t.maxY+i.padBottom>i.maxY)&&(i.maxY=t.maxY+i.padBottom,a=!0),(null==i.minY||t.minY-i.padTop<i.minY)&&(i.minY=t.minY-i.padTop,a=!0),a?e(i,n):void 0}},y=0;do{for(var m=0;m<i.refresh&&y<i.numIter;){var n=function(e){return a(r,i),r.temperature=r.temperature*i.coolingFactor,!(r.temperature<i.minTemp)}();if(!n)break;m++,y++}!0===i.animate&&e(r.layoutNodes)}while(n&&y+1<i.numIter);return function(e,t){for(var n=r.layoutNodes,i=[],a=0;a<n.length;a++){var o=n[a],s=o.cmptId;(i[s]=i[s]||[]).push(o)}for(var l=0,a=0;a<i.length;a++){var u=i[a];if(u){u.x1=1/0,u.x2=-1/0,u.y1=1/0,u.y2=-1/0;for(var c=0;c<u.length;c++){var d=u[c];u.x1=Math.min(u.x1,d.positionX-d.width/2),u.x2=Math.max(u.x2,d.positionX+d.width/2),u.y1=Math.min(u.y1,d.positionY-d.height/2),u.y2=Math.max(u.y2,d.positionY+d.height/2)}u.w=u.x2-u.x1,u.h=u.y2-u.y1,l+=u.w*u.h}}i.sort(function(e,t){return t.w*t.h-e.w*e.h});for(var h=0,p=0,f=0,v=0,g=Math.sqrt(l)*r.clientWidth/r.clientHeight,a=0;a<i.length;a++){var u=i[a];if(u){for(var c=0;c<u.length;c++){var d=u[c];d.isLocked||(d.positionX+=h,d.positionY+=p)}h+=u.w+t.componentSpacing,f+=u.w+t.componentSpacing,v=Math.max(v,u.h),f>g&&(p+=v+t.componentSpacing,h=0,f=0,v=0)}}}(0,i),r}).then(function(e){h.layoutNodes=e.layoutNodes,o.stop(),b()});var b=function(){!0===t.animate||!1===t.animate?m({force:!0,next:function(){r.one("layoutstop",t.stop),r.emit({type:"layoutstop",layout:r})}}):t.eles.nodes().layoutPositions(r,t,function(e){var t=h.layoutNodes[h.idToIndex[e.data("id")]];return{x:t.positionX,y:t.positionY}})};return this},r.prototype.stop=function(){return this.stopped=!0,this.thread&&this.thread.stop(),this.emit("layoutstop"),this},r.prototype.destroy=function(){return this.thread&&this.thread.stop(),this};var c=function(e,t,n){for(var r=n.eles.edges(),i=n.eles.nodes(),a={isCompound:e.hasCompoundNodes(),layoutNodes:[],idToIndex:{},nodeSize:i.size(),graphSet:[],indexToGraph:[],layoutEdges:[],edgeSize:r.size(),temperature:n.initialTemp,clientWidth:e.width(),clientHeight:e.width(),boundingBox:o.makeBoundingBox(n.boundingBox?n.boundingBox:{x1:0,y1:0,w:e.width(),h:e.height()})},l=n.eles.components(),u={},c=0;c<l.length;c++)for(var h=l[c],p=0;p<h.length;p++){var f=h[p];u[f.id()]=c}for(var c=0;c<a.nodeSize;c++){var v=i[c],g=v.layoutDimensions(n),y={};y.isLocked=v.locked(),y.id=v.data("id"),y.parentId=v.data("parent"),y.cmptId=u[v.id()],y.children=[],y.positionX=v.position("x"),y.positionY=v.position("y"),y.offsetX=0,y.offsetY=0,y.height=g.w,y.width=g.h,y.maxX=y.positionX+y.width/2,y.minX=y.positionX-y.width/2,y.maxY=y.positionY+y.height/2,y.minY=y.positionY-y.height/2,y.padLeft=parseFloat(v.style("padding")),y.padRight=parseFloat(v.style("padding")),y.padTop=parseFloat(v.style("padding")),y.padBottom=parseFloat(v.style("padding")),y.nodeRepulsion=s.fn(n.nodeRepulsion)?n.nodeRepulsion(v):n.nodeRepulsion,a.layoutNodes.push(y),a.idToIndex[y.id]=c}for(var m=[],b=0,x=-1,w=[],c=0;c<a.nodeSize;c++){var v=a.layoutNodes[c],E=v.parentId;null!=E?a.layoutNodes[a.idToIndex[E]].children.push(v.id):(m[++x]=v.id,w.push(v.id))}for(a.graphSet.push(w);b<=x;){var P=m[b++],C=a.idToIndex[P],f=a.layoutNodes[C],S=f.children;if(S.length>0){a.graphSet.push(S);for(var c=0;c<S.length;c++)m[++x]=S[c]}}for(var c=0;c<a.graphSet.length;c++)for(var T=a.graphSet[c],p=0;p<T.length;p++){var D=a.idToIndex[T[p]];a.indexToGraph[D]=c}for(var c=0;c<a.edgeSize;c++){var k=r[c],_={};_.id=k.data("id"),_.sourceId=k.data("source"),_.targetId=k.data("target");var M=s.fn(n.idealEdgeLength)?n.idealEdgeLength(k):n.idealEdgeLength,I=s.fn(n.edgeElasticity)?n.edgeElasticity(k):n.edgeElasticity,N=a.idToIndex[_.sourceId],B=a.idToIndex[_.targetId];if(a.indexToGraph[N]!=a.indexToGraph[B]){for(var z=d(_.sourceId,_.targetId,a),L=a.graphSet[z],A=0,y=a.layoutNodes[N];-1===L.indexOf(y.id);)y=a.layoutNodes[a.idToIndex[y.parentId]],A++;for(y=a.layoutNodes[B];-1===L.indexOf(y.id);)y=a.layoutNodes[a.idToIndex[y.parentId]],A++;M*=A*n.nestingFactor}_.idealLength=M,_.elasticity=I,a.layoutEdges.push(_)}return a},d=function(e,t,n){var r=h(e,t,0,n);return 2>r.count?0:r.graph},h=function e(t,n,r,i){var a=i.graphSet[r];if(-1<a.indexOf(t)&&-1<a.indexOf(n))return{count:2,graph:r};for(var o=0,s=0;s<a.length;s++){var l=a[s],u=i.idToIndex[l],c=i.layoutNodes[u].children;if(0!==c.length){var d=i.indexToGraph[i.idToIndex[c[0]]],h=e(t,n,d,i);if(0!==h.count){if(1!==h.count)return h;if(2===++o)break}}}return{count:o,graph:r}},p=function(e){if(i){console.debug("layoutNodes:");for(var t=0;t<e.nodeSize;t++){var n=e.layoutNodes[t],r="\nindex: "+t+"\nId: "+n.id+"\nChildren: "+n.children.toString()+"\nparentId: "+n.parentId+"\npositionX: "+n.positionX+"\npositionY: "+n.positionY+"\nOffsetX: "+n.offsetX+"\nOffsetY: "+n.offsetY+"\npadLeft: "+n.padLeft+"\npadRight: "+n.padRight+"\npadTop: "+n.padTop+"\npadBottom: "+n.padBottom;console.debug(r)}console.debug("idToIndex");for(var t in e.idToIndex)console.debug("Id: "+t+"\nIndex: "+e.idToIndex[t]);console.debug("Graph Set");for(var a=e.graphSet,t=0;t<a.length;t++)console.debug("Set : "+t+": "+a[t].toString());for(var r="IndexToGraph",t=0;t<e.indexToGraph.length;t++)r+="\nIndex : "+t+" Graph: "+e.indexToGraph[t];console.debug(r),r="Layout Edges";for(var t=0;t<e.layoutEdges.length;t++){var o=e.layoutEdges[t];r+="\nEdge Index: "+t+" ID: "+o.id+" SouceID: "+o.sourceId+" TargetId: "+o.targetId+" Ideal Length: "+o.idealLength}console.debug(r),r="nodeSize: "+e.nodeSize,r+="\nedgeSize: "+e.edgeSize,r+="\ntemperature: "+e.temperature,console.debug(r)}},f=function(e,t){for(var n=e.clientWidth,r=e.clientHeight,i=0;i<e.nodeSize;i++){var a=e.layoutNodes[i];0!==a.children.length||a.isLocked||(a.positionX=Math.random()*n,a.positionY=Math.random()*r)}},v=function(e,t,n){var r=n.layout,i=n.eles.nodes(),a=e.boundingBox,o={x1:1/0,x2:-1/0,y1:1/0,y2:-1/0};n.boundingBox&&(i.forEach(function(t){var n=e.layoutNodes[e.idToIndex[t.data("id")]];o.x1=Math.min(o.x1,n.positionX),o.x2=Math.max(o.x2,n.positionX),o.y1=Math.min(o.y1,n.positionY),o.y2=Math.max(o.y2,n.positionY)}),o.w=o.x2-o.x1,o.h=o.y2-o.y1),i.positions(function(t,r){var i=e.layoutNodes[e.idToIndex[t.data("id")]];if(n.boundingBox){var s=(i.positionX-o.x1)/o.w,l=(i.positionY-o.y1)/o.h;return{x:a.x1+s*a.w,y:a.y1+l*a.h}}return{x:i.positionX,y:i.positionY}}),!0!==e.ready&&(e.ready=!0,r.one("layoutready",n.ready),r.emit({type:"layoutready",layout:this}))};e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},o,e)}var i=n(1),a=n(2),o={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,avoidOverlapPadding:10,nodeDimensionsIncludeLabels:!1,spacingFactor:void 0,condense:!1,rows:void 0,cols:void 0,position:function(e){},sort:void 0,animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){var e=this.options,t=e,n=e.cy,r=t.eles,i=r.nodes().not(":parent");t.sort&&(i=i.sort(t.sort));var o=a.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()});if(0===o.h||0===o.w)i.layoutPositions(this,t,function(e){return{x:o.x1,y:o.y1}});else{var s=i.size(),l=Math.sqrt(s*o.h/o.w),u=Math.round(l),c=Math.round(o.w/o.h*l),d=function(e){if(null==e)return Math.min(u,c);Math.min(u,c)==u?u=e:c=e},h=function(e){if(null==e)return Math.max(u,c);Math.max(u,c)==u?u=e:c=e},p=t.rows,f=null!=t.cols?t.cols:t.columns;if(null!=p&&null!=f)u=p,c=f;else if(null!=p&&null==f)u=p,c=Math.ceil(s/u);else if(null==p&&null!=f)c=f,u=Math.ceil(s/c);else if(c*u>s){var v=d(),g=h();(v-1)*g>=s?d(v-1):(g-1)*v>=s&&h(g-1)}else for(;c*u<s;){var y=d(),m=h();(m+1)*y>=s?h(m+1):d(y+1)}var b=o.w/c,x=o.h/u;if(t.condense&&(b=0,x=0),t.avoidOverlap)for(var w=0;w<i.length;w++){var E=i[w],P=E._private.position;null!=P.x&&null!=P.y||(P.x=0,P.y=0);var C=E.layoutDimensions(t),S=t.avoidOverlapPadding,T=C.w+S,D=C.h+S;b=Math.max(b,T),x=Math.max(x,D)}for(var k={},_=function(e,t){return!!k["c-"+e+"-"+t]},M=function(e,t){k["c-"+e+"-"+t]=!0},I=0,N=0,B=function(){++N>=c&&(N=0,I++)},z={},L=0;L<i.length;L++){var A=i[L],O=t.position(A);if(O&&(void 0!==O.row||void 0!==O.col)){var R={row:O.row,col:O.col};if(void 0===R.col)for(R.col=0;_(R.row,R.col);)R.col++;else if(void 0===R.row)for(R.row=0;_(R.row,R.col);)R.row++;z[A.id()]=R,M(R.row,R.col)}}var V=function(e,t){var n=void 0,r=void 0;if(e.locked()||e.isParent())return!1;var i=z[e.id()];if(i)n=i.col*b+b/2+o.x1,r=i.row*x+x/2+o.y1;else{for(;_(I,N);)B();n=N*b+b/2+o.x1,r=I*x+x/2+o.y1,M(I,N),B()}return{x:n,y:r}};i.layoutPositions(this,t,V)}return this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},a,e)}var i=n(1),a={ready:function(){},stop:function(){}};r.prototype.run=function(){var e=this.options,t=e.eles,n=this;e.cy;return n.emit("layoutstart"),t.nodes().positions(function(){return{x:0,y:0}}),n.one("layoutready",e.ready),n.emit("layoutready"),n.one("layoutstop",e.stop),n.emit("layoutstop"),this},r.prototype.stop=function(){return this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},o,e)}var i=n(1),a=n(0),o={positions:void 0,zoom:void 0,pan:void 0,fit:!0,padding:30,animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){function e(e){if(null==t.positions)return null;if(i)return t.positions(e);var n=t.positions[e._private.data.id];return null==n?null:n}var t=this.options,n=t.eles,r=n.nodes(),i=a.fn(t.positions);return r.layoutPositions(this,t,function(t,n){var r=e(t);return!t.locked()&&null!=r&&r}),this},e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.extend({},o,e)}var i=n(1),a=n(2),o={fit:!0,padding:30,boundingBox:void 0,animate:!1,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return!0},ready:void 0,stop:void 0,transform:function(e,t){return t}};r.prototype.run=function(){var e=this.options,t=e.cy,n=e.eles,r=n.nodes().not(":parent"),i=a.makeBoundingBox(e.boundingBox?e.boundingBox:{x1:0,y1:0,w:t.width(),h:t.height()}),o=function(e,t){return{x:i.x1+Math.round(Math.random()*i.w),y:i.y1+Math.round(Math.random()*i.h)}};return r.layoutPositions(this,e,o),this},e.exports=r},function(e,t,n){"use strict";e.exports=[{name:"null",impl:n(107)},{name:"base",impl:n(108)},{name:"canvas",impl:n(124)}]},function(e,t,n){"use strict";function r(e){this.options=e,this.notifications=0}var i=function(){};r.prototype={recalculateRenderedStyle:i,notify:function(){this.notifications++},init:i},e.exports=r},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(3),o=function(e){this.init(e)},s=o,l=s.prototype;l.clientFunctions=["redrawHint","render","renderTo","matchCanvasSize","nodeShapeImpl","arrowShapeImpl"],l.init=function(e){var t=this;t.options=e,t.cy=e.cy;var n=t.container=e.cy.container();if(a){var r=a.document,o=r.head,s="__________cytoscape_container",l=null!=r.getElementById("__________cytoscape_stylesheet");if(n.className.indexOf(s)<0&&(n.className=(n.className||"")+" "+s),!l){var u=r.createElement("style");u.id="__________cytoscape_stylesheet",u.innerHTML="."+s+" { position: relative; }",o.insertBefore(u,o.children[0])}"static"===a.getComputedStyle(n).getPropertyValue("position")&&i.error("A Cytoscape container has style position:static and so can not use UI extensions properly")}t.selection=[void 0,void 0,void 0,void 0,0],t.bezierProjPcts=[.05,.225,.4,.5,.6,.775,.95],t.hoverData={down:null,last:null,downTime:null,triggerMode:null,dragging:!1,initialPan:[null,null],capture:!1},t.dragData={possibleDragElements:[]},t.touchData={start:null,capture:!1,startPosition:[null,null,null,null,null,null],singleTouchStartTime:null,singleTouchMoved:!0,now:[null,null,null,null,null,null],earlier:[null,null,null,null,null,null]},t.redraws=0,t.showFps=e.showFps,t.debug=e.debug,t.hideEdgesOnViewport=e.hideEdgesOnViewport,t.hideLabelsOnViewport=e.hideLabelsOnViewport,t.textureOnViewport=e.textureOnViewport,t.wheelSensitivity=e.wheelSensitivity,t.motionBlurEnabled=e.motionBlur,t.forcedPixelRatio=e.pixelRatio,t.motionBlur=e.motionBlur,t.motionBlurOpacity=e.motionBlurOpacity,t.motionBlurTransparency=1-t.motionBlurOpacity,t.motionBlurPxRatio=1,t.mbPxRBlurry=1,t.minMbLowQualFrames=4,t.fullQualityMb=!1,t.clearedForMotionBlur=[],t.desktopTapThreshold=e.desktopTapThreshold,t.desktopTapThreshold2=e.desktopTapThreshold*e.desktopTapThreshold,t.touchTapThreshold=e.touchTapThreshold,t.touchTapThreshold2=e.touchTapThreshold*e.touchTapThreshold,t.tapholdDuration=500,t.bindings=[],t.beforeRenderCallbacks=[],t.beforeRenderPriorities={animations:400,eleCalcs:300,eleTxrDeq:200,lyrTxrDeq:100},t.registerNodeShapes(),t.registerArrowShapes(),t.registerCalculationListeners()},l.notify=function(e){var t,n=this;if(!this.destroyed){t=r.array(e.type)?e.type:[e.type];for(var i={},a=0;a<t.length;a++){i[t[a]]=!0}if(i.init)return void n.load();if(i.destroy)return void n.destroy();(i.add||i.remove||i.load||i.zorder)&&n.invalidateCachedZSortedEles(),i.viewport&&n.redrawHint("select",!0),(i.load||i.resize)&&(n.invalidateContainerClientCoordsCache(),n.matchCanvasSize(n.container)),n.redrawHint("eles",!0),n.redrawHint("drag",!0),this.startRenderLoop(),this.redraw()}},l.destroy=function(){var e=this;e.destroyed=!0,e.cy.stopAnimationLoop();for(var t=0;t<e.bindings.length;t++){var n=e.bindings[t],r=n,i=r.target;(i.off||i.removeEventListener).apply(i,r.args)}if(e.bindings=[],e.beforeRenderCallbacks=[],e.onUpdateEleCalcsFns=[],e.removeObserver&&e.removeObserver.disconnect(),e.styleObserver&&e.styleObserver.disconnect(),e.labelCalcDiv)try{document.body.removeChild(e.labelCalcDiv)}catch(e){}},[n(109),n(110),n(120),n(121),n(122),n(123)].forEach(function(e){i.extend(l,e)}),e.exports=s},function(e,t,n){"use strict";var r=n(2),i=n(0),a=n(1),o={};o.arrowShapeWidth=.3,o.registerArrowShapes=function(){var e=this.arrowShapes={},t=this,n=function(e,t,n,r,i,a,o){var s=i.x-n/2-o,l=i.x+n/2+o,u=i.y-n/2-o,c=i.y+n/2+o;return s<=e&&e<=l&&u<=t&&t<=c},o=function(e,t,n,r,i){var a=e*Math.cos(r)-t*Math.sin(r),o=e*Math.sin(r)+t*Math.cos(r),s=a*n,l=o*n;return{x:s+i.x,y:l+i.y}},s=function(e,t,n,r){for(var i=[],a=0;a<e.length;a+=2){var s=e[a],l=e[a+1];i.push(o(s,l,t,n,r))}return i},l=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r.x,r.y)}return t},u=function(e){return e.pstyle("width").pfValue*e.pstyle("arrow-scale").pfValue*2},c=function(o,c){i.string(c)&&(c=e[c]),e[o]=a.extend({name:o,points:[-.15,-.3,.15,-.3,.15,.3,-.15,.3],collide:function(e,t,n,i,a,o){var u=l(s(this.points,n+2*o,i,a));return r.pointInsidePolygonPoints(e,t,u)},roughCollide:n,draw:function(e,n,r,i){var a=s(this.points,n,r,i);t.arrowShapeImpl("polygon")(e,a)},spacing:function(e){return 0},gap:u},c)};c("none",{collide:a.falsify,roughCollide:a.falsify,draw:a.noop,spacing:a.zeroify,gap:a.zeroify}),c("triangle",{points:[-.15,-.3,0,0,.15,-.3]}),c("arrow","triangle"),c("triangle-backcurve",{points:e.triangle.points,controlPoint:[0,-.15],roughCollide:n,draw:function(e,n,r,i,a){var l=s(this.points,n,r,i),u=this.controlPoint,c=o(u[0],u[1],n,r,i);t.arrowShapeImpl(this.name)(e,l,c)},gap:function(e){return.8*u(e)}}),c("triangle-tee",{points:[-.15,-.3,0,0,.15,-.3,-.15,-.3],pointsTee:[-.15,-.4,-.15,-.5,.15,-.5,.15,-.4],collide:function(e,t,n,i,a,o,u){var c=l(s(this.points,n+2*u,i,a)),d=l(s(this.pointsTee,n+2*u,i,a));return r.pointInsidePolygonPoints(e,t,c)||r.pointInsidePolygonPoints(e,t,d)},draw:function(e,n,r,i,a){var o=s(this.points,n,r,i),l=s(this.pointsTee,n,r,i);t.arrowShapeImpl(this.name)(e,o,l)}}),c("triangle-cross",{points:[-.15,-.3,0,0,.15,-.3,-.15,-.3],baseCrossLinePts:[-.15,-.4,-.15,-.4,.15,-.4,.15,-.4],crossLinePts:function(e,t){var n=this.baseCrossLinePts.slice(),r=t/e;return n[3]=n[3]-r,n[5]=n[5]-r,n},collide:function(e,t,n,i,a,o,u){var c=l(s(this.points,n+2*u,i,a)),d=l(s(this.crossLinePts(n,o),n+2*u,i,a));return r.pointInsidePolygonPoints(e,t,c)||r.pointInsidePolygonPoints(e,t,d)},draw:function(e,n,r,i,a){var o=s(this.points,n,r,i),l=s(this.crossLinePts(n,a),n,r,i);t.arrowShapeImpl(this.name)(e,o,l)}}),c("vee",{points:[-.15,-.3,0,0,.15,-.3,0,-.15],gap:function(e){return.525*u(e)}}),c("circle",{radius:.15,collide:function(e,t,n,r,i,a,o){var s=i;return Math.pow(s.x-e,2)+Math.pow(s.y-t,2)<=Math.pow((n+2*o)*this.radius,2)},draw:function(e,n,r,i,a){t.arrowShapeImpl(this.name)(e,i.x,i.y,this.radius*n)},spacing:function(e){return t.getArrowWidth(e.pstyle("width").pfValue,e.pstyle("arrow-scale").value)*this.radius}}),c("tee",{points:[-.15,0,-.15,-.1,.15,-.1,.15,0],spacing:function(e){return 1},gap:function(e){return 1}}),c("square",{points:[-.15,0,.15,0,.15,-.3,-.15,-.3]}),c("diamond",{points:[-.15,-.15,0,-.3,.15,-.15,0,0],gap:function(e){return e.pstyle("width").pfValue*e.pstyle("arrow-scale").value}})},e.exports=o},function(e,t,n){"use strict";var r=n(1),i={};[n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119)].forEach(function(e){r.extend(i,e)}),e.exports=i},function(e,t,n){"use strict";var r=n(3),i=n(2),a=n(1),r=n(3),o={};o.projectIntoViewport=function(e,t){var n=this.cy,r=this.findContainerClientCoords(),i=r[0],a=r[1],o=r[4],s=n.pan(),l=n.zoom();return[((e-i)/o-s.x)/l,((t-a)/o-s.y)/l]},o.findContainerClientCoords=function(){if(this.containerBB)return this.containerBB;var e=this.container,t=e.getBoundingClientRect(),n=r.getComputedStyle(e),i=function(e){return parseFloat(n.getPropertyValue(e))},a={left:i("padding-left"),right:i("padding-right"),top:i("padding-top"),bottom:i("padding-bottom")},o={left:i("border-left-width"),right:i("border-right-width"),top:i("border-top-width"),bottom:i("border-bottom-width")},s=e.clientWidth,l=e.clientHeight,u=a.left+a.right,c=a.top+a.bottom,d=o.left+o.right,h=o.top+o.bottom,p=t.width/(s+d),f=s-u,v=l-c,g=(t.width,t.height,t.left+a.left+o.left),y=t.top+a.top+o.top;return this.containerBB=[g,y,f,v,p]},o.invalidateContainerClientCoordsCache=function(){this.containerBB=null},o.findNearestElement=function(e,t,n,r){return this.findNearestElements(e,t,n,r)[0]},o.findNearestElements=function(e,t,n,r){function o(e,t){if(e.isNode()){if(d)return;d=e,v.push(e)}if(e.isEdge()&&(null==t||t<w))if(c){if(c.pstyle("z-index").value===e.pstyle("z-index").value)for(var n=0;n<v.length;n++)if(v[n].isEdge()){v[n]=e,c=e,w=null!=t?t:w;break}}else v.push(e),c=e,w=null!=t?t:w}function s(n){var r=n.outerWidth()+2*b,i=n.outerHeight()+2*b,a=r/2,s=i/2,l=n.position();if(l.x-a<=e&&e<=l.x+a&&l.y-s<=t&&t<=l.y+s){if(p.nodeShapes[h.getNodeShape(n)].checkPoint(e,t,0,r,i,l.x,l.y))return o(n,0),!0}}function l(e,t,n){return a.getPrefixedProperty(e,t,n)}function u(n,r){var a,s=n._private,u=x;a=r?r+"-":"";var c=n.pstyle(a+"label").value;if("yes"===n.pstyle("text-events").strValue&&c){var d=s.rstyle,h=n.pstyle("text-border-width").pfValue,p=n.pstyle("text-background-padding").pfValue,f=l(d,"labelWidth",r)+h+2*u+2*p,v=l(d,"labelHeight",r)+h+2*u+2*p,g=l(d,"labelX",r),y=l(d,"labelY",r),m=l(s.rscratch,"labelAngle",r),b=g-f/2,w=g+f/2,E=y-v/2,P=y+v/2;if(m){var C=Math.cos(m),S=Math.sin(m),T=function(e,t){return e-=g,t-=y,{x:e*C-t*S+g,y:e*S+t*C+y}},D=T(b,E),k=T(b,P),_=T(w,E),M=T(w,P),I=[D.x,D.y,_.x,_.y,M.x,M.y,k.x,k.y];if(i.pointInsidePolygonPoints(e,t,I))return o(n),!0}else{var N={w:f,h:v,x1:b,x2:w,y1:E,y2:P};if(i.inBoundingBox(N,e,t))return o(n),!0}}}var c,d,h=this,p=this,f=p.getCachedZSortedEles(),v=[],g=p.cy.zoom(),y=p.cy.hasCompoundNodes(),m=(r?24:8)/g,b=(r?8:2)/g,x=(r?8:2)/g,w=1/0;n&&(f=f.interactive);for(var E=f.length-1;E>=0;E--){var P=f[E];P.isNode()?s(P)||u(P):function(n){var r,a=n._private,l=a.rscratch,u=n.pstyle("width").pfValue,c=n.pstyle("arrow-scale").value,d=u/2+m,f=d*d,g=2*d,b=a.source,x=a.target;if("segments"===l.edgeType||"straight"===l.edgeType||"haystack"===l.edgeType){for(var w=l.allpts,E=0;E+3<w.length;E+=2)if(i.inLineVicinity(e,t,w[E],w[E+1],w[E+2],w[E+3],g)&&f>(r=i.sqdistToFiniteLine(e,t,w[E],w[E+1],w[E+2],w[E+3])))return o(n,r),!0}else if("bezier"===l.edgeType||"multibezier"===l.edgeType||"self"===l.edgeType||"compound"===l.edgeType)for(var w=l.allpts,E=0;E+5<l.allpts.length;E+=4)if(i.inBezierVicinity(e,t,w[E],w[E+1],w[E+2],w[E+3],w[E+4],w[E+5],g)&&f>(r=i.sqdistToQuadraticBezier(e,t,w[E],w[E+1],w[E+2],w[E+3],w[E+4],w[E+5])))return o(n,r),!0;for(var b=b||a.source,x=x||a.target,P=h.getArrowWidth(u,c),C=[{name:"source",x:l.arrowStartX,y:l.arrowStartY,angle:l.srcArrowAngle},{name:"target",x:l.arrowEndX,y:l.arrowEndY,angle:l.tgtArrowAngle},{name:"mid-source",x:l.midX,y:l.midY,angle:l.midsrcArrowAngle},{name:"mid-target",x:l.midX,y:l.midY,angle:l.midtgtArrowAngle}],E=0;E<C.length;E++){var S=C[E],T=p.arrowShapes[n.pstyle(S.name+"-arrow-shape").value],D=n.pstyle("width").pfValue;if(T.roughCollide(e,t,P,S.angle,{x:S.x,y:S.y},D,m)&&T.collide(e,t,P,S.angle,{x:S.x,y:S.y},D,m))return o(n),!0}y&&v.length>0&&(s(b),s(x))}(P)||u(P)||u(P,"source")||u(P,"target")}return v},o.getAllInBox=function(e,t,n,r){var a=this.getCachedZSortedEles().interactive,o=[],s=Math.min(e,n),l=Math.max(e,n),u=Math.min(t,r),c=Math.max(t,r);e=s,n=l,t=u,r=c;for(var d=i.makeBoundingBox({x1:e,y1:t,x2:n,y2:r}),h=0;h<a.length;h++){var p=a[h];if(p.isNode()){var f=p,v=f.boundingBox({includeNodes:!0,includeEdges:!1,includeLabels:!1});i.boundingBoxesIntersect(d,v)&&!i.boundingBoxInBoundingBox(v,d)&&o.push(f)}else{var g=p,y=g._private,m=y.rscratch;if(null!=m.startX&&null!=m.startY&&!i.inBoundingBox(d,m.startX,m.startY))continue;if(null!=m.endX&&null!=m.endY&&!i.inBoundingBox(d,m.endX,m.endY))continue;if("bezier"===m.edgeType||"multibezier"===m.edgeType||"self"===m.edgeType||"compound"===m.edgeType||"segments"===m.edgeType||"haystack"===m.edgeType){for(var b=y.rstyle.bezierPts||y.rstyle.linePts||y.rstyle.haystackPts,x=!0,w=0;w<b.length;w++)if(!i.pointInBoundingBox(d,b[w])){x=!1;break}x&&o.push(g)}else"haystack"!==m.edgeType&&"straight"!==m.edgeType||o.push(g)}}return o},e.exports=o},function(e,t,n){"use strict";var r=n(2),i={};i.calculateArrowAngles=function(e){var t,n,i,a,o,s,l,u,c=e._private.rscratch,d="haystack"===c.edgeType,h="bezier"===c.edgeType,p="multibezier"===c.edgeType,f="segments"===c.edgeType,v="compound"===c.edgeType,g="self"===c.edgeType;if(d?(i=c.haystackPts[0],a=c.haystackPts[1],o=c.haystackPts[2],s=c.haystackPts[3]):(i=c.arrowStartX,a=c.arrowStartY,o=c.arrowEndX,s=c.arrowEndY),l=c.midX,u=c.midY,f)t=i-c.segpts[0],n=a-c.segpts[1];else if(p||v||g||h){var y=c.allpts,m=r.qbezierAt(y[0],y[2],y[4],.1),b=r.qbezierAt(y[1],y[3],y[5],.1);t=i-m,n=a-b}else t=i-l,n=a-u;c.srcArrowAngle=r.getAngleFromDisp(t,n);var l=c.midX,u=c.midY;if(d&&(l=(i+o)/2,u=(a+s)/2),t=o-i,n=s-a,f){var y=c.allpts;if(y.length/2%2==0){var x=y.length/2,w=x-2;t=y[x]-y[w],n=y[x+1]-y[w+1]}else{var x=y.length/2-1,w=x-2,E=x+2;t=y[x]-y[w],n=y[x+1]-y[w+1]}}else if(p||v||g){var P,C,S,T,y=c.allpts,D=c.ctrlpts;if(D.length/2%2==0){var k=y.length/2-1,_=k+2,M=_+2;P=r.qbezierAt(y[k],y[_],y[M],0),C=r.qbezierAt(y[k+1],y[_+1],y[M+1],0),S=r.qbezierAt(y[k],y[_],y[M],1e-4),T=r.qbezierAt(y[k+1],y[_+1],y[M+1],1e-4)}else{var _=y.length/2-1,k=_-2,M=_+2;P=r.qbezierAt(y[k],y[_],y[M],.4999),C=r.qbezierAt(y[k+1],y[_+1],y[M+1],.4999),S=r.qbezierAt(y[k],y[_],y[M],.5),T=r.qbezierAt(y[k+1],y[_+1],y[M+1],.5)}t=S-P,n=T-C}if(c.midtgtArrowAngle=r.getAngleFromDisp(t,n),c.midDispX=t,c.midDispY=n,t*=-1,n*=-1,f){var y=c.allpts;if(y.length/2%2==0);else{var x=y.length/2-1,E=x+2;t=-(y[E]-y[x]),n=-(y[E+1]-y[x+1])}}if(c.midsrcArrowAngle=r.getAngleFromDisp(t,n),f)t=o-c.segpts[c.segpts.length-2],n=s-c.segpts[c.segpts.length-1];else if(p||v||g||h){var y=c.allpts,I=y.length,m=r.qbezierAt(y[I-6],y[I-4],y[I-2],.9),b=r.qbezierAt(y[I-5],y[I-3],y[I-1],.9);t=o-m,n=s-b}else t=o-l,n=s-u;c.tgtArrowAngle=r.getAngleFromDisp(t,n)},i.getArrowWidth=i.getArrowHeight=function(e,t){var n=this.arrowWidthCache=this.arrowWidthCache||{},r=n[e+", "+t];return r||(r=Math.max(Math.pow(13.37*e,.9),29)*t,n[e+", "+t]=r,r)},e.exports=i},function(e,t,n){"use strict";function r(e){var t=[];if(null!=e){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];t.push({x:r,y:i})}return t}}var i=n(2),a=n(0),o={};o.findEdgeControlPoints=function(e){if(e&&0!==e.length){for(var t,n=this,r=n.cy,o=r.hasCompoundNodes(),s={},l=[],u=[],c=0;c<e.length;c++){var d=e[c],h=d._private,p=h.data,f=d.pstyle("curve-style").value,v="unbundled-bezier"===f||"segments"===f,g="unbundled-bezier"===f||"bezier"===f;if("none"!==d.pstyle("display").value)if("haystack"!==f){var y=p.source,m=p.target;t=y>m?m+"$-$"+y:y+"$-$"+m,v&&(t="unbundled$-$"+p.id);var b=s[t];null==b&&(b=s[t]=[],l.push(t)),b.push(d),v&&(b.hasUnbundled=!0),g&&(b.hasBezier=!0)}else u.push(d)}for(var x,w,E,P,C,S,T,D,k,_,M,I,N=0;N<l.length;N++){t=l[N];var B=s[t];if(B.sort(function(e,t){return e.poolIndex()-t.poolIndex()}),x=B[0]._private.source,w=B[0]._private.target,!B.hasUnbundled&&x.id()>w.id()){var z=x;x=w,w=z}E=x.position(),P=w.position(),C=x.outerWidth(),S=x.outerHeight(),T=w.outerWidth(),D=w.outerHeight(),k=n.nodeShapes[this.getNodeShape(x)],_=n.nodeShapes[this.getNodeShape(w)],I=!1;for(var d,L,A,O={north:0,west:0,south:0,east:0,northwest:0,southwest:0,northeast:0,southeast:0},R=E.x,V=E.y,q=C,F=S,j=P.x,X=P.y,Y=T,W=D,H=B.length,c=0;c<B.length;c++){d=B[c],L=d._private,A=L.rscratch;var Z=A.lastEdgeIndex,$=c,U=A.lastNumEdges,f=d.pstyle("curve-style").value,v="unbundled-bezier"===f||"segments"===f,G=x.id()!==d.source().id(),Q=d.pstyle("control-point-distances"),K=d.pstyle("loop-direction").pfValue,J=d.pstyle("loop-sweep").pfValue,ee=d.pstyle("control-point-weights"),te=Q&&ee?Math.min(Q.value.length,ee.value.length):1,ne=d.pstyle("control-point-step-size").pfValue,re=Q?Q.pfValue[0]:void 0,ie=ee.value[0],ae=d.pstyle("edge-distances").value,oe=d.pstyle("segment-weights"),se=d.pstyle("segment-distances"),le=Math.min(oe.pfValue.length,se.pfValue.length),ue=d.pstyle("source-endpoint").value,ce=d.pstyle("target-endpoint").value,de=d.pstyle("source-arrow-shape").value,he=d.pstyle("target-arrow-shape").value,pe=d.pstyle("arrow-scale").value,fe=d.pstyle("width").pfValue,ve=A.lastSrcCtlPtX,ge=A.lastSrcCtlPtY,ye=A.lastSrcCtlPtW,me=A.lastSrcCtlPtH,be=A.lastTgtCtlPtX,xe=A.lastTgtCtlPtY,we=A.lastTgtCtlPtW,Ee=A.lastTgtCtlPtH,Pe=A.lastCurveStyle,Ce=f,Se=A.lastCtrlptDists,Te=Q?Q.strValue:null,De=A.lastCtrlptWs,ke=ee.strValue,_e=A.lastSegmentWs,Me=oe.strValue,Ie=A.lastSegmentDs,Ne=se.strValue,Be=A.lastStepSize,ze=ne,Le=A.lastLoopDir,Ae=K,Oe=A.lastLoopSwp,Re=J,Ve=A.lastEdgeDistances,qe=ae,Fe=A.lastSrcEndpt,je=ue,Xe=A.lastTgtEndpt,Ye=ce,We=A.lastSrcArr,He=de,Ze=A.lastTgtArr,$e=he,Ue=A.lastLineW,Ge=fe,Qe=A.lastArrScl,Ke=pe;A.badBezier=!!I;var Je;if(ve===R&&ge===V&&ye===q&&me===F&&be===j&&xe===X&&we===Y&&Ee===W&&Pe===Ce&&Se===Te&&De===ke&&_e===Me&&Ie===Ne&&Be===ze&&Le===Ae&&Oe===Re&&Ve===qe&&Fe===je&&Xe===Ye&&We===He&&Ze===$e&&Ue===Ge&&Qe===Ke&&(Z===$&&U===H||v)?Je=!0:(Je=!1,A.lastSrcCtlPtX=R,A.lastSrcCtlPtY=V,A.lastSrcCtlPtW=q,A.lastSrcCtlPtH=F,A.lastTgtCtlPtX=j,A.lastTgtCtlPtY=X,A.lastTgtCtlPtW=Y,A.lastTgtCtlPtH=W,A.lastEdgeIndex=$,A.lastNumEdges=H,A.lastCurveStyle=Ce,A.lastCtrlptDists=Te,A.lastCtrlptWs=ke,A.lastSegmentDs=Ne,A.lastSegmentWs=Me,A.lastStepSize=ze,A.lastLoopDir=Ae,A.lastLoopSwp=Re,A.lastEdgeDistances=qe,A.lastSrcEndpt=je,A.lastTgtEndpt=Ye,A.lastSrcArr=He,A.lastTgtArr=$e,A.lastLineW=Ge,A.lastArrScl=Ke),!Je){if(!B.calculatedIntersection&&x!==w&&(B.hasBezier||B.hasUnbundled)){B.calculatedIntersection=!0;var et=k.intersectLine(E.x,E.y,C,S,P.x,P.y,0);B.srcIntn=et;var tt=_.intersectLine(P.x,P.y,T,D,E.x,E.y,0);B.tgtIntn=tt;var nt={x1:et[0],x2:tt[0],y1:et[1],y2:tt[1]},rt={x1:E.x,x2:P.x,y1:E.y,y2:P.y},it=tt[1]-et[1],at=tt[0]-et[0],ot=Math.sqrt(at*at+it*it),st={x:at,y:it},lt={x:st.x/ot,y:st.y/ot};M={x:-lt.y,y:lt.x},_.checkPoint(et[0],et[1],0,T,D,P.x,P.y)&&k.checkPoint(tt[0],tt[1],0,C,S,E.x,E.y)&&(M={},I=!0)}if(G?(A.srcIntn=B.tgtIntn,A.tgtIntn=B.srcIntn):(A.srcIntn=B.srcIntn,A.tgtIntn=B.tgtIntn),x===w){A.edgeType="self";var ut=c,ct=ne;v&&(ut=0,ct=re);var dt=K-Math.PI/2,ht=dt-J/2,pt=dt+J/2,ft=String(K+"_"+J);ut=void 0===O[ft]?O[ft]=0:++O[ft],A.ctrlpts=[E.x+1.4*Math.cos(ht)*ct*(ut/3+1),E.y+1.4*Math.sin(ht)*ct*(ut/3+1),E.x+1.4*Math.cos(pt)*ct*(ut/3+1),E.y+1.4*Math.sin(pt)*ct*(ut/3+1)]}else if(o&&(x.isParent()||x.isChild()||w.isParent()||w.isChild())&&(x.parents().anySame(w)||w.parents().anySame(x))){A.edgeType="compound",A.badBezier=!1;var ut=c,ct=ne;v&&(ut=0,ct=re);var vt={x:E.x-C/2,y:E.y-S/2},gt={x:P.x-T/2,y:P.y-D/2},yt={x:Math.min(vt.x,gt.x),y:Math.min(vt.y,gt.y)},mt=Math.max(.5,Math.log(.01*C)),bt=Math.max(.5,Math.log(.01*T));A.ctrlpts=[yt.x,yt.y-(1+Math.pow(50,1.12)/100)*ct*(ut/3+1)*mt,yt.x-(1+Math.pow(50,1.12)/100)*ct*(ut/3+1)*bt,yt.y]}else if("segments"===f){A.edgeType="segments",A.segpts=[];for(var xt=0;xt<le;xt++){var wt=oe.pfValue[xt],Et=se.pfValue[xt],Pt=1-wt,Ct=wt,St="node-position"===ae?rt:nt,Tt={x:St.x1*Pt+St.x2*Ct,y:St.y1*Pt+St.y2*Ct};A.segpts.push(Tt.x+M.x*Et,Tt.y+M.y*Et)}}else if(B.length%2!=1||c!==Math.floor(B.length/2)||v){var Dt=v;A.edgeType=Dt?"multibezier":"bezier",A.ctrlpts=[];for(var kt=0;kt<te;kt++){var _t,Mt=(.5-B.length/2+c)*ne,It=i.signum(Mt);Dt&&(re=Q?Q.pfValue[kt]:ne,ie=ee.value[kt]),_t=v?re:void 0!==re?It*re:void 0;var Nt=void 0!==_t?_t:Mt,Pt=1-ie,Ct=ie;if(G){var z=Pt;Pt=Ct,Ct=z}var St="node-position"===ae?rt:nt,Tt={x:St.x1*Pt+St.x2*Ct,y:St.y1*Pt+St.y2*Ct};A.ctrlpts.push(Tt.x+M.x*Nt,Tt.y+M.y*Nt)}}else A.edgeType="straight";this.findEndpoints(d);var Bt=!a.number(A.startX)||!a.number(A.startY),zt=!a.number(A.arrowStartX)||!a.number(A.arrowStartY),Lt=!a.number(A.endX)||!a.number(A.endY),At=!a.number(A.arrowEndX)||!a.number(A.arrowEndY),Ot=this.getArrowWidth(d.pstyle("width").pfValue,d.pstyle("arrow-scale").value)*this.arrowShapeWidth,Rt=3*Ot;if("bezier"===A.edgeType){var Vt=i.dist({x:A.ctrlpts[0],y:A.ctrlpts[1]},{x:A.startX,y:A.startY}),qt=Vt<Rt,Ft=i.dist({x:A.ctrlpts[0],y:A.ctrlpts[1]},{x:A.endX,y:A.endY}),jt=Ft<Rt,Xt=!1;if(Bt||zt||qt){Xt=!0;var Yt={x:A.ctrlpts[0]-E.x,y:A.ctrlpts[1]-E.y},Wt=Math.sqrt(Yt.x*Yt.x+Yt.y*Yt.y),Ht={x:Yt.x/Wt,y:Yt.y/Wt},Zt=Math.max(C,S),$t={x:A.ctrlpts[0]+2*Ht.x*Zt,y:A.ctrlpts[1]+2*Ht.y*Zt},Ut=k.intersectLine(E.x,E.y,C,S,$t.x,$t.y,0);qt?(A.ctrlpts[0]=A.ctrlpts[0]+Ht.x*(Rt-Vt),A.ctrlpts[1]=A.ctrlpts[1]+Ht.y*(Rt-Vt)):(A.ctrlpts[0]=Ut[0]+Ht.x*Rt,A.ctrlpts[1]=Ut[1]+Ht.y*Rt)}if(Lt||At||jt){Xt=!0;var Yt={x:A.ctrlpts[0]-P.x,y:A.ctrlpts[1]-P.y},Wt=Math.sqrt(Yt.x*Yt.x+Yt.y*Yt.y),Ht={x:Yt.x/Wt,y:Yt.y/Wt},Zt=Math.max(C,S),$t={x:A.ctrlpts[0]+2*Ht.x*Zt,y:A.ctrlpts[1]+2*Ht.y*Zt},Gt=_.intersectLine(P.x,P.y,T,D,$t.x,$t.y,0);jt?(A.ctrlpts[0]=A.ctrlpts[0]+Ht.x*(Rt-Ft),A.ctrlpts[1]=A.ctrlpts[1]+Ht.y*(Rt-Ft)):(A.ctrlpts[0]=Gt[0]+Ht.x*Rt,A.ctrlpts[1]=Gt[1]+Ht.y*Rt)}Xt&&this.findEndpoints(d)}if("multibezier"===A.edgeType||"bezier"===A.edgeType||"self"===A.edgeType||"compound"===A.edgeType){A.allpts=[],A.allpts.push(A.startX,A.startY);for(var kt=0;kt+1<A.ctrlpts.length;kt+=2)A.allpts.push(A.ctrlpts[kt],A.ctrlpts[kt+1]),kt+3<A.ctrlpts.length&&A.allpts.push((A.ctrlpts[kt]+A.ctrlpts[kt+2])/2,(A.ctrlpts[kt+1]+A.ctrlpts[kt+3])/2);A.allpts.push(A.endX,A.endY);var Qt,Kt;A.ctrlpts.length/2%2==0?(Qt=A.allpts.length/2-1,A.midX=A.allpts[Qt],A.midY=A.allpts[Qt+1]):(Qt=A.allpts.length/2-3,Kt=.5,A.midX=i.qbezierAt(A.allpts[Qt],A.allpts[Qt+2],A.allpts[Qt+4],Kt),A.midY=i.qbezierAt(A.allpts[Qt+1],A.allpts[Qt+3],A.allpts[Qt+5],Kt))}else if("straight"===A.edgeType)A.allpts=[A.startX,A.startY,A.endX,A.endY],A.midX=(A.startX+A.endX+A.arrowStartX+A.arrowEndX)/4,A.midY=(A.startY+A.endY+A.arrowStartY+A.arrowEndY)/4;else if("segments"===A.edgeType)if(A.allpts=[],A.allpts.push(A.startX,A.startY),A.allpts.push.apply(A.allpts,A.segpts),A.allpts.push(A.endX,A.endY),A.segpts.length%4==0){var Jt=A.segpts.length/2,en=Jt-2;A.midX=(A.segpts[en]+A.segpts[Jt])/2,A.midY=(A.segpts[en+1]+A.segpts[Jt+1])/2}else{var en=A.segpts.length/2-1;A.midX=A.segpts[en],A.midY=A.segpts[en+1]}this.storeEdgeProjections(d),this.calculateArrowAngles(d)}this.recalculateEdgeLabelProjections(d),this.calculateLabelAngles(d)}}for(var c=0;c<u.length;c++){var d=u[c],h=d._private,tn=h.rscratch,A=tn;if(!tn.haystack){var nn=2*Math.random()*Math.PI;tn.source={x:Math.cos(nn),y:Math.sin(nn)};var nn=2*Math.random()*Math.PI;tn.target={x:Math.cos(nn),y:Math.sin(nn)}}var x=h.source,w=h.target,E=x.position(),P=w.position(),C=x.width(),T=w.width(),S=x.height(),D=w.height(),Zt=d.pstyle("haystack-radius").value,rn=Zt/2;A.haystackPts=A.allpts=[A.source.x*C*rn+E.x,A.source.y*S*rn+E.y,A.target.x*T*rn+P.x,A.target.y*D*rn+P.y],A.midX=(A.allpts[0]+A.allpts[2])/2,A.midY=(A.allpts[1]+A.allpts[3])/2,tn.edgeType=tn.lastCurveStyle="haystack",tn.haystack=!0,this.storeEdgeProjections(d),this.calculateArrowAngles(d),this.recalculateEdgeLabelProjections(d),this.calculateLabelAngles(d)}}},o.getSegmentPoints=function(e){var t=e[0]._private.rscratch;if("segments"===t.edgeType)return r(t.segpts)},o.getControlPoints=function(e){var t=e[0]._private.rscratch,n=t.edgeType;if("bezier"===n||"multibezier"===n||"self"===n||"compound"===n)return r(t.ctrlpts)},o.getEdgeMidpoint=function(e){var t=e[0]._private.rscratch;return{x:t.midX,y:t.midY}},e.exports=o},function(e,t,n){"use strict";var r=n(2),i=n(0),a={};a.manualEndptToPx=function(e,t){var n=this,r=e.position(),i=e.outerWidth(),a=e.outerHeight();if(2===t.value.length){var o=[t.pfValue[0],t.pfValue[1]];return"%"===t.units[0]&&(o[0]=o[0]*i),"%"===t.units[1]&&(o[1]=o[1]*a),o[0]+=r.x,o[1]+=r.y,o}var s=t.pfValue[0];s=-Math.PI/2+s;var l=2*Math.max(i,a),u=[r.x+Math.cos(s)*l,r.y+Math.sin(s)*l];return n.nodeShapes[this.getNodeShape(e)].intersectLine(r.x,r.y,i,a,u[0],u[1],0)},a.findEndpoints=function(e){var t=this,n=void 0,a=e.source()[0],o=e.target()[0],s=a.position(),l=o.position(),u=e.pstyle("target-arrow-shape").value,c=e.pstyle("source-arrow-shape").value,d=e.pstyle("target-distance-from-node").pfValue,h=e.pstyle("source-distance-from-node").pfValue,p=e._private.rscratch,f=p.edgeType,v="self"===f||"compound"===f,g="bezier"===f||"multibezier"===f||v,y="bezier"!==f,m="straight"===f||"segments"===f,b="segments"===f,x=g||y||m,w=e.pstyle("source-endpoint"),E=v?"outside-to-node":w.value,P=e.pstyle("target-endpoint"),C=v?"outside-to-node":P.value;p.srcManEndpt=w,p.tgtManEndpt=P;var S=void 0,T=void 0,D=void 0,k=void 0;if(g){var _=[p.ctrlpts[0],p.ctrlpts[1]];S=y?[p.ctrlpts[p.ctrlpts.length-2],p.ctrlpts[p.ctrlpts.length-1]]:_,T=_}else if(m){var M=b?p.segpts.slice(0,2):[l.x,l.y],I=b?p.segpts.slice(p.segpts.length-2):[s.x,s.y];S=I,T=M}"inside-to-node"===C?n=[l.x,l.y]:P.units?n=this.manualEndptToPx(o,P):"outside-to-line"===C?n=p.tgtIntn:("outside-to-node"===C?D=S:"outside-to-line"===C&&(D=[s.x,s.y]),n=t.nodeShapes[this.getNodeShape(o)].intersectLine(l.x,l.y,o.outerWidth(),o.outerHeight(),D[0],D[1],0));var N=r.shortenIntersection(n,S,t.arrowShapes[u].spacing(e)+d),B=r.shortenIntersection(n,S,t.arrowShapes[u].gap(e)+d);p.endX=B[0],p.endY=B[1],p.arrowEndX=N[0],p.arrowEndY=N[1],"inside-to-node"===E?n=[s.x,s.y]:w.units?n=this.manualEndptToPx(a,w):"outside-to-line"===E?n=p.srcIntn:("outside-to-node"===E?k=T:"outside-to-line"===E&&(k=[l.x,l.y]),n=t.nodeShapes[this.getNodeShape(a)].intersectLine(s.x,s.y,a.outerWidth(),a.outerHeight(),k[0],k[1],0));var z=r.shortenIntersection(n,T,t.arrowShapes[c].spacing(e)+h),L=r.shortenIntersection(n,T,t.arrowShapes[c].gap(e)+h);p.startX=L[0],p.startY=L[1],p.arrowStartX=z[0],p.arrowStartY=z[1],x&&(i.number(p.startX)&&i.number(p.startY)&&i.number(p.endX)&&i.number(p.endY)?p.badLine=!1:p.badLine=!0)},a.getSourceEndpoint=function(e){var t=e[0]._private.rscratch;switch(t.edgeType){case"haystack":return{x:t.haystackPts[0],y:t.haystackPts[1]};default:return{x:t.arrowStartX,y:t.arrowStartY}}},a.getTargetEndpoint=function(e){var t=e[0]._private.rscratch;switch(t.edgeType){case"haystack":return{x:t.haystackPts[2],y:t.haystackPts[3]};default:return{x:t.arrowEndX,y:t.arrowEndY}}},e.exports=a},function(e,t,n){"use strict";function r(e,t,n){for(var r=function(e,t,n,r){return i.qbezierAt(e,t,n,r)},a=t._private,o=a.rstyle.bezierPts,s=0;s<e.bezierProjPcts.length;s++){var l=e.bezierProjPcts[s];o.push({x:r(n[0],n[2],n[4],l),y:r(n[1],n[3],n[5],l)})}}var i=n(2),a={};a.storeEdgeProjections=function(e){var t=e._private,n=t.rscratch,i=n.edgeType;if(t.rstyle.bezierPts=null,t.rstyle.linePts=null,t.rstyle.haystackPts=null,"multibezier"===i||"bezier"===i||"self"===i||"compound"===i)for(var a=(t.rstyle.bezierPts=[],0);a+5<n.allpts.length;a+=4)r(this,e,n.allpts.slice(a,a+6));else if("segments"===i)for(var o=t.rstyle.linePts=[],a=0;a+1<n.allpts.length;a+=2)o.push({x:n.allpts[a],y:n.allpts[a+1]});else if("haystack"===i){var s=n.haystackPts;t.rstyle.haystackPts=[{x:s[0],y:s[1]},{x:s[2],y:s[3]}]}t.rstyle.arrowWidth=this.getArrowWidth(e.pstyle("width").pfValue,e.pstyle("arrow-scale").value)*this.arrowShapeWidth},a.recalculateEdgeProjections=function(e){this.findEdgeControlPoints(e)},e.exports=a},function(e,t,n){"use strict";var r=n(2),i=n(0),a=n(1),o={};o.recalculateNodeLabelProjection=function(e){var t=e.pstyle("label").strValue;if(!i.emptyString(t)){var n,r,a=e._private,o=e.width(),s=e.height(),l=e.padding(),u=e.position(),c=e.pstyle("text-halign").strValue,d=e.pstyle("text-valign").strValue,h=a.rscratch,p=a.rstyle;switch(c){case"left":n=u.x-o/2-l;break;case"right":n=u.x+o/2+l;break;default:n=u.x}switch(d){case"top":r=u.y-s/2-l;break;case"bottom":r=u.y+s/2+l;break;default:r=u.y}h.labelX=n,h.labelY=r,p.labelX=n,p.labelY=r,this.applyLabelDimensions(e)}},o.recalculateEdgeLabelProjections=function(e){var t,n=e._private,i=n.rscratch,o=this,s={mid:e.pstyle("label").strValue,source:e.pstyle("source-label").strValue,target:e.pstyle("target-label").strValue};if(s.mid||s.source||s.target){t={x:i.midX,y:i.midY};var l=function(e,t,r){a.setPrefixedProperty(n.rscratch,e,t,r),a.setPrefixedProperty(n.rstyle,e,t,r)};l("labelX",null,t.x),l("labelY",null,t.y);var u=function e(){function t(e,t,n,i,a){var o=r.dist(t,n),s=e.segments[e.segments.length-1],l={p0:t,p1:n,t0:i,t1:a,startDist:s?s.startDist+s.length:0,length:o};e.segments.push(l),e.length+=o}if(e.cache)return e.cache;for(var a=[],s=0;s+5<i.allpts.length;s+=4){var l={x:i.allpts[s],y:i.allpts[s+1]},u={x:i.allpts[s+2],y:i.allpts[s+3]},c={x:i.allpts[s+4],y:i.allpts[s+5]};a.push({p0:l,p1:u,p2:c,startDist:0,length:0,segments:[]})}for(var d=n.rstyle.bezierPts,h=o.bezierProjPcts.length,s=0;s<a.length;s++){var p=a[s],f=a[s-1];f&&(p.startDist=f.startDist+f.length),t(p,p.p0,d[s*h],0,o.bezierProjPcts[0]);for(var v=0;v<h-1;v++)t(p,d[s*h+v],d[s*h+v+1],o.bezierProjPcts[v],o.bezierProjPcts[v+1]);t(p,d[s*h+h-1],p.p2,o.bezierProjPcts[h-1],1)}return e.cache=a},c=function(n){var a,o="source"===n;if(s[n]){var c=e.pstyle(n+"-text-offset").pfValue,d=function(e,t){var n=t.x-e.x,r=t.y-e.y;return Math.atan(r/n)};switch(i.edgeType){case"self":case"compound":case"bezier":case"multibezier":for(var h,p=u(),f=0,v=0,g=0;g<p.length;g++){for(var y=p[o?g:p.length-1-g],m=0;m<y.segments.length;m++){var b=y.segments[o?m:y.segments.length-1-m],x=g===p.length-1&&m===y.segments.length-1;if(f=v,(v+=b.length)>=c||x){h={cp:y,segment:b};break}}if(h)break}var y=h.cp,b=h.segment,w=(c-f)/b.length,E=b.t1-b.t0,P=o?b.t0+E*w:b.t1-E*w;P=r.bound(0,P,1),t=r.qbezierPtAt(y.p0,y.p1,y.p2,P),a=function(e,t,n,i){var a=r.bound(0,i-.001,1),o=r.bound(0,i+.001,1),s=r.qbezierPtAt(e,t,n,a),l=r.qbezierPtAt(e,t,n,o);return d(s,l)}(y.p0,y.p1,y.p2,P);break;case"straight":case"segments":case"haystack":for(var C,S,T,D,k=0,_=i.allpts.length,g=0;g+3<_&&(o?(T={x:i.allpts[g],y:i.allpts[g+1]},D={x:i.allpts[g+2],y:i.allpts[g+3]}):(T={x:i.allpts[_-2-g],y:i.allpts[_-1-g]},D={x:i.allpts[_-4-g],y:i.allpts[_-3-g]}),C=r.dist(T,D),S=k,!((k+=C)>=c));g+=2);var M=c-S,P=M/C;P=r.bound(0,P,1),t=r.lineAt(T,D,P),a=d(T,D)}l("labelX",n,t.x),l("labelY",n,t.y),l("labelAutoAngle",n,a)}};c("source"),c("target"),this.applyLabelDimensions(e)}},o.applyLabelDimensions=function(e){this.applyPrefixedLabelDimensions(e),e.isEdge()&&(this.applyPrefixedLabelDimensions(e,"source"),this.applyPrefixedLabelDimensions(e,"target"))},o.applyPrefixedLabelDimensions=function(e,t){var n=e._private,r=this.getLabelText(e,t),i=this.calculateLabelDimensions(e,r);a.setPrefixedProperty(n.rstyle,"labelWidth",t,i.width),a.setPrefixedProperty(n.rscratch,"labelWidth",t,i.width),a.setPrefixedProperty(n.rstyle,"labelHeight",t,i.height),a.setPrefixedProperty(n.rscratch,"labelHeight",t,i.height)},o.getLabelText=function(e,t){var n=e._private,r=t?t+"-":"",i=e.pstyle(r+"label").strValue,o=e.pstyle("text-transform").value,s=function(e,r){return r?(a.setPrefixedProperty(n.rscratch,e,t,r),r):a.getPrefixedProperty(n.rscratch,e,t)};"none"==o||("uppercase"==o?i=i.toUpperCase():"lowercase"==o&&(i=i.toLowerCase()));var l=e.pstyle("text-wrap").value;if("wrap"===l){var u=s("labelKey");if(u&&s("labelWrapKey")===u)return s("labelWrapCachedText");for(var c=i.split("\n"),d=e.pstyle("text-max-width").pfValue,h=[],p=0;p<c.length;p++){var f=c[p];if(this.calculateLabelDimensions(e,f,"line="+f).width>d){for(var v=f.split(/\s+/),g="",y=0;y<v.length;y++){var m=v[y],b=0===g.length?m:g+" "+m;this.calculateLabelDimensions(e,b,"testLine="+b).width<=d?g+=m+" ":(h.push(g),g=m+" ")}g.match(/^\s+$/)||h.push(g)}else h.push(f)}s("labelWrapCachedLines",h),i=s("labelWrapCachedText",h.join("\n")),s("labelWrapKey",u)}else if("ellipsis"===l){for(var d=e.pstyle("text-max-width").pfValue,x="",w=!1,E=0;E<i.length;E++){var P=this.calculateLabelDimensions(e,x+i[E]+"…").width;if(P>d)break;x+=i[E],E===i.length-1&&(w=!0)}return w||(x+="…"),x}return i},o.calculateLabelDimensions=function(e,t,n){var r=this,i=e._private.labelStyleKey+"$@$"+t;n&&(i+="$@$"+n);var a=r.labelDimCache||(r.labelDimCache={});if(a[i])return a[i];var o=e.pstyle("font-style").strValue,s=1*e.pstyle("font-size").pfValue+"px",l=e.pstyle("font-family").strValue,u=e.pstyle("font-weight").strValue,c=this.labelCalcDiv;c||(c=this.labelCalcDiv=document.createElement("div"),document.body.appendChild(c));var d=c.style;return d.fontFamily=l,d.fontStyle=o,d.fontSize=s,d.fontWeight=u,d.position="absolute",d.left="-9999px",d.top="-9999px",d.zIndex="-1",d.visibility="hidden",d.pointerEvents="none",d.padding="0",d.lineHeight="1","wrap"===e.pstyle("text-wrap").value?d.whiteSpace="pre":d.whiteSpace="normal",c.textContent=t,a[i]={width:Math.ceil(c.clientWidth/1),height:Math.ceil(c.clientHeight/1)},a[i]},o.calculateLabelAngles=function(e){var t=e._private,n=t.rscratch,r=e.isEdge(),i=e.pstyle("text-rotation"),a=i.strValue;"none"===a?n.labelAngle=n.sourceLabelAngle=n.targetLabelAngle=0:r&&"autorotate"===a?(n.labelAngle=Math.atan(n.midDispY/n.midDispX),n.sourceLabelAngle=n.sourceLabelAutoAngle,n.targetLabelAngle=n.targetLabelAutoAngle):n.labelAngle=n.sourceLabelAngle=n.targetLabelAngle="autorotate"===a?0:i.pfValue},e.exports=o},function(e,t,n){"use strict";var r={};r.getNodeShape=function(e){var t=this,n=e.pstyle("shape").value;if(e.isParent())return"rectangle"===n||"roundrectangle"===n||"cutrectangle"===n||"barrel"===n?n:"rectangle";if("polygon"===n){var r=e.pstyle("shape-polygon-points").value;return t.nodeShapes.makePolygon(r).name}return n},e.exports=r},function(e,t,n){"use strict";var r={};r.registerCalculationListeners=function(){var e=this.cy,t=e.collection(),n=this,r=function(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t.merge(e);for(var i=0;i<e.length;i++){var a=e[i],o=a._private,s=o.rstyle;r&&(s.clean=!1,o.bbCache=null);var l=s.dirtyEvents=s.dirtyEvents||{length:0};l[n.type]||(l[n.type]=!0,l.length++)}};n.binder(e).on("position.* style.* free.* bounds.*","node",function(e){var t=e.target;r(t,e),r(t.connectedEdges(),e)}).on("add.*","node",function(e){var t=e.target;r(t,e)}).on("background.*","node",function(e){var t=e.target;r(t,e,!1)}).on("add.* style.*","edge",function(e){var t=e.target;r(t,e),r(t.parallelEdges(),e)}).on("remove.*","edge",function(e){for(var t=e.target,n=t.parallelEdges(),i=0;i<n.length;i++){var a=n[i];a.removed()||r(a,e)}}).on("dirty.*","node",function(e){var t=e.target;r(t,e)});var i=function(r){if(r){var i=n.onUpdateEleCalcsFns;if(i)for(var a=0;a<i.length;a++){var o=i[a];o(r,t)}n.recalculateRenderedStyle(t,!1);for(var a=0;a<t.length;a++)t[a]._private.rstyle.dirtyEvents=null;t=e.collection()}};n.beforeRender(i,n.beforeRenderPriorities.eleCalcs)},r.onUpdateEleCalcs=function(e){(this.onUpdateEleCalcsFns=this.onUpdateEleCalcsFns||[]).push(e)},r.recalculateRenderedStyle=function(e,t){var n=[],r=[];if(!this.destroyed){void 0===t&&(t=!0);for(var i=0;i<e.length;i++){var a=e[i],o=a._private,s=o.rstyle;t&&s.clean||a.removed()||"none"!==a.pstyle("display").value&&("nodes"===o.group?r.push(a):n.push(a),s.clean=!0)}for(var i=0;i<r.length;i++){var a=r[i],o=a._private,s=o.rstyle,l=a.position();this.recalculateNodeLabelProjection(a),s.nodeX=l.x,s.nodeY=l.y,s.nodeW=a.pstyle("width").pfValue,s.nodeH=a.pstyle("height").pfValue}this.recalculateEdgeProjections(n);for(var i=0;i<n.length;i++){var a=n[i],o=a._private,s=o.rstyle,u=o.rscratch;this.recalculateEdgeLabelProjections(a),s.srcX=u.arrowStartX,s.srcY=u.arrowStartY,s.tgtX=u.arrowEndX,s.tgtY=u.arrowEndY,s.midX=u.midX,s.midY=u.midY,s.labelAngle=u.labelAngle,s.sourceLabelAngle=u.sourceLabelAngle,s.targetLabelAngle=u.targetLabelAngle}}},e.exports=r},function(e,t,n){"use strict";var r=n(17),i={};i.updateCachedGrabbedEles=function(){var e=this.cachedZSortedEles;if(e){e.drag=[],e.nondrag=[];for(var t=[],n=0;n<e.length;n++){var r=e[n],i=r._private.rscratch;r.grabbed()&&!r.isParent()?t.push(r):i.inDragLayer?e.drag.push(r):e.nondrag.push(r)}for(var n=0;n<t.length;n++){var r=t[n];e.drag.push(r)}}},i.invalidateCachedZSortedEles=function(){this.cachedZSortedEles=null},i.getCachedZSortedEles=function(e){if(e||!this.cachedZSortedEles){var t=this.cy.mutableElements().toArray();t.sort(r),t.interactive=t.filter(function(e){return e.interactive()}),this.cachedZSortedEles=t,this.updateCachedGrabbedEles()}else t=this.cachedZSortedEles;return t},e.exports=i},function(e,t,n){"use strict";var r={};r.getCachedImage=function(e,t,n){var r=this,i=r.imageCache=r.imageCache||{},a=i[e];if(a)return a.image.complete||a.image.addEventListener("load",n),a.image;a=i[e]=i[e]||{};var o=a.image=new Image;o.addEventListener("load",n),o.addEventListener("error",function(){o.error=!0});return"data:"===e.substring(0,"data:".length).toLowerCase()||(o.crossOrigin=t),o.src=e,o},e.exports=r},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(2),o=(n(16),{});o.registerBinding=function(e,t,n,r){var i=Array.prototype.slice.apply(arguments,[1]),a=this.binder(e);return a.on.apply(a,i)},o.binder=function(e){var t=this,n=e===window||e===document||e===document.body||r.domElement(e);if(null==t.supportsPassiveEvents){var i=!1;try{var a=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,a)}catch(e){}t.supportsPassiveEvents=i}var o=function(r,i,a){var o=Array.prototype.slice.call(arguments);return n&&t.supportsPassiveEvents&&(o[2]={capture:null!=a&&a,passive:!1,once:!1}),t.bindings.push({target:e,args:o}),(e.addEventListener||e.on).apply(e,o),this};return{on:o,addEventListener:o,addListener:o,bind:o}},o.nodeIsDraggable=function(e){return e&&e.isNode()&&!e.locked()&&e.grabbable()},o.nodeIsGrabbable=function(e){return this.nodeIsDraggable(e)&&e.interactive()},o.load=function(){var e=this,t=function(t,n,r,a){null==t&&(t=e.cy);for(var o=0;o<n.length;o++){var s=n[o];t.emit(i.extend({originalEvent:r,type:s},a))}},n=function(e){return e.shiftKey||e.metaKey||e.ctrlKey},o=function(t,n){var r=!0;if(e.cy.hasCompoundNodes()&&t&&t.isEdge())for(var i=0;n&&i<n.length;i++){var t=n[i];if(t.isNode()&&t.isParent()){r=!1;break}}else r=!0;return r},s=function(t){var n;if(t.addToList&&e.cy.hasCompoundNodes()){if(!t.addToList.hasId){t.addToList.hasId={};for(var r=0;r<t.addToList.length;r++){var i=t.addToList[r];t.addToList.hasId[i.id()]=!0}}n=t.addToList.hasId}return n||{}},l=function(e){e[0]._private.grabbed=!0},u=function(e){e[0]._private.grabbed=!1},c=function(e){e[0]._private.rscratch.inDragLayer=!0},d=function(e){e[0]._private.rscratch.inDragLayer=!1},h=function(e){e[0]._private.rscratch.isGrabTarget=!0},p=function(e){e[0]._private.rscratch.isGrabTarget=!1},f=function(e,t){var n=s(t);n[e.id()]||(t.addToList.push(e),n[e.id()]=!0,l(e))},v=function(e,t){if(e.cy().hasCompoundNodes()&&(null!=t.inDragLayer||null!=t.addToList)){var n=e.descendants();t.inDragLayer&&(n.forEach(c),n.connectedEdges().forEach(c)),t.addToList&&n.forEach(function(e){f(e,t)})}},g=function(t,n){n=n||{};var r=t.cy().hasCompoundNodes();n.inDragLayer&&(t.forEach(c),t.neighborhood().stdFilter(function(e){return!r||e.isEdge()}).forEach(c)),n.addToList&&t.forEach(function(e){f(e,n)}),v(t,n),b(t,{inDragLayer:n.inDragLayer}),e.updateCachedGrabbedEles()},y=g,m=function(t){t&&(t.hasId={},e.getCachedZSortedEles().forEach(function(e){u(e),d(e),p(e)}),e.updateCachedGrabbedEles())},b=function(e,t){if((null!=t.inDragLayer||null!=t.addToList)&&e.cy().hasCompoundNodes()){var n=e.ancestors().orphans();if(!n.same(e)){var r=n.descendants().spawnSelf().merge(n).unmerge(e).unmerge(e.descendants()),i=r.connectedEdges();t.inDragLayer&&(i.forEach(c),r.forEach(c)),t.addToList&&r.forEach(function(e){f(e,t)})}}},x="undefined"!=typeof MutationObserver;x?(e.removeObserver=new MutationObserver(function(t){for(var n=0;n<t.length;n++){var r=t[n],i=r.removedNodes;if(i)for(var a=0;a<i.length;a++){var o=i[a];if(o===e.container){e.destroy();break}}}}),e.container.parentNode&&e.removeObserver.observe(e.container.parentNode,{childList:!0})):e.registerBinding(e.container,"DOMNodeRemoved",function(t){e.destroy()});var w=i.debounce(function(){e.cy.resize()},100);x&&(e.styleObserver=new MutationObserver(w),e.styleObserver.observe(e.container,{attributes:!0})),e.registerBinding(window,"resize",w);var E=function(){e.invalidateContainerClientCoordsCache()};!function(e,t){for(;null!=e;)t(e),e=e.parentNode}(e.container,function(t){e.registerBinding(t,"transitionend",E),e.registerBinding(t,"animationend",E),e.registerBinding(t,"scroll",E)}),e.registerBinding(e.container,"contextmenu",function(e){e.preventDefault()});var P=function(){return 0!==e.selection[4]},C=function(t){for(var n=e.findContainerClientCoords(),r=n[0],i=n[1],a=n[2],o=n[3],s=t.touches?t.touches:[t],l=!1,u=0;u<s.length;u++){var c=s[u];if(r<=c.clientX&&c.clientX<=r+a&&i<=c.clientY&&c.clientY<=i+o){l=!0;break}}if(!l)return!1;for(var d=e.container,h=t.target,p=h.parentNode,f=!1;p;){if(p===d){f=!0;break}p=p.parentNode}return!!f};e.registerBinding(e.container,"mousedown",function(n){if(C(n)){n.preventDefault(),e.hoverData.capture=!0,e.hoverData.which=n.which;var r=e.cy,i=[n.clientX,n.clientY],a=e.projectIntoViewport(i[0],i[1]),o=e.selection,s=e.findNearestElements(a[0],a[1],!0,!1),l=s[0],u=e.dragData.possibleDragElements;e.hoverData.mdownPos=a,e.hoverData.mdownGPos=i;if(3==n.which){e.hoverData.cxtStarted=!0;var c={originalEvent:n,type:"cxttapstart",position:{x:a[0],y:a[1]}};l?(l.activate(),l.emit(c),e.hoverData.down=l):r.emit(c),e.hoverData.downTime=(new Date).getTime(),e.hoverData.cxtDragged=!1}else if(1==n.which){if(l&&l.activate(),null!=l&&e.nodeIsGrabbable(l)){var d=function(e){return{originalEvent:n,type:e,position:{x:a[0],y:a[1]}}},p=function(e){e.emit(d("grab"))};if(h(l),l.selected()){u=e.dragData.possibleDragElements=[];var f=r.$(function(t){return t.isNode()&&t.selected()&&e.nodeIsGrabbable(t)});g(f,{addToList:u}),l.emit(d("grabon")),f.forEach(p)}else u=e.dragData.possibleDragElements=[],y(l,{addToList:u}),l.emit(d("grabon")).emit(d("grab"));e.redrawHint("eles",!0),e.redrawHint("drag",!0)}e.hoverData.down=l,e.hoverData.downs=s,e.hoverData.downTime=(new Date).getTime(),t(l,["mousedown","tapstart","vmousedown"],n,{position:{x:a[0],y:a[1]}}),null==l?(o[4]=1,e.data.bgActivePosistion={x:a[0],y:a[1]},e.redrawHint("select",!0),e.redraw()):l.isEdge()&&(o[4]=1),function(){e.hoverData.tapholdCancelled=!1,clearTimeout(e.hoverData.tapholdTimeout),e.hoverData.tapholdTimeout=setTimeout(function(){if(!e.hoverData.tapholdCancelled){var t=e.hoverData.down;t?t.emit({originalEvent:n,type:"taphold",position:{x:a[0],y:a[1]}}):r.emit({originalEvent:n,type:"taphold",position:{x:a[0],y:a[1]}})}},e.tapholdDuration)}()}o[0]=o[2]=a[0],o[1]=o[3]=a[1]}},!1),e.registerBinding(window,"mousemove",function(i){if(e.hoverData.capture||C(i)){var s=!1,l=e.cy,u=l.zoom(),c=[i.clientX,i.clientY],d=e.projectIntoViewport(c[0],c[1]),h=e.hoverData.mdownPos,p=e.hoverData.mdownGPos,f=e.selection,v=null;e.hoverData.draggingEles||e.hoverData.dragging||e.hoverData.selecting||(v=e.findNearestElement(d[0],d[1],!0,!1));var y,b=e.hoverData.last,x=e.hoverData.down,w=[d[0]-f[2],d[1]-f[3]],E=e.dragData.possibleDragElements;if(p){var P=c[0]-p[0],S=P*P,T=c[1]-p[1],D=T*T,k=S+D;e.hoverData.isOverThresholdDrag=y=k>=e.desktopTapThreshold2}var _=n(i);y&&(e.hoverData.tapholdCancelled=!0),s=!0,t(v,["mousemove","vmousemove","tapdrag"],i,{position:{x:d[0],y:d[1]}});var M=function(){e.data.bgActivePosistion=void 0,e.hoverData.selecting||l.emit("boxstart"),f[4]=1,e.hoverData.selecting=!0,e.redrawHint("select",!0),e.redraw()};if(3===e.hoverData.which){if(y){var I={originalEvent:i,type:"cxtdrag",position:{x:d[0],y:d[1]}};x?x.emit(I):l.emit(I),e.hoverData.cxtDragged=!0,e.hoverData.cxtOver&&v===e.hoverData.cxtOver||(e.hoverData.cxtOver&&e.hoverData.cxtOver.emit({originalEvent:i,type:"cxtdragout",position:{x:d[0],y:d[1]}}),e.hoverData.cxtOver=v,v&&v.emit({originalEvent:i,type:"cxtdragover",position:{x:d[0],y:d[1]}}))}}else if(e.hoverData.dragging){if(s=!0,l.panningEnabled()&&l.userPanningEnabled()){var N;if(e.hoverData.justStartedPan){var B=e.hoverData.mdownPos;N={x:(d[0]-B[0])*u,y:(d[1]-B[1])*u},e.hoverData.justStartedPan=!1}else N={x:w[0]*u,y:w[1]*u};l.panBy(N),e.hoverData.dragged=!0}d=e.projectIntoViewport(i.clientX,i.clientY)}else if(1!=f[4]||null!=x&&!x.isEdge()){if(x&&x.isEdge()&&x.active()&&x.unactivate(),x&&x.grabbed()||v==b||(b&&t(b,["mouseout","tapdragout"],i,{position:{x:d[0],y:d[1]}}),v&&t(v,["mouseover","tapdragover"],i,{position:{x:d[0],y:d[1]}}),e.hoverData.last=v),x)if(y){if(l.boxSelectionEnabled()&&_)x&&x.grabbed()&&(m(E),x.emit("free")),M();else if(x&&x.grabbed()&&e.nodeIsDraggable(x)){var z=!e.dragData.didDrag;z&&e.redrawHint("eles",!0),e.dragData.didDrag=!0;var L=[];e.hoverData.draggingEles||g(l.collection(E),{inDragLayer:!0});for(var A=0;A<E.length;A++){var O=E[A];if(e.nodeIsDraggable(O)&&O.grabbed()){var R=O.position();if(L.push(O),r.number(w[0])&&r.number(w[1])&&(R.x+=w[0],R.y+=w[1],z)){var V=e.hoverData.dragDelta;V&&r.number(V[0])&&r.number(V[1])&&(R.x+=V[0],R.y+=V[1])}}}e.hoverData.draggingEles=!0;var q=l.collection(L);q.dirtyCompoundBoundsCache(),q.emit("position drag"),e.redrawHint("drag",!0),e.redraw()}}else!function(){var t=e.hoverData.dragDelta=e.hoverData.dragDelta||[];0===t.length?(t.push(w[0]),t.push(w[1])):(t[0]+=w[0],t[1]+=w[1])}();s=!0}else if(y){if(e.hoverData.dragging||!l.boxSelectionEnabled()||!_&&l.panningEnabled()&&l.userPanningEnabled()){if(!e.hoverData.selecting&&l.panningEnabled()&&l.userPanningEnabled()){var F=o(x,e.hoverData.downs);F&&(e.hoverData.dragging=!0,e.hoverData.justStartedPan=!0,f[4]=0,e.data.bgActivePosistion=a.array2point(h),e.redrawHint("select",!0),e.redraw())}}else M();x&&x.isEdge()&&x.active()&&x.unactivate()}return f[2]=d[0],f[3]=d[1],s?(i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault(),!1):void 0}},!1),e.registerBinding(window,"mouseup",function(r){if(e.hoverData.capture){e.hoverData.capture=!1;var i=e.cy,a=e.projectIntoViewport(r.clientX,r.clientY),o=e.selection,s=e.findNearestElement(a[0],a[1],!0,!1),l=e.dragData.possibleDragElements,u=e.hoverData.down,c=n(r);if(e.data.bgActivePosistion&&(e.redrawHint("select",!0),e.redraw()),e.hoverData.tapholdCancelled=!0,e.data.bgActivePosistion=void 0,u&&u.unactivate(),3===e.hoverData.which){var d={originalEvent:r,type:"cxttapend",position:{x:a[0],y:a[1]}};if(u?u.emit(d):i.emit(d),!e.hoverData.cxtDragged){var h={originalEvent:r,type:"cxttap",position:{x:a[0],y:a[1]}};u?u.emit(h):i.emit(h)}e.hoverData.cxtDragged=!1,e.hoverData.which=null}else if(1===e.hoverData.which){if(null!=u||e.dragData.didDrag||e.hoverData.selecting||e.hoverData.dragged||n(r)||(i.$(function(e){return e.selected()}).unselect(),l.length>0&&e.redrawHint("eles",!0),e.dragData.possibleDragElements=l=[]),t(s,["mouseup","tapend","vmouseup"],r,{position:{x:a[0],y:a[1]}}),e.dragData.didDrag||e.hoverData.dragged||e.hoverData.selecting||e.hoverData.isOverThresholdDrag||t(u,["click","tap","vclick"],r,{position:{x:a[0],y:a[1]}}),s!=u||e.dragData.didDrag||e.hoverData.selecting||null!=s&&s._private.selectable&&(e.hoverData.dragging||("additive"===i.selectionType()||c?s.selected()?s.unselect():s.select():c||(i.$(":selected").unmerge(s).unselect(),s.select())),e.redrawHint("eles",!0)),e.hoverData.selecting){var p=i.collection(e.getAllInBox(o[0],o[1],o[2],o[3]));e.redrawHint("select",!0),p.length>0&&e.redrawHint("eles",!0),i.emit("boxend");var f=function(e){return e.selectable()&&!e.selected()};"additive"===i.selectionType()?p.emit("box").stdFilter(f).select().emit("boxselect"):(c||i.$(":selected").unmerge(p).unselect(),p.emit("box").stdFilter(f).select().emit("boxselect")),e.redraw()}if(e.hoverData.dragging&&(e.hoverData.dragging=!1,e.redrawHint("select",!0),e.redrawHint("eles",!0),e.redraw()),!o[4]){e.redrawHint("drag",!0),e.redrawHint("eles",!0);var v=u&&u.grabbed();m(l),v&&u.emit("free")}}o[4]=0,e.hoverData.down=null,e.hoverData.cxtStarted=!1,e.hoverData.draggingEles=!1,e.hoverData.selecting=!1,e.hoverData.isOverThresholdDrag=!1,e.dragData.didDrag=!1,e.hoverData.dragged=!1,e.hoverData.dragDelta=[],e.hoverData.mdownPos=null,e.hoverData.mdownGPos=null}},!1);var S=function(t){if(!e.scrollingPage){var n=e.cy,r=e.projectIntoViewport(t.clientX,t.clientY),i=[r[0]*n.zoom()+n.pan().x,r[1]*n.zoom()+n.pan().y];if(e.hoverData.draggingEles||e.hoverData.dragging||e.hoverData.cxtStarted||P())return void t.preventDefault();if(n.panningEnabled()&&n.userPanningEnabled()&&n.zoomingEnabled()&&n.userZoomingEnabled()){t.preventDefault(),e.data.wheelZooming=!0,clearTimeout(e.data.wheelTimeout),e.data.wheelTimeout=setTimeout(function(){e.data.wheelZooming=!1,e.redrawHint("eles",!0),e.redraw()},150);var a;a=null!=t.deltaY?t.deltaY/-250:null!=t.wheelDeltaY?t.wheelDeltaY/1e3:t.wheelDelta/1e3,a*=e.wheelSensitivity;1===t.deltaMode&&(a*=33),n.zoom({level:n.zoom()*Math.pow(10,a),renderedPosition:{x:i[0],y:i[1]}})}}};e.registerBinding(e.container,"wheel",S,!0),e.registerBinding(window,"scroll",function(t){e.scrollingPage=!0,clearTimeout(e.scrollingPageTimeout),e.scrollingPageTimeout=setTimeout(function(){e.scrollingPage=!1},250)},!0),e.registerBinding(e.container,"mouseout",function(t){var n=e.projectIntoViewport(t.clientX,t.clientY);e.cy.emit({originalEvent:t,type:"mouseout",position:{x:n[0],y:n[1]}})},!1),e.registerBinding(e.container,"mouseover",function(t){var n=e.projectIntoViewport(t.clientX,t.clientY);e.cy.emit({originalEvent:t,type:"mouseover",position:{x:n[0],y:n[1]}})},!1);var T,D,k,_,M,I,N,B,z,L,A,O,R,V,q=function(e,t,n,r){return Math.sqrt((n-e)*(n-e)+(r-t)*(r-t))},F=function(e,t,n,r){return(n-e)*(n-e)+(r-t)*(r-t)};e.registerBinding(e.container,"touchstart",V=function(n){if(C(n)){e.touchData.capture=!0,e.data.bgActivePosistion=void 0;var r=e.cy,i=e.touchData.now,a=e.touchData.earlier;if(n.touches[0]){var o=e.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);i[0]=o[0],i[1]=o[1]}if(n.touches[1]){var o=e.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);i[2]=o[0],i[3]=o[1]}if(n.touches[2]){var o=e.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);i[4]=o[0],i[5]=o[1]}if(n.touches[1]){m(e.dragData.touchDragEles);var s=e.findContainerClientCoords();z=s[0],L=s[1],A=s[2],O=s[3],T=n.touches[0].clientX-z,D=n.touches[0].clientY-L,k=n.touches[1].clientX-z,_=n.touches[1].clientY-L,R=0<=T&&T<=A&&0<=k&&k<=A&&0<=D&&D<=O&&0<=_&&_<=O;var l=r.pan(),u=r.zoom();M=q(T,D,k,_),I=F(T,D,k,_),N=[(T+k)/2,(D+_)/2],B=[(N[0]-l.x)/u,(N[1]-l.y)/u];if(I<4e4&&!n.touches[2]){var c=e.findNearestElement(i[0],i[1],!0,!0),d=e.findNearestElement(i[2],i[3],!0,!0);return c&&c.isNode()?(c.activate().emit({originalEvent:n,type:"cxttapstart",position:{x:i[0],y:i[1]}}),e.touchData.start=c):d&&d.isNode()?(d.activate().emit({originalEvent:n,type:"cxttapstart",position:{x:i[0],y:i[1]}}),e.touchData.start=d):r.emit({originalEvent:n,type:"cxttapstart",position:{x:i[0],y:i[1]}}),e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxt=!0,e.touchData.cxtDragged=!1,e.data.bgActivePosistion=void 0,void e.redraw()}}if(n.touches[2]);else if(n.touches[1]);else if(n.touches[0]){var p=e.findNearestElements(i[0],i[1],!0,!0),f=p[0];if(null!=f&&(f.activate(),e.touchData.start=f,e.touchData.starts=p,e.nodeIsGrabbable(f))){var v=e.dragData.touchDragEles=[],b=null;e.redrawHint("eles",!0),e.redrawHint("drag",!0),f.selected()?(b=r.$(function(t){return t.selected()&&e.nodeIsGrabbable(t)}),g(b,{addToList:v})):y(f,{addToList:v}),h(f);var x=function(e){return{originalEvent:n,type:e,position:{x:i[0],y:i[1]}}};f.emit(x("grabon")),b?b.forEach(function(e){e.emit(x("grab"))}):f.emit(x("grab"))}t(f,["touchstart","tapstart","vmousedown"],n,{position:{x:i[0],y:i[1]}}),null==f&&(e.data.bgActivePosistion={x:o[0],y:o[1]},e.redrawHint("select",!0),e.redraw()),e.touchData.singleTouchMoved=!1,e.touchData.singleTouchStartTime=+new Date,clearTimeout(e.touchData.tapholdTimeout),e.touchData.tapholdTimeout=setTimeout(function(){!1!==e.touchData.singleTouchMoved||e.pinching||e.touchData.selecting||(t(e.touchData.start,["taphold"],n,{position:{x:i[0],y:i[1]}}),e.touchData.start||r.$(":selected").unselect())},e.tapholdDuration)}if(n.touches.length>=1){for(var w=e.touchData.startPosition=[],E=0;E<i.length;E++)w[E]=a[E]=i[E];var P=n.touches[0];e.touchData.startGPosition=[P.clientX,P.clientY]}}},!1);var j;e.registerBinding(window,"touchmove",j=function(n){var i=e.touchData.capture;if(i||C(n)){var s=e.selection,l=e.cy,u=e.touchData.now,c=e.touchData.earlier,d=l.zoom();if(n.touches[0]){var h=e.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);u[0]=h[0],u[1]=h[1]}if(n.touches[1]){var h=e.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);u[2]=h[0],u[3]=h[1]}if(n.touches[2]){var h=e.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);u[4]=h[0],u[5]=h[1]}var p,f=e.touchData.startGPosition;if(i&&n.touches[0]&&f){for(var v=[],y=0;y<u.length;y++)v[y]=u[y]-c[y];var b=n.touches[0].clientX-f[0],x=b*b,w=n.touches[0].clientY-f[1];p=x+w*w>=e.touchTapThreshold2}if(i&&e.touchData.cxt){n.preventDefault();var E=n.touches[0].clientX-z,P=n.touches[0].clientY-L,S=n.touches[1].clientX-z,N=n.touches[1].clientY-L,A=F(E,P,S,N),O=A/I;if(O>=2.25||A>=22500){e.touchData.cxt=!1,e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var V={originalEvent:n,type:"cxttapend",position:{x:u[0],y:u[1]}};e.touchData.start?(e.touchData.start.unactivate().emit(V),e.touchData.start=null):l.emit(V)}}if(i&&e.touchData.cxt){var V={originalEvent:n,type:"cxtdrag",position:{x:u[0],y:u[1]}};e.data.bgActivePosistion=void 0,e.redrawHint("select",!0),e.touchData.start?e.touchData.start.emit(V):l.emit(V),e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxtDragged=!0;var j=e.findNearestElement(u[0],u[1],!0,!0);e.touchData.cxtOver&&j===e.touchData.cxtOver||(e.touchData.cxtOver&&e.touchData.cxtOver.emit({originalEvent:n,type:"cxtdragout",position:{x:u[0],y:u[1]}}),e.touchData.cxtOver=j,j&&j.emit({originalEvent:n,type:"cxtdragover",position:{x:u[0],y:u[1]}}))}else if(i&&n.touches[2]&&l.boxSelectionEnabled())n.preventDefault(),e.data.bgActivePosistion=void 0,this.lastThreeTouch=+new Date,e.touchData.selecting||l.emit("boxstart"),e.touchData.selecting=!0,e.redrawHint("select",!0),s&&0!==s.length&&void 0!==s[0]?(s[2]=(u[0]+u[2]+u[4])/3,s[3]=(u[1]+u[3]+u[5])/3):(s[0]=(u[0]+u[2]+u[4])/3,s[1]=(u[1]+u[3]+u[5])/3,s[2]=(u[0]+u[2]+u[4])/3+1,s[3]=(u[1]+u[3]+u[5])/3+1),s[4]=1,e.touchData.selecting=!0,e.redraw();else if(i&&n.touches[1]&&l.zoomingEnabled()&&l.panningEnabled()&&l.userZoomingEnabled()&&l.userPanningEnabled()){n.preventDefault(),e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var X=e.dragData.touchDragEles;if(X){e.redrawHint("drag",!0);for(var Y=0;Y<X.length;Y++){var W=X[Y]._private;W.grabbed=!1,W.rscratch.inDragLayer=!1}}var E=n.touches[0].clientX-z,P=n.touches[0].clientY-L,S=n.touches[1].clientX-z,N=n.touches[1].clientY-L,H=q(E,P,S,N),Z=H/M;if(R){var $=E-T,U=P-D,G=S-k,Q=N-_,K=($+G)/2,J=(U+Q)/2,ee=l.zoom(),te=ee*Z,ne=l.pan(),re=B[0]*ee+ne.x,ie=B[1]*ee+ne.y,ae={x:-te/ee*(re-ne.x-K)+re,y:-te/ee*(ie-ne.y-J)+ie};if(e.touchData.start&&e.touchData.start.active()){var X=e.dragData.touchDragEles;m(X),e.redrawHint("drag",!0),e.redrawHint("eles",!0),e.touchData.start.unactivate().emit("free")}l.viewport({zoom:te,pan:ae,cancelOnFailedZoom:!0}),M=H,T=E,D=P,k=S,_=N,e.pinching=!0}if(n.touches[0]){var h=e.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);u[0]=h[0],u[1]=h[1]}if(n.touches[1]){var h=e.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);u[2]=h[0],u[3]=h[1]}if(n.touches[2]){var h=e.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);u[4]=h[0],u[5]=h[1]}}else if(n.touches[0]){var j,oe=e.touchData.start,se=e.touchData.last;if(e.hoverData.draggingEles||e.swipePanning||(j=e.findNearestElement(u[0],u[1],!0,!0)),i&&null!=oe&&n.preventDefault(),i&&null!=oe&&e.nodeIsDraggable(oe))if(p){var X=e.dragData.touchDragEles,le=!e.dragData.didDrag;le&&g(l.collection(X),{inDragLayer:!0});for(var ue=0;ue<X.length;ue++){var ce=X[ue];if(e.nodeIsDraggable(ce)&&ce.grabbed()){e.dragData.didDrag=!0;var de=ce.position();if(r.number(v[0])&&r.number(v[1])&&(de.x+=v[0],de.y+=v[1]),le){e.redrawHint("eles",!0);var he=e.touchData.dragDelta;he&&r.number(he[0])&&r.number(he[1])&&(de.x+=he[0],de.y+=he[1])}}}var pe=l.collection(X);pe.dirtyCompoundBoundsCache(),pe.emit("position drag"),e.hoverData.draggingEles=!0,e.redrawHint("drag",!0),e.touchData.startPosition[0]==c[0]&&e.touchData.startPosition[1]==c[1]&&e.redrawHint("eles",!0),e.redraw()}else{var he=e.touchData.dragDelta=e.touchData.dragDelta||[];0===he.length?(he.push(v[0]),he.push(v[1])):(he[0]+=v[0],he[1]+=v[1])}if(t(oe||j,["touchmove","tapdrag","vmousemove"],n,{position:{x:u[0],y:u[1]}}),oe&&oe.grabbed()||j==se||(se&&se.emit({originalEvent:n,type:"tapdragout",position:{x:u[0],y:u[1]}}),j&&j.emit({originalEvent:n,type:"tapdragover",position:{x:u[0],y:u[1]}})),e.touchData.last=j,i)for(var Y=0;Y<u.length;Y++)u[Y]&&e.touchData.startPosition[Y]&&p&&(e.touchData.singleTouchMoved=!0);if(i&&(null==oe||oe.isEdge())&&l.panningEnabled()&&l.userPanningEnabled()){var fe=o(oe,e.touchData.starts);fe&&(n.preventDefault(),e.swipePanning?l.panBy({x:v[0]*d,y:v[1]*d}):p&&(e.swipePanning=!0,l.panBy({x:b*d,y:w*d}),oe&&(oe.unactivate(),e.data.bgActivePosistion||(e.data.bgActivePosistion=a.array2point(e.touchData.startPosition)),e.redrawHint("select",!0),e.touchData.start=null)));var h=e.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);u[0]=h[0],u[1]=h[1]}}for(var y=0;y<u.length;y++)c[y]=u[y]}},!1);var X;e.registerBinding(window,"touchcancel",X=function(t){var n=e.touchData.start;e.touchData.capture=!1,n&&n.unactivate()});var Y;if(e.registerBinding(window,"touchend",Y=function(n){var r=e.touchData.start;if(e.touchData.capture){e.touchData.capture=!1,n.preventDefault();var i=e.selection;e.swipePanning=!1,e.hoverData.draggingEles=!1;var a=e.cy,o=a.zoom(),s=e.touchData.now,l=e.touchData.earlier;if(n.touches[0]){var u=e.projectIntoViewport(n.touches[0].clientX,n.touches[0].clientY);s[0]=u[0],s[1]=u[1]}if(n.touches[1]){var u=e.projectIntoViewport(n.touches[1].clientX,n.touches[1].clientY);s[2]=u[0],s[3]=u[1]}if(n.touches[2]){var u=e.projectIntoViewport(n.touches[2].clientX,n.touches[2].clientY);s[4]=u[0],s[5]=u[1]}r&&r.unactivate();var c;if(e.touchData.cxt){if(c={originalEvent:n,type:"cxttapend",position:{x:s[0],y:s[1]}},r?r.emit(c):a.emit(c),!e.touchData.cxtDragged){var d={originalEvent:n,type:"cxttap",position:{x:s[0],y:s[1]}};r?r.emit(d):a.emit(d)}return e.touchData.start&&(e.touchData.start._private.grabbed=!1),e.touchData.cxt=!1,e.touchData.start=null,void e.redraw()}if(!n.touches[2]&&a.boxSelectionEnabled()&&e.touchData.selecting){e.touchData.selecting=!1;var h=a.collection(e.getAllInBox(i[0],i[1],i[2],i[3]));i[0]=void 0,i[1]=void 0,i[2]=void 0,i[3]=void 0,i[4]=0,e.redrawHint("select",!0),a.emit("boxend");var p=function(e){return e.selectable()&&!e.selected()};h.emit("box").stdFilter(p).select().emit("boxselect"),h.nonempty()&&e.redrawHint("eles",!0),e.redraw()}if(null!=r&&r.unactivate(),n.touches[2])e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);else if(n.touches[1]);else if(n.touches[0]);else if(!n.touches[0]){e.data.bgActivePosistion=void 0,e.redrawHint("select",!0);var f=e.dragData.touchDragEles;if(null!=r){var v=r._private.grabbed;m(f),e.redrawHint("drag",!0),e.redrawHint("eles",!0),v&&r.emit("free"),t(r,["touchend","tapend","vmouseup","tapdragout"],n,{position:{x:s[0],y:s[1]}}),r.unactivate(),e.touchData.start=null}else{var g=e.findNearestElement(s[0],s[1],!0,!0);t(g,["touchend","tapend","vmouseup","tapdragout"],n,{position:{x:s[0],y:s[1]}})}var y=e.touchData.startPosition[0]-s[0],b=y*y,x=e.touchData.startPosition[1]-s[1],w=x*x,E=b+w,P=E*o*o;null!=r&&!e.dragData.didDrag&&r._private.selectable&&P<e.touchTapThreshold2&&!e.pinching&&("single"===a.selectionType()?(a.$(":selected").unmerge(r).unselect(),r.select()):r.selected()?r.unselect():r.select(),e.redrawHint("eles",!0)),e.touchData.singleTouchMoved||t(r,["tap","vclick"],n,{position:{x:s[0],y:s[1]}}),e.touchData.singleTouchMoved=!0}for(var C=0;C<s.length;C++)l[C]=s[C];e.dragData.didDrag=!1,0===n.touches.length&&(e.touchData.dragDelta=[],e.touchData.startPosition=null,e.touchData.startGPosition=null),n.touches.length<2&&(e.pinching=!1,e.redrawHint("eles",!0),e.redraw())}},!1),"undefined"==typeof TouchEvent){var W=[],H=function(e){return{clientX:e.clientX,clientY:e.clientY,force:1,identifier:e.pointerId,pageX:e.pageX,pageY:e.pageY,radiusX:e.width/2,radiusY:e.height/2,screenX:e.screenX,screenY:e.screenY,target:e.target}},Z=function(e){return{event:e,touch:H(e)}},$=function(e){W.push(Z(e))},U=function(e){for(var t=0;t<W.length;t++){if(W[t].event.pointerId===e.pointerId)return void W.splice(t,1)}},G=function(e){var t=W.filter(function(t){return t.event.pointerId===e.pointerId})[0];t.event=e,t.touch=H(e)},Q=function(e){e.touches=W.map(function(e){return e.touch})},K=function(e){return"mouse"===e.pointerType||4===e.pointerType};e.registerBinding(e.container,"pointerdown",function(e){K(e)||(e.preventDefault(),$(e),Q(e),V(e))}),e.registerBinding(e.container,"pointerup",function(e){K(e)||(U(e),Q(e),Y(e))}),e.registerBinding(e.container,"pointercancel",function(e){K(e)||(U(e),Q(e),X(e))}),e.registerBinding(e.container,"pointermove",function(e){K(e)||(e.preventDefault(),G(e),Q(e),j(e))})}},e.exports=o},function(e,t,n){"use strict";var r=n(2),i={};i.generatePolygon=function(e,t){return this.nodeShapes[e]={renderer:this,name:e,points:t,draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl("polygon",e,t,n,r,i,this.points)},intersectLine:function(e,t,n,i,a,o,s){return r.polygonIntersectLine(a,o,this.points,e,t,n/2,i/2,s)},checkPoint:function(e,t,n,i,a,o,s){return r.pointInsidePolygon(e,t,this.points,o,s,i,a,[0,-1],n)}}},i.generateEllipse=function(){return this.nodeShapes.ellipse={renderer:this,name:"ellipse",draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl(this.name,e,t,n,r,i)},intersectLine:function(e,t,n,i,a,o,s){return r.intersectLineEllipse(a,o,e,t,n/2+s,i/2+s)},checkPoint:function(e,t,n,i,a,o,s){return r.checkInEllipse(e,t,i,a,o,s,n)}}},i.generateRoundRectangle=function(){return this.nodeShapes.roundrectangle={renderer:this,name:"roundrectangle",points:r.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl(this.name,e,t,n,r,i)},intersectLine:function(e,t,n,i,a,o,s){return r.roundRectangleIntersectLine(a,o,e,t,n,i,s)},checkPoint:function(e,t,n,i,a,o,s){var l=r.getRoundRectangleRadius(i,a),u=2*l;return!!r.pointInsidePolygon(e,t,this.points,o,s,i,a-u,[0,-1],n)||(!!r.pointInsidePolygon(e,t,this.points,o,s,i-u,a,[0,-1],n)||(!!r.checkInEllipse(e,t,u,u,o-i/2+l,s-a/2+l,n)||(!!r.checkInEllipse(e,t,u,u,o+i/2-l,s-a/2+l,n)||(!!r.checkInEllipse(e,t,u,u,o+i/2-l,s+a/2-l,n)||!!r.checkInEllipse(e,t,u,u,o-i/2+l,s+a/2-l,n)))))}}},i.generateCutRectangle=function(){return this.nodeShapes.cutrectangle={renderer:this,name:"cutrectangle",cornerLength:r.getCutRectangleCornerLength(),points:r.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl(this.name,e,t,n,r,i)},generateCutTrianglePts:function(e,t,n,r){var i=this.cornerLength,a=t/2,o=e/2,s=n-o,l=n+o,u=r-a,c=r+a;return{topLeft:[s,u+i,s+i,u,s+i,u+i],topRight:[l-i,u,l,u+i,l-i,u+i],bottomRight:[l,c-i,l-i,c,l-i,c-i],bottomLeft:[s+i,c,s,c-i,s+i,c-i]}},intersectLine:function(e,t,n,i,a,o,s){var l=this.generateCutTrianglePts(n+2*s,i+2*s,e,t),u=[].concat.apply([],[l.topLeft.splice(0,4),l.topRight.splice(0,4),l.bottomRight.splice(0,4),l.bottomLeft.splice(0,4)]);return r.polygonIntersectLine(a,o,u,e,t)},checkPoint:function(e,t,n,i,a,o,s){if(r.pointInsidePolygon(e,t,this.points,o,s,i,a-2*this.cornerLength,[0,-1],n))return!0;if(r.pointInsidePolygon(e,t,this.points,o,s,i-2*this.cornerLength,a,[0,-1],n))return!0;var l=this.generateCutTrianglePts(i,a,o,s);return r.pointInsidePolygonPoints(e,t,l.topLeft)||r.pointInsidePolygonPoints(e,t,l.topRight)||r.pointInsidePolygonPoints(e,t,l.bottomRight)||r.pointInsidePolygonPoints(e,t,l.bottomLeft)}}},i.generateBarrel=function(){return this.nodeShapes.barrel={renderer:this,name:"barrel",points:r.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl(this.name,e,t,n,r,i)},intersectLine:function(e,t,n,i,a,o,s){var l=this.generateBarrelBezierPts(n+2*s,i+2*s,e,t),u=function(e){var t=r.qbezierPtAt({x:e[0],y:e[1]},{x:e[2],y:e[3]},{x:e[4],y:e[5]},.15),n=r.qbezierPtAt({x:e[0],y:e[1]},{x:e[2],y:e[3]},{x:e[4],y:e[5]},.5),i=r.qbezierPtAt({x:e[0],y:e[1]},{x:e[2],y:e[3]},{x:e[4],y:e[5]},.85);return[e[0],e[1],t.x,t.y,n.x,n.y,i.x,i.y,e[4],e[5]]},c=[].concat(u(l.topLeft),u(l.topRight),u(l.bottomRight),u(l.bottomLeft));return r.polygonIntersectLine(a,o,c,e,t)},generateBarrelBezierPts:function(e,t,n,i){var a=t/2,o=e/2,s=n-o,l=n+o,u=i-a,c=i+a,d=r.getBarrelCurveConstants(e,t),h=d.heightOffset,p=d.widthOffset,f=d.ctrlPtOffsetPct*e,v={topLeft:[s,u+h,s+f,u,s+p,u],topRight:[l-p,u,l-f,u,l,u+h],bottomRight:[l,c-h,l-f,c,l-p,c],bottomLeft:[s+p,c,s+f,c,s,c-h]};return v.topLeft.isTop=!0,v.topRight.isTop=!0,v.bottomLeft.isBottom=!0,v.bottomRight.isBottom=!0,v},checkPoint:function(e,t,n,i,a,o,s){var l=r.getBarrelCurveConstants(i,a),u=l.heightOffset,c=l.widthOffset;if(r.pointInsidePolygon(e,t,this.points,o,s,i,a-2*u,[0,-1],n))return!0;if(r.pointInsidePolygon(e,t,this.points,o,s,i-2*c,a,[0,-1],n))return!0;for(var d=this.generateBarrelBezierPts(i,a,o,s),h=Object.keys(d),p=0;p<h.length;p++){var f=h[p],v=d[f],g=function(e,t,n){var i=n[4],a=n[2],o=n[0],s=n[5],l=n[1],u=Math.min(i,o),c=Math.max(i,o),d=Math.min(s,l),h=Math.max(s,l);if(u<=e&&e<=c&&d<=t&&t<=h){var p=r.bezierPtsToQuadCoeff(i,a,o),f=r.solveQuadratic(p[0],p[1],p[2],e),v=f.filter(function(e){return 0<=e&&e<=1});if(v.length>0)return v[0]}return null}(e,t,v);if(null!=g){var y=v[5],m=v[3],b=v[1],x=r.qbezierAt(y,m,b,g);if(v.isTop&&x<=t)return!0;if(v.isBottom&&t<=x)return!0}}return!1}}},i.generateBottomRoundrectangle=function(){return this.nodeShapes.bottomroundrectangle={renderer:this,name:"bottomroundrectangle",points:r.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,n,r,i){this.renderer.nodeShapeImpl(this.name,e,t,n,r,i)},intersectLine:function(e,t,n,i,a,o,s){var l=e-(n/2+s),u=t-(i/2+s),c=u,d=e+(n/2+s),h=r.finiteLinesIntersect(a,o,e,t,l,u,d,c,!1);return h.length>0?h:r.roundRectangleIntersectLine(a,o,e,t,n,i,s)},checkPoint:function(e,t,n,i,a,o,s){var l=r.getRoundRectangleRadius(i,a),u=2*l;if(r.pointInsidePolygon(e,t,this.points,o,s,i,a-u,[0,-1],n))return!0;if(r.pointInsidePolygon(e,t,this.points,o,s,i-u,a,[0,-1],n))return!0;var c=i/2+2*n,d=a/2+2*n,h=[o-c,s-d,o-c,s,o+c,s,o+c,s-d];return!!r.pointInsidePolygonPoints(e,t,h)||(!!r.checkInEllipse(e,t,u,u,o+i/2-l,s+a/2-l,n)||!!r.checkInEllipse(e,t,u,u,o-i/2+l,s+a/2-l,n))}}},i.registerNodeShapes=function(){var e=this.nodeShapes={},t=this;this.generateEllipse(),this.generatePolygon("triangle",r.generateUnitNgonPointsFitToSquare(3,0)),this.generatePolygon("rectangle",r.generateUnitNgonPointsFitToSquare(4,0)),e.square=e.rectangle,this.generateRoundRectangle(),this.generateCutRectangle(),this.generateBarrel(),this.generateBottomRoundrectangle(),this.generatePolygon("diamond",[0,1,1,0,0,-1,-1,0]),this.generatePolygon("pentagon",r.generateUnitNgonPointsFitToSquare(5,0)),this.generatePolygon("hexagon",r.generateUnitNgonPointsFitToSquare(6,0)),this.generatePolygon("heptagon",r.generateUnitNgonPointsFitToSquare(7,0)),this.generatePolygon("octagon",r.generateUnitNgonPointsFitToSquare(8,0));var n=new Array(20),i=r.generateUnitNgonPoints(5,0),a=r.generateUnitNgonPoints(5,Math.PI/5),o=.5*(3-Math.sqrt(5));o*=1.57;for(var s=0;s<a.length/2;s++)a[2*s]*=o,a[2*s+1]*=o;for(var s=0;s<5;s++)n[4*s]=i[2*s],n[4*s+1]=i[2*s+1],n[4*s+2]=a[2*s],n[4*s+3]=a[2*s+1];n=r.fitPolygonToSquare(n),this.generatePolygon("star",n),this.generatePolygon("vee",[-1,-1,0,-.333,1,-1,0,1]),this.generatePolygon("rhomboid",[-1,-1,.333,-1,1,1,-.333,1]),this.generatePolygon("concavehexagon",[-1,-.95,-.75,0,-1,.95,1,.95,.75,0,1,-.95]),this.generatePolygon("tag",[-1,-1,.25,-1,1,0,.25,1,-1,1]),e.makePolygon=function(e){var n,r=e.join("$"),i="polygon-"+r;return(n=this[i])?n:t.generatePolygon(i,e)}},e.exports=i},function(e,t,n){"use strict";var r=n(1),i={};i.timeToRender=function(){return this.redrawTotalTime/this.redrawCount},i.redraw=function(e){e=e||r.staticEmptyObject();var t=this;void 0===t.averageRedrawTime&&(t.averageRedrawTime=0),void 0===t.lastRedrawTime&&(t.lastRedrawTime=0),void 0===t.lastDrawTime&&(t.lastDrawTime=0),t.requestedFrame=!0,t.renderOptions=e},i.beforeRender=function(e,t){if(!this.destroyed){t=t||0;var n=this.beforeRenderCallbacks;n.push({fn:e,priority:t}),n.sort(function(e,t){return t.priority-e.priority})}};var a=function(e,t,n){for(var r=e.beforeRenderCallbacks,i=0;i<r.length;i++)r[i].fn(t,n)};i.startRenderLoop=function(){var e=this;if(!e.renderLoopStarted){e.renderLoopStarted=!0;var t=function t(n){if(!e.destroyed){if(e.requestedFrame&&!e.skipFrame){a(e,!0,n);var i=r.performanceNow();e.render(e.renderOptions);var o=e.lastDrawTime=r.performanceNow();void 0===e.averageRedrawTime&&(e.averageRedrawTime=o-i),void 0===e.redrawCount&&(e.redrawCount=0),e.redrawCount++,void 0===e.redrawTotalTime&&(e.redrawTotalTime=0);var s=o-i;e.redrawTotalTime+=s,e.lastRedrawTime=s,e.averageRedrawTime=e.averageRedrawTime/2+s/2,e.requestedFrame=!1}else a(e,!1,n);e.skipFrame=!1,r.requestAnimationFrame(t)}};r.requestAnimationFrame(t)}},e.exports=i},function(e,t,n){"use strict";function r(e){var t=this;t.data={canvases:new Array(u.CANVAS_LAYERS),contexts:new Array(u.CANVAS_LAYERS),canvasNeedsRedraw:new Array(u.CANVAS_LAYERS),bufferCanvases:new Array(u.BUFFER_COUNT),bufferContexts:new Array(u.CANVAS_LAYERS)};var n="-webkit-tap-highlight-color: rgba(0,0,0,0);";t.data.canvasContainer=document.createElement("div");var r=t.data.canvasContainer.style;t.data.canvasContainer.setAttribute("style",n),r.position="relative",r.zIndex="0",r.overflow="hidden";var i=e.cy.container();i.appendChild(t.data.canvasContainer),(i.getAttribute("style")||"").indexOf(n)<0&&i.setAttribute("style",(i.getAttribute("style")||"")+n);for(var l=0;l<u.CANVAS_LAYERS;l++){var c=t.data.canvases[l]=document.createElement("canvas");t.data.contexts[l]=c.getContext("2d"),c.setAttribute("style","-webkit-user-select: none; -moz-user-select: -moz-none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); outline-style: none;"+(a.ms()?" -ms-touch-action: none; touch-action: none; ":"")),c.style.position="absolute",c.setAttribute("data-id","layer"+l),c.style.zIndex=String(u.CANVAS_LAYERS-l),t.data.canvasContainer.appendChild(c),t.data.canvasNeedsRedraw[l]=!1}t.data.topCanvas=t.data.canvases[0],t.data.canvases[u.NODE].setAttribute("data-id","layer"+u.NODE+"-node"),t.data.canvases[u.SELECT_BOX].setAttribute("data-id","layer"+u.SELECT_BOX+"-selectbox"),t.data.canvases[u.DRAG].setAttribute("data-id","layer"+u.DRAG+"-drag");for(var l=0;l<u.BUFFER_COUNT;l++)t.data.bufferCanvases[l]=document.createElement("canvas"),t.data.bufferContexts[l]=t.data.bufferCanvases[l].getContext("2d"),t.data.bufferCanvases[l].style.position="absolute",t.data.bufferCanvases[l].setAttribute("data-id","buffer"+l),t.data.bufferCanvases[l].style.zIndex=String(-l-1),t.data.bufferCanvases[l].style.visibility="hidden";t.pathsEnabled=!0,t.data.eleTxrCache=new o(t),t.data.lyrTxrCache=new s(t,t.data.eleTxrCache),t.onUpdateEleCalcs(function(e,n){for(var r=0;r<n.length;r++){var i=n[r],a=i._private.rstyle,o=a.dirtyEvents;if(i.isNode()&&o&&1===o.length&&o.position);else if(t.data.eleTxrCache.invalidateElement(i),i.isParent()&&o.style){var s=a.prevParentOpacity,l=i.pstyle("opacity").pfValue;if(a.prevParentOpacity=l,s!==l)for(var u=i.descendants(),c=0;c<u.length;c++)t.data.eleTxrCache.invalidateElement(u[c])}}n.length>0&&t.data.lyrTxrCache.invalidateElements(n)})}var i=n(1),a=n(0),o=n(125),s=n(126),l=r,u=r.prototype;u.CANVAS_LAYERS=3,u.SELECT_BOX=0,u.DRAG=1,u.NODE=2,u.BUFFER_COUNT=3,u.TEXTURE_BUFFER=0,u.MOTIONBLUR_BUFFER_NODE=1,u.MOTIONBLUR_BUFFER_DRAG=2,u.redrawHint=function(e,t){var n=this;switch(e){case"eles":n.data.canvasNeedsRedraw[u.NODE]=t;break;case"drag":n.data.canvasNeedsRedraw[u.DRAG]=t;break;case"select":n.data.canvasNeedsRedraw[u.SELECT_BOX]=t}};var c="undefined"!=typeof Path2D;u.path2dEnabled=function(e){if(void 0===e)return this.pathsEnabled;this.pathsEnabled=!!e},u.usePaths=function(){return c&&this.pathsEnabled},[n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136)].forEach(function(e){i.extend(u,e)}),e.exports=l},function(e,t,n){"use strict";var r=n(2),i=n(1),a=n(9),o=n(19),s={dequeue:"dequeue",downscale:"downscale",highQuality:"highQuality"},l=function(e){var t=this;t.renderer=e,t.onDequeues=[],t.setupDequeueing()},u=l.prototype;u.reasons=s,u.getTextureQueue=function(e){var t=this;return t.eleImgCaches=t.eleImgCaches||{},t.eleImgCaches[e]=t.eleImgCaches[e]||[]},u.getRetiredTextureQueue=function(e){var t=this,n=t.eleImgCaches.retired=t.eleImgCaches.retired||{};return n[e]=n[e]||[]},u.getElementQueue=function(){var e=this;return e.eleCacheQueue=e.eleCacheQueue||new a(function(e,t){return t.reqs-e.reqs})},u.getElementIdToQueue=function(){var e=this;return e.eleIdToCacheQueue=e.eleIdToCacheQueue||{}},u.getElement=function(e,t,n,i,a){var o=this,l=this.renderer,u=e._private.rscratch,c=l.cy.zoom();if(0===t.w||0===t.h||!e.visible())return null;if(null==i&&(i=Math.ceil(r.log2(c*n))),i<-4)i=-4;else if(c>=3.99||i>2)return null;var d=Math.pow(2,i),h=t.h*d,p=t.w*d,f=u.imgCaches=u.imgCaches||{},v=f[i];if(v)return v;var g;if(g=h<=25?25:h<=50?50:50*Math.ceil(h/50),h>1024||p>1024||e.isEdge()||e.isParent())return null;var y=o.getTextureQueue(g),m=y[y.length-2],b=function(){return o.recycleTexture(g,p)||o.addTexture(g,p)};m||(m=y[y.length-1]),m||(m=b()),m.width-m.usedWidth<p&&(m=b());for(var x,w=l.eleTextBiggerThanMin(e,d),E=function(e){return e&&e.scaledLabelShown===w},P=a&&a===s.dequeue,C=a&&a===s.highQuality,S=a&&a===s.downscale,T=i+1;T<=2;T++){var D=f[T];if(D){x=D;break}}var k=x&&x.level===i+1?x:null,_=function(){m.context.drawImage(k.texture.canvas,k.x,0,k.width,k.height,m.usedWidth,0,p,h)};if(m.context.setTransform(1,0,0,1,0,0),m.context.clearRect(m.usedWidth,0,p,g),E(k))_();else if(E(x)){if(!C)return o.queueElement(e,x.level-1),x;for(var T=x.level;T>i;T--)k=o.getElement(e,t,n,T,s.downscale);_()}else{var M;if(!P&&!C&&!S)for(var T=i-1;T>=-4;T--){var D=f[T];if(D){M=D;break}}if(E(M))return o.queueElement(e,i),M;m.context.translate(m.usedWidth,0),m.context.scale(d,d),l.drawElement(m.context,e,t,w),m.context.scale(1/d,1/d),m.context.translate(-m.usedWidth,0)}return v=f[i]={ele:e,x:m.usedWidth,texture:m,level:i,scale:d,width:p,height:h,scaledLabelShown:w},m.usedWidth+=Math.ceil(p+8),m.eleCaches.push(v),o.checkTextureFullness(m),v},u.invalidateElement=function(e){var t=this,n=e._private.rscratch.imgCaches;if(n)for(var r=-4;r<=2;r++){var a=n[r];if(a){var o=a.texture;o.invalidatedWidth+=a.width,n[r]=null,i.removeFromArray(o.eleCaches,a),t.removeFromQueue(e),t.checkTextureUtility(o)}}},u.checkTextureUtility=function(e){e.invalidatedWidth>=.5*e.width&&this.retireTexture(e)},u.checkTextureFullness=function(e){var t=this,n=t.getTextureQueue(e.height);e.usedWidth/e.width>.8&&e.fullnessChecks>=10?i.removeFromArray(n,e):e.fullnessChecks++},u.retireTexture=function(e){var t=this,n=e.height,r=t.getTextureQueue(n);i.removeFromArray(r,e),e.retired=!0;for(var a=e.eleCaches,o=0;o<a.length;o++){var s=a[o],l=s.ele,u=s.level,c=l._private.rscratch.imgCaches;c&&(c[u]=null)}i.clearArray(a),t.getRetiredTextureQueue(n).push(e)},u.addTexture=function(e,t){var n=this,r=n.getTextureQueue(e),i={};return r.push(i),i.eleCaches=[],i.height=e,i.width=Math.max(1024,t),i.usedWidth=0,i.invalidatedWidth=0,i.fullnessChecks=0,i.canvas=document.createElement("canvas"),i.canvas.width=i.width,i.canvas.height=i.height,i.context=i.canvas.getContext("2d"),i},u.recycleTexture=function(e,t){for(var n=this,r=n.getTextureQueue(e),a=n.getRetiredTextureQueue(e),o=0;o<a.length;o++){var s=a[o];if(s.width>=t)return s.retired=!1,s.usedWidth=0,s.invalidatedWidth=0,s.fullnessChecks=0,i.clearArray(s.eleCaches),s.context.setTransform(1,0,0,1,0,0),s.context.clearRect(0,0,s.width,s.height),i.removeFromArray(a,s),r.push(s),s}},u.queueElement=function(e,t){var n=this,r=n.getElementQueue(),i=n.getElementIdToQueue(),a=e.id(),o=i[a];if(o)o.level=Math.max(o.level,t),o.reqs++,r.updateItem(o);else{var s={ele:e,level:t,reqs:1};r.push(s),i[a]=s}},u.dequeue=function(e){for(var t=this,n=t.getElementQueue(),r=t.getElementIdToQueue(),i=[],a=0;a<1&&n.size()>0;a++){var o=n.pop(),l=o.ele;if(null==l._private.rscratch.imgCaches[o.level]){r[l.id()]=null,i.push(o);var u=l.boundingBox();t.getElement(l,u,e,o.level,s.dequeue)}}return i},u.removeFromQueue=function(e){var t=this,n=t.getElementQueue(),r=t.getElementIdToQueue(),a=r[e.id()];null!=a&&(a.reqs=i.MAX_INT,n.updateItem(a),n.pop(),r[e.id()]=null)},u.onDequeue=function(e){this.onDequeues.push(e)},u.offDequeue=function(e){i.removeFromArray(this.onDequeues,e)},u.setupDequeueing=o.setupDequeueing({deqRedrawThreshold:100,deqCost:.15,deqAvgCost:.1,deqNoDrawCost:.9,deqFastCost:.9,deq:function(e,t,n){return e.dequeue(t,n)},onDeqd:function(e,t){for(var n=0;n<e.onDequeues.length;n++){(0,e.onDequeues[n])(t)}},shouldRedraw:function(e,t,n,i){for(var a=0;a<t.length;a++){var o=t[a].ele.boundingBox();if(r.boundingBoxesIntersect(o,i))return!0}return!1},priority:function(e){return e.renderer.beforeRenderPriorities.eleTxrDeq}}),e.exports=l},function(e,t,n){"use strict";function r(e,t){null!=e.imageSmoothingEnabled?e.imageSmoothingEnabled=t:(e.webkitImageSmoothingEnabled=t,e.mozImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t)}var i=n(1),a=n(2),o=n(9),s=n(0),l=n(19),u=function(e,t){var n=this,r=n.renderer=e;n.layersByLevel={},n.firstGet=!0,n.lastInvalidationTime=i.performanceNow()-500,n.skipping=!1,r.beforeRender(function(e,t){t-n.lastInvalidationTime<=250?n.skipping=!0:n.skipping=!1});var a=function(e,t){return t.reqs-e.reqs};n.layersQueue=new o(a),n.eleTxrCache=t,n.setupEleCacheInvalidation(),n.setupDequeueing()},c=u.prototype,d=0,h=Math.pow(2,53)-1;c.makeLayer=function(e,t){var n=Math.pow(2,t),r=Math.ceil(e.w*n),i=Math.ceil(e.h*n),a=document.createElement("canvas");a.width=r,a.height=i;var o={id:d=++d%h,bb:e,level:t,width:r,height:i,canvas:a,context:a.getContext("2d"),eles:[],elesQueue:[],reqs:0},s=o.context,l=-o.bb.x1,u=-o.bb.y1;return s.scale(n,n),s.translate(l,u),o},c.getLayers=function(e,t,n){var r=this,o=r.renderer,s=o.cy,l=s.zoom(),u=r.firstGet;if(r.firstGet=!1,null==n)if((n=Math.ceil(a.log2(l*t)))<-4)n=-4;else if(l>=3.99||n>2)return null;r.validateLayersElesOrdering(n,e);var c,d,h=r.layersByLevel,p=Math.pow(2,n),f=h[n]=h[n]||[],v=r.levelIsComplete(n,e);if(v)return f;!function(){var t=function(t){if(r.validateLayersElesOrdering(t,e),r.levelIsComplete(t,e))return d=h[t],!0},a=function(e){if(!d)for(var r=n+e;-4<=r&&r<=2&&!t(r);r+=e);};a(1),a(-1);for(var o=f.length-1;o>=0;o--){var s=f[o];s.invalid&&i.removeFromArray(f,s)}}();var g=function(){if(!c){c=a.makeBoundingBox();for(var t=0;t<e.length;t++)a.updateBoundingBox(c,e[t].boundingBox())}return c};if(r.skipping&&!u)return null;for(var y=null,m=e.length/1,b=!u,x=0;x<e.length;x++){var w=e[x],E=w._private.rscratch,P=E.imgLayerCaches=E.imgLayerCaches||{},C=P[n];if(C)y=C;else{if((!y||y.eles.length>=m||!a.boundingBoxInBoundingBox(y.bb,w.boundingBox()))&&!(y=function(e){e=e||{};var t=e.after;if(g(),c.w*p*(c.h*p)>16e6)return null;var i=r.makeLayer(c,n);if(null!=t){var a=f.indexOf(t)+1;f.splice(a,0,i)}else(void 0===e.insert||e.insert)&&f.unshift(i);return i}({insert:!0,after:y})))return null;d||b?r.queueLayer(y,w):r.drawEleInLayer(y,w,n,t),y.eles.push(w),P[n]=y}}return d||(b?null:f)},c.getEleLevelForLayerLevel=function(e,t){return e},c.drawEleInLayer=function(e,t,n,i){var a=this,o=this.renderer,s=e.context,l=t.boundingBox();if(0!==l.w&&0!==l.h&&t.visible()){var u=a.eleTxrCache,c=u.reasons.highQuality;n=a.getEleLevelForLayerLevel(n,i);var d=u.getElement(t,l,null,n,c);d?(r(s,!1),s.drawImage(d.texture.canvas,d.x,0,d.width,d.height,l.x1,l.y1,l.w,l.h),r(s,!0)):o.drawElement(s,t)}},c.levelIsComplete=function(e,t){var n=this,r=n.layersByLevel[e];if(!r||0===r.length)return!1;for(var i=0,a=0;a<r.length;a++){var o=r[a];if(o.reqs>0)return!1;if(o.invalid)return!1;i+=o.eles.length}return i===t.length},c.validateLayersElesOrdering=function(e,t){var n=this.layersByLevel[e];if(n)for(var r=0;r<n.length;r++){for(var i=n[r],a=-1,o=0;o<t.length;o++)if(i.eles[0]===t[o]){a=o;break}if(a<0)this.invalidateLayer(i);else for(var s=a,o=0;o<i.eles.length;o++)if(i.eles[o]!==t[s+o]){this.invalidateLayer(i);break}}},c.updateElementsInLayers=function(e,t){for(var n=this,r=s.element(e[0]),i=0;i<e.length;i++)for(var a=r?null:e[i],o=r?e[i]:e[i].ele,l=o._private.rscratch,u=l.imgLayerCaches=l.imgLayerCaches||{},c=-4;c<=2;c++){var d=u[c];d&&(a&&n.getEleLevelForLayerLevel(d.level)!==a.level||t(d,o,a))}},c.haveLayers=function(){for(var e=this,t=!1,n=-4;n<=2;n++){var r=e.layersByLevel[n];if(r&&r.length>0){t=!0;break}}return t},c.invalidateElements=function(e){var t=this;t.lastInvalidationTime=i.performanceNow(),0!==e.length&&t.haveLayers()&&t.updateElementsInLayers(e,function(e,n,r){t.invalidateLayer(e)})},c.invalidateLayer=function(e){if(this.lastInvalidationTime=i.performanceNow(),!e.invalid){var t=e.level,n=e.eles,r=this.layersByLevel[t];i.removeFromArray(r,e),e.elesQueue=[],e.invalid=!0,e.replacement&&(e.replacement.invalid=!0);for(var a=0;a<n.length;a++){var o=n[a]._private.rscratch.imgLayerCaches;o&&(o[t]=null)}}},c.refineElementTextures=function(e){var t=this;t.updateElementsInLayers(e,function(e,n,r){var i=e.replacement;if(i||(i=e.replacement=t.makeLayer(e.bb,e.level),i.replaces=e,i.eles=e.eles),!i.reqs)for(var a=0;a<i.eles.length;a++)t.queueLayer(i,i.eles[a])})},c.setupEleCacheInvalidation=function(){var e=this,t=[],n=i.debounce(function(){e.refineElementTextures(t),t=[]},50);e.eleTxrCache.onDequeue(function(e){for(var r=0;r<e.length;r++)t.push(e[r]);n()})},c.queueLayer=function(e,t){var n=this,r=n.layersQueue,i=e.elesQueue,a=i.hasId=i.hasId||{};if(!e.replacement){if(t){if(a[t.id()])return;i.push(t),a[t.id()]=!0}e.reqs?(e.reqs++,r.updateItem(e)):(e.reqs=1,r.push(e))}},c.dequeue=function(e){for(var t=this,n=t.layersQueue,r=[],i=0;i<1&&0!==n.size();){var a=n.peek();if(a.replacement)n.pop();else if(a.replaces&&a!==a.replaces.replacement)n.pop();else if(a.invalid)n.pop();else{var o=a.elesQueue.shift();o&&(t.drawEleInLayer(a,o,a.level,e),i++),0===r.length&&r.push(!0),0===a.elesQueue.length&&(n.pop(),a.reqs=0,a.replaces&&t.applyLayerReplacement(a),t.requestRedraw())}}return r},c.applyLayerReplacement=function(e){var t=this,n=t.layersByLevel[e.level],r=e.replaces,i=n.indexOf(r);if(!(i<0||r.invalid)){n[i]=e;for(var a=0;a<e.eles.length;a++){var o=e.eles[a]._private,s=o.imgLayerCaches=o.imgLayerCaches||{};s&&(s[e.level]=e)}t.requestRedraw()}},c.requestRedraw=i.debounce(function(){var e=this.renderer;e.redrawHint("eles",!0),e.redrawHint("drag",!0),e.redraw()},100),c.setupDequeueing=l.setupDequeueing({deqRedrawThreshold:50,deqCost:.15,deqAvgCost:.1,deqNoDrawCost:.9,deqFastCost:.9,deq:function(e,t){return e.dequeue(t)},onDeqd:i.noop,shouldRedraw:i.trueify,priority:function(e){return e.renderer.beforeRenderPriorities.lyrTxrDeq}}),e.exports=u},function(e,t,n){"use strict";var r,i={};i.arrowShapeImpl=function(e){return(r||(r={polygon:function(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.lineTo(r.x,r.y)}},"triangle-backcurve":function(e,t,n){for(var r,i=0;i<t.length;i++){var a=t[i];0===i&&(r=a),e.lineTo(a.x,a.y)}e.quadraticCurveTo(n.x,n.y,r.x,r.y)},"triangle-tee":function(e,t,n){e.beginPath&&e.beginPath();for(var r=t,i=0;i<r.length;i++){var a=r[i];e.lineTo(a.x,a.y)}e.closePath&&e.closePath(),e.beginPath&&e.beginPath();var o=n,s=n[0];e.moveTo(s.x,s.y);for(var i=0;i<o.length;i++){var a=o[i];e.lineTo(a.x,a.y)}e.closePath&&e.closePath()},"triangle-cross":function(e,t,n){e.beginPath&&e.beginPath();for(var r=t,i=0;i<r.length;i++){var a=r[i];e.lineTo(a.x,a.y)}e.closePath&&e.closePath(),e.beginPath&&e.beginPath();var o=n,s=n[0];e.moveTo(s.x,s.y);for(var i=0;i<o.length;i++){var a=o[i];e.lineTo(a.x,a.y)}e.closePath&&e.closePath()},circle:function(e,t,n,r){e.arc(t,n,r,0,2*Math.PI,!1)}}))[e]},e.exports=i},function(e,t,n){"use strict";var r=n(2),i={};i.drawElement=function(e,t,n,r){var i=this;t.isNode()?i.drawNode(e,t,n,r):i.drawEdge(e,t,n,r)},i.drawCachedElement=function(e,t,n,i){var a=this,o=t.boundingBox();if(0!==o.w&&0!==o.h&&(!i||r.boundingBoxesIntersect(o,i))){var s=a.data.eleTxrCache.getElement(t,o,n);null!=s?e.drawImage(s.texture.canvas,s.x,0,s.width,s.height,o.x1,o.y1,o.w,o.h):a.drawElement(e,t)}},i.drawElements=function(e,t){for(var n=this,r=0;r<t.length;r++){var i=t[r];n.drawElement(e,i)}},i.drawCachedElements=function(e,t,n,r){for(var i=this,a=0;a<t.length;a++){var o=t[a];i.drawCachedElement(e,o,n,r)}},i.drawCachedNodes=function(e,t,n,r){for(var i=this,a=0;a<t.length;a++){var o=t[a];o.isNode()&&i.drawCachedElement(e,o,n,r)}},i.drawLayeredElements=function(e,t,n,r){var i=this,a=i.data.lyrTxrCache.getLayers(t,n);if(a)for(var o=0;o<a.length;o++){var s=a[o],l=s.bb;0!==l.w&&0!==l.h&&e.drawImage(s.canvas,l.x1,l.y1,l.w,l.h)}else i.drawCachedElements(e,t,n,r)},i.drawDebugPoints=function(e,t){for(var n=function(t,n,r){e.fillStyle=r,e.fillRect(t-1,n-1,3,3)},r=0;r<t.length;r++){var i=t[r],a=i._private.rscratch;if(i.isNode()){var o=i.position();n(o.x,o.y,"magenta")}else{for(var s=a.allpts,l=0;l+1<s.length;l+=2){n(s[l],s[l+1],"cyan")}n(a.midX,a.midY,"yellow")}}},e.exports=i},function(e,t,n){"use strict";var r={};r.drawEdge=function(e,t,n,r){var i=this,a=t._private.rscratch,o=i.usePaths();if(t.visible()&&!a.badLine&&null!=a.allpts&&!isNaN(a.allpts[0])){var s=void 0;n&&(s=n,e.translate(-s.x1,-s.y1));var l=t.pstyle("overlay-padding").pfValue,u=2*l,c=t.pstyle("overlay-opacity").value,d=t.pstyle("overlay-color").value,h=t.pstyle("line-color").value,p=t.pstyle("opacity").value,f=t.pstyle("line-style").value,v=t.pstyle("width").pfValue,g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;e.lineWidth=v,e.lineCap="butt",i.strokeStyle(e,h[0],h[1],h[2],n),i.drawEdgePath(t,e,a.allpts,f)},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;i.drawArrowheads(e,t,n)};e.lineJoin="round";if("yes"===t.pstyle("ghost").value){var m=t.pstyle("ghost-offset-x").pfValue,b=t.pstyle("ghost-offset-y").pfValue,x=t.pstyle("ghost-opacity").value,w=p*x;e.translate(m,b),g(w),y(w),e.translate(-m,-b)}g(),y(),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;e.lineWidth=u,"self"!==a.edgeType||o?e.lineCap="round":e.lineCap="butt",i.strokeStyle(e,d[0],d[1],d[2],n),i.drawEdgePath(t,e,a.allpts,"solid")}(),function(){i.drawElementText(e,t,r)}(),n&&e.translate(s.x1,s.y1)}},r.drawEdgePath=function(e,t,n,r){var i=e._private.rscratch,a=t,o=void 0,s=!1,l=this.usePaths();if(l){var u=n.join("$");i.pathCacheKey&&i.pathCacheKey===u?(o=t=i.pathCache,s=!0):(o=t=new Path2D,i.pathCacheKey=u,i.pathCache=o)}if(a.setLineDash)switch(r){case"dotted":a.setLineDash([1,1]);break;case"dashed":a.setLineDash([6,3]);break;case"solid":a.setLineDash([])}if(!s&&!i.badLine)switch(t.beginPath&&t.beginPath(),t.moveTo(n[0],n[1]),i.edgeType){case"bezier":case"self":case"compound":case"multibezier":for(var c=2;c+3<n.length;c+=4)t.quadraticCurveTo(n[c],n[c+1],n[c+2],n[c+3]);break;case"straight":case"segments":case"haystack":for(var d=2;d+1<n.length;d+=2)t.lineTo(n[d],n[d+1])}t=a,l?t.stroke(o):t.stroke(),t.setLineDash&&t.setLineDash([])},r.drawArrowheads=function(e,t,n){var r=t._private.rscratch,i="haystack"===r.edgeType;i||this.drawArrowhead(e,t,"source",r.arrowStartX,r.arrowStartY,r.srcArrowAngle,n),this.drawArrowhead(e,t,"mid-target",r.midX,r.midY,r.midtgtArrowAngle,n),this.drawArrowhead(e,t,"mid-source",r.midX,r.midY,r.midsrcArrowAngle,n),i||this.drawArrowhead(e,t,"target",r.arrowEndX,r.arrowEndY,r.tgtArrowAngle,n)},r.drawArrowhead=function(e,t,n,r,i,a,o){if(!(isNaN(r)||null==r||isNaN(i)||null==i||isNaN(a)||null==a)){var s=this,l=t.pstyle(n+"-arrow-shape").value;if("none"!==l){var u="hollow"===t.pstyle(n+"-arrow-fill").value?"both":"filled",c=t.pstyle(n+"-arrow-fill").value,d=t.pstyle("width").pfValue,h=t.pstyle("opacity").value;void 0===o&&(o=h);var p=e.globalCompositeOperation;1===o&&"hollow"!==c||(e.globalCompositeOperation="destination-out",s.fillStyle(e,255,255,255,1),s.strokeStyle(e,255,255,255,1),s.drawArrowShape(t,n,e,u,d,l,r,i,a),e.globalCompositeOperation=p);var f=t.pstyle(n+"-arrow-color").value;s.fillStyle(e,f[0],f[1],f[2],o),s.strokeStyle(e,f[0],f[1],f[2],o),s.drawArrowShape(t,n,e,c,d,l,r,i,a)}}},r.drawArrowShape=function(e,t,n,r,i,a,o,s,l){var u=this,c=this.usePaths(),d=e._private.rscratch,h=!1,p=void 0,f=n,v={x:o,y:s},g=e.pstyle("arrow-scale").value,y=this.getArrowWidth(i,g),m=u.arrowShapes[a];if(c){var b=y+"$"+a+"$"+l+"$"+o+"$"+s;d.arrowPathCacheKey=d.arrowPathCacheKey||{},d.arrowPathCache=d.arrowPathCache||{};d.arrowPathCacheKey[t]===b?(p=n=d.arrowPathCache[t],h=!0):(p=n=new Path2D,d.arrowPathCacheKey[t]=b,d.arrowPathCache[t]=p)}n.beginPath&&n.beginPath(),h||m.draw(n,y,l,v,i),!m.leavePathOpen&&n.closePath&&n.closePath(),n=f,"filled"!==r&&"both"!==r||(c?n.fill(p):n.fill()),"hollow"!==r&&"both"!==r||(n.lineWidth=m.matchEdgeWidth?i:1,n.lineJoin="miter",c?n.stroke(p):n.stroke())},e.exports=r},function(e,t,n){"use strict";var r={};r.safeDrawImage=function(e,t,n,r,i,a,o,s,l,u){i<=0||a<=0||l<=0||u<=0||e.drawImage(t,n,r,i,a,o,s,l,u)},r.drawInscribedImage=function(e,t,n,r,i){var a=this,o=n.position(),s=o.x,l=o.y,u=n.cy().style(),c=u.getIndexedStyle.bind(u),d=c(n,"background-fit","value",r),h=c(n,"background-repeat","value",r),p=n.width(),f=n.height(),v=2*n.padding(),g=p+("inner"===c(n,"background-width-relative-to","value",r)?0:v),y=f+("inner"===c(n,"background-height-relative-to","value",r)?0:v),m=n._private.rscratch,b=n.pstyle("background-clip").value,x="node"===b,w=c(n,"background-image-opacity","value",r)*i,E=t.width||t.cachedW,P=t.height||t.cachedH;null!=E&&null!=P||(document.body.appendChild(t),E=t.cachedW=t.width||t.offsetWidth,P=t.cachedH=t.height||t.offsetHeight,document.body.removeChild(t));var C=E,S=P;if("auto"!==c(n,"background-width","value",r)&&(C="%"===c(n,"background-width","units",r)?c(n,"background-width","pfValue",r)*g:c(n,"background-width","pfValue",r)),"auto"!==c(n,"background-height","value",r)&&(S="%"===c(n,"background-height","units",r)?c(n,"background-height","pfValue",r)*y:c(n,"background-height","pfValue",r)),0!==C&&0!==S){if("contain"===d){var T=Math.min(g/C,y/S);C*=T,S*=T}else if("cover"===d){var T=Math.max(g/C,y/S);C*=T,S*=T}var D=s-g/2;"%"===c(n,"background-position-x","units",r)?D+=(g-C)*c(n,"background-position-x","pfValue",r):D+=c(n,"background-position-x","pfValue",r);var k=l-y/2;"%"===c(n,"background-position-y","units",r)?k+=(y-S)*c(n,"background-position-y","pfValue",r):k+=c(n,"background-position-y","pfValue",r),m.pathCache&&(D-=s,k-=l,s=0,l=0);var _=e.globalAlpha;if(e.globalAlpha=w,"no-repeat"===h)x&&(e.save(),m.pathCache?e.clip(m.pathCache):(a.nodeShapes[a.getNodeShape(n)].draw(e,s,l,g,y),e.clip())),a.safeDrawImage(e,t,0,0,E,P,D,k,C,S),x&&e.restore();else{var M=e.createPattern(t,h);e.fillStyle=M,a.nodeShapes[a.getNodeShape(n)].draw(e,s,l,g,y),e.translate(D,k),e.fill(),e.translate(-D,-k)}e.globalAlpha=_}},e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,i,a){var a=a||5;e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath(),e.fill()}var i=n(1),a=n(2),o={};o.eleTextBiggerThanMin=function(e,t){if(!t){var n=e.cy().zoom(),r=this.getPixelRatio(),i=Math.ceil(a.log2(n*r));t=Math.pow(2,i)}return!(e.pstyle("font-size").pfValue*t<e.pstyle("min-zoomed-font-size").pfValue)},o.drawElementText=function(e,t,n){var r=this;if(void 0===n){if(!r.eleTextBiggerThanMin(t))return}else if(!n)return;if(t.isNode()){var i=t.pstyle("label");if(!i||!i.value)return;var a=t.pstyle("text-halign").strValue;t.pstyle("text-valign").strValue;switch(a){case"left":e.textAlign="right";break;case"right":e.textAlign="left";break;default:e.textAlign="center"}e.textBaseline="bottom"}else{var i=t.pstyle("label"),o=t.pstyle("source-label"),s=t.pstyle("target-label");if(!(i&&i.value||o&&o.value||s&&s.value))return;e.textAlign="center",e.textBaseline="bottom"}r.drawText(e,t),t.isEdge()&&(r.drawText(e,t,"source"),r.drawText(e,t,"target"))},o.drawNodeText=o.drawEdgeText=o.drawElementText,o.getFontCache=function(e){var t;this.fontCaches=this.fontCaches||[];for(var n=0;n<this.fontCaches.length;n++)if(t=this.fontCaches[n],t.context===e)return t;return t={context:e},this.fontCaches.push(t),t},o.setupTextStyle=function(e,t){var n=t.effectiveOpacity(),r=t.pstyle("font-style").strValue,i=t.pstyle("font-size").pfValue+"px",a=t.pstyle("font-family").strValue,o=t.pstyle("font-weight").strValue,s=t.pstyle("text-opacity").value*t.pstyle("opacity").value*n,l=t.pstyle("text-outline-opacity").value*s,u=t.pstyle("color").value,c=t.pstyle("text-outline-color").value,d=t._private.fontKey,h=this.getFontCache(e);h.key!==d&&(e.font=r+" "+o+" "+i+" "+a,h.key=d),e.lineJoin="round",this.fillStyle(e,u[0],u[1],u[2],s),this.strokeStyle(e,c[0],c[1],c[2],l)},o.drawText=function(e,t,n){var a=t._private,o=a.rscratch,s=t.effectiveOpacity();if(0!==s&&0!==t.pstyle("text-opacity").value){var l=i.getPrefixedProperty(o,"labelX",n),u=i.getPrefixedProperty(o,"labelY",n),c=this.getLabelText(t,n);if(null!=c&&""!==c&&!isNaN(l)&&!isNaN(u)){this.setupTextStyle(e,t);var d=n?n+"-":"",h=i.getPrefixedProperty(o,"labelWidth",n),p=i.getPrefixedProperty(o,"labelHeight",n),f=i.getPrefixedProperty(o,"labelAngle",n),v=t.pstyle(d+"text-margin-x").pfValue,g=t.pstyle(d+"text-margin-y").pfValue,y=t.isEdge(),m=(t.isNode(),t.pstyle("text-halign").value),b=t.pstyle("text-valign").value;y&&(m="center",b="center"),l+=v,u+=g;var x,w=t.pstyle("text-rotation");if(0!==(x="autorotate"===w.strValue?y?f:0:"none"===w.strValue?0:w.pfValue)){var E=l,P=u;e.translate(E,P),e.rotate(x),l=0,u=0}switch(b){case"top":break;case"center":u+=p/2;break;case"bottom":u+=p}var C=t.pstyle("text-background-opacity").value,S=t.pstyle("text-border-opacity").value,T=t.pstyle("text-border-width").pfValue,D=t.pstyle("text-background-padding").pfValue;if(C>0||T>0&&S>0){var k=l-D;switch(m){case"left":k-=h;break;case"center":k-=h/2}var _=u-p-D,M=h+2*D,I=p+2*D;if(C>0){var N=e.fillStyle,B=t.pstyle("text-background-color").value;e.fillStyle="rgba("+B[0]+","+B[1]+","+B[2]+","+C*s+")";"roundrectangle"==t.pstyle("text-background-shape").strValue?r(e,k,_,M,I,2):e.fillRect(k,_,M,I),e.fillStyle=N}if(T>0&&S>0){var z=e.strokeStyle,L=e.lineWidth,A=t.pstyle("text-border-color").value,O=t.pstyle("text-border-style").value;if(e.strokeStyle="rgba("+A[0]+","+A[1]+","+A[2]+","+S*s+")",e.lineWidth=T,e.setLineDash)switch(O){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"double":e.lineWidth=T/4,e.setLineDash([]);break;case"solid":e.setLineDash([])}if(e.strokeRect(k,_,M,I),"double"===O){var R=T/2;e.strokeRect(k+R,_+R,M-2*R,I-2*R)}e.setLineDash&&e.setLineDash([]),e.lineWidth=L,e.strokeStyle=z}}var V=2*t.pstyle("text-outline-width").pfValue;if(V>0&&(e.lineWidth=V),"wrap"===t.pstyle("text-wrap").value){var q=i.getPrefixedProperty(o,"labelWrapCachedLines",n),F=p/q.length;switch(b){case"top":u-=(q.length-1)*F;break;case"center":case"bottom":u-=(q.length-1)*F}for(var j=0;j<q.length;j++)V>0&&e.strokeText(q[j],l,u),e.fillText(q[j],l,u),u+=F}else V>0&&e.strokeText(c,l,u),e.fillText(c,l,u);0!==x&&(e.rotate(-x),e.translate(-E,-P))}}},e.exports=o},function(e,t,n){"use strict";var r=n(0),i={};i.drawNode=function(e,t,n,i){var a=this,o=void 0,s=void 0,l=t._private,u=l.rscratch,c=t.position();if(r.number(c.x)&&r.number(c.y)&&t.visible()){var d=t.effectiveOpacity(),h=a.usePaths(),p=void 0,f=!1,v=t.padding();o=t.width()+2*v,s=t.height()+2*v;var g=void 0;n&&(g=n,e.translate(-g.x1,-g.y1));for(var y=t.pstyle("background-image"),m=y.value,b=new Array(m.length),x=new Array(m.length),w=0,E=0;E<m.length;E++){var P=m[E];if(b[E]=null!=P&&"none"!==P){var C=t.cy().style().getIndexedStyle(t,"background-image-crossorigin","value",E);w++,x[E]=a.getCachedImage(P,C,function(){t.emitAndNotify("background")})}}var S=t.pstyle("background-blacken").value,T=t.pstyle("border-width").pfValue,D=t.pstyle("background-color").value,k=t.pstyle("background-opacity").value*d,_=t.pstyle("border-color").value,M=t.pstyle("border-style").value,I=t.pstyle("border-opacity").value*d;e.lineJoin="miter";var N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;a.fillStyle(e,D[0],D[1],D[2],t)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;a.strokeStyle(e,_[0],_[1],_[2],t)},z=t.pstyle("shape").strValue,L=t.pstyle("shape-polygon-points").pfValue;if(h){var A=z+"$"+o+"$"+s+("polygon"===z?"$"+L.join("$"):"");e.translate(c.x,c.y),u.pathCacheKey===A?(p=u.pathCache,f=!0):(p=new Path2D,u.pathCacheKey=A,u.pathCache=p)}var O=function(){if(!f){var n=c;h&&(n={x:0,y:0}),a.nodeShapes[a.getNodeShape(t)].draw(p||e,n.x,n.y,o,s)}h?e.fill(p):e.fill()},R=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=l.backgrounding,i=0,o=0;o<x.length;o++)b[o]&&x[o].complete&&!x[o].error&&(i++,a.drawInscribedImage(e,x[o],t,o,n));l.backgrounding=!(i===w),r!==l.backgrounding&&t.updateStyle(!1)},V=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;a.hasPie(t)&&(a.drawPie(e,t,r),n&&(h||a.nodeShapes[a.getNodeShape(t)].draw(e,c.x,c.y,o,s)))},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=(S>0?S:-S)*t,r=S>0?0:255;0!==S&&(a.fillStyle(e,r,r,r,n),h?e.fill(p):e.fill())},F=function(){if(T>0){if(e.lineWidth=T,e.lineCap="butt",e.setLineDash)switch(M){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"solid":case"double":e.setLineDash([])}if(h?e.stroke(p):e.stroke(),"double"===M){e.lineWidth=T/3;var t=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",h?e.stroke(p):e.stroke(),e.globalCompositeOperation=t}e.setLineDash&&e.setLineDash([])}};if("yes"===t.pstyle("ghost").value){var j=t.pstyle("ghost-offset-x").pfValue,X=t.pstyle("ghost-offset-y").pfValue,Y=t.pstyle("ghost-opacity").value,W=Y*d;e.translate(j,X),N(Y*k),O(),R(W),V(0!==S||0!==T),q(W),B(Y*I),F(),e.translate(-j,-X)}N(),O(),R(),V(0!==S||0!==T),q(),B(),F(),h&&e.translate(-c.x,-c.y),function(){a.drawElementText(e,t,i)}(),function(){var n=t.pstyle("overlay-padding").pfValue,r=t.pstyle("overlay-opacity").value,i=t.pstyle("overlay-color").value;r>0&&(a.fillStyle(e,i[0],i[1],i[2],r),a.nodeShapes.roundrectangle.draw(e,c.x,c.y,o+2*n,s+2*n),e.fill())}(),n&&e.translate(g.x1,g.y1)}},i.hasPie=function(e){return e=e[0],e._private.hasPie},i.drawPie=function(e,t,n,r){t=t[0],r=r||t.position();var i=t.cy().style(),a=t.pstyle("pie-size"),o=r.x,s=r.y,l=t.width(),u=t.height(),c=Math.min(l,u)/2,d=0;this.usePaths()&&(o=0,s=0),"%"===a.units?c*=a.pfValue:void 0!==a.pfValue&&(c=a.pfValue/2);for(var h=1;h<=i.pieBackgroundN;h++){var p=t.pstyle("pie-"+h+"-background-size").value,f=t.pstyle("pie-"+h+"-background-color").value,v=t.pstyle("pie-"+h+"-background-opacity").value*n,g=p/100;g+d>1&&(g=1-d);var y=1.5*Math.PI+2*Math.PI*d,m=2*Math.PI*g,b=y+m;0===p||d>=1||d+g>1||(e.beginPath(),e.moveTo(o,s),e.arc(o,s,c,y,b),e.closePath(),this.fillStyle(e,f[0],f[1],f[2],v),e.fill(),d+=g)}},e.exports=i},function(e,t,n){"use strict";var r={},i=n(1);r.getPixelRatio=function(){var e=this.data.contexts[0];if(null!=this.forcedPixelRatio)return this.forcedPixelRatio;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},r.paintCache=function(e){for(var t,n=this.paintCaches=this.paintCaches||[],r=!0,i=0;i<n.length;i++)if(t=n[i],t.context===e){r=!1;break}return r&&(t={context:e},n.push(t)),t},r.fillStyle=function(e,t,n,r,i){e.fillStyle="rgba("+t+","+n+","+r+","+i+")"},r.strokeStyle=function(e,t,n,r,i){e.strokeStyle="rgba("+t+","+n+","+r+","+i+")"},r.matchCanvasSize=function(e){var t=this,n=t.data,r=t.findContainerClientCoords(),i=r[2],a=r[3],o=t.getPixelRatio(),s=t.motionBlurPxRatio;e!==t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE]&&e!==t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]||(o=s);var l,u=i*o,c=a*o;if(u!==t.canvasWidth||c!==t.canvasHeight){t.fontCaches=null;var d=n.canvasContainer;d.style.width=i+"px",d.style.height=a+"px";for(var h=0;h<t.CANVAS_LAYERS;h++)l=n.canvases[h],l.width=u,l.height=c,l.style.width=i+"px",l.style.height=a+"px";for(var h=0;h<t.BUFFER_COUNT;h++)l=n.bufferCanvases[h],l.width=u,l.height=c,l.style.width=i+"px",l.style.height=a+"px";t.textureMult=1,o<=1&&(l=n.bufferCanvases[t.TEXTURE_BUFFER],t.textureMult=2,l.width=u*t.textureMult,l.height=c*t.textureMult),t.canvasWidth=u,t.canvasHeight=c}},r.renderTo=function(e,t,n,r){this.render({forcedContext:e,forcedZoom:t,forcedPan:n,drawAllLayers:!0,forcedPxRatio:r})},r.render=function(e){function t(e,t,n,r,i){var a=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",u.fillStyle(e,255,255,255,u.motionBlurTransparency),e.fillRect(t,n,r,i),e.globalCompositeOperation=a}function n(e,n){var i,o,c,d;u.clearingMotionBlur||e!==h.bufferContexts[u.MOTIONBLUR_BUFFER_NODE]&&e!==h.bufferContexts[u.MOTIONBLUR_BUFFER_DRAG]?(i=S,o=P,c=u.canvasWidth,d=u.canvasHeight):(i={x:C.x*g,y:C.y*g},o=E*g,c=u.canvasWidth*g,d=u.canvasHeight*g),e.setTransform(1,0,0,1,0,0),"motionBlur"===n?t(e,0,0,c,d):r||void 0!==n&&!n||e.clearRect(0,0,c,d),a||(e.translate(i.x,i.y),e.scale(o,o)),l&&e.translate(l.x,l.y),s&&e.scale(s,s)}e=e||i.staticEmptyObject();var r=e.forcedContext,a=e.drawAllLayers,o=e.drawOnlyNodeLayer,s=e.forcedZoom,l=e.forcedPan,u=this,c=void 0===e.forcedPxRatio?this.getPixelRatio():e.forcedPxRatio,d=u.cy,h=u.data,p=h.canvasNeedsRedraw,f=u.textureOnViewport&&!r&&(u.pinching||u.hoverData.dragging||u.swipePanning||u.data.wheelZooming),v=void 0!==e.motionBlur?e.motionBlur:u.motionBlur,g=u.motionBlurPxRatio,y=d.hasCompoundNodes(),m=u.hoverData.draggingEles,b=!(!u.hoverData.selecting&&!u.touchData.selecting);v=v&&!r&&u.motionBlurEnabled&&!b;var x=v;r||(u.prevPxRatio!==c&&(u.invalidateContainerClientCoordsCache(),u.matchCanvasSize(u.container),u.redrawHint("eles",!0),u.redrawHint("drag",!0)),u.prevPxRatio=c),!r&&u.motionBlurTimeout&&clearTimeout(u.motionBlurTimeout),v&&(null==u.mbFrames&&(u.mbFrames=0),u.mbFrames++,u.mbFrames<3&&(x=!1),u.mbFrames>u.minMbLowQualFrames&&(u.motionBlurPxRatio=u.mbPxRBlurry)),u.clearingMotionBlur&&(u.motionBlurPxRatio=1),u.textureDrawLastFrame&&!f&&(p[u.NODE]=!0,p[u.SELECT_BOX]=!0);var w=d.style()._private.coreStyle,E=d.zoom(),P=void 0!==s?s:E,C=d.pan(),S={x:C.x,y:C.y},T={zoom:E,pan:{x:C.x,y:C.y}},D=u.prevViewport;void 0===D||T.zoom!==D.zoom||T.pan.x!==D.pan.x||T.pan.y!==D.pan.y||m&&!y||(u.motionBlurPxRatio=1),l&&(S=l),P*=c,S.x*=c,S.y*=c;var k=u.getCachedZSortedEles();if(f||(u.textureDrawLastFrame=!1),f){u.textureDrawLastFrame=!0;if(!u.textureCache){u.textureCache={},u.textureCache.bb=d.mutableElements().boundingBox(),u.textureCache.texture=u.data.bufferCanvases[u.TEXTURE_BUFFER];var _=u.data.bufferContexts[u.TEXTURE_BUFFER];_.setTransform(1,0,0,1,0,0),_.clearRect(0,0,u.canvasWidth*u.textureMult,u.canvasHeight*u.textureMult),u.render({forcedContext:_,drawOnlyNodeLayer:!0,forcedPxRatio:c*u.textureMult});var T=u.textureCache.viewport={zoom:d.zoom(),pan:d.pan(),width:u.canvasWidth,height:u.canvasHeight};T.mpan={x:(0-T.pan.x)/T.zoom,y:(0-T.pan.y)/T.zoom}}p[u.DRAG]=!1,p[u.NODE]=!1;var M=h.contexts[u.NODE],I=u.textureCache.texture,T=u.textureCache.viewport;u.textureCache.bb,M.setTransform(1,0,0,1,0,0),v?t(M,0,0,T.width,T.height):M.clearRect(0,0,T.width,T.height);var N=w["outside-texture-bg-color"].value,B=w["outside-texture-bg-opacity"].value;u.fillStyle(M,N[0],N[1],N[2],B),M.fillRect(0,0,T.width,T.height);var E=d.zoom();n(M,!1),M.clearRect(T.mpan.x,T.mpan.y,T.width/T.zoom/c,T.height/T.zoom/c),M.drawImage(I,T.mpan.x,T.mpan.y,T.width/T.zoom/c,T.height/T.zoom/c)}else u.textureOnViewport&&!r&&(u.textureCache=null);var z=d.extent(),L=u.pinching||u.hoverData.dragging||u.swipePanning||u.data.wheelZooming||u.hoverData.draggingEles,A=u.hideEdgesOnViewport&&L,O=[];if(O[u.NODE]=!p[u.NODE]&&v&&!u.clearedForMotionBlur[u.NODE]||u.clearingMotionBlur,O[u.NODE]&&(u.clearedForMotionBlur[u.NODE]=!0),O[u.DRAG]=!p[u.DRAG]&&v&&!u.clearedForMotionBlur[u.DRAG]||u.clearingMotionBlur,O[u.DRAG]&&(u.clearedForMotionBlur[u.DRAG]=!0),p[u.NODE]||a||o||O[u.NODE]){var R=v&&!O[u.NODE]&&1!==g,M=r||(R?u.data.bufferContexts[u.MOTIONBLUR_BUFFER_NODE]:h.contexts[u.NODE]);n(M,v&&!R?"motionBlur":void 0),A?u.drawCachedNodes(M,k.nondrag,c,z):u.drawLayeredElements(M,k.nondrag,c,z),u.debug&&u.drawDebugPoints(M,k.nondrag),a||v||(p[u.NODE]=!1)}if(!o&&(p[u.DRAG]||a||O[u.DRAG])){var R=v&&!O[u.DRAG]&&1!==g,M=r||(R?u.data.bufferContexts[u.MOTIONBLUR_BUFFER_DRAG]:h.contexts[u.DRAG]);n(M,v&&!R?"motionBlur":void 0),A?u.drawCachedNodes(M,k.drag,c,z):u.drawCachedElements(M,k.drag,c,z),u.debug&&u.drawDebugPoints(M,k.drag),a||v||(p[u.DRAG]=!1)}if(u.showFps||!o&&p[u.SELECT_BOX]&&!a){var M=r||h.contexts[u.SELECT_BOX];if(n(M),1==u.selection[4]&&(u.hoverData.selecting||u.touchData.selecting)){var E=u.cy.zoom(),V=w["selection-box-border-width"].value/E;M.lineWidth=V,M.fillStyle="rgba("+w["selection-box-color"].value[0]+","+w["selection-box-color"].value[1]+","+w["selection-box-color"].value[2]+","+w["selection-box-opacity"].value+")",M.fillRect(u.selection[0],u.selection[1],u.selection[2]-u.selection[0],u.selection[3]-u.selection[1]),V>0&&(M.strokeStyle="rgba("+w["selection-box-border-color"].value[0]+","+w["selection-box-border-color"].value[1]+","+w["selection-box-border-color"].value[2]+","+w["selection-box-opacity"].value+")",M.strokeRect(u.selection[0],u.selection[1],u.selection[2]-u.selection[0],u.selection[3]-u.selection[1]))}if(h.bgActivePosistion&&!u.hoverData.selecting){var E=u.cy.zoom(),q=h.bgActivePosistion;M.fillStyle="rgba("+w["active-bg-color"].value[0]+","+w["active-bg-color"].value[1]+","+w["active-bg-color"].value[2]+","+w["active-bg-opacity"].value+")",M.beginPath(),M.arc(q.x,q.y,w["active-bg-size"].pfValue/E,0,2*Math.PI),M.fill()}var F=u.lastRedrawTime;if(u.showFps&&F){F=Math.round(F);var j=Math.round(1e3/F);M.setTransform(1,0,0,1,0,0),M.fillStyle="rgba(255, 0, 0, 0.75)",M.strokeStyle="rgba(255, 0, 0, 0.75)",M.lineWidth=1,M.fillText("1 frame = "+F+" ms = "+j+" fps",0,20);M.strokeRect(0,30,250,20),M.fillRect(0,30,250*Math.min(j/60,1),20)}a||(p[u.SELECT_BOX]=!1)}if(v&&1!==g){var X=h.contexts[u.NODE],Y=u.data.bufferCanvases[u.MOTIONBLUR_BUFFER_NODE],W=h.contexts[u.DRAG],H=u.data.bufferCanvases[u.MOTIONBLUR_BUFFER_DRAG],Z=function(e,n,r){e.setTransform(1,0,0,1,0,0),r||!x?e.clearRect(0,0,u.canvasWidth,u.canvasHeight):t(e,0,0,u.canvasWidth,u.canvasHeight);var i=g;e.drawImage(n,0,0,u.canvasWidth*i,u.canvasHeight*i,0,0,u.canvasWidth,u.canvasHeight)};(p[u.NODE]||O[u.NODE])&&(Z(X,Y,O[u.NODE]),p[u.NODE]=!1),(p[u.DRAG]||O[u.DRAG])&&(Z(W,H,O[u.DRAG]),p[u.DRAG]=!1)}u.prevViewport=T,u.clearingMotionBlur&&(u.clearingMotionBlur=!1,u.motionBlurCleared=!0,u.motionBlur=!0),v&&(u.motionBlurTimeout=setTimeout(function(){u.motionBlurTimeout=null,u.clearedForMotionBlur[u.NODE]=!1,u.clearedForMotionBlur[u.DRAG]=!1,u.motionBlur=!1,u.clearingMotionBlur=!f,u.mbFrames=0,p[u.NODE]=!0,p[u.DRAG]=!0,u.redraw()},100)),r||d.emit("render")},e.exports=r},function(e,t,n){"use strict";var r=n(2),i={};i.drawPolygonPath=function(e,t,n,r,i,a){var o=r/2,s=i/2;e.beginPath&&e.beginPath(),e.moveTo(t+o*a[0],n+s*a[1]);for(var l=1;l<a.length/2;l++)e.lineTo(t+o*a[2*l],n+s*a[2*l+1]);e.closePath()},i.drawRoundRectanglePath=function(e,t,n,i,a){var o=i/2,s=a/2,l=r.getRoundRectangleRadius(i,a);e.beginPath&&e.beginPath(),e.moveTo(t,n-s),e.arcTo(t+o,n-s,t+o,n,l),e.arcTo(t+o,n+s,t,n+s,l),e.arcTo(t-o,n+s,t-o,n,l),e.arcTo(t-o,n-s,t,n-s,l),e.lineTo(t,n-s),e.closePath()},i.drawBottomRoundRectanglePath=function(e,t,n,i,a){var o=i/2,s=a/2,l=r.getRoundRectangleRadius(i,a);e.beginPath&&e.beginPath(),e.moveTo(t,n-s),e.lineTo(t+o,n-s),e.lineTo(t+o,n),e.arcTo(t+o,n+s,t,n+s,l),e.arcTo(t-o,n+s,t-o,n,l),e.lineTo(t-o,n-s),e.lineTo(t,n-s),e.closePath()},i.drawCutRectanglePath=function(e,t,n,i,a){var o=i/2,s=a/2,l=r.getCutRectangleCornerLength();e.beginPath&&e.beginPath(),e.moveTo(t-o+l,n-s),e.lineTo(t+o-l,n-s),e.lineTo(t+o,n-s+l),e.lineTo(t+o,n+s-l),e.lineTo(t+o-l,n+s),e.lineTo(t-o+l,n+s),e.lineTo(t-o,n+s-l),e.lineTo(t-o,n-s+l),e.closePath()},i.drawBarrelPath=function(e,t,n,i,a){var o=i/2,s=a/2,l=t-o,u=t+o,c=n-s,d=n+s,h=r.getBarrelCurveConstants(i,a),p=h.widthOffset,f=h.heightOffset,v=h.ctrlPtOffsetPct*p;e.beginPath&&e.beginPath(),e.moveTo(l,c+f),e.lineTo(l,d-f),e.quadraticCurveTo(l+v,d,l+p,d),e.lineTo(u-p,d),e.quadraticCurveTo(u-v,d,u,d-f),e.lineTo(u,c+f),e.quadraticCurveTo(u-v,c,u-p,c),e.lineTo(l+p,c),e.quadraticCurveTo(l+v,c,l,c+f),e.closePath()};for(var a=Math.sin(0),o=Math.cos(0),s={},l={},u=Math.PI/40,c=0*Math.PI;c<2*Math.PI;c+=u)s[c]=Math.sin(c),l[c]=Math.cos(c);i.drawEllipsePath=function(e,t,n,r,i){if(e.beginPath&&e.beginPath(),e.ellipse)e.ellipse(t,n,r/2,i/2,0,0,2*Math.PI);else for(var c,d,h=r/2,p=i/2,f=0*Math.PI;f<2*Math.PI;f+=u)c=t-h*s[f]*a+h*l[f]*o,d=n+p*l[f]*a+p*s[f]*o,0===f?e.moveTo(c,d):e.lineTo(c,d);e.closePath()},e.exports=i},function(e,t,n){"use strict";function r(e,t){for(var n=atob(e),r=new ArrayBuffer(n.length),i=new Uint8Array(r),a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new Blob([r],{type:t})}function i(e){var t=e.indexOf(",");return e.substr(t+1)}function a(e,t,n){var a=t.toDataURL(n,e.quality);switch(e.output){case"blob":return r(i(a),n);case"base64":return i(a);case"base64uri":default:return a}}var o=n(0),s={};s.createBuffer=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,[n,n.getContext("2d")]},s.bufferCanvasImage=function(e){var t=this.cy,n=t.mutableElements(),r=n.boundingBox(),i=this.findContainerClientCoords(),a=e.full?Math.ceil(r.w):i[2],s=e.full?Math.ceil(r.h):i[3],l=o.number(e.maxWidth)||o.number(e.maxHeight),u=this.getPixelRatio(),c=1;if(void 0!==e.scale)a*=e.scale,s*=e.scale,c=e.scale;else if(l){var d=1/0,h=1/0;o.number(e.maxWidth)&&(d=c*e.maxWidth/a),o.number(e.maxHeight)&&(h=c*e.maxHeight/s),c=Math.min(d,h),a*=c,s*=c}l||(a*=u,s*=u,c*=u);var p=document.createElement("canvas");p.width=a,p.height=s,p.style.width=a+"px",p.style.height=s+"px";var f=p.getContext("2d");if(a>0&&s>0){f.clearRect(0,0,a,s),f.globalCompositeOperation="source-over";var v=this.getCachedZSortedEles();if(e.full)f.translate(-r.x1*c,-r.y1*c),f.scale(c,c),this.drawElements(f,v),f.scale(1/c,1/c),f.translate(r.x1*c,r.y1*c);else{var g=t.pan(),y={x:g.x*c,y:g.y*c};c*=t.zoom(),f.translate(y.x,y.y),f.scale(c,c),this.drawElements(f,v),f.scale(1/c,1/c),f.translate(-y.x,-y.y)}e.bg&&(f.globalCompositeOperation="destination-over",f.fillStyle=e.bg,f.rect(0,0,a,s),f.fill())}return p},s.png=function(e){return a(e,this.bufferCanvasImage(e),"image/png")},s.jpg=function(e){return a(e,this.bufferCanvasImage(e),"image/jpeg")},e.exports=s},function(e,t,n){"use strict";var r={};r.nodeShapeImpl=function(e,t,n,r,i,a,o){switch(e){case"ellipse":return this.drawEllipsePath(t,n,r,i,a);case"polygon":return this.drawPolygonPath(t,n,r,i,a,o);case"roundrectangle":return this.drawRoundRectanglePath(t,n,r,i,a);case"cutrectangle":return this.drawCutRectanglePath(t,n,r,i,a);case"bottomroundrectangle":return this.drawBottomRoundRectanglePath(t,n,r,i,a);case"barrel":return this.drawBarrelPath(t,n,r,i,a)}},e.exports=r},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(18),o=function e(){if(!(this instanceof e))return new e;this.length=0},s=o.prototype;s.instanceString=function(){return"stylesheet"},s.selector=function(e){return this[this.length++]={selector:e,properties:[]},this},s.css=function(e,t){var n=this.length-1;if(r.string(e))this[n].properties.push({name:e,value:t});else if(r.plainObject(e))for(var o=e,s=0;s<a.properties.length;s++){var l=a.properties[s],u=o[l.name];if(void 0===u&&(u=o[i.dash2camel(l.name)]),void 0!==u){var c=l.name,d=u;this[n].properties.push({name:c,value:d})}}return this},s.style=s.css,s.generateStyle=function(e){var t=new a(e);return this.appendToStyle(t)},s.appendToStyle=function(e){for(var t=0;t<this.length;t++){var n=this[t],r=n.selector,i=n.properties;e.selector(r);for(var a=0;a<i.length;a++){var o=i[a];e.css(o.name,o.value)}}return e},e.exports=o},function(e,t,n){"use strict";e.exports="3.2.14"}])});
;(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dagre=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){
/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
module.exports={graphlib:require("./lib/graphlib"),layout:require("./lib/layout"),debug:require("./lib/debug"),util:{time:require("./lib/util").time,notime:require("./lib/util").notime},version:require("./lib/version")}},{"./lib/debug":6,"./lib/graphlib":7,"./lib/layout":9,"./lib/util":29,"./lib/version":30}],2:[function(require,module,exports){"use strict";var _=require("./lodash"),greedyFAS=require("./greedy-fas");module.exports={run:run,undo:undo};function run(g){var fas=g.graph().acyclicer==="greedy"?greedyFAS(g,weightFn(g)):dfsFAS(g);_.forEach(fas,function(e){var label=g.edge(e);g.removeEdge(e);label.forwardName=e.name;label.reversed=true;g.setEdge(e.w,e.v,label,_.uniqueId("rev"))});function weightFn(g){return function(e){return g.edge(e).weight}}}function dfsFAS(g){var fas=[],stack={},visited={};function dfs(v){if(_.has(visited,v)){return}visited[v]=true;stack[v]=true;_.forEach(g.outEdges(v),function(e){if(_.has(stack,e.w)){fas.push(e)}else{dfs(e.w)}});delete stack[v]}_.forEach(g.nodes(),dfs);return fas}function undo(g){_.forEach(g.edges(),function(e){var label=g.edge(e);if(label.reversed){g.removeEdge(e);var forwardName=label.forwardName;delete label.reversed;delete label.forwardName;g.setEdge(e.w,e.v,label,forwardName)}})}},{"./greedy-fas":8,"./lodash":10}],3:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports=addBorderSegments;function addBorderSegments(g){function dfs(v){var children=g.children(v),node=g.node(v);if(children.length){_.forEach(children,dfs)}if(_.has(node,"minRank")){node.borderLeft=[];node.borderRight=[];for(var rank=node.minRank,maxRank=node.maxRank+1;rank<maxRank;++rank){addBorderNode(g,"borderLeft","_bl",v,node,rank);addBorderNode(g,"borderRight","_br",v,node,rank)}}}_.forEach(g.children(),dfs)}function addBorderNode(g,prop,prefix,sg,sgNode,rank){var label={width:0,height:0,rank:rank,borderType:prop},prev=sgNode[prop][rank-1],curr=util.addDummyNode(g,"border",label,prefix);sgNode[prop][rank]=curr;g.setParent(curr,sg);if(prev){g.setEdge(prev,curr,{weight:1})}}},{"./lodash":10,"./util":29}],4:[function(require,module,exports){"use strict";var _=require("./lodash");module.exports={adjust:adjust,undo:undo};function adjust(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="lr"||rankDir==="rl"){swapWidthHeight(g)}}function undo(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="bt"||rankDir==="rl"){reverseY(g)}if(rankDir==="lr"||rankDir==="rl"){swapXY(g);swapWidthHeight(g)}}function swapWidthHeight(g){_.forEach(g.nodes(),function(v){swapWidthHeightOne(g.node(v))});_.forEach(g.edges(),function(e){swapWidthHeightOne(g.edge(e))})}function swapWidthHeightOne(attrs){var w=attrs.width;attrs.width=attrs.height;attrs.height=w}function reverseY(g){_.forEach(g.nodes(),function(v){reverseYOne(g.node(v))});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,reverseYOne);if(_.has(edge,"y")){reverseYOne(edge)}})}function reverseYOne(attrs){attrs.y=-attrs.y}function swapXY(g){_.forEach(g.nodes(),function(v){swapXYOne(g.node(v))});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,swapXYOne);if(_.has(edge,"x")){swapXYOne(edge)}})}function swapXYOne(attrs){var x=attrs.x;attrs.x=attrs.y;attrs.y=x}},{"./lodash":10}],5:[function(require,module,exports){
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */
module.exports=List;function List(){var sentinel={};sentinel._next=sentinel._prev=sentinel;this._sentinel=sentinel}List.prototype.dequeue=function(){var sentinel=this._sentinel,entry=sentinel._prev;if(entry!==sentinel){unlink(entry);return entry}};List.prototype.enqueue=function(entry){var sentinel=this._sentinel;if(entry._prev&&entry._next){unlink(entry)}entry._next=sentinel._next;sentinel._next._prev=entry;sentinel._next=entry;entry._prev=sentinel};List.prototype.toString=function(){var strs=[],sentinel=this._sentinel,curr=sentinel._prev;while(curr!==sentinel){strs.push(JSON.stringify(curr,filterOutLinks));curr=curr._prev}return"["+strs.join(", ")+"]"};function unlink(entry){entry._prev._next=entry._next;entry._next._prev=entry._prev;delete entry._next;delete entry._prev}function filterOutLinks(k,v){if(k!=="_next"&&k!=="_prev"){return v}}},{}],6:[function(require,module,exports){var _=require("./lodash"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports={debugOrdering:debugOrdering};
/* istanbul ignore next */function debugOrdering(g){var layerMatrix=util.buildLayerMatrix(g);var h=new Graph({compound:true,multigraph:true}).setGraph({});_.forEach(g.nodes(),function(v){h.setNode(v,{label:v});h.setParent(v,"layer"+g.node(v).rank)});_.forEach(g.edges(),function(e){h.setEdge(e.v,e.w,{},e.name)});_.forEach(layerMatrix,function(layer,i){var layerV="layer"+i;h.setNode(layerV,{rank:"same"});_.reduce(layer,function(u,v){h.setEdge(u,v,{style:"invis"});return v})});return h}},{"./graphlib":7,"./lodash":10,"./util":29}],7:[function(require,module,exports){
/* global window */
var graphlib;if(typeof require==="function"){try{graphlib=require("graphlib")}catch(e){}}if(!graphlib){graphlib=window.graphlib}module.exports=graphlib},{graphlib:31}],8:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graphlib").Graph,List=require("./data/list");
/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */module.exports=greedyFAS;var DEFAULT_WEIGHT_FN=_.constant(1);function greedyFAS(g,weightFn){if(g.nodeCount()<=1){return[]}var state=buildState(g,weightFn||DEFAULT_WEIGHT_FN);var results=doGreedyFAS(state.graph,state.buckets,state.zeroIdx);
// Expand multi-edges
return _.flatten(_.map(results,function(e){return g.outEdges(e.v,e.w)}),true)}function doGreedyFAS(g,buckets,zeroIdx){var results=[],sources=buckets[buckets.length-1],sinks=buckets[0];var entry;while(g.nodeCount()){while(entry=sinks.dequeue()){removeNode(g,buckets,zeroIdx,entry)}while(entry=sources.dequeue()){removeNode(g,buckets,zeroIdx,entry)}if(g.nodeCount()){for(var i=buckets.length-2;i>0;--i){entry=buckets[i].dequeue();if(entry){results=results.concat(removeNode(g,buckets,zeroIdx,entry,true));break}}}}return results}function removeNode(g,buckets,zeroIdx,entry,collectPredecessors){var results=collectPredecessors?[]:undefined;_.forEach(g.inEdges(entry.v),function(edge){var weight=g.edge(edge),uEntry=g.node(edge.v);if(collectPredecessors){results.push({v:edge.v,w:edge.w})}uEntry.out-=weight;assignBucket(buckets,zeroIdx,uEntry)});_.forEach(g.outEdges(entry.v),function(edge){var weight=g.edge(edge),w=edge.w,wEntry=g.node(w);wEntry["in"]-=weight;assignBucket(buckets,zeroIdx,wEntry)});g.removeNode(entry.v);return results}function buildState(g,weightFn){var fasGraph=new Graph,maxIn=0,maxOut=0;_.forEach(g.nodes(),function(v){fasGraph.setNode(v,{v:v,in:0,out:0})});
// Aggregate weights on nodes, but also sum the weights across multi-edges
// into a single edge for the fasGraph.
_.forEach(g.edges(),function(e){var prevWeight=fasGraph.edge(e.v,e.w)||0,weight=weightFn(e),edgeWeight=prevWeight+weight;fasGraph.setEdge(e.v,e.w,edgeWeight);maxOut=Math.max(maxOut,fasGraph.node(e.v).out+=weight);maxIn=Math.max(maxIn,fasGraph.node(e.w)["in"]+=weight)});var buckets=_.range(maxOut+maxIn+3).map(function(){return new List});var zeroIdx=maxIn+1;_.forEach(fasGraph.nodes(),function(v){assignBucket(buckets,zeroIdx,fasGraph.node(v))});return{graph:fasGraph,buckets:buckets,zeroIdx:zeroIdx}}function assignBucket(buckets,zeroIdx,entry){if(!entry.out){buckets[0].enqueue(entry)}else if(!entry["in"]){buckets[buckets.length-1].enqueue(entry)}else{buckets[entry.out-entry["in"]+zeroIdx].enqueue(entry)}}},{"./data/list":5,"./graphlib":7,"./lodash":10}],9:[function(require,module,exports){"use strict";var _=require("./lodash"),acyclic=require("./acyclic"),normalize=require("./normalize"),rank=require("./rank"),normalizeRanks=require("./util").normalizeRanks,parentDummyChains=require("./parent-dummy-chains"),removeEmptyRanks=require("./util").removeEmptyRanks,nestingGraph=require("./nesting-graph"),addBorderSegments=require("./add-border-segments"),coordinateSystem=require("./coordinate-system"),order=require("./order"),position=require("./position"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports=layout;function layout(g,opts){var time=opts&&opts.debugTiming?util.time:util.notime;time("layout",function(){var layoutGraph=time("  buildLayoutGraph",function(){return buildLayoutGraph(g)});time("  runLayout",function(){runLayout(layoutGraph,time)});time("  updateInputGraph",function(){updateInputGraph(g,layoutGraph)})})}function runLayout(g,time){time("    makeSpaceForEdgeLabels",function(){makeSpaceForEdgeLabels(g)});time("    removeSelfEdges",function(){removeSelfEdges(g)});time("    acyclic",function(){acyclic.run(g)});time("    nestingGraph.run",function(){nestingGraph.run(g)});time("    rank",function(){rank(util.asNonCompoundGraph(g))});time("    injectEdgeLabelProxies",function(){injectEdgeLabelProxies(g)});time("    removeEmptyRanks",function(){removeEmptyRanks(g)});time("    nestingGraph.cleanup",function(){nestingGraph.cleanup(g)});time("    normalizeRanks",function(){normalizeRanks(g)});time("    assignRankMinMax",function(){assignRankMinMax(g)});time("    removeEdgeLabelProxies",function(){removeEdgeLabelProxies(g)});time("    normalize.run",function(){normalize.run(g)});time("    parentDummyChains",function(){parentDummyChains(g)});time("    addBorderSegments",function(){addBorderSegments(g)});time("    order",function(){order(g)});time("    insertSelfEdges",function(){insertSelfEdges(g)});time("    adjustCoordinateSystem",function(){coordinateSystem.adjust(g)});time("    position",function(){position(g)});time("    positionSelfEdges",function(){positionSelfEdges(g)});time("    removeBorderNodes",function(){removeBorderNodes(g)});time("    normalize.undo",function(){normalize.undo(g)});time("    fixupEdgeLabelCoords",function(){fixupEdgeLabelCoords(g)});time("    undoCoordinateSystem",function(){coordinateSystem.undo(g)});time("    translateGraph",function(){translateGraph(g)});time("    assignNodeIntersects",function(){assignNodeIntersects(g)});time("    reversePoints",function(){reversePointsForReversedEdges(g)});time("    acyclic.undo",function(){acyclic.undo(g)})}
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */function updateInputGraph(inputGraph,layoutGraph){_.forEach(inputGraph.nodes(),function(v){var inputLabel=inputGraph.node(v),layoutLabel=layoutGraph.node(v);if(inputLabel){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y;if(layoutGraph.children(v).length){inputLabel.width=layoutLabel.width;inputLabel.height=layoutLabel.height}}});_.forEach(inputGraph.edges(),function(e){var inputLabel=inputGraph.edge(e),layoutLabel=layoutGraph.edge(e);inputLabel.points=layoutLabel.points;if(_.has(layoutLabel,"x")){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y}});inputGraph.graph().width=layoutGraph.graph().width;inputGraph.graph().height=layoutGraph.graph().height}var graphNumAttrs=["nodesep","edgesep","ranksep","marginx","marginy"],graphDefaults={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},graphAttrs=["acyclicer","ranker","rankdir","align"],nodeNumAttrs=["width","height"],nodeDefaults={width:0,height:0},edgeNumAttrs=["minlen","weight","width","height","labeloffset"],edgeDefaults={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},edgeAttrs=["labelpos"];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */function buildLayoutGraph(inputGraph){var g=new Graph({multigraph:true,compound:true}),graph=canonicalize(inputGraph.graph());g.setGraph(_.merge({},graphDefaults,selectNumberAttrs(graph,graphNumAttrs),_.pick(graph,graphAttrs)));_.forEach(inputGraph.nodes(),function(v){var node=canonicalize(inputGraph.node(v));g.setNode(v,_.defaults(selectNumberAttrs(node,nodeNumAttrs),nodeDefaults));g.setParent(v,inputGraph.parent(v))});_.forEach(inputGraph.edges(),function(e){var edge=canonicalize(inputGraph.edge(e));g.setEdge(e,_.merge({},edgeDefaults,selectNumberAttrs(edge,edgeNumAttrs),_.pick(edge,edgeAttrs)))});return g}
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */function makeSpaceForEdgeLabels(g){var graph=g.graph();graph.ranksep/=2;_.forEach(g.edges(),function(e){var edge=g.edge(e);edge.minlen*=2;if(edge.labelpos.toLowerCase()!=="c"){if(graph.rankdir==="TB"||graph.rankdir==="BT"){edge.width+=edge.labeloffset}else{edge.height+=edge.labeloffset}}})}
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */function injectEdgeLabelProxies(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.width&&edge.height){var v=g.node(e.v),w=g.node(e.w),label={rank:(w.rank-v.rank)/2+v.rank,e:e};util.addDummyNode(g,"edge-proxy",label,"_ep")}})}function assignRankMinMax(g){var maxRank=0;_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.borderTop){node.minRank=g.node(node.borderTop).rank;node.maxRank=g.node(node.borderBottom).rank;maxRank=_.max(maxRank,node.maxRank)}});g.graph().maxRank=maxRank}function removeEdgeLabelProxies(g){_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="edge-proxy"){g.edge(node.e).labelRank=node.rank;g.removeNode(v)}})}function translateGraph(g){var minX=Number.POSITIVE_INFINITY,maxX=0,minY=Number.POSITIVE_INFINITY,maxY=0,graphLabel=g.graph(),marginX=graphLabel.marginx||0,marginY=graphLabel.marginy||0;function getExtremes(attrs){var x=attrs.x,y=attrs.y,w=attrs.width,h=attrs.height;minX=Math.min(minX,x-w/2);maxX=Math.max(maxX,x+w/2);minY=Math.min(minY,y-h/2);maxY=Math.max(maxY,y+h/2)}_.forEach(g.nodes(),function(v){getExtremes(g.node(v))});_.forEach(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){getExtremes(edge)}});minX-=marginX;minY-=marginY;_.forEach(g.nodes(),function(v){var node=g.node(v);node.x-=minX;node.y-=minY});_.forEach(g.edges(),function(e){var edge=g.edge(e);_.forEach(edge.points,function(p){p.x-=minX;p.y-=minY});if(_.has(edge,"x")){edge.x-=minX}if(_.has(edge,"y")){edge.y-=minY}});graphLabel.width=maxX-minX+marginX;graphLabel.height=maxY-minY+marginY}function assignNodeIntersects(g){_.forEach(g.edges(),function(e){var edge=g.edge(e),nodeV=g.node(e.v),nodeW=g.node(e.w),p1,p2;if(!edge.points){edge.points=[];p1=nodeW;p2=nodeV}else{p1=edge.points[0];p2=edge.points[edge.points.length-1]}edge.points.unshift(util.intersectRect(nodeV,p1));edge.points.push(util.intersectRect(nodeW,p2))})}function fixupEdgeLabelCoords(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){if(edge.labelpos==="l"||edge.labelpos==="r"){edge.width-=edge.labeloffset}switch(edge.labelpos){case"l":edge.x-=edge.width/2+edge.labeloffset;break;case"r":edge.x+=edge.width/2+edge.labeloffset;break}}})}function reversePointsForReversedEdges(g){_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.reversed){edge.points.reverse()}})}function removeBorderNodes(g){_.forEach(g.nodes(),function(v){if(g.children(v).length){var node=g.node(v),t=g.node(node.borderTop),b=g.node(node.borderBottom),l=g.node(_.last(node.borderLeft)),r=g.node(_.last(node.borderRight));node.width=Math.abs(r.x-l.x);node.height=Math.abs(b.y-t.y);node.x=l.x+node.width/2;node.y=t.y+node.height/2}});_.forEach(g.nodes(),function(v){if(g.node(v).dummy==="border"){g.removeNode(v)}})}function removeSelfEdges(g){_.forEach(g.edges(),function(e){if(e.v===e.w){var node=g.node(e.v);if(!node.selfEdges){node.selfEdges=[]}node.selfEdges.push({e:e,label:g.edge(e)});g.removeEdge(e)}})}function insertSelfEdges(g){var layers=util.buildLayerMatrix(g);_.forEach(layers,function(layer){var orderShift=0;_.forEach(layer,function(v,i){var node=g.node(v);node.order=i+orderShift;_.forEach(node.selfEdges,function(selfEdge){util.addDummyNode(g,"selfedge",{width:selfEdge.label.width,height:selfEdge.label.height,rank:node.rank,order:i+ ++orderShift,e:selfEdge.e,label:selfEdge.label},"_se")});delete node.selfEdges})})}function positionSelfEdges(g){_.forEach(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="selfedge"){var selfNode=g.node(node.e.v),x=selfNode.x+selfNode.width/2,y=selfNode.y,dx=node.x-x,dy=selfNode.height/2;g.setEdge(node.e,node.label);g.removeNode(v);node.label.points=[{x:x+2*dx/3,y:y-dy},{x:x+5*dx/6,y:y-dy},{x:x+dx,y:y},{x:x+5*dx/6,y:y+dy},{x:x+2*dx/3,y:y+dy}];node.label.x=node.x;node.label.y=node.y}})}function selectNumberAttrs(obj,attrs){return _.mapValues(_.pick(obj,attrs),Number)}function canonicalize(attrs){var newAttrs={};_.forEach(attrs,function(v,k){newAttrs[k.toLowerCase()]=v});return newAttrs}},{"./acyclic":2,"./add-border-segments":3,"./coordinate-system":4,"./graphlib":7,"./lodash":10,"./nesting-graph":11,"./normalize":12,"./order":17,"./parent-dummy-chains":22,"./position":24,"./rank":26,"./util":29}],10:[function(require,module,exports){
/* global window */
var lodash;if(typeof require==="function"){try{lodash=require("lodash")}catch(e){}}if(!lodash){lodash=window._}module.exports=lodash},{lodash:51}],11:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports={run:run,cleanup:cleanup};
/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */function run(g){var root=util.addDummyNode(g,"root",{},"_root");var depths=treeDepths(g);var height=_.max(_.values(depths))-1;// Note: depths is an Object not an array
var nodeSep=2*height+1;g.graph().nestingRoot=root;
// Multiply minlen by nodeSep to align nodes on non-border ranks.
_.forEach(g.edges(),function(e){g.edge(e).minlen*=nodeSep});
// Calculate a weight that is sufficient to keep subgraphs vertically compact
var weight=sumWeights(g)+1;
// Create border nodes and link them up
_.forEach(g.children(),function(child){dfs(g,root,nodeSep,weight,height,depths,child)});
// Save the multiplier for node layers for later removal of empty border
// layers.
g.graph().nodeRankFactor=nodeSep}function dfs(g,root,nodeSep,weight,height,depths,v){var children=g.children(v);if(!children.length){if(v!==root){g.setEdge(root,v,{weight:0,minlen:nodeSep})}return}var top=util.addBorderNode(g,"_bt"),bottom=util.addBorderNode(g,"_bb"),label=g.node(v);g.setParent(top,v);label.borderTop=top;g.setParent(bottom,v);label.borderBottom=bottom;_.forEach(children,function(child){dfs(g,root,nodeSep,weight,height,depths,child);var childNode=g.node(child),childTop=childNode.borderTop?childNode.borderTop:child,childBottom=childNode.borderBottom?childNode.borderBottom:child,thisWeight=childNode.borderTop?weight:2*weight,minlen=childTop!==childBottom?1:height-depths[v]+1;g.setEdge(top,childTop,{weight:thisWeight,minlen:minlen,nestingEdge:true});g.setEdge(childBottom,bottom,{weight:thisWeight,minlen:minlen,nestingEdge:true})});if(!g.parent(v)){g.setEdge(root,top,{weight:0,minlen:height+depths[v]})}}function treeDepths(g){var depths={};function dfs(v,depth){var children=g.children(v);if(children&&children.length){_.forEach(children,function(child){dfs(child,depth+1)})}depths[v]=depth}_.forEach(g.children(),function(v){dfs(v,1)});return depths}function sumWeights(g){return _.reduce(g.edges(),function(acc,e){return acc+g.edge(e).weight},0)}function cleanup(g){var graphLabel=g.graph();g.removeNode(graphLabel.nestingRoot);delete graphLabel.nestingRoot;_.forEach(g.edges(),function(e){var edge=g.edge(e);if(edge.nestingEdge){g.removeEdge(e)}})}},{"./lodash":10,"./util":29}],12:[function(require,module,exports){"use strict";var _=require("./lodash"),util=require("./util");module.exports={run:run,undo:undo};
/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */function run(g){g.graph().dummyChains=[];_.forEach(g.edges(),function(edge){normalizeEdge(g,edge)})}function normalizeEdge(g,e){var v=e.v,vRank=g.node(v).rank,w=e.w,wRank=g.node(w).rank,name=e.name,edgeLabel=g.edge(e),labelRank=edgeLabel.labelRank;if(wRank===vRank+1)return;g.removeEdge(e);var dummy,attrs,i;for(i=0,++vRank;vRank<wRank;++i,++vRank){edgeLabel.points=[];attrs={width:0,height:0,edgeLabel:edgeLabel,edgeObj:e,rank:vRank};dummy=util.addDummyNode(g,"edge",attrs,"_d");if(vRank===labelRank){attrs.width=edgeLabel.width;attrs.height=edgeLabel.height;attrs.dummy="edge-label";attrs.labelpos=edgeLabel.labelpos}g.setEdge(v,dummy,{weight:edgeLabel.weight},name);if(i===0){g.graph().dummyChains.push(dummy)}v=dummy}g.setEdge(v,w,{weight:edgeLabel.weight},name)}function undo(g){_.forEach(g.graph().dummyChains,function(v){var node=g.node(v),origLabel=node.edgeLabel,w;g.setEdge(node.edgeObj,origLabel);while(node.dummy){w=g.successors(v)[0];g.removeNode(v);origLabel.points.push({x:node.x,y:node.y});if(node.dummy==="edge-label"){origLabel.x=node.x;origLabel.y=node.y;origLabel.width=node.width;origLabel.height=node.height}v=w;node=g.node(v)}})}},{"./lodash":10,"./util":29}],13:[function(require,module,exports){var _=require("../lodash");module.exports=addSubgraphConstraints;function addSubgraphConstraints(g,cg,vs){var prev={},rootPrev;_.forEach(vs,function(v){var child=g.parent(v),parent,prevChild;while(child){parent=g.parent(child);if(parent){prevChild=prev[parent];prev[parent]=child}else{prevChild=rootPrev;rootPrev=child}if(prevChild&&prevChild!==child){cg.setEdge(prevChild,child);return}child=parent}});
/*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */}},{"../lodash":10}],14:[function(require,module,exports){var _=require("../lodash");module.exports=barycenter;function barycenter(g,movable){return _.map(movable,function(v){var inV=g.inEdges(v);if(!inV.length){return{v:v}}else{var result=_.reduce(inV,function(acc,e){var edge=g.edge(e),nodeU=g.node(e.v);return{sum:acc.sum+edge.weight*nodeU.order,weight:acc.weight+edge.weight}},{sum:0,weight:0});return{v:v,barycenter:result.sum/result.weight,weight:result.weight}}})}},{"../lodash":10}],15:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graphlib").Graph;module.exports=buildLayerGraph;
/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */function buildLayerGraph(g,rank,relationship){var root=createRootNode(g),result=new Graph({compound:true}).setGraph({root:root}).setDefaultNodeLabel(function(v){return g.node(v)});_.forEach(g.nodes(),function(v){var node=g.node(v),parent=g.parent(v);if(node.rank===rank||node.minRank<=rank&&rank<=node.maxRank){result.setNode(v);result.setParent(v,parent||root);
// This assumes we have only short edges!
_.forEach(g[relationship](v),function(e){var u=e.v===v?e.w:e.v,edge=result.edge(u,v),weight=!_.isUndefined(edge)?edge.weight:0;result.setEdge(u,v,{weight:g.edge(e).weight+weight})});if(_.has(node,"minRank")){result.setNode(v,{borderLeft:node.borderLeft[rank],borderRight:node.borderRight[rank]})}}});return result}function createRootNode(g){var v;while(g.hasNode(v=_.uniqueId("_root")));return v}},{"../graphlib":7,"../lodash":10}],16:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=crossCount;
/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */function crossCount(g,layering){var cc=0;for(var i=1;i<layering.length;++i){cc+=twoLayerCrossCount(g,layering[i-1],layering[i])}return cc}function twoLayerCrossCount(g,northLayer,southLayer){
// Sort all of the edges between the north and south layers by their position
// in the north layer and then the south. Map these edges to the position of
// their head in the south layer.
var southPos=_.zipObject(southLayer,_.map(southLayer,function(v,i){return i}));var southEntries=_.flatten(_.map(northLayer,function(v){return _.chain(g.outEdges(v)).map(function(e){return{pos:southPos[e.w],weight:g.edge(e).weight}}).sortBy("pos").value()}),true);
// Build the accumulator tree
var firstIndex=1;while(firstIndex<southLayer.length)firstIndex<<=1;var treeSize=2*firstIndex-1;firstIndex-=1;var tree=_.map(new Array(treeSize),function(){return 0});
// Calculate the weighted crossings
var cc=0;_.forEach(southEntries.forEach(function(entry){var index=entry.pos+firstIndex;tree[index]+=entry.weight;var weightSum=0;while(index>0){if(index%2){weightSum+=tree[index+1]}index=index-1>>1;tree[index]+=entry.weight}cc+=entry.weight*weightSum}));return cc}},{"../lodash":10}],17:[function(require,module,exports){"use strict";var _=require("../lodash"),initOrder=require("./init-order"),crossCount=require("./cross-count"),sortSubgraph=require("./sort-subgraph"),buildLayerGraph=require("./build-layer-graph"),addSubgraphConstraints=require("./add-subgraph-constraints"),Graph=require("../graphlib").Graph,util=require("../util");module.exports=order;
/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */function order(g){var maxRank=util.maxRank(g),downLayerGraphs=buildLayerGraphs(g,_.range(1,maxRank+1),"inEdges"),upLayerGraphs=buildLayerGraphs(g,_.range(maxRank-1,-1,-1),"outEdges");var layering=initOrder(g);assignOrder(g,layering);var bestCC=Number.POSITIVE_INFINITY,best;for(var i=0,lastBest=0;lastBest<4;++i,++lastBest){sweepLayerGraphs(i%2?downLayerGraphs:upLayerGraphs,i%4>=2);layering=util.buildLayerMatrix(g);var cc=crossCount(g,layering);if(cc<bestCC){lastBest=0;best=_.cloneDeep(layering);bestCC=cc}}assignOrder(g,best)}function buildLayerGraphs(g,ranks,relationship){return _.map(ranks,function(rank){return buildLayerGraph(g,rank,relationship)})}function sweepLayerGraphs(layerGraphs,biasRight){var cg=new Graph;_.forEach(layerGraphs,function(lg){var root=lg.graph().root;var sorted=sortSubgraph(lg,root,cg,biasRight);_.forEach(sorted.vs,function(v,i){lg.node(v).order=i});addSubgraphConstraints(lg,cg,sorted.vs)})}function assignOrder(g,layering){_.forEach(layering,function(layer){_.forEach(layer,function(v,i){g.node(v).order=i})})}},{"../graphlib":7,"../lodash":10,"../util":29,"./add-subgraph-constraints":13,"./build-layer-graph":15,"./cross-count":16,"./init-order":18,"./sort-subgraph":20}],18:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=initOrder;
/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */function initOrder(g){var visited={},simpleNodes=_.filter(g.nodes(),function(v){return!g.children(v).length}),maxRank=_.max(_.map(simpleNodes,function(v){return g.node(v).rank})),layers=_.map(_.range(maxRank+1),function(){return[]});function dfs(v){if(_.has(visited,v))return;visited[v]=true;var node=g.node(v);layers[node.rank].push(v);_.forEach(g.successors(v),dfs)}var orderedVs=_.sortBy(simpleNodes,function(v){return g.node(v).rank});_.forEach(orderedVs,dfs);return layers}},{"../lodash":10}],19:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=resolveConflicts;
/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */function resolveConflicts(entries,cg){var mappedEntries={};_.forEach(entries,function(entry,i){var tmp=mappedEntries[entry.v]={indegree:0,in:[],out:[],vs:[entry.v],i:i};if(!_.isUndefined(entry.barycenter)){tmp.barycenter=entry.barycenter;tmp.weight=entry.weight}});_.forEach(cg.edges(),function(e){var entryV=mappedEntries[e.v],entryW=mappedEntries[e.w];if(!_.isUndefined(entryV)&&!_.isUndefined(entryW)){entryW.indegree++;entryV.out.push(mappedEntries[e.w])}});var sourceSet=_.filter(mappedEntries,function(entry){return!entry.indegree});return doResolveConflicts(sourceSet)}function doResolveConflicts(sourceSet){var entries=[];function handleIn(vEntry){return function(uEntry){if(uEntry.merged){return}if(_.isUndefined(uEntry.barycenter)||_.isUndefined(vEntry.barycenter)||uEntry.barycenter>=vEntry.barycenter){mergeEntries(vEntry,uEntry)}}}function handleOut(vEntry){return function(wEntry){wEntry["in"].push(vEntry);if(--wEntry.indegree===0){sourceSet.push(wEntry)}}}while(sourceSet.length){var entry=sourceSet.pop();entries.push(entry);_.forEach(entry["in"].reverse(),handleIn(entry));_.forEach(entry.out,handleOut(entry))}return _.chain(entries).filter(function(entry){return!entry.merged}).map(function(entry){return _.pick(entry,["vs","i","barycenter","weight"])}).value()}function mergeEntries(target,source){var sum=0,weight=0;if(target.weight){sum+=target.barycenter*target.weight;weight+=target.weight}if(source.weight){sum+=source.barycenter*source.weight;weight+=source.weight}target.vs=source.vs.concat(target.vs);target.barycenter=sum/weight;target.weight=weight;target.i=Math.min(source.i,target.i);source.merged=true}},{"../lodash":10}],20:[function(require,module,exports){var _=require("../lodash"),barycenter=require("./barycenter"),resolveConflicts=require("./resolve-conflicts"),sort=require("./sort");module.exports=sortSubgraph;function sortSubgraph(g,v,cg,biasRight){var movable=g.children(v),node=g.node(v),bl=node?node.borderLeft:undefined,br=node?node.borderRight:undefined,subgraphs={};if(bl){movable=_.filter(movable,function(w){return w!==bl&&w!==br})}var barycenters=barycenter(g,movable);_.forEach(barycenters,function(entry){if(g.children(entry.v).length){var subgraphResult=sortSubgraph(g,entry.v,cg,biasRight);subgraphs[entry.v]=subgraphResult;if(_.has(subgraphResult,"barycenter")){mergeBarycenters(entry,subgraphResult)}}});var entries=resolveConflicts(barycenters,cg);expandSubgraphs(entries,subgraphs);var result=sort(entries,biasRight);if(bl){result.vs=_.flatten([bl,result.vs,br],true);if(g.predecessors(bl).length){var blPred=g.node(g.predecessors(bl)[0]),brPred=g.node(g.predecessors(br)[0]);if(!_.has(result,"barycenter")){result.barycenter=0;result.weight=0}result.barycenter=(result.barycenter*result.weight+blPred.order+brPred.order)/(result.weight+2);result.weight+=2}}return result}function expandSubgraphs(entries,subgraphs){_.forEach(entries,function(entry){entry.vs=_.flatten(entry.vs.map(function(v){if(subgraphs[v]){return subgraphs[v].vs}return v}),true)})}function mergeBarycenters(target,other){if(!_.isUndefined(target.barycenter)){target.barycenter=(target.barycenter*target.weight+other.barycenter*other.weight)/(target.weight+other.weight);target.weight+=other.weight}else{target.barycenter=other.barycenter;target.weight=other.weight}}},{"../lodash":10,"./barycenter":14,"./resolve-conflicts":19,"./sort":21}],21:[function(require,module,exports){var _=require("../lodash"),util=require("../util");module.exports=sort;function sort(entries,biasRight){var parts=util.partition(entries,function(entry){return _.has(entry,"barycenter")});var sortable=parts.lhs,unsortable=_.sortBy(parts.rhs,function(entry){return-entry.i}),vs=[],sum=0,weight=0,vsIndex=0;sortable.sort(compareWithBias(!!biasRight));vsIndex=consumeUnsortable(vs,unsortable,vsIndex);_.forEach(sortable,function(entry){vsIndex+=entry.vs.length;vs.push(entry.vs);sum+=entry.barycenter*entry.weight;weight+=entry.weight;vsIndex=consumeUnsortable(vs,unsortable,vsIndex)});var result={vs:_.flatten(vs,true)};if(weight){result.barycenter=sum/weight;result.weight=weight}return result}function consumeUnsortable(vs,unsortable,index){var last;while(unsortable.length&&(last=_.last(unsortable)).i<=index){unsortable.pop();vs.push(last.vs);index++}return index}function compareWithBias(bias){return function(entryV,entryW){if(entryV.barycenter<entryW.barycenter){return-1}else if(entryV.barycenter>entryW.barycenter){return 1}return!bias?entryV.i-entryW.i:entryW.i-entryV.i}}},{"../lodash":10,"../util":29}],22:[function(require,module,exports){var _=require("./lodash");module.exports=parentDummyChains;function parentDummyChains(g){var postorderNums=postorder(g);_.forEach(g.graph().dummyChains,function(v){var node=g.node(v),edgeObj=node.edgeObj,pathData=findPath(g,postorderNums,edgeObj.v,edgeObj.w),path=pathData.path,lca=pathData.lca,pathIdx=0,pathV=path[pathIdx],ascending=true;while(v!==edgeObj.w){node=g.node(v);if(ascending){while((pathV=path[pathIdx])!==lca&&g.node(pathV).maxRank<node.rank){pathIdx++}if(pathV===lca){ascending=false}}if(!ascending){while(pathIdx<path.length-1&&g.node(pathV=path[pathIdx+1]).minRank<=node.rank){pathIdx++}pathV=path[pathIdx]}g.setParent(v,pathV);v=g.successors(v)[0]}})}
// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g,postorderNums,v,w){var vPath=[],wPath=[],low=Math.min(postorderNums[v].low,postorderNums[w].low),lim=Math.max(postorderNums[v].lim,postorderNums[w].lim),parent,lca;
// Traverse up from v to find the LCA
parent=v;do{parent=g.parent(parent);vPath.push(parent)}while(parent&&(postorderNums[parent].low>low||lim>postorderNums[parent].lim));lca=parent;
// Traverse from w to LCA
parent=w;while((parent=g.parent(parent))!==lca){wPath.push(parent)}return{path:vPath.concat(wPath.reverse()),lca:lca}}function postorder(g){var result={},lim=0;function dfs(v){var low=lim;_.forEach(g.children(v),dfs);result[v]={low:low,lim:lim++}}_.forEach(g.children(),dfs);return result}},{"./lodash":10}],23:[function(require,module,exports){"use strict";var _=require("../lodash"),Graph=require("../graphlib").Graph,util=require("../util");
/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */module.exports={positionX:positionX,findType1Conflicts:findType1Conflicts,findType2Conflicts:findType2Conflicts,addConflict:addConflict,hasConflict:hasConflict,verticalAlignment:verticalAlignment,horizontalCompaction:horizontalCompaction,alignCoordinates:alignCoordinates,findSmallestWidthAlignment:findSmallestWidthAlignment,balance:balance};
/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */function findType1Conflicts(g,layering){var conflicts={};function visitLayer(prevLayer,layer){var
// last visited node in the previous layer that is incident on an inner
// segment.
k0=0,
// Tracks the last node in this layer scanned for crossings with a type-1
// segment.
scanPos=0,prevLayerLength=prevLayer.length,lastNode=_.last(layer);_.forEach(layer,function(v,i){var w=findOtherInnerSegmentNode(g,v),k1=w?g.node(w).order:prevLayerLength;if(w||v===lastNode){_.forEach(layer.slice(scanPos,i+1),function(scanNode){_.forEach(g.predecessors(scanNode),function(u){var uLabel=g.node(u),uPos=uLabel.order;if((uPos<k0||k1<uPos)&&!(uLabel.dummy&&g.node(scanNode).dummy)){addConflict(conflicts,u,scanNode)}})});scanPos=i+1;k0=k1}});return layer}_.reduce(layering,visitLayer);return conflicts}function findType2Conflicts(g,layering){var conflicts={};function scan(south,southPos,southEnd,prevNorthBorder,nextNorthBorder){var v;_.forEach(_.range(southPos,southEnd),function(i){v=south[i];if(g.node(v).dummy){_.forEach(g.predecessors(v),function(u){var uNode=g.node(u);if(uNode.dummy&&(uNode.order<prevNorthBorder||uNode.order>nextNorthBorder)){addConflict(conflicts,u,v)}})}})}function visitLayer(north,south){var prevNorthPos=-1,nextNorthPos,southPos=0;_.forEach(south,function(v,southLookahead){if(g.node(v).dummy==="border"){var predecessors=g.predecessors(v);if(predecessors.length){nextNorthPos=g.node(predecessors[0]).order;scan(south,southPos,southLookahead,prevNorthPos,nextNorthPos);southPos=southLookahead;prevNorthPos=nextNorthPos}}scan(south,southPos,south.length,nextNorthPos,north.length)});return south}_.reduce(layering,visitLayer);return conflicts}function findOtherInnerSegmentNode(g,v){if(g.node(v).dummy){return _.find(g.predecessors(v),function(u){return g.node(u).dummy})}}function addConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp}var conflictsV=conflicts[v];if(!conflictsV){conflicts[v]=conflictsV={}}conflictsV[w]=true}function hasConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp}return _.has(conflicts[v],w)}
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */function verticalAlignment(g,layering,conflicts,neighborFn){var root={},align={},pos={};
// We cache the position here based on the layering because the graph and
// layering may be out of sync. The layering matrix is manipulated to
// generate different extreme alignments.
_.forEach(layering,function(layer){_.forEach(layer,function(v,order){root[v]=v;align[v]=v;pos[v]=order})});_.forEach(layering,function(layer){var prevIdx=-1;_.forEach(layer,function(v){var ws=neighborFn(v);if(ws.length){ws=_.sortBy(ws,function(w){return pos[w]});var mp=(ws.length-1)/2;for(var i=Math.floor(mp),il=Math.ceil(mp);i<=il;++i){var w=ws[i];if(align[v]===v&&prevIdx<pos[w]&&!hasConflict(conflicts,v,w)){align[w]=v;align[v]=root[v]=root[w];prevIdx=pos[w]}}}})});return{root:root,align:align}}function horizontalCompaction(g,layering,root,align,reverseSep){
// This portion of the algorithm differs from BK due to a number of problems.
// Instead of their algorithm we construct a new block graph and do two
// sweeps. The first sweep places blocks with the smallest possible
// coordinates. The second sweep removes unused space by moving blocks to the
// greatest coordinates without violating separation.
var xs={},blockG=buildBlockGraph(g,layering,root,reverseSep),borderType=reverseSep?"borderLeft":"borderRight";function iterate(setXsFunc,nextNodesFunc){var stack=blockG.nodes();var elem=stack.pop();var visited={};while(elem){if(visited[elem]){setXsFunc(elem)}else{visited[elem]=true;stack.push(elem);stack=stack.concat(nextNodesFunc(elem))}elem=stack.pop()}}
// First pass, assign smallest coordinates
function pass1(elem){xs[elem]=blockG.inEdges(elem).reduce(function(acc,e){return Math.max(acc,xs[e.v]+blockG.edge(e))},0)}
// Second pass, assign greatest coordinates
function pass2(elem){var min=blockG.outEdges(elem).reduce(function(acc,e){return Math.min(acc,xs[e.w]-blockG.edge(e))},Number.POSITIVE_INFINITY);var node=g.node(elem);if(min!==Number.POSITIVE_INFINITY&&node.borderType!==borderType){xs[elem]=Math.max(xs[elem],min)}}iterate(pass1,_.bind(blockG.predecessors,blockG));iterate(pass2,_.bind(blockG.successors,blockG));
// Assign x coordinates to all nodes
_.forEach(align,function(v){xs[v]=xs[root[v]]});return xs}function buildBlockGraph(g,layering,root,reverseSep){var blockGraph=new Graph,graphLabel=g.graph(),sepFn=sep(graphLabel.nodesep,graphLabel.edgesep,reverseSep);_.forEach(layering,function(layer){var u;_.forEach(layer,function(v){var vRoot=root[v];blockGraph.setNode(vRoot);if(u){var uRoot=root[u],prevMax=blockGraph.edge(uRoot,vRoot);blockGraph.setEdge(uRoot,vRoot,Math.max(sepFn(g,v,u),prevMax||0))}u=v})});return blockGraph}
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */function findSmallestWidthAlignment(g,xss){return _.minBy(_.values(xss),function(xs){var max=Number.NEGATIVE_INFINITY;var min=Number.POSITIVE_INFINITY;_.forIn(xs,function(x,v){var halfWidth=width(g,v)/2;max=Math.max(x+halfWidth,max);min=Math.min(x-halfWidth,min)});return max-min})}
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */function alignCoordinates(xss,alignTo){var alignToVals=_.values(alignTo),alignToMin=_.min(alignToVals),alignToMax=_.max(alignToVals);_.forEach(["u","d"],function(vert){_.forEach(["l","r"],function(horiz){var alignment=vert+horiz,xs=xss[alignment],delta;if(xs===alignTo)return;var xsVals=_.values(xs);delta=horiz==="l"?alignToMin-_.min(xsVals):alignToMax-_.max(xsVals);if(delta){xss[alignment]=_.mapValues(xs,function(x){return x+delta})}})})}function balance(xss,align){return _.mapValues(xss.ul,function(ignore,v){if(align){return xss[align.toLowerCase()][v]}else{var xs=_.sortBy(_.map(xss,v));return(xs[1]+xs[2])/2}})}function positionX(g){var layering=util.buildLayerMatrix(g),conflicts=_.merge(findType1Conflicts(g,layering),findType2Conflicts(g,layering));var xss={},adjustedLayering;_.forEach(["u","d"],function(vert){adjustedLayering=vert==="u"?layering:_.values(layering).reverse();_.forEach(["l","r"],function(horiz){if(horiz==="r"){adjustedLayering=_.map(adjustedLayering,function(inner){return _.values(inner).reverse()})}var neighborFn=_.bind(vert==="u"?g.predecessors:g.successors,g);var align=verticalAlignment(g,adjustedLayering,conflicts,neighborFn);var xs=horizontalCompaction(g,adjustedLayering,align.root,align.align,horiz==="r");if(horiz==="r"){xs=_.mapValues(xs,function(x){return-x})}xss[vert+horiz]=xs})});var smallestWidth=findSmallestWidthAlignment(g,xss);alignCoordinates(xss,smallestWidth);return balance(xss,g.graph().align)}function sep(nodeSep,edgeSep,reverseSep){return function(g,v,w){var vLabel=g.node(v),wLabel=g.node(w),sum=0,delta;sum+=vLabel.width/2;if(_.has(vLabel,"labelpos")){switch(vLabel.labelpos.toLowerCase()){case"l":delta=-vLabel.width/2;break;case"r":delta=vLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta}delta=0;sum+=(vLabel.dummy?edgeSep:nodeSep)/2;sum+=(wLabel.dummy?edgeSep:nodeSep)/2;sum+=wLabel.width/2;if(_.has(wLabel,"labelpos")){switch(wLabel.labelpos.toLowerCase()){case"l":delta=wLabel.width/2;break;case"r":delta=-wLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta}delta=0;return sum}}function width(g,v){return g.node(v).width}},{"../graphlib":7,"../lodash":10,"../util":29}],24:[function(require,module,exports){"use strict";var _=require("../lodash"),util=require("../util"),positionX=require("./bk").positionX;module.exports=position;function position(g){g=util.asNonCompoundGraph(g);positionY(g);_.forEach(positionX(g),function(x,v){g.node(v).x=x})}function positionY(g){var layering=util.buildLayerMatrix(g),rankSep=g.graph().ranksep,prevY=0;_.forEach(layering,function(layer){var maxHeight=_.max(_.map(layer,function(v){return g.node(v).height}));_.forEach(layer,function(v){g.node(v).y=prevY+maxHeight/2});prevY+=maxHeight+rankSep})}},{"../lodash":10,"../util":29,"./bk":23}],25:[function(require,module,exports){"use strict";var _=require("../lodash"),Graph=require("../graphlib").Graph,slack=require("./util").slack;module.exports=feasibleTree;
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */function feasibleTree(g){var t=new Graph({directed:false});
// Choose arbitrary node from which to start our tree
var start=g.nodes()[0],size=g.nodeCount();t.setNode(start,{});var edge,delta;while(tightTree(t,g)<size){edge=findMinSlackEdge(t,g);delta=t.hasNode(edge.v)?slack(g,edge):-slack(g,edge);shiftRanks(t,g,delta)}return t}
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */function tightTree(t,g){function dfs(v){_.forEach(g.nodeEdges(v),function(e){var edgeV=e.v,w=v===edgeV?e.w:edgeV;if(!t.hasNode(w)&&!slack(g,e)){t.setNode(w,{});t.setEdge(v,w,{});dfs(w)}})}_.forEach(t.nodes(),dfs);return t.nodeCount()}
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */function findMinSlackEdge(t,g){return _.minBy(g.edges(),function(e){if(t.hasNode(e.v)!==t.hasNode(e.w)){return slack(g,e)}})}function shiftRanks(t,g,delta){_.forEach(t.nodes(),function(v){g.node(v).rank+=delta})}},{"../graphlib":7,"../lodash":10,"./util":28}],26:[function(require,module,exports){"use strict";var rankUtil=require("./util"),longestPath=rankUtil.longestPath,feasibleTree=require("./feasible-tree"),networkSimplex=require("./network-simplex");module.exports=rank;
/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */function rank(g){switch(g.graph().ranker){case"network-simplex":networkSimplexRanker(g);break;case"tight-tree":tightTreeRanker(g);break;case"longest-path":longestPathRanker(g);break;default:networkSimplexRanker(g)}}
// A fast and simple ranker, but results are far from optimal.
var longestPathRanker=longestPath;function tightTreeRanker(g){longestPath(g);feasibleTree(g)}function networkSimplexRanker(g){networkSimplex(g)}},{"./feasible-tree":25,"./network-simplex":27,"./util":28}],27:[function(require,module,exports){"use strict";var _=require("../lodash"),feasibleTree=require("./feasible-tree"),slack=require("./util").slack,initRank=require("./util").longestPath,preorder=require("../graphlib").alg.preorder,postorder=require("../graphlib").alg.postorder,simplify=require("../util").simplify;module.exports=networkSimplex;
// Expose some internals for testing purposes
networkSimplex.initLowLimValues=initLowLimValues;networkSimplex.initCutValues=initCutValues;networkSimplex.calcCutValue=calcCutValue;networkSimplex.leaveEdge=leaveEdge;networkSimplex.enterEdge=enterEdge;networkSimplex.exchangeEdges=exchangeEdges;
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */function networkSimplex(g){g=simplify(g);initRank(g);var t=feasibleTree(g);initLowLimValues(t);initCutValues(t,g);var e,f;while(e=leaveEdge(t)){f=enterEdge(t,g,e);exchangeEdges(t,g,e,f)}}
/*
 * Initializes cut values for all edges in the tree.
 */function initCutValues(t,g){var vs=postorder(t,t.nodes());vs=vs.slice(0,vs.length-1);_.forEach(vs,function(v){assignCutValue(t,g,v)})}function assignCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent;t.edge(child,parent).cutvalue=calcCutValue(t,g,child)}
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */function calcCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent,
// True if the child is on the tail end of the edge in the directed graph
childIsTail=true,
// The graph's view of the tree edge we're inspecting
graphEdge=g.edge(child,parent),
// The accumulated cut value for the edge between this node and its parent
cutValue=0;if(!graphEdge){childIsTail=false;graphEdge=g.edge(parent,child)}cutValue=graphEdge.weight;_.forEach(g.nodeEdges(child),function(e){var isOutEdge=e.v===child,other=isOutEdge?e.w:e.v;if(other!==parent){var pointsToHead=isOutEdge===childIsTail,otherWeight=g.edge(e).weight;cutValue+=pointsToHead?otherWeight:-otherWeight;if(isTreeEdge(t,child,other)){var otherCutValue=t.edge(child,other).cutvalue;cutValue+=pointsToHead?-otherCutValue:otherCutValue}}});return cutValue}function initLowLimValues(tree,root){if(arguments.length<2){root=tree.nodes()[0]}dfsAssignLowLim(tree,{},1,root)}function dfsAssignLowLim(tree,visited,nextLim,v,parent){var low=nextLim,label=tree.node(v);visited[v]=true;_.forEach(tree.neighbors(v),function(w){if(!_.has(visited,w)){nextLim=dfsAssignLowLim(tree,visited,nextLim,w,v)}});label.low=low;label.lim=nextLim++;if(parent){label.parent=parent}else{
// TODO should be able to remove this when we incrementally update low lim
delete label.parent}return nextLim}function leaveEdge(tree){return _.find(tree.edges(),function(e){return tree.edge(e).cutvalue<0})}function enterEdge(t,g,edge){var v=edge.v,w=edge.w;
// For the rest of this function we assume that v is the tail and w is the
// head, so if we don't have this edge in the graph we should flip it to
// match the correct orientation.
if(!g.hasEdge(v,w)){v=edge.w;w=edge.v}var vLabel=t.node(v),wLabel=t.node(w),tailLabel=vLabel,flip=false;
// If the root is in the tail of the edge then we need to flip the logic that
// checks for the head and tail nodes in the candidates function below.
if(vLabel.lim>wLabel.lim){tailLabel=wLabel;flip=true}var candidates=_.filter(g.edges(),function(edge){return flip===isDescendant(t,t.node(edge.v),tailLabel)&&flip!==isDescendant(t,t.node(edge.w),tailLabel)});return _.minBy(candidates,function(edge){return slack(g,edge)})}function exchangeEdges(t,g,e,f){var v=e.v,w=e.w;t.removeEdge(v,w);t.setEdge(f.v,f.w,{});initLowLimValues(t);initCutValues(t,g);updateRanks(t,g)}function updateRanks(t,g){var root=_.find(t.nodes(),function(v){return!g.node(v).parent}),vs=preorder(t,root);vs=vs.slice(1);_.forEach(vs,function(v){var parent=t.node(v).parent,edge=g.edge(v,parent),flipped=false;if(!edge){edge=g.edge(parent,v);flipped=true}g.node(v).rank=g.node(parent).rank+(flipped?edge.minlen:-edge.minlen)})}
/*
 * Returns true if the edge is in the tree.
 */function isTreeEdge(tree,u,v){return tree.hasEdge(u,v)}
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */function isDescendant(tree,vLabel,rootLabel){return rootLabel.low<=vLabel.lim&&vLabel.lim<=rootLabel.lim}},{"../graphlib":7,"../lodash":10,"../util":29,"./feasible-tree":25,"./util":28}],28:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports={longestPath:longestPath,slack:slack};
/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */function longestPath(g){var visited={};function dfs(v){var label=g.node(v);if(_.has(visited,v)){return label.rank}visited[v]=true;var rank=_.minBy(_.map(g.outEdges(v),function(e){return dfs(e.w)-g.edge(e).minlen}));if(rank===Number.POSITIVE_INFINITY||// return value of _.map([]) for Lodash 3
rank===undefined||// return value of _.map([]) for Lodash 4
rank===null){// return value of _.map([null])
rank=0}return label.rank=rank}_.forEach(g.sources(),dfs)}
/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */function slack(g,e){return g.node(e.w).rank-g.node(e.v).rank-g.edge(e).minlen}},{"../lodash":10}],29:[function(require,module,exports){"use strict";var _=require("./lodash"),Graph=require("./graphlib").Graph;module.exports={addDummyNode:addDummyNode,simplify:simplify,asNonCompoundGraph:asNonCompoundGraph,successorWeights:successorWeights,predecessorWeights:predecessorWeights,intersectRect:intersectRect,buildLayerMatrix:buildLayerMatrix,normalizeRanks:normalizeRanks,removeEmptyRanks:removeEmptyRanks,addBorderNode:addBorderNode,maxRank:maxRank,partition:partition,time:time,notime:notime};
/*
 * Adds a dummy node to the graph and return v.
 */function addDummyNode(g,type,attrs,name){var v;do{v=_.uniqueId(name)}while(g.hasNode(v));attrs.dummy=type;g.setNode(v,attrs);return v}
/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */function simplify(g){var simplified=(new Graph).setGraph(g.graph());_.forEach(g.nodes(),function(v){simplified.setNode(v,g.node(v))});_.forEach(g.edges(),function(e){var simpleLabel=simplified.edge(e.v,e.w)||{weight:0,minlen:1},label=g.edge(e);simplified.setEdge(e.v,e.w,{weight:simpleLabel.weight+label.weight,minlen:Math.max(simpleLabel.minlen,label.minlen)})});return simplified}function asNonCompoundGraph(g){var simplified=new Graph({multigraph:g.isMultigraph()}).setGraph(g.graph());_.forEach(g.nodes(),function(v){if(!g.children(v).length){simplified.setNode(v,g.node(v))}});_.forEach(g.edges(),function(e){simplified.setEdge(e,g.edge(e))});return simplified}function successorWeights(g){var weightMap=_.map(g.nodes(),function(v){var sucs={};_.forEach(g.outEdges(v),function(e){sucs[e.w]=(sucs[e.w]||0)+g.edge(e).weight});return sucs});return _.zipObject(g.nodes(),weightMap)}function predecessorWeights(g){var weightMap=_.map(g.nodes(),function(v){var preds={};_.forEach(g.inEdges(v),function(e){preds[e.v]=(preds[e.v]||0)+g.edge(e).weight});return preds});return _.zipObject(g.nodes(),weightMap)}
/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */function intersectRect(rect,point){var x=rect.x;var y=rect.y;
// Rectangle intersection algorithm from:
// http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
var dx=point.x-x;var dy=point.y-y;var w=rect.width/2;var h=rect.height/2;if(!dx&&!dy){throw new Error("Not possible to find intersection inside of the rectangle")}var sx,sy;if(Math.abs(dy)*w>Math.abs(dx)*h){
// Intersection is top or bottom of rect.
if(dy<0){h=-h}sx=h*dx/dy;sy=h}else{
// Intersection is left or right of rect.
if(dx<0){w=-w}sx=w;sy=w*dy/dx}return{x:x+sx,y:y+sy}}
/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */function buildLayerMatrix(g){var layering=_.map(_.range(maxRank(g)+1),function(){return[]});_.forEach(g.nodes(),function(v){var node=g.node(v),rank=node.rank;if(!_.isUndefined(rank)){layering[rank][node.order]=v}});return layering}
/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */function normalizeRanks(g){var min=_.minBy(_.map(g.nodes(),function(v){return g.node(v).rank}));_.forEach(g.nodes(),function(v){var node=g.node(v);if(_.has(node,"rank")){node.rank-=min}})}function removeEmptyRanks(g){
// Ranks may not start at 0, so we need to offset them
var offset=_.minBy(_.map(g.nodes(),function(v){return g.node(v).rank}));var layers=[];_.forEach(g.nodes(),function(v){var rank=g.node(v).rank-offset;if(!layers[rank]){layers[rank]=[]}layers[rank].push(v)});var delta=0,nodeRankFactor=g.graph().nodeRankFactor;_.forEach(layers,function(vs,i){if(_.isUndefined(vs)&&i%nodeRankFactor!==0){--delta}else if(delta){_.forEach(vs,function(v){g.node(v).rank+=delta})}})}function addBorderNode(g,prefix,rank,order){var node={width:0,height:0};if(arguments.length>=4){node.rank=rank;node.order=order}return addDummyNode(g,"border",node,prefix)}function maxRank(g){return _.max(_.map(g.nodes(),function(v){var rank=g.node(v).rank;if(!_.isUndefined(rank)){return rank}}))}
/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */function partition(collection,fn){var result={lhs:[],rhs:[]};_.forEach(collection,function(value){if(fn(value)){result.lhs.push(value)}else{result.rhs.push(value)}});return result}
/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */function time(name,fn){var start=_.now();try{return fn()}finally{console.log(name+" time: "+(_.now()-start)+"ms")}}function notime(name,fn){return fn()}},{"./graphlib":7,"./lodash":10}],30:[function(require,module,exports){module.exports="0.8.2"},{}],31:[function(require,module,exports){
/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var lib=require("./lib");module.exports={Graph:lib.Graph,json:require("./lib/json"),alg:require("./lib/alg"),version:lib.version}},{"./lib":47,"./lib/alg":38,"./lib/json":48}],32:[function(require,module,exports){var _=require("../lodash");module.exports=components;function components(g){var visited={},cmpts=[],cmpt;function dfs(v){if(_.has(visited,v))return;visited[v]=true;cmpt.push(v);_.each(g.successors(v),dfs);_.each(g.predecessors(v),dfs)}_.each(g.nodes(),function(v){cmpt=[];dfs(v);if(cmpt.length){cmpts.push(cmpt)}});return cmpts}},{"../lodash":49}],33:[function(require,module,exports){var _=require("../lodash");module.exports=dfs;
/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */function dfs(g,vs,order){if(!_.isArray(vs)){vs=[vs]}var navigation=(g.isDirected()?g.successors:g.neighbors).bind(g);var acc=[],visited={};_.each(vs,function(v){if(!g.hasNode(v)){throw new Error("Graph does not have node: "+v)}doDfs(g,v,order==="post",visited,navigation,acc)});return acc}function doDfs(g,v,postorder,visited,navigation,acc){if(!_.has(visited,v)){visited[v]=true;if(!postorder){acc.push(v)}_.each(navigation(v),function(w){doDfs(g,w,postorder,visited,navigation,acc)});if(postorder){acc.push(v)}}}},{"../lodash":49}],34:[function(require,module,exports){var dijkstra=require("./dijkstra"),_=require("../lodash");module.exports=dijkstraAll;function dijkstraAll(g,weightFunc,edgeFunc){return _.transform(g.nodes(),function(acc,v){acc[v]=dijkstra(g,v,weightFunc,edgeFunc)},{})}},{"../lodash":49,"./dijkstra":35}],35:[function(require,module,exports){var _=require("../lodash"),PriorityQueue=require("../data/priority-queue");module.exports=dijkstra;var DEFAULT_WEIGHT_FUNC=_.constant(1);function dijkstra(g,source,weightFn,edgeFn){return runDijkstra(g,String(source),weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runDijkstra(g,source,weightFn,edgeFn){var results={},pq=new PriorityQueue,v,vEntry;var updateNeighbors=function(edge){var w=edge.v!==v?edge.v:edge.w,wEntry=results[w],weight=weightFn(edge),distance=vEntry.distance+weight;if(weight<0){throw new Error("dijkstra does not allow negative edge weights. "+"Bad edge: "+edge+" Weight: "+weight)}if(distance<wEntry.distance){wEntry.distance=distance;wEntry.predecessor=v;pq.decrease(w,distance)}};g.nodes().forEach(function(v){var distance=v===source?0:Number.POSITIVE_INFINITY;results[v]={distance:distance};pq.add(v,distance)});while(pq.size()>0){v=pq.removeMin();vEntry=results[v];if(vEntry.distance===Number.POSITIVE_INFINITY){break}edgeFn(v).forEach(updateNeighbors)}return results}},{"../data/priority-queue":45,"../lodash":49}],36:[function(require,module,exports){var _=require("../lodash"),tarjan=require("./tarjan");module.exports=findCycles;function findCycles(g){return _.filter(tarjan(g),function(cmpt){return cmpt.length>1||cmpt.length===1&&g.hasEdge(cmpt[0],cmpt[0])})}},{"../lodash":49,"./tarjan":43}],37:[function(require,module,exports){var _=require("../lodash");module.exports=floydWarshall;var DEFAULT_WEIGHT_FUNC=_.constant(1);function floydWarshall(g,weightFn,edgeFn){return runFloydWarshall(g,weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runFloydWarshall(g,weightFn,edgeFn){var results={},nodes=g.nodes();nodes.forEach(function(v){results[v]={};results[v][v]={distance:0};nodes.forEach(function(w){if(v!==w){results[v][w]={distance:Number.POSITIVE_INFINITY}}});edgeFn(v).forEach(function(edge){var w=edge.v===v?edge.w:edge.v,d=weightFn(edge);results[v][w]={distance:d,predecessor:v}})});nodes.forEach(function(k){var rowK=results[k];nodes.forEach(function(i){var rowI=results[i];nodes.forEach(function(j){var ik=rowI[k];var kj=rowK[j];var ij=rowI[j];var altDistance=ik.distance+kj.distance;if(altDistance<ij.distance){ij.distance=altDistance;ij.predecessor=kj.predecessor}})})});return results}},{"../lodash":49}],38:[function(require,module,exports){module.exports={components:require("./components"),dijkstra:require("./dijkstra"),dijkstraAll:require("./dijkstra-all"),findCycles:require("./find-cycles"),floydWarshall:require("./floyd-warshall"),isAcyclic:require("./is-acyclic"),postorder:require("./postorder"),preorder:require("./preorder"),prim:require("./prim"),tarjan:require("./tarjan"),topsort:require("./topsort")}},{"./components":32,"./dijkstra":35,"./dijkstra-all":34,"./find-cycles":36,"./floyd-warshall":37,"./is-acyclic":39,"./postorder":40,"./preorder":41,"./prim":42,"./tarjan":43,"./topsort":44}],39:[function(require,module,exports){var topsort=require("./topsort");module.exports=isAcyclic;function isAcyclic(g){try{topsort(g)}catch(e){if(e instanceof topsort.CycleException){return false}throw e}return true}},{"./topsort":44}],40:[function(require,module,exports){var dfs=require("./dfs");module.exports=postorder;function postorder(g,vs){return dfs(g,vs,"post")}},{"./dfs":33}],41:[function(require,module,exports){var dfs=require("./dfs");module.exports=preorder;function preorder(g,vs){return dfs(g,vs,"pre")}},{"./dfs":33}],42:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graph"),PriorityQueue=require("../data/priority-queue");module.exports=prim;function prim(g,weightFunc){var result=new Graph,parents={},pq=new PriorityQueue,v;function updateNeighbors(edge){var w=edge.v===v?edge.w:edge.v,pri=pq.priority(w);if(pri!==undefined){var edgeWeight=weightFunc(edge);if(edgeWeight<pri){parents[w]=v;pq.decrease(w,edgeWeight)}}}if(g.nodeCount()===0){return result}_.each(g.nodes(),function(v){pq.add(v,Number.POSITIVE_INFINITY);result.setNode(v)});
// Start from an arbitrary node
pq.decrease(g.nodes()[0],0);var init=false;while(pq.size()>0){v=pq.removeMin();if(_.has(parents,v)){result.setEdge(v,parents[v])}else if(init){throw new Error("Input graph is not connected: "+g)}else{init=true}g.nodeEdges(v).forEach(updateNeighbors)}return result}},{"../data/priority-queue":45,"../graph":46,"../lodash":49}],43:[function(require,module,exports){var _=require("../lodash");module.exports=tarjan;function tarjan(g){var index=0,stack=[],visited={},// node id -> { onStack, lowlink, index }
results=[];function dfs(v){var entry=visited[v]={onStack:true,lowlink:index,index:index++};stack.push(v);g.successors(v).forEach(function(w){if(!_.has(visited,w)){dfs(w);entry.lowlink=Math.min(entry.lowlink,visited[w].lowlink)}else if(visited[w].onStack){entry.lowlink=Math.min(entry.lowlink,visited[w].index)}});if(entry.lowlink===entry.index){var cmpt=[],w;do{w=stack.pop();visited[w].onStack=false;cmpt.push(w)}while(v!==w);results.push(cmpt)}}g.nodes().forEach(function(v){if(!_.has(visited,v)){dfs(v)}});return results}},{"../lodash":49}],44:[function(require,module,exports){var _=require("../lodash");module.exports=topsort;topsort.CycleException=CycleException;function topsort(g){var visited={},stack={},results=[];function visit(node){if(_.has(stack,node)){throw new CycleException}if(!_.has(visited,node)){stack[node]=true;visited[node]=true;_.each(g.predecessors(node),visit);delete stack[node];results.push(node)}}_.each(g.sinks(),visit);if(_.size(visited)!==g.nodeCount()){throw new CycleException}return results}function CycleException(){}},{"../lodash":49}],45:[function(require,module,exports){var _=require("../lodash");module.exports=PriorityQueue;
/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */function PriorityQueue(){this._arr=[];this._keyIndices={}}
/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */PriorityQueue.prototype.size=function(){return this._arr.length};
/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */PriorityQueue.prototype.keys=function(){return this._arr.map(function(x){return x.key})};
/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */PriorityQueue.prototype.has=function(key){return _.has(this._keyIndices,key)};
/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */PriorityQueue.prototype.priority=function(key){var index=this._keyIndices[key];if(index!==undefined){return this._arr[index].priority}};
/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */PriorityQueue.prototype.min=function(){if(this.size()===0){throw new Error("Queue underflow")}return this._arr[0].key};
/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */PriorityQueue.prototype.add=function(key,priority){var keyIndices=this._keyIndices;key=String(key);if(!_.has(keyIndices,key)){var arr=this._arr;var index=arr.length;keyIndices[key]=index;arr.push({key:key,priority:priority});this._decrease(index);return true}return false};
/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */PriorityQueue.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var min=this._arr.pop();delete this._keyIndices[min.key];this._heapify(0);return min.key};
/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */PriorityQueue.prototype.decrease=function(key,priority){var index=this._keyIndices[key];if(priority>this._arr[index].priority){throw new Error("New priority is greater than current priority. "+"Key: "+key+" Old: "+this._arr[index].priority+" New: "+priority)}this._arr[index].priority=priority;this._decrease(index)};PriorityQueue.prototype._heapify=function(i){var arr=this._arr;var l=2*i,r=l+1,largest=i;if(l<arr.length){largest=arr[l].priority<arr[largest].priority?l:largest;if(r<arr.length){largest=arr[r].priority<arr[largest].priority?r:largest}if(largest!==i){this._swap(i,largest);this._heapify(largest)}}};PriorityQueue.prototype._decrease=function(index){var arr=this._arr;var priority=arr[index].priority;var parent;while(index!==0){parent=index>>1;if(arr[parent].priority<priority){break}this._swap(index,parent);index=parent}};PriorityQueue.prototype._swap=function(i,j){var arr=this._arr;var keyIndices=this._keyIndices;var origArrI=arr[i];var origArrJ=arr[j];arr[i]=origArrJ;arr[j]=origArrI;keyIndices[origArrJ.key]=i;keyIndices[origArrI.key]=j}},{"../lodash":49}],46:[function(require,module,exports){"use strict";var _=require("./lodash");module.exports=Graph;var DEFAULT_EDGE_NAME="\0",GRAPH_NODE="\0",EDGE_KEY_DELIM="";
// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
function Graph(opts){this._isDirected=_.has(opts,"directed")?opts.directed:true;this._isMultigraph=_.has(opts,"multigraph")?opts.multigraph:false;this._isCompound=_.has(opts,"compound")?opts.compound:false;
// Label for the graph itself
this._label=undefined;
// Defaults to be set when creating a new node
this._defaultNodeLabelFn=_.constant(undefined);
// Defaults to be set when creating a new edge
this._defaultEdgeLabelFn=_.constant(undefined);
// v -> label
this._nodes={};if(this._isCompound){
// v -> parent
this._parent={};
// v -> children
this._children={};this._children[GRAPH_NODE]={}}
// v -> edgeObj
this._in={};
// u -> v -> Number
this._preds={};
// v -> edgeObj
this._out={};
// v -> w -> Number
this._sucs={};
// e -> edgeObj
this._edgeObjs={};
// e -> label
this._edgeLabels={}}
/* Number of nodes in the graph. Should only be changed by the implementation. */Graph.prototype._nodeCount=0;
/* Number of edges in the graph. Should only be changed by the implementation. */Graph.prototype._edgeCount=0;
/* === Graph functions ========= */Graph.prototype.isDirected=function(){return this._isDirected};Graph.prototype.isMultigraph=function(){return this._isMultigraph};Graph.prototype.isCompound=function(){return this._isCompound};Graph.prototype.setGraph=function(label){this._label=label;return this};Graph.prototype.graph=function(){return this._label};
/* === Node functions ========== */Graph.prototype.setDefaultNodeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault)}this._defaultNodeLabelFn=newDefault;return this};Graph.prototype.nodeCount=function(){return this._nodeCount};Graph.prototype.nodes=function(){return _.keys(this._nodes)};Graph.prototype.sources=function(){var self=this;return _.filter(this.nodes(),function(v){return _.isEmpty(self._in[v])})};Graph.prototype.sinks=function(){var self=this;return _.filter(this.nodes(),function(v){return _.isEmpty(self._out[v])})};Graph.prototype.setNodes=function(vs,value){var args=arguments;var self=this;_.each(vs,function(v){if(args.length>1){self.setNode(v,value)}else{self.setNode(v)}});return this};Graph.prototype.setNode=function(v,value){if(_.has(this._nodes,v)){if(arguments.length>1){this._nodes[v]=value}return this}this._nodes[v]=arguments.length>1?value:this._defaultNodeLabelFn(v);if(this._isCompound){this._parent[v]=GRAPH_NODE;this._children[v]={};this._children[GRAPH_NODE][v]=true}this._in[v]={};this._preds[v]={};this._out[v]={};this._sucs[v]={};++this._nodeCount;return this};Graph.prototype.node=function(v){return this._nodes[v]};Graph.prototype.hasNode=function(v){return _.has(this._nodes,v)};Graph.prototype.removeNode=function(v){var self=this;if(_.has(this._nodes,v)){var removeEdge=function(e){self.removeEdge(self._edgeObjs[e])};delete this._nodes[v];if(this._isCompound){this._removeFromParentsChildList(v);delete this._parent[v];_.each(this.children(v),function(child){self.setParent(child)});delete this._children[v]}_.each(_.keys(this._in[v]),removeEdge);delete this._in[v];delete this._preds[v];_.each(_.keys(this._out[v]),removeEdge);delete this._out[v];delete this._sucs[v];--this._nodeCount}return this};Graph.prototype.setParent=function(v,parent){if(!this._isCompound){throw new Error("Cannot set parent in a non-compound graph")}if(_.isUndefined(parent)){parent=GRAPH_NODE}else{
// Coerce parent to string
parent+="";for(var ancestor=parent;!_.isUndefined(ancestor);ancestor=this.parent(ancestor)){if(ancestor===v){throw new Error("Setting "+parent+" as parent of "+v+" would create a cycle")}}this.setNode(parent)}this.setNode(v);this._removeFromParentsChildList(v);this._parent[v]=parent;this._children[parent][v]=true;return this};Graph.prototype._removeFromParentsChildList=function(v){delete this._children[this._parent[v]][v]};Graph.prototype.parent=function(v){if(this._isCompound){var parent=this._parent[v];if(parent!==GRAPH_NODE){return parent}}};Graph.prototype.children=function(v){if(_.isUndefined(v)){v=GRAPH_NODE}if(this._isCompound){var children=this._children[v];if(children){return _.keys(children)}}else if(v===GRAPH_NODE){return this.nodes()}else if(this.hasNode(v)){return[]}};Graph.prototype.predecessors=function(v){var predsV=this._preds[v];if(predsV){return _.keys(predsV)}};Graph.prototype.successors=function(v){var sucsV=this._sucs[v];if(sucsV){return _.keys(sucsV)}};Graph.prototype.neighbors=function(v){var preds=this.predecessors(v);if(preds){return _.union(preds,this.successors(v))}};Graph.prototype.isLeaf=function(v){var neighbors;if(this.isDirected()){neighbors=this.successors(v)}else{neighbors=this.neighbors(v)}return neighbors.length===0};Graph.prototype.filterNodes=function(filter){var copy=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});copy.setGraph(this.graph());var self=this;_.each(this._nodes,function(value,v){if(filter(v)){copy.setNode(v,value)}});_.each(this._edgeObjs,function(e){if(copy.hasNode(e.v)&&copy.hasNode(e.w)){copy.setEdge(e,self.edge(e))}});var parents={};function findParent(v){var parent=self.parent(v);if(parent===undefined||copy.hasNode(parent)){parents[v]=parent;return parent}else if(parent in parents){return parents[parent]}else{return findParent(parent)}}if(this._isCompound){_.each(copy.nodes(),function(v){copy.setParent(v,findParent(v))})}return copy};
/* === Edge functions ========== */Graph.prototype.setDefaultEdgeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault)}this._defaultEdgeLabelFn=newDefault;return this};Graph.prototype.edgeCount=function(){return this._edgeCount};Graph.prototype.edges=function(){return _.values(this._edgeObjs)};Graph.prototype.setPath=function(vs,value){var self=this,args=arguments;_.reduce(vs,function(v,w){if(args.length>1){self.setEdge(v,w,value)}else{self.setEdge(v,w)}return w});return this};
/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */Graph.prototype.setEdge=function(){var v,w,name,value,valueSpecified=false,arg0=arguments[0];if(typeof arg0==="object"&&arg0!==null&&"v"in arg0){v=arg0.v;w=arg0.w;name=arg0.name;if(arguments.length===2){value=arguments[1];valueSpecified=true}}else{v=arg0;w=arguments[1];name=arguments[3];if(arguments.length>2){value=arguments[2];valueSpecified=true}}v=""+v;w=""+w;if(!_.isUndefined(name)){name=""+name}var e=edgeArgsToId(this._isDirected,v,w,name);if(_.has(this._edgeLabels,e)){if(valueSpecified){this._edgeLabels[e]=value}return this}if(!_.isUndefined(name)&&!this._isMultigraph){throw new Error("Cannot set a named edge when isMultigraph = false")}
// It didn't exist, so we need to create it.
// First ensure the nodes exist.
this.setNode(v);this.setNode(w);this._edgeLabels[e]=valueSpecified?value:this._defaultEdgeLabelFn(v,w,name);var edgeObj=edgeArgsToObj(this._isDirected,v,w,name);
// Ensure we add undirected edges in a consistent way.
v=edgeObj.v;w=edgeObj.w;Object.freeze(edgeObj);this._edgeObjs[e]=edgeObj;incrementOrInitEntry(this._preds[w],v);incrementOrInitEntry(this._sucs[v],w);this._in[w][e]=edgeObj;this._out[v][e]=edgeObj;this._edgeCount++;return this};Graph.prototype.edge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return this._edgeLabels[e]};Graph.prototype.hasEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return _.has(this._edgeLabels,e)};Graph.prototype.removeEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name),edge=this._edgeObjs[e];if(edge){v=edge.v;w=edge.w;delete this._edgeLabels[e];delete this._edgeObjs[e];decrementOrRemoveEntry(this._preds[w],v);decrementOrRemoveEntry(this._sucs[v],w);delete this._in[w][e];delete this._out[v][e];this._edgeCount--}return this};Graph.prototype.inEdges=function(v,u){var inV=this._in[v];if(inV){var edges=_.values(inV);if(!u){return edges}return _.filter(edges,function(edge){return edge.v===u})}};Graph.prototype.outEdges=function(v,w){var outV=this._out[v];if(outV){var edges=_.values(outV);if(!w){return edges}return _.filter(edges,function(edge){return edge.w===w})}};Graph.prototype.nodeEdges=function(v,w){var inEdges=this.inEdges(v,w);if(inEdges){return inEdges.concat(this.outEdges(v,w))}};function incrementOrInitEntry(map,k){if(map[k]){map[k]++}else{map[k]=1}}function decrementOrRemoveEntry(map,k){if(!--map[k]){delete map[k]}}function edgeArgsToId(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp}return v+EDGE_KEY_DELIM+w+EDGE_KEY_DELIM+(_.isUndefined(name)?DEFAULT_EDGE_NAME:name)}function edgeArgsToObj(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp}var edgeObj={v:v,w:w};if(name){edgeObj.name=name}return edgeObj}function edgeObjToId(isDirected,edgeObj){return edgeArgsToId(isDirected,edgeObj.v,edgeObj.w,edgeObj.name)}},{"./lodash":49}],47:[function(require,module,exports){
// Includes only the "core" of graphlib
module.exports={Graph:require("./graph"),version:require("./version")}},{"./graph":46,"./version":50}],48:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graph");module.exports={write:write,read:read};function write(g){var json={options:{directed:g.isDirected(),multigraph:g.isMultigraph(),compound:g.isCompound()},nodes:writeNodes(g),edges:writeEdges(g)};if(!_.isUndefined(g.graph())){json.value=_.clone(g.graph())}return json}function writeNodes(g){return _.map(g.nodes(),function(v){var nodeValue=g.node(v),parent=g.parent(v),node={v:v};if(!_.isUndefined(nodeValue)){node.value=nodeValue}if(!_.isUndefined(parent)){node.parent=parent}return node})}function writeEdges(g){return _.map(g.edges(),function(e){var edgeValue=g.edge(e),edge={v:e.v,w:e.w};if(!_.isUndefined(e.name)){edge.name=e.name}if(!_.isUndefined(edgeValue)){edge.value=edgeValue}return edge})}function read(json){var g=new Graph(json.options).setGraph(json.value);_.each(json.nodes,function(entry){g.setNode(entry.v,entry.value);if(entry.parent){g.setParent(entry.v,entry.parent)}});_.each(json.edges,function(entry){g.setEdge({v:entry.v,w:entry.w,name:entry.name},entry.value)});return g}},{"./graph":46,"./lodash":49}],49:[function(require,module,exports){arguments[4][10][0].apply(exports,arguments)},{dup:10,lodash:51}],50:[function(require,module,exports){module.exports="2.1.5"},{}],51:[function(require,module,exports){(function(global){(function(){
/** Used as a safe reference for `undefined` in pre-ES5 environments. */
var undefined;
/** Used as the semantic version number. */var VERSION="4.17.4";
/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;
/** Error message constants. */var CORE_ERROR_TEXT="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",FUNC_ERROR_TEXT="Expected a function";
/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED="__lodash_hash_undefined__";
/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;
/** Used as the internal argument placeholder. */var PLACEHOLDER="__lodash_placeholder__";
/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;
/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;
/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;
/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION="...";
/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;
/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;
/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e308,NAN=0/0;
/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;
/** Used to associate wrap methods with their bit flags. */var wrapFlags=[["ary",WRAP_ARY_FLAG],["bind",WRAP_BIND_FLAG],["bindKey",WRAP_BIND_KEY_FLAG],["curry",WRAP_CURRY_FLAG],["curryRight",WRAP_CURRY_RIGHT_FLAG],["flip",WRAP_FLIP_FLAG],["partial",WRAP_PARTIAL_FLAG],["partialRight",WRAP_PARTIAL_RIGHT_FLAG],["rearg",WRAP_REARG_FLAG]];
/** `Object#toString` result references. */var argsTag="[object Arguments]",arrayTag="[object Array]",asyncTag="[object AsyncFunction]",boolTag="[object Boolean]",dateTag="[object Date]",domExcTag="[object DOMException]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",nullTag="[object Null]",objectTag="[object Object]",promiseTag="[object Promise]",proxyTag="[object Proxy]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",undefinedTag="[object Undefined]",weakMapTag="[object WeakMap]",weakSetTag="[object WeakSet]";var arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";
/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);
/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;
/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);
/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;
/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;
/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;
/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;
/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;
/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;
/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;
/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;
/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;
/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;
/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;
/** Used to compose unicode capture groups. */var rsApos="['’]",rsAstral="["+rsAstralRange+"]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d";
/** Used to compose unicode regexes. */var rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",rsOrdUpper="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")";
/** Used to match apostrophes. */var reApos=RegExp(rsApos,"g");
/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,"g");
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");
/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+"]");
/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/** Used to assign default `context` object properties. */var contextProps=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"];
/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;
/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;
/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;
/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={
// Latin-1 Supplement block.
"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss",
// Latin Extended-A block.
"Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"};
/** Used to map characters to HTML entities. */var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
/** Used to map HTML entities to characters. */var htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};
/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};
/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;
/** Detect free variable `global` from Node.js. */var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;
/** Detect free variable `self`. */var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;
/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function("return this")();
/** Detect free variable `exports`. */var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports;
/** Detect free variable `module`. */var freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module;
/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;
/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;
/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();
/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;
/*--------------------------------------------------------------------------*/
/**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */function addMapEntry(map,pair){
// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map}
/**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */function addSetEntry(set,value){
// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set}
/**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}
/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array)}return accumulator}
/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break}}return array}
/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break}}return array}
/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false}}return true}
/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value}}return result}
/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1}
/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true}}return false}
/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array)}return result}
/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index]}return array}
/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index]}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array)}return accumulator}
/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length]}while(length--){accumulator=iteratee(accumulator,array[length],length,array)}return accumulator}
/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true}}return false}
/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty("length");
/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(string){return string.split("")}
/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[]}
/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false}});return result}
/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index}}return-1}
/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}
/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index}}return-1}
/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(value){return value!==value}
/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN}
/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key]}}
/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key]}}
/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection)});return accumulator}
/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value}return array}
/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current}}return result}
/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index)}return result}
/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]]})}
/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value)}}
/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key]})}
/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function cacheHas(cache,key){return cache.has(key)}
/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index}
/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index}
/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result}}return result}
/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);
/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);
/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return"\\"+stringEscapes[chr]}
/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key]}
/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string)}
/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}
/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value)}return result}
/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value]});return result}
/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg))}}
/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index}}return result}
/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value});return result}
/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value]});return result}
/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index}}return-1}
/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index}}return index}
/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string)}
/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string)}
/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);
/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result}return result}
/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[]}
/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function unicodeWords(string){return string.match(reUnicodeWord)||[]}
/*--------------------------------------------------------------------------*/
/**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));
/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;
/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;
/** Used to detect overreaching core-js shims. */var coreJsData=context["__core-js_shared__"];
/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;
/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;
/** Used to generate unique IDs. */var idCounter=0;
/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return uid?"Symbol(src)_1."+uid:""}();
/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;
/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);
/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;
/** Used to detect if a method is native. */var reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,"defineProperty");func({},"",{});return func}catch(e){}}();
/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;
/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;
/* Built-in method references that are verified to be native. */var DataView=getNative(context,"DataView"),Map=getNative(context,"Map"),Promise=getNative(context,"Promise"),Set=getNative(context,"Set"),WeakMap=getNative(context,"WeakMap"),nativeCreate=getNative(Object,"create");
/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap;
/** Used to lookup unminified function names. */var realNames={};
/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;
/*------------------------------------------------------------------------*/
/**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value}if(hasOwnProperty.call(value,"__wrapped__")){return wrapperClone(value)}}return new LodashWrapper(value)}
/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{}}if(objectCreate){return objectCreate(proto)}object.prototype=proto;var result=new object;object.prototype=undefined;return result}}();
/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){
// No operation performed.
}
/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined}
/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={
/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
escape:reEscape,
/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
evaluate:reEvaluate,
/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
interpolate:reInterpolate,
/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
variable:"",
/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
imports:{
/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
_:lodash}};
// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;
/*------------------------------------------------------------------------*/
/**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[]}
/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result}
/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true}else{result=this.clone();result.__dir__*=-1}return result}
/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__)}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer}else{break outer}}}result[resIndex++]=value}return result}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;
/*------------------------------------------------------------------------*/
/**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0}
/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result}
/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result}return hasOwnProperty.call(data,key)?data[key]:undefined}
/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key)}
/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this}
// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype["delete"]=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;
/*------------------------------------------------------------------------*/
/**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function listCacheClear(){this.__data__=[];this.size=0}
/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false}var lastIndex=data.length-1;if(index==lastIndex){data.pop()}else{splice.call(data,index,1)}--this.size;return true}
/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1]}
/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1}
/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value])}else{data[index][1]=value}return this}
// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype["delete"]=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;
/*------------------------------------------------------------------------*/
/**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function mapCacheClear(){this.size=0;this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}
/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function mapCacheDelete(key){var result=getMapData(this,key)["delete"](key);this.size-=result?1:0;return result}
/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key)}
/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function mapCacheHas(key){return getMapData(this,key).has(key)}
/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this}
// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype["delete"]=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;
/*------------------------------------------------------------------------*/
/**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache;while(++index<length){this.add(values[index])}}
/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this}
/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value)}
// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;
/*------------------------------------------------------------------------*/
/**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size}
/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function stackClear(){this.__data__=new ListCache;this.size=0}
/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function stackDelete(key){var data=this.__data__,result=data["delete"](key);this.size=data.size;return result}
/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key)}
/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function stackHas(key){return this.__data__.has(key)}
/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this}data=this.__data__=new MapCache(pairs)}data.set(key,value);this.size=data.size;return this}
// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype["delete"]=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;
/*------------------------------------------------------------------------*/
/**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
key=="length"||
// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=="offset"||key=="parent")||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=="buffer"||key=="byteLength"||key=="byteOffset")||
// Skip index properties.
isIndex(key,length)))){result.push(key)}}return result}
/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined}
/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length))}
/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array))}
/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value)}}
/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value)}}
/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length}}return-1}
/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection)});return accumulator}
/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object)}
/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object)}
/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function baseAssignValue(object,key,value){if(key=="__proto__"&&defineProperty){defineProperty(object,key,{configurable:true,enumerable:true,value:value,writable:true})}else{object[key]=value}}
/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index])}return result}
/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper}if(lower!==undefined){number=number>=lower?number:lower}}return number}
/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value)}if(result!==undefined){return result}if(!isObject(value)){return value}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result)}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep)}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value))}}else{if(!cloneableTags[tag]){return object?value:{}}result=initCloneByTag(value,tag,baseClone,isDeep)}}
// Check for circular references and return its corresponding clone.
stack||(stack=new Stack);var stacked=stack.get(value);if(stacked){return stacked}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key]}
// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack))});return result}
/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props)}}
/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false}}return true}
/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function baseDelay(func,wait,args){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return setTimeout(function(){func.apply(undefined,args)},wait)}
/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result}if(iteratee){values=arrayMap(values,baseUnary(iteratee))}if(comparator){includes=arrayIncludesWith;isCommon=false}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values)}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer}}result.push(value)}else if(!includes(values,computed,comparator)){result.push(value)}}return result}
/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);
/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);
/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result});return result}
/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value}}return result}
/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length}end=start>end?0:toLength(end);while(start<end){array[start++]=value}return array}
/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value)}});return result}
/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){
// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result)}else{arrayPush(result,value)}}else if(!isStrict){result[result.length]=value}}return result}
/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();
/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);
/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys)}
/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys)}
/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key])})}
/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])]}return index&&index==length?object:undefined}
/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object))}
/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}
/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function baseGt(value,other){return value>other}
/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key)}
/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHasIn(object,key){return object!=null&&key in Object(object)}
/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end)}
/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee))}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer}}if(seen){seen.push(computed)}result.push(value)}}return result}
/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object)});return accumulator}
/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args)}
/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag}
/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag}
/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag}
/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack)}
/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false}objIsArr=true;objIsObj=false}if(isSameTag&&!objIsObj){stack||(stack=new Stack);return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack)}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,"__wrapped__"),othIsWrapped=othIsObj&&hasOwnProperty.call(other,"__wrapped__");if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack);return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack)}}if(!isSameTag){return false}stack||(stack=new Stack);return equalObjects(object,other,bitmask,customizer,equalFunc,stack)}
/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag}
/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false}}else{var stack=new Stack;if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack)}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false}}}return true}
/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value))}
/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag}
/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag}
/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)]}
/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function baseIteratee(value){
// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=="function"){return value}if(value==null){return identity}if(typeof value=="object"){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value)}return property(value)}
/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object)}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!="constructor"){result.push(key)}}return result}
/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object)}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=="constructor"&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key)}}return result}
/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function baseLt(value,other){return value<other}
/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection)});return result}
/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1])}return function(object){return object===source||baseIsMatch(object,source,matchData)}}
/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue)}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}
/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack);baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack)}else{var newValue=customizer?customizer(object[key],srcValue,key+"",object,source,stack):undefined;if(newValue===undefined){newValue=srcValue}assignMergeValue(object,key,newValue)}},keysIn)}
/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return}var newValue=customizer?customizer(objValue,srcValue,key+"",object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue)}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true)}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true)}else{newValue=[]}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue)}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue)}}else{isCommon=false}}if(isCommon){
// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack["delete"](srcValue)}assignMergeValue(object,key,newValue)}
/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function baseNth(array,n){var length=array.length;if(!length){return}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined}
/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value)});return{criteria:criteria,index:++index,value:value}});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders)})}
/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path)})}
/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value)}}return result}
/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyDeep(path){return function(object){return baseGet(object,path)}}
/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values)}if(iteratee){seen=arrayMap(array,baseUnary(iteratee))}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1)}splice.call(array,fromIndex,1)}}return array}
/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1)}else{baseUnset(array,index)}}}return array}
/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1))}
/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step}return result}
/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function baseRepeat(string,n){var result="";if(!string||n<1||n>MAX_SAFE_INTEGER){return result}
// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string}n=nativeFloor(n/2);if(n){string+=string}}while(n);return result}
/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}
/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection))}
/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length))}
/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{}}}assignValue(nested,key,newValue);nested=nested[key]}return object}
/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func};
/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,"toString",{configurable:true,enumerable:false,value:constant(string),writable:true})};
/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function baseShuffle(collection){return shuffleSelf(values(collection))}
/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start}end=end>length?length:end;if(end<0){end+=length}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start]}return result}
/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result});return!!result}
/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=="number"&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1}else{high=mid}}return high}return baseSortedIndexBy(array,value,identity,retHighest)}
/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined)}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull)}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol)}else if(othIsNull||othIsSymbol){setLow=false}else{setLow=retHighest?computed<=value:computed<value}if(setLow){low=mid+1}else{high=mid}}return nativeMin(high,MAX_ARRAY_INDEX)}
/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value}}return result}
/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function baseToNumber(value){if(typeof value=="number"){return value}if(isSymbol(value)){return NAN}return+value}
/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function baseToString(value){
// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=="string"){return value}if(isArray(value)){
// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+""}if(isSymbol(value)){return symbolToString?symbolToString.call(value):""}var result=value+"";return result=="0"&&1/value==-INFINITY?"-0":result}
/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set)}isCommon=false;includes=cacheHas;seen=new SetCache}else{seen=iteratee?[]:result}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer}}if(iteratee){seen.push(computed)}result.push(value)}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed)}result.push(value)}}return result}
/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))]}
/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer)}
/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index)}
/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value()}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args))},result)}
/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[]}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator)}}}return baseUniq(baseFlatten(result,1),iteratee,comparator)}
/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value)}return result}
/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[]}
/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function castFunction(value){return typeof value=="function"?value:identity}
/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function castPath(value,object){if(isArray(value)){return value}return isKey(value,object)?[value]:stringToPath(toString(value))}
/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;
/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end)}
/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id)};
/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice()}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result}
/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result}
/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)}
/**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor)}
/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result}
/**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor)}
/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}}
/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)}
/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1}}return 0}
/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result}var order=orders[index];return result*(order=="desc"?-1:1)}}
// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index}
/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex]}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex]}}while(rangeLength--){result[leftIndex++]=args[argsIndex++]}return result}
/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex]}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex]}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++]}}return result}
/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index]}return array}
/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key]}if(isNew){baseAssignValue(object,key,newValue)}else{assignValue(object,key,newValue)}}return object}
/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object)}
/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object)}
/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator)}}
/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=="function"?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer)}}return object})}
/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection}if(!isArrayLike(collection)){return eachFunc(collection,iteratee)}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break}}return collection}}
/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break}}return object}}
/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments)}return wrapper}
/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}
/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}
/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function createCtor(Ctor){return function(){
// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor;case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6])}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);
// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding}}
/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index]}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length)}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args)}return wrapper}
/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable)}}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined}}
/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse()}while(index--){var func=funcs[index];if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}if(prereq&&!wrapper&&getFuncName(func)=="wrapper"){var wrapper=new LodashWrapper([],true)}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=="wrapper"?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3])}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func)}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value()}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result)}return result}})}
/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index]}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder)}if(partials){args=composeArgs(args,partials,holders,isCurried)}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried)}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length)}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos)}else if(isFlip&&length>1){args.reverse()}if(isAry&&ary<length){args.length=ary}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn)}return fn.apply(thisBinding,args)}return wrapper}
/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{})}}
/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue}if(value!==undefined){result=value}if(other!==undefined){if(result===undefined){return other}if(typeof value=="string"||typeof other=="string"){value=baseToString(value);other=baseToString(other)}else{value=baseToNumber(value);other=baseToNumber(other)}result=operator(value,other)}return result}}
/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args)})})})}
/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function createPadding(length,chars){chars=chars===undefined?" ":baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(""):result.slice(0,length)}
/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex]}while(argsLength--){args[leftIndex++]=arguments[++argsIndex]}return apply(fn,isBind?thisArg:this,args)}return wrapper}
/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!="number"&&isIterateeCall(start,end,step)){end=step=undefined}
// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0}else{end=toFinite(end)}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight)}}
/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=="string"&&typeof other=="string")){value=toNumber(value);other=toNumber(other)}return operator(value,other)}}
/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG)}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData)}result.placeholder=placeholder;return setWrapToString(result,func,bitmask)}
/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision){
// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+"e").split("e"),value=func(pair[0]+"e"+(+pair[1]+precision));pair=(toString(value)+"e").split("e");return+(pair[0]+"e"+(+pair[1]-precision))}return func(number)}}
/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values)};
/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object)}if(tag==setTag){return setToPairs(object)}return baseToPairs(object,keysFunc(object))}}
/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data)}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg)}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity)}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials)}else{result=createHybrid.apply(undefined,newData)}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask)}
/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue}return objValue}
/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){
// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack["delete"](srcValue)}return objValue}
/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function customOmitClone(value){return isPlainObject(value)?undefined:value}
/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false}
// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache:undefined;stack.set(array,other);stack.set(other,array);
// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack)}if(compared!==undefined){if(compared){continue}result=false;break}
// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex)}})){result=false;break}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break}}stack["delete"](array);stack["delete"](other);return result}
/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false}return true;case boolTag:case dateTag:case numberTag:
// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:
// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+"";case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false}
// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other}bitmask|=COMPARE_UNORDERED_FLAG;
// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack["delete"](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other)}}return false}
/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false}}
// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack)}
// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break}skipCtor||(skipCtor=key=="constructor")}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;
// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&("constructor"in object&&"constructor"in other)&&!(typeof objCtor=="function"&&objCtor instanceof objCtor&&typeof othCtor=="function"&&othCtor instanceof othCtor)){result=false}}stack["delete"](object);stack["delete"](other);return result}
/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+"")}
/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols)}
/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn)}
/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var getData=!metaMap?noop:function(func){return metaMap.get(func)};
/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function getFuncName(func){var result=func.name+"",array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name}}return result}
/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function getHolder(func){var object=hasOwnProperty.call(lodash,"placeholder")?lodash:func;return object.placeholder}
/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result}
/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=="string"?"string":"hash"]:data.map}
/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)]}return result}
/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined}
/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag}else{delete value[symToStringTag]}}return result}
/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[]}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol)})};
/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object)}return result};
/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):"";if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}}return result}}
/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case"drop":start+=size;break;case"dropRight":end-=size;break;case"take":end=nativeMin(end,start+size);break;case"takeRight":start=nativeMax(start,end-size);break}}return{start:start,end:end}}
/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[]}
/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break}object=object[key]}if(result||++index!=length){return result}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object))}
/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */function initCloneArray(array){var length=array.length,result=array.constructor(length);
// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=="string"&&hasOwnProperty.call(array,"index")){result.index=array.index;result.input=array.input}return result}
/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneObject(object){return typeof object.constructor=="function"&&!isPrototype(object)?baseCreate(getPrototype(object)):{}}
/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object)}}
/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source}var lastIndex=length-1;details[lastIndex]=(length>1?"& ":"")+details[lastIndex];details=details.join(length>2?", ":" ");return source.replace(reWrapComment,"{\n/* [wrapped with "+details+"] */\n")}
/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}
/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=="number"||reIsUint.test(value))&&(value>-1&&value%1==0&&value<length)}
/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function isIterateeCall(value,index,object){if(!isObject(object)){return false}var type=typeof index;if(type=="number"?isArrayLike(object)&&isIndex(index,object.length):type=="string"&&index in object){return eq(object[index],value)}return false}
/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function isKey(value,object){if(isArray(value)){return false}var type=typeof value;if(type=="number"||type=="symbol"||type=="boolean"||value==null||isSymbol(value)){return true}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object)}
/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */function isKeyable(value){var type=typeof value;return type=="string"||type=="number"||type=="symbol"||type=="boolean"?value!=="__proto__":value===null}
/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!="function"||!(funcName in LazyWrapper.prototype)){return false}if(func===other){return true}var data=getData(other);return!!data&&func===data[0]}
/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func}
/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;
/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=="function"&&Ctor.prototype||objectProto;return value===proto}
/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */function isStrictComparable(value){return value===value&&!isObject(value)}
/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object))}}
/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear()}return key});var cache=result.cache;return result}
/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;
// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data}
// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];
// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG}
// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4]}
// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6]}
// Use source `argPos` if available.
value=source[7];if(value){data[7]=value}
// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8])}
// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9]}
// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data}
/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key)}}return result}
/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */function objectToString(value){return nativeObjectToString.call(value)}
/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index]}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index]}otherArgs[start]=transform(array);return apply(func,this,otherArgs)}}
/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1))}
/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined}return array}
/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);
/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait)};
/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);
/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function setWrapToString(wrapper,reference,bitmask){var source=reference+"";return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)))}
/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0]}}else{count=0}return func.apply(undefined,arguments)}}
/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value}array.length=size;return array}
/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push("")}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,"$1"):number||match)});return result});
/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function toKey(value){if(typeof value=="string"||isSymbol(value)){return value}var result=value+"";return result=="0"&&1/value==-INFINITY?"-0":result}
/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function toSource(func){if(func!=null){try{return funcToString.call(func)}catch(e){}try{return func+""}catch(e){}}return""}
/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value="_."+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value)}});return details.sort()}
/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone()}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result}
/*------------------------------------------------------------------------*/
/**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1}else{size=nativeMax(toInteger(size),0)}var length=array==null?0:array.length;if(!length||size<1){return[]}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size)}return result}
/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value}}return result}
/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function concat(){var length=arguments.length;if(!length){return[]}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index]}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1))}
/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[]});
/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[]});
/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[]});
/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[]}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length)}
/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[]}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n)}
/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[]}
/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[]}
/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[]}if(start&&typeof start!="number"&&isIterateeCall(array,value,start)){start=0;end=length}return baseFill(array,value,start,end)}
/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0)}return baseFindIndex(array,getIteratee(predicate,3),index)}
/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1)}return baseFindIndex(array,getIteratee(predicate,3),index,true)}
/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[]}
/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[]}
/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[]}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth)}
/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1]}return result}
/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function head(array){return array&&array.length?array[0]:undefined}
/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0)}return baseIndexOf(array,value,index)}
/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[]}
/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[]});
/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined}else{mapped.pop()}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[]});
/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=="function"?comparator:undefined;if(comparator){mapped.pop()}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[]});
/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function join(array,separator){return array==null?"":nativeJoin.call(array,separator)}
/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined}
/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1)}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true)}
/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined}
/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);
/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array}
/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array}
/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array}
/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index}).sort(compareAscending));return result});
/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index)}}basePullAt(array,indexes);return result}
/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function reverse(array){return array==null?array:nativeReverse.call(array)}
/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[]}if(end&&typeof end!="number"&&isIterateeCall(array,start,end)){start=0;end=length}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end)}return baseSlice(array,start,end)}
/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value)}
/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2))}
/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index}}return-1}
/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true)}
/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true)}
/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index}}return-1}
/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[]}
/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[]}
/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[]}
/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function take(array,n,guard){if(!(array&&array.length)){return[]}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n)}
/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[]}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length)}
/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[]}
/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[]}
/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true))});
/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2))});
/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=="function"?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator)});
/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function uniq(array){return array&&array.length?baseUniq(array):[]}
/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[]}
/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function uniqWith(array,comparator){comparator=typeof comparator=="function"?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[]}
/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function unzip(array){if(!(array&&array.length)){return[]}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index))})}
/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[]}var result=unzip(array);if(iteratee==null){return result}return arrayMap(result,function(group){return apply(iteratee,undefined,group)})}
/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[]});
/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject))});
/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2))});
/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=="function"?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator)});
/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);
/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue)}
/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet)}
/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=="function"?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee)});
/*------------------------------------------------------------------------*/
/**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function chain(value){var result=lodash(value);result.__chain__=true;return result}
/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function tap(value,interceptor){interceptor(value);return value}
/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function thru(value,interceptor){return interceptor(value)}
/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths)};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor)}value=value.slice(start,+start+(length?1:0));value.__actions__.push({func:thru,args:[interceptor],thisArg:undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined)}return array})});
/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function wrapperChain(){return chain(this)}
/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__)}
/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value())}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{done:done,value:value}}
/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function wrapperToIterator(){return this}
/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone}else{result=clone}var previous=clone;parent=parent.__wrapped__}previous.__wrapped__=value;return result}
/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this)}wrapped=wrapped.reverse();wrapped.__actions__.push({func:thru,args:[reverse],thisArg:undefined});return new LodashWrapper(wrapped,this.__chain__)}return this.thru(reverse)}
/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__)}
/*------------------------------------------------------------------------*/
/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key]}else{baseAssignValue(result,key,1)}});
/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined}return func(collection,getIteratee(predicate,3))}
/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3))}
/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);
/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);
/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1)}
/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY)}
/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth)}
/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3))}
/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3))}
/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value)}else{baseAssignValue(result,key,[value])}});
/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0)}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1}
/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=="function",result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args)});return result});
/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value)});
/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3))}
/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[]}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees]}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders]}return baseOrderBy(collection,iteratees,orders)}
/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value)},function(){return[[],[]]});
/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach)}
/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight)}
/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)))}
/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection)}
/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1}else{n=toInteger(n)}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n)}
/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection)}
/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function size(collection){if(collection==null){return 0}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size}return baseKeys(collection).length}
/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined}return func(collection,getIteratee(predicate,3))}
/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[]}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[]}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]]}return baseOrderBy(collection,baseFlatten(iteratees,1),[])});
/*------------------------------------------------------------------------*/
/**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */var now=ctxNow||function(){return root.Date.now()};
/*------------------------------------------------------------------------*/
/**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function after(n,func){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments)}}}
/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n)}
/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function before(n,func){var result;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments)}if(n<=1){func=undefined}return result}}
/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG}return createWrap(func,bitmask,thisArg,partials,holders)});
/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG}return createWrap(key,bitmask,object,partials,holders)});
/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result}
/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result}
/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing="maxWait"in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing="trailing"in options?!!options.trailing:trailing}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result}function leadingEdge(time){
// Reset any `maxWait` timer.
lastInvokeTime=time;
// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);
// Invoke the leading edge.
return leading?invokeFunc(time):result}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time)}
// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time))}function trailingEdge(time){timerId=undefined;
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time)}lastArgs=lastThis=undefined;return result}function cancel(){if(timerId!==undefined){clearTimeout(timerId)}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined}function flush(){return timerId===undefined?result:trailingEdge(now())}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime)}if(maxing){
// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime)}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait)}return result}debounced.cancel=cancel;debounced.flush=flush;return debounced}
/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var defer=baseRest(function(func,args){return baseDelay(func,1,args)});
/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)});
/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG)}
/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function memoize(func,resolver){if(typeof func!="function"||resolver!=null&&typeof resolver!="function"){throw new TypeError(FUNC_ERROR_TEXT)}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key)}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result};memoized.cache=new(memoize.Cache||MapCache);return memoized}
// Expose `MapCache`.
memoize.Cache=MapCache;
/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function negate(predicate){if(typeof predicate!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2])}return!predicate.apply(this,args)}}
/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function once(func){return before(2,func)}
/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index])}return apply(func,this,args)})});
/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders)});
/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders)});
/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes)});
/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function rest(func,start){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}start=start===undefined?start:toInteger(start);return baseRest(func,start)}
/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function spread(func,start){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array)}return apply(func,this,otherArgs)})}
/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}if(isObject(options)){leading="leading"in options?!!options.leading:leading;trailing="trailing"in options?!!options.trailing:trailing}return debounce(func,wait,{leading:leading,maxWait:wait,trailing:trailing})}
/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function unary(func){return ary(func,1)}
/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function wrap(value,wrapper){return partial(castFunction(wrapper),value)}
/*------------------------------------------------------------------------*/
/**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function castArray(){if(!arguments.length){return[]}var value=arguments[0];return isArray(value)?value:[value]}
/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG)}
/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function cloneWith(value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer)}
/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG)}
/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function cloneDeepWith(value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer)}
/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source))}
/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function eq(value,other){return value===other||value!==value&&other!==other}
/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);
/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */var gte=createRelationalOperation(function(value,other){return value>=other});
/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee")};
/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;
/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;
/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value)}
/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}
/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag}
/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;
/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;
/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value)}
/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function isEmpty(value){if(value==null){return true}if(isArrayLike(value)&&(isArray(value)||typeof value=="string"||typeof value.splice=="function"||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size}if(isPrototype(value)){return!baseKeys(value).length}for(var key in value){if(hasOwnProperty.call(value,key)){return false}}return true}
/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function isEqual(value,other){return baseIsEqual(value,other)}
/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function isEqualWith(value,other,customizer){customizer=typeof customizer=="function"?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result}
/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function isError(value){if(!isObjectLike(value)){return false}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=="string"&&typeof value.name=="string"&&!isPlainObject(value)}
/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function isFinite(value){return typeof value=="number"&&nativeIsFinite(value)}
/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function isFunction(value){if(!isObject(value)){return false}
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag}
/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function isInteger(value){return typeof value=="number"&&value==toInteger(value)}
/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function isLength(value){return typeof value=="number"&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}
/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function isObject(value){var type=typeof value;return value!=null&&(type=="object"||type=="function")}
/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function isObjectLike(value){return value!=null&&typeof value=="object"}
/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;
/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source))}
/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function isMatchWith(object,source,customizer){customizer=typeof customizer=="function"?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer)}
/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function isNaN(value){
// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value}
/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT)}return baseIsNative(value)}
/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function isNull(value){return value===null}
/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function isNil(value){return value==null}
/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=="number"||isObjectLike(value)&&baseGetTag(value)==numberTag}
/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false}var proto=getPrototype(value);if(proto===null){return true}var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return typeof Ctor=="function"&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}
/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;
/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER}
/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;
/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function isString(value){return typeof value=="string"||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag}
/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function isSymbol(value){return typeof value=="symbol"||isObjectLike(value)&&baseGetTag(value)==symbolTag}
/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;
/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function isUndefined(value){return value===undefined}
/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag}
/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag}
/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);
/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */var lte=createRelationalOperation(function(value,other){return value<=other});
/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function toArray(value){if(!value){return[]}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value)}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]())}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value)}
/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function toFinite(value){if(!value){return value===0?value:0}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER}return value===value?value:0}
/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0}
/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0}
/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function toNumber(value){if(typeof value=="number"){return value}if(isSymbol(value)){return NAN}if(isObject(value)){var other=typeof value.valueOf=="function"?value.valueOf():value;value=isObject(other)?other+"":other}if(typeof value!="string"){return value===0?value:+value}value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}
/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function toPlainObject(value){return copyObject(value,keysIn(value))}
/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0}
/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function toString(value){return value==null?"":baseToString(value)}
/*------------------------------------------------------------------------*/
/**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key])}}});
/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object)});
/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer)});
/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer)});
/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);
/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties)}
/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var defaults=baseRest(function(args){args.push(undefined,customDefaultsAssignIn);return apply(assignInWith,undefined,args)});
/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args)});
/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn)}
/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight)}
/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn)}
/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn)}
/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3))}
/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3))}
/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object))}
/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object))}
/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result}
/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas)}
/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn)}
/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var invert=createInverter(function(result,value,key){result[value]=key},constant(identity));
/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key)}else{result[value]=[key]}},getIteratee);
/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);
/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object)}
/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object)}
/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value)});return result}
/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object))});return result}
/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex)});
/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer)});
/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone)}var length=paths.length;while(length--){baseUnset(result,paths[length])}return result});
/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)))}
/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths)});
/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function pickBy(object,predicate){if(object==null){return{}}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop]});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0])})}
/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;
// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue}object=isFunction(value)?value.call(object):value}return object}
/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function set(object,path,value){return object==null?object:baseSet(object,path,value)}
/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function setWith(object,path,value,customizer){customizer=typeof customizer=="function"?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer)}
/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);
/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);
/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor:[]}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{}}else{accumulator={}}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object)});return accumulator}
/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function unset(object,path){return object==null?true:baseUnset(object,path)}
/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater))}
/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=="function"?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer)}
/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object))}
/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object))}
/*------------------------------------------------------------------------*/
/**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0}return baseClamp(toNumber(number),lower,upper)}
/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0}else{end=toFinite(end)}number=toNumber(number);return baseInRange(number,start,end)}
/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function random(lower,upper,floating){if(floating&&typeof floating!="boolean"&&isIterateeCall(lower,upper,floating)){upper=floating=undefined}if(floating===undefined){if(typeof upper=="boolean"){floating=upper;upper=undefined}else if(typeof lower=="boolean"){floating=lower;lower=undefined}}if(lower===undefined&&upper===undefined){lower=0;upper=1}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0}else{upper=toFinite(upper)}}if(lower>upper){var temp=lower;lower=upper;upper=temp}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat("1e-"+((rand+"").length-1))),upper)}return baseRandom(lower,upper)}
/*------------------------------------------------------------------------*/
/**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word)});
/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function capitalize(string){return upperFirst(toString(string).toLowerCase())}
/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}
/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target}
/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string}
/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,"\\$&"):string}
/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?"-":"")+word.toLowerCase()});
/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?" ":"")+word.toLowerCase()});
/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst("toLowerCase");
/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars)}
/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string}
/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string}
/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0}else if(radix){radix=+radix}return nativeParseInt(toString(string).replace(reTrimStart,""),radix||0)}
/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1}else{n=toInteger(n)}return baseRepeat(toString(string),n)}
/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2])}
/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?"_":"")+word.toLowerCase()});
/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function split(string,separator,limit){if(limit&&typeof limit!="number"&&isIterateeCall(string,separator,limit)){separator=limit=undefined}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[]}string=toString(string);if(string&&(typeof separator=="string"||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit)}}return string.split(separator,limit)}
/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */var startCase=createCompounder(function(result,word,index){return result+(index?" ":"")+upperFirst(word)});
/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target}
/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function template(string,options,guard){
// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";
// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+"|"+interpolate.source+"|"+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+"|"+(options.evaluate||reNoMatch).source+"|$","g");
// Use a sourceURL for easier debugging.
var sourceURL="//# sourceURL="+("sourceURL"in options?options.sourceURL:"lodash.templateSources["+ ++templateCounter+"]")+"\n";string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);
// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);
// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'"}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '"}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'"}index=offset+match.length;
// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match});source+="';\n";
// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source="with (obj) {\n"+source+"\n}\n"}
// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,""):source).replace(reEmptyStringMiddle,"$1").replace(reEmptyStringTrailing,"$1;");
// Frame code as the function body.
source="function("+(variable||"obj")+") {\n"+(variable?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(isEscaping?", __e = _.escape":"")+(isEvaluating?", __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n":";\n")+source+"return __p\n}";var result=attempt(function(){return Function(importsKeys,sourceURL+"return "+source).apply(undefined,importsValues)});
// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result}return result}
/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase()}
/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function toUpper(value){return toString(value).toUpperCase()}
/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join("")}
/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join("")}
/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,"")}if(!string||!(chars=baseToString(chars))){return string}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join("")}
/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator="separator"in options?options.separator:separator;length="length"in options?toInteger(options.length):length;omission="omission"in options?baseToString(options.omission):omission}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length}if(length>=strLength){return string}var end=length-stringSize(omission);if(end<1){return omission}var result=strSymbols?castSlice(strSymbols,0,end).join(""):string.slice(0,end);if(separator===undefined){return result+omission}if(strSymbols){end+=result.length-end}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+"g")}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index}result=result.slice(0,newEnd===undefined?end:newEnd)}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index)}}return result+omission}
/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string}
/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */var upperCase=createCompounder(function(result,word,index){return result+(index?" ":"")+word.toUpperCase()});
/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst("toUpperCase");
/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string)}return string.match(pattern)||[]}
/*------------------------------------------------------------------------*/
/**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args)}catch(e){return isError(e)?e:new Error(e)}});
/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object))});return object});
/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return[toIteratee(pair[0]),pair[1]]});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args)}}})}
/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG))}
/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function constant(value){return function(){return value}}
/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value}
/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();
/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);
/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function identity(value){return value}
/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function iteratee(func){return baseIteratee(typeof func=="function"?func:baseClone(func,CLONE_DEEP_FLAG))}
/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG))}
/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG))}
/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args)}});
/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args)}});
/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source))}var chain=!(isObject(options)&&"chain"in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({func:func,args:arguments,thisArg:object});result.__chain__=chainAll;return result}return func.apply(object,arrayPush([this.value()],arguments))}}});return object}
/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function noConflict(){if(root._===this){root._=oldDash}return this}
/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function noop(){
// No operation performed.
}
/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n)})}
/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);
/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);
/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */var overSome=createOver(arraySome);
/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path)}
/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path)}}
/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();
/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);
/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function stubArray(){return[]}
/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false}
/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function stubObject(){return{}}
/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return""}
/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function stubTrue(){return true}
/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[]}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index)}return result}
/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey)}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)))}
/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}
/*------------------------------------------------------------------------*/
/**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var add=createMathOperation(function(augend,addend){return augend+addend},0);
/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound("ceil");
/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor},1);
/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound("floor");
/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined}
/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined}
/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function mean(array){return baseMean(array,identity)}
/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2))}
/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined}
/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined}
/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand},1);
/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound("round");
/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend},0);
/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function sum(array){return array&&array.length?baseSum(array,identity):0}
/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0}
/*------------------------------------------------------------------------*/
// Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;
// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;
// Add methods to `lodash.prototype`.
mixin(lodash,lodash);
/*------------------------------------------------------------------------*/
// Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;
// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func}});return source}(),{chain:false});
/*------------------------------------------------------------------------*/
/**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;
// Assign default placeholders.
arrayEach(["bind","bindKey","curry","curryRight","partial","partialRight"],function(methodName){lodash[methodName].placeholder=lodash});
// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(["drop","take"],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__)}else{result.__views__.push({size:nativeMin(n,MAX_ARRAY_LENGTH),type:methodName+(result.__dir__<0?"Right":"")})}return result};LazyWrapper.prototype[methodName+"Right"]=function(n){return this.reverse()[methodName](n).reverse()}});
// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(["filter","map","takeWhile"],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({iteratee:getIteratee(iteratee,3),type:type});result.__filtered__=result.__filtered__||isFilter;return result}});
// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(["head","last"],function(methodName,index){var takeName="take"+(index?"Right":"");LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0]}});
// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(["initial","tail"],function(methodName,index){var dropName="drop"+(index?"":"Right");LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1)}});LazyWrapper.prototype.compact=function(){return this.filter(identity)};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head()};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate)};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=="function"){return new LazyWrapper(this)}return this.map(function(value){return baseInvoke(value,path,args)})});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)))};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result)}if(start<0){result=result.takeRight(-start)}else if(start){result=result.drop(start)}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start)}return result};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse()};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH)};
// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?"take"+(methodName=="last"?"Right":""):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result};if(useLazy&&checkIteratee&&typeof iteratee=="function"&&iteratee.length!=1){
// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({func:thru,args:[interceptor],thisArg:undefined});return new LodashWrapper(result,chainAll)}if(isUnwrapped&&onlyLazy){return func.apply(this,args)}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result}});
// Add `Array` methods to `lodash.prototype`.
arrayEach(["pop","push","shift","sort","splice","unshift"],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?"tap":"thru",retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args)}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args)})}});
// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+"",names=realNames[key]||(realNames[key]=[]);names.push({name:methodName,func:lodashFunc})}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{name:"wrapper",func:undefined}];
// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;
// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;
// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator}return lodash};
/*--------------------------------------------------------------------------*/
// Export lodash.
var _=runInContext();
// Some AMD build optimizers, like r.js, check for condition patterns like:
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){
// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;
// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return _})}
// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){
// Export for Node.js.
(freeModule.exports=_)._=_;
// Export for CommonJS support.
freeExports._=_}else{
// Export to the global object.
root._=_}}).call(this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1])(1)});

;(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dagre"));
	else if(typeof define === 'function' && define.amd)
		define(["dagre"], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeDagre"] = factory(require("dagre"));
	else
		root["cytoscapeDagre"] = factory(root["dagre"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isFunction = function isFunction(o) {
  return typeof o === 'function';
};
var defaults = __webpack_require__(2);
var assign = __webpack_require__(1);
var dagre = __webpack_require__(4);

// constructor
// options : object containing layout options
function DagreLayout(options) {
  this.options = assign({}, defaults, options);
}

// runs the layout
DagreLayout.prototype.run = function () {
  var options = this.options;
  var layout = this;

  var cy = options.cy; // cy is automatically populated for us in the constructor
  var eles = options.eles;

  var getVal = function getVal(ele, val) {
    return isFunction(val) ? val.apply(ele, [ele]) : val;
  };

  var bb = options.boundingBox || { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
  if (bb.x2 === undefined) {
    bb.x2 = bb.x1 + bb.w;
  }
  if (bb.w === undefined) {
    bb.w = bb.x2 - bb.x1;
  }
  if (bb.y2 === undefined) {
    bb.y2 = bb.y1 + bb.h;
  }
  if (bb.h === undefined) {
    bb.h = bb.y2 - bb.y1;
  }

  var g = new dagre.graphlib.Graph({
    multigraph: true,
    compound: true
  });

  var gObj = {};
  var setGObj = function setGObj(name, val) {
    if (val != null) {
      gObj[name] = val;
    }
  };

  setGObj('nodesep', options.nodeSep);
  setGObj('edgesep', options.edgeSep);
  setGObj('ranksep', options.rankSep);
  setGObj('rankdir', options.rankDir);
  setGObj('ranker', options.ranker);

  g.setGraph(gObj);

  g.setDefaultEdgeLabel(function () {
    return {};
  });
  g.setDefaultNodeLabel(function () {
    return {};
  });

  // add nodes to dagre
  var nodes = eles.nodes();
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var nbb = node.layoutDimensions(options);

    g.setNode(node.id(), {
      width: nbb.w,
      height: nbb.h,
      name: node.id()
    });

    // console.log( g.node(node.id()) );
  }

  // set compound parents
  for (var _i = 0; _i < nodes.length; _i++) {
    var _node = nodes[_i];

    if (_node.isChild()) {
      g.setParent(_node.id(), _node.parent().id());
    }
  }

  // add edges to dagre
  var edges = eles.edges().stdFilter(function (edge) {
    return !edge.source().isParent() && !edge.target().isParent(); // dagre can't handle edges on compound nodes
  });
  for (var _i2 = 0; _i2 < edges.length; _i2++) {
    var edge = edges[_i2];

    g.setEdge(edge.source().id(), edge.target().id(), {
      minlen: getVal(edge, options.minLen),
      weight: getVal(edge, options.edgeWeight),
      name: edge.id()
    }, edge.id());

    // console.log( g.edge(edge.source().id(), edge.target().id(), edge.id()) );
  }

  dagre.layout(g);

  var gNodeIds = g.nodes();
  for (var _i3 = 0; _i3 < gNodeIds.length; _i3++) {
    var id = gNodeIds[_i3];
    var n = g.node(id);

    cy.getElementById(id).scratch().dagre = n;
  }

  var dagreBB = void 0;

  if (options.boundingBox) {
    dagreBB = { x1: Infinity, x2: -Infinity, y1: Infinity, y2: -Infinity };
    nodes.forEach(function (node) {
      var dModel = node.scratch().dagre;

      dagreBB.x1 = Math.min(dagreBB.x1, dModel.x);
      dagreBB.x2 = Math.max(dagreBB.x2, dModel.x);

      dagreBB.y1 = Math.min(dagreBB.y1, dModel.y);
      dagreBB.y2 = Math.max(dagreBB.y2, dModel.y);
    });

    dagreBB.w = dagreBB.x2 - dagreBB.x1;
    dagreBB.h = dagreBB.y2 - dagreBB.y1;
  } else {
    dagreBB = bb;
  }

  var constrainPos = function constrainPos(p) {
    if (options.boundingBox) {
      var xPct = dagreBB.w === 0 ? 0 : (p.x - dagreBB.x1) / dagreBB.w;
      var yPct = dagreBB.h === 0 ? 0 : (p.y - dagreBB.y1) / dagreBB.h;

      return {
        x: bb.x1 + xPct * bb.w,
        y: bb.y1 + yPct * bb.h
      };
    } else {
      return p;
    }
  };

  nodes.layoutPositions(layout, options, function (ele) {
    ele = (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === "object" ? ele : this;
    var dModel = ele.scratch().dagre;

    return constrainPos({
      x: dModel.x,
      y: dModel.y
    });
  });

  return this; // chaining
};

module.exports = DagreLayout;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

  return tgt;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = {
  // dagre algo options, uses default value on undefined
  nodeSep: undefined, // the separation between adjacent nodes in the same rank
  edgeSep: undefined, // the separation between adjacent edges in the same rank
  rankSep: undefined, // the separation between adjacent nodes in the same rank
  rankDir: undefined, // 'TB' for top to bottom flow, 'LR' for left to right,
  ranker: undefined, // Type of algorithm to assigns a rank to each node in the input graph.
  // Possible values: network-simplex, tight-tree or longest-path
  minLen: function minLen(edge) {
    return 1;
  }, // number of ranks to keep between the source and target of the edge
  edgeWeight: function edgeWeight(edge) {
    return 1;
  }, // higher weight edges are generally made shorter and straighter than lower weight edges

  // general layout options
  fit: true, // whether to fit to viewport
  padding: 30, // fit padding
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
  animate: false, // whether to transition the node positions
  animateFilter: function animateFilter(node, i) {
    return true;
  }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  transform: function transform(node, pos) {
    return pos;
  }, // a function that applies a transform to the final node position
  ready: function ready() {}, // on layoutready
  stop: function stop() {} // on layoutstop
};

module.exports = defaults;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(0);

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('layout', 'dagre', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
;
//# sourceMappingURL=scripts.js.map