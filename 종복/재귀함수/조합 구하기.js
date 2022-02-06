function solution(n, m){         
    let answer=[];


    function DFS(cnt, arr){

        let lastNum;

        if(arr.length === 0){
            lastNum = 1;
        }else{
            lastNum = arr[arr.length-1];
        }

        if(cnt === m){

            let temp = [];
            for(let i=0; i<arr.length; i++){
                if(!temp.includes(arr[i])){
                    temp.push(arr[i]);
                }
            }
            if(temp.length === m){
                answer.push(temp);
            }

            return; 

        }

        for(let i=lastNum; i<=n; i++){
            arr.push(i);
            DFS(cnt+1, arr);
            arr.pop();
        }


    }

    let arr = [];

    DFS(0, arr);
    console.log(answer);
    console.log(answer.length);

}

console.log(solution(4, 2));
