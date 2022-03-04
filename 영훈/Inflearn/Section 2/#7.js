function solution(arr){  
  let answer = 0;
  let newArr = arr.map(v => v.slice());
  let zeroArr = [];

  for (let i = 0; i < arr.length; i++) {
    zeroArr.push(0);
  }

  newArr.unshift(zeroArr);
  newArr.push(zeroArr);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i].unshift(0);
    newArr[i].push(0);
  }
  
  for (let i = 1; i < newArr.length - 1; i++) {
    for (let j = 1; j < newArr.length - 1; j++) {
      if (newArr[i][j] > newArr[i-1][j] && newArr[i][j] > newArr[i][j-1]
        && newArr[i][j] > newArr[i+1][j] && newArr[i][j] > newArr[i][j+1]) {
        answer++;
      }
    }
  }
    
  return answer;
}

let arr=[[5, 3, 7, 2, 3], 
       [3, 7, 1, 6, 1],
       [7, 2, 5, 3, 4],
       [4, 3, 6, 4, 1],
       [8, 7, 3, 5, 2]];
console.log(solution(arr));