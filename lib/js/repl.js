require('babel-polyfill');
import debounce from 'debounce';
import queryString from 'query-string';
import reporter from './logger';
import examples from './examples';
import googl from './googl';
const babel = require('babel-core');

const evalElement = document.querySelector('pre.eval');
const evalError = document.querySelector('pre.error');

const printError = function printError(message) {
    evalError.textContent = message;
};

const clearOuput = function clearOutput() {
    printError('');
};


const getSource = function getSource() {
    return input.getValue();
};

const setUrlPath = function(code) {
    window.location.hash = '?' + queryString.stringify({
        code: code
    });
};


const evalSource = R.compose(R.toString, eval);

const compile = function compile() {

    let transformed;
    const code = getSource();
    setUrlPath(code);
    clearOuput();

    try {
        transformed = babel.transform(code, {
            filename: 'ramtuary'
        });

        evalElement.textContent = evalSource(transformed.code);
    } catch (err) {
        printError(err.message);
        throw err;
    }
};

reporter.main();

examples();
googl();

const debounceCompile = debounce(compile, 1000);

const input = CodeMirror.fromTextArea(document.querySelector('.input'), {
    lineNumbers: true,
    theme: "dracula",
    extraKeys: {
        "Tab": "autocomplete"
    },
    autofocus: true,
    autoCloseBrackets: true,
    historyEventDelay: 2000,
    mode: {
        name: "javascript",
        json: true,
        globalVars: true
    }
});

CodeMirror.registerHelper("instance", "input", input);

input.on('change', debounceCompile);

if (location.hash.indexOf('code') > 0) {
    input.setValue(queryString.parse(queryString.extract(location.href)).code);
}