//www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0);
  queries.forEach((query) => {
    for (let i = query[0] - 1; i <= query[1] - 1; i++) {
      arr[i] += query[2];
    }
  });

  return Math.max(...arr);
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
