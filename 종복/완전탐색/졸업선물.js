function solution(n, m, arr){

    let maxResult = 0;

    for(let i=0; i<n; i++){

        arr[i][0] = arr[i][0]/2;
        
        let money = [];
        
        for(let j=0; j<n; j++){
            let sum = arr[j][0] + arr[j][1];
            money.push(sum);
        }

        money.sort(function(a,b){
            return a-b;
        });
        let moneySum = 0; 
        let cnt = 0; 

        for(let j=0; j<n; j++){
            moneySum += money[j];
            if(m >= moneySum){
                cnt += 1;
                continue;
            }else{
                break;
            }
        }


        if(cnt > maxResult){
            maxResult = cnt;
        }

        arr[i][0] = arr[i][0]*2;
    }

    return maxResult;

}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(5, 28, arr));
