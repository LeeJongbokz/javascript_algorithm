function solution(s){  
    let answer;
    let stack=[];

    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            stack.push(Number(s[i]));
        }else{
            let num1 = stack.pop();
            let num2 = stack.pop();
            let num;

            if(s[i] === '+'){
                num = num1+num2;
            }else if(s[i] === '-'){
                num = num2-num1;
            }else if(s[i] === '*'){
                num = num1*num2;
            }else if(s[i] === '/'){
                num = Math.floor(num2/num1);
            }
            stack.push(num);
        }
    }    

    answer = stack[0];

    return answer;
}

let str="352+*9-";
console.log(solution(str));
