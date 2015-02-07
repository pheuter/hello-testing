var adder = function(aNum, anotherNum) {
  return aNum + anotherNum;
}

var domExists = function() {
  var exists = document.body != null;
  return exists;
}


module.exports = {
  adder: adder,
  domExists: domExists
}