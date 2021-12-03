// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let keyword;
let inputs = [];
let count = 0;
rl.on("line", function (line) {
  if (inputs.length !== 0) {
    keyword = line;
    rl.close();
  }
  if (inputs.length === 0) inputs = line.split("");
}).on("close", function () {
  inputs.forEach((element) => {
    element === keyword && count++;
  });

  console.log({ count });
  process.exit();
});
