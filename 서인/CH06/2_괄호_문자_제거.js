function solution(s){  
    let answer = "";
    let stack=[];
    
    for (let x of s){
      if (x === "(") stack.push(x)
      if (stack.length === 0) answer += x
      if (x === ")") stack.pop(x)
    }

    return answer;
}