function solution(s) {
    let answer = "YES";
    let regS = s.replace(/[0-9]|[,.;:]/g, "").toLowerCase();
    if (regS.split("").reverse().join("") != regS) return "NO";
    return answer;
  }
  
  let str = "found7, time: study; Yduts; emit, 7Dnuof";
  console.log(solution(str));
  