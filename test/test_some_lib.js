var assert = require('assert');

var someLib = require('../src/some_lib');
var adder = someLib.adder;
var domExists = someLib.domExists;


test('adding two numbers', function() {
  var sum = adder(5,7);

  assert.equal(sum, 12);
});

test('checking if DOM exists', function() {
  assert.equal(domExists(), true);
});