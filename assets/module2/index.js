'use strict';

import greetingMsg, * as calc from '../module1/index.js';

console.log(greetingMsg);
console.log(calc.sum(2, 5));
console.log(calc.sub(2, 5));
console.log(calc.mult(2, 5));
console.log(calc.div(2, 5));
console.log('------');
console.log(this);
