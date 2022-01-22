// 10진수 N이 입력되면 2진수로 변환하여 출력 (재귀 사용)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
const answer = [];

const repeat = (num = input) => {
  const value = Math.floor(num / 2);
  const rest = num % 2;
  answer.unshift(rest);
  if (value < 2) {
    answer.unshift(value);
    console.log(answer.join(""));
    return;
  }
  repeat(value);
};

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  repeat(input);
  process.exit();
});
