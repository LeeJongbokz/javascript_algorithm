function solution(s){
    
    s = s.toLowerCase();
    let len = s.length;

    for(let i=0; i<(len/2); i++){
        if(s[i] !== s[len-1-i]){
            return false;
        }
    }

    return true;
}

let str="gooG";
console.log(solution(str));
