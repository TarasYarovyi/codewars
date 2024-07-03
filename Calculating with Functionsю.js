// Calculating with Functions

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(...args) {
  const number = 0;
  if (args.length) {
    return number + args[0].operation + args[0].number;
  } else {
    return number;
  }
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

const plus = (n) => {
  return {
    number: n,
    operation: "+",
  };
};

function minus() {}
function times() {}
function dividedBy() {}

console.log(zero(plus(one())));
