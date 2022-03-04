function solution(s){  
  let answer;
  const halfLength = s.length / 2;

  if (s.length % 2 === 1) answer = s.substring(halfLength, halfLength + 1);
  else answer = s.substring(halfLength - 1, halfLength + 1);
  
  return answer;
}

console.log(solution("study"));