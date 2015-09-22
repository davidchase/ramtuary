(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "fantasy": [
    {
      "category": "fantasy",
      "title": "futures",
      "code": "const log = console::console.log;\nconst error = console::console.error;\n\nconst url = 'http://reqr.es/api/users?page=3';\n\nconst xhr = function(url) {\n    return new Future(function(rej, res) {\n        const oReq = new XMLHttpRequest();\n        oReq.addEventListener(\"load\", res, false);\n        oReq.addEventListener(\"error\", rej, false);\n        oReq.addEventListener(\"abort\", rej, false);\n        oReq.open(\"get\", url, true);\n        oReq.send();\n    });\n};\n\nconst f = R.compose(R.map(S.parseJson), R.map(R.path(['target', 'response'])), xhr)(url);\n\nf.fork(error, R.map(log)); //=> Object {page: \"3\", per_page: 3, total: 12, total_pages: 4, data: Array[3]}"
    }
  ],
  "list": [
    {
      "category": "list",
      "title": "filter",
      "code": "var isEven = n => n % 2 === 0;\nR.filter(isEven, [1, 2, 3, 4]);"
    },
    {
      "category": "list",
      "title": "map",
      "code": "var double = x => x * 2;\n\nR.map(double, [1, 2, 3]);"
    }
  ],
  "function": [
    {
      "category": "function",
      "title": "compose",
      "code": "var f = R.compose(R.inc, R.negate, Math.pow);\n\nf(3, 4)"
    },
    {
      "category": "function",
      "title": "useWith",
      "code": "var double = y => y * 2;\nvar square = x => x * x;\nvar add = (a, b) => a + b;\n// Adds any number of arguments together\nvar addAll = (...args) => R.reduce(add, 0, args);\n\n// Basic example\nvar addDoubleAndSquare = R.useWith(addAll, double, square);\n\n//≅ addAll(double(10), square(5));\naddDoubleAndSquare(10, 5); //=> 45"
    }
  ],
  "object": [
    {
      "category": "object",
      "title": "prop",
      "code": "R.prop('x', {x: 100}); //=> 100\nR.prop('x', {}); //=> undefined"
    }
  ]
}
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _examplesExampleJson = require('../../examples/example.json');

var _examplesExampleJson2 = _interopRequireDefault(_examplesExampleJson);

var categories = R.keys(_examplesExampleJson2['default']);
var examplesUl = document.getElementById("examples");
var parentFrag = document.createDocumentFragment();
var innerFrag = document.createDocumentFragment();

var uppercase = function uppercase(str) {
    return str.replace(/\w\S+/g, function (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    });
};

var createElement = function createElement(name, props) {
    var element = document.createElement(name);

    return R.keys(props).reduce(function (elem, prop) {
        elem[prop] = props[prop];
        return elem;
    }, element);
};

var createButtonList = function createButtonList(list) {
    return list.reduce(function (frag, object) {
        var li = createElement('li');
        var button = createElement('button', {
            className: 'btn btn-link btn-xs',
            textContent: object.title
        });
        li.appendChild(button);
        frag.appendChild(li);
        return frag;
    }, innerFrag);
};

var nodes = categories.reduce(function (frag, category) {
    var list = createElement('li', {
        className: 'dropdown-header',
        id: category,
        textContent: uppercase(category + ' functions')
    });

    var ul = createElement('ul', {
        className: 'list-unstyled'
    });
    var innerList = createButtonList(_examplesExampleJson2['default'][category]);
    ul.appendChild(innerList);
    list.appendChild(ul);
    frag.appendChild(list);
    return frag;
}, parentFrag);

var stash = categories.reduce(function (arr, category) {
    return arr.concat(_examplesExampleJson2['default'][category]);
}, []).reduce(function (cache, example) {
    cache[example.title] = example.code;
    return cache;
}, {});

examplesUl.appendChild(nodes);

exports['default'] = function () {
    document.querySelector("button[type=reset]").addEventListener("click", function () {
        window.location.href = window.location.href.split("#")[0];
    });

    examplesUl.addEventListener("click", function (event) {
        event.preventDefault();
        CodeMirror.instance.input.setValue(stash[event.target.textContent]);
    });
};

module.exports = exports['default'];

},{"../../examples/example.json":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var consoleLogElement = document.querySelector('.console-log');
var internals = {};
var reporter = {};

internals.buffer = [];

internals.flush = function flush() {
    consoleLogElement.textContent = internals.buffer.join('\n');
};

internals.logMethods = ['log', 'info', 'debug'];

internals.prepLogs = R.cond([[R.is(String), R.identity], [R.is(Function), R.toString], [R.T, JSON.stringify]]);

internals.intercept = function (method) {
    var original = console[method];
    console[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        args.reduce(function (buf, arg) {
            buf.push(internals.prepLogs(arg));
            return buf;
        }, internals.buffer);
        original.apply(console, args);
        internals.flush();
    };
};

internals.clear = function () {
    var consoleClear = console.clear;
    console.clear = function () {
        internals.buffer = [];
        consoleLogElement.textContent = '';
        consoleClear.call(console);
    };
};

reporter.main = function () {
    internals.clear();
    internals.logMethods.reduce(function (fn, method) {
        fn(method);
        return fn;
    }, internals.intercept);
};

exports['default'] = reporter;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debounce = require('debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _examples = require('./examples');

var _examples2 = _interopRequireDefault(_examples);

var evalElement = document.querySelector('pre.eval');
var evalError = document.querySelector('pre.error');

var printError = function printError(message) {
    evalError.textContent = message;
};

var clearOuput = function clearOutput() {
    printError('');
};

var getSource = function getSource() {
    return input.getValue();
};

var setUrlPath = function setUrlPath(code) {
    window.location.hash = '?' + _queryString2['default'].stringify({
        code: code
    });
};

var evalSource = R.compose(R.toString, eval);

var compile = function compile() {

    var transformed = undefined;
    var code = getSource();
    setUrlPath(code);
    clearOuput();

    try {
        transformed = babel.transform(code, {
            stage: 0,
            loose: "all",
            optional: ["es6.spec.templateLiterals", "es6.spec.blockScoping", "es6.spec.symbols"],
            filename: 'ramtuary'
        });

        evalElement.textContent = evalSource(transformed.code).replace('"use strict"', '');
    } catch (err) {
        printError(err.message);
        throw err;
    }
};

_logger2['default'].main();

(0, _examples2['default'])();

var debounceCompile = (0, _debounce2['default'])(compile, 500);

var input = CodeMirror.fromTextArea(document.querySelector('.input'), {
    lineNumbers: true,
    theme: "dracula",
    extraKeys: {
        "Tab": "autocomplete"
    },
    autofocus: true,
    autoCloseBrackets: true,
    mode: {
        name: "javascript",
        globalVars: true
    }
});

CodeMirror.registerHelper("instance", "input", input);

input.on('change', debounceCompile);

if (location.hash.indexOf('code') > 0) {
    input.setValue(_queryString2['default'].parse(_queryString2['default'].extract(location.href)).code);
}

},{"./examples":2,"./logger":3,"debounce":5,"query-string":7}],5:[function(require,module,exports){

/**
 * Module dependencies.
 */

var now = require('date-now');

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

},{"date-now":6}],6:[function(require,module,exports){
module.exports = Date.now || now

function now() {
    return new Date().getTime()
}

},{}],7:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		var key = parts[0];
		var val = parts[1];

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"strict-uri-encode":8}],8:[function(require,module,exports){
'use strict';
module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
};

},{}]},{},[4]);
