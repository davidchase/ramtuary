(function () {

    var config = {
        arrays: [
            {
                title: "map",
                body: function () {
                    /*
R.map(function(x) { return x + 1; }, [10, 20, 30]);
                     */
                }
            },
            {
                title: 'filter',
                body: function() {
                    /*                  
R.filter(function(x) { return x > 10; }, [10, 20, 3, 100, 33, 1]);
                     */
                }
            },
            {
                title: 'reduce',
                body: function() {
                    /*
R.reduce(function(acc, x) { return acc + x; }, 0, [10, 20, 30, 40]);
                     */
                }
            },
            {
                title: 'reduceRight',
                body: function() {
                    /*
R.reduceRight(function(acc, x) { return acc + x; }, '', ['s', 'd', 'r', 'a', 'w', 'k', 'c', 'a', 'b']);
                     */
                }
            },
            {
                title: 'transduce',
                body: function() {
                    /*
var priceOrZero = R.compose(R.defaultTo(0), R.prop('price'));
var purchases = [
  {price: 30},
  {price: 0},
  {notPrice: 'cow'},
  {price: 10},
  {price: 6},
  {}
];
R.transduce(R.map(priceOrZero), R.add, 0, purchases);
                     */ 
                }
            }
        ],
        functions: [
            {
                title: "curry",
                body: function () {
                    /*
var f = R.curry(function(a, b, c) { return b + (a * c); });
f(2)(3)(4);
                    */
                }
            },
            {
                title: "compose",
                body: function () {
                    /*
var composeEx = R.compose(
            R.map(function(x) { return x * x; }),
            R.filter(function(x) { return x > 4; })
            );
composeEx([2, 3, 4, 5]);
                     */
                }
            },
            {
                title: "pipe",
                body: function () {
                    /*
var pipeEx = R.pipe(
            R.map(function(x) { return x * x; }),
            R.filter(function(x) { return x > 4; })
            );
pipeEx([2, 3, 4, 5]);
                     */
                }
            },
            {
                title: 'useWith',
                body: function() {
                    /*
var sum = function() { 
    return R.reduce(function(acc, x) { return acc + x; }, 0, arguments);
};
var useWithEx = R.useWith(
    sum,
    function(y) { return y * 2; },
    function(x) { return x * x; }
);
useWithEx(2, 3, 4);
                     */
                }
            },
            {
                title: 'converge',
                body: function() {
                    /*
var add = function(a, b) { return a + b; };
var multiply = function(a, b) { return a * b; };
var subtract = function(a, b) { return a - b; };
var convergeEx = R.converge(multiply, add, subtract)
convergeEx(2, 4);
                     */
                }
            }
        ],
        objects: [
            {
                title: "prop",
                body: function () {
                    /*
var propEx = R.prop('x');
propEx({w: 'WWW', x: 'XXX', z: 'ZZZ'});
                    */
                }
            }
        ],
        fantasy: [
            {
                title: 'Futures',
                body: function(){
                    /*
var log = console.log.bind(console);
var error = console.error.bind(console);

var url = 'http://reqr.es/api/users?page=3';

var xhr = function(url) {
    return new Future(function(rej, res){
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", res, false);
        oReq.addEventListener("error", rej, false);
        oReq.addEventListener("abort", rej, false);
        oReq.open("get", url, true);
        oReq.send();
    });
};

var f = R.compose(R.map(S.parseJson), R.map(R.path(['target','response'])), xhr)(url);

f.fork(error, R.map(log)); //=> Object {page: "3", per_page: 3, total: 12, total_pages: 4, data: Array[3]}
                     */
                }
            }
        ]
    };

    var lists = Object.keys(config);
    var examples = document.getElementById("examples");
    var elms = {};
    var cache = {};

    //build lists
    lists.forEach(function (name) {
        elms[name] = document.getElementById( name );
        config[name].forEach(function (e, i) {
            var str = e.body
                .toString()
                .replace(/[^\*]+\*/m, "")
                .split("*/")[0]
                .split("\n")
                .filter(function (s) {
                    return !!s && !s.match(/^\s+$/);
                })
                .join("\n");

            cache[e.title] = str;
            $('<li><a href="#">' + e.title + '</a></li>' ).appendTo(elms[name]);
        });
    });

    //add handlers
    $("button[type=reset]" ).on("click", function () {
        window.location.href = window.location.href.split("#")[0];
    });

    $(examples).on("click", function (e) {
        // here's that nasty global var:
        cm.setValue( cache[e.target.textContent] );
        e.preventDefault();
    });

}());

