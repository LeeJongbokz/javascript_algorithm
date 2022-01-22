function solution(m, product){
    let answer=0;
    let n=product.length;
    let maxCnt = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<n; i++){

        let temp = arr.slice();
        temp[i][0] = (temp[i][0]/2);
        
        let list = [];
        
        for(let j=0; j<n; j++){
            let sum = temp[j][0]+temp[j][1];
            list.push(sum);
        }

        list.sort(function(a,b){
            return a-b;
        });

        let cnt = 0; 
        let sum = 0; 

        for(let j=0; j<n; j++){
            sum += list[j];
            if(sum >m){
                break;
            }else{
                cnt += 1;
            }
        }

        if(maxCnt < cnt){
            maxCnt = cnt;
        }
    }

    answer = maxCnt; 

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
