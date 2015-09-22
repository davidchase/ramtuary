import config from '../../examples/example.json';

const categories = R.keys(config);
const examplesUl = document.getElementById("examples");
const parentFrag = document.createDocumentFragment();
const innerFrag = document.createDocumentFragment();
const evalElement = document.querySelector('pre.eval');
const evalError = document.querySelector('pre.error');

const uppercase = (str) => str.replace(/\w\S+/g, (text) =>
    text.charAt(0).toUpperCase() + text.slice(1));

const createElement = function createElement(name, props) {
    const element = document.createElement(name);

    return R.keys(props).reduce(function(elem, prop) {
        elem[prop] = props[prop];
        return elem;
    }, element);
};

const createButtonList = function createButtonList(list) {
    return list.reduce(function(frag, object) {
        const li = createElement('li');
        const button = createElement('button', {
            className: 'btn btn-link btn-xs',
            textContent: object.title
        });
        li.appendChild(button);
        frag.appendChild(li);
        return frag;
    }, innerFrag);
};

const nodes = categories.reduce(function(frag, category) {
    const list = createElement('li', {
        className: 'dropdown-header',
        id: category,
        textContent: uppercase(category + ' functions')
    });

    const ul = createElement('ul', {
        className: 'list-unstyled'
    });
    const innerList = createButtonList(config[category]);
    ul.appendChild(innerList);
    list.appendChild(ul);
    frag.appendChild(list);
    return frag;
}, parentFrag);

const stash = categories
    .reduce(function(arr, category) {
        return arr.concat(config[category]);
    }, [])
    .reduce(function(cache, example) {
        cache[example.title] = example.code;
        return cache;
    }, {});

examplesUl.appendChild(nodes);

export default () => {
    document.querySelector("button[type=reset]").addEventListener("click", function() {
        window.location.href = window.location.href.split("#")[0];
    });

    document.querySelector('.clear-console').addEventListener("click", function() {
        console.clear();
        evalElement.textContent = '';
        evalError.textContent = '';
    });

    examplesUl.addEventListener("click", function(event) {
        if (!event.target.matches('button')) {
            return;
        }
        event.preventDefault();
        CodeMirror.instance.input.setValue(stash[event.target.textContent]);
    });
};