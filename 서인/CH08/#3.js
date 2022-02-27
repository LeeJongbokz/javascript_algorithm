function before(n) {
    let answer = "";
    function DFS(v) {
      if (v > 7) return;
      else {
        answer += v + " ";
        DFS(v * 2);
        DFS(v * 2 + 1);
      }
    }
  
    DFS(n);
    return answer;
  }
  
  console.log(before(1));
  
  function middle(n) {
    let answer = "";
  
    function DFS(v) {
      if (v > 7) return;
      else {
        DFS(v * 2);
        answer += v + " ";
        DFS(v * 2 + 1);
      }
    }
  
    DFS(n);
    return answer;
  }
  
  console.log(middle(1));
  
  function after(n) {
    let answer = "";
  
    function DFS(v) {
      if (v > 7) return;
      else {
        DFS(v * 2);
        DFS(v * 2 + 1);
        answer += v + " ";
      }
    }
  
    DFS(n);
    return answer;
  }
  
  console.log(after(1));
  