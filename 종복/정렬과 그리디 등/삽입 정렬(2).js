function solution(arr){
    let answer=arr;


    for(let i=1; i<arr.length; i++){
        let tmp = arr[i];
        let pos= -1;
        
        for(let j=i-1; j>=0; j--){
            if(arr[j] >= tmp){
                arr[j+1] = arr[j];
                pos = j;
            }else{
                break;
            }
        }
        if(pos !== -1){
            arr[pos] = tmp;
        }
    }



    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
