// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진
// 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
// 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
// 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다.
// 틀린 문제는 0점으로 계산한다.

// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  answer = 0,
  combo = 1,
  inputs = [];
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ").map((num) => Number(num));
  if (count === 0) count = Number(line);
  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  inputs.forEach((item, idx) => {
    // console.log(`${idx}: ${combo}`);
    if (item === 1) {
      if (inputs[idx - 1] === 1) {
        combo++;
      } else {
        answer++;
      }

      //   item===0
    } else {
      answer = answer + combo;
      combo = 1;
    }
  });

  console.log({ answer });

  process.exit();
});
