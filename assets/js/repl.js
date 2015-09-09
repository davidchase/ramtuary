// modified by @AutoSponge 2013.
//
// Copyright 2011 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function(global) {
    'use strict';

    // Do not show source maps by default.
    traceur.options.sourceMaps = false;

    var SourceMapConsumer = traceur.outputgeneration.SourceMapConsumer;
    var SourceMapGenerator = traceur.outputgeneration.SourceMapGenerator;
    var ProjectWriter = traceur.outputgeneration.ProjectWriter;
    var ErrorReporter = traceur.util.ErrorReporter;

    var hasError = false;
    var debouncedCompile = debounced(compile, 200, 2000);
    var input = CodeMirror.fromTextArea(document.querySelector('.input'), {
        onChange: debouncedCompile,
        onCursorActivity: debouncedCompile.delay,
        lineNumbers: true,
        theme: "dracula"
    });

    var evalElement = document.querySelector('pre.eval');
    var errorElement = document.querySelector('pre.error');
    var sourceMapElement = document.querySelector('pre.source-map');

    if (location.hash)
        input.setValue(decodeURIComponent(location.hash.slice(1)));

    /**
     * debounce time = min(tmin + [func's execution time], tmax).
     *
     * @param {Function} func
     * @param {number} tmin Minimum debounce time
     * @param {number} tmax Maximum debounce time
     * @return {Function} A debounced version of func with an attached "delay"
     *     function. "delay" will delay any pending debounced function by the
     *     current debounce time. If there are none pending, it is a no-op.
     */
    function debounced(func, tmin, tmax) {
        var id = 0;
        var t = tmin;
        function wrappedFunc() {
            var start = Date.now();
            id = 0;
            func();
            t = tmin + Date.now() - start; // tmin + [func's execution time]
            t = t < tmax ? t : tmax;
        }
        function debouncedFunc() {
            clearTimeout(id);
            id = setTimeout(wrappedFunc, t);
        }
        // id is nonzero only when a debounced function is pending.
        debouncedFunc.delay = function() { id && debouncedFunc(); }
        return debouncedFunc;
    }

    function setOptionsFromSource(source) {
        var re = /^\/\/ Options:\s*(.+)$/mg;
        var optionLines = source.match(re);
        if (optionLines) {
            optionLines.forEach(function(line) {
                re.lastIndex = 0;
                var m = re.exec(line);
                try {
                    traceur.options.fromString(m[1]);
                } catch (ex) {
                    // Ignore unknown options.
                }
            });
            createOptions();
        }
    }

    function compile() {
        hasError = false;
        errorElement.textContent = sourceMapElement.textContent = '';

        var reporter = new ErrorReporter();
        reporter.reportMessageInternal = function(location, format, args) {
            errorElement.textContent +=
                ErrorReporter.format(location, format, args) + '\n';
        };

        var url = location.href;
        var project = new traceur.semantics.symbols.Project(url);
        var name = 'repl';
        var contents = input.getValue().replace(/^\s*[{][\s\S]*[}]\s*$/, '($&)');
        if (history.replaceState)
            history.replaceState(null, document.title,
                '#' + encodeURIComponent(contents));
        setOptionsFromSource(contents);
        var sourceFile = new traceur.syntax.SourceFile(name, contents);
        project.addFile(sourceFile);
        var res = traceur.codegeneration.Compiler.compile(reporter, project, false);
        if (reporter.hadError()) {
            hasError = true;
        } else {
            var options;
            if (traceur.options.sourceMaps) {
                var config = {file: 'traceured.js'};
                var sourceMapGenerator = new SourceMapGenerator(config);
                options = {sourceMapGenerator: sourceMapGenerator};
            }

            var source = ProjectWriter.write(res, options);

            try {
                evalElement.textContent = R.toString(('global', eval)(source));
            } catch(ex) {
                hasError = true;
                errorElement.textContent = ex;
            }

            if (traceur.options.sourceMaps) {
                var renderedMap = renderSourceMap(source, options.sourceMap);
                sourceMapElement.textContent = renderedMap;
            }
        }

        errorElement.hidden = !hasError;
    }

    function createOptionRow(name) {
        var li = document.createElement('li');
        var label = document.createElement('label');
        label.textContent = name;
        var cb = label.insertBefore(document.createElement('input'),
            label.firstChild);
        cb.type = 'checkbox';
        var checked = traceur.options[name];
        cb.checked = checked;
        cb.indeterminate = checked === null;
        cb.onclick = function() {
            traceur.options[name] = cb.checked;
            createOptions();
            compile();
        };
        li.appendChild(label);
        return li;
    }

    var options = [
        'experimental',
        'debug',
        'sourceMaps',
        'freeVariableChecker',
        'validate'
    ];

    var showAllOpts = true;
    var allOptsLength = Object.keys(traceur.options).length;
    var showMax = allOptsLength;

    function createOptions() {
        var optionsDiv = document.querySelector('.traceur-options');
        optionsDiv.textContent = '';
        if (showAllOpts) {
            var i = 0;
            Object.keys(traceur.options).forEach(function(name) {
                if (i++ >= showMax || options.lastIndexOf(name) >= 0)
                    return;
                optionsDiv.appendChild(createOptionRow(name));
            });
            optionsDiv.appendChild(document.createElement('hr'));
        }
        options.forEach(function(name) {
            optionsDiv.appendChild(createOptionRow(name));
        });
    }

    createOptions();

    function renderSourceMap(source, sourceMap) {
        var consumer = new SourceMapConsumer(sourceMap);
        var lines = source.split('\n');
        var lineNumberTable = lines.map(function(line, lineNo) {
            var generatedPosition = {
                line: lineNo + 1,
                column: 0
            };
            var position = consumer.originalPositionFor(generatedPosition);
            var lineDotColumn = position.line + '.' + position.column;
            return (lineNo + 1) + ': ' + line + ' -> ' + lineDotColumn;
        });
        return 'SourceMap:\n' + lineNumberTable.join('\n');
    }

    // ugh, but wtf
    global.cm = input;

}(this));
