function solution(m, arr){         
    let answer=[];


    function DFS(cnt, res){

        if(cnt === m){
            let temp = [];

            for(let i=0; i<res.length; i++){
                if(!temp.includes(res[i])){
                  temp.push(res[i]);
                }
            }
            if(temp.length === m){
                answer.push(temp);
            }
            return; 

        }else{

            
            for(let i=0; i<arr.length; i++){
                res.push(arr[i]);
                DFS(cnt+1, res);
                res.pop();
            }
        }
    }


    let res = [];

    DFS(0, res);

    console.log(answer);
    console.log(answer.length);
    
}

let arr=[3, 6, 9];
console.log(solution(2, arr));
