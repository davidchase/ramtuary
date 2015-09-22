# ramtuary
Ramda + Ramda Fantasy + Sanctuary REPL

~~This is basically a clone of the [ramda repl](https://github.com/ramda/ramda.github.io/tree/master/repl) with a new skin.~~

~~With some additions of [ramda fantasy](https://github.com/ramda/ramda-fantasy) and [sanctuary](https://github.com/plaid/sanctuary) for moar fun.~~

Inspired by [ramda repl](https://github.com/ramda/ramda.github.io/tree/master/repl).

Inlcudes [ramda](https://github.com/ramda/ramda), [ramda fantasy](https://github.com/ramda/ramda-fantasy) and [sanctuary](https://github.com/plaid/sanctuary)

Uses [Babel](babeljs.io) and latest version of [CodeMirror](codemirror.net) under the hood 

Supports es6 and even es7 (`console::console.log`)

[Try it out](http://davidchase.github.io/ramtuary/)

## usage

The following variables are available globally:

`R` for Ramda

`S` for Sanctuary

`Either, Future, Identity, IO, Maybe, Reader, Tuple`  for Ramda Fantasy

Use <kbd>Tab</kbd> for auto-completion

Examples located in this [folder](examples)

## todo / features
- [x] add `console.log` capturing for output
- [x] update to latest [codemirror](https://github.com/codemirror/CodeMirror) for moar features
- [x] switch to babel
- [x] support auto-completion
- [x] match brackets
- [ ] remove jquery dependency
