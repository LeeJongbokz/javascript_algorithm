function solution(s, t){
    let answer=[];
    
    let pos = [];

    for(let i=0; i<s.length; i++){
        if(s[i] === t){
            pos.push(i);
        }
    }

    for(let i=0; i<s.length; i++){

        let min = Number.MAX_SAFE_INTEGER;

        for(let j=0; j<pos.length; j++){
            let dist = Math.abs(i-pos[j])
            if(dist < min){
                min = dist;
            }
        }
        answer.push(min);
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));
