function solution(str1, str2){

    let map1 = new Map();
    let map2 = new Map();
    let answer = "YES";

    for(let i=0; i<str1.length; i++){
        let word = str1[i];

        if(map1.has(word)){
            map1.set(word, map1.get(word)+1);
        }else{
            map1.set(word, 1);
        }
    }

    for(let i=0; i<str2.length; i++){
        let word = str2[i];
        
        if(map2.has(word)){
            map2.set(word, map2.get(word)+1);
        }else{
            map2.set(word, 1);
        }
    }

    for(let key1 of map1){
        for(let key2 of map2){
            if(key1[0] === key2[0]){
                if(key1[1] !== key2[1]){
                    answer = "NO";
                }
            }
        }
    }

    return answer;

}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));
