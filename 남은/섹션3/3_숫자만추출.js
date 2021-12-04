// 받은 인풋에서 숫자만 추출, 추출한 숫자로 자연수 만들기

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
  let num = input.replace(/[^0-9]/g, "");
  num = parseInt(num, 10);

  console.log({ num });
  process.exit();
});
