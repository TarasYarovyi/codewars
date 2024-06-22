// Pyramid Slide Down
// https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript
// Pyramid Slide Down
// 217342393% of 2,1295,234 of 17,328rodentrabies2 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of Problem 18 and/or Problem 67 on ProjectEuler.

function longestSlideDown(pyramid) {
  let position = 0;
  return pyramid.reduce((acc, curr) => {
    const max = Math.max(curr[position], curr[position + 1] ?? 0);
    if (max !== curr[position]) {
      position++;
    }
    return acc + max;
  }, 0);
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
