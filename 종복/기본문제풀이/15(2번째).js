function solution(s){  
    let answer;
    
    let mid = Math.floor(s.length/2);

    if(s % 2 === 1){
        return s.substring(mid, mid+1);
    }else{
        return s.substring(mid-1, mid+1);
    }

}


console.log(solution("studyd"));
