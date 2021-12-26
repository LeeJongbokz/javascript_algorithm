function solution(s){  
    let answer="";

    let map = new Map();
    let maxNum = 0;

    for(let i=0; i<str.length; i++){
        let word = str[i];

        if(map.has(word)){
            map.set(word, map.get(word)+1);
        }else{
            map.set(word, 1);
        }
    }

    for(let key of map){
       if(maxNum < key[1]){
        maxNum = key[1];
        answer = key[0];
       }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
