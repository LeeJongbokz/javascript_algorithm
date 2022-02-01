function solution(need, plan){
    let answer="YES";
    let arr = [];

    for(let i=0; i<need.length; i++){
        let word = need[i];
        let pos = b.indexOf(word);
        arr.push(pos);
    }

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < arr[i+1]){
            continue;
        }else{
            answer = "NO";
        }
    }


    return answer;
}

let a="CAB";
let b="CBDAGE";
console.log(solution(a, b));
