function isPrime(str){

    let num = parseInt(str);
    let cnt = 0; 

    for(let i=1; i<=num; i++){
        if(num % i === 0){
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

    for(let i=0; i<arr.length; i++){
        let numStr = String(arr[i]);
        numStr = numStr.split("").reverse().join("");
        let pos = 0; 

        for(let j=0; j<numStr.length; j++){
            if(numStr[j] === '0'){
                pos = j+1;
            }else{
                break; 
            }
        }
        numStr = numStr.substr(pos);
        let result = isPrime(numStr);
        if(result){
            console.log(numStr);
        }
    }


}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
