function solution(n, k){
    let answer;
    let arr = [];

    for(let i=1; i<=n ;i++){
        arr.push(i);
    }

    let pos = 0;

    while(arr.length !== 1){
        pos += k-1;
        pos %= arr.length;
        arr.splice(pos, 1);
    }

    answer = arr[0];

    return answer;
}

console.log(solution(8, 3));
