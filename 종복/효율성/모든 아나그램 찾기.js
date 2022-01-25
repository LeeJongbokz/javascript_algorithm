
function isCompare(a, b){

    let map1 = new Map();
    let map2 = new Map();

    for(let i=0; i<a.length; i++){
        if(map1.has(a[i])){
            map1.set(a[i], map1.get(a[i])+1);
        }else{
            map1.set(a[i],1);
        }
    }

    for(let i=0; i<b.length; i++){
        if(map2.has(b[i])){
            map2.set(b[i], map1.get(b[i])+1);
        }else{
            map2.set(b[i],1);
        }
    }

    for(let [key, val] of map1){
        if(map2.has(key) && map2.get(key) === val){
            continue;
        }else{
            return false;
        }
    }    

    return true;
}


function solution(s, t){
    let answer=0;

    for(let i=0; i<s.length-t.length+1; i++){
        let word = s.substring(i, i+t.length);
        if(isCompare(word, t)){
            answer += 1;
        }
    }

    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
