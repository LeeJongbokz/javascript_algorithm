function solution(n, k){
    let answer;
    let queue = [];
    let pos = 0; 

    for(let i=1; i<=n; i++){
        queue.push(i);
    }

    while(1){

        pos += k-1;
        pos %= n;
        queue.splice(pos, 1);
        if(queue.length === 1){
            break;
        }

    }
  
    answer = queue[0];

    return answer;
}

console.log(solution(8, 3));
