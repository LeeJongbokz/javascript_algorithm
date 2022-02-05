function solution(s){  
    let answer= "";
    let stack=[];

    for(let x of s){

        if(x === '('){
            stack.push('(');
        }else if(x === ')'){
            stack.pop();
        }else{
            if(stack.length !== 0){
                continue;
            }else{
                answer += x;
            }
        }

    }


    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
