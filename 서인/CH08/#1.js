function solution(n) {
    function DFS(m) {
      if (m == 0) return false;
      else {
        DFS(m - 1);
        console.log(m);
      }
    }
  
    DFS(n);
  }
  
  solution(3);
  