var transpose = function(matrix) {
  let answer = [];
  answer = matrix[0].map((v, i) => matrix.map(row => row[i]));
  return answer;
};

let matrix = [[1,2,3],[4,5,6]];
console.log(transpose(matrix));