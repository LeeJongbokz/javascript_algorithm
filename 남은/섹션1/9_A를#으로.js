// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let input2 = "";
rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input.forEach((element) => {
    input2 = element === "A" ? input2 + "#" : input2 + element;
  });

  console.log({ input2 });
  process.exit();
});
