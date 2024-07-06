//www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0);
  const queriesLength = queries.length;
  let i = 0;

  while (i < queriesLength) {
    const query = queries[i];
    const end = query[1] - 1;
    let j = query[0] - 1;
    while (j <= end) {
      arr[j] += query[2];
      ++j;
    }
    ++i;
  }

  // queries.forEach((query) => {
  //   for (let i = query[0] - 1; i <= query[1] - 1; i++) {
  //     arr[i] += query[2];
  //   }
  // });

  return Math.max(...arr);
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
