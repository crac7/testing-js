function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return  b == 0? null : a / b;
}
module.exports = {
  sum,
  multiply,
  divide
};