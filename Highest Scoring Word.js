// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  function countScore(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i) - 96;
    }
    return sum;
  }

  return x.split(" ").reduce((acc, curr) => {
    return countScore(curr) > countScore(acc) ? curr : acc;
  });
}
console.log(high("what time are we climbing up the volcano"));
