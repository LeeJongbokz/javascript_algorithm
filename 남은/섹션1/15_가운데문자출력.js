// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
//  단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  answer = "",
  leng;
rl.on("line", function (line) {
  input = line.split("");
  leng = input.length;
  rl.close();
}).on("close", function () {
  // 짝수일 때
  if (leng % 2 === 0) {
    answer = input[Number(leng / 2 - 1)] + input[Number(leng / 2)];
  } else {
    answer = input[Number(Math.floor(leng / 2))];
  }

  console.log({ answer });
  process.exit();
});
