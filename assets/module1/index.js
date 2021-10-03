'use strict';

export default 'Hello, user!!!';

function sum(value1, value2) {
  return valueToNumber(value1) + valueToNumber(value2);
}

function valueToNumber(value) {
  return Number(value);
}

function sub(value1, value2) {
  return value1 - value2;
}

function mult(value1, value2) {
  return value1 * value2;
}

function div(value1, value2) {
  return value1 / value2;
}

export { sum, sub, mult, div };
