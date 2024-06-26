// Prime Factors
// https://www.codewars.com/kata/542f3d5fd002f86efc00081a/train/javascript

// Inspired by one of Uncle Bob's TDD Kata

// Write a function that generates factors for a given number.

// The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]

function primeFactors(n) {
  const result = [];
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      n /= i;
      result.push(i);
    } else i++;
  }
  return result;
}

console.log(primeFactors(8));
