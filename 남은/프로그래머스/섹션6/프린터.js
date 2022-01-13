// https://programmers.co.kr/learn/courses/30/lessons/42587

// 중요도가 높은 문서를 먼저 인쇄
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

// const priorities = [2, 1, 3, 2];
// const location = 2;
// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0;
const priorities = [2, 4, 8, 2, 9, 3, 3]; //2
const location = 2;
// const priorities = [2, 4, 8, 2, 9, 3, 3]; //1
// const location = 4;

function solution(priorities, location) {
  var answer = 0;
  let changedIdx = location,
    printCount = 0;
  let big = Math.max(...priorities);
  let prioritiesCopy = [...priorities];

  // 시간 단축용 예외처리
  const standard = priorities[location];
  //   if (standard === big) {
  //     answer = 1;
  //     return 1;
  //   }

  priorities.forEach((elem, idx) => {
    const data = { value: elem, idx };
    priorities.splice(idx, 1, data);
  });

  //   priorities.forEach((elem, idx) => {
  //   for (let idx = 0; idx < leng; idx++) {
  while (priorities.length > 0) {
    const shifted = priorities.shift();
    const copy = prioritiesCopy.shift();
    // console.log({ shifted });

    if (shifted.value < big) {
      priorities.push(shifted);
      prioritiesCopy.push(copy);
    } else {
      printCount++;
      big = Math.max(...prioritiesCopy);
    }

    // if (shifted.idx === location && printCount > 0) {
    //   //   console.log({ printCount });
    //   answer = printCount;
    //   return answer;
    // }
    // console.log({ big });
    console.log({ printCount });
    // console.log({ priorities });
    // console.log({ prioritiesCopy });
  }

  return answer;
}

console.log(solution(priorities, location));
