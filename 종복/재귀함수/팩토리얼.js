function solution(n){         
    let answer;


    function DFS(num){

        if(num === 1){
            return 1;
        }else{
            return DFS(num-1)*num;
        }
    }

    answer = DFS(n);

    return answer;
}

console.log(solution(10));
