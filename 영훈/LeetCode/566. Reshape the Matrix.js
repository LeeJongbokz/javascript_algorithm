var matrixReshape = function(mat, r, c) {
  let answer = [];
  let row = mat.length;
  let column = mat[0].length;
  let k = 0;

  if (row * column !== r * c) return mat;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (!answer[k]) answer.push([]);
      answer[k].push(mat[i][j]);
      if (answer[k].length === c) k++;
    }
  }

  return answer;
};

let mat = [[1,2],[3,4]], r = 1, c = 4;
console.log(matrixReshape(mat, r, c));