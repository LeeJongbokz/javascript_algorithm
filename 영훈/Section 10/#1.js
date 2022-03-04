function solution(n){  
  let answer=0;
  let d = Array.from({ length: n + 1 }, () => 0);

  d[1] = 1;
  d[2] = 2;

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 2] + d[i - 1];
  }

  answer = d[n];
  
  return answer;
}

console.log(solution(7));