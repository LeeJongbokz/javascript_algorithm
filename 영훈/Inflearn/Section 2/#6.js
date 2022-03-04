function solution(arr){  
  let answer = 0;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let columnSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }
    if (rowSum > answer) answer = rowSum;
    if (columnSum > answer) answer = columnSum;
  }

  for (let i = 0; i < arr.length; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[arr.length - 1 - i][i];
  }

  if (leftDiagonalSum > answer) answer = leftDiagonalSum;
  if (rightDiagonalSum > answer) answer = rightDiagonalSum;

  return answer;
}

let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));