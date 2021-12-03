// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let answer = 0;
rl.on("line", function (line) {
  input = Number(line);

  rl.close();
}).on("close", function () {
  for (let index = 0; index <= input; index++) {
    answer = answer + index;
  }
  console.log({ answer });
  process.exit();
});
