!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tcomb=e()}}(function(){return function(){return function e(n,t,i){function r(a,u){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var p=t[a]={exports:{}};n[a][0].call(p.exports,function(e){return r(n[a][1][e]||e)},p,p.exports,e,n,t,i)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}}()({1:[function(e,n,t){var i,r,o=n.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(i===setTimeout)return setTimeout(e,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(n){try{return i.call(null,e,0)}catch(n){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:a}catch(e){i=a}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,p=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?p=c.concat(p):l=-1,p.length&&m())}function m(){if(!f){var e=s(d);f=!0;for(var n=p.length;n;){for(c=p,p=[];++l<n;)c&&c[l].run();l=-1,n=p.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function y(e,n){this.fun=e,this.array=n}function v(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];p.push(new y(e,n)),1!==p.length||f||s(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],2:[function(e,n,t){var i=e("./lib/assert");i.Any=e("./lib/Any"),i.Array=e("./lib/Array"),i.Boolean=e("./lib/Boolean"),i.Date=e("./lib/Date"),i.Error=e("./lib/Error"),i.Function=e("./lib/Function"),i.Nil=e("./lib/Nil"),i.Number=e("./lib/Number"),i.Integer=e("./lib/Integer"),i.IntegerT=i.Integer,i.Object=e("./lib/Object"),i.RegExp=e("./lib/RegExp"),i.String=e("./lib/String"),i.Type=e("./lib/Type"),i.TypeT=i.Type,i.Arr=i.Array,i.Bool=i.Boolean,i.Dat=i.Date,i.Err=i.Error,i.Func=i.Function,i.Num=i.Number,i.Obj=i.Object,i.Re=i.RegExp,i.Str=i.String,i.dict=e("./lib/dict"),i.declare=e("./lib/declare"),i.enums=e("./lib/enums"),i.irreducible=e("./lib/irreducible"),i.list=e("./lib/list"),i.maybe=e("./lib/maybe"),i.refinement=e("./lib/refinement"),i.struct=e("./lib/struct"),i.tuple=e("./lib/tuple"),i.union=e("./lib/union"),i.func=e("./lib/func"),i.intersection=e("./lib/intersection"),i.subtype=i.refinement,i.inter=e("./lib/interface"),i.interface=i.inter,i.assert=i,i.update=e("./lib/update"),i.mixin=e("./lib/mixin"),i.isType=e("./lib/isType"),i.is=e("./lib/is"),i.getTypeName=e("./lib/getTypeName"),i.match=e("./lib/match"),n.exports=i},{"./lib/Any":3,"./lib/Array":4,"./lib/Boolean":5,"./lib/Date":6,"./lib/Error":7,"./lib/Function":8,"./lib/Integer":9,"./lib/Nil":10,"./lib/Number":11,"./lib/Object":12,"./lib/RegExp":13,"./lib/String":14,"./lib/Type":15,"./lib/assert":16,"./lib/declare":19,"./lib/dict":21,"./lib/enums":22,"./lib/func":26,"./lib/getTypeName":29,"./lib/interface":30,"./lib/intersection":31,"./lib/irreducible":32,"./lib/is":33,"./lib/isType":45,"./lib/list":48,"./lib/match":49,"./lib/maybe":50,"./lib/mixin":51,"./lib/refinement":52,"./lib/struct":54,"./lib/tuple":55,"./lib/union":56,"./lib/update":57}],3:[function(e,n,t){var i=e("./irreducible");n.exports=i("Any",function(){return!0})},{"./irreducible":32}],4:[function(e,n,t){var i=e("./irreducible"),r=e("./isArray");n.exports=i("Array",r)},{"./irreducible":32,"./isArray":34}],5:[function(e,n,t){var i=e("./irreducible"),r=e("./isBoolean");n.exports=i("Boolean",r)},{"./irreducible":32,"./isBoolean":35}],6:[function(e,n,t){var i=e("./irreducible");n.exports=i("Date",function(e){return e instanceof Date})},{"./irreducible":32}],7:[function(e,n,t){var i=e("./irreducible");n.exports=i("Error",function(e){return e instanceof Error})},{"./irreducible":32}],8:[function(e,n,t){var i=e("./irreducible"),r=e("./isFunction");n.exports=i("Function",r)},{"./irreducible":32,"./isFunction":36}],9:[function(e,n,t){var i=e("./refinement"),r=e("./Number");n.exports=i(r,function(e){return e%1==0},"Integer")},{"./Number":11,"./refinement":52}],10:[function(e,n,t){var i=e("./irreducible"),r=e("./isNil");n.exports=i("Nil",r)},{"./irreducible":32,"./isNil":40}],11:[function(e,n,t){var i=e("./irreducible"),r=e("./isNumber");n.exports=i("Number",r)},{"./irreducible":32,"./isNumber":41}],12:[function(e,n,t){var i=e("./irreducible"),r=e("./isObject");n.exports=i("Object",r)},{"./irreducible":32,"./isObject":42}],13:[function(e,n,t){var i=e("./irreducible");n.exports=i("RegExp",function(e){return e instanceof RegExp})},{"./irreducible":32}],14:[function(e,n,t){var i=e("./irreducible"),r=e("./isString");n.exports=i("String",r)},{"./irreducible":32,"./isString":43}],15:[function(e,n,t){var i=e("./irreducible"),r=e("./isType");n.exports=i("Type",r)},{"./irreducible":32,"./isType":45}],16:[function(e,n,t){var i=e("./isFunction"),r=e("./isNil"),o=e("./fail"),a=e("./stringify");function u(e,n){!0!==e&&(i(n)?n=n():r(n)&&(n='Assert failed (turn on "Pause on exceptions" in your Source panel)'),u.fail(n))}u.fail=o,u.stringify=a,n.exports=u},{"./fail":24,"./isFunction":36,"./isNil":40,"./stringify":53}],17:[function(e,n,t){n.exports=function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}},{}],18:[function(e,n,t){(function(t){var i=e("./isType"),r=e("./getFunctionName"),o=e("./assert"),a=e("./stringify");n.exports=function(e,n,u){return i(e)?e.meta.identity||"object"!=typeof n||null===n?e(n,u):new e(n,u):("production"!==t.env.NODE_ENV&&(u=u||[r(e)],o(n instanceof e,function(){return"Invalid value "+a(n)+" supplied to "+u.join("/")})),n)}}).call(this,e("_process"))},{"./assert":16,"./getFunctionName":28,"./isType":45,"./stringify":53,_process:1}],19:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isType"),a=e("./isNil"),u=e("./mixin"),s=e("./getTypeName"),c=e("./isUnion"),p=1;n.exports=function(e){var n;function f(r,o){return"production"!==t.env.NODE_ENV&&(i(!a(n),function(){return"Type declared but not defined, don't forget to call .define on every declared type"}),c(n)&&i(n.dispatch===f.dispatch,function(){return"Please define the custom "+e+".dispatch function before calling "+e+".define()"})),n(r,o)}return"production"!==t.env.NODE_ENV&&i(r(e),function(){return"Invalid argument name "+e+" supplied to declare([name]) (expected a string)"}),f.define=function(r){return"production"!==t.env.NODE_ENV&&(i(o(r),function(){return"Invalid argument type "+i.stringify(r)+" supplied to define(type) (expected a type)"}),i(a(n),function(){return"Declare.define(type) can only be invoked once"})),c(r)&&f.hasOwnProperty("dispatch")&&(r.dispatch=f.dispatch),u(f,n=r,!0),e&&(n.displayName=f.displayName=e,f.meta.name=e),f.meta.identity=n.meta.identity,f.prototype=n.prototype,f},f.displayName=e||s(f)+"$"+p++,f.meta={identity:!1},f.prototype=null,f}}).call(this,e("_process"))},{"./assert":16,"./getTypeName":29,"./isNil":40,"./isType":45,"./isTypeName":46,"./isUnion":47,"./mixin":51,_process:1}],20:[function(e,n,t){var i=e("./isType");function r(e){return i(e)&&"subtype"===e.meta.kind}n.exports=function(e){return{predicates:function e(n){return r(n)?[n.meta.predicate].concat(e(n.meta.type)):[]}(e),unrefinedType:function e(n){return r(n)?e(n.meta.type):n}(e)}}},{"./isType":45}],21:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./getTypeName"),u=e("./isIdentity"),s=e("./isObject"),c=e("./create"),p=e("./is");function f(e,n){return"{[key: "+a(e)+"]: "+a(n)+"}"}function l(e,n,l){"production"!==t.env.NODE_ENV&&(i(o(e),function(){return"Invalid argument domain "+i.stringify(e)+" supplied to dict(domain, codomain, [name]) combinator (expected a type)"}),i(o(n),function(){return"Invalid argument codomain "+i.stringify(n)+" supplied to dict(domain, codomain, [name]) combinator (expected a type)"}),i(r(l),function(){return"Invalid argument name "+i.stringify(l)+" supplied to dict(domain, codomain, [name]) combinator (expected a string)"}));var d=l||f(e,n),m=a(e),y=a(n),v=u(e)&&u(n);function N(r,o){if("production"===t.env.NODE_ENV&&v)return r;"production"!==t.env.NODE_ENV&&(o=o||[d],i(s(r),function(){return"Invalid value "+i.stringify(r)+" supplied to "+o.join("/")}));var a=!0,u={};for(var p in r)if(r.hasOwnProperty(p)){p=c(e,p,"production"!==t.env.NODE_ENV?o.concat(m):null);var f=r[p],l=c(n,f,"production"!==t.env.NODE_ENV?o.concat(p+": "+y):null);a=a&&f===l,u[p]=l}return a&&(u=r),"production"!==t.env.NODE_ENV&&Object.freeze(u),u}return N.meta={kind:"dict",domain:e,codomain:n,name:l,identity:v},N.displayName=d,N.is=function(t){if(!s(t))return!1;for(var i in t)if(t.hasOwnProperty(i)&&(!p(i,e)||!p(t[i],n)))return!1;return!0},N.update=function(e,n){return N(i.update(e,n))},N}l.getDefaultName=f,n.exports=l}).call(this,e("_process"))},{"./assert":16,"./create":18,"./getTypeName":29,"./is":33,"./isFunction":36,"./isIdentity":37,"./isObject":42,"./isTypeName":46,_process:1}],22:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./forbidNewOperator"),a=e("./isNumber"),u=e("./isString"),s=e("./isObject");function c(e){return Object.keys(e).map(function(e){return i.stringify(e)}).join(" | ")}function p(e,n){"production"!==t.env.NODE_ENV&&(i(s(e),function(){return"Invalid argument map "+i.stringify(e)+" supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to enums(map, [name]) combinator (expected a string)"}));var p=n||c(e);function f(n,r){return"production"!==t.env.NODE_ENV&&(o(this,f),r=r||[p],i(f.is(n),function(){return"Invalid value "+i.stringify(n)+" supplied to "+r.join("/")+" (expected one of "+i.stringify(Object.keys(e))+")"})),n}return f.meta={kind:"enums",map:e,name:n,identity:!0},f.displayName=p,f.is=function(n){return(u(n)||a(n))&&e.hasOwnProperty(n)},f}p.of=function(e,n){e=u(e)?e.split(" "):e;var t={};return e.forEach(function(e){t[e]=e}),p(t,n)},p.getDefaultName=c,n.exports=p}).call(this,e("_process"))},{"./assert":16,"./forbidNewOperator":25,"./isNumber":41,"./isObject":42,"./isString":43,"./isTypeName":46,_process:1}],23:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isFunction"),o=e("./isArray"),a=e("./mixin"),u=e("./isStruct"),s=e("./isInterface"),c=e("./isObject"),p=e("./refinement"),f=e("./decompose");n.exports=function(e,n,l){"production"!==t.env.NODE_ENV&&(i(r(e),function(){return"Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function"}),i(o(n),function(){return"Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array"}));var d={},m={},y=[],v={};n.forEach(function(e,n){var r,o,p,l=f(e),N=l.unrefinedType;"production"!==t.env.NODE_ENV&&i(c(N)||u(N)||s(N),function(){return"Invalid argument mixins["+n+"] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)"}),r=y,o=l.predicates,Array.prototype.push.apply(r,o),a(d,c(p=N)?p:p.meta.props),a(m,N.prototype),a(v,function(e){return c(e)?null:e.meta.defaultProps}(N),!0)}),(l=e.getOptions(l)).defaultProps=a(v,l.defaultProps,!0);var N=function(e,n,t){var i=e.reduce(function(e,n){return p(e,n)},n);return t&&(i.displayName=t,i.meta.name=t),i}(y,e(d,{strict:l.strict,defaultProps:l.defaultProps}),l.name);return a(N.prototype,m),N}}).call(this,e("_process"))},{"./assert":16,"./decompose":20,"./isArray":34,"./isFunction":36,"./isInterface":38,"./isObject":42,"./isStruct":44,"./mixin":51,"./refinement":52,_process:1}],24:[function(e,n,t){n.exports=function(e){throw new TypeError("[tcomb] "+e)}},{}],25:[function(e,n,t){var i=e("./assert"),r=e("./getTypeName");n.exports=function(e,n){i(!(e instanceof n),function(){return"Cannot use the new operator to instantiate the type "+r(n)})}},{"./assert":16,"./getTypeName":29}],26:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./Function"),a=e("./isArray"),u=e("./list"),s=e("./isObject"),c=e("./create"),p=e("./isNil"),f=e("./isBoolean"),l=e("./tuple"),d=e("./getFunctionName"),m=e("./getTypeName"),y=e("./isType");function v(e,n){return"("+e.map(m).join(", ")+") => "+m(n)}function N(e){return o.is(e)&&s(e.instrumentation)}function g(e){for(var n=e.length,t=!1,i=n-1;i>=0;i--){var r=e[i];if(!y(r)||"maybe"!==r.meta.kind)return i+1;t=!0}return t?0:n}function b(e,n,s){e=a(e)?e:[e],"production"!==t.env.NODE_ENV&&(i(u(o).is(e),function(){return"Invalid argument domain "+i.stringify(e)+" supplied to func(domain, codomain, [name]) combinator (expected an array of types)"}),i(o.is(n),function(){return"Invalid argument codomain "+i.stringify(n)+" supplied to func(domain, codomain, [name]) combinator (expected a type)"}),i(r(s),function(){return"Invalid argument name "+i.stringify(s)+" supplied to func(domain, codomain, [name]) combinator (expected a string)"}));var m=s||v(e,n),y=e.length,x=g(e);function h(e,n){return N(e)?("production"!==t.env.NODE_ENV&&(n=n||[m],i(h.is(e),function(){return"Invalid value "+i.stringify(e)+" supplied to "+n.join("/")})),e):h.of(e)}return h.meta={kind:"func",domain:e,codomain:n,name:s,identity:!0},h.displayName=m,h.is=function(t){return N(t)&&t.instrumentation.domain.length===y&&t.instrumentation.domain.every(function(n,t){return n===e[t]})&&t.instrumentation.codomain===n},h.of=function(r,a){if("production"!==t.env.NODE_ENV&&(i(o.is(r),function(){return"Invalid argument f supplied to func.of "+m+" (expected a function)"}),i(p(a)||f(a),function(){return"Invalid argument curried "+i.stringify(a)+" supplied to func.of "+m+" (expected a boolean)"})),h.is(r))return r;function u(){var o=Array.prototype.slice.call(arguments),u=o.length;if("production"!==t.env.NODE_ENV){var s=a?u:Math.max(u,x);l(e.slice(0,s),"arguments of function "+m)(o)}if(a&&u<y){"production"!==t.env.NODE_ENV&&i(u>0,"Invalid arguments.length = 0 for curried function "+m);var p=Function.prototype.bind.apply(r,[this].concat(o));return b(e.slice(u),n).of(p,!0)}return c(n,r.apply(this,o))}return u.instrumentation={domain:e,codomain:n,f:r},u.displayName=d(r),u},h}b.getDefaultName=v,b.getOptionalArgumentsIndex=g,n.exports=b}).call(this,e("_process"))},{"./Function":8,"./assert":16,"./create":18,"./getFunctionName":28,"./getTypeName":29,"./isArray":34,"./isBoolean":35,"./isNil":40,"./isObject":42,"./isType":45,"./isTypeName":46,"./list":48,"./tuple":55,_process:1}],27:[function(e,n,t){var i=e("./getTypeName");n.exports=function(e){return"{"+Object.keys(e).map(function(n){return n+": "+i(e[n])}).join(", ")+"}"}},{"./getTypeName":29}],28:[function(e,n,t){n.exports=function(e){return e.displayName||e.name||"<function"+e.length+">"}},{}],29:[function(e,n,t){var i=e("./isType"),r=e("./getFunctionName");n.exports=function(e){return i(e)?e.displayName:r(e)}},{"./getFunctionName":28,"./isType":45}],30:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./String"),a=e("./Function"),u=e("./isBoolean"),s=e("./isObject"),c=e("./isNil"),p=e("./create"),f=e("./getTypeName"),l=e("./dict"),d=e("./getDefaultInterfaceName"),m=e("./isIdentity"),y=e("./is"),v=e("./extend"),N=e("./assign");function g(e,n){return v(x,e,n)}function b(e){return s(e)||(e=c(e)?{}:{name:e}),e.hasOwnProperty("strict")||(e.strict=x.strict),e}function x(e,n){var s=(n=b(n)).name,v=n.strict;"production"!==t.env.NODE_ENV&&(i(l(o,a).is(e),function(){return"Invalid argument props "+i.stringify(e)+" supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)"}),i(r(s),function(){return"Invalid argument name "+i.stringify(s)+" supplied to interface(props, [options]) combinator (expected a string)"}),i(u(v),function(){return"Invalid argument strict "+i.stringify(v)+" supplied to struct(props, [options]) combinator (expected a boolean)"}));var x=s||d(e),h=Object.keys(e).map(function(n){return e[n]}).every(m);function E(n,r){if("production"===t.env.NODE_ENV&&h)return n;if("production"!==t.env.NODE_ENV&&(r=r||[x],i(!c(n),function(){return"Invalid value "+n+" supplied to "+r.join("/")}),v))for(var o in n)i(e.hasOwnProperty(o),function(){return'Invalid additional prop "'+o+'" supplied to '+r.join("/")});var a=!0,u=h?{}:N({},n);for(var s in e){var l=e[s],d=n[s],m=p(l,d,"production"!==t.env.NODE_ENV?r.concat(s+": "+f(l)):null);a=a&&d===m,u[s]=m}return a&&(u=n),"production"!==t.env.NODE_ENV&&Object.freeze(u),u}return E.meta={kind:"interface",props:e,name:s,identity:h,strict:v},E.displayName=x,E.is=function(n){if(c(n))return!1;if(v)for(var t in n)if(!e.hasOwnProperty(t))return!1;for(var i in e)if(!y(n[i],e[i]))return!1;return!0},E.update=function(e,n){return E(i.update(e,n))},E.extend=function(e,n){return g([E].concat(e),n)},E}x.strict=!1,x.getOptions=b,x.getDefaultName=d,x.extend=g,n.exports=x}).call(this,e("_process"))},{"./Function":8,"./String":14,"./assert":16,"./assign":17,"./create":18,"./dict":21,"./extend":23,"./getDefaultInterfaceName":27,"./getTypeName":29,"./is":33,"./isBoolean":35,"./isIdentity":37,"./isNil":40,"./isObject":42,"./isTypeName":46,_process:1}],31:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./isArray"),u=e("./isIdentity"),s=e("./is"),c=e("./getTypeName"),p=e("./isIdentity");function f(e){return e.map(c).join(" & ")}function l(e,n){"production"!==t.env.NODE_ENV&&(i(a(e)&&e.every(o)&&e.length>=2,function(){return"Invalid argument types "+i.stringify(e)+" supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to intersection(types, [name]) combinator (expected a string)"}));var c=n||f(e),l=e.every(p);function d(e,n){return"production"!==t.env.NODE_ENV&&(l&&u(this,d),n=n||[c],i(d.is(e),function(){return"Invalid value "+i.stringify(e)+" supplied to "+n.join("/")})),e}return d.meta={kind:"intersection",types:e,name:n,identity:l},d.displayName=c,d.is=function(n){return e.every(function(e){return s(n,e)})},d.update=function(e,n){return d(i.update(e,n))},d}l.getDefaultName=f,n.exports=l}).call(this,e("_process"))},{"./assert":16,"./getTypeName":29,"./is":33,"./isArray":34,"./isFunction":36,"./isIdentity":37,"./isTypeName":46,_process:1}],32:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isString"),o=e("./isFunction"),a=e("./forbidNewOperator");n.exports=function(e,n){function u(r,o){return"production"!==t.env.NODE_ENV&&(a(this,u),o=o||[e],i(n(r),function(){return"Invalid value "+i.stringify(r)+" supplied to "+o.join("/")})),r}return"production"!==t.env.NODE_ENV&&(i(r(e),function(){return"Invalid argument name "+i.stringify(e)+" supplied to irreducible(name, predicate) (expected a string)"}),i(o(n),"Invalid argument predicate "+i.stringify(n)+" supplied to irreducible(name, predicate) (expected a function)")),u.meta={kind:"irreducible",name:e,predicate:n,identity:!0},u.displayName=e,u.is=n,u}}).call(this,e("_process"))},{"./assert":16,"./forbidNewOperator":25,"./isFunction":36,"./isString":43,_process:1}],33:[function(e,n,t){var i=e("./isType");n.exports=function(e,n){return i(n)?n.is(e):e instanceof n}},{"./isType":45}],34:[function(e,n,t){n.exports=function(e){return Array.isArray?Array.isArray(e):e instanceof Array}},{}],35:[function(e,n,t){n.exports=function(e){return!0===e||!1===e}},{}],36:[function(e,n,t){n.exports=function(e){return"function"==typeof e}},{}],37:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./Boolean"),o=e("./isType"),a=e("./getTypeName");n.exports=function(e){return!o(e)||("production"!==t.env.NODE_ENV&&i(r.is(e.meta.identity),function(){return"Invalid meta identity "+i.stringify(e.meta.identity)+" supplied to type "+a(e)}),e.meta.identity)}}).call(this,e("_process"))},{"./Boolean":5,"./assert":16,"./getTypeName":29,"./isType":45,_process:1}],38:[function(e,n,t){var i=e("./isType");n.exports=function(e){return i(e)&&"interface"===e.meta.kind}},{"./isType":45}],39:[function(e,n,t){var i=e("./isType");n.exports=function(e){return i(e)&&"maybe"===e.meta.kind}},{"./isType":45}],40:[function(e,n,t){n.exports=function(e){return null==e}},{}],41:[function(e,n,t){n.exports=function(e){return"number"==typeof e&&isFinite(e)&&!isNaN(e)}},{}],42:[function(e,n,t){var i=e("./isNil"),r=e("./isArray");n.exports=function(e){return!i(e)&&"object"==typeof e&&!r(e)}},{"./isArray":34,"./isNil":40}],43:[function(e,n,t){n.exports=function(e){return"string"==typeof e}},{}],44:[function(e,n,t){var i=e("./isType");n.exports=function(e){return i(e)&&"struct"===e.meta.kind}},{"./isType":45}],45:[function(e,n,t){var i=e("./isFunction"),r=e("./isObject");n.exports=function(e){return i(e)&&r(e.meta)}},{"./isFunction":36,"./isObject":42}],46:[function(e,n,t){var i=e("./isNil"),r=e("./isString");n.exports=function(e){return i(e)||r(e)}},{"./isNil":40,"./isString":43}],47:[function(e,n,t){var i=e("./isType");n.exports=function(e){return i(e)&&"union"===e.meta.kind}},{"./isType":45}],48:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./getTypeName"),u=e("./isIdentity"),s=e("./create"),c=e("./is"),p=e("./isArray");function f(e){return"Array<"+a(e)+">"}function l(e,n){"production"!==t.env.NODE_ENV&&(i(o(e),function(){return"Invalid argument type "+i.stringify(e)+" supplied to list(type, [name]) combinator (expected a type)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to list(type, [name]) combinator (expected a string)"}));var l=n||f(e),d=a(e),m=u(e);function y(n,r){if("production"===t.env.NODE_ENV&&m)return n;"production"!==t.env.NODE_ENV&&(r=r||[l],i(p(n),function(){return"Invalid value "+i.stringify(n)+" supplied to "+r.join("/")+" (expected an array of "+d+")"}));for(var o=!0,a=[],u=0,c=n.length;u<c;u++){var f=n[u],y=s(e,f,"production"!==t.env.NODE_ENV?r.concat(u+": "+d):null);o=o&&f===y,a.push(y)}return o&&(a=n),"production"!==t.env.NODE_ENV&&Object.freeze(a),a}return y.meta={kind:"list",type:e,name:n,identity:m},y.displayName=l,y.is=function(n){return p(n)&&n.every(function(n){return c(n,e)})},y.update=function(e,n){return y(i.update(e,n))},y}l.getDefaultName=f,n.exports=l}).call(this,e("_process"))},{"./assert":16,"./create":18,"./getTypeName":29,"./is":33,"./isArray":34,"./isFunction":36,"./isIdentity":37,"./isTypeName":46,_process:1}],49:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isFunction"),o=e("./isType"),a=e("./Any");n.exports=function(e){for(var n,u,s,c,p=1,f=arguments.length;p<f;)if(n=arguments[p],u=arguments[p+1],s=arguments[p+2],r(s)&&!o(s)?p+=3:(s=u,u=a.is,p+=2),"production"!==t.env.NODE_ENV&&(c=(c||0)+1,i(o(n),function(){return"Invalid type in clause #"+c}),i(r(u),function(){return"Invalid guard in clause #"+c}),i(r(s),function(){return"Invalid block in clause #"+c})),n.is(e)&&u(e))return s(e);i.fail("Match error")}}).call(this,e("_process"))},{"./Any":3,"./assert":16,"./isFunction":36,"./isType":45,_process:1}],50:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./isMaybe"),u=e("./isIdentity"),s=e("./Any"),c=e("./create"),p=e("./Nil"),f=e("./forbidNewOperator"),l=e("./is"),d=e("./getTypeName");function m(e){return"?"+d(e)}function y(e,n){if(a(e)||e===s||e===p)return e;"production"!==t.env.NODE_ENV&&(i(o(e),function(){return"Invalid argument type "+i.stringify(e)+" supplied to maybe(type, [name]) combinator (expected a type)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to maybe(type, [name]) combinator (expected a string)"}));var d=n||m(e),y=u(e);function v(n,i){return"production"!==t.env.NODE_ENV&&y&&f(this,v),p.is(n)?n:c(e,n,i)}return v.meta={kind:"maybe",type:e,name:n,identity:y},v.displayName=d,v.is=function(n){return p.is(n)||l(n,e)},v}y.getDefaultName=m,n.exports=y}).call(this,e("_process"))},{"./Any":3,"./Nil":10,"./assert":16,"./create":18,"./forbidNewOperator":25,"./getTypeName":29,"./is":33,"./isFunction":36,"./isIdentity":37,"./isMaybe":39,"./isTypeName":46,_process:1}],51:[function(e,n,t){(function(t){var i=e("./isNil"),r=e("./assert");n.exports=function(e,n,o){if(i(n))return e;for(var a in n)n.hasOwnProperty(a)&&(!0!==o&&"production"!==t.env.NODE_ENV&&r(!e.hasOwnProperty(a)||e[a]===n[a],function(){return'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "'+a+'" of target object'}),e[a]=n[a]);return e}}).call(this,e("_process"))},{"./assert":16,"./isNil":40,_process:1}],52:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./forbidNewOperator"),u=e("./isIdentity"),s=e("./create"),c=e("./is"),p=e("./getTypeName"),f=e("./getFunctionName");function l(e,n){return"{"+p(e)+" | "+f(n)+"}"}function d(e,n,p){"production"!==t.env.NODE_ENV&&(i(o(e),function(){return"Invalid argument type "+i.stringify(e)+" supplied to refinement(type, predicate, [name]) combinator (expected a type)"}),i(o(n),function(){return"Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)"}),i(r(p),function(){return"Invalid argument name "+i.stringify(p)+" supplied to refinement(type, predicate, [name]) combinator (expected a string)"}));var f=p||l(e,n),d=u(e);function m(r,o){"production"!==t.env.NODE_ENV&&(d&&a(this,m),o=o||[f]);var u=s(e,r,o);return"production"!==t.env.NODE_ENV&&i(n(u),function(){return"Invalid value "+i.stringify(r)+" supplied to "+o.join("/")}),u}return m.meta={kind:"subtype",type:e,predicate:n,name:p,identity:d},m.displayName=f,m.is=function(t){return c(t,e)&&n(t)},m.update=function(e,n){return m(i.update(e,n))},m}d.getDefaultName=l,n.exports=d}).call(this,e("_process"))},{"./assert":16,"./create":18,"./forbidNewOperator":25,"./getFunctionName":28,"./getTypeName":29,"./is":33,"./isFunction":36,"./isIdentity":37,"./isTypeName":46,_process:1}],53:[function(e,n,t){var i=e("./getFunctionName");function r(e,n){return"function"==typeof n?i(n):n}n.exports=function(e){try{return JSON.stringify(e,r,2)}catch(n){return String(e)}}},{"./getFunctionName":28}],54:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./String"),a=e("./Function"),u=e("./isBoolean"),s=e("./isObject"),c=e("./isNil"),p=e("./create"),f=e("./getTypeName"),l=e("./dict"),d=e("./getDefaultInterfaceName"),m=e("./extend");function y(e){return"Struct"+d(e)}function v(e,n){return m(g,e,n)}function N(e){return s(e)||(e=c(e)?{}:{name:e}),e.hasOwnProperty("strict")||(e.strict=g.strict),e.hasOwnProperty("defaultProps")||(e.defaultProps={}),e}function g(e,n){var c=(n=N(n)).name,d=n.strict,m=n.defaultProps;"production"!==t.env.NODE_ENV&&(i(l(o,a).is(e),function(){return"Invalid argument props "+i.stringify(e)+" supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)"}),i(r(c),function(){return"Invalid argument name "+i.stringify(c)+" supplied to struct(props, [options]) combinator (expected a string)"}),i(u(d),function(){return"Invalid argument strict "+i.stringify(d)+" supplied to struct(props, [options]) combinator (expected a boolean)"}),i(s(m),function(){return"Invalid argument defaultProps "+i.stringify(m)+" supplied to struct(props, [options]) combinator (expected an object)"}));var g=c||y(e);function b(n,r){if(b.is(n))return n;if("production"!==t.env.NODE_ENV&&(r=r||[g],i(s(n),function(){return"Invalid value "+i.stringify(n)+" supplied to "+r.join("/")+" (expected an object)"}),d))for(o in n)n.hasOwnProperty(o)&&i(e.hasOwnProperty(o),function(){return'Invalid additional prop "'+o+'" supplied to '+r.join("/")});if(!(this instanceof b))return new b(n,r);for(var o in e)if(e.hasOwnProperty(o)){var a=e[o],u=n[o];void 0===u&&(u=m[o]),this[o]=p(a,u,"production"!==t.env.NODE_ENV?r.concat(o+": "+f(a)):null)}"production"!==t.env.NODE_ENV&&Object.freeze(this)}return b.meta={kind:"struct",props:e,name:c,identity:!1,strict:d,defaultProps:m},b.displayName=g,b.is=function(e){return e instanceof b},b.update=function(e,n){return new b(i.update(e,n))},b.extend=function(e,n){return v([b].concat(e),n)},b}g.strict=!1,g.getOptions=N,g.getDefaultName=y,g.extend=v,n.exports=g}).call(this,e("_process"))},{"./Function":8,"./String":14,"./assert":16,"./create":18,"./dict":21,"./extend":23,"./getDefaultInterfaceName":27,"./getTypeName":29,"./isBoolean":35,"./isNil":40,"./isObject":42,"./isTypeName":46,_process:1}],55:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./getTypeName"),u=e("./isIdentity"),s=e("./isArray"),c=e("./create"),p=e("./is");function f(e){return"["+e.map(a).join(", ")+"]"}function l(e,n){"production"!==t.env.NODE_ENV&&(i(s(e)&&e.every(o),function(){return"Invalid argument types "+i.stringify(e)+" supplied to tuple(types, [name]) combinator (expected an array of types)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to tuple(types, [name]) combinator (expected a string)"}));var l=n||f(e),d=e.every(u);function m(n,r){if("production"===t.env.NODE_ENV&&d)return n;"production"!==t.env.NODE_ENV&&(r=r||[l],i(s(n)&&n.length===e.length,function(){return"Invalid value "+i.stringify(n)+" supplied to "+r.join("/")+" (expected an array of length "+e.length+")"}));for(var o=!0,u=[],p=0,f=e.length;p<f;p++){var m=e[p],y=n[p],v=c(m,y,"production"!==t.env.NODE_ENV?r.concat(p+": "+a(m)):null);o=o&&y===v,u.push(v)}return o&&(u=n),"production"!==t.env.NODE_ENV&&Object.freeze(u),u}return m.meta={kind:"tuple",types:e,name:n,identity:d},m.displayName=l,m.is=function(n){return s(n)&&n.length===e.length&&e.every(function(e,t){return p(n[t],e)})},m.update=function(e,n){return m(i.update(e,n))},m}l.getDefaultName=f,n.exports=l}).call(this,e("_process"))},{"./assert":16,"./create":18,"./getTypeName":29,"./is":33,"./isArray":34,"./isFunction":36,"./isIdentity":37,"./isTypeName":46,_process:1}],56:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isTypeName"),o=e("./isFunction"),a=e("./getTypeName"),u=e("./isIdentity"),s=e("./isArray"),c=e("./create"),p=e("./is"),f=e("./forbidNewOperator"),l=e("./isUnion"),d=e("./isNil");function m(e){return e.map(a).join(" | ")}function y(e,n){"production"!==t.env.NODE_ENV&&(i(s(e)&&e.every(o)&&e.length>=2,function(){return"Invalid argument types "+i.stringify(e)+" supplied to union(types, [name]) combinator (expected an array of at least 2 types)"}),i(r(n),function(){return"Invalid argument name "+i.stringify(n)+" supplied to union(types, [name]) combinator (expected a string)"}));var y=n||m(e),v=e.every(u);function N(e,n){if("production"===t.env.NODE_ENV&&v)return e;var r=N.dispatch(e);return!r&&N.is(e)?e:("production"!==t.env.NODE_ENV&&(v&&f(this,N),n=n||[y],i(o(r),function(){return"Invalid value "+i.stringify(e)+" supplied to "+n.join("/")+" (no constructor returned by dispatch)"}),n[n.length-1]+="("+a(r)+")"),c(r,e,n))}return N.meta={kind:"union",types:e,name:n,identity:v},N.displayName=y,N.is=function(n){return e.some(function(e){return p(n,e)})},N.dispatch=function(n){for(var t=0,i=e.length;t<i;t++){var r=e[t];if(l(r)){var o=r.dispatch(n);if(!d(o))return o}else if(p(n,r))return r}},N.update=function(e,n){return N(i.update(e,n))},N}y.getDefaultName=m,n.exports=y}).call(this,e("_process"))},{"./assert":16,"./create":18,"./forbidNewOperator":25,"./getTypeName":29,"./is":33,"./isArray":34,"./isFunction":36,"./isIdentity":37,"./isNil":40,"./isTypeName":46,"./isUnion":47,_process:1}],57:[function(e,n,t){(function(t){var i=e("./assert"),r=e("./isObject"),o=e("./isFunction"),a=e("./isArray"),u=e("./isNumber"),s=e("./assign");function c(e){return r(e)?e instanceof Date||e instanceof RegExp?e:s({},e):a(e)?e.concat():e}function p(e){return l.commands.hasOwnProperty(e)}function f(e){return l.commands[e]}function l(e,n){"production"!==t.env.NODE_ENV&&i(r(n),function(){return"Invalid argument patch "+i.stringify(n)+" supplied to function update(instance, patch): expected an object containing commands"});var o,a=e,u=!1;for(var s in n)n.hasOwnProperty(s)&&(p(s)?(o=f(s)(n[s],a))!==e?(u=!0,a=o):a=e:(a===e&&(a=c(e)),o=l(a[s],n[s]),u=u||o!==a[s],a[s]=o));return u?a:e}l.commands={$apply:function(e,n){return"production"!==t.env.NODE_ENV&&i(o(e),"Invalid argument f supplied to immutability helper { $apply: f } (expected a function)"),e(n)},$push:function(e,n){return"production"!==t.env.NODE_ENV&&(i(a(e),"Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)"),i(a(n),"Invalid value supplied to immutability helper $push (expected an array)")),e.length>0?n.concat(e):n},$remove:function(e,n){if("production"!==t.env.NODE_ENV&&(i(a(e),"Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)"),i(r(n),"Invalid value supplied to immutability helper $remove (expected an object)")),e.length>0){n=c(n);for(var o=0,u=e.length;o<u;o++)delete n[e[o]]}return n},$set:function(e){return e},$splice:function(e,n){return"production"!==t.env.NODE_ENV&&(i(a(e)&&e.every(a),"Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)"),i(a(n),"Invalid value supplied to immutability helper $splice (expected an array)")),e.length>0?(n=c(n),e.reduce(function(e,n){return e.splice.apply(e,n),e},n)):n},$swap:function(e,n){if("production"!==t.env.NODE_ENV&&(i(r(e),"Invalid argument config supplied to immutability helper { $swap: config } (expected an object)"),i(u(e.from),"Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)"),i(u(e.to),"Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)"),i(a(n),"Invalid value supplied to immutability helper $swap (expected an array)")),e.from!==e.to){var o=(n=c(n))[e.to];n[e.to]=n[e.from],n[e.from]=o}return n},$unshift:function(e,n){return"production"!==t.env.NODE_ENV&&(i(a(e),"Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)"),i(a(n),"Invalid value supplied to immutability helper $unshift (expected an array)")),e.length>0?e.concat(n):n},$merge:function(e,n){var t=!1,i=c(n);for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r],t=t||i[r]!==n[r]);return t?i:n}},n.exports=l}).call(this,e("_process"))},{"./assert":16,"./assign":17,"./isArray":34,"./isFunction":36,"./isNumber":41,"./isObject":42,_process:1}]},{},[2])(2)});