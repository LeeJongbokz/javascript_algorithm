function solution(s){  
  let answer = '';

  for (let x of s) {
    if (!answer.includes(x)) answer += x;
  }

  return answer;
}

console.log(solution("ksekkset"));