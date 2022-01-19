function solution(s){  
    let answer="";

    let map = new Map();

    for(let i=0; i<s.length; i++){
        let word = s[i];
        if(map.has(word)){
            continue;
        }else{
            map.set(word, 1);
            answer += word;
        }
    }

    return answer;
}
console.log(solution("ksekkset"));
