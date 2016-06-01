const fs = require('fs');
const R = require('ramda');
const vfs = require('vinyl-fs');
const through2 = require('through2');

const src = './examples/**/*.js';
const dest = './examples/example.json';
const stream = vfs.src(src);
const examplesList = [];
const options = {
    objectMode: true
};

const groupByCategory = R.groupBy(R.prop('category'));

const transform = function transform(chunk, enc, callback) {
    const arr = chunk.path.split('/');
    const obj = {
        category: arr[6],
        title: arr[7].replace('.js', ''),
        code: chunk.contents.toString()
    };

    examplesList.push(obj);
    callback();
};

const flush = function flush(callback) {
    const object = groupByCategory(examplesList);
    this.push(JSON.stringify(object, null, 2));
    callback();
};

stream.pipe(through2(options, transform, flush)).pipe(fs.createWriteStream(dest));
