// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  answer = "";
rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input.forEach((str) => {
    if (!answer.includes(str)) answer += str;
  });

  console.log({ answer });
  process.exit();
});
