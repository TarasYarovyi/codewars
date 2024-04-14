// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Exes and Ohs
// 182339589% of 19,51683,090 of 234,865joh_pot2 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const string = "o";

function XO(str) {
  const x = str.match(/x/gi) ? str.match(/x/gi).length : null;
  const o = str.match(/o/gi) ? str.match(/o/gi).length : null;

  return x === o;
}

XO(string);
