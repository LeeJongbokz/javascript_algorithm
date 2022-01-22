function solution(n, arr){

    let maxSum = Number.MIN_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;


    for(let i=0; i<arr.length; i++){

        let num = arr[i];
        let sum = 0;

        while(num !==0){

            let remainder = Math.floor(num % 10);
            sum += remainder;
            num /= 10;
        }

        if(maxSum === sum){
            if(maxNum < arr[i]){
                maxNum = arr[i];
            }
        }else if(maxSum < sum){
            maxSum = sum;
            maxNum = arr[i];
        }
    }

    return maxNum;

}
            
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
