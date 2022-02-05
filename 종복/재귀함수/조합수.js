function solution(n, r){         
    let answer=[];


    function DFS(x, y){

        if(y === 0 || x === y){
            return 1;
        }

        return DFS(x-1, y-1) + DFS(x-1, y);

    }

    answer = DFS(n, r);

    return answer;
}

console.log(solution(5, 1));
