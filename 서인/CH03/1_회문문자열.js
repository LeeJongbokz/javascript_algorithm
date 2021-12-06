function solution(s) {
    let answer = "YES";
  
    let reverse = s.toLowerCase().split("").reverse().join("");
  
    if (s.toLowerCase() != reverse) answer = "NO";
    console.log(reverse);
    return answer;
  }
  
  let str = "goooG";
  console.log(solution(str));
  