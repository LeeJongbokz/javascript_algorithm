function solution(n, k){
    let answer;
    let q = [...Array(n)].map((v,i) => i+1);

    let cnt = 1;
    while (q.length >= 2){
      if (cnt !== k){
        cnt++;
        let tmp = q[0]
        q.splice(0,1)
        q.push(tmp)
      } else {
        cnt = 1;
        q.splice(0,1)
      }
    }
    answer = q[0]
    return answer;
}

console.log(solution(8, 3));