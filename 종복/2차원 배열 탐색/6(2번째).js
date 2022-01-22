function solution(arr){  

    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++){
        let rowSum = 0;
        for(let j=0; j<arr.length; j++){
            rowSum += arr[i][j];
        }
        if(maxSum < rowSum){
            maxSum = rowSum;
        }
    }


    for(let j=0; j<arr.length; j++){
        let colSum = 0;
        for(let i=0; i<arr.length; i++){
            colSum += arr[i][j];
        }
        if(maxSum < colSum){
            maxSum = colSum;
        }
    }

    let tempSum = 0;

    for(let i=0; i<arr.length; i++){
        tempSum += arr[i][i];
    }

    if(maxSum < tempSum){
        maxSum = tempSum;
    }

    tempSum = 0;

    for(let i=0; i<arr.length; i++){
        tempSum += arr[4-i][i];
    }

    if(maxSum < tempSum){
        maxSum = tempSum;
    }

    return maxSum;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));
