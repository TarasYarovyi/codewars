//www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0);

  for (let i = queries.length - 1; i >= 0; i--) {
    const query = queries[i];
    for (let j = query[0] - 1, end = query[1] - 1; j <= end; j++) {
      arr[j] += query[2];
    }
  }

  return Math.max(...arr);
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
