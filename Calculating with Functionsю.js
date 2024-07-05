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

//to avoid using not safety eval()
function evaluate(expression) {
  const func = new Function("return " + expression);
  return func();
}

function run(operation, number) {
  return operation
    ? Math.floor(evaluate(number + operation.operator + operation.operand))
    : number;
}

function zero(operation) {
  return run(operation, 0);
}
function one(operation) {
  return run(operation, 1);
}
function two(operation) {
  return run(operation, 2);
}
function three(operation) {
  return run(operation, 3);
}
function four(operation) {
  return run(operation, 4);
}
function five(operation) {
  return run(operation, 5);
}
function six(operation) {
  return run(operation, 6);
}
function seven(operation) {
  return run(operation, 7);
}
function eight(operation) {
  return run(operation, 8);
}
function nine(operation) {
  return run(operation, 9);
}

const plus = (operand) => {
  return {
    operand: operand,
    operator: "+",
  };
};

function minus(operand) {
  return {
    operand: operand,
    operator: "-",
  };
}
function times(operand) {
  return {
    operand: operand,
    operator: "*",
  };
}
function dividedBy(operand) {
  return {
    operand: operand,
    operator: "/",
  };
}

console.log(three(dividedBy(nine())));
