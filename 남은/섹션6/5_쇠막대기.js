// 레이저 수
// 얼마나 많은 쇠 막대를 놓을 수 있는지
// (뒤에 바로 )나오면 레이저니까 여기엔 쇠 막대기가 올라올 수 없음

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  rl.close();
}).on("close", function () {
  process.exit();
});
