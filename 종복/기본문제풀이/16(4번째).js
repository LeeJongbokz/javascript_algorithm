function solution(s){  
    let answer="";

    let set = new Set();

    for(let i=0; i<s.length; i++){

        if(set.has(s[i])){
            continue;
        }else{
            set.add(s[i]);
            answer += s[i];
        } 
    }

    return answer;
}
console.log(solution("ksekkset"));
