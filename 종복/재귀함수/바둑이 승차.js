function solution(c, arr){
  
    let most = Number.MIN_SAFE_INTEGER;

    function DFS(index, temp, n){

        if(index === n){
            return;
        }else{
            let tempSum = 0; 

            for(let i=0; i<temp.length; i++){
                tempSum += temp[i];
            }
            if(tempSum > c){
                return;
            }else{
                if(most < tempSum){
                    most = tempSum;
                }
            }
        }

        for(let i=index; i<=n; i++){
            temp.push(arr[i-1]);
            DFS(i+1, temp, n);
            temp.pop();
        }

    }

    let tempArr = [];

    DFS(1, tempArr, arr.length);

    answer = most;

    return answer;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));
