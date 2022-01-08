function solution(need, plan){
    let answer="YES";
    let temp = "";

    for(let x of plan){
        if(a.includes(x)){
            temp += x;
        }
    }

    if(a === temp){
        return answer;
    }else{
        return "NO";
    }
}
let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));
