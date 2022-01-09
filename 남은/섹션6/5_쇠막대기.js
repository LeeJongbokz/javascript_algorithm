// 레이저 수
// 얼마나 많은 쇠 막대를 놓을 수 있는지
// (뒤에 바로 )나오면 레이저니까 여기엔 쇠 막대기가 올라올 수 없음

// 스택문제
// 여는 괄호를 만나면 무조건 스택에 푸쉬
// 닫는 괄호를 만나면 바로 앞을 보기
// 닫는 괄호 바로 앞이 여는 괄호면 레이저란 뜻
// 아니면 막대의 끝이라는 뜻

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
