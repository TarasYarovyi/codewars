// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const tower = ["*".repeat(nFloors * 2 - 1)];

  for (let i = 0; i < nFloors - 1; i++) {
    tower.unshift(tower[0].replace(/(\s|^)\*|\*(\s|$)/gm, "$1 $2"));
  }
  return tower;
}

// alternative:
// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }

console.log(towerBuilder(6));
