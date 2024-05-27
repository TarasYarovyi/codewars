// Isograms

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let result = true;
  for (let index = 0; index < str.length; index++) {
    const regexp = new RegExp(`${str[index]}`, `gim`);
    if (str.match(regexp).length > 1) {
      result = false;
      break;
    }
  }
  return result;
}
