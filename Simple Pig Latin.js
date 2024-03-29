// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word) => {
      return /\w/.test(word) ? word.substring(1) + word[0] + "ay" : word;
    })
    .join(" ");
}

// or

function pigIt(str) {
  return str.replace(/(\w)(\w*)/g, "$2$1ay");
}
