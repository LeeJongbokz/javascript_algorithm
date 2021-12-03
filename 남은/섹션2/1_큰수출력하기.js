// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = [];
let count = 0,
  inputs = [];
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ");
  if (count === 0) count = Number(line);
  if (inputs.length === count) rl.close();
}).on("close", function () {
  inputs.forEach((num, idx) => {
    if (idx === 0 || Number(num) > Number(inputs[idx - 1])) {
      answer.push(Number(num));
    }
  });

  console.log(answer.join(" "));
  process.exit();
});
