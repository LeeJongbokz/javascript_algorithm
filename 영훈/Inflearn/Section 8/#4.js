function solution(n){
  let answer = [];
  let check = Array.from({length: n + 1}, () => 0);
  
  const dfs = (v) => {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      check[v] = 1;
      dfs(v + 1);
      check[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);
  return answer;
}

console.log(solution(3));