function solution(s){
    let answer;
    
    s = s.toLowerCase();

    if(s === s.split("").reverse().join("")){
        answer = "YES";
    }else{
        answer = "NO";
    }

    return answer;
}

let str="goodG";
console.log(solution(str));
