// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
let count = 0,
  idx = 0;
rl.on("line", function (line) {
  if (count !== 0 && !inputs.includes(line)) inputs.push(line);
  if (count === 0) count = Number(line);
  if (idx === count) rl.close();
  idx++;
}).on("close", function () {
  console.log({ inputs });

  process.exit();
});
