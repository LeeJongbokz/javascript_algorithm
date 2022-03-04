function solution(s){
  let answer = 'NO';
  let stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  if (stack.length === 0) answer = 'YES';
  
  return answer;
}

let a="(()(()))(()";
console.log(solution(a));