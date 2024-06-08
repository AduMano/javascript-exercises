const convertToCelsius = function(num) {
  if (num === 32) return 0;

  return Math.round(((num - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(num) {
  if (num === 0) return 32;

  return Math.round(((num * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
