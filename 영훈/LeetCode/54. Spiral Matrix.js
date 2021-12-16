var spiralOrder = function(matrix) {
  let answer = [];
  let direction = 0; // 0:right, 1:down, 2:left, 3:up
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        answer.push(matrix[top][i]);
      }
      top++;
      direction = 1;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        answer.push(matrix[i][right]);
      }
      right--;
      direction = 2;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        answer.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 3;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        answer.push(matrix[i][left]);
      }
      left++;
      direction = 0;
    }
  }

  return answer;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));