function solution(m, arr){
 
    let answer = 0; 

    arr.sort(function(a,b){
        return b-a;
    });

    function DFS(total, cnt){

        if(total === 0){
            if(answer === 0){
                answer = cnt;
            }
            return; 
        }

        for(let i=0; i<arr.length; i++){
            if(total-arr[i]>=0){
                DFS(total-arr[i], cnt+1);
            }
        }


    }

    DFS(m, 0);

    return answer;
}

let arr=[1, 2, 4];
console.log(solution(15, arr));
