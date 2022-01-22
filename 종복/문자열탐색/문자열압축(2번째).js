function solution(s){
    let answer="";
    let cnt=1;

    for(let i=0; i<s.length; i++){

        if(i === 0){
            answer += s[i];
        }else{
            if(s[i-1] === s[i]){
                cnt += 1;
            }else{
                if(cnt === 1){
                    answer += s[i];
                }else{
                    answer += String(cnt);
                    answer += s[i];
                    cnt = 1;
                }
            }
        }
    }

    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));
