
function solution(N, test){
          
    let arrStr = [];
    let answer = 0; 
    
    for(let i=0; i<test.length; i++){

        let numStr = "";

        for(let j=0; j<test[i].length; j++){
            numStr += String(test[i][j]);
        }        

        arrStr.push(numStr);
    }

    for(let i=1; i<=N; i++){
        for(let j=i+1; j<=N; j++){

            let cnt1 = 0;
            let cnt2 = 0; 

            for(let k=0; k<arrStr.length; k++){
                let iPos = arrStr[k].indexOf(String(i));
                let jPos = arrStr[k].indexOf(String(j));

                if(iPos < jPos){
                    cnt1 += 1;
                }else{
                    cnt2 += 1;
                }
            }

            if(cnt1 === arrStr.length || cnt2 === arrStr.length){
                answer += 1;
            }

        }
    }

    return answer;
        
}


let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(4, arr));
      
