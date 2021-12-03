// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  input = input.toUpperCase();
  console.log({ input });
  process.exit();
});
