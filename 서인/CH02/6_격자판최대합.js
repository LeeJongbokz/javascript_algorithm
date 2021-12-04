// 각 행의 합(row)
// [i][j]

// 각 열의 합(col)
// [j][i]

// 두 대각선의 합(cross)
// [i][i]
// [4][0], [3][1], [2][2], [1][3], [0][4]

function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
  
    // 각 행의 합
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    }
  
    // 각 열의 합
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[j][i];
      }
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    }
  
    // 두 대각선의 합
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][i];
    }
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  
    let idx = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][idx--];
    }
  
    answer = max;
  
    return answer;
  }
  
  let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];
  console.log(solution(arr));
  