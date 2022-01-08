function solution(s){  
    let answer;
    let stack=[];

    for(let x of s){

        if(x === '+'){

            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num1+num2);

        }else if(x === '-'){

            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num2-num1);

        }else if(x === '*'){

            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num1*num2);

        }else if(x === '/'){

            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(num2/num1);

        }else{
            let num = Number(x);
            stack.push(num);
        }

    }

    answer = stack[0];

    return answer;
}

let str="352+*9-";
console.log(solution(str));
