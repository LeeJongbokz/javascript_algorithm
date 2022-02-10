function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  const dfs = (v) => {
    if (v === n) answer++;
    else {
      for (let nv of graph[v]) {
        if (check[nv] === 0) {
          check[nv] = 1;
          dfs(nv);
          check[nv] = 0;
        }
      }
    }
  }

  check[1] = 1;
  dfs(1);

  return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));