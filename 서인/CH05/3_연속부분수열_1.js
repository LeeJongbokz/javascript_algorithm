// 연속 부분수열 1

function solution(m, arr) {
    let answer = 0;
    let p1 = 0;
    let p2 = 1;
  
    let cnt = 0;
  
    function init() {
      cnt = 0;
      p1 = p2;
      p2++;
    }
  
    while (p1 < arr.length) {
      cnt += arr[p1++];
  
      if (cnt === m) {
        answer++;
        init();
      }
  
      if (cnt > m) {
        init();
      }
    }
  
    return answer;
  }
  
  let a = [1, 2, 1, 3, 1, 1, 1, 2];
  console.log(solution(6, a));
  