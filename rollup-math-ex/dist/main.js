'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var add = function add(a, b) {
  return a + b;
};

var subtract = function subtract(a, b) {

  const ret = a - b
  console.log('**subtract', ret);
  return ret;
};

// subtract(1, 2)


exports.add = add;
exports.subtract = subtract;
