
function isPrime(number){

    let cnt = 0; 

    for(let i=1; i<=number; i++){
        if(number % i === 0){
            cnt += 1;
        }
    }

    if(cnt === 2){
        return true;
    }else{
        return false;
    }

}


function solution(arr){
    let answer=[];
 

    for(let i=0; i<arr.length; i++){

        let numStr = String(arr[i]);
        numStr = numStr.split('').reverse().join('');

        let num = Number(numStr);
    
        if(isPrime(num)){
            answer.push(num);
        }

    }

    return answer;

}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
