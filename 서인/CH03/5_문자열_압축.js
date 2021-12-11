// 반복되는 문자열 갯수를 옆에 입력

function solution(s) {
    let answer = "";
    let cnt = 0;
  
    for (let x of s) {
      if (!answer.includes(x)) {
        if (cnt == 0) {
          answer += x;
        } else {
          cnt++;
          answer += cnt;
          cnt = 0;
          answer += x;
        }
      } else {
        cnt++;
      }
    }
  
    return answer;
  }
  
  let str = "KKHSSSSSSSE";
  console.log(solution(str));
  