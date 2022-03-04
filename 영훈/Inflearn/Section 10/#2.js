function solution(n) {
  let answer = 0;
  let d = Array.from({ length: n + 2 }, () => 0);

  d[1] = 1;
  d[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    d[i] = d[i - 2] + d[i - 1];
  }

  answer = d[n + 1];

  return answer;
}

console.log(solution(7));