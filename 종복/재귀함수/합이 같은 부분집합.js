function solution(arr){
    
    let answer = "NO";
    let total = 0;

    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }

    function DFS(index, temp, n){

        if(temp.length >= parseInt(n/2)+1){
            return;
        }else{
            let tempSum = 0;

            for(let i=0; i<temp.length; i++){
                tempSum += temp[i];
            }
            if(total === tempSum*2){
                answer = "YES";
            }

        }

        for(let i=index; i<=n; i++){
            temp.push(arr[i-1]);
            DFS(i+1, temp, n);
            temp.pop();
        }
    }

    let temp = [];

    DFS(1, temp, arr.length);

    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];

console.log(solution(arr));
