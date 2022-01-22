function solution(c, arr) {
  let answer = 0;
  let n = arr.length;

  const dfs = (l, sum) => {
    if (sum > c) return;
    if (l === n) {
      answer = Math.max(answer, sum);
    } else {
      dfs(l + 1, sum + arr[l]);
      dfs(l + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));