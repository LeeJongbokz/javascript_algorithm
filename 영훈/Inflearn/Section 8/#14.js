function solution(n, m){         
  let answer=[];
  let tmp = Array.from({length: m}, () => 0);
  
  const dfs = (l, s) => {
    if (l === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[l] = i;
        dfs(l + 1, i + 1);
      }
    }
  }

  dfs(0, 1);

  return answer;
}

console.log(solution(4, 2));