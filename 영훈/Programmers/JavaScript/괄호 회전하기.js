function solution(s) {
  var answer = 0;
  let sArr = s.split('');
  for (let i = 0; i < sArr.length; i++) {
      let curS = sArr.join('');
      let stack = [];
      if (curS[0] === ')' || curS[0] === ']' || curS[0] === '}') {
          sArr.push(sArr.shift());
          continue;
      }
      for (const x of curS) {
          const prevStack = stack[stack.length - 1];
          if (x === '(' || x === '[' || x === '{') stack.push(x);
          else if (prevStack === '(' && x === ')') stack.pop();
          else if (prevStack === '[' && x === ']') stack.pop();
          else if (prevStack === '{' && x === '}') stack.pop();
      }
      if (stack.length === 0) answer++;
      sArr.push(sArr.shift());
  }
  return answer;
}