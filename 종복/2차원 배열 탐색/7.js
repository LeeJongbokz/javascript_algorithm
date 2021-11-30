function solution(arr) {
  let len = arr.length;
  let answer = 0;
  let temp = new Array(len + 2).fill(0);
  for (let i = 0; i < len + 2; i++) {
    temp[i] = new Array(len + 2).fill(0);
  }

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      temp[i][j] = arr[i - 1][j - 1];
    }
  }

  console.log(temp);

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      let num = temp[i][j];

      if (
        num > temp[i][j - 1] &&
        num > temp[i][j + 1] &&
        num > temp[i - 1][j] &&
        num > temp[i + 1][j]
      ) {
        answer += 1;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
