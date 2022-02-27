function solution(n) {
    let ans = "";
    function DFS(m) {
      if (m == 0) return;
      else {
        DFS(parseInt(m / 2));
        ans += String(m % 2);
      }
    }
    DFS(n);
    return ans;
  }
  
  console.log(solution(11));
  