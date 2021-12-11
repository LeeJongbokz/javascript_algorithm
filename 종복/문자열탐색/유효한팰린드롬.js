function solution(s){

    s = s.toLowerCase();
    let onlyAlphabet = "";

    for(let i=0; i<s.length; i++){
        num = s[i].charCodeAt();

        if(65<= num && num<=90 || 97<=num && num <=122){
            onlyAlphabet += s[i];
        }
    }

    if(onlyAlphabet === onlyAlphabet.split("").reverse().join("")){
        return "YES"     
    }else{
        return "NO"
    }

}

let str="goooG";
console.log(solution(str));
