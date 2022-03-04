function solution(m, arr){
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
        break;
      } else if (sum > m) break;
    }
  }
  
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));