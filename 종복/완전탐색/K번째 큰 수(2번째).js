function solution(n, k, card){
    let answer;
    let set = new Set();

    for(let i=0; i<n ;i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                let sum = card[i] + card[j]+card[k];
                set.add(sum);
            }
        }
    }

    let arr = Array.from(set);

    arr.sort(function(a,b){
        return b-a;
    });

    if(arr.length < k){
        answer = -1;
    }else{
        answer = arr[k-1];
    }

    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
