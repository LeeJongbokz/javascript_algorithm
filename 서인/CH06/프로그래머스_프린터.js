// 중요도 높음 == 숫자 높음
// 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return
// 꺼내기는 가장 앞에 있는 문서 먼저 꺼내고, 
// 중요도가 높은 문서가 하나라도 있으면 먼저 꺼낸 거는 뒤로 보냄 아니면 꺼낸 문서 출력
// location -> 내가 출력하기 원하는 문서의 위치

// index 표시 필요

// -> 못 풀고 다른 사람 답안 참고

function solution(priorities, location) {
    var answer = 0;
    const pri = priorities.map((a,i) => [a,i]);
    const arr = [];

    for(let i = 0; i < pri.length ;){
        const temp = pri.shift();
        if( pri.some((a)=> temp[0]< a[0])) pri.push(temp);
        else {
            arr.push(temp);
            if(arr[answer][1] == location) break;
            else answer++;
        }
    }

    return answer+1;

}