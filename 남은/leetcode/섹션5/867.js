// https://leetcode.com/problems/transpose-matrix/
// 867. Transpose Matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

var transpose = function (matrix) {
  const answer = [];
  for (let idx = 0; idx < matrix[0].length; idx++) {
    const compArr = [];
    for (let idx2 = 0; idx2 < matrix.length; idx2++) {
      compArr.push(matrix[idx2][idx]);
    }
    answer.push(compArr);
  }

  return answer;
};

console.log(transpose(matrix));
