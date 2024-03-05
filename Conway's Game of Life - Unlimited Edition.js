// https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript

// Conway's Game of Life - Unlimited Edition
// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

// For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

// console.log(htmlize(cells));

const array = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

function getGeneration(cells, generations) {
  const biggerArr = [
    [0, 0, 0, 0, 0],
    [0, ...cells[0], 0],
    [0, ...cells[1], 0],
    [0, ...cells[2], 0],
    [0, 0, 0, 0, 0],
  ];
  console.log(biggerArr);

  //   for (let i = 0; i < cells.length; i++) {
  //     for (let j = 0; j < cells[i].length; j++) {
  //       let neighbours = 0;

  //       if (cells[i - 1] && cells[i - 1][j - 1]) {
  //         neighbours++;
  //       }
  //       if (cells[i - 1] && cells[i - 1][j]) {
  //         neighbours++;
  //       }
  //       if (cells[i - 1] && cells[i - 1][j + 1]) {
  //         neighbours++;
  //       }

  //       if (cells[i] && cells[i][j - 1]) {
  //         neighbours++;
  //       }

  //       if (cells[i] && cells[i][j + 1]) {
  //         neighbours++;
  //       }

  //       if (cells[i + 1] && cells[i + 1][j - 1]) {
  //         neighbours++;
  //       }
  //       if (cells[i + 1] && cells[i + 1][j]) {
  //         neighbours++;
  //       }
  //       if (cells[i + 1] && cells[i + 1][j + 1]) {
  //         neighbours++;
  //       }

  //       console.log(neighbours);
  //     }
  //   }
}

getGeneration(array, 2);
