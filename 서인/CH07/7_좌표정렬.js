function solution(arr) {
    return arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  }
  
  let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ];
  console.log(solution(arr));
  