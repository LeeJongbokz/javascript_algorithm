function solution(n){
  let answer = '';
  const dfs = (n) => {
    if (n === 0) return;
    else {
      dfs(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  dfs(n);
  return answer;
}

console.log(solution(11));