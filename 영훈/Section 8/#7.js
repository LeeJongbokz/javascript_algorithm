function solution(m, ps, pt) {
  let answer = 0;
  let n = ps.length;

  const dfs = (l, sum, time) => {
    if (time > m) return;
    if (l === n) {
      answer = Math.max(answer, sum);
    } else {
      dfs(l + 1, sum + ps[l], time + pt[l]);
      dfs(l + 1, sum, time);
    }
  }

  dfs(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));