function solution(s){
    let answer="YES";
    stack=[];

    if (s[0] === ")") return answer = "NO"

    for (let x of s){
      if (x === "(") stack.push(x)
      if (x === ")") stack.pop(x)
    }
    if (stack.length !== 0) {
      answer = "NO"
    }
     
    return answer;
}