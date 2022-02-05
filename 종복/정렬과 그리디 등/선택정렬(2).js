function solution(arr){
    let answer=arr;

    for(let i=0; i<arr.length; i++){

        let minNum = arr[i];
        let minPos = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < minNum){
                minNum = arr[j];
                minPos = j;
            }
        }

        [arr[minPos], arr[i]] = [arr[i], arr[minPos]];

    }

    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
