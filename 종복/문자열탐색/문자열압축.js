function solution(s){

    let answer = "";
    let word = s[0];
    let cnt = 1; 

    for(let i=1; i<s.length; i++){

        if(s[i-1] === s[i]){
            cnt += 1;
        }else{
            if(cnt === 1){
                answer += word;
                word = s[i];
            }else{
              answer += word;
              answer += String(cnt);
              cnt = 1;
              word = s[i];
            } 

            if(i === s.length - 1){
                if(cnt !== 1){
                    answer += word;
                    answer += String(cnt);
                }else{
                    answer += s[i];
                }
            }
        }
    }
    return answer; 

}

let str="KKHSSSSSSSE";
console.log(solution(str));
