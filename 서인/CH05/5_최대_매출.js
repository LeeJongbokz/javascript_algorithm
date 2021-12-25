// 최대 매출

function solution(k, arr) {
    let answer = 0;
    let p1 = 0;
  
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let cnt = 1;
      sum += arr[i];
      p1 = i + 1;
  
      while (cnt != k) {
        cnt++;
        sum += arr[p1++];
      }
  
      if (sum > answer) {
        answer = sum;
      }
      sum = 0;
    }
  
    return answer;
  }
  
  let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  console.log(solution(3, a));
  