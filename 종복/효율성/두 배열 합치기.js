function solution(arr1, arr2){
    let answer=[];

    let n1 = arr1.length;
    let n2 = arr2.length;

    let pos1 = 0;
    let pos2 = 0; 

    while(pos1 < arr1.length || pos2 < arr2.length){

        if(pos1 === arr1.length){
            answer.push(arr2[pos2]);
            pos2 += 1;
            continue;
        }

        if(pos2 === arr2.length){
            answer.push(arr1[pos1]);
            pos1 += 1;
            continue;
        }

        if(arr1[pos1] < arr2[pos2]){
            answer.push(arr1[pos1]);
            pos1 += 1;
        }else{
            answer.push(arr2[pos2]);
            pos2 += 1;
        }

    }

    return answer; 

}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
