function solution(m, arr) {
    let answer = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sum = arr[i];
      let p2 = i + 1;
  
      while (sum <= m) {
        answer++;
        sum += arr[p2];
        p2++;
      }
    }
  
    return answer;
  }
  
  let a = [1, 3, 1, 2, 3];
  console.log(solution(5, a));
  