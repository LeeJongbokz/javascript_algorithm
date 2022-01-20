
function solution(s, t){
    let answer=[];
    let pos = [];

    for(let i=0; i<s.length; i++){
        if(s[i] === t){
            pos.push(i);
        }
    }

    for(let i=0; i<s.length; i++){
        let minDistance = s.length;

        for(let j=0; j<pos.length; j++){
            minDistance = Math.min(minDistance, Math.abs(i-pos[j]));
        }

        answer.push(minDistance);
    }
     
    return answer;

}
            
let str="teachermode";
console.log(solution(str, 'e'))
