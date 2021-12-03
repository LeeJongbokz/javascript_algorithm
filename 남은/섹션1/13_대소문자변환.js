// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let answer = "";
rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input.forEach((str) => {
    //   대문자라면
    if (str.toUpperCase() === str && str.toLowerCase() !== str) {
      answer += str.toLowerCase();
    } else {
      answer += str.toUpperCase();
    }
  });

  console.log({ answer });
  process.exit();
});
