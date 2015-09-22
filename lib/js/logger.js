const consoleLogElement = document.querySelector('.console-log');
const internals = {};
const reporter = {};


internals.buffer = [];

internals.flush = function flush() {
    consoleLogElement.textContent = internals.buffer.join('\n');
};

internals.logMethods = ['log', 'info', 'debug'];

internals.prepLogs = R.cond([
    [R.is(String), R.identity],
    [R.is(Function), R.toString],
    [R.T, JSON.stringify]
]);

internals.intercept = function(method) {
    const original = console[method];
    console[method] = function(...args) {
        args.reduce(function(buf, arg) {
            buf.push(internals.prepLogs(arg));
            return buf;
        }, internals.buffer);
        original.apply(console, args);
        internals.flush();
    };
};

internals.clear = function() {
    const consoleClear = console.clear;
    console.clear = function() {
        internals.buffer = [];
        consoleLogElement.textContent = '';
        consoleClear.call(console);
    };
};

reporter.main = function() {
    internals.clear();
    internals.logMethods.reduce(function(fn, method) {
        fn(method);
        return fn;
    }, internals.intercept);
};

export default reporter;