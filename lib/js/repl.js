import debounce from 'debounce';
import {parse, extract, stringify} from 'query-string';
import googl from './googl';
import {transform}from 'buble';

const evalElement = document.querySelector('pre.eval');
const evalError = document.querySelector('pre.error');

const clearOutput = () => printError(''); 

const getSource = () => input.getValue();

const setUrlPath = function(code) {
    window.location.hash = '?' + stringify({
        code: code
    });
};

const editor = (id, obj) => CodeMirror.fromTextArea(document.querySelector(id), obj);

const input = editor('.input', {
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

const output = editor('.results', {
    lineNumbers: true,
    theme: "dracula",
    readOnly: true
});

const printError = message => output.setValue(message);

const evalSource = R.compose(R.when(R.equals('undefined'), R.replace('undefined', '')), R.toString, eval);

const ramdaStr = `const {${R.keys(R).join(',')}} = R;`;

const compile = function compile() {

    const code = `${ramdaStr} \n${getSource()}`;
    setUrlPath(getSource());
    clearOutput();
    const transformed = transform(code);
    output.setValue(`${evalSource(transformed.code)}`);
};

const tryCatch = function(fn, context, args) {
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


const debounceCompile = debounce(tryCatch(compile, null), 1000);


input.setSize(null, 'calc(100vh - 190px)');
output.setSize(null, 'calc(100vh - 190px)');

CodeMirror.registerHelper("instance", "input", input);
CodeMirror.registerHelper("instance", "output", output);

input.on('change', debounceCompile);

if (location.hash.indexOf('code') > 0) {
    input.setValue(parse(extract(location.href)).code);
}

document.querySelector('.clear-console').addEventListener('click', event => printError(''));
