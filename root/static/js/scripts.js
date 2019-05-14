/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});

// jQuery
// @prepros-prepend "../libs/jquery-3.3.1/jquery.min.js"

// Materialize
// @prepros-append "../libs/materialize-0.97.5/materialize.min.js"

//WOW
// @prepros-append "../libs/wow-1.0.3/wow.min.js"

//Google
// @prepros-append "../libs/google-maps-3.0.0/google.maps.min.js"

//Masonary
// @prepros-append "../libs/masonry-3.3.0/masonry.pkgd.js"
// @prepros-append "../libs/masonry-3.3.0/validator.min.js"

// Custom
// @prepros-append "_main.js"

/*!
 * Materialize v0.97.5 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jQuery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(-Math.pow(2,-10*e/a)+1)+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o))+i},easeOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/o)+n+i},easeInOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(2==(e/=a/2))return i+n;if(o||(o=a*(.3*1.5)),s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o))+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*.5+n+i},easeInBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*(e/=a)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*((e=e/a-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?n/2*(e*e*(((r*=1.525)+1)*e-r))+i:n/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+i:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return a/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(t){function e(t){var e=t.length,n=i.type(t);return"function"===n||i.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?a[o.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!r.call(t,"constructor")&&!r.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}for(e in t);return void 0===e||r.call(t,e)},i.each=function(t,i,n){var a,r=0,o=t.length,s=e(t);if(n){if(s)for(;o>r&&(a=i.apply(t[r],n),a!==!1);r++);else for(r in t)if(a=i.apply(t[r],n),a===!1)break}else if(s)for(;o>r&&(a=i.call(t[r],r,t[r]),a!==!1);r++);else for(r in t)if(a=i.call(t[r],r,t[r]),a===!1)break;return t},i.data=function(t,e,a){if(void 0===a){var r=t[i.expando],o=r&&n[r];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=a,a}},i.removeData=function(t,e){var a=t[i.expando],r=a&&n[a];r&&i.each(e,function(t,e){delete r[e]})},i.extend=function(){var t,e,n,a,r,o,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(r=arguments[l]))for(a in r)t=s[a],n=r[a],s!==n&&(c&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,o=t&&i.isArray(t)?t:[]):o=t&&i.isPlainObject(t)?t:{},s[a]=i.extend(c,o,n)):void 0!==n&&(s[a]=n));return s},i.queue=function(t,n,a){function r(t,i){var n=i||[];return null!=t&&(e(Object(t))?!function(t,e){for(var i=+e.length,n=0,a=t.length;i>n;)t[a++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[a++]=e[n++];return t.length=a,t}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}if(t){n=(n||"fx")+"queue";var o=i.data(t,n);return a?(!o||i.isArray(a)?o=i.data(t,n,r(a)):o.push(a),o):o||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var a=i.queue(n,e),r=a.shift();"inprogress"===r&&(r=a.shift()),r&&("fx"===e&&a.unshift("inprogress"),r.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),a=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(a.top+=parseFloat(t.style.borderTopWidth)||0,a.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-a.top,left:n.left-a.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var a={},r=a.hasOwnProperty,o=a.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)a["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function a(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var a=t[e];a&&n.push(a)}return n}function r(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function o(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,a){function r(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((r(e,i)*t+o(e,i))*t+s(e))*t}function u(t,e,i){return 3*r(e,i)*t*t+2*o(e,i)*t+s(e)}function c(e,i){for(var a=0;v>a;++a){var r=u(i,t,n);if(0===r)return i;var o=l(i,t,n)-e;i-=o/r}return i}function d(){for(var e=0;b>e;++e)k[e]=l(e*w,t,n)}function p(e,i,a){var r,o,s=0;do o=i+(a-i)/2,r=l(o,t,n)-e,r>0?a=o:i=o;while(Math.abs(r)>m&&++s<y);return o}function f(e){for(var i=0,a=1,r=b-1;a!=r&&k[a]<=e;++a)i+=w;--a;var o=(e-k[a])/(k[a+1]-k[a]),s=i+o*w,l=u(s,t,n);return l>=g?c(e,s):0==l?s:p(e,i,i+w)}function h(){T=!0,(t!=i||n!=a)&&d()}var v=4,g=.001,m=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in e;if(4!==arguments.length)return!1;for(var C=0;4>C;++C)if("number"!=typeof arguments[C]||isNaN(arguments[C])||!isFinite(arguments[C]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var k=x?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||h(),t===i&&n===a?e:0===e?0:1===e?1:l(f(e),i,a)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:a}]};var P="generateBezier("+[t,i,n,a]+")";return S.toString=function(){return P},S}function u(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):v.isArray(t)&&4===t.length?l.apply(null,t):!1,i===!1&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function c(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=a(b.State.calls));for(var r=0;i>r;r++)if(b.State.calls[r]){var s=b.State.calls[r],l=s[0],u=s[2],f=s[3],h=!!f,g=null;f||(f=b.State.calls[r][3]=e-16);for(var m=Math.min((e-f)/u.duration,1),y=0,w=l.length;w>y;y++){var C=l[y],T=C.element;if(o(T)){var S=!1;if(u.display!==n&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(P,function(t,e){x.setPropertyValue(T,"display",e)})}x.setPropertyValue(T,"display",u.display)}u.visibility!==n&&"hidden"!==u.visibility&&x.setPropertyValue(T,"visibility",u.visibility);for(var O in C)if("element"!==O){var A,E=C[O],q=v.isString(E.easing)?b.Easings[E.easing]:E.easing;if(1===m)A=E.endValue;else{var M=E.endValue-E.startValue;if(A=E.startValue+M*q(m,u,M),!h&&A===E.currentValue)continue}if(E.currentValue=A,"tween"===O)g=A;else{if(x.Hooks.registered[O]){var V=x.Hooks.getRoot(O),I=o(T).rootPropertyValueCache[V];I&&(E.rootPropertyValue=I)}var _=x.setPropertyValue(T,O,E.currentValue+(0===parseFloat(A)?"":E.unitType),E.rootPropertyValue,E.scrollData);x.Hooks.registered[O]&&(o(T).rootPropertyValueCache[V]=x.Normalizations.registered[V]?x.Normalizations.registered[V]("extract",null,_[1]):_[1]),"transform"===_[0]&&(S=!0)}}u.mobileHA&&o(T).transformCache.translate3d===n&&(o(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(T)}}u.display!==n&&"none"!==u.display&&(b.State.calls[r][2].display=!1),u.visibility!==n&&"hidden"!==u.visibility&&(b.State.calls[r][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],m,Math.max(0,f+u.duration-e),f,g),1===m&&d(r)}}b.State.isTicking&&k(c)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],a=b.State.calls[t][1],r=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,u=0,c=i.length;c>u;u++){var d=i[u].element;if(e||r.loop||("none"===r.display&&x.setPropertyValue(d,"display",r.display),"hidden"===r.visibility&&x.setPropertyValue(d,"visibility",r.visibility)),r.loop!==!0&&(p.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&o(d)){o(d).isAnimating=!1,o(d).rootPropertyValueCache={};var f=!1;p.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,a=o(d).transformCache[e];o(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(a)&&(f=!0,delete o(d).transformCache[e])}),r.mobileHA&&(f=!0,delete o(d).transformCache.translate3d),f&&x.flushTransformCache(d),x.Values.removeClass(d,"velocity-animating")}if(!e&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(a,a)}catch(h){setTimeout(function(){throw h},1)}s&&r.loop!==!0&&s(a),o(d)&&r.loop===!0&&!e&&(p.each(o(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:r.delay})),r.queue!==!1&&p.dequeue(d,r.queue)}b.State.calls[t]=!1;for(var v=0,g=b.State.calls.length;g>v;v++)if(b.State.calls[v]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,f=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="<!--[if IE "+t+"]><span></span><![endif]-->",e.getElementsByTagName("span").length)return e=null,t}return n}(),h=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(p=t,g=!0):p=e.Velocity.Utilities,8>=f&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var a={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:a.v,dv:t(a)}}function i(i,n){var a={dx:i.v,dv:t(i)},r=e(i,.5*n,a),o=e(i,.5*n,r),s=e(i,n,o),l=1/6*(a.dx+2*(r.dx+o.dx)+s.dx),u=1/6*(a.dv+2*(r.dv+o.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+u*n,i}return function n(t,e,a){var r,o,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,d=1e-4,p=.016;for(t=parseFloat(t)||500,e=parseFloat(e)||20,a=a||null,l.tension=t,l.friction=e,r=null!==a,r?(c=n(t,e),o=c/a*p):o=p;s=i(s||l,o),u.push(1+s.x),c+=16,Math.abs(s.x)>d&&Math.abs(s.v)>d;);return r?function(t){return u[t*(u.length-1)|0]}:c}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<x.Lists.colors.length;t++){var e="color"===x.Lists.colors[t]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,a;if(f)for(i in x.Hooks.templates){n=x.Hooks.templates[i],a=n[0].split(" ");var r=n[1].match(x.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),x.Hooks.templates[i]=[a.join(" "),r.join(" ")])}for(i in x.Hooks.templates){n=x.Hooks.templates[i],a=n[0].split(" ");for(var t in a){var o=i+a[t],s=t;x.Hooks.registered[o]=[i,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],a=i[1];return e=x.Hooks.cleanRootPropertyValue(n,e),e.toString().match(x.RegEx.valueSplit)[a]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var a,r,o=n[0],s=n[1];return i=x.Hooks.cleanRootPropertyValue(o,i),a=i.toString().match(x.RegEx.valueSplit),a[s]=e,r=a.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(x.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var a=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=a?a[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=f)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":return i;case"inject":return i}}},register:function(){9>=f||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return"transform";case"extract":return o(i)===n||o(i).transformCache[e]===n?/^scale/i.test(e)?1:0:o(i).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":b.State.isAndroid&&o(i).transformCache[e]===n&&1>a&&(a=1),r=!/(\d)$/i.test(a);break;case"skew":r=!/(deg|\d)$/i.test(a);break;case"rotate":r=!/(deg|\d)$/i.test(a)}return r||(o(i).transformCache[e]="("+a+")"),o(i).transformCache[e]}}}();for(var t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return e;case"extract":var r;if(x.RegEx.wrappedValueAlreadyExtracted.test(a))r=a;else{var o,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?o=s[a]!==n?s[a]:s.black:x.RegEx.isHex.test(a)?o="rgb("+x.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(o=s.black),r=(o||a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return 8>=f?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=f?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var a;if(a=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[t]=a,[a,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,a,r){function s(t,i){function a(){u&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=f)l=p.css(t,i);else{var u=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(u=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!r){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var c=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return a(),c}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return a(),d}}var h;h=o(t)===n?e.getComputedStyle(t,null):o(t).computedStyle?o(t).computedStyle:o(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),l=9===f&&"filter"===i?h.getPropertyValue(i):h[i],(""===l||null===l)&&(l=t.style[i]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var u=i,c=x.Hooks.getRoot(u);a===n&&(a=x.getPropertyValue(t,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(a=x.Normalizations.registered[c]("extract",t,a)),l=x.Hooks.extractValue(u,a)}else if(x.Normalizations.registered[i]){var d,h;d=x.Normalizations.registered[i]("name",t),"transform"!==d&&(h=s(t,x.Names.prefixCheck(d)[0]),x.Values.isCSSNullValue(h)&&x.Hooks.templates[i]&&(h=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,h)}if(!/^[\d-]/.test(l))if(o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(v){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,a,r){var s=i;if("scroll"===i)r.container?r.container["scroll"+r.direction]=n:"Left"===r.direction?e.scrollTo(n,r.alternateValue):e.scrollTo(r.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=o(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,u=x.Hooks.getRoot(i);a=a||x.getPropertyValue(t,u),n=x.Hooks.injectValue(l,n,a),i=u}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=f)try{t.style[s]=n}catch(c){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((f||b.State.isAndroid&&!b.State.isChrome)&&o(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(o(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var a,r;p.each(o(t).transformCache,function(e){return a=o(t).transformCache[e],"transformPerspective"===e?(r=a,!0):(9===f&&"rotateZ"===e&&(e="rotate"),void(i+=e+a+" "))}),r&&(i="perspective"+r+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var a=n;return t=r(t),p.each(t,function(t,r){if(o(r)===n&&b.init(r),i===n)a===n&&(a=b.CSS.getPropertyValue(r,e));else{var s=b.CSS.setPropertyValue(r,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(r),a=s}}),a};var C=function(){function t(){return s?O.promise||null:l}function a(){function t(t){function d(t,e){var i=n,a=n,o=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\d-]/.test(t[1])||v.isFunction(t[1])||x.RegEx.isHex.test(t[1])?o=t[1]:(v.isString(t[1])&&!x.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(a=e?t[1]:u(t[1],s.duration),t[2]!==n&&(o=t[2]))):i=t,e||(a=a||s.easing),v.isFunction(i)&&(i=i.call(r,T,k)),v.isFunction(o)&&(o=o.call(r,T,k)),[i||0,a,o]}function f(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}function m(){var t={myParent:r.parentNode||i.body,position:x.getPropertyValue(r,"position"),fontSize:x.getPropertyValue(r,"fontSize")},n=t.position===_.lastPosition&&t.myParent===_.lastParent,a=t.fontSize===_.lastFontSize;_.lastParent=t.myParent,_.lastPosition=t.position,_.lastFontSize=t.fontSize;var s=100,l={};if(a&&n)l.emToPx=_.lastEmToPx,l.percentToPxWidth=_.lastPercentToPxWidth,l.percentToPxHeight=_.lastPercentToPxHeight;else{var u=o(r).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(u),t.myParent.appendChild(u),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(u,e,"hidden")}),b.CSS.setPropertyValue(u,"position",t.position),b.CSS.setPropertyValue(u,"fontSize",t.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(u,e,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=_.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=_.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=_.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,t.myParent.removeChild(u)}return null===_.remToPx&&(_.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===_.vwToPx&&(_.vwToPx=parseFloat(e.innerWidth)/100,_.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=_.remToPx,l.vwToPx=_.vwToPx,l.vhToPx=_.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),r),l}if(s.begin&&0===T)try{s.begin.call(h,h)}catch(w){setTimeout(function(){throw w},1)}if("scroll"===A){var C,S,P,E=/^x$/i.test(s.axis)?"Left":"Top",q=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,C=s.container["scroll"+E],P=C+p(r).position()[E.toLowerCase()]+q):s.container=null:(C=b.State.scrollAnchor[b.State["scrollProperty"+E]],S=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===E?"Top":"Left")]],P=p(r).offset()[E.toLowerCase()]+q),l={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:P,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:E,alternateValue:S}},element:r},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,r)}else if("reverse"===A){if(!o(r).tweensContainer)return void p.dequeue(r,s.queue);"none"===o(r).opts.display&&(o(r).opts.display="auto"),"hidden"===o(r).opts.visibility&&(o(r).opts.visibility="visible"),o(r).opts.loop=!1,o(r).opts.begin=null,o(r).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},o(r).opts,s);var M=p.extend(!0,{},o(r).tweensContainer);for(var V in M)if("element"!==V){var I=M[V].startValue;M[V].startValue=M[V].currentValue=M[V].endValue,M[V].endValue=I,v.isEmptyObject(y)||(M[V].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+V+"): "+JSON.stringify(M[V]),r)}l=M}else if("start"===A){var M;o(r).tweensContainer&&o(r).isAnimating===!0&&(M=o(r).tweensContainer),p.each(g,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),a=i[0],r=i[1],o=i[2];if(x.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(a),u=o?x.Values.hexToRgb(o):n,c=0;c<s.length;c++){var p=[l[c]];r&&p.push(r),u!==n&&p.push(u[c]),g[t+s[c]]=p}delete g[t]}}});for(var D in g){var z=d(g[D]),Q=z[0],L=z[1],N=z[2];D=x.Names.camelCase(D);var $=x.Hooks.getRoot(D),F=!1;if(o(r).isSVG||"tween"===$||x.Names.prefixCheck($)[1]!==!1||x.Normalizations.registered[$]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(D)&&!N&&0!==Q&&(N=0),s._cacheValues&&M&&M[D]?(N===n&&(N=M[D].endValue+M[D].unitType),F=o(r).rootPropertyValueCache[$]):x.Hooks.registered[D]?N===n?(F=x.getPropertyValue(r,$),N=x.getPropertyValue(r,D,F)):F=x.Hooks.templates[$][1]:N===n&&(N=x.getPropertyValue(r,D));var W,R,H,X=!1;if(W=f(D,N),N=W[0],H=W[1],W=f(D,Q),Q=W[0].replace(/^([+-\/*])=/,function(t,e){return X=e,""}),R=W[1],N=parseFloat(N)||0,Q=parseFloat(Q)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(D)?(Q/=100,R="em"):/^scale/.test(D)?(Q/=100,R=""):/(Red|Green|Blue)$/i.test(D)&&(Q=Q/100*255,R="")),/[\/*]/.test(X))R=H;else if(H!==R&&0!==N)if(0===Q)R=H;else{a=a||m();var Y=/margin|padding|left|right|width|text|word|letter/i.test(D)||/X$/.test(D)||"x"===D?"x":"y";
    switch(H){case"%":N*="x"===Y?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:N*=a[H+"ToPx"]}switch(R){case"%":N*=1/("x"===Y?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:N*=1/a[R+"ToPx"]}}switch(X){case"+":Q=N+Q;break;case"-":Q=N-Q;break;case"*":Q=N*Q;break;case"/":Q=N/Q}l[D]={rootPropertyValue:F,startValue:N,currentValue:N,endValue:Q,unitType:R,easing:L},b.debug&&console.log("tweensContainer ("+D+"): "+JSON.stringify(l[D]),r)}else b.debug&&console.log("Skipping ["+$+"] due to a lack of browser support.")}l.element=r}l.element&&(x.Values.addClass(r,"velocity-animating"),j.push(l),""===s.queue&&(o(r).tweensContainer=l,o(r).opts=s),o(r).isAnimating=!0,T===k-1?(b.State.calls.push([j,h,s,null,O.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):T++)}var a,r=this,s=p.extend({},b.defaults,y),l={};switch(o(r)===n&&b.init(r),parseFloat(s.delay)&&s.queue!==!1&&p.queue(r,s.queue,function(t){b.velocityQueueEntryFlag=!0,o(r).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(r))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(t,s.delay):t():p.queue(r,s.queue,function(e,i){return i===!0?(O.promise&&O.resolver(h),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(r)[0]||p.dequeue(r)}var s,l,f,h,g,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,f=0,h=this,l=this):(s=!0,f=1,h=w?arguments[0].elements||arguments[0].e:arguments[0]),h=r(h)){w?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[f],y=arguments[f+1]);var k=h.length,T=0;if(!/^(stop|finish)$/i.test(g)&&!p.isPlainObject(y)){var S=f+1;y={};for(var P=S;P<arguments.length;P++)v.isArray(arguments[P])||!/^(fast|normal|slow)$/i.test(arguments[P])&&!/^\d/.test(arguments[P])?v.isString(arguments[P])||v.isArray(arguments[P])?y.easing=arguments[P]:v.isFunction(arguments[P])&&(y.complete=arguments[P]):y.duration=arguments[P]}var O={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(O.promise=new b.Promise(function(t,e){O.resolver=t,O.rejecter=e}));var A;switch(g){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":p.each(h,function(t,e){o(e)&&o(e).delayTimer&&(clearTimeout(o(e).delayTimer.setTimeout),o(e).delayTimer.next&&o(e).delayTimer.next(),delete o(e).delayTimer)});var E=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,a){var r=y===n?"":y;return r===!0||e[2].queue===r||y===n&&e[2].queue===!1?void p.each(h,function(i,n){n===a&&((y===!0||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===g?(o(n)&&o(n).tweensContainer&&r!==!1&&p.each(o(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),E.push(t)):"finish"===g&&(e[2].duration=1))}):!0})}),"stop"===g&&(p.each(E,function(t,e){d(e,!0)}),O.promise&&O.resolver(h)),t();default:if(!p.isPlainObject(g)||v.isEmptyObject(g)){if(v.isString(g)&&b.Redirects[g]){var q=p.extend({},y),M=q.duration,V=q.delay||0;return q.backwards===!0&&(h=p.extend(!0,[],h).reverse()),p.each(h,function(t,e){parseFloat(q.stagger)?q.delay=V+parseFloat(q.stagger)*t:v.isFunction(q.stagger)&&(q.delay=V+q.stagger.call(e,t,k)),q.drag&&(q.duration=parseFloat(M)||(/^(callout|transition)/.test(g)?1e3:m),q.duration=Math.max(q.duration*(q.backwards?1-t/k:(t+1)/k),.75*q.duration,200)),b.Redirects[g].call(e,e,q||{},t,k,h,O.promise?O:n)}),t()}var I="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return O.promise?O.rejecter(new Error(I)):console.log(I),t()}A="start"}var _={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},j=[];p.each(h,function(t,e){v.isNode(e)&&a.call(e)});var D,q=p.extend({},b.defaults,y);if(q.loop=parseInt(q.loop),D=2*q.loop-1,q.loop)for(var z=0;D>z;z++){var Q={delay:q.delay,progress:q.progress};z===D-1&&(Q.display=q.display,Q.visibility=q.visibility,Q.complete=q.complete),C(h,"reverse",Q)}return t()}};b=p.extend(C,b),b.animate=C;var k=e.requestAnimationFrame||h;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},c()):k=e.requestAnimationFrame||h}),t.Velocity=b,t!==e&&(t.fn.velocity=C,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,a,r,o,s){var l=p.extend({},i),u=l.begin,c=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(o,o);for(var i in d){f[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)t.style[e]=f[e];c&&c.call(o,o),s&&s.resolver(o)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,a,r,o,s){var l=p.extend({},i),u={opacity:"In"===e?1:0},c=l.complete;l.complete=a!==r-1?l.begin=null:function(){c&&c.call(o,o),s&&s.resolver(o)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)})),!function(t,e,i,n){"use strict";function a(t,e,i){return setTimeout(c(t,i),e)}function r(t,e,i){return Array.isArray(t)?(o(t,i[e],i),!0):!1}function o(t,e,i){var a;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(a=0;a<t.length;)e.call(i,t[a],a,t),a++;else for(a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function s(t,e,i){for(var a=Object.keys(e),r=0;r<a.length;)(!i||i&&t[a[r]]===n)&&(t[a[r]]=e[a[r]]),r++;return t}function l(t,e){return s(t,e,!0)}function u(t,e,i){var n,a=e.prototype;n=t.prototype=Object.create(a),n.constructor=t,n._super=a,i&&s(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ct?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function f(t,e,i){o(m(e),function(e){t.addEventListener(e,i,!1)})}function h(t,e,i){o(m(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],a=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];y(a,o)<0&&n.push(t[r]),a[r]=o,r++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,a,r=e[0].toUpperCase()+e.slice(1),o=0;o<lt.length;){if(i=lt[o],a=i?i+r:e,a in t)return a;o++}return n}function C(){return ht++}function k(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e,i=t.options.inputClass;return new(e=i?i:mt?L:yt?F:gt?R:Q)(t,P)}function P(t,e,i){var n=i.pointers.length,a=i.changedPointers.length,r=e&Tt&&0===n-a,o=e&(Pt|Ot)&&0===n-a;i.isFirst=!!r,i.isFinal=!!o,r&&(t.session={}),i.eventType=e,O(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function O(t,e){var i=t.session,n=e.pointers,a=n.length;i.firstInput||(i.firstInput=q(e)),a>1&&!i.firstMultiple?i.firstMultiple=q(e):1===a&&(i.firstMultiple=!1);var r=i.firstInput,o=i.firstMultiple,s=o?o.center:r.center,l=e.center=M(n);e.timeStamp=ft(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=j(s,l),e.distance=_(s,l),A(i,e),e.offsetDirection=I(e.deltaX,e.deltaY),e.scale=o?z(o.pointers,n):1,e.rotation=o?D(o.pointers,n):0,E(i,e);var u=t.element;v(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function A(t,e){var i=e.center,n=t.offsetDelta||{},a=t.prevDelta||{},r=t.prevInput||{};(e.eventType===Tt||r.eventType===Pt)&&(a=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=a.x+(i.x-n.x),e.deltaY=a.y+(i.y-n.y)}function E(t,e){var i,a,r,o,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=Ot&&(l>kt||s.velocity===n)){var u=s.deltaX-e.deltaX,c=s.deltaY-e.deltaY,d=V(l,u,c);a=d.x,r=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,o=I(u,c),t.lastInterval=e}else i=s.velocity,a=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=i,e.velocityX=a,e.velocityY=r,e.direction=o}function q(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ft(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,a=0;e>a;)i+=t[a].clientX,n+=t[a].clientY,a++;return{x:dt(i/e),y:dt(n/e)}}function V(t,e,i){return{x:e/t||0,y:i/t||0}}function I(t,e){return t===e?At:pt(t)>=pt(e)?t>0?Et:qt:e>0?Mt:Vt}function _(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return Math.sqrt(n*n+a*a)}function j(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return 180*Math.atan2(a,n)/Math.PI}function D(t,e){return j(e[1],e[0],zt)-j(t[1],t[0],zt)}function z(t,e){return _(e[0],e[1],zt)/_(t[0],t[1],zt)}function Q(){this.evEl=Lt,this.evWin=Nt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function L(){this.evEl=Wt,this.evWin=Rt,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Xt,this.evWin=Yt,this.started=!1,T.apply(this,arguments)}function $(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Pt|Ot)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function F(){this.evTarget=Gt,this.targetIds={},T.apply(this,arguments)}function W(t,e){var i=b(t.touches),n=this.targetIds;if(e&(Tt|St)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var a,r,o=b(t.changedTouches),s=[],l=this.target;if(r=i.filter(function(t){return v(t.target,l)}),e===Tt)for(a=0;a<r.length;)n[r[a].identifier]=!0,a++;for(a=0;a<o.length;)n[o[a].identifier]&&s.push(o[a]),e&(Pt|Ot)&&delete n[o[a].identifier],a++;return s.length?[w(r.concat(s),"identifier",!0),s]:void 0}function R(){T.apply(this,arguments);var t=c(this.handler,this);this.touch=new F(this.manager,t),this.mouse=new Q(this.manager,t)}function H(t,e){this.manager=t,this.set(e)}function X(t){if(g(t,ee))return ee;var e=g(t,ie),i=g(t,ne);return e&&i?ie+" "+ne:e||i?e?ie:ne:g(t,te)?te:Kt}function Y(t){this.id=C(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ae,this.simultaneous={},this.requireFail=[]}function B(t){return t&ue?"cancel":t&se?"end":t&oe?"move":t&re?"start":""}function G(t){return t==Vt?"down":t==Mt?"up":t==Et?"left":t==qt?"right":""}function U(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function at(t,e){return e=e||{},e.recognizers=p(e.recognizers,at.defaults.preset),new rt(t,e)}function rt(t,e){e=e||{},this.options=l(e,at.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new H(this,this.options.touchAction),ot(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ot(t,e){var i=t.element;o(t.options.cssProps,function(t,n){i.style[x(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ut=e.createElement("div"),ct="function",dt=Math.round,pt=Math.abs,ft=Date.now,ht=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in t,mt=x(t,"PointerEvent")!==n,yt=gt&&vt.test(navigator.userAgent),bt="touch",wt="pen",xt="mouse",Ct="kinect",kt=25,Tt=1,St=2,Pt=4,Ot=8,At=1,Et=2,qt=4,Mt=8,Vt=16,It=Et|qt,_t=Mt|Vt,jt=It|_t,Dt=["x","y"],zt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(k(this.element),this.evWin,this.domHandler)}};var Qt={mousedown:Tt,mousemove:St,mouseup:Pt},Lt="mousedown",Nt="mousemove mouseup";u(Q,T,{handler:function(t){var e=Qt[t.type];e&Tt&&0===t.button&&(this.pressed=!0),e&St&&1!==t.which&&(e=Pt),this.pressed&&this.allow&&(e&Pt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var $t={pointerdown:Tt,pointermove:St,pointerup:Pt,pointercancel:Ot,pointerout:Ot},Ft={2:bt,3:wt,4:xt,5:Ct},Wt="pointerdown",Rt="pointermove pointerup pointercancel";t.MSPointerEvent&&(Wt="MSPointerDown",Rt="MSPointerMove MSPointerUp MSPointerCancel"),u(L,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),a=$t[n],r=Ft[t.pointerType]||t.pointerType,o=r==bt,s=y(e,t.pointerId,"pointerId");a&Tt&&(0===t.button||o)?0>s&&(e.push(t),s=e.length-1):a&(Pt|Ot)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,a,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(s,1))}});var Ht={touchstart:Tt,touchmove:St,touchend:Pt,touchcancel:Ot},Xt="touchstart",Yt="touchstart touchmove touchend touchcancel";u(N,T,{handler:function(t){var e=Ht[t.type];if(e===Tt&&(this.started=!0),this.started){var i=$.call(this,t,e);e&(Pt|Ot)&&0===i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Bt={touchstart:Tt,touchmove:St,touchend:Pt,touchcancel:Ot},Gt="touchstart touchmove touchend touchcancel";u(F,T,{handler:function(t){var e=Bt[t.type],i=W.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),u(R,T,{handler:function(t,e,i){var n=i.pointerType==bt,a=i.pointerType==xt;if(n)this.mouse.allow=!1;else if(a&&!this.mouse.allow)return;e&(Pt|Ot)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ut=x(ut.style,"touchAction"),Zt=Ut!==n,Jt="compute",Kt="auto",te="manipulation",ee="none",ie="pan-x",ne="pan-y";H.prototype={set:function(t){t==Jt&&(t=this.compute()),Zt&&(this.manager.element.style[Ut]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),X(t.join(" "))},preventDefaults:function(t){if(!Zt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,a=g(n,ee),r=g(n,ne),o=g(n,ie);return a||r&&i&It||o&&i&_t?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ae=1,re=2,oe=4,se=8,le=se,ue=16,ce=32;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(r(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=U(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return r(t,"dropRecognizeWith",this)?this:(t=U(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(r(t,"requireFailure",this))return this;var e=this.requireFail;return t=U(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(r(t,"dropRequireFailure",this))return this;t=U(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;se>n&&e(!0),e(),n>=se&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=ce)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(ce|ae)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(le|ue|ce)&&(this.state=ae),this.state=this.process(e),void(this.state&(re|oe|se|ue)&&this.tryEmit(e))):(this.reset(),void(this.state=ce))},process:function(){},getTouchAction:function(){},reset:function(){}},u(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(re|oe),a=this.attrTest(t);return n&&(i&Ot||!a)?e|ue:n||a?i&Pt?e|se:e&re?e|oe:re:ce}}),u(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(ne),t&_t&&e.push(ie),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,a=t.direction,r=t.deltaX,o=t.deltaY;return a&e.direction||(e.direction&It?(a=0===r?At:0>r?Et:qt,i=r!=this.pX,n=Math.abs(t.deltaX)):(a=0===o?At:0>o?Mt:Vt,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=a,i&&n>e.threshold&&a&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&re||!(this.state&re)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),u(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&re)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),u(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Pt|Ot)&&!r)this.reset();else if(t.eventType&Tt)this.reset(),this._timer=a(function(){this.state=le,this.tryEmit()},e.time,this);else if(t.eventType&Pt)return le;return ce},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===le&&(t&&t.eventType&Pt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ft(),this.manager.emit(this.options.event,this._input)))}}),u(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&re)}}),u(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:It|_t,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|_t)?e=t.velocity:i&It?e=t.velocityX:i&_t&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Pt},emit:function(t){var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),u(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[te]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Tt&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=Pt)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,s=!this.pCenter||_(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=a(function(){this.state=le,this.tryEmit()},e.interval,this),re):le}return ce},failTimeout:function(){return this._timer=a(function(){this.state=ce},this.options.interval,this),ce},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==le&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),at.VERSION="2.0.4",at.defaults={domEvents:!1,touchAction:Jt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:It}],[J,{direction:It},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var de=1,pe=2;rt.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?pe:de},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,a=e.curRecognizer;(!a||a&&a.state&le)&&(a=e.curRecognizer=null);for(var r=0;r<n.length;)i=n[r],e.stopped===pe||a&&i!=a&&!i.canRecognizeWith(a)?i.reset():i.recognize(t),!a&&i.state&(re|oe|se)&&(a=e.curRecognizer=i),r++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(r(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(r(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(m(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(at,{INPUT_START:Tt,INPUT_MOVE:St,INPUT_END:Pt,INPUT_CANCEL:Ot,STATE_POSSIBLE:ae,STATE_BEGAN:re,STATE_CHANGED:oe,STATE_ENDED:se,STATE_RECOGNIZED:le,STATE_CANCELLED:ue,STATE_FAILED:ce,DIRECTION_NONE:At,DIRECTION_LEFT:Et,DIRECTION_RIGHT:qt,DIRECTION_UP:Mt,DIRECTION_DOWN:Vt,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:_t,DIRECTION_ALL:jt,Manager:rt,Input:T,TouchAction:H,TouchInput:F,MouseInput:Q,PointerEventInput:L,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:f,off:h,each:o,merge:l,extend:s,inherit:u,bindFn:c,prefixed:x}),typeof define==ct&&define.amd?define(function(){return at}):"undefined"!=typeof module&&module.exports?module.exports=at:t[i]=at}(window,document,"Hammer"),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var a=t(i);a.data("hammer")||a.data("hammer",new e(a[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){return"fixed"===$(this).css("position")?(n=!0,!1):void 0}),n};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(t){t.fn.collapsible=function(e){var i={accordion:void 0};return e=t.extend(i,e),this.each(function(){function i(e){s=o.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),s.not(e).removeClass("active").parent().removeClass("active"),s.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function n(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function a(t){var e=r(t);return e.length>0}function r(t){return t.closest("li > .collapsible-header")}var o=t(this),s=t(this).find("> li > .collapsible-header"),l=o.data("collapsible");o.off("click.collapse","> li > .collapsible-header"),s.off("click.collapse"),o.on("click.collapse","> li > .collapsible-header",function(o){var s=t(this),u=t(o.target);a(u)&&(u=r(u)),u.toggleClass("active"),e.accordion||"accordion"===l||void 0===l?i(u):(n(u),s.hasClass("active")&&n(s))});var s=o.find("> li > .collapsible-header");e.accordion||"accordion"===l||void 0===l?i(s.filter(".active").first()):s.filter(".active").each(function(){n(t(this))})})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function n(){void 0!==o.data("induration")&&(s.inDuration=o.data("inDuration")),void 0!==o.data("outduration")&&(s.outDuration=o.data("outDuration")),void 0!==o.data("constrainwidth")&&(s.constrain_width=o.data("constrainwidth")),void 0!==o.data("hover")&&(s.hover=o.data("hover")),void 0!==o.data("gutter")&&(s.gutter=o.data("gutter")),void 0!==o.data("beloworigin")&&(s.belowOrigin=o.data("beloworigin")),void 0!==o.data("alignment")&&(s.alignment=o.data("alignment"))}function a(e){"focus"===e&&(l=!0),n(),u.addClass("active"),o.addClass("active"),s.constrain_width===!0?u.css("width",o.outerWidth()):u.css("white-space","nowrap");var i,a=window.innerHeight,r=o.innerHeight(),c=o.offset().left,d=o.offset().top-t(window).scrollTop(),p=s.alignment,f=0;if(s.belowOrigin===!0&&(f=r),c+u.innerWidth()>t(window).width()?p="right":c-u.innerWidth()+o.innerWidth()<0&&(p="left"),d+u.innerHeight()>a)if(d+r-u.innerHeight()<0){var h=a-d-f;u.css("max-height",h)}else f||(f+=r),f-=u.innerHeight();if("left"===p)i=s.gutter,leftPosition=o.position().left+i;else if("right"===p){var v=o.position().left+o.outerWidth()-u.outerWidth();i=-s.gutter,leftPosition=v+i}u.css({position:"absolute",top:o.position().top+f,left:leftPosition}),u.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"})}function r(){l=!1,u.fadeOut(s.outDuration),u.removeClass("active"),o.removeClass("active"),setTimeout(function(){u.css("max-height","")},s.outDuration)}var o=t(this),s=t.extend({},i,e),l=!1,u=t("#"+o.attr("data-activates"));if(n(),o.after(u),s.hover){var c=!1;o.unbind("click."+o.attr("id")),o.on("mouseenter",function(t){c===!1&&(a(),c=!0)}),o.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(u)||(u.stop(!0,!0),r(),c=!1)}),u.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(o)||(u.stop(!0,!0),r(),c=!1)})}else o.unbind("click."+o.attr("id")),o.bind("click."+o.attr("id"),function(e){l||(o[0]!=e.currentTarget||o.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?o.hasClass("active")&&(r(),t(document).unbind("click."+u.attr("id")+" touchstart."+u.attr("id"))):(e.preventDefault(),a("click")),u.hasClass("active")&&t(document).bind("click."+u.attr("id")+" touchstart."+u.attr("id"),function(e){u.is(e.target)||o.is(e.target)||o.find(e.target).length||(r(),t(document).unbind("click."+u.attr("id")+" touchstart."+u.attr("id")))}))});o.on("open",function(t,e){a(e)}),o.on("close",r)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t){var e=0,i=0,n=function(){return i++,"materialize-lean-overlay-"+i};t.fn.extend({openModal:function(i){t("body").css("overflow","hidden");var a={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},r=n(),o=t(this),s=t('<div class="lean-overlay"></div>'),l=++e;s.attr("id",r).css("z-index",1e3+2*l),o.data("overlay-id",r).css("z-index",1e3+2*l+1),t("body").append(s),i=t.extend(a,i),i.dismissible&&(s.click(function(){o.closeModal(i)}),t(document).on("keyup.leanModal"+r,function(t){27===t.keyCode&&o.closeModal(i)})),o.find(".modal-close").on("click.close",function(t){o.closeModal(i)}),s.css({display:"block",opacity:0}),o.css({display:"block",opacity:0}),s.velocity({opacity:i.opacity},{duration:i.in_duration,queue:!1,ease:"easeOutCubic"}),o.data("associated-overlay",s[0]),o.hasClass("bottom-sheet")?o.velocity({bottom:"0",opacity:1},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}):(t.Velocity.hook(o,"scaleX",.7),o.css({top:i.starting_top}),o.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}))}}),t.fn.extend({closeModal:function(i){var n={out_duration:250,complete:void 0},a=t(this),r=a.data("overlay-id"),o=t("#"+r);i=t.extend(n,i),t("body").css("overflow",""),a.find(".modal-close").off("click.close"),t(document).off("keyup.leanModal"+r),o.velocity({opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutQuart"}),a.hasClass("bottom-sheet")?a.velocity({bottom:"-100%",opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){
    o.css({display:"none"}),"function"==typeof i.complete&&i.complete(),o.remove(),e--}}):a.velocity({top:i.starting_top,opacity:0,scaleX:.7},{duration:i.out_duration,complete:function(){t(this).css("display","none"),"function"==typeof i.complete&&i.complete(),o.remove(),e--}})}}),t.fn.extend({leanModal:function(e){return this.each(function(){var i={starting_top:"4%"},n=t.extend(i,e);t(this).click(function(e){n.starting_top=(t(this).offset().top-t(window).scrollTop())/1.15;var i=t(this).attr("href")||"#"+t(this).data("target");t(i).openModal(n),e.preventDefault()})})}})}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){r=!1;var e=l.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,l.data("width")),o=l.data("height");l.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t("#materialbox-overlay").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){a=!1,t(this).remove()}}),l.velocity({width:n,height:o,left:0,top:0},{duration:s,queue:!1,easing:"easeOutQuad"}),t(".materialbox-caption").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),l.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),l.removeClass("active"),r=!0,t(this).remove(),i.css("overflow","")}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var i,n,a=!1,r=!0,o=275,s=200,l=t(this),u=t("<div></div>").addClass("material-placeholder");l.wrap(u),l.on("click",function(){var s=l.parent(".material-placeholder"),u=window.innerWidth,c=window.innerHeight,d=l.width(),p=l.height();if(r===!1)return e(),!1;if(a&&r===!0)return e(),!1;r=!1,l.addClass("active"),a=!0,s.css({width:s[0].getBoundingClientRect().width,height:s[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=s[0].parentNode;for(;null!==n&&!t(n).is(document);){var f=t(n);"hidden"===f.css("overflow")&&(f.css("overflow","visible"),i=void 0===i?f:i.add(f)),n=n.parentNode}l.css({position:"absolute","z-index":1e3}).data("width",d).data("height",p);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){r===!0&&e()});if(t("body").append(h),h.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"}),""!==l.data("caption")){var v=t('<div class="materialbox-caption"></div>');v.text(l.data("caption")),t("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:o,queue:!1,easing:"easeOutQuad"})}var g=0,m=d/u,y=p/c,b=0,w=0;m>y?(g=p/d,b=.9*u,w=.9*u*g):(g=d/p,b=.9*c*g,w=.9*c),l.hasClass("responsive-img")?l.velocity({"max-width":b,width:d},{duration:0,queue:!1,complete:function(){l.css({left:0,top:0}).velocity({height:w,width:b,left:t(document).scrollLeft()+u/2-l.parent(".material-placeholder").offset().left-b/2,top:t(document).scrollTop()+c/2-l.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){r=!0}})}}):l.css("left",0).css("top",0).velocity({height:w,width:b,left:t(document).scrollLeft()+u/2-l.parent(".material-placeholder").offset().left-b/2,top:t(document).scrollTop()+c/2-l.parent(".material-placeholder").offset().top-w/2},{duration:o,queue:!1,easing:"easeOutQuad",complete:function(){r=!0}})}),t(window).scroll(function(){a&&e()}),t(document).keyup(function(t){27===t.keyCode&&r===!0&&a&&e()})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(i){function n(i){var n;n=601>e?a.height()>0?a.height():a.children("img").height():a.height()>0?a.height():500;var r=a.children("img").first(),o=r.height(),s=o-n,l=a.offset().top+n,u=a.offset().top,c=t(window).scrollTop(),d=window.innerHeight,p=c+d,f=(p-u)/(n+d),h=Math.round(s*f);i&&r.css("display","block"),l>c&&c+d>u&&r.css("transform","translate3D(-50%,"+h+"px, 0)")}var a=t(this);a.addClass("parallax"),a.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&t(this).load()}),t(window).scroll(function(){e=t(window).width(),n(!1)}),t(window).resize(function(){e=t(window).width(),n(!1)})})}}(jQuery),function(t){var e={init:function(){return this.each(function(){var e=t(this);t(window).width();e.width("100%");var i,n,a=e.find("li.tab a"),r=e.width(),o=e.find("li").first().outerWidth(),s=0;i=t(a.filter('[href="'+location.hash+'"]')),0===i.length&&(i=t(this).find("li.tab a.active").first()),0===i.length&&(i=t(this).find("li.tab a").first()),i.addClass("active"),s=a.index(i),0>s&&(s=0),n=t(i[0].hash),e.append('<div class="indicator"></div>');var l=e.find(".indicator");e.is(":visible")&&(l.css({right:r-(s+1)*o}),l.css({left:s*o})),t(window).resize(function(){r=e.width(),o=e.find("li").first().outerWidth(),0>s&&(s=0),0!==o&&0!==r&&(l.css({right:r-(s+1)*o}),l.css({left:s*o}))}),a.not(i).each(function(){t(this.hash).hide()}),e.on("click","a",function(u){if(t(this).parent().hasClass("disabled"))return void u.preventDefault();r=e.width(),o=e.find("li").first().outerWidth(),i.removeClass("active"),n.hide(),i=t(this),n=t(this.hash),a=e.find("li.tab a"),i.addClass("active");var c=s;s=a.index(t(this)),0>s&&(s=0),n.show(),s-c>=0?(l.velocity({right:r-(s+1)*o},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({left:s*o},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(l.velocity({left:s*o},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({right:r-(s+1)*o},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),u.preventDefault()})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery),function(t){t.fn.tooltip=function(i){var n=5,a={delay:350};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(a,i),this.each(function(){var a=Materialize.guid(),r=t(this);r.attr("data-tooltip-id",a);var o=t("<span></span>").text(r.attr("data-tooltip")),s=t("<div></div>");s.addClass("material-tooltip").append(o).appendTo(t("body")).attr("id",a);var l=t("<div></div>").addClass("backdrop");l.appendTo(s),l.css({top:0,left:0}),r.off("mouseenter.tooltip mouseleave.tooltip");var u,c=!1;r.on({"mouseenter.tooltip":function(t){var a=r.attr("data-delay");a=void 0===a||""===a?i.delay:a,u=setTimeout(function(){c=!0,s.velocity("stop"),l.velocity("stop"),s.css({display:"block",left:"0px",top:"0px"}),s.children("span").text(r.attr("data-tooltip"));var t,i,a,o=r.outerWidth(),u=r.outerHeight(),d=r.attr("data-position"),p=s.outerHeight(),f=s.outerWidth(),h="0px",v="0px",g=8;"top"===d?(t=r.offset().top-p-n,i=r.offset().left+o/2-f/2,a=e(i,t,f,p),h="-10px",l.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:p,marginLeft:f/2-l.width()/2})):"left"===d?(t=r.offset().top+u/2-p/2,i=r.offset().left-f-n,a=e(i,t,f,p),v="-10px",l.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:p/2,marginLeft:f})):"right"===d?(t=r.offset().top+u/2-p/2,i=r.offset().left+o+n,a=e(i,t,f,p),v="+10px",l.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:p/2,marginLeft:"0px"})):(t=r.offset().top+r.outerHeight()+n,i=r.offset().left+o/2-f/2,a=e(i,t,f,p),h="+10px",l.css({marginLeft:f/2-l.width()/2})),s.css({top:a.y,left:a.x}),g=f/8,8>g&&(g=8),("right"===d||"left"===d)&&(g=f/10,6>g&&(g=6)),s.velocity({marginTop:h,marginLeft:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:g},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},a)},"mouseleave.tooltip":function(){c=!1,clearTimeout(u),setTimeout(function(){1!=c&&(s.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),l.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){l.css("display","none"),s.css("display","none"),c=!1}}))},225)}})}))};var e=function(e,i,n,a){var r=e,o=i;return 0>r?r=4:r+n>window.innerWidth&&(r-=r+n-window.innerWidth),0>o?o=4:o+a>window.innerHeight+t(window).scrollTop&&(o-=o+a-window.innerHeight),{x:r,y:o}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,a={top:0,left:0},r=t&&t.ownerDocument;return e=r.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(a=t.getBoundingClientRect()),n=i(r),{top:a.top+n.pageYOffset-e.clientTop,left:a.left+n.pageXOffset-e.clientLeft}}function a(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function r(t){if(c.allowEvent(t)===!1)return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(!(i instanceof SVGElement||-1===i.className.indexOf("waves-effect"))){e=i;break}if(i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}function o(e){var i=r(e);null!==i&&(u.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",u.hide,!1),i.addEventListener("touchcancel",u.hide,!1)),i.addEventListener("mouseup",u.hide,!1),i.addEventListener("mouseleave",u.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),u={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,r=document.createElement("div");r.className="waves-ripple",i.appendChild(r);var o=n(i),s=t.pageY-o.top,l=t.pageX-o.left,c="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-o.top,l=t.touches[0].pageX-o.left),r.setAttribute("data-hold",Date.now()),r.setAttribute("data-scale",c),r.setAttribute("data-x",l),r.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};r.className=r.className+" waves-notransition",r.setAttribute("style",a(d)),r.className=r.className.replace("waves-notransition",""),d["-webkit-transform"]=c,d["-moz-transform"]=c,d["-ms-transform"]=c,d["-o-transform"]=c,d.transform=c,d.opacity="1",d["-webkit-transition-duration"]=u.duration+"ms",d["-moz-transition-duration"]=u.duration+"ms",d["-o-transition-duration"]=u.duration+"ms",d["transition-duration"]=u.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",r.setAttribute("style",a(d))},hide:function(t){c.touchup(t);var e=this,i=(1.4*e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;i=n[n.length-1];var r=i.getAttribute("data-x"),o=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=Date.now()-Number(i.getAttribute("data-hold")),d=350-l;0>d&&(d=0),setTimeout(function(){var t={top:o+"px",left:r+"px",opacity:"0","-webkit-transition-duration":u.duration+"ms","-moz-transition-duration":u.duration+"ms","-o-transition-duration":u.duration+"ms","transition-duration":u.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",a(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},u.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var a=document.createElement("i");a.className=i.className+" waves-input-wrapper";var r=i.getAttribute("style");r||(r=""),a.setAttribute("style",r),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(a,i),a.appendChild(i)}}}},c={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?c.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){c.touches>0&&(c.touches-=1)},500):"mousedown"===t.type&&c.touches>0&&(e=!1),e},touchup:function(t){c.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(u.duration=e.duration),u.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",o,!1),document.body.addEventListener("mousedown",o,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(u.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",o,!1),e.addEventListener("mousedown",o,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),Materialize.toast=function(t,e,i,n){function a(t){var e=document.createElement("div");if(e.classList.add("toast"),i)for(var a=i.split(" "),r=0,o=a.length;o>r;r++)e.classList.add(a[r]);("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)?e.appendChild(t):t instanceof jQuery?e.appendChild(t[0]):e.innerHTML=t;var s=new Hammer(e,{prevent_default:!1});return s.on("pan",function(t){var i=t.deltaX,n=80;e.classList.contains("panning")||e.classList.add("panning");var a=1-Math.abs(i/n);0>a&&(a=0),Vel(e,{left:i,opacity:a},{duration:50,queue:!1,easing:"easeOutQuad"})}),s.on("panend",function(t){var i=t.deltaX,a=80;Math.abs(i)>a?Vel(e,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),e.parentNode.removeChild(e)}}):(e.classList.remove("panning"),Vel(e,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),e}i=i||"";var r=document.getElementById("toast-container");null===r&&(r=document.createElement("div"),r.id="toast-container",document.body.appendChild(r));var o=a(t);t&&r.appendChild(o),o.style.top="35px",o.style.opacity=0,Vel(o,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var s=e,l=setInterval(function(){null===o.parentNode&&window.clearInterval(l),o.classList.contains("panning")||(s-=20),0>=s&&(Vel(o,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(l))},20)},function(t){var e={init:function(e){var i={menuWidth:240,edge:"left",closeOnClick:!1};e=t.extend(i,e),t(this).each(function(){function i(i){o=!1,s=!1,t("body").css("overflow",""),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(r.css({width:"",right:"",left:"0"}),a.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(a.removeAttr("style"),a.css("width",e.menuWidth))}})):(r.css({width:"",right:"0",left:""}),a.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(a.removeAttr("style"),a.css("width",e.menuWidth))}}))}var n=t(this),a=t("#"+n.attr("data-activates"));240!=e.menuWidth&&a.css("width",e.menuWidth);var r=t('<div class="drag-target"></div>');t("body").append(r),"left"==e.edge?(a.css("left",-1*(e.menuWidth+10)),r.css({left:0})):(a.addClass("right-aligned").css("right",-1*(e.menuWidth+10)).css("left",""),r.css({right:0})),a.hasClass("fixed")&&window.innerWidth>992&&a.css("left",0),a.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").css("opacity")&&s?i(!0):(a.removeAttr("style"),a.css("width",e.menuWidth)):s===!1&&("left"===e.edge?a.css("left",-1*(e.menuWidth+10)):a.css("right",-1*(e.menuWidth+10)))}),e.closeOnClick===!0&&a.on("click.itemclick","a:not(.collapsible-header)",function(){i()});var o=!1,s=!1;r.on("click",function(){i()}),r.hammer({prevent_default:!1}).bind("pan",function(n){if("touch"==n.gesture.pointerType){var r=(n.gesture.direction,n.gesture.center.x);n.gesture.center.y,n.gesture.velocityX;if(t("body").css("overflow","hidden"),0===t("#sidenav-overlay").length){var o=t('<div id="sidenav-overlay"></div>');o.css("opacity",0).click(function(){i()}),t("body").append(o)}if("left"===e.edge&&(r>e.menuWidth?r=e.menuWidth:0>r&&(r=0)),"left"===e.edge)r<e.menuWidth/2?s=!1:r>=e.menuWidth/2&&(s=!0),a.css("left",r-e.menuWidth);else{r<window.innerWidth-e.menuWidth/2?s=!0:r>=window.innerWidth-e.menuWidth/2&&(s=!1);var l=-1*(r-e.menuWidth/2);l>0&&(l=0),a.css("right",l)}var u;"left"===e.edge?(u=r/e.menuWidth,t("#sidenav-overlay").velocity({opacity:u},{duration:50,queue:!1,easing:"easeOutQuad"})):(u=Math.abs((r-window.innerWidth)/e.menuWidth),t("#sidenav-overlay").velocity({opacity:u},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(i){if("touch"==i.gesture.pointerType){var n=i.gesture.velocityX;o=!1,"left"===e.edge?s&&.3>=n||-.5>n?(a.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),r.css({width:"50%",right:0,left:""})):(!s||n>.3)&&(t("body").css("overflow",""),a.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),r.css({width:"10px",right:"",left:0})):s&&n>=-.3||n>.5?(a.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),r.css({width:"50%",right:"",left:0})):(!s||-.3>n)&&(t("body").css("overflow",""),a.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),r.css({width:"10px",right:0,left:""}))}}),n.click(function(){if(s===!0)s=!1,o=!1,i();else{t("body").css("overflow","hidden"),t("body").append(r),"left"===e.edge?(r.css({width:"50%",right:0,left:""}),a.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(r.css({width:"50%",right:"",left:0}),a.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a.css("left",""));var n=t('<div id="sidenav-overlay"></div>');n.css("opacity",0).click(function(){s=!1,o=!1,i(),n.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(n),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){s=!0,o=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,a){var r=t();return t.each(o,function(t,o){if(o.height()>0){var s=o.offset().top,l=o.offset().left,u=l+o.width(),c=s+o.height(),d=!(l>i||a>u||s>n||e>c);d&&r.push(o)}}),r}function i(){++u;var i=r.scrollTop(),n=r.scrollLeft(),a=n+r.width(),o=i+r.height(),l=e(i+c.top+200,a+c.right,o+c.bottom,n+c.left);t.each(l,function(t,e){var i=e.data("scrollSpy:ticks");"number"!=typeof i&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",u)}),t.each(s,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==u&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),s=l}function n(){r.trigger("scrollSpy:winSize")}function a(t,e,i){var n,a,r,o=null,s=0;i||(i={});var l=function(){s=i.leading===!1?0:d(),o=null,r=t.apply(n,a),n=a=null};return function(){var u=d();s||i.leading!==!1||(s=u);var c=e-(u-s);return n=this,a=arguments,0>=c?(clearTimeout(o),o=null,s=u,r=t.apply(n,a),n=a=null):o||i.trailing===!1||(o=setTimeout(l,c)),r}}var r=t(window),o=[],s=[],l=!1,u=0,c={top:0,right:0,bottom:0,left:0},d=Date.now||function(){return(new Date).getTime()};t.scrollSpy=function(e,n){var s=[];e=t(e),e.each(function(e,i){o.push(t(i)),t(i).data("scrollSpy:id",e),t("a[href=#"+t(i).attr("id")+"]").click(function(e){e.preventDefault();var i=t(this.hash).offset().top+1;t("html, body").animate({scrollTop:i-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),n=n||{throttle:100},c.top=n.offsetTop||0,c.right=n.offsetRight||0,c.bottom=n.offsetBottom||0,c.left=n.offsetLeft||0;var u=a(i,n.throttle||100),d=function(){t(document).ready(u)};return l||(r.on("scroll",d),r.on("resize",d),l=!0),setTimeout(d,0),e.on("scrollSpy:enter",function(){s=t.grep(s,function(t){return 0!=t.height()});var e=t(this);s[0]?(t("a[href=#"+s[0].attr("id")+"]").removeClass("active"),e.data("scrollSpy:id")<s[0].data("scrollSpy:id")?s.unshift(t(this)):s.push(t(this))):s.push(t(this)),t("a[href=#"+s[0].attr("id")+"]").addClass("active")}),e.on("scrollSpy:exit",function(){if(s=t.grep(s,function(t){return 0!=t.height()}),s[0]){t("a[href=#"+s[0].attr("id")+"]").removeClass("active");var e=t(this);s=t.grep(s,function(t){return t.attr("id")!=e.attr("id")}),s[0]&&t("a[href=#"+s[0].attr("id")+"]").addClass("active")}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return r},e=e||{throttle:100},r.on("resize",a(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),a=e.css("font-size");a&&n.css("font-size",a),i&&n.css("font-family",i),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var r=n.html().replace(/\n/g,"<br>");n.html(r),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.css("height",n.height())}Materialize.updateTextFields=function(){var e="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(e).each(function(e,i){t(i).val().length>0||i.autofocus||void 0!==t(this).attr("placeholder")||t(i)[0].validity.badInput===!0?t(this).siblings("label, i").addClass("active"):t(this).siblings("label, i").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){(0!==t(this).val().length||void 0!==t(this).attr("placeholder"))&&t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, i").addClass("active")}),t(document).on("blur",i,function(){var e=t(this);0===e.val().length&&e[0].validity.badInput!==!0&&void 0===e.attr("placeholder")&&e.siblings("label, i").removeClass("active"),0===e.val().length&&e[0].validity.badInput!==!0&&void 0!==e.attr("placeholder")&&e.siblings("i").removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("length"),i=parseInt(t.attr("length")),n=t.val().length;0===t.val().length&&t[0].validity.badInput===!1?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&i>=n||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));var a=".materialize-textarea";t(a).each(function(){var i=t(this);i.val().length&&e(i)}),t("body").on("keyup keydown autoresize",a,function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field"),i=e.find("input.file-path"),n=t(this)[0].files,a=[],r=0;r<n.length;r++)a.push(n[r].name);i.val(a.join(", ")),i.trigger("change")});var r,o="input[type=range]",s=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var l=".range-field";t(document).on("change",o,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val())}),t(document).on("input mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb"),n=t(this).outerWidth();i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html(t(this).val()),s=!0,t(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==e.type&&(r=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left,0>r?r=0:r>n&&(r=n),i.addClass("active").css("left",r)),i.find(".value").html(t(this).val())}),t(document).on("mouseup touchend",l,function(){s=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",l,function(e){var i,n=t(this).children(".thumb");if(s){n.hasClass("active")||n.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),i=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var a=t(this).outerWidth();0>i?i=0:i>a&&(i=a),n.addClass("active").css("left",i),n.find(".value").html(n.siblings(o).val())}}),t(document).on("mouseout touchleave",l,function(){if(!s){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}})}),t.fn.material_select=function(e){function i(t,e,i){var a=t.indexOf(e),r=-1===a;return r?t.push(e):t.splice(a,1),i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",r),n(t,i),r}function n(t,e){for(var i="",n=0,a=t.length;a>n;n++){var r=e.find("option").eq(t[n]).text();i+=0===n?r:", "+r}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var a=n.attr("multiple")?!0:!1,r=n.data("select-id");if(r&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+r).remove()),"destroy"===e)return void n.data("select-id",null).removeClass("initialized");var o=Materialize.guid();n.data("select-id",o);var s=t('<div class="select-wrapper"></div>');s.addClass(n.attr("class"));var l=t('<ul id="select-options-'+o+'" class="dropdown-content select-dropdown '+(a?"multiple-select-dropdown":"")+'"></ul>'),u=n.children("option, optgroup"),c=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",f=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",r=i.data("icon"),o=i.attr("class");if(r){var s="";return o&&(s=' class="'+o+'"'),"multiple"===n?l.append(t('<li class="'+a+'"><img src="'+r+'"'+s+'><span><input type="checkbox"'+a+"/><label></label>"+i.html()+"</span></li>")):l.append(t('<li class="'+a+'"><img src="'+r+'"'+s+"><span>"+i.html()+"</span></li>")),!0}"multiple"===n?l.append(t('<li class="'+a+'"><span><input type="checkbox"'+a+"/><label></label>"+i.html()+"</span></li>")):l.append(t('<li class="'+a+'"><span>'+i.html()+"</span></li>"))};u.length&&u.each(function(){if(t(this).is("option"))a?f(n,t(this),"multiple"):f(n,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){f(n,t(this))})}}),l.find("li:not(.optgroup)").each(function(r){t(this).click(function(o){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;a?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(c,t(this).index(),n),g.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),g.val(t(this).text())),activateOption(l,t(this)),n.find("option").eq(r).prop("selected",s),n.trigger("change"),"undefined"!=typeof e&&e()}o.stopPropagation()})}),n.wrap(s);var h=t('<span class="caret">&#9660;</span>');n.is(":disabled")&&h.addClass("disabled");var v=p.replace(/"/g,"&quot;"),g=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+o+'" value="'+v+'"/>');n.before(g),g.before(h),g.after(l),n.is(":disabled")||g.dropdown({hover:!1,closeOnClick:!1}),n.attr("tabindex")&&t(g[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),g.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val(),i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];activateOption(l,i)}},click:function(t){t.stopPropagation()}}),g.on("blur",function(){a||t(this).trigger("close"),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),t(window).on({click:function(){a&&(d||g.trigger("close"))}}),a&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(c,e,n),l.find("li").eq(e).find(":checkbox").prop("checked",!0)}),activateOption=function(e,i){if(i){e.find("li.selected").removeClass("selected");var n=t(i);n.addClass("selected"),l.scrollTo(n)}};var m=[],y=function(e){if(9==e.which)return void g.trigger("close");if(40==e.which&&!l.is(":visible"))return void g.trigger("open");if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){m.push(i);var r=m.join(""),o=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(r)})[0];o&&activateOption(l,o)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),a||g.trigger("close"))}40==e.which&&(o=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],activateOption(l,o)),27==e.which&&g.trigger("close"),38==e.which&&(o=l.find("li.selected").prev("li:not(.disabled)")[0],o&&activateOption(l,o)),setTimeout(function(){m=[]},1e3)}};g.on("keydown",y)}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=u.length?t=0:0>t&&(t=u.length-1),c=l.find(".active").index(),c!=t&&(a=u.eq(c),$caption=a.find(".caption"),a.removeClass("active"),a.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){u.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&r.eq(c).removeClass("active"),u.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).addClass("active"),e.indicators&&r.eq(t).addClass("active"))}var a,r,o,s=t(this),l=s.find("ul.slides").first(),u=l.find("li"),c=l.find(".active").index();-1!=c&&(a=u.eq(c)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),u.find(".caption").each(function(){i(t(this),0)}),u.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    t(this).attr("src")!==e&&(t(this).css("background-image","url("+t(this).attr("src")+")"),t(this).attr("src",e))}),e.indicators&&(r=t('<ul class="indicators"></ul>'),u.each(function(i){var a=t('<li class="indicator-item"></li>');a.click(function(){var i=l.parent(),a=i.find(t(this)).index();n(a),clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval)}),r.append(a)}),s.append(r),r=s.find("ul.indicators").find("li.indicator-item")),a?a.show():(u.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c=0,a=u.eq(c),e.indicators&&r.eq(c).addClass("active")),a.find("img").each(function(){a.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),o=setInterval(function(){c=l.find(".active").index(),n(c+1)},e.transition+e.interval);var d=!1,p=!1,f=!1;s.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(o);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX;$curr_slide=l.find(".active"),$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||-.65>n)?f=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(a=$curr_slide.next(),0===a.length&&(a=u.first()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),f&&(a=$curr_slide.prev(),0===a.length&&(a=u.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),f||p?p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):f&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),p=!1,f=!1,clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(o)}),s.on("sliderStart",function(){clearInterval(o),o=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,n(c)},e.transition+e.interval)}),s.on("sliderNext",function(){c=l.find(".active").index(),n(c+1)}),s.on("sliderPrev",function(){c=l.find(".active").index(),n(c-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){t(this).find("> .card-reveal").length&&(t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(t(e.target).closest(".card").css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))),t(".card-reveal").closest(".card").css("overflow","hidden")})})}(jQuery),function(t){t(document).ready(function(){t(document).on("click.chip",".chip .material-icons",function(e){t(this).parent().remove()})})}(jQuery),function(t){t(document).ready(function(){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,a){n.each(function(){e.top<=a&&e.bottom>=a&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),a<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),a>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-o))})}var a=Materialize.guid(),r=t(this),o=t(this).offset().top;n(r,t(window).scrollTop()),t(window).on("scroll."+a,function(){var i=t(window).scrollTop()+e.offset;n(r,i)})})}})}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(e){var n=t(this);i(n)}),t(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(n){var a=t(this),r=a.parent();r.hasClass("active")?i(r):e(r)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))}});var e=function(e){if($this=e,$this.hasClass("active")===!1){var i,n,a=$this.hasClass("horizontal");a===!0?n=40:i=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:i+"px",translateX:n+"px"},{duration:0});var r=0;$this.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:r}),r+=40})}},i=function(t){$this=t;var e,i,n=$this.hasClass("horizontal");n===!0?i=40:e=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i=t(e);i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,a=150-(100-e)/1.75;100>a&&(a=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+a+"%)",filter:"grayscale("+n+")brightness("+a+"%)"})}})},Materialize.showStaggeredList=function(e){var i=0;t(e).find("li").velocity({translateX:"-100px"},{duration:0}),t(e).find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:i,easing:[60,10]}),i+=120})},t(document).ready(function(){})}(jQuery),function(t){Materialize.scrollFire=function(t){var e=!1;window.addEventListener("scroll",function(){e=!0}),setInterval(function(){if(e){e=!1;for(var i=window.pageYOffset+window.innerHeight,n=0;n<t.length;n++){var a=t[n],r=a.selector,o=a.offset,s=a.callback,l=document.querySelector(r);if(null!==l){var u=l.getBoundingClientRect().top+window.pageYOffset;if(i>u+o&&a.done!==!0){var c=new Function(s);c(),a.done=!0}}}}},100)}}(jQuery),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){function e(r,o,l,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),x.box),x.wrap),x.frame),x.holder)}function f(){C.data(o,T).addClass(x.input).attr("tabindex",-1).val(C.data("value")?T.get("select",w.format):r.value),w.editable||C.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root[0].focus()}).on("keydown."+b.id,g),a(r,{haspopup:!0,expanded:!1,readonly:!1,owns:r.id+"_root"})}function h(){T.$root.on({keydown:g,focusin:function(t){T.$root.removeClass(x.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root[0].focus()))}}).on({focus:function(){C.addClass(x.target)},blur:function(){C.removeClass(x.target)}}).on("focus.toOpen",m).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(x.navDisabled)||e.hasClass(x.disabled),a=s();a=a&&(a.type||a.href),(n||a&&!t.contains(T.$root[0],a))&&T.$root[0].focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?T.set("select",i.pick):i.clear?T.clear().close(!0):i.close&&T.close(!0)}),a(T.$root[0],"hidden",!0)}function v(){var e;w.hiddenName===!0?(e=r.name,r.name=""):(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"],e=e[0]+r.name+e[1]),T._hidden=t('<input type=hidden name="'+e+'"'+(C.data("value")||r.value?' value="'+T.get("select",w.formatSubmit)+'"':"")+">")[0],C.on("change."+b.id,function(){T._hidden.value=r.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):C.after(T._hidden)}function g(t){var e=t.keyCode,i=/^(8|46)$/.test(e);return 27==e?(T.close(),!1):void((32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open()))}function m(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(x.focused),T.open()}if(!r)return e;var y=!1,b={id:r.id||"P"+Math.abs(~~(Math.random()*new Date))},w=l?t.extend(!0,{},l.defaults,d):d||{},x=t.extend({},e.klasses(),w.klass),C=t(r),k=function(){return this.start()},T=k.prototype={constructor:k,$node:C,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=r.type,r.autofocus=r==s(),r.readOnly=!w.editable,r.id=r.id||b.id,"text"!=r.type&&(r.type="text"),T.component=new l(T,w),T.$root=t(e._.node("div",p(),x.picker,'id="'+r.id+'_root" tabindex="0"')),h(),w.formatSubmit&&v(),f(),w.container?t(w.container).append(T.$root):C.after(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),r.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+x.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),C.removeClass(x.input).removeData(o),setTimeout(function(){C.off("."+b.id)},0),r.type=b.type,r.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(C.addClass(x.active),a(r,"expanded",!0),setTimeout(function(){T.$root.addClass(x.opened),a(T.$root[0],"hidden",!1)},0),i!==!1&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root[0].focus(),u.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=r&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,a=T.component.key[n],r=i.target;27==n?T.close(!0):r!=T.$root[0]||!a&&13!=n?t.contains(T.$root[0],r)&&13==n&&(i.preventDefault(),r.click()):(i.preventDefault(),a?e._.trigger(T.component.key.go,T,[e._.trigger(a)]):T.$root.find("."+x.highlighted).hasClass(x.disabled)||T.set("select",T.component.item.highlight).close())})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){T.$root.on("focus.toOpen",m)},0)),C.removeClass(x.active),a(r,"expanded",!1),setTimeout(function(){T.$root.removeClass(x.opened+" "+x.focused),a(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),u.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var a,r,o=t.isPlainObject(e),s=o?e:{};if(n=o&&t.isPlainObject(i)?i:n||{},e){o||(s[e]=i);for(a in s)r=s[a],a in T.component.item&&(void 0===r&&(r=null),T.component.set(a,r,n)),("select"==a||"clear"==a)&&C.val("clear"==a?"":T.get(a,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return r.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var a,r,o=t.isPlainObject(e),s=o?e:{};if(e){o||(s[e]=i);for(a in s)r=s[a],n&&(a="_"+a),b.methods[a]=b.methods[a]||[],b.methods[a].push(r)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)e=i[t],e in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new k}function i(t){var e,i="position";return t.currentStyle?e=t.currentStyle[i]:window.getComputedStyle&&(e=getComputedStyle(t)[i]),"fixed"==e}function n(){if(c.height()<=l.height())return 0;var e=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t('<div style="width:100%" />').appendTo(e),a=n[0].offsetWidth;return e.remove(),i-a}function a(e,i,n){if(t.isPlainObject(i))for(var a in i)r(e,a,i[a]);else r(e,i,n)}function r(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function o(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var a=("role"==n?"":"aria-")+n,r=e[n];i+=null==r?"":a+'="'+e[n]+'"'}return i}function s(){try{return document.activeElement}catch(t){}}var l=t(window),u=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",a=e._.trigger(t.min,t);a<=e._.trigger(t.max,t,[a]);a+=t.i)i=e._.trigger(t.item,t,[a]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,a){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",a=a?" "+a:"","<"+e+n+a+">"+i+"</"+e+">"):""},lead:function(t){return(10>t?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1===0},ariaAttr:o},e.extend=function(i,n){t.fn[i]=function(a,r){var o=this.data(i);return"picker"==a?o:o&&"string"==typeof a?e._.trigger(o[a],o,[r]):this.each(function(){var r=t(this);r.data(i)||new e(this,i,n,a)})},t.fn[i].defaults=n.defaults},e}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],a=n.value,r=t.$node.data("value"),o=r||a,s=r?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return t[0]===!0?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),o?i.set("select",o,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=7,a=6,r=t._;i.prototype.set=function(t,e,i){var n=this,a=n.item;return null===e?("clear"==t&&(t="select"),a[t]=e,n):(a["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(a){return e=n[a](t,e,i)}).pop(),"select"==t?n.set("highlight",a.select,i):"highlight"==t?n.set("view",a.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(a.select&&n.disabled(a.select)&&n.set("select",a.select,i),a.highlight&&n.disabled(a.highlight)&&n.set("highlight",a.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,n){var a,o=this;return i=void 0===i?t:i,i==-(1/0)||i==1/0?a=i:e.isPlainObject(i)&&r.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=r.isDate(i)?i:o.create().obj):i=r.isInteger(i)||r.isDate(i)?o.normalize(new Date(i),n):o.now(t,i,n),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},i.prototype.createRange=function(t,i){var n=this,a=function(t){return t===!0||e.isArray(t)||r.isDate(t)?n.create(t):t};return r.isInteger(t)||(t=a(t)),r.isInteger(i)||(i=a(i)),r.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:r.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var a,r,o,s,l=e.isArray(i),u=e.isPlainObject(i),c=this.item.view;if(l||u){for(u?(r=i.year,o=i.month,s=i.date):(r=+i[0],o=+i[1],s=+i[2]),n&&n.nav&&c&&c.month!==o&&(r=c.year,o=c.month),a=new Date(r,o+(n&&n.nav?n.nav:0),1),r=a.getFullYear(),o=a.getMonth();new Date(r,o,s).getMonth()!==o;)s-=1;i=[r,o,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):r.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-(1/0):1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,n){var a,o,s,l,u=this,c=i,d=n&&n.interval?n.interval:1,p=-1===u.item.enable,f=u.item.min,h=u.item.max,v=p&&u.item.disable.filter(function(t){if(e.isArray(t)){var n=u.create(t).pick;n<i.pick?a=!0:n>i.pick&&(o=!0)}return r.isInteger(t)}).length;if((!n||!n.nav)&&(!p&&u.disabled(i)||p&&u.disabled(i)&&(v||a||o)||!p&&(i.pick<=f.pick||i.pick>=h.pick)))for(p&&!v&&(!o&&d>0||!a&&0>d)&&(d*=-1);u.disabled(i)&&(Math.abs(d)>1&&(i.month<c.month||i.month>c.month)&&(i=c,d=d>0?1:-1),i.pick<=f.pick?(s=!0,d=1,i=u.create([f.year,f.month,f.date+(i.pick===f.pick?0:-1)])):i.pick>=h.pick&&(l=!0,d=-1,i=u.create([h.year,h.month,h.date+(i.pick===h.pick?0:1)])),!s||!l);)i=u.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,n=i.item.disable.filter(function(n){return r.isInteger(n)?t.day===(i.settings.firstDay?n:n-1)%7:e.isArray(n)||r.isDate(n)?t.pick===i.create(n).pick:e.isPlainObject(n)?i.withinRange(n,t):void 0});return n=n.length&&!n.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!n:n||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var n=this,a={};return e&&"string"==typeof e?(i&&i.format||(i=i||{},i.format=n.settings.format),n.formats.toArray(i.format).map(function(t){var i=n.formats[t],o=i?r.trigger(i,n,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,o)),e=e.substr(o)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?r.digits(t):e.date},dd:function(t,e){return t?2:r.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?r.digits(t):e.month+1},mm:function(t,e){return t?2:r.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return r.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var n=this;return r.isInteger(t)&&r.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(r.isDate(t)||e.isArray(t))&&(r.isDate(i)||e.isArray(i))?n.create(t).pick===n.create(i).pick:e.isPlainObject(t)&&e.isPlainObject(i)?n.isDateExact(t.from,i.from)&&n.isDateExact(t.to,i.to):!1},i.prototype.isDateOverlap=function(t,i){var n=this,a=n.settings.firstDay?1:0;return r.isInteger(t)&&(r.isDate(i)||e.isArray(i))?(t=t%7+a,t===n.create(i).day+1):r.isInteger(i)&&(r.isDate(t)||e.isArray(t))?(i=i%7+a,i===n.create(t).day+1):e.isPlainObject(t)&&e.isPlainObject(i)?n.overlapRanges(t,i):!1},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var n=this,a=n.item.disable.slice(0);return"flip"==i?n.flipEnable():i===!1?(n.flipEnable(1),a=[]):i===!0?(n.flipEnable(-1),a=[]):i.map(function(t){for(var i,o=0;o<a.length;o+=1)if(n.isDateExact(t,a[o])){i=!0;break}i||(r.isInteger(t)||r.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},i.prototype.activate=function(t,i){var n=this,a=n.item.disable,o=a.length;return"flip"==i?n.flipEnable():i===!0?(n.flipEnable(1),a=[]):i===!1?(n.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,u;for(l=0;o>l;l+=1){if(s=a[l],n.isDateExact(s,t)){i=a[l]=null,u=!0;break}if(n.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t,i[3]||i.push("inverted")):r.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;o>l;l+=1)if(n.isDateExact(a[l],t)){a[l]=null;break}if(u)for(l=0;o>l;l+=1)if(n.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,o=e.item,s=o.now,l=o.select,u=o.highlight,c=o.view,d=o.disable,p=o.min,f=o.max,h=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),r.node("thead",r.node("tr",r.group({min:0,max:n-1,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,'scope=col title="'+e[n]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),v=function(t){return r.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&c.year>=f.year&&c.month>=f.month||!t&&c.year<=p.year&&c.month<=p.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+r.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?i.labelMonthNext:i.labelMonthPrev)+'"')},g=function(n){var a=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==n&&(a=i.monthsShort),i.selectMonths&&void 0==n?r.node("select",r.group({min:0,max:11,i:1,node:"option",item:function(t){return[a[t],0,"value="+t+(c.month==t?" selected":"")+(c.year==p.year&&t<p.month||c.year==f.year&&t>f.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+r.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==n?null!=l?r.node("div",a[l.month]):r.node("div",a[c.month]):r.node("div",a[c.month],i.klass.month)},m=function(n){var a=c.year,o=i.selectYears===!0?5:~~(i.selectYears/2);if(o){var s=p.year,l=f.year,u=a-o,d=a+o;if(s>u&&(d+=s-u,u=s),d>l){var h=u-s,v=d-l;u-=h>v?v:h,d=l}if(i.selectYears&&void 0==n)return r.node("select",r.group({min:u,max:d,i:1,node:"option",item:function(t){return[t,0,"value="+t+(a==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+r.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"==n?r.node("div",a):r.node("div",a,i.klass.year)};return createDayLabel=function(){return null!=l?r.node("div",l.date):r.node("div",s.date)},createWeekdayLabel=function(){var t;t=null!=l?l.day:s.day;var e=i.weekdaysFull[t];return e},r.node("div",r.node("div",createWeekdayLabel(),"picker__weekday-display")+r.node("div",g("short_months"),i.klass.month_display)+r.node("div",createDayLabel(),i.klass.day_display)+r.node("div",m("raw"),i.klass.year_display),i.klass.date_display)+r.node("div",r.node("div",(i.selectYears?g()+m():g()+m())+v()+v(1),i.klass.header)+r.node("table",h+r.node("tbody",r.group({min:0,max:a-1,i:1,node:"tr",item:function(t){var a=i.firstDay&&0===e.create([c.year,c.month,1]).day?-7:0;return[r.group({min:n*t-c.day+a+1,max:function(){return this.min+n-1},i:1,node:"td",item:function(t){t=e.create([c.year,c.month,t+(i.firstDay?1:0)]);var n=l&&l.pick==t.pick,a=u&&u.pick==t.pick,o=d&&e.disabled(t)||t.pick<p.pick||t.pick>f.pick,h=r.trigger(e.formats.toString,e,[i.format,t]);return[r.node("div",t.date,function(e){return e.push(c.month==t.month?i.klass.infocus:i.klass.outfocus),s.pick==t.pick&&e.push(i.klass.now),n&&e.push(i.klass.selected),a&&e.push(i.klass.highlighted),o&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+r.ariaAttr({role:"gridcell",label:h,selected:n&&e.$node.val()===h?!0:null,activedescendant:a?!0:null,disabled:o?!0:null})),"",r.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+e.$node[0].id+'_table" '+r.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+r.node("div",r.node("button",i.today,"btn-flat picker__today","type=button data-pick="+s.pick+(t&&!e.disabled(s)?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id}))+r.node("button",i.clear,"btn-flat picker__clear","type=button data-clear=1"+(t?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id}))+r.node("button",i.close,"btn-flat picker__close","type=button data-close=true "+(t?"":" disabled")+" "+r.ariaAttr({controls:e.$node[0].id})),i.klass.footer)},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(t){function e(){var e=+t(this).attr("length"),i=+t(this).val().length,n=e>=i;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),a(n,t(this))}function i(e){var i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);e.parent().append(i)}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function a(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var a=void 0!==t(this).attr("length");a&&(t(this).on("input",e),t(this).on("focus",e),t(this).on("blur",n),i(t(this)))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery);
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);


window.google = window.google || {};
google.maps = google.maps || {};
(function() {

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }

  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };

  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=844\u0026hl=pl\u0026","https://khms1.googleapis.com/kh?v=844\u0026hl=pl\u0026"],null,null,null,1,"844",["https://khms0.google.com/kh?v=844\u0026hl=pl\u0026","https://khms1.google.com/kh?v=844\u0026hl=pl\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=124\u0026hl=pl\u0026","https://khms1.googleapis.com/kh?v=124\u0026hl=pl\u0026"],null,null,null,null,"124",["https://khms0.google.com/kh?v=124\u0026hl=pl\u0026","https://khms1.google.com/kh?v=124\u0026hl=pl\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=pl\u0026","https://mts1.googleapis.com/mapslt?hl=pl\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=pl\u0026","https://mts1.googleapis.com/mapslt?hl=pl\u0026"]]],["pl","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/",null,"https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com",null,"https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/36/12/intl/pl_ALL","3.36.12"],[3653128066],null,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=844\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",466000000,466],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],null,null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,null,null,[],["36.12"],2,0,[2,"https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js\u0026utm_medium=degraded\u0026utm_campaign=keyless#api-key-and-billing-errors"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){var ta,xa,Ba,Ca,Ea,Fa,Ga,Ha,Ya,Za,ib,tb,Jb,Kb,Lb,Nb,Ob,Rb,Sb,Ub,Vb,Wb,Yb,bc,jc,kc,lc,nc,sc,uc,tc,Cc,Gc,Ic,Vc,Yc,bd,id,kd,ld,pd,xd,zd,Dd,Ld,Md,Nd,Od,Qd,Rd,Ud,Xd,Td,ae,fe,qe,re,ve,ye,Ae,Ce,Be,Ie,Ke,Me,Ne,Le,Pe,Se,Ue,Xe,Oe,Re,Te,Ye,af,bf,cf,sf,tf,uf,wf,xf,zf,Af,Ef,Ff,Gf,Hf,If,Kf,Nf,Of,Wf,Xf,Yf,$f,eg,hg,ng,jg,rg,qg,lg,fg,cg,Fg,Gg,Hg,Jg,Kg,Lg,Mg,Ng,Tg,Zg,Ug,ah,Xg,Yg,eh,bh,fh,gh,ih,lh,nh,mh,ph,th,wh,vh,zh,Ah,Bh,Eh,Fh,Ph,Oh,Gh,Hh,Th,Aa,Ma,Ka,Va,Wa;_.aa="ERROR";_.ba="INVALID_REQUEST";_.ca="MAX_DIMENSIONS_EXCEEDED";
_.da="MAX_ELEMENTS_EXCEEDED";_.ea="MAX_WAYPOINTS_EXCEEDED";_.fa="NOT_FOUND";_.ha="OK";_.ia="OVER_QUERY_LIMIT";_.ja="REQUEST_DENIED";_.ka="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.n=function(){return function(){}};_.na=function(a){return function(b){this[a]=b}};_.oa=function(a){return function(){return this[a]}};_.pa=function(a){return function(){return a}};_.ra=function(a){return function(){return _.qa[a].apply(this,arguments)}};
ta=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};_.ua=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ta(a)}};_.wa=function(a){if(!(a instanceof Array)){a=_.ua(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};xa=function(){xa=_.n();_.ya.Symbol||(_.ya.Symbol=za)};Ba=function(a,b){this.j=a;Aa(this,"description",{configurable:!0,writable:!0,value:b})};
_.Da=function(){xa();var a=_.ya.Symbol.iterator;a||(a=_.ya.Symbol.iterator=_.ya.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&Aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return Ca(ta(this))}});_.Da=_.n()};Ca=function(a){(0,_.Da)();a={next:a};a[_.ya.Symbol.iterator]=function(){return this};return a};
Ea=function(a,b){if(b){var c=_.ya;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&Aa(c,a,{configurable:!0,writable:!0,value:b})}};Fa=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{ke:e,Ei:f}}return{ke:-1,Ei:void 0}};
Ga=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};Ha=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};_.t=function(a){return void 0!==a};_.Ia=function(a){return"string"==typeof a};_.Ja=function(a){return"number"==typeof a};
_.Na=function(){if(null===Ka)a:{var a=_.y.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ma.test(a)){Ka=a;break a}Ka=""}return Ka};_.Oa=function(a){a=a.split(".");for(var b=_.y,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};_.Pa=_.n();
_.Qa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.Ra=function(a){return"array"==_.Qa(a)};_.Sa=function(a){var b=_.Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.Ta=function(a){return"function"==_.Qa(a)};_.Ua=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Xa=function(a){return a[Va]||(a[Va]=++Wa)};Ya=function(a,b,c){return a.call.apply(a.bind,arguments)};
Za=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};_.z=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.z=Ya:_.z=Za;return _.z.apply(null,arguments)};_.$a=function(){return+new Date};
_.bb=function(a,b){a=a.split(".");var c=_.y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.t(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.B=function(a,b){function c(){}c.prototype=b.prototype;a.Cb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.hf=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];b.prototype[e].apply(d,g)}};
_.cb=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.Ia(a))return _.Ia(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.C=function(a,b,c){for(var d=a.length,e=_.Ia(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};_.db=function(a,b){for(var c=a.length,d=[],e=0,f=_.Ia(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d};
_.eb=function(a,b,c){for(var d=a.length,e=_.Ia(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};_.gb=function(a,b){b=_.cb(a,b);var c;(c=0<=b)&&_.fb(a,b);return c};_.fb=function(a,b){Array.prototype.splice.call(a,b,1)};_.hb=_.ma();ib=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};_.jb=function(a){for(var b in a)return!1;return!0};_.mb=function(a,b){this.l=a===kb&&b||"";this.m=lb};_.ob=function(){this.m="";this.A=nb};_.pb=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
_.sb=function(){return-1!=_.qb.toLowerCase().indexOf("webkit")};
_.ub=function(a,b){var c=0;a=_.pb(String(a)).split(".");b=_.pb(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=tb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||tb(0==f[2].length,0==g[2].length)||tb(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};tb=function(a,b){return a<b?-1:a>b?1:0};
_.wb=function(){this.m="";this.A=_.vb};_.xb=function(a){var b=new _.wb;b.m=a;return b};_.zb=function(a){return-1!=_.qb.indexOf(a)};_.Ab=function(){return _.zb("Trident")||_.zb("MSIE")};_.Bb=function(){return _.zb("Firefox")||_.zb("FxiOS")};_.Db=function(){return _.zb("Safari")&&!(_.Cb()||_.zb("Coast")||_.zb("Opera")||_.zb("Edge")||_.Bb()||_.zb("Silk")||_.zb("Android"))};_.Cb=function(){return(_.zb("Chrome")||_.zb("CriOS"))&&!_.zb("Edge")};_.Fb=function(){this.m="";this.C=Eb;this.A=null};
_.Gb=function(a){if(a instanceof _.Fb&&a.constructor===_.Fb&&a.C===Eb)return a.m;_.Qa(a);return"type_error:SafeHtml"};_.Hb=function(a,b){var c=new _.Fb;c.m=a;c.A=b;return c};Jb=function(a){var b=new _.ob;b.m=Ib instanceof _.mb&&Ib.constructor===_.mb&&Ib.m===lb?Ib.l:"type_error:Const";b instanceof _.ob&&b.constructor===_.ob&&b.A===nb?b=b.m:(_.Qa(b),b="type_error:TrustedResourceUrl");a.src=b.toString()};Kb=function(){return _.zb("iPhone")&&!_.zb("iPod")&&!_.zb("iPad")};Lb=function(a){Lb[" "](a);return a};
Nb=function(a,b){var c=Mb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};Ob=function(){var a=_.y.document;return a?a.documentMode:void 0};_.Qb=function(a){return Nb(a,function(){return 0<=_.ub(Pb,a)})};Rb=function(a,b){this.m=a;this.A=b;this.l=0;this.j=null};Sb=function(a){_.y.setTimeout(function(){throw a;},0)};
Ub=function(){var a=_.y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.zb("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Jb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(_.Gb(Tb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.z)(function(k){if(("*"==h||k.origin==
h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!_.Ab()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.t(c.next)){c=c.next;var e=c.eh;c.eh=null;e()}};return function(e){d.next={eh:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=
function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){_.y.setTimeout(e,0)}};Vb=function(){this.l=this.j=null};Wb=function(){this.next=this.j=this.Qc=null};_.ac=function(a,b){Xb||Yb();Zb||(Xb(),Zb=!0);$b.add(a,b)};
Yb=function(){if(_.y.Promise&&_.y.Promise.resolve){var a=_.y.Promise.resolve(void 0);Xb=function(){a.then(bc)}}else Xb=function(){var b=bc;!_.Ta(_.y.setImmediate)||_.y.Window&&_.y.Window.prototype&&!_.zb("Edge")&&_.y.Window.prototype.setImmediate==_.y.setImmediate?(cc||(cc=Ub()),cc(b)):_.y.setImmediate(b)}};bc=function(){for(var a;a=$b.remove();){try{a.Qc.call(a.j)}catch(c){Sb(c)}var b=dc;b.A(a);100>b.l&&(b.l++,a.next=b.j,b.j=a)}Zb=!1};_.ec=function(a){return a*Math.PI/180};
_.fc=function(a){return 180*a/Math.PI};_.gc=function(a){return document.createElement(String(a))};_.hc=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.ic=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};jc=_.n();kc=function(a,b,c,d,e){this.j=!!b;this.node=null;this.l=0;this.m=!1;this.A=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.l||0;this.j&&(this.depth*=-1)};lc=function(a,b,c,d){kc.call(this,a,b,c,null,d)};_.mc=function(a,b){a[b]||(a[b]=[]);return a[b]};
_.oc=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&nc(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
nc=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.oc(a,b))return!1}else return!1;return!0};_.rc=function(a){_.Ia(a)?this.j=a:(this.j=a.G,this.m=a.I);a=this.j;var b=pc[a];if(!b){var c=1==parseInt(a,10)?0:-1;pc[a]=b=[c];qc.lastIndex=1+c;c=1;for(var d;d=qc.exec(a);)d=d[0],b[c++]=qc.lastIndex-d.length,b[c++]=parseInt(d,10);b[c]=a.length}this.l=b;this.Gb=this.l[0]};sc=_.n();
uc=function(a,b,c){var d=new _.rc(b);d.forEach(function(e){var f=e.qc,g=a[f+d.Gb];if(null!=g)if(e.Kd)for(var h=0;h<g.length;++h)tc(g[h],f,e,c);else tc(g,f,e,c)})};tc=function(a,b,c,d){if("m"==c.type){var e=d.length;uc(a,c.Le,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),a=[b,c.type,encodeURIComponent(a)].join(""),d.push(a)};_.F=function(a){this.B=a||[]};_.vc=function(a,b,c){a=a.B[b];return null!=a?a:c};_.wc=function(a,b,c){return _.vc(a,b,c||0)};
_.G=function(a,b,c){return _.vc(a,b,c||0)};_.H=function(a,b,c){return _.vc(a,b,c||"")};_.I=function(a,b){var c=a.B[b];c||(c=a.B[b]=[]);return c};_.xc=function(a,b){return _.mc(a.B,b)};_.yc=function(a,b,c){_.xc(a,b).push(c)};_.zc=function(a,b,c){return _.xc(a,b)[c]};_.Ac=function(a,b){var c=[];_.xc(a,b).push(c);return c};_.Bc=function(a,b){return a.B[b]?a.B[b].length:0};Cc=function(a){this.B=a||[]};_.Dc=function(a){return _.H(a,0)};_.Ec=function(a){return _.H(a,1)};_.Fc=function(a){this.B=a||[]};
Gc=function(a){this.B=a||[]};_.Hc=function(a){this.B=a||[]};Ic=function(a){this.B=a||[]};_.Jc=function(a){return new Cc(a.B[2])};_.J=function(a){return a?a.length:0};_.Lc=function(a,b){_.Kc(b,function(c){a[c]=b[c]})};_.Mc=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.Nc=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.Oc=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Pc=function(a,b){for(var c=[],d=_.J(a),e=0;e<d;++e)c.push(b(a[e],e));return c};
_.Rc=function(a,b){for(var c=_.Qc(void 0,_.J(b)),d=_.Qc(void 0,0);d<c;++d)a.push(b[d])};_.K=function(a){return"number"==typeof a};_.Sc=function(a){return"object"==typeof a};_.Qc=function(a,b){return null==a?b:a};_.Tc=function(a){return"string"==typeof a};_.Uc=function(a){return a===!!a};_.Kc=function(a,b){for(var c in a)b(c,a[c])};Vc=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};
_.Xc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];_.y.console&&_.y.console.error&&_.y.console.error.apply(_.y.console,_.wa(b))};Yc=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.Zc=function(a,b){var c="";if(null!=b){if(!(b instanceof Yc))return b;c=": "+b.message}return new Yc(a+c)};_.$c=function(a){if(!(a instanceof Yc))throw a;_.Xc(a.name+": "+a.message)};
_.ad=function(a,b){var c=c?c+": ":"";return function(d){if(!d||!_.Sc(d))throw _.Zc(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.Zc(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.t(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=g}catch(h){throw _.Zc(c+"in property "+f,h);}return e}};bd=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.cd=function(a,b,c){return c?function(d){if(d instanceof a)return d;try{return new a(d)}catch(e){throw _.Zc("when calling new "+b,e);}}:function(d){if(d instanceof a)return d;throw _.Zc("not an instance of "+b);}};_.dd=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Zc(b);}};_.ed=function(a){return function(b){if(!_.Ra(b))throw _.Zc("not an Array");return _.Pc(b,function(c,d){try{return a(c)}catch(e){throw _.Zc("at index "+d,e);}})}};
_.fd=function(a,b){return function(c){if(a(c))return c;throw _.Zc(b||""+c);}};_.gd=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.xg||f)(b)}catch(g){if(!(g instanceof Yc))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Zc(c.join("; and "));}};_.hd=function(a,b){return function(c){return b(a(c))}};_.L=function(a){return function(b){return null==b?b:a(b)}};
id=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Zc("no "+a+" property");}};_.M=function(a,b){this.x=a;this.y=b};kd=function(a){if(a instanceof _.M)return a;try{_.ad({x:_.jd,y:_.jd},!0)(a)}catch(b){throw _.Zc("not a Point",b);}return new _.M(a.x,a.y)};_.O=function(a,b,c,d){this.width=a;this.height=b;this.l=c;this.j=d};ld=function(a){if(a instanceof _.O)return a;try{_.ad({height:_.jd,width:_.jd},!0)(a)}catch(b){throw _.Zc("not a Size",b);}return new _.O(a.width,a.height)};
_.md=function(a,b){this.S=a;this.T=b};_.nd=function(a){this.min=0;this.max=a;this.j=a-0};_.od=function(a){this.yc=a.yc||null;this.zc=a.zc||null};pd=function(a,b,c){this.j=a;a=Math.cos(b*Math.PI/180);b=Math.cos(c*Math.PI/180);c=Math.sin(c*Math.PI/180);this.l=this.j*b;this.m=this.j*c;this.A=-this.j*a*c;this.C=this.j*a*b;this.D=this.l*this.C-this.m*this.A};_.qd=function(a,b,c){var d=Math.pow(2,Math.round(a))/256;return new pd(Math.round(Math.pow(2,a)/d)*d,b,c)};
_.rd=function(a,b){return new _.md((a.C*b.L-a.m*b.O)/a.D,(-a.A*b.L+a.l*b.O)/a.D)};_.sd=function(a){this.X=this.V=Infinity;this.ba=this.aa=-Infinity;_.C(a||[],this.extend,this)};_.td=function(a,b,c,d){var e=new _.sd;e.V=a;e.X=b;e.aa=c;e.ba=d;return e};_.P=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{ud(a),b=a.lng,a=a.lat,c=!1}catch(d){_.$c(d)}a-=0;b-=0;c||(a=_.Mc(a,-90,90),180!=b&&(b=_.Nc(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.vd=function(a){return _.ec(a.lat())};
_.wd=function(a){return _.ec(a.lng())};xd=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};_.yd=function(a){try{if(a instanceof _.P)return a;a=ud(a);return new _.P(a.lat,a.lng)}catch(b){throw _.Zc("not a LatLng or LatLngLiteral",b);}};zd=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.j=a;this.l=b};_.Ad=function(a){return a.j>a.l};_.Bd=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.Cd=function(a){return a.isEmpty()?0:_.Ad(a)?360-(a.j-a.l):a.l-a.j};
Dd=function(a,b){this.j=a;this.l=b};_.Q=function(a,b){a=a&&_.yd(a);b=b&&_.yd(b);if(a){b=b||a;var c=_.Mc(a.lat(),-90,90),d=_.Mc(b.lat(),-90,90);this.na=new Dd(c,d);a=a.lng();b=b.lng();360<=b-a?this.ia=new zd(-180,180):(a=_.Nc(a,-180,180),b=_.Nc(b,-180,180),this.ia=new zd(a,b))}else this.na=new Dd(1,-1),this.ia=new zd(180,-180)};_.Ed=function(a,b,c,d){return new _.Q(new _.P(a,b,!0),new _.P(c,d,!0))};
_.Gd=function(a){if(a instanceof _.Q)return a;try{return a=Fd(a),_.Ed(a.south,a.west,a.north,a.east)}catch(b){throw _.Zc("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.Jd=function(a){a=a||window.event;_.Hd(a);_.Id(a)};_.Hd=function(a){a.stopPropagation()};_.Id=function(a){a.preventDefault()};_.Kd=function(a){a.handled=!0};Ld=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};Md=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.Lc(a,c[b]);return a};
Nd=function(a,b){return function(c){return b.call(a,c,this)}};Od=function(a,b,c){return function(d){var e=[b,a];_.Rc(e,arguments);_.R.trigger.apply(this,e);c&&_.Kd.apply(null,arguments)}};Qd=function(a,b,c,d){this.l=a;this.m=b;this.j=c;this.C=d;this.id=++Pd;Ld(a,b)[this.id]=this};Rd=function(a){return function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c=a.A([b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};
_.Sd=function(a){return""+(_.Ua(a)?_.Xa(a):a)};_.S=_.n();Ud=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);c=Td(a,b);for(var d in c){var e=c[d];Ud(e.Xc,e.tb)}_.R.trigger(a,b.toLowerCase()+"_changed")};_.Wd=function(a){return Vd[a]||(Vd[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Xd=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};Td=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};
_.Yd=function(a){this.W=[];this.j=a&&a.Ed||_.Pa;this.l=a&&a.Fd||_.Pa};_.$d=function(a,b,c,d){function e(){_.C(f,function(h){b.call(c||null,function(k){if(h.once){if(h.once.dh)return;h.once.dh=!0;_.gb(g.W,h);g.W.length||g.j()}h.Qc.call(h.context,k)})})}var f=a.W.slice(0),g=a;d&&d.sync?e():(Zd||_.ac)(e)};ae=function(a,b){return function(c){return c.Qc==a&&c.context==(b||null)}};_.be=function(){this.W=new _.Yd({Ed:(0,_.z)(this.Ed,this),Fd:(0,_.z)(this.Fd,this)})};_.ce=function(a){return function(){return this.get(a)}};
_.de=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.$c(_.Zc("set"+_.Wd(a),d))}}:function(c){this.set(a,c)}};_.ee=function(a,b){_.Kc(b,function(c,d){var e=_.ce(c);a["get"+_.Wd(c)]=e;d&&(d=_.de(c,d),a["set"+_.Wd(c)]=d)})};_.ge=function(a){this.j=a||[];fe(this)};fe=function(a){a.set("length",a.j.length)};_.he=function(){this.l={};this.m=0};_.ie=function(a,b){var c=a.l,d=_.Sd(b);c[d]||(c[d]=b,++a.m,_.R.trigger(a,"insert",b),a.j&&a.j(b))};_.je=_.na("j");
_.ke=function(a,b){var c=b.rb();return _.db(a.j,function(d){d=d.rb();return c!=d})};_.le=function(a,b,c){this.heading=a;this.pitch=_.Mc(b,-90,90);this.zoom=Math.max(0,c)};_.me=function(a){_.be.call(this);this.C=!!a};_.oe=function(a,b){return new _.ne(a,b)};_.ne=function(a,b){_.me.call(this,b);this.j=a};_.pe=function(){this.__gm=new _.S;this.C=null};qe=_.n();re=_.n();_.se=_.na("__gm");
_.ue=function(){for(var a=Array(36),b=0,c,d=0;36>d;d++)8==d||13==d||18==d||23==d?a[d]="-":14==d?a[d]="4":(2>=b&&(b=33554432+16777216*Math.random()|0),c=b&15,b>>=4,a[d]=te[19==d?c&3|8:c]);this.Sf=a.join("")+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^_.$a()).toString(36))};ve=function(a,b){this.j=a;this.l=b||0};
ye=function(){var a=navigator.userAgent;this.A=a;this.j=this.type=0;this.version=new ve(0);this.C=new ve(0);a=a.toLowerCase();for(var b=1;8>b;++b){var c=we[b];if(-1!=a.indexOf(c)){this.type=b;var d=(new RegExp(c+"[ /]?([0-9]+).?([0-9]+)?")).exec(a);d&&(this.version=new ve(parseInt(d[1],10),parseInt(d[2]||"0",10)));break}}7==this.type&&(b=/^Mozilla\/.*Gecko\/.*[Minefield|Shiretoko][ /]?([0-9]+).?([0-9]+)?/,d=b.exec(this.A))&&(this.type=5,this.version=new ve(parseInt(d[1],10),parseInt(d[2]||"0",10)));
6==this.type&&(b=/rv:([0-9]{2,}.?[0-9]+)/,b=b.exec(this.A))&&(this.type=1,this.version=new ve(parseInt(b[1],10)));for(b=1;7>b;++b)if(c=xe[b],-1!=a.indexOf(c)){this.j=b;break}if(5==this.j||6==this.j||2==this.j)if(b=/OS (?:X )?(\d+)[_.]?(\d+)/.exec(this.A))this.C=new ve(parseInt(b[1],10),parseInt(b[2]||"0",10));4==this.j&&(b=/Android (\d+)\.?(\d+)?/.exec(this.A))&&(this.C=new ve(parseInt(b[1],10),parseInt(b[2]||"0",10)));this.l=5==this.type||7==this.type;this.m=4==this.type||3==this.type;this.D=0;this.l&&
(d=/\brv:\s*(\d+\.\d+)/.exec(a))&&(this.D=parseFloat(d[1]));this.F=document.compatMode||""};Ae=function(){this.j=_.ze};Ce=function(){var a=document;this.j=_.ze;this.l=Be(a,["transform","WebkitTransform","MozTransform","msTransform"]);this.m=Be(a,["WebkitUserSelect","MozUserSelect","msUserSelect"])};Be=function(a,b){for(var c=0,d;d=b[c];++c)if("string"==typeof a.documentElement.style[d])return d;return null};_.De=function(a,b){a=a.style;a.width=b.width+(b.l||"px");a.height=b.height+(b.j||"px")};
_.Ee=function(a){return new _.O(a.offsetWidth,a.offsetHeight)};_.Ge=function(a){for(var b;b=a.firstChild;)_.Fe(b),a.removeChild(b)};_.Fe=function(a){a=new lc(a);try{for(;;){var b=a.next();b&&_.R.clearInstanceListeners(b)}}catch(c){if(c!==He)throw c;}};Ie=_.n();_.Je=function(a){this.j=_.yd(a)};Ke=function(a){if(a instanceof Ie)return a;try{return new _.Je(_.yd(a))}catch(b){}throw _.Zc("not a Geometry or LatLng or LatLngLiteral object");};
Me=function(a){var b=_.y.document;var c=void 0===c?Le:c;this.l=b;this.j=a;this.m=c};Ne=function(a,b,c){var d=a.l;b=a.m(a.j,b);a=d.getElementsByTagName("head")[0];d=d.createElement("script");d.type="text/javascript";d.charset="UTF-8";d.src=b;c&&(d.onerror=c);(c=_.Na())&&d.setAttribute("nonce",c);a.appendChild(d)};Le=function(a,b){var c="";a=_.ua([a,b]);for(b=a.next();!b.done;b=a.next())b=b.value,b.length&&"/"==b[0]?c=b:(c&&"/"!=c[c.length-1]&&(c+="/"),c+=b);return c+".js"};
Pe=function(){this.C={};this.l={};this.D={};this.j={};this.A=void 0;this.m=new Oe};Se=function(a,b,c){var d=Qe;var e=void 0===e?new Me(b):e;a.A=_.n();Re(a.m,d,c,e)};Ue=function(a,b){a.C[b]||(a.C[b]=!0,Te(a.m,function(c){for(var d=c.j[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.j[g]||Ue(a,g)}Ne(c.m,b,function(h){for(var k=_.ua(a.l[b]||[]),l=k.next();!l.done;l=k.next())(l=l.value.Lb)&&l(h&&h.error||Error('Could not load "'+b+'".'));delete a.l[b];a.A&&a.A(b,h)})}))};
Xe=function(a,b,c){this.m=a;this.j=b;a={};for(var d in b)for(var e=b[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.A=a;this.l=c};Oe=function(){this.l=void 0;this.j=[]};Re=function(a,b,c,d){b=a.l=new Xe(d,b,c);c=0;for(d=a.j.length;c<d;++c)a.j[c](b);a.j.length=0};Te=function(a,b){a.l?b(a.l):a.j.push(b)};Ye=function(a,b){if(a)return function(){--a||b()};b();return _.n()};
_.T=function(a){return new Promise(function(b,c){var d=Pe.j(),e=""+a;d.j[e]?b(d.j[e]):((d.l[e]=d.l[e]||[]).push({Hb:b,Lb:c}),Ue(d,e))})};_.Ze=function(a,b){Pe.j().j[""+a]=b};_.$e=function(a){a=a||{};this.m=a.id;this.j=null;try{this.j=a.geometry?Ke(a.geometry):null}catch(b){_.$c(b)}this.l=a.properties||{}};af=function(){this.j={};this.m={};this.l={}};bf=function(){this.j={}};cf=function(a){var b=this;this.j=new bf;_.R.addListenerOnce(a,"addfeature",function(){_.T("data").then(function(c){c.j(b,a,b.j)})})};
_.ef=function(a){this.j=[];try{this.j=df(a)}catch(b){_.$c(b)}};_.gf=function(a){this.j=(0,_.ff)(a)};_.hf=function(a){this.j=(0,_.ff)(a)};_.kf=function(a){this.j=jf(a)};_.lf=function(a){this.j=(0,_.ff)(a)};_.nf=function(a){this.j=mf(a)};_.pf=function(a){this.j=of(a)};
_.qf=function(a,b,c){function d(w){if(!w)throw _.Zc("not a Feature");if("Feature"!=w.type)throw _.Zc('type != "Feature"');var x=w.geometry;try{x=null==x?null:e(x)}catch(E){throw _.Zc('in property "geometry"',E);}var A=w.properties||{};if(!_.Sc(A))throw _.Zc("properties is not an Object");var D=c.idPropertyName;w=D?A[D]:w.id;if(null!=w&&!_.K(w)&&!_.Tc(w))throw _.Zc((D||"id")+" is not a string or number");return{id:w,geometry:x,properties:A}}function e(w){if(null==w)throw _.Zc("is null");var x=(w.type+
"").toLowerCase(),A=w.coordinates;try{switch(x){case "point":return new _.Je(h(A));case "multipoint":return new _.lf(l(A));case "linestring":return g(A);case "multilinestring":return new _.kf(m(A));case "polygon":return f(A);case "multipolygon":return new _.pf(r(A))}}catch(D){throw _.Zc('in property "coordinates"',D);}if("geometrycollection"==x)try{return new _.ef(v(w.geometries))}catch(D){throw _.Zc('in property "geometries"',D);}throw _.Zc("invalid type");}function f(w){return new _.nf(q(w))}function g(w){return new _.gf(l(w))}
function h(w){w=k(w);return _.yd({lat:w[1],lng:w[0]})}if(!b)return[];c=c||{};var k=_.ed(_.jd),l=_.ed(h),m=_.ed(g),q=_.ed(function(w){w=l(w);if(!w.length)throw _.Zc("contains no elements");if(!w[0].equals(w[w.length-1]))throw _.Zc("first and last positions are not equal");return new _.hf(w.slice(0,-1))}),r=_.ed(f),v=_.ed(e),u=_.ed(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Pc(u(b),function(w){return a.add(w)})}catch(w){throw _.Zc('in property "features"',w);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.Zc("not a Feature or FeatureCollection");};sf=function(a){var b=this;a=a||{};this.setValues(a);this.j=new af;_.R.forward(this.j,"addfeature",this);_.R.forward(this.j,"removefeature",this);_.R.forward(this.j,"setgeometry",this);_.R.forward(this.j,"setproperty",this);_.R.forward(this.j,"removeproperty",this);this.l=new cf(this.j);this.l.bindTo("map",this);this.l.bindTo("style",this);_.C(_.rf,function(c){_.R.forward(b.l,c,b)});this.m=!1};tf=function(a){a.m||(a.m=!0,_.T("drawing_impl").then(function(b){b.Jk(a)}))};
uf=function(a){if(!a)return null;if(_.Ia(a)){var b=document.createElement("div");b.innerHTML=a}else a.nodeType==Node.TEXT_NODE?(b=document.createElement("div"),b.appendChild(a)):b=a;return b};wf=function(a){var b=vf;Se(Pe.j(),a,b)};xf=function(a){a=a||{};a.clickable=_.Qc(a.clickable,!0);a.visible=_.Qc(a.visible,!0);this.setValues(a);_.T("marker")};_.yf=function(a){this.__gm={set:null,me:null,dc:{map:null,streetView:null}};xf.call(this,a)};
zf=function(a,b){this.j=a;this.l=b;a.addListener("map_changed",(0,_.z)(this.El,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Af=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.Bf=function(a){function b(){e||(e=!0,_.T("infowindow").then(function(f){f.Bj(d)}))}window.setTimeout(function(){_.T("infowindow")},100);a=a||{};var c=!!a.j;delete a.j;var d=new zf(this,c),e=!1;_.R.addListenerOnce(this,"anchor_changed",b);_.R.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.Df=function(a){_.Cf&&a&&_.Cf.push(a)};Ef=function(a){this.setValues(a)};Ff=_.n();Gf=_.n();Hf=_.n();If=function(){_.T("geocoder")};
_.Jf=function(a,b,c){this.set("url",a);this.set("bounds",_.L(_.Gd)(b));this.setValues(c)};Kf=function(a,b){_.Tc(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.Lf=function(){this.j=new _.M(128,128);this.m=256/360;this.A=256/(2*Math.PI);this.l=!0};_.Mf=function(){var a=this;_.T("layers").then(function(b){b.j(a)})};Nf=function(a){var b=this;this.setValues(a);_.T("layers").then(function(c){c.l(b)})};Of=function(){var a=this;_.T("layers").then(function(b){b.m(a)})};
_.Pf=function(){this.D=this.D;this.F=this.F};_.Qf=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1;this.fi=!0};
_.Uf=function(a,b){_.Qf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=
b;if(b=a.relatedTarget){if(_.Rf){a:{try{Lb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=_.Sf||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=_.Sf||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=_.Ia(a.pointerType)?a.pointerType:Tf[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()}};
Wf=function(a,b,c,d,e){this.listener=a;this.j=null;this.src=b;this.type=c;this.capture=!!d;this.Xb=e;this.key=++Vf;this.Bb=this.Vd=!1};Xf=function(a){a.Bb=!0;a.listener=null;a.j=null;a.src=null;a.Xb=null};Yf=function(a){this.src=a;this.listeners={};this.j=0};_.Zf=function(a,b){var c=b.type;c in a.listeners&&_.gb(a.listeners[c],b)&&(Xf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.j--))};
$f=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Bb&&f.listener==b&&f.capture==!!c&&f.Xb==d)return e}return-1};_.bg=function(a,b,c,d,e){if(d&&d.once)return _.ag(a,b,c,d,e);if(_.Ra(b)){for(var f=0;f<b.length;f++)_.bg(a,b[f],c,d,e);return null}c=cg(c);return a&&a[dg]?a.listen(b,c,_.Ua(d)?!!d.capture:!!d,e):eg(a,b,c,!1,d,e)};
eg=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=_.Ua(e)?!!e.capture:!!e,h=fg(a);h||(a[gg]=h=new Yf(a));c=h.add(b,c,d,g,f);if(c.j)return c;d=hg();c.j=d;d.src=a;d.listener=c;if(a.addEventListener)ig||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");kg++;return c};
hg=function(){var a=lg,b=mg?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b};_.ag=function(a,b,c,d,e){if(_.Ra(b)){for(var f=0;f<b.length;f++)_.ag(a,b[f],c,d,e);return null}c=cg(c);return a&&a[dg]?a.A.add(String(b),c,!0,_.Ua(d)?!!d.capture:!!d,e):eg(a,b,c,!0,d,e)};
ng=function(a,b,c,d,e){if(_.Ra(b))for(var f=0;f<b.length;f++)ng(a,b[f],c,d,e);else(d=_.Ua(d)?!!d.capture:!!d,c=cg(c),a&&a[dg])?a.A.remove(String(b),c,d,e):a&&(a=fg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=$f(b,c,d,e)),(c=-1<a?b[a]:null)&&_.og(c))};
_.og=function(a){if(!_.Ja(a)&&a&&!a.Bb){var b=a.src;if(b&&b[dg])_.Zf(b.A,a);else{var c=a.type,d=a.j;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);kg--;(c=fg(b))?(_.Zf(c,a),0==c.j&&(c.src=null,b[gg]=null)):Xf(a)}}};jg=function(a){return a in pg?pg[a]:pg[a]="on"+a};
rg=function(a,b,c,d){var e=!0;if(a=fg(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Bb&&(f=qg(f,d),e=e&&!1!==f)}return e};qg=function(a,b){var c=a.listener,d=a.Xb||a.src;a.Vd&&_.og(a);return c.call(d,b)};
lg=function(a,b){if(a.Bb)return!0;if(!mg){var c=b||_.Oa("window.event");b=new _.Uf(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.currentTarget;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;!b.j&&0<=e;e--){b.currentTarget=c[e];var f=rg(c[e],a,!0,b);d=d&&f}for(e=0;!b.j&&e<c.length;e++)b.currentTarget=c[e],f=rg(c[e],a,!1,b),d=d&&f}return d}return qg(a,new _.Uf(b,
this))};fg=function(a){a=a[gg];return a instanceof Yf?a:null};cg=function(a){if(_.Ta(a))return a;a[ug]||(a[ug]=function(b){return a.handleEvent(b)});return a[ug]};_.vg=function(){_.Pf.call(this);this.A=new Yf(this);this.K=this;this.H=null};_.wg=function(a,b){if(!_.Ta(a))if(a&&"function"==typeof a.handleEvent)a=(0,_.z)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:_.y.setTimeout(a,b||0)};
_.xg=function(a,b,c){_.Pf.call(this);this.j=a;this.A=b||0;this.l=c;this.m=(0,_.z)(this.Gh,this)};_.yg=function(a){0!=a.Wb||a.start(void 0)};_.zg=function(a,b,c){this.size=a;this.tilt=b;this.heading=c;this.j=Math.cos(this.tilt/180*Math.PI)};_.Ag=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.Bg=function(a,b){var c=a.lat()+_.fc(b);90<c&&(c=90);var d=a.lat()-_.fc(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.ec(a.lat()));if(90==c||-90==d||1E-6>e)return new _.Q(new _.P(d,-180),new _.P(c,180));b=_.fc(Math.asin(b/e));return new _.Q(new _.P(d,a.lng()-b),new _.P(c,a.lng()+b))};
Fg=function(a,b){var c=this;_.pe.call(this);_.Df(a);this.__gm=new _.S;this.j=_.oe(!1,!0);this.j.addListener(function(f){c.get("visible")!=f&&c.set("visible",f)});this.m=this.A=null;b&&b.client&&(this.m=_.Cg[b.client]||null);var d=this.controls=[];_.Kc(_.Dg,function(f,g){d[g]=new _.ge});this.D=!1;this.l=a;this.__gm.fa=b&&b.fa||new _.he;this.set("standAlone",!0);this.setPov(new _.le(0,0,1));b&&b.pov&&(a=b.pov,_.K(a.zoom)||(a.zoom=_.Ja(b.zoom)?b.zoom:1));this.setValues(b);void 0==this.getVisible()&&
this.setVisible(!0);var e=this.__gm.fa;_.R.addListenerOnce(this,"pano_changed",function(){_.T("marker").then(function(f){f.j(e,c)})});_.Eg[35]&&b&&b.dE&&_.T("util").then(function(f){f.j.m(new _.Hc(b.dE))})};Gg=function(){this.A=[];this.m=this.j=this.l=null};
Hg=function(a,b,c,d){this.Z=b;this.j=d;this.l=_.oe(new _.je([]));this.J=new _.he;this.copyrights=new _.ge;this.A=new _.he;this.D=new _.he;this.C=new _.he;var e=this.fa=new _.he;e.j=function(){delete e.j;_.T("marker").then(function(f){f.j(e,a)})};this.F=new Fg(c,{visible:!1,enableCloseButton:!0,fa:e});this.F.bindTo("controlSize",a);this.F.bindTo("reportErrorControl",a);this.F.D=!0;this.m=new Gg;this.overlayLayer=null};
_.Ig=function(){var a=[],b=_.y.google&&_.y.google.maps&&_.y.google.maps.fisfetsz;b&&Array.isArray(b)&&_.Eg[15]&&b.forEach(function(c){_.K(c)&&a.push(c)});return a};Jg=function(a){this.B=a||[]};Kg=function(a){this.B=a||[]};Lg=function(a){this.B=a||[]};Mg=function(a){this.B=a||[]};Ng=function(a){this.B=a||[]};
Tg=function(a){if(!Og){var b=Og={G:"meummm"};if(!Pg){var c=Pg={G:"ebb5ss8MmbbbEI100b"};Qg||(Qg={G:"eedmbddemd",I:["uuuu","uuuu"]});c.I=[Qg,"Eb"]}c=Pg;Rg||(Rg={G:"10m",I:["bb"]});b.I=["ii","uue",c,Rg]}return _.Sg.j(a.B,Og)};
Zg=function(a,b,c){var d=this;this.U=new _.xg(function(){var e=Ug(d);if(d.m&&d.D)d.A!=e&&_.Vg(d.l);else{var f="",g=d.zh(),h=d.Lg(),k=d.af();if(k){if(g&&isFinite(g.lat())&&isFinite(g.lng())&&1<h&&null!=e&&k&&k.width&&k.height&&d.j){_.De(d.j,k);if(g=_.Ag(d.F,g,h)){var l=new _.sd;l.V=Math.round(g.x-k.width/2);l.aa=l.V+k.width;l.X=Math.round(g.y-k.height/2);l.ba=l.X+k.height;g=l}else g=null;l=Wg[e];g&&(d.D=!0,d.A=e,d.m&&d.l&&(f=_.qd(h,0,0),d.m.set({image:d.l,bounds:{min:_.rd(f,{L:g.V,O:g.X}),max:_.rd(f,
{L:g.aa,O:g.ba})},size:{width:k.width,height:k.height}})),f=Xg(d,g,h,e,l))}d.l&&(_.De(d.l,k),Yg(d,f))}}},0);this.H=b;this.F=new _.Lf;this.J=c+"/maps/api/js/StaticMapService.GetMapImage";this.l=this.j=null;this.m=new _.ne(null,void 0);this.A=null;this.C=this.D=!1;this.set("div",a);this.set("loading",!0)};Ug=function(a){var b=a.get("tilt")||_.J(a.get("styles"));a=a.get("mapTypeId");return b?null:$g[a]};_.Vg=function(a){a.parentNode&&a.parentNode.removeChild(a)};
ah=function(a,b){var c=a.l;c.onload=null;c.onerror=null;var d=a.af();d&&(b&&(c.parentNode||a.j.appendChild(c),a.m||_.De(c,d)),a.set("loading",!1))};
Xg=function(a,b,c,d,e){var f=new Ng,g=new Lg(_.I(f,0));g.B[0]=b.V;g.B[1]=b.X;f.B[1]=e;f.setZoom(c);c=new Mg(_.I(f,3));c.B[0]=b.aa-b.V;c.B[1]=b.ba-b.X;var h=new Kg(_.I(f,4));h.B[0]=d;h.B[4]=_.Dc(_.Jc(_.U));h.B[5]=_.Ec(_.Jc(_.U)).toLowerCase();h.B[9]=!0;_.Ig().forEach(function(k){0>_.xc(h,13).indexOf(k)&&_.yc(h,13,k)});h.B[11]=!0;_.Eg[13]&&(b=new Jg(_.Ac(h,7)),b.B[0]=33,b.B[1]=3,b.B[7]=1);f=a.J+unescape("%3F")+Tg(f);return a.H(f)};
Yg=function(a,b){var c=a.l;b!=c.src?(a.m||_.Vg(c),c.onload=function(){ah(a,!0)},c.onerror=function(){ah(a,!1)},c.src=b):!c.parentNode&&b&&a.j.appendChild(c)};
eh=function(a,b){var c=this;_.$a();var d=b||{};d.noClear||_.Ge(a);var e="undefined"==typeof document?null:document.createElement("div");e&&a.appendChild&&(a.appendChild(e),e.style.width=e.style.height="100%");if(!_.y.requestAnimationFrame)throw _.T("controls").then(function(l){l.rg(a)}),Error("The Google Maps JavaScript API does not support this browser.");_.T("util").then(function(l){_.Eg[35]&&b&&b.dE&&l.j.m(new _.Hc(b.dE));l.j.j.ma(function(m){2==m.getStatus()&&_.T("controls").then(function(q){q.ni(a,
_.H(m,1)||"http://g.co/dev/maps-no-account")})})});var f,g=new Promise(function(l){f=l});_.se.call(this,new Hg(this,a,e,g));_.t(d.mapTypeId)||(d.mapTypeId="roadmap");this.setValues(d);this.j=_.Eg[15]&&d.noControlsOrLogging;this.mapTypes=new re;this.features=new _.S;_.Df(e);this.notify("streetView");g=_.Ee(e);var h=null;bh(d.useStaticMap,g)&&(h=new Zg(e,_.ch,_.H(_.Jc(_.U),9)),h.set("size",g),h.bindTo("center",this),h.bindTo("zoom",this),h.bindTo("mapTypeId",this),h.bindTo("styles",this));this.overlayMapTypes=
new _.ge;var k=this.controls=[];_.Kc(_.Dg,function(l,m){k[m]=new _.ge});_.T("map").then(function(l){dh=l;c.getDiv()&&e&&l.l(c,d,e,h,f)});this.data=new sf({map:this})};bh=function(a,b){if(!_.U||2==_.wc(_.U,37))return!1;if(_.t(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};fh=function(){_.T("maxzoom")};gh=function(a,b){!a||_.Tc(a)||_.K(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.hh=_.n();ih=function(a){a=a||{};a.visible=_.Qc(a.visible,!0);return a};
_.jh=function(a){return a&&a.radius||6378137};lh=function(a){return a instanceof _.ge?kh(a):new _.ge((0,_.ff)(a))};nh=function(a){if(_.Ra(a)||a instanceof _.ge)if(0==_.J(a))var b=!0;else b=a instanceof _.ge?a.getAt(0):a[0],b=_.Ra(b)||b instanceof _.ge;else b=!1;return b?a instanceof _.ge?mh(kh)(a):new _.ge(_.ed(lh)(a)):new _.ge([lh(a)])};
mh=function(a){return function(b){if(!(b instanceof _.ge))throw _.Zc("not an MVCArray");b.forEach(function(c,d){try{a(c)}catch(e){throw _.Zc("at index "+d,e);}});return b}};_.oh=function(a){this.setValues(ih(a));_.T("poly")};ph=function(a){this.set("latLngs",new _.ge([new _.ge]));this.setValues(ih(a));_.T("poly")};_.qh=function(a){ph.call(this,a)};_.rh=function(a){ph.call(this,a)};_.sh=function(a){this.setValues(ih(a));_.T("poly")};th=function(){this.j=null};_.uh=function(){this.j=null};
wh=function(a){var b=this;this.tileSize=a.tileSize||new _.O(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.m=(0,_.z)(a.getTileUrl,a);this.j=new _.he;this.l=null;this.set("opacity",a.opacity);_.T("map").then(function(c){var d=b.l=c.j,e=b.tileSize||new _.O(256,256);b.j.forEach(function(f){var g=f.__gmimt,h=g.la,k=g.zoom,l=b.m(h,k);(g.nd=d({M:h.x,N:h.y,Y:k},e,f,l,function(){return _.R.trigger(f,"load")})).setOpacity(vh(b))})})};
vh=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.xh=function(){_.xh.hf(this,"constructor")};_.yh=function(a,b){_.yh.hf(this,"constructor");this.set("styles",a);a=b||{};this.j=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.O(256,256)};zh=function(a,b){this.setValues(b)};Ah=_.na("j");
Bh=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.j;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
Eh=function(){var a=_.G(new Gc(_.U.B[4]),0),b=_.H(_.U,16),c=_.H(_.U,6),d=_.H(_.U,13),e=new Ah(131071),f=unescape("%26%74%6F%6B%65%6E%3D"),g=unescape("%26%6B%65%79%3D"),h=unescape("%26%63%6C%69%65%6E%74%3D"),k=unescape("%26%63%68%61%6E%6E%65%6C%3D"),l="";b&&(l+=g+encodeURIComponent(b));c&&(l+=h+encodeURIComponent(c));d&&(l+=k+encodeURIComponent(d));return function(m){m=m.replace(Ch,"%27")+l;var q=m+f;Dh||(Dh=/(?:https?:\/\/[^/]+)?(.*)/);m=Dh.exec(m);return q+Bh(e,m&&m[1],a)}};
Fh=function(){var a=new Ah(2147483647);return function(b){return Bh(a,b,0)}};
Ph=function(a,b){var c=window.google.maps;Gh();var d=Hh(c);_.U=new Ic(a);_.Ih=Math.random()<_.G(_.U,0,1);_.Jh=Math.round(1E15*Math.random()).toString(36);_.ch=Eh();_.Kh=Fh();_.Lh=new _.ge;_.Mh=b;for(a=0;a<_.Bc(_.U,8);++a)_.Eg[_.zc(_.U,8,a)]=!0;a=new _.Fc(_.U.B[3]);wf(_.H(a,0));_.Kc(Nh,function(f,g){c[f]=g});c.version=_.H(a,1);setTimeout(function(){_.T("util").then(function(f){f.l.j();f.m();d&&_.T("stats").then(function(g){g.j.j({ev:"api_alreadyloaded",client:_.H(_.U,6),key:_.H(_.U,16)})})})},5E3);
var e=_.H(_.U,11);e&&Promise.all(_.xc(_.U,12).map(function(f){return _.T(f)})).then(function(){Oh(e)()})};Oh=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Zc(a+" is not a function");return function(){c.apply(d)}};Gh=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps JavaScript API v3.")};
Hh=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps JavaScript API multiple times on this page. This may cause unexpected errors.");return a};
_.Rh=function(a,b){b=void 0===b?"LocationBias":b;if("string"===typeof a){if("IP_BIAS"!==a)throw _.Zc(b+" of type string was invalid: "+a);return a}if(!a||!_.Sc(a))throw _.Zc("Invalid "+b+": "+a);if(!(a instanceof _.P||a instanceof _.Q||a instanceof _.oh))try{a=_.Gd(a)}catch(c){try{a=_.yd(a)}catch(d){try{a=new _.oh(Qh(a))}catch(e){throw _.Zc("Invalid "+b+": "+JSON.stringify(a));}}}if(a instanceof _.oh){if(!a||!_.Sc(a))throw _.Zc("Passed Circle is not an Object.");a instanceof _.oh||(a=new _.oh(a));
if(!a.getCenter())throw _.Zc("Circle is missing center.");if(void 0==a.getRadius())throw _.Zc("Circle is missing radius.");}return a};_.qa=[];_.Sh="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Th=Object.setPrototypeOf;else{var Uh;a:{var Vh={a:!0},Wh={};try{Wh.__proto__=Vh;Uh=Wh.a;break a}catch(a){}Uh=!1}Th=Uh?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}_.Yh=Th;_.ya="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
Aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};Ba.prototype.toString=_.oa("j");var za=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new Ba("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
Ea("Promise",function(a){function b(g){this.l=0;this.m=void 0;this.j=[];var h=this.A();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.j=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.l=function(g){if(null==this.j){this.j=[];var h=this;this.m(function(){h.C()})}this.j.push(g)};var e=_.ya.setTimeout;c.prototype.m=function(g){e(g,0)};c.prototype.C=function(){for(;this.j&&this.j.length;){var g=this.j;this.j=[];for(var h=0;h<g.length;++h){var k=
g[h];g[h]=null;try{k()}catch(l){this.A(l)}}}this.j=null};c.prototype.A=function(g){this.m(function(){throw g;})};b.prototype.A=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:g(this.K),reject:g(this.C)}};b.prototype.K=function(g){if(g===this)this.C(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.D(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.C(k);return}"function"==typeof h?this.ca(h,g):this.D(g)};b.prototype.C=function(g){this.F(2,g)};b.prototype.D=function(g){this.F(1,g)};b.prototype.F=function(g,h){if(0!=this.l)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.l);this.l=g;this.m=h;this.H()};b.prototype.H=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.l(this.j[g]);this.j=null}};var f=new c;b.prototype.fa=function(g){var h=
this.A();g.Wd(h.resolve,h.reject)};b.prototype.ca=function(g,h){var k=this.A();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(r,v){return"function"==typeof r?function(u){try{l(r(u))}catch(w){m(w)}}:v}var l,m,q=new b(function(r,v){l=r;m=v});this.Wd(k(g,l),k(h,m));return q};b.prototype["catch"]=function(g){return this.then(void 0,g)};b.prototype.Wd=function(g,h){function k(){switch(l.l){case 1:g(l.m);break;case 2:h(l.m);break;default:throw Error("Unexpected state: "+
l.l);}}var l=this;null==this.j?f.l(k):this.j.push(k)};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=_.ua(g),m=l.next();!m.done;m=l.next())d(m.value).Wd(h,k)})};b.all=function(g){var h=_.ua(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(u){return function(w){r[u]=w;v--;0==v&&l(r)}}var r=[],v=0;do r.push(void 0),v++,d(k.value).Wd(q(r.length-1),m),k=h.next();while(!k.done)})};return b});
Ea("Array.prototype.findIndex",function(a){return a?a:function(b,c){return Fa(this,b,c).ke}});Ea("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});Ea("Array.prototype.find",function(a){return a?a:function(b,c){return Fa(this,b,c).Ei}});
Ea("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});Ea("String.prototype.repeat",function(a){return a?a:function(b){var c=Ga(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
Ea("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
Ea("WeakMap",function(a){function b(h){this.j=(g+=Math.random()+1).toString();if(h){h=_.ua(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}function c(){}function d(h){if(!Ha(h,f)){var k=new c;Aa(h,f,{value:k})}}function e(h){var k=Object[h];k&&(Object[h]=function(l){if(l instanceof c)return l;d(l);return k(l)})}if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),k=Object.seal({}),l=new a([[h,2],[k,3]]);if(2!=l.get(h)||3!=l.get(k))return!1;l["delete"](h);l.set(k,4);
return!l.has(h)&&4==l.get(k)}catch(m){return!1}}())return a;var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(h,k){d(h);if(!Ha(h,f))throw Error("WeakMap key fail: "+h);h[f][this.j]=k;return this};b.prototype.get=function(h){return Ha(h,f)?h[f][this.j]:void 0};b.prototype.has=function(h){return Ha(h,f)&&Ha(h[f],this.j)};b.prototype["delete"]=function(h){return Ha(h,f)&&Ha(h[f],this.j)?delete h[f][this.j]:!1};return b});
Ea("Map",function(a){function b(){var h={};return h.Nb=h.next=h.head=h}function c(h,k){var l=h.j;return Ca(function(){if(l){for(;l.head!=h.j;)l=l.Nb;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.l[l];if(m&&Ha(h.l,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,Xa:q}}return{id:l,
list:m,index:-1,Xa:void 0}}function e(h){this.l={};this.j=b();this.size=0;if(h){h=_.ua(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(_.ua([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=
m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;(0,_.Da)();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.l[l.id]=[]);l.Xa?l.Xa.value=k:(l.Xa={next:this.j,Nb:this.j.Nb,head:this.j,key:h,value:k},l.list.push(l.Xa),this.j.Nb.next=l.Xa,this.j.Nb=l.Xa,this.size++);return this};e.prototype["delete"]=function(h){h=d(this,h);return h.Xa&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.l[h.id],h.Xa.Nb.next=h.Xa.next,
h.Xa.next.Nb=h.Xa.Nb,h.Xa.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.l={};this.j=this.j.Nb=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).Xa};e.prototype.get=function(h){return(h=d(this,h).Xa)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})};e.prototype.forEach=function(h,k){for(var l=
this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
Ea("WeakSet",function(a){function b(c){this.j=new WeakMap;if(c){c=_.ua(c);for(var d;!(d=c.next()).done;)this.add(d.value)}}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),d=Object.seal({}),e=new a([c]);if(!e.has(c)||e.has(d))return!1;e["delete"](c);e.add(d);return!e.has(c)&&e.has(d)}catch(f){return!1}}())return a;b.prototype.add=function(c){this.j.set(c,!0);return this};b.prototype.has=function(c){return this.j.has(c)};b.prototype["delete"]=function(c){return this.j["delete"](c)};
return b});Ea("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});Ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});Ea("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
Ea("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:_.ma();var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});Ea("Math.sign",function(a){return a?a:function(b){b=Number(b);return 0===b||isNaN(b)?b:0<b?1:-1}});Ea("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});
Ea("Math.hypot",function(a){return a?a:function(b){if(2>arguments.length)return arguments.length?Math.abs(arguments[0]):0;var c,d,e;for(c=e=0;c<arguments.length;c++)e=Math.max(e,Math.abs(arguments[c]));if(1E100<e||1E-100>e){if(!e)return e;for(c=d=0;c<arguments.length;c++){var f=Number(arguments[c])/e;d+=f*f}return Math.sqrt(d)*e}for(c=d=0;c<arguments.length;c++)f=Number(arguments[c]),d+=f*f;return Math.sqrt(d)}});
Ea("Math.log1p",function(a){return a?a:function(b){b=Number(b);if(.25>b&&-.25<b){for(var c=b,d=1,e=b,f=0,g=1;f!=e;)c*=b,g*=-1,e=(f=e)+g*c/++d;return e}return Math.log(1+b)}});Ea("Math.expm1",function(a){return a?a:function(b){b=Number(b);if(.25>b&&-.25<b){for(var c=b,d=1,e=b,f=0;f!=e;)c*=b/++d,e=(f=e)+c;return e}return Math.exp(b)-1}});var Zh="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ha(d,e)&&(a[e]=d[e])}return a};
Ea("Object.assign",function(a){return a||Zh});
Ea("Set",function(a){function b(c){this.j=new Map;if(c){c=_.ua(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.j.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(_.ua([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||
f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;(0,_.Da)();b.prototype.add=function(c){c=0===c?0:c;this.j.set(c,c);this.size=this.j.size;return this};b.prototype["delete"]=function(c){c=this.j["delete"](c);this.size=this.j.size;return c};b.prototype.clear=function(){this.j.clear();this.size=0};b.prototype.has=function(c){return this.j.has(c)};b.prototype.entries=function(){return this.j.entries()};b.prototype.values=function(){return this.j.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.j.forEach(function(f){return c.call(d,f,f,e)})};return b});Ea("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});_.y=this||self;Ma=/^[\w+/_-]+[=]{0,2}$/;Ka=null;Va="closure_uid_"+(1E9*Math.random()>>>0);Wa=0;_.mb.prototype.Tc=!0;_.mb.prototype.j=_.ra(3);_.mb.prototype.toString=function(){return"Const{"+this.l+"}"};var lb={},kb={},Ib=new _.mb(kb,"");_.ob.prototype.Tc=!0;_.ob.prototype.j=_.ra(2);_.ob.prototype.Ef=!0;_.ob.prototype.l=_.ra(6);var nb={};_.wb.prototype.Tc=!0;_.wb.prototype.j=_.ra(1);_.wb.prototype.Ef=!0;_.wb.prototype.l=_.ra(5);_.vb={};_.xb("about:blank");a:{var $h=_.y.navigator;if($h){var ai=$h.userAgent;if(ai){_.qb=ai;break a}}_.qb=""};_.Fb.prototype.Ef=!0;_.Fb.prototype.l=_.ra(4);_.Fb.prototype.Tc=!0;_.Fb.prototype.j=_.ra(0);var Eb={};_.Hb("<!DOCTYPE html>",0);var Tb=_.Hb("",0);_.Hb("<br>",0);_.bi=ib(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Gb(Tb);return!b.parentElement});Lb[" "]=_.Pa;var ei,mi;_.ci=_.zb("Opera");_.di=_.Ab();ei=_.zb("Edge");_.Rf=_.zb("Gecko")&&!(_.sb()&&!_.zb("Edge"))&&!(_.zb("Trident")||_.zb("MSIE"))&&!_.zb("Edge");_.Sf=_.sb()&&!_.zb("Edge");_.fi=_.zb("Macintosh");_.gi=_.zb("Windows");_.hi=_.zb("Linux")||_.zb("CrOS");_.ii=_.zb("Android");_.ji=Kb();_.ki=_.zb("iPad");_.li=_.zb("iPod");
a:{var ni="",oi=function(){var a=_.qb;if(_.Rf)return/rv:([^\);]+)(\)|;)/.exec(a);if(ei)return/Edge\/([\d\.]+)/.exec(a);if(_.di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Sf)return/WebKit\/(\S+)/.exec(a);if(_.ci)return/(?:Version)[ \/]?(\S+)/.exec(a)}();oi&&(ni=oi?oi[1]:"");if(_.di){var pi=Ob();if(null!=pi&&pi>parseFloat(ni)){mi=String(pi);break a}}mi=ni}var Pb=mi,Mb={},qi;var ri=_.y.document;qi=ri&&_.di?Ob()||("CSS1Compat"==ri.compatMode?parseInt(Pb,10):5):void 0;var wi;_.si=_.Bb();_.ti=Kb()||_.zb("iPod");_.ui=_.zb("iPad");_.vi=_.Cb();wi=_.Db()&&!(Kb()||_.zb("iPad")||_.zb("iPod"));_.xi={td:null,Xd:null,jf:null,Ze:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"};_.xi.Bg=_.xi.Ze+"+/=";_.xi.Cg=_.xi.Ze+"-_.";_.xi.yg=_.Rf||_.Sf&&!wi||_.ci;_.xi.bj=_.xi.yg||"function"==typeof _.y.btoa;_.xi.aj=_.xi.yg||!wi&&!_.di&&"function"==typeof _.y.atob;
_.xi.ae=function(a,b){_.Sa(a);_.xi.Mh();b=b?_.xi.jf:_.xi.td;for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,h=d+2<a.length,k=h?a[d+2]:0,l=e>>2;e=(e&3)<<4|g>>4;g=(g&15)<<2|k>>6;k&=63;h||(k=64,f||(g=64));c.push(b[l],b[e],b[g],b[k])}return c.join("")};_.xi.fk=function(a){if(_.xi.bj)a=_.y.btoa(a);else{for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=_.xi.ae(b,void 0)}return a};
_.xi.Sj=function(a){if(_.xi.aj)return _.y.atob(a);var b="";_.xi.nf(a,function(c){b+=String.fromCharCode(c)});return b};_.xi.Tj=function(a){var b=[];_.xi.nf(a,function(c){b.push(c)});return b};_.xi.Uj=function(a){var b=a.length,c=0;"="===a[b-2]?c=2:"="===a[b-1]&&(c=1);var d=new Uint8Array(Math.ceil(3*b/4)-c),e=0;_.xi.nf(a,function(f){d[e++]=f});return d.subarray(0,e)};
_.xi.nf=function(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=_.xi.Xd[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}_.xi.Mh();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
_.xi.Mh=function(){if(!_.xi.td){_.xi.td={};_.xi.Xd={};_.xi.jf={};for(var a=0;a<_.xi.Bg.length;a++)_.xi.td[a]=_.xi.Bg.charAt(a),_.xi.Xd[_.xi.td[a]]=a,_.xi.jf[a]=_.xi.Cg.charAt(a),a>=_.xi.Ze.length&&(_.xi.Xd[_.xi.Cg.charAt(a)]=a)}};Rb.prototype.get=function(){if(0<this.l){this.l--;var a=this.j;this.j=a.next;a.next=null}else a=this.m();return a};var cc;var dc=new Rb(function(){return new Wb},function(a){a.reset()});Vb.prototype.add=function(a,b){var c=dc.get();c.set(a,b);this.l?this.l.next=c:this.j=c;this.l=c};Vb.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.l=null),a.next=null);return a};Wb.prototype.set=function(a,b){this.Qc=a;this.j=b;this.next=null};Wb.prototype.reset=function(){this.next=this.j=this.Qc=null};var Xb,Zb=!1,$b=new Vb;var He="StopIteration"in _.y?_.y.StopIteration:{message:"StopIteration",stack:""};jc.prototype.next=function(){throw He;};_.B(kc,jc);kc.prototype.setPosition=function(a,b,c){if(this.node=a)this.l=_.Ja(b)?b:1!=this.node.nodeType?0:this.j?-1:1;_.Ja(c)&&(this.depth=c)};
kc.prototype.next=function(){if(this.m){if(!this.node||this.A&&0==this.depth)throw He;var a=this.node;var b=this.j?-1:1;if(this.l==b){var c=this.j?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.j?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.l*(this.j?-1:1)}else this.m=!0;a=this.node;if(!this.node)throw He;return a};kc.prototype.equals=function(a){return a.node==this.node&&(!this.node||a.l==this.l)};
kc.prototype.splice=function(a){var b=this.node,c=this.j?1:-1;this.l==c&&(this.l=-1*c,this.depth+=this.l*(this.j?-1:1));this.j=!this.j;kc.prototype.next.call(this);this.j=!this.j;c=_.Sa(arguments[0])?arguments[0]:arguments;for(var d=c.length-1;0<=d;d--)_.hc(c[d],b);_.ic(b)};_.B(lc,kc);lc.prototype.next=function(){do lc.Cb.next.call(this);while(-1==this.l);return this.node};_.rc.prototype.forEach=function(a,b){for(var c={type:"s",qc:0,Le:this.m?this.m[0]:"",Kd:!1,Nh:!1,value:null},d=1,e=this.l[1],f=2,g=1+this.Gb,h=this.j.length;g<h;){c.qc++;g==e&&(c.qc=this.l[f++],e=this.l[f++],g+=Math.ceil(Math.log10(c.qc+1)));var k=this.j.charCodeAt(g++),l=k&-33,m=c.type=yi[l];c.value=b&&b[c.qc+this.Gb];b&&null==c.value||(c.Kd=k==l,k=l-75,c.Nh=0<=l&&0<(4321&1<<k),a(c));"m"==m&&d<this.m.length&&(c.Le=this.m[d++])}};
var pc={},qc=/(\d+)/g,yi=[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"B","b",,"d","e","f","g","h","i","j","j",,"m","n","o","o","y","h","s",,"u","v","v","x","y","z"];var zi;_.Sg=new sc;zi=/'/g;sc.prototype.j=function(a,b){var c=[];uc(a,b,c);return c.join("&").replace(zi,"%27")};_.F.prototype.clear=function(){this.B.length=0};_.F.prototype.equals=function(a){return _.oc(this.B,a?(a&&a).B:null)};_.F.prototype.xi=_.ra(7);_.F.prototype.kd=_.ra(8);_.B(Cc,_.F);_.B(_.Fc,_.F);_.B(Gc,_.F);_.B(_.Hc,_.F);_.Hc.prototype.getStatus=function(){return _.wc(this,0)};var Rg;_.B(Ic,_.F);_.Eg={};_.Ai={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.Dg={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};_.B(Yc,Error);var Bi,Di;_.jd=_.fd(_.K,"not a number");Bi=_.hd(_.jd,function(a){if(isNaN(a))throw _.Zc("NaN is not an accepted value");return a});_.Ci=_.fd(_.Tc,"not a string");Di=_.fd(_.Uc,"not a boolean");_.Ei=_.L(_.jd);_.Fi=_.L(_.Ci);_.Gi=_.L(Di);_.Hi=new _.M(0,0);_.M.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.M.prototype.toString=_.M.prototype.toString;_.M.prototype.equals=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.M.prototype.equals=_.M.prototype.equals;_.M.prototype.equals=_.M.prototype.equals;_.M.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.M.prototype.Lf=_.ra(9);_.Ii=new _.O(0,0);_.O.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.O.prototype.toString=_.O.prototype.toString;_.O.prototype.equals=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.O.prototype.equals=_.O.prototype.equals;_.O.prototype.equals=_.O.prototype.equals;_.md.prototype.equals=function(a){return a?this.S==a.S&&this.T==a.T:!1};_.Ji=new _.od({yc:new _.nd(256),zc:void 0});pd.prototype.equals=function(a){return a?this.l==a.l&&this.m==a.m&&this.A==a.A&&this.C==a.C:!1};_.sd.prototype.isEmpty=function(){return!(this.V<this.aa&&this.X<this.ba)};_.sd.prototype.extend=function(a){a&&(this.V=Math.min(this.V,a.x),this.aa=Math.max(this.aa,a.x),this.X=Math.min(this.X,a.y),this.ba=Math.max(this.ba,a.y))};_.sd.prototype.getCenter=function(){return new _.M((this.V+this.aa)/2,(this.X+this.ba)/2)};_.sd.prototype.equals=function(a){return a?this.V==a.V&&this.X==a.X&&this.aa==a.aa&&this.ba==a.ba:!1};_.Ki=_.td(-Infinity,-Infinity,Infinity,Infinity);_.td(0,0,0,0);var ud=_.ad({lat:_.jd,lng:_.jd},!0);_.P.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.P.prototype.toString=_.P.prototype.toString;_.P.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.P.prototype.toJSON=_.P.prototype.toJSON;_.P.prototype.equals=function(a){return a?_.Oc(this.lat(),a.lat())&&_.Oc(this.lng(),a.lng()):!1};_.P.prototype.equals=_.P.prototype.equals;_.P.prototype.equals=_.P.prototype.equals;
_.P.prototype.toUrlValue=function(a){a=_.t(a)?a:6;return xd(this.lat(),a)+","+xd(this.lng(),a)};_.P.prototype.toUrlValue=_.P.prototype.toUrlValue;_.ff=_.ed(_.yd);_.p=zd.prototype;_.p.isEmpty=function(){return 360==this.j-this.l};_.p.intersects=function(a){var b=this.j,c=this.l;return this.isEmpty()||a.isEmpty()?!1:_.Ad(this)?_.Ad(a)||a.j<=this.l||a.l>=b:_.Ad(a)?a.j<=c||a.l>=b:a.j<=c&&a.l>=b};_.p.contains=function(a){-180==a&&(a=180);var b=this.j,c=this.l;return _.Ad(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.p.extend=function(a){this.contains(a)||(this.isEmpty()?this.j=this.l=a:_.Bd(a,this.j)<_.Bd(this.l,a)?this.j=a:this.l=a)};
_.p.equals=function(a){return 1E-9>=Math.abs(a.j-this.j)%360+Math.abs(_.Cd(a)-_.Cd(this))};_.p.center=function(){var a=(this.j+this.l)/2;_.Ad(this)&&(a=_.Nc(a+180,-180,180));return a};_.p=Dd.prototype;_.p.isEmpty=function(){return this.j>this.l};_.p.intersects=function(a){var b=this.j,c=this.l;return b<=a.j?a.j<=c&&a.j<=a.l:b<=a.l&&b<=c};_.p.contains=function(a){return a>=this.j&&a<=this.l};_.p.extend=function(a){this.isEmpty()?this.l=this.j=a:a<this.j?this.j=a:a>this.l&&(this.l=a)};
_.p.equals=function(a){return this.isEmpty()?a.isEmpty():1E-9>=Math.abs(a.j-this.j)+Math.abs(this.l-a.l)};_.p.center=function(){return(this.l+this.j)/2};_.Q.prototype.getCenter=function(){return new _.P(this.na.center(),this.ia.center())};_.Q.prototype.getCenter=_.Q.prototype.getCenter;_.Q.prototype.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.Q.prototype.toString=_.Q.prototype.toString;_.Q.prototype.toJSON=function(){return{south:this.na.j,west:this.ia.j,north:this.na.l,east:this.ia.l}};_.Q.prototype.toJSON=_.Q.prototype.toJSON;
_.Q.prototype.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};_.Q.prototype.toUrlValue=_.Q.prototype.toUrlValue;_.Q.prototype.equals=function(a){if(!a)return!1;a=_.Gd(a);return this.na.equals(a.na)&&this.ia.equals(a.ia)};_.Q.prototype.equals=_.Q.prototype.equals;_.Q.prototype.equals=_.Q.prototype.equals;_.Q.prototype.contains=function(a){a=_.yd(a);return this.na.contains(a.lat())&&this.ia.contains(a.lng())};
_.Q.prototype.contains=_.Q.prototype.contains;_.Q.prototype.intersects=function(a){a=_.Gd(a);return this.na.intersects(a.na)&&this.ia.intersects(a.ia)};_.Q.prototype.intersects=_.Q.prototype.intersects;_.Q.prototype.extend=function(a){a=_.yd(a);this.na.extend(a.lat());this.ia.extend(a.lng());return this};_.Q.prototype.extend=_.Q.prototype.extend;_.Q.prototype.union=function(a){a=_.Gd(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};
_.Q.prototype.union=_.Q.prototype.union;_.Q.prototype.getSouthWest=function(){return new _.P(this.na.j,this.ia.j,!0)};_.Q.prototype.getSouthWest=_.Q.prototype.getSouthWest;_.Q.prototype.getNorthEast=function(){return new _.P(this.na.l,this.ia.l,!0)};_.Q.prototype.getNorthEast=_.Q.prototype.getNorthEast;_.Q.prototype.toSpan=function(){var a=this.na;a=a.isEmpty()?0:a.l-a.j;return new _.P(a,_.Cd(this.ia),!0)};_.Q.prototype.toSpan=_.Q.prototype.toSpan;
_.Q.prototype.isEmpty=function(){return this.na.isEmpty()||this.ia.isEmpty()};_.Q.prototype.isEmpty=_.Q.prototype.isEmpty;var Fd=_.ad({south:_.jd,west:_.jd,north:_.jd,east:_.jd},!1);_.R={addListener:function(a,b,c){return new Qd(a,b,c,0)}};_.bb("module$contents$MapsEvent_MapsEvent.addListener",_.R.addListener);_.R.hasListeners=function(a,b){if(!a)return!1;b=(a=a.__e3_)&&a[b];return!!b&&!_.jb(b)};_.R.removeListener=function(a){a&&a.remove()};_.bb("module$contents$MapsEvent_MapsEvent.removeListener",_.R.removeListener);_.R.clearListeners=function(a,b){_.Kc(Md(a,b),function(c,d){d&&d.remove()})};_.bb("module$contents$MapsEvent_MapsEvent.clearListeners",_.R.clearListeners);
_.R.clearInstanceListeners=function(a){_.Kc(Md(a),function(b,c){c&&c.remove()})};_.bb("module$contents$MapsEvent_MapsEvent.clearInstanceListeners",_.R.clearInstanceListeners);_.R.trigger=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];if(_.R.hasListeners(a,b)){e=Md(a,b);for(var f in e){var g=e[f];g&&g.A(d)}}};_.bb("module$contents$MapsEvent_MapsEvent.trigger",_.R.trigger);
_.R.addDomListener=function(a,b,c,d){var e=d?4:1;if(!a.addEventListener&&a.attachEvent)return c=new Qd(a,b,c,2),a.attachEvent("on"+b,Rd(c)),c;a.addEventListener&&a.addEventListener(b,c,d);return new Qd(a,b,c,e)};_.bb("module$contents$MapsEvent_MapsEvent.addDomListener",_.R.addDomListener);_.R.addDomListenerOnce=function(a,b,c,d){var e=_.R.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};_.bb("module$contents$MapsEvent_MapsEvent.addDomListenerOnce",_.R.addDomListenerOnce);
_.R.pa=function(a,b,c,d){return _.R.addDomListener(a,b,Nd(c,d))};_.R.bind=function(a,b,c,d){return _.R.addListener(a,b,(0,_.z)(d,c))};_.R.addListenerOnce=function(a,b,c){var d=_.R.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.bb("module$contents$MapsEvent_MapsEvent.addListenerOnce",_.R.addListenerOnce);_.R.ma=function(a,b,c){b=_.R.addListener(a,b,c);c.call(a);return b};_.R.forward=function(a,b,c){return _.R.addListener(a,b,Od(b,c))};
_.R.Rc=function(a,b,c,d){_.R.addDomListener(a,b,Od(b,c,!d))};var Pd=0;Qd.prototype.remove=function(){if(this.l){if(this.l.removeEventListener)switch(this.C){case 1:this.l.removeEventListener(this.m,this.j,!1);break;case 4:this.l.removeEventListener(this.m,this.j,!0)}delete Ld(this.l,this.m)[this.id];this.j=this.l=null}};Qd.prototype.A=function(a){return this.j.apply(this.l,a)};_.S.prototype.get=function(a){var b=Xd(this);a+="";b=Vc(b,a);if(_.t(b)){if(b){a=b.tb;b=b.Xc;var c="get"+_.Wd(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.S.prototype.get=_.S.prototype.get;_.S.prototype.set=function(a,b){var c=Xd(this);a+="";var d=Vc(c,a);if(d)if(a=d.tb,d=d.Xc,c="set"+_.Wd(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,Ud(this,a)};_.S.prototype.set=_.S.prototype.set;_.S.prototype.notify=function(a){var b=Xd(this);a+="";(b=Vc(b,a))?b.Xc.notify(b.tb):Ud(this,a)};
_.S.prototype.notify=_.S.prototype.notify;_.S.prototype.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.Wd(b);if(this[d])this[d](c);else this.set(b,c)}};_.S.prototype.setValues=_.S.prototype.setValues;_.S.prototype.setOptions=_.S.prototype.setValues;_.S.prototype.changed=_.n();var Vd={};_.S.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Xc:this,tb:a},f={Xc:b,tb:c,Wg:e};Xd(this)[a]=f;Td(b,c)[_.Sd(e)]=e;d||Ud(this,a)};_.S.prototype.bindTo=_.S.prototype.bindTo;
_.S.prototype.unbind=function(a){var b=Xd(this),c=b[a];c&&(c.Wg&&delete Td(c.Xc,c.tb)[_.Sd(c.Wg)],this[a]=this.get(a),b[a]=null)};_.S.prototype.unbind=_.S.prototype.unbind;_.S.prototype.unbindAll=function(){var a=(0,_.z)(this.unbind,this),b=Xd(this),c;for(c in b)a(c)};_.S.prototype.unbindAll=_.S.prototype.unbindAll;_.S.prototype.addListener=function(a,b){return _.R.addListener(this,a,b)};_.S.prototype.addListener=_.S.prototype.addListener;_.Yd.prototype.addListener=function(a,b,c){c=c?{dh:!1}:null;var d=!this.W.length,e=this.W.find(ae(a,b));e?e.once=e.once&&c:this.W.push({Qc:a,context:b||null,once:c});d&&this.l();return a};_.Yd.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};_.Yd.prototype.removeListener=function(a,b){if(this.W.length){var c=this.W;a=_.eb(c,ae(a,b),void 0);0<=a&&_.fb(c,a);this.W.length||this.j()}};var Zd=null;_.p=_.be.prototype;_.p.Fd=_.n();_.p.Ed=_.n();_.p.addListener=function(a,b){return this.W.addListener(a,b)};_.p.addListenerOnce=function(a,b){return this.W.addListenerOnce(a,b)};_.p.removeListener=function(a,b){return this.W.removeListener(a,b)};_.p.ma=function(a,b){this.W.addListener(a,b);a.call(b,this.get())};_.p.notify=function(a){_.$d(this.W,function(b){b(this.get())},this,a)};_.B(_.ge,_.S);_.ge.prototype.getAt=function(a){return this.j[a]};_.ge.prototype.getAt=_.ge.prototype.getAt;_.ge.prototype.indexOf=function(a){for(var b=0,c=this.j.length;b<c;++b)if(a===this.j[b])return b;return-1};_.ge.prototype.forEach=function(a){for(var b=0,c=this.j.length;b<c;++b)a(this.j[b],b)};_.ge.prototype.forEach=_.ge.prototype.forEach;
_.ge.prototype.setAt=function(a,b){var c=this.j[a],d=this.j.length;if(a<d)this.j[a]=b,_.R.trigger(this,"set_at",a,c),this.A&&this.A(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};_.ge.prototype.setAt=_.ge.prototype.setAt;_.ge.prototype.insertAt=function(a,b){this.j.splice(a,0,b);fe(this);_.R.trigger(this,"insert_at",a);this.l&&this.l(a)};_.ge.prototype.insertAt=_.ge.prototype.insertAt;
_.ge.prototype.removeAt=function(a){var b=this.j[a];this.j.splice(a,1);fe(this);_.R.trigger(this,"remove_at",a,b);this.m&&this.m(a,b);return b};_.ge.prototype.removeAt=_.ge.prototype.removeAt;_.ge.prototype.push=function(a){this.insertAt(this.j.length,a);return this.j.length};_.ge.prototype.push=_.ge.prototype.push;_.ge.prototype.pop=function(){return this.removeAt(this.j.length-1)};_.ge.prototype.pop=_.ge.prototype.pop;_.ge.prototype.getArray=_.oa("j");_.ge.prototype.getArray=_.ge.prototype.getArray;
_.ge.prototype.clear=function(){for(;this.get("length");)this.pop()};_.ge.prototype.clear=_.ge.prototype.clear;_.ee(_.ge.prototype,{length:null});_.he.prototype.remove=function(a){var b=this.l,c=_.Sd(a);b[c]&&(delete b[c],--this.m,_.R.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.he.prototype.contains=function(a){return!!this.l[_.Sd(a)]};_.he.prototype.forEach=function(a){var b=this.l,c;for(c in b)a.call(this,b[c])};_.je.prototype.Bb=function(a){a=_.ke(this,a);return a.length<this.j.length?new _.je(a):this};_.je.prototype.forEach=function(a,b){_.C(this.j,function(c,d){a.call(b,c,d)})};var Li=_.ad({zoom:_.L(Bi),heading:Bi,pitch:Bi});_.B(_.me,_.be);_.me.prototype.set=function(a){this.C&&this.get()===a||(this.ki(a),this.notify())};_.B(_.ne,_.me);_.ne.prototype.get=_.oa("j");_.ne.prototype.ki=_.na("j");_.B(_.pe,_.S);_.B(qe,_.S);_.B(re,_.S);re.prototype.set=function(a,b){if(null!=b&&!(b&&_.K(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Oczekiwana warto\u015b\u0107 podczas implementacji google.maps.MapType");return _.S.prototype.set.apply(this,arguments)};re.prototype.set=re.prototype.set;_.B(_.se,_.S);var Qh=_.ad({center:function(a){return _.yd(a)},radius:_.jd},!0);/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var te="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var we,xe;we={0:"",1:"msie",3:"chrome",4:"applewebkit",5:"firefox",6:"trident",7:"mozilla",2:"edge"};xe={0:"",1:"x11",2:"macintosh",3:"windows",4:"android",5:"iphone",6:"ipad"};_.ze=null;"undefined"!=typeof navigator&&(_.ze=new ye);Ae.prototype.l=ib(function(){var a=new Image;return _.t(a.crossOrigin)});Ae.prototype.m=ib(function(){return _.t(document.createElement("span").draggable)});_.Mi=_.ze?new Ae:null;_.Ni=_.ze?new Ce:null;_.Oi=new WeakMap;_.B(_.Je,Ie);_.Je.prototype.getType=_.pa("Point");_.Je.prototype.getType=_.Je.prototype.getType;_.Je.prototype.forEachLatLng=function(a){a(this.j)};_.Je.prototype.forEachLatLng=_.Je.prototype.forEachLatLng;_.Je.prototype.get=_.oa("j");_.Je.prototype.get=_.Je.prototype.get;var df=_.ed(Ke);Pe.prototype.ac=function(a,b){if(!this.j[a]){var c=this,d=c.D;Te(c.m,function(e){for(var f=e.j[a]||[],g=e.A[a]||[],h=d[a]=Ye(f.length,function(){delete d[a];b(e.l);for(var m=c.l[a],q=m?m.length:0,r=0;r<q;++r)m[r].Hb(c.j[a]);delete c.l[a];r=0;for(m=g.length;r<m;++r)q=g[r],d[q]&&d[q]()}),k=0,l=f.length;k<l;++k)c.j[f[k]]&&h()})}};Pe.l=void 0;Pe.j=function(){return Pe.l?Pe.l:Pe.l=new Pe};_.$e.prototype.getId=_.oa("m");_.$e.prototype.getId=_.$e.prototype.getId;_.$e.prototype.getGeometry=_.oa("j");_.$e.prototype.getGeometry=_.$e.prototype.getGeometry;_.$e.prototype.setGeometry=function(a){var b=this.j;try{this.j=a?Ke(a):null}catch(c){_.$c(c);return}_.R.trigger(this,"setgeometry",{feature:this,newGeometry:this.j,oldGeometry:b})};_.$e.prototype.setGeometry=_.$e.prototype.setGeometry;_.$e.prototype.getProperty=function(a){return Vc(this.l,a)};_.$e.prototype.getProperty=_.$e.prototype.getProperty;
_.$e.prototype.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.l[a]=b;_.R.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};_.$e.prototype.setProperty=_.$e.prototype.setProperty;_.$e.prototype.removeProperty=function(a){var b=this.getProperty(a);delete this.l[a];_.R.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.$e.prototype.removeProperty=_.$e.prototype.removeProperty;
_.$e.prototype.forEachProperty=function(a){for(var b in this.l)a(this.getProperty(b),b)};_.$e.prototype.forEachProperty=_.$e.prototype.forEachProperty;_.$e.prototype.toGeoJson=function(a){var b=this;_.T("data").then(function(c){c.m(b,a)})};_.$e.prototype.toGeoJson=_.$e.prototype.toGeoJson;var Pi={vn:"Point",tn:"LineString",POLYGON:"Polygon"};var Qi={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.p=af.prototype;_.p.contains=function(a){return this.j.hasOwnProperty(_.Sd(a))};_.p.getFeatureById=function(a){return Vc(this.l,a)};
_.p.add=function(a){a=a||{};a=a instanceof _.$e?a:new _.$e(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Sd(a);this.j[c]=a;b&&(this.l[b]=a);var d=_.R.forward(a,"setgeometry",this),e=_.R.forward(a,"setproperty",this),f=_.R.forward(a,"removeproperty",this);this.m[c]=function(){_.R.removeListener(d);_.R.removeListener(e);_.R.removeListener(f)};_.R.trigger(this,"addfeature",{feature:a})}return a};
_.p.remove=function(a){var b=_.Sd(a),c=a.getId();if(this.j[b]){delete this.j[b];c&&delete this.l[c];if(c=this.m[b])delete this.m[b],c();_.R.trigger(this,"removefeature",{feature:a})}};_.p.forEach=function(a){for(var b in this.j)a(this.j[b])};_.rf="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");bf.prototype.get=function(a){return this.j[a]};bf.prototype.set=function(a,b){var c=this.j;c[a]||(c[a]={});_.Lc(c[a],b);_.R.trigger(this,"changed",a)};bf.prototype.reset=function(a){delete this.j[a];_.R.trigger(this,"changed",a)};bf.prototype.forEach=function(a){_.Kc(this.j,a)};_.B(cf,_.S);cf.prototype.overrideStyle=function(a,b){this.j.set(_.Sd(a),b)};cf.prototype.revertStyle=function(a){a?this.j.reset(_.Sd(a)):this.j.forEach((0,_.z)(this.j.reset,this.j))};_.B(_.ef,Ie);_.ef.prototype.getType=_.pa("GeometryCollection");_.ef.prototype.getType=_.ef.prototype.getType;_.ef.prototype.getLength=function(){return this.j.length};_.ef.prototype.getLength=_.ef.prototype.getLength;_.ef.prototype.getAt=function(a){return this.j[a]};_.ef.prototype.getAt=_.ef.prototype.getAt;_.ef.prototype.getArray=function(){return this.j.slice()};_.ef.prototype.getArray=_.ef.prototype.getArray;_.ef.prototype.forEachLatLng=function(a){this.j.forEach(function(b){b.forEachLatLng(a)})};
_.ef.prototype.forEachLatLng=_.ef.prototype.forEachLatLng;_.B(_.gf,Ie);_.gf.prototype.getType=_.pa("LineString");_.gf.prototype.getType=_.gf.prototype.getType;_.gf.prototype.getLength=function(){return this.j.length};_.gf.prototype.getLength=_.gf.prototype.getLength;_.gf.prototype.getAt=function(a){return this.j[a]};_.gf.prototype.getAt=_.gf.prototype.getAt;_.gf.prototype.getArray=function(){return this.j.slice()};_.gf.prototype.getArray=_.gf.prototype.getArray;_.gf.prototype.forEachLatLng=function(a){this.j.forEach(a)};_.gf.prototype.forEachLatLng=_.gf.prototype.forEachLatLng;
var jf=_.ed(_.cd(_.gf,"google.maps.Data.LineString",!0));_.B(_.hf,Ie);_.hf.prototype.getType=_.pa("LinearRing");_.hf.prototype.getType=_.hf.prototype.getType;_.hf.prototype.getLength=function(){return this.j.length};_.hf.prototype.getLength=_.hf.prototype.getLength;_.hf.prototype.getAt=function(a){return this.j[a]};_.hf.prototype.getAt=_.hf.prototype.getAt;_.hf.prototype.getArray=function(){return this.j.slice()};_.hf.prototype.getArray=_.hf.prototype.getArray;_.hf.prototype.forEachLatLng=function(a){this.j.forEach(a)};_.hf.prototype.forEachLatLng=_.hf.prototype.forEachLatLng;
var mf=_.ed(_.cd(_.hf,"google.maps.Data.LinearRing",!0));_.B(_.kf,Ie);_.kf.prototype.getType=_.pa("MultiLineString");_.kf.prototype.getType=_.kf.prototype.getType;_.kf.prototype.getLength=function(){return this.j.length};_.kf.prototype.getLength=_.kf.prototype.getLength;_.kf.prototype.getAt=function(a){return this.j[a]};_.kf.prototype.getAt=_.kf.prototype.getAt;_.kf.prototype.getArray=function(){return this.j.slice()};_.kf.prototype.getArray=_.kf.prototype.getArray;_.kf.prototype.forEachLatLng=function(a){this.j.forEach(function(b){b.forEachLatLng(a)})};
_.kf.prototype.forEachLatLng=_.kf.prototype.forEachLatLng;_.B(_.lf,Ie);_.lf.prototype.getType=_.pa("MultiPoint");_.lf.prototype.getType=_.lf.prototype.getType;_.lf.prototype.getLength=function(){return this.j.length};_.lf.prototype.getLength=_.lf.prototype.getLength;_.lf.prototype.getAt=function(a){return this.j[a]};_.lf.prototype.getAt=_.lf.prototype.getAt;_.lf.prototype.getArray=function(){return this.j.slice()};_.lf.prototype.getArray=_.lf.prototype.getArray;_.lf.prototype.forEachLatLng=function(a){this.j.forEach(a)};_.lf.prototype.forEachLatLng=_.lf.prototype.forEachLatLng;_.B(_.nf,Ie);_.nf.prototype.getType=_.pa("Polygon");_.nf.prototype.getType=_.nf.prototype.getType;_.nf.prototype.getLength=function(){return this.j.length};_.nf.prototype.getLength=_.nf.prototype.getLength;_.nf.prototype.getAt=function(a){return this.j[a]};_.nf.prototype.getAt=_.nf.prototype.getAt;_.nf.prototype.getArray=function(){return this.j.slice()};_.nf.prototype.getArray=_.nf.prototype.getArray;_.nf.prototype.forEachLatLng=function(a){this.j.forEach(function(b){b.forEachLatLng(a)})};
_.nf.prototype.forEachLatLng=_.nf.prototype.forEachLatLng;var of=_.ed(_.cd(_.nf,"google.maps.Data.Polygon",!0));_.B(_.pf,Ie);_.pf.prototype.getType=_.pa("MultiPolygon");_.pf.prototype.getType=_.pf.prototype.getType;_.pf.prototype.getLength=function(){return this.j.length};_.pf.prototype.getLength=_.pf.prototype.getLength;_.pf.prototype.getAt=function(a){return this.j[a]};_.pf.prototype.getAt=_.pf.prototype.getAt;_.pf.prototype.getArray=function(){return this.j.slice()};_.pf.prototype.getArray=_.pf.prototype.getArray;_.pf.prototype.forEachLatLng=function(a){this.j.forEach(function(b){b.forEachLatLng(a)})};
_.pf.prototype.forEachLatLng=_.pf.prototype.forEachLatLng;_.Ri=_.L(_.cd(_.se,"Map"));_.B(sf,_.S);sf.prototype.contains=function(a){return this.j.contains(a)};sf.prototype.contains=sf.prototype.contains;sf.prototype.getFeatureById=function(a){return this.j.getFeatureById(a)};sf.prototype.getFeatureById=sf.prototype.getFeatureById;sf.prototype.add=function(a){return this.j.add(a)};sf.prototype.add=sf.prototype.add;sf.prototype.remove=function(a){this.j.remove(a)};sf.prototype.remove=sf.prototype.remove;sf.prototype.forEach=function(a){this.j.forEach(a)};sf.prototype.forEach=sf.prototype.forEach;
sf.prototype.addGeoJson=function(a,b){return _.qf(this.j,a,b)};sf.prototype.addGeoJson=sf.prototype.addGeoJson;sf.prototype.loadGeoJson=function(a,b,c){var d=this.j;_.T("data").then(function(e){e.A(d,a,b,c)})};sf.prototype.loadGeoJson=sf.prototype.loadGeoJson;sf.prototype.toGeoJson=function(a){var b=this.j;_.T("data").then(function(c){c.l(b,a)})};sf.prototype.toGeoJson=sf.prototype.toGeoJson;sf.prototype.overrideStyle=function(a,b){this.l.overrideStyle(a,b)};sf.prototype.overrideStyle=sf.prototype.overrideStyle;
sf.prototype.revertStyle=function(a){this.l.revertStyle(a)};sf.prototype.revertStyle=sf.prototype.revertStyle;sf.prototype.controls_changed=function(){this.get("controls")&&tf(this)};sf.prototype.drawingMode_changed=function(){this.get("drawingMode")&&tf(this)};_.ee(sf.prototype,{map:_.Ri,style:_.hb,controls:_.L(_.ed(_.dd(Pi))),controlPosition:_.L(_.dd(_.Dg)),drawingMode:_.L(_.dd(Pi))});_.Si={METRIC:0,IMPERIAL:1};_.Ti={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Ui={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Vi={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Wi={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Xi=_.ad({routes:_.ed(_.fd(_.Sc))},!0);var Qe={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],imagery_viewer:["main"],geometry:["main"],discovery:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var Yi=_.y.google.maps,Zi=Pe.j(),$i=(0,_.z)(Zi.ac,Zi);Yi.__gjsload__=$i;_.Kc(Yi.modules,$i);delete Yi.modules;var aj=_.ad({source:_.Ci,webUrl:_.Fi,iosDeepLinkId:_.Fi});var bj=_.hd(_.ad({placeId:_.Fi,query:_.Fi,location:_.yd}),function(a){if(a.placeId&&a.query)throw _.Zc("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Zc("must set one of placeId or query");return a});_.B(xf,_.S);
_.ee(xf.prototype,{position:_.L(_.yd),title:_.Fi,icon:_.L(_.gd([_.Ci,{xg:id("url"),then:_.ad({url:_.Ci,scaledSize:_.L(ld),size:_.L(ld),origin:_.L(kd),anchor:_.L(kd),labelOrigin:_.L(kd),path:_.fd(function(a){return null==a})},!0)},{xg:id("path"),then:_.ad({path:_.gd([_.Ci,_.dd(Qi)]),anchor:_.L(kd),labelOrigin:_.L(kd),fillColor:_.Fi,fillOpacity:_.Ei,rotation:_.Ei,scale:_.Ei,strokeColor:_.Fi,strokeOpacity:_.Ei,strokeWeight:_.Ei,url:_.fd(function(a){return null==a})},!0)}])),label:_.L(_.gd([_.Ci,{xg:id("text"),
then:_.ad({text:_.Ci,fontSize:_.Fi,fontWeight:_.Fi,fontFamily:_.Fi},!0)}])),shadow:_.hb,shape:_.hb,cursor:_.Fi,clickable:_.Gi,animation:_.hb,draggable:_.Gi,visible:_.Gi,flat:_.hb,zIndex:_.Ei,opacity:_.Ei,place:_.L(bj),attribution:_.L(aj)});var cj=_.L(_.cd(_.pe,"StreetViewPanorama"));_.B(_.yf,xf);_.yf.prototype.map_changed=function(){var a=this.get("map");a=a&&a.__gm.fa;this.__gm.set!==a&&(this.__gm.set&&this.__gm.set.remove(this),(this.__gm.set=a)&&_.ie(a,this))};_.yf.MAX_ZINDEX=1E6;_.ee(_.yf.prototype,{map:_.gd([_.Ri,cj])});_.B(zf,_.S);_.p=zf.prototype;_.p.internalAnchor_changed=function(){var a=this.get("internalAnchor");Af(this,"attribution",a);Af(this,"place",a);Af(this,"internalAnchorMap",a,"map");Af(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.yf?Af(this,"internalAnchorPosition",a,"internalPosition"):Af(this,"internalAnchorPosition",a,"position")};
_.p.internalAnchorPoint_changed=zf.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.Hi,b=this.get("internalPixelOffset")||_.Ii;this.set("pixelOffset",new _.O(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.p.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.p.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.j.set("map",this.get("internalAnchorMap"))};
_.p.El=function(){var a=this.get("internalAnchor");!this.j.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.p.internalContent_changed=function(){this.set("content",uf(this.get("internalContent")))};_.p.trigger=function(a){_.R.trigger(this.j,a)};_.p.close=function(){this.j.set("map",null)};_.B(_.Bf,_.S);_.ee(_.Bf.prototype,{content:_.gd([_.Fi,_.fd(bd)]),position:_.L(_.yd),size:_.L(ld),map:_.gd([_.Ri,cj]),anchor:_.L(_.cd(_.S,"MVCObject")),zIndex:_.Ei});_.Bf.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Bf.prototype.open=_.Bf.prototype.open;_.Bf.prototype.close=function(){this.set("map",null)};_.Bf.prototype.close=_.Bf.prototype.close;_.Cf=[];_.B(Ef,_.S);Ef.prototype.changed=function(a){var b=this;"map"!=a&&"panel"!=a||_.T("directions").then(function(c){c.Kk(b,a)});"panel"==a&&_.Df(this.getPanel())};_.ee(Ef.prototype,{directions:Xi,map:_.Ri,panel:_.L(_.fd(bd)),routeIndex:_.Ei});Ff.prototype.route=function(a,b){_.T("directions").then(function(c){c.hi(a,b,!0)})};Ff.prototype.route=Ff.prototype.route;Gf.prototype.getDistanceMatrix=function(a,b){_.T("distance_matrix").then(function(c){c.j(a,b)})};Gf.prototype.getDistanceMatrix=Gf.prototype.getDistanceMatrix;Hf.prototype.getElevationAlongPath=function(a,b){_.T("elevation").then(function(c){c.getElevationAlongPath(a,b)})};Hf.prototype.getElevationAlongPath=Hf.prototype.getElevationAlongPath;Hf.prototype.getElevationForLocations=function(a,b){_.T("elevation").then(function(c){c.getElevationForLocations(a,b)})};Hf.prototype.getElevationForLocations=Hf.prototype.getElevationForLocations;_.dj=_.cd(_.Q,"LatLngBounds");If.prototype.geocode=function(a,b){_.T("geocoder").then(function(c){c.geocode(a,b)})};If.prototype.geocode=If.prototype.geocode;_.B(_.Jf,_.S);_.Jf.prototype.map_changed=function(){var a=this;_.T("kml").then(function(b){b.j(a)})};_.ee(_.Jf.prototype,{map:_.Ri,url:null,bounds:null,opacity:_.Ei});_.ej={UNKNOWN:"UNKNOWN",OK:_.ha,INVALID_REQUEST:_.ba,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.B(Kf,_.S);Kf.prototype.D=function(){var a=this;_.T("kml").then(function(b){b.l(a)})};Kf.prototype.url_changed=Kf.prototype.D;Kf.prototype.map_changed=Kf.prototype.D;Kf.prototype.zIndex_changed=Kf.prototype.D;_.ee(Kf.prototype,{map:_.Ri,defaultViewport:null,metadata:null,status:null,url:_.Fi,screenOverlays:_.Gi,zIndex:_.Ei});_.Lf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.M(0,0);var c=this.j;b.x=c.x+a.lng()*this.m;a=_.Mc(Math.sin(_.ec(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.A;return b};_.Lf.prototype.fromPointToLatLng=function(a,b){var c=this.j;return new _.P(_.fc(2*Math.atan(Math.exp((a.y-c.y)/-this.A))-Math.PI/2),(a.x-c.x)/this.m,b)};_.fj=Math.sqrt(2);_.gj=new _.Lf;_.B(_.Mf,_.S);_.ee(_.Mf.prototype,{map:_.Ri});_.B(Nf,_.S);_.ee(Nf.prototype,{map:_.Ri});_.B(Of,_.S);_.ee(Of.prototype,{map:_.Ri});_.Pf.prototype.D=!1;_.Pf.prototype.dispose=function(){this.D||(this.D=!0,this.jb())};_.Pf.prototype.jb=function(){if(this.F)for(;this.F.length;)this.F.shift()()};_.Qf.prototype.stopPropagation=function(){this.j=!0};_.Qf.prototype.preventDefault=function(){this.defaultPrevented=!0;this.fi=!1};var mg=!_.di||9<=Number(qi),hj=_.di&&!_.Qb("9"),ig=function(){if(!_.y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{_.y.addEventListener("test",_.Pa,b),_.y.removeEventListener("test",_.Pa,b)}catch(c){}return a}();_.B(_.Uf,_.Qf);var Tf={2:"touch",3:"pen",4:"mouse"};_.Uf.prototype.stopPropagation=function(){_.Uf.Cb.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};_.Uf.prototype.preventDefault=function(){_.Uf.Cb.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,hj)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var dg="closure_listenable_"+(1E6*Math.random()|0),Vf=0;Yf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.j++);var g=$f(a,b,d,e);-1<g?(b=a[g],c||(b.Vd=!1)):(b=new Wf(b,this.src,f,!!d,e),b.Vd=c,a.push(b));return b};Yf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$f(e,b,c,d);return-1<b?(Xf(e[b]),_.fb(e,b),0==e.length&&(delete this.listeners[a],this.j--),!0):!1};var gg="closure_lm_"+(1E6*Math.random()|0),pg={},kg=0,ug="__closure_events_fn_"+(1E9*Math.random()>>>0);_.B(_.vg,_.Pf);_.vg.prototype[dg]=!0;_.vg.prototype.addEventListener=function(a,b,c,d){_.bg(this,a,b,c,d)};_.vg.prototype.removeEventListener=function(a,b,c,d){ng(this,a,b,c,d)};_.vg.prototype.jb=function(){_.vg.Cb.jb.call(this);if(this.A){var a=this.A,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Xf(d[e]);delete a.listeners[c];a.j--}}this.H=null};_.vg.prototype.listen=function(a,b,c,d){return this.A.add(String(a),b,!1,c,d)};_.B(_.xg,_.Pf);_.p=_.xg.prototype;_.p.Wb=0;_.p.jb=function(){_.xg.Cb.jb.call(this);this.stop();delete this.j;delete this.l};_.p.start=function(a){this.stop();this.Wb=_.wg(this.m,_.t(a)?a:this.A)};_.p.stop=function(){0!=this.Wb&&_.y.clearTimeout(this.Wb);this.Wb=0};_.p.Ma=function(){this.stop();this.Gh()};_.p.Gh=function(){this.Wb=0;this.j&&this.j.call(this.l)};_.ij=!!(_.y.requestAnimationFrame&&_.y.performance&&_.y.performance.now);_.jj=new WeakMap;_.zg.prototype.equals=function(a){return this==a||a instanceof _.zg&&this.size.L==a.size.L&&this.size.O==a.size.O&&this.heading==a.heading&&this.tilt==a.tilt};_.kj=new _.zg({L:256,O:256},0,0);_.Cg={japan_prequake:20,japan_postquake2010:24};_.lj={NEAREST:"nearest",BEST:"best"};_.mj={DEFAULT:"default",OUTDOOR:"outdoor"};_.B(Fg,_.pe);Fg.prototype.visible_changed=function(){var a=this,b=!!this.get("visible"),c=!1;this.j.get()!=b&&(this.j.set(b),c=b);b&&(this.A=this.A||new Promise(function(d){_.T("streetview").then(function(e){if(a.m)var f=a.m;d(e.Wl(a,a.j,a.D,f))})}),c&&this.A.then(function(d){return d.rm()}))};_.ee(Fg.prototype,{visible:_.Gi,pano:_.Fi,position:_.L(_.yd),pov:_.L(Li),motionTracking:Di,photographerPov:null,location:null,links:_.ed(_.fd(_.Sc)),status:null,zoom:_.Ei,enableCloseButton:_.Gi});
Fg.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{ai:a,options:b||{}})};Fg.prototype.registerPanoProvider=Fg.prototype.registerPanoProvider;Gg.prototype.register=function(a){var b=this.A;var c=b.length;if(!c||a.zIndex>=b[0].zIndex)var d=0;else if(a.zIndex>=b[c-1].zIndex){for(d=0;1<c-d;){var e=d+c>>1;a.zIndex>=b[e].zIndex?c=e:d=e}d=c}else d=c;b.splice(d,0,a)};_.B(Hg,qe);var Qg;_.B(Jg,_.F);var Pg;_.B(Kg,_.F);_.B(Lg,_.F);_.B(Mg,_.F);var Og;_.B(Ng,_.F);Ng.prototype.getZoom=function(){return _.G(this,2)};Ng.prototype.setZoom=function(a){this.B[2]=a};_.B(Zg,_.S);var $g={roadmap:0,satellite:2,hybrid:3,terrain:4},Wg={0:1,2:2,3:2,4:2};_.p=Zg.prototype;_.p.zh=_.ce("center");_.p.Lg=_.ce("zoom");_.p.af=_.ce("size");_.p.changed=function(){var a=this.zh(),b=this.Lg(),c=Ug(this),d=!!this.af();if(a&&!a.equals(this.ca)||this.K!=b||this.ja!=c||this.C!=d)this.m||_.Vg(this.l),_.yg(this.U),this.K=b,this.ja=c,this.C=d;this.ca=a};
_.p.div_changed=function(){var a=this.get("div"),b=this.j;if(a)if(b)a.appendChild(b);else{b=this.j=document.createElement("div");b.style.overflow="hidden";var c=this.l=document.createElement("img");_.R.addDomListener(b,"contextmenu",function(d){_.Id(d);_.Kd(d)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(d){_.Jd(d);_.Kd(d)};_.De(c,_.Ii);a.appendChild(b);this.U.Ma()}else b&&(_.Vg(b),this.j=null)};var dh=null;_.B(eh,_.se);eh.j=Object.freeze({latLngBounds:new _.Q(new _.P(-85,-180),new _.P(85,180)),strictBounds:!0});eh.prototype.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.F)};eh.prototype.getDiv=function(){return this.__gm.Z};eh.prototype.getDiv=eh.prototype.getDiv;eh.prototype.panBy=function(a,b){var c=this.__gm;dh?_.R.trigger(c,"panby",a,b):_.T("map").then(function(){_.R.trigger(c,"panby",a,b)})};eh.prototype.panBy=eh.prototype.panBy;
eh.prototype.panTo=function(a){var b=this.__gm;a=_.yd(a);dh?_.R.trigger(b,"panto",a):_.T("map").then(function(){_.R.trigger(b,"panto",a)})};eh.prototype.panTo=eh.prototype.panTo;eh.prototype.panToBounds=function(a,b){var c=this.__gm,d=_.Gd(a);dh?_.R.trigger(c,"pantolatlngbounds",d,b):_.T("map").then(function(){_.R.trigger(c,"pantolatlngbounds",d,b)})};eh.prototype.panToBounds=eh.prototype.panToBounds;
eh.prototype.fitBounds=function(a,b){var c=this,d=_.Gd(a);dh?dh.fitBounds(this,d,b):_.T("map").then(function(e){e.fitBounds(c,d,b)})};eh.prototype.fitBounds=eh.prototype.fitBounds;
_.ee(eh.prototype,{bounds:null,streetView:cj,center:_.L(_.yd),zoom:_.Ei,restriction:function(a){if(null==a)return null;a=_.ad({strictBounds:_.Gi,latLngBounds:_.Gd})(a);var b=a.latLngBounds;if(!(b.na.l>b.na.j))throw _.Zc("south latitude must be smaller than north latitude");if((-180==b.ia.l?180:b.ia.l)==b.ia.j)throw _.Zc("eastern longitude cannot equal western longitude");return a},mapTypeId:_.Fi,projection:null,heading:_.Ei,tilt:_.Ei,clickableIcons:Di});fh.prototype.getMaxZoomAtLatLng=function(a,b){_.T("maxzoom").then(function(c){c.getMaxZoomAtLatLng(a,b)})};fh.prototype.getMaxZoomAtLatLng=fh.prototype.getMaxZoomAtLatLng;_.B(gh,_.S);gh.prototype.changed=function(a){var b=this;"suppressInfoWindows"!=a&&"clickable"!=a&&_.T("onion").then(function(c){c.j(b)})};_.ee(gh.prototype,{map:_.Ri,tableId:_.Ei,query:_.L(_.gd([_.Ci,_.fd(_.Sc,"not an Object")]))});var nj=null;_.B(_.hh,_.S);_.hh.prototype.map_changed=function(){var a=this;nj?nj.Pg(this):_.T("overlay").then(function(b){nj=b;b.Pg(a)})};_.hh.preventMapHitsFrom=function(a){_.T("overlay").then(function(b){nj=b;b.preventMapHitsFrom(a)})};_.bb("module$contents$mapsapi$overlay$OverlayView_OverlayView.preventMapHitsFrom",_.hh.preventMapHitsFrom);_.hh.preventMapHitsAndGesturesFrom=function(a){_.T("overlay").then(function(b){nj=b;b.preventMapHitsAndGesturesFrom(a)})};
_.bb("module$contents$mapsapi$overlay$OverlayView_OverlayView.preventMapHitsAndGesturesFrom",_.hh.preventMapHitsAndGesturesFrom);_.ee(_.hh.prototype,{panes:null,projection:null,map:_.gd([_.Ri,cj])});var kh=mh(_.cd(_.P,"LatLng"));_.B(_.oh,_.S);_.oh.prototype.map_changed=_.oh.prototype.visible_changed=function(){var a=this;_.T("poly").then(function(b){b.j(a)})};_.oh.prototype.center_changed=function(){_.R.trigger(this,"bounds_changed")};_.oh.prototype.radius_changed=_.oh.prototype.center_changed;_.oh.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.K(a)){var c=this.get("map");c=c&&c.__gm.get("baseMapType");return _.Bg(b,a/_.jh(c))}return null};_.oh.prototype.getBounds=_.oh.prototype.getBounds;
_.ee(_.oh.prototype,{center:_.L(_.yd),draggable:_.Gi,editable:_.Gi,map:_.Ri,radius:_.Ei,visible:_.Gi});_.B(ph,_.S);ph.prototype.map_changed=ph.prototype.visible_changed=function(){var a=this;_.T("poly").then(function(b){b.l(a)})};ph.prototype.getPath=function(){return this.get("latLngs").getAt(0)};ph.prototype.getPath=ph.prototype.getPath;ph.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,lh(a))}catch(b){_.$c(b)}};ph.prototype.setPath=ph.prototype.setPath;_.ee(ph.prototype,{draggable:_.Gi,editable:_.Gi,map:_.Ri,visible:_.Gi});_.B(_.qh,ph);_.qh.prototype.Za=!0;_.qh.prototype.getPaths=function(){return this.get("latLngs")};_.qh.prototype.getPaths=_.qh.prototype.getPaths;_.qh.prototype.setPaths=function(a){this.set("latLngs",nh(a))};_.qh.prototype.setPaths=_.qh.prototype.setPaths;_.B(_.rh,ph);_.rh.prototype.Za=!1;_.B(_.sh,_.S);_.sh.prototype.map_changed=_.sh.prototype.visible_changed=function(){var a=this;_.T("poly").then(function(b){b.m(a)})};_.ee(_.sh.prototype,{draggable:_.Gi,editable:_.Gi,bounds:_.L(_.Gd),map:_.Ri,visible:_.Gi});_.B(th,_.S);th.prototype.map_changed=function(){var a=this;_.T("streetview").then(function(b){b.Cj(a)})};_.ee(th.prototype,{map:_.Ri});_.uh.prototype.getPanorama=function(a,b){var c=this.j||void 0;_.T("streetview").then(function(d){_.T("geometry").then(function(e){d.uk(a,b,e.computeHeading,e.computeOffset,c)})})};_.uh.prototype.getPanorama=_.uh.prototype.getPanorama;_.uh.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.uh.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.B(wh,_.S);wh.prototype.getTile=function(a,b,c){if(!a||!c)return null;var d=_.gc("DIV");c={la:a,zoom:b,nd:null};d.__gmimt=c;_.ie(this.j,d);if(this.l){var e=this.tileSize||new _.O(256,256),f=this.m(a,b);(c.nd=this.l({M:a.x,N:a.y,Y:b},e,d,f,function(){_.R.trigger(d,"load")})).setOpacity(vh(this))}return d};wh.prototype.getTile=wh.prototype.getTile;wh.prototype.releaseTile=function(a){a&&this.j.contains(a)&&(this.j.remove(a),(a=a.__gmimt.nd)&&a.release())};wh.prototype.releaseTile=wh.prototype.releaseTile;
wh.prototype.opacity_changed=function(){var a=vh(this);this.j.forEach(function(b){b.__gmimt.nd.setOpacity(a)})};wh.prototype.triggersTileLoadEvent=!0;_.ee(wh.prototype,{opacity:_.Ei});_.B(_.xh,_.S);_.xh.prototype.getTile=_.pa(null);_.xh.prototype.tileSize=new _.O(256,256);_.xh.prototype.triggersTileLoadEvent=!0;_.B(_.yh,_.xh);_.B(zh,_.S);_.ee(zh.prototype,{attribution:_.pa(!0),place:_.pa(!0)});var Nh={Animation:{BOUNCE:1,DROP:2,wn:3,un:4},BicyclingLayer:_.Mf,Circle:_.oh,ControlPosition:_.Dg,Data:sf,DirectionsRenderer:Ef,DirectionsService:Ff,DirectionsStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.ea,NOT_FOUND:_.fa},DirectionsTravelMode:_.Ti,DirectionsUnitSystem:_.Si,DistanceMatrixService:Gf,DistanceMatrixStatus:{OK:_.ha,INVALID_REQUEST:_.ba,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,UNKNOWN_ERROR:_.ka,
MAX_ELEMENTS_EXCEEDED:_.da,MAX_DIMENSIONS_EXCEEDED:_.ca},DistanceMatrixElementStatus:{OK:_.ha,NOT_FOUND:_.fa,ZERO_RESULTS:_.la},ElevationService:Hf,ElevationStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,rn:"DATA_NOT_AVAILABLE"},FusionTablesLayer:gh,Geocoder:If,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,
REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,ERROR:_.aa},GroundOverlay:_.Jf,ImageMapType:wh,InfoWindow:_.Bf,KmlLayer:Kf,KmlLayerStatus:_.ej,LatLng:_.P,LatLngBounds:_.Q,MVCArray:_.ge,MVCObject:_.S,Map:eh,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.Ai,MapTypeRegistry:re,Marker:_.yf,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},MaxZoomService:fh,MaxZoomStatus:{OK:_.ha,
ERROR:_.aa},NavigationControlStyle:{DEFAULT:0,SMALL:1,ANDROID:2,ZOOM_PAN:3,xn:4,oj:5},OverlayView:_.hh,Point:_.M,Polygon:_.qh,Polyline:_.rh,Rectangle:_.sh,SaveWidget:zh,ScaleControlStyle:{DEFAULT:0},Size:_.O,StreetViewCoverageLayer:th,StreetViewPanorama:Fg,StreetViewPreference:_.lj,StreetViewService:_.uh,StreetViewStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,ZERO_RESULTS:_.la},StreetViewSource:_.mj,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},StyledMapType:_.yh,SymbolPath:Qi,TrafficLayer:Nf,TrafficModel:_.Ui,
TransitLayer:Of,TransitMode:_.Vi,TransitRoutePreference:_.Wi,TravelMode:_.Ti,UnitSystem:_.Si,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,oj:3},event:_.R};_.Lc(sf,{Feature:_.$e,Geometry:Ie,GeometryCollection:_.ef,LineString:_.gf,LinearRing:_.hf,MultiLineString:_.kf,MultiPoint:_.lf,MultiPolygon:_.pf,Point:_.Je,Polygon:_.nf});_.Ze("main",{});var Ch=/'/g,Dh;var vf=arguments[0];window.google.maps.Load&&window.google.maps.Load(Ph);}).call(this,{});

/*!
 * Masonry PACKAGED v3.3.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */

