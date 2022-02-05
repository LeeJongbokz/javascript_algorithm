function solution(k, arr){
    let answer, sum=0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let N = arr.length;

    for(let i=0; i<k; i++){
        sum += a[i];
    }

    maxSum = Math.max(maxSum, sum);

    for(let i=0; i<N-k; i++){
        sum -= arr[i];
        sum += arr[i+k];
        maxSum = Math.max(maxSum, sum);
    }

    answer = maxSum;

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
