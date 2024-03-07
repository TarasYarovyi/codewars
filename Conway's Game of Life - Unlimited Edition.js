// https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript

// Conway's Game of Life - Unlimited Edition
// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighboursQty dies, as if caused by underpopulation.
// Any live cell with more than three live neighboursQty dies, as if by overcrowding.
// Any live cell with two or three live neighboursQty lives on to the next generation.
// Any dead cell with exactly three live neighboursQty becomes a live cell.
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

// For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

// console.log(htmlize(cells));

const array = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

function getGeneration(cells, generations) {
  const currentArr = [
    [0, 0, 0, 0, 0],
    [0, ...cells[0], 0],
    [0, ...cells[1], 0],
    [0, ...cells[2], 0],
    [0, 0, 0, 0, 0],
  ];

  const nextArr = new Array(5).fill(new Array(5));

  for (let i = 0; i < currentArr.length; i++) {
    for (let j = 0; j < currentArr[i].length; j++) {
      let neighboursQty = 0;

      if (currentArr[i - 1] && currentArr[i - 1][j - 1]) {
        neighboursQty++;
      }
      if (currentArr[i - 1] && currentArr[i - 1][j]) {
        neighboursQty++;
      }
      if (currentArr[i - 1] && currentArr[i - 1][j + 1]) {
        neighboursQty++;
      }

      if (currentArr[i] && currentArr[i][j - 1]) {
        neighboursQty++;
      }

      if (currentArr[i] && currentArr[i][j + 1]) {
        neighboursQty++;
      }

      if (currentArr[i + 1] && currentArr[i + 1][j - 1]) {
        neighboursQty++;
      }
      if (currentArr[i + 1] && currentArr[i + 1][j]) {
        neighboursQty++;
      }
      if (currentArr[i + 1] && currentArr[i + 1][j + 1]) {
        neighboursQty++;
      }
      console.log(neighboursQty);
      switch (neighboursQty) {
        case 0:
          nextArr[i][j] = 0;
          break;
        case 1:
          nextArr[i][j] = 0;
          break;
        case 2:
          nextArr[i][j] = currentArr[i][j];
          break;
        case 3:
          nextArr[i][j] = 1;
          break;
        case 4:
          nextArr[i][j] = 0;
          break;

        default:
          break;
      }
      console.log(nextArr);
    }
  }
}

getGeneration(array, 2);
