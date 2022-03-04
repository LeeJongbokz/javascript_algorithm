function solution(need, plan){
  let answer = 'NO';
  let queue = need.split('');

  for (let x of plan) {
    if (x === queue[0]) queue.shift();
  }

  if (queue.length === 0) answer = 'YES';
    
  return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));