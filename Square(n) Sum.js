// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because  1^1 + 2^2 + 2^2 = 9.

// Currying:
function squareSum(numbers) {
  function pow(x) {
    return function (y) {
      return Math.pow(y, x);
    };
  }
  const square = pow(2);
  return numbers.reduce((acc, el) => acc + square(el), 0);
}

console.log(squareSum([1, 2, 2]));
