// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
// 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCount = 0,
  studentCount = 0,
  inputs = [];
const result = new Map();

rl.on("line", function (line) {
  if (testCount !== 0) inputs.push(line.split(" ").map((elem) => Number(elem)));
  if (testCount === 0) {
    studentCount = Number(line.split(" ")[0]);
    testCount = Number(line.split(" ")[1]);
  }

  if (inputs.length === testCount) rl.close();
}).on("close", function () {
  for (let index = 0; index < testCount; index++) {
    const element = inputs[index];
    // console.log({ element });
    element.forEach((elem, idx) => {
      const lowerStudents = [];
      console.log(`${idx}: ${elem}`);
      if (elem === 4) return;
      element.forEach((elem2, idx2) => {
        // console.log(elem, elem2);
        if (elem < elem2) lowerStudents.push(idx2);
      });
      // console.log(`${idx}: ${lowerStudents}`);
      // lowerStudents의 length===0이면 맵에 넣지 않는다.
      // if (lowerStudents.length === 0) return;
      // // 나머지는 맵에 넣고
      // if (result.has(idx)) {
      //   let arr = result.get(idx);
      //   result.set(idx, [...arr, ...lowerStudents]);
      // } else {
      //   result.set(idx, [...lowerStudents]);
      // }
      // 포문 다 돈 다음에
      // 맵에서 3번씩 나오면 그 조합 출력

      // console.log({ result });
    });
  }

  // console.log({ inputs });
  process.exit();
});
