function solution(n, arr){
  let answer = 0;
  let max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum > answer) {
      answer = arr[i];
      max = sum;
    } else if (sum === max && arr[i] > answer) {
      answer = arr[i];
    }
  }

  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));