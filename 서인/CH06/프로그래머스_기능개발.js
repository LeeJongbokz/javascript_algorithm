// 앞에 꺼가 100이 되야 들어갈 수 있음
// 일단 첫 번째 요소가 100이 되는 시점에 그 다음 것이 100이 되는 지를 확인해야 함
// 첫 번째 요소가 100이 될 때까지 일단 첫 번째 배열에 두 번째 배열의 숫자를 더해줘야함
function solution(progresses, speeds) {
    var answer = [];
    if (progresses.length === 0 || speeds.length === 0) return answer;

    let p2 = 0;

    for (let i = p2; i < progresses.length; i++){
        let cnt = 0;
        while (progresses[i] < 100){
            for (let j = p2; j < progresses.length; j++){
                progresses[j] += speeds[j]
            }
        }
        for (let j = p2; j < progresses.length; j++){
            if (progresses[j] >= 100) { p2++; cnt++; }
            if (progresses[j] < 100) break;
        }
        if (cnt !== 0) answer.push(cnt)
    }
    
    return answer;
}