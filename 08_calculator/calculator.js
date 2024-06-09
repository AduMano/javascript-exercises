const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
	return arr.reduce((prev, curr) => { return prev + curr });
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => { return prev * curr });
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if (num == 0 || num == 1) return 1;

  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
