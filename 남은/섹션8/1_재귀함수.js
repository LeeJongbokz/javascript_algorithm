// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
const answer = [];

const repeat = (num = 1) => {
  answer.push(num);
  if (num === input) return;
  repeat(num + 1);
};

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  repeat();
  console.log(answer.join(" "));
  process.exit();
});
