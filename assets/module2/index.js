'use strict';

import {
  sub as subWithTwoValue,
  sum as sumWithTwoValue,
} from '../module1/index.js';

console.log(sumWithTwoValue('2', '5'));
console.log(subWithTwoValue(2, 5));
