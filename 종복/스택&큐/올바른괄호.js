function solution(s){
    let answer=true;
    let stack=[];

    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }else{
            if(stack.length === 0){
                answer = false;
                break;
            }else{
                if(stack[stack.length-1] === '('){
                    stack.pop();
                }
            }
        }
    }

    if(answer === true && stack.length === 0){
        return "YES";
    }else{
        return "NO";
    }

}

let a="(()(()))(()";
console.log(solution(a));
