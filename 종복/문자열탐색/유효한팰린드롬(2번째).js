function solution(s){

    let temp="";
    s = s.toLowerCase();

    for(let i=0; i<s.length; i++){
        if(97<= s[i].charCodeAt() && s[i].charCodeAt()<=122){
            temp += s[i];
        }
    }

    if(temp === temp.split("").reverse().join("")){
        return "YES";
    }else{
        return "NO";
    }

}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
