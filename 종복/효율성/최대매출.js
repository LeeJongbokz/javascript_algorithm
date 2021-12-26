function solution(k, arr){
    
    let answer, sum=0;
    let maxSum = NUMBER.MIN_SAFE_INTEGER;
    
    for(let i=0; i<k; i++){
        sum += arr[i];
    }

    maxSum = sum;

    for(let i=0; i<arr.length-k; i++){
        sum -= arr[i];
        sum += arr[i+k];
        if(maxSum < sum){
            maxSum = sum;
        }
    }

    return maxSum;

}
