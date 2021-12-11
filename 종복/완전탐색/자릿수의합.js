function solution(n, arr){

    let maxSum = Number.MIN_SAFE_INTEGER;
    let selectedNum = 0; 
    
    for(let i=0; i<arr.length; i++){
        let numStr = String(arr[i]);

        let sum = 0;

        for(let j=0; j<numStr.length; j++){
            let val = numStr[j].charCodeAt()-48;
            sum += val;
        }

        if(maxSum < sum){
            maxSum = sum;
            selectedNum = arr[i]
        }else if(maxSum === sum){
            if(selectedNum < arr[i]){
                selectedNum = arr[i]
            }
        }
    }

    return selectedNum;

}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
