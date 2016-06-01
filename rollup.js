'use strict';
const fs = require('fs');
const rollup = require('rollup').rollup;
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const buble = require('buble');

const writeFilePromise = (path, data) => new Promise((resolve, reject) => fs.writeFile(path, data, err => err ? reject(err) : resolve('file written')));

rollup({
        entry: 'lib/js/repl.js',
        plugins: [
            nodeResolve({
                jsnext: true,
                main: true,
                skip: ['ramda', 'sanctuary', 'buble', 'ramda-fantasy'],
                extensions: ['.js', '.json']
            }),
            commonjs({
                include: './node_modules/**'
            }),
	    json()
        ]
    })
    .then(function(bundle) {
        const result = bundle.generate({
            format: 'iife',
            moduleName: 'ramtuary',
            globals: {
                ramda: 'R',
                sanctuary: 'S',
                buble: 'buble',
                'ramda-fantasy': 'ramdaFantasy'
            }
        });
        return buble.transform(result.code).code;
    })
    .then(code => writeFilePromise('lib/js/bundle.js', code))
    .then(console.log)
    .catch(console.error);
