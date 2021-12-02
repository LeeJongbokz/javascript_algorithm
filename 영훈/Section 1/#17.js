function solution(s){  
  let answer = [];

  s.forEach((el) => {
    if (!answer.includes(el)) answer.push(el);
  })
  
  return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));