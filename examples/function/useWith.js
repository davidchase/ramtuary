var double = y => y * 2;
var square = x => x * x;
var add = (a, b) => a + b;
// Adds any number of arguments together
var addAll = (...args) => R.reduce(add, 0, args);

// Basic example
var addDoubleAndSquare = R.useWith(addAll, double, square);

//≅ addAll(double(10), square(5));
addDoubleAndSquare(10, 5); //=> 45