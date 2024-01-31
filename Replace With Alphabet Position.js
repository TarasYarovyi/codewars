// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  let result = [];
  text
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (/[a-z]/.test(letter)) {
        result.push(letter.charCodeAt(0) - 96);
      }
      return;
    });
  return result.join(" ");
}
//or

function alphabetPosition(text) {
  const lowerCaseText = text.toLowerCase();
  let result = "";
  let i = 0;
  while (i < lowerCaseText.length) {
    if (/[a-z]/.test(lowerCaseText[i])) {
      result += lowerCaseText.charCodeAt(i) - 96 + " ";
    }
    i++;
  }
  return result;
}
