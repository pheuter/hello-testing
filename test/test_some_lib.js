var test = require('tape');

var someLib = require('../src/some_lib');
var adder = someLib.adder;
var domExists = someLib.domExists;


test('adding two numbers', function(t) {
  var sum = adder(5,7);

  t.equal(sum, 12);
  t.end();
});

test('checking if DOM exists', function(t) {
  t.equal(domExists(), true);
  t.end();
});