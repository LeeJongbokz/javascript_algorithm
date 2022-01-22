// 전위 순회

function solution(n){
    let answer="";

    function DFS(n){

        if(n > 7){
            return;
        }
        answer += String(n);
        DFS(n*2);
        DFS(n*2+1);
    }

    DFS(n);
    return answer;
}

console.log(solution(1));


// 중위 순회

function solution(n){
    let answer="";

    function DFS(n){

        if(n > 7){
            return;
        }
        DFS(n*2);
        answer += String(n);
        DFS(n*2+1);
    }

    DFS(n);
    return answer;
}

console.log(solution(1));


// 후위 순회

function solution(n){
    let answer="";

    function DFS(n){

        if(n > 7){
            return;
        }
        DFS(n*2);
        DFS(n*2+1);
        answer += String(n);
    }

    DFS(n);
    return answer;
}

console.log(solution(1));
