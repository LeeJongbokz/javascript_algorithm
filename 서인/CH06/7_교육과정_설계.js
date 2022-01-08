function solution(need, plan){
    let answer = "YES";
    let queue = need.split('');

    for (let x of plan){
      if (queue.includes(x)) {
        if (queue[0] !== x) return "NO"
        else queue.shift(x)
      }
    }

    if(queue.length > 0) return "NO";  
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));