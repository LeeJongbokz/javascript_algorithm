function solution(n, k, arr, m){         
  let answer = 0;
  
  const dfs = (l, s, sum) => {
    if (l === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        dfs(l + 1, i + 1, sum + arr[i]);
      }
    }
  }

  dfs(0, 0, 0);

  return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));