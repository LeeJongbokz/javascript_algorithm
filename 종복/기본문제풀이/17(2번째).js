function solution(s){  
    let answer;

    let set = new Set();

    for(let i=0; i<s.length; i++){

        if(set.has(s[i])){
            continue;
        }else{
            set.add(s[i]);
        }
    }

    answer = Array.from(set);

    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
