// s의 각 문자가 문자 t 떨어진 최소 거리를 출력

function solution(s, t) {
    let answer = [];
    let cnt = 0;
  
    for (let x of s) {
      if (x === t) {
        cnt = 0;
        answer.push(cnt);
      } else {
        cnt++;
        answer.push(cnt);
      }
    }
  
    for (let i = s.length - 1; i > 0; i--) {
      if (s[i] === t) {
        cnt = 0;
      } else if (s[i] !== t && answer[i] > cnt) {
        cnt++;
        answer[i] = cnt;
      }
    }
  
    return answer;
  }
  
  let str = "teachermode";
  console.log(solution(str, "e"));
  