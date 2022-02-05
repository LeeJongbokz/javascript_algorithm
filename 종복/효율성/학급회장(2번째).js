function solution(s){  
    let answer;
    let maxVal = Number.MIN_SAFE_INTEGER;
    
    let map = new Map();

    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }

    for(let [key,val] of map){
        if(maxVal < val){
            maxVal = val;
            answer = key;
        }
    }

    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
