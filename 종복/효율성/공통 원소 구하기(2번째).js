function solution(arr1, arr2){
    let answer=[];

    let aPos = 0;
    let bPos = 0;
    let n = arr1.length;
    let m = arr2.length; 

    arr1.sort(function(a,b){
        return a-b;
    });

    arr2.sort(function(a,b){
        return a-b;
    });

    while(aPos < n && bPos < m){

        if(arr1[aPos] === arr2[bPos]){
            answer.push(arr1[aPos]);
            aPos += 1;
            bPos += 1;
        }else if(arr1[aPos] < arr2[bPos]){
            aPos += 1;
        }else if(arr1[aPos] > arr2[bPos]){
            bPos += 1;
        }
    }

    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
