function solution(n){
  
    function DFS(n){
      
        if(n === 0){
            return;
        }
        DFS(n-1);
        console.log(n);
    }

    DFS(n);

}

console.log(solution(3));
