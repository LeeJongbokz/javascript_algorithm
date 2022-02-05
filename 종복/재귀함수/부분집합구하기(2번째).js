function solution(n){
    let answer=[];
    let check = new Array(n+1).fill(false);

    function DFS(index){

        if(index === n+1){

            let tmp = "";

            for(let i=1; i<=n; i++){
                if(check[i] === true){
                    tmp += String(i);
                }
            }
            if(tmp !== ""){
                answer.push(tmp);
            }

        }else{

            check[index] = true;
            DFS(index+1);
            check[index] = false;
            DFS(index+1);
        }

    }
    
    DFS(1);
    return answer;
}

console.log(solution(3));
