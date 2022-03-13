// https://leetcode.com/contest/weekly-contest-284/problems/count-artifacts-that-can-be-extracted/
// 2201. Count Artifacts That Can Be Extracted

const n = 2;
const artifacts = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];
const dig =
  // [
  //   [0, 0],
  //   [0, 1],
  //   [1, 1],
  // ];
  [
    [0, 0],
    [0, 1],
  ];

// const n = 6,
//   artifacts = [
//     [0, 2, 0, 5],
//     [0, 1, 1, 1],
//     [3, 0, 3, 3],
//     [4, 4, 4, 4],
//     [2, 1, 2, 4],
//   ],
//   dig = [
//     [0, 2],
//     [0, 3],
//     [0, 4],
//     [2, 0],
//     [2, 1],
//     [2, 2],
//     [2, 5],
//     [3, 0],
//     [3, 1],
//     [3, 3],
//     [3, 4],
//     [4, 0],
//     [4, 3],
//     [4, 5],
//     [5, 0],
//     [5, 1],
//     [5, 2],
//     [5, 4],
//     [5, 5],
//   ];

/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function (n, artifacts, dig) {
  const arr = Array.from(Array(n), () => Array(n).fill(false));
  let answer = 0;
  const coordinates = {};

  for (let idx = 0; idx < artifacts.length; idx++) {
    const artifact = artifacts[idx];
    const [r1, c1, r2, c2] = artifact;

    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        const elem = [r, c];
        coordinates[idx]
          ? coordinates[idx].push(elem)
          : (coordinates[idx] = [elem]);
      }
    }
  }

  dig.forEach((elem) => {
    const [x, y] = elem;
    arr[x][y] = true;
  });

  for (let idx = 0; idx < artifacts.length; idx++) {
    let diged = true;
    const artifact = coordinates[idx];
    artifact.forEach((elem, idx) => {
      const [x, y] = elem;
      if (!arr[x][y]) diged = false;
      if (artifact.length === idx + 1 && diged) answer++;
    });
  }

  return answer;
};

console.log(digArtifacts(n, artifacts, dig));
