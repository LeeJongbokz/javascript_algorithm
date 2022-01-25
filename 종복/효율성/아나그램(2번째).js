function solution(str1, str2){
    let answer="YES"; 
    let map1 = new Map();
    let map2 = new Map();

    for(let i=0; i<str1.length; i++){
        if(map1.has(str1[i])){
            map1.set(str1[i], map1.get(str1[i],1));
        }else{
            map1.set(str1[i], 1);
        }
    }

    for(let i=0; i<str2.length; i++){
        if(map2.has(str2[i])){
            map2.set(str2[i], map1.get(str2[i],1));
        }else{
            map2.set(str2[i], 1);
        }
    }

    for(let [key, val] of map1){
        if(map2.has(key) && map2.get(key) === val){
            continue;
        }else{
            answer = "NO";
            break;
        }
    }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));
