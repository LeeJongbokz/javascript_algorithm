function solution(arr){  

    let maxSum = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    let sum1;
    let sum2;
    sum1 = sum2 = 0; 

    for(let i=0; i<n; i++){
        sum1 = sum2 = 0;
        for(let j=0; j<n; j++){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        maxSum = Math.max(maxSum, sum1, sum2);
    }

    sum1 = sum2 = 0;

    for(let i=0; i<n; i++){
        sum1 += arr[i][i];
        sum2 += arr[4-i][i];
    }

    maxSum = Math.max(maxSum, sum1, sum2);

    return maxSum;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));
