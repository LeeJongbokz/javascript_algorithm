function solution(n){         
  let answer = 1;

  const dfs = (l) => {
    if (l === 1) return;
    else {
      answer *= l;
      dfs(l - 1);
    }
  }

  dfs(n);
  return answer;
}

console.log(solution(5));