function solution(n, m) {
  let answer = [];
  let tmp = Array.from({length: m}, () => 0);

  const dfs = (l) => {
    if (l === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[l] = i;
        dfs(l + 1);
      }
    }
  }

  dfs(0);

  return answer;
}

console.log(solution(3, 2));