function solution(arr){
    let answer=arr;

    for(let i=0; i<arr.length; i++){
        let index = i;

        while(arr[index] !== undefined && arr[index-1] > arr[index]){
            let temp = arr[index];
            arr[index] = arr[index-1];
            arr[index-1] = temp;
            index--;
        }
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));
