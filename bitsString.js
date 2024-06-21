// Playing with digits

// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  const sum = Array.from(String(n)).reduce((acc, curr) => {
    return acc + Math.pow(+curr, p++);
  }, 0);
  return sum % n === 0 ? sum / n : -1;
}
console.log(digPow(46288, 3));
