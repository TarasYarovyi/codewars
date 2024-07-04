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

function zero(operation) {
  const number = 0;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function one(operation) {
  const number = 1;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function two(operation) {
  const number = 2;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function three(operation) {
  const number = 3;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function four(operation) {
  const number = 4;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function five(operation) {
  const number = 5;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function six(operation) {
  const number = 6;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function seven(operation) {
  const number = 7;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function eight(operation) {
  const number = 8;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
}
function nine(operation) {
  const number = 9;
  return operation
    ? evaluate(operation.operand + operation.operator + number)
    : number;
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

console.log(seven(plus(seven())));
