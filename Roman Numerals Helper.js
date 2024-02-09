// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
//  400 -> "CD"
//   90 -> "XC"
//   40 -> "XL"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

class RomanNumerals {
  static toRoman(num) {
    let result = "";
    let remainder = num;
    while (remainder >= 1000) {
      result += "M";
      remainder -= 1000;
    }
    while (remainder >= 900) {
      result += "CM";
      remainder -= 900;
    }
    while (remainder >= 500) {
      result += "D";
      remainder -= 500;
    }
    while (remainder >= 400) {
      result += "CD";
      remainder -= 400;
    }
    while (remainder >= 100) {
      result += "C";
      remainder -= 100;
    }
    while (remainder >= 90) {
      result += "XC";
      remainder -= 90;
    }
    while (remainder >= 50) {
      result += "L";
      remainder -= 50;
    }
    while (remainder >= 40) {
      result += "XL";
      remainder -= 40;
    }
    while (remainder >= 10) {
      result += "X";
      remainder -= 10;
    }
    while (remainder === 9) {
      result += "IX";
      remainder -= 9;
    }
    while (remainder >= 5) {
      result += "V";
      remainder -= 5;
    }
    while (remainder >= 4) {
      result += "IV";
      remainder -= 4;
    }
    while (remainder >= 1) {
      result += "I";
      remainder -= 1;
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    let remainder = str;
    while (remainder.substr(0, 1) === "M") {
      result += 1000;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "CM") {
      result += 900;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "D") {
      result += 500;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "CD") {
      result += 400;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "C") {
      result += 100;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "XC") {
      result += 90;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "L") {
      result += 50;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "XL") {
      result += 40;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "X") {
      result += 10;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "IX") {
      result += 9;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "V") {
      result += 5;
      remainder = remainder.slice(1);
    }
    while (remainder.substr(0, 2) === "IV") {
      result += 4;
      remainder = remainder.slice(2);
    }
    while (remainder.substr(0, 1) === "I") {
      result += 1;
      remainder = remainder.slice(1);
    }
    return result;
  }
}
