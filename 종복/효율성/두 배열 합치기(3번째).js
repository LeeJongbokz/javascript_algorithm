function solution(arr1, arr2){
    let answer=[];

    let n = arr1.length;
    let m = arr2.length; 

    let aPos = 0;
    let bPos = 0; 
   
    while(aPos < n && bPos < m){
        if(arr1[aPos] < arr2[bPos]){
            answer.push(arr1[aPos++]);
        }else{
            answer.push(arr2[bPos++]);
        }
    }

    while(aPos < n){
        answer.push(arr1[aPos++]);
    }

    while(bPos < m){
        answer.push(arr2[bPos++]);
    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
