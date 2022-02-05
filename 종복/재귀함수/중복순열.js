function solution(n, m){
    let answer=[];
    let answerCnt = 0; 

    function DFS(cnt, arr){

        if(cnt === m){
            let temp = [];
            for(let i=0; i<arr.length; i++){
                temp.push(arr[i]);
            }

            answer.push(temp);
            answerCnt += 1;
            return; 
        }else{

            for(let i=1; i<=n; i++){
                arr.push(i);
                DFS(cnt+1, arr);
                arr.pop();
            }
        }

    }

    let arr = [];

    DFS(0, arr)

    for(let i=0; i<answer.length; i++){
        console.log(answer[i]);
    }

    console.log(answerCnt);

}

console.log(solution(3, 2));
