// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요.
// (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  inputs = [],
  big = 0,
  answer = 0;
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ");
  if (count === 0) count = Number(line);
  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  // big initialize
  big = Number(inputs[0]);
  inputs.forEach((num, idx) => {
    if (big < Number(num) || idx === 0) {
      big = Number(num);
      answer++;
    }
  });

  console.log({ answer });
  process.exit();
});
