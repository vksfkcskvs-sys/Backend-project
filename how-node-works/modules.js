// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module1')
const calc1 = new C()
console.log(calc1.add(2, 5));


//exports
const calc2 = require('./test-module2')
console.log(calc2.multiply(7, 9));

// caching
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();