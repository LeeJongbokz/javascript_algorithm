function solution(arr1, arr2){
    let answer=[];

    let aPos = 0;
    let bPos = 0; 
    let cnt = 0;

    while(1){

        if(aPos === arr1.length && bPos === arr2.length){
            break;
        }else if(aPos === arr1.length){
            let num = b[bPos];
            answer.push(num);
            bPos += 1;
            continue;
        }else if(bPos === arr2.length){
            let num = a[aPos];
            answer.push(num);
            aPos += 1;
            continue;
        }

        let num1 = a[aPos];
        let num2 = b[bPos];

        if(num1 < num2){
            answer.push(num1);
            aPos += 1;
        }else{
            answer.push(num2);
            bPos += 1;
        }

    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
