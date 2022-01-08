function solution(s){  
    let answer;
    let stack=[];

    for (let x of s){
      if (x !== "+" && x !== "-" && x !== "*"){
        stack.push(x)
      }  else {
        let a = stack.pop()
        let b = stack.pop()
        if (x == "+") stack.push(parseInt(a) + parseInt(b))
        if (x == "-") stack.push(parseInt(b)-parseInt(a))
        if (x == "*") stack.push(parseInt(a)* parseInt(b))
      }
    }
    answer = stack[0]
    return answer;
}

let str="352+*9-";
console.log(solution(str));