function solution(s){  
  let stack = [];

  for (let x of s) {
    if (isNaN(x)) { // Not a Number
      let right = stack.pop();
      let left = stack.pop();
      if (x === '+') stack.push(left + right);
      else if (x === '-') stack.push(left - right);
      else if (x === '*') stack.push(left * right);
      else if (x === '/') stack.push(left / right);
    } else {
      stack.push(Number(x));
    }
  }

  return stack[0];
}

let str="352+*9-";
console.log(solution(str));