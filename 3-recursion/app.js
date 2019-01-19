const Factorial = require('./computeFactorial');
const RecursiveReverse = require('./recursiveReverse');
const RecursiveMultiplier =  require('./recursiveMultiplier');

const factorial = new Factorial();
const recursiveReverse = new RecursiveReverse();
const recursiveMultiplier = new RecursiveMultiplier();

var resultFactorial = factorial.compute(5);
console.log(resultFactorial);

var resultRecursiveReverse = recursiveReverse.addItems([1,2,3,4,5]);
console.log(resultRecursiveReverse);

var resultRecursiveMultiplier = recursiveMultiplier.multiply([1,2,3], 3);
console.log(resultRecursiveMultiplier);
