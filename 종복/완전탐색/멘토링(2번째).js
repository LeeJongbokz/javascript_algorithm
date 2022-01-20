function solution(test){
    let answer=0;
    let studentNum = test[0].length; 

    for(let i=1; i<=studentNum; i++){

        for(let j=i+1; j<=studentNum; j++){

            let iCnt = 0;
            let jCnt = 0; 

            for(let k=0; k<arr.length; k++){
                let iPos = arr[k].indexOf(i);
                let jPos = arr[k].indexOf(j);

                if(iPos < jPos){
                    iCnt += 1;
                }else{
                    jCnt += 1;
                }
            }

            if(iCnt === arr.length || jCnt === arr.length){
                answer += 1;
            }
        }
    }

    return answer; 
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [1, 3, 2, 4]];
console.log(solution(arr));
