function solution(arr){
    let answer=arr;

    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > 0 && arr[j+1] < 0){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
