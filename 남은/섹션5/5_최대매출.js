// big=0으로 초기화
// standardDay 만큼 더한 값이 big보다 크면 ++하고 인덱스 다음으로 이동
// 아니면 그냥 인덱스 다음으로 이동

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let standardDay = 0,
  big = 0,
  answer = 0;
const input = [];
rl.on("line", function (line) {
  if (standardDay !== 0) {
    line.split(" ").map((item) => input.push(Number(item)));
  }
  if (input.length === 0) standardDay = Number(line.split(" ")[1]);
  if (input.length !== 0) rl.close();
}).on("close", function () {
  let start = 0;
  while (start < input.length) {
    let total = (days = 0);

    for (let index = start; index < input.length; index++) {
      total += input[index];
      days++;
      if (days > standardDay) {
        // total = 0;
        break;
      }
      if (days === standardDay && total > big) {
        big = total;
        answer = big;
        // total = 0;
        break;
      }
    }

    start++;
  }

  console.log({ answer });
  process.exit();
});
