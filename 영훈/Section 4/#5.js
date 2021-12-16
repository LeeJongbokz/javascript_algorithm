function solution(n, k, card){
  let answer = 0;
  let sum = 0;
  let sumArray = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = card[i] + card[j] + card[k];
        sumArray.push(sum);
      }
    }
  }

  sumArray.sort((a, b) => b - a);
  answer = sumArray[k - 1];
  
  return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));