function solution(s){  
    let answer;
    let stack=[];

    for(let i=0; i<s.length; i++){
        if(s[i] === '+'){
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            console.log(num1);
            console.log(num2);
            let num = num1+num2;
            stack.push(num);

        }else if(s[i] === '-'){
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            let num = num2-num1;
            stack.push(num);

        }else if(s[i] === '*'){
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            let num = num1*num2;
            stack.push(num);

        }else if(s[i] === '/'){
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            let num = Math.floor(num2/num1);
            stack.push(num);
        }else{
            stack.push(s[i]);
        }
    }    

    answer = stack[0];

    return answer;
}

let str="352+*9-";
console.log(solution(str));
