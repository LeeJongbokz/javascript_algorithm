function solution(n){

    let answer = "";
 
    function DFS(n){

        if(n === 0){
            return; 
        }

        DFS(Math.floor(n/2));
        answer += String(n%2);
    }

    DFS(n);

    return answer;
}

console.log(solution(11));