( function( window ) {



// -------------------------- utils -------------------------- //

var slice = Array.prototype.slice;

function noop() {}

// -------------------------- definition -------------------------- //

function defineBridget( $ ) {

// bail if no jQuery
if ( !$ ) {
  return;
}

// -------------------------- addOptionMethod -------------------------- //

/**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
function addOptionMethod( PluginClass ) {
  // don't overwrite original option method
  if ( PluginClass.prototype.option ) {
    return;
  }

  // option setter
  PluginClass.prototype.option = function( opts ) {
    // bail out if not an object
    if ( !$.isPlainObject( opts ) ){
      return;
    }
    this.options = $.extend( true, this.options, opts );
  };
}

// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

/**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
function bridge( namespace, PluginClass ) {
  // add to jQuery fn namespace
  $.fn[ namespace ] = function( options ) {
    if ( typeof options === 'string' ) {
      // call plugin method when first argument is a string
      // get arguments for method
      var args = slice.call( arguments, 1 );

      for ( var i=0, len = this.length; i < len; i++ ) {
        var elem = this[i];
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( "cannot call methods on " + namespace + " prior to initialization; " +
            "attempted to call '" + options + "'" );
          continue;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
          logError( "no such method '" + options + "' for " + namespace + " instance" );
          continue;
        }

        // trigger method with arguments
        var returnValue = instance[ options ].apply( instance, args );

        // break look and return first value if provided
        if ( returnValue !== undefined ) {
          return returnValue;
        }
      }
      // return this if no return value
      return this;
    } else {
      return this.each( function() {
        var instance = $.data( this, namespace );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( this, options );
          $.data( this, namespace, instance );
        }
      });
    }
  };

}

// -------------------------- bridget -------------------------- //

/**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
$.bridget = function( namespace, PluginClass ) {
  addOptionMethod( PluginClass );
  bridge( namespace, PluginClass );
};

return $.bridget;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );
} else if ( typeof exports === 'object' ) {
  defineBridget( require('jquery') );
} else {
  // get jquery from browser global
  defineBridget( window.jQuery );
}

})( window );

/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( window );

/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter',[],function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'get-style-property/get-style-property',[],function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {



var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function onReady( event ) {
  // bail if already triggered or IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }

  trigger();
}

function trigger() {
  docReady.isReady = true;
  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  // trigger ready if page is ready
  if ( document.readyState === 'complete' ) {
    trigger();
  } else {
    // listen for events
    eventie.bind( document, 'DOMContentLoaded', onReady );
    eventie.bind( document, 'readystatechange', onReady );
    eventie.bind( window, 'load', onReady );
  }

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

/**
 * matchesSelector v1.0.3
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  

  var matchesMethod = ( function() {
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',[],function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'doc-ready/doc-ready',
      'matches-selector/matches-selector'
    ], function( docReady, matchesSelector ) {
      return factory( window, docReady, matchesSelector );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('doc-ready'),
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.docReady,
      window.matchesSelector
    );
  }

}( window, function factory( window, docReady, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- isArray ----- //
  
var objToString = Object.prototype.toString;
utils.isArray = function( obj ) {
  return objToString.call( obj ) == '[object Array]';
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( utils.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- indexOf ----- //

// index of helper cause IE8
utils.indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = utils.indexOf( ary, obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- isElement ----- //

// http://stackoverflow.com/a/384380/182183
utils.isElement = ( typeof HTMLElement == 'function' || typeof HTMLElement == 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj == 'object' &&
      obj.nodeType == 1 && typeof obj.nodeName == 'string';
  };

// ----- setText ----- //

utils.setText = ( function() {
  var setTextProperty;
  function setText( elem, text ) {
    // only check setTextProperty once
    setTextProperty = setTextProperty || ( document.documentElement.textContent !== undefined ? 'textContent' : 'innerText' );
    elem[ setTextProperty ] = text;
  }
  return setText;
})();

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !utils.isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have a selector
    if ( selector ) {
      // filter siblings
      if ( matchesSelector( elem, selector ) ) {
        ffElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        ffElems.push( childElems[j] );
      }
    } else {
      ffElems.push( elem );
    }
  }

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-option attribute
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      var jQuery = window.jQuery;
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'outlayer/item',[
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'get-style-property/get-style-property',
        'fizzy-ui-utils/utils'
      ],
      function( EventEmitter, getSize, getStyleProperty, utils ) {
        return factory( window, EventEmitter, getSize, getStyleProperty, utils );
      }
    );
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('desandro-get-style-property'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window,
      window.EventEmitter,
      window.getSize,
      window.getStyleProperty,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, EventEmitter, getSize, getStyleProperty, utils ) {


// ----- helpers ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
utils.extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  // x
  var xPadding = layoutOptions.isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = layoutOptions.isOriginLeft ? 'left' : 'right';
  var xResetProperty = layoutOptions.isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage
  x = layoutOptions.percentPosition && !layoutOptions.isHorizontal ?
    ( ( x / layoutSize.width ) * 100 ) + '%' : x + 'px';
  style[ xProperty ] = x;
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = layoutOptions.isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = layoutOptions.isOriginTop ? 'top' : 'bottom';
  var yResetProperty = layoutOptions.isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage
  y = layoutOptions.percentPosition && layoutOptions.isHorizontal ?
    ( ( y / layoutSize.height ) * 100 ) + '%' : y + 'px';
  style[ yProperty ] = y;
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( utils.toDashed( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.once( 'transitionEnd', function() {
    _this.removeElem();
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
Item.prototype.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v1.4.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'outlayer/outlayer',[
        'eventie/eventie',
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( eventie, EventEmitter, getSize, utils, Item ) {
        return factory( window, eventie, EventEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.eventie,
      window.EventEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, eventie, EventEmitter, getSize, utils, Item ) {


// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
utils.extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  utils.extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( utils.isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
Outlayer.prototype._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.emitEvent( eventName + 'Complete', [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      onComplete();
    }
  }

  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.once( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    utils.extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  // apply new options
  utils.extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/*!
 * Masonry v3.3.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'fizzy-ui-utils/utils'
      ],
      factory );
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Outlayer, getSize, utils ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = utils.indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth !== this.containerWidth;
  };

  return Masonry;

}));


/*!
 * Validator v0.9.0 for Bootstrap 3, by @1000hz
 * Copyright 2015 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),f=d.data("bs.validator");(f||"destroy"!=b)&&(f||d.data("bs.validator",f=new c(this,e)),"string"==typeof b&&f[b]())})}var c=function(b,d){this.$element=a(b),this.options=d,d.errors=a.extend({},c.DEFAULTS.errors,d.errors);for(var e in d.custom)if(!d.errors[e])throw new Error("Missing default error message for custom validator: "+e);a.extend(c.VALIDATORS,d.custom),this.$element.attr("novalidate",!0),this.toggleSubmit(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",a.proxy(this.validateInput,this)),this.$element.on("submit.bs.validator",a.proxy(this.onSubmit,this)),this.$element.find("[data-match]").each(function(){var b=a(this),c=b.data("match");a(c).on("input.bs.validator",function(){b.val()&&b.trigger("input.bs.validator")})})};c.INPUT_SELECTOR=':input:not([type="submit"], button):enabled:visible',c.DEFAULTS={delay:500,html:!1,disable:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},c.VALIDATORS={"native":function(a){var b=a[0];return b.checkValidity?b.checkValidity():!0},match:function(b){var c=b.data("match");return!b.val()||b.val()===a(c).val()},minlength:function(a){var b=a.data("minlength");return!a.val()||a.val().length>=b}},c.prototype.validateInput=function(b){var c=a(b.target),d=c.data("bs.validator.errors");if(c.is('[type="radio"]')&&(c=this.$element.find('input[name="'+c.attr("name")+'"]')),this.$element.trigger(b=a.Event("validate.bs.validator",{relatedTarget:c[0]})),!b.isDefaultPrevented()){var e=this;this.runValidators(c).done(function(f){c.data("bs.validator.errors",f),f.length?e.showErrors(c):e.clearErrors(c),d&&f.toString()===d.toString()||(b=f.length?a.Event("invalid.bs.validator",{relatedTarget:c[0],detail:f}):a.Event("valid.bs.validator",{relatedTarget:c[0],detail:d}),e.$element.trigger(b)),e.toggleSubmit(),e.$element.trigger(a.Event("validated.bs.validator",{relatedTarget:c[0]}))})}},c.prototype.runValidators=function(b){function d(a){return b.data(a+"-error")||b.data("error")||"native"==a&&b[0].validationMessage||g.errors[a]}var e=[],f=a.Deferred(),g=this.options;return b.data("bs.validator.deferred")&&b.data("bs.validator.deferred").reject(),b.data("bs.validator.deferred",f),a.each(c.VALIDATORS,a.proxy(function(a,c){if((b.data(a)||"native"==a)&&!c.call(this,b)){var f=d(a);!~e.indexOf(f)&&e.push(f)}},this)),!e.length&&b.val()&&b.data("remote")?this.defer(b,function(){var c={};c[b.attr("name")]=b.val(),a.get(b.data("remote"),c).fail(function(a,b,c){e.push(d("remote")||c)}).always(function(){f.resolve(e)})}):f.resolve(e),f.promise()},c.prototype.validate=function(){var a=this.options.delay;return this.options.delay=0,this.$element.find(c.INPUT_SELECTOR).trigger("input.bs.validator"),this.options.delay=a,this},c.prototype.showErrors=function(b){var c=this.options.html?"html":"text";this.defer(b,function(){var d=b.closest(".form-group"),e=d.find(".help-block.with-errors"),f=d.find(".form-control-feedback"),g=b.data("bs.validator.errors");g.length&&(g=a("<ul/>").addClass("list-unstyled").append(a.map(g,function(b){return a("<li/>")[c](b)})),void 0===e.data("bs.validator.originalContent")&&e.data("bs.validator.originalContent",e.html()),e.empty().append(g),d.addClass("has-error"),f.length&&f.removeClass(this.options.feedback.success)&&f.addClass(this.options.feedback.error)&&d.removeClass("has-success"))})},c.prototype.clearErrors=function(a){var b=a.closest(".form-group"),c=b.find(".help-block.with-errors"),d=b.find(".form-control-feedback");c.html(c.data("bs.validator.originalContent")),b.removeClass("has-error"),d.length&&d.removeClass(this.options.feedback.error)&&d.addClass(this.options.feedback.success)&&b.addClass("has-success")},c.prototype.hasErrors=function(){function b(){return!!(a(this).data("bs.validator.errors")||[]).length}return!!this.$element.find(c.INPUT_SELECTOR).filter(b).length},c.prototype.isIncomplete=function(){function b(){return"checkbox"===this.type?!this.checked:"radio"===this.type?!a('[name="'+this.name+'"]:checked').length:""===a.trim(this.value)}return!!this.$element.find(c.INPUT_SELECTOR).filter("[required]").filter(b).length},c.prototype.onSubmit=function(a){this.validate(),(this.isIncomplete()||this.hasErrors())&&a.preventDefault()},c.prototype.toggleSubmit=function(){if(this.options.disable){var b=a('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));b.toggleClass("disabled",this.isIncomplete()||this.hasErrors())}},c.prototype.defer=function(b,c){return c=a.proxy(c,this),this.options.delay?(window.clearTimeout(b.data("bs.validator.timeout")),void b.data("bs.validator.timeout",window.setTimeout(c,this.options.delay))):c()},c.prototype.destroy=function(){return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$element.find(c.INPUT_SELECTOR).off(".bs.validator").removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var b=a(this),c=b.data("bs.validator.timeout");window.clearTimeout(c)&&b.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var b=a(this),c=b.data("bs.validator.originalContent");b.removeData("bs.validator.originalContent").html(c)}),this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"),this.$element.find(".has-error").removeClass("has-error"),this};var d=a.fn.validator;a.fn.validator=b,a.fn.validator.Constructor=c,a.fn.validator.noConflict=function(){return a.fn.validator=d,this},a(window).on("load",function(){a('form[data-toggle="validator"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery);
$(document).ready(function () {
    "use strict";

    /***************************************************************************/
    /* NAVIGATION  */
    /***************************************************************************/

    $('.button-collapse').sideNav();

    /**************************************************************************
     SKILL BAR
     **************************************************************************/

    $(".determinate").each(function () {
        let width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });


    /**************************************************************************
     BLOG POST
     **************************************************************************/

    jQuery(window).on('load', function () {
        let $ = jQuery;
        $('.blog').masonry({
            itemSelector: '.blog-post',
            columnWidth: '.blog-post',
            percentPosition: true
        });
    });


    let height = $('.caption').height();
    if ($(window).width()) {
        $('#featured').css('height', height);
        $('#featured img').css('height', height);
    }


    /*************************************************************************
     TOOLTIP
     **************************************************************************/
    $('.tooltipped').tooltip({delay: 50});

    /**************************************************************************
     WOW INIT
     **************************************************************************/
    const wow = new WOW({mobile: false});
    wow.init();

    /***************************************************************************
     CONTACT FORM
     ***************************************************************************/

    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        // Initiate Variables With Form Content
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function (text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Sent!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass();
            });
    }

    function submitMSG(valid, msg) {
        let msgClasses;
        if (valid) {
            msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /**************************************************************************
     Projects
     **************************************************************************/
    // $('#portfolio-item').mixItUp();

    $('.sa-view-project-detail').on('click', function (event) {
        event.preventDefault();
        let href = $(this).attr('href') + ' ' + $(this).attr('data-action'),
            dataShow = $('#project-gallery-view'),
            dataShowMeta = $('#project-gallery-view meta'),
            dataHide = $('#portfolio-item'),
            preLoader = $('#loader'),
            backBtn = $('#back-button'),
            filterBtn = $('#filter-button');

        dataHide.animate({'marginLeft': '-120%'}, {duration: 400, queue: false});
        filterBtn.animate({'marginLeft': '-120%'}, {duration: 400, queue: false});
        dataHide.fadeOut(400);
        filterBtn.fadeOut(400);
        setTimeout(function () {
            preLoader.show();
        }, 400);
        setTimeout(function () {
            dataShow.load(href, function () {
                dataShowMeta.remove();
                preLoader.hide();
                dataShow.fadeIn(600);
                backBtn.fadeIn(600);
            });
        }, 800);
    });

    $('#back-button').on('click', function (event) {
        event.preventDefault();
        let dataShow = $('#portfolio-item'),
            dataHide = $('#project-gallery-view'),
            filterBtn = $('#filter-button');

        $("[data-animate]").each(function () {
            $(this).addClass($(this).attr('data-animate'));
        });

        dataHide.fadeOut(400);
        $(this).fadeOut(400);
        setTimeout(function () {
            dataShow.animate({'marginLeft': '0'}, {duration: 400, queue: false});
            filterBtn.animate({'marginLeft': '0'}, {duration: 400, queue: false});
            dataShow.fadeIn(400);
            filterBtn.fadeIn(400);
        }, 400);
        setTimeout(function () {
            dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
        }, 1500);
    });

});

/***************************************************************************
 MAP
 ***************************************************************************/

google.maps.event.addDomListener(window, 'load', init);

function init() {
    const mapOptions = {
        zoom: 17,
        scrollwheel: false,
        navigationControl: false,
        center: new google.maps.LatLng(24.906308, 91.870413),
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
        },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            },
            {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]},
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            },
            {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"},
                    {"lightness": 19}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            }]
    };
    let mapElement = document.getElementById('map');
    let map = new google.maps.Map(mapElement, mapOptions);
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(24.906308, 91.870413),
        map: map,
        title: '24 Golden Tower (2nd floor), Amborkhana, Sylhet.!'
    });
}



//# sourceMappingURL=scripts.js.map