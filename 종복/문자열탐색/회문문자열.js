function solution(s){

    s = s.toLowerCase();

    if(s === s.split("").reverse().join("")){
        return "YES";
    }else{
        return "NO";
    }

}

let str="goooG";
console.log(solution(str));
