function solution(arr1, arr2){
    let answer=[];

    arr1.sort(function(a,b){
        return a-b;
    });
    
    arr2.sort(function(a,b){
        return a-b;
    });

    let len1 = arr1.length;
    let len2 = arr2.length;

    let pos1 = 0;
    let pos2 = 0;

    while(pos1 < len1 && pos2 < len2){

        if(arr1[pos1]<arr2[pos2]){
            pos1 += 1;
        }else if(arr1[pos1] > arr2[pos2]){
            pos2 += 1;
        }else{
            answer.push(arr1[pos1]);
            pos1 += 1;            
        }

    }

    return answer;

}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
