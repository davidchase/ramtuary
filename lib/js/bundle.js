(function (ramda,sanctuary,ramdaFantasy,buble) {
  'use strict';

  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

  var index$1 = __commonjs(function (module) {
  module.exports = Date.now || now

  function now() {
      return new Date().getTime()
  }
  });

  var require$$0 = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

  var index = __commonjs(function (module) {
  /**
   * Module dependencies.
   */

  var now = require$$0;

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
  });

  var debounce = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

  var index$4 = __commonjs(function (module) {
  'use strict';
  module.exports = function (str) {
  	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
  		return '%' + c.charCodeAt(0).toString(16);
  	});
  };
  });

  var require$$0$1 = (index$4 && typeof index$4 === 'object' && 'default' in index$4 ? index$4['default'] : index$4);

  var index$2 = __commonjs(function (module, exports) {
  'use strict';
  var strictUriEncode = require$$0$1;

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
  });

  var stringify = index$2.stringify;
  var parse = index$2.parse;
  var extract = index$2.extract;

  var apiUrl = 'https://www.googleapis.com/urlshortener/v1/url?' +
      'key=AIzaSyDhbAvT5JqkxFPkoeezJp19-S_mAJudxyk';

  var req = {
      longUrl: 'http://davidchase.github.io/ramtuary/'
  };

  var makeShortUrlBtn = document.getElementById('mkurl');

  var input$1 = document.getElementById('urlout');

  var setValue = ramda.curry(function(data) {
      input$1.value = data;
      input$1.select();
  });

  var error = console.error.bind(console);

  var xhr = function(url) {
      return new ramdaFantasy.Future(function(reject, resolve) {
          var oReq = new XMLHttpRequest();
          var requestData = ramda.evolve({longUrl: ramda.concat(ramda.__, location.hash)}, req);

          oReq.addEventListener("load", resolve, false);
          oReq.addEventListener("error", reject, false);
          oReq.addEventListener("abort", reject, false);
          oReq.open("POST", url, true);
          oReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          oReq.send(JSON.stringify(requestData));
      });
  };

  var getResponse = ramda.compose(ramda.map(sanctuary.parseJson(Object)), ramda.map(ramda.path(['target', 'response'])), xhr);

  var getShortUrl = ramda.map(ramda.compose(setValue, ramda.prop('id')));

  var futureXhr = getResponse(apiUrl);

  var googl = function () { return makeShortUrlBtn.addEventListener('click', function () { return futureXhr.fork(error, getShortUrl); }); };

  var evalElement = document.querySelector('pre.eval');
  var evalError = document.querySelector('pre.error');

  var clearOutput = function () { return printError(''); }; 

  var getSource = function () { return input.getValue(); };

  var setUrlPath = function(code) {
      window.location.hash = '?' + stringify({
          code: code
      });
  };

  var editor = function (id, obj) { return CodeMirror.fromTextArea(document.querySelector(id), obj); };

  var input = editor('.input', {
      lineNumbers: true,
      theme: "dracula",
      extraKeys: {
          "Tab": "autocomplete"
      },
      autofocus: false,
      autoCloseBrackets: true,
      historyEventDelay: 2000,
      mode: {
          name: "javascript",
          json: true,
          globalVars: true
      }
  });

  var output = editor('.results', {
      lineNumbers: true,
      theme: "dracula",
      readOnly: true
  });

  var printError = function ( message ) { return output.setValue(message); };

  var evalSource = R.compose(R.when(R.equals('undefined'), R.replace('undefined', '')), R.toString, eval);

  var ramdaStr = "const {" + (R.keys(R).join(',')) + "} = R;";

  var compile = function compile() {

      var code = "" + ramdaStr + " \n" + (getSource());
      setUrlPath(getSource());
      clearOutput();
      var transformed = buble.transform(code);
      output.setValue(("" + (evalSource(transformed.code))));
  };

  var tryCatch = function(fn, context, args) {
      return function() {
          try {
              fn.apply(context, args);
              document.querySelector('.results').nextElementSibling.classList.remove('error');
          } catch (err) {
              printError(err.message);
              document.querySelector('.results').nextElementSibling.classList.add('error');
          }
      }
  };

  googl();


  var debounceCompile = debounce(tryCatch(compile, null), 1000);


  input.setSize(null, 'calc(100vh - 190px)');
  output.setSize(null, 'calc(100vh - 190px)');

  CodeMirror.registerHelper("instance", "input", input);
  CodeMirror.registerHelper("instance", "output", output);

  input.on('change', debounceCompile);

  if (location.hash.indexOf('code') > 0) {
      input.setValue(parse(extract(location.href)).code);
  }

  document.querySelector('.clear-console').addEventListener('click', function ( event ) { return printError(''); });

}(R,S,ramdaFantasy,buble));